
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class PhysicsBody {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__PhysicsBody"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {PhysicsBody} */
	static getComponent(gameObject) {
		return gameObject["__PhysicsBody"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	start() {
		
		// this.gameObject.scene.physics.add.existing(this.gameObject);
		
		// /** @type {Phaser.Physics.Arcade.Body} */
		// const body = this.gameObject.body;
		// body.setSize(this.gameObject.width, this.gameObject.height);

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
