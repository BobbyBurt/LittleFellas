
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class AlignOffsets {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__AlignOffsets"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {AlignOffsets} */
	static getComponent(gameObject) {
		return gameObject["__AlignOffsets"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {number} */
	x = 0;
	/** @type {number} */
	y = 0;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
