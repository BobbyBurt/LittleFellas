class Feeding {

	/** @type {Phaser.GameObjects.Sprite} */
	fella;

	/** @type {Phaser.Scene} */
	scene;

	/** reference to StateController class, used to call transition() */
	stateControl;

	/** how many frames must the pointer overlap the fella */
	eatingTimer;
	
	constructor(fella, scene) {

		this.fella = fella;
		this.scene = scene;
	}

	enter() {

		this.fella.play(this.fella.getData('sprite') + '-walk');

		this.eatingTimer = 100;
	}
	
	update() {
		
		// this.scene.matter.setVelocityX(this.fella.body, (-this.fella.x * .05));
		// this.scene.matter.setVelocityY(this.fella.body, (-this.fella.y * .05));

		if (this.scene.input.activePointer.forwardButtonDown || this.scene.registry.set)

		this.fella.setVelocity(((-this.fella.x + this.scene.input.activePointer.worldX) * .05), ((-this.fella.y + this.scene.input.activePointer.worldY) * .05));
		if (this.scene.matter.containsPoint(this.fella.body, this.scene.input.activePointer.worldX, this.scene.input.activePointer.worldY)) {

			this.eatingTimer--;
			if (this.eatingTimer <= 0) {
				
				console.log('monch');

				// set data

				this.stateControl.setState('idle');
			}
		}
		else {
			this.eatingTimer = 100;
		}
	}
}
