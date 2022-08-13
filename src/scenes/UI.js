
// You can write more code here

/* START OF COMPILED CODE */

class UI extends Phaser.Scene {

	constructor() {
		super("ui");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// MobileTextcontainer_1
		const mobileTextcontainer_1 = this.add.container(2411, 60);

		// rectangle
		const rectangle = this.add.rectangle(-457.76046168181927, -1.3877977538431878, 128, 128);
		rectangle.scaleX = 3.56967178859774;
		rectangle.scaleY = 0.47656251661110416;
		rectangle.setOrigin(0, 0);
		rectangle.isFilled = true;
		rectangle.fillColor = 2894892;
		rectangle.fillAlpha = 0.5;
		mobileTextcontainer_1.add(rectangle);

		// instructionText
		const instructionText = this.add.text(-437.76046168181927, 18.612202246156812, "", {});
		instructionText.text = "You can drag the little fellas around the screen";
		instructionText.setStyle({ "fontFamily": "Arial", "fontSize": "20px" });
		mobileTextcontainer_1.add(instructionText);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(1774, 55, 150, 150);
		rectangle_1.setOrigin(1, 0);
		rectangle_1.isFilled = true;

		// lists
		const alignToCameraRight = [rectangle_1];
		const alignToCameraLeft = [];
		const alignToCameraTop = [rectangle_1];
		const alignToCameraBottom = [];
		const alignToCameraMiddle = [];
		const alignToCameraCenter = [];

		// mobileTextcontainer_1 (components)
		const mobileTextcontainer_1AlignOffsets = new AlignOffsets(mobileTextcontainer_1);
		mobileTextcontainer_1AlignOffsets.x = -20;
		mobileTextcontainer_1AlignOffsets.y = 20;

		// rectangle_1 (components)
		const rectangle_1AlignOffsets = new AlignOffsets(rectangle_1);
		rectangle_1AlignOffsets.x = -50;
		rectangle_1AlignOffsets.y = 50;

		this.mobileTextcontainer_1 = mobileTextcontainer_1;
		this.instructionText = instructionText;
		this.alignToCameraRight = alignToCameraRight;
		this.alignToCameraLeft = alignToCameraLeft;
		this.alignToCameraTop = alignToCameraTop;
		this.alignToCameraBottom = alignToCameraBottom;
		this.alignToCameraMiddle = alignToCameraMiddle;
		this.alignToCameraCenter = alignToCameraCenter;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	mobileTextcontainer_1;
	/** @type {Phaser.GameObjects.Text} */
	instructionText;
	/** @type {Phaser.GameObjects.Rectangle[]} */
	alignToCameraRight;
	/** @type {Array<any>} */
	alignToCameraLeft;
	/** @type {Phaser.GameObjects.Rectangle[]} */
	alignToCameraTop;
	/** @type {Array<any>} */
	alignToCameraBottom;
	/** @type {Array<any>} */
	alignToCameraMiddle;
	/** @type {Array<any>} */
	alignToCameraCenter;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		// TODO: port align lists here
		// TODO: setup UI scaling
		this.test = this.add.sprite(300, 300);
		this.test.play('boyo-idle');

		this.resize();
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


	resize() {

		this.alignObjects();

		this.cameras.main.centerOn(0, 0);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
