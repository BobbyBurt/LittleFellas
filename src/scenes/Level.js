
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

		// tankBG
		const tankBG = this.add.image(21, -41, "tankBG");
		tankBG.scaleX = 0.6108773023635666;
		tankBG.scaleY = 0.6108773023635666;

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
		const mobileTextcontainer = this.add.container(-618, -632);

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

		// fellaUI
		const fellaUI = this.add.container(-910, -450);

		// familyButton
		const familyButton = this.add.rectangle(80, 40, 125, 125);
		familyButton.setOrigin(0, 0);
		familyButton.isFilled = true;
		fellaUI.add(familyButton);

		// fellaCountText
		const fellaCountText = this.add.text(379, 40, "", {});
		fellaCountText.text = "x 0";
		fellaCountText.setStyle({ "fontFamily": "arial", "fontSize": "80px" });
		fellaUI.add(fellaCountText);

		// text_3
		const text_3 = this.add.text(90, 80, "", {});
		text_3.text = "TREE";
		text_3.setStyle({ "color": "#3d3d3dff", "fontFamily": "ARIAL", "fontSize": "40px", "fontStyle": "bold" });
		fellaUI.add(text_3);

		// fella_0000
		const fella_0000 = this.add.image(318, 79, "fella_1", "fella/0000");
		fella_0000.scaleX = 0.4669736556768917;
		fella_0000.scaleY = 0.4669736556768917;
		fellaUI.add(fella_0000);

		// ellipse_1
		const ellipse_1 = this.add.ellipse(80, 40, 35, 35);
		ellipse_1.isFilled = true;
		ellipse_1.fillColor = 15285565;
		fellaUI.add(ellipse_1);

		// moneyUI
		const moneyUI = this.add.container(-910, 430);

		// shopButton
		const shopButton = this.add.rectangle(80, -40, 125, 125);
		shopButton.setOrigin(0, 1);
		shopButton.isFilled = true;
		moneyUI.add(shopButton);

		// moneyText
		const moneyText = this.add.text(301, -40, "", {});
		moneyText.setOrigin(0, 1);
		moneyText.text = "$ 428";
		moneyText.setStyle({ "fontFamily": "arial", "fontSize": "80px" });
		moneyUI.add(moneyText);

		// text_4
		const text_4 = this.add.text(86, -122, "", {});
		text_4.text = "SHOP";
		text_4.setStyle({ "color": "#3d3d3dff", "fontFamily": "ARIAL", "fontSize": "40px", "fontStyle": "bold" });
		moneyUI.add(text_4);

		// shopMenu
		const shopMenu = this.add.container(0, 1166);

		// rectangle
		const rectangle = this.add.rectangle(0, 0, 800, 600);
		rectangle.scaleX = 1.5672471108996504;
		rectangle.scaleY = 0.7005699229611766;
		rectangle.alpha = 0.9;
		rectangle.isFilled = true;
		shopMenu.add(rectangle);

		// text_2
		const text_2 = this.add.text(0, -146, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "SHOP";
		text_2.setStyle({ "align": "center", "color": "#3e3e3eff", "fontFamily": "arial", "fontSize": "70px", "fontStyle": "bold italic" });
		text_2.setLineSpacing(15);
		shopMenu.add(text_2);

		// price
		const price = this.add.text(-3, -51, "", {});
		price.setOrigin(0.5, 0.5);
		price.text = "$ 100 each !";
		price.setStyle({ "align": "center", "color": "#3e3e3eff", "fontFamily": "arial", "fontSize": "50px" });
		price.setLineSpacing(15);
		shopMenu.add(price);

		// fellaPreview1
		const fellaPreview1 = this.add.image(-394, 64, "reg", "idle0000.png");
		fellaPreview1.tintTopLeft = 15495537;
		fellaPreview1.tintTopRight = 15495537;
		fellaPreview1.tintBottomLeft = 15495537;
		fellaPreview1.tintBottomRight = 15495537;
		shopMenu.add(fellaPreview1);

		// fellaPreview2
		const fellaPreview2 = this.add.image(-234, 64, "reg", "idle0000.png");
		fellaPreview2.tintTopLeft = 13077742;
		fellaPreview2.tintTopRight = 13077742;
		fellaPreview2.tintBottomLeft = 13077742;
		fellaPreview2.tintBottomRight = 13077742;
		shopMenu.add(fellaPreview2);

		// fellaPreview3
		const fellaPreview3 = this.add.image(-74, 64, "reg", "idle0000.png");
		fellaPreview3.tintTopLeft = 7370972;
		fellaPreview3.tintTopRight = 7370972;
		fellaPreview3.tintBottomLeft = 7370972;
		fellaPreview3.tintBottomRight = 7370972;
		shopMenu.add(fellaPreview3);

		// fellaPreview4
		const fellaPreview4 = this.add.image(86, 64, "reg", "idle0000.png");
		fellaPreview4.tintTopLeft = 8842218;
		fellaPreview4.tintTopRight = 8842218;
		fellaPreview4.tintBottomLeft = 8842218;
		fellaPreview4.tintBottomRight = 8842218;
		shopMenu.add(fellaPreview4);

		// fellaPreview5
		const fellaPreview5 = this.add.image(246, 64, "reg", "idle0000.png");
		fellaPreview5.tintTopLeft = 7857282;
		fellaPreview5.tintTopRight = 7857282;
		fellaPreview5.tintBottomLeft = 7857282;
		fellaPreview5.tintBottomRight = 7857282;
		shopMenu.add(fellaPreview5);

		// fellaPreview6
		const fellaPreview6 = this.add.image(406, 64, "reg", "idle0000.png");
		fellaPreview6.tintTopLeft = 15719761;
		fellaPreview6.tintTopRight = 15719761;
		fellaPreview6.tintBottomLeft = 15719761;
		fellaPreview6.tintBottomRight = 15719761;
		shopMenu.add(fellaPreview6);

		// fellaMenu
		const fellaMenu = this.add.container(0, 2032);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(0, 0, 800, 600);
		rectangle_2.scaleX = 1.872202098436922;
		rectangle_2.scaleY = 1.510335750772474;
		rectangle_2.alpha = 0.9;
		rectangle_2.isFilled = true;
		fellaMenu.add(rectangle_2);

		// text_5
		const text_5 = this.add.text(-474, -302, "", {});
		text_5.setOrigin(0.5, 0.5);
		text_5.text = "BREEDING \nCHART";
		text_5.setStyle({ "align": "center", "color": "#3e3e3eff", "fontFamily": "arial", "fontSize": "70px", "fontStyle": "bold italic" });
		text_5.setLineSpacing(15);
		fellaMenu.add(text_5);

		// family_tree
		const family_tree = this.add.image(324, -29, "family-tree");
		fellaMenu.add(family_tree);

		// rectangle_5
		const rectangle_5 = this.add.rectangle(-335, 107, 600, 400);
		rectangle_5.isStroked = true;
		rectangle_5.strokeColor = 4079166;
		rectangle_5.lineWidth = 5;
		fellaMenu.add(rectangle_5);

		// text_6
		const text_6 = this.add.text(-334, -27, "", {});
		text_6.setOrigin(0.5, 0.5);
		text_6.text = "current mission:";
		text_6.setStyle({ "align": "center", "color": "#3e3e3eff", "fontFamily": "arial", "fontSize": "50px", "fontStyle": "bold italic" });
		text_6.setLineSpacing(15);
		fellaMenu.add(text_6);

		// text_8
		const text_8 = this.add.text(-315, 142, "", {});
		text_8.setOrigin(0.5, 0.5);
		text_8.text = "Lorem ipsum dora\n imbidi onso kalahan \nbobbo";
		text_8.setStyle({ "color": "#3e3e3eff", "fontFamily": "arial", "fontSize": "30px" });
		text_8.setLineSpacing(15);
		fellaMenu.add(text_8);

		// tutorialUI
		const tutorialUI = this.add.container(0, -1018);

		// rectangle_4
		const rectangle_4 = this.add.rectangle(0, 0, 800, 600);
		rectangle_4.isFilled = true;
		rectangle_4.fillColor = 0;
		rectangle_4.fillAlpha = 0.8;
		tutorialUI.add(rectangle_4);

		// text_7
		const text_7 = this.add.text(0, -6, "", {});
		text_7.setOrigin(0.5, 0.5);
		text_7.text = "This is the tutorial text. \nLorem ipsum indesid \nglonkin ishta ongol";
		text_7.setStyle({ "align": "center", "fontFamily": "arial", "fontSize": "50px" });
		text_7.setLineSpacing(15);
		tutorialUI.add(text_7);

		// lists
		const alignToCameraLeft = [mobileTextcontainer, buttonTest, moneyUI, fellaUI];
		const alignToCameraRight = [buttonTest2];
		const alignToCameraTop = [mobileTextcontainer, fellaUI];
		const alignToCameraBottom = [buttonTest2, buttonTest, moneyUI];
		const resizeScale = [];
		const alignToCameraMiddle = [orientationPrompt, shopMenu, fellaMenu, tutorialUI];
		const alignToCameraCenter = [orientationPrompt, shopMenu, fellaMenu, tutorialUI];
		const pantsTest = [];
		const fellasList = [];
		const buyButtons = [fellaPreview1, fellaPreview2, fellaPreview3, fellaPreview4, fellaPreview5, fellaPreview6];

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

		// shopMenu (components)
		const shopMenuAlignOffsets = new AlignOffsets(shopMenu);
		shopMenuAlignOffsets.y = 300;

		this.tankBG = tankBG;
		this.buttonTest2 = buttonTest2;
		this.buttonTest = buttonTest;
		this.mobileTextcontainer = mobileTextcontainer;
		this.mobileText = mobileText;
		this.spriteCountText = spriteCountText;
		this.fpsText = fpsText;
		this.zoomText = zoomText;
		this.orientationPrompt = orientationPrompt;
		this.fellaUI = fellaUI;
		this.familyButton = familyButton;
		this.fellaCountText = fellaCountText;
		this.moneyUI = moneyUI;
		this.shopButton = shopButton;
		this.moneyText = moneyText;
		this.shopMenu = shopMenu;
		this.fellaPreview1 = fellaPreview1;
		this.fellaPreview2 = fellaPreview2;
		this.fellaPreview3 = fellaPreview3;
		this.fellaPreview4 = fellaPreview4;
		this.fellaPreview5 = fellaPreview5;
		this.fellaPreview6 = fellaPreview6;
		this.fellaMenu = fellaMenu;
		this.tutorialUI = tutorialUI;
		this.alignToCameraLeft = alignToCameraLeft;
		this.alignToCameraRight = alignToCameraRight;
		this.alignToCameraTop = alignToCameraTop;
		this.alignToCameraBottom = alignToCameraBottom;
		this.resizeScale = resizeScale;
		this.alignToCameraMiddle = alignToCameraMiddle;
		this.alignToCameraCenter = alignToCameraCenter;
		this.pantsTest = pantsTest;
		this.fellasList = fellasList;
		this.buyButtons = buyButtons;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	tankBG;
	/** @type {Phaser.GameObjects.Rectangle} */
	buttonTest2;
	/** @type {Phaser.GameObjects.Rectangle} */
	buttonTest;
	/** @type {Phaser.GameObjects.Container} */
	mobileTextcontainer;
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
	/** @type {Phaser.GameObjects.Container} */
	fellaUI;
	/** @type {Phaser.GameObjects.Rectangle} */
	familyButton;
	/** @type {Phaser.GameObjects.Text} */
	fellaCountText;
	/** @type {Phaser.GameObjects.Container} */
	moneyUI;
	/** @type {Phaser.GameObjects.Rectangle} */
	shopButton;
	/** @type {Phaser.GameObjects.Text} */
	moneyText;
	/** @type {Phaser.GameObjects.Container} */
	shopMenu;
	/** @type {Phaser.GameObjects.Image} */
	fellaPreview1;
	/** @type {Phaser.GameObjects.Image} */
	fellaPreview2;
	/** @type {Phaser.GameObjects.Image} */
	fellaPreview3;
	/** @type {Phaser.GameObjects.Image} */
	fellaPreview4;
	/** @type {Phaser.GameObjects.Image} */
	fellaPreview5;
	/** @type {Phaser.GameObjects.Image} */
	fellaPreview6;
	/** @type {Phaser.GameObjects.Container} */
	fellaMenu;
	/** @type {Phaser.GameObjects.Container} */
	tutorialUI;
	/** @type {Array<Phaser.GameObjects.Container|Phaser.GameObjects.Rectangle>} */
	alignToCameraLeft;
	/** @type {Phaser.GameObjects.Rectangle[]} */
	alignToCameraRight;
	/** @type {Phaser.GameObjects.Container[]} */
	alignToCameraTop;
	/** @type {Array<Phaser.GameObjects.Rectangle|Phaser.GameObjects.Container>} */
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
	/** @type {Phaser.GameObjects.Image[]} */
	buyButtons;

	/* START-USER-CODE */

	/** @type {Phaser.GameObjects.Group} */
	fellas;

	tankWidth = 1820;
	tankHeight = 880;
	minScreenWidth = (this.tankWidth + (64 * 2));
	minScreenHeight = (this.tankHeight + (20 * 2));
	// the number being double represents the amount of space we want at least on both sides

	/** how much total velocity of drag does it take to make fella want to breed */
	velocityToBreed = 2000;
	terminalVelocity = 70;

	/** max frames to be considered a tap */
	tapDownTime = 70;

	money;

	// DEBUG: i removed yellow from this list

	// races
	races = new Map([

		// tier 1
		['red', {
			breeding: { with: 'purple', makes: 'angro' },
			sprite: 'reg',
			tint: 0xec7171,
			circleRadius: 40,
			mass: 10,
			unlocked: false
		}],
		['purple', {
			breeding: { with: 'blue', makes: 'girl' },
			sprite: 'reg',
			tint: 0xc78cee,
			circleRadius: 40,
			mass: 10,
			unlocked: false
		}],
		['blue', {
			breeding: { with: 'cyan', makes: 'boyo' },
			sprite: 'reg',
			tint: 0x7078dc,
			circleRadius: 40,
			mass: 10
		}],
		['cyan', {
			breeding: { with: 'green', makes: 'ufo' },
			sprite: 'reg',
			tint: 0x86ebea,
			circleRadius: 40,
			mass: 10
		}],
		['green', {
			breeding: { with: 'yellow', makes: 'mango' },
			sprite: 'reg',
			tint: 0x77e482,
			circleRadius: 40,
			mass: 10
		}],
		['yellow', {
			breeding: { with: 'red', makes: 'nothing' },
			sprite: 'reg',
			tint: 0xefdd51,
			circleRadius: 40,
			mass: 10
		}],

		// tier 2
		['angro', {
			breeding: { with: 'girl', makes: 'scooper' },
			sprite: 'angro',
			tint: 0xffffff,
			circleRadius: 80,
			mass: 20
		}],
		['girl', {
			breeding: { with: 'boyo', makes: 'pixie' },
			sprite: 'girl',
			tint: 0xffffff,
			circleRadius: 80,
			mass: 20
		}],
		['boyo', {
			breeding: { with: 'ufo', makes: 'smarto' },
			sprite: 'boyo',
			tint: 0xffffff,
			circleRadius: 80,
			mass: 20
		}],
		['ufo', {
			breeding: { with: 'mango', makes: 'bull' },
			sprite: 'ufo',
			tint: 0xffffff,
			circleRadius: 80,
			mass: 20
		}],
		['mango', {
			breeding: { with: 'angro', makes: 'nothing' },
			sprite: 'mango',
			tint: 0xffffff,
			circleRadius: 80,
			mass: 20
		}],

		// tier 3
		['scooper', {
			breeding: { with: 'pixie', makes: 'balls' },
			sprite: 'scooper',
			tint: 0xffffff,
			circleRadius: 80,
			mass: 20
		}],
		['pixie', {
			breeding: { with: 'smarto', makes: 'bee' },
			sprite: 'pixie',
			tint: 0xffffff,
			circleRadius: 80,
			mass: 20
		}], 
		['smarto', {
			breeding: { with: 'bull', makes: 'weird' },
			sprite: 'smarto',
			tint: 0xffffff,
			circleRadius: 80,
			mass: 20
		}], 
		['bull', {
			breeding: { with: 'scooper', makes: 'nothing' },
			sprite: 'bull',
			tint: 0xffffff,
			circleRadius: 80,
			mass: 20
		}], 

		// tier 4
		['balls', {
			breeding: { with: 'bee', makes: 'mom' },
			sprite: 'balls',
			tint: 0xffffff,
			circleRadius: 80,
			mass: 20
		}], 
		['bee', {
			breeding: { with: 'weird', makes: 'dad' },
			sprite: 'bee',
			tint: 0xffffff,
			circleRadius: 80,
			mass: 20
		}],
		['weird', {
			breeding: { with: 'balls', makes: 'nothing' },
			sprite: 'weird',
			tint: 0xffffff,
			circleRadius: 80,
			mass: 20
		}],

		// tier 5
		['mom', {
			breeding: { with: 'dad', makes: 'ultimate' },
			sprite: 'reg',
			tint: 0xff0000,
			circleRadius: 80,
			mass: 20
		}], 
		['dad', {
			breeding: { with: 'mom', makes: 'nothing' },
			sprite: 'reg',
			tint: 0x0066ff,
			circleRadius: 80,
			mass: 20
		}], 

		// tier 6
		['ultimate', {
			breeding: { with: 'ultimate', makes: 'gremlin' },
			sprite: 'ultimate',
			tint: 0xffffff,
			circleRadius: 80,
			mass: 20
		}], 

		// secret
		['gremlin', {
			breeding: { with: 'gremlin', makes: 'gremlin' },
			sprite: 'gremlin',
			tint: 0xffffff,
			circleRadius: 30,
			mass: 20
		}]

	]);

	/** abstracted because tier 1 will likely change */
	racesUnlocked = [false, false, true, true, false, false];
	racesUnlocked = [true, true, true, true, true, true];
	tier1Races = ['red', 'purple', 'blue', 'cyan', 'green', 'yellow'];

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
		this.tankBG.setDepth(-1000);

		//audio
		this.sound.setVolume(1);
		this.music = this.sound.add('tank-2').play();
		this.sound.add('impact');
		this.sound.add('munch');
		this.sound.add('tap', {volume: 0.3});

		this.setupInput();

		// orientation
		this.orientationPrompt.setDepth(1000);
		this.orientationPrompt.setAlpha(0);
		// TODO: parallel UI scene isn't set up yet. This needs to be there

		// debug UI
		this.mobileText.setText('mobile: ' + this.registry.get('mobile'));
		this.mobileTextcontainer.setVisible(false);
		// change this before release

		this.setupPhysics();

		// CUT CONTENT - tap input
		// let _this = this;
		// this.input.on('pointerup', function (pointer) {

		// 	console.log(pointer.upTime - pointer.downTime, _this.tapDownTime);
		// 	if ((pointer.upTime - pointer.downTime) < _this.tapDownTime) {

		// 		_this.sound.play('tap');

		// 		_this.registry.set('last-tap', {x: pointer.worldX, y: pointer.worldY});

		// 		_this.fellas.getChildren().forEach(function (item, index) {


		// 			item.status.setState('scatter');
		// 		})
		// 	}
		// });

		// TEMP: manual fella create
		// this.spawnTimer = new Phaser.Time.TimerEvent({ delay: 4000, loop: true, callback: () => {

		// 	this.addFella(Phaser.Math.RND.pick(this.spawningRaces));

		// }});

		// this.time.addEvent(this.spawnTimer);

		// starting fellas
		this.addFella('purple');
		this.addFella('blue');
		this.addFella('cyan');
		// this.addFella('yellow');
		// this.addFella('boyo');
		// this.addFella('girl');
		// this.addFella('mango');
		// this.addFella('balls');
		// this.addFella('bee');
		// this.addFella('weird');
		// this.addFella('gremlin');
		// this.addFella('bull');
		// this.addFella('mom');
		// this.addFella('dad');
		// this.addFella('ufo');
		// this.addFella('scooper');
		// this.addFella('pixie');
		// this.addFella('smarto');
		// this.addFella('ultimate');
		// this.addFella('angro');

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

		this.setupUI();

		// this.startUI = this.add.sprite(0, 0, 'guapen');
		// this.startUI.play('start-mission')
		// TODO: start animation is really broken

		// starting money
		this.money = 0;
		this.setMoney(999999);

		// TODO: make UI setup its own clas, yeah?

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
		// this.spriteCountText.setText('fellas: ' + this.fellas.getLength());
		// its just easier to do this every frame. wont be in the final game anyways
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
		fella.setData('regular', (race == 'white' || race == 'yellow' || race == 'green' || race == 'cyan' || race == 'blue' || race == 'purple'));
		fella.setData('sprite', raceData.sprite);
		fella.setData('alive', true);
		fella.setData('energy', 1);
		fella.setData('totalVelocity', 0);

		fella.type = 'fella';
		// used to distinguish bodies

		// state machine
		fella.status = new StateController(fella, this);
		fella.status.setState('idle');

		// update count
		this.fellaCountText.setText('x ' + this.fellas.getLength());
	}

	/** adds / removes fella from horny group  */
	setHorny(fella, horny) {

		if (horny) {

			if (this.hornyFellas.getLength() < this.hornyFellas.maxSize) {

				this.hornyFellas.add(fella);
			}
		}
	}

	/**
	 * 
	 * @param {number} fella gameobject
	 * @param {number} amount 0-1, 1 being full energy
	 * @param {number} add add amount to current energy. Otherwise, energy will be set to amount
	 */
	setEnergy(fella, amount, add) {

		let newEnergy = 0;
		if (add) {

			newEnergy = fella.getData('energy') + amount;
			if (newEnergy > 1) newEnergy = 1;
		}
		else {

			newEnergy = amount;
		}

		fella.setData('energy', newEnergy);
	}

	/**
	 * called when fella hits a wall at terminal velocity
	 * 
	 * @param {*} fella 
	 */
	fellaImpact(_fellaBody) {

		this.sound.play('impact');
		_fellaBody.gameObject.setData('alive', false);
		_fellaBody.gameObject.setData('drop-food', true);
		// sliding state will check this at the end

		// break from drag
		console.log(_fellaBody);
		console.log(this.mouseConstraint);
		this.mouseConstraint.stopDrag();
	}

	/**
	 * called by each horny fella when two of them touch
	 * @param {GameObject} race 
	 */
	breed(race1, race2) {

		// what does this combo make
		let race1Data = this.races.get(race1.getData('race'));
		let race2Data = this.races.get(race2.getData('race'));
		if (race1Data.breeding.with == race2.getData('race') && race1Data.breeding.makes != 'nothing') {

			this.addFella(race1Data.breeding.makes);
		}
		else if (race2Data.breeding.with == race1.getData('race') && race2Data.breeding.makes != 'nothing') {

			this.addFella(race2Data.breeding.makes);
		}
		race1.status.setState('dead');
		race2.status.setState('dead');
	}

	addFood(x, y) {

		const food = this.add.image(x, y, 'guapen').setScale(.3, .3);
		food.setDepth(800);

		this.matter.add.gameObject(food, { inertia: Infinity, isSensor: true, shape: {type: 'circle', radius: 40}}).setFrictionAir(.3).type = 'food';

		this.foodRemove = this.time.delayedCall(10000, () => {

			food.destroy();
		})
	}

	/** CUT CONTENT */
	addPuke(x, y) {

		const puke = this.add.image(x, y, 'poof').setScale(.5);
		puke.setDepth(-800);
		puke.setTint(0x669900);

		this.matter.add.gameObject(puke, { inertia: Infinity, isSensor: true, isStatic: true, shape: {type: 'circle', radius: 60}}).type = 'puke';

		puke.setOnCollide(pair => {

			// catch wall
			if (pair.bodyB.isStatic && pair.bodyA.isStatic) return;

			// catch food
			if (pair.bodyB.gameObject.type == 'food' || pair.bodyA.gameObject.type == 'food') return;

			// set def
			let _fella;
			if (pair.bodyB.gameObject.type == 'puke') _fella = pair.bodyA;
			else if (pair.bodyA.gameObject.type == 'puke') _fella = pair.bodyB;

			if (_fella.gameObject != null) {

				_fella.gameObject.status.setState('dead');
				// TODO: add sickness state, not instant death
			}
		});
	}

	/**
	 * create tank walls
	 * 
	 * collision event
	 * 
	 * called from create
	 */
	setupPhysics() {

		// tank bounds
		this.topBound = this.matter.add.gameObject(this.add.rectangle(-1210, -750, 6000, 600), {isStatic: true});
		this.leftBound = this.matter.add.gameObject(this.add.rectangle(-1210, -750, 600, 6000), {isStatic: true});
		this.bottomBound = this.matter.add.gameObject(this.add.rectangle(-1210, 730, 6000, 600), {isStatic: true});
		this.rightBound = this.matter.add.gameObject(this.add.rectangle(1210, -750, 600, 6000), {isStatic: true});
		// this is centered at (0, 10) to avoid accidental app switching on ios

		// OLD - tank bounds 
		// this.matter.world.setBounds(-910, -450, 1820, 880, 300);;

		// LESS OLD - tank bounds
		// this.matter.add.rectangle(-1210, -750, 6000, 600, {isStatic: true}).side = 'top';
		// this.matter.add.rectangle(-1210, -750, 600, 6000, {isStatic: true}).side = 'left';
		// this.matter.add.rectangle(-1210, 730, 6000, 600, {isStatic: true}).side = 'bottom';
		// this.matter.add.rectangle(1210, -750, 600, 6000, {isStatic: true}).side = 'right';

		// physics
		this.setupDrag();
		const _this = this;
		this.colCount = 0;

		// OLD - world collision detection
		// this.topBound.setOnCollideWith(this.dragge pair => {

		// 	console.log('top');
		// });

		// collision event
		// this.matter.world.on('collisionstart', (event, bodyA, bodyB) => {

		// 	// console.log(event);
		// 	if (bodyA.isStatic || bodyB.isStatic)
		// 		return;

		// 	// breed check
		// 	if (bodyA.gameObject.getData('horny') && bodyB.gameObject.getData('horny')) {

		// 		let raceA = bodyA.gameObject.getData('race');
		// 		let raceB = bodyB.gameObject.getData('race');
		// 		let raceDataA = this.races.get(raceA);
		// 		let raceDataB = this.races.get(raceB);

		// 		if (raceDataA.breeding.with == raceB && raceDataA.breeding.makes != 'nothing') {

		// 			this.addFella(raceDataA.breeding.makes);
		// 		}
		// 		else if (raceDataB.breeding.with == raceA && raceDataB.breeding.makes != 'nothing') {

		// 			this.addFella(raceDataB.breeding.makes);
		// 		}

		// 		// TEMP: killing parents				
		// 		bodyA.gameObject.status.setState('dead');
		// 		bodyB.gameObject.status.setState('dead');
		// 	}
		// });
	}

	/** setup mouse drag physics constraints & events */
	setupDrag() {

		/** @type {Phaser.Physics.Matter.PointerConstraint} */		
		this.mouseConstraint = this.matter.add.mouseSpring();
		// NOTE: apparently I can use stopDrag()
		// https://newdocs.phaser.io/docs/3.54.0/focus/Phaser.Physics.Matter.Factory-mouseSpring
		// TODO: how do I know when / what is being dragged so I can set a state?

		let _scene = this
		this.matter.world.on('dragstart', function(body) { 

			// cant drag bounds
			if (body.isStatic) return;

			// food
			if (body.gameObject.type == 'food') {

				return;
			}

			// fella-bound collision callback for impact check
			body.gameObject.setOnCollideWith(_scene.topBound.body, () => {

				_scene.impactCheck(body, 'top');
			});
			body.gameObject.setOnCollideWith(_scene.leftBound.body, () => {

				_scene.impactCheck(body, 'left');
			});
			body.gameObject.setOnCollideWith(_scene.bottomBound.body, () => {

				_scene.impactCheck(body, 'bottom');
			});
			body.gameObject.setOnCollideWith(_scene.rightBound.body, () => {

				_scene.impactCheck(body, 'right');
			});

			// setup transition conditions if necessary
			body.gameObject.status.setState('dragged');
		});

		const _this = this;
		this.matter.world.on('dragend', function(body) { 

			// drag wall
			if (body.isStatic) return;

			// fella has died during drag
			if (body.gameObject == null) {

				console.log('dragend event: this fella is dead');
				return;
			}

			// food
			if (body.gameObject.type == 'food') {

				// if(_this.matter.intersectBody(body, _this.fellas.getChildren()[0])) {

				// 	console.log('feed');
				// }
				let intersect = _this.matter.intersectBody(body, _this.fellas.getChildren());
				if(intersect[0] != null) {

					_this.setEnergy(intersect[0].gameObject, .3, true);

					body.gameObject.destroy(); 

					_this.sound.play('munch');

					// TODO: visual effect
				}

				// TODO: visual feedback

				return;
			}


			// shaken = horny
			// only if velocity > terminal and fella is alive
			if(((body.gameObject.getData('totalVelocity') > _this.velocityToBreed) || body.gameObject.getData('horny')) && body.gameObject.getData('alive')) {

				body.gameObject.setData('horny', true);
				body.gameObject.status.setState('breeding');

				// collide with other horny callback
				body.gameObject.setOnCollide(pair => {

					// with wall
					if (pair.bodyB.isStatic || pair.bodyA.isStatic) return;

					// post dead
					if (pair.bodyA.gameObject == null || pair.bodyB.gameObject == null) {

						console.log('breed collide event: fella to breed is dead');
						return;
					}

					if (pair.bodyB.gameObject.getData('horny') && pair.bodyA.gameObject.getData('horny')) {

						_this.breed(pair.bodyA.gameObject, pair.bodyB.gameObject);
					}
				});
			}
			else {

				body.gameObject.status.setState('sliding');
			}
		});
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

			this.addFella('red');
			this.addFella('purple');
			this.addFella('blue');
			this.addFella('cyan');
			this.addFella('green');
			this.addFella('yellow');
		});

		// spawning sprites
		this.controls.onPress('right', () => {

			// TEST: puke
			this.addPuke(300, 300);
		});
	}

	/**
	 * 
	 * @param {*} _fella 
	 * @param {*} side 'top', 'left', etc
	 * @returns 
	 */
	impactCheck(_fella, side) {

		// return if fella is being dragged
		// if (_fella.gameObject.status.currentState.constructor.name == 'Dragged') {

		// 	console.log('collision during drag state has been ignored');
		// 	return;
		// }

		// kill if at terminal velocity
		if (side == 'top' && _fella.velocity.y < -this.terminalVelocity) {

			console.log('top');
			this.fellaImpact(_fella);
		}
		else if (side == 'bottom' && _fella.velocity.y > this.terminalVelocity) {

			console.log('bottom');
			this.fellaImpact(_fella);
		}
		else if (side == 'left' && _fella.velocity.x < -this.terminalVelocity) {

			console.log('left');
			this.fellaImpact(_fella);
		}
		else if (side == 'right' && _fella.velocity.x > this.terminalVelocity) {

			console.log('right');
			this.fellaImpact(_fella);
		}
	}

	/** shop & family tree */
	setupUI() {

		// shop UI
		this.moneyUI.setDepth(999);
		this.shopMenu.setDepth(999);
		this.shopMenu.setVisible(false);
		this.shopButton.setInteractive();
		this.shopButton.on('pointerdown', () => {

			// TODO: check if other menu is open
			this.shopMenu.setVisible(!this.shopMenu.visible);

		});

		// buy buttons
		let _this = this;
		this.buyButtons.forEach(function (item, index) {

			item.setInteractive();
			item.on('pointerdown', () => {

				if (_this.racesUnlocked[index] && _this.money >= 100) {

					_this.addFella(_this.tier1Races[index]);

					_this.setMoney(-100);
				}
			});
		});

		// fella UI
		this.fellaUI.setDepth(999);
		this.fellaMenu.setDepth(999);
		this.fellaMenu.setVisible(false);
		this.familyButton.setInteractive();
		this.familyButton.on('pointerdown', () => {

			this.fellaMenu.setVisible(!this.fellaMenu.visible);

		});

		this.tutorialUI.setVisible(false);
	}

	/**
	 * unlocks race in shop, updates UI to reflect
	 * @param {Number} race based on racesUnlocked[]
	 */
	unlockRace(raceUnlockIndex) {

		this.racesUnlocked[raceUnlockIndex] = true;
		switch (raceUnlockIndex) {
			case 0 :
				this.fellaPreview1.setAlpha(1);
				break;
			case 1 :
				this.fellaPreview2.setAlpha(1);
				break;
			case 2 :
				this.fellaPreview3.setAlpha(1);
				break;
			case 3 :
				this.fellaPreview4.setAlpha(1);
				break;
			case 4 :
				this.fellaPreview5.setAlpha(1);
				break;
			case 5 :
				this.fellaPreview6.setAlpha(1);
				break;
		}
	}

	/**
	 * add or subtract money, update UI
	 * @param {Number} amount positive or negative dollars
	 */
	setMoney(amount) {

		this.money += amount;
		this.moneyText.setText('$ ' + this.money)
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

			this.alignToCameraLeft[i].setX(this.cameras.main.worldView.left + offsetX);
		};

		// RIGHT
		for(let i = 0; i < this.alignToCameraRight.length; i++) {

			// get offset value from component if present
			let offsetX = 0;
			if (AlignOffsets.getComponent(this.alignToCameraRight[i])) offsetX = AlignOffsets.getComponent(this.alignToCameraRight[i]).x;

			this.alignToCameraRight[i].setX(this.cameras.main.worldView.right + offsetX);
		};

		// TOP
		for(let i = 0; i < this.alignToCameraTop.length; i++) {

			// get offset value from component if present
			let offsetY = 0;
			if (AlignOffsets.getComponent(this.alignToCameraTop[i])) offsetY = AlignOffsets.getComponent(this.alignToCameraTop[i]).y;

			this.alignToCameraTop[i].setY(this.cameras.main.worldView.top + offsetY);

		};

		// BOTTOM
		for(let i = 0; i < this.alignToCameraBottom.length; i++) {

			// get offset value from component if present
			let offsetY = 0;
			if (AlignOffsets.getComponent(this.alignToCameraBottom[i])) offsetY = AlignOffsets.getComponent(this.alignToCameraBottom[i]).y;

			this.alignToCameraBottom[i].setY(this.cameras.main.worldView.bottom + offsetY);
		};

		// MIDDLE (vertical)
		for(let i = 0; i < this.alignToCameraMiddle.length; i++) {

			// get offset value from component if present
			let offsetY = 0;
			if (AlignOffsets.getComponent(this.alignToCameraMiddle[i])) offsetY = AlignOffsets.getComponent(this.alignToCameraMiddle[i]).y;

			this.alignToCameraMiddle[i].setY(this.cameras.main.worldView.centerY + offsetY);
		};

		// CENTER (horizontal)
		for(let i = 0; i < this.alignToCameraCenter.length; i++) {

			// get offset value from component if present
			let offsetX = 0;
			if (AlignOffsets.getComponent(this.alignToCameraCenter[i])) offsetX = AlignOffsets.getComponent(this.alignToCameraCenter[i]).x;

			this.alignToCameraCenter[i].setX(this.cameras.main.worldView.centerX + offsetX);
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

	/** scene specific resizing adjustments
	 * 
	 * called at window resize from main.js binded method
	 */
	resize() {

		this.setAdaptiveZoom();

		this.scaleObjects();

		this.cameras.main.centerOn(0, 0);		

		// orientation check
		if (this.registry.get('mobile') && this.scale.height > this.scale.width) {

			this.orientationPrompt.setAlpha(1);
			this.input.enabled = false;

			// TODO: hide shop or family UI
		}
		else {

			this.orientationPrompt.setAlpha(0);
			this.input.enabled = true;
		}

		this.cameras.main.preRender(1);

		this.alignObjects();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */