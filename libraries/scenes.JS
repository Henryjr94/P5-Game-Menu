function titleScreen () {
  //setup
  background(2);
  rulerGrid(20,250)
  rect(0,0,800,800)  
  textFont(fontGame)
  textSize(130);
  fill(250)
  textAlign(CENTER)
  textStyle(BOLD)
  strokeWeight(0)

  if (currScene == "title"){
    //Start Screen
    textSize(130);
    fill(250)
    textAlign(CENTER)
    textStyle(BOLD)
    text("GAME",width/2,200)    

    if (fps120 < 90 && currState == 0){
      textSize(30);
      text("Press E to play!",width/2, height/2)    

      if (keyIsDown(69) && pressCap){
        currState = 1
        pressCap = false
      }

    } else if (currState == 1){

      startMenu.vControl(3,60)
      startMenu.render(150,height/2-40)

      fill(220)
      textSize(30);    
      textAlign(LEFT)
      text("New game",240, height/2)
      text("Load game",240, height/2+60)
      text("Options",240, height/2+120)

      if (keyIsDown(69) && startMenu.arrowPos == 1 && pressCap){
        currScene = "new game"
        pressCap = false
      } else if (keyIsDown(69) && startMenu.arrowPos == 2 && pressCap){
        currScene = "load game"
        pressCap = false
      } else if (keyIsDown(69) && startMenu.arrowPos == 3 && pressCap){
        currScene = "options"
        pressCap = false
      }

    }


  } else if (currScene == "new game"){
   
    //New game
    stroke(250);
    strokeWeight(5)
    fill(0,0,0,200)
    
    //layer1
    rect(40,40,200,200)
    rect(40,280,200,60)   
    rect(300,40,200,200)
    rect(300,280,200,60)
    rect(560,40,200,200)
    rect(560,280,200,60)

    //layer2
    textFormat(23)
    text("Mage",60,300,200,60)
    text("Warrior",320,300,200,60)
    text("Thief",580,300,200,60)
    blockMove.control(3,260)
    blockMove.render()
    boxFormat ()

    //layer3
    anime(mageWalk,"down",blackMage,90,80,100)   

    //dialog box
    rect(40,height-40,width-80,-160)
    textFormat(19)
    switch (blockMove.arrowPos) {
       case 1:
         if (textBox.output != descriptionMage)
         goThrough(descriptionMage,2)

         text(textBox.output,50,height-190,width-80,160);
         text(attString(heroStats.find(e => e.class == "mage")),50,height-90,width-80,160);
         break
       case 2:
         if (textBox.output != descriptionKnight)
         goThrough(descriptionKnight,2)

         text(textBox.output,50,height-190,width-80,160);
         text(attString(heroStats.find(e => e.class == "knight")),50,height-90,width-80,160);
         break
       case 3:
         if (textBox.output != descriptionThief)
         goThrough(descriptionThief,2)

         text(textBox.output,50,height-190,width-80,160);
         text(attString(heroStats.find(e => e.class == "thief")),50,height-90,width-80,160);
         break
 
 

       default:
       


    } 
    if (keyIsDown(87) && pressCap){
      currScene = "title"
    } 

    if (keyIsDown(69) && blockMove.arrowPos == 1 && pressCap){
     gameStage = "stage 1"
   } else if (keyIsDown(69) && blockMove.arrowPos == 2 && pressCap){
    // gameStage = "stage 1"
   } else if (keyIsDown(69) && blockMove.arrowPos == 3 && pressCap){
     gameStage = "stage 1"
   }

  } else if (currScene == "load game"){
   
    //Load Game
    textSize(30);
    text("No save data found",width/2, height/2)

    if (keyIsDown(87)  && pressCap){
      currScene = "title"
    } 
   
    
  } else if (currScene == "options"){
   
    // Options
    textSize(30);
    text("No options yet :(",width/2, height/2) 

    if (keyIsDown(87) && pressCap){
      currScene = "title"
    } 
    
  }
}

function stage1 () {

    playerXY = [player.posX / tileSize, player.posY / tileSize]
  
    grid(map1)
    things(map1Objs)
    player.update()  
    player.render()
    isRunning()
  
  }