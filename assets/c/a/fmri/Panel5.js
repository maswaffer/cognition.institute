(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Panel5_atlas_", frames: [[0,0,1913,1188],[1422,1190,626,571],[0,1831,627,570],[0,1190,709,639],[711,1190,709,639]]}
];



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



(lib.Image = function() {
	this.spriteSheet = ss["Panel5_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.spriteSheet = ss["Panel5_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.spriteSheet = ss["Panel5_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_0 = function() {
	this.spriteSheet = ss["Panel5_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_1 = function() {
	this.spriteSheet = ss["Panel5_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.Panel5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E93344").ss(2).p("AAyBnQARhBghg5Qghg6g/gR");
	this.shape.setTransform(674.1,72.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},18).wait(1).to({_off:false},0).wait(18).to({_off:true},1).wait(1).to({_off:false},0).wait(18).to({_off:true},1).wait(1).to({_off:false},0).wait(18).to({_off:true},1).wait(1).to({_off:false},0).wait(18).to({_off:true},1).wait(1).to({_off:false},0).wait(18).to({_off:true},1).wait(1).to({_off:false},0).wait(18).to({_off:true},1).wait(1).to({_off:false},0).wait(18).to({_off:true},1).wait(1).to({_off:false},0).wait(18).to({_off:true},1).wait(1).to({_off:false},0).wait(421));

	// Layer 8
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E93344").ss(2).p("ABPCdQAchkg0hZQgzhahjgb");
	this.shape_1.setTransform(680,69);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(7).to({_off:false},0).to({_off:true},12).wait(7).to({_off:false},0).wait(12).to({_off:true},1).wait(7).to({_off:false},0).wait(12).to({_off:true},1).wait(7).to({_off:false},0).wait(12).to({_off:true},1).wait(7).to({_off:false},0).wait(12).to({_off:true},1).wait(7).to({_off:false},0).wait(12).to({_off:true},1).wait(7).to({_off:false},0).wait(12).to({_off:true},1).wait(7).to({_off:false},0).wait(12).to({_off:true},1).wait(7).to({_off:false},0).wait(12).to({_off:true},1).wait(7).to({_off:false},0).wait(415));

	// Layer 7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E93344").ss(2).p("ABuDYQAmiKhHh8QhGh8iJgm");
	this.shape_2.setTransform(686.5,65.9);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(12).to({_off:false},0).to({_off:true},7).wait(12).to({_off:false},0).wait(7).to({_off:true},1).wait(12).to({_off:false},0).wait(7).to({_off:true},1).wait(12).to({_off:false},0).wait(7).to({_off:true},1).wait(12).to({_off:false},0).wait(7).to({_off:true},1).wait(12).to({_off:false},0).wait(7).to({_off:true},1).wait(12).to({_off:false},0).wait(7).to({_off:true},1).wait(12).to({_off:false},0).wait(7).to({_off:true},1).wait(12).to({_off:false},0).wait(7).to({_off:true},1).wait(12).to({_off:false},0).wait(410));

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E93344").ss(2).p("ACQEWQAxiyhbigQhcigixgx");
	this.shape_3.setTransform(694.5,62.6);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(18).to({_off:false},0).to({_off:true},1).wait(18).to({_off:false},0).wait(1).to({_off:true},1).wait(18).to({_off:false},0).wait(1).to({_off:true},1).wait(18).to({_off:false},0).wait(1).to({_off:true},1).wait(18).to({_off:false},0).wait(1).to({_off:true},1).wait(18).to({_off:false},0).wait(1).to({_off:true},1).wait(18).to({_off:false},0).wait(1).to({_off:true},1).wait(18).to({_off:false},0).wait(1).to({_off:true},1).wait(18).to({_off:false},0).wait(1).to({_off:true},1).wait(18).to({_off:false},0).wait(404));

	// The small amounts of energy released by the molecules as they realign are measured  with a large coil.
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQACADABAEQgBAFgCADQgDADgFAAQgEAAgDgDg");
	this.shape_4.setTransform(172.8,97.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_5.setTransform(168.9,92);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_6.setTransform(164.7,92.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AgWAoQgJgGgFgJQgFgLAAgOQAAgNAFgLQAGgKAJgFQALgFALAAQAMAAAJAFQAKAGAFAKQAGAKgBANQAAAQgGAKQgGAKgKAEQgKAGgKgBQgMAAgKgFgAgOgbQgGAEgDAIQgCAHAAAIQgBAKAEAIQADAHAGAEQAGAFAHAAQAIAAAFgFQAHgEACgIQAEgHABgKQgBgHgDgIQgCgHgGgFQgFgGgKAAQgIAAgGAGg");
	this.shape_7.setTransform(157.6,94);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AgNAnQgKgFgFgKQgFgKAAgNQAAgMAFgLQAGgLALgFQAKgHANABQAHgBAGACIAJADIgDANIgIgEIgLgBQgKAAgGAFQgGAEgEAHQgDAIAAAIQAAAKAEAIQAEAHAGADQAGAEAJABIALgCIAIgDIADAMQgDACgHACIgPABQgMAAgKgGg");
	this.shape_8.setTransform(148.8,94);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgLAAgNQAAgMAFgLQAEgKAKgGQAJgGALAAQALAAAHADQAHAFAEAGQAEAGACAHQACAIgBAFIAAAEIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgDIACAMQgEACgHACIgSABQgMAAgKgGgAAXgHQAAgFgCgGQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_9.setTransform(136.4,94);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AgTA+QgIgCgFgEIAEgMQAEADAHACQAGACAJAAQAGAAAHgDQAGgDAEgHQADgHABgKIAAgKIgBAAQgEAGgGAEQgHAEgJAAQgLAAgJgFQgIgGgFgJQgFgJABgMQgBgPAGgKQAFgKAKgGQAJgFAJAAQAHAAAFACQAGACADAEQAEADABAEIABAAIABgNIAOAAIgBAKIAAAOIAAAxQAAAPgDAKQgDAJgHAGQgGAGgIACQgIACgIAAIgQgBgAgRgpQgGAJgBAPQABAJADAHQACAGAGAEQAGAEAHAAQAHAAAHgEQAFgEADgHIABgEIABgEIAAgQIgBgEIAAgDQgDgHgFgFQgGgFgJAAQgKAAgIAJg");
	this.shape_10.setTransform(126.6,95.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgUAtIAAg8IAAgOIgBgNIAOAAIABARIAAAAQADgJAGgFQAGgEAIAAIADAAIACAAIAAAPIgDAAIgCAAQgJgBgFAGQgFAFgCAKIAAADIAAAEIAAAug");
	this.shape_11.setTransform(119.5,93.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgCQABgEgCgEQgBgFgEgDQgFgDgHgBQgHAAgFACQgGACgFADIgEgLQAGgEAHgCQAIgBAHAAQANAAAHAFQAIAFACAIQADAIAAAJIAAAfIAAAMIACAKIgPAAIgBgLIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAEAAAIQAAAJAEADQAFAEAGAAQAHAAAGgFQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_12.setTransform(111.5,94);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_13.setTransform(105.3,92);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgCQABgEgCgEQgBgFgEgDQgFgDgHgBQgHAAgFACQgGACgFADIgEgLQAGgEAHgCQAIgBAHAAQANAAAHAFQAIAFACAIQADAIAAAJIAAAfIAAAMIACAKIgPAAIgBgLIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAEAAAIQAAAJAEADQAFAEAGAAQAHAAAGgFQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_14.setTransform(94.8,94);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgFgEgDQgFgEgHAAQgHABgFAEQgGAFgCAFIgBADIAAAEIAAA1IgQAAIAAh/IAQAAIAAA2IAAAAIAFgGIAGgEIAIgEIAIgBIAJACQAGABAEAEQAFAFADAHQADAGAAALIAAA0g");
	this.shape_15.setTransform(81.9,92);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABALIgGACIgIABQgGAAgEgCg");
	this.shape_16.setTransform(73.8,92.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_17.setTransform(68.8,92.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AAVAsIgOgqIgEgNIgDgPIAAAAIgDAPIgFANIgOAqIgOAAIgahXIAQAAIALArIAEAPIADANIAAAAIAEgNIAEgOIAOgsIANAAIANArIAEAPIAEANIAAAAIADgNIAEgPIAMgrIAQAAIgcBXg");
	this.shape_18.setTransform(60.1,94);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgWA7QgIgFgFgKQgFgKAAgOQAAgOAFgJQAGgKAIgHQAJgFALAAQAJAAAGAEQAHAEADAFIAAAAIAAg0IAQAAIAABoIAAANIABAKIgOAAIgBgPIAAAAQgEAIgIAEQgHAFgKAAQgLAAgIgGgAgMgIQgGAEgDAGQgDAJAAAJQAAAJADAHQADAHAFAFQAGAEAIAAQAHAAAHgFQAGgEADgKIAAgDIAAgDIAAgQIAAgDIAAgEQgCgGgGgFQgGgGgJAAQgHABgGAEg");
	this.shape_19.setTransform(371.5,66.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgMQAAgNAFgKQAEgLAKgGQAJgHALAAQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgDIACALQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_20.setTransform(362.2,68.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgUAsIAAg6IAAgPIgBgMIAOAAIABAQIAAAAQADgIAGgFQAGgFAIgBIADAAIACABIAAAPIgDgBIgCAAQgJABgFAFQgFAGgCAIIAAAEIAAAEIAAAtg");
	this.shape_21.setTransform(355.4,68.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgUApQgHgDgEgIQgFgIAAgQIAAgxIAQAAIAAAvQgBAMAFAHQAEAIAMABQADgBAFgCQAEgCADgEQADgDABgDIABgEIAAgEIAAg0IAQAAIAAA+IAAANIABAKIgNAAIgBgOIgBAAQgCAEgEADQgEAEgFADQgGACgHAAQgHAAgHgDg");
	this.shape_22.setTransform(347,68.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AgRArQgGgBgEgCIADgNIAJAFQAHABAGAAQAHAAAEgDQAFgEAAgFQgBgGgEgDQgDgFgIgCQgMgEgFgGQgGgGAAgIQAAgHAEgGQAEgGAGgDQAHgEAIAAQAHAAAGACQAFABAEADIgFALIgGgDQgFgBgGAAQgHgBgDAEQgEADAAAFQAAAGAEADQAEADAIADQALAEAGAGQAGAFgBAKQAAAMgIAHQgJAHgOAAQgHAAgHgCg");
	this.shape_23.setTransform(338.5,68.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgGQAAgRAOgGQANgJAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFADIgEgKQAGgEAHgBQAIgDAHAAQANAAAHAGQAIAFACAIQADAIAAAJIAAAgIAAAKIACAKIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIABgFAFQgGAFAAAHQAAAJAEADQAFADAGAAQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_24.setTransform(330.3,68.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgMQAAgNAFgKQAEgLAKgGQAJgHALAAQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgDIACALIgLADIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_25.setTransform(321.7,68.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AAvAsIAAgwQAAgNgFgGQgEgIgKABQgGAAgGADQgEAFgCAGIgBAEIgBADIAAA1IgOAAIAAgzQgBgKgEgHQgFgGgIAAQgGgBgDADQgFACgCAEQgDADgBAEIgBAEIgBAEIAAAzIgPAAIAAg+IAAgMIAAgLIANAAIABANIAAAAIAGgIQAFgDAEgCQAFgDAIAAQAJABAGAFQAFAEADAIIABAAIAFgGIAEgGQAEgCAFgCQAEgCAHAAQAGAAAHAEQAGADAEAIQAFAIABAPIAAAyg");
	this.shape_26.setTransform(309.7,68.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgMQAAgNAFgKQAEgLAKgGQAJgHALAAQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgDIACALQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_27.setTransform(293.9,68.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgUAsIAAg6IAAgPIgBgMIAOAAIABAQIAAAAQADgIAGgFQAGgFAIgBIADAAIACABIAAAPIgDgBIgCAAQgJABgFAFQgFAGgCAIIAAAEIAAAEIAAAtg");
	this.shape_28.setTransform(287.1,68.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgGQAAgRAOgGQANgJAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFADIgEgKQAGgEAHgBQAIgDAHAAQANAAAHAGQAIAFACAIQADAIAAAJIAAAgIAAAKIACAKIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIABgFAFQgGAFAAAHQAAAJAEADQAFADAGAAQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_29.setTransform(279.1,68.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AAWAsIAAgwQAAgHgDgHQgBgFgFgEQgEgEgIABQgGAAgGAEQgGAFgCAHIgBADIAAAEIAAAzIgQAAIAAg+IAAgMIgBgLIAPAAIABAOIAAAAQACgFAEgDQAEgEAGgCQAFgDAHAAIAJACQAFABAFAFQAFAEADAHQADAIAAAKIAAAzg");
	this.shape_30.setTransform(266.2,68.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AgTA+QgHgCgGgEIAEgMQAEADAHACQAHACAIAAQAGAAAHgDQAGgDAEgHQAEgHAAgKIAAgKIgBAAQgDAGgIAEQgHAEgIAAQgLAAgJgFQgIgGgFgJQgFgJAAgMQAAgPAGgKQAFgKAKgGQAIgFALAAQAGAAAFACQAGACADAEQAEADACAEIAAAAIABgNIANAAIAAAKIAAAOIAAAxQAAAPgDAKQgDAJgGAGQgHAGgJACQgHACgIAAIgQgBgAgRgpQgHAJAAAPQAAAJAEAHQACAGAGAEQAFAEAIAAQAHAAAHgEQAGgEACgHIABgEIABgEIAAgQIgBgEIAAgDQgDgHgFgFQgGgFgJAAQgKAAgIAJg");
	this.shape_31.setTransform(256,70.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_32.setTransform(249.2,67);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_33.setTransform(244.9,66.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgGQAAgRAOgGQANgJAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFADIgEgKQAGgEAHgBQAIgDAHAAQANAAAHAGQAIAFACAIQADAIAAAJIAAAgIAAAKIACAKIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIABgFAFQgGAFAAAHQAAAJAEADQAFADAGAAQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_34.setTransform(238.2,68.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgMQAAgNAFgKQAEgLAKgGQAJgHALAAQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgDIACALIgLADIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_35.setTransform(229.6,68.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgUAsIAAg6IAAgPIgBgMIAOAAIABAQIAAAAQADgIAGgFQAGgFAIgBIADAAIACABIAAAPIgDgBIgCAAQgJABgFAFQgFAGgCAIIAAAEIAAAEIAAAtg");
	this.shape_36.setTransform(222.8,68.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgjAyIAHgDIAHgFIAGgHQAEgEADgHIABgCIAAgBIAAgCIAAgDIghhOIARAAIATAzIAEAJIABAHIABAAIACgHIADgKIARgyIARAAIgXA9IgLAZIgIARQgGAIgFAEQgGAFgFACIgIAEg");
	this.shape_37.setTransform(211.4,70.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgMQAAgNAFgKQAEgLAKgGQAJgHALAAQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgDIACALIgLADIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_38.setTransform(202.6,68.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgFgEgDQgFgEgHAAQgHABgFAEQgGAFgCAFIgBADIAAAFIAAA0IgQAAIAAh/IAQAAIAAA3IAAAAIAFgGIAGgGIAIgDIAIgBIAJABQAGACAEAFQAFAEADAHQADAGAAALIAAA0g");
	this.shape_39.setTransform(193.1,66.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFgBIAEAAIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_40.setTransform(185.1,67.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgRArQgGgBgFgCIAEgNIAJAFQAGABAHAAQAHAAAEgDQAFgEAAgFQAAgGgFgDQgDgFgIgCQgMgEgFgGQgGgGAAgIQAAgHAEgGQAEgGAGgDQAGgEAJAAQAHAAAFACQAGABAEADIgEALIgHgDQgFgBgGAAQgGgBgEAEQgEADAAAFQAAAGAEADQAEADAIADQALAEAGAGQAGAFgBAKQABAMgJAHQgJAHgOAAQgHAAgHgCg");
	this.shape_41.setTransform(174.8,68.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgGQAAgRAOgGQANgJAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFADIgEgKQAGgEAHgBQAIgDAHAAQANAAAHAGQAIAFACAIQADAIAAAJIAAAgIAAAKIACAKIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIABgFAFQgGAFAAAHQAAAJAEADQAFADAGAAQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_42.setTransform(166.6,68.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgQArQgHgBgEgCIADgNIAJAFQAHABAFAAQAIAAAEgDQAFgEgBgFQAAgGgDgDQgEgFgIgCQgMgEgFgGQgGgGAAgIQAAgHADgGQAFgGAGgDQAGgEAJAAQAHAAAGACQAFABAEADIgFALIgHgDQgEgBgGAAQgHgBgDAEQgEADAAAFQAAAGAEADQAFADAGADQAMAEAGAGQAFAFAAAKQAAAMgIAHQgJAHgOAAQgHAAgGgCg");
	this.shape_43.setTransform(155.1,68.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgMQAAgNAFgKQAEgLAKgGQAJgHALAAQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgDIACALQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_44.setTransform(147.1,68.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_45.setTransform(140.4,66.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AgUApQgHgDgEgIQgFgIAAgQIAAgxIAQAAIAAAvQgBAMAFAHQAEAIALABQAEgBAFgCQAEgCADgEQADgDABgDIABgEIAAgEIAAg0IAQAAIAAA+IAAANIABAKIgNAAIgBgOIgBAAQgCAEgEADQgEAEgFADQgGACgHAAQgHAAgHgDg");
	this.shape_46.setTransform(133.4,68.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgNAoQgKgGgFgKQgFgKAAgNQAAgNAFgKQAGgKALgHQAKgFANgBQAHAAAGACIAJADIgDAMIgIgCIgLgCQgKAAgGAEQgGAFgEAIQgDAHAAAIQAAALAEAGQAEAIAGAEQAGAEAJAAIALgBIAIgDIADALQgDACgHABIgPACQgMAAgKgFg");
	this.shape_47.setTransform(124.5,68.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgMQAAgNAFgKQAEgLAKgGQAJgHALAAQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgDIACALIgLADIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_48.setTransform(115.9,68.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_49.setTransform(109.2,66.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AgVAoQgKgFgFgLQgGgKABgOQgBgNAGgKQAGgKAJgGQALgGALAAQAMAAAKAGQAJAGAFAKQAGAKgBANQAAAPgGAKQgHALgJAFQgKAEgKAAQgMABgJgGgAgOgcQgGAGgDAHQgCAIAAAHQAAAKADAHQADAIAGAEQAGAEAHAAQAIAAAFgEQAGgEAEgIQADgIAAgJQAAgHgDgHQgCgIgGgGQgFgEgKAAQgIAAgGAEg");
	this.shape_50.setTransform(102.2,68.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AAvAsIAAgwQAAgNgEgGQgFgIgKABQgHAAgFADQgEAFgDAGIgBAEIAAADIAAA1IgPAAIAAgzQABgKgFgHQgEgGgKAAQgEgBgFADQgEACgCAEQgDADgBAEIgBAEIgBAEIAAAzIgPAAIAAg+IAAgMIgBgLIAPAAIAAANIABAAIAGgIQADgDAGgCQAFgDAHAAQAJABAGAFQAFAEAEAIIAAAAIAEgGIAGgGQAEgCAEgCQAFgCAGAAQAGAAAGAEQAHADAFAIQAEAIAAAPIAAAyg");
	this.shape_51.setTransform(89.7,68.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgMQAAgNAFgKQAEgLAKgGQAJgHALAAQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgDIACALIgLADIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_52.setTransform(73.9,68.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgFgEgDQgFgEgHAAQgHABgFAEQgGAFgCAFIgBADIAAAFIAAA0IgQAAIAAh/IAQAAIAAA3IAAAAIAFgGIAGgGIAIgDIAIgBIAJABQAGACAEAFQAFAEADAHQADAGAAALIAAA0g");
	this.shape_53.setTransform(64.4,66.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFgBIAEAAIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_54.setTransform(56.4,67.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgjAyIAGgDIAIgFIAHgHQADgFADgFIABgCIABgCIgBgCIAAgCIghhQIASAAIASA0IADAJIACAIIABAAIACgIIADgJIARg0IARAAIgXA/IgLAYIgJASQgEAGgGAFQgFAFgGADIgIACg");
	this.shape_55.setTransform(354.7,45.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgNA9QgHgEgGgIIAAAAIgBAOIgNAAIAAgLIAAgLIAAhpIAQAAIAAA3QAFgIAHgDQAHgFAKAAQALAAAIAGQAIAFAFAKQAEAJABANQAAAQgHAKQgFAKgJAGQgJAFgKAAQgIAAgHgEgAgOgIQgGAGgEAIIAAADIAAAEIAAAPIAAADIAAADQADAIAGAFQAGAFAJAAQAMAAAGgJQAIgJgBgPQAAgJgCgHQgDgHgGgEQgGgFgIABQgIAAgGAEg");
	this.shape_56.setTransform(345.8,41.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AgWA8QgJgGgEgKQgFgKAAgOQAAgOAFgJQAFgLAJgFQAJgGALAAQAJAAAGAEQAHAEADAFIAAAAIAAg0IAQAAIAABpIAAALIABALIgOAAIgBgPIgBAAQgDAIgIAEQgHAFgKAAQgKAAgJgFgAgMgIQgGAEgDAGQgDAIAAAKQAAAJADAHQADAIAGAEQAFAEAIAAQAHAAAHgFQAGgEADgJIAAgEIAAgEIAAgPIAAgDIAAgDQgCgHgGgGQgGgEgJAAQgIgBgFAFg");
	this.shape_57.setTransform(331.2,41.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgKAAgOQAAgMAFgLQAEgKAKgGQAJgGALAAQALAAAHADQAHAFAEAGQAEAGACAIQACAGgBAGIAAAEIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgCIAKgDIACAMQgEACgHACIgSACQgMgBgKgGgAAXgHQAAgFgCgGQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_58.setTransform(321.9,43.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgRAsQgGgCgFgDIAEgMIAJAEQAGACAHABQAHAAAEgEQAFgEAAgGQAAgFgFgEQgDgDgIgEQgMgEgFgFQgGgGAAgIQAAgHAEgGQAEgGAGgDQAGgEAJABQAHgBAFACQAGACAEACIgEAMIgHgEQgFgBgGgBQgGABgEADQgEADAAAFQAAAFAEADQAEAEAIADQALAEAGAFQAGAHgBAJQABAMgJAHQgJAHgOABQgHAAgHgCg");
	this.shape_59.setTransform(313.8,43.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgHQAAgPAOgIQANgIAYAAIAAgCQABgEgCgEQgBgFgEgDQgFgDgHgBQgHAAgFACQgGACgFADIgEgLQAGgDAHgDQAIgBAHAAQANgBAHAGQAIAFACAIQADAIAAAJIAAAfIAAAMIACAKIgPAAIgBgMIgBAAQgDAGgHADQgHAFgIAAQgJAAgGgFgAABAAQgIABgFAFQgGAEAAAJQAAAHAEAEQAFAEAGAAQAHgBAGgEQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_60.setTransform(305.7,43.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgKAAgOQAAgMAFgLQAEgKAKgGQAJgGALAAQALAAAHADQAHAFAEAGQAEAGACAIQACAGgBAGIAAAEIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgCIAKgDIACAMQgEACgHACIgSACQgMgBgKgGgAAXgHQAAgFgCgGQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_61.setTransform(297.1,43.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_62.setTransform(290.4,41.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgKAAgOQAAgMAFgLQAEgKAKgGQAJgGALAAQALAAAHADQAHAFAEAGQAEAGACAIQACAGgBAGIAAAEIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgCIAKgDIACAMIgLAEIgSACQgMgBgKgGgAAXgHQAAgFgCgGQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_63.setTransform(283.8,43.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#373535").s().p("AgUAtIAAg8IAAgOIgBgNIAOAAIABASIAAAAQADgJAGgGQAGgEAIAAIADAAIACAAIAAAPIgDgBIgCAAQgJAAgFAGQgFAFgCAKIAAADIAAAEIAAAug");
	this.shape_64.setTransform(277,43.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#373535").s().p("AgjAyIAHgDIAHgFIAGgHQAEgFADgFIABgCIAAgCIAAgCIgBgCIgghQIARAAIAUA0IADAJIABAIIAAAAIADgIIADgJIARg0IARAAIgYA/IgKAYIgIASQgGAGgEAFQgHAFgFADIgIACg");
	this.shape_65.setTransform(265.6,45.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#373535").s().p("AgTA+QgHgCgGgEIAEgMQAEADAHACQAHACAIAAQAGAAAHgDQAGgDAEgHQAEgHAAgKIAAgKIgBAAQgDAGgIAEQgHAEgIAAQgLAAgJgFQgIgGgFgJQgFgJAAgMQAAgPAGgKQAFgKAKgGQAIgFALAAQAGAAAFACQAGACADAEQAEADACAEIAAAAIABgNIANAAIAAAKIAAAOIAAAxQAAAPgDAKQgDAJgGAGQgHAGgJACQgHACgIAAIgQgBgAgRgpQgHAJAAAPQAAAJAEAHQACAGAGAEQAFAEAIAAQAHAAAHgEQAGgEACgHIABgEIABgEIAAgQIgBgEIAAgDQgDgHgFgFQgGgFgJAAQgKAAgIAJg");
	this.shape_66.setTransform(256,45.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#373535").s().p("AgUAtIAAg8IAAgOIgBgNIAOAAIABASIAAAAQADgJAGgGQAGgEAIAAIADAAIACAAIAAAPIgDgBIgCAAQgJAAgFAGQgFAFgCAKIAAADIAAAEIAAAug");
	this.shape_67.setTransform(248.9,43.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgKAAgOQAAgMAFgLQAEgKAKgGQAJgGALAAQALAAAHADQAHAFAEAGQAEAGACAIQACAGgBAGIAAAEIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgCIAKgDIACAMQgEACgHACIgSACQgMgBgKgGgAAXgHQAAgFgCgGQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_68.setTransform(241,43.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#373535").s().p("AAVAtIAAgyQAAgGgBgGQgCgHgFgDQgFgDgGgBQgIABgFAFQgGAEgCAHIgBADIAAAEIAAA0IgQAAIAAg/IAAgNIAAgLIANAAIABAPIABAAQACgFAEgDQAEgEAFgCQAGgDAGABIALABQAEACAGAEQAEAEADAHQADAIABALIAAAzg");
	this.shape_69.setTransform(231.5,43.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgKAAgOQAAgMAFgLQAEgKAKgGQAJgGALAAQALAAAHADQAHAFAEAGQAEAGACAIQACAGgBAGIAAAEIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgCIAKgDIACAMQgEACgHACIgSACQgMgBgKgGgAAXgHQAAgFgCgGQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_70.setTransform(222,43.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#373535").s().p("AgPBBIAAhKIgMAAIAAgMIAMAAIAAgEQAAgKACgIQACgIAGgFQAFgEAEgCIALgCIAIABIAFACIgCAMIgEgCIgFAAQgIAAgDADQgEAEgBAGQgBAFAAAHIAAAFIAUAAIAAAMIgUAAIAABKg");
	this.shape_71.setTransform(211.6,41.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#373535").s().p("AgWAoQgJgGgFgJQgFgKAAgOQAAgOAFgLQAGgKAJgFQALgGALABQAMgBAJAGQAKAGAFAKQAGAKgBANQAAAPgGALQgGAKgKAEQgKAGgKAAQgMgBgKgFgAgOgbQgGAEgDAIQgCAIAAAHQgBAKAEAIQADAHAGAEQAGAFAHAAQAIAAAFgFQAHgEACgIQAEgHABgKQgBgHgDgIQgCgHgGgFQgFgGgKAAQgIAAgGAGg");
	this.shape_72.setTransform(203.5,43.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#373535").s().p("AgRAsQgGgCgFgDIAFgMIAJAEQAGACAGABQAHAAAEgEQAEgEABgGQAAgFgFgEQgDgDgIgEQgLgEgHgFQgFgGAAgIQAAgHAEgGQADgGAHgDQAHgEAIABQAHgBAFACQAGACADACIgDAMIgIgEQgEgBgGgBQgGABgEADQgEADAAAFQAAAFAEADQAEAEAHADQAMAEAGAFQAGAHAAAJQAAAMgJAHQgIAHgPABQgHAAgHgCg");
	this.shape_73.setTransform(191.2,43.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABALIgGACIgIABQgGAAgEgCg");
	this.shape_74.setTransform(184.6,42.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#373535").s().p("AAVAtIAAgyQAAgGgCgGQgCgHgEgDQgFgDgHgBQgHABgFAFQgGAEgCAHIAAADIgBAEIAAA0IgQAAIAAg/IAAgNIAAgLIANAAIABAPIABAAQACgFAEgDQAEgEAFgCQAGgDAHABIAKABQAEACAGAEQAEAEADAHQADAIAAALIAAAzg");
	this.shape_75.setTransform(176.7,43.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#373535").s().p("AgUAqQgGgEgFgIQgFgJAAgOIAAgzIAQAAIAAAvQAAANAEAIQAEAHALAAQAEAAAFgCQAEgCADgDQADgDABgEIACgEIAAgEIAAg1IAPAAIAAA/IAAAMIABAMIgNAAIgBgPIgBAAQgCAEgEAEQgEADgGADQgFACgHABQgHAAgHgDg");
	this.shape_76.setTransform(166.8,43.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#373535").s().p("AgVAoQgKgGgFgJQgGgKABgOQgBgOAGgLQAGgKAKgFQAJgGALABQANgBAKAGQAJAGAFAKQAFAKAAANQAAAPgGALQgHAKgKAEQgJAGgKAAQgMgBgJgFgAgOgbQgGAEgDAIQgDAIAAAHQAAAKAEAIQADAHAGAEQAGAFAHAAQAHAAAHgFQAGgEADgIQADgHAAgKQAAgHgCgIQgDgHgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_77.setTransform(156.9,43.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#373535").s().p("AAvAtIAAgxQAAgMgEgHQgFgIgKAAQgHAAgEAFQgGAEgCAGIAAADIgBAFIAAA1IgPAAIAAgzQAAgLgEgHQgEgGgKgBQgFABgEACQgDACgDADQgDAEgBAEIgBAEIAAAEIAAA0IgQAAIAAg/IAAgNIgBgLIAPAAIAAAPIABAAIAFgIQAFgEAEgCQAGgDAHABQAJAAAGAEQAFAFADAIIABAAIAEgHIAGgFQAEgCAEgCQAEgCAHABQAGAAAGACQAHAEAEAIQAGAIAAAPIAAAzg");
	this.shape_78.setTransform(144.4,43.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgHQAAgPAOgIQANgIAYAAIAAgCQABgEgCgEQgBgFgEgDQgFgDgHgBQgHAAgFACQgGACgFADIgEgLQAGgDAHgDQAIgBAHAAQANgBAHAGQAIAFACAIQADAIAAAJIAAAfIAAAMIACAKIgPAAIgBgMIgBAAQgDAGgHADQgHAFgIAAQgJAAgGgFgAABAAQgIABgFAFQgGAEAAAJQAAAHAEAEQAFAEAGAAQAHgBAGgEQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_79.setTransform(132.3,43.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_80.setTransform(122.3,41.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_81.setTransform(118,41.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgHQAAgPAOgIQANgIAYAAIAAgCQABgEgCgEQgBgFgEgDQgFgDgHgBQgHAAgFACQgGACgFADIgEgLQAGgDAHgDQAIgBAHAAQANgBAHAGQAIAFACAIQADAIAAAJIAAAfIAAAMIACAKIgPAAIgBgMIgBAAQgDAGgHADQgHAFgIAAQgJAAgGgFgAABAAQgIABgFAFQgGAEAAAJQAAAHAEAEQAFAEAGAAQAHgBAGgEQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_82.setTransform(111.3,43.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#373535").s().p("AAvAtIAAgxQAAgMgFgHQgEgIgKAAQgHAAgFAFQgFAEgCAGIgBADIAAAFIAAA1IgPAAIAAgzQABgLgFgHQgEgGgKgBQgEABgFACQgEACgCADQgDAEgBAEIgBAEIgBAEIAAA0IgPAAIAAg/IAAgNIgBgLIAPAAIAAAPIAAAAIAHgIQADgEAGgCQAEgDAIABQAJAAAGAEQAGAFADAIIAAAAIAEgHIAGgFQADgCAFgCQAFgCAGABQAGAAAGACQAHAEAFAIQAEAIAAAPIAAAzg");
	this.shape_83.setTransform(99.7,43.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#373535").s().p("AgRAsQgGgCgEgDIADgMIAJAEQAHACAGABQAHAAAEgEQAFgEgBgGQAAgFgEgEQgDgDgIgEQgMgEgFgFQgGgGAAgIQAAgHADgGQAFgGAGgDQAHgEAIABQAHgBAGACQAFACAEACIgFAMIgGgEQgFgBgGgBQgHABgDADQgEADAAAFQAAAFAEADQAEAEAIADQALAEAGAFQAFAHAAAJQAAAMgIAHQgJAHgOABQgHAAgHgCg");
	this.shape_84.setTransform(88.6,43.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgKAAgOQAAgMAFgLQAEgKAKgGQAJgGALAAQALAAAHADQAHAFAEAGQAEAGACAIQACAGgBAGIAAAEIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgCIAKgDIACAMQgEACgHACIgSACQgMgBgKgGgAAXgHQAAgFgCgGQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_85.setTransform(76.8,43.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgFgEgDQgFgEgHAAQgHAAgFAFQgGAFgCAFIgBAEIAAADIAAA1IgQAAIAAh/IAQAAIAAA2IAAAAIAFgGIAGgEIAIgEIAIgBIAJABQAGACAEAEQAFAEADAIQADAGAAALIAAA0g");
	this.shape_86.setTransform(67.3,41.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#373535").s().p("AgHA9IAAhrIglAAIAAgOIBZAAIAAAOIglAAIAABrg");
	this.shape_87.setTransform(57.9,41.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},600).wait(1));

	// Tube
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#97999B").s().p("AiWHlIACg2IAFAAQAPAAAPgFQBUgWA7h7QA8h8AAidQAAicg8h9Qg7h7hUgWQgKgDgGAAIgBg4IARACQBwATBLCKQBNCLAAC7QAAC7hNCLQhLCKhwATQgQADgOAAg");
	this.shape_88.setTransform(522.9,88.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D0D2D3").s().p("AkCLHIACiPIAJAAIAegCQCYgRBligQBmiiAAjjQAAjihmiiQhligiYgRIgTgCQgChHgEhJIAZADQDIAQCJDNQCLDNAAEaQAAEbiLDOQiJDMjIAQIgeADg");
	this.shape_89.setTransform(533.3,88.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#97999B").s().p("Az3L+IABg3IAKABIAegDQDIgQCKjMQCLjOAAkbQAAkaiLjNQiKjNjIgQIgYgDIgEg3IeqAAQB0AABpA9QBmA6BOBqQCnDhAAE8QAAE9inDhQhOBqhmA6QhpA9h0AAgAsZmyQBlDEAADuQAADuhlDFQhiC/ifBWIbaAAQDSgBCVjQQCUjRAAkmQAAkliUjRQiVjQjSgBI7aAAQCfBWBiC/g");
	this.shape_90.setTransform(634.6,88.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#97999B").s().p("AjEI3IABg2IAHAAQAOAAAQgCQB/gSBTiRQBViRAAjLQAAjKhViSQhTiRh/gRIgRgCIgBg3IASACQCYARBlCgQBmCiAADiQAADjhmChQhlChiYARIgeACIgIgBg");
	this.shape_91.setTransform(527.4,88.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#292929").s().p("AqRAIQgEijADg1IAIAAQALgCAXAEQASADAlAAQAlgBATAEIAyAHIAtABIAcALIBKAEQAUADAhAJIBoAGIAmALIA/AFIAaAIQAQAFANABIAAAJQAEACAJADQAKACAEADIAJAIIAfAIQAGAEAIAKQAJALAFADIAYALQAJAEAWgKQASgHAPgLQAYgMACgdIADgiQADgTAMgJIAIgGQAFgEAHABIAKADQAHACAGAAQAPgPALADIAIACQAFAAAFgCQADgBAMgRQAIgNARAEQAEABAVARQARAOALgDIAOgJQAHgDAQAAQAQgBAKACIAuANIAdgQQAWgMARAIQAQAHAVA2QAQAqAJAlQABAFAIALQAGAJAAALIgKAUQgFAMACAKIAHASQAFAMgCAHIgGANQgFAJgBAFIgEAXQgDAFgKAGQgLAHgDADIgbAfQgQARgQAKIgUAGIgPALQgKAHgIACIg2gCIgNgCIgPgDIgNgLQgGgDgKgCIgSgEIglgZIgegLQgQgHgJgJQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgIgDgHIgBgDQgBgDgDgDQgMgOgTAGIgLADIgFABQgMABgMAHQgUATgeAUIAAAAQhBAsg+ANQgEAEgNAGQgaAKgtAEIgIACIgmgBQiLgEgygEIhQgCIAAAAQhKgEhYgMIgMAPIgCACQgQAIgYAEIgrAHQgNgEgUAFQALhTgDiHg");
	this.shape_92.setTransform(608.6,87.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#292929").s().p("AI4EDQhPgMh4AAIhHABQgqAAgagEQgQgCgkADQgiACgQgEQgLgDgDgTQgEgUgJgDQgDgHgCgQIgDgVQgKgHgMAFQgPAHgJABIgOABQhRATgZgDIgOAAQhYAAg1gCQhKgEg6gJIicABQgJgBgHAGQgIAIgDAAQgVAIgvgIQgLgCgcAEQgXACgNgFQgQgHgIgGQgLgLAAgPIAAgSQABgDgBgDIgGgoQAAgEgDgDIgDhSQgNhPALhDIACgxQACgaAOgJIALgEIAMgIQAJgEAGAFQAIAFAAAJIABARIAJATQAEAJAEAQQAFASADAHIAFAAIAEg9QAEgoAXAGQAKABAFAPIAHAYQAIALAHARQAGA3AGAdQAKAtAUAgQAiA3BZgNIAUABIA8gMIAtgBIBTgNICBgGQAGgBAFgDIAIgDIAFgDQAGgDAMgCIATgDQAYgGANgPIAEABQANAAAIgHIAGgBIACAAQADgFAAgMQAAgOACgGIAUgaQAFgDAIAAIAQAAQALgCAVgJIAngFQAJgBALgFIASgHIAwgFIAlgMIBZgFIApgKICygCQAIABALAGQAKAHAHABQAJABAHgHQAIgJAEgBIA7ACQgDA1AECjQADCHgLBTIgUAGQgXAGguACIgbABQgdAAgUgDg");
	this.shape_93.setTransform(459.7,85.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#97999B").s().p("Ah6IZQikjgAAk5QAAk8CnjgQBOhrBlg6QBpg8B0AAIACAAIADA3IgkACQjHAQiJDNQiLDOAAEZQAAEbCLDOQCJDMDHARIAUABIAAA3QjngFihjgg");
	this.shape_94.setTransform(480.4,88.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#97999B").s().p("ACcI2QiXgRhmigQhliigBjjQABjhBliiQBmihCXgRIAegCIAMABIABA3IgNgBQgOAAgQACQh+AShUCRQhUCRAADKQAADLBUCSQBUCRB+ARIAXACIgBA3g");
	this.shape_95.setTransform(489.9,88.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#97999B").s().p("ABuHkQhvgThMiKQhMiLgBi8QABi6BMiLQBMiKBvgTQAQgDAPAAIANABIABA3IgOgBQgQAAgPAFQhUAWg7B7Qg8B8AACcQAACdA8B9QA7B7BUAWQANAEAMAAIgBA3IgYgCg");
	this.shape_96.setTransform(494.5,88.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D0D2D3").s().p("ADZLGQjHgRiKjMQiKjOAAkbQAAkZCKjOQCKjNDHgQIAkgCQAEBIACBIIgLgBIgfACQiXARhlChQhmCiAADhQAADjBmCiQBlCgCXARIAWACIgCCPg");
	this.shape_97.setTransform(483.7,88.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#B4B6B8").s().p("Ah3GvIAOmvQAHj5gCi1QAGABAKADQBUAWA8B7QA8B8AACdQAACdg8B8Qg8B7hUAWQgPAEgPABg");
	this.shape_98.setTransform(520,88.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#B4B6B8").s().p("ABQGrQhUgXg7h6Qg8h9AAidQAAicA8h9QA7h6BUgXQAPgEAPAAIAOABQACC1gHD5IgOGuQgMgBgNgDg");
	this.shape_99.setTransform(497.5,88.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E7E8E9").s().p("AxqLIQCfhWBii/QBljFAAjuQAAjuhljEQhii/ifhWIbaAAQDSABCVDQQCUDRAAElQAAEmiUDRQiVDQjSABg");
	this.shape_100.setTransform(642.6,88.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88}]}).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88}]},600).wait(1));

	// Computer transform the captured signal into the images we see on an fMRI. The image is “sliced” into squares that are between 1mm and 5mm wide.
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#5A5B5A").p("Eg54AAAMBzyAAA");
	this.shape_101.setTransform(398.4,178.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#373535").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQACADABAEQgBAFgCADQgDADgFAAQgEAAgDgDg");
	this.shape_102.setTransform(437.5,317.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#373535").s().p("AgSAnQgJgEgFgLQgFgJAAgNQAAgNAFgLQAEgKAKgGQAJgHALABQALAAAHADQAHAEAEAHQAEAGACAIQACAGgBAGIAAAEIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALIgLAEIgSACQgMgBgKgGgAAXgHQAAgGgCgFQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_103.setTransform(431.2,314.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#373535").s().p("AgWA8QgJgGgEgKQgFgKAAgOQAAgOAFgJQAFgLAKgFQAIgGALAAQAJAAAHAEQAGAEADAFIABAAIAAg0IAQAAIAABpIAAAMIAAAKIgOAAIgBgPIgBAAQgDAHgHAFQgIAFgKAAQgLAAgIgFgAgMgIQgGAEgDAGQgDAJAAAJQAAAJADAHQACAIAHAEQAFAEAHAAQAJAAAGgFQAHgFACgIIABgEIAAgEIAAgPIAAgDIgBgDQgCgHgGgGQgGgEgJAAQgHgBgGAFg");
	this.shape_104.setTransform(421.4,312.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgCgDgBgEQABgEACgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgCADgFAAQgEAAgCgDg");
	this.shape_105.setTransform(414.5,312.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#373535").s().p("AAVAsIgOgqIgEgNIgDgOIAAAAIgDAOIgFANIgOAqIgOAAIgahWIAQAAIALArIAEAOIADAOIAAAAIAEgOIAEgOIAOgrIANAAIANAqIAEAPIAEAOIAAAAIADgOIAEgPIAMgqIAQAAIgcBWg");
	this.shape_106.setTransform(405.8,314.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#373535").s().p("AAvAtIAAgxQAAgNgFgGQgEgIgKAAQgHAAgFAFQgEAEgDAGIgBADIAAAFIAAA1IgOAAIAAgzQAAgLgFgHQgFgGgIgBQgGABgDACQgEACgDAEQgDADgBAEIgBAEIgBAEIAAA0IgPAAIAAg/IAAgNIgBgKIAOAAIABANIAAAAIAHgHQADgEAGgCQAEgCAIAAQAJAAAGAEQAGAFADAIIAAAAIAEgGIAFgGQAEgDAFgBQAFgBAGAAQAGAAAHACQAGAEAFAIQAEAIAAAPIAAAzg");
	this.shape_107.setTransform(387.8,314.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#373535").s().p("AAvAtIAAgxQAAgNgFgGQgEgIgKAAQgGAAgFAFQgGAEgBAGIgBADIgBAFIAAA1IgOAAIAAgzQgBgLgEgHQgEgGgJgBQgGABgDACQgEACgDAEQgDADgBAEIgBAEIAAAEIAAA0IgQAAIAAg/IAAgNIAAgKIANAAIABANIAAAAIAGgHQAEgEAFgCQAFgCAIAAQAJAAAGAEQAFAFADAIIABAAIAFgGIAEgGQAEgDAFgBQAFgBAGAAQAGAAAHACQAGAEAEAIQAFAIABAPIAAAzg");
	this.shape_108.setTransform(372.8,314.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#373535").s().p("AgXA5QgIgCgEgDIAEgMIAKAEQAHACAIAAQAGAAAHgCQAGgDAEgGQADgGAAgHQAAgMgIgIQgIgFgQAAIgJAAIgHABIAHg4IA3AAIAAANIgrAAIgFAeIAEgBIAGAAIAMABQAGACAGAEQAHADAFAHQAEAIAAAKQAAAMgFAJQgGAJgKAFQgJAFgMABQgKgBgHgCg");
	this.shape_109.setTransform(360.4,312.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#373535").s().p("AgWA8QgIgGgFgKQgFgKAAgOQAAgOAFgJQAGgLAJgFQAIgGALAAQAJAAAHAEQAGAEADAFIABAAIAAg0IAPAAIAABpIAAAMIABAKIgOAAIgBgPIAAAAQgEAHgHAFQgIAFgKAAQgLAAgIgFgAgMgIQgGAEgDAGQgDAJAAAJQAAAJADAHQACAIAGAEQAGAEAHAAQAJAAAGgFQAHgFACgIIABgEIAAgEIAAgPIAAgDIgBgDQgCgHgGgGQgGgEgJAAQgIgBgFAFg");
	this.shape_110.setTransform(346.9,312.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#373535").s().p("AAVAtIAAgyQAAgHgCgFQgCgHgEgDQgEgDgIgBQgGABgGAFQgGAEgCAHIAAADIgBAEIAAA0IgQAAIAAg/IAAgNIAAgKIANAAIACAOIAAAAQACgFAEgDQAEgEAFgCQAGgCAHAAIAKABQAFABAEAFQAFAEADAHQADAIAAALIAAAzg");
	this.shape_111.setTransform(337.1,314.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgGQAAgQAOgIQANgIAYAAIAAgCQABgEgCgEQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFAEIgEgLQAGgDAHgCQAIgCAHAAQANgBAHAGQAIAFACAIQADAIAAAJIAAAfIAAALIACALIgPAAIgBgMIgBAAQgDAGgHADQgHAFgIAAQgJAAgGgFgAABAAQgIACgFAEQgGAEAAAJQAAAHAEAEQAFADAGAAQAHAAAGgEQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_112.setTransform(327.5,314.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#373535").s().p("AAvAtIAAgxQAAgNgEgGQgFgIgKAAQgHAAgFAFQgFAEgCAGIgBADIAAAFIAAA1IgPAAIAAgzQABgLgFgHQgEgGgKgBQgEABgFACQgEACgCAEQgDADgBAEIgBAEIgBAEIAAA0IgPAAIAAg/IAAgNIgBgKIAPAAIAAANIABAAIAGgHQADgEAGgCQAEgCAIAAQAJAAAGAEQAGAFADAIIAAAAIAEgGIAGgGQADgDAFgBQAFgBAGAAQAGAAAGACQAHAEAFAIQAEAIAAAPIAAAzg");
	this.shape_113.setTransform(312.1,314.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#373535").s().p("AAvAtIAAgxQAAgNgFgGQgEgIgKAAQgGAAgGAFQgEAEgCAGIgBADIgBAFIAAA1IgOAAIAAgzQgBgLgEgHQgFgGgIgBQgGABgDACQgFACgCAEQgDADgBAEIgBAEIgBAEIAAA0IgPAAIAAg/IAAgNIAAgKIANAAIABANIAAAAIAGgHQAFgEAFgCQAEgCAIAAQAJAAAGAEQAFAFADAIIABAAIAFgGIAEgGQAFgDAEgBQAEgBAHAAQAGAAAHACQAGAEAFAIQAEAIABAPIAAAzg");
	this.shape_114.setTransform(297.1,314.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#373535").s().p("AAEA7IAAhmIAAAAIgTALIgDgMIAYgNIAOAAIAAB0g");
	this.shape_115.setTransform(284.2,312.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#373535").s().p("AAVAtIAAgyQAAgHgBgFQgCgHgFgDQgFgDgGgBQgIABgFAFQgGAEgCAHIgBADIAAAEIAAA0IgQAAIAAg/IAAgNIAAgKIANAAIABAOIABAAQACgFAEgDQAEgEAFgCQAGgCAGAAIALABQAEABAGAFQAEAEADAHQADAIABALIAAAzg");
	this.shape_116.setTransform(271.6,314.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#373535").s().p("AgSAnQgJgEgFgLQgFgJAAgNQAAgNAFgLQAEgKAKgGQAJgHALABQALAAAHADQAHAEAEAHQAEAGACAIQACAGgBAGIAAAEIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALIgLAEIgSACQgMgBgKgGgAAXgHQAAgGgCgFQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_117.setTransform(262.1,314.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#373535").s().p("AgSAnQgJgEgFgLQgFgJAAgNQAAgNAFgLQAEgKAKgGQAJgHALABQALAAAHADQAHAEAEAHQAEAGACAIQACAGgBAGIAAAEIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALIgLAEIgSACQgMgBgKgGgAAXgHQAAgGgCgFQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_118.setTransform(253.1,314.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#373535").s().p("AAVAsIgOgqIgEgNIgDgOIAAAAIgDAOIgFANIgOAqIgOAAIgahWIAQAAIALArIAEAOIADAOIAAAAIAEgOIAEgOIAOgrIANAAIANAqIAEAPIAEAOIAAAAIADgOIAEgPIAMgqIAQAAIgcBWg");
	this.shape_119.setTransform(242.2,314.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_120.setTransform(232.3,313.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#373535").s().p("AgSAnQgJgEgFgLQgFgJAAgNQAAgNAFgLQAEgKAKgGQAJgHALABQALAAAHADQAHAEAEAHQAEAGACAIQACAGgBAGIAAAEIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALIgLAEIgSACQgMgBgKgGgAAXgHQAAgGgCgFQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_121.setTransform(224.9,314.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#373535").s().p("AgOA9QgHgEgFgJIAAAAIgBAPIgOAAIABgKIAAgMIAAhpIAQAAIAAA3QAFgHAHgEQAIgFAJAAQALAAAIAGQAIAFAFAKQAFAJAAANQgBAQgGAKQgFAKgJAGQgJAFgKAAQgIAAgIgEgAgOgIQgGAGgEAIIAAADIAAADIAAAQIAAADIAAADQADAIAGAFQAGAFAJABQAMgBAGgJQAIgJAAgPQAAgJgDgHQgDgHgGgEQgGgFgIABQgIAAgGAEg");
	this.shape_122.setTransform(215.6,312.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#373535").s().p("AgSAnQgJgEgFgLQgFgJAAgNQAAgNAFgLQAEgKAKgGQAJgHALABQALAAAHADQAHAEAEAHQAEAGACAIQACAGgBAGIAAAEIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALIgLAEIgSACQgMgBgKgGgAAXgHQAAgGgCgFQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_123.setTransform(201.9,314.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#373535").s().p("AgUAtIAAg7IAAgPIgBgMIAOAAIABARIAAAAQADgJAGgGQAGgEAIAAIADAAIACAAIAAAPIgDgBIgCAAQgJAAgFAGQgFAGgCAJIAAADIAAAEIAAAug");
	this.shape_124.setTransform(195.1,314.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgGQAAgQAOgIQANgIAYAAIAAgCQABgEgCgEQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFAEIgEgLQAGgDAHgCQAIgCAHAAQANgBAHAGQAIAFACAIQADAIAAAJIAAAfIAAALIACALIgPAAIgBgMIgBAAQgDAGgHADQgHAFgIAAQgJAAgGgFgAABAAQgIACgFAEQgGAEAAAJQAAAHAEAEQAFADAGAAQAHAAAGgEQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_125.setTransform(187.1,314.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_126.setTransform(176.2,313.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgGQAAgQAOgIQANgIAYAAIAAgCQABgEgCgEQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFAEIgEgLQAGgDAHgCQAIgCAHAAQANgBAHAGQAIAFACAIQADAIAAAJIAAAfIAAALIACALIgPAAIgBgMIgBAAQgDAGgHADQgHAFgIAAQgJAAgGgFgAABAAQgIACgFAEQgGAEAAAJQAAAHAEAEQAFADAGAAQAHAAAGgEQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_127.setTransform(168.7,314.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgFgEgDQgFgEgHAAQgHAAgFAFQgGAEgCAGIgBAEIAAADIAAA1IgQAAIAAh/IAQAAIAAA3IAAAAIAFgHIAGgEIAIgEIAIgBIAJABQAGACAEAEQAFAEADAIQADAGAAALIAAA0g");
	this.shape_128.setTransform(159.6,312.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_129.setTransform(151.6,313.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#373535").s().p("AgRAsQgGgCgEgDIADgMIAJAEQAHACAGAAQAHAAAEgDQAFgEgBgFQAAgGgEgEQgDgEgIgDQgMgEgFgFQgGgGAAgIQAAgHADgGQAFgGAGgDQAHgEAIABQAHAAAGABQAFACAEACIgFAMIgGgEQgFgBgGgBQgHABgDADQgEADAAAFQAAAFAEADQAEAEAIADQALAEAGAFQAFAHAAAJQAAAMgIAHQgJAHgOABQgHAAgHgCg");
	this.shape_130.setTransform(141.3,314.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#373535").s().p("AgSAnQgJgEgFgLQgFgJAAgNQAAgNAFgLQAEgKAKgGQAJgHALABQALAAAHADQAHAEAEAHQAEAGACAIQACAGgBAGIAAAEIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALIgLAEIgSACQgMgBgKgGgAAXgHQAAgGgCgFQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_131.setTransform(133.2,314.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#373535").s().p("AgUAtIAAg7IAAgPIgBgMIAOAAIABARIAAAAQADgJAGgGQAGgEAIAAIADAAIACAAIAAAPIgDgBIgCAAQgJAAgFAGQgFAGgCAJIAAADIAAAEIAAAug");
	this.shape_132.setTransform(126.4,314.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgGQAAgQAOgIQANgIAYAAIAAgCQABgEgCgEQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFAEIgEgLQAGgDAHgCQAIgCAHAAQANgBAHAGQAIAFACAIQADAIAAAJIAAAfIAAALIACALIgPAAIgBgMIgBAAQgDAGgHADQgHAFgIAAQgJAAgGgFgAABAAQgIACgFAEQgGAEAAAJQAAAHAEAEQAFADAGAAQAHAAAGgEQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_133.setTransform(118.4,314.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#373535").s().p("AgUApQgGgDgFgIQgFgIAAgPIAAgyIAQAAIAAAuQAAANAEAHQAFAIAKAAQAFAAAEgCQAEgCADgEQADgDACgDIABgEIAAgEIAAg0IAQAAIAAA+IAAAMIAAAMIgOAAIgBgPIAAAAQgCAEgEAEQgDADgHADQgFACgHABQgHAAgHgEg");
	this.shape_134.setTransform(109.4,314.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#373535").s().p("AAZA+IAAgxIgBAAQgEAHgGAEQgIAFgJAAQgKAAgJgGQgIgFgFgKQgFgJAAgNQAAgRAGgKQAGgKAJgFQAJgFAJAAQAKAAAGAEQAHAEADAHIABAAIAAgNIAPAAIAAALIAAANIAABhgAgMgsQgGAEgDAHQgDAIAAAKQAAAIADAHQADAHAFAFQAGAEAHAAQAIAAAHgEQAFgFAEgHIAAgEIABgEIAAgQIAAgDIgBgEQgCgHgGgFQgGgGgJAAQgHAAgGAFg");
	this.shape_135.setTransform(99.1,316);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#373535").s().p("AgQAsQgHgCgEgDIADgMIAJAEQAGACAGAAQAIAAAEgDQAFgEgBgFQAAgGgDgEQgEgEgIgDQgLgEgHgFQgFgGAAgIQAAgHADgGQAFgGAGgDQAGgEAJABQAHAAAGABQAFACAEACIgFAMIgHgEQgEgBgGgBQgGABgEADQgEADAAAFQAAAFAEADQAFAEAGADQAMAEAGAFQAFAHABAJQAAAMgJAHQgIAHgPABQgHAAgGgCg");
	this.shape_136.setTransform(90.7,314.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#373535").s().p("AgVAoQgJgGgGgKQgGgJAAgOQAAgOAGgKQAGgLAKgFQAJgGALABQANgBAKAGQAJAGAFAKQAFAKABANQgBAPgGALQgHAKgKAEQgJAGgKAAQgMgBgJgFgAgOgbQgGAFgDAHQgCAIgBAHQABAKADAIQADAHAGAEQAGAFAHgBQAHABAHgFQAFgEAEgIQADgIABgJQAAgHgDgIQgDgHgFgFQgHgGgJAAQgIAAgGAGg");
	this.shape_137.setTransform(78.4,314.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_138.setTransform(70.5,313.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#373535").s().p("AAVAtIAAgyQAAgHgBgFQgCgHgFgDQgFgDgGgBQgIABgFAFQgGAEgCAHIgBADIAAAEIAAA0IgQAAIAAg/IAAgNIgBgKIAOAAIABAOIABAAQACgFAEgDQAEgEAGgCQAFgCAGAAIAKABQAFABAGAFQAEAEADAHQADAIABALIAAAzg");
	this.shape_139.setTransform(62.7,314.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgCADgFAAQgDAAgDgDg");
	this.shape_140.setTransform(55.6,312.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#373535").s().p("AAEAJIAEgOIADgOIAQgCIgFAQIgGAOIgGAMIgKABIAEgNgAgWAJIAEgOIADgOIAPgCIgEAQIgGAOIgFAMIgLABIAEgNg");
	this.shape_141.setTransform(768.2,283.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#373535").s().p("AgWA7QgIgFgFgKQgFgKAAgNQAAgPAFgJQAGgKAJgHQAIgFALAAQAJAAAHAEQAGAEADAFIABAAIAAg0IAPAAIAABoIAAAMIABALIgOAAIgBgPIAAAAQgEAHgHAFQgIAFgKAAQgLAAgIgGgAgMgIQgGAEgDAHQgDAIAAAJQAAAJADAHQACAIAGAEQAGAEAHAAQAJAAAGgFQAHgEACgKIABgDIAAgEIAAgOIAAgEIgBgEQgCgGgGgFQgGgGgJAAQgIABgFAEg");
	this.shape_142.setTransform(759.6,287.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLADIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_143.setTransform(750.3,289.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#373535").s().p("AgNAoQgKgGgFgKQgFgKAAgNQAAgMAFgLQAGgLALgFQAKgHANAAQAHABAGABIAJADIgDAMIgIgCIgLgCQgKABgGADQgGAFgEAHQgDAIAAAIQAAAKAEAHQAEAIAGADQAGAFAJAAIALgBIAIgEIADAMQgDACgHABIgPACQgMAAgKgFg");
	this.shape_144.setTransform(741.9,289.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQADADAAAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_145.setTransform(735.7,287.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_146.setTransform(731.5,287);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#373535").s().p("AgRArQgGgBgFgCIAFgNIAJAFQAGACAFAAQAIgBAEgDQAEgEABgGQAAgFgFgEQgDgDgIgDQgLgFgHgFQgFgGAAgIQAAgHAEgGQADgFAHgEQAHgDAIgBQAHABAFABQAGACADACIgDALIgHgDQgFgCgGAAQgHAAgDAEQgEADAAAFQAAAFAEAEQAEADAHADQAMAEAGAGQAGAFAAAKQAAAMgJAHQgIAHgPAAQgHAAgHgCg");
	this.shape_147.setTransform(725.8,289.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#373535").s().p("AAFAGIAGgOIAGgMIAKgBIgFANIgDAOIgDAOIgQACIAFgQgAgVAGIAHgOIAFgMIAJgBIgDANIgDAOIgDAOIgRACIAFgQg");
	this.shape_148.setTransform(719.8,283.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#373535").s().p("AgQArQgHgBgFgCIAFgNIAJAFQAGACAFAAQAIgBAEgDQAEgEAAgGQAAgFgDgEQgEgDgIgDQgLgFgHgFQgFgGAAgIQAAgHADgGQAEgFAHgEQAHgDAIgBQAHABAFABQAGACADACIgDALIgIgDQgEgCgGAAQgHAAgDAEQgEADAAAFQAAAFAEAEQAEADAHADQAMAEAGAGQAGAFAAAKQAAAMgJAHQgIAHgPAAQgHAAgGgCg");
	this.shape_149.setTransform(710.6,289.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgCADgFAAQgDAAgDgDg");
	this.shape_150.setTransform(704.9,287.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_151.setTransform(694.5,289.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#373535").s().p("AgTA+QgIgCgFgEIAEgMQAEADAHACQAGACAJAAQAGAAAHgDQAGgDAEgHQADgHAAgKIAAgKIAAAAQgEAGgGAEQgIAEgIAAQgLAAgJgFQgIgGgFgJQgFgJABgMQgBgPAGgKQAFgKAJgGQAKgFAJAAQAHAAAGACQAFACAEAEQADADABAEIABAAIABgNIAOAAIgBAKIAAAOIAAAxQAAAPgDAKQgDAJgHAGQgGAGgIACQgJACgHAAIgQgBgAgRgpQgGAJAAAPQAAAJADAHQACAGAGAEQAGAEAHAAQAHAAAHgEQAFgEADgHIABgEIAAgEIAAgQIAAgEIAAgDQgDgHgGgFQgFgFgJAAQgKAAgIAJg");
	this.shape_152.setTransform(684.7,290.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgDgHgBQgHAAgFACQgGABgFADIgEgKQAGgEAHgCQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAALIACAJIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGABQAHAAAGgFQAFgEACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_153.setTransform(675.4,289.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#373535").s().p("AAvAsIAAgwQAAgMgFgIQgEgGgKAAQgGAAgGADQgEAFgCAGIgCAEIAAAEIAAA0IgOAAIAAgzQAAgLgFgGQgFgHgIABQgGAAgDACQgFACgCADQgDAEgBAEIgBAEIgBAEIAAAzIgPAAIAAg+IAAgMIAAgMIANAAIABAPIAAAAIAHgJQAEgDAFgCQAEgCAIgBQAJAAAGAGQAGAEADAIIAAAAIAFgHIAEgEQAEgDAFgCQAEgBAHgBQAGAAAHADQAGAEAFAIQAEAIAAAPIAAAyg");
	this.shape_154.setTransform(663.8,289);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_155.setTransform(654.2,287.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_156.setTransform(643.8,289.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgEgEgEQgFgEgHAAQgHABgFAEQgGAEgCAGIgBADIAAAFIAAA0IgQAAIAAh/IAQAAIAAA2IAAAAIAFgFIAGgGIAIgDIAIgBIAJACQAGABAEAEQAFAFADAHQADAGAAALIAAA0g");
	this.shape_157.setTransform(634.3,287);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#373535").s().p("AgHA9IAAhrIglAAIAAgOIBZAAIAAAOIglAAIAABrg");
	this.shape_158.setTransform(624.9,287.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#373535").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQACADABAEQgBAFgCADQgDADgFAAQgEAAgDgDg");
	this.shape_159.setTransform(615.7,292.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#373535").s().p("AgHA9IAAh5IAPAAIAAB5g");
	this.shape_160.setTransform(611.5,287.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#373535").s().p("AAYA9IgEgKIgEgTQgDgNgGgFQgGgGgJABIgOAAIAAA0IgQAAIAAh3IANgBIARgBQALAAAIACQAJADAGAEQAEAFADAGQADAFgBAIQAAAIgCAGQgDAGgGAEQgFAEgGABIAAABQAGACAFAHQAEAGADAKIAEAVIAFAMgAgRgwIgFABIAAAsIAPAAQAMABAIgHQAGgGAAgKQABgMgIgFQgIgGgLAAIgKAAg");
	this.shape_161.setTransform(605,287.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#373535").s().p("AAuA9IgDg2IAAgQIgBgSIAAgRIgBAAIgHAWIgIAXIgVA7IgMAAIgTg6IgIgXIgGgXIAAAAIgBARIgBASIgBASIgDA0IgPAAIAIh5IAVAAIAUA7IAHAUIAFAUIAAAAIAGgTIAHgVIAVg7IAUAAIAIB5g");
	this.shape_162.setTransform(592.5,287.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#373535").s().p("AgPBBIAAhKIgMAAIAAgMIAMAAIAAgEQAAgKACgIQACgIAGgFQAEgEAFgCIALgCIAIABIAFACIgBAMIgFgCIgFAAQgIAAgDADQgEAEgBAGQgBAFAAAHIAAAFIAUAAIAAAMIgUAAIAABKg");
	this.shape_163.setTransform(583.1,286.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#373535").s().p("AAVAsIAAgxQABgHgCgFQgCgGgFgEQgFgDgGAAQgIAAgFAEQgGAFgCAHIgBAEIAAADIAAAzIgQAAIAAg+IAAgMIgBgMIAOAAIABAPIABAAQACgEAEgEQAEgEAGgCQAFgCAGgBIAKACQAGACAFAEQAEAEADAHQADAHABALIAAAzg");
	this.shape_164.setTransform(571.2,289);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgDgHgBQgHAAgFACQgGABgFADIgEgKQAGgEAHgCQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAALIACAJIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGABQAHAAAGgFQAFgEACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_165.setTransform(561.6,289.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#373535").s().p("AAVAsIAAgxQABgHgCgFQgCgGgFgEQgFgDgGAAQgIAAgFAEQgGAFgCAHIgBAEIAAADIAAAzIgQAAIAAg+IAAgMIgBgMIAOAAIABAPIABAAQACgEAEgEQAEgEAGgCQAFgCAGgBIAKACQAGACAFAEQAEAEADAHQADAHABALIAAAzg");
	this.shape_166.setTransform(548.7,289);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#373535").s().p("AgVAoQgJgFgGgKQgGgLAAgOQAAgNAGgLQAGgJAKgGQAJgFALgBQANABAKAFQAJAGAFAKQAFAKABANQgBAPgGALQgHAKgKAFQgJAEgKAAQgMAAgJgFgAgOgcQgGAFgDAIQgCAHgBAIQABAKADAHQADAIAGAEQAGAEAHABQAHgBAHgEQAFgEAEgIQADgHAAgKQAAgHgCgIQgDgHgFgGQgHgEgJgBQgIABgGAEg");
	this.shape_167.setTransform(538.7,289.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLADIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_168.setTransform(525.5,289.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLADIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_169.setTransform(516.5,289.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#373535").s().p("AgQArQgHgBgEgCIADgNIAJAFQAHACAFAAQAIgBAEgDQAFgEgBgGQAAgFgDgEQgEgDgIgDQgMgFgFgFQgGgGAAgIQAAgHADgGQAFgFAGgEQAGgDAJgBQAHABAGABQAFACAEACIgFALIgHgDQgEgCgGAAQgHAAgDAEQgEADAAAFQAAAFAEAEQAFADAGADQAMAEAGAGQAFAFABAKQgBAMgIAHQgJAHgOAAQgHAAgGgCg");
	this.shape_170.setTransform(508.4,289.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_171.setTransform(496.5,289.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#373535").s().p("AAVArIgOgpIgEgNIgDgPIAAAAIgDAPIgFANIgOApIgOAAIgahWIAQAAIALArIAEAPIADANIAAAAIAEgNIAEgOIAOgsIANAAIANArIAEAPIAEANIAAAAIADgNIAEgPIAMgrIAQAAIgcBWg");
	this.shape_172.setTransform(485.6,289.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#373535").s().p("AgRArQgGgBgEgCIADgNIAJAFQAHACAGAAQAHgBAEgDQAFgEgBgGQAAgFgDgEQgEgDgIgDQgMgFgFgFQgGgGAAgIQAAgHADgGQAFgFAGgEQAHgDAIgBQAHABAGABQAFACAEACIgFALIgGgDQgFgCgGAAQgHAAgDAEQgEADAAAFQAAAFAEAEQAEADAIADQALAEAGAGQAFAFAAAKQAAAMgIAHQgJAHgOAAQgHAAgHgCg");
	this.shape_173.setTransform(471.6,289.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_174.setTransform(463.5,289.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#373535").s().p("AgTA+QgIgCgFgEIAEgMQAEADAHACQAHACAHAAQAIAAAGgDQAGgDAEgHQAEgHgBgKIAAgKIAAAAQgDAGgIAEQgGAEgKAAQgLAAgIgFQgIgGgFgJQgEgJgBgMQABgPAFgKQAGgKAIgGQAKgFAJAAQAHAAAGACQAFACAEAEQADADABAEIABAAIABgNIANAAIAAAKIAAAOIAAAxQAAAPgDAKQgDAJgGAGQgHAGgJACQgIACgHAAIgQgBgAgQgpQgIAJABAPQAAAJACAHQADAGAGAEQAGAEAHAAQAIAAAFgEQAGgEADgHIABgEIAAgEIAAgQIAAgEIgBgDQgCgHgGgFQgFgFgIAAQgLAAgHAJg");
	this.shape_175.setTransform(453.7,290.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgDgHgBQgHAAgFACQgGABgFADIgEgKQAGgEAHgCQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAALIACAJIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGABQAHAAAGgFQAFgEACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_176.setTransform(444.4,289.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#373535").s().p("AAvAsIAAgwQAAgMgEgIQgFgGgKAAQgGAAgFADQgGAFgBAGIgBAEIgBAEIAAA0IgPAAIAAgzQAAgLgEgGQgEgHgKABQgEAAgFACQgDACgDADQgDAEgBAEIgBAEIAAAEIAAAzIgQAAIAAg+IAAgMIAAgMIANAAIABAPIABAAIAFgJQAFgDAEgCQAGgCAHgBQAJAAAGAGQAFAEADAIIABAAIAFgHIAEgEQAFgDAEgCQAFgBAGgBQAGAAAGADQAHAEAEAIQAGAIAAAPIAAAyg");
	this.shape_177.setTransform(432.8,289);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgCgDgBgEQABgEACgDQACgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_178.setTransform(423.2,287.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLADIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_179.setTransform(412.8,289.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgEgEgEQgFgEgHAAQgHABgFAEQgGAEgCAGIgBADIAAAFIAAA0IgQAAIAAh/IAQAAIAAA2IAAAAIAFgFIAGgGIAIgDIAIgBIAJACQAGABAEAEQAFAFADAHQADAGAAALIAAA0g");
	this.shape_180.setTransform(403.3,287);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABALIgGACIgIABQgGAAgEgCg");
	this.shape_181.setTransform(395.2,287.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#373535").s().p("AgVAoQgKgFgFgKQgGgLAAgOQAAgNAGgLQAGgJAKgGQAKgFAKgBQANABAKAFQAJAGAFAKQAFAKABANQgBAPgGALQgHAKgKAFQgJAEgKAAQgMAAgJgFgAgOgcQgGAFgDAIQgCAHgBAIQABAKADAHQADAIAGAEQAGAEAHABQAHgBAHgEQAFgEAEgIQADgHAAgKQAAgHgCgIQgDgHgFgGQgHgEgJgBQgIABgGAEg");
	this.shape_182.setTransform(383.6,289.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABALIgGACIgIABQgGAAgEgCg");
	this.shape_183.setTransform(375.7,287.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#373535").s().p("AAVAsIAAgxQAAgHgBgFQgCgGgFgEQgFgDgGAAQgIAAgFAEQgGAFgCAHIgBAEIAAADIAAAzIgQAAIAAg+IAAgMIAAgMIANAAIABAPIABAAQACgEAEgEQAEgEAFgCQAGgCAGgBIALACQAEACAGAEQAEAEADAHQADAHABALIAAAzg");
	this.shape_184.setTransform(367.9,289);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_185.setTransform(360.8,287.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_186.setTransform(352.7,287);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgDgHgBQgHAAgFACQgGABgFADIgEgKQAGgEAHgCQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAALIACAJIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGABQAHAAAGgFQAFgEACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_187.setTransform(346,289.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#373535").s().p("AAVAsIAAgxQAAgHgBgFQgDgGgEgEQgFgDgHAAQgHAAgFAEQgGAFgCAHIAAAEIgBADIAAAzIgQAAIAAg+IAAgMIAAgMIANAAIABAPIABAAQACgEAEgEQAEgEAFgCQAGgCAHgBIAKACQAEACAGAEQAEAEADAHQADAHAAALIAAAzg");
	this.shape_188.setTransform(336.9,289);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#373535").s().p("AgTA+QgHgCgGgEIAEgMQAEADAHACQAHACAHAAQAIAAAGgDQAGgDAEgHQAEgHgBgKIAAgKIAAAAQgEAGgHAEQgHAEgJAAQgLAAgIgFQgIgGgFgJQgEgJgBgMQABgPAFgKQAGgKAIgGQAKgFAJAAQAHAAAGACQAFACAEAEQADADABAEIABAAIABgNIAOAAIgBAKIAAAOIAAAxQAAAPgDAKQgDAJgGAGQgHAGgIACQgJACgHAAIgQgBgAgQgpQgIAJABAPQAAAJACAHQADAGAGAEQAFAEAIAAQAIAAAFgEQAGgEADgHIABgEIAAgEIAAgQIAAgEIgBgDQgCgHgGgFQgFgFgIAAQgLAAgHAJg");
	this.shape_189.setTransform(326.7,290.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgCgDgBgEQABgEACgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_190.setTransform(319.9,287.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#373535").s().p("AgRArQgGgBgEgCIADgNIAJAFQAGACAHAAQAHgBAEgDQAFgEAAgGQgBgFgEgEQgDgDgIgDQgMgFgFgFQgGgGAAgIQAAgHAEgGQAEgFAGgEQAHgDAIgBQAHABAGABQAFACAEACIgFALIgGgDQgFgCgGAAQgHAAgDAEQgEADAAAFQAAAFAEAEQAEADAIADQALAEAGAGQAGAFgBAKQAAAMgIAHQgJAHgOAAQgHAAgHgCg");
	this.shape_191.setTransform(314.2,289.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#373535").s().p("AgWA7QgIgFgFgKQgFgKAAgNQAAgPAFgJQAGgKAJgHQAIgFALAAQAJAAAHAEQAGAEADAFIABAAIAAg0IAPAAIAABoIAAAMIABALIgOAAIgBgPIAAAAQgEAHgHAFQgIAFgKAAQgKAAgJgGgAgMgIQgGAEgDAHQgDAIAAAJQAAAJADAHQACAIAGAEQAGAEAHAAQAJAAAGgFQAHgEACgKIABgDIAAgEIAAgOIAAgEIgBgEQgCgGgGgFQgGgGgJAAQgIABgFAEg");
	this.shape_192.setTransform(301.5,287.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLADIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_193.setTransform(292.2,289.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#373535").s().p("AgUAsIAAg7IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJgBgFAGQgFAFgCAKIAAADIAAAEIAAAtg");
	this.shape_194.setTransform(285.4,289);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#373535").s().p("AgUAqQgGgEgFgIQgFgJAAgPIAAgyIAQAAIAAAwQAAAMAEAIQAEAHALABQAEgBAFgCQAEgCADgDQADgDABgEIACgEIAAgEIAAg1IAPAAIAAA/IAAANIABAKIgNAAIgBgOIgBAAQgCAEgEADQgEAEgGADQgFADgHgBQgHAAgHgCg");
	this.shape_195.setTransform(277,289.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABALIgGACIgIABQgGAAgEgCg");
	this.shape_196.setTransform(269,287.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#373535").s().p("AgoA+IAAhdIAAgPIgBgNIAPAAIABAPIAAAAQAFgIAHgFQAIgEAJAAQAMAAAHAFQAJAGAFAKQAEAKAAANQABAQgGAJQgFAKgKAFQgIAGgLAAQgHAAgIgEQgHgDgEgHIAAAvgAgOgrQgHAFgCAJIgBADIAAADIAAAPIAAAEIAAADQADAHAGAFQAGAFAJAAQAHAAAGgEQAHgEACgIQAEgGAAgKQAAgJgEgHQgDgIgFgEQgGgFgIAAQgHAAgHAGg");
	this.shape_197.setTransform(261.3,290.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgDgHgBQgHAAgFACQgGABgFADIgEgKQAGgEAHgCQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAALIACAJIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGABQAHAAAGgFQAFgEACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_198.setTransform(251.3,289.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#373535").s().p("AgNAoQgKgGgFgKQgFgKAAgNQAAgMAFgLQAGgLALgFQAKgHANAAQAHABAGABIAJADIgDAMIgIgCIgLgCQgKABgGADQgGAFgEAHQgDAIAAAIQAAAKAEAHQAEAIAGADQAGAFAJAAIALgBIAIgEIADAMQgDACgHABIgPACQgMAAgKgFg");
	this.shape_199.setTransform(243.3,289.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_200.setTransform(230.9,289.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgEgEgEQgFgEgHAAQgHABgFAEQgGAEgCAGIgBADIAAAFIAAA0IgQAAIAAh/IAQAAIAAA2IAAAAIAFgFIAGgGIAIgDIAIgBIAJACQAGABAEAEQAFAFADAHQADAGAAALIAAA0g");
	this.shape_201.setTransform(221.4,287);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABALIgGACIgIABQgGAAgEgCg");
	this.shape_202.setTransform(213.3,287.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#373535").s().p("AAvAsIAAgwQAAgMgFgIQgEgGgKAAQgGAAgFADQgGAFgBAGIgBAEIgBAEIAAA0IgOAAIAAgzQgBgLgEgGQgEgHgJABQgFAAgEACQgEACgDADQgDAEgBAEIgBAEIAAAEIAAAzIgQAAIAAg+IAAgMIAAgMIANAAIABAPIAAAAIAGgJQAEgDAFgCQAFgCAIgBQAJAAAGAGQAFAEADAIIABAAIAFgHIAEgEQAEgDAFgCQAFgBAGgBQAGAAAHADQAGAEAEAIQAFAIABAPIAAAyg");
	this.shape_203.setTransform(199.1,289);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#373535").s().p("AgUAsIAAg7IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJgBgFAGQgFAFgCAKIAAADIAAAEIAAAtg");
	this.shape_204.setTransform(189.1,289);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#373535").s().p("AgVAoQgKgFgFgKQgGgLABgOQgBgNAGgLQAGgJAKgGQAJgFALgBQANABAKAFQAJAGAFAKQAFAKAAANQAAAPgGALQgHAKgKAFQgJAEgKAAQgMAAgJgFgAgOgcQgGAFgDAIQgDAHAAAIQAAAKAEAHQADAIAGAEQAGAEAHABQAHgBAHgEQAGgEADgIQADgHAAgKQAAgHgCgIQgDgHgFgGQgHgEgJgBQgIABgGAEg");
	this.shape_205.setTransform(180.7,289.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#373535").s().p("AgPBBIAAhKIgMAAIAAgMIAMAAIAAgEQAAgKACgIQADgIAFgFQAEgEAFgCIALgCIAIABIAFACIgCAMIgEgCIgFAAQgHAAgEADQgEAEgBAGQgBAFAAAHIAAAFIAUAAIAAAMIgUAAIAABKg");
	this.shape_206.setTransform(173.9,286.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#373535").s().p("AgQArQgHgBgEgCIADgNIAJAFQAGACAGAAQAIgBAEgDQAFgEgBgGQAAgFgDgEQgEgDgIgDQgLgFgHgFQgFgGAAgIQAAgHADgGQAFgFAGgEQAGgDAJgBQAHABAGABQAFACAEACIgFALIgHgDQgEgCgGAAQgGAAgEAEQgEADAAAFQAAAFAEAEQAFADAGADQAMAEAGAGQAFAFABAKQAAAMgJAHQgIAHgPAAQgHAAgGgCg");
	this.shape_207.setTransform(167.2,289.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#373535").s().p("AAVAsIAAgxQAAgHgBgFQgCgGgFgEQgFgDgGAAQgIAAgFAEQgGAFgCAHIgBAEIAAADIAAAzIgQAAIAAg+IAAgMIAAgMIANAAIABAPIABAAQACgEAEgEQAEgEAFgCQAGgCAGgBIALACQAEACAGAEQAEAEADAHQADAHABALIAAAzg");
	this.shape_208.setTransform(158.6,289);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgDgHgBQgHAAgFACQgGABgFADIgEgKQAGgEAHgCQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAALIACAJIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGABQAHAAAGgFQAFgEACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_209.setTransform(149,289.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#373535").s().p("AgUAsIAAg7IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJgBgFAGQgFAFgCAKIAAADIAAAEIAAAtg");
	this.shape_210.setTransform(142.5,289);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABALIgGACIgIABQgGAAgEgCg");
	this.shape_211.setTransform(136.1,287.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#373535").s().p("AgUAsIAAg7IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJgBgFAGQgFAFgCAKIAAADIAAAEIAAAtg");
	this.shape_212.setTransform(126.9,289);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_213.setTransform(119,289.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABALIgGACIgIABQgGAAgEgCg");
	this.shape_214.setTransform(111.6,287.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#373535").s().p("AgUAqQgHgEgEgIQgFgJAAgPIAAgyIAQAAIAAAwQAAAMAEAIQAFAHALABQAEgBAEgCQAEgCADgDQADgDACgEIAAgEIAAgEIAAg1IARAAIAAA/IAAANIAAAKIgOAAIgBgOIAAAAQgCAEgEADQgDAEgHADQgFADgHgBQgHAAgHgCg");
	this.shape_215.setTransform(103.7,289.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#373535").s().p("AgoA+IAAhdIAAgPIAAgNIANAAIABAPIABAAQAEgIAJgFQAHgEAKAAQAKAAAIAFQAJAGAEAKQAGAKgBANQAAAQgFAJQgGAKgIAFQgKAGgKAAQgIAAgGgEQgIgDgEgHIAAAvgAgOgrQgGAFgDAJIgBADIAAADIAAAPIAAAEIABADQACAHAGAFQAHAFAIAAQAHAAAHgEQAFgEAEgIQACgGAAgKQAAgJgCgHQgDgIgGgEQgGgFgIAAQgHAAgHAGg");
	this.shape_216.setTransform(94,290.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#373535").s().p("AAvAsIAAgwQAAgMgEgIQgFgGgKAAQgHAAgEADQgFAFgDAGIAAAEIgBAEIAAA0IgPAAIAAgzQABgLgFgGQgEgHgKABQgEAAgFACQgEACgCADQgDAEgBAEIgBAEIAAAEIAAAzIgQAAIAAg+IAAgMIgBgMIAPAAIAAAPIABAAIAFgJQAFgDAEgCQAGgCAHgBQAJAAAGAGQAFAEAEAIIAAAAIAEgHIAGgEQAEgDAEgCQAEgBAHgBQAGAAAGADQAHAEAEAIQAGAIgBAPIAAAyg");
	this.shape_217.setTransform(81.1,289);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#373535").s().p("AgWAoQgIgFgGgKQgFgLgBgOQABgNAFgLQAGgJAJgGQALgFALgBQAMABAJAFQAKAGAFAKQAGAKgBANQAAAPgGALQgGAKgKAFQgKAEgKAAQgMAAgKgFgAgOgcQgGAFgDAIQgDAHABAIQgBAKAEAHQADAIAGAEQAGAEAHABQAIgBAFgEQAHgEACgIQAEgHABgKQAAgHgEgIQgCgHgGgGQgFgEgKgBQgIABgGAEg");
	this.shape_218.setTransform(68.6,289.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#373535").s().p("AgQA3QgNgHgIgOQgIgNAAgUQAAgSAIgOQAIgOAOgJQAPgHASgBQAKAAAIACIAKAEIgEAMIgLgDQgFgCgIABQgPAAgJAFQgKAGgHALQgFALgBAPQAAAPAGALQAGALAKAGQAJAGAPAAIAOgBQAHgBAEgDIAEANIgNADIgTACQgRAAgNgHg");
	this.shape_219.setTransform(58.7,287.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101}]},205).to({state:[{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101}]},395).wait(1));

	// Layer 18
	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#373535").s().p("AmFFDIAAqFIMLAAIAAKFg");
	this.shape_220.setTransform(92.5,228.9);
	this.shape_220._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_220).wait(205).to({_off:false},0).wait(396));

	// Arrow1
	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#3C3C3C").s().p("ABvDAIB2ivIoDAAIAAghIIDAAIh2ivIAuAAICCC/IiCDAg");
	this.shape_221.setTransform(176.2,231.4);
	this.shape_221._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_221).wait(252).to({_off:false},0).wait(349));

	// Layer 19
	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.rf(["#92D5F6","#3BACE2"],[0,1],0,0,0,0,0,17.4).s().p("Ai9CEIAKjfIFxg/IgOE1g");
	this.shape_222.setTransform(262.6,229);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.lf(["#2B2C2D","#313A40"],[0,1],-22.1,0,22.2,0).s().p("ACuC6QgsgClDgeQgOgBgBgBQgFgDAAgLIAKjjQAAgNAEgFQADgEANgCIF8hIIAIAAQAJACAAAJIgRFTQgBAOgDAEQgEADgLAAIgEAAg");
	this.shape_223.setTransform(263.3,228.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.lf(["#DCDAD5","#909594","#465156","#909597","#E0DDDC","#B3B7BA","#899097","#D0D2D1","#A3A6AB"],[0,0.141,0.259,0.388,0.569,0.741,0.871,0.922,1],-2.1,-7.1,1.9,7.9).s().p("AAVAXIiMgYQgIgBgDgEQgDgDAGgDQAKgEA1gJIACAAIDCAgIgCACQg3ARgMAAIgEAAQgPAAgXgDg");
	this.shape_224.setTransform(260.2,254.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.lf(["#DCDAD5","#909594","#465156","#909597","#E0DDDC","#B3B7BA","#899097","#D0D2D1","#A3A6AB"],[0,0.141,0.259,0.388,0.569,0.741,0.871,0.922,1],-4.5,-21.2,6.3,19.4).s().p("AhlAJIASgCIATADQAPAEAEgCQAqgGAOgGQALgEgCgKIASACIABgEQgPgBgCgCIgHgXIAUACIADASIACgLIAZABIAEAPIADAAIgFgVIARADIAIAbIgTgBIABADIASABQACAPgJAFQgFADgOAGIgNAEIAxAJIgJAGg");
	this.shape_225.setTransform(263.9,250.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.lf(["#DCDAD5","#909594","#465156","#909597","#E0DDDC","#B3B7BA","#899097","#D0D2D1","#A3A6AB"],[0,0.141,0.259,0.388,0.569,0.741,0.871,0.922,1],72.7,-1104.8,-155,515.4).s().p("AgECtIjMgSQgIAAgCgHIAAgOIALjkQABgTANgBQgCACgBAFIgBAFIgIBOIgFB7IAGAxIEdAYIBlADIAWk0IgBg2QAQABAAANIgSFWQgBATgSAAIgBAAQgQAAipgPg");
	this.shape_226.setTransform(263.5,229.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.lf(["#DCDAD5","#909594","#465156","#909597","#E0DDDC","#B3B7BA","#899097","#A3A6AB"],[0,0.141,0.259,0.388,0.569,0.741,0.871,1],-0.5,2.8,0.6,-2.6).s().p("AgKANQgFgFAAgIQAAgHAEgFQAFgGAGAAQAGAAAFAGQAEAFABAHQAAAIgEAFQgFAGgGAAQgGAAgFgGg");
	this.shape_227.setTransform(229.7,246.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.lf(["#DCDAD5","#909594","#465156","#909597","#E0DDDC","#B3B7BA","#899097","#A3A6AB"],[0,0.141,0.259,0.388,0.569,0.741,0.871,1],-0.4,4.3,0.6,-3.3).s().p("AgNASQgHgIAAgKQAAgJAFgIQAGgHAJAAQAIAAAGAHQAHAIAAAJQABAKgHAIQgFAHgJAAQgHAAgHgHg");
	this.shape_228.setTransform(229.7,246.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.lf(["#DCDAD5","#909594","#465156","#909597","#E0DDDC","#B3B7BA","#899097","#A3A6AB"],[0,0.141,0.259,0.388,0.569,0.741,0.871,1],-1.7,-2.2,1.3,3.2).s().p("AgGAAQAAgCACgCQACgDACAAQAGAAABAHQAAAIgHAAQgGAAAAgIg");
	this.shape_229.setTransform(229.7,230.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.lf(["#DCDAD5","#909594","#465156","#909597","#E0DDDC","#B3B7BA","#899097","#A3A6AB"],[0,0.141,0.259,0.388,0.569,0.741,0.871,1],-0.4,3.4,0.7,-1.9).s().p("AgFAIQgDgEAAgEQAAgDACgEQADgDADAAQADAAADADQADAEAAADQAAAEgCAEQgDADgEAAQgCAAgDgDg");
	this.shape_230.setTransform(229.7,230.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.rf(["#FFFFFF","#363535"],[0,1],-1.5,-0.7,0,-1.5,-0.7,0.8).s().p("AgIADIAAgGIAQAAIABAHgAgGACIANAAIAAgDIgOAAg");
	this.shape_231.setTransform(234.5,219.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.rf(["#FFFFFF","#363535"],[0,1],-10.6,-2.6,0,-10.6,-2.6,3.9).s().p("Ag/gDIB/gJIAAATIh/AGgAg+gBIAAANIB9gHIAAgPg");
	this.shape_232.setTransform(229.8,218);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.rf(["#FFFFFF","#363535"],[0,1],-1.5,-0.7,0,-1.5,-0.7,0.9).s().p("AgIgCIAQgBIABAGIgRABgAgHAAIABACIANgBIAAgCg");
	this.shape_233.setTransform(234.5,214.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.rf(["#FFFFFF","#363535"],[0,1],-10.6,-3.4,0,-10.6,-3.4,4.4).s().p("Ag/AAIB/gQIAAASIh/APgAg+ABIAAAPIB9gPIAAgQg");
	this.shape_234.setTransform(229.8,212.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.rf(["#FFFFFF","#363535"],[0,1],-1.5,-0.8,0,-1.5,-0.8,1).s().p("AgIgBIAQgCIABAFIgRACgAgHAAIABACIANgBIAAgCg");
	this.shape_235.setTransform(234.5,209.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.rf(["#FFFFFF","#363535"],[0,1],-10.6,-3.9,0,-10.6,-3.9,4.9).s().p("Ag/ADIB/gWIAAATIh/AUgAg+AEIAAAOIB9gTIAAgQg");
	this.shape_236.setTransform(229.8,208.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.lf(["#DCDAD5","#909594","#465156","#909597","#E0DDDC","#B3B7BA","#899097","#A3A6AB"],[0,0.141,0.259,0.388,0.569,0.741,0.871,1],2.9,-14.7,-2.3,18.3).s().p("AhEgMICJgKIAAApIiJAEg");
	this.shape_237.setTransform(229.9,218.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.lf(["#DCDAD5","#909594","#465156","#909597","#E0DDDC","#B3B7BA","#899097","#A3A6AB"],[0,0.141,0.259,0.388,0.569,0.741,0.871,1],-8.3,-2.3,15,1.8).s().p("AhFgNICMgKIgBAsIiMADg");
	this.shape_238.setTransform(229.9,218.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.lf(["#DCDAD5","#909594","#465156","#909597","#E0DDDC","#B3B7BA","#899097","#D0D2D1","#A3A6AB"],[0,0.141,0.259,0.388,0.569,0.741,0.871,0.922,1],25,-4.6,-17.2,6.7).s().p("AhEgIICJgSIAAApIiJAMg");
	this.shape_239.setTransform(229.9,213.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.lf(["#DCDAD5","#909594","#465156","#909597","#E0DDDC","#B3B7BA","#899097","#D0D2D1","#A3A6AB"],[0,0.141,0.259,0.388,0.569,0.741,0.871,0.922,1],-7.5,-1.5,7.7,2).s().p("AhFgJICMgTIgBAsIiMANg");
	this.shape_240.setTransform(229.9,213.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.lf(["#DCDAD5","#909594","#465156","#909597","#E0DDDC","#B3B7BA","#899097","#D0D2D1","#A3A6AB"],[0,0.141,0.259,0.388,0.569,0.741,0.871,0.922,1],-25,-2.1,10.8,6.1).s().p("AhEgFICJgYIAAApIiJASg");
	this.shape_241.setTransform(229.9,208.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.lf(["#DCDAD5","#909594","#465156","#909597","#E0DDDC","#B3B7BA","#899097","#D0D2D1","#A3A6AB"],[0,0.141,0.259,0.388,0.569,0.741,0.871,0.922,1],1.6,-4.8,-1.3,5.5).s().p("AhFgGICMgZIgBAsIiMATg");
	this.shape_242.setTransform(229.9,208.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.lf(["#DCDAD5","#909594","#465156","#909597","#E0DDDC","#B3B7BA","#899097","#D0D2D1","#A3A6AB"],[0,0.141,0.259,0.388,0.569,0.741,0.871,0.922,1],1.5,-5.5,-1.7,5.6).s().p("Ag8ACIBzgUQAIgBAGADQAFADACAHIiXAZQABgOAOgDg");
	this.shape_243.setTransform(230,205.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.lf(["#DCDAD5","#909594","#465156","#909597","#E0DDDC","#B3B7BA","#899097","#D0D2D1","#A3A6AB"],[0,0.141,0.259,0.388,0.569,0.741,0.871,0.922,1],14.5,-45.8,-13.8,52.8).s().p("AhsEIQgHgCgDgLIgBgLIAAjdIAAgPQAAgEADgIQADgIABgMIAAgJQACixgCgVQgBgNAFgIIAFgGIAHgCIDYBBIAAAFIjTg8QgFgBgCAAQgDABgCAGQgBAEAAA2IAAA0IAABqIAAAHQgBAJgDAHQgEAKAAASIgBDZQAAAPAFADQAEAEAOgDIDMg+IAAAGIhyAkQhiAegJAAIgBgBg");
	this.shape_244.setTransform(250.2,228.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.rf(["#FFFFFF","#363535"],[0,1],-16.3,-24.8,0,-16.3,-24.8,32.3).s().p("AhBB8QgSgDAAgWIAAirQAAgLAGgHQAHgHAKgDIBvgWQARgDAHAGQAIAFAAARIABC9QAAAUgJAHQgHAFgVAAg");
	this.shape_245.setTransform(229.9,215.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.rf(["#FFFFFF","#363535"],[0,1],-15.6,-52.7,0,-15.6,-52.7,55.3).s().p("AhKDiIgHgEQgGgGAAgKIAAjHQAAgHgDgMIgDgVQgBgOABhSIABhOQgBgFACgFQAEgKAMgCICpgiIgFAGQgFAIABANQACAVgCCxIAAAJQgBALgDAJQgDAIAAAEIAAAPIAADdIABALQADALAHACQABABgBAAQgEAAifgmg");
	this.shape_246.setTransform(230.4,228.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.rf(["#FFFFFF","#363535"],[0,1],-19.4,-51.2,0,-19.4,-51.2,55.4).s().p("AhvD+QgFgEAAgOIABjZQAAgSAEgLQADgHAAgJIABgHIAAhpIgBg1QAAg1ACgFQACgFADgBQACAAAFABIDTA8IgGGCIjMA+IgLACQgFAAgCgCg");
	this.shape_247.setTransform(250.6,228.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222}]},263).to({state:[{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222}]},337).wait(1));

	// Arrow2
	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#3C3C3C").s().p("ABvDAIB2ivIoDAAIAAghIIDAAIh2ivIAuAAICCC/IiCDAg");
	this.shape_248.setTransform(341.1,231.8);
	this.shape_248._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_248).wait(314).to({_off:false},0).wait(287));

	// Layer 20
	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#373535").p("AGGFDIsLAAIAAqFIMLAAg");
	this.shape_249.setTransform(444.7,234.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#292929").s().p("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");
	this.shape_250.setTransform(444.7,234.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_250},{t:this.shape_249}]},322).to({state:[{t:this.shape_250},{t:this.shape_249}]},278).wait(1));

	// Arrow3
	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#3C3C3C").s().p("ABvDAIB3ivIoEAAIAAghIIEAAIh3ivIAuAAICCC/IiCDAg");
	this.shape_251.setTransform(544.6,231.8);
	this.shape_251._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_251).wait(374).to({_off:false},0).wait(227));

	// Layer 21
	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#292929").s().p("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EgHgBQgeAZgWAAIgEAAgABrgTQgHgMgOgGQgOgEgRACIgeAFQAKgHANgEQARgGANADQABgVgOgdQAbAaATAsQAKgEAQAEQAagJALgQQgGARgVARQAPAKAHANQgggbgeAEgAhYhQQgHgFgMABQAMgFADgEQADgLgEgKQgRgDgnADQgHgPgRgRQARADAGAFQAOgOAWACQgTAJgGAMQATAMAhgJQADgWAPgUQgJAWgGAbQgDAMAHANQAPADAlAAQgiAIgKABQgIADgDAKQAAgIgFgDgACehtQAfANAsAGQgkADgTgHQAIAJgBAPQgKgagRgNgAAmh6IAYgIQAOgEANABQAcgXACgTQgTgUgbgKQgXgHgigCQANgJANACQgBgRAGgJQAGgMASgGQghAvAuAKQgGgYAJgQQAEAVAMATQAFAKATAXQAagHAWASQgmgJgSAQQgMAKgIAeQAegVAPgEQAZgHAWASQgtgJghAhQAVAPAFAWQgzhAgyAMgAg+i5IAGgOQgNgEgFgOQAPAGAXgFIgLASQARAGANASQgWgOgXADgAigjEQARgQALgFQARgHARANQACgEAIgFQgFAGgBAJIgBARQgcgrglAjg");
	this.shape_252.setTransform(649.8,234.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#373535").p("AGGFDIsLAAIAAqFIMLAAg");
	this.shape_253.setTransform(649.9,234.1);

	this.instance = new lib.Image_2();
	this.instance.parent = this;
	this.instance.setTransform(574.8,165.8,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_253},{t:this.shape_252}]},381).to({state:[{t:this.instance},{t:this.shape_253},{t:this.shape_252}]},219).wait(1));

	// The areas are statistically corrected for physical size and then colored by activity level. This is done for every “slice” front to back, top to bottom or side to size. 
	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#5A5B5A").p("Eg54AAAMBzyAAA");
	this.shape_254.setTransform(385.6,332.1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#373535").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQACADABAEQgBAFgCADQgDADgFAAQgEAAgDgDg");
	this.shape_255.setTransform(480.5,489.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgKAAgOQAAgMAFgLQAEgKAKgGQAJgGALAAQALAAAHADQAHAFAEAGQAEAGACAIQACAGgBAGIAAAEIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgCIAKgDIACAMQgEACgHACIgSACQgMgBgKgGgAAXgHQAAgGgCgFQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_256.setTransform(474.2,485.9);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#373535").s().p("AgiAsIAAgJIAmgzIAGgHIAFgHIAAAAIguAAIAAgNIBCAAIgBAKIgmAyIgFAHIgGAGIAAABIAyAAIAAANg");
	this.shape_257.setTransform(466,485.9);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgCgDgBgEQABgEACgDQACgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_258.setTransform(460.1,484.1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#373535").s().p("AgQAsQgHgCgEgDIADgMIAJAEQAHACAFABQAIAAAEgEQAFgEgBgGQAAgFgDgEQgEgDgIgEQgMgEgFgFQgGgGAAgIQAAgHADgGQAFgGAGgDQAGgEAJABQAHgBAGACQAFACAEACIgFAMIgHgEQgEgBgGgBQgHABgDADQgEADAAAFQAAAFAEADQAFAEAGADQAMAEAGAFQAFAHAAAJQAAAMgIAHQgJAHgOABQgHAAgGgCg");
	this.shape_259.setTransform(454.4,485.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#373535").s().p("AgVAoQgKgGgFgJQgGgKAAgOQAAgOAGgLQAGgKAKgFQAKgGAKABQANgBAKAGQAJAGAFAKQAFAKABANQgBAPgGALQgHAKgKAEQgJAGgKAAQgMgBgJgFgAgOgbQgGAEgDAIQgCAIgBAHQABAKADAIQADAHAGAEQAGAFAHAAQAHAAAHgFQAFgEAEgIQADgHAAgKQAAgHgCgIQgDgHgFgFQgHgGgJAAQgIAAgGAGg");
	this.shape_260.setTransform(442.1,485.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABALIgGACIgIABQgGAAgEgCg");
	this.shape_261.setTransform(434.2,484.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgKAAgOQAAgMAFgLQAEgKAKgGQAJgGALAAQALAAAHADQAHAFAEAGQAEAGACAIQACAGgBAGIAAAEIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgCIAKgDIACAMQgEACgHACIgSACQgMgBgKgGgAAXgHQAAgGgCgFQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_262.setTransform(423,485.9);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#373535").s().p("AgWA8QgJgGgEgKQgFgKAAgOQAAgOAFgJQAFgLAKgFQAIgGALAAQAJAAAHAEQAGAEADAFIABAAIAAg0IAQAAIAABpIAAALIAAALIgOAAIgBgPIAAAAQgEAIgHAEQgIAFgKAAQgKAAgJgFgAgMgIQgGAEgDAGQgDAIAAAKQAAAJADAHQACAHAHAFQAFAEAHAAQAJAAAGgFQAHgEACgJIABgEIAAgEIAAgPIAAgDIgBgDQgCgHgGgGQgGgEgJAAQgHgBgGAFg");
	this.shape_263.setTransform(413.2,483.9);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgCgDgBgEQABgEACgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_264.setTransform(406.3,484.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#373535").s().p("AgRAsQgGgCgEgDIADgMIAJAEQAHACAGABQAHAAAEgEQAFgEAAgGQgBgFgEgEQgDgDgIgEQgMgEgFgFQgGgGAAgIQAAgHAEgGQAEgGAGgDQAHgEAIABQAHgBAGACQAFACAEACIgFAMIgGgEQgFgBgGgBQgHABgDADQgEADAAAFQAAAFAEADQAEAEAIADQALAEAGAFQAGAHgBAJQAAAMgIAHQgJAHgOABQgHAAgHgCg");
	this.shape_265.setTransform(400.6,485.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#373535").s().p("AgUAtIAAg8IAAgOIgBgNIAOAAIABASIAAAAQADgJAGgGQAGgEAIAAIADAAIACAAIAAAPIgDgBIgCAAQgJAAgFAGQgFAFgCAKIAAADIAAAEIAAAug");
	this.shape_266.setTransform(390.7,485.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#373535").s().p("AgWAoQgIgGgGgJQgFgKgBgOQABgOAFgLQAGgKAJgFQAKgGAMABQAMgBAJAGQAKAGAFAKQAGAKAAANQgBAPgGALQgGAKgLAEQgJAGgKAAQgMgBgKgFgAgOgbQgGAEgDAIQgDAIABAHQgBAKAEAIQADAHAGAEQAGAFAHAAQAIAAAFgFQAHgEACgIQAEgHABgKQAAgHgEgIQgCgHgFgFQgHgGgJAAQgIAAgGAGg");
	this.shape_267.setTransform(382.4,485.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#373535").s().p("AAvAtIAAgxQAAgMgEgIQgFgHgKAAQgHAAgFAFQgFAEgCAGIgBADIAAAFIAAA1IgPAAIAAgzQABgLgFgHQgEgGgKgBQgEABgFACQgEACgCADQgDAEgBAEIgBAEIgBAEIAAA0IgPAAIAAg/IAAgNIgBgLIAPAAIAAAPIABAAIAGgIQADgEAGgCQAEgDAIABQAJAAAGAEQAGAFADAIIAAAAIAEgHIAGgFQADgCAFgCQAFgCAGABQAGAAAGACQAHAEAFAIQAEAIAAAPIAAAzg");
	this.shape_268.setTransform(366.1,485.8);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#373535").s().p("AgWAoQgIgGgGgJQgFgKgBgOQABgOAFgLQAGgKAKgFQAJgGALABQANgBAJAGQAKAGAFAKQAGAKAAANQgBAPgGALQgGAKgLAEQgJAGgKAAQgMgBgKgFgAgOgbQgGAEgDAIQgCAIAAAHQAAAKADAIQADAHAGAEQAGAFAHAAQAIAAAFgFQAHgEACgIQAEgHABgKQAAgHgDgIQgDgHgFgFQgHgGgJAAQgIAAgGAGg");
	this.shape_269.setTransform(353.7,485.9);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABALIgGACIgIABQgGAAgEgCg");
	this.shape_270.setTransform(345.8,484.7);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABALIgGACIgIABQgGAAgEgCg");
	this.shape_271.setTransform(339.9,484.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#373535").s().p("AgVAoQgKgGgFgJQgGgKABgOQgBgOAGgLQAGgKAKgFQAKgGAKABQANgBAKAGQAJAGAFAKQAFAKAAANQAAAPgGALQgHAKgJAEQgKAGgKAAQgMgBgJgFgAgOgbQgGAEgDAIQgDAIAAAHQAAAKAEAIQADAHAGAEQAGAFAHAAQAHAAAHgFQAFgEAEgIQADgHAAgKQAAgHgCgIQgDgHgGgFQgFgGgKAAQgIAAgGAGg");
	this.shape_272.setTransform(332,485.9);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#373535").s().p("AgOA9QgHgEgFgIIAAAAIgBAOIgOAAIABgLIAAgLIAAhpIAQAAIAAA3QAFgIAHgDQAIgFAJAAQALAAAIAGQAIAFAFAKQAFAJAAANQgBAQgGAKQgFAKgJAGQgJAFgKAAQgIAAgIgEgAgOgIQgGAGgEAIIAAADIAAAEIAAAPIAAADIAAADQADAIAGAFQAGAFAJAAQAMAAAGgJQAIgJAAgPQAAgJgDgHQgDgHgGgEQgGgFgIABQgIAAgGAEg");
	this.shape_273.setTransform(322.3,483.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#373535").s().p("AgWAoQgIgGgGgJQgFgKgBgOQABgOAFgLQAGgKAJgFQAKgGAMABQAMgBAJAGQAKAGAFAKQAGAKAAANQgBAPgGALQgGAKgLAEQgJAGgKAAQgMgBgKgFgAgOgbQgGAEgDAIQgDAIABAHQgBAKAEAIQADAHAGAEQAGAFAHAAQAIAAAFgFQAHgEACgIQAEgHABgKQAAgHgEgIQgCgHgFgFQgHgGgJAAQgIAAgGAGg");
	this.shape_274.setTransform(308.1,485.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABALIgGACIgIABQgGAAgEgCg");
	this.shape_275.setTransform(300.3,484.7);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#373535").s().p("AgoA+IAAhdIAAgPIgBgNIAPAAIABAPIAAAAQAFgIAHgFQAIgEAJAAQAMAAAHAFQAJAGAFAKQAEAKAAANQABAQgGAJQgFAKgKAFQgIAGgLAAQgHAAgIgEQgHgDgEgHIAAAvgAgOgrQgHAFgCAJIgBADIAAADIAAAPIAAAEIAAADQADAHAGAFQAGAFAJAAQAHAAAGgEQAHgEACgIQAEgGAAgKQAAgJgEgHQgDgIgFgEQgGgFgIAAQgHAAgHAGg");
	this.shape_276.setTransform(288.8,487.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#373535").s().p("AgWAoQgIgGgGgJQgFgKgBgOQABgOAFgLQAGgKAJgFQAKgGAMABQAMgBAJAGQAKAGAFAKQAGAKAAANQgBAPgGALQgGAKgKAEQgKAGgKAAQgMgBgKgFgAgOgbQgGAEgDAIQgDAIABAHQAAAKADAIQADAHAGAEQAGAFAHAAQAIAAAFgFQAHgEACgIQAEgHABgKQAAgHgEgIQgCgHgFgFQgHgGgJAAQgIAAgGAGg");
	this.shape_277.setTransform(278.4,485.9);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABALIgGACIgIABQgGAAgEgCg");
	this.shape_278.setTransform(270.6,484.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#373535").s().p("AgJAKIAEgPIACgPIARgCIgFARIgGAPIgFALIgLABIAEgMg");
	this.shape_279.setTransform(261.8,490.2);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#373535").s().p("AASBAIgegpIgHAIIAAAhIgQAAIAAh/IAQAAIAABQIADgFIAEgFIAZgdIATAAIggAiIAlA0g");
	this.shape_280.setTransform(256.4,483.8);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#373535").s().p("AgNAnQgKgFgFgKQgFgKAAgNQAAgMAFgLQAGgKALgHQAKgFANAAQAHgBAGACIAJADIgDANIgIgEIgLgBQgKAAgGAFQgGAEgEAHQgDAIAAAIQAAAKAEAIQAEAHAGADQAGAEAJAAIALgBIAIgDIADAMQgDACgHACIgPACQgMgBgKgGg");
	this.shape_281.setTransform(247.5,485.9);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgHQAAgPAOgIQANgIAYAAIAAgCQABgEgCgEQgBgFgEgDQgFgDgHgBQgHAAgFACQgGACgFADIgEgLQAGgDAHgDQAIgBAHAAQANgBAHAGQAIAFACAIQADAIAAAJIAAAfIAAAMIACAKIgPAAIgBgMIgBAAQgDAGgHADQgHAFgIAAQgJAAgGgFgAABAAQgIABgFAFQgGAEAAAJQAAAHAEAEQAFAEAGAAQAHgBAGgEQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_282.setTransform(238.8,485.9);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#373535").s().p("AgNA9QgHgEgGgIIAAAAIgBAOIgNAAIAAgLIAAgLIAAhpIAQAAIAAA3QAEgIAIgDQAIgFAJAAQAKAAAJAGQAIAFAFAKQAEAJABANQAAAQgHAKQgFAKgJAGQgJAFgJAAQgJAAgHgEgAgOgIQgGAGgDAIIgBADIAAAEIAAAPIAAADIABADQACAIAGAFQAHAFAIAAQAMAAAGgJQAIgJgBgPQAAgJgCgHQgDgHgGgEQgFgFgJABQgHAAgHAEg");
	this.shape_283.setTransform(229.9,483.9);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#373535").s().p("AgVAoQgKgGgFgJQgGgKAAgOQAAgOAGgLQAGgKAKgFQAKgGAKABQANgBAKAGQAJAGAFAKQAFAKABANQgBAPgGALQgHAKgKAEQgJAGgKAAQgMgBgJgFgAgOgbQgGAEgDAIQgCAIgBAHQABAKADAIQADAHAGAEQAGAFAHAAQAHAAAHgFQAFgEAEgIQADgHAAgKQAAgHgCgIQgDgHgFgFQgHgGgJAAQgIAAgGAGg");
	this.shape_284.setTransform(215.7,485.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABALIgGACIgIABQgGAAgEgCg");
	this.shape_285.setTransform(207.9,484.7);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABALIgGACIgIABQgGAAgEgCg");
	this.shape_286.setTransform(198.1,484.7);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#373535").s().p("AAWAtIAAgyQAAgGgCgGQgDgHgEgDQgFgDgGgBQgIABgFAFQgGAEgCAHIgBADIAAAEIAAA0IgQAAIAAg/IAAgNIgBgLIAPAAIABAPIAAAAQACgFAEgDQAEgEAGgCQAFgDAGABIAKABQAGACAEAEQAFAEADAHQADAIABALIAAAzg");
	this.shape_287.setTransform(190.3,485.8);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#373535").s().p("AgWAoQgIgGgGgJQgFgKgBgOQABgOAFgLQAGgKAJgFQAKgGAMABQAMgBAJAGQAKAGAFAKQAGAKAAANQgBAPgGALQgGAKgLAEQgJAGgKAAQgMgBgKgFgAgOgbQgGAEgDAIQgDAIABAHQAAAKADAIQADAHAGAEQAGAFAHAAQAIAAAFgFQAHgEACgIQAEgHABgKQAAgHgEgIQgCgHgFgFQgHgGgJAAQgIAAgGAGg");
	this.shape_288.setTransform(180.3,485.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#373535").s().p("AgUAtIAAg8IAAgOIgBgNIAOAAIABASIAAAAQADgJAGgGQAGgEAIAAIADAAIACAAIAAAPIgDgBIgCAAQgJAAgFAGQgFAFgCAKIAAADIAAAEIAAAug");
	this.shape_289.setTransform(173.1,485.8);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#373535").s().p("AgPBBIAAhKIgNAAIAAgMIANAAIAAgEQgBgKADgIQADgIAFgFQAFgEAEgCIALgCIAIABIAGACIgCAMIgFgCIgGAAQgGAAgEADQgEAEgBAGQgBAFAAAHIAAAFIAVAAIAAAMIgVAAIAABKg");
	this.shape_290.setTransform(167.5,483.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#373535").s().p("AAEAJIAEgOIADgOIAQgCIgFAQIgGAOIgGAMIgKABIAEgNgAgWAJIAEgOIADgOIAPgCIgEAQIgGAOIgFAMIgLABIAEgNg");
	this.shape_291.setTransform(159.1,480.1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgKAAgOQAAgMAFgLQAEgKAKgGQAJgGALAAQALAAAHADQAHAFAEAGQAEAGACAIQACAGgBAGIAAAEIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgCIAKgDIACAMQgEACgHACIgSACQgMgBgKgGgAAXgHQAAgGgCgFQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_292.setTransform(151.8,485.9);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#373535").s().p("AgNAnQgKgFgFgKQgFgKAAgNQAAgMAFgLQAGgKALgHQAKgFANAAQAHgBAGACIAJADIgDANIgIgEIgLgBQgKAAgGAFQgGAEgEAHQgDAIAAAIQAAAKAEAIQAEAHAGADQAGAEAJAAIALgBIAIgDIADAMQgDACgHACIgPACQgMgBgKgGg");
	this.shape_293.setTransform(143.4,485.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQADADAAAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_294.setTransform(137.2,484.1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_295.setTransform(133,483.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#373535").s().p("AgRAsQgGgCgFgDIAFgMIAJAEQAGACAGABQAHAAAEgEQAEgEABgGQAAgFgFgEQgDgDgIgEQgLgEgHgFQgFgGAAgIQAAgHAEgGQADgGAHgDQAHgEAIABQAHgBAFACQAGACADACIgDAMIgIgEQgEgBgGgBQgHABgDADQgEADAAAFQAAAFAEADQAEAEAIADQALAEAGAFQAGAHAAAJQAAAMgJAHQgIAHgPABQgHAAgHgCg");
	this.shape_296.setTransform(127.3,485.9);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#373535").s().p("AAFAGIAGgOIAGgMIAKgBIgFANIgDAOIgDAOIgQACIAFgQgAgVAGIAGgOIAGgMIAJgBIgDANIgDAOIgDAOIgRACIAFgQg");
	this.shape_297.setTransform(121.3,480.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#373535").s().p("AgjAyIAGgDIAIgFIAHgHQAEgFACgFIABgCIAAgCIAAgCIgBgCIgghQIASAAIATA0IACAJIACAIIAAAAIADgIIADgJIARg0IARAAIgYA/IgKAYIgIASQgFAGgFAFQgGAFgGADIgIACg");
	this.shape_298.setTransform(111.4,487.9);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#373535").s().p("AgUAtIAAg8IAAgOIgBgNIAOAAIABASIAAAAQADgJAGgGQAGgEAIAAIADAAIACAAIAAAPIgDgBIgCAAQgJAAgFAGQgFAFgCAKIAAADIAAAEIAAAug");
	this.shape_299.setTransform(104.2,485.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgKAAgOQAAgMAFgLQAEgKAKgGQAJgGALAAQALAAAHADQAHAFAEAGQAEAGACAIQACAGgBAGIAAAEIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgCIAKgDIACAMQgEACgHACIgSACQgMgBgKgGgAAXgHQAAgGgCgFQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_300.setTransform(96.3,485.9);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#373535").s().p("AgHAsIghhXIARAAIARAwIAEAMIACALIAAAAIAEgLIAEgMIARgwIAQAAIgiBXg");
	this.shape_301.setTransform(87.7,485.9);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgKAAgOQAAgMAFgLQAEgKAKgGQAJgGALAAQALAAAHADQAHAFAEAGQAEAGACAIQACAGgBAGIAAAEIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgCIAKgDIACAMQgEACgHACIgSACQgMgBgKgGgAAXgHQAAgGgCgFQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_302.setTransform(78.9,485.9);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#373535").s().p("AgUAtIAAg8IAAgOIgBgNIAOAAIABASIAAAAQADgJAGgGQAGgEAIAAIADAAIACAAIAAAPIgDgBIgCAAQgJAAgFAGQgFAFgCAKIAAADIAAAEIAAAug");
	this.shape_303.setTransform(68.1,485.8);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#373535").s().p("AgWAoQgIgGgGgJQgFgKgBgOQABgOAFgLQAGgKAJgFQAKgGAMABQAMgBAJAGQAKAGAFAKQAGAKAAANQgBAPgGALQgGAKgLAEQgJAGgKAAQgMgBgKgFgAgOgbQgGAEgDAIQgDAIABAHQAAAKADAIQADAHAGAEQAGAFAHAAQAIAAAFgFQAHgEACgIQAEgHABgKQAAgHgEgIQgCgHgFgFQgHgGgJAAQgIAAgGAGg");
	this.shape_304.setTransform(59.7,485.9);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#373535").s().p("AgPBBIAAhKIgMAAIAAgMIAMAAIAAgEQgBgKADgIQACgIAGgFQAEgEAFgCIALgCIAIABIAGACIgCAMIgFgCIgFAAQgIAAgDADQgEAEgBAGQgBAFAAAHIAAAFIAUAAIAAAMIgUAAIAABKg");
	this.shape_305.setTransform(52.9,483.7);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_306.setTransform(772.8,460.6);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#373535").s().p("AAVAsIAAgwQAAgHgCgHQgCgFgEgEQgEgEgIABQgGAAgGAEQgGAFgCAHIAAAEIgBADIAAAzIgQAAIAAg+IAAgMIAAgMIANAAIACAPIAAAAQACgFAEgDQAEgEAFgCQAGgCAHgBIAKACQAFABAEAFQAFAEADAHQADAIAAAKIAAAzg");
	this.shape_307.setTransform(763.3,460.5);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#373535").s().p("AgWAoQgJgFgFgLQgGgKABgOQgBgNAGgKQAGgKAJgGQALgFALgBQAMABAJAFQAKAGAFAKQAFAKAAANQAAAPgGAKQgHALgJAFQgKAEgKAAQgMABgKgGgAgOgcQgGAFgDAIQgCAIAAAHQAAAKADAHQADAIAGAEQAGAEAHAAQAIAAAFgEQAGgEADgIQAEgIAAgJQAAgHgDgHQgCgIgGgGQgFgEgKAAQgIAAgGAEg");
	this.shape_308.setTransform(753.3,460.6);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#373535").s().p("AgWA7QgJgFgEgKQgFgKAAgNQAAgPAFgJQAFgKAKgHQAIgFALAAQAJAAAHAEQAGAEADAFIABAAIAAg0IAQAAIAABoIAAAMIAAALIgOAAIgBgPIAAAAQgEAHgHAFQgIAFgKAAQgLAAgIgGgAgMgIQgGAEgDAHQgDAHAAAKQAAAJADAHQACAIAHAEQAFAEAHAAQAJAAAGgFQAHgEACgKIABgDIAAgDIAAgPIAAgEIgBgEQgCgGgGgFQgGgGgJAAQgIABgFAEg");
	this.shape_309.setTransform(743,458.7);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#373535").s().p("AgQArQgHgBgFgCIAFgNIAJAFQAGABAFAAQAIAAAEgDQAEgEAAgFQAAgGgDgDQgEgFgIgCQgLgFgHgFQgFgGAAgIQAAgHADgGQAEgGAHgDQAHgDAIgBQAHABAFABQAGABADADIgDALIgIgDQgEgBgGAAQgHAAgDADQgEADAAAFQAAAGAEADQAEADAHADQAMAEAGAGQAGAFAAAKQAAAMgJAHQgIAHgPAAQgHAAgGgCg");
	this.shape_310.setTransform(730.8,460.6);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgCADgFAAQgDAAgDgDg");
	this.shape_311.setTransform(725.2,458.9);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#373535").s().p("AgRArQgGgBgFgCIAEgNIAJAFQAGABAHAAQAHAAAEgDQAFgEAAgFQgBgGgEgDQgDgFgIgCQgMgFgFgFQgGgGAAgIQAAgHAEgGQAEgGAGgDQAGgDAJgBQAHABAFABQAGABAEADIgEALIgHgDQgFgBgGAAQgGAAgEADQgEADAAAFQAAAGAEADQAEADAIADQALAEAGAGQAGAFgBAKQABAMgJAHQgJAHgOAAQgHAAgHgCg");
	this.shape_312.setTransform(715.7,460.6);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgCgDgBgEQABgEACgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_313.setTransform(710,458.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgFgEgDQgFgEgHAAQgHABgFAEQgGAFgCAFIgBADIAAAFIAAA0IgQAAIAAh/IAQAAIAAA2IAAAAIAFgFIAGgGIAIgDIAIgBIAJACQAGABAEAFQAFAEADAHQADAGAAALIAAA0g");
	this.shape_314.setTransform(702.9,458.6);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#373535").s().p("AgHA9IAAhrIglAAIAAgOIBZAAIAAAOIglAAIAABrg");
	this.shape_315.setTransform(693.6,458.9);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#373535").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQACADABAEQgBAFgCADQgDADgFAAQgEAAgDgDg");
	this.shape_316.setTransform(684.3,464);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_317.setTransform(680.4,458.6);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_318.setTransform(673.8,460.6);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#373535").s().p("AgHArIghhWIARAAIARAxIAEALIACAKIAAAAIAEgKIAEgLIARgxIAQAAIgiBWg");
	this.shape_319.setTransform(665.2,460.6);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLADIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_320.setTransform(656.3,460.6);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_321.setTransform(649.7,458.6);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#373535").s().p("AgjAyIAHgDIAHgFIAGgHQAEgEADgHIABgBIAAgCIAAgCIgBgDIgghPIARAAIAUA0IADAJIABAHIAAAAIADgHIADgKIARgzIARAAIgXA+IgLAZIgIARQgGAIgEAEQgHAFgFACIgIAEg");
	this.shape_322.setTransform(639.5,462.6);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_323.setTransform(632.1,459.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgCADgFAAQgEAAgCgDg");
	this.shape_324.setTransform(627.1,458.9);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#373535").s().p("AgHArIghhWIARAAIARAxIAEALIACAKIAAAAIAEgKIAEgLIARgxIAQAAIgiBWg");
	this.shape_325.setTransform(620.7,460.6);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQADADAAAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_326.setTransform(614.2,458.9);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_327.setTransform(609.1,459.5);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#373535").s().p("AgNAoQgKgGgFgKQgFgKAAgNQAAgMAFgLQAGgLALgFQAKgHANAAQAHABAGABIAJADIgDAMIgIgCIgLgCQgKABgGADQgGAFgEAHQgDAIAAAIQAAALAEAGQAEAIAGADQAGAFAJAAIALgBIAIgEIADAMQgDACgHABIgPACQgMAAgKgFg");
	this.shape_328.setTransform(602,460.6);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgGQAAgRAOgGQANgJAYAAIAAgBQABgFgCgEQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFADIgEgKQAGgDAHgDQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAAKIACAKIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGAAQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_329.setTransform(593.3,460.6);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#373535").s().p("AgjAyIAHgDIAHgFIAGgHQAEgEADgHIABgBIAAgCIAAgCIgBgDIgghPIASAAIATA0IADAJIABAHIAAAAIADgHIADgKIARgzIARAAIgYA+IgKAZIgIARQgGAIgEAEQgHAFgFACIgIAEg");
	this.shape_330.setTransform(581.1,462.6);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#373535").s().p("AgOA9QgGgEgFgIIgBAAIgBAOIgOAAIABgLIAAgMIAAhoIAQAAIAAA3QAFgHAHgFQAHgEAKAAQALAAAIAFQAIAGAFAKQAFAJgBAOQAAAPgFALQgGAJgJAFQgIAGgLAAQgIAAgIgEgAgOgHQgHAFgCAIIgBADIAAADIAAAQIAAADIABADQACAIAGAFQAHAGAIgBQAMAAAHgJQAGgJABgPQgBgJgDgHQgCgHgGgEQgGgEgIgBQgHAAgHAGg");
	this.shape_331.setTransform(572.2,458.7);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#373535").s().p("AgWA7QgJgFgEgKQgFgKAAgNQAAgPAFgJQAFgKAKgHQAIgFALAAQAJAAAHAEQAGAEADAFIABAAIAAg0IAQAAIAABoIAAAMIAAALIgOAAIgBgPIAAAAQgEAHgHAFQgIAFgKAAQgKAAgJgGgAgMgIQgGAEgDAHQgDAHAAAKQAAAJADAHQACAIAHAEQAFAEAHAAQAJAAAGgFQAHgEACgKIABgDIAAgDIAAgPIAAgEIgBgEQgCgGgGgFQgGgGgJAAQgHABgGAEg");
	this.shape_332.setTransform(557.6,458.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLADIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_333.setTransform(548.3,460.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#373535").s().p("AgUAsIAAg7IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJAAgFAFQgFAFgCAJIAAAEIAAAEIAAAtg");
	this.shape_334.setTransform(541.5,460.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#373535").s().p("AgVAoQgKgFgFgLQgGgKABgOQgBgNAGgKQAGgKAKgGQAKgFAKgBQANABAKAFQAJAGAFAKQAFAKAAANQAAAPgGAKQgHALgJAFQgKAEgKAAQgMABgJgGgAgOgcQgGAFgDAIQgDAIAAAHQAAAKAEAHQADAIAGAEQAGAEAHAAQAHAAAHgEQAFgEAEgIQADgIAAgJQAAgHgCgHQgDgIgGgGQgFgEgKAAQgIAAgGAEg");
	this.shape_335.setTransform(533.2,460.6);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_336.setTransform(526.1,458.6);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#373535").s().p("AgVAoQgKgFgFgLQgGgKAAgOQAAgNAGgKQAGgKAKgGQAJgFALgBQANABAKAFQAJAGAFAKQAFAKABANQgBAPgGAKQgHALgKAFQgJAEgKAAQgMABgJgGgAgOgcQgGAFgDAIQgCAIgBAHQABAKADAHQADAIAGAEQAGAEAHAAQAHAAAHgEQAFgEAEgIQADgIAAgJQAAgHgCgHQgDgIgFgGQgHgEgJAAQgIAAgGAEg");
	this.shape_337.setTransform(519,460.6);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#373535").s().p("AgNAoQgKgGgFgKQgFgKAAgNQAAgMAFgLQAGgLALgFQAKgHANAAQAHABAGABIAJADIgDAMIgIgCIgLgCQgKABgGADQgGAFgEAHQgDAIAAAIQAAALAEAGQAEAIAGADQAGAFAJAAIALgBIAIgEIADAMQgDACgHABIgPACQgMAAgKgFg");
	this.shape_338.setTransform(510.2,460.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#373535").s().p("AAVAsIAAgwQAAgHgCgHQgCgFgEgEQgEgEgIABQgGAAgGAEQgGAFgCAHIAAAEIgBADIAAAzIgQAAIAAg+IAAgMIAAgMIANAAIACAPIAAAAQACgFAEgDQAEgEAFgCQAGgCAHgBIAKACQAFABAEAFQAFAEADAHQADAIAAAKIAAAzg");
	this.shape_339.setTransform(497.3,460.5);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_340.setTransform(487.8,460.6);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgFgEgDQgFgEgHAAQgHABgFAEQgGAFgCAFIgBADIAAAFIAAA0IgQAAIAAh/IAQAAIAAA2IAAAAIAFgFIAGgGIAIgDIAIgBIAJACQAGABAEAFQAFAEADAHQADAGAAALIAAA0g");
	this.shape_341.setTransform(478.3,458.6);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_342.setTransform(470.3,459.5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#373535").s().p("AgWA7QgJgFgEgKQgFgKAAgNQAAgPAFgJQAGgKAIgHQAJgFALAAQAJAAAGAEQAHAEADAFIAAAAIAAg0IAQAAIAABoIAAAMIABALIgOAAIgBgPIgBAAQgDAHgIAFQgHAFgKAAQgLAAgIgGgAgMgIQgGAEgDAHQgDAHAAAKQAAAJADAHQADAIAFAEQAGAEAIAAQAHAAAHgFQAGgEADgKIAAgDIAAgDIAAgPIAAgEIAAgEQgCgGgGgFQgGgGgJAAQgHABgGAEg");
	this.shape_343.setTransform(458.2,458.7);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#373535").s().p("AAVAsIAAgwQAAgHgBgHQgCgFgFgEQgFgEgGABQgIAAgFAEQgGAFgCAHIgBAEIAAADIAAAzIgQAAIAAg+IAAgMIAAgMIANAAIABAPIABAAQACgFAEgDQAEgEAGgCQAFgCAGgBIALACQAEABAGAFQAEAEADAHQADAIABAKIAAAzg");
	this.shape_344.setTransform(448.4,460.5);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgGQAAgRAOgGQANgJAYAAIAAgBQABgFgCgEQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFADIgEgKQAGgDAHgDQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAAKIACAKIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGAAQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_345.setTransform(438.8,460.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_346.setTransform(426.4,460.6);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#373535").s().p("AgiArIAAgJIAmgyIAGgGIAFgHIAAgBIguAAIAAgNIBCAAIgBAKIgmAyIgFAHIgGAHIAAAAIAyAAIAAAMg");
	this.shape_347.setTransform(418.2,460.6);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQACgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_348.setTransform(412.3,458.9);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#373535").s().p("AgQArQgHgBgEgCIAEgNIAJAFQAFABAGAAQAIAAAEgDQAFgEgBgFQAAgGgDgDQgEgFgIgCQgLgFgHgFQgFgGAAgIQAAgHADgGQAFgGAGgDQAGgDAJgBQAHABAGABQAFABAEADIgFALIgHgDQgEgBgGAAQgGAAgEADQgEADAAAFQAAAGAEADQAFADAGADQAMAEAGAGQAFAFABAKQAAAMgJAHQgIAHgPAAQgHAAgGgCg");
	this.shape_349.setTransform(406.6,460.6);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_350.setTransform(397.1,458.6);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgGQAAgRAOgGQANgJAYAAIAAgBQABgFgCgEQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFADIgEgKQAGgDAHgDQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAAKIACAKIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGAAQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_351.setTransform(390.4,460.6);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#373535").s().p("AgNAoQgKgGgFgKQgFgKAAgNQAAgMAFgLQAGgLALgFQAKgHANAAQAHABAGABIAJADIgDAMIgIgCIgLgCQgKABgGADQgGAFgEAHQgDAIAAAIQAAALAEAGQAEAIAGADQAGAFAJAAIALgBIAIgEIADAMQgDACgHABIgPACQgMAAgKgFg");
	this.shape_352.setTransform(382.3,460.6);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgCgDgBgEQABgEACgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_353.setTransform(376.1,458.9);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#373535").s().p("AgRArQgGgBgEgCIADgNIAJAFQAGABAHAAQAHAAAEgDQAFgEAAgFQgBgGgEgDQgDgFgIgCQgMgFgFgFQgGgGAAgIQAAgHAEgGQAEgGAGgDQAHgDAIgBQAHABAGABQAFABAEADIgFALIgGgDQgFgBgGAAQgHAAgDADQgEADAAAFQAAAGAEADQAEADAIADQALAEAGAGQAGAFgBAKQAAAMgIAHQgJAHgOAAQgHAAgHgCg");
	this.shape_354.setTransform(370.4,460.6);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#373535").s().p("AgjAyIAGgDIAIgFIAHgHQAEgEACgHIABgBIABgCIgBgCIAAgDIghhPIASAAIASA0IADAJIACAHIABAAIACgHIADgKIARgzIARAAIgYA+IgKAZIgJARQgFAIgFAEQgFAFgGACIgIAEg");
	this.shape_355.setTransform(362.7,462.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgFgEgDQgFgEgHAAQgHABgFAEQgGAFgCAFIgBADIAAAFIAAA0IgQAAIAAh/IAQAAIAAA2IAAAAIAFgFIAGgGIAIgDIAIgBIAJACQAGABAEAFQAFAEADAHQADAGAAALIAAA0g");
	this.shape_356.setTransform(353.7,458.6);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#373535").s().p("AgoA+IAAhdIAAgPIAAgNIAOAAIABAPIAAAAQAFgIAHgFQAIgEAJAAQAMAAAHAFQAJAGAFAKQAEAKAAANQABAQgGAJQgFAKgKAFQgJAGgKAAQgHAAgIgEQgHgDgEgHIAAAvgAgOgrQgGAFgDAJIgBADIAAADIAAAPIAAAEIABADQACAHAGAFQAHAFAIAAQAIAAAFgEQAHgEACgIQADgGAAgKQAAgJgDgHQgDgIgFgEQgGgFgIAAQgIAAgGAGg");
	this.shape_357.setTransform(343.9,462.3);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#373535").s().p("AgUAsIAAg7IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJAAgFAFQgFAFgCAJIAAAEIAAAEIAAAtg");
	this.shape_358.setTransform(332.2,460.5);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#373535").s().p("AgWAoQgIgFgGgLQgFgKgBgOQABgNAFgKQAGgKAJgGQAKgFAMgBQAMABAJAFQAKAGAFAKQAGAKAAANQgBAPgGAKQgGALgLAFQgJAEgKAAQgMABgKgGgAgOgcQgGAFgDAIQgDAIABAHQgBAKAEAHQADAIAGAEQAGAEAHAAQAIAAAFgEQAHgEACgIQAEgIABgJQAAgHgEgHQgCgIgFgGQgHgEgJAAQgIAAgGAEg");
	this.shape_359.setTransform(323.9,460.6);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#373535").s().p("AgPBBIAAhKIgMAAIAAgMIAMAAIAAgEQgBgKADgIQACgIAGgFQAEgEAFgCIALgCIAIABIAGACIgCAMIgFgCIgFAAQgIAAgDADQgEAEgBAGQgBAFAAAHIAAAFIAUAAIAAAMIgUAAIAABKg");
	this.shape_360.setTransform(317,458.5);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#373535").s().p("AgWA7QgJgFgEgKQgFgKAAgNQAAgPAFgJQAGgKAIgHQAJgFALAAQAJAAAGAEQAHAEADAFIAAAAIAAg0IAQAAIAABoIAAAMIABALIgOAAIgBgPIgBAAQgDAHgIAFQgHAFgKAAQgLAAgIgGgAgMgIQgGAEgDAHQgDAHAAAKQAAAJADAHQADAIAFAEQAGAEAIAAQAHAAAHgFQAHgEACgKIAAgDIAAgDIAAgPIAAgEIAAgEQgCgGgGgFQgGgGgJAAQgHABgGAEg");
	this.shape_361.setTransform(304.8,458.7);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_362.setTransform(295.5,460.6);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_363.setTransform(288.1,459.5);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#373535").s().p("AgNAoQgKgGgFgKQgFgKAAgNQAAgMAFgLQAGgLALgFQAKgHANAAQAHABAGABIAJADIgDAMIgIgCIgLgCQgKABgGADQgGAFgEAHQgDAIAAAIQAAALAEAGQAEAIAGADQAGAFAJAAIALgBIAIgEIADAMQgDACgHABIgPACQgMAAgKgFg");
	this.shape_364.setTransform(281,460.6);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_365.setTransform(272.4,460.6);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#373535").s().p("AgUAsIAAg7IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJAAgFAFQgFAFgCAJIAAAEIAAAEIAAAtg");
	this.shape_366.setTransform(265.6,460.5);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#373535").s().p("AgUAsIAAg7IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJAAgFAFQgFAFgCAJIAAAEIAAAEIAAAtg");
	this.shape_367.setTransform(259.6,460.5);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#373535").s().p("AgVAoQgKgFgFgLQgGgKAAgOQAAgNAGgKQAGgKAKgGQAKgFAKgBQANABAKAFQAJAGAFAKQAFAKABANQgBAPgGAKQgHALgKAFQgJAEgKAAQgMABgJgGgAgOgcQgGAFgDAIQgCAIgBAHQABAKADAHQADAIAGAEQAGAEAHAAQAHAAAHgEQAFgEAEgIQADgIAAgJQAAgHgCgHQgDgIgFgGQgHgEgJAAQgIAAgGAEg");
	this.shape_368.setTransform(251.3,460.6);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#373535").s().p("AgNAoQgKgGgFgKQgFgKAAgNQAAgMAFgLQAGgLALgFQAKgHANAAQAHABAGABIAJADIgDAMIgIgCIgLgCQgKABgGADQgGAFgEAHQgDAIAAAIQAAALAEAGQAEAIAGADQAGAFAJAAIALgBIAIgEIADAMQgDACgHABIgPACQgMAAgKgFg");
	this.shape_369.setTransform(242.5,460.6);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#373535").s().p("AgjAyIAGgDIAIgFIAHgHQAEgEACgHIABgBIABgCIgBgCIgBgDIgghPIASAAIATA0IACAJIACAHIABAAIACgHIADgKIARgzIARAAIgYA+IgKAZIgJARQgFAIgEAEQgGAFgGACIgIAEg");
	this.shape_370.setTransform(230.3,462.6);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_371.setTransform(223.9,458.6);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_372.setTransform(219.7,458.6);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgGQAAgRAOgGQANgJAYAAIAAgBQABgFgCgEQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFADIgEgKQAGgDAHgDQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAAKIACAKIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGAAQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_373.setTransform(213,460.6);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#373535").s().p("AgNAoQgKgGgFgKQgFgKAAgNQAAgMAFgLQAGgLALgFQAKgHANAAQAHABAGABIAJADIgDAMIgIgCIgLgCQgKABgGADQgGAFgEAHQgDAIAAAIQAAALAEAGQAEAIAGADQAGAFAJAAIALgBIAIgEIADAMQgDACgHABIgPACQgMAAgKgFg");
	this.shape_374.setTransform(204.9,460.6);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgCgDgBgEQABgEACgDQACgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_375.setTransform(198.7,458.9);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_376.setTransform(193.6,459.5);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#373535").s().p("AgQArQgHgBgEgCIADgNIAJAFQAHABAFAAQAIAAAEgDQAFgEgBgFQAAgGgDgDQgEgFgIgCQgMgFgFgFQgGgGAAgIQAAgHADgGQAFgGAGgDQAGgDAJgBQAHABAGABQAFABAEADIgFALIgHgDQgEgBgGAAQgHAAgDADQgEADAAAFQAAAGAEADQAFADAGADQAMAEAGAGQAFAFAAAKQAAAMgIAHQgJAHgOAAQgHAAgGgCg");
	this.shape_377.setTransform(187.1,460.6);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQACgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_378.setTransform(181.4,458.9);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_379.setTransform(176.3,459.5);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgGQAAgRAOgGQANgJAYAAIAAgBQABgFgCgEQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFADIgEgKQAGgDAHgDQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAAKIACAKIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGAAQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_380.setTransform(168.8,460.6);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_381.setTransform(161.7,459.5);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#373535").s().p("AgRArQgGgBgFgCIAFgNIAJAFQAGABAGAAQAHAAAEgDQAEgEABgFQAAgGgFgDQgDgFgIgCQgLgFgHgFQgFgGAAgIQAAgHAEgGQADgGAHgDQAHgDAIgBQAHABAFABQAGABADADIgDALIgIgDQgEgBgGAAQgGAAgEADQgEADAAAFQAAAGAEADQAEADAHADQAMAEAGAGQAGAFAAAKQAAAMgJAHQgIAHgPAAQgHAAgHgCg");
	this.shape_382.setTransform(155.2,460.6);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_383.setTransform(143.3,460.6);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#373535").s().p("AgUAsIAAg7IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJAAgFAFQgFAFgCAJIAAAEIAAAEIAAAtg");
	this.shape_384.setTransform(136.5,460.5);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgGQAAgRAOgGQANgJAYAAIAAgBQABgFgCgEQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFADIgEgKQAGgDAHgDQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAAKIACAKIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGAAQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_385.setTransform(128.5,460.6);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#373535").s().p("AgQArQgHgBgFgCIAFgNIAJAFQAGABAFAAQAIAAAEgDQAEgEAAgFQAAgGgDgDQgEgFgIgCQgLgFgHgFQgFgGAAgIQAAgHADgGQAEgGAHgDQAHgDAIgBQAHABAFABQAGABADADIgDALIgIgDQgEgBgGAAQgHAAgDADQgEADAAAFQAAAGAEADQAFADAGADQAMAEAGAGQAGAFAAAKQAAAMgJAHQgIAHgPAAQgHAAgGgCg");
	this.shape_386.setTransform(117,460.6);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgGQAAgRAOgGQANgJAYAAIAAgBQABgFgCgEQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFADIgEgKQAGgDAHgDQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAAKIACAKIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGAAQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_387.setTransform(108.9,460.6);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_388.setTransform(100.3,460.6);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#373535").s().p("AgUAsIAAg7IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJAAgFAFQgFAFgCAJIAAAEIAAAEIAAAtg");
	this.shape_389.setTransform(93.5,460.5);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgGQAAgRAOgGQANgJAYAAIAAgBQABgFgCgEQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFADIgEgKQAGgDAHgDQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAAKIACAKIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGAAQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_390.setTransform(85.5,460.6);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_391.setTransform(73.1,460.6);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgFgEgDQgFgEgHAAQgHABgFAEQgGAFgCAFIgBADIAAAFIAAA0IgQAAIAAh/IAQAAIAAA2IAAAAIAFgFIAGgGIAIgDIAIgBIAJACQAGABAEAFQAFAEADAHQADAGAAALIAAA0g");
	this.shape_392.setTransform(63.6,458.6);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#373535").s().p("AgHA9IAAhrIglAAIAAgOIBZAAIAAAOIglAAIAABrg");
	this.shape_393.setTransform(54.2,458.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254}]},393).to({state:[{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254}]},207).wait(1));

	// Pic1
	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#292929").s().p("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");
	this.shape_394.setTransform(88.8,403.8);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#373535").p("AGGFDIsLAAIAAqFIMLAAg");
	this.shape_395.setTransform(88.8,403.8);

	this.instance_1 = new lib.Image_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.6,335.5,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.shape_395},{t:this.shape_394}]},393).to({state:[{t:this.instance_1},{t:this.shape_395},{t:this.shape_394}]},207).wait(1));

	// Arrow1
	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#3C3C3C").s().p("ABvDAIB2ivIoDAAIAAghIIDAAIh2ivIAuAAICCC/IiCDAg");
	this.shape_396.setTransform(178.7,403.8);
	this.shape_396._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_396).wait(447).to({_off:false},0).wait(154));

	// Pic2
	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#292929").s().p("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");
	this.shape_397.setTransform(278.6,403.8);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#373535").p("AHpGVIvRAAIAAspIPRAAg");
	this.shape_398.setTransform(278.6,403.8);

	this.instance_2 = new lib.Image_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(193.5,327.2,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.shape_398},{t:this.shape_397}]},452).to({state:[{t:this.instance_2},{t:this.shape_398},{t:this.shape_397}]},148).wait(1));

	// Arrow2
	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#3C3C3C").s().p("ABvDAIB3ivIoEAAIAAghIIEAAIh3ivIAuAAICCC/IiCDAg");
	this.shape_399.setTransform(375.8,403.8);
	this.shape_399._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_399).wait(508).to({_off:false},0).wait(93));

	// Pic3
	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#F2EA32").s().p("AAAAWQgHgEgBgCQgBgCgNgHQgOgHAAAGQABADgGgFQgEgEgNgGQgGgDAEgGIAIgKQAHACAGAKQADAGAXgDQASgCASgGQAKgCAJALIASAWQAGAIgMABIgcAEIgGAAQgMAAgIgEg");
	this.shape_400.setTransform(458.7,417.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#3E3E8A").s().p("AhSBJQgLgfALgVQABgDALgHQAEgCgLgJQgNgJgHgNIgEgLIACgRQADgLARgDQANgCAFgOQACgGAOAOQAMAMADALQACAGAOAHQAXALAOACQAVAFAUgGQAPgFAGgMQACgFAHANQAQAagQAbQgEAHgMAHQgOAHgTABIghABQgOACgRAKQgaASgMAGQgHAEgGAAQgJAAgDgKg");
	this.shape_401.setTransform(459.8,417.5);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#9A3234").s().p("AAWAZIgggHQgYgFgOgFQgPgGAGgCQACAAAHAAQAEABACgFIAHgWQAPAGAZAEQARADAFAJQAEAHADAKQADAGAHABQAKABAEADQAFACgPABIgEAAQgLAAgLgCg");
	this.shape_402.setTransform(484.3,406);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#3D4295").s().p("AAmA3QgRgSgIgGQgMgKgVAGQgJADgbAQQgLAGgBgRQgCgVgGgIQgFgFgRgFQgOgFgFgTIgDgSIAHgIQANgIAZADIA0ABQAVAAACAMQADAJALAAQAQAAARATQAQASADgHQAEgJAPAJQAXANAJAVQAJAUgMAAIgjALQgLADgJAAQgNAAgIgGg");
	this.shape_403.setTransform(485.7,406.8);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#292929").s().p("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");
	this.shape_404.setTransform(473,405.5);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#373535").p("AHpGVIvRAAIAAspIPRAAg");
	this.shape_405.setTransform(473,405.5);

	this.instance_3 = new lib.Image_1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(388,328.8,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400}]},516).to({state:[{t:this.instance_3},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400}]},84).wait(1));

	// Arrow3
	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#3C3C3C").s().p("ABvDAIB2ivIoDAAIAAghIIDAAIh2ivIAuAAICCC/IiCDAg");
	this.shape_406.setTransform(573.2,403.8);
	this.shape_406._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_406).wait(572).to({_off:false},0).wait(29));

	// Pic4
	this.instance_4 = new lib.Image();
	this.instance_4.parent = this;
	this.instance_4.setTransform(610.9,343,0.083,0.083);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(578).to({_off:false},0).wait(23));

	// 5
	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#373535").s().p("AgwByQgPgEgJgGIAIgXQAIAEANAEQANAEAQAAQAOAAANgGQAMgGAIgMQAIgKAAgRQAAgWgQgPQgRgNgiAAIgSABIgOABIAPhwIBvAAIAAAbIhYAAIgJA7IAIAAIALAAQANAAAMACQANADALAHQAOAHAKAPQAJAPABAWQAAAXgMASQgLASgTALQgUAJgYABQgUAAgPgFg");
	this.shape_407.setTransform(11.5,23.5);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#009900").s().p("AgtB2QgQgLgKgTQgKgUAAgbQAAgdALgUQAKgVASgLQASgLAVAAQATAAANAIQAOAHAGALIAAAAIAAhoIAgAAIAADSIAAAYIABAVIgcAAIgCgeIAAAAQgIAOgPAKQgPAJgVABQgVgBgRgLgAgZgSQgMAJgGAOQgGAPAAAUQAAASAGAOQAFAPAMAIQALAJAQAAQARAAAMgKQANgKAFgSIABgGIAAgHIAAgfIAAgGIgBgHQgEgOgMgLQgMgKgSgBQgPABgMAIg");
	this.shape_408.setTransform(122.4,142.2);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#009900").s().p("AgkBQQgTgLgLgUQgKgUAAgaQABgZAJgWQAKgVASgMQATgMAYgBQAVABAOAHQAOAJAIAMQAIANAEAOQADAOAAAMIAAAIIgBAGIh6AAQABAVAIANQAIAOAOAGQANAGAPAAQARAAAMgCQALgDAIgEIAGAXQgIAEgPADQgPAEgUAAQgaAAgTgLgAAvgQQAAgKgEgMQgEgMgJgIQgKgJgRAAQgQAAgKAIQgKAIgFAMQgGAMgBALIBcAAIAAAAg");
	this.shape_409.setTransform(103.9,146.1);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#009900").s().p("AAqCAIAAhkQAAgOgDgMQgFgLgIgHQgJgHgPAAQgPAAgKAJQgMAJgEANIgCAHIAAAIIAABpIggAAIAAj/IAgAAIAABtIAAAAQAEgHAGgGQAGgFAHgEQAHgEAIgDQAIgCAIAAQAJAAALADQAKADAJAIQAKAJAGAOQAGAOAAAWIAABog");
	this.shape_410.setTransform(84.9,142);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#009900").s().p("AgiBYQgMgEgKgFIAIgYQAIAFALADQALAEAMAAQAQAAAIgHQAJgHgBgLQAAgMgHgHQgIgHgQgGQgXgJgLgMQgMgMAAgQQAAgOAHgMQAIgLANgHQAOgHARAAQANAAAMADQALAEAHAEIgIAXIgOgHQgKgDgLAAQgNAAgIAHQgHAHAAAKQgBAKAJAHQAHAGAQAGQAXAJALALQAMAMAAAUQAAAXgRAOQgRAOgeABQgOAAgNgDg");
	this.shape_411.setTransform(67.7,146.1);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#009900").s().p("AgOB6IAAitIAeAAIAACtgAgOhXQgEgFgBgJQAAgIAGgFQAFgHAIAAQAJAAAFAHQAGAFAAAIQAAAJgGAFQgFAGgJAAQgIAAgGgGg");
	this.shape_412.setTransform(56.4,142.7);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#009900").s().p("AArBZIAAhkQAAgOgEgLQgEgLgIgIQgJgGgPAAQgPAAgLAJQgLAJgFANIgBAIIgBAIIAABnIgfAAIAAh+IgBgZIgBgWIAcAAIACAdIABAAQAEgIAIgIQAIgHALgFQAMgFANAAQAKAAAKADQALAEAJAHQAJAJAHAPQAGAOAAAWIAABng");
	this.shape_413.setTransform(42.1,145.9);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#009900").s().p("AgPB6IAAitIAfAAIAACtgAgOhXQgEgFAAgJQAAgIAFgFQAFgHAIAAQAJAAAGAHQAEAFAAAIQAAAJgEAFQgGAGgJAAQgIAAgGgGg");
	this.shape_414.setTransform(28,142.7);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#009900").s().p("AhAB5IAAjxICBAAIAAAaIhiAAIAABRIBbAAIAAAYIhbAAIAABug");
	this.shape_415.setTransform(16.4,142.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_407}]}).to({state:[{t:this.shape_407},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408}]},600).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400.8,248.8,761,166.1);
// library properties:
lib.properties = {
	width: 800,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Panel5_atlas_.png", id:"Panel5_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;