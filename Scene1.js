/* eslint-disable quotes */


class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  create() {
    this.add.text(50, 50, "Loading game...");
    this.scene.start("playGame");
  }
}