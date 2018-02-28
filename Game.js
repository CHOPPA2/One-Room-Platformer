var player, platforms, door, background;
var hitPlatform, overlapDoor, hitBounds;
var Game = {
preload() {
game.load.spritesheet('player', 'assets/player.png', 32, 48);
game.load.image('background', 'assets/sky.png');
game.load.spritesheet('platform', 'assets/platform.png');
game.load.spritesheet('door', 'assets/door.jpg');
},
create() {
game.physics.startSystem(Phaser.Physics.ARCADE);
background = this.add.image (0, 0, 'background');
background.scale.setTo(2, 1);
player = this.add.sprite (510, 0, 'player', [1, 2, 3, 4, 5, 6, 7, 8, 9]); // Add player
game.physics.arcade.enable (player);
player.body.gravity.y = 300;
player.body.collideWorldBounds = true;
player.animations.add('left', [0, 1, 2, 3], 10, true);
player.animations.add('right', [5, 6, 7, 8], 10, true);
platforms = this.add.group ();
platforms.enableBody = true;
createPlatform(300, 100); // Add platforms
createPlatform(300, 300);
createPlatform(300, 500);
door = this.add.sprite (800, 150, 'door'); // Add door
door.scale.setTo(0.05, 0.05);
game.physics.arcade.enable (door);
door.body.immovable = true;
controls = game.input.keyboard.createCursorKeys(); // Create keyboard controls
},
update () {
hitPlatform = game.physics.arcade.collide(player, platforms);
overlapDoor = game.physics.arcade.overlap(player, door); // Check this again
//hitBounds = game.physics.arcade.collide (player, game.world.bounds); // Check
player.body.velocity.x = 0;
if (controls.up.isDown && player.body.touching.down && hitPlatform) {
player.body.velocity.y = -400;
} else if (controls.down.isDown && player.body.touching.down === false) {
player.body.velocity.y = 1000;
}
/*if (controls.left.isDown && player.body.touching.down === false && hitPlatform === false) {
player.body.velocity.x = -400;
}
if (controls.right.isDown && player.body.touching.down === false && hitPlatform === false) {
player.body.velocity.x = 400;
}*/
if (controls.left.isDown) {
player.body.velocity.x = -400;
player.animations.play('left');
} else if (controls.right.isDown) {
player.body.velocity.x = 400;
player.animations.play('right');
} else {
player.frame = 4;
}
if (overlapDoor && controls.up.isDown) {
game.state.start ('End');
}
}
}
