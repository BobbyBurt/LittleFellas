
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

		// dustforce_SS
		const dustforce_SS = this.add.image(1302, 0, "dustforce-SS-5");
		dustforce_SS.setOrigin(0, 0);
		dustforce_SS.flipX = true;

		// dustforce_SS_5
		const dustforce_SS_5 = this.add.image(-617, 0, "dustforce-SS-5");
		dustforce_SS_5.setOrigin(0, 0);

		// practice_dustman
		const practice_dustman = this.add.image(1174, 464, "practice-dustman");

		// dino_1
		const dino_1 = this.add.image(1326, 99, "dino");
		dino_1.setOrigin(0.5, 0);

		// pants
		const pants = this.add.sprite(813, 724, "dino");

		// buttonTest
		const buttonTest = this.add.rectangle(79, 962, 128, 128);
		buttonTest.scaleX = 3.992183120085278;
		buttonTest.scaleY = 1.8500935500799485;
		buttonTest.setOrigin(0, 1);
		buttonTest.isFilled = true;
		buttonTest.fillColor = 3952106;

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

		// containerTest
		const containerTest = this.add.container(1269, -162);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(-2.849671494613318, 1.624822833873509, 128, 128);
		rectangle_1.scaleX = 2.4564956310317054;
		rectangle_1.scaleY = 1.7663375896109639;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 13619151;
		containerTest.add(rectangle_1);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(4.389161020926281, 64.0585196911436, 128, 128);
		rectangle_2.scaleX = 2.112951121688286;
		rectangle_2.scaleY = 0.3517941570690122;
		rectangle_2.isFilled = true;
		containerTest.add(rectangle_2);

		// ellipse_1
		const ellipse_1 = this.add.ellipse(-78.61083897907372, -20.9414803088564, 128, 128);
		ellipse_1.scaleX = 0.6985519488058136;
		ellipse_1.scaleY = 0.7111560534682945;
		ellipse_1.isFilled = true;
		ellipse_1.fillColor = 4737096;
		ellipse_1.isStroked = true;
		ellipse_1.strokeColor = 16711422;
		ellipse_1.lineWidth = 25;
		containerTest.add(ellipse_1);

		// ellipse
		const ellipse = this.add.ellipse(67.38916102092628, -26.9414803088564, 128, 128);
		ellipse.scaleX = 0.6985519488058136;
		ellipse.scaleY = 0.7111560534682945;
		ellipse.isFilled = true;
		ellipse.fillColor = 4737096;
		ellipse.isStroked = true;
		ellipse.strokeColor = 16711422;
		ellipse.lineWidth = 25;
		containerTest.add(ellipse);

		// MobileTextcontainer
		const mobileTextcontainer = this.add.container(0, 0);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(0, 0, 128, 128);
		rectangle_3.scaleX = 1.2031249781092408;
		rectangle_3.scaleY = 0.47656251661110416;
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

		// lists
		const alignToCameraLeft = [buttonTest, mobileTextcontainer];
		const alignToCameraRight = [buttonTest2];
		const alignToCameraTop = [mobileTextcontainer, dino_1];
		const alignToCameraBottom = [buttonTest, buttonTest2];
		const resizeScale = [dino_1, containerTest];
		const alignToCameraMiddle = [];
		const alignToCameraCenter = [dino_1];

		// dino_1 (components)
		new AlignOffsets(dino_1);

		// pants (components)
		new Animation(pants);

		// buttonTest (components)
		const buttonTestAlignOffsets = new AlignOffsets(buttonTest);
		buttonTestAlignOffsets.x = 100;
		buttonTestAlignOffsets.y = -100;
		const buttonTestSimpleButton = new SimpleButton(buttonTest);
		buttonTestSimpleButton.bindButton = "left";
		const buttonTestDeviceDependentActivation = new DeviceDependentActivation(buttonTest);
		buttonTestDeviceDependentActivation.ifMobile = true;

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

		this.dustforce_SS = dustforce_SS;
		this.dustforce_SS_5 = dustforce_SS_5;
		this.practice_dustman = practice_dustman;
		this.pants = pants;
		this.buttonTest = buttonTest;
		this.buttonTest2 = buttonTest2;
		this.mobileText = mobileText;
		this.alignToCameraLeft = alignToCameraLeft;
		this.alignToCameraRight = alignToCameraRight;
		this.alignToCameraTop = alignToCameraTop;
		this.alignToCameraBottom = alignToCameraBottom;
		this.resizeScale = resizeScale;
		this.alignToCameraMiddle = alignToCameraMiddle;
		this.alignToCameraCenter = alignToCameraCenter;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	dustforce_SS;
	/** @type {Phaser.GameObjects.Image} */
	dustforce_SS_5;
	/** @type {Phaser.GameObjects.Image} */
	practice_dustman;
	/** @type {Phaser.GameObjects.Sprite} */
	pants;
	/** @type {Phaser.GameObjects.Rectangle} */
	buttonTest;
	/** @type {Phaser.GameObjects.Rectangle} */
	buttonTest2;
	/** @type {Phaser.GameObjects.Text} */
	mobileText;
	/** @type {Array<Phaser.GameObjects.Rectangle|Phaser.GameObjects.Container>} */
	alignToCameraLeft;
	/** @type {Phaser.GameObjects.Rectangle[]} */
	alignToCameraRight;
	/** @type {Array<Phaser.GameObjects.Container|Phaser.GameObjects.Image>} */
	alignToCameraTop;
	/** @type {Phaser.GameObjects.Rectangle[]} */
	alignToCameraBottom;
	/** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Container>} */
	resizeScale;
	/** @type {Array<any>} */
	alignToCameraMiddle;
	/** @type {Phaser.GameObjects.Image[]} */
	alignToCameraCenter;

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

			this.cameras.main.pan(500, (this.scale.height / 2), 8000, 'Sine.easeInOut');
		});

		this.controls.onPress('right', () => {

			this.cameras.main.pan(2500, (this.scale.height / 2), 3000, 'Sine.easeInOut');
		});

		// CAMERA SETTINGS
		// this needs to be done at every scene's creation
		this.cameras.main.setViewport(0, 0, this.scale.width, this.scale.height);
		this.cameras.main.setRoundPixels(true);

		this.mobileText.setText('mobile: ' + this.registry.get('mobile'));

		this.dustforce_SS_5.setScrollFactor(.5);
		this.dustforce_SS.setScrollFactor(.5);

		this.resize();
	}

	update() {

		if (this.controls.isDown('left')) {

			this.pants.x -= 10;
		}
		else if (this.controls.isDown('right')) {

			this.pants.x += 10;
		}
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
