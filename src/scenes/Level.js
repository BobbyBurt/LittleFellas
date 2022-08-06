
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// originPoint
		const originPoint = this.add.ellipse(0, 0, 128, 128);
		originPoint.scaleX = 0.1;
		originPoint.scaleY = 0.1;
		originPoint.isFilled = true;

		// fella
		const fella = this.add.sprite(603, 189, "fella", 0);
		fella.tintTopLeft = 6343410;
		fella.tintTopRight = 6343410;
		fella.tintBottomLeft = 6343410;
		fella.tintBottomRight = 6343410;

		// tankBounds
		const tankBounds = this.add.rectangle(910, 0, 128, 128);
		tankBounds.scaleX = 6;
		tankBounds.scaleY = 14.555905671444922;
		tankBounds.setOrigin(0, 0.5);
		tankBounds.isFilled = true;
		tankBounds.fillColor = 6974058;

		// tankBounds_1
		const tankBounds_1 = this.add.rectangle(-910, 0, 128, 128);
		tankBounds_1.scaleX = 6;
		tankBounds_1.scaleY = 14.555905671444922;
		tankBounds_1.setOrigin(1, 0.5);
		tankBounds_1.isFilled = true;
		tankBounds_1.fillColor = 6974058;

		// tankBounds_2
		const tankBounds_2 = this.add.rectangle(0, 440, 128, 128);
		tankBounds_2.scaleX = 26.773871801638673;
		tankBounds_2.scaleY = 4;
		tankBounds_2.setOrigin(0.5, 0);
		tankBounds_2.isFilled = true;
		tankBounds_2.fillColor = 6974058;

		// tankBounds_3
		const tankBounds_3 = this.add.rectangle(0, -440, 128, 128);
		tankBounds_3.scaleX = 26.773871801638673;
		tankBounds_3.scaleY = 4;
		tankBounds_3.setOrigin(0.5, 1);
		tankBounds_3.isFilled = true;
		tankBounds_3.fillColor = 6974058;

		// fella_5
		const fella_5 = this.add.sprite(-635, -132, "fella", 0);
		fella_5.scaleX = 0.5;
		fella_5.scaleY = 0.5;
		fella_5.tintTopLeft = 14170682;
		fella_5.tintTopRight = 14170682;
		fella_5.tintBottomLeft = 14170682;
		fella_5.tintBottomRight = 14170682;

		// fella_1
		const fella_1 = this.add.sprite(-474, -48, "fella", 0);
		fella_1.scaleX = 0.5;
		fella_1.scaleY = 0.5;
		fella_1.tintTopLeft = 14170682;
		fella_1.tintTopRight = 14170682;
		fella_1.tintBottomLeft = 14170682;
		fella_1.tintBottomRight = 14170682;

		// fella_2
		const fella_2 = this.add.sprite(-659, 37, "fella", 0);
		fella_2.scaleX = 0.5;
		fella_2.scaleY = 0.5;
		fella_2.tintTopLeft = 14170682;
		fella_2.tintTopRight = 14170682;
		fella_2.tintBottomLeft = 14170682;
		fella_2.tintBottomRight = 14170682;

		// fella_3
		const fella_3 = this.add.sprite(-691, 196, "fella", 0);
		fella_3.scaleX = 0.5;
		fella_3.scaleY = 0.5;
		fella_3.tintTopLeft = 14170682;
		fella_3.tintTopRight = 14170682;
		fella_3.tintBottomLeft = 14170682;
		fella_3.tintBottomRight = 14170682;

		// fella_4
		const fella_4 = this.add.sprite(-292, 85, "fella", 0);
		fella_4.scaleX = 0.5;
		fella_4.scaleY = 0.5;
		fella_4.tintTopLeft = 14170682;
		fella_4.tintTopRight = 14170682;
		fella_4.tintBottomLeft = 14170682;
		fella_4.tintBottomRight = 14170682;

		// fella_6
		const fella_6 = this.add.sprite(-581, -283, "fella", 0);
		fella_6.scaleX = 0.5;
		fella_6.scaleY = 0.5;
		fella_6.tintTopLeft = 14170682;
		fella_6.tintTopRight = 14170682;
		fella_6.tintBottomLeft = 14170682;
		fella_6.tintBottomRight = 14170682;

		// fella_7
		const fella_7 = this.add.sprite(-477, 86, "fella", 0);
		fella_7.tintTopLeft = 6343410;
		fella_7.tintTopRight = 6343410;
		fella_7.tintBottomLeft = 6343410;
		fella_7.tintBottomRight = 6343410;

		// fella_8
		const fella_8 = this.add.sprite(321, 94, "fella", 0);
		fella_8.tintTopLeft = 6343410;
		fella_8.tintTopRight = 6343410;
		fella_8.tintBottomLeft = 6343410;
		fella_8.tintBottomRight = 6343410;

		// MobileTextcontainer
		const mobileTextcontainer = this.add.container(0, 0);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(0, 0, 128, 128);
		rectangle_3.scaleX = 1.699990245600508;
		rectangle_3.scaleY = 1.1568898761624102;
		rectangle_3.setOrigin(0, 0);
		rectangle_3.isFilled = true;
		rectangle_3.fillColor = 2894892;
		rectangle_3.fillAlpha = 0.5;
		mobileTextcontainer.add(rectangle_3);

		// mobileText
		const mobileText = this.add.text(20, 20, "", {});
		mobileText.text = "Mobile: ????";
		mobileText.setStyle({ "fontFamily": "Arial", "fontSize": "20px" });
		mobileTextcontainer.add(mobileText);

		// spriteCountText
		const spriteCountText = this.add.text(20, 50, "", {});
		spriteCountText.text = "sprites: 0";
		spriteCountText.setStyle({ "fontFamily": "Arial", "fontSize": "20px" });
		mobileTextcontainer.add(spriteCountText);

		// fpsText
		const fpsText = this.add.text(20, 80, "", {});
		fpsText.text = "FPS: ??";
		fpsText.setStyle({ "fontFamily": "Arial", "fontSize": "20px" });
		mobileTextcontainer.add(fpsText);

		// zoomText
		const zoomText = this.add.text(20, 110, "", {});
		zoomText.text = "Cam zoom: ??";
		zoomText.setStyle({ "fontFamily": "Arial", "fontSize": "20px" });
		mobileTextcontainer.add(zoomText);

		// MobileTextcontainer_1
		const mobileTextcontainer_1 = this.add.container(2, 1021);

		// rectangle
		const rectangle = this.add.rectangle(0, -60.68319434475234, 128, 128);
		rectangle.scaleX = 3.56967178859774;
		rectangle.scaleY = 0.47656251661110416;
		rectangle.setOrigin(0, 0);
		rectangle.isFilled = true;
		rectangle.fillColor = 2894892;
		rectangle.fillAlpha = 0.5;
		mobileTextcontainer_1.add(rectangle);

		// instructionText
		const instructionText = this.add.text(20, -40.68319434475234, "", {});
		instructionText.text = "You can drag the little fellas around the screen";
		instructionText.setStyle({ "fontFamily": "Arial", "fontSize": "20px" });
		mobileTextcontainer_1.add(instructionText);

		// buttonTest2
		const buttonTest2 = this.add.rectangle(2472, 962, 128, 128);
		buttonTest2.scaleX = 3.992183120085278;
		buttonTest2.scaleY = 1.8500935500799485;
		buttonTest2.setOrigin(1, 1);
		buttonTest2.alpha = 0.2;
		buttonTest2.isFilled = true;
		buttonTest2.fillColor = 15357244;

		// buttonTest
		const buttonTest = this.add.rectangle(466, 981, 128, 128);
		buttonTest.scaleX = 2.4726917897363947;
		buttonTest.scaleY = 1.8500935500799485;
		buttonTest.setOrigin(0, 1);
		buttonTest.alpha = 0.2;
		buttonTest.isFilled = true;
		buttonTest.fillColor = 3970794;

		// lists
		const alignToCameraLeft = [mobileTextcontainer, mobileTextcontainer_1, buttonTest];
		const alignToCameraRight = [buttonTest2];
		const alignToCameraTop = [mobileTextcontainer];
		const alignToCameraBottom = [buttonTest2, mobileTextcontainer_1, buttonTest];
		const resizeScale = [];
		const alignToCameraMiddle = [];
		const alignToCameraCenter = [];
		const pantsTest = [];
		const fellasList = [fella, fella_5, fella_8, fella_7, fella_6, fella_4, fella_3, fella_2, fella_1];
		const bounds = [tankBounds, tankBounds_2, tankBounds_1, tankBounds_3];

		// fella (components)
		const fellaAnimation = new Animation(fella);
		fellaAnimation.animationKey = "bob";
		new randomMove(fella);

		// tankBounds (components)
		new PhysicsBody(tankBounds);

		// tankBounds_1 (components)
		new PhysicsBody(tankBounds_1);

		// tankBounds_2 (components)
		new PhysicsBody(tankBounds_2);

		// tankBounds_3 (components)
		new PhysicsBody(tankBounds_3);

		// fella_5 (components)
		const fella_5Animation = new Animation(fella_5);
		fella_5Animation.animationKey = "bob";
		new randomMove(fella_5);

		// fella_1 (components)
		const fella_1Animation = new Animation(fella_1);
		fella_1Animation.animationKey = "bob";
		new randomMove(fella_1);

		// fella_2 (components)
		const fella_2Animation = new Animation(fella_2);
		fella_2Animation.animationKey = "bob";
		new randomMove(fella_2);

		// fella_3 (components)
		const fella_3Animation = new Animation(fella_3);
		fella_3Animation.animationKey = "bob";
		new randomMove(fella_3);

		// fella_4 (components)
		const fella_4Animation = new Animation(fella_4);
		fella_4Animation.animationKey = "bob";
		new randomMove(fella_4);

		// fella_6 (components)
		const fella_6Animation = new Animation(fella_6);
		fella_6Animation.animationKey = "bob";
		new randomMove(fella_6);

		// fella_7 (components)
		const fella_7Animation = new Animation(fella_7);
		fella_7Animation.animationKey = "bob";
		new randomMove(fella_7);

		// fella_8 (components)
		const fella_8Animation = new Animation(fella_8);
		fella_8Animation.animationKey = "bob";
		new randomMove(fella_8);

		// mobileTextcontainer (components)
		const mobileTextcontainerAlignOffsets = new AlignOffsets(mobileTextcontainer);
		mobileTextcontainerAlignOffsets.x = 20;
		mobileTextcontainerAlignOffsets.y = 20;

		// mobileTextcontainer_1 (components)
		const mobileTextcontainer_1AlignOffsets = new AlignOffsets(mobileTextcontainer_1);
		mobileTextcontainer_1AlignOffsets.x = 20;
		mobileTextcontainer_1AlignOffsets.y = -20;

		// buttonTest2 (components)
		const buttonTest2AlignOffsets = new AlignOffsets(buttonTest2);
		buttonTest2AlignOffsets.x = -100;
		buttonTest2AlignOffsets.y = -100;
		const buttonTest2SimpleButton = new SimpleButton(buttonTest2);
		buttonTest2SimpleButton.bindButton = "right";
		const buttonTest2DeviceDependentActivation = new DeviceDependentActivation(buttonTest2);
		buttonTest2DeviceDependentActivation.ifMobile = true;

		// buttonTest (components)
		const buttonTestAlignOffsets = new AlignOffsets(buttonTest);
		buttonTestAlignOffsets.x = 450;
		buttonTestAlignOffsets.y = -100;
		const buttonTestSimpleButton = new SimpleButton(buttonTest);
		buttonTestSimpleButton.bindButton = "left";
		const buttonTestDeviceDependentActivation = new DeviceDependentActivation(buttonTest);
		buttonTestDeviceDependentActivation.ifMobile = true;

		this.fella = fella;
		this.tankBounds = tankBounds;
		this.tankBounds_1 = tankBounds_1;
		this.tankBounds_2 = tankBounds_2;
		this.tankBounds_3 = tankBounds_3;
		this.fella_5 = fella_5;
		this.fella_1 = fella_1;
		this.fella_2 = fella_2;
		this.fella_3 = fella_3;
		this.fella_4 = fella_4;
		this.fella_6 = fella_6;
		this.fella_7 = fella_7;
		this.fella_8 = fella_8;
		this.mobileText = mobileText;
		this.spriteCountText = spriteCountText;
		this.fpsText = fpsText;
		this.zoomText = zoomText;
		this.instructionText = instructionText;
		this.buttonTest2 = buttonTest2;
		this.buttonTest = buttonTest;
		this.alignToCameraLeft = alignToCameraLeft;
		this.alignToCameraRight = alignToCameraRight;
		this.alignToCameraTop = alignToCameraTop;
		this.alignToCameraBottom = alignToCameraBottom;
		this.resizeScale = resizeScale;
		this.alignToCameraMiddle = alignToCameraMiddle;
		this.alignToCameraCenter = alignToCameraCenter;
		this.pantsTest = pantsTest;
		this.fellasList = fellasList;
		this.bounds = bounds;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Sprite} */
	fella;
	/** @type {Phaser.GameObjects.Rectangle} */
	tankBounds;
	/** @type {Phaser.GameObjects.Rectangle} */
	tankBounds_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	tankBounds_2;
	/** @type {Phaser.GameObjects.Rectangle} */
	tankBounds_3;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_5;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_1;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_2;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_3;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_4;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_6;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_7;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_8;
	/** @type {Phaser.GameObjects.Text} */
	mobileText;
	/** @type {Phaser.GameObjects.Text} */
	spriteCountText;
	/** @type {Phaser.GameObjects.Text} */
	fpsText;
	/** @type {Phaser.GameObjects.Text} */
	zoomText;
	/** @type {Phaser.GameObjects.Text} */
	instructionText;
	/** @type {Phaser.GameObjects.Rectangle} */
	buttonTest2;
	/** @type {Phaser.GameObjects.Rectangle} */
	buttonTest;
	/** @type {Array<Phaser.GameObjects.Container|Phaser.GameObjects.Rectangle>} */
	alignToCameraLeft;
	/** @type {Phaser.GameObjects.Rectangle[]} */
	alignToCameraRight;
	/** @type {Phaser.GameObjects.Container[]} */
	alignToCameraTop;
	/** @type {Array<Phaser.GameObjects.Rectangle|Phaser.GameObjects.Container>} */
	alignToCameraBottom;
	/** @type {Array<any>} */
	resizeScale;
	/** @type {Array<any>} */
	alignToCameraMiddle;
	/** @type {Array<any>} */
	alignToCameraCenter;
	/** @type {Array<any>} */
	pantsTest;
	/** @type {Phaser.GameObjects.Sprite[]} */
	fellasList;
	/** @type {Phaser.GameObjects.Rectangle[]} */
	bounds;

	/* START-USER-CODE */

	create() {

		this.editorCreate();

		this.tankWidth = 1820;
		this.tankHeight = 880;

		this.minScreenWidth = this.tankWidth + (20 * 2);
		this.minScreenHeight = this.tankHeight + (50 * 2);
		// added number is the min pixel buffer between tank and screen edge on sides

		// adaptive zoom
		if (this.scale.width < this.minScreenWidth || this.scale.height < this.minScreenHeight) {
			// zoom out incrementally until we're past width and height min

			for(let i = 0; i < 20; i++) {

				this.cameras.main.setZoom(1 - (i * .05));

				// check min
				// console.log('w: ' + this.cameras.main.width / (1 - (i * .05)))
				// console.log('h: ' + this.cameras.main.height / (1 - (i * .05)))

				if(
					(this.cameras.main.width / (1 - (i * .05))) > this.minScreenWidth &&
					(this.cameras.main.height / (1 - (i * .05))) > this.minScreenHeight
				) 
					{

					break;
				}
			}

		}

		// }
			// this.cameras.main.setZoom(
			// 	Phaser.Math.Linear(1.2, .65, this.scale.zoom)
			// );
		this.zoomText.setText('cam zoom: ' + this.cameras.main.zoom);
		this.cameras.main.centerOn(0, 0);

		// INPUT
		// using Psychogoldfish's input wrapper solution

		this.controls = new InputWrapper();

		let keys = this.input.keyboard.addKeys({
			left_1: 'left',
			left_2: 'A',
			right_1: 'right',
			right_2: 'D'
		});

		this.controls.bindKey('left', keys.left_1);
		this.controls.bindKey('right', keys.right_1);

		this.controls.bindButton(SimpleButton.getComponent(this.buttonTest).bindButton, SimpleButton.getComponent(this.buttonTest));
		this.controls.bindButton(SimpleButton.getComponent(this.buttonTest2).bindButton, SimpleButton.getComponent(this.buttonTest2));
		// since the button to bind this to is a property, this could be a loop of all buttons

		// example of using events for inputs
		this.controls.onPress('left', () => {

		});

		// spawning sprites
		this.controls.onPress('right', () => {

			for (let i = 0; i < 10; i++) {

				// const pantsPrefab_0 = new PantsPrefab(this, Phaser.Math.RND.between(0, this.scale.width), Phaser.Math.RND.between(150, this.scale.height - 100));
				// this.add.existing(pantsPrefab_0);
				// this.pantsTest.push(pantsPrefab_0);

				// // update sprite count
				// this.spriteCount++;
				// this.spriteCountText.setText('sprites: ' + this.pantsTest.length);
			}
		});

		// CAMERA SETTINGS
		// this needs to be done at every scene's creation
		this.cameras.main.setViewport(0, 0, this.scale.width, this.scale.height);
		this.cameras.main.setRoundPixels(true);

		this.mobileText.setText('mobile: ' + this.registry.get('mobile'));

		// so multiple fingers can be used
		this.input.addPointer(4);

		this.initColliders();

		this.resize();
	}

	update() {

		if (this.controls.isDown('left')) {

			// this.cameras.main.scrollX--;
			// this.cameras.main.zoom += .005;

			for(let i = 0; i < this.fellasList.length; i++) {

				// this.fellasList[i].body.setVelocity(-400, 0);
			}
		}
		else if (this.controls.isDown('right')) {

			// this.cameras.main.scrollX++;
			// this.cameras.main.zoom -= .005;

			for(let i = 0; i < this.fellasList.length; i++) {

				// this.fellasList[i].body.setVelocity(400, 0);
			}
		}
		else {

			for(let i = 0; i < this.fellasList.length; i++) {

				// this.fellasList[i].body.setVelocity(0, 0);
			}
		}

		this.fpsText.setText('FPS: ' + this.game.loop.actualFps);


	}

	/** scene specific resizing adjustments
	 * 
	 * called at window resize from main.js binded method
	 */
	resize() {

		// this.cameras.main.setScroll(-this.scale.width/2, -this.scale.height/2);
		// this only really makes scalable scene object placement easier if I'm typing in coordinates, which I'm not really doing
		// otherwise this messes with scrollfactor

		this.alignObjects();

		this.scaleObjects();
	}

	/** setup collision physics */
	initColliders() {

		// tank walls
		for(let i = 0; i < this.bounds.length; i++) {

			this.physics.add.existing(this.bounds[i], true);
			// this.bounds[i].body.setImmovable(true);
			// ^ this is redundant now because we're making static bodies, which don't move
		}

		// fellas
		for(let i = 0; i < this.fellasList.length; i++) {

			const _fella = this.fellasList[i];

			this.physics.add.existing(_fella);

			// damping avoids axis drift
			// drag property is a multiplier of velocity
			_fella.body.setDamping(true);
			_fella.body.setDrag(.1, .1);

			// debug text
			this.spriteCountText.setText('sprites: ' + this.fellasList.length);

			_fella.setInteractive({ draggable: true });
			_fella.on('drag', function(pointer, dragX, dragY) {

				this.x = dragX;
				this.y = dragY;

				this.body.setVelocity(0);
			});
			_fella.on('dragend', function(pointer, dragX, dragY) {

				console.log(
					pointer.velocity
					);

				this.body.setVelocity(
					pointer.velocity.x * 15, pointer.velocity.y * 15
					);
			});
		}

		// setup collisions
		this.physics.add.collider(this.fellasList, this.bounds);
		// this.physics.add.collider(this.fellasList, this.fellasList);
	}

	enforceBoundaries() {

						// left boundary
						if (dragX > this.boundariesX.left) {

							this.x = dragX;
						}
						else {

							this.x = this.boundariesX.left;
						}

						// right boundary
						if (dragX < this.boundariesX.right) {

							this.x = dragX;
						}
						else {

							this.x = this.boundariesX.right;
						}
	}

	/** align objects included in the align left/right/top/bottom lists
	 * 
	 * offset objects by values in their AlignOffsets component if present
	 * 
	 * sets objects' scroll factor to 0 on axis of alignment
	 * 
	 * called at resize
	 */
	alignObjects() {

		// LEFT
		for(let i = 0; i < this.alignToCameraLeft.length; i++) {

			// get offset value from component if present
			let offsetX = 0;
			if (AlignOffsets.getComponent(this.alignToCameraLeft[i])) offsetX = AlignOffsets.getComponent(this.alignToCameraLeft[i]).x;

			this.alignToCameraLeft[i].setX(offsetX);

			this.alignToCameraLeft[i].scrollFactorX = 0;
		};

		// RIGHT
		for(let i = 0; i < this.alignToCameraRight.length; i++) {

			// get offset value from component if present
			let offsetX = 0;
			if (AlignOffsets.getComponent(this.alignToCameraRight[i])) offsetX = AlignOffsets.getComponent(this.alignToCameraRight[i]).x;

			this.alignToCameraRight[i].setX(this.scale.width + offsetX);

			this.alignToCameraRight[i].scrollFactorX = 0;
		};

		// TOP
		for(let i = 0; i < this.alignToCameraTop.length; i++) {

			// get offset value from component if present
			let offsetY = 0;
			if (AlignOffsets.getComponent(this.alignToCameraTop[i])) offsetY = AlignOffsets.getComponent(this.alignToCameraTop[i]).y;

			this.alignToCameraTop[i].setY(offsetY);

			this.alignToCameraTop[i].scrollFactorY = 0;
		};

		// BOTTOM
		for(let i = 0; i < this.alignToCameraBottom.length; i++) {

			// get offset value from component if present
			let offsetY = 0;
			if (AlignOffsets.getComponent(this.alignToCameraBottom[i])) offsetY = AlignOffsets.getComponent(this.alignToCameraBottom[i]).y;

			this.alignToCameraBottom[i].setY(this.scale.height+ offsetY);

			this.alignToCameraBottom[i].scrollFactorY = 0;
		};

		// MIDDLE (vertical)
		for(let i = 0; i < this.alignToCameraMiddle.length; i++) {

			// get offset value from component if present
			let offsetY = 0;
			if (AlignOffsets.getComponent(this.alignToCameraMiddle[i])) offsetY = AlignOffsets.getComponent(this.alignToCameraMiddle[i]).y;

			this.alignToCameraMiddle[i].setY((this.scale.height / 2) + offsetY);

			this.alignToCameraMiddle[i].scrollFactorY = 0;
		};

		// CENTER (horizontal)
		for(let i = 0; i < this.alignToCameraCenter.length; i++) {

			// get offset value from component if present
			let offsetX = 0;
			if (AlignOffsets.getComponent(this.alignToCameraCenter[i])) offsetX = AlignOffsets.getComponent(this.alignToCameraCenter[i]).x;

			this.alignToCameraCenter[i].setX((this.scale.width / 2) + offsetX);

			this.alignToCameraCenter[i].scrollFactorX = 0;
		};

	}

	/** scale objects included in scale list according to values set in it's ImageScale component */
	scaleObjects() {

		for (let i = 0; i < this.resizeScale.length; i++) {

			let scaleMultiplier = 1;
			if (this.scale.zoom <= 1) scaleMultiplier = .5;
			if (this.scale.zoom <= .75) scaleMultiplier = .75;
			if (this.scale.zoom <= .50) scaleMultiplier = 1;

			this.resizeScale[i].setScale(scaleMultiplier, scaleMultiplier);

			// if certain images need to be scaled differently, then add a component which includes such properties
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
