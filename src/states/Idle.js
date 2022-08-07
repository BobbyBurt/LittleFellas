class Idle {

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
		
		this.duration = Phaser.Math.RND.between(30, 200);

		// idle animation
		this.fella.stop();
		
		this.fella.setVelocity(0);
	}
	
	update() {
		
		this.duration--;

		if (this.duration <= 0) {

			this.stateControl.setState('walk')
		}
	}
}
