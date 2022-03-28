let player
let startMenu
let camera
let moveCap   = true
let pressCap  = true
let tileSize  = 80
let gameStage = "title"
let currScene = "title"
let currState = 0
let currMap   = map1
let mapSize   = [20*tileSize,20*tileSize]

function setup() {    
    createCanvas(960, 540);
    player = new freeMovement()  
    camera = new cameraControl(player)
    startMenu = new menuArrow(180,height/2-40,40)
    blockMove = new boxMenu(40,40,200,200)
    blackMage = loadImage("assets/textures/blackMage.png")
    imgSheet = loadImage("assets/textures/sheet.png") 
    objSheet = loadImage("assets/textures/objects.png")
    fontGame = loadFont("assets/fonts/gameFont.ttf")
}

function draw(){   
  
 
  fpsSetup()
  background(150)
  if (gameStage == "title")
  titleScreen()  
 

  // camera.control(player)
  // camera.render()

  // player.control()
  // player.render()

  // rulerGrid(20,0)
  debug()

}

function debug (){

  cursor(CROSS) 

  // rect(0,height-65,width/2,65)

  fill(0,0,0,150)
  stroke(250)
  strokeWeight(2)
  textAlign(LEFT)
  textSize(25);

  text("FPS: " + round(frameRate()), 4, height-4);
  text("Variable: " + player.trueX, 4, height-34);
  text("Variable: " + player.trueY, 4, height-64);
    
}

function fpsSetup () {
  fps60++
  fps120++
  if (fps60 == 60){
    fps60 = 0
  }
  if (fps120 == 120){
    fps120 = 0
  }
}

