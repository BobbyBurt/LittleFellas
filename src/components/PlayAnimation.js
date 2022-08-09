
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class PlayAnimation {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__PlayAnimation"] = this;

		/* START-USER-CTR-CODE */

		this.scene = this.gameObject.scene;
		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);

		/* END-USER-CTR-CODE */
	}

	/** @returns {PlayAnimation} */
	static getComponent(gameObject) {
		return gameObject["__PlayAnimation"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {string} */
	key = "";

	/* START-USER-CODE */

	start() {

		this.gameObject.play(this.key);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
