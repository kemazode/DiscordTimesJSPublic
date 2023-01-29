BASE_PATH = ''; // for index.html

const EnemyRear     = [23, 22, 21, 20, 19, 18];
const EnemyForward  = [17, 16, 15, 14, 13, 12];
const PlayerForward = [0, 1, 2, 3, 4, 5];
const PlayerRear    = [6, 7, 8, 9, 10, 11]; 

const PlayerSide = 'player';
const EnemySide = 'enemy';
let CSSCards = [];

let Grids = {
    'table': { // picking table
        
    },
};

let UnitsNames = Object.keys(DT_Units);
let ActiveSide = null;
let ActiveTable = null;
let SelectedUnit = null;

const cssText = `
    .picking_grid {
        position: absolute;
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-auto-flow: column;
        gap: 3px;
        width: calc(100% - 64px);
        overflow: auto;
        top: 0;
        left: 0;
        margin: 32px;
    }

    .grid_pr_${EnemySide}, .grid_pr_${PlayerSide} {
        display: grid;
        position: absolute;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(2, 1fr);
        writing-mode: tb;
        gap: 5px;
        bottom: 0;
        left: 0;
        margin: 32px;
    }

    .grid_pr_${EnemySide} {
        --border-color: #fba7b5;
        /*box-shadow: 0 0 20px 1px palevioletred;*/
    }

    .grid_pr_${PlayerSide} {
        --border-color: lightgreen;
       /*box-shadow: 0 0 20px 1px lightgreen;*/
    }
    
    .icon_pr {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        min-width: 32px;
        min-height: 32px;
        border-radius: 50%;
        border: solid 1px;
    }

    .card_pr {
        background-color: rgba(255, 255, 255, 0.2);
        border: solid 2px var(--border-color);
        border-radius: 50%;
        border: solid, 1px;
    }

    .icon_pk {
        box-shadow: 1px 1px 4px 0px black;
        border-radius: 50%;
        margin: 5px;
    }

    .card_pk {
        display: inline;
    }

    .selected_pr {
        filter: opacity(50%);
        transition: 0.1s;
    }
`;

function CreatePreviewGrids(side) {
	function createCard(id) {
		img = document.createElement('img');
		img.classList.add('icon_pr');
		img.setAttribute('number',`${id}`);

		// Container
		let card = document.createElement('div');

		card.classList.add('card_pr');

        card.append(img);

		return card;
	}

	grid = document.createElement('div');
	grid.classList.add('grid_pr_' + side);

	// The order is important
    orderedArmy = [];

    if (side === PlayerSide) {
	    orderedArmy = [...PlayerForward, ...PlayerRear];
    } else {
        orderedArmy = [...EnemyForward, ...EnemyRear]; 
    }
	 
	for (let i = 0; i < ARMY_SIZE; i++) {
		// Icon of the unit		
        pos = orderedArmy[i];
		card = createCard(pos);
        img = card.children[0];

        img.addEventListener('click', (event) => { 
            el = event.target;
            n = Number(el.getAttribute('number'));

            if (SelectedUnit === null && DT_IsThereUnit(DT_Armies[n])) {
                console.log('There is a unit');
                SelectedUnit = n;
                el.classList.add('selected_pr');

            } else if (SelectedUnit === n) {
                SelectedUnit = null;
                el.classList.remove('selected_pr');
            } else if (SelectedUnit !== null) {
                DT_SwapUnits([SelectedUnit], [n], true);
                DT_PlaySFX('Slide');
                RefreshCard(SelectedUnit);
                RefreshCard(n);
                prevcard = CSSCards[SelectedUnit];
                previmg = prevcard.children[0];
                previmg.classList.remove('selected_pr');
                SelectedUnit = null;
            }
        });

        img.addEventListener('contextmenu', (event) => {
            el = event.target;
            n = Number(el.getAttribute('number'));
            if (DT_IsThereUnit(DT_Armies[n])) {
                DT_RemoveUnit(DT_Armies[n]);
                RefreshCard(n);
            }
        });

		grid.appendChild(card);
		CSSCards[pos] = card;
		//RefreshElement(orderedArmy[i]);
	}
 
	Grids[side] = grid;
}

