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

		this.fella.play('bob');

		console.log('enter');
	}
	
	update() {
		
		this.fella.setVelocity(this.xMove * 10, this.yMove * 10);
		
		this.duration--;

		if (this.duration <= 0) {

			this.stateControl.setState('idle');
		}
	}
}
