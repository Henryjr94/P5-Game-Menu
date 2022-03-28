// class gridMovement {
  
//     constructor () {
//       this.posX = tileSize
//       this.posY = tileSize
//       this.speed = 40
//     }
  
//     update(){ 
//       if(keyIsDown(RIGHT_ARROW) && moveCap < tileSize && collision(map1,"right")){               
//         this.posX += this.speed
//         moveCap += this.speed  
//       } else if (keyIsDown(LEFT_ARROW) && moveCap < tileSize && collision(map1,"left")){
//         this.posX -= this.speed
//         moveCap += this.speed 
//       }  else if (keyIsDown(UP_ARROW) && moveCap < tileSize && collision(map1,"up")){
//         this.posY -= this.speed
//         moveCap += this.speed
//       } else if (keyIsDown(DOWN_ARROW) && moveCap < tileSize && collision(map1,"down")){
//         this.posY += this.speed
//         moveCap += this.speed
//       }
         
//     } 
    
//     show () {
//       fill(50,0,0)
//       noStroke()
//       rect(this.posX, this.posY, tileSize, tileSize)
      
//     }
  
// }
class cameraControl {

  constructor(obj){
    this.posX = obj.posX - (width/2)
    this.posY = obj.posY - (height/2)
    this.speed = 5    
  }

  control(obj){ 
    this.posX = obj.trueX - (width/2) < 0 ? 0 : obj.trueX - (width/2)    
    this.posY = obj.trueY - (width/2) < 0 ? 0 : obj.trueY - (width/2)
       
  } 

  render(){
    fill(0,0,0,200)
    rect(this.posX,this.posY,width,height)
    stroke(0)
    strokeWeight(2)
    line(this.posX + (width/2),0,this.posX + (width/2),height)
    line(0,this.posY + (height/2),width,this.posY+(height/2))
  }

}

class freeMovement {
  
    constructor () {
      this.posX  = tileSize
      this.posY  = tileSize
      this.trueX = tileSize
      this.trueY = tileSize
      this.speed = 5
    }
  
    control(){ 
      
      if(keyIsDown(RIGHT_ARROW)){

        if (this.trueX >= 0 && this.trueX < mapSize[0]) {
          if (this.posX < (width/2) || this.trueX > mapSize[0] - (width/2))             
          this.posX += this.speed  
        this.trueX += this.speed
        }

      } else if (keyIsDown(LEFT_ARROW)){
        if (this.trueX >= 0) {
        this.trueX -= this.speed

          if(this.trueX < (width/2))
          this.posX = this.trueX
        }

      }

      this.trueX = this.trueX < 0 ? 0 : this.trueX
      this.posX = this.posX < 0 ? 0 : this.posX

      if (keyIsDown(DOWN_ARROW)){
        if ( this.trueY < mapSize[1]){
          if (this.posY < (height/2))
          this.posY += this.speed
          this.trueY += this.speed
        }
       

      } else if (keyIsDown(UP_ARROW)){        
        this.trueY -= this.speed
        if (this.trueY < (height/2))
        this.posY = this.trueY
      }

      this.trueY = this.trueY < 0 ? 0 : this.trueY
      this.posY = this.posY < 0 ? 0 : this.posY
         
    } 
    
    render () {
      noStroke()
      fill("red")
      rect(this.posX, this.posY, tileSize, tileSize)
      fill("blue")
      rect(this.trueX, this.trueY, tileSize, tileSize)
      noFill
    }
  
}

class menuArrow {
  
  constructor (posX,posY,size) {
    this.posX = posX
    this.posY = posY
    this.size = size
    this.arrowPos = 1
  }

  vControl(limit, offset){ 
    if (keyIsDown(UP_ARROW) && moveCap && this.arrowPos != 1){
      this.posY -= offset
      moveCap = false
      this.arrowPos--
    } else if (keyIsDown(DOWN_ARROW) && moveCap && this.arrowPos < limit){
      this.posY += offset
      moveCap = false
      this.arrowPos++
    }
       
  }

  render(){
    let _x = this.posX
    let _y = this.posY
    arrowAnime = numberFlow(arrowObj)
    _x +=  arrowAnime
    triangle (_x,_y,_x,_y+this.size,_x+(this.size*0.75),_y+(this.size/2))
  }

}

class boxMenu {
  
  constructor (posX,posY,sizeX,sizeY) {
    this.posX = posX
    this.posY = posY
    this.sizeX = sizeX
    this.sizeY = sizeY
    this.arrowPos = 1
  }