function CreatePickingGrid(nature, property = null) {
    function createCard(unitname) {
		img = document.createElement('img');
		img.classList.add('icon_pk');
        img.setAttribute('unitname',`${unitname}`);

		// Container
		let card = document.createElement('div');
		card.classList.add('card_pk');
        card.append(img);

		return card;
	}

    grid = document.createElement('div');
	grid.classList.add('picking_grid'); 

    for (const k in DT_Units) {
        u = DT_Units[k];
        if (u.Nature === nature && (property === null || property in u)) {
            card = createCard(k);
            img = card.children[0];

            img.addEventListener('click', (event) => {
                element = event.target;
                uname = element.getAttribute('unitname');
                pos = DT_AddUnit(ActiveSide, uname);
                if (pos !== null) {
                    DT_PlaySFX('Pick');
                    RefreshCard(pos);
                } 
            });

            imgurl = DT_Resources['icons'][u.GlobalIndex].src;
            img.style.width = '92px';
            img.style.height = '92px';
            img.style.setProperty('background-repeat', 'no-repeat');
            img.style.setProperty('background-size', 'cover');
            img.style.setProperty('background-image', `url(${imgurl})`);

            grid.appendChild(card);
        }
    }

    subclass = (property === null)? '' : ' ' + property;

    Grids['table'][nature + subclass] = grid;
    return grid;
}

function SwitchTable(nature) {
    ActiveTable = nature;
    for (const k in Grids['table']) {
        Grids['table'][k].style.visibility = (k === nature)? 'visible' : 'hidden';
    }

}

function GetRandomArmy() {
    units = [];
    for (let i = 0; i < ARMY_SIZE; i++) {
        units.push(UnitsNames[getRandomInt(UnitsNames.length)]);
    }
    return units;
}

function togglePreview(side) {
    element = Grids[side];
    SelectedUnit = null;

    if (element.style.visibility === "hidden") {
      element.style.visibility = "visible";
      ActiveSide = side;
      RefreshGrid(side);
    } else {
      element.style.visibility = "hidden";
    }
  }

function TurnUIOff() {
    Grids.table[ActiveTable].style.visibility = 'hidden';
    Grids[ActiveSide].style.visibility = 'hidden';
}

function TurnUIOn() {
    Grids[ActiveSide].style.visibility = 'visible';
    Grids.table[ActiveTable].style.visibility = 'visible';
}

function main() {
    DT_UploadResources();
    const styleElement = document.createElement('style');
    styleElement.innerHTML = cssText;
    document.head.appendChild(styleElement);

    CreatePreviewGrids(PlayerSide);
    CreatePreviewGrids(EnemySide);

    CreatePickingGrid('Loyal', 'MagicPower');
    CreatePickingGrid('Loyal', 'AttackBlow');
    CreatePickingGrid('Loyal', 'AttackShot');
    CreatePickingGrid('Undead');
    CreatePickingGrid('Rogue');
    CreatePickingGrid('People');

    ActiveSide = PlayerSide;
    Grids[PlayerSide].style.visibility = 'hidden';
    Grids[EnemySide].style.visibility = 'hidden';

    ActiveTable = 'Loyal AttackBlow';
    Grids.table['Loyal AttackBlow'].style.visibility = 'hidden';
    Grids.table['Loyal AttackShot'].style.visibility = 'hidden';
    Grids.table['Loyal MagicPower'].style.visibility = 'hidden';
    Grids.table['Undead'].style.visibility = 'hidden';
    Grids.table['Rogue'].style.visibility = 'hidden';
    Grids.table['People'].style.visibility = 'hidden';

    player = [];
    enemy = [];

    for (let i = 0; i < ARMY_SIZE; i++) {
        player.push( '-1' ); // ~100
        enemy.push( '-1' );  // ~100
    }

    DT_CreateArmy('player', player);
    DT_CreateArmy('enemy', enemy);
}

function RefreshGrid(side) {
    orderedArmy = [];
    if (side === PlayerSide) {
	    orderedArmy = [...PlayerForward, ...PlayerRear];
    } else {
        orderedArmy = [...EnemyForward, ...EnemyRear]; 
    }
 
    for (let i = 0; i < orderedArmy.length; i++) {
        RefreshCard(orderedArmy[i]);
    }
}

function RefreshCard(i) {
    card = CSSCards[i];
    imgcss = card.children[0];

    u = DT_Armies[i];
    if (!u) {
        imgcss.style.removeProperty('background-image');
        return;
    }

    img = DT_Resources['icons'][u.GlobalIndex].src;
	imgcss.style.setProperty('background-size', 'cover');
	imgcss.style.setProperty('background-image', `url(${img})`);
}

main();