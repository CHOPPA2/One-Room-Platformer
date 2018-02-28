var player, platforms, door, background;
var hitPlatform, overlapDoor, hitBounds;
var Game = {
preload() {
game.load.spritesheet('player', 'assets/sprite1.png', 48.25, 53);
game.load.spritesheet('left', 'assets/sprite_2.png', 48.25, 54);
game.load.spritesheet('right', 'assets/sprite_3.png', 48.25, 54);
game.load.image('background', 'assets/sky.png');
game.load.spritesheet('platform', 'assets/platform.png');
game.load.spritesheet('door', 'assets/door.jpg');
},
create() {
game.physics.startSystem(Phaser.Physics.ARCADE);
background = this.add.image (0, 0, 'background'); // Add background
background.scale.setTo(2, 1);
door = this.add.sprite (500, 220, 'door'); // Add door
door.scale.setTo(0.02, 0.02);
game.physics.arcade.enable (door);
door.body.immovable = true;
player = this.add.sprite (510, 0, 'player', 0); // Add player
game.physics.arcade.enable (player);
player.body.gravity.y = 300;
player.body.collideWorldBounds = true;
player.animations.add('left', [1, 3], 10, true);
player.animations.add('right', [0, 2], 10, true);
platforms = this.add.group ();
platforms.enableBody = true;
createPlatform(300, 100); // Add platforms
createPlatform(300, 300);
createPlatform(300, 500);
controls = game.input.keyboard.createCursorKeys(); // Create keyboard controls
},
update () {
hitPlatform = game.physics.arcade.collide(player, platforms);
overlapDoor = game.physics.arcade.overlap(player, door); // Check this again
//hitBounds = game.physics.arcade.collide (player, game.world.bounds); // Check
player.body.velocity.x = 0;
if (controls.up.isDown && player.body.touching.down) {
player.body.velocity.y = -400;
} else if (controls.down.isDown && player.body.touching.down === false) {
player.body.velocity.y = 1000;
}
if (controls.left.isDown && player.body.touching.down === false && hitPlatform === false) {
player.body.velocity.x = -1000;
}
if (controls.right.isDown && player.body.touching.down === false && hitPlatform === false) {
player.body.velocity.x = 1000;
}
if (controls.left.isDown) {
player.body.velocity.x = -400;
player.animations.play('left');
} else if (controls.right.isDown) {
player.body.velocity.x = 400;
player.animations.play('right');
} else {
player.frame = 0;
}
if (overlapDoor && controls.up.isDown) {
game.state.start ('End');
}
}
}
