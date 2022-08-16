
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
		const tankBG = this.add.image(21, -9, "tankBG");
		tankBG.scaleX = 0.8716858393617378;
		tankBG.scaleY = 0.8716858393617378;

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
		const rectangle_1 = this.add.rectangle(0, 285, 800, 600);
		rectangle_1.scaleX = 0.6606997074656922;
		rectangle_1.scaleY = 0.4588090776043341;
		rectangle_1.isFilled = true;
		rectangle_1.fillAlpha = 0.8;
		rectangle_1.isStroked = true;
		rectangle_1.strokeColor = 0;
		rectangle_1.lineWidth = 6;
		orientationPrompt.add(rectangle_1);

		// text
		const text = this.add.text(0, 280, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "You may need to use \nthe default browser \nto change orientation";
		text.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "verdana", "fontSize": "40px" });
		text.setLineSpacing(15);
		orientationPrompt.add(text);

		// tilt_prompt
		const tilt_prompt = this.add.image(-24, -304, "tilt-prompt");
		orientationPrompt.add(tilt_prompt);

		// fellaUI
		const fellaUI = this.add.container(-910, -450);

		// fellaCountText
		const fellaCountText = this.add.text(390, 40, "", {});
		fellaCountText.text = "x 0";
		fellaCountText.setStyle({ "color": "#ffffffff", "fontFamily": "verdana", "fontSize": "80px", "fontStyle": "bold", "stroke": "#000000ff", "strokeThickness":7});
		fellaUI.add(fellaCountText);

		// fella_0000
		const fella_0000 = this.add.image(337, 40, "fella_1", "fella/0000");
		fella_0000.scaleX = 0.6;
		fella_0000.scaleY = 0.6;
		fella_0000.setOrigin(0.5, 0);
		fellaUI.add(fella_0000);

		// familyButton
		const familyButton = this.add.image(80, 40, "tree");
		familyButton.scaleX = 1.2;
		familyButton.scaleY = 1.2;
		familyButton.setOrigin(0, 0);
		fellaUI.add(familyButton);

		// moneyUI
		const moneyUI = this.add.container(-910, 430);

		// moneyText
		const moneyText = this.add.text(250, -62, "", {});
		moneyText.setOrigin(0, 1);
		moneyText.text = "$ 428";
		moneyText.setStyle({ "color": "#ffffffff", "fontFamily": "verdana", "fontSize": "80px", "fontStyle": "bold", "stroke": "#000000ff", "strokeThickness":7});
		moneyUI.add(moneyText);

		// shopButton
		const shopButton = this.add.image(80, -40, "shop");
		shopButton.scaleX = 1.2;
		shopButton.scaleY = 1.2;
		shopButton.setOrigin(0, 1);
		moneyUI.add(shopButton);

		// shopMenu
		const shopMenu = this.add.container(0, 1166);

		// shopBG
		const shopBG = this.add.rectangle(0, 0, 1200, 300);
		shopBG.scaleX = 0.9597753066187042;
		shopBG.scaleY = 1.1541161145482117;
		shopBG.alpha = 0.9;
		shopBG.isFilled = true;
		shopBG.fillColor = 5126971;
		shopMenu.add(shopBG);

		// pedestal_1
		const pedestal_1 = this.add.image(89, 146, "pedestal");
		shopMenu.add(pedestal_1);

		// pedestal_2
		const pedestal_2 = this.add.image(239, 146, "pedestal");
		shopMenu.add(pedestal_2);

		// pedestal_3
		const pedestal_3 = this.add.image(410, 146, "pedestal");
		shopMenu.add(pedestal_3);

		// pedestal_4
		const pedestal_4 = this.add.image(-232, 146, "pedestal");
		shopMenu.add(pedestal_4);

		// pedestal_5
		const pedestal_5 = this.add.image(-394, 146, "pedestal");
		shopMenu.add(pedestal_5);

		// pedestal
		const pedestal = this.add.image(-66, 146, "pedestal");
		shopMenu.add(pedestal);

		// price
		const price = this.add.text(106, -85, "", {});
		price.setOrigin(0.5, 0.5);
		price.text = "200 $ for two!";
		price.setStyle({ "align": "center", "color": "#9b0e0eff", "fontFamily": "verdana", "fontSize": "45px", "fontStyle": "bold", "stroke": "#e8d772ff", "strokeThickness":4});
		price.setLineSpacing(15);
		shopMenu.add(price);

		// fellaPreview1
		const fellaPreview1 = this.add.image(-394, 31, "reg", "idle0000.png");
		fellaPreview1.tintTopLeft = 15495537;
		fellaPreview1.tintTopRight = 15495537;
		fellaPreview1.tintBottomLeft = 15495537;
		fellaPreview1.tintBottomRight = 15495537;
		shopMenu.add(fellaPreview1);

		// fellaPreview2
		const fellaPreview2 = this.add.image(-234, 31, "reg", "idle0000.png");
		fellaPreview2.tintTopLeft = 13077742;
		fellaPreview2.tintTopRight = 13077742;
		fellaPreview2.tintBottomLeft = 13077742;
		fellaPreview2.tintBottomRight = 13077742;
		shopMenu.add(fellaPreview2);

		// fellaPreview3
		const fellaPreview3 = this.add.image(-74, 31, "reg", "idle0000.png");
		fellaPreview3.tintTopLeft = 7370972;
		fellaPreview3.tintTopRight = 7370972;
		fellaPreview3.tintBottomLeft = 7370972;
		fellaPreview3.tintBottomRight = 7370972;
		shopMenu.add(fellaPreview3);

		// fellaPreview4
		const fellaPreview4 = this.add.image(86, 31, "reg", "idle0000.png");
		fellaPreview4.tintTopLeft = 8842218;
		fellaPreview4.tintTopRight = 8842218;
		fellaPreview4.tintBottomLeft = 8842218;
		fellaPreview4.tintBottomRight = 8842218;
		shopMenu.add(fellaPreview4);

		// fellaPreview5
		const fellaPreview5 = this.add.image(246, 31, "reg", "idle0000.png");
		fellaPreview5.tintTopLeft = 7857282;
		fellaPreview5.tintTopRight = 7857282;
		fellaPreview5.tintBottomLeft = 7857282;
		fellaPreview5.tintBottomRight = 7857282;
		shopMenu.add(fellaPreview5);

		// fellaPreview6
		const fellaPreview6 = this.add.image(406, 31, "reg", "idle0000.png");
		fellaPreview6.tintTopLeft = 15719761;
		fellaPreview6.tintTopRight = 15719761;
		fellaPreview6.tintBottomLeft = 15719761;
		fellaPreview6.tintBottomRight = 15719761;
		shopMenu.add(fellaPreview6);

		// buy
		const buy = this.add.image(-173, -88, "buy");
		shopMenu.add(buy);

		// rod
		const rod = this.add.image(0, -167, "rod");
		rod.scaleX = 1.5534091410872721;
		rod.scaleY = 1.0999291599090095;
		shopMenu.add(rod);

		// curtain
		const curtain = this.add.image(-509, 1, "curtain");
		shopMenu.add(curtain);

		// curtain_1
		const curtain_1 = this.add.image(509, -1, "curtain");
		curtain_1.flipX = true;
		shopMenu.add(curtain_1);

		// fellaMenu
		const fellaMenu = this.add.container(0, 2032);

		// familyBG
		const familyBG = this.add.rectangle(0, 0, 800, 600);
		familyBG.scaleX = 1.3482378326492772;
		familyBG.scaleY = 1.8342785057727995;
		familyBG.isFilled = true;
		fellaMenu.add(familyBG);

		// ellipse_11
		const ellipse_11 = this.add.ellipse(-226.9988555908203, -58, 128, 128);
		ellipse_11.scaleX = 0.8385369514530041;
		ellipse_11.scaleY = 0.8385369514530041;
		ellipse_11.isFilled = true;
		ellipse_11.fillColor = 14803425;
		fellaMenu.add(ellipse_11);

		// ellipse_12
		const ellipse_12 = this.add.ellipse(-77.00497436523438, -58, 128, 128);
		ellipse_12.scaleX = 0.8385369514530041;
		ellipse_12.scaleY = 0.8385369514530041;
		ellipse_12.isFilled = true;
		ellipse_12.fillColor = 14803425;
		fellaMenu.add(ellipse_12);

		// ellipse_13
		const ellipse_13 = this.add.ellipse(72, -58, 128, 128);
		ellipse_13.scaleX = 0.8385369514530041;
		ellipse_13.scaleY = 0.8385369514530041;
		ellipse_13.isFilled = true;
		ellipse_13.fillColor = 14803425;
		fellaMenu.add(ellipse_13);

		// ellipse_14
		const ellipse_14 = this.add.ellipse(226.4710235595703, -58, 128, 128);
		ellipse_14.scaleX = 0.8385369514530041;
		ellipse_14.scaleY = 0.8385369514530041;
		ellipse_14.isFilled = true;
		ellipse_14.fillColor = 14803425;
		fellaMenu.add(ellipse_14);

		// ellipse_15
		const ellipse_15 = this.add.ellipse(-158.00497436523438, 116, 128, 128);
		ellipse_15.scaleX = 0.8385369514530041;
		ellipse_15.scaleY = 0.8385369514530041;
		ellipse_15.isFilled = true;
		ellipse_15.fillColor = 14803425;
		fellaMenu.add(ellipse_15);

		// ellipse_16
		const ellipse_16 = this.add.ellipse(-3.36011004447937, 116, 128, 128);
		ellipse_16.scaleX = 0.8385369514530041;
		ellipse_16.scaleY = 0.8385369514530041;
		ellipse_16.isFilled = true;
		ellipse_16.fillColor = 14803425;
		fellaMenu.add(ellipse_16);

		// ellipse_17
		const ellipse_17 = this.add.ellipse(148.95925903320312, 116, 128, 128);
		ellipse_17.scaleX = 0.8385369514530041;
		ellipse_17.scaleY = 0.8385369514530041;
		ellipse_17.isFilled = true;
		ellipse_17.fillColor = 14803425;
		fellaMenu.add(ellipse_17);

		// ellipse_18
		const ellipse_18 = this.add.ellipse(-84.89134216308594, 280, 128, 128);
		ellipse_18.scaleX = 0.8385369514530041;
		ellipse_18.scaleY = 0.8385369514530041;
		ellipse_18.isFilled = true;
		ellipse_18.fillColor = 14803425;
		fellaMenu.add(ellipse_18);

		// ellipse_19
		const ellipse_19 = this.add.ellipse(67, 280, 128, 128);
		ellipse_19.scaleX = 0.8385369514530041;
		ellipse_19.scaleY = 0.8385369514530041;
		ellipse_19.isFilled = true;
		ellipse_19.fillColor = 14803425;
		fellaMenu.add(ellipse_19);

		// ellipse_20
		const ellipse_20 = this.add.ellipse(-8.150286674499512, 446.003173828125, 128, 128);
		ellipse_20.scaleX = 0.8385369514530041;
		ellipse_20.scaleY = 0.8385369514530041;
		ellipse_20.isFilled = true;
		ellipse_20.fillColor = 14803425;
		fellaMenu.add(ellipse_20);

		// ellipse_5
		const ellipse_5 = this.add.ellipse(-402, -421, 128, 128);
		ellipse_5.scaleX = 0.8385369514530041;
		ellipse_5.scaleY = 0.8385369514530041;
		ellipse_5.isFilled = true;
		ellipse_5.fillColor = 14803425;
		fellaMenu.add(ellipse_5);

		// ellipse_6
		const ellipse_6 = this.add.ellipse(-241.9712371826172, -421, 128, 128);
		ellipse_6.scaleX = 0.8385369514530041;
		ellipse_6.scaleY = 0.8385369514530041;
		ellipse_6.isFilled = true;
		ellipse_6.fillColor = 14803425;
		fellaMenu.add(ellipse_6);

		// ellipse_7
		const ellipse_7 = this.add.ellipse(-79.18717956542969, -421, 128, 128);
		ellipse_7.scaleX = 0.8385369514530041;
		ellipse_7.scaleY = 0.8385369514530041;
		ellipse_7.isFilled = true;
		ellipse_7.fillColor = 14803425;
		fellaMenu.add(ellipse_7);

		// ellipse_8
		const ellipse_8 = this.add.ellipse(80.10865020751953, -421, 128, 128);
		ellipse_8.scaleX = 0.8385369514530041;
		ellipse_8.scaleY = 0.8385369514530041;
		ellipse_8.isFilled = true;
		ellipse_8.fillColor = 14803425;
		fellaMenu.add(ellipse_8);

		// ellipse_9
		const ellipse_9 = this.add.ellipse(238.2417449951172, -421, 128, 128);
		ellipse_9.scaleX = 0.8385369514530041;
		ellipse_9.scaleY = 0.8385369514530041;
		ellipse_9.isFilled = true;
		ellipse_9.fillColor = 14803425;
		fellaMenu.add(ellipse_9);

		// ellipse_10
		const ellipse_10 = this.add.ellipse(402.18853759765625, -421, 128, 128);
		ellipse_10.scaleX = 0.8385369514530041;
		ellipse_10.scaleY = 0.8385369514530041;
		ellipse_10.isFilled = true;
		ellipse_10.fillColor = 14803425;
		fellaMenu.add(ellipse_10);

		// ellipse
		const ellipse = this.add.ellipse(-1.2322267293930054, -237, 128, 128);
		ellipse.scaleX = 0.8385369514530041;
		ellipse.scaleY = 0.8385369514530041;
		ellipse.isFilled = true;
		ellipse.fillColor = 14803425;
		fellaMenu.add(ellipse);

		// ellipse_2
		const ellipse_2 = this.add.ellipse(154.57537841796875, -237, 128, 128);
		ellipse_2.scaleX = 0.8385369514530041;
		ellipse_2.scaleY = 0.8385369514530041;
		ellipse_2.isFilled = true;
		ellipse_2.fillColor = 14803425;
		fellaMenu.add(ellipse_2);

		// ellipse_3
		const ellipse_3 = this.add.ellipse(322.0104064941406, -237, 128, 128);
		ellipse_3.scaleX = 0.8385369514530041;
		ellipse_3.scaleY = 0.8385369514530041;
		ellipse_3.isFilled = true;
		ellipse_3.fillColor = 14803425;
		fellaMenu.add(ellipse_3);

		// ellipse_4
		const ellipse_4 = this.add.ellipse(-312.8474426269531, -237, 128, 128);
		ellipse_4.scaleX = 0.8385369514530041;
		ellipse_4.scaleY = 0.8385369514530041;
		ellipse_4.isFilled = true;
		ellipse_4.fillColor = 14803425;
		fellaMenu.add(ellipse_4);

		// ellipse_1
		const ellipse_1 = this.add.ellipse(-159, -237, 128, 128);
		ellipse_1.scaleX = 0.8385369514530041;
		ellipse_1.scaleY = 0.8385369514530041;
		ellipse_1.isFilled = true;
		ellipse_1.fillColor = 14803425;
		fellaMenu.add(ellipse_1);

		// arrow_14
		const arrow_14 = this.add.image(-4, 357, "arrow");
		arrow_14.scaleX = 1.300870416321801;
		arrow_14.flipX = true;
		fellaMenu.add(arrow_14);

		// arrow_12
		const arrow_12 = this.add.image(71, 196, "arrow");
		arrow_12.scaleX = 1.300870416321801;
		arrow_12.flipX = true;
		fellaMenu.add(arrow_12);

		// arrow_13
		const arrow_13 = this.add.image(-89, 195, "arrow");
		arrow_13.scaleX = 1.300870416321801;
		fellaMenu.add(arrow_13);

		// arrow_9
		const arrow_9 = this.add.image(151, 27, "arrow");
		arrow_9.scaleX = 1.300870416321801;
		arrow_9.flipX = true;
		fellaMenu.add(arrow_9);

		// arrow_10
		const arrow_10 = this.add.image(-9, 26, "arrow");
		arrow_10.scaleX = 1.300870416321801;
		fellaMenu.add(arrow_10);

		// arrow_11
		const arrow_11 = this.add.image(-159, 26, "arrow");
		arrow_11.scaleX = 1.300870416321801;
		fellaMenu.add(arrow_11);

		// arrow_5
		const arrow_5 = this.add.image(-228, -151, "arrow");
		arrow_5.scaleX = 1.300870416321801;
		fellaMenu.add(arrow_5);

		// arrow_6
		const arrow_6 = this.add.image(-78, -150, "arrow");
		arrow_6.scaleX = 1.300870416321801;
		fellaMenu.add(arrow_6);

		// arrow_7
		const arrow_7 = this.add.image(82, -150, "arrow");
		arrow_7.scaleX = 1.300870416321801;
		arrow_7.flipX = true;
		fellaMenu.add(arrow_7);

		// arrow_8
		const arrow_8 = this.add.image(235, -150, "arrow");
		arrow_8.scaleX = 1.300870416321801;
		fellaMenu.add(arrow_8);

		// arrow_1
		const arrow_1 = this.add.image(-158, -334, "arrow");
		arrow_1.scaleX = 1.300870416321801;
		fellaMenu.add(arrow_1);

		// arrow_2
		const arrow_2 = this.add.image(3, -334, "arrow");
		arrow_2.scaleX = 1.300870416321801;
		arrow_2.flipX = true;
		fellaMenu.add(arrow_2);

		// arrow_3
		const arrow_3 = this.add.image(153, -334, "arrow");
		arrow_3.scaleX = 1.300870416321801;
		fellaMenu.add(arrow_3);

		// arrow_4
		const arrow_4 = this.add.image(310, -334, "arrow");
		arrow_4.scaleX = 1.300870416321801;
		arrow_4.flipX = true;
		fellaMenu.add(arrow_4);

		// arrow
		const arrow = this.add.image(-316, -334, "arrow");
		arrow.scaleX = 1.300870416321801;
		fellaMenu.add(arrow);

		// fellaIcon
		const fellaIcon = this.add.image(-401, -434, "reg", "idle0000.png");
		fellaIcon.scaleX = 0.8;
		fellaIcon.scaleY = 0.8;
		fellaIcon.tintTopLeft = 15495537;
		fellaIcon.tintTopRight = 15495537;
		fellaIcon.tintBottomLeft = 15495537;
		fellaIcon.tintBottomRight = 15495537;
		fellaMenu.add(fellaIcon);

		// fellaIcon2
		const fellaIcon2 = this.add.image(-246, -434, "reg", "idle0000.png");
		fellaIcon2.scaleX = 0.8;
		fellaIcon2.scaleY = 0.8;
		fellaIcon2.tintTopLeft = 13077742;
		fellaIcon2.tintTopRight = 13077742;
		fellaIcon2.tintBottomLeft = 13077742;
		fellaIcon2.tintBottomRight = 13077742;
		fellaMenu.add(fellaIcon2);

		// fellaIcon3
		const fellaIcon3 = this.add.image(-76, -434, "reg", "idle0000.png");
		fellaIcon3.scaleX = 0.8;
		fellaIcon3.scaleY = 0.8;
		fellaIcon3.tintTopLeft = 7370972;
		fellaIcon3.tintTopRight = 7370972;
		fellaIcon3.tintBottomLeft = 7370972;
		fellaIcon3.tintBottomRight = 7370972;
		fellaMenu.add(fellaIcon3);

		// fellaIcon4
		const fellaIcon4 = this.add.image(79, -434, "reg", "idle0000.png");
		fellaIcon4.scaleX = 0.8;
		fellaIcon4.scaleY = 0.8;
		fellaIcon4.tintTopLeft = 8842218;
		fellaIcon4.tintTopRight = 8842218;
		fellaIcon4.tintBottomLeft = 8842218;
		fellaIcon4.tintBottomRight = 8842218;
		fellaMenu.add(fellaIcon4);

		// fellaIcon5
		const fellaIcon5 = this.add.image(239, -434, "reg", "idle0000.png");
		fellaIcon5.scaleX = 0.8;
		fellaIcon5.scaleY = 0.8;
		fellaIcon5.tintTopLeft = 7857282;
		fellaIcon5.tintTopRight = 7857282;
		fellaIcon5.tintBottomLeft = 7857282;
		fellaIcon5.tintBottomRight = 7857282;
		fellaMenu.add(fellaIcon5);

		// fellaIcon6
		const fellaIcon6 = this.add.image(399, -434, "reg", "idle0000.png");
		fellaIcon6.scaleX = 0.8;
		fellaIcon6.scaleY = 0.8;
		fellaIcon6.tintTopLeft = 15719761;
		fellaIcon6.tintTopRight = 15719761;
		fellaIcon6.tintBottomLeft = 15719761;
		fellaIcon6.tintBottomRight = 15719761;
		fellaMenu.add(fellaIcon6);

		// idle0000_png
		const idle0000_png = this.add.image(-315, -247, "angro", "idle0000.png");
		idle0000_png.scaleX = 0.49439352316384505;
		idle0000_png.scaleY = 0.49439352316384505;
		idle0000_png.tintTopLeft = 0;
		idle0000_png.tintTopRight = 0;
		idle0000_png.tintBottomLeft = 0;
		idle0000_png.tintBottomRight = 0;
		fellaMenu.add(idle0000_png);

		// idle0004_png
		const idle0004_png = this.add.image(-156, -242, "girl", "idle0004.png");
		idle0004_png.scaleX = 0.5392299166208796;
		idle0004_png.scaleY = 0.5392299166208796;
		idle0004_png.tintTopLeft = 0;
		idle0004_png.tintTopRight = 0;
		idle0004_png.tintBottomLeft = 0;
		idle0004_png.tintBottomRight = 0;
		fellaMenu.add(idle0004_png);

		// idle0000_png_1
		const idle0000_png_1 = this.add.image(2, -237, "boyo_1", "idle0000.png");
		idle0000_png_1.scaleX = 0.42657651270243335;
		idle0000_png_1.scaleY = 0.42657651270243335;
		idle0000_png_1.tintTopLeft = 0;
		idle0000_png_1.tintTopRight = 0;
		idle0000_png_1.tintBottomLeft = 0;
		idle0000_png_1.tintBottomRight = 0;
		fellaMenu.add(idle0000_png_1);

		// idle0000_png_2
		const idle0000_png_2 = this.add.image(153, -232, "ufo", "idle0000.png");
		idle0000_png_2.scaleX = 0.6279408840066942;
		idle0000_png_2.scaleY = 0.6279408840066942;
		idle0000_png_2.tintTopLeft = 0;
		idle0000_png_2.tintTopRight = 0;
		idle0000_png_2.tintBottomLeft = 0;
		idle0000_png_2.tintBottomRight = 0;
		fellaMenu.add(idle0000_png_2);

		// idle0000_png_3
		const idle0000_png_3 = this.add.image(320, -242, "mango", "idle0000.png");
		idle0000_png_3.scaleX = 0.5395452269089056;
		idle0000_png_3.scaleY = 0.5395452269089056;
		idle0000_png_3.tintTopLeft = 0;
		idle0000_png_3.tintTopRight = 0;
		idle0000_png_3.tintBottomLeft = 0;
		idle0000_png_3.tintBottomRight = 0;
		fellaMenu.add(idle0000_png_3);

		// idle0000_png_4
		const idle0000_png_4 = this.add.image(-226, -60, "scooper", "idle0000.png");
		idle0000_png_4.scaleX = 0.38219912264535677;
		idle0000_png_4.scaleY = 0.38219912264535677;
		idle0000_png_4.tintTopLeft = 0;
		idle0000_png_4.tintTopRight = 0;
		idle0000_png_4.tintBottomLeft = 0;
		idle0000_png_4.tintBottomRight = 0;
		fellaMenu.add(idle0000_png_4);

		// idle0000_png_5
		const idle0000_png_5 = this.add.image(-75, -56, "yellow", "idle0000.png");
		idle0000_png_5.scaleX = 0.6206829248977125;
		idle0000_png_5.scaleY = 0.6206829248977125;
		idle0000_png_5.tintTopLeft = 0;
		idle0000_png_5.tintTopRight = 0;
		idle0000_png_5.tintBottomLeft = 0;
		idle0000_png_5.tintBottomRight = 0;
		fellaMenu.add(idle0000_png_5);

		// idle0000_png_6
		const idle0000_png_6 = this.add.image(76, -62, "smarto", "idle0000.png");
		idle0000_png_6.scaleX = 0.38544575090769395;
		idle0000_png_6.scaleY = 0.38544575090769395;
		idle0000_png_6.tintTopLeft = 0;
		idle0000_png_6.tintTopRight = 0;
		idle0000_png_6.tintBottomLeft = 0;
		idle0000_png_6.tintBottomRight = 0;
		fellaMenu.add(idle0000_png_6);

		// idle0000_png_7
		const idle0000_png_7 = this.add.image(229, -63, "bull", "idle0000.png");
		idle0000_png_7.scaleX = 0.48406201620019945;
		idle0000_png_7.scaleY = 0.48406201620019945;
		idle0000_png_7.tintTopLeft = 0;
		idle0000_png_7.tintTopRight = 0;
		idle0000_png_7.tintBottomLeft = 0;
		idle0000_png_7.tintBottomRight = 0;
		fellaMenu.add(idle0000_png_7);

		// idle0000_png_8
		const idle0000_png_8 = this.add.image(-157, 124, "balls", "idle0000.png");
		idle0000_png_8.scaleX = 0.43260440745919987;
		idle0000_png_8.scaleY = 0.43260440745919987;
		idle0000_png_8.tintTopLeft = 0;
		idle0000_png_8.tintTopRight = 0;
		idle0000_png_8.tintBottomLeft = 0;
		idle0000_png_8.tintBottomRight = 0;
		fellaMenu.add(idle0000_png_8);

		// idle0000_png_9
		const idle0000_png_9 = this.add.image(-6, 100, "bee", "idle0000.png");
		idle0000_png_9.scaleX = 0.7256617241915264;
		idle0000_png_9.scaleY = 0.7256617241915264;
		idle0000_png_9.tintTopLeft = 0;
		idle0000_png_9.tintTopRight = 0;
		idle0000_png_9.tintBottomLeft = 0;
		idle0000_png_9.tintBottomRight = 0;
		fellaMenu.add(idle0000_png_9);

		// idle0000_png_10
		const idle0000_png_10 = this.add.image(146, 116, "weird", "idle0000.png");
		idle0000_png_10.scaleX = 0.4100612666224214;
		idle0000_png_10.scaleY = 0.4100612666224214;
		idle0000_png_10.tintTopLeft = 0;
		idle0000_png_10.tintTopRight = 0;
		idle0000_png_10.tintBottomLeft = 0;
		idle0000_png_10.tintBottomRight = 0;
		fellaMenu.add(idle0000_png_10);

		// fly0000_png
		const fly0000_png = this.add.image(-86, 257, "nectar", "fly0000.png");
		fly0000_png.scaleX = 0.6083258755900969;
		fly0000_png.scaleY = 0.6083258755900969;
		fly0000_png.tintTopLeft = 0;
		fly0000_png.tintTopRight = 0;
		fly0000_png.tintBottomLeft = 0;
		fly0000_png.tintBottomRight = 0;
		fellaMenu.add(fly0000_png);

		// idle0000_png_11
		const idle0000_png_11 = this.add.image(70, 272, "tod", "idle0000.png");
		idle0000_png_11.scaleX = 0.47276694764437455;
		idle0000_png_11.scaleY = 0.47276694764437455;
		idle0000_png_11.tintTopLeft = 0;
		idle0000_png_11.tintTopRight = 0;
		idle0000_png_11.tintBottomLeft = 0;
		idle0000_png_11.tintBottomRight = 0;
		fellaMenu.add(idle0000_png_11);

		// idle0000_png_12
		const idle0000_png_12 = this.add.image(8, 449, "ultimate", "idle0000.png");
		idle0000_png_12.scaleX = 0.35944188489900636;
		idle0000_png_12.scaleY = 0.35944188489900636;
		idle0000_png_12.tintTopLeft = 0;
		idle0000_png_12.tintTopRight = 0;
		idle0000_png_12.tintBottomLeft = 0;
		idle0000_png_12.tintBottomRight = 0;
		fellaMenu.add(idle0000_png_12);

		// store_corner
		const store_corner = this.add.image(-469, 491, "store-corner");
		fellaMenu.add(store_corner);

		// store_corner_1
		const store_corner_1 = this.add.image(471, 487, "store-corner");
		store_corner_1.flipX = true;
		fellaMenu.add(store_corner_1);

		// store_corner_2
		const store_corner_2 = this.add.image(473, -484, "store-corner");
		store_corner_2.flipX = true;
		store_corner_2.flipY = true;
		fellaMenu.add(store_corner_2);

		// store_corner_3
		const store_corner_3 = this.add.image(-468, -488, "store-corner");
		store_corner_3.flipY = true;
		fellaMenu.add(store_corner_3);

		// tutorialUI
		const tutorialUI = this.add.container(0, -1018);

		// tutorialBG
		const tutorialBG = this.add.rectangle(0, 0, 800, 600);
		tutorialBG.scaleX = 1.7641763143678528;
		tutorialBG.scaleY = 1.0890201660962189;
		tutorialBG.isFilled = true;
		tutorialBG.fillAlpha = 0.8;
		tutorialBG.isStroked = true;
		tutorialBG.strokeColor = 0;
		tutorialBG.strokeAlpha = 6;
		tutorialUI.add(tutorialBG);

		// text_7
		const text_7 = this.add.text(0, -220, "", {});
		text_7.setOrigin(0.5, 0);
		text_7.text = "Drag and shake around fellas to encourage them to breed.\nThe breeding chart (upper left button) shows which fellas are compatible.\nEarn money by discovering new special breeds.\nSpend it wisely! You can purchase regular fellas in the shop.\nYour fellas will get hungry and eventually starve.\nFellas won't survive being thrown violently against a wall...\nbut killed fellas become food for the others.\nDrag and drop food over a fella to feed it.\nCan you manage your tank and discover every special breed?";
		text_7.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "verdana", "fontSize": "35px" });
		text_7.setLineSpacing(15);
		tutorialUI.add(text_7);

		// text_1
		const text_1 = this.add.text(19, -278, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Instructions";
		text_1.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "arial", "fontSize": "50px", "fontStyle": "bold", "stroke": "#000000ff", "strokeThickness":6});
		text_1.setLineSpacing(15);
		tutorialUI.add(text_1);

		// helpButton
		const helpButton = this.add.image(802, 342, "help");
		helpButton.setOrigin(1, 1);

		// gameOverUI
		const gameOverUI = this.add.container(-5, -1808);

		// text_3
		const text_3 = this.add.text(0, 0, "", {});
		text_3.setOrigin(0.5, 0.5);
		text_3.text = "GAME OVER";
		text_3.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "arial", "fontSize": "100px", "fontStyle": "bold", "stroke": "#000000ff", "strokeThickness":6});
		text_3.setLineSpacing(15);
		gameOverUI.add(text_3);

		// lists
		const alignToCameraLeft = [mobileTextcontainer, buttonTest, moneyUI, fellaUI];
		const alignToCameraRight = [buttonTest2, helpButton];
		const alignToCameraTop = [mobileTextcontainer, fellaUI];
		const alignToCameraBottom = [buttonTest2, buttonTest, moneyUI, helpButton];
		const resizeScale = [];
		const alignToCameraMiddle = [orientationPrompt, shopMenu, fellaMenu, tutorialUI, gameOverUI];
		const alignToCameraCenter = [orientationPrompt, shopMenu, fellaMenu, tutorialUI, gameOverUI];
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
		shopMenuAlignOffsets.y = 250;

		// helpButton (components)
		const helpButtonAlignOffsets = new AlignOffsets(helpButton);
		helpButtonAlignOffsets.x = -80;
		helpButtonAlignOffsets.y = -40;

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
		this.fellaCountText = fellaCountText;
		this.familyButton = familyButton;
		this.moneyUI = moneyUI;
		this.moneyText = moneyText;
		this.shopButton = shopButton;
		this.shopMenu = shopMenu;
		this.shopBG = shopBG;
		this.fellaPreview1 = fellaPreview1;
		this.fellaPreview2 = fellaPreview2;
		this.fellaPreview3 = fellaPreview3;
		this.fellaPreview4 = fellaPreview4;
		this.fellaPreview5 = fellaPreview5;
		this.fellaPreview6 = fellaPreview6;
		this.fellaMenu = fellaMenu;
		this.familyBG = familyBG;
		this.fellaIcon = fellaIcon;
		this.fellaIcon2 = fellaIcon2;
		this.fellaIcon3 = fellaIcon3;
		this.fellaIcon4 = fellaIcon4;
		this.fellaIcon5 = fellaIcon5;
		this.fellaIcon6 = fellaIcon6;
		this.idle0000_png = idle0000_png;
		this.idle0004_png = idle0004_png;
		this.idle0000_png_1 = idle0000_png_1;
		this.idle0000_png_2 = idle0000_png_2;
		this.idle0000_png_3 = idle0000_png_3;
		this.idle0000_png_4 = idle0000_png_4;
		this.idle0000_png_5 = idle0000_png_5;
		this.idle0000_png_6 = idle0000_png_6;
		this.idle0000_png_7 = idle0000_png_7;
		this.idle0000_png_8 = idle0000_png_8;
		this.idle0000_png_9 = idle0000_png_9;
		this.idle0000_png_10 = idle0000_png_10;
		this.fly0000_png = fly0000_png;
		this.idle0000_png_11 = idle0000_png_11;
		this.idle0000_png_12 = idle0000_png_12;
		this.tutorialUI = tutorialUI;
		this.tutorialBG = tutorialBG;
		this.helpButton = helpButton;
		this.gameOverUI = gameOverUI;
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
	/** @type {Phaser.GameObjects.Text} */
	fellaCountText;
	/** @type {Phaser.GameObjects.Image} */
	familyButton;
	/** @type {Phaser.GameObjects.Container} */
	moneyUI;
	/** @type {Phaser.GameObjects.Text} */
	moneyText;
	/** @type {Phaser.GameObjects.Image} */
	shopButton;
	/** @type {Phaser.GameObjects.Container} */
	shopMenu;
	/** @type {Phaser.GameObjects.Rectangle} */
	shopBG;
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
	/** @type {Phaser.GameObjects.Rectangle} */
	familyBG;
	/** @type {Phaser.GameObjects.Image} */
	fellaIcon;
	/** @type {Phaser.GameObjects.Image} */
	fellaIcon2;
	/** @type {Phaser.GameObjects.Image} */
	fellaIcon3;
	/** @type {Phaser.GameObjects.Image} */
	fellaIcon4;
	/** @type {Phaser.GameObjects.Image} */
	fellaIcon5;
	/** @type {Phaser.GameObjects.Image} */
	fellaIcon6;
	/** @type {Phaser.GameObjects.Image} */
	idle0000_png;
	/** @type {Phaser.GameObjects.Image} */
	idle0004_png;
	/** @type {Phaser.GameObjects.Image} */
	idle0000_png_1;
	/** @type {Phaser.GameObjects.Image} */
	idle0000_png_2;
	/** @type {Phaser.GameObjects.Image} */
	idle0000_png_3;
	/** @type {Phaser.GameObjects.Image} */
	idle0000_png_4;
	/** @type {Phaser.GameObjects.Image} */
	idle0000_png_5;
	/** @type {Phaser.GameObjects.Image} */
	idle0000_png_6;
	/** @type {Phaser.GameObjects.Image} */
	idle0000_png_7;
	/** @type {Phaser.GameObjects.Image} */
	idle0000_png_8;
	/** @type {Phaser.GameObjects.Image} */
	idle0000_png_9;
	/** @type {Phaser.GameObjects.Image} */
	idle0000_png_10;
	/** @type {Phaser.GameObjects.Image} */
	fly0000_png;
	/** @type {Phaser.GameObjects.Image} */
	idle0000_png_11;
	/** @type {Phaser.GameObjects.Image} */
	idle0000_png_12;
	/** @type {Phaser.GameObjects.Container} */
	tutorialUI;
	/** @type {Phaser.GameObjects.Rectangle} */
	tutorialBG;
	/** @type {Phaser.GameObjects.Image} */
	helpButton;
	/** @type {Phaser.GameObjects.Container} */
	gameOverUI;
	/** @type {Array<Phaser.GameObjects.Container|Phaser.GameObjects.Rectangle>} */
	alignToCameraLeft;
	/** @type {Array<Phaser.GameObjects.Rectangle|Phaser.GameObjects.Image>} */
	alignToCameraRight;
	/** @type {Phaser.GameObjects.Container[]} */
	alignToCameraTop;
	/** @type {Array<Phaser.GameObjects.Rectangle|Phaser.GameObjects.Container|Phaser.GameObjects.Image>} */
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
	velocityToBreed = 1500;
	terminalVelocity = 100;

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
			name: 'Grimblo (red)',
			desc: "",
			tint: 0xec7171,
			circleRadius: 50,
			shadow: true,
			mass: 10,
			facingLeft: false,
			meat: 'bacon'
		}],
		['purple', {
			breeding: { with: 'blue', makes: 'girl' },
			sprite: 'reg',
			name: 'Grimblo (purple)',
			desc: "",
			tint: 0xc78cee,
			circleRadius: 50,
			shadow: true,
			mass: 10,
			facingLeft: false,
			meat: 'bacon'
		}],
		['blue', {
			breeding: { with: 'cyan', makes: 'boyo' },
			sprite: 'reg',
			name: 'Grimblo (blue)',
			desc: "",
			tint: 0x7078dc,
			circleRadius: 50,
			shadow: true,
			mass: 10,
			facingLeft: false,
			meat: 'bacon'
		}],
		['cyan', {
			breeding: { with: 'green', makes: 'ufo' },
			sprite: 'reg',
			name: 'Grimblo (cyan)',
			desc: "",
			tint: 0x86ebea,
			circleRadius: 50,
			shadow: true,
			mass: 10,
			facingLeft: false,
			meat: 'bacon'
		}],
		['green', {
			breeding: { with: 'yellow', makes: 'mango' },
			sprite: 'reg',
			name: 'Grimblo (green)',
			desc: "",
			tint: 0x77e482,
			circleRadius: 50,
			shadow: true,
			mass: 10,
			facingLeft: false,
			meat: 'bacon'
		}],
		['yellow', {
			breeding: { with: 'red', makes: 'nothing' },
			sprite: 'reg',
			name: 'Grimblo (yellow)',
			desc: "",
			tint: 0xefdd51,
			circleRadius: 50,
			shadow: true,
			mass: 10,
			facingLeft: false,
			meat: 'bacon'
		}],

		// tier 2
		['angro', {
			breeding: { with: 'girl', makes: 'scooper' },
			sprite: 'angro',
			name: 'Angro',
			desc: "",
			tint: 0xffffff,
			circleRadius: 80,
			shadow: true,
			meat: 'chicken',
			facingLeft: false,
			mass: 20
		}],
		['girl', {
			breeding: { with: 'boyo', makes: 'pixie' },
			sprite: 'girl',
			name: 'Girlina',
			desc: "",
			tint: 0xffffff,
			circleRadius: 60,
			shadow: true,
			meat: 'chicken',
			facingLeft: true,
			mass: 20
		}],
		['boyo', {
			breeding: { with: 'ufo', makes: 'smarto' },
			sprite: 'boyo',
			name: 'Boyo',
			desc: "",
			tint: 0xffffff,
			circleRadius: 80,
			shadow: true,
			meat: 'chicken',
			facingLeft: false,
			mass: 20
		}],
		['ufo', {
			breeding: { with: 'mango', makes: 'bull' },
			sprite: 'ufo',
			name: 'Larry B. B.',
			desc: "",
			tint: 0xffffff,
			circleRadius: 60,
			shadow: false,
			meat: 'chicken',
			facingLeft: false,
			mass: 20
		}],
		['mango', {
			breeding: { with: 'angro', makes: 'nothing' },
			sprite: 'mango',
			name: 'Mango Horse',
			desc: "",
			tint: 0xffffff,
			circleRadius: 70,
			shadow: true,
			meat: 'chicken',
			facingLeft: true,
			mass: 20
		}],

		// tier 3
		['scooper', {
			breeding: { with: 'pixie', makes: 'balls' },
			sprite: 'scooper',
			name: 'Scooper',
			desc: "",
			tint: 0xffffff,
			circleRadius: 120,
			shadow: false,
			meat: 'steak',
			facingLeft: true,
			mass: 20
		}],
		['pixie', {
			breeding: { with: 'smarto', makes: 'bee' },
			sprite: 'pixie',
			name: 'Yellow Fella',
			desc: "",
			tint: 0xffffff,
			circleRadius: 50,
			shadow: true,
			meat: 'steak',
			facingLeft: false,
			mass: 20
		}], 
		['smarto', {
			breeding: { with: 'bull', makes: 'weird' },
			sprite: 'smarto',
			name: 'Smarto The Surfer Alien',
			desc: "",
			tint: 0xffffff,
			circleRadius: 100,
			shadow: true,
			meat: 'steak',
			facingLeft: true,
			mass: 20
		}], 
		['bull', {
			breeding: { with: 'scooper', makes: 'nothing' },
			sprite: 'bull',
			name: 'Bullfrog',
			desc: "",
			tint: 0xffffff,
			circleRadius: 60,
			shadow: true,
			meat: 'steak',
			facingLeft: false,
			mass: 20
		}], 

		// tier 4
		['balls', {
			breeding: { with: 'bee', makes: 'nectar' },
			sprite: 'balls',
			name: 'Threeballs',
			desc: "",
			tint: 0xffffff,
			circleRadius: 70,
			shadow: true,
			meat: 'steak',
			facingLeft: false,
			mass: 20
		}], 
		['bee', {
			breeding: { with: 'weird', makes: 'tod' },
			sprite: 'bee',
			name: 'Bee',
			desc: "",
			tint: 0xffffff,
			circleRadius: 50,
			shadow: false,
			meat: 'steak',
			facingLeft: false,
			mass: 20
		}],
		['weird', {
			breeding: { with: 'balls', makes: 'nothing' },
			sprite: 'weird',
			name: 'Weird Guy',
			desc: "",
			tint: 0xffffff,
			circleRadius: 100,
			shadow: true,
			meat: 'steak',
			facingLeft: true,
			mass: 20
		}],

		// tier 5
		['tod', {
			breeding: { with: 'nectar', makes: 'ultimate' },
			sprite: 'tod',
			name: 'Tod',
			desc: "",
			tint: 0xffffff,
			circleRadius: 70,
			shadow: true,
			meat: 'steak',
			facingLeft: false,
			mass: 20
		}], 
		['nectar', {
			breeding: { with: 'tod', makes: 'nothing' },
			sprite: 'nectar',
			name: 'Butterfly',
			desc: "",
			tint: 0xffffff,
			circleRadius: 40,
			shadow: false,
			meat: 'steak',
			facingLeft: true,
			mass: 20
		}], 

		// tier 6
		['ultimate', {
			breeding: { with: 'ultimate', makes: 'gremlin' },
			sprite: 'ultimate',
			name: 'Ultimate Lifeform',
			desc: "Ever since the dawn of time and everything as we know it, these creatures have already existed. Nobody really knows where they came from but one thing is for certain, they have no weaknesses. It’s a fact that nobody can beat this lifeform and in most cases, this would be a problem for the remaining species since the ultimate lifeform can come in and kill anybody. However, this fella is very unfazed with everything and won’t bother anyone. They enjoy laying on the couch with a blanket and watching Netflix.",
			tint: 0xffffff,
			circleRadius: 120,
			shadow: false,
			meat: 'steak',
			facingLeft: false,
			mass: 20
		}], 

		// secret
		['gremlin', {
			breeding: { with: 'gremlin', makes: 'gremlin' },
			sprite: 'gremlin',
			name: 'Gremlin',
			desc: "Ew get this thing off of me.",
			tint: 0xffffff,
			circleRadius: 25,
			shadow: true,
			meat: 'bacon',
			facingLeft: false,
			mass: 20
		}]

	]);

	/** abstracted because tier 1 will likely change */
	tier1Races = ['red', 'purple', 'blue', 'cyan', 'green', 'yellow'];

	/** debug */
	purchaseCount = 0;

	create() {

		this.editorCreate();

		this.registry.set('angro-unlocked', false);
		this.registry.set('boyo-unlocked', false);
		this.registry.set('girl-unlocked', false);
		this.registry.set('ufo-unlocked', false);
		this.registry.set('mango-unlocked', false);
		this.registry.set('pixie-unlocked', false);
		this.registry.set('smarto-unlocked', false);
		this.registry.set('bull-unlocked', false);
		this.registry.set('balls-unlocked', false);
		this.registry.set('bee-unlocked', false);
		this.registry.set('weird-unlocked', false);
		this.registry.set('tod-unlocked', false);
		this.registry.set('nextar-unlocked', false);
		this.registry.set('ultimate-unlocked', false);

		this.cameras.main.setBackgroundColor(0x20150f);

		// fellas group
		this.fellas = this.add.group();
		this.fellas.maxSize = 100;

		/** group of 2 fellas to breed */
		this.hornyFellas = this.add.group();
		this.hornyFellas.maxSize = 2;

		// tank bg needs depth below all fellas
		this.tankBG.setDepth(-1000);

		// music
		this.music = this.sound.add('music').play({loop: true});

		//audio
		this.sound.setVolume(1);
		// this.music = this.sound.add('tank-2').play();
		this.sound.add('smushing', {volume: 1});
		this.sound.add('eating', {volume: 1});
		this.sound.add('cheering', {volume: 1});
		this.sound.add('hungry', {volume: 1});
		this.sound.add('puffdienoise', {volume: 1});
		this.sound.add('purchase', {volume: 1});
		this.sound.add('squeak', {volume: 0});
		this.sound.add('select', {volume: .4});

		this.setupInput();

		// orientation
		this.orientationPrompt.setDepth(1000);
		this.orientationPrompt.setAlpha(0);

		// debug UI
		this.mobileText.setText('mobile: ' + this.registry.get('mobile'));
		this.mobileTextcontainer.setVisible(false);
		// change this before release

		// setup effects
		this.eatingEffect = this.add.sprite(9999, 9999);
		this.eatingEffect.destroy();
		this.matingEffect = this.add.sprite(9999, 9999);
		this.matingEffect.destroy();
		this.impactEffect = this.add.group({ maxSize: 30});
		// only one effect object can exist in scene
		// active state is checked to make sure it's available
		// but first eatingEffect needs to not be null

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
		// this.addFella('nectar');
		// this.addFella('tod');
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

		// this.startUI = this.add.sprite(0, 0);
		// this.startUI.play('start-mission')
		// TODO: start animation is really broken

		// starting money
		this.money = 0;
		this.setMoney(1000);

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

		// each fella
		this.fellas.getChildren().forEach(function (fella, index) {

			// update all fella states
			fella.status.update();

			if (fella.active) {

				fella.setDepth(fella.y);

				// hunger effect
				fella.hungerEffect.setPosition(fella.x - (fella.body.circleRadius * .7), fella.y - fella.body.circleRadius);
				fella.hungerEffect.setDepth(fella.y + 1);

				// heart effect
				fella.heartEffect.setPosition(fella.x, fella.y - (fella.body.circleRadius + 40));
				fella.heartEffect.setDepth(fella.y + 1);

				// shadow
				fella.shadow.setPosition(fella.x, fella.y + fella.body.circleRadius + 20);
				fella.shadow.setDepth(fella.y - 100);
			}
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
	addFella(race, purchase) {

		this.offY = (purchase? -200 : 0);
		const fella = this.add.sprite(0, this.offY, "fella");
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
		fella.setData('shadow', raceData.shadow);
		fella.setData('meat', raceData.meat);
		fella.setData('facingLeft', raceData.facingLeft);
		fella.setData('alive', true);
		fella.setData('energy', 1);
		fella.setData('totalVelocity', 0);

		fella.type = 'fella';
		// used to distinguish bodies

		// update count
		this.fellaCountText.setText('x ' + this.fellas.getLength());

		// hunger effect
		fella.hungerEffect = this.add.sprite(fella.x - fella.body.circleRadius, fella.y - fella.body.circleRadius).play('hunger');
		fella.hungerEffect.setVisible(false);

		// heart effect
		fella.heartEffect = this.add.sprite(fella.x - fella.body.circleRadius, fella.y - fella.body.circleRadius).play('hearts');
		fella.heartEffect.setVisible(false);

		fella.shadow = this.add.image(fella.x - fella.body.circleRadius, fella.y - fella.body.circleRadius, 'shadow').setScale((fella.body.circleRadius / 60), 1).setAlpha(.7);
		if (race == 'bull') fella.shadow.setScale(2, 1);
		if (race == 'gremlin') fella.shadow.setScale(1, .5);
		fella.shadow.setVisible(raceData.shadow);

		// state machine
		fella.status = new StateController(fella, this);
		fella.status.setState('idle');
	}

	/**
	 * 
	 * @param {} fella gameobject
	 * @param {number} amount 0-1, 1 being full energy
	 * @param {Boolean} add add amount to current energy. Otherwise, energy will be set to amount
	 */
	setEnergy(fella, amount, add) {

		let newEnergy = 0;
		if (add) {

			newEnergy = fella.getData('energy') + amount;
			if (newEnergy > 2) newEnergy = 2;
		}
		else {

			newEnergy = amount;
		}

		if (newEnergy <= .3) {

			fella.hungerEffect.setVisible(true);
			this.sound.play('hungry');
		}
		else {

			fella.hungerEffect.setVisible(false);
		}

		fella.setData('energy', newEnergy);
	}

	/**
	 * called when fella hits a wall at terminal velocity
	 * 
	 * @param {*} fella 
	 */
	fellaImpact(_fellaBody, side) {

		this.sound.play('smushing');
		_fellaBody.gameObject.setData('alive', false);
		_fellaBody.gameObject.setData('drop-food', true);
		// sliding state will check this at the end

		// break from drag
		// console.log(_fellaBody);
		// console.log(this.mouseConstraint);
		this.mouseConstraint.stopDrag();


		// effect position
		let impactEffectPosition = {x: 0, y: 0}
		switch (side) {
			case 'top':
				impactEffectPosition.x = _fellaBody.gameObject.x;
				impactEffectPosition.y = -430;
				break;
			case 'right':
				impactEffectPosition.x = 950;
				impactEffectPosition.y = _fellaBody.gameObject.y;
				break;
			case 'bottom':
				impactEffectPosition.x = _fellaBody.gameObject.x;
				impactEffectPosition.y = 460;
				break;
			case 'left':
				impactEffectPosition.x = -910;
				impactEffectPosition.y = _fellaBody.gameObject.y;
				break;

		}

		// add effect to group
		this.impactEffect.get(impactEffectPosition.x, impactEffectPosition.y + 40)
			.setActive(true)
			.setFlipX(Phaser.Math.RND.normal() > 0)
			.setDepth(-999)
			.play('impact');

		// effect group max manage
		if (this.impactEffect.countActive() == this.impactEffect.maxSize) {

			this.impactEffect.getFirstAlive().setActive(false);
			this.impactEffect.shuffle();
		}
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

			this.addFella(race1Data.breeding.makes, false);

			if (race1Data.breeding.makes == 'gremlin') {

				if (this.fellas.getLength() < this.fellas.maxSize)
					this.addFella(race1Data.breeding.makes, false);
				if (this.fellas.getLength() < this.fellas.maxSize)
					this.addFella(race1Data.breeding.makes, false);
				if (this.fellas.getLength() < this.fellas.maxSize)
					this.addFella(race1Data.breeding.makes, false);
				if (this.fellas.getLength() < this.fellas.maxSize)
					this.addFella(race1Data.breeding.makes, false);
				if (this.fellas.getLength() < this.fellas.maxSize)
					this.addFella(race1Data.breeding.makes, false);
				if (this.fellas.getLength() < this.fellas.maxSize)
					this.addFella(race1Data.breeding.makes, false);
			}

			// first time unlocking?
			if (!this.registry.get(race1Data.breeding.makes + '-unlocked')) {

				this.unlockRaceTree(race1Data.breeding.makes, false);
			}
		}
		else if (race2Data.breeding.with == race1.getData('race') && race2Data.breeding.makes != 'nothing') {

			this.addFella(race2Data.breeding.makes);

			if (race2Data.breeding.makes == 'gremlin') {

				this.addFella(race1Data.breeding.makes, false);
				this.addFella(race1Data.breeding.makes, false);
				this.addFella(race1Data.breeding.makes, false);
				this.addFella(race1Data.breeding.makes, false);
				this.addFella(race1Data.breeding.makes, false);
				this.addFella(race1Data.breeding.makes, false);
			}

			// first time unlocking?
			if (!this.registry.get(race2Data.breeding.makes + '-unlocked')) {

				this.unlockRaceTree(race2Data.breeding.makes);
			}

		}
		else {

			// incompatible pair
			race1.status.setState('walk');
			race2.status.setState('walk');
			race1.setData('horny', false);
			race2.setData('horny', false);
			return;
		}

		if (!this.matingEffect.active) {

			this.matingEffect = this.add.sprite(race1.x, race1.y)
				.play('mating')
				.setDepth(800)
				.on(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {

					this.matingEffect.destroy();
				});
		}

		// parents are set to normal
		// race1.status.setState('walk');
		// race2.status.setState('walk');
		// race1.setData('horny', false);
		// race2.setData('horny', false);
		// this.setEnergy(race1, .3, false);
		// this.setEnergy(race2, .3, false);

		// get rid of parents
		race1.setData('alive', false);
		race1.shadow.destroy();
		race1.hungerEffect.destroy();
		race1.heartEffect.destroy();
		race1.status = null;
		race1.destroy();

		race2.setData('alive', false);
		race2.shadow.destroy();
		race2.hungerEffect.destroy();
		race2.heartEffect.destroy();
		race2.status = null;
		race2.destroy();

		this.fellaCountText.setText('x ' + this.fellas.getLength());
	}

	unlockRaceTree(race) {

		this.registry.set(race + '-unlocked', true);
		this.sound.play('cheering');
		if (race == 'ultimate') {

			this.setMoney(999999);
		}
		else {

			this.setMoney(600);
		}

		switch(race) {
			case 'angro': 
				this.idle0000_png.setTint(0xffffff);
				break;
			case 'girl': 
				this.idle0004_png.setTint(0xffffff);
				break;
			case 'boyo': 
				this.idle0000_png_1.setTint(0xffffff);
				break;
			case 'ufo': 
				this.idle0000_png_2.setTint(0xffffff);
				break;
			case 'mango': 
				this.idle0000_png_3.setTint(0xffffff);
				break;
			case 'scooper': 
				this.idle0000_png_4.setTint(0xffffff);
				break;
			case 'pixie': 
				this.idle0000_png_5.setTint(0xffffff);
				break;
			case 'smarto': 
				this.idle0000_png_6.setTint(0xffffff);
				break;
			case 'bull': 
				this.idle0000_png_7.setTint(0xffffff);
				break;
			case 'balls': 
				this.idle0000_png_8.setTint(0xffffff);
				break;
			case 'bee': 
				this.idle0000_png_9.setTint(0xffffff);
				break;
			case 'weird': 
				this.idle0000_png_10.setTint(0xffffff);
				break;
			case 'tod': 
				this.idle0000_png_11.setTint(0xffffff);
				break;
			case 'nectar': 
				this.fly0000_png.setTint(0xffffff);
				break;
			case 'ultimate': 
				this.idle0000_png_12.setTint(0xffffff);
				break;


		}
	}

	/**
	 * 
	 * @param {*} x 
	 * @param {*} y 
	 * @param {*} meat steak bacon or chicken
	 */
	addFood(x, y, meat, depth) {

		const food = this.add.image(x, y, meat);
		food.setDepth(depth);

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

		let _scene = this
		this.matter.world.on('dragstart', function(body) { 

			// cant drag bounds
			if (body.isStatic) return;

			// food
			if (body.gameObject.type == 'food') {

				return;
			}

			_scene.sound.play('squeak', {volume: .3});

			// hide shadow
			body.gameObject.shadow.setVisible(false);

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

					// set energy according to meat type
					this.energyToSet = 0;
					if (body.gameObject.texture.key == 'bacon') this.energyToSet = .3;
					if (body.gameObject.texture.key == 'chicken') this.energyToSet = .7;
					if (body.gameObject.texture.key == 'steak') this.energyToSet = 1.5;
					_this.setEnergy(intersect[0].gameObject, this.energyToSet, true, body.gameObject.texture.key);

					intersect[0].gameObject.status.setState('idle');

					if (!_this.eatingEffect.active)
					{

						_this.eatingEffect = _this.add.sprite(intersect[0].gameObject.x, intersect[0].gameObject.y)
							.play('eating')
							.setDepth(800)
							.on(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {

								_this.eatingEffect.destroy();
							});
					}

					body.gameObject.destroy(); 

					_this.sound.play('eating');
				}

				return;
			}

			// shaken = horny
			// only if velocity > terminal and fella is alive
			if(((body.gameObject.getData('totalVelocity') > _this.velocityToBreed) || body.gameObject.getData('horny')) 
			&& body.gameObject.getData('alive') && body.gameObject.getData('energy') > .3) {

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

			// DEBUG
			// this.addFella('yellow');
			// this.addFella('boyo');
			// this.addFella('girl');
			// this.addFella('mango');
			// this.addFella('balls');
			// this.addFella('bee');
			// this.addFella('weird');
			// this.addFella('gremlin');
			// this.addFella('bull');
			// this.addFella('nectar');
			// this.addFella('tod');
			// this.addFella('ufo');
			// this.addFella('scooper');
			// this.addFella('pixie');
			// this.addFella('smarto');
			// this.addFella('ultimate');
			// this.addFella('angro');
		});

		// spawning sprites
		this.controls.onPress('right', () => {

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
			this.fellaImpact(_fella, side);
		}
		else if (side == 'bottom' && _fella.velocity.y > this.terminalVelocity) {

			console.log('bottom');
			this.fellaImpact(_fella, side);
		}
		else if (side == 'left' && _fella.velocity.x < -this.terminalVelocity) {

			console.log('left');
			this.fellaImpact(_fella, side);
		}
		else if (side == 'right' && _fella.velocity.x > this.terminalVelocity) {

			console.log('right');
			this.fellaImpact(_fella, side);
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

			this.shopMenu.setVisible(!this.shopMenu.visible);
			this.sound.play('select', {volume: .6});

			this.fellaMenu.setVisible(false);
			this.tutorialUI.setVisible(false);

		});

		this.gameOverUI.setVisible(false);

		// buy buttons
		let _this = this;
		this.buyButtons.forEach(function (item, index) {

			item.setInteractive();
			item.on('pointerdown', () => {

				if (_this.money >= 200) {

					if (_this.fellas.getLength() < _this.fellas.maxSize)
						_this.addFella(_this.tier1Races[index], true);
					if (_this.fellas.getLength() < _this.fellas.maxSize)
						_this.addFella(_this.tier1Races[index], true);

					_this.setMoney(-200);

					_this.purchaseCount++;

					console.log('purchases: ' + _this.purchaseCount);

					_this.sound.play('purchase');
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
			this.sound.play('select', {volume: .6});

			this.shopMenu.setVisible(false);
			this.tutorialUI.setVisible(false);


		});

		// help UI
		this.tutorialUI.setDepth(999);
		this.tutorialUI.setVisible(false);
		this.helpButton.setInteractive();
		this.helpButton.on('pointerdown', () => {

			this.tutorialUI.setVisible(!this.tutorialUI.visible);
			this.sound.play('select', {volume: .6});

			this.fellaMenu.setVisible(false);
			this.shopMenu.setVisible(false);
		});


		// mouse hover feeback
		this.familyButton.on('pointerover', () => {

			this.familyButton.setTint(0xd9d9d9);
		});
		this.familyButton.on('pointerout', () => {

			this.familyButton.setTint(0xffffff);
		});
		this.shopButton.on('pointerover', () => {

			this.shopButton.setTint(0xd9d9d9);
		});
		this.shopButton.on('pointerout', () => {

			this.shopButton.setTint(0xffffff);
		});
		this.helpButton.on('pointerover', () => {

			this.helpButton.setTint(0xd9d9d9);
		});
		this.helpButton.on('pointerout', () => {

			this.helpButton.setTint(0xffffff);
		});

		// click / tap anywhere else to hide
		this.shopBG.setInteractive();
		this.familyBG.setInteractive();
		this.tutorialBG.setInteractive();
		let __this = this;
		this.input.on('pointerdown', function(pointer, over) {

			if (over.length == 0) {

				__this.shopMenu.setVisible(false);
				__this.fellaMenu.setVisible(false);
				__this.tutorialUI.setVisible(false);
			}
		});
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

	loadFont(name, url) {
		var newFont = new FontFace(name, `url(${url})`);
		newFont.load().then(function (loaded) {
			document.fonts.add(loaded);
		}).catch(function (error) {
			return error;
		});
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

			this.shopMenu.setVisible(false);
			this.fellaMenu.setVisible(false);
			this.tutorialUI.setVisible(false);
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