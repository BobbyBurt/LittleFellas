
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class DeviceDependentActivation {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__DeviceDependentActivation"] = this;

		/* START-USER-CTR-CODE */

		this.scene = this.gameObject.scene;

		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);

		/* END-USER-CTR-CODE */
	}

	/** @returns {DeviceDependentActivation} */
	static getComponent(gameObject) {
		return gameObject["__DeviceDependentActivation"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {boolean} */
	ifMobile = false;
	/** @type {boolean} */
	ifDesktop = false;

	/* START-USER-CODE */

	start() {

		if (this.ifMobile) {

			this.gameObject.setActive(this.gameObject.scene.registry.get('mobile'));
			this.gameObject.setVisible(this.gameObject.scene.registry.get('mobile'));
		}

		if (this.ifDesktop) {

			this.gameObject.setActive(!this.gameObject.scene.registry.get('mobile'));
			this.gameObject.setVisible(!this.gameObject.scene.registry.get('mobile'));
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
