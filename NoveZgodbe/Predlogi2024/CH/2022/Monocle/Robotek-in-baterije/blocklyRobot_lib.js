// FUTURE: Check _common/modules/pemFioi/blocklyRobot_lib-1.0.0.js and blocklyRobot_lib-1.0.1-dev.js!!!

// language strings
var localLanguageStrings = {
   sl: {
      startingBlockName: "Program",	//Začetni blok programa
      categories: {							//Imena kategorij
         movement: "Gibanje", // FUTURE override?? doesnt work
         tools: "Pripomočki",
      },
      label: {									//Imena ukazov
         move: "premakni se v smer %1 za %2",
         moveSimple: "premakni se %1",
         forward: "premakni se naprej za %1",
         forwardSimple: "premakni se naprej",
         turn: "obrni se %1",
         turnAround: "obrni se okoli",
         jump: "skoči za %1 %2 in za %3 %4",
         move1d: "pojdi %1",
         jump1d: "skoči %1",
         changeRobot: "zamenjaj vlogo %1", 
         transport: "%1 predmet",
         sensorBool: "%1 %3 %2",
         sensorBool1D: "%1 %3 %2",
         sensorValue: "%3 %2 %1",
         sensorValue1D: "%3 %2 %1",
         alterValue: "nastavi %3 %2 %1 na %4",
         alterValue1D: "nastavi %3 %2 %1 na %4",
         destroy: "odstrani %1 predmet, ki %3 %2",
         destroy1D: "odstrani %1 predmet, ki %3 %2",
         create: "naredi %1 %2, z %3 %4",
         create1D: "naredi %1 %2, z %3 %4",
         wait: "počakaj",
         nitems: "število predmetov, ki %2 %1",
         sensorRowCol: "%1 predmeta, ki %3 %2",
      },
      code: {
         move: "premakni",
         moveSimple: "premakniPreprosto",
         forward: "naprejZa",
         forwardSimple: "naprej",
         turn: "obrni",
         turnAround: "obrniSeOkoli",
         jump: "skociZa",
         move1d: "pojdiV",
         jump1d: "skoci",
         changeRobot: "zamenjajVlogo", 
         transport: "poberiSpustiPredmet",
         sensorBool: "predmetSmerVrednostKljuc",
         sensorBool1D: "predmetSmerVrednostKljuc1D",
         sensorValue: "vrednostPredmetaKljuc",
         sensorValue1D: "vrednostPredmetaKljuc1D",
         alterValue: "nastaviVrednostPredmetaKljuc",
         alterValue1D: "nastaviVrednostPredmetaKljuc1D",
         destroy: "odstrani",
         destroy1D: "odstrani1D",
         create: "naredi",
         create1D: "naredi1D",
         wait: "pocakaj",
         nitems: "vrniSteviloPredmetovKi",
         sensorRowCol: "vrsticaStolpecPredmetaKljuc",
      },
      description: {								//Opis ukazov
         move: "premakni junaka za N korakov v določeno smer gledano absolutno oz. relativno",
         moveSimple: "premakni junaka za 1 korak v določeno smer gledano absolutno oz. relativno",
         forward: "premakni se naprej za N korakov",
         forwardSimple: "premakni se naprej",
         turn: "obrni se v smer",
         turnAround: "obrni se okoli",
         jump: "skok za N gor/dol in za M desno/levo",
         move1d: "pojdi v levo/desno",
         jump1d: "skoic gor/dol",
         changeRobot: "zamenjaj vlogo junaka", 
         transport: "poberi/spusti predmet",
         sensorBool: "preveri ce ima predmetv smeri vrednost na kljucu",
         sensorBool1D: "preveri ce ima predmetv smeri vrednost na kljucu",
         sensorValue: "vrni vrednost kljuca na predmetu",
         sensorValue1D: "vrni vrednost kljuca na predmetu",
         alterValue: "nastavi vrednost kljuca na predmetu na",
         alterValue1D: "nastavi vrednost kljuca na predmetu na 1D",
         destroy: "odstrani predmet v smeri",
         destroy1D: "odstrani predmet v smeri",
         create: "naredi predmet v smeri z vrednostjo",
         create1D: "naredi predmet v smeri z vrednostjo",
         wait: "pocaka",
         nitems: "vrni število predmetov, ki",
         sensorRowCol: "vrstica/stolpec predmeta s ključem",
      },
      options:{
         robotName0: "Robot", 
         robotName1: "Miha", 
         pick: "poberi",
         drop: "spusti",
         move: {
            north: "severno",
            south: "južno",
            east: "vzhodno",
            west: "zahodno",
            northwest: "severozahodno",
            southwest: "jugozahodno",
            southeast: "jugovzhodno",
            northeast: "severovzhodno",
            up: "gor",
            down: "dol",
            left: "levo",
            right: "desno",
            around: "okoli",
            forward: "naprej",
            forwardLong: "zelo naprej",
            leftforward: "levo naprej",
            leftbackward: "levo nazaj",
            rightforward: "desno naprej",
            rightbackward: "desno nazaj",
         },
         tools: {
            row: "vrstica",
            col: "stolpec",
            forward: "spredaj",
            forwardDown: "spredaj dol",
            under: "spodaj",
            bool: {
               category: 'je',
               notcategory: 'ni',
               robot: 'junak',
               obstacle: 'ovira',
               transportable: 'paket',
               button: 'gumb',
               coin: 'kovanec',
               number: 'številka',
               edge: 'rob',
               has: 'ima',
               colour: 'barvo',
               transOrder: 'številko paketa',
            },
            value: {
               robot: 'junaka',
               obstacle: 'ovire',
               transportable: 'paketa',
               button: 'gumba',
               coin: 'kovanca',
               number: 'številke',
               nonspecific: 'česarkoli',
               colour: 'barva',
               value: 'vrednost',
               transOrder: 'številka paketa',
            },
            alter: {
               colour: 'barvo',
               value: 'vrednost',
               transOrder: 'številko paketa',
            },
            create: {
               colour: "barvo",
               value: "vrednostjo",
               paint: "barvo",
               number: "številko",
               obstacle: "oviro",
            },
            nitems: {
               category: 'so',
               notcategory: 'niso',
               robot: 'junak',
               obstacle: 'ovira',
               transportable: 'paket',
               button: 'gumb',
               coin: 'kovanec',
               number: 'številka',
               has: 'imajo',
               colour: 'barvo',
               transOrder: 'številko paketa',
            },
         },
      },
      messages: {								//Besedila sporočil
         success: "Bravo! ",
         failure: "Ojoj! ",
         itemsExist: "Predmeti so na mreži.",
         itemsDontExist: "Predmetov ni na mreži.",
         itemsCoincide: "Predmeti A in B sovpadajo.",
         itemsDontCoincide: "Predmeti A in B ne sovpadajo.",
         successReachGeenArea: "Bravo dosegel si cilj",
         failureReachGeenArea: "Booooooo, nisi dosegel cilja"
      },
      errors: {
         unknownJump: 'Junak ne zna izvesti takega skoka.',
         obstacle: "Pazi, ovira!",
         leavesGrid: "Pazi, rob mreže!",
         nothingToPickUp: "Ni predmetov, ki bi jih lahko pobral.",
         alreadyTransporting: "Robot že nosi tak predmet.",
         notTransporting: "Robot skuša spustiti predmet, vendar ga ne nosi.",
         robotNotOnGrid: "Piki je na povodcu, sedaj mora voditi Miha!",
         wrongPickOrder: "Robot skuša pobrati napačen predmet!",
         noSuchItemOnCell: "Na tem polju ni takega predmeta!",
         unknownType: "Robot ne pozna tega koncepta!",
         maxMovesReached: "Dosegli ste število dovoljenih potez!",
      },
   },
};


// function for replacing keys inside dictionary
function replaceDict(source, dest) {
   if ((typeof source != "object") || (typeof dest != "object")) {
      return;
   }
   for (var key1 in source) {
      if (dest[key1] != undefined) {
         if (dest[key1] instanceof Array) {
            dest[key1] = dest[key1].concat(source[key1]);
         }
         else if (typeof dest[key1] == "object") {
            replaceDict(source[key1], dest[key1]);
         } else {
            dest[key1] = source[key1];
         }
      }
      else dest[key1] = source[key1];
   }
}