  control(limit, offset){ 
    if (keyIsDown(RIGHT_ARROW) && moveCap && this.arrowPos < limit){
      this.posX += offset
      moveCap = false
      this.arrowPos++
    } else if (keyIsDown(LEFT_ARROW) && moveCap && this.arrowPos != 1){
      this.posX -= offset
      moveCap = false
      this.arrowPos--
    }
       
  } 
  
  render () {

    stroke(200)
    strokeWeight(2)
    fill(200,0,0,150)
    rect(this.posX,this.posY,this.sizeX,this.sizeY)  
    strokeWeight(0)
    
  }

}

//return a sequence of number in order, first forwards, then backwards
function numberFlow (varIn){    

  if (varIn.range[0] != varIn.min && varIn.range[varIn.range.length-1] != varIn.max){
      for (i = 0; i <= varIn.max - varIn.min; i++)
      varIn.range[i] = varIn.min + i      
  }

  if (fps60 % varIn.speed != 0 && !reverse)
    return varIn.range[varIn.index+1]    
  else if (fps60 % varIn.speed != 0 && reverse)
    return varIn.range[varIn.index]   

  if (!varIn.reverse){
      varIn.index++    
      if (varIn.index >= varIn.max - varIn.min)
      varIn.reverse = true           
      console.log(varIn.index) 
      return varIn.range[varIn.index-1]        
  } else {
      varIn.index--
      if (varIn.index <= 0)
      varIn.reverse = false      
      console.log(varIn.index)
      return varIn.range[varIn.index+1]   
  }
}

//animation interpreter
function anime (objIn,animation,sprite,posX,posY,size) {

  let _x = objIn[animation].startX
  let _y = objIn[animation].startY
  
  _x += (objIn[animation].index*100)
  image(sprite,posX,posY,size,size,_x,_y,100,100)

  //speed control, needs a better solution
  if (fps60 == 0)
  objIn[animation].index++

  if (objIn[animation].index >= objIn[animation].cycle){
      objIn[animation].index = 0 
  }

}

function textFormat (size){
  fill(250)
  textAlign(LEFT)
  stroke(10)
  strokeWeight(1)
  textSize(size)
}

function boxFormat () {
  stroke(250);
  strokeWeight(5)
  fill(0,0,0,200)
}

function attString(hero) {
  return `HP: ${hero.att.hp} MP: ${hero.att.mp} Attack: ${hero.att.atk} Defense: ${hero.att.def} Crit %: ${hero.att.crit} Speed: ${hero.att.spd} `
}

//goes through a string and return it letter by letter with a delay
//used in text boxes
function goThrough (varIn,delay) {
  if (varIn != textBox.currentText){
    textBox.currentText = varIn
    textBox.index = 0
    textBox.output = ""    
  }

  if (fps120 % delay == 0){
      textBox.output += varIn[textBox.index]    
      textBox.index ++
  }
 

  if (textBox.output >= varIn.length)
  textBox.index = 0

  return textBox.output
}

//limits the number of inputs per key press
function keyReleased(){
  moveCap = true
  pressCap = true
}

//draws a grid overlay
function rulerGrid(int,color){
  stroke(color)
  strokeWeight(2)

  let rulerPosX = 0
  let rulerPosY = 0
  for (let i = 0; i < int; i++){
    line(rulerPosX,0,rulerPosX,height)
    line(0,rulerPosY,width,rulerPosY)
    rulerPosX += tileSize
    rulerPosY += tileSize
    
  }
  strokeWeight(0)
}

//render textures screen
// function renderer (obj,mats,map,imageIn) {
//   let renderFromX = (obj.posX < 0) ? 0 : obj.posX
//   let renderFromY = (obj.posY < 0) ? 0 : floor(obj.posY/tileSize)
//   let loop = floor(renderFromX/tileSize)-1
//   let loopY = ceil(renderFromY/tileSize)
//   let currX = renderFromX
//   let currY = renderFromY  

//   //good luck understanding this shit lmao
//   for (images in mats){
    
//     for (let i = 0; i <= (height/tileSize); i++){ // loops on the Y axis based on tile size
            
//       for (let j = 0; j <= (width/tileSize); j++){ // loops on the X axis based on tile size        
        
//         if (map["y" + (renderFromY+i)][loop] == mats[images].id){   //checks if map.Y is equal mat ID
//           image(imageIn,currX,currY,tileSize,tileSize,mats[images].posX,mats[images].posY,100,100) //image render, pulls info from materials object              
//         }
//         loop++
//         currX += tileSize

//       }
//       loop = floor(renderFromX/tileSize)
//       currX = renderFromX - tileSize // resets X for loop
//       currY += tileSize     

//     }
//   }      
// }

