var monikaText;
var i = 0;
var End = {
    preload() {
    game.load.image('monika', 'assets/monika.png');
  },
  create() {
    this.add.image(100, 30, 'monika');
    monikaText = game.add.text(400, 0, 'You won the game', {font:'tahoma', fontSize:'32px', fill:'#fff'});
  },
  update() {
    if (i < 12) {
    monikaText.text = monikaDialogue[i];
  }
    if (controls.up.isDown) {
      i++;
      controls.up.reset(false);
    }
    if (i === 8 || i === 9) {
      monikaText.x = 300;
    }
    if (i === 12) {
      game.state.start('Credits');
    }
  }
}
