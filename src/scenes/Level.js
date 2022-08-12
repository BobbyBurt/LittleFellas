
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("level");

		/* START-USER-CTR-CODE */



		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// tankBox
		const tankBox = this.add.rectangle(0, -10, 1820, 880);
		tankBox.isFilled = true;
		tankBox.fillColor = 8882055;

		// buttonTest2
		const buttonTest2 = this.add.rectangle(2472, 962, 128, 128);
		buttonTest2.scaleX = 3.992183120085278;
		buttonTest2.scaleY = 1.8500935500799485;
		buttonTest2.setOrigin(1, 1);
		buttonTest2.visible = false;
		buttonTest2.alpha = 0.2;
		buttonTest2.isFilled = true;
		buttonTest2.fillColor = 15357244;

		// buttonTest
		const buttonTest = this.add.rectangle(466, 981, 128, 128);
		buttonTest.scaleX = 2.4726917897363947;
		buttonTest.scaleY = 1.8500935500799485;
		buttonTest.setOrigin(0, 1);
		buttonTest.visible = false;
		buttonTest.alpha = 0.2;
		buttonTest.isFilled = true;
		buttonTest.fillColor = 3970794;

		// MobileTextcontainer
		const mobileTextcontainer = this.add.container(0, 532);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(0, 0, 128, 128);
		rectangle_3.scaleX = 1.699990245600508;
		rectangle_3.scaleY = 1.1568898761624102;
		rectangle_3.setOrigin(0, 0);
		rectangle_3.isFilled = true;
		rectangle_3.fillColor = 2894892;
		rectangle_3.fillAlpha = 0.5;
		mobileTextcontainer.add(rectangle_3);

		// mobileText
		const mobileText = this.add.text(20, 20, "", {});
		mobileText.text = "Mobile: ????";
		mobileText.setStyle({ "fontFamily": "Arial", "fontSize": "20px" });
		mobileTextcontainer.add(mobileText);

		// spriteCountText
		const spriteCountText = this.add.text(20, 50, "", {});
		spriteCountText.text = "sprites: 0";
		spriteCountText.setStyle({ "fontFamily": "Arial", "fontSize": "20px" });
		mobileTextcontainer.add(spriteCountText);

		// fpsText
		const fpsText = this.add.text(20, 80, "", {});
		fpsText.text = "FPS: ??";
		fpsText.setStyle({ "fontFamily": "Arial", "fontSize": "20px" });
		mobileTextcontainer.add(fpsText);

		// zoomText
		const zoomText = this.add.text(20, 110, "", {});
		zoomText.text = "Cam zoom: ??";
		zoomText.setStyle({ "fontFamily": "Arial", "fontSize": "20px" });
		mobileTextcontainer.add(zoomText);

		// orientationPrompt
		const orientationPrompt = this.add.container(0, 0);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(0, 0, 800, 600);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 0;
		rectangle_1.fillAlpha = 0.8;
		orientationPrompt.add(rectangle_1);

		// text_1
		const text_1 = this.add.text(0, -121, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Please flip \nyour phone to \nlandscape orientation";
		text_1.setStyle({ "align": "center", "fontFamily": "arial", "fontSize": "70px" });
		text_1.setLineSpacing(15);
		orientationPrompt.add(text_1);

		// text
		const text = this.add.text(0, 186, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "You may need to use \nthe default browser";
		text.setStyle({ "align": "center", "fontFamily": "arial", "fontSize": "50px" });
		text.setLineSpacing(15);
		orientationPrompt.add(text);

		// lists
		const alignToCameraLeft = [mobileTextcontainer, buttonTest];
		const alignToCameraRight = [buttonTest2];
		const alignToCameraTop = [mobileTextcontainer];
		const alignToCameraBottom = [buttonTest2, buttonTest];
		const resizeScale = [];
		const alignToCameraMiddle = [orientationPrompt];
		const alignToCameraCenter = [orientationPrompt];
		const pantsTest = [];
		const fellasList = [];
		const bounds = [tankBox];

		// tankBox (components)
		new PhysicsBody(tankBox);

		// buttonTest2 (components)
		const buttonTest2AlignOffsets = new AlignOffsets(buttonTest2);
		buttonTest2AlignOffsets.x = -100;
		buttonTest2AlignOffsets.y = -100;
		const buttonTest2SimpleButton = new SimpleButton(buttonTest2);
		buttonTest2SimpleButton.bindButton = "right";

		// buttonTest (components)
		const buttonTestAlignOffsets = new AlignOffsets(buttonTest);
		buttonTestAlignOffsets.x = 450;
		buttonTestAlignOffsets.y = -100;
		const buttonTestSimpleButton = new SimpleButton(buttonTest);
		buttonTestSimpleButton.bindButton = "left";

		// mobileTextcontainer (components)
		const mobileTextcontainerAlignOffsets = new AlignOffsets(mobileTextcontainer);
		mobileTextcontainerAlignOffsets.x = 20;
		mobileTextcontainerAlignOffsets.y = 20;

		this.tankBox = tankBox;
		this.buttonTest2 = buttonTest2;
		this.buttonTest = buttonTest;
		this.mobileText = mobileText;
		this.spriteCountText = spriteCountText;
		this.fpsText = fpsText;
		this.zoomText = zoomText;
		this.orientationPrompt = orientationPrompt;
		this.alignToCameraLeft = alignToCameraLeft;
		this.alignToCameraRight = alignToCameraRight;
		this.alignToCameraTop = alignToCameraTop;
		this.alignToCameraBottom = alignToCameraBottom;
		this.resizeScale = resizeScale;
		this.alignToCameraMiddle = alignToCameraMiddle;
		this.alignToCameraCenter = alignToCameraCenter;
		this.pantsTest = pantsTest;
		this.fellasList = fellasList;
		this.bounds = bounds;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	tankBox;
	/** @type {Phaser.GameObjects.Rectangle} */
	buttonTest2;
	/** @type {Phaser.GameObjects.Rectangle} */
	buttonTest;
	/** @type {Phaser.GameObjects.Text} */
	mobileText;
	/** @type {Phaser.GameObjects.Text} */
	spriteCountText;
	/** @type {Phaser.GameObjects.Text} */
	fpsText;
	/** @type {Phaser.GameObjects.Text} */
	zoomText;
	/** @type {Phaser.GameObjects.Container} */
	orientationPrompt;
	/** @type {Array<Phaser.GameObjects.Container|Phaser.GameObjects.Rectangle>} */
	alignToCameraLeft;
	/** @type {Phaser.GameObjects.Rectangle[]} */
	alignToCameraRight;
	/** @type {Phaser.GameObjects.Container[]} */
	alignToCameraTop;
	/** @type {Phaser.GameObjects.Rectangle[]} */
	alignToCameraBottom;
	/** @type {Array<any>} */
	resizeScale;
	/** @type {Phaser.GameObjects.Container[]} */
	alignToCameraMiddle;
	/** @type {Phaser.GameObjects.Container[]} */
	alignToCameraCenter;
	/** @type {Array<any>} */
	pantsTest;
	/** @type {Array<any>} */
	fellasList;
	/** @type {Phaser.GameObjects.Rectangle[]} */
	bounds;

	/* START-USER-CODE */

	/** @type {Phaser.GameObjects.Group} */
	fellas;

	tankWidth = 1820;
	tankHeight = 880;
	minScreenWidth = (this.tankWidth + (64 * 2));
	minScreenHeight = (this.tankHeight + (20 * 2));
	// the number being double represents the amount of space we want at least on both sides

	/** how much total velocity of drag does it take to make fella want to breed */
	velocityToBreed = 4000;
	terminalVelocity = 200;

	spawningRaces = ['yellow', 'green', 'cyan', 'blue', 'purple'];

	// races
	races = new Map([

		// tier 1
		['yellow', {
			breeding: { with: 'green', makes: 'mango' },
			sprite: 'reg',
			tint: 0xf0f042,
			circleRadius: 40,
			mass: 10
		}],
		['green', {
			breeding: { with: 'cyan', makes: 'ufo' },
			sprite: 'reg',
			tint: 0x67e467,
			circleRadius: 40,
			mass: 10
		}],
		['cyan', {
			breeding: { with: 'blue', makes: 'boyo' },
			sprite: 'reg',
			tint: 0x5eeded,
			circleRadius: 40,
			mass: 10
		}],
		['blue', {
			breeding: { with: 'purple', makes: 'girl' },
			sprite: 'reg',
			tint: 0x6666ff,
			circleRadius: 40,
			mass: 10
		}],
		['purple', {
			breeding: { with: 'green', makes: 'nothing' },
			sprite: 'reg',
			tint: 0xd580ff,
			circleRadius: 40,
			mass: 10
		}],

		// tier 2
		['mango', {
			breeding: { with: 'ufo', makes: 'smarto' },
			sprite: 'mango',
			tint: 0xffffff,
			circleRadius: 80,
			mass: 20
		}],
		['ufo', {
			breeding: { with: 'boyo', makes: 'angro' },
			sprite: 'ufo',
			tint: 0xffffff,
			circleRadius: 80,
			mass: 20
		}],
		['boyo', {
			breeding: { with: 'girl', makes: 'pixie' },
			sprite: 'boyo',
			tint: 0xffffff,
			circleRadius: 80,
			mass: 20
		}],
		['girl', {
			breeding: { with: 'mango', makes: 'nothing' },
			sprite: 'girl',
			tint: 0xffffff,
			circleRadius: 80,
			mass: 20
		}],

		// tier 3
		['smarto', {
			breeding: { with: 'angro', makes: 'scooper' },
			sprite: 'smarto',
			tint: 0xffffff,
			circleRadius: 80,
			mass: 20
		}],
		['angro', {
			breeding: { with: 'pixie', makes: 'scooper' },
			sprite: 'angro',
			tint: 0xffffff,
			circleRadius: 80,
			mass: 20
		}],
		['pixie', {
			breeding: { with: 'smarto', makes: 'nothing' },
			sprite: 'pixie',
			tint: 0xffffff,
			circleRadius: 80,
			mass: 20
		}], 

		// tier 4
		['scooper', {
			breeding: { with: 'scooper', makes: 'nothing' },
			sprite: 'scooper',
			tint: 0xffffff,
			circleRadius: 80,
			mass: 20
		}]

	]);

	create() {

		this.editorCreate();

		// fellas group
		this.fellas = this.add.group();
		this.fellas.maxSize = -1;
		// TODO: set max

		/** group of 2 fellas to breed */
		this.hornyFellas = this.add.group();
		this.hornyFellas.maxSize = 2;

		// tank bg needs depth below all fellas
		this.tankBox.setDepth(-999);

		//audio
		this.sound.setVolume(0);
		// this.music = this.sound.add('tank-2').play();
		this.sound.add('dead');

		this.setupInput();

		// orientation
		this.orientationPrompt.setDepth(1000);
		this.orientationPrompt.setAlpha(0);
		// TODO: parallel UI scene isn't set up yet. This needs to be there

		// debug UI
		this.mobileText.setText('mobile: ' + this.registry.get('mobile'));

		// tank bounds
		// this.matter.world.setBounds(-910, -450, 1820, 880, 300);
		this.matter.add.rectangle(-1210, -750, 6000, 600, {isStatic: true}).side = 'top';
		this.matter.add.rectangle(-1210, -750, 600, 6000, {isStatic: true}).side = 'left';
		this.matter.add.rectangle(-1210, 730, 6000, 600, {isStatic: true}).side = 'bottom';
		this.matter.add.rectangle(1210, -750, 600, 6000, {isStatic: true}).side = 'right';
		// this is centered at (0, 10) to avoid accidental app switching on ios

		// physics
		this.setupDrag();
		const _this = this;
		this.colCount = 0;
		this.matter.world.on('collisionstart', (event, bodyA, bodyB) => {

			// wall collision
			if (bodyA.isStatic || bodyB.isStatic) {

				let _wall;
				let _fella;

				// set definitions
				if (bodyA.isStatic && bodyB.label == 'Circle Body') {

					_wall = bodyA;
					_fella = bodyB;
				}
				else if (bodyB.isStatic && bodyA.label == 'Circle Body') {

					_wall = bodyB;
					_fella = bodyA;
				}

				// return if fella is being dragged
				if (_fella.gameObject.status.currentState.constructor.name == 'Dragged') {

					return;
				}

				// kill if at terminal velocity
				if (_wall.side == 'top' && _fella.velocity.y < -this.terminalVelocity) {

					console.log('DEAD - top');
					_fella.gameObject.status.setState('dead');
				}
				else if (_wall.side == 'bottom' && _fella.velocity.y > this.terminalVelocity) {

					console.log('DEAD - bottom');
					_fella.gameObject.status.setState('dead');
				}
				else if (_wall.side == 'left' && _fella.velocity.x < -this.terminalVelocity) {

					console.log('DEAD - left');
					_fella.gameObject.status.setState('dead');
				}
				else if (_wall.side == 'right' && _fella.velocity.x > this.terminalVelocity) {

					console.log('DEAD - right');
					_fella.gameObject.status.setState('dead');
				}

				return;
			}

			// breed check
			if (bodyA.gameObject.getData('horny') && bodyB.gameObject.getData('horny')) {

				let raceA = bodyA.gameObject.getData('race');
				let raceB = bodyB.gameObject.getData('race');
				let raceDataA = this.races.get(raceA);
				let raceDataB = this.races.get(raceB);

				if (raceDataA.breeding.with == raceB && raceDataA.breeding.makes != 'nothing') {

					this.addFella(raceDataA.breeding.makes);
				}
				else if (raceDataB.breeding.with == raceA && raceDataB.breeding.makes != 'nothing') {

					this.addFella(raceDataB.breeding.makes);
				}

				// TEMP: killing parents				
				bodyA.gameObject.status.setState('dead');
				bodyB.gameObject.status.setState('dead');
			}
		});
		// this is called EVERY COLLISION. There is no other way to check for a collision
		// between two bodies. if there is, hell if i can find it

		// manual fella create
		this.spawnTimer = new Phaser.Time.TimerEvent({ delay: 4000, loop: true, callback: () => {

			this.addFella(Phaser.Math.RND.pick(this.spawningRaces));
			
		}});

		this.time.addEvent(this.spawnTimer);

		// setup all fella states
		// for (let i = 0; i < this.fellasList.length; i++) {

		// 	this.fellasList[i].status = new StateController(this.fellasList[i], this);
		// 	// gameobject.state is a build in member meant to be an int or string, so we make our own property
		// 	this.fellasList[i].status.setState('idle');
		// }

		// camera
		this.cameras.main.setViewport(0, 0, this.scale.width, this.scale.height);
		this.cameras.main.setRoundPixels(true);
		this.cameras.main.centerOn(0, 0);

		// resize
		this.resize();
	}

	update() {

		if (this.controls.isDown('left')) {

			// debug function here
		}
		if (this.controls.isDown('right')) {

			// debug function here
		}

		// for each fella loop
		this.fellas.children.each(function(fella) {

			fella.setDepth(fella.y);

			// update all fella states
			fella.status.update();
		});

		// debug text
		this.fpsText.setText('FPS: ' + this.game.loop.actualFps);

		// debug info
		this.spriteCountText.setText('fellas: ' + this.fellas.getLength());
		// its just easier to do this every frame. wont be in the final game anyways
	}

	/** scene specific resizing adjustments
	 * 
	 * called at window resize from main.js binded method
	 */
	resize() {

		this.alignObjects();

		this.scaleObjects();

		this.cameras.main.centerOn(0, 0);

		this.setAdaptiveZoom();

		// orientation check
		if (this.registry.get('mobile') && this.scale.height > this.scale.width) {

			this.orientationPrompt.setAlpha(1);
		}
		else {

			this.orientationPrompt.setAlpha(0);
		}
	}

	/** setup mouse drag physics constraints & events */
	setupDrag() {

		/** @type {Phaser.Physics.Matter.PointerConstraint} */		
		this.mouseConstraint = this.matter.add.mouseSpring();
		// NOTE: apparently I can use stopDrag()
		// https://newdocs.phaser.io/docs/3.54.0/focus/Phaser.Physics.Matter.Factory-mouseSpring
		// TODO: how do I know when / what is being dragged so I can set a state?

		this.matter.world.on('dragstart', function(body) { 

			if (body.isStatic) return;

			// setup transition conditions if necessary
			body.gameObject.status.setState('dragged');
		});

		const _this = this;
		this.matter.world.on('dragend', function(body) { 

			if (body.isStatic) return;

			// console.log(body.gameObject);
			// console.log(body.gameObject.getData('race'));
			// console.log('total drag velocity: ' + body.gameObject.getData('totalVelocity'));
			// FIXME: getting a crash that points to this line

			if((body.gameObject.getData('totalVelocity') > _this.velocityToBreed) || body.gameObject.getData('horny')) {

				body.gameObject.setData('horny', true);
				body.gameObject.status.setState('breeding');
			}
			else {

				body.gameObject.status.setState('idle');
			}
		});
	}

	/**
	 * manual fella creation
	 * 
	 * adds physics, state machine
	 * 
	 * @param {String} race
	 */
	addFella(race) {

		const fella = this.add.sprite(0, 0, "fella");
		const raceData = this.races.get(race);

		// tier 1 colours
		fella.setTint(raceData.tint);

		let colliderRadius = raceData.circleRadius;

		let mass = raceData.mass;

		this.fellas.add(
			this.matter.add.gameObject(fella, 
			{ inertia: Infinity, shape: {type: 'circle', radius: colliderRadius}})
				.setBounce(.5)
				.setFrictionAir(.2)
				.setMass(mass)
		);

		// set default data
		fella.setData('race', race);
		fella.setData('sprite', raceData.sprite);
		fella.setData('alive', true);
		fella.setData('health', 100);
		fella.setData('happy', 100);
		fella.setData('totalVelocity', 0);

		// state machine
		fella.status = new StateController(fella, this);
		fella.status.setState('idle');
	}

	/** adds / removes fella from horny group  */
	setHorny(fella, horny) {

		if (horny) {

			if (this.hornyFellas.getLength() < this.hornyFellas.maxSize) {

				this.hornyFellas.add(fella);
			}
		}
	}

	/** incrementally zoom the camera out until necessary elements aren't cropped out */
	setAdaptiveZoom() {

		// calculate min size

		this.cameras.main.setZoom(1);
		if (this.scale.width < this.minScreenWidth || this.scale.height < this.minScreenHeight) {
			// zoom out incrementally until we're past width and height min

			for(let i = 0; i < 20; i++) {

				this.cameras.main.setZoom(1 - (i * .05));

				// check min
				// console.log('w: ' + this.cameras.main.width / (1 - (i * .05)))
				// console.log('h: ' + this.cameras.main.height / (1 - (i * .05)))

				if(
					(this.cameras.main.width / (1 - (i * .05))) > this.minScreenWidth &&
					(this.cameras.main.height / (1 - (i * .05))) > this.minScreenHeight
				) 
					{

					break;
				}
			}

		}

		this.zoomText.setText('cam zoom: ' + this.cameras.main.zoom);
	}

	/** setup keyboard / on screen buttons with Psychogoldfish's helper classes
	 * currently leftover code that I can use for debug
	 */
	setupInput() {

		this.controls = new InputWrapper();

		let keys = this.input.keyboard.addKeys({
			left_1: 'left',
			left_2: 'A',
			right_1: 'right',
			right_2: 'D'
		});

		this.controls.bindKey('left', keys.left_1);
		this.controls.bindKey('right', keys.right_1);

		this.controls.bindButton(SimpleButton.getComponent(this.buttonTest).bindButton, SimpleButton.getComponent(this.buttonTest));
		this.controls.bindButton(SimpleButton.getComponent(this.buttonTest2).bindButton, SimpleButton.getComponent(this.buttonTest2));
		// since the button to bind this to is a property, this could be a loop of all buttons

		// example of using events for inputs
		this.controls.onPress('left', () => {

			this.addFella('yellow');
			this.addFella('green');
			this.addFella('cyan');
			this.addFella('blue');
			this.addFella('purple');
		});

		// spawning sprites
		this.controls.onPress('right', () => {

			Phaser.Actions.PlaceOnCircle(this.fellas.getChildren(),
				new Phaser.Geom.Circle(0, 0, 300));
		});
	}

	/** align objects included in the align left/right/top/bottom lists
	 * 
	 * offset objects by values in their AlignOffsets component if present
	 * 
	 * sets objects' scroll factor to 0 on axis of alignment
	 * 
	 * called at resize
	 */
	alignObjects() {

		// LEFT
		for(let i = 0; i < this.alignToCameraLeft.length; i++) {

			// get offset value from component if present
			let offsetX = 0;
			if (AlignOffsets.getComponent(this.alignToCameraLeft[i])) offsetX = AlignOffsets.getComponent(this.alignToCameraLeft[i]).x;

			this.alignToCameraLeft[i].setX(offsetX);

			this.alignToCameraLeft[i].scrollFactorX = 0;
		};

		// RIGHT
		for(let i = 0; i < this.alignToCameraRight.length; i++) {

			// get offset value from component if present
			let offsetX = 0;
			if (AlignOffsets.getComponent(this.alignToCameraRight[i])) offsetX = AlignOffsets.getComponent(this.alignToCameraRight[i]).x;

			this.alignToCameraRight[i].setX(this.scale.width + offsetX);

			this.alignToCameraRight[i].scrollFactorX = 0;
		};

		// TOP
		for(let i = 0; i < this.alignToCameraTop.length; i++) {

			// get offset value from component if present
			let offsetY = 0;
			if (AlignOffsets.getComponent(this.alignToCameraTop[i])) offsetY = AlignOffsets.getComponent(this.alignToCameraTop[i]).y;

			this.alignToCameraTop[i].setY(offsetY);

			this.alignToCameraTop[i].scrollFactorY = 0;
		};

		// BOTTOM
		for(let i = 0; i < this.alignToCameraBottom.length; i++) {

			// get offset value from component if present
			let offsetY = 0;
			if (AlignOffsets.getComponent(this.alignToCameraBottom[i])) offsetY = AlignOffsets.getComponent(this.alignToCameraBottom[i]).y;

			this.alignToCameraBottom[i].setY(this.scale.height+ offsetY);

			this.alignToCameraBottom[i].scrollFactorY = 0;
		};

		// MIDDLE (vertical)
		for(let i = 0; i < this.alignToCameraMiddle.length; i++) {

			// get offset value from component if present
			let offsetY = 0;
			if (AlignOffsets.getComponent(this.alignToCameraMiddle[i])) offsetY = AlignOffsets.getComponent(this.alignToCameraMiddle[i]).y;

			this.alignToCameraMiddle[i].setY((this.scale.height / 2) + offsetY);

			this.alignToCameraMiddle[i].scrollFactorY = 0;
		};

		// CENTER (horizontal)
		for(let i = 0; i < this.alignToCameraCenter.length; i++) {

			// get offset value from component if present
			let offsetX = 0;
			if (AlignOffsets.getComponent(this.alignToCameraCenter[i])) offsetX = AlignOffsets.getComponent(this.alignToCameraCenter[i]).x;

			this.alignToCameraCenter[i].setX((this.scale.width / 2) + offsetX);

			this.alignToCameraCenter[i].scrollFactorX = 0;
		};

	}

	/** scale objects included in scale list according to values set in it's ImageScale component */
	scaleObjects() {

		for (let i = 0; i < this.resizeScale.length; i++) {

			let scaleMultiplier = 1;
			if (this.scale.zoom <= 1) scaleMultiplier = .5;
			if (this.scale.zoom <= .75) scaleMultiplier = .75;
			if (this.scale.zoom <= .50) scaleMultiplier = 1;

			this.resizeScale[i].setScale(scaleMultiplier, scaleMultiplier);

			// if certain images need to be scaled differently, then add a component which includes such properties
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */