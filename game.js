let config = {
  width: 1200,
  height: 800,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2]
};

window.onload = function () {
  let game = new Phaser.Game(config);
};
