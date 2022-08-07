
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class randomMove extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__randomMove"] = this;

		/* START-USER-CTR-CODE */

		// random direction
		this.xMove = Phaser.Math.RND.normal();
		this.yMove = Phaser.Math.RND.normal();

		// setup start function
		this.scene = this.gameObject.scene;
		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);

		/* END-USER-CTR-CODE */
	}

	/** @returns {randomMove} */
	static getComponent(gameObject) {
		return gameObject["__randomMove"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	start() {

		/** @type {Phaser.Physics.Matter.Sprite} */
		const body = this.gameObject.body.gameObject

		// body.setVelocity(this.xMove * 100, this.yMove);
	}

	update() {


	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
