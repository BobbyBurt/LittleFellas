
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class ImageScale {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__ImageScale"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {ImageScale} */
	static getComponent(gameObject) {
		return gameObject["__ImageScale"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {number} */
	zoom1scale = 0.5;
	/** @type {number} */
	zoom75scale = 0.75;
	/** @type {number} */
	zoom50scale = 1;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
