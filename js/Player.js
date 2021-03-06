class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.xPos = 0;
    this.name = null;
    this.place = 0;  }

  getCount(){
    var playerCountRef = database.ref('PlayerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      PlayerCount: count
    });
  }

  update(){
    var playerIndex = "Player/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      place: this.place,
      xPos: this.xPos
    });
  }
getFinishedPlayers(){
  var rankRef = database.ref('Rank');
  rankRef.on("value",(data)=>{
      finishedPlayers = data.val();
  });
}
static updateFinishedPlayers(){
    database.ref('/').update({
        Rank: finishedPlayers + 1
    });
    this.place += 1;
}


  static getPlayerInfo(){
    var playerInfoRef = database.ref('Player');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
