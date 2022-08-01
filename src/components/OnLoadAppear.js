
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class OnLoadAppear extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__OnLoadAppear"] = this;

		/* START-USER-CTR-CODE */

		this.scene.load.on(Phaser.Loader.Events.COMPLETE, p => {

			this.gameObject.setVisible(true);
		});

		/* END-USER-CTR-CODE */
	}

	/** @returns {OnLoadAppear} */
	static getComponent(gameObject) {
		return gameObject["__OnLoadAppear"];
	}

	/** @type {Phaser.GameObjects.Text} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
