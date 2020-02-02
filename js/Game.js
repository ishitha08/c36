class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountref = await database.ref("playerCount").once("value");
      this.if(playerCountref.exists()){
        playerCount = playerCountref.val();
        player.getCount();

      }
      //player.getCount();
      form = new Form()
      form.display();
    }
  }
   play(){
     form.hide();
     textSize(30);
     text("gameStart",120,100);
     Player.getPlayerInfo();
     if(allPlayers!==undefined){
       var display_position = 130;
       if(plr==="player"+player.index)
       fill("red");
       else
       fill("black");
       displayPosition += 20;
       text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position);
     }
   }
   if(keyIsDown(UP_ARROW)&& player.indev!==null){
     player.distance+=50;
     player.update();

   }
}
