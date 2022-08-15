
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

		// gradientBG
		const gradientBG = this.add.image(0, 0, "white");
		gradientBG.scaleX = 108.44490773370157;
		gradientBG.scaleY = 117.19930861667765;
		gradientBG.tintTopLeft = 11919343;
		gradientBG.tintTopRight = 15132101;
		gradientBG.tintBottomLeft = 14152444;
		gradientBG.tintBottomRight = 15264470;

		// progressText
		const progressText = this.add.text(0, 189, "", {});
		progressText.setOrigin(0.5, 0.5);
		progressText.text = "0%";
		progressText.setStyle({ "color": "#ffffffff", "fontFamily": "verdana", "fontSize": "40px", "fontStyle": "bold", "stroke": "#000000ff", "strokeThickness":5});

		// startText
		const startText = this.add.text(0, 0, "", {});
		startText.setOrigin(0.5, 0.5);
		startText.visible = false;
		startText.text = "Click / tap the screen!";
		startText.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "verdana", "fontSize": "40px", "fontStyle": "bold", "stroke": "#000000ff", "strokeThickness":5});

		// creditsText
		const creditsText = this.add.text(0, 0, "", {});
		creditsText.setOrigin(0.5, 0.5);
		creditsText.visible = false;
		creditsText.text = "BobbyBurt\nMrPakoMan\nOrkOrk\nRedAndrew\n0chin\nCryptospore\nDry";
		creditsText.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "verdana", "fontSize": "40px", "fontStyle": "bold", "stroke": "#000000ff", "strokeThickness":5});

		// presentText
		const presentText = this.add.text(0, 0, "", {});
		presentText.setOrigin(0.5, 0.5);
		presentText.visible = false;
		presentText.text = "present";
		presentText.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "verdana", "fontSize": "40px", "fontStyle": "bold", "stroke": "#000000ff", "strokeThickness":5});

		// startText2
		const startText2 = this.add.text(0, 272, "", {});
		startText2.setOrigin(0.5, 0.5);
		startText2.visible = false;
		startText2.text = "Click / tap to begin";
		startText2.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "verdana", "fontSize": "40px", "fontStyle": "bold", "stroke": "#000000ff", "strokeThickness":5});

		// progressText (components)
		new PreloadText(progressText);

		this.gradientBG = gradientBG;
		this.progressText = progressText;
		this.startText = startText;
		this.creditsText = creditsText;
		this.presentText = presentText;
		this.startText2 = startText2;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	gradientBG;
	/** @type {Phaser.GameObjects.Text} */
	progressText;
	/** @type {Phaser.GameObjects.Text} */
	startText;
	/** @type {Phaser.GameObjects.Text} */
	creditsText;
	/** @type {Phaser.GameObjects.Text} */
	presentText;
	/** @type {Phaser.GameObjects.Text} */
	startText2;

	/* START-USER-CODE */

	/** loading, loaded, title, await start, transition */
	state = 'loading';

	preload() {

		this.editorCreate();

		this.editorPreload();

		this.resize();

		// CAMERA SETTINGS
		// this needs to be done at every scene's creation
		this.cameras.main.setViewport(0, 0, this.scale.width, this.scale.height);
		this.cameras.main.setRoundPixels(true);
		this.cameras.main.setBackgroundColor(0xD7F2FC);

		this.resize();

		this.loading = this.add.sprite(0, 0).play('loading')
		this.loading2 = this.add.sprite(0, 0).play('loading-2')

		// click / touch input events will inform registry if player is on mobile or desktop
		window.addEventListener('touchstart', this.onPointer);
		window.addEventListener('click', this.onPointer);

		this.load.on(Phaser.Loader.Events.COMPLETE, () => {

			this.state = 'loaded';

			this.loading.setVisible(false);
			this.loading2.setVisible(false);
			this.progressText.setVisible(false);
			this.startText.setVisible(true);
		});
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

		// loaded
		if (this.state == 'loaded') {

			// set mobile
			if (event.type == 'touchstart') {

				this.registry.set('mobile', true);
			}
			else if (event.type == 'click') {

				this.registry.set('mobile', false);
			}

			// titlescreen
			this.state = 'title';

			this.startText.setVisible(false);

			this.music = this.sound.add('overgrowth', {volume: .4});
			this.music.play();

			// DEBUG
			// this.start();


			this.time.delayedCall(500, () => {

				this.creditsText.setVisible(true);

				this.time.delayedCall(2500, () => {

					this.creditsText.setVisible(false);
					this.presentText.setVisible(true);

					this.time.delayedCall(1500, () => {

						this.presentText.setVisible(false);
						this.logo = this.add.image(0, -79, 'logo');
						this.kicking = this.add.sprite(248, -117).play('kicking');

						this.time.delayedCall(3000, () => {

							this.startText2.setVisible(true);
							this.state = 'await-start';
						});
					});
				});
			});


		}


		// start
		if (this.state == 'await-start') {

			this.start();
		}
	}

	start() {

		window.removeEventListener('touchstart', this.onPointer);
		window.removeEventListener('click', this.onPointer);

		this.music.stop();

		// start scenes
		this.scene.stop(this);
		this.scene.launch("level");
	}

	resize ()
    {
		this.cameras.main.setScroll(-this.scale.width/2, -this.scale.height/2);
    }



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
