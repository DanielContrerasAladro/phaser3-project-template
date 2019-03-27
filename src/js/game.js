3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
var config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: window.innerWidth,
  height: window.innerHeight,
  scene: {
    preload: preload,
    create: create
  }
};
 
var game = new Phaser.Game(config);
 
function preload() {
  this.load.image('logo', 'img/logo.png');
}
 
function create() {
  this.logo = this.add.image(0, 0, 'logo');
  this.logo.setScale(0.5);
 
  Phaser.Display.Align.In.Center(
    this.logo,
    this.add.zone(window.innerWidth/2, window.innerHeight/2, window.innerWidth, window.innerHeight)
  );
 
  this.tweens.add({
    targets: this.logo,
    y: 450,
    duration: 2000,
    ease: 'Power2',
    yoyo: true,
    loop: -1
  });
}