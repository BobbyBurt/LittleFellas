class Breeding {

	/** @type {Phaser.GameObjects.Sprite} */
	fella;

	/** @type {Phaser.Scene} */
	scene;

	/** reference to StateController class, used to call transition() */
	stateControl;

	/** max distance that a partner can be away */
	partnerRadius = 100;
	
	constructor(fella, scene) {

		this.fella = fella;
		this.scene = scene;
	}

	enter() {

		this.duration = 500;
		
		this.fella.play(this.fella.getData('sprite') + '-walk');

		// bring back shadow
		this.fella.shadow.setVisible(this.fella.getData('shadow'));

		this.fella.heartEffect.setVisible(true);
	}
	
	update() {
		
		this.fella.setVelocity((-this.fella.x * .05), (-this.fella.y * .05));

		this.fella.heartEffect.setPosition(this.fella.x, this.fella.y);

		this.duration--;

		if (this.duration <= 0) {
			
			this.fella.heartEffect.setVisible(false);
			
			this.stateControl.setState('idle');
		}
	}
}
