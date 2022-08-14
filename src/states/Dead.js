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
		
		if (this.fella.getData('drop-food')) {

			this.scene.addFood(this.fella.x, this.fella.y);
		}

		
		// add poof
		this.poof = this.scene.add.sprite(this.fella.x, this.fella.y, 'poof');
		this.poof.play('poof');
		this.poof.setScale(1.5, 1.5);
		// this.poof.setAlpha(.7);
		this.poof.setDepth(this.fella.depth + 1);
		// TODO: set scale according to fella type
		this.poofRemove = this.scene.time.delayedCall(1000, () => {

			// this.poof.destroy();
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
