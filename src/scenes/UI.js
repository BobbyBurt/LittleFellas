
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
		const mobileTextcontainer_1 = this.add.container(1143, 458);

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

		// mobileTextcontainer_1 (components)
		const mobileTextcontainer_1AlignOffsets = new AlignOffsets(mobileTextcontainer_1);
		mobileTextcontainer_1AlignOffsets.x = -20;
		mobileTextcontainer_1AlignOffsets.y = 20;

		this.mobileTextcontainer_1 = mobileTextcontainer_1;
		this.instructionText = instructionText;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	mobileTextcontainer_1;
	/** @type {Phaser.GameObjects.Text} */
	instructionText;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.scale = this.

		console.log('ui');
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
