function initTask(subTask) {
    subTask.gridInfos = {				//podatki za urejevalnik in vizualno okno
		userTaskData: {
			title: document.title,
			subject: $(".exerciseText").first().text(),
			about: {
				authors: "Razvojna skupina Pišek",
				license: "CC BY-NC 4.0",
			}
		},
		// local library
		// CUSTOM: here you can override the translation from blocklyRobot_lib.js
		// the dictionary tree can be incomplete (have missing values),
		// but the architecture needs to be the same as: "localLanguageStrings"
		languageStrings: {
			sl: {

				label:{sensorBool:"Smeti Spodaj"},//languegae za novi delček
				code:{sensorBool:"SmetiSpodaj"},
				description:{sensorBool:"Pove ali stojimo na smethe"},

				startingBlockName: "Program",	
				categories: {				
				   actions: "Gibanje",
				},
				messages:{
					//itemsExist: "Pišek ni prišel do gnezda",
					itemsCoincide: "Pišče je našel gnezdo. ",
					itemsDontCoincide: "Pišče ni prišel do gnezda. ",

				},
	
			},
		},

		localBlocks: function(context, strings){
			var customBlocks = {};
			return customBlocks;
		},

		hideControls: {					//gumbi na urejevalniku
			restart: false,
			saveOrLoad: false,			//gumba za shranjevanje in nalaganje kode ukazov
			loadBestAnswer: false,
			speedSlider: false,
			backToFirst: false,
			nextStep: false,
			goToEnd: false,
		},
		introMaxHeight: "33%",				//maksimalna velikost prostora za navodila
		maxListSize: 100, 						//max. dolžina seznama
		scrollbars: true,
		zoom: {
			controls: true,
			scale: 1,
		},
		actionDelay: 400,				//parameter za časovni zamik med izvajanjem ukazov -  ne deulje??
		blocklyColourTheme: "bwinf",	//izbira seta barv za bloke ukazov
		maxInstructions: 15,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  [
					//"move",
					"forwardSimple",
					"turn",     
					//"turnAround",
					
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: ['controls_repeat_ext'],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="g[RG~e=aB:orky#Iq!_T" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat_ext" id="vi,0ybaF6Kt3.@IX:WIK"><value name="TIMES"><shadow type="math_number" id="AHJ#UI4ZqnYK[yo?B4y?"><field name="NUM">3</field></shadow></value><statement name="DO"><block type="forwardSimple" id="os8O4Zuq)D(p`M1EXgUI"><next><block type="forwardSimple" id="iPMMjrI~lz@3Q8RvHQma"><next><block type="turn" id="aatvvjyRV_Pana_WoQp0"><field name="PARAM_0">2</field><next><block type="forwardSimple" id="TT!d~gOt+YGkt8D(g*37"><next><block type="turn" id="`?WZlm,SpC?#Ba@m+G]v"><field name="PARAM_0">-2</field></block></next></block></next></block></next></block></next></block></statement><next><block type="turn" id="/a+t.@Y[pZS}e6T}l}PF"><field name="PARAM_0">2</field><next><block type="forwardSimple" id="IWShM?:wZE_}bb0jxrA["><next><block type="turn" id="CI.Nm,L:vYiRqFB7D)!h"><field name="PARAM_0">-2</field><next><block type="forwardSimple" id=";y3G5ma*8D!H`kenl?,A"><next><block type="turn" id="1JHn|B6MXSQwV{@8~Dhh"><field name="PARAM_0">2</field><next><block type="controls_repeat_ext" id="dBRyBv4!fXC*V`esmP.8"><value name="TIMES"><shadow type="math_number" id="ud;}OF9U-n+/Nb1h#NT:"><field name="NUM">5</field></shadow></value><statement name="DO"><block type="forwardSimple" id="xkb.{+iwKCBtMAC9K0PV"></block></statement><next><block type="turn" id="5Rj3YHpEBy6w]Q-8L/r8"><field name="PARAM_0">-2</field><next><block type="forwardSimple" id="35E9hVw]XX`pSgBfJ}L0"><next><block type="forwardSimple" id="JkM8=D.DBJon7C5`[;S*"><next><block type="turn" id="+Bew!CVg(6Me`;pihQXE"><field name="PARAM_0">2</field><next><block type="forwardSimple" id="F0P`O1JBt(!(79iHV/nA"></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => {  robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "robot0"}, {category: "nest"})},
		computeGrade: robotGradeFunctions.allOrNothing,

		border: 0.05,
		backgroundColour: "green",
		backgroundTile: "grass3.png",
		borderColour: "darkgreen",

		cellSide: 80,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["pisek_all_8_sides.png"], side: 75, nbStates: 9, zOrder: 8, category: {'robot': true}, },
			obstacle: { num: 2, img:["mango_tree_transparent.png"], zOrder: 1, category: {'obstacle': true}},
			nest: {num:3, img:["nest_yellow.png"],zOrder: 8, category:{"nest":true}},
		},

		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 1, 1, 2, 2, 1, 1, 1, 1],
					[1, 2, 1, 1, 1, 2, 1, 1, 2, 1],
					[1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
					[2, 1, 2, 1, 2, 2, 1, 2, 1, 2],
					[1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
					[1, 2, 1, 2, 1, 1, 2, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 2, 1, 1, 1],
					[1, 1, 1, 1, 2, 1, 1, 1, 2, 2],
					[1, 1, 1, 2, 1, 1, 2, 1, 1, 1],
					[2, 1, 2, 1, 1, 2, 1, 1, 2, 3],
						
					
				],
				initItems: [
					{ row: 0, col: 0, dir: 0, type: "robot0" },

				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}