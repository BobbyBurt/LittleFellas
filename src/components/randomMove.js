
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
		
		this.xMove = Phaser.Math.RND.normal();
		this.yMove = Phaser.Math.RND.normal();

		/* END-USER-CTR-CODE */
	}

	/** @returns {randomMove} */
	static getComponent(gameObject) {
		return gameObject["__randomMove"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	update() {

		this.gameObject.x += this.xMove;
		this.gameObject.y += this.yMove;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
