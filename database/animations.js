let imgSheet;
let objSheet;
let fontGame;
let textBox = {output: "", index: 0, currentText: ""}
let blackMage;
let fps60 = 0
let fps120 = 0
let blockMove;
//let white = fill(250);
//let black = fill(10)
let arrowObj = {range: [], reverse: false, index: 0, min: 0, max: 10, speed: 5};
let arrowAnime;
let mageWalk = {
    sprite: blackMage,
    right:  {startX: 400, startY: 0, cycle: 2, index: 0},
    left:   {startX: 600, startY: 0, cycle: 2, index: 0},
    up:     {startX: 200, startY: 0, cycle: 2, index: 0},
    down:   {startX: 0,   startY: 0, cycle: 2, index: 0}
}
let matSheet = {
    grass: {posX: 0, posY: 0, id: 0}
}

