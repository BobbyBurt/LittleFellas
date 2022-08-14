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
		
		this.duration = Phaser.Math.RND.between(60, 300);

		// idle animation
		this.fella.play(this.fella.getData('sprite') + '-idle');
		
		this.fella.setVelocity(0);

		console.log(this.fella.getData('energy'));

		if (this.fella.getData('energy') <= 0) {

			this.stateControl.setState('dead');
		}
		else if (this.fella.getData('energy') <= .3) {

			this.fella.play(this.fella.getData('sprite') + '-hungry');
		}
	}
	
	update() {
		
		this.duration--;

		if (this.duration <= 0) {

			this.stateControl.setState('walk')
		}
	}
}
