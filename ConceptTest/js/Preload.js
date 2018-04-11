class PreloadScene extends Phaser.Scene{

    constructor(config){
        super({key: 'Preload', files:[{type: 'image', key: 'logo', url: 'assets/images/gwkLogo.png'}, {type:'image', key:'logoBar', url: 'assets/images/gwkPreloadBar.png'}]});
    }

    preload(){

        var logo = this.add.image(game.config.width/2, (game.config.height/2)-100, 'logo').setScale(.6);
        var barLogo = this.add.image(game.config.width/2, (game.config.height/2)+50, 'logoBar');


        this.load.on('progress', function (value){

            barLogo.setScale(.6 * value, .6);

        });

        this.load.on('complete', function(){
            //progress.destroy();
        });

        //this.load.spritesheet('playerE', 'assets/images/BODY_EAST.png', 64, 64);
        //this.load.spritesheet('playerW', 'assets/images/BODY_WEST.png', 64, 64);
        //this.load.spritesheet('playerN', 'assets/images/BODY_NORTH.png', 64, 64);
        //this.load.spritesheet('playerS', 'assets/images/BODY_SOUTH.png', 64, 64);
        this.load.image('gui', 'assets/images/panel_brown.png');
        this.load.image('ProjectUtumno_full', 'assets/images/ProjectUtumno_full.png');
        this.load.image('townTiles1', 'assets/images/town.png');
        this.load.image('backgroundTiles2', 'assets/images/trees_plants.png');
        this.load.image('backgroundTiles1', 'assets/images/trees_plants_rocks.png');
        this.load.image('title', 'assets/images/title.png');
        //this.load.tilemap('forest', 'assets/tilemaps/forest.json', null, Phaser.Tilemap.TILED_JSON);
        //this.load.tilemap('town', 'assets/tilemaps/town.json',  null, Phaser.Tilemap.TILED_JSON);

    }

    create(){

    }

}



/*var Test = Test || {};

Test.Preload = function(){};

Test.Preload.prototype = {

    preload:function(){
        this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY - 100, 'logo');
        this.splash.scale.setTo(0.2, 0.2);
        this.splash.anchor.setTo(0.5);
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 120, 'preloadbar');
        this.preloadBar.scale.setTo(0.6, 0.6);
        this.preloadBar.anchor.setTo(0.5);

        this.load.setPreloadSprite(this.preloadBar);

        this.load.spritesheet('playerE', 'assets/images/BODY_EAST.png', 64, 64);
        this.load.spritesheet('playerW', 'assets/images/BODY_WEST.png', 64, 64);
        this.load.spritesheet('playerN', 'assets/images/BODY_NORTH.png', 64, 64);
        this.load.spritesheet('playerS', 'assets/images/BODY_SOUTH.png', 64, 64);
        this.load.image('gui', 'assets/images/panel_brown.png');
        this.load.image('ProjectUtumno_full', 'assets/images/ProjectUtumno_full.png');
        this.load.image('townTiles1', 'assets/images/town.png');
        this.load.image('backgroundTiles2', 'assets/images/trees_plants.png');
        this.load.image('backgroundTiles1', 'assets/images/trees_plants_rocks.png');
        this.load.image('title', 'assets/images/title.png');
        this.load.tilemap('forest', 'assets/tilemaps/forest.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.tilemap('town', 'assets/tilemaps/town.json',  null, Phaser.Tilemap.TILED_JSON);


    },
    create:function(){
        this.time.events.add(Phaser.Timer.SECOND * 10,  this.state.start('MainMenu'), this);
    }
};*/