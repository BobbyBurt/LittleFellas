class Scatter {

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
		console.log('scattter');
		
		// random target away from pointer
		this.target = {x: 0, y: 0}
		console.log(this.scene.registry.get('last-tap').x > this.fella.x);
		if (this.scene.registry.get('last-tap').x > this.fella.x) {

			this.target.x = this.fella.x - (Phaser.Math.RND.between(150, 250));
		}
		else if (this.scene.registry.get('last-tap').x < this.fella.x) {

			this.target.x = this.fella.x + (Phaser.Math.RND.between(150, 250));
		}
		if (this.scene.registry.get('last-tap').y > this.fella.y) {

			this.target.y = this.fella.y - (Phaser.Math.RND.between(150, 250));
		}
		else if (this.scene.registry.get('last-tap').y < this.fella.y) {

			this.target.y = this.fella.y + (Phaser.Math.RND.between(150, 250));
		}

		this.duration = Phaser.Math.RND.between(50, 150);

		this.fella.play(this.fella.getData('sprite') + '-run');
	}
	
	update() {

		// old move
		// this.fella.setVelocity(this.xMove * 5, this.yMove * 5);

		// move
		this.fella.setVelocity(
			((-this.fella.x + this.target.x) * .05), ((-this.fella.y + this.target.y) * .05));

		
		this.duration--;

		if (this.duration <= 0) {

			this.stateControl.setState('idle');
		}
	}
}
