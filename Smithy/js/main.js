var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y:300},
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var clickText;

function preload() {
    this.load.image('background', 'assets/PNG/panel_brown.png');
    this.load.image('inset', 'assets/PNG/panelInset_beigeLight.png');
    this.load.image('barLend', 'assets/PNG/barBack_horizontalLeft.png');
    this.load.image('barRend', 'assets/PNG/barBack_horizontalRight.png');
    this.load.image('barMid', 'assets/PNG/barBack_horizontalMid.png');
    this.load.image('hitspotBack', 'assets/PNG/iconCircle_grey.png');
    this.load.image('hitspotFore', 'assets/PNG/iconCircle_blue.png');
    this.load.image('anvil', 'assets/Anvil2.png');
};

function create(){

    var background = this.add.image(0, 0, 'background').setScale(5);
    var inset = this.add.image(0, 0, 'inset').setScale(5);
    Phaser.Display.Align.In.Center(background, this.add.zone(game.config.width/2, game.config.height/2, game.config.width, game.config.height));
    Phaser.Display.Align.In.Center(inset, background)
    var hitBoxEdge = this.add.image(0, 0,'hitspotBack').setScale(10);
    var hitBox = this.add.image(0, 0, 'hitspotFore').setInteractive().setScale(5);
    Phaser.Display.Align.In.Center(hitBoxEdge, background);
    Phaser.Display.Align.In.Center(hitBox, background);
    clickText = this.add.text(16, 16,"DEBUG INFO", {fontSize: '32px'});


    hitBox.on('pointerdown', registerHit);

    this.tweens.add({
        targets: hitBox,
        scaleX: 10,
        scaleY: 10,
        duration: 1000,
        yoyo: true,
        repeat: -1,
        timeScale: 0.6
    })


};
function update(){

};

function registerHit(pointer) {
    var distance = Phaser.Math.Distance.Between(this.x, this.y, pointer.x, pointer.y);
    content = ["SpritePos: " + this.x + " , " + this.y, "Clicked: " + pointer.x + " , " + pointer.y, "Distance: " + distance, "Progress: " + this.scaleX];
    clickText.setText(content);

}
