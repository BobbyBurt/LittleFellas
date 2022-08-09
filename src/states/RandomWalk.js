class RandomWalk {

	/** @type {Phaser.GameObjects.Sprite} */
	fella;

	/** @type {Phaser.Scene} */
	scene;

	/** reference to StateController class, used to call transition() */
	/** @type {StateController} */
	stateControl;
	
	constructor(fella, scene) {

		this.fella = fella;
		this.scene = scene;

	}
	
	enter() {

		this.xMove = Phaser.Math.RND.normal();
		this.yMove = Phaser.Math.RND.normal();
	
		this.duration = Phaser.Math.RND.between(20, 100);

		this.fella.play('reg-bob');
	}
	
	update() {
		
		this.fella.setVelocity(this.xMove * 5, this.yMove * 5);
		
		this.duration--;

		if (this.duration <= 0) {

			this.stateControl.setState('idle');
		}
	}
}
