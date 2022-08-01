
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class SimpleButton {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__SimpleButton"] = this;

		/* START-USER-CTR-CODE */

		// edited from Psychogoldfish's SimpleButton.js

		this.is_down = false;

		this.gameObject.setInteractive();

		this.__onOver = ()=>{};
		this.__onOut = ()=>{};
		this.__onPress = ()=>{};
		this.__onRelease = ()=>{};
		this.__onClick = ()=>{};

		let btn = this;
		this.gameObject.on('pointerover', ()=>{
			// btn.setFrame(btn.hover_frame);
			btn.__onOver();
		});

		this.gameObject.on('pointerout', ()=>{
			if (btn.is_down) {
				btn.is_down = false;
				if (btn.__onRelease() !== false) btn.__onClick();
			}
			// btn.setFrame(btn.base_frame);
			btn.__onOut();
		});

		this.gameObject.on('pointerdown', ()=>{
			btn.is_down = true;
			// btn.setFrame(btn.down_frame);
			btn.__onPress();
		});

		this.gameObject.on('pointerup', ()=>{
			btn.is_down = false;
			// btn.setFrame(btn.hover_frame);
			if (btn.__onRelease() !== false) btn.__onClick();
		});

		/* END-USER-CTR-CODE */
	}

	/** @returns {SimpleButton} */
	static getComponent(gameObject) {
		return gameObject["__SimpleButton"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {string} */
	bindButton = "";

	/* START-USER-CODE */

	/**
	 * Triggers a callback function when cursor rolls over the button
	 *
	 * @param {function} callback
	 * @return {SimpleButton} Reference to this button
	 */
	 onOver (callback) {
		this.__onOver = callback;
		return this;
	}

	/**
	 * Triggers a callback function when cursor rolls off of the button
	 *
	 * @param {function} callback
	 * @return {SimpleButton} Reference to this button
	 */
	onOut (callback) {
		this.__onOut = callback;
		return this;
	}

	/**
	 * Triggers a callback function when the button is pressed
	 *
	 * @param {function} callback
	 * @return {SimpleButton} Reference to this button
	 */
	onPress (callback) {
		this.__onPress = callback;
		return this;
	}

	/**
	 * Triggers a callback function when the button is released
	 *
	 * @param {function} callback
	 * @return {SimpleButton} Reference to this button
	 */
	onRelease (callback) {
		this.__onRelease = callback;
		return this;
	}

	/**
	 * Triggers a callback function when the button is pressed, unless onRelease callbac returns false.
	 *
	 * @param {function} callback
	 * @return {SimpleButton} Reference to this button
	 */
	onClick (callback) {
		this.__onClick = callback;
		return this;
	}

	/**
	 * Destroys the button
	 * See Phaser.GameObjects.GameObject#destroy
	 * @override
	 */
	destroy (fromScene) {
		delete this.__onHover;
		delete this.__onPress;
		delete this.__onRelease;
		delete this.__onClick;
		return super.destroy(fromScene);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
