const _0xdf2eff=_0xb437;(function(_0x4c2c81,_0x3645b9){const _0x5cb4be=_0xb437,_0x1e72df=_0x4c2c81();while(!![]){try{const _0x50dff4=parseInt(_0x5cb4be(0x180))/0x1*(-parseInt(_0x5cb4be(0x1c7))/0x2)+-parseInt(_0x5cb4be(0x1b6))/0x3*(-parseInt(_0x5cb4be(0x150))/0x4)+-parseInt(_0x5cb4be(0x1a0))/0x5+-parseInt(_0x5cb4be(0x15f))/0x6+parseInt(_0x5cb4be(0x193))/0x7*(-parseInt(_0x5cb4be(0x16c))/0x8)+-parseInt(_0x5cb4be(0x16b))/0x9*(parseInt(_0x5cb4be(0x1ba))/0xa)+parseInt(_0x5cb4be(0x1d9))/0xb;if(_0x50dff4===_0x3645b9)break;else _0x1e72df['push'](_0x1e72df['shift']());}catch(_0x6dbc2d){_0x1e72df['push'](_0x1e72df['shift']());}}}(_0x3cd7,0x1ef50));const ARMY_SIZE=0xc,DT_Bonuses={'Attack':[],'Defence':[],'Turn':[],'Start':[],'Ability':[],'Map':[]},DT_BonusCallbacks={},DT_BonusEmojis={},DT_RestorableCharacteristics=[_0xdf2eff(0x1d0),_0xdf2eff(0x1c6),_0xdf2eff(0x195),_0xdf2eff(0x177),_0xdf2eff(0x182),_0xdf2eff(0x13d),_0xdf2eff(0x1e2),_0xdf2eff(0x1da)];let DT_ArmiesInitialState=[],DT_Armies=[],DT_RelicsInUse=[];const DT_EnemyRear=[0x17,0x16,0x15,0x14,0x13,0x12],DT_EnemyForward=[0x11,0x10,0xf,0xe,0xd,0xc],DT_PlayerForward=[0x0,0x1,0x2,0x3,0x4,0x5],DT_PlayerRear=[0x6,0x7,0x8,0x9,0xa,0xb],DT_LineLength=0x6;let DT_Parent=null,DT_Resources={'icons':{},'sfx':{},'projectile':null,'cursed':null},DT_Grid=null,DT_CSSCards=[],DT_ImgWidth=_0xdf2eff(0x1ad),DT_ImgHeight=_0xdf2eff(0x1ad),DT_ActiveUnit=null,DT_PlayerWon=![],DT_EnemyWon=![],DT_LockCallback=![],DT_BattleIsOverCalled=![],DT_ActiveStates=[],TurnCounter=0x0;function CreateBonus(_0xe93671,_0x5d250f,_0x2036cd,_0x567a8c){DT_BonusCallbacks[_0xe93671]=_0x567a8c,DT_BonusEmojis[_0xe93671]=_0x5d250f;for(const _0x316db1 of _0x2036cd){DT_Bonuses[_0x316db1]['push'](_0xe93671);}}function GetProperty(_0x21e61c,_0x5905d8){return pos=Math['abs'](_0x21e61c),_0x5905d8 in DT_Armies[pos]?DT_Armies[pos][_0x5905d8]:null;}function SetState(_0x8266bd,_0x519c79,_0x462f45,_0x607a48,_0x48d44d){const _0x172c94=_0xdf2eff;if(_0x8266bd<0x0)return;t=DT_Armies[_0x8266bd];if(!(_0x519c79 in DT_ActiveStates))DT_ActiveStates[_0x519c79]={'emoji':_0x462f45,'frequency':_0x607a48,'f':_0x48d44d,'sufferers':[t]};else!DT_ActiveStates[_0x519c79]['sufferers'][_0x172c94(0x14f)](t)&&DT_ActiveStates[_0x519c79][_0x172c94(0x1ea)][_0x172c94(0x178)](t);}function GoOff(_0x571bde,_0x26a0e7,_0x26b757,_0x2ee0e5){const _0x19be4c=_0xdf2eff;if(_0x26a0e7<0x0||_0x26b757<0x0)return;if(_0x571bde==='Hit')DT_CSSCards[_0x26b757][_0x19be4c(0x1bc)][_0x19be4c(0x1ec)](new CustomEvent(_0x19be4c(0x1e7),{'detail':{'type':_0x19be4c(0x170),'attacker':DT_Armies[_0x26a0e7],'target':DT_Armies[_0x26b757],'attacktype':_0x2ee0e5}}));else _0x571bde===_0x19be4c(0x155)&&DT_CSSCards[_0x26b757]['card']['dispatchEvent'](new CustomEvent(_0x19be4c(0x1e7),{'detail':{'type':_0x19be4c(0x155),'target':DT_Armies[_0x26b757]}}));}function getRandomInt(_0x20301){const _0x45f182=_0xdf2eff;return Math[_0x45f182(0x163)](Math[_0x45f182(0x1e9)]()*_0x20301);}function _0xb437(_0x41a68c,_0x4a9e6c){const _0x3cd706=_0x3cd7();return _0xb437=function(_0xb43795,_0x55e009){_0xb43795=_0xb43795-0x13d;let _0x52ed71=_0x3cd706[_0xb43795];return _0x52ed71;},_0xb437(_0x41a68c,_0x4a9e6c);}function DT_GetRandomArmy(){const _0x2218e4=_0xdf2eff;let _0x2db03d=[];for(let _0x14ac69=0x0;_0x14ac69<ARMY_SIZE;_0x14ac69++){ind=getRandomInt(0x64);for(const _0x366a95 in DT_Units)if(DT_Units[_0x366a95][_0x2218e4(0x16e)]===ind)_0x2db03d[_0x2218e4(0x178)](_0x366a95);}return _0x2db03d;}function DT_GetUnitNumber(_0x19472e){const _0x25c0a9=_0xdf2eff;for(let _0x26860c=0x0;_0x26860c<DT_CSSCards[_0x25c0a9(0x156)];_0x26860c++){if(DT_Armies[_0x26860c]===_0x19472e)return _0x26860c;}return null;}function _0x3cd7(){const _0x145e9e=['remove','1311373pvAZaI','Shot','DefenceBlow','play','🛡️\x20','The\x20DT_IsReachableFor\x20hasn\x27t\x20been\x20adapted\x20for\x20this\x20army\x20size','🗡️\x20','object','<span\x20style=\x22position:absolute;top:calc(100%\x20-\x202.4em);left:\x20calc(100%\x20-\x202.4em);\x22>','div','New\x20Turn','projectile.png','linear-gradient(to\x20top,\x20var(--bloodcoloralpha)\x20','450345rsEyPu','<span\x20style=\x22position:absolute;top:calc(100%\x20-\x202.4em);\x22>💨\x20','ProtectLife','right','tPos','target','priority','Nature','string','sfx/heal.wav','contextmenu','style','Magic','108px','MagicPower','forEach','Win','key','--timeout','Undead','),\x20','ProtectDeath','6glNrLU','&nbsp;','sfx/curseofdeath.wav','setProperty','10WPQELc','src','card','activeunit','Position','Bless','width','InitialState','<span\x20style=\x22float:right;color:blue;\x22>','contains','Loyal','target-bless','AttackBlow','120bIocGS','Curse','MagicDirection','Hits','classList','projectile','dimgrey','Lose','createElement','AttackShot','sfx/strike.wav','green','Bonus','background-size','number','addEventListener','LifeMagic','innerHTML','5809364wasufC','Manevres','Blow','Defence','add','sfx','stats','<span\x20style=\x22float:right;color:','Activate','Cursed','background-repeat','background-image','aPos','height','Action','<br>&nbsp;<span\x20style=\x22text-align:right;font-size:1.3em;color:','random','sufferers','log','dispatchEvent','abs','ToAlly','pri','Attack','#FFD700','Draining\x20Life','bottom','crimson','card-back','Blessed','blue','shift','splice','Start','aliveunit','target-move',';\x22>','orange','img','🥲\x20','deadunit','Death','sfx/dtbless.wav','</span>','emptyslot','steelblue','red','includes','469124elHFHN','click','Not\x20equal\x20groups\x20of\x20units\x20are\x20being\x20swaped!','no-repeat','.png','Pass','length','keyup','attacker','emoji','round','Curse\x20of\x20Death','player','sfx/swordblow.wav','icons/img_','842856mSZofY','Banish','🪄\x20','type','floor','ProtectElemental','Specify\x20a\x20parent\x20node\x20to\x20attach','ToEnemy','icons','sfx/shot.wav','each\x20move','--x','1518678tSoolv','8tyHman','cursed','GlobalIndex','getBoundingClientRect','Hit','attacktype','ToAll','Elemental','toggle','target-shot','Heal','DefenceShot','push','flipped','descr','slice','left','atype','mediumseagreen','Move','821kMKamP','pause','Initiative','removeEventListener','sfx/losetheme.mp3','black','assign','sfx/dtcurse.wav','</span><br>','currentTime','skull.gif','appendChild','detail','Strike','<span\x20style=\x22color:','<br>','top','frequency'];_0x3cd7=function(){return _0x145e9e;};return _0x3cd7();}function DT_GetElementID(_0x5dece7){const _0x548f4e=_0xdf2eff;for(let _0x5c941e=0x0;_0x5c941e<DT_CSSCards[_0x548f4e(0x156)];_0x5c941e++){if(DT_CSSCards[_0x5c941e]['card']===_0x5dece7)return _0x5c941e;}return null;}function DT_ApplyBonus(_0xde1835,_0x1ce859,_0x4aa641=null,_0x5753e5=null,_0x1e9f13=null){const _0x71d43b=_0xdf2eff;let _0x56ba21=DT_Armies[Math[_0x71d43b(0x1ed)](_0x1ce859)],_0x1823a8=DT_Armies[Math[_0x71d43b(0x1ed)](_0x5753e5)];if(_0xde1835===_0x71d43b(0x1dc)){if(_0x1823a8===null)return _0x4aa641;bonus=_0x1823a8[_0x71d43b(0x1d3)];}else{if(_0x56ba21===null)return _0x4aa641;bonus=_0x56ba21[_0x71d43b(0x1d3)];}if(DT_Bonuses[_0xde1835][_0x71d43b(0x14f)](bonus)&&DT_BonusCallbacks[bonus]!==null)return DT_BonusCallbacks[bonus](_0xde1835,_0x1ce859,_0x5753e5,_0x1e9f13,_0x4aa641);return _0x4aa641;}function DT_AttachHit(_0x2195f4,_0x12d7b4){const _0x35c048=_0xdf2eff;if(_0x12d7b4===null)return;DT_NormalizeHit(_0x2195f4,_0x12d7b4);for(const _0x35c544 in _0x12d7b4){if(typeof _0x12d7b4[_0x35c544]===_0x35c048(0x1d5)&&_0x35c544 in _0x2195f4)_0x2195f4[_0x35c544]+=_0x12d7b4[_0x35c544];else _0x2195f4[_0x35c544]=_0x12d7b4[_0x35c544];}DT_RefreshElement(_0x2195f4[_0x35c048(0x1be)]);}function DT_NormalizeHit(_0x4d9e81,_0x316eaf){const _0x596ad1=_0xdf2eff;if(_0x316eaf===null)return;for(const _0x212abf in _0x316eaf){if(typeof _0x316eaf[_0x212abf]===_0x596ad1(0x1d5)&&_0x316eaf[_0x212abf]<0x0&&_0x4d9e81[_0x212abf]+_0x316eaf[_0x212abf]<0x0)_0x316eaf[_0x212abf]=-_0x4d9e81[_0x212abf];}_0x596ad1(0x1ca)in _0x316eaf&&(_0x316eaf[_0x596ad1(0x1ca)]+_0x4d9e81[_0x596ad1(0x1ca)]>_0x4d9e81[_0x596ad1(0x1c1)]['Hits']&&(_0x316eaf['Hits']=_0x4d9e81[_0x596ad1(0x1c1)][_0x596ad1(0x1ca)]-_0x4d9e81[_0x596ad1(0x1ca)]),_0x316eaf['Hits']=Math[_0x596ad1(0x15a)](_0x316eaf[_0x596ad1(0x1ca)]));}function DT_ComputeUnitValue(_0x1af686){const _0x2c0f32=_0xdf2eff;if(!DT_IsThereUnit(_0x1af686))return 0x0;const _0x405e09=_0x1af686[_0x2c0f32(0x1c1)];let _0x316042=_0x405e09[_0x2c0f32(0x1ca)],_0x244355=_0x405e09[_0x2c0f32(0x1da)],_0x1a05be=_0x405e09[_0x2c0f32(0x182)],_0xd477a=_0x2c0f32(0x195)in _0x405e09?_0x405e09[_0x2c0f32(0x195)]:0x0,_0x4acf04=_0x2c0f32(0x177)in _0x405e09?_0x405e09[_0x2c0f32(0x177)]:0x0,_0x3e2064=_0x2c0f32(0x1b5)in _0x405e09?_0x405e09['ProtectDeath']:0x0,_0x33fb31=_0x2c0f32(0x1a2)in _0x405e09?_0x405e09[_0x2c0f32(0x1a2)]:0x0,_0x4c5979='ProtectElemental'in _0x405e09?_0x405e09[_0x2c0f32(0x164)]:0x0,_0x131d09=_0x2c0f32(0x1c6)in _0x405e09?_0x405e09[_0x2c0f32(0x1c6)]:0x0,_0x5322ed='AttackShot'in _0x405e09?_0x405e09['AttackShot']:0x0,_0x1e9f9e=_0x2c0f32(0x1ae)in _0x405e09?_0x405e09['MagicPower']:0x0;return _0x316042*(0x1+(_0xd477a+_0x4acf04)/0x64+(_0x33fb31+_0x3e2064+_0x4c5979)/0x12c)+(_0x131d09+_0x5322ed+_0x1e9f9e)*(0x2+_0x1a05be/0xa)*_0x244355;}function DT_ComputeUnitsPriority(_0x2a16c6,_0x40a8b5){const _0x5b0922=_0xdf2eff;let _0x20c72d=DT_Armies[_0x2a16c6],_0x4846b5=DT_Armies[_0x40a8b5],_0x455a93=DT_GetPossibleAttack(_0x2a16c6,_0x40a8b5),_0x271f40={'priority':0x0,'attacktype':_0x455a93};if(_0x455a93===null)return _0x271f40;let _0x19075d=DT_IsPlayersUnit(_0x20c72d)?DT_PlayerForward[_0x5b0922(0x17b)]():DT_EnemyForward[_0x5b0922(0x17b)]();_0x19075d[_0x5b0922(0x140)](DT_GetUnitNumberInLine(_0x2a16c6),0x1);if(_0x455a93!==null&&_0x455a93!==_0x5b0922(0x17f)){_0x271f40[_0x5b0922(0x1a6)]=0x64,_0x271f40[_0x5b0922(0x171)]=_0x455a93;let _0x1f9d77=DT_ComputeUnitValue(_0x4846b5);_0x271f40[_0x5b0922(0x1a6)]+=_0x1f9d77;let _0x1d6bea=DT_CalculateHit(_0x20c72d,_0x4846b5,_0x455a93);_0x1d6bea=DT_ApplyBonus(_0x5b0922(0x1f0),-_0x2a16c6,_0x1d6bea,-_0x40a8b5,_0x455a93),_0x1d6bea=DT_ApplyBonus(_0x5b0922(0x1dc),-_0x2a16c6,_0x1d6bea,-_0x40a8b5,_0x455a93),DT_NormalizeHit(_0x4846b5,_0x1d6bea),_0x4846b5[_0x5b0922(0x1ca)]+_0x1d6bea[_0x5b0922(0x1ca)]===0x0&&(_0x271f40[_0x5b0922(0x1a6)]+=0x3e8),actual=_0x1bfeca=>_0x1bfeca in _0x1d6bea?Math[_0x5b0922(0x1ed)](_0x1d6bea[_0x1bfeca]):0x0,_0x271f40[_0x5b0922(0x1a6)]+=(actual(_0x5b0922(0x1ca))+actual(_0x5b0922(0x177))/0x2+actual('DefenceBlow')/0x2+actual(_0x5b0922(0x1c6))/0x2+actual(_0x5b0922(0x1d0))/0x2)*(_0x1f9d77/0xa)+actual(_0x5b0922(0x1da))*_0x1f9d77+0x64*actual(_0x5b0922(0x1e2));}else{if(_0x455a93===_0x5b0922(0x17f)){if(_0x5b0922(0x1c6)in _0x20c72d&&DT_IsRearPosition(_0x2a16c6))_0x271f40[_0x5b0922(0x1a6)]+=DT_IsForwardPosition(_0x40a8b5)?0xc8:-0xc8;else(_0x5b0922(0x1d0)in _0x20c72d||_0x5b0922(0x1ae)in _0x20c72d)&&DT_IsForwardPosition(_0x2a16c6)&&DT_AreThereOccupiedPosition(_0x19075d)&&(_0x271f40[_0x5b0922(0x1a6)]+=DT_IsRearPosition(_0x40a8b5)?0x320:-0x320);}}return _0x271f40;}function DT_GetUnitNumberInLine(_0x158429){return _0x158429<ARMY_SIZE?_0x158429%DT_LineLength:DT_LineLength-0x1-_0x158429%DT_LineLength;}function DT_PlaySFX(_0xe6386b){const _0xac78c4=_0xdf2eff;DT_Resources[_0xac78c4(0x1de)][_0xe6386b][_0xac78c4(0x181)](),DT_Resources[_0xac78c4(0x1de)][_0xe6386b][_0xac78c4(0x189)]=0x0,DT_Resources[_0xac78c4(0x1de)][_0xe6386b][_0xac78c4(0x196)]();}function DT_AnimationDeath(_0x2573ab){const _0x1a1a98=_0xdf2eff;DT_CSSCards[_0x2573ab][_0x1a1a98(0x1bc)][_0x1a1a98(0x1cb)]['add'](_0x1a1a98(0x148)),setTimeout(function(){const _0x555533=_0x1a1a98;DT_CSSCards[_0x2573ab][_0x555533(0x1bc)][_0x555533(0x1cb)]['remove']('deadunit');},0x1f4);}function DT_AnimationHit(_0x5586d5,_0x55ebbf,_0x197fb5){const _0x3f5364=_0xdf2eff;let _0x39c6a1=1.5,_0x4e9dbf=new Image();const _0xbbfb39=DT_CSSCards[_0x55ebbf][_0x3f5364(0x146)][_0x3f5364(0x16f)](),_0x56ca3d=DT_CSSCards[_0x5586d5][_0x3f5364(0x146)][_0x3f5364(0x16f)](),_0x29ed79=0x40,_0x29abe4={'left':(_0x56ca3d[_0x3f5364(0x17c)]+_0x56ca3d[_0x3f5364(0x1a3)]-_0x29ed79)/0x2,'top':(_0x56ca3d[_0x3f5364(0x190)]+_0x56ca3d[_0x3f5364(0x1f3)]-_0x29ed79)/0x2},_0x10f860={'left':(_0xbbfb39[_0x3f5364(0x17c)]+_0xbbfb39[_0x3f5364(0x1a3)]-_0x29ed79)/0x2,'top':(_0xbbfb39['top']+_0xbbfb39[_0x3f5364(0x1f3)]-_0x29ed79)/0x2};let _0x3865fb=_0x10f860['left']-_0x29abe4['left'],_0x20c8c0=_0x10f860[_0x3f5364(0x190)]-_0x29abe4[_0x3f5364(0x190)];const _0x3a181b=Math['sqrt'](_0x3865fb*_0x3865fb+_0x20c8c0*_0x20c8c0);let _0x411e99=_0x3a181b/_0x39c6a1;return _0x4e9dbf[_0x3f5364(0x1bb)]=DT_Resources['projectile'][_0x3f5364(0x1bb)],_0x4e9dbf['style'][_0x3f5364(0x17c)]=_0x29abe4[_0x3f5364(0x17c)]+'px',_0x4e9dbf['style'][_0x3f5364(0x190)]=_0x29abe4[_0x3f5364(0x190)]+'px',_0x4e9dbf['style']['setProperty'](_0x3f5364(0x16a),_0x3865fb+'px'),_0x4e9dbf['style']['setProperty']('--y',_0x20c8c0+'px'),_0x4e9dbf['style']['setProperty'](_0x3f5364(0x1b2),_0x411e99+'ms'),_0x4e9dbf[_0x3f5364(0x1cb)][_0x3f5364(0x1dd)]('projectile'),DT_Parent[_0x3f5364(0x18b)](_0x4e9dbf),setTimeout(()=>{_0x4e9dbf['remove']();},_0x411e99),_0x411e99;}function getCellsBetweenPoints(_0x40081d,_0x5aa441){const _0x2b9c25=_0xdf2eff;var _0x23b01d=[],_0x5e4610=_0x40081d['x'],_0x17b622=_0x40081d['y'],_0x671684=_0x5aa441['x'],_0xc94a03=_0x5aa441['y'],_0x579679=Math[_0x2b9c25(0x1ed)](_0x671684-_0x5e4610),_0x37ddec=Math[_0x2b9c25(0x1ed)](_0xc94a03-_0x17b622),_0x5ca655=_0x5e4610<_0x671684?0x1:-0x1,_0x3a6b62=_0x17b622<_0xc94a03?0x1:-0x1,_0x162fa1=_0x579679-_0x37ddec;_0x23b01d[_0x2b9c25(0x178)]({'y':_0x17b622,'x':_0x5e4610});while(!(_0x5e4610===_0x671684&&_0x17b622===_0xc94a03)){var _0x4dde8b=_0x162fa1<<0x1;_0x4dde8b>-_0x37ddec&&(_0x162fa1-=_0x37ddec,_0x5e4610+=_0x5ca655),_0x4dde8b<_0x579679&&(_0x162fa1+=_0x579679,_0x17b622+=_0x3a6b62),_0x23b01d[_0x2b9c25(0x178)]({'y':_0x17b622,'x':_0x5e4610});}return _0x23b01d;}function DT_IsBattleOver(){return DT_EnemyWon=!DT_AreThereOccupiedPosition(DT_PlayerForward)&&!DT_AreThereOccupiedPosition(DT_PlayerRear),DT_PlayerWon=!DT_AreThereOccupiedPosition(DT_EnemyForward)&&!DT_AreThereOccupiedPosition(DT_EnemyRear),DT_EnemyWon||DT_PlayerWon;}function DT_AIMove(){const _0x4f2383=_0xdf2eff;!DT_IsPlayersUnit(DT_ActiveUnit)&&(DT_AIPerformAction(),DT_ActiveUnit['Manevres']-=0x1,DT_RefreshElement(DT_ActiveUnit[_0x4f2383(0x1be)]));}function DT_AIPerformAction(){const _0x5d9f62=_0xdf2eff;let _0x39c7c2=null;for(let _0x4de19f=0x0;_0x4de19f<DT_CSSCards['length'];_0x4de19f++){pri=DT_ComputeUnitsPriority(DT_ActiveUnit[_0x5d9f62(0x1be)],_0x4de19f),pri[_0x5d9f62(0x171)]!==null&&(_0x39c7c2===null||pri[_0x5d9f62(0x1a6)]>_0x39c7c2[_0x5d9f62(0x1ef)])&&(_0x39c7c2={'pri':pri[_0x5d9f62(0x1a6)],'tPos':_0x4de19f,'atype':pri[_0x5d9f62(0x171)]});}_0x39c7c2!==null?DT_CSSCards[_0x39c7c2['tPos']][_0x5d9f62(0x1bc)][_0x5d9f62(0x1ec)](new CustomEvent(_0x5d9f62(0x1e7),{'detail':{'type':_0x5d9f62(0x170),'attacker':DT_ActiveUnit,'target':DT_Armies[_0x39c7c2[_0x5d9f62(0x1a4)]],'attacktype':_0x39c7c2[_0x5d9f62(0x17d)]}})):DT_CSSCards[DT_ActiveUnit[_0x5d9f62(0x1be)]][_0x5d9f62(0x1bc)][_0x5d9f62(0x1ec)](new CustomEvent(_0x5d9f62(0x1e7),{'detail':{'type':_0x5d9f62(0x155),'target':DT_ActiveUnit}}));}function findNextLowerInitiative(_0x14a9aa){const _0x334bfa=_0xdf2eff;let _0x1205fd=null;for(const _0x16f870 of DT_Armies){DT_IsUnitEngaged(_0x16f870)&&_0x16f870[_0x334bfa(0x182)]<=_0x14a9aa&&(_0x1205fd===null||_0x16f870[_0x334bfa(0x182)]>=_0x1205fd[_0x334bfa(0x182)])&&(_0x1205fd=_0x16f870);}return _0x1205fd;}function DT_ArePositionAllies(_0xcf9c44,_0x4da796){return _0xcf9c44<ARMY_SIZE&&_0x4da796<ARMY_SIZE||_0xcf9c44>=ARMY_SIZE&&_0x4da796>=ARMY_SIZE;}function DT_IsForwardPosition(_0x166500){const _0x7ecb0f=_0xdf2eff;return DT_EnemyForward[_0x7ecb0f(0x14f)](_0x166500)||DT_PlayerForward[_0x7ecb0f(0x14f)](_0x166500);}function DT_IsRearPosition(_0x3913b7){const _0x1b2979=_0xdf2eff;return DT_EnemyRear[_0x1b2979(0x14f)](_0x3913b7)||DT_PlayerRear[_0x1b2979(0x14f)](_0x3913b7);}function DT_AreThereOccupiedPosition(_0x25b6df){for(const _0xc7587a of _0x25b6df){if(_0xc7587a!==null&&DT_IsThereUnit(DT_Armies[_0xc7587a]))return!![];}return![];}function DT_DoesMagicAffect(_0x4e4e65,_0x3d0aa8){const _0x74be50=_0xdf2eff;return DT_ArePositionAllies(_0x4e4e65['Position'],_0x3d0aa8[_0x74be50(0x1be)])?(magictype=_0x4e4e65[_0x74be50(0x1ac)][_0x74be50(0x17b)](0x0,-0x5),magictype===_0x74be50(0x149)&&_0x3d0aa8[_0x74be50(0x1a7)]===_0x74be50(0x1b3)||magictype!=='Death'&&_0x3d0aa8[_0x74be50(0x1a7)]!==_0x74be50(0x1b3)):!![];}function DT_IsThereUnit(_0x21379f){return _0x21379f!==null&&_0x21379f['Hits']>0x0;}function DT_IsPlayersUnit(_0x169e93){const _0x202c57=_0xdf2eff;return _0x169e93[_0x202c57(0x1be)]<ARMY_SIZE;}function DT_IsUnitEngaged(_0x5c5e3b){const _0x28a7a0=_0xdf2eff;return _0x5c5e3b!==null&&_0x5c5e3b[_0x28a7a0(0x1da)]>0x0&&_0x5c5e3b[_0x28a7a0(0x1ca)]>0x0;}function DT_GetPossibleAttack(_0x531139,_0x4e8540){const _0x25f263=_0xdf2eff;a=DT_Armies[_0x531139],t=DT_Armies[_0x4e8540];let _0x1d5e47=null;if(DT_IsThereUnit(a)&&DT_IsThereUnit(t)&&typeof DT_CSSCards[_0x531139]===_0x25f263(0x19a)){hitPath=DT_GetPossiblePath(_0x531139,_0x4e8540);if(hitPath[_0x25f263(0x156)]===0x0)return null;let _0x280c26=DT_IsPlayersUnit(a)?DT_EnemyForward[_0x25f263(0x17b)]():DT_PlayerForward[_0x25f263(0x17b)](),_0x2743bb=0x0;for(const _0x12086a of hitPath){if(DT_IsThereUnit(DT_Armies[_0x12086a])&&!DT_ArePositionAllies(_0x531139,_0x12086a))_0x2743bb++;}let _0x10986e=DT_GetUnitNumberInLine(_0x531139),_0x3cabc2=_0x10986e-0x1<0x0?null:_0x280c26[_0x10986e-0x1],_0x3d815d=_0x280c26[_0x10986e],_0x360ee9=_0x10986e+0x1>=_0x280c26[_0x25f263(0x156)]?null:_0x280c26[_0x10986e+0x1],_0x1d236d=DT_IsForwardPosition(_0x531139)&&DT_AreThereOccupiedPosition([_0x3cabc2,_0x3d815d,_0x360ee9]),_0x4be88d=Math[_0x25f263(0x1ed)](_0x10986e-DT_GetUnitNumberInLine(_0x4e8540))<0x2&&DT_IsForwardPosition(_0x4e8540)&&_0x1d236d;if(!DT_ArePositionAllies(_0x531139,_0x4e8540)){if(_0x25f263(0x1c6)in a&&DT_IsForwardPosition(_0x531139)){if(_0x4be88d===!![])_0x1d5e47='Blow';else!_0x1d236d&&DT_IsForwardPosition(_0x4e8540)&&_0x2743bb<0x2&&(_0x1d5e47='Blow');}else{if(_0x25f263(0x1d0)in a){if(DT_IsRearPosition(_0x531139))_0x1d5e47=a[_0x25f263(0x16e)]===0x18||a[_0x25f263(0x16e)]===0x19?_0x25f263(0x18d):'Shot';else{if(_0x4be88d===!![])_0x1d5e47=a[_0x25f263(0x16e)]===0x18||a['GlobalIndex']===0x19?'Strike':'Shot';else!_0x1d236d&&_0x2743bb<0x2&&(_0x1d5e47=a['GlobalIndex']===0x18||a[_0x25f263(0x16e)]===0x19?_0x25f263(0x18d):_0x25f263(0x194));}}else{if(!_0x1d236d&&_0x25f263(0x1ae)in a&&(a[_0x25f263(0x1c9)]===_0x25f263(0x166)||a[_0x25f263(0x1c9)]===_0x25f263(0x172))&&DT_DoesMagicAffect(a,t)){if(t[_0x25f263(0x1e2)]===!![])_0x1d5e47=_0x25f263(0x1f2);else a[_0x25f263(0x1a7)]==='Undead'?_0x1d5e47='Curse\x20of\x20Death':_0x1d5e47=_0x25f263(0x1c8);}}}}else{if(_0x25f263(0x1ae)in a&&(a[_0x25f263(0x1c9)]===_0x25f263(0x1ee)||a[_0x25f263(0x1c9)]===_0x25f263(0x172))&&DT_DoesMagicAffect(a,t)){if(t[_0x25f263(0x1ca)]<t['InitialState'][_0x25f263(0x1ca)])_0x1d5e47=_0x25f263(0x176);else t['Blessed']===![]&&(_0x1d5e47=_0x25f263(0x1bf));}}}else DT_IsThereUnit(a)&&DT_ArePositionAllies(_0x531139,_0x4e8540)&&typeof DT_CSSCards[_0x531139]==='object'&&(_0x1d5e47=_0x25f263(0x17f));return _0x1d5e47;}function DT_GetPossiblePath(_0x3e9e07,_0x5b4adb){const _0x3328b8=_0xdf2eff;table=[DT_EnemyRear,DT_EnemyForward,DT_PlayerForward,DT_PlayerRear];if(ARMY_SIZE!==0xc)return console[_0x3328b8(0x1eb)](_0x3328b8(0x198)),[];const _0x57262f={'aPos':{'x':null,'y':null},'tPos':{'x':null,'y':null}};for(let _0x3d7f89=0x0;_0x3d7f89<table['length'];_0x3d7f89++){for(let _0x5947f2=0x0;_0x5947f2<table[_0x3d7f89][_0x3328b8(0x156)];_0x5947f2++){table[_0x3d7f89][_0x5947f2]===_0x3e9e07&&(_0x57262f[_0x3328b8(0x1e5)]['x']=_0x5947f2,_0x57262f[_0x3328b8(0x1e5)]['y']=_0x3d7f89),table[_0x3d7f89][_0x5947f2]===_0x5b4adb&&(_0x57262f['tPos']['x']=_0x5947f2,_0x57262f['tPos']['y']=_0x3d7f89);}}let _0x5771d0=[],_0x56f792=getCellsBetweenPoints(_0x57262f[_0x3328b8(0x1e5)],_0x57262f['tPos']);for(const _0x581895 of _0x56f792){_0x5771d0['push'](table[_0x581895['y']][_0x581895['x']]);}return _0x5771d0;}function DT_CallbackFlipCard(_0x2178b6){const _0x11d334=_0xdf2eff;_0x2178b6['preventDefault']();if(!this[_0x11d334(0x1cb)][_0x11d334(0x1c3)](_0x11d334(0x1bd)))this['classList'][_0x11d334(0x174)]('flipped');}function DT_CallbackAction(_0x33bafd){const _0x357986=_0xdf2eff;let _0x28c508=_0x357986(0x158)in _0x33bafd[_0x357986(0x18c)]?_0x33bafd[_0x357986(0x18c)][_0x357986(0x158)]:null,_0x1253a6=_0x357986(0x1a5)in _0x33bafd[_0x357986(0x18c)]?_0x33bafd[_0x357986(0x18c)][_0x357986(0x1a5)]:null,_0x331eb7=_0x1253a6===null?DT_GetElementID(this):_0x1253a6[_0x357986(0x1be)],_0x433ffb=_0x33bafd[_0x357986(0x18c)][_0x357986(0x171)],_0x1dd68e=0x0,_0x1a1f99=![],_0x938b6=function(){};if(DT_IsBattleOver()){DT_BattleIsOver();return;}if(_0x33bafd[_0x357986(0x18c)][_0x357986(0x162)]===_0x357986(0x1e1)){DT_GiveMoveTo(_0x1253a6),DT_LockCallback=![];if(!DT_IsPlayersUnit(DT_ActiveUnit))DT_AIMove();return;}if(_0x33bafd[_0x357986(0x18c)]['type']===_0x357986(0x170)&&DT_IsThereUnit(_0x28c508))_0x938b6=function(){const _0x5a9d91=_0x357986;_0x433ffb==='Move'?(DT_SwapUnits([_0x28c508['Position']],[_0x331eb7],DT_Armies),DT_PlaySFX(_0x433ffb)):(hit=DT_CalculateHit(_0x28c508,_0x1253a6,_0x433ffb),hit=DT_ApplyBonus(_0x5a9d91(0x1f0),_0x28c508[_0x5a9d91(0x1be)],hit,_0x331eb7,_0x433ffb),hit=DT_ApplyBonus(_0x5a9d91(0x1dc),_0x28c508['Position'],hit,_0x331eb7,_0x433ffb),DT_AttachHit(_0x1253a6,hit),DT_PlaySFX(_0x433ffb));if(!DT_AreThereOccupiedPosition(DT_PlayerForward))DT_SwapUnits(DT_PlayerForward,DT_PlayerRear);else!DT_AreThereOccupiedPosition(DT_EnemyForward)&&DT_SwapUnits(DT_EnemyForward,DT_EnemyRear);},_0x1dd68e=DT_AnimationHit(_0x28c508[_0x357986(0x1be)],_0x331eb7,_0x433ffb);else{if(_0x33bafd[_0x357986(0x18c)][_0x357986(0x162)]==='New\x20Turn')_0x938b6=function(){const _0x2d0962=_0x357986;_0x1a1f99=!![],TurnCounter++,DT_CheckStates('each\x20turn');for(const _0x2515bb of DT_Armies){if(DT_IsThereUnit(_0x2515bb)){for(const _0x44b255 of DT_RestorableCharacteristics){if(_0x44b255 in _0x2515bb[_0x2d0962(0x1c1)])_0x2515bb[_0x44b255]=_0x2515bb[_0x2d0962(0x1c1)][_0x44b255];else delete _0x2515bb[_0x44b255];}TurnCounter===0x1&&(hit=DT_ApplyBonus(_0x2d0962(0x141),_0x2515bb[_0x2d0962(0x1be)]),DT_AttachHit(_0x2515bb,hit)),TurnCounter>0x3&&_0x2d0962(0x1ae)in _0x2515bb&&_0x2515bb[_0x2d0962(0x1ae)]>0xf&&(_0x2515bb[_0x2d0962(0x1ae)]=_0x2515bb[_0x2d0962(0x1ae)]-0x2<0xf?0xf:_0x2515bb['MagicPower']-0x2),DT_RefreshElement(_0x2515bb[_0x2d0962(0x1be)]);}}};else{}}setTimeout(function(){const _0x1a706d=_0x357986;_0x938b6(),DT_CheckStates(_0x1a706d(0x169));let _0x4dfd5c=DT_ActiveUnit;(!DT_IsUnitEngaged(_0x4dfd5c)||_0x1a1f99)&&(_0x4dfd5c=findNextLowerInitiative(Infinity)),_0x4dfd5c!==null?DT_CSSCards[_0x4dfd5c[_0x1a706d(0x1be)]][_0x1a706d(0x1bc)][_0x1a706d(0x1ec)](new CustomEvent('Action',{'detail':{'type':_0x1a706d(0x1e1),'target':_0x4dfd5c}})):DT_CSSCards[0x0][_0x1a706d(0x1bc)][_0x1a706d(0x1ec)](new CustomEvent(_0x1a706d(0x1e7),{'detail':{'type':_0x1a706d(0x19d),'target':0x0}}));},_0x1dd68e);}function DT_Callback(){const _0x2c28b6=_0xdf2eff;if(DT_LockCallback===!![]||!DT_IsPlayersUnit(DT_ActiveUnit))return;let _0x17d5e4=DT_GetElementID(this),_0xb2de77=DT_Armies[_0x17d5e4];attacktype=DT_GetPossibleAttack(DT_ActiveUnit['Position'],_0x17d5e4);if(attacktype!==null&&DT_ActiveUnit[_0x2c28b6(0x1da)]>0x0)DT_LockCallback=!![],DT_ActiveUnit[_0x2c28b6(0x1da)]-=0x1,DT_RefreshElement(DT_ActiveUnit[_0x2c28b6(0x1be)]),DT_CSSCards[_0x17d5e4]['card'][_0x2c28b6(0x1ec)](new CustomEvent('Action',{'detail':{'type':_0x2c28b6(0x170),'attacker':DT_ActiveUnit,'target':_0xb2de77,'attacktype':attacktype}}));else DT_ActiveUnit===_0xb2de77&&(DT_LockCallback=!![],DT_ActiveUnit[_0x2c28b6(0x1da)]-=0x1,DT_RefreshElement(DT_ActiveUnit['Position']),DT_CSSCards[DT_ActiveUnit['Position']][_0x2c28b6(0x1bc)]['dispatchEvent'](new CustomEvent(_0x2c28b6(0x1e7),{'detail':{'type':_0x2c28b6(0x155),'target':DT_ActiveUnit}})));}function DT_CallbackSpace(_0x33fe41){const _0x21ab6d=_0xdf2eff;if(DT_LockCallback===!![]||!DT_IsPlayersUnit(DT_ActiveUnit))return;_0x33fe41[_0x21ab6d(0x1b1)]==='\x20'&&(DT_LockCallback=!![],DT_ActiveUnit[_0x21ab6d(0x1da)]-=0x1,DT_RefreshElement(DT_ActiveUnit[_0x21ab6d(0x1be)]),DT_CSSCards[DT_ActiveUnit[_0x21ab6d(0x1be)]][_0x21ab6d(0x1bc)][_0x21ab6d(0x1ec)](new CustomEvent('Action',{'detail':{'type':'Pass','target':DT_ActiveUnit}})));}function DT_CalculateHit(_0x3f58ec,_0x1a0a49,_0x24d565){const _0x120e64=_0xdf2eff;gained={'Hits':0x0};let _0x237fba;switch(_0x24d565){case _0x120e64(0x1db):def='DefenceBlow'in _0x1a0a49?_0x1a0a49['DefenceBlow']:0x0,dmg=_0x3f58ec['AttackBlow']-def>0x0?_0x3f58ec['AttackBlow']-def:0x1,gained[_0x120e64(0x1ca)]-=dmg;break;case _0x120e64(0x18d):case _0x120e64(0x194):def=_0x120e64(0x177)in _0x1a0a49?_0x1a0a49[_0x120e64(0x177)]:0x0,dmg=_0x3f58ec['AttackShot']-def>0x0?_0x3f58ec[_0x120e64(0x1d0)]-def:0x1,gained[_0x120e64(0x1ca)]-=dmg;break;case _0x120e64(0x176):gained[_0x120e64(0x1ca)]+=_0x3f58ec['MagicPower'];break;case'Curse\x20of\x20Death':case _0x120e64(0x1c8):gained['Cursed']=!![],_0x237fba=_0x3f58ec[_0x120e64(0x1ac)][_0x120e64(0x17b)](0x0,-0x5),restype='Protect'+_0x237fba;let _0x252445=_0x3f58ec[_0x120e64(0x1ae)];restype in _0x1a0a49&&(_0x252445=Math['round'](_0x3f58ec[_0x120e64(0x1ae)]*(0x1-_0x1a0a49[restype]/0x64)));defdown=Math[_0x120e64(0x15a)](_0x252445*0.2);_0x120e64(0x195)in _0x1a0a49&&(gained['DefenceBlow']=-defdown);_0x120e64(0x177)in _0x1a0a49&&(gained[_0x120e64(0x177)]=-defdown);attdown=Math['round'](_0x252445*0.1);_0x120e64(0x1c6)in _0x1a0a49&&(gained[_0x120e64(0x1c6)]=-attdown);_0x120e64(0x1d0)in _0x1a0a49&&(gained['AttackShot']=-attdown);_0x237fba===_0x120e64(0x173)&&(gained[_0x120e64(0x1da)]=_0x252445>=0x32?-0x2:_0x252445>=0x19?-0x1:0x0,gained[_0x120e64(0x182)]=-Math[_0x120e64(0x15a)](_0x252445/0xa));break;case _0x120e64(0x1bf):gained[_0x120e64(0x13d)]=!![],defup=Math[_0x120e64(0x15a)](_0x3f58ec[_0x120e64(0x1ae)]*0.34),gained[_0x120e64(0x195)]=defup,gained[_0x120e64(0x177)]=defup,attup=Math[_0x120e64(0x15a)](_0x3f58ec['MagicPower']*0.2);'AttackBlow'in _0x1a0a49&&(gained['AttackBlow']=attup);'AttackShot'in _0x1a0a49&&(gained[_0x120e64(0x1d0)]=attup);break;case _0x120e64(0x1f2):let _0x273d73=0x1;_0x237fba=_0x3f58ec[_0x120e64(0x1ac)][_0x120e64(0x17b)](0x0,-0x5),restype='Protect'+_0x237fba;restype in _0x1a0a49&&(_0x273d73-=_0x1a0a49[restype]/0x64);let _0x9ee791=0x1;_0x1a0a49[_0x120e64(0x1a7)]===_0x120e64(0x1b3)&&_0x237fba==='Life'&&(_0x9ee791=0x2);gained[_0x120e64(0x1ca)]=-(_0x3f58ec['MagicPower']*_0x273d73*_0x9ee791);break;case _0x120e64(0x160):gained[_0x120e64(0x1ca)]=-_0x1a0a49['Hits'];break;default:break;}return gained;}function DT_CheckStates(_0x52fa65){const _0x36ce4c=_0xdf2eff;for(const _0x34c1fa in DT_ActiveStates){if(DT_ActiveStates[_0x34c1fa][_0x36ce4c(0x191)]===_0x52fa65)for(const _0x1e84ae of DT_ActiveStates[_0x34c1fa][_0x36ce4c(0x1ea)]){DT_ActiveStates[_0x34c1fa]['f'](_0x1e84ae),DT_RefreshElement(_0x1e84ae['Position']);}}}function DT_SwapUnits(_0x2eeb09,_0x21b745){const _0xaa1218=_0xdf2eff;_0x2eeb09[_0xaa1218(0x156)]!==_0x21b745['length']&&console[_0xaa1218(0x1eb)](_0xaa1218(0x152));for(let _0x3a215c=0x0;_0x3a215c<_0x2eeb09[_0xaa1218(0x156)];_0x3a215c++){let _0x533732=_0x21b745[_0x3a215c],_0x51b58b=_0x2eeb09[_0x3a215c],_0x2cc1e6=DT_Armies[_0x533732];DT_Armies[_0x533732]=DT_Armies[_0x51b58b],DT_Armies[_0x51b58b]=_0x2cc1e6,DT_Armies[_0x533732]!==null&&(DT_Armies[_0x533732]['Position']=_0x533732),DT_Armies[_0x51b58b]!==null&&(DT_Armies[_0x51b58b][_0xaa1218(0x1be)]=_0x51b58b),DT_RefreshElement(_0x51b58b),DT_RefreshElement(_0x533732);}}function DT_GiveMoveTo(_0x521ca1){const _0x889a7f=_0xdf2eff;DT_ActiveUnit=_0x521ca1;const _0x4251f8={'Blow':_0x889a7f(0x175),'Shot':_0x889a7f(0x175),'Curse':_0x889a7f(0x175),'Curse\x20of\x20Death':_0x889a7f(0x175),'Draining\x20Life':'target-shot','Strike':_0x889a7f(0x175),'Heal':_0x889a7f(0x1c5),'Bless':'target-bless','Move':_0x889a7f(0x143)};for(let _0x1b9ae0=0x0;_0x1b9ae0<DT_CSSCards[_0x889a7f(0x156)];_0x1b9ae0++){attacktype=DT_GetPossibleAttack(DT_ActiveUnit['Position'],_0x1b9ae0);let _0x369045=DT_CSSCards[_0x1b9ae0][_0x889a7f(0x1bc)]['classList'];_0x369045[_0x889a7f(0x192)](_0x889a7f(0x175),_0x889a7f(0x1c5),'target-move',_0x889a7f(0x1bd)),attacktype!==null&&DT_IsPlayersUnit(DT_ActiveUnit)&&_0x369045['add'](_0x4251f8[attacktype]);}DT_CSSCards[DT_ActiveUnit[_0x889a7f(0x1be)]]['card']['classList'][_0x889a7f(0x192)](_0x889a7f(0x179)),DT_CSSCards[DT_ActiveUnit[_0x889a7f(0x1be)]]['card'][_0x889a7f(0x1cb)]['add'](_0x889a7f(0x1bd));}function DT_BattleIsOver(){const _0x2dc231=_0xdf2eff;if(DT_BattleIsOverCalled===!![])return;DT_BattleIsOverCalled=!![];if(DT_PlayerWon===!![])DT_PlaySFX(_0x2dc231(0x1b0));else DT_PlaySFX(_0x2dc231(0x1ce));for(const _0x2e1efc of DT_CSSCards){_0x2e1efc[_0x2dc231(0x1bc)]['classList'][_0x2dc231(0x192)](_0x2dc231(0x1bd));}DT_DeleteListeners();}function DT_AddUnitToArmy(_0x1f5443,_0x4d1005){}function DT_CreateArmy(_0x191442,_0x5d7ee6){const _0x11ee03=_0xdf2eff;let _0x52f3f7=_0x191442===_0x11ee03(0x15c)?[...DT_PlayerForward,...DT_PlayerRear]:[...DT_EnemyForward,...DT_EnemyRear];for(const _0x59ded5 of _0x52f3f7){naming=_0x5d7ee6[_0x11ee03(0x13f)]();if(!(naming in DT_Units)){DT_Armies[_0x59ded5]=null;continue;}DT_Armies[_0x59ded5]=Object[_0x11ee03(0x186)]({},DT_Units[naming]),DT_Armies[_0x59ded5][_0x11ee03(0x13d)]=![],DT_Armies[_0x59ded5][_0x11ee03(0x1e2)]=![],DT_Armies[_0x59ded5][_0x11ee03(0x1be)]=_0x59ded5,!(_0x11ee03(0x1a7)in DT_Armies[_0x59ded5])&&(DT_Armies[_0x59ded5]['Nature']=_0x11ee03(0x1c4)),DT_ArmiesInitialState[_0x59ded5]=Object[_0x11ee03(0x186)]({},DT_Armies[_0x59ded5]),DT_Armies[_0x59ded5][_0x11ee03(0x1c1)]=DT_ArmiesInitialState[_0x59ded5];}}function DT_SetUpRelics(_0x595626,_0x25a6de){const _0x599ddb=_0xdf2eff;if(_0x595626===_0x599ddb(0x15c))for(let _0x57d888=0x0;_0x57d888<ARMY_SIZE;_0x57d888++){typeof _0x25a6de[_0x57d888]==='string'?DT_RelicsInUse[_0x57d888]=Object['assign']({},DT_Relics[_0x25a6de[_0x57d888]]):DT_RelicsInUse[_0x57d888]=0x0;}else{if(_0x595626==='enemy')for(let _0xb2d053=ARMY_SIZE;_0xb2d053<ARMY_SIZE*0x2;_0xb2d053++){typeof _0x25a6de[_0xb2d053-ARMY_SIZE]===_0x599ddb(0x1a8)?DT_RelicsInUse[_0xb2d053]=Object[_0x599ddb(0x186)]({},DT_Relics[_0x25a6de[_0xb2d053-ARMY_SIZE]]):DT_RelicsInUse[_0xb2d053]=0x0;}}for(let _0x2a8501=0x0;_0x2a8501<DT_CSSCards[_0x599ddb(0x156)];++_0x2a8501){}}function DT_CreateElements(){const _0x55fa86=_0xdf2eff;function _0xfbaa1e(_0x16f447){const _0x48bd07=_0xb437;img=document[_0x48bd07(0x1cf)](_0x48bd07(0x146)),img[_0x48bd07(0x1cb)][_0x48bd07(0x1dd)]('icon'),stats=document['createElement']('div'),stats[_0x48bd07(0x1cb)][_0x48bd07(0x1dd)](_0x48bd07(0x1df)),descr=document[_0x48bd07(0x1cf)](_0x48bd07(0x19c)),descr['classList'][_0x48bd07(0x1dd)]('descr');let _0x4a56f8=document[_0x48bd07(0x1cf)]('div'),_0x3ffd67=document[_0x48bd07(0x1cf)](_0x48bd07(0x19c));_0x3ffd67['classList'][_0x48bd07(0x1dd)]('card-front');let _0x1aba94=document[_0x48bd07(0x1cf)](_0x48bd07(0x19c));return _0x1aba94[_0x48bd07(0x1cb)]['add'](_0x48bd07(0x1f5)),_0x3ffd67[_0x48bd07(0x18b)](img),_0x3ffd67[_0x48bd07(0x18b)](stats),_0x1aba94[_0x48bd07(0x18b)](descr),_0x4a56f8[_0x48bd07(0x18b)](_0x3ffd67),_0x4a56f8[_0x48bd07(0x18b)](_0x1aba94),_0x4a56f8['setAttribute']('id','slot-'+_0x16f447),_0x4a56f8[_0x48bd07(0x1cb)][_0x48bd07(0x1dd)](_0x48bd07(0x1bc)),{'card':_0x4a56f8,'img':img,'stats':stats,'descr':descr};}grid=document[_0x55fa86(0x1cf)](_0x55fa86(0x19c)),grid['classList'][_0x55fa86(0x1dd)]('dtgrid'),orderedArmy=[...DT_EnemyRear,...DT_EnemyForward,...DT_PlayerForward,...DT_PlayerRear];for(let _0x41aa60=0x0;_0x41aa60<ARMY_SIZE*0x2;_0x41aa60++){cw=_0xfbaa1e(orderedArmy[_0x41aa60]),grid[_0x55fa86(0x18b)](cw['card']),DT_CSSCards[orderedArmy[_0x41aa60]]=cw,DT_RefreshElement(orderedArmy[_0x41aa60]);}DT_Grid=grid,DT_Parent[_0x55fa86(0x18b)](grid);}function DT_AddListeners(){const _0x193553=_0xdf2eff;DT_Parent[_0x193553(0x1d6)]('keyup',DT_CallbackSpace),DT_CSSCards['forEach'](_0x5d6ec4=>{const _0xd9c2b7=_0x193553;_0x5d6ec4[_0xd9c2b7(0x1bc)][_0xd9c2b7(0x1d6)](_0xd9c2b7(0x151),DT_Callback),_0x5d6ec4[_0xd9c2b7(0x1bc)][_0xd9c2b7(0x1d6)]('Action',DT_CallbackAction),_0x5d6ec4[_0xd9c2b7(0x1bc)][_0xd9c2b7(0x1d6)](_0xd9c2b7(0x1aa),DT_CallbackFlipCard);});}function DT_DeleteListeners(){const _0x1b0ab9=_0xdf2eff;DT_Parent!==null&&DT_Parent[_0x1b0ab9(0x183)](_0x1b0ab9(0x157),DT_CallbackSpace),DT_CSSCards[_0x1b0ab9(0x1af)](_0x503af0=>{const _0x26d189=_0x1b0ab9;_0x503af0[_0x26d189(0x1bc)]['removeEventListener'](_0x26d189(0x151),DT_Callback),_0x503af0[_0x26d189(0x1bc)][_0x26d189(0x183)](_0x26d189(0x1e7),DT_CallbackAction),_0x503af0[_0x26d189(0x1bc)][_0x26d189(0x183)]('contextmenu',DT_CallbackFlipCard);});}function DT_RefreshElement(_0x18fbc4){const _0xaf2325=_0xdf2eff;cardwr=DT_CSSCards[_0x18fbc4],u=DT_Armies[_0x18fbc4];let _0x5b2a46=null;if(typeof cardwr===_0xaf2325(0x19a))_0x5b2a46=cardwr['card'][_0xaf2325(0x1cb)];else return;if(DT_IsThereUnit(u))_0x5b2a46[_0xaf2325(0x1dd)]('aliveunit'),_0x5b2a46['remove'](_0xaf2325(0x14c));else{_0x5b2a46[_0xaf2325(0x192)](_0xaf2325(0x142)),_0x5b2a46[_0xaf2325(0x1dd)]('emptyslot'),cardwr[_0xaf2325(0x146)][_0xaf2325(0x1ab)][_0xaf2325(0x1c0)]=DT_ImgWidth,cardwr[_0xaf2325(0x146)]['style'][_0xaf2325(0x1e6)]=DT_ImgHeight;return;}let _0x1ba97b=u['Nature']==='Rogue'?_0xaf2325(0x17e):u['Nature']==='Undead'?_0xaf2325(0x1f4):u[_0xaf2325(0x1a7)]==='People'?_0xaf2325(0x1cd):_0xaf2325(0x14d);cardwr['descr'][_0xaf2325(0x1d8)]=_0xaf2325(0x1e8)+_0x1ba97b+_0xaf2325(0x144)+u['Name']+_0xaf2325(0x188);_0xaf2325(0x1a2)in u&&(cardwr[_0xaf2325(0x17a)][_0xaf2325(0x1d8)]+=_0xaf2325(0x18f),cardwr[_0xaf2325(0x17a)][_0xaf2325(0x1d8)]+='🙏\x20'+u[_0xaf2325(0x1a2)]+'%');_0xaf2325(0x1b5)in u&&(cardwr['descr']['innerHTML']+='<br>',cardwr[_0xaf2325(0x17a)][_0xaf2325(0x1d8)]+='💀\x20'+u['ProtectDeath']+'%');_0xaf2325(0x164)in u&&(cardwr[_0xaf2325(0x17a)][_0xaf2325(0x1d8)]+=_0xaf2325(0x18f),cardwr[_0xaf2325(0x17a)]['innerHTML']+=_0xaf2325(0x161)+u[_0xaf2325(0x164)]+'%');cardwr[_0xaf2325(0x17a)][_0xaf2325(0x1d8)]+=_0xaf2325(0x18f),cardwr[_0xaf2325(0x17a)][_0xaf2325(0x1d8)]+=_0xaf2325(0x1a1)+u[_0xaf2325(0x182)]+_0xaf2325(0x14b);_0xaf2325(0x1d3)in u&&(emoji=u[_0xaf2325(0x1d3)]in DT_BonusEmojis?DT_BonusEmojis[u[_0xaf2325(0x1d3)]]:'❓',cardwr['descr'][_0xaf2325(0x1d8)]+=_0xaf2325(0x19b)+emoji+_0xaf2325(0x14b));let _0x288ac2=DT_Resources[_0xaf2325(0x167)][u['GlobalIndex']]['src'],_0x4b1390=Math['round']((u[_0xaf2325(0x1c1)][_0xaf2325(0x1ca)]-u['Hits'])*0x64/u[_0xaf2325(0x1c1)][_0xaf2325(0x1ca)]);const _0xc11644=_0x4b1390<0x1e?_0xaf2325(0x1d2):_0x4b1390<0x32?_0xaf2325(0x1f1):_0x4b1390<0x4b?_0xaf2325(0x145):_0xaf2325(0x14e);let _0x86f93=![],_0x23460f=_0xaf2325(0x185),_0x5e7350='0';if('AttackBlow'in u)_0x23460f=u[_0xaf2325(0x1c6)]>u[_0xaf2325(0x1c1)][_0xaf2325(0x1c6)]?_0xaf2325(0x13e):_0xaf2325(0x185),_0x5e7350=u[_0xaf2325(0x1c6)];else{if('AttackShot'in u)_0x23460f=u['AttackShot']>u[_0xaf2325(0x1c1)][_0xaf2325(0x1d0)]?_0xaf2325(0x13e):'black',_0x5e7350=u[_0xaf2325(0x1d0)];else _0xaf2325(0x1ae)in u&&(_0x86f93=!![]);}let _0x46b2be=_0xaf2325(0x185),_0x6f2dee='0';_0xaf2325(0x195)in u&&(initialDef=_0xaf2325(0x195)in u[_0xaf2325(0x1c1)]?u[_0xaf2325(0x1c1)][_0xaf2325(0x195)]:0x0,_0x46b2be=u['DefenceBlow']>initialDef?_0xaf2325(0x13e):_0xaf2325(0x185),_0x6f2dee=u[_0xaf2325(0x195)]);let _0x27489a=_0xaf2325(0x185),_0x54f12c='0';_0xaf2325(0x177)in u&&(initialDef=_0xaf2325(0x177)in u['InitialState']?u['InitialState'][_0xaf2325(0x177)]:0x0,_0x27489a=u['DefenceShot']>initialDef?_0xaf2325(0x13e):_0xaf2325(0x185),_0x54f12c=u[_0xaf2325(0x177)]);if(_0x86f93)cardwr[_0xaf2325(0x1df)][_0xaf2325(0x1d8)]=(u['Magic']==='DeathMagic'?'💀':u[_0xaf2325(0x1ac)]===_0xaf2325(0x1d7)?'🙏':'🪄')+'\x20'+u[_0xaf2325(0x1ae)];else{if(_0xaf2325(0x1c6)in u)cardwr[_0xaf2325(0x1df)]['innerHTML']=_0xaf2325(0x199)+('<span\x20style=\x22color:'+_0x23460f+_0xaf2325(0x144)+_0x5e7350+_0xaf2325(0x14b));else _0xaf2325(0x1d0)in u?cardwr[_0xaf2325(0x1df)][_0xaf2325(0x1d8)]='🏹\x20'+('<span\x20style=\x22color:'+_0x23460f+_0xaf2325(0x144)+_0x5e7350+_0xaf2325(0x14b)):cardwr[_0xaf2325(0x1df)]['innerHTML']=_0xaf2325(0x147);}for(const _0x56fb50 in DT_ActiveStates){DT_ActiveStates[_0x56fb50][_0xaf2325(0x1ea)]['includes'](u)&&(cardwr[_0xaf2325(0x1df)][_0xaf2325(0x1d8)]+='<span\x20style=\x22position:absolute\x22>'+DT_ActiveStates[_0x56fb50][_0xaf2325(0x159)]+_0xaf2325(0x14b));}cardwr['stats'][_0xaf2325(0x1d8)]+='&nbsp;',cardwr['stats'][_0xaf2325(0x1d8)]+=_0xaf2325(0x1e0)+_0xc11644+_0xaf2325(0x144)+u[_0xaf2325(0x1ca)]+'/'+u[_0xaf2325(0x1c1)]['Hits']+_0xaf2325(0x14b),cardwr[_0xaf2325(0x1df)][_0xaf2325(0x1d8)]+=_0xaf2325(0x18f),cardwr[_0xaf2325(0x1df)]['innerHTML']+=_0xaf2325(0x197)+(_0xaf2325(0x18e)+_0x46b2be+_0xaf2325(0x144)+_0x6f2dee+_0xaf2325(0x14b))+'/'+(_0xaf2325(0x18e)+_0x27489a+_0xaf2325(0x144)+_0x54f12c+_0xaf2325(0x14b)),cardwr[_0xaf2325(0x1df)]['innerHTML']+=_0xaf2325(0x1b7),cardwr['stats'][_0xaf2325(0x1d8)]+=_0xaf2325(0x1c2)+u['Manevres']+'</span>',cardwr[_0xaf2325(0x146)][_0xaf2325(0x1ab)][_0xaf2325(0x1c0)]=DT_ImgWidth,cardwr[_0xaf2325(0x146)][_0xaf2325(0x1ab)][_0xaf2325(0x1e6)]=DT_ImgHeight,cardwr[_0xaf2325(0x146)][_0xaf2325(0x1ab)]['setProperty'](_0xaf2325(0x1e3),_0xaf2325(0x153));let _0x44d932='',_0x26a1d9='';u['Cursed']===!![]&&(_0x44d932='url('+DT_Resources[_0xaf2325(0x16d)][_0xaf2325(0x1bb)]+_0xaf2325(0x1b4),_0x26a1d9='48px,\x20contain,\x20'),cardwr[_0xaf2325(0x146)]['style'][_0xaf2325(0x1b9)](_0xaf2325(0x1d4),_0x26a1d9+'cover'),cardwr[_0xaf2325(0x146)][_0xaf2325(0x1ab)][_0xaf2325(0x1b9)](_0xaf2325(0x1e4),_0x44d932+(_0xaf2325(0x19f)+_0x4b1390+'%,\x20transparent\x200%),\x20url('+_0x288ac2+')'));}function DT_UploadResources(){DT_UploadImages(),DT_UploadSounds();}function DT_UploadImages(){const _0x279584=_0xdf2eff;for(const _0x45fe37 in DT_Units){let _0x4d20e1=new Image();_0x4d20e1[_0x279584(0x1bb)]=_0x279584(0x15e)+(DT_Units[_0x45fe37]['GlobalIndex']-0x1)+_0x279584(0x154),DT_Resources[_0x279584(0x167)][DT_Units[_0x45fe37]['GlobalIndex']]=_0x4d20e1;}let _0x1a9cc6=new Image();_0x1a9cc6['src']=_0x279584(0x19e),DT_Resources[_0x279584(0x1cc)]=_0x1a9cc6;let _0x3f8902=new Image();_0x3f8902['src']=_0x279584(0x18a),DT_Resources[_0x279584(0x16d)]=_0x3f8902;}function DT_UploadSounds(){const _0x394cdb=_0xdf2eff;function _0x25bb64(_0x2f4bfc,_0x17aa33){const _0x5ccf64=_0xb437;if(!(_0x17aa33 in DT_Resources[_0x5ccf64(0x1de)])){let _0x455543=new Audio(_0x2f4bfc);DT_Resources[_0x5ccf64(0x1de)][_0x17aa33]=_0x455543;}}_0x25bb64(_0x394cdb(0x187),_0x394cdb(0x1c8)),_0x25bb64(_0x394cdb(0x1b8),_0x394cdb(0x15b)),_0x25bb64(_0x394cdb(0x187),_0x394cdb(0x1f2)),_0x25bb64(_0x394cdb(0x168),_0x394cdb(0x194)),_0x25bb64(_0x394cdb(0x15d),_0x394cdb(0x1db)),_0x25bb64(_0x394cdb(0x1a9),_0x394cdb(0x176)),_0x25bb64(_0x394cdb(0x14a),'Bless'),_0x25bb64(_0x394cdb(0x1d1),'Strike'),_0x25bb64('sfx/dtmove.wav','Move'),_0x25bb64(_0x394cdb(0x1b8),_0x394cdb(0x160)),_0x25bb64('sfx/wintheme.wav',_0x394cdb(0x1b0)),_0x25bb64(_0x394cdb(0x184),_0x394cdb(0x1ce));}function DT_ClearArmies(){DT_Armies=[],DT_ArmiesInitialState=[],DT_RelicsInUse=[];}function DT_ClearElements(){const _0xf08460=_0xdf2eff;DT_DeleteListeners();for(const _0x51ff67 of DT_CSSCards){_0x51ff67[_0xf08460(0x1bc)][_0xf08460(0x192)]();}DT_CSSCards=[];if(DT_Grid!==null)DT_Grid[_0xf08460(0x192)]();DT_Grid=null;}function DT_StartTheBattle(){const _0x1a8551=_0xdf2eff;if(DT_Parent===null){console['log'](_0x1a8551(0x165));return;}else DT_Units===null&&console['log']('Resources\x20haven\x27t\x20been\x20uploaded,\x20make\x20sure\x20you\x20called\x20the\x20function\x20DT_UploadResources()');DT_BattleIsOverCalled=![],TurnCounter=0x0,DT_ClearElements(),DT_CreateElements(),DT_AddListeners(),DT_CSSCards[0x0][_0x1a8551(0x1bc)]['dispatchEvent'](new CustomEvent(_0x1a8551(0x1e7),{'detail':{'type':_0x1a8551(0x19d),'target':0x0}}));}