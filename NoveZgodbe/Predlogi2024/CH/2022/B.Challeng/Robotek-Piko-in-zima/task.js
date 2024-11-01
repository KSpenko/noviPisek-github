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
				startingBlockName: "Program",	
				categories: {				
				   actions: "Gibanje",
				},
				messages:{
					itemsExist: "Piko ni pobral vseh baterij. ",
					itemsDontExist: "Piko je pobral vse baterije. ",
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
		maxInstructions: 16,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  [
					"move",
					"forwardSimple",
					"turn",     
					//"turnAround",
					
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["loops","functions"],//hočem le opcijo premKNI SE NE PREMKANI SE ZA=========================================================	
				singleBlocks: [],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="g[RG~e=aB:orky#Iq!_T" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat_ext" id="*GISSJ@xrB4zVQ@PcZBC"><value name="TIMES"><shadow type="math_number" id="Vy921xS|sk0#Kfk=bN[B"><field name="NUM">3</field></shadow></value><statement name="DO"><block type="move" id="Mj/71qE!e!6miu7Sj{BW"><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id="3~cw2Hk(?XILN!(KK}gP"><field name="NUM">1</field></shadow></value><next><block type="procedures_callnoreturn" id="Fr[l=rs70XYY`Cc+3b1x"><mutation name="Premik"></mutation></block></next></block></statement></block></next></block><block type="procedures_defnoreturn" id="0}#iQUa3{!DCtqZUeXw8" x="469" y="258"><field name="NAME">Premik</field><comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin", value: 0}, {}, exist=false).checkReachGreenArea(context, lastTurn)},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.05,
		backgroundColour: "green",
		backgroundTile: "grass3.png",
		borderColour: "darkgreen",

		cellSide: 80,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["green_robot2.png"], side: 75, nbStates: 9, zOrder: 8, category: {'robot': true}, },
			obstacle: { num: 2, img:["fence.png"], zOrder: 1, category: {'obstacle': true}},
			coin: {num:3, img:["betrija.png"],zOrder: 8, category:{"coin":true}},
		},

		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 2, 2, 2, 1, 2, 2, 1, 1, 1],
					[1, 3, 2, 3, 3, 2, 3, 1, 2, 3],
					[1, 3, 1, 3, 3, 1, 3, 1, 1, 3],
					[2, 1, 1, 1, 2, 1, 2, 1, 2, 2],	
				],
				initItems: [
					{ row: 2, col: 0, dir: 0, type: "robot0" },

				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}