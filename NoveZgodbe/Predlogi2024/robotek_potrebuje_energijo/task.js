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

				label:{sensorBool:"Smo na puščici"},//languegae za novi delček
				code:{sensorBool:"SmoNaPiscici"},
				description:{sensorBool:"Preveri ali se nahajamo na puščici"},

				startingBlockName: "Program",	
				categories: {				
				   actions: "Gibanje",
				},
				messages:{
					itemsExist: "Robotek ni prišel do kristala",
					itemsDontExist: "Robotek se je napolnil",
				},
	
			},
		},

		localBlocks: function(context, strings, infos){
		
			var customBlocks = {	// don't attach it to context!! just return it
				robot: {
					tools: [

						{  	name: "sensorBool", 
							yieldsValue: true,
							handler: (callback) => { context.robot.sensorBool("under", "zastava", "category" ,callback) },
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
		maxInstructions: 0,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  [
					//"move",
					"forwardSimple",
					"turn",
					//"turnAround",
					"sensorBool"
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["loops","logic"],
				singleBlocks: [],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="g[RG~e=aB:orky#Iq!_T" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat_ext" id="_q7VDRgL=#|!TbLwCfM*"><value name="TIMES"><shadow type="math_number" id="h:TW31cUPEt9kk?T*Dt0"><field name="NUM">12</field></shadow></value><statement name="DO"><block type="controls_if" id="12S!*d,StYlDKNL5eBp{"><mutation else="1"></mutation><value name="IF0"><block type="sensorBool" id="}7;{s`_nV{SicFLUJ`3p"></block></value><statement name="DO0"><block type="move" id="i{jT1nBIQtfGxzVd(z[u"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="(|m!uFc#F,?Ot|{;UsPz"><field name="NUM">1</field></shadow></value></block></statement><statement name="ELSE"><block type="move" id="c4!qijO0jP*/:sDdAgZ["><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id="c6US(?YA/o:5#Z7(]BMW"><field name="NUM">1</field></shadow></value></block></statement></block></statement></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin", value: 0}, {}, exist=false).checkReachGreenArea(context, lastTurn)},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.05,
		backgroundColour: "green",
		backgroundTile: false,
		borderColour: "grey",

		cellSide: 80,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["green_robot2.png"], side: 140,nbStates: 9,offsetX: -20,offsetY: 30,  zOrder: 8, category: {'robot': true}, },
			coin: {num:3, img:["snowflake_transparent.png"],side: 100,zOrder: 2, category:{"coin":true}},
			smer: {num:4, img:["puscica_gor.png"],zOrder: 2,offsetY: 15,category:{"zastava":true}},
			obstacle: { num: 2, img: "earth2.png", zOrder: 1, category: {'obstacle': true}},
		
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 1, 2, 1, 1, 1, 2, 1, 1],
					[1, 2, 1, 1, 1, 1, 1, 1, 3, 1],
					[1, 1, 1, 2, 1, 1, 1, 1, 4, 1],
					[1, 1, 1, 1, 1, 4, 1, 2, 1, 1],
					[1, 1, 1, 4, 2, 1, 1, 1, 1, 1],
					
					
				],
				initItems: [
					{ row: 4, col: 0, dir: 0, type: "robot0" },
					
					
				],
			},
			{
				tiles: [
					[1, 1, 2, 1, 1, 1, 1, 1, 1, 3],
					[1, 2, 1, 1, 2, 1, 4, 1, 2, 1],
					[1, 1, 1, 1, 1, 1, 4, 2, 1, 1],
					[1, 4, 2, 1, 2, 1, 2, 1, 1, 1],
					[1, 1, 1, 2, 1, 1, 1, 1, 2, 1],
					
					
				],
				initItems: [
					{ row: 3, col: 0, dir: 0, type: "robot0" },
					
					
				],
			},
			{
				tiles: [
					[1, 1, 1, 1, 2, 1, 1, 1, 3, 1],
					[1, 2, 1, 1, 1, 1, 4, 2, 1, 1],
					[2, 1, 1, 4, 1, 1, 1, 1, 1, 1],
					[1, 1, 4, 1, 1, 2, 1, 1, 2, 1],
					[1, 1, 4, 2, 1, 1, 1, 2, 1, 1],
					
					
				],
				initItems: [
					{ row: 4, col: 0, dir: 0, type: "robot0" },
					
					
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}