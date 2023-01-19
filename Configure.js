DT_UploadResources();

options = ['Никто', ...Object.keys(DT_Units)];
boxes = [];

gameui = document.getElementById('gameui');
ui = document.getElementById('ui');
armyconf = document.getElementById('armyconf');

function arrayToHexString(arr) {
    let hexString = "";
    for (let i = 0; i < arr.length; i++) {
        let hexVal = Number(arr[i].value).toString(16);
        if (hexVal.length < 2) {
            hexVal = "0" + hexVal;
        }
        hexString += hexVal;
    }
    return hexString;
}

function hexStringToArray(hexString, arr) {
    for (let i = 0; i < arr.length; i++) {
        let hexVal = hexString.substring(i*2, i*2+2);
        arr[i].value = parseInt(hexVal, 16);
    }
    return arr;
}

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
            ohtml.setAttribute('value', i);
            ohtml.innerText = options[i];
            box.appendChild(ohtml);
        }        
        boxes.push(box);
        block.appendChild(box);
    }

    ui.prepend(block);
}

createLine('4', 'Арьергард:', DT_PlayerRear);
createLine('3', 'Форвард:', DT_PlayerForward);
createLine('2', 'Форвард (вр.):', DT_EnemyForward);
createLine('1', 'Арьергард (вр.):', DT_EnemyRear);

document.getElementById('start').addEventListener('click', function() {
    gameui.style.visibility = 'visible';
    ui.style.visibility = 'hidden';
    DT_ClearArmies();
    DT_ClearElements();
    player_units = [];
    enemy_units = [];

    for (let i = 0; i < 12; i++) {
        player_units.push(options[boxes[i].value]);
    }
    for (let i = 12; i < 24; i++) {
        enemy_units.push(options[boxes[i].value]);
    }

    console.log(player_units);
    DT_CreateArmy('player', player_units);
    DT_CreateArmy('enemy', enemy_units);

    DT_Parent = document.body;
    DT_StartTheBattle();
});

document.getElementById('shuffle').addEventListener('click', function() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].value = getRandomInt(options.length - 1) + 1;
    }
    armyconf.value = arrayToHexString(boxes);
});

document.getElementById('reset').addEventListener('click', function() {
    DT_ClearElements();
    DT_ClearArmies();
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].value = 0;
    }
    armyconf.value = arrayToHexString(boxes);
});

document.getElementById('finish').addEventListener('click', function() {
    gameui.style.visibility = 'hidden';
    ui.style.visibility = 'visible';
    DT_ClearElements();
    DT_ClearArmies();
});

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('change', (event) => { 
        armyconf.value = arrayToHexString(boxes);
    });
}

armyconf.addEventListener('change', (event) => { 
    hexStringToArray(armyconf.value, boxes);
});