//generatedBlocks
var getContext = function(display, infos) {
	var context = quickAlgoContext(display, infos);
	context.robot = {};
  
   // set language strings
   var strings = localLanguageStrings;

   if (infos.languageStrings != undefined) replaceDict(infos.languageStrings, strings);
   strings = context.setLocalLanguageStrings(strings); // set language
   
	//Funkcija za določanje barv blokov ukazov
	switch (infos.blocklyColourTheme) {
		case "bwinf":
			context.provideBlocklyColours = function() {
				return {
					categories: {
						movement: 260,	//print  	//turtle
						tools: 200,	//read 	//turtleInput
						logic: 100,
						loops: 180,
						math: 230,
						texts: 60,
						lists: 40,
						colour: 20,
						variables: 330,
						functions: 290,
						input: 350,
						tables: 90,
						dicts: 360,
						_default: 500,
					},
					blocks: {
						movement: 260,	//print  	//turtle
						tools: 200,	//read 	//turtleInput
						logic: 100,
						loops: 180,
						math: 230,
						texts: 60,
						lists: 40,
						colour: 20,
						variables: 330,
						functions: 290,
						input: 350,
						tables: 90,
						dicts: 360,
						_default: 500,
					},
				};
			}
			break;
		default:
        // we could set robot specific default colours here, if we wanted to …
	}

   // setup grid
   context.props = {
      cells: [],
      tiles: [],
      colsLabels: [],
      rowsLabels: [],
      scale: 1.,
      paper: undefined,
      // dirToState: [0, 2, 4, 6], // [3, 0, 1, 2];
      // delta: [[0,1],[1,0],[0,-1],[-1,0]],
      delta: [[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1],],
      // dirNames: ["E","S","W","N"],
      dirNames: ["E","SE","S","SW","W","NW","N","NE"],
      reduceDir: [0,0,1,2,2,2,3,0],
   }

   if (infos.leftMargin === undefined) {
      infos.leftMargin = 0;
   }
   if (infos.rightMargin === undefined) {
      infos.rightMargin = 0;
   }
   if (infos.topMargin === undefined) {
      if (infos.showLabels) {
         infos.topMargin = 0;
      } else {
         infos.topMargin = infos.cellSide / 2;
      }
   }
   if (infos.showLabels) {
      infos.leftMargin += infos.cellSide;
      infos.topMargin += infos.cellSide;
   }

	



   // Grid DISPLAY functions ==== DO NOT USE IN BLOCKS!!!!! -----------------------------------------------------
   context.reset = function(gridInfos) {		
      if (gridInfos) {
         this.actionSpeed = gridInfos.actionSpeed;
         this.tiles = gridInfos.tiles;
         this.initItems = gridInfos.initItems;
         this.nbRows = this.tiles.length;
         this.nbCols = this.tiles[0].length;
      }
      this.items = [];
      this.fullTransport = false;
      this.lost = false;
      this.success = false;
      this.nbMoves = infos.maxMoves;
      this.nbCoins = 0;
		this.robotRankInUse = 0;
      this.transporting = []; 
      this.transportingValues = []; 
      for(var i=0; i<infos.numberOfRobots; i++){
         this.transporting.push([]);
         this.transportingValues.push([]);
      }

      if(this.display) {
         this.delayFactory.destroyAll();
         this.raphaelFactory.destroyAll();
         if(this.props.paper !== undefined)
            this.props.paper.remove();
         this.props.paper = this.raphaelFactory.create(
            "paperMain", 
            "grid", 
            Math.round(infos.cellSide * this.nbCols * this.props.scale), 
            Math.round(infos.cellSide * this.nbRows * this.props.scale)
         );
         this.resetBoard();
         this.resetItems();
         this.updateScale();
         $("#nbMoves").html(this.nbMoves);
      }
      else this.resetItems();
   };	
   context.resetBoard = function() {
      for(var iRow = 0;iRow < this.nbRows;iRow++) {
         this.props.cells[iRow] = [];
         this.props.tiles[iRow] = [];
         for(var iCol = 0;iCol < this.nbCols;iCol++) {
            this.props.cells[iRow][iCol] = this.props.paper.rect(0, 0, 10, 10);
            if(this.tiles[iRow][iCol] == 0)
               this.props.cells[iRow][iCol].attr({'stroke-width': '0'});
            else{
               this.props.cells[iRow][iCol].attr({'stroke-width': (infos.border*infos.cellSide).toString()});
               if(infos.backgroundColour)
                  this.props.cells[iRow][iCol].attr({'fill': infos.backgroundColour});  
               if(infos.borderColour )
                  this.props.cells[iRow][iCol].attr({'stroke': infos.borderColour});
            }
            
            if(infos.backgroundTile && this.tiles[iRow][iCol] != 0) {
               this.props.tiles[iRow][iCol] = this.props.paper.image(imgPath+infos.backgroundTile, 0, 0, 10, 10);
            }
            else this.props.tiles[iRow][iCol] = undefined;
         }
      }
      if(infos.showLabels) {
          for(var iRow = 0;iRow < this.nbRows;iRow++) {
             this.props.rowsLabels[iRow] = this.props.paper.text(0, 0, (iRow + 1));
          }
          for(var iCol = 0;iCol < this.nbCols;iCol++) {
             this.props.colsLabels[iCol] = this.props.paper.text(0, 0, (iCol + 1));
          }
      }
   };
   context.resetItems = function() {
      // empty item initialization
		this.items = [];
      // get item type codes
		var itemTypeByNum = {};
      for (var type in infos.itemTypes) {
         var itemType = infos.itemTypes[type];
         if (itemType.num != undefined) {
            itemTypeByNum[itemType.num] = type;
         }
      }
      // reset items on tiles
      for (var iRow = 0; iRow < this.nbRows; iRow++) {
         for (var iCol = 0; iCol < this.nbCols; iCol++) {
            var itemTypeNum = this.tiles[iRow][iCol];
            if (itemTypeByNum[itemTypeNum] != undefined) {
               this.resetItem({	row: iRow,  col: iCol,  type: itemTypeByNum[itemTypeNum]  });
            }
         }
      }
		// reset items in initItems
      for (var iItem = this.initItems.length - 1; iItem >= 0; iItem--) {
         this.resetItem(this.initItems[iItem]);
      }
      
      // check robotRanks
      var robots = this.getItems(undefined, undefined, {category: 'robot'});
      for(var irobot = 0; irobot < robots.length; irobot++){
         var item = robots[irobot];
         if(!("rank" in item)){
            for (var ir = 0; ir < infos.numberOfRobots; ir++) {
               var robotsWithRank = this.getItems(undefined, undefined, {category: 'robot', rank: ir});
               if(robotsWithRank.length == 0) {
                  item.rank = ir;
               }
            }
         }
         else{
            var robotsWithRank = this.getItems(undefined, undefined, {category: 'robot', rank: item.rank});
            if(robotsWithRank.length > 1){
               throw("ERROR: only one robot can have the same rank!");
            }
         }
      }
   };
   context.unload = function() {
      if (this.display) {
         if (this.props.paper != null) {
            this.props.paper.remove();
         }
      }
   };
   context.updateScale = function() {
      if (!this.display) {
         return;
      }
      if (this.props.paper == undefined) {
         return;
      }

      var newCellSide = 0;
      if(window.quickAlgoResponsive) {
         var areaWidth = Math.max(200, $('#grid').width()-24);
         var areaHeight = Math.max(150, $('#grid').height()-24);
      } else {
         var areaWidth = 400;
         var areaHeight = 600;
      }
      if (this.nbCols && this.nbRows) {
         var marginAsCols = (infos.leftMargin + infos.rightMargin) / infos.cellSide;
         var marginAsRows = (infos.topMargin + infos.rightMargin) / infos.cellSide;
         newCellSide = Math.min(
            infos.cellSide, Math.min(
               areaWidth / (this.nbCols + marginAsCols), 
               areaHeight / (this.nbRows + marginAsRows)
            )
         );
      }

      this.props.scale = newCellSide / infos.cellSide;
      var roundLeftMargin = Math.round(infos.leftMargin * this.props.scale);
      var roundTopMargin = Math.round(infos.topMargin * this.props.scale);
      var roundCellSide = Math.round(infos.cellSide * this.props.scale);
      var db = Math.round(infos.cellSide * infos.border * this.props.scale); // for borders

      this.props.paper.setSize( roundCellSide * this.nbCols + roundLeftMargin, roundCellSide * this.nbRows + roundTopMargin );
      for (var iRow = 0; iRow < this.nbRows; iRow++) {
         for (var iCol = 0; iCol < this.nbCols; iCol++) {
            if (this.props.cells[iRow][iCol] != undefined) {
               var x = roundCellSide * iCol + roundLeftMargin;
               var y = roundCellSide * iRow + roundTopMargin;
               this.props.cells[iRow][iCol].attr({
                  x: x, 
                  y: y, 
                  width: roundCellSide, 
                  height: roundCellSide
               });
            }
            if (this.props.tiles[iRow][iCol] != undefined) {
               var x = roundCellSide * iCol + roundLeftMargin;
               var y = roundCellSide * iRow + roundTopMargin;
               this.props.tiles[iRow][iCol].attr({
                  x: x + db/2, 
                  y: y + db/2, 
                  width: roundCellSide-db, 
                  height: roundCellSide-db
               });
            }
         }
      }
      if (infos.showLabels) {
         for (var iRow = 0; iRow < this.nbRows; iRow++) {
            var x = roundLeftMargin - roundCellSide / 2;
            var y = roundCellSide * (iRow + 0.5) + roundTopMargin;
            this.props.rowsLabels[iRow].attr({x: x, y: y}).attr({"font-size": roundCellSide / 2});
         }
         for (var iCol = 0; iCol < this.nbCols; iCol++) {
            var x = roundCellSide * iCol + roundLeftMargin + roundCellSide / 2;
            var y = roundTopMargin - roundCellSide / 2;
            this.props.colsLabels[iCol].attr({x: x, y: y}).attr({"font-size": roundCellSide / 2});
         }
      }
      for (var iItem = 0; iItem < this.items.length; iItem++) {
         var item = this.items[iItem];
         this.redisplayItem(item);
         item.element.attr(this.itemAttributes(item));
      }
   };


   // BACKEND functions for blocks -------------------------------------------------------------------  
   context.resetItem = function(initItem) {
      // reset item and add it to context.items based on function call parameteres
      var item = {};
      this.items.push(item);
      // pass on properties from function call { row:, col:, type: }
      for (var property in initItem) {
         item[property] = initItem[property];
      }
      this.resetProperties(item);
      
      if (!("offsetX" in item)) item.offsetX = 0;
      if (!("offsetY" in item)) item.offsetY = 0;
      if (!("nbStates" in item)) item.nbStates = 1;
      if (!("zOrder" in item)) item.zOrder = 0;

      if (this.display) {
         this.redisplayItem(item);
      }
   };
   context.resetProperties = function(item, updateOnly=false){
      var itemType = infos.itemTypes[item.type];
      if(!("value" in item)){
         if(itemType.value != undefined) item.value = itemType.undefined;
         else item.value = 0;
      }

      if(itemType != undefined){
         for (var key in itemType) {
            if(!(updateOnly) && !(key in item)){
               if( itemType[key] instanceof Array ){
                  item[key] = itemType[key][ (item.value)%itemType[key].length ];
               }
               else{
                  item[key] = itemType[key];
               }
            }
            else{ // update only
               if( itemType[key] instanceof Array ){
                  item[key] = itemType[key][ (item.value)%itemType[key].length ];
               }
            }
         }
      }
      else{
         console.log("Error: ", itemType, item);
         alert("ERROR: item type is not defined!");
      }

      // set default values
      if(!("side" in item)){
         item.side = infos.cellSide
      }
   };
   context.resetItemsZOrder = function(row, col) {
      var cellItems = this.getItems(row, col, {}, {});
      cellItems.sort(function(itemA, itemB) {
         if (itemA.zOrder < itemB.zOrder) {
            return -1;
         }
         if (itemA.zOrder == itemB.zOrder) {
            return 0;
         }
         return 1;
      });
      
      for (var iItem = 0; iItem < cellItems.length; iItem++) { //robot on cell is implicitly included
         if(cellItems[iItem].element != undefined){
            try{
               cellItems[iItem].element.toFront();
            }
            catch(err){
               console.log("rZOrder: ", err, cellItems[iItem].type, cellItems[iItem].element, Object.keys(cellItems[iItem]));
            }
         }
      }
   };
   context.redisplayItem = function(item) {
      if (item.element != null) {
         item.element.remove();
      }

      this.resetProperties(item, updateOnly=true);
      var roundLeftMargin = Math.round(infos.leftMargin * this.props.scale);
      var roundTopMargin = Math.round(infos.topMargin * this.props.scale);
      var roundCellSide = Math.round(infos.cellSide * this.props.scale);
      var roundItemSide = Math.round(item.side * this.props.scale);
      
      var x = roundCellSide * item.col + roundLeftMargin;
      var y = roundCellSide * item.row + roundTopMargin;
      
      if (item.img != undefined) {
         item.element = this.props.paper.image(
            imgPath+item.img, 
            x, y, 
            roundItemSide * item.nbStates, 
            roundItemSide
         );
      }
      else if (item.colour != undefined) {
         item.element = this.props.paper.rect(
            x, y, 
            roundItemSide,
            roundItemSide,
            8,
         ).attr({'fill': item.colour});
      }
      else if (item.value != undefined) {
         item.element = this.props.paper.text(
            x + roundItemSide / 2, 
            y + roundItemSide / 2, 
            item.value
         ).attr({"font-size": roundItemSide / 2});
      }
      else{
         throw("ERROR: item cannot be displayed!");
      }
      item.element.attr(this.itemAttributes(item));
      this.resetItemsZOrder(item.row, item.col);
   };	
   context.itemAttributes = function(item) {
      var roundLeftMargin = Math.round(infos.leftMargin * this.props.scale);
      var roundTopMargin = Math.round(infos.topMargin * this.props.scale);
      var roundCellSide = Math.round(infos.cellSide * this.props.scale);
      var roundItemSide = Math.round(item.side * this.props.scale);
      var roundItemOffsetX = Math.round((item.offsetX) * this.props.scale);
      var roundItemOffsetY = Math.round((item.offsetY) * this.props.scale);
      var db = Math.round(infos.cellSide * infos.border * this.props.scale); // for borders

      var x = roundCellSide * item.col + roundItemOffsetX + roundLeftMargin;
      var y = roundCellSide * item.row - (roundItemSide - roundCellSide) + roundItemOffsetY + roundTopMargin;
      if (!item.img && !item.colour) {
         x += roundItemSide / 2;
         y += roundItemSide / 2;
      }

      
      if (item.dir != undefined) {
         var xClip = x;
         if(item.nbStates == 4){ // FUTURE test, dont know if it works??
            x = x - ( this.props.reduceDir[item.dir] * roundItemSide);
         }
         else if(item.nbStates > 1) x = x - (item.dir * roundItemSide);
         // clipping image to display only one robot direction profile!
         var clipRect = "" + xClip + "," + y + "," + roundItemSide + "," + roundItemSide;
         return {
            x: x+db/2, 
            y: y+db/2, 
            width: roundItemSide * item.nbStates-db,
            height: roundItemSide-db,
            "clip-rect": clipRect
         };
      }
      else{
         return {
            x: x+db/2, 
            y: y+db/2, 
            width: roundItemSide-db,
            height: roundItemSide-db,
         };
      }
   };
   context.getItems = function(row, col, filters, negfilters, includeTrans=false) {
      var listItems = [];
      var itemsToCheck = this.items;
      if(includeTrans){
         for(var i=0; i<infos.numberOfRobots; i++){
            itemsToCheck = itemsToCheck.concat(this.transporting[i]); 
            itemsToCheck = itemsToCheck.concat(this.transportingValues[i]);
         }
      }
      for (var iItem = 0; iItem < itemsToCheck.length; iItem++) {
         var item = itemsToCheck[iItem];
         if ((row == undefined && col == undefined) || ((row == undefined) && (item.col == col)) || ((item.row == row) && (col == undefined))|| ((item.row == row) && (item.col == col))) {
            var accepted = true;
            // has to have these filters
            for (var property in filters) {
               var value = filters[property];
               // if filter value is defined, but items value is not
               if ((item[property] == undefined) && (value != undefined)) {
                  accepted = false;
                  break;
               }
               // if filter value is defined, and is different from items value
               if ((item[property] != undefined) && (value != undefined)) {
                  if(item[property] instanceof Object){ // important for multiple categories
                     if(!(value in item[property]) || !(item[property][value])){
                        accepted = false;
                        break;
                     }
                  }
                  else if (item[property] != value){
                     accepted = false;
                     break;
                  }
               }
               // if filter value is undefined, and item doesnt have this property
               if ((value == undefined) && (!(property in item)) ) {
                  accepted = false;
                  break;
               }
            }
            
            if(accepted){
               // must NOT have these filters!!
               for (var property in negfilters) {
                  var value = negfilters[property];
                  // if value is not defined and item has this property
                  if ((property in item) && (value == undefined)) {
                     accepted = false;
                     break;
                  }
                  // if value is defined and item value is as well
                  if ((value != undefined) && (item[property] != undefined)) {
                     // check if they are the same
                     if(item[property] instanceof Object){ // important for multiple categories
                        if((value in item[property]) && item[property][value]){
                           accepted = false;
                           break;
                        }
                     }
                     if(item[property] == value){
                        accepted = false;
                        break;
                     }
                  }
               }
            }
            
            if (accepted) {
               item.index = iItem;
               listItems.push(item);
            }
         }
      }
      return listItems;
   };
   context.moveRobot = function(newRow, newCol, newDir, prevTime=0., factor=1., countMoves=true) {
      if(this.nbMoves != undefined){
         if (this.nbMoves<=0) throw(strings.errors.maxMovesReached);
         else if(countMoves) this.nbMoves--;
      }

      var iRobot = this.robotRankInUse;
      var robot = this.getItems(undefined, undefined, {category: 'robot', rank: this.robotRankInUse}).pop();

      // check of tile is prohibited
      var crash = this.checkTileProhibited(newRow, newCol);
      if (crash) {
         factor *= 10;
         if(robot.row > newRow) newRow += 3/4;
         else if(robot.row < newRow) newRow -= 3/4;
         if(robot.col > newCol) newCol += 3/4;
         else if(robot.col < newCol) newCol -= 3/4;
      }

      var changeLoc = (robot.row != newRow) || (robot.col != newCol)
      var changeDir = (robot.dir != newDir)

      // If the robot turns and moves at the sime time, we do an instant turn (for now).
      if (changeDir && changeLoc) {
         robot.dir = newDir;
         if (this.display) {
            attr = this.itemAttributes(robot);
            robot.element.attr(attr);
         }
      }

      var path = Math.sqrt(Math.pow(robot.row-newRow,2) + Math.pow(robot.col-newCol,2));
      var currTime = path * factor;
		robot.dir = newDir;
		robot.row = newRow;
		robot.col = newCol;
      
   
      var attr = this.itemAttributes(robot);
      if (changeLoc || changeDir) {
         // ***** define animation!! THIS FINALY WORKS SMOOTHLY
         if (this.display) {
            var name = "animRobot" + iRobot + "_" + Math.random();   // Do we need this randoms?? FUTURE
            var animName = '' + name + Math.random();
            this.raphaelFactory.animations[animName] = robot.element;
            this.raphaelFactory.animationNames[name] = animName;            
            // Raphael.animation(params, ms, [easing], [callback])
            var sAnimation = Raphael.animation(attr, infos.actionDelay * currTime);
            this.raphaelFactory.animations[animName].animate( sAnimation.delay(infos.actionDelay * prevTime) );
            // this is neceasery!
            robot.element.attr(attr); 
            if(crash) throw crash;
         }

         // ****** activate buttons
         if (changeLoc){
            var buttons = this.getItems(newRow, newCol, {category: 'button'});
            for(var ib = 0; ib < buttons.length; ib++) {
               var button = buttons[ib];
               var triggered = this.getItems(undefined, undefined, {id: button.id});
               var imgs = [];
               var colourIt = [];
               var numberIt = [];
               for(var it = 0; it < triggered.length; it++) {
                  triggered[it].value += 1;
                  this.resetProperties(triggered[it], updateOnly=true);
                  imgs.push(triggered[it].img);
                  colourIt.push(triggered[it].colour);
                  numberIt.push(triggered[it].value);
               }

               var triggerFunction = function(triggered, imgs){
                  for(var it = 0; it < triggered.length; it++) {
                     var trigItem = triggered[it];
                     if(context.display){
                        if(imgs[it] != undefined) trigItem.element.attr("src", imgPath+imgs[it]);
                        else if(colourIt[it] != undefined) trigItem.element.attr("fill", colourIt[it]);
                        else if(numberIt[it] != undefined) trigItem.element.attr("text", numberIt[it]);
                        // this.redisplayItem(trigItem); // FUTURE this would be better in some cases??
                     }
                  }
               }

               if (this.display) this.delayFactory.createTimeout("changeItems" + iRobot + "_" + Math.random(), ()=>{triggerFunction(triggered, imgs)}, infos.actionDelay * (currTime + prevTime));
               else triggerFunction(triggered);
            }
         }

         // ***** clear coins
         var coins = this.getItems(newRow, newCol, {category: 'coin'});
         if (coins.length > 0) {
            for(var c of coins){
               if(c.battery != undefined) this.nbMoves += c.battery;
            }
            this.destroyItems( coins, false );
            this.nbCoins += coins.length;
            var coinFunction = function(coins){
               for (var ic = coins.length-1; ic >= 0; ic--) coins[ic].element.remove();
            }
            if (this.display)
               this.delayFactory.createTimeout("removeItems" + iRobot + "_" + Math.random(), ()=>{coinFunction(coins)}, infos.actionDelay * (currTime + prevTime));
         }

         // update html
         if (this.display){
            var htmlFunction = function(currNbCoins, currNbMoves){
               $("#nbMoves").html(currNbMoves);
               $("#nbCoins").html(currNbCoins);
            }
            this.delayFactory.createTimeout("updateHtml" + iRobot + "_" + Math.random(), ()=>{htmlFunction(this.nbMoves, this.nbCoins)}, infos.actionDelay * prevTime);
         }
      }

      // check for falling in gravity, if not jumping
      if (infos.hasGravity) {
         // check if tile under is obstacle to stand on
         var obstacles = this.getItems(newRow+1, newCol, {category: 'obstacle'});
         if(obstacles.length == 0){
            currTime += this.moveRobot(newRow+1, newCol, newDir, prevTime=prevTime+currTime, factor=0.5, countMoves=false);
         }
      }

      return currTime;
   };
   context.checkTileProhibited = function(row, col) {
      var obstacles = this.getItems(row, col, {category: 'obstacle'});
      if (infos.ignoreInvalidMoves) {
         return false;
      }
      else if (this.isOutsideGrid(row, col) || (this.tiles[row][col] == 0)) {
         return this.strings.errors.leavesGrid;
      }
      else if (obstacles.length > 0) {
         return this.strings.errors.obstacle;
      }
      else{
         return false;
      }
   };
   context.isOutsideGrid = function(row, col) {
      return ((col < 0) || (row < 0) || (col >= this.nbCols) || (row >= this.nbRows));
   };
   context.destroyItems = function(listItems, remove=true) {
      listItems.sort(function(itemA, itemB) {
         if (itemA.index < itemB.index) return -1;
         if (itemA.index > itemB.index) return 1;
         return 0;
      });
      for (var iItem = listItems.length-1; iItem >= 0; iItem--) {
         if (this.display && remove) listItems[iItem].element.remove();      
         this.items.splice(listItems[iItem].index, 1);
      }
   };
   context.dirHelper = function(robot, dDir){
      var newDir;
      if(dDir == 'under') newDir = -1;
      else if(dDir == 'up') newDir = 6;
      else if(dDir == 'down') newDir = 2;
      else if(dDir == 'forwardDown' && robot.dir == 0) newDir = 1;
      else if(dDir == 'forwardDown' && robot.dir == 4) newDir = 3;
      else{  
         dDir = robot.dir+parseInt(dDir);
         if (dDir < 0){
            dDir = 8-((-1)*dDir)%8;
         }
         var newDir = dDir%8;
      }

      var dRow, dCol;
      if(newDir == -1) dRow = dCol = 0;
      else{
         var dRow = this.props.delta[newDir][0];
         var dCol = this.props.delta[newDir][1];
      }
      var row = robot.row+dRow;
      var col = robot.col+dCol;
      console.log(row, col, this.nbRows, this.nbCols);
      if (row < 0 || row >= this.nbRows || col < 0 || col >= this.nbCols) {
         throw(strings.errors.leavesGrid);
      }
      return { row, col };
   };
   context.filterHelper = function(row, col, key, value, edgeSwitch=false){
      var filters = {};
      var items;
      if(value.includes("category")){
         if(key == "edge" && edgeSwitch){
            if(value.includes("not")) this.callCallback(callback, !(this.tiles[row][col] == undefined));
            else this.callCallback(callback, (this.tiles[row][col] == undefined));
            return;
         }
         else{
            if(value.includes("not")) items = this.getItems(row, col, {}, {category: key});
            else items = this.getItems(row, col, {category: key});
         }
      }
      else{
         if(value == "undefined") value = undefined; 
         filters[key] = value;
         var items = this.getItems(row, col, filters);
      }
      return items;
   };
   // override
   context.waitDelay = function(callback, value=undefined, delay=infos.actionDelay) {
      // Call the callback with value after actionDelay
      if(this.runner) {
         this.runner.waitDelay(callback, value, delay);
      } else {
         // When a function is used outside of an execution
         setTimeout(function () { callback(value); }, delay);
      }
   };


	
   // BLOCKS functions --------------------------------------------------------------
   context.robot.move = function(dir, amount, callback) {
      var newDir = context.props.dirNames.indexOf(dir);
      var robot = context.getItems(undefined, undefined, {category: 'robot', rank: context.robotRankInUse}).pop();
      var dRow = context.props.delta[newDir][0];
      var dCol = context.props.delta[newDir][1];
      var prevTime = 0;

      var sign = 1;
      if(amount < 0){
         sign = -1;
         amount = -amount;
      }
      for(var i=0; i<amount; i++){
         prevTime += context.moveRobot(robot.row+sign*dRow, robot.col+sign*dCol, newDir, prevTime=prevTime);
      }
      
      context.waitDelay(callback, undefined, infos.actionDelay * prevTime);
   };
   context.robot.forward = function(amount, callback) {
      var robot = context.getItems(undefined, undefined, {category: 'robot', rank: context.robotRankInUse}).pop();
      var dRow = context.props.delta[robot.dir][0];
      var dCol = context.props.delta[robot.dir][1];
      var prevTime = 0;
      
      var sign = 1;
      if(amount < 0){
         sign = -1;
         amount = -amount;
      }
      for(var i=0; i<amount; i++){
         prevTime += context.moveRobot(robot.row+sign*dRow, robot.col+sign*dCol, robot.dir, prevTime=prevTime);
         context.nbMoves++;
      }
      context.waitDelay(callback, undefined, infos.actionDelay * prevTime);
   };
   context.robot.turn = function(dDir, callback) {
      var robot = context.getItems(undefined, undefined, {category: 'robot', rank: context.robotRankInUse}).pop();
      dDir = robot.dir+parseInt(dDir);
      if (dDir < 0){
         dDir = 8-((-1)*dDir)%8;
      }
      context.moveRobot(robot.row, robot.col, dDir%8 );
      context.nbMoves++;
      context.waitDelay(callback, undefined, infos.actionDelay/2);
   };
	context.robot.changeRobot = function(status, callback) {
      var robots = context.getItems(undefined, undefined, {category: 'robot', type: status});
      if(robots.length > 0) {
         context.robotRankInUse = robots[0].rank;
         if(context.display) robots[0].element.toFront(); 
      }
		else throw(strings.errors.robotNotOnGrid);
		context.waitDelay(callback);
	};
   context.robot.jump = function(up, upsign, right, rightsign, callback) {
      var robot = context.getItems(undefined, undefined, {category: 'robot', rank: context.robotRankInUse}).pop();
      var newDir = robot.dir;
      if(up == 0){ upsign = 0; }
      if(right == 0){ rightsign = 0; }
      if (!infos.hasGravity){
         for(var k = 0; k < context.props.delta.length; k++){
            if(context.props.delta[k][0] == upsign && context.props.delta[k][1] == rightsign){
               newDir = k;
               break
            }
         }
      }
      else{
         for(var k = 0; k < context.props.delta.length; k++){
            if(context.props.delta[k][0] == 0 && context.props.delta[k][1] == rightsign){
               newDir = k;
               break
            }
         }
      }
     
      var time = context.moveRobot(robot.row+upsign*up, robot.col+rightsign*right, newDir, prevTime=0., factor=0.5);
      context.nbMoves++;
      context.waitDelay(callback, undefined, infos.actionDelay * time);
   };
   context.robot.jump1d = function(mode, callback) {
      var robot = context.getItems(undefined, undefined, {category: 'robot', rank: context.robotRankInUse}).pop();
      var time = 0;
      var sign = context.props.delta[robot.dir][1];
      if(mode == 'up'){
         time = context.moveRobot(robot.row-2, robot.col, robot.dir, prevTime=0., factor=0.5);
      }
      else if(mode == 'down'){
         time = context.moveRobot(robot.row+2, robot.col, robot.dir, prevTime=0., factor=0.5);
      }
      else if(mode == 'forward'){
         time = context.moveRobot(robot.row-1, robot.col+sign, robot.dir, prevTime=0., factor=0.5);
      }
      else if(mode == 'forwardLong'){
         time = context.moveRobot(robot.row-1, robot.col+2*sign, robot.dir, prevTime=0., factor=0.5);
      }
      else{
         throw(strings.errors.unknownJump);
      }

      context.nbMoves++;
      context.waitDelay(callback, undefined, infos.actionDelay * time);
   };
   context.robot.transport = function(mode, callback) {
		var robot = context.getItems(undefined, undefined, {category: 'robot', rank: context.robotRankInUse}).pop();
      
      if(mode == 'pick'){
         // robot can't pick himself up, exclude himself!
         var transportables = context.getItems(robot.row, robot.col, {category: 'transportable'}, {rank: context.robotRankInUse}); 
         if (transportables.length == 0) {
            throw(strings.errors.nothingToPickUp);
         }

         var transItem = transportables.pop();
         if (!("transOrder" in transItem)) {
            context.items.splice(transItem.index, 1);
            transItem.row = undefined;
            transItem.col = undefined;
            context.transporting[robot.rank].push( transItem );
         }
         else if(context.transportingValues[robot.rank].length-1 >= transItem.transOrder){
            throw(strings.errors.alreadyTransporting);
         }
         else if(context.transportingValues[robot.rank].length < transItem.transOrder){
            throw(strings.errors.wrongPickOrder);
         }
         else {
            context.items.splice(transItem.index, 1);
            transItem.row = undefined;
            transItem.col = undefined;
            context.transportingValues[robot.rank].push( transItem );
         }  

         // context.waitDelay(function() {
         //    if (context.display) {
         //       transItem.element.remove();
         //    }
         //    callback();
         // });
         context.waitDelay(function() {
            // CUSTOM: trigger robot if it picks!!
            if("transOrder" in transItem){
               robot.value += 1;
               if (context.display) context.redisplayItem(robot);
            }
            if (context.display) transItem.element.remove();
            callback();
         });
         return;
      }
      else if(mode == 'drop'){
         if(context.transportingValues[robot.rank].length > 0){
            var dropItem = context.transportingValues[robot.rank].pop();
         }
         else if(context.transporting[robot.rank].length > 0){
            var dropItem = context.transporting[robot.rank].pop();
         }
         else{
            throw(strings.errors.notTransporting);
         }
         
         // context.waitDelay(function() { //original
         //    context.items.push(dropItem);
         //    dropItem.row = robot.row;
         //    dropItem.col = robot.col;
         //    if (context.display) {
         //       context.redisplayItem(dropItem);
         //    }
         //    callback();
         // });
         context.waitDelay(function() {
            context.items.push(dropItem);
            dropItem.row = robot.row;
            dropItem.col = robot.col;
            if (context.display) context.redisplayItem(dropItem);
            // CUSTOM: trigger robot if it drops!!
            if("transOrder" in dropItem){
               robot.value -= 1;
               if (context.display){
                  context.redisplayItem(robot);
               }
            }
            callback();
         });
      }
	};
   context.robot.sensorBool = function(dDir, key, value, callback) {
      var robot = context.getItems(undefined, undefined, {category: 'robot', rank: context.robotRankInUse}).pop();
      var {row, col} = context.dirHelper(robot, dDir);

      var not = false;
      if(value.includes("not")){
         value = value.replace("not", "");
         not = true;
      }
      var items = context.filterHelper(row, col, key, value, edgeSwitch=true);
      // console.log("sensorBool: ", items);
      if (not) context.callCallback(callback, (items.length == 0));
      else context.callCallback(callback, (items.length != 0));
   };
   context.robot.sensorValue = function(dDir, category, key, callback) {
      var robot = context.getItems(undefined, undefined, {category: 'robot', rank: context.robotRankInUse}).pop();
      var {row, col} = context.dirHelper(robot, dDir);
      
      var filters = {};
      if(!(category == 'nonspecific')) filters["category"] = category;
      filters[key] = undefined;

      var items = context.getItems(row, col, filters);
      if(items.length > 0){
         var item = items.pop();
         if(item == robot) var item = items.pop();
         context.callCallback(callback, item[key]);
      }
      else {
         throw(strings.errors.noSuchItemOnCell); 
      }
   };
   context.robot.alterValue = function(dDir, category, key, value, callback) {
      var robot = context.getItems(undefined, undefined, {category: 'robot', rank: context.robotRankInUse}).pop();
      var {row, col} = context.dirHelper(robot, dDir);
      
      var filters = {};
      if(!(category == 'nonspecific')){
         filters["category"] = category;
      }
      filters[key] = undefined;
      var items = context.getItems(row, col, filters);
      if(items.length > 0){
         var item = items.pop();
         if((item != robot) || (items.length > 0)){
            if(item == robot) item = items.pop();
            item[key] = value;
            
            context.resetProperties(item, updateOnly=true);
            if(context.display){
               // trigItem.element.attr("src", imgPath+item.img);
               context.redisplayItem(item);
               context.redisplayItem(robot);
            }
         }
      }
      else {
         throw(strings.errors.noSuchItemOnCell); 
      }
      context.waitDelay(callback);
   };
   context.robot.destroy = function(dDir, key, value, callback){
      var robot = context.getItems(undefined, undefined, {category: 'robot', rank: context.robotRankInUse}).pop();
      var {row, col} = context.dirHelper(robot, dDir);
      
      var items = context.filterHelper(row, col, key, value);
      if(items.length > 0) context.destroyItems([items.pop()]);
      else throw(strings.errors.noSuchItemOnCell); 
      
      var time = 0;
      if (infos.hasGravity) time = context.moveRobot(robot.row, robot.col, robot.dir, countMoves=false); // if robot destroy platform underneath itself
      context.waitDelay(callback, undefined, infos.actionDelay * time);
   };
   context.robot.create = function(dDir, type, key, value, callback){
      var robot = context.getItems(undefined, undefined, {category: 'robot', rank: context.robotRankInUse}).pop();
      var {row, col} = context.dirHelper(robot, dDir);
      
      if(!(type in infos.itemTypes)) throw(strings.errors.unknownType);
      var newItem = {row: row, col: col, type: type};
      if( context.getItems(row, col, {category: 'obstacle'}).length > 0 ) throw(context.strings.errors.obstacle);
      newItem[key] = value;
      context.resetProperties(newItem);

      if (context.display && infos.actionDelay > 0) {
         context.delayFactory.createTimeout("addItem" + "_" + Math.random(), function() {
            context.resetItem(newItem);
            if ((robot.col != newItem.col) || (robot.row != newItem.row)) context.resetItemsZOrder(robot.row, robot.col);
         }, infos.actionDelay / 2);
      } 
      else{
         context.resetItem(newItem);
      }
      context.waitDelay(callback);
   };
   context.robot.wait = function(callback) {
      context.waitDelay(callback);
   };
   context.robot.nitems = function(key, value, callback) {
      var items = context.filterHelper(undefined, undefined, key, value);
      context.callCallback(callback, items.length);
   };
   context.robot.sensorRowCol = function(rowCol, key, value, callback) {
      var items = context.filterHelper(undefined, undefined, key, value);
      if(items.length > 0 ) context.callCallback(callback, items.pop()[rowCol]);
      else throw(strings.errors.noSuchItemOnCell);
   };


   /* structure is as follows:
      {
         group: [{
            name: "someName",
            category: "categoryName",
            // yieldsValue: optional true: Makes a block with return value rather than simple command
            // params: optional array of parameter types. The value 'null' denotes /any/ type. For specific types, see the Blockly documentation ([1,2])
            // handler: optional handler function. Otherwise the function context.group.someName will be used
            // blocklyJson: optional Blockly JSON objects
            // blocklyInit: optional function for Blockly.Blocks[name].init
            //   if not defined, it will be defined to call 'this.jsonInit(blocklyJson);
            // blocklyXml: optional Blockly xml string
            // codeGenerators: optional object:
            //   { Python: function that generates Python code
            //     JavaScript: function that generates JS code
            //   }
         }]
      }
      [1] https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks
      [2] https://developers.google.com/blockly/guides/create-custom-blocks/type-checks
   */

   // BLOCKs visual definition --------------------
   context.customBlocks = {
      robot: {
         movement: [
            {  name: "changeRobot", //custom MULTIROBOT
               blocklyJson: {
                  "args0": [
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_0", 
                        "options": [
                           [strings["options"]["robotName0"], 'robot0'],
                           [strings["options"]["robotName1"], 'robot1'],
                        ],
                     }
                  ],
               }, 
            },
            {  name: "moveSimple", 
               handler: (dir, callback) => { context.robot.move(dir, 1, callback) },
               blocklyJson: {
                  "args0": [
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_0", 
                        "options": [
                           [strings["options"]["move"]["north"], "N"],
                           [strings["options"]["move"]["east"], "E"],
                           [strings["options"]["move"]["south"], "S"],
                           [strings["options"]["move"]["west"], "W"],
                        ],
                     },
                  ],
               },
            },
            {  name: "move", 
               params: ["String","Number"],
               blocklyJson: {
                  "args0": [
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_0", 
                        "options": [
                           [strings["options"]["move"]["north"], "N"],
                           [strings["options"]["move"]["northeast"], "NE"],
                           [strings["options"]["move"]["east"], "E"],
                           [strings["options"]["move"]["southeast"], "SE"],
                           [strings["options"]["move"]["south"], "S"],
                           [strings["options"]["move"]["southwest"], "SW"],
                           [strings["options"]["move"]["west"], "W"],
                           [strings["options"]["move"]["northwest"], "NW"],
                        ],
                     },
                     {
                        "type": "input_value", 
                        "name": "PARAM_1", 
                        "value": 1,
                        "check": "Number",
                     },
                  ],
               },
               blocklyXml: `
                  <block type="move">
                     <field name="PARAM_0">W</field>
                     <value name="PARAM_1">
                        <shadow type="math_number">
                           <field name="NUM">1</field>
                        </shadow>
                     </value>
                  </block>
               `,
            },
            {  name: "forward", 
               params: ["Number"],
               blocklyJson: {
                  "args0": [
                     {
                        "type": "input_value", 
                        "name": "PARAM_0", 
                        "value": 1,
                        "check": "Number",
                     },
                  ],
               },
               blocklyXml: `
                  <block type="forward">
                     <value name="PARAM_0">
                        <shadow type="math_number">
                           <field name="NUM">1</field>
                        </shadow>
                     </value>
                  </block>
               `,
            },
            {  name: "forwardSimple", 
               handler: (callback) => { context.robot.forward(1, callback) },
            },
            {  name: "turn", 
               params: ["Number"],
               blocklyJson: {
                  "args0": [
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_0", 
                        "options": [
                           [strings["options"]["move"]["right"], "2"],
                           [strings["options"]["move"]["left"], "-2"],
                           [strings["options"]["move"]["around"], "4"],
                           [strings["options"]["move"]["rightforward"], "1"],
                           [strings["options"]["move"]["rightbackward"], "3"],
                           [strings["options"]["move"]["leftforward"], "-1"],
                           [strings["options"]["move"]["leftbackward"], "-3"],
                        ],
                     },
                  ],
               },
            },
            {  name: "turnAround",
               handler: (callback) => { context.robot.turn("4", callback) },
            },
            {  name: "jump",
               params: ["Number","Number","Number","Number"],
               blocklyJson: {
                  "args0": [
                     {
                        "type": "input_value", 
                        "name": "PARAM_0", 
                        "value": 1,
                        "check": "Number",
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_1", 
                        "options": [
                           [strings["options"]["move"]["up"], "-1"],
                           [strings["options"]["move"]["down"], "1"],
                        ],
                     },
                     {
                        "type": "input_value", 
                        "name": "PARAM_2", 
                        "value": 1,
                        "check": "Number",
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_3", 
                        "options": [
                           [strings["options"]["move"]["right"], "1"],
                           [strings["options"]["move"]["left"], "-1"],
                        ],
                     },
                  ],
               }, 
               blocklyXml: `
                  <block type="jump">
                     <field name="PARAM_1">-1</field>
                     <field name="PARAM_3">1</field>
                     <value name="PARAM_0">
                        <shadow type="math_number">
                           <field name="NUM">1</field>
                        </shadow>
                     </value>
                     <value name="PARAM_2">
                        <shadow type="math_number">
                           <field name="NUM">1</field>
                        </shadow>
                     </value>
                  </block>
               `,
            },
            {  name: "move1d",
               handler: (dir, callback) => { context.robot.move(dir, 1, callback) },
               blocklyJson: {
                  "args0": [
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_0", 
                        "options": [
                           [strings["options"]["move"]["right"], "E"],
                           [strings["options"]["move"]["left"], "W"],
                        ],
                        "check":"String",
                     },
                  ],
               },
            },
            {  name: "jump1d",
               blocklyJson: {
                  "args0": [
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_0", 
                        "options": [
                           [strings["options"]["move"]["up"], "up"],
                           [strings["options"]["move"]["down"], "down"],
                           [strings["options"]["move"]["forward"], "forward"],
                           [strings["options"]["move"]["forwardLong"], "forwardLong"],
                        ],
                        "check":"String",
                     },
                  ],
               },
            },
            { name: "wait" },
         ],
         tools: [
            {  name: "transport",
               blocklyJson: {
                  "args0": [
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_0", 
                        "options": [
                           [strings["options"]["pick"], "pick"],
                           [strings["options"]["drop"], "drop"],
                        ],
                        "check":"String",
                     },
                  ],
               },
            },
            {  name: "sensorBool", 
               yieldsValue: true,
               blocklyJson: {
                  "args0": [
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_0", 
                        "options": [
                           [strings["options"]["tools"]["under"], "under"], // special case handling
                           [strings["options"]["tools"]["forward"], "0"],
                           [strings["options"]["move"]["right"], "2"],
                           [strings["options"]["move"]["left"], "-2"],
                           [strings["options"]["move"]["around"], "4"],
                        ],
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_1", 
                        "options": [
                           [strings["options"]["tools"]["bool"]["obstacle"], "obstacle"],
                           [strings["options"]["tools"]["bool"]["transportable"], "transportable"],
                           [strings["options"]["tools"]["bool"]["robot"], "robot"],
                           [strings["options"]["tools"]["bool"]["coin"], "coin"],
                           [strings["options"]["tools"]["bool"]["button"], "button"],
                           [strings["options"]["tools"]["bool"]["number"], "number"],
                           [strings["options"]["tools"]["bool"]["edge"], "edge"],
                           [strings["options"]["tools"]["bool"]["colour"], "colour"],
                           [strings["options"]["tools"]["bool"]["transOrder"], "transOrder"],
                        ],
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_2", 
                        "options": [
                           [strings["options"]["tools"]["bool"]["category"], "category"],
                           [strings["options"]["tools"]["bool"]["notcategory"], "notcategory"],
                           [strings["options"]["tools"]["bool"]["has"], "undefined"],
                        ],
                     },
                  ],
               },
            },
            {  name: "sensorBool1D", 
               yieldsValue: true,
               handler: context.robot.sensorBool,
               blocklyJson: {
                  "args0": [
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_0", 
                        "options": [
                           [strings["options"]["tools"]["under"], "under"], // special case handling
                           [strings["options"]["tools"]["forward"], "0"],
                           [strings["options"]["move"]["up"], "up"],// special case handling
                           [strings["options"]["move"]["down"], "down"],// special case handling
                        ],
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_1", 
                        "options": [
                           [strings["options"]["tools"]["bool"]["obstacle"], "obstacle"],
                           [strings["options"]["tools"]["bool"]["transportable"], "transportable"],
                           [strings["options"]["tools"]["bool"]["robot"], "robot"],
                           [strings["options"]["tools"]["bool"]["coin"], "coin"],
                           [strings["options"]["tools"]["bool"]["button"], "button"],
                           [strings["options"]["tools"]["bool"]["number"], "number"],
                           [strings["options"]["tools"]["bool"]["edge"], "edge"],
                           [strings["options"]["tools"]["bool"]["colour"], "colour"],
                           [strings["options"]["tools"]["bool"]["transOrder"], "transOrder"],
                        ],
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_2", 
                        "options": [
                           [strings["options"]["tools"]["bool"]["category"], "category"],
                           [strings["options"]["tools"]["bool"]["notcategory"], "notcategory"],
                           [strings["options"]["tools"]["bool"]["has"], "undefined"],
                        ],
                     },
                  ],
               },
            },
            {  name: "sensorValue", 
               yieldsValue: true,
               blocklyJson: {
                  "args0": [
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_0", 
                        "options": [
                           [strings["options"]["tools"]["under"], "under"], // special case handling
                           [strings["options"]["tools"]["forward"], "0"],
                           [strings["options"]["move"]["right"], "2"],
                           [strings["options"]["move"]["left"], "-2"],
                           [strings["options"]["move"]["around"], "4"],
                        ],
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_1", 
                        "options": [
                           [strings["options"]["tools"]["value"]["obstacle"], "obstacle"],
                           [strings["options"]["tools"]["value"]["transportable"], "transportable"],
                           [strings["options"]["tools"]["value"]["robot"], "robot"],
                           [strings["options"]["tools"]["value"]["coin"], "coin"],
                           [strings["options"]["tools"]["value"]["button"], "button"],
                           [strings["options"]["tools"]["value"]["number"], "number"],
                           [strings["options"]["tools"]["value"]["nonspecific"], "nonspecific"],
                        ]
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_2", 
                        "options": [
                           [strings["options"]["tools"]["value"]["colour"], "colour"],
                           [strings["options"]["tools"]["value"]["value"], "value"],
                           [strings["options"]["tools"]["value"]["transOrder"], "transOrder"],
                        ],
                     },
                  ],
               },
            },
            {  name: "sensorValue1D", 
               yieldsValue: true,
               handler: context.robot.sensorValue,
               blocklyJson: {
                  "args0": [
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_0", 
                        "options": [
                           [strings["options"]["tools"]["under"], "under"], // special case handling
                           [strings["options"]["tools"]["forward"], "0"],
                           [strings["options"]["move"]["up"], "up"],// special case handling
                           [strings["options"]["move"]["down"], "down"],// special case handling
                        ],
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_1", 
                        "options": [
                           [strings["options"]["tools"]["value"]["obstacle"], "obstacle"],
                           [strings["options"]["tools"]["value"]["transportable"], "transportable"],
                           [strings["options"]["tools"]["value"]["robot"], "robot"],
                           [strings["options"]["tools"]["value"]["coin"], "coin"],
                           [strings["options"]["tools"]["value"]["button"], "button"],
                           [strings["options"]["tools"]["value"]["number"], "number"],
                           [strings["options"]["tools"]["value"]["nonspecific"], "nonspecific"],
                        ]
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_2", 
                        "options": [
                           [strings["options"]["tools"]["value"]["colour"], "colour"],
                           [strings["options"]["tools"]["value"]["value"], "value"],
                           [strings["options"]["tools"]["value"]["transOrder"], "transOrder"],
                        ],
                     },
                  ],
               },
            },
            {  name: "alterValue",
               blocklyJson: {
                  "args0": [
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_0", 
                        "options": [
                           [strings["options"]["tools"]["under"], "under"], // special case handling
                           [strings["options"]["tools"]["forward"], "0"],
                           [strings["options"]["move"]["right"], "2"],
                           [strings["options"]["move"]["left"], "-2"],
                           [strings["options"]["move"]["around"], "4"],
                        ],
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_1", 
                        "options": [
                           [strings["options"]["tools"]["value"]["obstacle"], "obstacle"],
                           [strings["options"]["tools"]["value"]["transportable"], "transportable"],
                           [strings["options"]["tools"]["value"]["robot"], "robot"],
                           [strings["options"]["tools"]["value"]["coin"], "coin"],
                           [strings["options"]["tools"]["value"]["button"], "button"],
                           [strings["options"]["tools"]["value"]["number"], "number"],
                           [strings["options"]["tools"]["value"]["nonspecific"], "nonspecific"],
                        ]
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_2", 
                        "options": [
                           [strings["options"]["tools"]["alter"]["colour"], "colour"],
                           [strings["options"]["tools"]["alter"]["value"], "value"],
                           [strings["options"]["tools"]["alter"]["transOrder"], "transOrder"],
                        ],
                     },
                     {
                        "type": "input_value", 
                        "name": "PARAM_3", 
                     },
                  ],
               },
               blocklyXml: `
                  <block type="alterValue">
                     <field name="PARAM_2">colour</field>
                     <field name="PARAM_1">obstacle</field>
                     <field name="PARAM_0">under</field>
                     <value name="PARAM_3">
                        <shadow type="math_number">
                           <field name="NUM">0</field>
                        </shadow>
                     </value>
                  </block>
               `,
            },
            {  name: "alterValue1D", 
               handler: context.robot.alterValue,
               blocklyJson: {
                  "args0": [
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_0", 
                        "options": [
                           [strings["options"]["tools"]["under"], "under"], // special case handling
                           [strings["options"]["tools"]["forward"], "0"],
                           [strings["options"]["move"]["up"], "up"],// special case handling
                           [strings["options"]["move"]["down"], "down"],// special case handling
                        ],
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_1", 
                        "options": [
                           [strings["options"]["tools"]["value"]["obstacle"], "obstacle"],
                           [strings["options"]["tools"]["value"]["transportable"], "transportable"],
                           [strings["options"]["tools"]["value"]["robot"], "robot"],
                           [strings["options"]["tools"]["value"]["coin"], "coin"],
                           [strings["options"]["tools"]["value"]["button"], "button"],
                           [strings["options"]["tools"]["value"]["number"], "number"],
                           [strings["options"]["tools"]["value"]["nonspecific"], "nonspecific"],
                        ]
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_2", 
                        "options": [
                           [strings["options"]["tools"]["alter"]["colour"], "colour"],
                           [strings["options"]["tools"]["alter"]["value"], "value"],
                           [strings["options"]["tools"]["alter"]["transOrder"], "transOrder"],
                        ],
                     },
                     {
                        "type": "input_value", 
                        "name": "PARAM_3", 
                     },
                  ],
               },
               blocklyXml: `
                  <block type="alterValue1D">
                     <field name="PARAM_2">colour</field>
                     <field name="PARAM_1">obstacle</field>
                     <field name="PARAM_0">under</field>
                     <value name="PARAM_3">
                        <shadow type="math_number">
                           <field name="NUM">0</field>
                        </shadow>
                     </value>
                  </block>
               `,
            },
            {  name: "destroy", 
               blocklyJson: {
                  "args0": [
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_0", 
                        "options": [
                           [strings["options"]["tools"]["under"], "under"], // special case handling
                           [strings["options"]["tools"]["forward"], "0"],
                           [strings["options"]["move"]["right"], "2"],
                           [strings["options"]["move"]["left"], "-2"],
                           [strings["options"]["move"]["around"], "4"],
                        ],
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_1", 
                        "options": [
                           [strings["options"]["tools"]["bool"]["obstacle"], "obstacle"],
                           [strings["options"]["tools"]["bool"]["transportable"], "transportable"],
                           [strings["options"]["tools"]["bool"]["robot"], "robot"],
                           [strings["options"]["tools"]["bool"]["coin"], "coin"],
                           [strings["options"]["tools"]["bool"]["button"], "button"],
                           [strings["options"]["tools"]["bool"]["number"], "number"],
                           [strings["options"]["tools"]["bool"]["colour"], "colour"],
                           [strings["options"]["tools"]["bool"]["transOrder"], "transOrder"],
                        ]
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_2", 
                        "options": [
                           [strings["options"]["tools"]["bool"]["category"], "category"],
                           [strings["options"]["tools"]["bool"]["notcategory"], "notcategory"],
                           [strings["options"]["tools"]["bool"]["has"], "undefined"],
                        ],
                     },
                  ],
               },
            },
            {  name: "destroy1D",
               handler: context.robot.destroy,
               blocklyJson: {
                  "args0": [
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_0", 
                        "options": [
                           [strings["options"]["tools"]["under"], "under"], // special case handling
                           [strings["options"]["tools"]["forward"], "0"],
                           [strings["options"]["move"]["up"], "up"],// special case handling
                           [strings["options"]["move"]["down"], "down"],// special case handling
                        ],
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_1", 
                        "options": [
                           [strings["options"]["tools"]["bool"]["obstacle"], "obstacle"],
                           [strings["options"]["tools"]["bool"]["transportable"], "transportable"],
                           [strings["options"]["tools"]["bool"]["robot"], "robot"],
                           [strings["options"]["tools"]["bool"]["coin"], "coin"],
                           [strings["options"]["tools"]["bool"]["button"], "button"],
                           [strings["options"]["tools"]["bool"]["number"], "number"],
                           [strings["options"]["tools"]["bool"]["colour"], "colour"],
                           [strings["options"]["tools"]["bool"]["transOrder"], "transOrder"],
                        ]
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_2", 
                        "options": [
                           [strings["options"]["tools"]["bool"]["category"], "category"],
                           [strings["options"]["tools"]["bool"]["notcategory"], "notcategory"],
                           [strings["options"]["tools"]["bool"]["has"], "undefined"],
                        ],
                     },
                  ],
               },
            },
            {  name: "create", 
               blocklyJson: {
                  "args0": [
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_0", 
                        "options": [
                           [strings["options"]["tools"]["under"], "under"], // special case handling
                           [strings["options"]["tools"]["forward"], "0"],
                           [strings["options"]["move"]["right"], "2"],
                           [strings["options"]["move"]["left"], "-2"],
                           [strings["options"]["move"]["around"], "4"],
                        ],
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_1", 
                        "options": [
                           [strings["options"]["tools"]["create"]["number"], "number"],
                           [strings["options"]["tools"]["create"]["paint"], "paint"],
                           [strings["options"]["tools"]["create"]["obstacle"], "obstacle"],
                        ]
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_2", 
                        "options": [
                           [strings["options"]["tools"]["create"]["value"], "value"],
                           [strings["options"]["tools"]["create"]["colour"], "colour"],
                        ],
                     },
                     {
                        "type": "input_value", 
                        "name": "PARAM_3", 
                     },
                  ],
               },
               blocklyXml: `
                  <block type="create">
                     <field name="PARAM_0">under</field>
                     <field name="PARAM_1">number</field>
                     <field name="PARAM_2">value</field>
                     <value name="PARAM_3">
                        <shadow type="math_number">
                           <field name="NUM">0</field>
                        </shadow>
                     </value>
                  </block>
               `,
            },
            {  name: "create1D",
               handler: context.robot.create,
               blocklyJson: {
                  "args0": [
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_0", 
                        "options": [
                           [strings["options"]["tools"]["under"], "under"], // special case handling
                           [strings["options"]["tools"]["forward"], "0"],
                           [strings["options"]["tools"]["forwardDown"], "forwardDown"], // special case handling
                           [strings["options"]["move"]["up"], "up"],// special case handling
                           [strings["options"]["move"]["down"], "down"],// special case handling
                        ],
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_1", 
                        "options": [
                           [strings["options"]["tools"]["create"]["number"], "number"],
                           [strings["options"]["tools"]["create"]["paint"], "paint"],
                           [strings["options"]["tools"]["create"]["obstacle"], "obstacle"],
                        ]
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_2", 
                        "options": [
                           [strings["options"]["tools"]["create"]["value"], "value"],
                           [strings["options"]["tools"]["create"]["colour"], "colour"],
                        ],
                     },
                     {
                        "type": "input_value", 
                        "name": "PARAM_3", 
                     },
                  ],
               },
               blocklyXml: `
                  <block type="create1D">
                     <field name="PARAM_0">under</field>
                     <field name="PARAM_1">number</field>
                     <field name="PARAM_2">value</field>
                     <value name="PARAM_3">
                        <shadow type="math_number">
                           <field name="NUM">0</field>
                        </shadow>
                     </value>
                  </block>
               `,
            },
            {  name: "nitems", 
               yieldsValue: true,
               blocklyJson: {
                  "args0": [
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_0", 
                        "options": [
                           [strings["options"]["tools"]["nitems"]["obstacle"], "obstacle"],
                           [strings["options"]["tools"]["nitems"]["transportable"], "transportable"],
                           [strings["options"]["tools"]["nitems"]["robot"], "robot"],
                           [strings["options"]["tools"]["nitems"]["coin"], "coin"],
                           [strings["options"]["tools"]["nitems"]["button"], "button"],
                           [strings["options"]["tools"]["nitems"]["number"], "number"],
                           [strings["options"]["tools"]["nitems"]["colour"], "colour"],
                           [strings["options"]["tools"]["nitems"]["transOrder"], "transOrder"],
                        ],
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_1", 
                        "options": [
                           [strings["options"]["tools"]["nitems"]["category"], "category"],
                           [strings["options"]["tools"]["nitems"]["notcategory"], "notcategory"],
                           [strings["options"]["tools"]["nitems"]["has"], "undefined"],
                        ],
                     },
                  ],
               },
            },
            {  name: "sensorRowCol", 
               yieldsValue: true,
               blocklyJson: {
                  "args0": [
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_0", 
                        "options": [
                           [strings["options"]["tools"]["row"], "row"],
                           [strings["options"]["tools"]["col"], "col"],
                        ],
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_1", 
                        "options": [
                           [strings["options"]["tools"]["bool"]["obstacle"], "obstacle"],
                           [strings["options"]["tools"]["bool"]["transportable"], "transportable"],
                           [strings["options"]["tools"]["bool"]["robot"], "robot"],
                           [strings["options"]["tools"]["bool"]["coin"], "coin"],
                           [strings["options"]["tools"]["bool"]["button"], "button"],
                           [strings["options"]["tools"]["bool"]["number"], "number"],
                           [strings["options"]["tools"]["bool"]["colour"], "colour"],
                           [strings["options"]["tools"]["bool"]["transOrder"], "transOrder"],
                        ],
                     },
                     {
                        "type": "field_dropdown", 
                        "name": "PARAM_2", 
                        "options": [
                           [strings["options"]["tools"]["bool"]["category"], "category"],
                           [strings["options"]["tools"]["bool"]["notcategory"], "notcategory"],
                           [strings["options"]["tools"]["bool"]["has"], "undefined"],
                        ],
                     },
                  ],
               },
            },
         ],
      },
   };
   // add tooltip description to blocks
   for (var [cat1, cats] of Object.entries(context.customBlocks)){
      for (var [cat2, blocks] of Object.entries(cats)){
         for (var block of blocks){
            // individual block dicts
            if("blocklyJson" in block) block["blocklyJson"]["tooltip"] = strings["description"][block['name']];
            else block["blocklyJson"] = { tooltip: strings["description"][block['name']] }; 
         }
      }
   }


   // add and/or override local blocks from task.js
   if (infos.localBlocks != undefined) {
      var cblocks = infos.localBlocks(context, strings, infos);
      replaceDict(cblocks, context.customBlocks);
   }

   return context;
};



