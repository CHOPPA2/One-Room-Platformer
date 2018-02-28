var monikaText;
var End = {
    preload() {
    game.load.image('monika', 'assets/monika.png');
  },
  create() {
    this.add.image(100, 30, 'monika');
    monikaText = game.add.text(400, 0, 'You won the game', {font:'tahoma', fontSize:'32px', fill:'#fff'});
  },
  update() {
    if (controls.down.repeats === 2) {
      monikaText.text = 'Just Monika';
      monikaText.x = 500;
    }
  }
}
