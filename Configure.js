DT_UploadResources();

options = ['Никто', ...Object.keys(DT_Units)];
boxes = [];

function createLine(name, label, units) {
    block = document.createElement('div');
    lhtml = document.createElement('label');
    lhtml.setAttribute('for', name + '0');
    lhtml.innerHTML = label +'<br>';

    block.appendChild(lhtml);

    for (let j = 0; j < units.length; j++) {
        box = document.createElement('select');
        box.setAttribute('name', name + String(j));

        for (let i = 0; i < options.length; i++) {
            ohtml = document.createElement('option')
            ohtml.setAttribute('value', options[i]);
            ohtml.innerText = options[i];
            box.appendChild(ohtml);
        }        

        block.appendChild(box);
    }

    document.body.prepend(block);
}

createLine('4', 'Арьергард:', DT_PlayerRear);
createLine('3', 'Форвард:', DT_PlayerForward);
createLine('2', 'Форвард (вр.):', DT_EnemyForward);
createLine('1', 'Арьергард (вр.):', DT_EnemyRear);

document.getElementById('start').addEventListener('click', function() {
    DT_ClearArmies();
    DT_ClearElements();
    player_units = [];
    enemy_units = [];

    for (let j = 0; j < 6; j++) {
        box = document.getElementsByName('3' + j)[0];
        player_units.push(box.value);
    }
    for (let j = 0; j < 6; j++) {
        box = document.getElementsByName('4' + j)[0];
        player_units.push(box.value);
    }
    for (let j = 0; j < 6; j++) {
        box = document.getElementsByName('2' + j)[0];
        enemy_units.push(box.value);
    }
    for (let j = 0; j < 6; j++) {
        box = document.getElementsByName('1' + j)[0];
        enemy_units.push(box.value);
    }

    console.log(player_units);
    DT_CreateArmy('player', player_units);
    DT_CreateArmy('enemy', enemy_units);

    DT_Parent = document.body;
    DT_StartTheBattle();
});

document.getElementById('shuffle').addEventListener('click', function() {
    for (let j = 0; j < 6; j++) {
        box = document.getElementsByName('3' + j)[0];
        box.value = options[getRandomInt(options.length)];
    }
    for (let j = 0; j < 6; j++) {
        box = document.getElementsByName('4' + j)[0];
        box.value = options[getRandomInt(options.length)];
    }
    for (let j = 0; j < 6; j++) {
        box = document.getElementsByName('2' + j)[0];
        box.value = options[getRandomInt(options.length)];
    }
    for (let j = 0; j < 6; j++) {
        box = document.getElementsByName('1' + j)[0];
        box.value = options[getRandomInt(options.length)];
    }
});

document.getElementById('reset').addEventListener('click', function() {
    DT_ClearElements();
    DT_ClearArmies();
    for (let j = 0; j < 6; j++) {
        box = document.getElementsByName('3' + j)[0];
        box.value = options[0];
    }
    for (let j = 0; j < 6; j++) {
        box = document.getElementsByName('4' + j)[0];
        box.value = options[0];
    }
    for (let j = 0; j < 6; j++) {
        box = document.getElementsByName('2' + j)[0];
        box.value = options[0];
    }
    for (let j = 0; j < 6; j++) {
        box = document.getElementsByName('1' + j)[0];
        box.value = options[0];
    }
});