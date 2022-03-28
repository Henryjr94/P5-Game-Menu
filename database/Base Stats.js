const heroStats = [
    {class: "mage"   , type: "hero",
    att:    {hp: 10 ,mp: 5, atk: 1, def: 0, crit: 5, spd: 3},
    stat:   {str: 1, int: 4, agi: 2, end: 1, luck: 0},
    spell:  {slot1: "fireBall", slot2: "PoisonCloud"}},

    {class: "knight"  , type: "hero",
    att:    {hp: 99,mp: 99, atk: 99, def: 99, crit: 100, spd: 99},
    stat:   {str: 3, int: 1, agi: 1, end: 4, luck: 1},
    spell:  {}},

    {class: "thief"   , type: "hero",
    att:    {hp: 13 ,mp: 3, atk: 2, def: 0, crit: 5, spd: 5},
    stat:   {str: 2, int: 2, agi: 3, end: 3, luck: 3},
    spell:  {slot1: "steal"}},
   
] 

const enemyStats = [
    {class: "slime"   , type: "npc",
    att:    {hp: 4 ,mp: 2, atk: 1, def: 0, crit: 5, spd: 2},
    stat:   {},
    spell:  {skill1: 'poison'  , skill2: ''}},

    {class: "rat"   , type: "npc",
    att:    {hp: 3 ,mp: 2, atk: 2, def: 0, crit: 5, spd: 4},
    stat:   {},
    spell:  {skill1: 'bite'  , skill2: ''}},

]

// function attString(hero) {
//     return `HP: ${hero.att.hp} MP: ${hero.att.mp} Attack: ${hero.att.atk} Defense: ${hero.att.def} Crit %: ${hero.att.crit} Speed: ${hero.att.spd} `
// }
  

