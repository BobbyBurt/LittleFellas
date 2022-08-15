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
		// TODO: set to first frame of idle, or death frame is one exists
		this.fella.stop();

		this.scene.sound.play('puffdienoise')
		
		if (this.fella.getData('drop-food')) {

			this.scene.addFood(this.fella.x, this.fella.y, this.fella.getData('meat'), this.fella.depth - 2);
		}

		
		// add poof
		this.poofEffect = this.scene.add.sprite(this.fella.x, this.fella.y)
			.play('poof')
			.setDepth(this.fella.depth + 1)
			.setScale(this.fella.body.circleRadius / 60)
			.on(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {

				this.poofEffect.destroy();
			});
		
		this.fella.setData('alive', false);
		
		// update fella count UI
		this.scene.fellaCountText.setText('x ' + this.scene.fellas.getLength());
		
		// free this up for garbage collection
		this.fella.shadow.destroy();
		this.fella.hungerEffect.destroy();
		this.fella.heartEffect.destroy();
		this.fella.status = null;
		this.fella.destroy();
		
	}

	
	update() {

		// TODO: tween fadeout
	}

	onEvent() {

		this.fella.setAngle(90);
		this.fella.setActive(false);

		// TODO: remove fella object & created sprites
		// needs to be removed from fellaList[]
	}
}
