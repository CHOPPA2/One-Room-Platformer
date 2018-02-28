var game = new Phaser.Game (1000, 600, '');
function delayLine(time, callback, x) {
    setTimeout(callback(), time, x);
}
function createPlatform (x, y) {
  let ledge = platforms.create (x, y, 'platform');
  ledge.body.immovable = true;
}
game.state.add ('Menu', Menu);
game.state.add ('Game', Game);
game.state.add ('End', End);
game.state.start ('Menu');
