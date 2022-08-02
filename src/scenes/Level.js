
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

		// buttonTest2
		const buttonTest2 = this.add.rectangle(2472, 962, 128, 128);
		buttonTest2.scaleX = 3.992183120085278;
		buttonTest2.scaleY = 1.8500935500799485;
		buttonTest2.setOrigin(1, 1);
		buttonTest2.isFilled = true;
		buttonTest2.fillColor = 15357244;

		// originPoint
		const originPoint = this.add.ellipse(0, 0, 128, 128);
		originPoint.scaleX = 0.1;
		originPoint.scaleY = 0.1;
		originPoint.isFilled = true;

		// MobileTextcontainer
		const mobileTextcontainer = this.add.container(0, 0);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(0, 0, 128, 128);
		rectangle_3.scaleX = 1.402470438441591;
		rectangle_3.scaleY = 0.9012382160764663;
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

		// MobileTextcontainer_1
		const mobileTextcontainer_1 = this.add.container(2, 1021);

		// rectangle
		const rectangle = this.add.rectangle(0, -60.68319434475234, 128, 128);
		rectangle.scaleX = 3.2396598487299233;
		rectangle.scaleY = 0.47656251661110416;
		rectangle.setOrigin(0, 0);
		rectangle.isFilled = true;
		rectangle.fillColor = 2894892;
		rectangle.fillAlpha = 0.5;
		mobileTextcontainer_1.add(rectangle);

		// mobileText_1
		const mobileText_1 = this.add.text(20, -40.68319434475234, "", {});
		mobileText_1.text = "Use the right button to spawn more sprites";
		mobileText_1.setStyle({ "fontFamily": "Arial", "fontSize": "20px" });
		mobileTextcontainer_1.add(mobileText_1);

		// buttonTest
		const buttonTest = this.add.rectangle(466, 981, 128, 128);
		buttonTest.scaleX = 2.4726917897363947;
		buttonTest.scaleY = 1.8500935500799485;
		buttonTest.setOrigin(0, 1);
		buttonTest.isFilled = true;
		buttonTest.fillColor = 3970794;

		// fella
		const fella = this.add.sprite(537, 507, "fella", 0);

		// pantsPrefab
		const pantsPrefab = new PantsPrefab(this, 946, 496);
		this.add.existing(pantsPrefab);

		// tankBounds
		const tankBounds = this.add.rectangle(2555, 518, 128, 128);
		tankBounds.scaleY = 8.512184696082114;
		tankBounds.isFilled = true;

		// tankBounds_1
		const tankBounds_1 = this.add.rectangle(-39, 506, 128, 128);
		tankBounds_1.scaleY = 8.512184696082114;
		tankBounds_1.isFilled = true;

		// tankBounds_2
		const tankBounds_2 = this.add.rectangle(1370, 1069, 128, 128);
		tankBounds_2.scaleX = 26.773871801638673;
		tankBounds_2.scaleY = 1.0128274046896948;
		tankBounds_2.isFilled = true;

		// tankBounds_3
		const tankBounds_3 = this.add.rectangle(1442, -38, 128, 128);
		tankBounds_3.scaleX = 26.773871801638673;
		tankBounds_3.scaleY = 1.0128274046896948;
		tankBounds_3.isFilled = true;

		// lists
		const alignToCameraLeft = [mobileTextcontainer, mobileTextcontainer_1, buttonTest];
		const alignToCameraRight = [buttonTest2];
		const alignToCameraTop = [mobileTextcontainer];
		const alignToCameraBottom = [buttonTest2, mobileTextcontainer_1, buttonTest];
		const resizeScale = [];
		const alignToCameraMiddle = [];
		const alignToCameraCenter = [];
		const pantsTest = [];
		const fellasList = [fella];
		const bounds = [tankBounds, tankBounds_2, tankBounds_1, tankBounds_3];

		// buttonTest2 (components)
		const buttonTest2AlignOffsets = new AlignOffsets(buttonTest2);
		buttonTest2AlignOffsets.x = -100;
		buttonTest2AlignOffsets.y = -100;
		const buttonTest2SimpleButton = new SimpleButton(buttonTest2);
		buttonTest2SimpleButton.bindButton = "right";
		const buttonTest2DeviceDependentActivation = new DeviceDependentActivation(buttonTest2);
		buttonTest2DeviceDependentActivation.ifMobile = true;

		// mobileTextcontainer (components)
		const mobileTextcontainerAlignOffsets = new AlignOffsets(mobileTextcontainer);
		mobileTextcontainerAlignOffsets.x = 20;
		mobileTextcontainerAlignOffsets.y = 20;

		// mobileTextcontainer_1 (components)
		const mobileTextcontainer_1AlignOffsets = new AlignOffsets(mobileTextcontainer_1);
		mobileTextcontainer_1AlignOffsets.x = 20;
		mobileTextcontainer_1AlignOffsets.y = -20;

		// buttonTest (components)
		const buttonTestAlignOffsets = new AlignOffsets(buttonTest);
		buttonTestAlignOffsets.x = 450;
		buttonTestAlignOffsets.y = -100;
		const buttonTestSimpleButton = new SimpleButton(buttonTest);
		buttonTestSimpleButton.bindButton = "left";
		const buttonTestDeviceDependentActivation = new DeviceDependentActivation(buttonTest);
		buttonTestDeviceDependentActivation.ifMobile = true;

		// fella (components)
		const fellaAnimation = new Animation(fella);
		fellaAnimation.animationKey = "bob";

		// tankBounds (components)
		new PhysicsBody(tankBounds);

		// tankBounds_1 (components)
		new PhysicsBody(tankBounds_1);

		// tankBounds_2 (components)
		new PhysicsBody(tankBounds_2);

		// tankBounds_3 (components)
		new PhysicsBody(tankBounds_3);

		this.buttonTest2 = buttonTest2;
		this.mobileText = mobileText;
		this.spriteCountText = spriteCountText;
		this.fpsText = fpsText;
		this.mobileText_1 = mobileText_1;
		this.buttonTest = buttonTest;
		this.fella = fella;
		this.tankBounds = tankBounds;
		this.tankBounds_1 = tankBounds_1;
		this.tankBounds_2 = tankBounds_2;
		this.tankBounds_3 = tankBounds_3;
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

	/** @type {Phaser.GameObjects.Rectangle} */
	buttonTest2;
	/** @type {Phaser.GameObjects.Text} */
	mobileText;
	/** @type {Phaser.GameObjects.Text} */
	spriteCountText;
	/** @type {Phaser.GameObjects.Text} */
	fpsText;
	/** @type {Phaser.GameObjects.Text} */
	mobileText_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	buttonTest;
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

	// Write more your code here

	create() {

		this.editorCreate();

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

				const pantsPrefab_0 = new PantsPrefab(this, Phaser.Math.RND.between(0, this.scale.width), Phaser.Math.RND.between(150, this.scale.height - 100));
				this.add.existing(pantsPrefab_0);
				this.pantsTest.push(pantsPrefab_0);

				// update sprite count
				this.spriteCount++;
				this.spriteCountText.setText('sprites: ' + this.pantsTest.length);
			}
		});

		// CAMERA SETTINGS
		// this needs to be done at every scene's creation
		this.cameras.main.setViewport(0, 0, this.scale.width, this.scale.height);
		this.cameras.main.setRoundPixels(true);

		this.mobileText.setText('mobile: ' + this.registry.get('mobile'));

		// setup collision
		this.initColliders();

		this.resize();
	}

	update() {

		if (this.controls.isDown('left')) {

			// this.cameras.main.scrollX--;
			// this.cameras.main.zoom += .005;

			this.fella.body.setVelocity(-400, 0);
		}
		else if (this.controls.isDown('right')) {

			// this.cameras.main.scrollX++;
			// this.cameras.main.zoom -= .005;

			this.fella.body.setVelocity(400, 0);
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

		this.physics.add.existing(this.fella);

		for(let i = 0; i < this.bounds.length; i++) {

			this.physics.add.existing(this.bounds[i]);
			this.bounds[i].body.setImmovable(true);
		}

		this.physics.add.collider(this.fella, this.bounds);

		// this.physics.add.collider(this.fellasList, this.bounds);
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
