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

		this.fella.play('reg-bob');
		
		// temp feedback
		this.fella.tint = 15117227;

		// this.scene.matter.setVelocityX(this.fella.body, -this.fella.x);
	}
	
	update() {
		
		// this.scene.matter.setVelocityX(this.fella.body, (-this.fella.x * .05));
		// this.scene.matter.setVelocityY(this.fella.body, (-this.fella.y * .05));

		this.fella.setVelocity((-this.fella.x * .05), (-this.fella.y * .05));
	}
}
