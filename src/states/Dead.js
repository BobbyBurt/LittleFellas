class Dead {

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

		// set animation frame
		this.fella.play('idle');
		this.fella.stop();
		
		// add wings
		this.wings = this.scene.add.image(this.fella.x, this.fella.y, 'wings');
		this.wings.setScale(.5, .5);
		this.wings.setDepth(this.fella.depth - 1);
		// TODO: set scale according to fella type
		
		// add poof
		this.poof = this.scene.add.image(this.fella.x, this.fella.y, 'poof');
		this.poof.setScale(1.5, 1.5);
		this.poof.setAlpha(.7);
		this.poof.setDepth(this.fella.depth + 1);
		// TODO: set scale according to fella type
		this.poofRemove = this.scene.time.delayedCall(200, () => {

			this.poof.destroy();
		});
		
		this.fella.setData('alive', false);
		this.fella.body.destroy();
	}

	
	update() {
		
		this.fella.y -= 2;
		this.wings.y -= 2;
		// TODO: delay rise
	}

	onEvent() {

		this.fella.setAngle(90);
		this.fella.setActive(false);

		// TODO: remove fella object & created sprites
		// needs to be removed from fellaList[]
	}
}
