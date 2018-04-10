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

function preload() {
    this.load.image('background', 'assets/PNG/panel_brown.png');
    this.load.image('inset', 'assets/PNG/panelInset_beigeLight.png');
    this.load.image('barLend', 'assets/PNG/barBack_horizontalLeft.png');
    this.load.image('barRend', 'assets/PNG/barBack_horizontalRight.png');
    this.load.image('barMid', 'assets/PNG/barBack_horizontalMid.png');
    this.load.image('hitspotBack', 'assets/PNG/iconCircle_beige.png');
    this.load.image('hitspotFore', 'assets/PNG/iconCircle_blue.png');
    this.load.image('anvil', 'assets/Anvil2.png');
};

function create(){
    var background = this.add.image(400, 300, 'background');
    Phaser.Display.Align.In.Center('background', this.add.zone(400, 300, 800, 600));
    background.display.ALIGN_CENTER;
    this.add.image(400, 300, 'inset');

};
function update(){

};