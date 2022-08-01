
// You can write more code here

// import eventsCenter from '../eventsCenter.js'

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// guapen
		const guapen = this.add.image(0, 0, "guapen");
		guapen.scaleX = 0.5;
		guapen.scaleY = 0.5;

		// progress
		const progress = this.add.text(0, 136, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "fontFamily": "Arial", "fontSize": "30px" });

		// startText
		const startText = this.add.text(0, 192, "", {});
		startText.setOrigin(0.5, 0.5);
		startText.visible = false;
		startText.text = "Click / tap to start";
		startText.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "30px" });

		// progress (components)
		new PreloadText(progress);

		// startText (components)
		new OnLoadAppear(startText);

		this.progress = progress;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	progress;

	/* START-USER-CODE */

	preload() {

		this.editorCreate();

		this.editorPreload();

		this.resize();

		// CAMERA SETTINGS
		// this needs to be done at every scene's creation
		this.cameras.main.setViewport(0, 0, this.scale.width, this.scale.height);
		this.cameras.main.setRoundPixels(true);

		this.resize();

		// click / touch input events will inform registry if player is on mobile or desktop
		window.addEventListener('touchstart', this.onPointer);
		window.addEventListener('click', this.onPointer);


			// TODO - remove these events once they serve their purpose, or the scene will keep getting started

			// TODO: impliment audio hack for safari: https://psychogoldfish.newgrounds.com/news/post/1086217
	}

	/** callback for window event
	 * 
	 * sets registry's mobile value based on input
	 * 
	 * removes event listener
	 * 
	 * starts scene
	 */
	onPointer = (event) => {

		if (event.type == 'touchstart') {

			this.registry.set('mobile', true);
		}
		else if (event.type == 'click') {

			this.registry.set('mobile', false);
		}

		window.removeEventListener('touchstart', this.onPointer);
		window.removeEventListener('click', this.onPointer);

		this.scene.start("level");
	}

	resize ()
    {
		this.cameras.main.setScroll(-this.scale.width/2, -this.scale.height/2);
    }



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
