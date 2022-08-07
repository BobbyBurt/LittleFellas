class StateTest {

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

		console.log('enter');
		this.stateControl.setState('testState2');
	}
	
	update() {
		
		console.log('update');
	}
}