//checkEndConditions
var robotEndConditions = {
   checkItemExistence: function(context, lastTurn, filters, negfilters={}, exist=true) {
      context.success = false;
      var items = context.getItems(undefined, undefined, filters, negfilters);
      if(exist) {
         if(items.length > 0){
            context.success = true;
            throw(window.languageStrings.messages.success + window.languageStrings.messages.itemsExist);
         }
         else if(lastTurn) throw(window.languageStrings.messages.failure + window.languageStrings.messages.itemsDontExist);
      }
      else{
         if(items.length == 0){
            context.success = true;
            throw(window.languageStrings.messages.success + window.languageStrings.messages.itemsDontExist);
         }
         else if(lastTurn) throw(window.languageStrings.messages.failure + window.languageStrings.messages.itemsExist);
      }
   },
   checkItemCoincidence: function(context, lastTurn, filtersA, filtersB, keys=[], negfiltersA={}, negfiltersB={}) {
      context.success = false;
      
      var itemsA = context.getItems(undefined, undefined, filtersA, negfiltersA, includeTrans=true);
      var itemsB = context.getItems(undefined, undefined, filtersB, negfiltersB, includeTrans=true);

      var check1on2 = function(items1, items2){
         for(var i = 0; i < items1.length; i++) {
            var found = false
            for(var j = 0; j < items2.length; j++) {
               if((items1[i].row == items2[j].row) && (items1[i].col == items2[j].col)){
                  found = true;
                  for(var ik = 0; ik < keys.length; ik++) {
                     var key = keys[ik];
                     if(items1[i][key] != items2[j][key]) found = false;
                  }
               }
            }  
            if(!found) return false;
         }
         return true;
      }

      context.success = (check1on2(itemsA, itemsB) && check1on2(itemsB, itemsA));
      if(context.success) throw (window.languageStrings.messages.success + window.languageStrings.messages.itemsCoincide);
      else if(lastTurn) throw (window.languageStrings.messages.failure + window.languageStrings.messages.itemsDontCoincide);
   },
   checkCombiner: function(context, lastTurn, checkFunctions) {
      context.success = false;
      var nchecks = checkFunctions.length;
      var solved = true;
      var msg = "";

      for(var i = 0; i < nchecks; i++) {   
         try{ 
            checkFunctions[i](context, lastTurn);
            // if this goes through, we didnt solve it because its not the last turn!!
            solved = false;
         }
         catch(err){
            solved = solved && context.success;
            msg = msg.concat(err);
         }
      }
      context.success = solved;

      if(context.success) throw (msg);
      else if(lastTurn) throw (msg);
   },
};


// grade functions, FUTURE: this need to be tested in a COMPETITION setting!!
var robotGradeFunctions = {
   allOrNothing: function(context, message){
      var rate = 0;
      if(context.success) rate = 100;
      return {
         successRate: rate,
         message: message,
      };
   }
}

//klic knjižnic
if(window.quickAlgoLibraries) {
   quickAlgoLibraries.register('robot', getContext);
} else {
   if(!window.quickAlgoLibrariesList) { window.quickAlgoLibrariesList = []; }
   window.quickAlgoLibrariesList.push(['robot', getContext]);
}
