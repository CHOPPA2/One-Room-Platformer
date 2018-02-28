var Credits = {
  preload() {
    game.load.audio('Your Reality', 'assets/ddlc.mp3');
  },
  create() {
    var yourReality = game.add.audio('Your Reality', 1, false);
    yourReality.play();
  }
}
