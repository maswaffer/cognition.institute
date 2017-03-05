(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("EgyYgFsMBkxAAAIAALZMhkxAAAg");
	this.shape.setTransform(322.5,36.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgyYAFtIAArZMBkxAAAIAALZg");
	this.shape_1.setTransform(322.5,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1,-1,647,75), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2).p("EgsSgODMBYlAAAIAAcHMhYlAAAg");
	this.shape.setTransform(283.5,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgsSAOEIAA8HMBYlAAAIAAcHg");
	this.shape_1.setTransform(283.5,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,569,182), null);


// stage content:
(lib.Panel4 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Oxygenation peaks about 6  seconds after the activity starts
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgRArQgGgBgFgCIAEgNIAJAFQAGACAHAAQAHgBAEgDQAFgEAAgGQgBgFgEgEQgDgDgIgDQgMgFgFgFQgGgGAAgIQAAgHAEgGQAEgFAGgEQAGgDAJgBQAHABAFABQAGACADACIgDAMIgHgEQgFgCgGAAQgGAAgEAEQgEADAAAFQAAAFAEAEQAEADAIADQALAEAGAGQAGAFgBAKQABAMgJAHQgJAHgOAAQgHAAgHgCg");
	this.shape.setTransform(583.4,66.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABALIgGACIgIABQgGAAgEgCg");
	this.shape_1.setTransform(576.8,65.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AgUAsIAAg7IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJgBgFAGQgFAFgCAJIAAAEIAAAEIAAAtg");
	this.shape_2.setTransform(570.9,66.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgDgHgBQgHAAgFACQgGABgFADIgEgKQAGgEAHgCQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAALIACAJIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGABQAHAAAGgFQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_3.setTransform(562.9,66.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABALIgGACIgIABQgGAAgEgCg");
	this.shape_4.setTransform(555.8,65.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgRArQgGgBgFgCIAFgNIAJAFQAFACAHAAQAHgBAEgDQAEgEABgGQAAgFgFgEQgDgDgIgDQgLgFgGgFQgGgGAAgIQAAgHAEgGQAEgFAGgEQAGgDAJgBQAHABAFABQAGACADACIgDAMIgHgEQgFgCgGAAQgGAAgEAEQgEADAAAFQAAAFAEAEQAEADAIADQALAEAGAGQAGAFgBAKQABAMgJAHQgJAHgOAAQgHAAgHgCg");
	this.shape_5.setTransform(549.3,66.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AgjAyIAGgDIAIgFIAHgHQAEgFACgGIABgBIABgCIgBgCIgBgDIgghPIASAAIATA0IACAJIACAHIABAAIACgHIADgKIARgzIARAAIgYA+IgKAZIgJASQgFAGgFAFQgFAFgGACIgIADg");
	this.shape_6.setTransform(537.7,68.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABALIgGACIgIABQgGAAgEgCg");
	this.shape_7.setTransform(530.2,65.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQACgDAEAAQAEAAADADQACADABAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_8.setTransform(525.2,65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AgHArIghhWIARAAIARAxIAEALIACAKIAAAAIAEgKIAEgLIARgxIAQAAIgiBWg");
	this.shape_9.setTransform(518.8,66.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgCgDgBgEQABgEACgDQACgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_10.setTransform(512.4,65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABALIgGACIgIABQgGAAgEgCg");
	this.shape_11.setTransform(507.2,65.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgNAoQgKgGgFgKQgFgKAAgNQAAgMAFgLQAGgLALgFQAKgHANAAQAHABAGABIAJADIgDANIgIgDIgLgCQgKABgGAEQgGAEgEAHQgDAIAAAIQAAAKAEAHQAEAIAGADQAGAFAJAAIALgBIAIgEIADAMQgDACgHABIgPACQgMAAgKgFg");
	this.shape_12.setTransform(500.1,66.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgDgHgBQgHAAgFACQgGABgFADIgEgKQAGgEAHgCQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAALIACAJIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGABQAHAAAGgFQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_13.setTransform(491.4,66.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLADIgSACQgMAAgKgFgAAXgIQAAgFgCgGQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_14.setTransform(479,66.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgEgEgEQgFgEgHAAQgHABgFAEQgGAEgCAGIgBADIAAAFIAAA0IgQAAIAAh/IAQAAIAAA2IAAAAIAFgFIAGgGIAIgDIAIgBIAJACQAGABAEAEQAFAFADAHQADAGAAALIAAA0g");
	this.shape_15.setTransform(469.5,64.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABALIgGACIgIABQgGAAgEgCg");
	this.shape_16.setTransform(461.5,65.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgUAsIAAg7IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJgBgFAGQgFAFgCAJIAAAEIAAAEIAAAtg");
	this.shape_17.setTransform(452.3,66.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLADIgSACQgMAAgKgFgAAXgIQAAgFgCgGQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_18.setTransform(444.4,66.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABALIgGACIgIABQgGAAgEgCg");
	this.shape_19.setTransform(437,65.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgPBBIAAhKIgMAAIAAgMIAMAAIAAgEQAAgKACgIQADgIAFgFQAEgEAFgCIALgCIAIABIAFACIgCAMIgEgCIgFAAQgHAAgEADQgEAEgBAGQgBAFAAAHIAAAFIAUAAIAAAMIgUAAIAABKg");
	this.shape_20.setTransform(431.7,64.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgDgHgBQgHAAgFACQgGABgFADIgEgKQAGgEAHgCQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAALIACAJIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGABQAHAAAGgFQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_21.setTransform(424,66.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgQArQgHgBgEgCIADgNIAJAFQAHACAFAAQAIgBAEgDQAFgEgBgGQAAgFgDgEQgEgDgIgDQgMgFgFgFQgGgGAAgIQAAgHADgGQAFgFAGgEQAGgDAJgBQAHABAGABQAFACAEACIgFAMIgHgEQgEgCgGAAQgHAAgDAEQgEADAAAFQAAAFAEAEQAFADAGADQAMAEAGAGQAFAFABAKQgBAMgIAHQgJAHgOAAQgHAAgGgCg");
	this.shape_22.setTransform(412.5,66.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AgWA7QgIgFgFgKQgFgKAAgNQAAgPAFgJQAGgKAJgHQAIgFALAAQAJAAAHAEQAGAEADAFIABAAIAAg0IAPAAIAABoIAAAMIABALIgOAAIgBgPIAAAAQgEAHgHAFQgIAFgKAAQgKAAgJgGgAgMgIQgGAEgDAHQgDAIAAAJQAAAJADAHQACAIAGAEQAGAEAHAAQAJAAAGgFQAHgEACgKIABgDIAAgEIAAgOIAAgEIgBgDQgCgHgGgFQgGgGgJABQgIAAgFAEg");
	this.shape_23.setTransform(403.6,64.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AAVAsIAAgxQAAgHgCgGQgCgFgEgEQgEgDgIAAQgGAAgGAEQgGAFgCAHIAAAEIgBADIAAAzIgQAAIAAg+IAAgMIAAgMIANAAIACAPIAAAAQACgEAEgEQAEgEAFgCQAGgCAHgBIAKACQAFACAEAEQAFAEADAHQADAHAAALIAAAzg");
	this.shape_24.setTransform(393.8,66.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgVAoQgKgFgFgKQgGgLABgOQgBgNAGgLQAGgJAJgGQALgFALgBQAMABAKAFQAJAGAFAKQAFAKAAANQAAAPgGAKQgHALgJAFQgKAEgKAAQgMABgJgGgAgOgbQgGAEgDAIQgCAHAAAIQAAAKADAHQADAIAGAEQAGAEAHABQAIgBAFgEQAGgEAEgIQADgHAAgKQAAgHgDgIQgCgHgGgFQgFgFgKgBQgIABgGAFg");
	this.shape_25.setTransform(383.9,66.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AgNAoQgKgGgFgKQgFgKAAgNQAAgMAFgLQAGgLALgFQAKgHANAAQAHABAGABIAJADIgDANIgIgDIgLgCQgKABgGAEQgGAEgEAHQgDAIAAAIQAAAKAEAHQAEAIAGADQAGAFAJAAIALgBIAIgEIADAMQgDACgHABIgPACQgMAAgKgFg");
	this.shape_26.setTransform(375.1,66.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgFgCgGQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_27.setTransform(366.5,66.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgRArQgGgBgFgCIAEgNIAJAFQAGACAHAAQAHgBAEgDQAFgEAAgGQgBgFgEgEQgDgDgIgDQgMgFgFgFQgGgGAAgIQAAgHAEgGQAEgFAGgEQAGgDAJgBQAHABAFABQAGACADACIgDAMIgHgEQgFgCgGAAQgGAAgEAEQgEADAAAFQAAAFAEAEQAEADAIADQALAEAGAGQAGAFgBAKQAAAMgIAHQgJAHgOAAQgHAAgHgCg");
	this.shape_28.setTransform(358.4,66.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgUA2QgJgGgFgLQgFgLAAgQQAAgQAFgNQAGgOAJgIQAHgIAKgEQAIgEALgCIAHAAIAFAAIAAANIgGAAIgGAAQgNACgHAHQgJAGgFAIQgFAJgBAKIABAAQAEgGAHgEQAHgEAJAAQAKAAAIAFQAIAFAFAIQAEAIAAALQAAALgFAJQgEAJgJAGQgIAGgNAAQgLAAgKgGgAgMgCQgGADgEAHIgBADIAAADQAAAKADAIQADAHAFAFQAGAEAHAAQALAAAGgIQAGgHAAgNQAAgNgGgHQgHgGgLAAQgGAAgGAEg");
	this.shape_29.setTransform(555.9,40);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgDgBgGIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_30.setTransform(544.5,40.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AgUApQgHgDgEgIQgFgIAAgQIAAgxIAQAAIAAAuQAAANAEAHQAFAIALAAQAEAAAEgCQAEgCADgEQADgDACgDIAAgEIAAgEIAAg0IARAAIAAA+IAAAMIAAALIgOAAIgBgOIAAAAQgCAEgEAEQgDADgHADQgFADgHAAQgHAAgHgEg");
	this.shape_31.setTransform(536.6,41.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AgWAoQgIgGgGgKQgFgJAAgOQAAgOAFgKQAGgLAJgFQALgGALABQAMgBAJAGQAKAGAFAKQAGAKgBANQAAAQgGAJQgGALgKAEQgKAFgKABQgMAAgKgGgAgOgcQgGAGgDAHQgDAHABAIQgBAKAEAIQADAHAGAEQAGAFAHgBQAIABAFgFQAHgEACgIQAEgIABgJQAAgHgEgHQgCgIgGgGQgFgEgKAAQgIAAgGAEg");
	this.shape_32.setTransform(526.7,41.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AgNA9QgIgEgFgJIAAAAIgBAPIgNAAIAAgKIAAgNIAAhoIAQAAIAAA3QAEgHAIgEQAIgFAJAAQAKAAAJAGQAIAFAFAKQAEAJAAANQABAQgHALQgFAKgJAFQgJAFgJAAQgJAAgHgEgAgOgHQgGAFgDAIIgBADIAAADIAAAQIAAADIABADQACAIAGAFQAHAFAIABQAMgBAGgJQAHgJAAgPQAAgJgCgHQgDgGgGgFQgGgFgIAAQgHABgHAFg");
	this.shape_33.setTransform(517,39.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgGQAAgQAOgIQANgIAYAAIAAgCQABgDgCgFQgBgFgEgDQgFgDgHgBQgHAAgFACQgGABgFAEIgEgLQAGgDAHgCQAIgCAHAAQANgBAHAGQAIAFACAIQADAIAAAJIAAAfIAAALIACAKIgPAAIgBgLIgBAAQgDAGgHADQgHAFgIAAQgJAAgGgFgAABAAQgIABgFAFQgGAEAAAJQAAAHAEAEQAFAEAGgBQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_34.setTransform(507,41.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AgQArQgHgBgFgCIAFgNIAJAEQAGACAFAAQAIABAEgEQAEgEAAgFQABgGgEgDQgEgEgIgEQgLgDgHgGQgFgGAAgIQAAgHADgGQAEgFAHgEQAHgDAIAAQAHAAAFABQAGABADADIgDALIgIgDQgEgCgGABQgHAAgDADQgEADAAAFQAAAFAEADQAFAEAGADQAMAEAGAFQAGAHAAAJQAAAMgJAHQgIAHgPABQgHAAgGgDg");
	this.shape_35.setTransform(495.5,41.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AARBAIgcgqIgIAJIAAAhIgRAAIAAh/IARAAIAABQIADgFIAFgFIAYgdIATAAIggAiIAkA0g");
	this.shape_36.setTransform(488.4,39.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgGQAAgQAOgIQANgIAYAAIAAgCQABgDgCgFQgBgFgEgDQgFgDgHgBQgHAAgFACQgGABgFAEIgEgLQAGgDAHgCQAIgCAHAAQANgBAHAGQAIAFACAIQADAIAAAJIAAAfIAAALIACAKIgPAAIgBgLIgBAAQgDAGgHADQgHAFgIAAQgJAAgGgFgAABAAQgIABgFAFQgGAEAAAJQAAAHAEAEQAFAEAGgBQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_37.setTransform(478.9,41.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AgSAoQgJgFgFgLQgFgJAAgNQAAgNAFgLQAEgKAKgGQAJgHALABQALAAAHADQAHAEAEAHQAEAGACAIQACAHgBAFIAAAEIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALQgEACgHABIgSADQgMgBgKgFgAAXgHQAAgGgCgGQgBgGgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_38.setTransform(470.3,41.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgoA+IAAhdIAAgPIAAgNIANAAIABAPIABAAQAEgIAJgFQAHgEAKAAQAKAAAJAFQAIAGAEAKQAGAKAAANQgBAQgFAJQgGAKgIAFQgJAGgLAAQgIAAgGgEQgIgDgEgHIAAAvgAgOgrQgGAFgDAJIgBADIAAADIAAAPIAAAEIAAADQADAHAGAFQAGAFAJAAQAIAAAGgEQAFgEAEgIQACgGAAgKQAAgJgCgHQgEgIgFgEQgGgFgIAAQgIAAgGAGg");
	this.shape_39.setTransform(461,43.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AAWAsIAAgwQAAgIgCgGQgDgGgEgDQgFgDgGgBQgIABgFAFQgGAEgCAHIgBADIAAAEIAAAzIgQAAIAAg+IAAgNIgBgKIAPAAIABAOIAAAAQACgEAEgEQAEgEAGgCQAFgCAGAAIAKABQAGACAEAEQAFAEADAHQADAIABALIAAAyg");
	this.shape_40.setTransform(446.8,41.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgWAoQgIgGgGgKQgFgJgBgOQABgOAFgKQAGgLAJgFQAKgGAMABQAMgBAJAGQAKAGAFAKQAGAKAAANQgBAQgGAJQgGALgLAEQgJAFgKABQgMAAgKgGgAgOgcQgGAGgDAHQgDAHABAIQAAAKADAIQADAHAGAEQAGAFAHgBQAIABAFgFQAHgEACgIQAEgIABgJQAAgHgEgHQgCgIgFgGQgHgEgJAAQgIAAgGAEg");
	this.shape_41.setTransform(436.8,41.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgCgDgBgEQABgEACgDQACgDAEAAQAEAAADADQACADABAEQAAAEgDADQgCADgFAAQgEAAgCgDg");
	this.shape_42.setTransform(429.8,39.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgDgBgGIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_43.setTransform(424.6,40.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgGQAAgQAOgIQANgIAYAAIAAgCQABgDgCgFQgBgFgEgDQgFgDgHgBQgHAAgFACQgGABgFAEIgEgLQAGgDAHgCQAIgCAHAAQANgBAHAGQAIAFACAIQADAIAAAJIAAAfIAAALIACAKIgPAAIgBgLIgBAAQgDAGgHADQgHAFgIAAQgJAAgGgFgAABAAQgIABgFAFQgGAEAAAJQAAAHAEAEQAFAEAGgBQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_44.setTransform(417.2,41.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AAWAsIAAgwQAAgIgCgGQgDgGgEgDQgFgDgGgBQgIABgFAFQgGAEgCAHIgBADIAAAEIAAAzIgQAAIAAg+IAAgNIgBgKIAPAAIABAOIAAAAQACgEAEgEQAEgEAGgCQAFgCAGAAIAKABQAGACAEAEQAFAEADAHQADAIABALIAAAyg");
	this.shape_45.setTransform(408.1,41.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AgSAoQgJgFgFgLQgFgJAAgNQAAgNAFgLQAEgKAKgGQAJgHALABQALAAAHADQAHAEAEAHQAEAGACAIQACAHgBAFIAAAEIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALIgLADIgSADQgMgBgKgFgAAXgHQAAgGgCgGQgBgGgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_46.setTransform(398.6,41.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgTA+QgHgCgGgEIAEgMQAEADAHACQAHACAIAAQAGAAAHgDQAGgDAEgHQAEgHAAgKIAAgKIgBAAQgDAGgIAEQgHAEgIAAQgLAAgJgFQgIgGgFgJQgFgJAAgMQAAgPAGgKQAFgKAKgGQAIgFALAAQAGAAAFACQAGACADAEQAEADACAEIAAAAIABgNIANAAIAAAKIAAAOIAAAxQAAAPgDAKQgDAJgGAGQgHAGgJACQgHACgIAAQgIAAgIgBgAgRgpQgHAJAAAPQAAAJAEAHQACAGAGAEQAFAEAIAAQAHAAAHgEQAGgEACgHIABgEIABgEIAAgQIgBgEIAAgDQgDgHgFgFQgGgFgJAAQgKAAgIAJg");
	this.shape_47.setTransform(388.8,43.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AgjAyIAHgDIAHgFIAGgHQAEgEADgGIABgDIAAgBIAAgCIgBgCIgghPIASAAIATAzIACAJIACAHIAAAAIADgHIADgKIARgyIARAAIgYA+IgKAYIgIARQgFAIgFAEQgHAFgFADIgIADg");
	this.shape_48.setTransform(380,43.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AAWArIgNgTIgFgIIgEgHIAAAAIgEAHIgFAIIgMATIgSAAIAfgrIgdgqIARAAIANASIAEAHIAEAHIAAAAIAEgHIAFgHIAMgSIARAAIgeApIAfAsg");
	this.shape_49.setTransform(371.2,41.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AgdA3QgMgIgHgOQgGgNgBgTQAAgSAIgPQAHgOANgIQANgHAPAAQAQAAANAHQAMAIAHAOQAGANABATQgBATgHAOQgIAPgMAHQgNAIgPAAQgQgBgNgHgAgVgqQgIAHgEALQgFAMAAANQAAANAFALQAFALAIAGQAIAIAMgBQANABAIgIQAJgGAEgMQAFgLAAgNQAAgJgCgIQgDgKgFgGQgEgIgIgDQgHgFgKAAQgMAAgJAHg");
	this.shape_50.setTransform(361,39.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},608).wait(1));

	// Oxygenation begins about 2  seconds after the activity starts
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AgRArQgGgBgEgCIADgNIAJAEQAHACAGAAQAHABAEgEQAFgEgBgFQAAgGgDgDQgEgEgIgEQgMgDgFgGQgGgGAAgIQAAgHADgGQAFgFAGgEQAHgDAIAAQAHAAAGABQAFABAEADIgFALIgGgDQgFgCgGABQgHAAgDADQgEADAAAFQAAAFAEADQAEAEAIADQALAEAGAFQAFAHAAAJQAAAMgIAHQgJAHgOABQgHAAgHgDg");
	this.shape_51.setTransform(350.1,231.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_52.setTransform(343.5,230.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AgUAsIAAg6IAAgPIgBgMIAOAAIABARIAAAAQADgKAGgFQAGgEAIAAIADAAIACAAIAAAPIgDgBIgCAAQgJABgFAFQgFAGgCAIIAAAEIAAAEIAAAtg");
	this.shape_53.setTransform(337.6,231.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgGQAAgQAOgIQANgIAYAAIAAgCQABgDgCgFQgBgFgEgDQgFgDgHgBQgHAAgFACQgGABgFAEIgEgLQAGgDAHgCQAIgCAHAAQANgBAHAGQAIAFACAIQADAIAAAJIAAAfIAAALIACAKIgPAAIgBgLIgBAAQgDAGgHADQgHAFgIAAQgJAAgGgFgAABAAQgIABgFAFQgGAEAAAJQAAAHAEAEQAFAEAGgBQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_54.setTransform(329.6,231.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_55.setTransform(322.5,230.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgRArQgGgBgEgCIADgNIAJAEQAHACAGAAQAHABAEgEQAFgEAAgFQgBgGgEgDQgDgEgIgEQgMgDgFgGQgGgGAAgIQAAgHAEgGQAEgFAGgEQAHgDAIAAQAHAAAGABQAFABAEADIgFALIgGgDQgFgCgGABQgHAAgDADQgEADAAAFQAAAFAEADQAEAEAIADQALAEAGAFQAGAHgBAJQAAAMgIAHQgJAHgOABQgHAAgHgDg");
	this.shape_56.setTransform(316,231.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AgjAyIAHgDIAHgFIAGgHQAEgEADgGIABgDIAAgBIAAgCIgBgCIgghPIASAAIATAzIACAJIACAHIAAAAIADgHIADgKIARgyIARAAIgYA+IgKAYIgIARQgFAIgFAEQgHAFgFADIgIADg");
	this.shape_57.setTransform(304.4,233.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_58.setTransform(296.9,230.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_59.setTransform(291.9,230.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgHArIghhVIARAAIARAvIAEAMIACALIAAAAIAEgLIAEgMIARgvIAQAAIgiBVg");
	this.shape_60.setTransform(285.5,231.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQACgDAEAAQAEAAADADQACADABAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_61.setTransform(279.1,230.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_62.setTransform(273.9,230.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#373535").s().p("AgNAoQgKgGgFgKQgFgKAAgNQAAgNAFgKQAGgKALgHQAKgFANAAQAHAAAGABIAJADIgDAMIgIgDIgLgBQgKAAgGAEQgGAFgEAIQgDAHAAAIQAAAKAEAIQAEAHAGAEQAGADAJAAIALgBIAIgCIADALQgDACgHABIgPADQgMgBgKgFg");
	this.shape_63.setTransform(266.8,231.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgGQAAgQAOgIQANgIAYAAIAAgCQABgDgCgFQgBgFgEgDQgFgDgHgBQgHAAgFACQgGABgFAEIgEgLQAGgDAHgCQAIgCAHAAQANgBAHAGQAIAFACAIQADAIAAAJIAAAfIAAALIACAKIgPAAIgBgLIgBAAQgDAGgHADQgHAFgIAAQgJAAgGgFgAABAAQgIABgFAFQgGAEAAAJQAAAHAEAEQAFAEAGgBQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_64.setTransform(258.1,231.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#373535").s().p("AgSAoQgJgFgFgLQgFgJAAgNQAAgNAFgLQAEgKAKgGQAJgHALABQALAAAHADQAHAEAEAHQAEAGACAIQACAHgBAFIAAAEIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALQgEACgHABIgSADQgMgBgKgFgAAXgHQAAgGgCgGQgBgGgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_65.setTransform(245.7,231.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgEgEgEQgFgEgHAAQgHAAgFAFQgGAEgCAGIgBAEIAAADIAAA1IgQAAIAAh/IAQAAIAAA3IAAAAIAFgHIAGgEIAIgEIAIgBIAJABQAGACAEAFQAFADADAIQADAGAAALIAAA0g");
	this.shape_66.setTransform(236.2,229.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_67.setTransform(228.2,230.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#373535").s().p("AgUAsIAAg6IAAgPIgBgMIAOAAIABARIAAAAQADgKAGgFQAGgEAIAAIADAAIACAAIAAAPIgDgBIgCAAQgJABgFAFQgFAGgCAIIAAAEIAAAEIAAAtg");
	this.shape_68.setTransform(219,231.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#373535").s().p("AgSAoQgJgFgFgLQgFgJAAgNQAAgNAFgLQAEgKAKgGQAJgHALABQALAAAHADQAHAEAEAHQAEAGACAIQACAHgBAFIAAAEIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALQgEACgHABIgSADQgMgBgKgFgAAXgHQAAgGgCgGQgBgGgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_69.setTransform(211.1,231.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_70.setTransform(203.7,230.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#373535").s().p("AgPBBIAAhKIgMAAIAAgMIAMAAIAAgEQAAgKACgIQACgIAGgFQAEgEAFgCIALgCIAIABIAFACIgBAMIgFgCIgFAAQgIAAgDADQgEAEgBAGQgBAFAAAHIAAAFIAUAAIAAAMIgUAAIAABKg");
	this.shape_71.setTransform(198.4,229.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgGQAAgQAOgIQANgIAYAAIAAgCQABgDgCgFQgBgFgEgDQgFgDgHgBQgHAAgFACQgGABgFAEIgEgLQAGgDAHgCQAIgCAHAAQANgBAHAGQAIAFACAIQADAIAAAJIAAAfIAAALIACAKIgPAAIgBgLIgBAAQgDAGgHADQgHAFgIAAQgJAAgGgFgAABAAQgIABgFAFQgGAEAAAJQAAAHAEAEQAFAEAGgBQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_72.setTransform(190.7,231.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#373535").s().p("AgQArQgHgBgFgCIAFgNIAJAEQAFACAGAAQAIABAEgEQAEgEAAgFQAAgGgDgDQgEgEgIgEQgLgDgHgGQgFgGAAgIQAAgHADgGQAEgFAHgEQAGgDAJAAQAHAAAFABQAGABADADIgEALIgHgDQgEgCgGABQgGAAgEADQgEADAAAFQAAAFAEADQAFAEAGADQAMAEAGAFQAFAHABAJQAAAMgJAHQgIAHgPABQgHAAgGgDg");
	this.shape_73.setTransform(179.2,231.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#373535").s().p("AgWA8QgIgGgFgKQgFgKAAgOQAAgOAFgJQAGgLAIgFQAJgGALAAQAJAAAGAEQAHAEADAFIAAAAIAAg0IAQAAIAABoIAAANIABAKIgOAAIgBgPIAAAAQgEAHgIAFQgHAFgKAAQgLAAgIgFgAgMgIQgGAEgDAGQgDAJAAAJQAAAJADAHQADAHAFAFQAGAEAIAAQAHAAAHgFQAGgFADgIIAAgEIAAgDIAAgQIAAgDIAAgEQgCgGgGgFQgGgFgJgBQgHAAgGAFg");
	this.shape_74.setTransform(170.3,229.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#373535").s().p("AAVAsIAAgwQAAgIgCgGQgCgGgEgDQgFgDgHgBQgHABgFAFQgGAEgCAHIAAADIgBAEIAAAzIgQAAIAAg+IAAgNIAAgKIANAAIABAOIABAAQACgEAEgEQAEgEAFgCQAGgCAHAAIAKABQAEACAGAEQAEAEADAHQADAIABALIAAAyg");
	this.shape_75.setTransform(160.5,231.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#373535").s().p("AgVAoQgKgGgFgKQgGgJABgOQgBgOAGgKQAGgLAKgFQAJgGALABQANgBAKAGQAJAGAFAKQAFAKABANQgBAQgGAJQgHALgKAEQgJAFgKABQgMAAgJgGgAgOgcQgGAGgDAHQgDAHAAAIQAAAKAEAIQADAHAGAEQAGAFAHgBQAHABAHgFQAGgEADgIQADgIAAgJQAAgHgCgHQgDgIgGgGQgGgEgJAAQgIAAgGAEg");
	this.shape_76.setTransform(150.6,231.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#373535").s().p("AgNAoQgKgGgFgKQgFgKAAgNQAAgNAFgKQAGgKALgHQAKgFANAAQAHAAAGABIAJADIgDAMIgIgDIgLgBQgKAAgGAEQgGAFgEAIQgDAHAAAIQAAAKAEAIQAEAHAGAEQAGADAJAAIALgBIAIgCIADALQgDACgHABIgPADQgMgBgKgFg");
	this.shape_77.setTransform(141.8,231.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#373535").s().p("AgSAoQgJgFgFgLQgFgJAAgNQAAgNAFgLQAEgKAKgGQAJgHALABQALAAAHADQAHAEAEAHQAEAGACAIQACAHgBAFIAAAEIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALIgLADIgSADQgMgBgKgFgAAXgHQAAgGgCgGQgBgGgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_78.setTransform(133.2,231.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#373535").s().p("AgRArQgGgBgEgCIADgNIAJAEQAHACAGAAQAHABAEgEQAFgEgBgFQAAgGgEgDQgDgEgIgEQgMgDgFgGQgGgGAAgIQAAgHADgGQAFgFAGgEQAHgDAIAAQAHAAAGABQAFABAEADIgFALIgGgDQgFgCgGABQgHAAgDADQgEADAAAFQAAAFAEADQAEAEAIADQALAEAGAFQAFAHAAAJQAAAMgIAHQgJAHgOABQgHAAgHgDg");
	this.shape_79.setTransform(125.1,231.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#373535").s().p("AglA8IAAgKIANgNIAYgYQAJgLAFgHQAFgJgBgIQAAgGgCgGQgCgFgFgDQgFgDgHAAQgJAAgGADQgHADgDADIgGgLQAHgEAIgEQAIgEAKABQAMAAAIAEQAIAGAEAIQADAHAAAIQABAMgGAJQgEAJgJALIgVAVIgKAJIAAAAIA0AAIAAAOg");
	this.shape_80.setTransform(329.6,205);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABALIgGACIgIABQgGAAgEgCg");
	this.shape_81.setTransform(318.2,205.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#373535").s().p("AgUAqQgGgEgFgIQgFgJAAgOIAAgzIAQAAIAAAwQAAAMAEAIQAEAHALABQAEgBAFgCQAEgCADgDQADgDABgEIACgEIAAgEIAAg1IAPAAIAAA/IAAANIABALIgNAAIgBgPIgBAAQgCAEgEADQgEAEgGADQgFADgHgBQgHAAgHgCg");
	this.shape_82.setTransform(310.3,206.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#373535").s().p("AgVAoQgKgFgFgKQgGgLABgOQgBgNAGgLQAGgJAKgGQAJgFALAAQANAAAKAFQAJAGAFAKQAFAKAAANQAAAQgGAKQgHAKgKAFQgJAEgKAAQgMAAgJgFgAgOgbQgGAEgDAIQgDAHAAAIQAAAKAEAHQADAIAGAEQAGAEAHABQAHgBAHgEQAGgEADgIQADgHAAgKQAAgHgCgIQgDgHgGgFQgGgFgJgBQgIABgGAFg");
	this.shape_83.setTransform(300.4,206.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#373535").s().p("AgOA9QgHgEgEgIIgBAAIgBAOIgOAAIABgLIAAgLIAAhpIAQAAIAAA3QAEgIAIgEQAIgEAJAAQAKAAAJAFQAIAGAFAKQAFAJAAANQgBAQgFAKQgGALgJAEQgJAGgKAAQgIAAgIgEgAgOgIQgHAGgDAIIAAADIAAAEIAAAPIAAADIAAADQADAIAGAFQAGAGAJgBQAMAAAHgJQAHgJAAgPQAAgJgEgHQgCgGgGgFQgFgEgJAAQgHAAgHAEg");
	this.shape_84.setTransform(290.7,204.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgBQABgFgCgEQgBgFgEgDQgFgDgHgBQgHAAgFACQgGACgFACIgEgKQAGgEAHgCQAIgCAHABQANAAAHAFQAIAFACAIQADAIAAAJIAAAgIAAALIACAKIgPAAIgBgLIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGABQAHAAAGgFQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_85.setTransform(280.7,206.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#373535").s().p("AgRAsQgGgCgEgDIADgMIAJAFQAGACAHAAQAHgBAEgDQAFgEAAgGQgBgFgEgEQgDgDgIgDQgMgFgFgFQgGgGAAgIQAAgHAEgGQAEgGAGgDQAHgDAIAAQAHAAAGABQAFACAEACIgFAMIgGgEQgFgCgGAAQgHAAgDAEQgEADAAAFQAAAGAEADQAEADAIADQALAEAGAFQAGAHgBAJQAAAMgIAHQgJAHgOAAQgHAAgHgBg");
	this.shape_86.setTransform(269.2,206.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#373535").s().p("AAVAtIAAgyQAAgHgCgFQgCgGgEgEQgEgEgIAAQgGABgGAEQgGAFgCAHIAAAEIgBADIAAA0IgQAAIAAg/IAAgNIAAgLIANAAIACAPIAAAAQACgEAEgEQAEgEAFgCQAGgCAHAAIAKABQAFACAEAEQAFAEADAHQADAHAAALIAAA0g");
	this.shape_87.setTransform(260.6,206.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgCgDgBgEQABgEACgDQACgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_88.setTransform(253.5,204.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#373535").s().p("AgTA+QgHgCgGgEIAEgMQAEADAHACQAGACAJAAQAGAAAHgDQAGgDAEgHQADgHABgKIAAgKIgBAAQgEAGgGAEQgIAEgIAAQgLAAgJgFQgIgGgFgJQgFgJABgMQgBgPAGgKQAFgKAKgGQAIgFALAAQAGAAAFACQAGACADAEQAEADACAEIAAAAIABgNIAOAAIgBAKIAAAOIAAAxQAAAPgDAKQgDAJgHAGQgGAGgJACQgHACgIAAIgQgBgAgRgpQgGAJgBAPQAAAJAEAHQACAGAGAEQAGAEAHAAQAHAAAHgEQAFgEADgHIABgEIABgEIAAgQIgBgEIAAgDQgDgHgFgFQgGgFgJAAQgKAAgIAJg");
	this.shape_89.setTransform(246.2,208.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#373535").s().p("AgSAnQgJgEgFgKQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALAAQALgBAHAEQAHAFAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHACIgSABQgMAAgKgGgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_90.setTransform(237,206.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#373535").s().p("AgOA9QgHgEgFgIIAAAAIgBAOIgOAAIABgLIAAgLIAAhpIAQAAIAAA3QAEgIAIgEQAIgEAJAAQAKAAAJAFQAIAGAFAKQAFAJAAANQgBAQgFAKQgGALgJAEQgJAGgKAAQgIAAgIgEgAgOgIQgHAGgDAIIAAADIAAAEIAAAPIAAADIAAADQADAIAGAFQAGAGAJgBQAMAAAGgJQAIgJAAgPQAAgJgEgHQgCgGgGgFQgFgEgJAAQgIAAgGAEg");
	this.shape_91.setTransform(227.7,204.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#373535").s().p("AAWAtIAAgyQgBgHgCgFQgCgGgEgEQgEgEgIAAQgGABgGAEQgGAFgCAHIAAAEIgBADIAAA0IgQAAIAAg/IAAgNIgBgLIAPAAIABAPIAAAAQACgEAEgEQAEgEAFgCQAGgCAHAAIAJABQAFACAFAEQAFAEADAHQADAHAAALIAAA0g");
	this.shape_92.setTransform(213.5,206.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#373535").s().p("AgWAoQgJgFgFgKQgFgLAAgOQAAgNAFgLQAGgJAJgGQALgFALAAQAMAAAJAFQAKAGAFAKQAGAKgBANQAAAQgGAKQgGAKgKAFQgKAEgKAAQgMAAgKgFgAgOgbQgGAEgDAIQgCAHAAAIQgBAKAEAHQADAIAGAEQAGAEAHABQAIgBAFgEQAHgEACgIQAEgHABgKQgBgHgDgIQgCgHgGgFQgFgFgKgBQgIABgGAFg");
	this.shape_93.setTransform(203.5,206.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgCgDgBgEQABgEACgDQACgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_94.setTransform(196.5,204.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABALIgGACIgIABQgGAAgEgCg");
	this.shape_95.setTransform(191.3,205.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgBQABgFgCgEQgBgFgEgDQgFgDgHgBQgHAAgFACQgGACgFACIgEgKQAGgEAHgCQAIgCAHABQANAAAHAFQAIAFACAIQADAIAAAJIAAAgIAAALIACAKIgPAAIgBgLIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGABQAHAAAGgFQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_96.setTransform(183.9,206.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#373535").s().p("AAWAtIAAgyQgBgHgCgFQgCgGgEgEQgEgEgIAAQgGABgGAEQgGAFgCAHIAAAEIgBADIAAA0IgQAAIAAg/IAAgNIgBgLIAPAAIABAPIAAAAQACgEAEgEQAEgEAFgCQAGgCAHAAIAJABQAFACAFAEQAFAEADAHQADAHAAALIAAA0g");
	this.shape_97.setTransform(174.8,206.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#373535").s().p("AgSAnQgJgEgFgKQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALAAQALgBAHAEQAHAFAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLAEIgSABQgMAAgKgGgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_98.setTransform(165.3,206.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#373535").s().p("AgTA+QgIgCgFgEIAEgMQAEADAHACQAHACAHAAQAIAAAGgDQAGgDAEgHQADgHAAgKIAAgKIAAAAQgDAGgIAEQgGAEgKAAQgKAAgJgFQgIgGgFgJQgEgJgBgMQABgPAFgKQAGgKAIgGQAKgFAKAAQAGAAAFACQAGACAEAEQADADACAEIAAAAIABgNIANAAIAAAKIAAAOIAAAxQAAAPgDAKQgDAJgGAGQgHAGgJACQgHACgIAAIgQgBgAgQgpQgIAJABAPQAAAJACAHQADAGAGAEQAGAEAHAAQAIAAAFgEQAHgEACgHIABgEIAAgEIAAgQIAAgEIgBgDQgCgHgGgFQgFgFgIAAQgLAAgHAJg");
	this.shape_99.setTransform(155.5,208.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#373535").s().p("AgjAyIAHgDIAHgFIAGgHQAFgFACgFIABgCIAAgCIAAgCIAAgDIghhPIARAAIATA0IAEAJIABAIIAAAAIADgIIADgJIARg0IARAAIgXA+IgLAZIgIASQgGAGgEAFQgHAFgFACIgIADg");
	this.shape_100.setTransform(146.7,208.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#373535").s().p("AAWAsIgNgUIgFgHIgEgIIAAAAIgEAIIgFAHIgMAUIgSAAIAfgsIgdgrIARAAIANATIAEAHIAEAIIAAAAIAEgIIAFgHIAMgTIARAAIgeArIAfAsg");
	this.shape_101.setTransform(137.9,206.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#373535").s().p("AgdA2QgLgHgIgOQgHgOAAgSQAAgTAIgNQAHgPANgIQANgIAPAAQAQAAANAIQAMAIAHANQAGAOABASQgBAVgHAOQgIAOgNAHQgNAHgOAAQgQABgNgJgAgUgqQgJAHgEALQgFAMAAAMQAAAOAFALQAEALAJAHQAIAGAMABQANgBAIgGQAJgHAEgLQAFgMAAgNQAAgJgDgJQgCgJgFgHQgFgHgHgEQgHgEgKAAQgMAAgIAHg");
	this.shape_102.setTransform(127.7,204.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]}).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},608).wait(1));

	// fMRI experiments usually use a block design where the stimulus is presented for 15 to 20 seconds followed by a 15 to 20 second rest period.
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#5A5B5A").p("Eg55AAAMBzzAAA");
	this.shape_103.setTransform(395.1,252.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#373535").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQACADABAEQgBAFgCADQgDADgFAAQgEAAgDgDg");
	this.shape_104.setTransform(333.4,317.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#373535").s().p("AgWA8QgJgGgEgKQgFgKAAgOQAAgOAFgJQAFgLAJgFQAJgGALAAQAJAAAGAEQAHAEADAFIAAAAIAAg0IAQAAIAABpIAAAMIABAKIgOAAIgBgPIgBAAQgDAHgIAFQgHAFgKAAQgKAAgJgFgAgMgIQgGAEgDAGQgDAJAAAJQAAAJADAHQADAIAFAEQAGAEAIAAQAHAAAHgFQAGgFADgIIAAgEIAAgEIAAgPIAAgDIAAgDQgCgHgGgGQgGgEgJAAQgIgBgFAFg");
	this.shape_105.setTransform(326.3,312.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#373535").s().p("AgVAoQgKgGgFgKQgGgJAAgOQAAgOAGgKQAGgLAKgFQAKgGAKABQANgBAKAGQAJAGAFAKQAFAKABANQgBAPgGALQgHAKgKAEQgJAGgKAAQgMgBgJgFgAgOgbQgGAFgDAHQgCAIgBAHQABAKADAIQADAHAGAEQAGAFAHgBQAHABAHgFQAFgEAEgIQADgIAAgJQAAgHgCgIQgDgHgFgFQgHgGgJAAQgIAAgGAGg");
	this.shape_106.setTransform(316.5,314.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_107.setTransform(309.5,312.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#373535").s().p("AgUAtIAAg7IAAgPIgBgMIAOAAIABARIAAAAQADgJAGgGQAGgEAIAAIADAAIACAAIAAAPIgDgBIgCAAQgJAAgFAGQgFAGgCAJIAAADIAAAEIAAAug");
	this.shape_108.setTransform(304.8,314.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#373535").s().p("AgSAnQgJgEgFgLQgFgJAAgNQAAgNAFgLQAEgKAKgGQAJgHALABQALAAAHADQAHAEAEAHQAEAGACAIQACAGgBAGIAAAEIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALIgLAEIgSACQgMgBgKgGgAAXgHQAAgGgCgFQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_109.setTransform(296.9,314.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#373535").s().p("AgoA+IAAhdIAAgPIgBgNIAPAAIAAAPIABAAQAEgIAJgFQAHgEAKAAQAKAAAJAFQAIAGAEAKQAFAKABANQAAAQgGAJQgGAKgJAFQgIAGgLAAQgIAAgGgEQgIgDgEgHIAAAvgAgOgrQgHAFgCAJIgBADIAAADIAAAPIAAAEIAAADQADAHAGAFQAGAFAJAAQAIAAAGgEQAFgEAEgIQADgGAAgKQAAgJgDgHQgDgIgGgEQgGgFgIAAQgIAAgGAGg");
	this.shape_110.setTransform(287.6,316);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_111.setTransform(275.4,313.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#373535").s().p("AgQAsQgHgCgEgDIADgMIAJAEQAGACAGAAQAIAAAEgDQAFgEgBgFQAAgGgDgEQgEgEgIgDQgLgEgHgFQgFgGAAgIQAAgHADgGQAFgGAGgDQAGgEAJABQAHAAAGABQAFACAEACIgFAMIgHgEQgEgBgGgBQgGABgEADQgEADAAAFQAAAFAEADQAFAEAGADQAMAEAGAFQAFAHABAJQAAAMgJAHQgIAHgPABQgHAAgGgCg");
	this.shape_112.setTransform(268.9,314.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#373535").s().p("AgSAnQgJgEgFgLQgFgJAAgNQAAgNAFgLQAEgKAKgGQAJgHALABQALAAAHADQAHAEAEAHQAEAGACAIQACAGgBAGIAAAEIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALIgLAEIgSACQgMgBgKgGgAAXgHQAAgGgCgFQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_113.setTransform(260.8,314.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#373535").s().p("AgUAtIAAg7IAAgPIgBgMIAOAAIABARIAAAAQADgJAGgGQAGgEAIAAIADAAIACAAIAAAPIgDgBIgCAAQgJAAgFAGQgFAGgCAJIAAADIAAAEIAAAug");
	this.shape_114.setTransform(254,314.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#373535").s().p("AgWA8QgIgGgFgKQgFgKAAgOQAAgOAFgJQAFgLAKgFQAIgGALAAQAJAAAHAEQAGAEADAFIAAAAIAAg0IARAAIAABpIAAAMIAAAKIgOAAIgBgPIgBAAQgDAHgHAFQgIAFgKAAQgKAAgJgFgAgMgIQgGAEgDAGQgDAJAAAJQAAAJADAHQADAIAGAEQAFAEAHAAQAJAAAGgFQAHgFACgIIAAgEIAAgEIAAgPIAAgDIAAgDQgCgHgGgGQgGgEgJAAQgHgBgGAFg");
	this.shape_115.setTransform(241.5,312.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#373535").s().p("AAWAtIAAgyQAAgHgCgFQgDgHgEgDQgFgDgGgBQgIABgFAFQgGAEgCAHIgBADIAAAEIAAA0IgQAAIAAg/IAAgNIgBgKIAPAAIABAOIAAAAQACgFAEgDQAEgEAGgCQAFgCAGAAIAKABQAGABAEAFQAFAEADAHQADAIABALIAAAzg");
	this.shape_116.setTransform(231.7,314.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#373535").s().p("AgWAoQgIgGgGgKQgFgJgBgOQABgOAFgKQAGgLAJgFQAKgGAMABQAMgBAJAGQAKAGAFAKQAGAKAAANQgBAPgGALQgGAKgLAEQgJAGgKAAQgMgBgKgFgAgOgbQgGAFgDAHQgDAIABAHQAAAKADAIQADAHAGAEQAGAFAHgBQAIABAFgFQAHgEACgIQAEgIABgJQAAgHgEgIQgCgHgFgFQgHgGgJAAQgIAAgGAGg");
	this.shape_117.setTransform(221.7,314.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#373535").s().p("AgNAnQgKgFgFgKQgFgKAAgNQAAgNAFgKQAGgKALgHQAKgFANAAQAHAAAGABIAJADIgDANQgDgDgFgBIgLgBQgKAAgGAFQgGAEgEAIQgDAHAAAIQAAAKAEAIQAEAHAGAEQAGADAJAAIALgBIAIgCIADALQgDACgHACIgPACQgMgBgKgGg");
	this.shape_118.setTransform(212.9,314.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#373535").s().p("AgSAnQgJgEgFgLQgFgJAAgNQAAgNAFgLQAEgKAKgGQAJgHALABQALAAAHADQAHAEAEAHQAEAGACAIQACAGgBAGIAAAEIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALIgLAEIgSACQgMgBgKgGgAAXgHQAAgGgCgFQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_119.setTransform(204.3,314.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#373535").s().p("AgQAsQgHgCgFgDIAFgMIAJAEQAGACAFAAQAIAAAEgDQAEgEABgFQgBgGgDgEQgEgEgIgDQgLgEgHgFQgFgGAAgIQAAgHADgGQAEgGAHgDQAHgEAIABQAHAAAFABQAGACADACIgDAMIgIgEQgEgBgGgBQgHABgDADQgEADAAAFQAAAFAEADQAFAEAGADQAMAEAGAFQAGAHAAAJQAAAMgJAHQgIAHgPABQgHAAgGgCg");
	this.shape_120.setTransform(196.2,314.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#373535").s().p("AgUA1QgJgHgFgNQgEgNgBgUQAAgSAGgOQAFgNAJgIQAJgGALgBQATABAKAPQAKAQAAAcQAAAdgLAPQgKAQgTABQgMAAgIgIgAgQgjQgHAMAAAXQAAAYAHAMQAGAMAKAAQAIAAAFgGQAGgFACgLQADgMAAgOQAAgOgDgLQgCgLgFgFQgGgGgIAAQgKAAgGAMg");
	this.shape_121.setTransform(184.2,312.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#373535").s().p("AgkA8IAAgLIAMgMIAYgYQAJgLAFgHQAEgJABgJQAAgGgCgFQgCgFgGgDQgFgDgIAAQgHAAgHADQgGADgEAEIgGgLQAGgGAJgDQAJgEAKAAQALABAIAFQAIAFADAHQAFAIAAAIQgBALgFAKQgFAJgIALIgVAVIgKAJIAAAAIA0AAIAAAOg");
	this.shape_122.setTransform(174.9,312.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#373535").s().p("AgVAoQgJgGgGgKQgGgJAAgOQAAgOAGgKQAGgLAKgFQAJgGALABQANgBAKAGQAJAGAFAKQAFAKABANQgBAPgGALQgHAKgKAEQgJAGgKAAQgMgBgJgFgAgOgbQgGAFgDAHQgCAIgBAHQABAKADAIQADAHAGAEQAGAFAHgBQAHABAHgFQAFgEAEgIQADgIABgJQAAgHgDgIQgDgHgFgFQgHgGgJAAQgIAAgGAGg");
	this.shape_123.setTransform(161.6,314.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_124.setTransform(153.8,313.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#373535").s().p("AgXA5QgIgCgEgDIAEgMIAKAEQAHACAIAAQAGAAAHgCQAGgDAEgGQADgGAAgHQAAgMgIgIQgIgFgQAAIgJAAIgHABIAHg4IA3AAIAAANIgrAAIgFAeIAEgBIAGAAIAMABQAGACAGAEQAHADAFAHQAEAIAAAKQAAAMgFAJQgGAJgKAFQgJAFgMABQgKgBgHgCg");
	this.shape_125.setTransform(142.2,312.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#373535").s().p("AAFA7IAAhmIgBAAIgTALIgDgMIAZgNIAMAAIAAB0g");
	this.shape_126.setTransform(132.4,312.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgGQAAgQAOgIQANgIAYAAIAAgCQABgEgCgEQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFAEIgEgLQAGgDAHgCQAIgCAHAAQANgBAHAGQAIAFACAIQADAIAAAJIAAAfIAAALIACALIgPAAIgBgMIgBAAQgDAGgHADQgHAFgIAAQgJAAgGgFgAABAAQgIACgFAEQgGAEAAAJQAAAHAEAEQAFADAGAAQAHAAAGgEQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_127.setTransform(120.2,314.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#373535").s().p("AgjAyIAGgDIAIgFIAHgHQAEgFACgFIABgDIABgBIgBgCIAAgCIghhPIASAAIASAzIADAJIACAIIABAAIACgIIADgJIARgzIARAAIgYA+IgKAYIgJASQgFAGgFAFQgFAFgGADIgIACg");
	this.shape_128.setTransform(108,316.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#373535").s().p("AgOA9QgHgEgFgJIAAAAIgBAPIgOAAIABgKIAAgMIAAhpIAQAAIAAA3QAFgHAHgEQAIgFAJAAQALAAAIAGQAIAFAFAKQAFAJAAANQgBAQgGAKQgFAKgJAGQgJAFgKAAQgIAAgIgEgAgOgIQgGAGgEAIIAAADIAAADIAAAQIAAADIAAADQADAIAGAFQAGAFAJABQAMgBAGgJQAIgJAAgPQAAgJgDgHQgDgHgGgEQgGgFgIABQgIAAgGAEg");
	this.shape_129.setTransform(99.1,312.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#373535").s().p("AgWA8QgIgGgFgKQgFgKAAgOQAAgOAFgJQAFgLAJgFQAJgGALAAQAJAAAGAEQAHAEADAFIAAAAIAAg0IARAAIAABpIAAAMIAAAKIgOAAIgBgPIgBAAQgDAHgIAFQgHAFgKAAQgKAAgJgFgAgMgIQgGAEgDAGQgDAJAAAJQAAAJADAHQADAIAGAEQAFAEAHAAQAIAAAHgFQAGgFADgIIAAgEIAAgEIAAgPIAAgDIAAgDQgCgHgGgGQgGgEgJAAQgIgBgFAFg");
	this.shape_130.setTransform(84.5,312.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#373535").s().p("AgSAnQgJgEgFgLQgFgJAAgNQAAgNAFgLQAEgKAKgGQAJgHALABQALAAAHADQAHAEAEAHQAEAGACAIQACAGgBAGIAAAEIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALIgLAEIgSACQgMgBgKgGgAAXgHQAAgGgCgFQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_131.setTransform(75.2,314.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#373535").s().p("AAVAsIgOgqIgEgNIgDgOIAAAAIgDAOIgFANIgOAqIgOAAIgahWIAQAAIALArIAEAOIADAOIAAAAIAEgOIAEgOIAOgrIANAAIANAqIAEAPIAEAOIAAAAIADgOIAEgPIAMgqIAQAAIgcBWg");
	this.shape_132.setTransform(64.3,314.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#373535").s().p("AgWAoQgIgGgGgKQgFgJgBgOQABgOAFgKQAGgLAJgFQALgGALABQAMgBAJAGQAKAGAFAKQAGAKgBANQAAAPgGALQgGAKgKAEQgKAGgKAAQgMgBgKgFgAgOgbQgGAFgDAHQgDAIABAHQgBAKAEAIQADAHAGAEQAGAFAHgBQAIABAFgFQAHgEACgIQAEgIABgJQAAgHgEgIQgCgHgGgFQgFgGgKAAQgIAAgGAGg");
	this.shape_133.setTransform(52.9,314.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_134.setTransform(45.8,312.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_135.setTransform(41.5,312.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#373535").s().p("AgVAoQgKgGgFgKQgGgJABgOQgBgOAGgKQAGgLAKgFQAKgGAKABQANgBAKAGQAJAGAFAKQAFAKABANQgBAPgGALQgHAKgKAEQgJAGgKAAQgMgBgJgFgAgOgbQgGAFgDAHQgDAIAAAHQAAAKAEAIQADAHAGAEQAGAFAHgBQAHABAHgFQAGgEADgIQADgIAAgJQAAgHgCgIQgDgHgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_136.setTransform(34.5,314.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#373535").s().p("AgPBBIAAhKIgNAAIAAgMIANAAIAAgEQAAgKACgIQADgIAFgFQAFgEAEgCIALgCIAIABIAFACIgCAMIgEgCIgGAAQgGAAgEADQgEAEgBAGQgBAFAAAHIAAAFIAUAAIAAAMIgUAAIAABKg");
	this.shape_137.setTransform(27.6,312.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#373535").s().p("AgQArQgHgBgFgCIAFgNIAJAFQAFACAGAAQAIgBAEgDQAEgEAAgGQAAgFgDgEQgEgDgIgDQgLgFgHgFQgFgGAAgIQAAgHADgGQAEgFAHgEQAGgDAJgBQAHABAFABQAGACADACIgDALIgIgDQgEgCgGAAQgGAAgEAEQgEADAAAFQAAAFAEAEQAFADAGADQAMAEAGAGQAFAFABAKQAAAMgJAHQgIAHgPAAQgHAAgGgCg");
	this.shape_138.setTransform(745.3,289.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#373535").s().p("AgWA7QgIgFgFgKQgFgKAAgNQAAgPAFgJQAGgKAIgHQAJgFALAAQAJAAAGAEQAHAEADAFIAAAAIAAg0IAQAAIAABoIAAAMIABALIgOAAIgBgPIAAAAQgEAHgIAFQgHAFgKAAQgLAAgIgGgAgMgIQgGAEgDAHQgDAIAAAJQAAAJADAHQADAIAFAEQAGAEAIAAQAHAAAHgFQAGgEADgKIAAgDIAAgEIAAgOIAAgEIAAgEQgCgGgGgFQgGgGgJAAQgHABgGAEg");
	this.shape_139.setTransform(736.4,287.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#373535").s().p("AAVAsIAAgxQAAgHgCgFQgCgGgEgEQgFgDgHAAQgHAAgFAEQgGAFgCAHIAAAEIgBADIAAAzIgQAAIAAg+IAAgMIAAgMIANAAIABAPIABAAQACgEAEgEQAEgEAFgCQAGgCAHgBIAKACQAEACAGAEQAEAEADAHQADAHAAALIAAAzg");
	this.shape_140.setTransform(726.6,289);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#373535").s().p("AgVAoQgKgFgFgKQgGgLABgOQgBgNAGgLQAGgJAKgGQAKgFAKgBQANABAKAFQAJAGAFAKQAFAKAAANQAAAPgGALQgHAKgKAFQgJAEgKAAQgMAAgJgFgAgOgcQgGAFgDAIQgDAHAAAIQAAAKAEAHQADAIAGAEQAGAEAHABQAHgBAHgEQAGgEADgIQADgHAAgKQAAgHgCgIQgDgHgFgGQgHgEgJgBQgIABgGAEg");
	this.shape_141.setTransform(716.7,289.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#373535").s().p("AgNAoQgKgGgFgKQgFgKAAgNQAAgMAFgLQAGgLALgFQAKgHANAAQAHABAGABIAJADIgDAMIgIgCIgLgCQgKABgGADQgGAFgEAHQgDAIAAAIQAAAKAEAHQAEAIAGADQAGAFAJAAIALgBIAIgEIADAMQgDACgHABIgPACQgMAAgKgFg");
	this.shape_142.setTransform(707.9,289.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLADIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_143.setTransform(699.3,289.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#373535").s().p("AgRArQgGgBgEgCIADgNIAJAFQAHACAGAAQAHgBAEgDQAFgEgBgGQAAgFgEgEQgDgDgIgDQgMgFgFgFQgGgGAAgIQAAgHADgGQAFgFAGgEQAHgDAIgBQAHABAGABQAFACAEACIgFALIgGgDQgFgCgGAAQgHAAgDAEQgEADAAAFQAAAFAEAEQAEADAIADQALAEAGAGQAFAFAAAKQAAAMgIAHQgJAHgOAAQgHAAgHgCg");
	this.shape_144.setTransform(691.2,289.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#373535").s().p("AgUA1QgJgGgFgOQgEgNgBgTQAAgUAGgNQAFgOAJgGQAJgIALABQATAAAKAPQAKAPAAAcQAAAegLAPQgKARgTgBQgMABgIgIgAgQgjQgHANAAAXQAAAWAHANQAGAMAKAAQAIAAAFgGQAGgGACgLQADgKAAgPQAAgOgDgKQgCgLgFgGQgGgGgIAAQgKAAgGAMg");
	this.shape_145.setTransform(679.2,287.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#373535").s().p("AglA7IAAgJIANgMIAYgZQAJgKAFgIQAFgJgBgIQAAgHgCgEQgCgGgFgDQgFgDgHAAQgJAAgGADQgHADgEADIgFgLQAHgEAIgEQAIgEAKABQAMAAAIAEQAIAGAEAIQADAHAAAJQAAAKgEAKQgFAJgKAKIgUAXIgJAIIAAABIAzAAIAAAMg");
	this.shape_146.setTransform(669.9,287.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#373535").s().p("AgWAoQgJgFgFgKQgGgLABgOQgBgNAGgLQAGgJAJgGQALgFALgBQAMABAJAFQAKAGAFAKQAFAKAAANQAAAPgGALQgHAKgJAFQgKAEgKAAQgMAAgKgFgAgOgcQgGAFgDAIQgCAHAAAIQAAAKADAHQADAIAGAEQAGAEAHABQAIgBAFgEQAGgEADgIQAEgHAAgKQAAgHgDgIQgCgHgGgGQgFgEgKgBQgIABgGAEg");
	this.shape_147.setTransform(656.6,289.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABALIgGACIgIABQgGAAgEgCg");
	this.shape_148.setTransform(648.7,287.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#373535").s().p("AgXA5QgIgCgEgDIAEgMIAKAFQAHACAIAAQAGAAAHgEQAGgDAEgFQADgGAAgIQAAgLgIgHQgIgHgQAAIgJABIgHAAIAHg4IA3AAIAAAOIgrAAIgFAeIAEAAIAGgBIAMACQAGABAGADQAHAFAFAGQAEAIAAALQAAALgFAJQgGAJgKAFQgJAFgMAAQgKABgHgDg");
	this.shape_149.setTransform(637.1,287.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#373535").s().p("AAFA6IAAhkIgBAAIgTALIgEgNIAZgOIAOAAIAAB0g");
	this.shape_150.setTransform(627.3,287.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#373535").s().p("AgUAsIAAg7IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJgBgFAGQgFAFgCAKIAAADIAAAEIAAAtg");
	this.shape_151.setTransform(617.2,289);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#373535").s().p("AgWAoQgJgFgFgKQgGgLABgOQgBgNAGgLQAGgJAJgGQALgFALgBQAMABAJAFQAKAGAFAKQAGAKgBANQAAAPgGALQgHAKgJAFQgKAEgKAAQgMAAgKgFgAgOgcQgGAFgDAIQgCAHAAAIQAAAKADAHQADAIAGAEQAGAEAHABQAIgBAGgEQAFgEADgIQAEgHAAgKQAAgHgDgIQgCgHgGgGQgFgEgKgBQgIABgGAEg");
	this.shape_152.setTransform(608.9,289.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#373535").s().p("AgPBBIAAhKIgNAAIAAgMIANAAIAAgEQgBgKADgIQACgIAGgFQAFgEAEgCIALgCIAIABIAGACIgDAMIgEgCIgGAAQgGAAgEADQgEAEgBAGQgBAFAAAHIAAAFIAVAAIAAAMIgVAAIAABKg");
	this.shape_153.setTransform(602,286.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#373535").s().p("AgWA7QgIgFgFgKQgFgKAAgNQAAgPAFgJQAFgKAKgHQAIgFALAAQAJAAAHAEQAGAEADAFIABAAIAAg0IAQAAIAABoIAAAMIAAALIgOAAIgBgPIgBAAQgDAHgHAFQgIAFgKAAQgKAAgJgGgAgMgIQgGAEgDAHQgDAIAAAJQAAAJADAHQADAIAGAEQAFAEAHAAQAJAAAGgFQAHgEACgKIABgDIAAgEIAAgOIAAgEIgBgEQgCgGgGgFQgGgGgJAAQgHABgGAEg");
	this.shape_154.setTransform(589.8,287.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLADIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_155.setTransform(580.5,289.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABALIgGACIgIABQgGAAgEgCg");
	this.shape_156.setTransform(573.1,287.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#373535").s().p("AAWAsIAAgxQAAgHgCgFQgDgGgEgEQgFgDgGAAQgIAAgFAEQgGAFgCAHIgBAEIAAADIAAAzIgQAAIAAg+IAAgMIgBgMIAPAAIABAPIAAAAQACgEAEgEQAEgEAGgCQAFgCAGgBIAKACQAGACAEAEQAFAEADAHQADAHABALIAAAzg");
	this.shape_157.setTransform(565.2,289);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLADIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_158.setTransform(555.7,289.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#373535").s().p("AgRArQgGgBgEgCIADgNIAJAFQAHACAGAAQAHgBAEgDQAFgEgBgGQAAgFgEgEQgDgDgIgDQgMgFgFgFQgGgGAAgIQAAgHADgGQAFgFAGgEQAHgDAIgBQAHABAGABQAFACAEACIgFALIgGgDQgFgCgGAAQgHAAgDAEQgEADAAAFQAAAFAEAEQAEADAIADQALAEAGAGQAFAFAAAKQAAAMgIAHQgJAHgOAAQgHAAgHgCg");
	this.shape_159.setTransform(547.6,289.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_160.setTransform(539.6,289.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#373535").s().p("AgUAsIAAg7IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJgBgFAGQgFAFgCAKIAAADIAAAEIAAAtg");
	this.shape_161.setTransform(532.8,289);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#373535").s().p("AgoA+IAAhdIAAgPIgBgNIAPAAIABAPIAAAAQAFgIAHgFQAIgEAJAAQAMAAAHAFQAJAGAFAKQAEAKAAANQABAQgGAJQgFAKgKAFQgIAGgLAAQgHAAgIgEQgHgDgEgHIAAAvgAgOgrQgHAFgCAJIgBADIAAADIAAAPIAAAEIAAADQADAHAGAFQAGAFAJAAQAHAAAGgEQAHgEACgIQAEgGAAgKQAAgJgEgHQgDgIgFgEQgGgFgIAAQgHAAgHAGg");
	this.shape_162.setTransform(524.6,290.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#373535").s().p("AgQArQgHgBgFgCIAFgNIAJAFQAFACAGAAQAIgBAEgDQAEgEAAgGQAAgFgDgEQgEgDgIgDQgLgFgHgFQgFgGAAgIQAAgHADgGQAEgFAHgEQAGgDAJgBQAHABAFABQAGACADACIgEALIgHgDQgEgCgGAAQgGAAgEAEQgEADAAAFQAAAFAEAEQAFADAGADQAMAEAGAGQAFAFABAKQAAAMgJAHQgIAHgPAAQgHAAgGgCg");
	this.shape_163.setTransform(511.8,289.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_164.setTransform(506.1,287.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#373535").s().p("AgRArQgGgBgFgCIAFgNIAJAFQAFACAHAAQAHgBAEgDQAEgEABgGQAAgFgFgEQgDgDgIgDQgLgFgHgFQgFgGAAgIQAAgHAEgGQAEgFAGgEQAHgDAIgBQAHABAFABQAGACADACIgDALIgHgDQgFgCgGAAQgGAAgEAEQgEADAAAFQAAAFAEAEQAEADAIADQALAEAGAGQAGAFgBAKQABAMgJAHQgJAHgOAAQgHAAgHgCg");
	this.shape_165.setTransform(496.6,289.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#373535").s().p("AgUAqQgGgEgFgIQgFgJAAgPIAAgyIAQAAIAAAwQAAAMAEAIQAFAHALABQAEgBAEgCQAEgCADgDQADgDABgEIABgEIAAgEIAAg1IARAAIAAA/IAAANIAAAKIgOAAIgBgOIAAAAQgCAEgEADQgDAEgGADQgGADgHgBQgHAAgHgCg");
	this.shape_166.setTransform(488.1,289.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_167.setTransform(481,287);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#373535").s().p("AgUAqQgHgEgEgIQgFgJAAgPIAAgyIAQAAIAAAwQAAAMAEAIQAFAHAKABQAFgBAEgCQAEgCADgDQADgDACgEIABgEIAAgEIAAg1IAQAAIAAA/IAAANIAAAKIgOAAIgBgOIAAAAQgCAEgEADQgDAEgHADQgFADgHgBQgHAAgHgCg");
	this.shape_168.setTransform(474,289.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#373535").s().p("AAvAsIAAgwQAAgMgEgIQgFgGgKAAQgHAAgFADQgFAFgCAGIgBAEIAAAEIAAA0IgPAAIAAgzQABgLgFgGQgEgHgKABQgEAAgFACQgEACgCADQgDAEgBAEIgBAEIgBAEIAAAzIgPAAIAAg+IAAgMIgBgMIAPAAIAAAPIAAAAIAHgJQADgDAGgCQAEgCAIgBQAJAAAGAGQAGAEADAIIAAAAIAEgHIAGgEQADgDAFgCQAFgBAGgBQAGAAAGADQAHAEAFAIQAEAIAAAPIAAAyg");
	this.shape_169.setTransform(461.5,289);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQACADABAEQAAAEgDADQgCADgFAAQgDAAgDgDg");
	this.shape_170.setTransform(451.9,287.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABALIgGACIgIABQgGAAgEgCg");
	this.shape_171.setTransform(446.8,287.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#373535").s().p("AgRArQgGgBgFgCIAEgNIAJAFQAGACAHAAQAHgBAEgDQAFgEAAgGQAAgFgFgEQgDgDgIgDQgMgFgFgFQgGgGAAgIQAAgHAEgGQAEgFAGgEQAGgDAJgBQAHABAFABQAGACADACIgDALIgHgDQgFgCgGAAQgGAAgEAEQgEADAAAFQAAAFAEAEQAEADAIADQALAEAGAGQAGAFgBAKQABAMgJAHQgJAHgOAAQgHAAgHgCg");
	this.shape_172.setTransform(440.3,289.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_173.setTransform(428.4,289.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgEgEgEQgFgEgHAAQgHABgFAEQgGAEgCAGIgBADIAAAFIAAA0IgQAAIAAh/IAQAAIAAA2IAAAAIAFgFIAGgGIAIgDIAIgBIAJACQAGABAEAEQAFAFADAHQADAGAAALIAAA0g");
	this.shape_174.setTransform(418.9,287);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABALIgGACIgIABQgGAAgEgCg");
	this.shape_175.setTransform(410.9,287.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_176.setTransform(399.7,289.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#373535").s().p("AgUAsIAAg7IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJgBgFAGQgFAFgCAKIAAADIAAAEIAAAtg");
	this.shape_177.setTransform(392.9,289);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLADIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_178.setTransform(385,289.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgEgEgEQgFgEgHAAQgHABgFAEQgGAEgCAGIgBADIAAAFIAAA0IgQAAIAAh/IAQAAIAAA2IAAAAIAFgFIAGgGIAIgDIAIgBIAJACQAGABAEAEQAFAFADAHQADAGAAALIAAA0g");
	this.shape_179.setTransform(375.5,287);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#373535").s().p("AAVArIgOgpIgEgNIgDgPIAAAAIgDAPIgFANIgOApIgOAAIgahWIAQAAIALArIAEAPIADANIAAAAIAEgNIAEgOIAOgsIANAAIANArIAEAPIAEANIAAAAIADgNIAEgPIAMgrIAQAAIgcBWg");
	this.shape_180.setTransform(363.9,289.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#373535").s().p("AAVAsIAAgxQAAgHgBgFQgCgGgFgEQgFgDgGAAQgIAAgFAEQgGAFgCAHIgBAEIAAADIAAAzIgQAAIAAg+IAAgMIgBgMIAOAAIABAPIABAAQACgEAEgEQAEgEAGgCQAFgCAGgBIAKACQAFACAGAEQAEAEADAHQADAHABALIAAAzg");
	this.shape_181.setTransform(348.4,289);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#373535").s().p("AgTA+QgHgCgGgEIAEgMQAEADAHACQAGACAJAAQAGAAAHgDQAGgDAEgHQADgHAAgKIAAgKIAAAAQgEAGgGAEQgIAEgIAAQgLAAgJgFQgIgGgFgJQgFgJABgMQgBgPAGgKQAFgKAJgGQAKgFAJAAQAHAAAGACQAFACAEAEQADADABAEIABAAIABgNIAOAAIgBAKIAAAOIAAAxQAAAPgDAKQgDAJgHAGQgGAGgIACQgJACgHAAIgQgBgAgRgpQgGAJAAAPQAAAJADAHQACAGAGAEQAGAEAHAAQAHAAAHgEQAFgEADgHIABgEIAAgEIAAgQIAAgEIAAgDQgDgHgFgFQgGgFgJAAQgKAAgIAJg");
	this.shape_182.setTransform(338.2,290.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgCgDgBgEQABgEACgDQACgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_183.setTransform(331.4,287.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#373535").s().p("AgQArQgHgBgEgCIADgNIAJAFQAHACAFAAQAIgBAEgDQAFgEgBgGQAAgFgDgEQgEgDgIgDQgMgFgFgFQgGgGAAgIQAAgHADgGQAFgFAGgEQAGgDAJgBQAHABAGABQAFACAEACIgFALIgHgDQgEgCgGAAQgHAAgDAEQgEADAAAFQAAAFAEAEQAFADAGADQAMAEAGAGQAFAFABAKQgBAMgIAHQgJAHgOAAQgHAAgGgCg");
	this.shape_184.setTransform(325.7,289.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_185.setTransform(317.6,289.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#373535").s().p("AgWA7QgIgFgFgKQgFgKAAgNQAAgPAFgJQAGgKAJgHQAIgFALAAQAJAAAHAEQAGAEADAFIABAAIAAg0IAPAAIAABoIAAAMIABALIgOAAIgBgPIAAAAQgEAHgHAFQgIAFgKAAQgKAAgJgGgAgMgIQgGAEgDAHQgDAIAAAJQAAAJADAHQACAIAGAEQAGAEAHAAQAJAAAGgFQAHgEACgKIABgDIAAgEIAAgOIAAgEIgBgEQgCgGgGgFQgGgGgJAAQgIABgFAEg");
	this.shape_186.setTransform(307.8,287.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#373535").s().p("AARBAIgdgpIgIAIIAAAhIgQAAIAAh/IAQAAIAABQIAFgFIADgFIAZgdIATAAIghAjIAmAzg");
	this.shape_187.setTransform(295.7,287);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#373535").s().p("AgNAoQgKgGgFgKQgFgKAAgNQAAgMAFgLQAGgLALgFQAKgHANAAQAHABAGABIAJADIgDAMIgIgCIgLgCQgKABgGADQgGAFgEAHQgDAIAAAIQAAAKAEAHQAEAIAGADQAGAFAJAAIALgBIAIgEIADAMQgDACgHABIgPACQgMAAgKgFg");
	this.shape_188.setTransform(286.8,289.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#373535").s().p("AgVAoQgJgFgGgKQgGgLAAgOQAAgNAGgLQAGgJAKgGQAJgFALgBQANABAKAFQAJAGAFAKQAFAKABANQgBAPgGALQgHAKgKAFQgJAEgKAAQgMAAgJgFgAgOgcQgGAFgDAIQgCAHgBAIQABAKADAHQADAIAGAEQAGAEAHABQAHgBAHgEQAFgEAEgIQADgHABgKQgBgHgCgIQgDgHgFgGQgHgEgJgBQgIABgGAEg");
	this.shape_189.setTransform(277.7,289.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_190.setTransform(270.6,287);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#373535").s().p("AgNA9QgIgEgEgIIgBAAIgBAOIgNAAIAAgLIAAgMIAAhoIAQAAIAAA3QAFgIAHgEQAHgEAKAAQAKAAAJAFQAIAGAFAKQAEAJAAAOQABAPgHAKQgFALgJAEQgIAGgKAAQgJAAgHgEgAgOgHQgGAFgDAIIgBADIAAAEIAAAPIAAADIABADQACAIAGAFQAHAGAIgBQAMAAAHgJQAGgJAAgPQAAgJgDgHQgCgHgGgEQgFgEgJgBQgIAAgGAGg");
	this.shape_191.setTransform(263.7,287.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgDgHgBQgHAAgFACQgGABgFADIgEgKQAGgEAHgCQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAALIACAJIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGABQAHAAAGgFQAFgEACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_192.setTransform(249.9,289.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_193.setTransform(237.5,289.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#373535").s().p("AgRArQgGgBgFgCIAFgNIAJAFQAGACAGAAQAHgBAEgDQAEgEABgGQAAgFgFgEQgDgDgIgDQgLgFgHgFQgFgGAAgIQAAgHAEgGQADgFAHgEQAHgDAIgBQAHABAFABQAGACADACIgDALIgIgDQgEgCgGAAQgHAAgDAEQgEADAAAFQAAAFAEAEQAEADAHADQAMAEAGAGQAGAFAAAKQAAAMgJAHQgIAHgPAAQgHAAgHgCg");
	this.shape_194.setTransform(229.4,289.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#373535").s().p("AgUAqQgGgEgFgIQgFgJAAgPIAAgyIAQAAIAAAwQgBAMAFAIQAEAHAMABQADgBAFgCQAEgCADgDQADgDABgEIABgEIAAgEIAAg1IARAAIAAA/IAAANIAAAKIgNAAIgCgOIAAAAQgCAEgEADQgEAEgFADQgGADgHgBQgHAAgHgCg");
	this.shape_195.setTransform(220.9,289.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#373535").s().p("AgjAyIAGgDIAIgFIAHgHQAEgFACgGIABgBIABgCIgBgCIAAgDIghhPIASAAIASA0IADAJIACAIIABAAIACgIIADgKIARgzIARAAIgYA+IgKAZIgJARQgFAHgFAFQgFAFgGACIgIADg");
	this.shape_196.setTransform(207.9,291.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_197.setTransform(201.5,287);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_198.setTransform(197.3,287);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgDgHgBQgHAAgFACQgGABgFADIgEgKQAGgEAHgCQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAALIACAJIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGABQAHAAAGgFQAFgEACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_199.setTransform(190.6,289.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#373535").s().p("AgUAqQgHgEgEgIQgFgJAAgPIAAgyIAQAAIAAAwQgBAMAFAIQAEAHALABQAEgBAFgCQAEgCADgDQADgDABgEIABgEIAAgEIAAg1IAQAAIAAA/IAAANIABAKIgNAAIgBgOIgBAAQgCAEgEADQgEAEgFADQgGADgHgBQgHAAgHgCg");
	this.shape_200.setTransform(181.5,289.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#373535").s().p("AgRArQgGgBgFgCIAEgNIAJAFQAGACAHAAQAHgBAEgDQAFgEAAgGQAAgFgFgEQgDgDgIgDQgMgFgFgFQgGgGAAgIQAAgHAEgGQAEgFAGgEQAGgDAJgBQAHABAFABQAGACAEACIgEALIgHgDQgFgCgGAAQgGAAgEAEQgEADAAAFQAAAFAEAEQAEADAIADQALAEAGAGQAGAFgBAKQABAMgJAHQgJAHgOAAQgHAAgHgCg");
	this.shape_201.setTransform(173,289.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#373535").s().p("AgUAqQgHgEgEgIQgFgJAAgPIAAgyIAQAAIAAAwQAAAMAEAIQAFAHALABQAEgBAEgCQAEgCADgDQADgDACgEIABgEIAAgEIAAg1IAQAAIAAA/IAAANIAAAKIgOAAIgBgOIAAAAQgCAEgEADQgDAEgHADQgFADgHgBQgHAAgHgCg");
	this.shape_202.setTransform(164.5,289.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#373535").s().p("AgQArQgHgBgFgCIAFgNIAJAFQAGACAFAAQAIgBAEgDQAEgEAAgGQABgFgEgEQgEgDgIgDQgLgFgHgFQgFgGAAgIQAAgHADgGQAEgFAHgEQAHgDAIgBQAHABAFABQAGACADACIgDALIgIgDQgEgCgGAAQgHAAgDAEQgEADAAAFQAAAFAEAEQAFADAGADQAMAEAGAGQAGAFAAAKQAAAMgJAHQgIAHgPAAQgHAAgGgCg");
	this.shape_203.setTransform(152.1,289.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABALIgGACIgIABQgGAAgEgCg");
	this.shape_204.setTransform(145.5,287.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#373535").s().p("AAVAsIAAgxQAAgHgCgFQgCgGgEgEQgEgDgIAAQgGAAgGAEQgGAFgCAHIAAAEIgBADIAAAzIgQAAIAAg+IAAgMIAAgMIANAAIABAPIABAAQACgEAEgEQAEgEAFgCQAGgCAHgBIAKACQAFACAFAEQAEAEADAHQADAHAAALIAAAzg");
	this.shape_205.setTransform(137.7,289);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_206.setTransform(128.2,289.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#373535").s().p("AAvAsIAAgwQAAgMgEgIQgFgGgKAAQgHAAgEADQgFAFgDAGIgBAEIAAAEIAAA0IgPAAIAAgzQABgLgFgGQgEgHgKABQgEAAgFACQgEACgCADQgDAEgBAEIgBAEIAAAEIAAAzIgQAAIAAg+IAAgMIgBgMIAPAAIAAAPIABAAIAFgJQAFgDAEgCQAGgCAHgBQAJAAAGAGQAFAEAEAIIAAAAIAEgHIAGgEQAEgDAEgCQAEgBAHgBQAGAAAGADQAHAEAEAIQAGAIAAAPIAAAyg");
	this.shape_207.setTransform(116.2,289);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgCgDgBgEQABgEACgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_208.setTransform(106.6,287.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#373535").s().p("AgUAsIAAg7IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJgBgFAGQgFAFgCAKIAAADIAAAEIAAAtg");
	this.shape_209.setTransform(101.9,289);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLADIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_210.setTransform(94,289.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#373535").s().p("AgoA+IAAhdIAAgPIgBgNIAPAAIABAPIAAAAQAFgIAHgFQAIgEAJAAQAMAAAHAFQAJAGAFAKQAEAKAAANQABAQgGAJQgFAKgKAFQgJAGgKAAQgHAAgIgEQgHgDgEgHIAAAvgAgOgrQgGAFgDAJIgBADIAAADIAAAPIAAAEIABADQACAHAGAFQAHAFAIAAQAIAAAFgEQAHgEACgIQADgGAAgKQAAgJgDgHQgDgIgFgEQgGgFgIAAQgIAAgGAGg");
	this.shape_211.setTransform(84.7,290.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#373535").s().p("AAWArIgNgTIgFgIIgEgHIAAAAIgEAHIgFAIIgMATIgSAAIAfgrIgdgrIARAAIANATIAEAHIAEAIIAAAAIAEgIIAFgHIAMgTIARAAIgeAqIAfAsg");
	this.shape_212.setTransform(75.1,289.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_213.setTransform(66.5,289.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#373535").s().p("AgHA9IAAh5IAPAAIAAB5g");
	this.shape_214.setTransform(56.1,287.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#373535").s().p("AAXA9IgDgKIgFgTQgCgNgGgFQgGgGgJABIgOAAIAAA0IgRAAIAAh3IAPgBIAQgBQALAAAJACQAIADAGAEQAEAFADAGQACAFAAAIQAAAIgDAGQgDAGgFAEQgFAEgGABIAAABQAGACAFAHQAEAGADAKIAEAVIAFAMgAgRgwIgFABIAAAsIAQAAQALABAIgHQAGgGABgKQAAgMgIgFQgHgGgMAAIgKAAg");
	this.shape_215.setTransform(49.5,287.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#373535").s().p("AAvA9IgEg2IgBgQIAAgSIgBgRIAAAAIgHAWIgIAXIgWA7IgKAAIgUg6IgIgXIgGgXIgBAAIAAARIgBASIgBASIgDA0IgPAAIAJh5IAUAAIAUA7IAHAUIAFAUIAAAAIAFgTIAIgVIAVg7IAUAAIAIB5g");
	this.shape_216.setTransform(37,287.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#373535").s().p("AgPBBIAAhKIgNAAIAAgMIANAAIAAgEQAAgKACgIQADgIAFgFQAFgEAEgCIALgCIAIABIAFACIgCAMIgEgCIgGAAQgGAAgEADQgEAEgBAGQgBAFAAAHIAAAFIAUAAIAAAMIgUAAIAABKg");
	this.shape_217.setTransform(27.6,286.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},276).to({state:[{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},332).wait(1));

	// Reveal
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(409.5,369.5,1,1,0,0,0,322.4,36.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(276).to({_off:false},0).wait(1).to({regX:322.5,x:414.1},0).wait(1).to({x:418.7},0).wait(1).to({x:423.2},0).wait(1).to({x:427.8},0).wait(1).to({x:432.3},0).wait(1).to({x:436.9},0).wait(1).to({x:441.5},0).wait(1).to({x:446},0).wait(1).to({x:450.6},0).wait(1).to({x:455.1},0).wait(1).to({x:459.7,y:369.6},0).wait(1).to({x:464.3},0).wait(1).to({x:468.8},0).wait(1).to({x:473.4},0).wait(1).to({x:477.9},0).wait(1).to({x:482.5},0).wait(1).to({x:487.1},0).wait(1).to({x:491.6},0).wait(1).to({x:496.2},0).wait(1).to({x:500.7},0).wait(1).to({x:505.3,y:369.7},0).wait(1).to({x:509.8},0).wait(1).to({x:514.4},0).wait(1).to({x:519},0).wait(1).to({x:523.5},0).wait(1).to({x:528.1},0).wait(1).to({x:532.6},0).wait(1).to({x:537.2},0).wait(1).to({x:541.8},0).wait(1).to({x:546.3},0).wait(1).to({x:550.9},0).wait(1).to({x:555.4,y:369.8},0).wait(1).to({x:560},0).wait(1).to({x:564.6},0).wait(1).to({x:569.1},0).wait(1).to({x:573.7},0).wait(1).to({x:578.2},0).wait(1).to({x:582.8},0).wait(1).to({x:587.3},0).wait(1).to({x:591.9},0).wait(1).to({x:596.5},0).wait(1).to({x:601,y:369.9},0).wait(1).to({x:605.6},0).wait(1).to({x:610.1},0).wait(1).to({x:614.7},0).wait(1).to({x:619.3},0).wait(1).to({x:623.8},0).wait(1).to({x:628.4},0).wait(1).to({x:632.9},0).wait(1).to({x:637.5},0).wait(1).to({x:642.1},0).wait(1).to({x:646.6},0).wait(1).to({x:651.2,y:370},0).wait(1).to({x:655.7},0).wait(1).to({x:660.3},0).wait(1).to({x:664.8},0).wait(1).to({x:669.4},0).wait(1).to({x:674},0).wait(1).to({x:678.5},0).wait(1).to({x:683.1},0).wait(1).to({x:687.6},0).wait(1).to({x:692.2},0).wait(1).to({x:696.8,y:370.1},0).wait(1).to({x:701.3},0).wait(1).to({x:705.9},0).wait(1).to({x:710.4},0).wait(1).to({x:715},0).wait(1).to({x:719.6},0).wait(1).to({x:724.1},0).wait(1).to({x:728.7},0).wait(1).to({x:733.2},0).wait(1).to({x:737.8},0).wait(1).to({x:742.3},0).wait(1).to({x:746.9,y:370.2},0).wait(1).to({x:751.5},0).wait(1).to({x:756},0).wait(1).to({x:760.6},0).wait(1).to({x:765.1},0).wait(1).to({x:769.7},0).wait(1).to({x:774.3},0).wait(1).to({x:778.8},0).wait(1).to({x:783.4},0).wait(1).to({x:787.9},0).wait(1).to({x:792.5,y:370.3},0).wait(1).to({x:797.1},0).wait(1).to({x:801.6},0).wait(1).to({x:806.2},0).wait(1).to({x:810.7},0).wait(1).to({x:815.3},0).wait(1).to({x:819.8},0).wait(1).to({x:824.4},0).wait(1).to({x:829},0).wait(1).to({x:833.5},0).wait(1).to({x:838.1},0).wait(1).to({x:842.6,y:370.4},0).wait(1).to({x:847.2},0).wait(1).to({x:851.8},0).wait(1).to({x:856.3},0).wait(1).to({x:860.9},0).wait(1).to({x:865.4},0).wait(1).to({x:870},0).wait(1).to({x:874.6},0).wait(1).to({x:879.1},0).wait(1).to({x:883.7},0).wait(1).to({x:888.2,y:370.5},0).wait(1).to({x:892.8},0).wait(1).to({x:897.3},0).wait(1).to({x:901.9},0).wait(1).to({x:906.5},0).wait(1).to({x:911},0).wait(1).to({x:915.6},0).wait(1).to({x:920.1},0).wait(1).to({x:924.7},0).wait(1).to({x:929.3},0).wait(1).to({x:933.8},0).wait(1).to({x:938.4,y:370.6},0).wait(1).to({x:942.9},0).wait(1).to({x:947.5},0).wait(1).to({x:952.1},0).wait(1).to({x:956.6},0).wait(1).to({x:961.2},0).wait(1).to({x:965.7},0).wait(1).to({x:970.3},0).wait(1).to({x:974.8},0).wait(1).to({x:979.4},0).wait(1).to({x:984,y:370.7},0).wait(1).to({x:988.5},0).wait(1).to({x:993.1},0).wait(1).to({x:997.6},0).wait(1).to({x:1002.2},0).wait(1).to({x:1006.8},0).wait(1).to({x:1011.3},0).wait(1).to({x:1015.9},0).wait(1).to({x:1020.4},0).wait(1).to({x:1025},0).wait(1).to({x:1029.6,y:370.8},0).wait(1).to({regX:322.4,x:409.5,y:369.5},0).wait(1).to({regX:322.5,x:414.1},0).wait(1).to({x:418.7},0).wait(1).to({x:423.2},0).wait(1).to({x:427.8},0).wait(1).to({x:432.3},0).wait(1).to({x:436.9},0).wait(1).to({x:441.5},0).wait(1).to({x:446},0).wait(1).to({x:450.6},0).wait(1).to({x:455.1},0).wait(1).to({x:459.7,y:369.6},0).wait(1).to({x:464.3},0).wait(1).to({x:468.8},0).wait(1).to({x:473.4},0).wait(1).to({x:477.9},0).wait(1).to({x:482.5},0).wait(1).to({x:487.1},0).wait(1).to({x:491.6},0).wait(1).to({x:496.2},0).wait(1).to({x:500.7},0).wait(1).to({x:505.3,y:369.7},0).wait(1).to({x:509.8},0).wait(1).to({x:514.4},0).wait(1).to({x:519},0).wait(1).to({x:523.5},0).wait(1).to({x:528.1},0).wait(1).to({x:532.6},0).wait(1).to({x:537.2},0).wait(1).to({x:541.8},0).wait(1).to({x:546.3},0).wait(1).to({x:550.9},0).wait(1).to({x:555.4,y:369.8},0).wait(1).to({x:560},0).wait(1).to({x:564.6},0).wait(1).to({x:569.1},0).wait(1).to({x:573.7},0).wait(1).to({x:578.2},0).wait(1).to({x:582.8},0).wait(1).to({x:587.3},0).wait(1).to({x:591.9},0).wait(1).to({x:596.5},0).wait(1).to({x:601,y:369.9},0).wait(1).to({x:605.6},0).wait(1).to({x:610.1},0).wait(1).to({x:614.7},0).wait(1).to({x:619.3},0).wait(1).to({x:623.8},0).wait(1).to({x:628.4},0).wait(1).to({x:632.9},0).wait(1).to({x:637.5},0).wait(1).to({x:642.1},0).wait(1).to({x:646.6},0).wait(1).to({x:651.2,y:370},0).wait(1).to({x:655.7},0).wait(1).to({x:660.3},0).wait(1).to({x:664.8},0).wait(1).to({x:669.4},0).wait(1).to({x:674},0).wait(1).to({x:678.5},0).wait(1).to({x:683.1},0).wait(1).to({x:687.6},0).wait(1).to({x:692.2},0).wait(1).to({x:696.8,y:370.1},0).wait(1).to({x:701.3},0).wait(1).to({x:705.9},0).wait(1).to({x:710.4},0).wait(1).to({x:715},0).wait(1).to({x:719.6},0).wait(1).to({x:724.1},0).wait(1).to({x:728.7},0).wait(1).to({x:733.2},0).wait(1).to({x:737.8},0).wait(1).to({x:742.3},0).wait(1).to({x:746.9,y:370.2},0).wait(1).to({x:751.5},0).wait(1).to({x:756},0).wait(1).to({x:760.6},0).wait(1).to({x:765.1},0).wait(1).to({x:769.7},0).wait(1).to({x:774.3},0).wait(1).to({x:778.8},0).wait(1).to({x:783.4},0).wait(1).to({x:787.9},0).wait(1).to({x:792.5,y:370.3},0).wait(1).to({x:797.1},0).wait(1).to({x:801.6},0).wait(1).to({x:806.2},0).wait(1).to({x:810.7},0).wait(1).to({x:815.3},0).wait(1).to({x:819.8},0).wait(1).to({x:824.4},0).wait(1).to({x:829},0).wait(1).to({x:833.5},0).wait(1).to({x:838.1},0).wait(1).to({x:842.6,y:370.4},0).wait(1).to({x:847.2},0).wait(1).to({x:851.8},0).wait(1).to({x:856.3},0).wait(1).to({x:860.9},0).wait(1).to({x:865.4},0).wait(1).to({x:870},0).wait(1).to({x:874.6},0).wait(1).to({x:879.1},0).wait(1).to({x:883.7},0).wait(1).to({x:888.2,y:370.5},0).wait(1).to({x:892.8},0).wait(1).to({x:897.3},0).wait(1).to({x:901.9},0).wait(1).to({x:906.5},0).wait(1).to({x:911},0).wait(1).to({x:915.6},0).wait(1).to({x:920.1},0).wait(1).to({x:924.7},0).wait(1).to({x:929.3},0).wait(1).to({x:933.8},0).wait(1).to({x:938.4,y:370.6},0).wait(1).to({x:942.9},0).wait(1).to({x:947.5},0).wait(1).to({x:952.1},0).wait(1).to({x:956.6},0).wait(1).to({x:961.2},0).wait(1).to({x:965.7},0).wait(1).to({x:970.3},0).wait(1).to({x:974.8},0).wait(1).to({x:979.4},0).wait(1).to({x:984,y:370.7},0).wait(1).to({x:988.5},0).wait(1).to({x:993.1},0).wait(1).to({x:997.6},0).wait(1).to({x:1002.2},0).wait(1).to({x:1006.8},0).wait(1).to({x:1011.3},0).wait(1).to({x:1015.9},0).wait(1).to({x:1020.4},0).wait(1).to({x:1025},0).wait(1).to({x:1029.6,y:370.8},0).wait(1).to({regX:322.4,x:1046.5,y:366.8},0).wait(59));

	// Design
	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#373535").p("AAAEVIAAop");
	this.shape_218.setTransform(221.8,373.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#373535").p("AAAEVIAAop");
	this.shape_219.setTransform(291.1,373.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#373535").p("AAAEVIAAop");
	this.shape_220.setTransform(359.6,373.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#373535").p("AAAEVIAAop");
	this.shape_221.setTransform(429.3,373.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#373535").p("AAAEVIAAop");
	this.shape_222.setTransform(498.7,373.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#373535").p("AAAEVIAAop");
	this.shape_223.setTransform(567.7,373.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#373535").p("AAAEVIAAop");
	this.shape_224.setTransform(637.8,373.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#373535").p("AAAEVIAAop");
	this.shape_225.setTransform(152.4,373.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#373535").p("AlaAAIK1AA");
	this.shape_226.setTransform(533.7,401.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#373535").p("AlaAAIK1AA");
	this.shape_227.setTransform(603.1,345.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#373535").p("AlZAAIKzAA");
	this.shape_228.setTransform(672.4,401.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#373535").p("AlaAAIK1AA");
	this.shape_229.setTransform(325.7,345.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#373535").p("AlaAAIK1AA");
	this.shape_230.setTransform(395.1,401.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#373535").p("AlZAAIK0AA");
	this.shape_231.setTransform(464.4,345.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#373535").p("AlaAAIK1AA");
	this.shape_232.setTransform(187.1,345.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#373535").p("AlZAAIK0AA");
	this.shape_233.setTransform(256.4,401.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#373535").p("AlaAAIK1AA");
	this.shape_234.setTransform(117.7,401.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218}]},276).to({state:[{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218}]},332).wait(1));

	// rest                     stimulus               rest                 stimulus             rest                  stimulus             rest                 stimulus
	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#373535").p("AtiAAIbFAA");
	this.shape_235.setTransform(169.7,437);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#373535").p("AA+A+Ih7h7");
	this.shape_236.setTransform(250.2,430.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#373535").p("AA6g6IhzB0");
	this.shape_237.setTransform(250.6,442.9);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#373535").s().p("AgKAdIgIgDIADgIIAGADQAEACAEAAQAFAAADgDQACgCAAgEQAAgEgCgCQgDgDgFgCQgHgCgEgEQgEgEAAgFQAAgFACgEQADgDAEgDQAEgCAGAAIAIABIAGACIgCAIIgFgCIgIgBQgDAAgCACQgDACAAAEQAAADADACQADADAEACQAHACAFADQADAFAAAGQAAAIgFAFQgGAEgJAAIgJgBg");
	this.shape_238.setTransform(624.7,413.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#373535").s().p("AgNAbQgFgCgDgFQgDgGAAgKIAAghIALAAIAAAfQAAAJADAFQADAFAHAAQACAAADgCIAFgDIADgFIAAgCIABgDIAAgjIAKAAIAAApIAAAJIABAHIgKAAIAAgJIgBAAIgDAFIgHAEIgIACQgFAAgEgDg");
	this.shape_239.setTransform(619,413.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#373535").s().p("AgEAqIAAhUIAJAAIAABUg");
	this.shape_240.setTransform(614.3,412.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#373535").s().p("AgNAbQgFgCgDgFQgDgGAAgKIAAghIALAAIAAAfQAAAJADAFQADAFAHAAQACAAADgCIAFgDIADgFIAAgCIABgDIAAgjIAKAAIAAApIAAAJIABAHIgKAAIAAgJIgBAAIgDAFIgHAEIgIACQgFAAgEgDg");
	this.shape_241.setTransform(609.6,413.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#373535").s().p("AAgAeIAAggQgBgJgDgEQgDgFgGAAQgFAAgDADQgEADAAAEIgBACIAAADIAAAjIgKAAIAAgiQAAgHgDgEQgDgFgGAAQgEAAgCACIgFADIgCAGIAAACIgBADIAAAiIgKAAIAAgqIgBgIIAAgHIAJAAIABAJIABAAIADgFIAHgEQADgCAFAAQAGABAEADQADADACAFIAAAAIAEgEIADgEIAGgDIAHgBQAEAAAEACQAEADADAFQAEAGAAAKIAAAhg");
	this.shape_242.setTransform(601.3,413.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#373535").s().p("AgEAoIAAg4IAKAAIAAA4gAgEgcQAAgBgBAAQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAQAAgBAAAAQADABACACQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAABQgCACgDAAQgCAAgCgCg");
	this.shape_243.setTransform(594.9,412.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#373535").s().p("AAHAmIgGgBQgCgBgCgCQgCgDgBgDIgBgJIAAgfIgJAAIAAgIIAJAAIAAgOIAJgDIAAARIAPAAIAAAIIgPAAIAAAfQAAAFACADQACACAEAAIAEAAIACAAIABAIIgEABIgGAAg");
	this.shape_244.setTransform(591.4,413);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#373535").s().p("AgKAdIgIgDIADgIIAGADQADACAFAAQAEAAAEgDQACgCAAgEQAAgEgCgCQgDgDgFgCQgHgCgFgEQgDgEAAgFQAAgFACgEQACgDAFgDQAFgCAFAAIAIABIAGACIgDAIIgEgCIgIgBQgDAAgDACQgCACAAAEQAAADACACQAEADAEACQAHACAFADQADAFAAAGQAAAIgGAFQgFAEgJAAIgJgBg");
	this.shape_245.setTransform(587.1,413.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#373535").s().p("AAHAmIgGgBQgCgBgCgCQgCgDgBgDIgBgJIAAgfIgJAAIAAgIIAJAAIAAgOIAJgDIAAARIAPAAIAAAIIgPAAIAAAfQAAAFACADQACACAEAAIAEAAIACAAIABAIIgEABIgGAAg");
	this.shape_246.setTransform(539.4,413);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#373535").s().p("AgLAdIgHgDIADgIIAGADQADACAFAAQAEAAADgDQADgCAAgEQAAgEgDgCQgCgDgFgCQgIgCgDgEQgEgEAAgFQAAgFADgEQACgDAEgDQAEgCAGAAIAIABIAGACIgDAIIgEgCIgHgBQgEAAgDACQgCACAAAEQAAADACACQADADAFACQAIACADADQAEAFAAAGQAAAIgGAFQgFAEgKAAIgJgBg");
	this.shape_247.setTransform(535.1,413.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#373535").s().p("AgLAbQgHgEgDgGQgEgHAAgJQAAgIAEgHQADgHAGgEQAGgEAIAAQAHAAAEADQAFACADAFQACAEABAEIACAJIgBACIAAACIgoAAQABAHACAFQADAEAEACQAFACAEAAIAKgBIAGgCIACAIIgHACIgMABQgIAAgGgDgAAPgEIgBgIQgBgEgDgDQgDgCgGgBQgFABgDACQgDADgCAEQgCAEAAAEIAdAAIAAAAg");
	this.shape_248.setTransform(529.7,413.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#373535").s().p("AgNAeIAAgnIgBgKIAAgIIAJAAIABALIABAAQACgGACgDQAFgEAFAAIACABIACAAIAAAKIgCgBIgCAAQgGAAgEAEQgCAEgBAGIAAACIgBADIAAAeg");
	this.shape_249.setTransform(525.2,413.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#373535").s().p("AgLAdIgHgDIADgIIAGADQADACAFAAQAEAAADgDQADgCAAgEQAAgEgDgCQgCgDgFgCQgIgCgEgEQgDgEAAgFQAAgFADgEQACgDAEgDQAEgCAGAAIAIABIAGACIgDAIIgEgCIgHgBQgEAAgDACQgCACAAAEQAAADACACQADADAFACQAIACADADQAEAFAAAGQAAAIgGAFQgFAEgKAAIgJgBg");
	this.shape_250.setTransform(487.4,413.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#373535").s().p("AgNAbQgFgCgDgFQgDgGAAgKIAAghIALAAIAAAfQAAAJADAFQADAFAHAAQACAAADgCIAFgDIADgFIAAgCIABgDIAAgjIAKAAIAAApIAAAJIABAHIgKAAIAAgJIgBAAIgDAFIgHAEIgIACQgFAAgEgDg");
	this.shape_251.setTransform(481.7,413.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#373535").s().p("AgEAqIAAhUIAJAAIAABUg");
	this.shape_252.setTransform(477,412.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#373535").s().p("AgNAbQgFgCgDgFQgDgGAAgKIAAghIALAAIAAAfQAAAJADAFQADAFAHAAQACAAADgCIAFgDIADgFIAAgCIABgDIAAgjIAKAAIAAApIAAAJIABAHIgKAAIAAgJIgBAAIgDAFIgHAEIgIACQgFAAgEgDg");
	this.shape_253.setTransform(472.3,413.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#373535").s().p("AAgAeIAAggQgBgJgCgEQgEgFgGAAQgFAAgDADQgEADgBAEIgBACIAAADIAAAjIgJAAIAAgiQAAgHgDgEQgDgFgGAAQgDAAgDACIgFADIgCAGIgBACIAAADIAAAiIgKAAIAAgqIAAgIIAAgHIAJAAIAAAJIAAAAIAEgFIAGgEQAEgCAFAAQAFABAFADQADADACAFIABAAIACgEIAEgEIAFgDIAHgBQAEAAAFACQAFADADAFQACAGAAAKIAAAhg");
	this.shape_254.setTransform(464,413.7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#373535").s().p("AgEAoIAAg4IAKAAIAAA4gAgEgcQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAQAAgBAAAAQADABACACQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQgCACgDAAQgCAAgCgCg");
	this.shape_255.setTransform(457.6,412.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#373535").s().p("AAHAmIgGgBQgCgBgCgCQgCgDgBgDIgBgJIAAgfIgJAAIAAgIIAJAAIAAgOIAJgDIAAARIAPAAIAAAIIgPAAIAAAfQAAAFACADQACACAEAAIAEAAIACAAIABAIIgEABIgGAAg");
	this.shape_256.setTransform(454.1,413);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#373535").s().p("AgLAdIgHgDIADgIIAGADQADACAFAAQAFAAACgDQADgCAAgEQAAgEgDgCQgCgDgFgCQgIgCgDgEQgEgEAAgFQAAgFADgEQACgDAEgDQAFgCAFAAIAIABIAGACIgCAIIgFgCIgHgBQgEAAgCACQgDACAAAEQAAADADACQADADAEACQAIACAEADQADAFAAAGQAAAIgFAFQgGAEgKAAIgJgBg");
	this.shape_257.setTransform(449.8,413.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#373535").s().p("AAHAmIgGgBQgCgBgCgCQgCgDgBgDIgBgJIAAgfIgJAAIAAgIIAJAAIAAgOIAJgDIAAARIAPAAIAAAIIgPAAIAAAfQAAAFACADQACACAEAAIAEAAIACAAIABAIIgEABIgGAAg");
	this.shape_258.setTransform(399.5,413);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#373535").s().p("AgLAdIgHgDIADgIIAGADQAEACAEAAQAEAAADgDQADgCAAgEQAAgEgDgCQgCgDgFgCQgIgCgEgEQgDgEAAgFQAAgFACgEQADgDAEgDQAFgCAFAAIAIABIAGACIgDAIIgEgCIgHgBQgEAAgDACQgCACAAAEQAAADACACQADADAFACQAHACAEADQAEAFAAAGQAAAIgGAFQgFAEgKAAIgJgBg");
	this.shape_259.setTransform(395.2,413.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#373535").s().p("AgLAbQgHgEgDgGQgEgHAAgJQAAgIAEgHQADgHAGgEQAGgEAIAAQAHAAAEADQAFACADAFQACAEABAEIACAJIgBACIAAACIgoAAQABAHACAFQADAEAEACQAFACAEAAIAKgBIAGgCIACAIIgHACIgMABQgIAAgGgDgAAPgEIgBgIQgBgEgDgDQgDgCgGgBQgFABgDACQgDADgCAEQgCAEAAAEIAdAAIAAAAg");
	this.shape_260.setTransform(389.9,413.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#373535").s().p("AgNAeIAAgnIAAgKIAAgIIAJAAIAAALIABAAQACgGACgDQAFgEAFAAIACABIACAAIAAAKIgCgBIgCAAQgGAAgEAEQgCAEgBAGIAAACIgBADIAAAeg");
	this.shape_261.setTransform(385.4,413.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#373535").s().p("AgLAdIgHgDIADgIIAGADQAEACAEAAQAEAAADgDQADgCAAgEQAAgEgDgCQgCgDgFgCQgIgCgEgEQgDgEAAgFQAAgFACgEQADgDAEgDQAFgCAFAAIAIABIAGACIgDAIIgEgCIgHgBQgEAAgDACQgCACAAAEQAAADACACQADADAFACQAHACAEADQAEAFAAAGQAAAIgGAFQgFAEgKAAIgJgBg");
	this.shape_262.setTransform(347.5,413.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#373535").s().p("AgNAbQgFgCgDgFQgDgGAAgKIAAghIALAAIAAAfQAAAJADAFQADAFAHAAQACAAADgCIAFgDIADgFIAAgCIABgDIAAgjIAKAAIAAApIAAAJIABAHIgKAAIAAgJIgBAAIgDAFIgHAEIgIACQgFAAgEgDg");
	this.shape_263.setTransform(341.9,413.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#373535").s().p("AgEAqIAAhUIAJAAIAABUg");
	this.shape_264.setTransform(337.1,412.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#373535").s().p("AgNAbQgFgCgDgFQgDgGAAgKIAAghIALAAIAAAfQAAAJADAFQADAFAHAAQACAAADgCIAFgDIADgFIAAgCIABgDIAAgjIAKAAIAAApIAAAJIABAHIgKAAIAAgJIgBAAIgDAFIgHAEIgIACQgFAAgEgDg");
	this.shape_265.setTransform(332.4,413.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#373535").s().p("AAfAeIAAggQAAgJgCgEQgEgFgGAAQgFAAgDADQgEADgBAEIgBACIAAADIAAAjIgJAAIAAgiQAAgHgDgEQgDgFgGAAQgDAAgDACIgEADIgDAGIgBACIAAADIAAAiIgKAAIAAgqIgBgIIAAgHIAKAAIAAAJIAAAAIAFgFIAFgEQAEgCAEAAQAGABAFADQADADACAFIAAAAIADgEIAEgEIAFgDIAHgBQAEAAAFACQAFADADAFQACAGAAAKIAAAhg");
	this.shape_266.setTransform(324.1,413.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#373535").s().p("AgEAoIAAg4IAJAAIAAA4gAgEgcQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAQAAgBAAAAQADABACACQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQgCACgDAAQgCAAgCgCg");
	this.shape_267.setTransform(317.7,412.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#373535").s().p("AAHAmIgGgBQgCgBgCgCQgCgDgBgDIgBgJIAAgfIgJAAIAAgIIAJAAIAAgOIAJgDIAAARIAPAAIAAAIIgPAAIAAAfQAAAFACADQACACAEAAIAEAAIACAAIABAIIgEABIgGAAg");
	this.shape_268.setTransform(314.3,413);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#373535").s().p("AgLAdIgHgDIADgIIAGADQADACAFAAQAEAAADgDQADgCAAgEQAAgEgDgCQgCgDgFgCQgIgCgDgEQgEgEAAgFQAAgFADgEQACgDAEgDQAFgCAFAAIAIABIAGACIgDAIIgEgCIgHgBQgEAAgCACQgDACAAAEQAAADADACQADADAEACQAIACADADQAEAFAAAGQAAAIgFAFQgGAEgKAAIgJgBg");
	this.shape_269.setTransform(310,413.7);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#373535").s().p("AAHAmIgGgBQgCgBgCgCQgCgDgBgDIgBgJIAAgfIgJAAIAAgIIAJAAIAAgOIAJgDIAAARIAPAAIAAAIIgPAAIAAAfQAAAFACADQACACAEAAIAEAAIACAAIABAIIgEABIgGAAg");
	this.shape_270.setTransform(262.2,413);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#373535").s().p("AgKAdIgIgDIADgIIAGADQAEACAEAAQAFAAADgDQACgCAAgEQAAgEgCgCQgDgDgFgCQgHgCgEgEQgEgEAAgFQAAgFACgEQADgDAEgDQAEgCAGAAIAIABIAGACIgCAIIgFgCIgIgBQgDAAgCACQgDACAAAEQAAADADACQADADAEACQAHACAFADQADAFAAAGQAAAIgFAFQgGAEgJAAIgJgBg");
	this.shape_271.setTransform(257.9,413.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#373535").s().p("AgLAbQgHgEgDgGQgEgHAAgJQAAgIAEgHQADgHAGgEQAGgEAIAAQAHAAAEADQAFACADAFQACAEABAEIACAJIgBACIAAACIgoAAQABAHACAFQADAEAEACQAFACAEAAIAKgBIAGgCIACAIIgHACIgMABQgIAAgGgDgAAPgEIgBgIQgBgEgDgDQgDgCgGgBQgFABgDACQgDADgCAEQgCAEAAAEIAdAAIAAAAg");
	this.shape_272.setTransform(252.6,413.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#373535").s().p("AgNAeIAAgnIgBgKIAAgIIAJAAIABALIAAAAQACgGAEgDQAEgEAGAAIABABIABAAIAAAKIgBgBIgCAAQgGAAgDAEQgDAEgCAGIAAACIAAADIAAAeg");
	this.shape_273.setTransform(248.1,413.7);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#373535").s().p("AgLAdIgHgDIADgIIAGADQADACAFAAQAEAAADgDQADgCAAgEQAAgEgDgCQgCgDgFgCQgIgCgDgEQgEgEAAgFQAAgFADgEQACgDAEgDQAFgCAFAAIAIABIAGACIgCAIIgFgCIgHgBQgEAAgCACQgDACAAAEQAAADADACQADADAEACQAIACADADQAEAFAAAGQAAAIgFAFQgGAEgKAAIgJgBg");
	this.shape_274.setTransform(205.1,413.7);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#373535").s().p("AgNAbQgFgCgDgFQgDgGAAgKIAAghIALAAIAAAfQAAAJADAFQADAFAHAAQACAAADgCIAFgDIADgFIAAgCIABgDIAAgjIAKAAIAAApIAAAJIABAHIgKAAIAAgJIgBAAIgDAFIgHAEIgIACQgFAAgEgDg");
	this.shape_275.setTransform(199.5,413.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#373535").s().p("AgEAqIAAhUIAJAAIAABUg");
	this.shape_276.setTransform(194.7,412.4);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#373535").s().p("AgNAbQgFgCgDgFQgDgGAAgKIAAghIALAAIAAAfQAAAJADAFQADAFAHAAQACAAADgCIAFgDIADgFIAAgCIABgDIAAgjIAKAAIAAApIAAAJIABAHIgKAAIAAgJIgBAAIgDAFIgHAEIgIACQgFAAgEgDg");
	this.shape_277.setTransform(190,413.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#373535").s().p("AAgAeIAAggQAAgJgDgEQgEgFgGAAQgFAAgDADQgDADgCAEIAAACIAAADIAAAjIgKAAIAAgiQAAgHgDgEQgDgFgGAAQgDAAgDACIgFADIgCAGIgBACIAAADIAAAiIgKAAIAAgqIAAgIIAAgHIAJAAIAAAJIABAAIADgFIAHgEQADgCAFAAQAFABAFADQADADACAFIABAAIACgEIAEgEIAFgDIAIgBQADAAAFACQAEADAEAFQACAGAAAKIAAAhg");
	this.shape_278.setTransform(181.7,413.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#373535").s().p("AgEAoIAAg4IAKAAIAAA4gAgEgcQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAQAAgBAAAAQADABACACQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQgCACgDAAQgCAAgCgCg");
	this.shape_279.setTransform(175.3,412.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#373535").s().p("AAHAmIgGgBQgCgBgCgCQgCgDgBgDIgBgJIAAgfIgJAAIAAgIIAJAAIAAgOIAJgDIAAARIAPAAIAAAIIgPAAIAAAfQAAAFACADQACACAEAAIAEAAIACAAIABAIIgEABIgGAAg");
	this.shape_280.setTransform(171.9,413);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#373535").s().p("AgKAdIgIgDIADgIIAGADQAEACAEAAQAFAAADgDQACgCAAgEQAAgEgCgCQgDgDgFgCQgHgCgEgEQgEgEAAgFQAAgFADgEQABgDAFgDQAFgCAFAAIAIABIAGACIgCAIIgFgCIgIgBQgDAAgCACQgDACAAAEQAAADADACQADADAEACQAIACAEADQADAFAAAGQAAAIgFAFQgGAEgJAAIgJgBg");
	this.shape_281.setTransform(167.6,413.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#373535").s().p("AAHAmIgGgBQgCgBgCgCQgCgDgBgDIgBgJIAAgfIgJAAIAAgIIAJAAIAAgOIAJgDIAAARIAPAAIAAAIIgPAAIAAAfQAAAFACADQACACAEAAIAEAAIACAAIABAIIgEABIgGAAg");
	this.shape_282.setTransform(109.6,413);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#373535").s().p("AgLAdIgHgDIADgIIAGADQADACAFAAQAEAAADgDQADgCAAgEQAAgEgDgCQgCgDgFgCQgIgCgEgEQgDgEAAgFQAAgFADgEQACgDAEgDQAEgCAGAAIAIABIAGACIgDAIIgEgCIgHgBQgEAAgDACQgCACAAAEQAAADACACQADADAFACQAIACADADQAEAFAAAGQAAAIgFAFQgGAEgKAAIgJgBg");
	this.shape_283.setTransform(105.3,413.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#373535").s().p("AgLAbQgHgEgDgGQgEgHAAgJQAAgIAEgHQADgHAGgEQAGgEAIAAQAHAAAEADQAFACADAFQACAEABAEIACAJIgBACIAAACIgoAAQABAHACAFQADAEAEACQAFACAEAAIAKgBIAGgCIACAIIgHACIgMABQgIAAgGgDgAAPgEIgBgIQgBgEgDgDQgDgCgGgBQgFABgDACQgDADgCAEQgCAEAAAEIAdAAIAAAAg");
	this.shape_284.setTransform(100,413.7);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#373535").s().p("AgNAeIAAgnIgBgKIAAgIIAJAAIABALIABAAQACgGACgDQAFgEAFAAIACABIACAAIAAAKIgCgBIgCAAQgGAAgEAEQgCAEgBAGIAAACIgBADIAAAeg");
	this.shape_285.setTransform(95.5,413.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235}]},276).to({state:[{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235}]},332).wait(1));

	// 4
	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#373535").s().p("AAXB1IAAhAIhrAAIAAgVIBmiUIAjAAIAACRIAhAAIAAAYIghAAIAABAgAANhDIgJAQIg5BOIAAACIBMAAIAAhNIABglIgBAAIgKASg");
	this.shape_286.setTransform(11.9,23.3);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#009900").s().p("AgtB2QgQgLgKgTQgKgUAAgbQAAgdALgUQAKgVASgLQASgLAVAAQATAAANAIQAOAHAGALIAAAAIAAhoIAgAAIAADSIAAAYIABAVIgcAAIgCgeIAAAAQgIAOgPAKQgPAJgVABQgVgBgRgLgAgZgSQgMAJgGAOQgGAPAAAUQAAASAGAOQAFAPAMAIQALAJAQAAQARAAAMgKQANgKAFgSIABgGIAAgHIAAgfIAAgGIgBgHQgEgOgMgLQgMgKgSgBQgPABgMAIg");
	this.shape_287.setTransform(746.5,448.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#009900").s().p("AgkBQQgTgLgLgUQgJgUgBgaQAAgZAKgWQAKgVASgMQASgMAZgBQAVABAOAHQAOAJAJAMQAHANADAOQAEAOAAAMIgBAIIAAAGIh5AAQAAAVAIANQAJAOAMAGQAOAGAPAAQARAAALgCQAMgDAJgEIAFAXQgJAEgOADQgOAEgVAAQgaAAgTgLgAAugQQAAgKgDgMQgEgMgKgIQgJgJgSAAQgPAAgKAIQgKAIgGAMQgFAMgBALIBbAAIAAAAg");
	this.shape_288.setTransform(728,452.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#009900").s().p("AAqCAIAAhkQAAgOgEgMQgDgLgJgHQgJgHgPAAQgPAAgLAJQgLAJgFANIgBAHIAAAIIAABpIggAAIAAj/IAgAAIAABtIAAAAQAEgHAGgGQAGgFAHgEQAHgEAIgDQAHgCAJAAQAJAAAKADQALADAKAIQAIAJAHAOQAGAOAAAWIAABog");
	this.shape_289.setTransform(709,448.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#009900").s().p("AgiBYQgNgEgJgFIAIgYQAHAFALADQALAEANAAQAQAAAJgHQAHgHABgLQAAgMgIgHQgHgHgRgGQgXgJgMgMQgLgMAAgQQAAgOAIgMQAGgLAOgHQANgHATAAQAMAAALADQALAEAIAEIgIAXIgOgHQgJgDgNAAQgNAAgHAHQgIAHAAAKQABAKAHAHQAJAGAQAGQAWAJAMALQALAMAAAUQAAAXgRAOQgRAOgeABQgPAAgMgDg");
	this.shape_290.setTransform(691.8,452.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#009900").s().p("AgPB6IAAiuIAfAAIAACugAgOhXQgEgGAAgHQAAgJAFgGQAFgFAIAAQAJAAAGAFQAEAGAAAJQAAAHgEAGQgGAFgJABQgIgBgGgFg");
	this.shape_291.setTransform(680.5,448.7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#009900").s().p("AArBZIAAhjQAAgPgEgLQgEgLgIgIQgJgHgPAAQgPAAgLAKQgLAJgFAOIgBAHIgBAHIAABoIgfAAIAAh+IgBgZIgBgWIAcAAIACAdIABAAQAEgJAIgHQAIgHALgFQAMgFANAAQAKAAAKADQALADAJAJQAJAIAHAOQAGAPAAAWIAABng");
	this.shape_292.setTransform(666.2,452);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#009900").s().p("AgOB6IAAiuIAeAAIAACugAgNhXQgGgGAAgHQAAgJAGgGQAFgFAIAAQAJAAAFAFQAFAGABAJQgBAHgFAGQgFAFgJABQgIgBgFgFg");
	this.shape_293.setTransform(652.1,448.7);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#009900").s().p("AhAB5IAAjxICBAAIAAAaIhiAAIAABRIBbAAIAAAYIhbAAIAABug");
	this.shape_294.setTransform(640.5,448.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_286}]}).to({state:[{t:this.shape_286},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287}]},608).wait(1));

	// BOLD
	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#373535").s().p("AgLAdIgHgDIADgIIAGADQADACAFAAQAEAAADgDQADgCAAgEQAAgEgDgCQgCgDgFgCQgIgCgDgEQgEgEAAgFQAAgFADgEQACgDAEgDQAEgCAGAAIAIABIAGACIgDAIIgEgCIgHgBQgEAAgCACQgDACAAAEQAAADADACQADADAEACQAIACADADQAEAFAAAGQAAAIgFAFQgGAEgKAAIgJgBg");
	this.shape_295.setTransform(222.7,127.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#373535").s().p("AgNAbQgFgCgDgFQgDgGAAgKIAAghIALAAIAAAfQAAAJADAFQADAFAHAAQACAAADgCIAFgDIADgFIAAgCIABgDIAAgjIAKAAIAAApIAAAJIABAHIgKAAIAAgJIgBAAIgDAFIgHAEIgIACQgFAAgEgDg");
	this.shape_296.setTransform(217,127.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#373535").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_297.setTransform(212.3,126.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#373535").s().p("AgNAbQgFgCgDgFQgDgGAAgKIAAghIALAAIAAAfQAAAJADAFQADAFAHAAQACAAADgCIAFgDIADgFIAAgCIABgDIAAgjIAKAAIAAApIAAAJIABAHIgKAAIAAgJIgBAAIgDAFIgHAEIgIACQgFAAgEgDg");
	this.shape_298.setTransform(207.6,127.5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#373535").s().p("AAgAeIAAggQAAgJgDgEQgEgFgGAAQgFAAgDADQgDADgCAEIAAACIAAADIAAAjIgKAAIAAgiQAAgHgDgEQgDgFgGAAQgDAAgDACIgFADIgCAGIgBACIAAADIAAAiIgKAAIAAgqIAAgIIAAgHIAJAAIAAAJIABAAIADgFIAGgEQAEgCAFAAQAFABAFADQADADACAFIABAAIACgEIAEgEIAFgDIAIgBQADAAAFACQAEADAEAFQACAGAAAKIAAAhg");
	this.shape_299.setTransform(199.3,127.3);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#373535").s().p("AgEApIAAg6IAKAAIAAA6gAgEgdQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAQAAAAAAAAQADAAACACQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABQgBABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgCACgDAAQgCAAgCgCg");
	this.shape_300.setTransform(192.9,126.3);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#373535").s().p("AAHAmIgGgBQgCgBgCgCQgCgCgBgFIgBgJIAAgeIgJAAIAAgIIAJAAIAAgOIAJgDIAAARIAPAAIAAAIIgPAAIAAAeQAAAGACACQACADAEAAIAEAAIACAAIABAHIgEACIgGAAg");
	this.shape_301.setTransform(189.4,126.6);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#373535").s().p("AgLApIgHgCIgFgDIACgIIAIAEQAFABAGAAQAHAAAFgDQAEgFAAgGQAAgGgDgDQgFgEgHgDQgJgDgGgEQgFgGgBgJQABgGACgFQAEgFAFgDQAGgCAHAAIALABQAEABADABIgCAJIgHgCQgDgCgGAAQgEAAgEACQgDABgCADQgBADAAADQgBAGAFADQADADAIAEQAKAEAGAEQAEAGAAAIQAAAHgDAFQgCAFgHAEQgHADgIAAIgIgBg");
	this.shape_302.setTransform(184.6,126.3);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#373535").s().p("AgNAkQgGgEgDgIQgEgHAAgKQAAgLAEgJQAEgIAGgGQAEgFAHgDQAFgDAHgBIAFAAIADAAIAAAIIgDAAIgFABQgIABgFAEQgFAEgEAGQgDAGgBAGQADgDAFgDQAFgCAFgBQAHAAAGAEQAFADADAFQADAFAAAIQAAAHgDAGQgDAGgGAEQgGAEgIAAQgHAAgHgEgAgIgBQgEACgCAEIgBACIAAADQAAAGACAFQACAFAEADQADADAFAAQAHAAAEgFQAEgFAAgJQAAgIgEgFQgEgEgIAAQgEAAgEADg");
	this.shape_303.setTransform(320.3,169.1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#373535").s().p("AAIAnIAAgWIgjAAIAAgGIAhgxIALAAIAAAvIALAAIAAAIIgLAAIAAAWgAAEgVIgDAEIgSAaIAAAAIAZAAIAAgYIAAgNIAAAAIgEAHg");
	this.shape_304.setTransform(291.2,169.1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#373535").s().p("AgYAoIAAgHIAIgIIAQgQQAGgHADgFQADgGAAgGQABgEgCgDQgBgDgEgDQgDgCgFAAQgFAAgFACIgHAFIgDgIQAEgDAGgCQAFgCAHgBQAIABAFADQAFADADAFQACAFAAAGQAAAHgDAHQgEAFgGAHIgNAPIgGAGIAiAAIAAAJg");
	this.shape_305.setTransform(259.5,169);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#373535").s().p("AgNAjQgGgEgDgJQgDgJAAgNQAAgMADgJQAEgJAGgFQAGgEAHAAQAMAAAHAKQAGAKAAATQAAATgHALQgHAKgMABQgHAAgGgGgAgKgXQgFAJAAAOQAAAQAEAIQAFAIAGAAQAFAAAEgEQADgEACgHQACgIAAgJQAAgJgCgHQgBgHgEgEQgDgEgGAAQgGAAgEAIg");
	this.shape_306.setTransform(225.4,169.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#4651A0").p("EgzcAAAMBm5AAA");
	this.shape_307.setTransform(436.3,163);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#373535").p("AAAADIAAgF");
	this.shape_308.setTransform(191.7,257.3);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#373535").p("AAAMJIAA4R");
	this.shape_309.setTransform(226.3,112.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295}]}).to({state:[{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295}]},608).wait(1));

	// Reveal
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(420.5,114,1,1,0,0,0,283.4,90);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#FFFFFF").ss(2).p("EgsSgODMBYlAAAIAAcHMhYlAAAg");
	this.shape_310.setTransform(1003.5,116.7);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("EgsSAOEIAA8HMBYlAAAIAAcHg");
	this.shape_311.setTransform(1003.5,116.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_311},{t:this.shape_310}]},1).to({state:[{t:this.shape_311},{t:this.shape_310}]},332).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:283.5,x:424.8,y:113.9},0).wait(1).to({x:429},0).wait(1).to({x:433.2},0).wait(1).to({x:437.5},0).wait(1).to({x:441.7},0).wait(1).to({x:445.9},0).wait(1).to({x:450.1,y:113.8},0).wait(1).to({x:454.4},0).wait(1).to({x:458.6},0).wait(1).to({x:462.8},0).wait(1).to({x:467},0).wait(1).to({x:471.3},0).wait(1).to({x:475.5,y:113.7},0).wait(1).to({x:479.7},0).wait(1).to({x:483.9},0).wait(1).to({x:488.2},0).wait(1).to({x:492.4},0).wait(1).to({x:496.6},0).wait(1).to({x:500.8,y:113.6},0).wait(1).to({x:505.1},0).wait(1).to({x:509.3},0).wait(1).to({x:513.5},0).wait(1).to({x:517.8},0).wait(1).to({x:522},0).wait(1).to({x:526.2,y:113.5},0).wait(1).to({x:530.4},0).wait(1).to({x:534.7},0).wait(1).to({x:538.9},0).wait(1).to({x:543.1},0).wait(1).to({x:547.3},0).wait(1).to({x:551.6,y:113.4},0).wait(1).to({x:555.8},0).wait(1).to({x:560},0).wait(1).to({x:564.2},0).wait(1).to({x:568.5},0).wait(1).to({x:572.7},0).wait(1).to({x:576.9,y:113.3},0).wait(1).to({x:581.1},0).wait(1).to({x:585.4},0).wait(1).to({x:589.6},0).wait(1).to({x:593.8},0).wait(1).to({x:598.1},0).wait(1).to({x:602.3,y:113.2},0).wait(1).to({x:606.5},0).wait(1).to({x:610.7},0).wait(1).to({x:615},0).wait(1).to({x:619.2},0).wait(1).to({x:623.4},0).wait(1).to({x:627.6,y:113.1},0).wait(1).to({x:631.9},0).wait(1).to({x:636.1},0).wait(1).to({x:640.3},0).wait(1).to({x:644.5},0).wait(1).to({x:648.8},0).wait(1).to({x:653,y:113},0).wait(1).to({x:657.2},0).wait(1).to({x:661.4},0).wait(1).to({x:665.7},0).wait(1).to({x:669.9},0).wait(1).to({x:674.1},0).wait(1).to({x:678.4,y:112.9},0).wait(1).to({x:682.6},0).wait(1).to({x:686.8},0).wait(1).to({x:691},0).wait(1).to({x:695.3},0).wait(1).to({x:699.5},0).wait(1).to({x:703.7,y:112.8},0).wait(1).to({x:707.9},0).wait(1).to({x:712.2},0).wait(1).to({x:716.4},0).wait(1).to({x:720.6},0).wait(1).to({x:724.8},0).wait(1).to({x:729.1},0).wait(1).to({x:733.3,y:112.7},0).wait(1).to({x:737.5},0).wait(1).to({x:741.7},0).wait(1).to({x:746},0).wait(1).to({x:750.2},0).wait(1).to({x:754.4},0).wait(1).to({x:758.7,y:112.6},0).wait(1).to({x:762.9},0).wait(1).to({x:767.1},0).wait(1).to({x:771.3},0).wait(1).to({x:775.6},0).wait(1).to({x:779.8},0).wait(1).to({x:784,y:112.5},0).wait(1).to({x:788.2},0).wait(1).to({x:792.5},0).wait(1).to({x:796.7},0).wait(1).to({x:800.9},0).wait(1).to({x:805.1},0).wait(1).to({x:809.4,y:112.4},0).wait(1).to({x:813.6},0).wait(1).to({x:817.8},0).wait(1).to({x:822},0).wait(1).to({x:826.3},0).wait(1).to({x:830.5},0).wait(1).to({x:834.7,y:112.3},0).wait(1).to({x:839},0).wait(1).to({x:843.2},0).wait(1).to({x:847.4},0).wait(1).to({x:851.6},0).wait(1).to({x:855.9},0).wait(1).to({x:860.1,y:112.2},0).wait(1).to({x:864.3},0).wait(1).to({x:868.5},0).wait(1).to({x:872.8},0).wait(1).to({x:877},0).wait(1).to({x:881.2},0).wait(1).to({x:885.4,y:112.1},0).wait(1).to({x:889.7},0).wait(1).to({x:893.9},0).wait(1).to({x:898.1},0).wait(1).to({x:902.3},0).wait(1).to({x:906.6},0).wait(1).to({x:910.8,y:112},0).wait(1).to({x:915},0).wait(1).to({x:919.2},0).wait(1).to({x:923.5},0).wait(1).to({x:927.7},0).wait(1).to({x:931.9},0).wait(1).to({x:936.2,y:111.9},0).wait(1).to({x:940.4},0).wait(1).to({x:944.6},0).wait(1).to({x:948.8},0).wait(1).to({x:953.1},0).wait(1).to({x:957.3},0).wait(1).to({x:961.5,y:111.8},0).wait(1).to({x:965.7},0).wait(1).to({x:970},0).wait(1).to({x:974.2},0).wait(1).to({x:978.4},0).wait(1).to({x:982.6},0).wait(1).to({x:986.9,y:111.7},0).wait(1).to({x:991.1},0).wait(1).to({x:995.3},0).wait(1).to({x:999.6},0).wait(1).to({regX:283.4,x:420.5,y:114},0).wait(1).to({regX:283.5,x:424.8,y:113.9},0).wait(1).to({x:429},0).wait(1).to({x:433.2},0).wait(1).to({x:437.5},0).wait(1).to({x:441.7},0).wait(1).to({x:445.9},0).wait(1).to({x:450.1,y:113.8},0).wait(1).to({x:454.4},0).wait(1).to({x:458.6},0).wait(1).to({x:462.8},0).wait(1).to({x:467},0).wait(1).to({x:471.3},0).wait(1).to({x:475.5,y:113.7},0).wait(1).to({x:479.7},0).wait(1).to({x:483.9},0).wait(1).to({x:488.2},0).wait(1).to({x:492.4},0).wait(1).to({x:496.6},0).wait(1).to({x:500.8,y:113.6},0).wait(1).to({x:505.1},0).wait(1).to({x:509.3},0).wait(1).to({x:513.5},0).wait(1).to({x:517.8},0).wait(1).to({x:522},0).wait(1).to({x:526.2,y:113.5},0).wait(1).to({x:530.4},0).wait(1).to({x:534.7},0).wait(1).to({x:538.9},0).wait(1).to({x:543.1},0).wait(1).to({x:547.3},0).wait(1).to({x:551.6,y:113.4},0).wait(1).to({x:555.8},0).wait(1).to({x:560},0).wait(1).to({x:564.2},0).wait(1).to({x:568.5},0).wait(1).to({x:572.7},0).wait(1).to({x:576.9,y:113.3},0).wait(1).to({x:581.1},0).wait(1).to({x:585.4},0).wait(1).to({x:589.6},0).wait(1).to({x:593.8},0).wait(1).to({x:598.1},0).wait(1).to({x:602.3,y:113.2},0).wait(1).to({x:606.5},0).wait(1).to({x:610.7},0).wait(1).to({x:615},0).wait(1).to({x:619.2},0).wait(1).to({x:623.4},0).wait(1).to({x:627.6,y:113.1},0).wait(1).to({x:631.9},0).wait(1).to({x:636.1},0).wait(1).to({x:640.3},0).wait(1).to({x:644.5},0).wait(1).to({x:648.8},0).wait(1).to({x:653,y:113},0).wait(1).to({x:657.2},0).wait(1).to({x:661.4},0).wait(1).to({x:665.7},0).wait(1).to({x:669.9},0).wait(1).to({x:674.1},0).wait(1).to({x:678.4,y:112.9},0).wait(1).to({x:682.6},0).wait(1).to({x:686.8},0).wait(1).to({x:691},0).wait(1).to({x:695.3},0).wait(1).to({x:699.5},0).wait(1).to({x:703.7,y:112.8},0).wait(1).to({x:707.9},0).wait(1).to({x:712.2},0).wait(1).to({x:716.4},0).wait(1).to({x:720.6},0).wait(1).to({x:724.8},0).wait(1).to({x:729.1},0).wait(1).to({x:733.3,y:112.7},0).wait(1).to({x:737.5},0).wait(1).to({x:741.7},0).wait(1).to({x:746},0).wait(1).to({x:750.2},0).wait(1).to({x:754.4},0).wait(1).to({x:758.7,y:112.6},0).wait(1).to({x:762.9},0).wait(1).to({x:767.1},0).wait(1).to({x:771.3},0).wait(1).to({x:775.6},0).wait(1).to({x:779.8},0).wait(1).to({x:784,y:112.5},0).wait(1).to({x:788.2},0).wait(1).to({x:792.5},0).wait(1).to({x:796.7},0).wait(1).to({x:800.9},0).wait(1).to({x:805.1},0).wait(1).to({x:809.4,y:112.4},0).wait(1).to({x:813.6},0).wait(1).to({x:817.8},0).wait(1).to({x:822},0).wait(1).to({x:826.3},0).wait(1).to({x:830.5},0).wait(1).to({x:834.7,y:112.3},0).wait(1).to({x:839},0).wait(1).to({x:843.2},0).wait(1).to({x:847.4},0).wait(1).to({x:851.6},0).wait(1).to({x:855.9},0).wait(1).to({x:860.1,y:112.2},0).wait(1).to({x:864.3},0).wait(1).to({x:868.5},0).wait(1).to({x:872.8},0).wait(1).to({x:877},0).wait(1).to({x:881.2},0).wait(1).to({x:885.4,y:112.1},0).wait(1).to({x:889.7},0).wait(1).to({x:893.9},0).wait(1).to({x:898.1},0).wait(1).to({x:902.3},0).wait(1).to({x:906.6},0).wait(1).to({x:910.8,y:112},0).wait(1).to({x:915},0).wait(1).to({x:919.2},0).wait(1).to({x:923.5},0).wait(1).to({x:927.7},0).wait(1).to({x:931.9},0).wait(1).to({x:936.2,y:111.9},0).wait(1).to({x:940.4},0).wait(1).to({x:944.6},0).wait(1).to({x:948.8},0).wait(1).to({x:953.1},0).wait(1).to({x:957.3},0).wait(1).to({x:961.5,y:111.8},0).wait(1).to({x:965.7},0).wait(1).to({x:970},0).wait(1).to({x:974.2},0).wait(1).to({x:978.4},0).wait(1).to({x:982.6},0).wait(1).to({x:986.9,y:111.7},0).wait(1).to({x:991.1},0).wait(1).to({x:995.3},0).wait(1).to({x:999.6},0).to({_off:true},1).wait(333));

	// Signal
	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#373535").ss(3).p("Egs9AIgIQNAAIAxArQA4AqAqAAQBFAABrjFQA5hpCTlIQCIkyBLh/QB0jEBSACQArABAwBCQAnA1A4B1QAhBGBKCkQBHCZA6BoQCrExDBB+QD5CkE7huQBDgXGggKQFngJK4gBQQOgBi7AB");
	this.shape_312.setTransform(412.4,108.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_312).wait(609));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400.8,248.8,765.9,259.9);
// library properties:
lib.properties = {
	width: 800,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;