class Dragged {

	/** @type {Phaser.GameObjects.Sprite} */
	fella;

	/** @type {Phaser.Scene} */
	scene;

	/** reference to StateController class, used to call transition() */
	stateControl;
	
	constructor(fella, scene) {

		this.fella = fella;
		this.scene = scene;

	}
	
	enter() {
		
		this.totalVelocity = 0;
		
		this.fella.play(this.fella.getData('sprite') + '-dragged');
	}
	
	update() {
		
		// add motion in any direction
		if (this.fella.body.velocity.x > 0) {

			this.totalVelocity += this.fella.body.velocity.x;
		}
		else {

			this.totalVelocity -= this.fella.body.velocity.x;
		}
		if (this.fella.body.velocity.y > 0) {

			this.totalVelocity += this.fella.body.velocity.y;
		}
		else {

			this.totalVelocity -= this.fella.body.velocity.y;
		}

		this.fella.setData('totalVelocity', this.totalVelocity);
	}
}
