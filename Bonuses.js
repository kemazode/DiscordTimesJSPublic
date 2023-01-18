/*
Файл для создания бонусов. 

Каждый бонус представляет отдельную функцию, которая принимает аргументы, 
в конце функции, необходимо (всегда) возвращать переменную hit, которая представляет собой совокупность
изменений для юнита target:
* stage - стадия триггера бонуса, 
	a) 'Attack' - во время атаки юнита с бонусом
	б) 'Defence' - во время атаки на юнита с бонусом
	г) 'Start' - один раз в начале битвы
	д) 'Ability' - пока не работает, не трогать

	stage нужен для того, чтобы определить на какой стадии триггерится бонус. Так,
	у вампира есть способность влияющая как на атаку, так и на защиту, поэтому,
	чтобы вызвать соответствующий эффект в зависимости от того, атакует ли он или
	защищается, нужно проверить переменную stage.

	Если бонус выполняется только на одной стадии, параметр учитывать не надо.

* attacker - номер атакующего юнита
* target - номер защищающегося юнита
* attacktype - тип атаки, применяемый атакующим юнитом (см. массивы внизу)
* hit - потенциальные изменения в хар-ки защищающего юнита после атаки

Доступные функции для взаимодействия с отрядами:

GetProperty(i, prop) - получить хар-ку prop у юнита с номером i. Названия хар-к
	соответствуют тем, что находятся в файле Units.json.
	* i - принимает значения attacker или target
	* prop - принимает значения "AttackBlow", "ProtectDeath", "Hits" и т. д.

SetState(i, name, emoji, frequency, f) - установить эффект для юнита с номером i, остальные аргументы:
	* i - принимает значения attacker или target
	* name - название эффекта
	* emoji - отображение в панели юнита
	* frequency - частота обовления состояния (вызова функции f), принимает значения:
		а) 'each turn' - каждый новых ход
		б) 'each move' - каждый ход (мув) отдельного юнита
	* f - функция, которая вызывается на каждый триггер, принимает аргумент unit (хар-ки юнита) 

	Пример использования бонуса с функцией SetState можно посмотреть на примере "Отравления" ассасина (BonusPoison).

GoOff(move, attacker, target, attacktype) - запустить событие от attacker для target с 
	типом атаки (если она подразумевается) attacktype.
	* move - принимает значения 'Hit' (ударить), 'Pass' (пропустить ход)
	
	С помощью этой функции реализованы бонусы "Проклятие смерти" (BonusGhost) и "Контратака" (BonusCounterblow)


Так как бонус выполняется на промежуточной стадии, перед "нормализацией" хар-к юнитов, вполне возможно,
что некоторые хар-ки будут отрицательные (например хп), поэтому при проверке "убит ли юнит" надо использовать
выражение 'hits < 0', а не 'hits === 0'.

Можно использовать вложенные бонусы (см. BonusGhost и BonusVampire)

В конце функции, необходимо (всегда) возвращать переменную hit, которая представляет собой совокупность
изменений для юнита target. 

После создания бонуса, необходимо его включить в игру через функцию (см. внизу)
CreateBonus(bonus, emoji, stage, callback), где
	* bonus - название бонуса
	* emoji - отображение бонуса на карточке юнита
	* stage - стадии на которых бонус триггерится (массив)
	* callback - функция бонуса

(если вы Сульфодиес, немедленно закройте файл и удалите папку)
*/

const PhysicalAttacks =       ['Strike', 'Blow', 'Shot'];
const PhysicalDamageAttacks = ['Strike', 'Blow', 'Shot'];

const MagicAttacks =       ['Bless', 'Curse', 'Draining Life', 'Curse of Death', 'Heal'];
const MagicDamageAttacks = ['Draining Life'];

const DamageAttacks = [...PhysicalDamageAttacks, ...MagicDamageAttacks];


// Attack bonus: the character inflicts damage by ignoring the opponent's defences
function BonusArmorIgnore(stage, attacker, target, attacktype, hit) {
	blow = GetProperty(attacker, 'AttackBlow');
	shot = GetProperty(attacker, 'AttackShot');

	if (PhysicalDamageAttacks.includes(attacktype)) {
		if (blow !==  null) {
			hit.Hits = -blow;
		} else if (shot !== null) {
			hit.Hits = -shot;
		}
	}

	return hit;
}

// Start bonus: on the first turn in a battle, the character gets tripled protection
function BonusSpearDefence(stage, attacker, target, attacktype, hit) {
    defb = GetProperty(attacker, 'DefenceBlow');
	defs = GetProperty(attacker, 'DefenceBlow');

	return {'DefenceBlow': defb * 3, 'DefenceShot': defs * 3};
}

// Defence bonus: only 70% of the enemy's blows pass through the character's defence
// (only physical damage counts)
function BonusEvasive(stage, attacker, target, attacktype, hit) {
	if (PhysicalDamageAttacks.includes(attacktype)) {
		hit.Hits *= 0.7;
    }

	return hit;
}

// Start and attack bonus: the character always gets the very first move in a battle, 
// and deals damage while ignoring the opponent's defences
function BonusArtillery(stage, attacker, target, attacktype, hit) {
	if (stage === 'Start') {
		return { 'Initiative': 50 };

	} else {
		return BonusArmorIgnore(stage, attacker, target, attacktype, hit);
	}
}

