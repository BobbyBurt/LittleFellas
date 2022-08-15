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

		// this.xMove = Phaser.Math.RND.normal();
		// this.yMove = Phaser.Math.RND.normal();
		this.target = {x: this.fella.x + (Phaser.Math.RND.normal() * 150), y: this.fella.y + (Phaser.Math.RND.normal() * 150)}
		
		this.duration = Phaser.Math.RND.between(20, 100);
		
		if (this.fella.getData('race') == 'gremlin') {

			this.target = {x: this.fella.x + (Phaser.Math.RND.normal() * 400), y: this.fella.y + (Phaser.Math.RND.normal() * 400)}
			this.duration = Phaser.Math.RND.between(20, 30);
		}

		// face right
		if (this.target.x > this.fella.x) {

			this.fella.setFlipX(this.fella.getData('facingLeft'));
		}
		// face left
		if (this.target.x < this.fella.x) {

			this.fella.setFlipX(!this.fella.getData('facingLeft'));
		}

		this.fella.play(this.fella.getData('sprite') + '-walk');

		// no hearts
		this.fella.heartEffect.setVisible(false);

		// this.fella.setData('energy', this.fella.getData('energy') - .1);
	}
	
	update() {

		// old move
		// this.fella.setVelocity(this.xMove * 5, this.yMove * 5);

		// move
		this.fella.setVelocity(
			((-this.fella.x + this.target.x) * .05), ((-this.fella.y + this.target.y) * .05));

		
		this.duration--;

		if (this.duration <= 0) {

			// decrease energy
			if (Phaser.Math.RND.normal() > .5)
			this.scene.setEnergy(this.fella, -.1, true);
			
			this.stateControl.setState('idle');
		}
	}
}
