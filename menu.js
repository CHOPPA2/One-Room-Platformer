var Menu = {
  preload() {
  game.load.image('menu', 'assets/menu.png');
  },
  create () {
  function startGame() {
    game.state.start('Game');
  }
  var menu = this.add.button(0, 0, 'menu', startGame(), this);
  //menu.scale.setTo(1.66666667, 1.33333333);
},
  startGame: function () {

      // Change the state to the actual game.
      this.state.start('Game');

  }
}
