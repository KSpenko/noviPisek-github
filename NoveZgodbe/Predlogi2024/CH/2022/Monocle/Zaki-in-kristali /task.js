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

				label:{sensorBool:"Jajček spodaj"},//languegae za novi delček
				code:{sensorBool:"JajcekSpodaj"},
				description:{sensorBool:"Preveri ali se nahajamo na jajčku"},

				startingBlockName: "Program",	
				categories: {				
				   actions: "Gibanje",
				},
				messages:{
					itemsExist: "Zaki ni pobral vseh kristalov",
					itemsDontExist: "Zaki je pobral vse kristale",
				},
	
			},
		},

		localBlocks: function(context, strings, infos){
		
			var customBlocks = {	// don't attach it to context!! just return it
				robot: {
					tools: [
						{  	name: "sensorBool", 
							yieldsValue: true,
							handler: (callback) => { context.robot.sensorBool("under", "transportable", "category" ,callback) },
							
						},
					],
				},
			};
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
		maxInstructions: 6,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  [
					//"move",
					"forwardSimple",
					"turn",
					"transport",   
					"sensorBool"   
					//"turnAround",
					
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],//hočem le opcijo premKNI SE NE PREMKANI SE ZA=========================================================	
				singleBlocks: ['controls_repeat_ext','controls_if'],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="g[RG~e=aB:orky#Iq!_T" deletable="false" movable="false" editable="false" x="0" y="0"></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "transportable", value: 0}, {}, exist=false).checkReachGreenArea(context, lastTurn)},
		computeGrade: robotGradeFunctions.allOrNothing,		
		border: 0.05,
		backgroundColour: "green",
		backgroundTile: "grass3.png",
		borderColour: "darkgreen",

		cellSide: 80,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["zajcek.png"], side: 75, nbStates: 1, zOrder: 8, category: {'robot': true}, },
			obstacle: { num: 2, img:["mango_tree_transparent.png"], zOrder: 1, category: {'obstacle': true}},
			coin: {num:3, img:["snowflake_transparent.png"],zOrder: 8, category:{"transportable":true}},
		},

		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[2, 1, 1, 2, 1],
					[2, 2, 3, 1, 1],
					[1, 1, 1, 1, 2],
					[1, 2, 3, 1, 2],
					[2, 2, 1, 1, 1],
					[1, 1, 1, 1, 2],
					[1, 2, 3, 1, 2],
					[2, 1, 1, 2, 2],

					
						
				],
				initItems: [
					{ row: 0, col: 2, dir: 2, type: "robot0" },

				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}