// import newgroundsio from "./scenes/Newgroundsio";

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		type: Phaser.CANVAS,
		// must be canvas for debug game scale plugin. Can change later
        backgroundColor: "#969fa3",
		pixelArt: false,
		title: 'Little Fellas',
		version: '2.0',
		url: 'https://www.newgrounds.com/projects/games/1920192/preview',
		physics: {
			default: 'matter',
			matter: {
				debug: true
			}
		},
		scale: {
			// this allows the game to be fullscreen on safari in landscape, but creates whitespace & scrollability in portrait
			mode: Phaser.Scale.NONE,
			width: window.innerWidth * window.devicePixelRatio,
        	height: window.innerHeight * window.devicePixelRatio,
        	zoom: 1 / window.devicePixelRatio
			// max: {
			// 	width: 2532,
            // 	height: 1170
			// }
		}
	});
	
	game.scene.add("preload", Preload);
	game.scene.add("level", Level);
	// game.scene.add("newgroundsio", newgroundsio);
	game.scene.add("newgroundsio", newgroundsio);
	game.scene.add("boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");

		this.load.plugin('PhaserDebugGameScalePlugin', 'https://cdn.jsdelivr.net/npm/phaser-plugin-debug-game-scale@3.3.0', true);
		// https://github.com/samme/phaser-plugin-debug-game-scale
		// renderer must be canvas

		// this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Preload"));
	}

	create() {

		window.addEventListener('resize', this.resize.bind(this));

		this.scene.launch("newgroundsio");
		this.scene.start("preload");
	}

	/**
	 * Called at window resize event
	 * 
	 * sets scalemanager size based on window
	 * 
	 * Calls resize() in all active scenes
	 * 
	 * This event persists
	 * 
	 * resize solution by SuperNappie: @link https://supernapie.com/blog/support-retina-with-phaser-3/
	 */
	resize ()
	{
		let w = window.innerWidth * window.devicePixelRatio;
		let h = window.innerHeight * window.devicePixelRatio;

		// manually resize the game with the Phaser 3.16 scalemanager
		this.scale.resize(w, h);

		for (let scene of this.scene.manager.scenes) {
			
			if (scene.scene.settings.active) {

				// Scale the camera
				scene.cameras.main.setViewport(0, 0, w, h);

				if (scene.resize) {

					// Scale/position stuff in the scene itself with this method, that the scene must implement.
					scene.resize();
				}
			}
		}
	}
}