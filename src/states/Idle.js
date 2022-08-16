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

		if (this.fella.getData('race') == 'gremlin') {

			this.duration = Phaser.Math.RND.between(20, 30);
		}

		// idle animation
		this.fella.play(this.fella.getData('sprite') + '-idle');
		
		this.fella.setVelocity(0);

		// bring back shadow
		this.fella.shadow.setVisible(this.fella.getData('shadow'));
		
		// no hearts
		this.fella.heartEffect.setVisible(false);

		// energy check
		console.log(this.fella.getData('race') + ' ' + this.fella.getData('energy'));
		if (this.fella.getData('energy') <= 0) {

			this.stateControl.setState('dead');
		}
		else if (this.fella.getData('energy') <= .3) {

			if (this.fella.getData('regular')) {
				
				this.fella.play(this.fella.getData('sprite') + '-hungry');
			}
		}
	}
	
	update() {
		
		this.duration--;

		if (this.duration <= 0) {

			this.stateControl.setState('walk')
		}
	}
}