// Attack bonus: the character inflicts 10 damage on top of his attack anyway, ignoring any enemy defences
function BonusGodAnger(stage, attacker, target, attacktype, hit) {
	if (DamageAttacks.includes(attacktype)) {
		hit.Hits = hit.Hits - 10;
	}

	return hit;
}

// Attack bonus: the character inflicts 20 damage on top of his attack anyway, ignoring any enemy defences
function BonusGodStrike(stage, attacker, target, attacktype, hit) {
	if (DamageAttacks.includes(attacktype)) {
		hit.Hits = hit.Hits - 20;
	}

	return hit;
}

// Start bonus: on the first turn in a battle the character receives +1 manoeuvre
function BonusHorseAttack(stage, attacker, target, attacktype, hit) {
	return { Manevres: 1 };
}


// Defence bonus: the character is dead and therefore the arrows cause 70% less damage
function BonusDead(stage, attacker, target, attacktype, hit) {
	if (attacktype === 'Shot' || attacktype === 'Strike') {
		hit.Hits *= 0.3;
	}

	return hit;
}

// Attack and defence bonus: the Evil force allows the character to 
// ignore enemy armour, and absorbs 30% of the enemy's impact
function BonusVampire(stage, attacker, target, attacktype, hit) {
	if (stage === 'Attack') {
		return BonusArmorIgnore(stage, attacker, target, attacktype, hit);
	} else {
		if (PhysicalDamageAttacks.includes(attacktype)) {
			hit.Hits *= 0.7;
		}
	}

	return hit;
}

// Attack, defence and start bonus: the Evil force allows the character to 
// ignore enemy armour, and absorbs 30% of the enemy's impact, while on the first
// turn of battle the character gains +1 manoeuvre
function BonusOldVampire(stage, attacker, target, attacktype, hit) {
	if (stage === 'Start') {
		return { Manevres: 1 };

	} else if (stage === 'Attack') {
		return BonusArmorIgnore(stage, attacker, target, attacktype, hit);
	} else {
		if (PhysicalDamageAttacks.includes(attacktype)) {
			hit.Hits *= 0.7;
		}
	}

	return hit;
}

// Defence bonus: the character is invulnerable to physical weapons,
// and if killed, his rage takes the life of his killer
function BonusGhost(stage, attacker, target, attacktype, hit) {
	targetHits = GetProperty(target, 'Hits');

	hit = BonusUnvulnerabe(stage, attacker, target, attacktype, hit);

	// Supposedly the hit haven't been normalized at this point, so we 
	// use '<' instead of '===' 
	if (targetHits + hit.Hits <= 0)  {
		GoOff('Hit', target, attacker, 'Banish');
	}
	return hit;
}

// Defence bonus: the character loses only 1 life hit from any hit
function BonusUnvulnerabe(stage, attacker, target, attacktype, hit) {
	if (PhysicalDamageAttacks.includes(attacktype)) {
		hit.Hits = -1;
	}

	return hit;
}

function BonusCounterblow(stage, attacker, target, attacktype, hit) {
	if (attacktype === 'Blow') {
		GoOff('Hit', target, attacker, 'Blow');
	}
	return hit;
}

// Under construction
function BonusGarrison(stage, attacker, target, attacktype, hit) {
	return hit;
}

function BonusPoison(stage, attacker, target, attacktype, hit) {
    if (stage === 'Attack') {
        SetState(target, 'Poisoned', '🤢', 'each turn', function(unit) {
            unit.Hits = Math.round(unit.Hits - unit.InitialState.Hits * 0.15);
        });    
    } 
	return hit;
}

CreateBonus('ArmorIgnore',    '🗡️', ['Attack'],                     BonusArmorIgnore);
CreateBonus('SpearDefense',   '🛡️', ['Start'],                      BonusSpearDefence);
CreateBonus('Evasive',        '🌀', ['Defence'],                    BonusEvasive);
CreateBonus('Artillery',      '💥', ['Attack', 'Start'],            BonusArtillery);
CreateBonus('ArmyMedic',      '⚕️', ['Map'],                        null);
CreateBonus('GodAnger',       '⚡', ['Attack'],                     BonusGodAnger);
CreateBonus('GodStrike',      '🌩️', ['Attack'],                     BonusGodStrike);
CreateBonus('HorseAttack',    '🏇', ['Start'],                      BonusHorseAttack);
CreateBonus('Dead',           '☠️', ['Defence'],                    BonusDead);
CreateBonus('FastDead',       '☠️', ['Defence'],                    BonusDead);
CreateBonus('VampirsGist',    '🦇', ['Attack', 'Defence'],          BonusVampire);
CreateBonus('OldVampirsGist', '🦇', ['Attack', 'Defence', 'Start'], BonusOldVampire);
CreateBonus('Ghost',          '👻', ['Defence'],                    BonusGhost);
CreateBonus('Unvulnerabe',    '💀', ['Defence'],                    BonusUnvulnerabe);
CreateBonus('Counterblow',    '⚔️', ['Defence'],                    BonusCounterblow);
CreateBonus('Merchant',       '🪙', ['Map'],                        null);
CreateBonus('Garrison',       '🏰', ['Ability'],                    BonusGarrison);
CreateBonus('Poison',         '🐍', ['Attack'],                     BonusPoison);