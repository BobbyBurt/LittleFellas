
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

		// fella
		const fella = this.add.sprite(603, 189, "fella", 0);
		fella.tintTopLeft = 6343410;
		fella.tintTopRight = 6343410;
		fella.tintBottomLeft = 6343410;
		fella.tintBottomRight = 6343410;

		// fella_5
		const fella_5 = this.add.sprite(-635, -132, "fella", 0);
		fella_5.scaleX = 0.5;
		fella_5.scaleY = 0.5;
		fella_5.tintTopLeft = 14170682;
		fella_5.tintTopRight = 14170682;
		fella_5.tintBottomLeft = 14170682;
		fella_5.tintBottomRight = 14170682;

		// fella_1
		const fella_1 = this.add.sprite(-474, -48, "fella", 0);
		fella_1.scaleX = 0.5;
		fella_1.scaleY = 0.5;
		fella_1.tintTopLeft = 14170682;
		fella_1.tintTopRight = 14170682;
		fella_1.tintBottomLeft = 14170682;
		fella_1.tintBottomRight = 14170682;

		// fella_2
		const fella_2 = this.add.sprite(-659, 37, "fella", 0);
		fella_2.scaleX = 0.5;
		fella_2.scaleY = 0.5;
		fella_2.tintTopLeft = 14170682;
		fella_2.tintTopRight = 14170682;
		fella_2.tintBottomLeft = 14170682;
		fella_2.tintBottomRight = 14170682;

		// fella_3
		const fella_3 = this.add.sprite(-691, 196, "fella", 0);
		fella_3.scaleX = 0.5;
		fella_3.scaleY = 0.5;
		fella_3.tintTopLeft = 14170682;
		fella_3.tintTopRight = 14170682;
		fella_3.tintBottomLeft = 14170682;
		fella_3.tintBottomRight = 14170682;

		// fella_4
		const fella_4 = this.add.sprite(-292, 85, "fella", 0);
		fella_4.scaleX = 0.5;
		fella_4.scaleY = 0.5;
		fella_4.tintTopLeft = 14170682;
		fella_4.tintTopRight = 14170682;
		fella_4.tintBottomLeft = 14170682;
		fella_4.tintBottomRight = 14170682;

		// fella_6
		const fella_6 = this.add.sprite(-581, -283, "fella", 0);
		fella_6.scaleX = 0.5;
		fella_6.scaleY = 0.5;
		fella_6.tintTopLeft = 14170682;
		fella_6.tintTopRight = 14170682;
		fella_6.tintBottomLeft = 14170682;
		fella_6.tintBottomRight = 14170682;

		// fella_7
		const fella_7 = this.add.sprite(-477, 86, "fella", 0);
		fella_7.tintTopLeft = 6343410;
		fella_7.tintTopRight = 6343410;
		fella_7.tintBottomLeft = 6343410;
		fella_7.tintBottomRight = 6343410;

		// fella_8
		const fella_8 = this.add.sprite(321, 94, "fella", 0);
		fella_8.tintTopLeft = 6343410;
		fella_8.tintTopRight = 6343410;
		fella_8.tintBottomLeft = 6343410;
		fella_8.tintBottomRight = 6343410;

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

		// fella_9
		const fella_9 = this.add.sprite(-4.414516107912409, -175.11735795847486, "fella", 0);
		fella_9.scaleX = 0.5;
		fella_9.scaleY = 0.5;
		fella_9.tintTopLeft = 14170682;
		fella_9.tintTopRight = 14170682;
		fella_9.tintBottomLeft = 14170682;
		fella_9.tintBottomRight = 14170682;

		// fella_10
		const fella_10 = this.add.sprite(431.1800276870193, -166.37047956901839, "fella", 0);
		fella_10.scaleX = 0.5;
		fella_10.scaleY = 0.5;
		fella_10.tintTopLeft = 14170682;
		fella_10.tintTopRight = 14170682;
		fella_10.tintBottomLeft = 14170682;
		fella_10.tintBottomRight = 14170682;

		// fella_11
		const fella_11 = this.add.sprite(564.1325792067574, -110.39045787649704, "fella", 0);
		fella_11.scaleX = 0.5;
		fella_11.scaleY = 0.5;
		fella_11.tintTopLeft = 14170682;
		fella_11.tintTopRight = 14170682;
		fella_11.tintBottomLeft = 14170682;
		fella_11.tintBottomRight = 14170682;

		// fella_12
		const fella_12 = this.add.sprite(-127.14391159565137, 307.852663023587, "fella", 0);
		fella_12.scaleX = 0.5;
		fella_12.scaleY = 0.5;
		fella_12.tintTopLeft = 14170682;
		fella_12.tintTopRight = 14170682;
		fella_12.tintBottomLeft = 14170682;
		fella_12.tintBottomRight = 14170682;

		// fella_13
		const fella_13 = this.add.sprite(-405.2946443803668, 316.5995414130435, "fella", 0);
		fella_13.scaleX = 0.5;
		fella_13.scaleY = 0.5;
		fella_13.tintTopLeft = 14170682;
		fella_13.tintTopRight = 14170682;
		fella_13.tintBottomLeft = 14170682;
		fella_13.tintBottomRight = 14170682;

		// fella_14
		const fella_14 = this.add.sprite(98.52555085232527, 248.3738899752831, "fella", 0);
		fella_14.scaleX = 0.5;
		fella_14.scaleY = 0.5;
		fella_14.tintTopLeft = 14170682;
		fella_14.tintTopRight = 14170682;
		fella_14.tintBottomLeft = 14170682;
		fella_14.tintBottomRight = 14170682;

		// fella_15
		const fella_15 = this.add.sprite(547.9244058626557, 241.31396012158402, "fella", 0);
		fella_15.scaleX = 0.5;
		fella_15.scaleY = 0.5;
		fella_15.tintTopLeft = 14170682;
		fella_15.tintTopRight = 14170682;
		fella_15.tintBottomLeft = 14170682;
		fella_15.tintBottomRight = 14170682;

		// fella_16
		const fella_16 = this.add.sprite(7.367321394246502, -84.06991596619628, "fella", 0);
		fella_16.scaleX = 0.5;
		fella_16.scaleY = 0.5;
		fella_16.tintTopLeft = 14170682;
		fella_16.tintTopRight = 14170682;
		fella_16.tintBottomLeft = 14170682;
		fella_16.tintBottomRight = 14170682;

		// fella_17
		const fella_17 = this.add.sprite(-160.57274368331753, 83.87014911136774, "fella", 0);
		fella_17.scaleX = 0.5;
		fella_17.scaleY = 0.5;
		fella_17.tintTopLeft = 14170682;
		fella_17.tintTopRight = 14170682;
		fella_17.tintBottomLeft = 14170682;
		fella_17.tintBottomRight = 14170682;

		// fella_18
		const fella_18 = this.add.sprite(-237.54527351053437, -106.81179977878307, "fella", 0);
		fella_18.scaleX = 0.5;
		fella_18.scaleY = 0.5;
		fella_18.tintTopLeft = 14170682;
		fella_18.tintTopRight = 14170682;
		fella_18.tintBottomLeft = 14170682;
		fella_18.tintBottomRight = 14170682;

		// fella_19
		const fella_19 = this.add.sprite(-659.1448118823357, 265.8052196120621, "fella", 0);
		fella_19.scaleX = 0.5;
		fella_19.scaleY = 0.5;
		fella_19.tintTopLeft = 14170682;
		fella_19.tintTopRight = 14170682;
		fella_19.tintBottomLeft = 14170682;
		fella_19.tintBottomRight = 14170682;

		// fella_20
		const fella_20 = this.add.sprite(-769.3554795894871, 33.13825445252028, "fella", 0);
		fella_20.scaleX = 0.5;
		fella_20.scaleY = 0.5;
		fella_20.tintTopLeft = 14170682;
		fella_20.tintTopRight = 14170682;
		fella_20.tintBottomLeft = 14170682;
		fella_20.tintBottomRight = 14170682;

		// fella_21
		const fella_21 = this.add.sprite(-795.5961147578565, -89.31804299987016, "fella", 0);
		fella_21.scaleX = 0.5;
		fella_21.scaleY = 0.5;
		fella_21.tintTopLeft = 14170682;
		fella_21.tintTopRight = 14170682;
		fella_21.tintBottomLeft = 14170682;
		fella_21.tintBottomRight = 14170682;

		// fella_23
		const fella_23 = this.add.sprite(-274.2821627462515, -152.29556740395665, "fella", 0);
		fella_23.tintTopLeft = 6343410;
		fella_23.tintTopRight = 6343410;
		fella_23.tintBottomLeft = 6343410;
		fella_23.tintBottomRight = 6343410;

		// fella_24
		const fella_24 = this.add.sprite(73.8435971541156, 164.34143029436717, "fella", 0);
		fella_24.tintTopLeft = 6343410;
		fella_24.tintTopRight = 6343410;
		fella_24.tintBottomLeft = 6343410;
		fella_24.tintBottomRight = 6343410;

		// fella_25
		const fella_25 = this.add.sprite(512.9368923048298, 223.8202033426711, "fella", 0);
		fella_25.tintTopLeft = 6343410;
		fella_25.tintTopRight = 6343410;
		fella_25.tintBottomLeft = 6343410;
		fella_25.tintBottomRight = 6343410;

		// fella_26
		const fella_26 = this.add.sprite(701.8694655170893, 13.895121995716067, "fella", 0);
		fella_26.tintTopLeft = 6343410;
		fella_26.tintTopRight = 6343410;
		fella_26.tintBottomLeft = 6343410;
		fella_26.tintBottomRight = 6343410;

		// fella_27
		const fella_27 = this.add.sprite(-6.6276840288838335, 334.0308710498225, "fella", 0);
		fella_27.scaleX = 0.5;
		fella_27.scaleY = 0.5;
		fella_27.tintTopLeft = 14170682;
		fella_27.tintTopRight = 14170682;
		fella_27.tintBottomLeft = 14170682;
		fella_27.tintBottomRight = 14170682;

		// fella_28
		const fella_28 = this.add.sprite(-370.49782503027257, 341.0283737613876, "fella", 0);
		fella_28.scaleX = 0.5;
		fella_28.scaleY = 0.5;
		fella_28.tintTopLeft = 14170682;
		fella_28.tintTopRight = 14170682;
		fella_28.tintBottomLeft = 14170682;
		fella_28.tintBottomRight = 14170682;

		// fella_29
		const fella_29 = this.add.sprite(-797.3454904357478, 243.0633357994753, "fella", 0);
		fella_29.scaleX = 0.5;
		fella_29.scaleY = 0.5;
		fella_29.tintTopLeft = 14170682;
		fella_29.tintTopRight = 14170682;
		fella_29.tintBottomLeft = 14170682;
		fella_29.tintBottomRight = 14170682;

		// fella_30
		const fella_30 = this.add.sprite(-737.8667173874438, 111.86015995762841, "fella", 0);
		fella_30.scaleX = 0.5;
		fella_30.scaleY = 0.5;
		fella_30.tintTopLeft = 14170682;
		fella_30.tintTopRight = 14170682;
		fella_30.tintBottomLeft = 14170682;
		fella_30.tintBottomRight = 14170682;

		// fella_31
		const fella_31 = this.add.sprite(-538.4378901078366, 164.34143029436717, "fella", 0);
		fella_31.scaleX = 0.5;
		fella_31.scaleY = 0.5;
		fella_31.tintTopLeft = 14170682;
		fella_31.tintTopRight = 14170682;
		fella_31.tintBottomLeft = 14170682;
		fella_31.tintBottomRight = 14170682;

		// fella_32
		const fella_32 = this.add.sprite(-466.7134873142936, 321.78524130458345, "fella", 0);
		fella_32.scaleX = 0.5;
		fella_32.scaleY = 0.5;
		fella_32.tintTopLeft = 14170682;
		fella_32.tintTopRight = 14170682;
		fella_32.tintBottomLeft = 14170682;
		fella_32.tintBottomRight = 14170682;

		// fella_33
		const fella_33 = this.add.sprite(-111.59022470236135, 188.83268978484526, "fella", 0);
		fella_33.scaleX = 0.5;
		fella_33.scaleY = 0.5;
		fella_33.tintTopLeft = 14170682;
		fella_33.tintTopRight = 14170682;
		fella_33.tintBottomLeft = 14170682;
		fella_33.tintBottomRight = 14170682;

		// fella_34
		const fella_34 = this.add.sprite(-457.96660892483715, -91.06741867776145, "fella", 0);
		fella_34.scaleX = 0.5;
		fella_34.scaleY = 0.5;
		fella_34.tintTopLeft = 14170682;
		fella_34.tintTopRight = 14170682;
		fella_34.tintBottomLeft = 14170682;
		fella_34.tintBottomRight = 14170682;

		// fella_35
		const fella_35 = this.add.sprite(-762.3579768779219, -197.77933502913027, "fella", 0);
		fella_35.scaleX = 0.5;
		fella_35.scaleY = 0.5;
		fella_35.tintTopLeft = 14170682;
		fella_35.tintTopRight = 14170682;
		fella_35.tintBottomLeft = 14170682;
		fella_35.tintBottomRight = 14170682;

		// fella_36
		const fella_36 = this.add.sprite(-464.9641116364023, 103.11328156817196, "fella", 0);
		fella_36.scaleX = 0.5;
		fella_36.scaleY = 0.5;
		fella_36.tintTopLeft = 14170682;
		fella_36.tintTopRight = 14170682;
		fella_36.tintBottomLeft = 14170682;
		fella_36.tintBottomRight = 14170682;

		// fella_37
		const fella_37 = this.add.sprite(238.28491087589703, 92.61702750082421, "fella", 0);
		fella_37.scaleX = 0.5;
		fella_37.scaleY = 0.5;
		fella_37.tintTopLeft = 14170682;
		fella_37.tintTopRight = 14170682;
		fella_37.tintBottomLeft = 14170682;
		fella_37.tintBottomRight = 14170682;

		// fella_38
		const fella_38 = this.add.sprite(439.4631138333956, 341.0283737613876, "fella", 0);
		fella_38.scaleX = 0.5;
		fella_38.scaleY = 0.5;
		fella_38.tintTopLeft = 14170682;
		fella_38.tintTopRight = 14170682;
		fella_38.tintBottomLeft = 14170682;
		fella_38.tintBottomRight = 14170682;

		// fella_39
		const fella_39 = this.add.sprite(266.2749217221577, 159.0933032606933, "fella", 0);
		fella_39.scaleX = 0.5;
		fella_39.scaleY = 0.5;
		fella_39.tintTopLeft = 14170682;
		fella_39.tintTopRight = 14170682;
		fella_39.tintBottomLeft = 14170682;
		fella_39.tintBottomRight = 14170682;

		// fella_40
		const fella_40 = this.add.sprite(184.05426486126697, 306.0408602035618, "fella", 0);
		fella_40.scaleX = 0.5;
		fella_40.scaleY = 0.5;
		fella_40.tintTopLeft = 14170682;
		fella_40.tintTopRight = 14170682;
		fella_40.tintBottomLeft = 14170682;
		fella_40.tintBottomRight = 14170682;

		// fella_41
		const fella_41 = this.add.sprite(374.7362137514178, 290.29647910254016, "fella", 0);
		fella_41.scaleX = 0.5;
		fella_41.scaleY = 0.5;
		fella_41.tintTopLeft = 14170682;
		fella_41.tintTopRight = 14170682;
		fella_41.tintBottomLeft = 14170682;
		fella_41.tintBottomRight = 14170682;

		// fella_42
		const fella_42 = this.add.sprite(17.86357546159425, 43.63450851986803, "fella", 0);
		fella_42.scaleX = 0.5;
		fella_42.scaleY = 0.5;
		fella_42.tintTopLeft = 14170682;
		fella_42.tintTopRight = 14170682;
		fella_42.tintBottomLeft = 14170682;
		fella_42.tintBottomRight = 14170682;

		// fella_43
		const fella_43 = this.add.sprite(-295.274670880947, -19.343015884218477, "fella", 0);
		fella_43.scaleX = 0.5;
		fella_43.scaleY = 0.5;
		fella_43.tintTopLeft = 14170682;
		fella_43.tintTopRight = 14170682;
		fella_43.tintBottomLeft = 14170682;
		fella_43.tintBottomRight = 14170682;

		// fella_44
		const fella_44 = this.add.sprite(-94.09646792344843, 5.148243606259608, "fella", 0);
		fella_44.scaleX = 0.5;
		fella_44.scaleY = 0.5;
		fella_44.tintTopLeft = 14170682;
		fella_44.tintTopRight = 14170682;
		fella_44.tintBottomLeft = 14170682;
		fella_44.tintBottomRight = 14170682;

		// fella_45
		const fella_45 = this.add.sprite(-290.0265438472731, -120.8068052019134, "fella", 0);
		fella_45.scaleX = 0.5;
		fella_45.scaleY = 0.5;
		fella_45.tintTopLeft = 14170682;
		fella_45.tintTopRight = 14170682;
		fella_45.tintBottomLeft = 14170682;
		fella_45.tintBottomRight = 14170682;

		// fella_46
		const fella_46 = this.add.sprite(-547.184768497293, -145.2980646923915, "fella", 0);
		fella_46.scaleX = 0.5;
		fella_46.scaleY = 0.5;
		fella_46.tintTopLeft = 14170682;
		fella_46.tintTopRight = 14170682;
		fella_46.tintBottomLeft = 14170682;
		fella_46.tintBottomRight = 14170682;

		// fella_47
		const fella_47 = this.add.sprite(-422.9790953670113, -161.04244579341312, "fella", 0);
		fella_47.scaleX = 0.5;
		fella_47.scaleY = 0.5;
		fella_47.tintTopLeft = 14170682;
		fella_47.tintTopRight = 14170682;
		fella_47.tintBottomLeft = 14170682;
		fella_47.tintBottomRight = 14170682;

		// fella_48
		const fella_48 = this.add.sprite(159.5630053707889, 1.6494922504770235, "fella", 0);
		fella_48.scaleX = 0.5;
		fella_48.scaleY = 0.5;
		fella_48.tintTopLeft = 14170682;
		fella_48.tintTopRight = 14170682;
		fella_48.tintBottomLeft = 14170682;
		fella_48.tintBottomRight = 14170682;

		// fella_49
		const fella_49 = this.add.sprite(254.02929197691867, 69.8751436882374, "fella", 0);
		fella_49.scaleX = 0.5;
		fella_49.scaleY = 0.5;
		fella_49.tintTopLeft = 14170682;
		fella_49.tintTopRight = 14170682;
		fella_49.tintBottomLeft = 14170682;
		fella_49.tintBottomRight = 14170682;

		// fella_50
		const fella_50 = this.add.sprite(294.2649325684184, 176.5870600396062, "fella", 0);
		fella_50.scaleX = 0.5;
		fella_50.scaleY = 0.5;
		fella_50.tintTopLeft = 14170682;
		fella_50.tintTopRight = 14170682;
		fella_50.tintBottomLeft = 14170682;
		fella_50.tintBottomRight = 14170682;

		// fella_51
		const fella_51 = this.add.sprite(488.44563281435177, -28.08989427367494, "fella", 0);
		fella_51.scaleX = 0.5;
		fella_51.scaleY = 0.5;
		fella_51.tintTopLeft = 14170682;
		fella_51.tintTopRight = 14170682;
		fella_51.tintBottomLeft = 14170682;
		fella_51.tintBottomRight = 14170682;

		// fella_52
		const fella_52 = this.add.sprite(500.6912625595908, -122.5561808798047, "fella", 0);
		fella_52.scaleX = 0.5;
		fella_52.scaleY = 0.5;
		fella_52.tintTopLeft = 14170682;
		fella_52.tintTopRight = 14170682;
		fella_52.tintBottomLeft = 14170682;
		fella_52.tintBottomRight = 14170682;

		// fella_53
		const fella_53 = this.add.sprite(378.23496510720037, 101.36390589028066, "fella", 0);
		fella_53.scaleX = 0.5;
		fella_53.scaleY = 0.5;
		fella_53.tintTopLeft = 14170682;
		fella_53.tintTopRight = 14170682;
		fella_53.tintBottomLeft = 14170682;
		fella_53.tintBottomRight = 14170682;

		// fella_54
		const fella_54 = this.add.sprite(222.5405297748754, -96.31554571143532, "fella", 0);
		fella_54.scaleX = 0.5;
		fella_54.scaleY = 0.5;
		fella_54.tintTopLeft = 14170682;
		fella_54.tintTopRight = 14170682;
		fella_54.tintBottomLeft = 14170682;
		fella_54.tintBottomRight = 14170682;

		// fella_55
		const fella_55 = this.add.sprite(498.94188688169953, 120.60703834708487, "fella", 0);
		fella_55.scaleX = 0.5;
		fella_55.scaleY = 0.5;
		fella_55.tintTopLeft = 14170682;
		fella_55.tintTopRight = 14170682;
		fella_55.tintBottomLeft = 14170682;
		fella_55.tintBottomRight = 14170682;

		// fella_56
		const fella_56 = this.add.sprite(353.7437056167223, -131.30305926926115, "fella", 0);
		fella_56.scaleX = 0.5;
		fella_56.scaleY = 0.5;
		fella_56.tintTopLeft = 14170682;
		fella_56.tintTopRight = 14170682;
		fella_56.tintBottomLeft = 14170682;
		fella_56.tintBottomRight = 14170682;

		// fella_57
		const fella_57 = this.add.sprite(-202.55775995270852, -61.328032153609485, "fella", 0);
		fella_57.scaleX = 0.5;
		fella_57.scaleY = 0.5;
		fella_57.tintTopLeft = 14170682;
		fella_57.tintTopRight = 14170682;
		fella_57.tintBottomLeft = 14170682;
		fella_57.tintBottomRight = 14170682;

		// fella_58
		const fella_58 = this.add.sprite(175.30738647181053, -0.09988342741426828, "fella", 0);
		fella_58.scaleX = 0.5;
		fella_58.scaleY = 0.5;
		fella_58.tintTopLeft = 14170682;
		fella_58.tintTopRight = 14170682;
		fella_58.tintBottomLeft = 14170682;
		fella_58.tintBottomRight = 14170682;

		// fella_59
		const fella_59 = this.add.sprite(339.74870019359196, -96.31554571143532, "fella", 0);
		fella_59.scaleX = 0.5;
		fella_59.scaleY = 0.5;
		fella_59.tintTopLeft = 14170682;
		fella_59.tintTopRight = 14170682;
		fella_59.tintBottomLeft = 14170682;
		fella_59.tintBottomRight = 14170682;

		// fella_60
		const fella_60 = this.add.sprite(-80.10146250031809, -92.81679435565273, "fella", 0);
		fella_60.scaleX = 0.5;
		fella_60.scaleY = 0.5;
		fella_60.tintTopLeft = 14170682;
		fella_60.tintTopRight = 14170682;
		fella_60.tintBottomLeft = 14170682;
		fella_60.tintBottomRight = 14170682;

		// fella_61
		const fella_61 = this.add.sprite(-127.33460580338297, -182.03495392810862, "fella", 0);
		fella_61.scaleX = 0.5;
		fella_61.scaleY = 0.5;
		fella_61.tintTopLeft = 14170682;
		fella_61.tintTopRight = 14170682;
		fella_61.tintBottomLeft = 14170682;
		fella_61.tintBottomRight = 14170682;

		// fella_62
		const fella_62 = this.add.sprite(227.7886568085493, 24.391376063063817, "fella", 0);
		fella_62.scaleX = 0.5;
		fella_62.scaleY = 0.5;
		fella_62.tintTopLeft = 14170682;
		fella_62.tintTopRight = 14170682;
		fella_62.tintBottomLeft = 14170682;
		fella_62.tintBottomRight = 14170682;

		// fella_63
		const fella_63 = this.add.sprite(605.6538032330683, 178.3364357174975, "fella", 0);
		fella_63.scaleX = 0.5;
		fella_63.scaleY = 0.5;
		fella_63.tintTopLeft = 14170682;
		fella_63.tintTopRight = 14170682;
		fella_63.tintBottomLeft = 14170682;
		fella_63.tintBottomRight = 14170682;

		// fella_64
		const fella_64 = this.add.sprite(724.6113493296762, 323.53461698247474, "fella", 0);
		fella_64.scaleX = 0.5;
		fella_64.scaleY = 0.5;
		fella_64.tintTopLeft = 14170682;
		fella_64.tintTopRight = 14170682;
		fella_64.tintBottomLeft = 14170682;
		fella_64.tintBottomRight = 14170682;

		// fella_65
		const fella_65 = this.add.sprite(733.3582277191326, 216.82270063110593, "fella", 0);
		fella_65.scaleX = 0.5;
		fella_65.scaleY = 0.5;
		fella_65.tintTopLeft = 14170682;
		fella_65.tintTopRight = 14170682;
		fella_65.tintBottomLeft = 14170682;
		fella_65.tintBottomRight = 14170682;

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
		const fellasList = [fella, fella_5, fella_8, fella_7, fella_6, fella_4, fella_3, fella_2, fella_1, fella_9, fella_65, fella_64, fella_63, fella_62, fella_61, fella_60, fella_59, fella_58, fella_57, fella_56, fella_55, fella_54, fella_53, fella_52, fella_51, fella_50, fella_49, fella_48, fella_47, fella_46, fella_45, fella_44, fella_43, fella_42, fella_41, fella_40, fella_39, fella_38, fella_37, fella_36, fella_35, fella_34, fella_33, fella_32, fella_31, fella_30, fella_29, fella_28, fella_27, fella_26, fella_25, fella_24, fella_23, fella_21, fella_20, fella_19, fella_18, fella_17, fella_16, fella_15, fella_14, fella_13, fella_12, fella_11, fella_10];
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
		this.fella = fella;
		this.fella_5 = fella_5;
		this.fella_1 = fella_1;
		this.fella_2 = fella_2;
		this.fella_3 = fella_3;
		this.fella_4 = fella_4;
		this.fella_6 = fella_6;
		this.fella_7 = fella_7;
		this.fella_8 = fella_8;
		this.buttonTest2 = buttonTest2;
		this.buttonTest = buttonTest;
		this.fella_9 = fella_9;
		this.fella_10 = fella_10;
		this.fella_11 = fella_11;
		this.fella_12 = fella_12;
		this.fella_13 = fella_13;
		this.fella_14 = fella_14;
		this.fella_15 = fella_15;
		this.fella_16 = fella_16;
		this.fella_17 = fella_17;
		this.fella_18 = fella_18;
		this.fella_19 = fella_19;
		this.fella_20 = fella_20;
		this.fella_21 = fella_21;
		this.fella_23 = fella_23;
		this.fella_24 = fella_24;
		this.fella_25 = fella_25;
		this.fella_26 = fella_26;
		this.fella_27 = fella_27;
		this.fella_28 = fella_28;
		this.fella_29 = fella_29;
		this.fella_30 = fella_30;
		this.fella_31 = fella_31;
		this.fella_32 = fella_32;
		this.fella_33 = fella_33;
		this.fella_34 = fella_34;
		this.fella_35 = fella_35;
		this.fella_36 = fella_36;
		this.fella_37 = fella_37;
		this.fella_38 = fella_38;
		this.fella_39 = fella_39;
		this.fella_40 = fella_40;
		this.fella_41 = fella_41;
		this.fella_42 = fella_42;
		this.fella_43 = fella_43;
		this.fella_44 = fella_44;
		this.fella_45 = fella_45;
		this.fella_46 = fella_46;
		this.fella_47 = fella_47;
		this.fella_48 = fella_48;
		this.fella_49 = fella_49;
		this.fella_50 = fella_50;
		this.fella_51 = fella_51;
		this.fella_52 = fella_52;
		this.fella_53 = fella_53;
		this.fella_54 = fella_54;
		this.fella_55 = fella_55;
		this.fella_56 = fella_56;
		this.fella_57 = fella_57;
		this.fella_58 = fella_58;
		this.fella_59 = fella_59;
		this.fella_60 = fella_60;
		this.fella_61 = fella_61;
		this.fella_62 = fella_62;
		this.fella_63 = fella_63;
		this.fella_64 = fella_64;
		this.fella_65 = fella_65;
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
	/** @type {Phaser.GameObjects.Sprite} */
	fella;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_5;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_1;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_2;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_3;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_4;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_6;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_7;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_8;
	/** @type {Phaser.GameObjects.Rectangle} */
	buttonTest2;
	/** @type {Phaser.GameObjects.Rectangle} */
	buttonTest;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_9;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_10;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_11;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_12;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_13;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_14;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_15;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_16;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_17;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_18;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_19;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_20;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_21;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_23;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_24;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_25;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_26;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_27;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_28;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_29;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_30;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_31;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_32;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_33;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_34;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_35;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_36;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_37;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_38;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_39;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_40;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_41;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_42;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_43;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_44;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_45;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_46;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_47;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_48;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_49;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_50;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_51;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_52;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_53;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_54;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_55;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_56;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_57;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_58;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_59;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_60;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_61;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_62;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_63;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_64;
	/** @type {Phaser.GameObjects.Sprite} */
	fella_65;
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
	/** @type {Phaser.GameObjects.Sprite[]} */
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

	create() {

		this.editorCreate();

		this.fellas = this.add.group();

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

		this.initColliders();

		// setup all fella states
		for (let i = 0; i < this.fellasList.length; i++) {

			this.fellasList[i].status = new StateController(this.fellasList[i], this);
			// gameobject.state is a build in member meant to be an int or string, so we make our own property
			this.fellasList[i].status.setState('idle');
		}

		// camera
		this.cameras.main.setViewport(0, 0, this.scale.width, this.scale.height);
		this.cameras.main.setRoundPixels(true);
		this.cameras.main.centerOn(0, 0);

		// resize
		this.resize();
	}

	update() {

		if (this.controls.isDown('left')) {

			// this.cameras.main.scrollX--;
			// this.cameras.main.zoom += .005;

			for(let i = 0; i < this.fellasList.length; i++) {

				// this.fellasList[i].body.setVelocity(-400, 0);
			}
		}
		else if (this.controls.isDown('right')) {

			// this.cameras.main.scrollX++;
			// this.cameras.main.zoom -= .005;

			for(let i = 0; i < this.fellasList.length; i++) {

				// this.fellasList[i].body.setVelocity(400, 0);
			}
		}
		else {

			for(let i = 0; i < this.fellasList.length; i++) {

				// this.fellasList[i].body.setVelocity(0, 0);
			}
		}

		this.fpsText.setText('FPS: ' + this.game.loop.actualFps);

		for (let i = 0; i < this.fellasList.length; i++) {

			// update all fella states
			this.fellasList[i].status.update();

			// depth sort needs to happen for each fella on each frame
			// if this hits performance then I can get away with updating this 
			// only in states where the fella is moving
			if (this.fellasList[i].getData('alive')) {

				this.fellasList[i].setDepth(this.fellasList[i].y);
			}
		}
	}

	/** scene specific resizing adjustments
	 * 
	 * called at window resize from main.js binded method
	 */
	resize() {

		// this.cameras.main.setScroll(-this.scale.width/2, -this.scale.height/2);
		// this only really makes scalable scene object placement easier if I'm typing in coordinates, which I'm not really doing
		// otherwise this messes with scrollfactor

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

	/** setup collision physics */
	initColliders() {

		// tank walls
		this.matter.world.setBounds(-910, -450, 1820, 880, 300);
		// this is centered at (0, 10) to avoid accidental app switching on ios

		// fellas
		for(let i = 0; i < this.fellasList.length; i++) {

			const _fella = this.fellasList[i];

			_fella.setData('alive', true);


			this.matter.add.gameObject(
				this.fellasList[i], 
				{ inertia: Infinity, shape: {type: 'circle', radius: 80 * this.fellasList[i].scaleX}})
					.setBounce(.5)
					.setFrictionAir(.2)
					.setMass(20);

			_fella.setDepth(_fella.y)

			// if special fella
			if (_fella.scaleX == 1) {

				_fella.body.gameObject.setMass(50);
			}

			// debug text
			this.spriteCountText.setText('sprites: ' + this.fellasList.length);
		}

		/** @type {Phaser.Physics.Matter.PointerConstraint} */		
		this.mouseConstraint = this.matter.add.mouseSpring();
		// NOTE: apparently I can use stopDrag()
		// https://newdocs.phaser.io/docs/3.54.0/focus/Phaser.Physics.Matter.Factory-mouseSpring
		// TODO: how do I know when / what is being dragged so I can set a state?

		this.matter.world.on('dragstart', function(body) { 

			console.log(body);
		});

		this.matter.world.on('dragend', function(body) { 

			body.gameObject.status.setState('dead');
		});
	}

	addFella() {

		this.fellasList.push(this.add.sprite(0, 0));

		const _fella = this.fellasList[this.fellasList.length -1]

		_fella.setData('alive', true);

		this.matter.add.gameObject(
			this.fellasList[this.fellasList.length -1], 
			{ inertia: Infinity, shape: {type: 'circle', radius: 80 * .5}})
				.setBounce(.5)
				.setFrictionAir(.2)
				.setMass(20);

		_fella.setDepth(_fella.y)

		// if special fella
		if (_fella.scaleX == 1) {

			_fella.body.gameObject.setMass(50);
		}

		// debug text
		this.spriteCountText.setText('sprites: ' + this.fellasList.length);

		_fella.status = new StateController(this.fellasList[this.fellasList.length -1], this);
			// gameobject.state is a build in member meant to be an int or string, so we make our own property
			_fella.status.setState('idle');
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

			this.addFella();
		});

		// spawning sprites
		this.controls.onPress('right', () => {

			for (let i = 0; i < 10; i++) {

			}
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