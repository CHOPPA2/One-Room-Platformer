var game = new Phaser.Game (1000, 600, '');
function delayLine(time, x, y, z) {
    function callback(x, y, z) {
      game.add.text(x, y, z, {fontSize:'32px', fill: '#fff'});
    }
    setTimeout(callback(), time, x, y, z);
}
function createPlatform (x, y) {
  let ledge = platforms.create (x, y, 'platform');
  ledge.body.immovable = true;
}
game.state.add ('Menu', Menu);
game.state.add ('Game', Game);
game.state.add ('End', End);
game.state.add ('Credits', Credits);
game.state.start ('Menu');
