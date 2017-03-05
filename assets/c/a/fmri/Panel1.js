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



// stage content:
(lib.Panel1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Protons in molecules spin around their axis
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgUAzQgHgCgFgDIAEgOQAEADAHACQAGADAIAAQAJAAAEgFQAGgEgBgGQAAgHgEgEQgEgFgJgDQgOgFgHgGQgGgIAAgJQAAgIAEgHQAEgHAIgEQAIgEAKAAQAHAAAHACIALAEIgFAOIgJgEQgFgCgGAAQgIAAgFAEQgDAEAAAGQAAAGAEAEQAEAEAKADQANAFAGAGQAIAIgBALQAAANgJAIQgLAJgQAAQgJAAgIgCg");
	this.shape.setTransform(121.8,104.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AgIBHIAAhlIARAAIAABlgAgIgyQgCgEAAgEQgBgFAEgEQADgDAEAAQAGAAADADQACAEAAAFQAAAEgCAEQgEADgFAAQgEAAgEgDg");
	this.shape_1.setTransform(115.2,102.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AAZAzIgOgXIgGgJIgFgJIAAAAIgEAJIgGAJIgPAXIgVAAIAlgzIgjgyIAVAAIAOAWIAGAIIAEAJIAAAAIAFgJIAGgIIANgWIAUAAIgiAxIAjA0g");
	this.shape_2.setTransform(107.8,104.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgaAxQgGgFgEgGQgDgHAAgHQAAgTAPgIQAQgKAcAAIAAgCIgBgKQgBgFgGgEQgEgEgJAAQgIAAgHACQgGACgGADIgEgMQAGgEAIgDQAKgCAIAAQAQAAAIAGQAJAGACAKQAEAJgBAKIAAAlIABANIACAMIgRAAIgCgNIgBAAQgEAGgIAEQgHAFgLAAQgKAAgHgEgAABAAQgJACgHAFQgGAFAAAKQAAAJAFAEQAFAEAIAAQAIAAAGgFQAHgFACgHIAAgDIABgCIAAgRQgLAAgJAAg");
	this.shape_3.setTransform(97.7,104.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AgXA0IAAhFIgBgRIAAgOIAQAAIABAUIAAAAQAEgLAGgGQAIgGAKAAIACAAIACAAIAAASIgDgBIgCAAQgKABgHAGQgFAHgDAKIAAAEIAAAFIAAA1g");
	this.shape_4.setTransform(85.6,104.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgIBHIAAhlIARAAIAABlgAgIgyQgCgEAAgEQgBgFAEgEQADgDAEAAQAGAAADADQACAEAAAFQAAAEgCAEQgEADgFAAQgEAAgEgDg");
	this.shape_5.setTransform(79.2,102.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgKAAgQQAAgOAGgNQAGgMAKgIQALgGAOgBQAMABAIAEQAJAFAEAHQAFAHACAJQACAIAAAHIAAAEIgBAEIhGAAQAAAMAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgEIADAOIgNAEQgJACgMAAQgPAAgLgHgAAbgJQAAgGgCgGQgCgIgGgFQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAHgBAGIA1AAIAAAAg");
	this.shape_6.setTransform(71.5,104.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AAZBKIAAg6QAAgIgDgHQgCgGgFgEQgFgEgJAAQgIAAgGAFQgHAGgDAHIgBADIAAAGIAAA8IgSAAIAAiTIASAAIAAA/IAGgIIAIgFIAJgEQADgCAGABQAFAAAGABQAGACAFAFQAGAFADAIQAEAIAAANIAAA8g");
	this.shape_7.setTransform(60.4,101.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AABBAQgEgBgDgEQgEgEgCgHQgBgGAAgJIAAg3IgQAAIAAgOIAQAAIAAgZIARgEIAAAdIAaAAIAAAOIgaAAIAAA2QAAAJADAFQADAGAHAAIAHgBIAEgBIABAOIgHACIgJABQgHAAgFgDg");
	this.shape_8.setTransform(51,102.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AgaBFQgJgGgGgMQgGgMAAgPQAAgRAHgLQAGgMAJgHQALgHANAAQAKABAIAEQAIAFADAGIAAAAIAAg9IATAAIAAB6IABAOIAAAMIgQAAIgBgRIgBAAQgFAIgIAGQgJAFgLABQgNgBgKgGgAgOgKQgHAFgEAIQgDAJgBALQABAKADAJQAEAIAGAGQAHAFAIAAQAKAAAHgGQAIgGADgKIAAgEIAAgEIAAgSIAAgEIAAgEQgCgIgIgGQgGgGgLAAQgJAAgGAFg");
	this.shape_9.setTransform(332.4,72.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AAZA0IAAg6QAAgIgCgGQgCgHgGgFQgFgDgIAAQgJAAgGAFQgHAFgCAJIgBADIAAAFIAAA8IgTAAIAAhJIAAgOIgBgOIARAAIABARIAAAAQADgFAEgEQAFgFAHgCQAGgDAIAAQAFAAAGACQAGACAGAEQAFAFAEAJQADAJABAMIAAA8g");
	this.shape_10.setTransform(320.9,74.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgXAwQgIgEgGgJQgFgKAAgRIAAg7IASAAIAAA3QAAAOAFAKQAGAIAMABQAFgBAFgCQAFgCADgEQAEgEACgEIABgFIAAgFIAAg9IATAAIAABJIAAAPIAAAMIgQAAIgBgQIAAAAIgHAIQgFAFgGACQgHADgIABQgIAAgIgEg");
	this.shape_11.setTransform(309.3,74.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgZAvQgLgHgGgLQgHgMAAgQQAAgQAHgMQAHgMALgHQALgGAOAAQAOAAALAHQALAGAGAMQAGALABAQQgBASgHAMQgIAMgLAFQgMAGgLAAQgOAAgLgGgAgRggQgHAFgDAJQgDAJAAAJQAAALAEAJQAEAJAHAFQAHAFAIAAQAJAAAHgFQAHgFAEgJQAEgJAAgLQAAgIgDgJQgEgJgGgGQgHgGgLAAQgKAAgHAGg");
	this.shape_12.setTransform(297.8,74.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgXA0IAAhFIgBgRIAAgPIAPAAIACAVIAAAAQAEgLAHgGQAHgGAKAAIACAAIACAAIAAASIgCgBIgDAAQgKABgHAGQgFAGgCALIgBAEIAAAFIAAA1g");
	this.shape_13.setTransform(289.4,74.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgaAxQgHgFgDgGQgEgHABgHQAAgTAPgIQAQgKAcAAIAAgCIgBgKQgBgFgFgEQgGgEgIAAQgIAAgHACQgGACgGADIgEgMQAGgEAIgDQAKgCAIAAQAQAAAIAGQAJAGACAKQAEAJgBAKIAAAlIABANIACAMIgRAAIgCgNIAAAAQgFAGgIAEQgHAFgLAAQgKAAgHgEgAABAAQgJACgHAFQgGAFAAAKQAAAJAFAEQAFAEAIAAQAIAAAGgFQAHgFACgHIAAgDIABgCIAAgRQgLAAgJAAg");
	this.shape_14.setTransform(280.1,74.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AAZA0IAAg6QAAgIgCgGQgCgHgGgFQgFgDgIAAQgJAAgGAFQgHAFgCAJIgBADIAAAFIAAA8IgTAAIAAhJIAAgOIgBgOIARAAIABARIAAAAQADgFAEgEQAFgFAHgCQAGgDAIAAQAFAAAGACQAGACAGAEQAFAFAEAJQADAJABAMIAAA8g");
	this.shape_15.setTransform(265,74.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AgIBHIAAhlIASAAIAABlgAgHgyQgDgEgBgEQAAgFAEgEQADgDAEAAQAFAAAEADQACAEABAFQgBAEgCAEQgEADgFAAQgFAAgCgDg");
	this.shape_16.setTransform(256.7,72.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgvBJIAAhtIAAgSIgBgPIARAAIABARIAAAAQAGgJAJgFQAJgGALAAQANAAAKAHQAJAGAFAMQAHALgBAQQAAASgGALQgHAMgKAGQgLAHgMAAQgJgBgIgEQgIgEgFgHIgBAAIAAA3gAgQgzQgIAGgDALIgBAEIgBADIAAASIABAEIABADQACAJAIAGQAHAGAKAAQAJAAAHgFQAGgFAFgJQADgHAAgMQAAgKgDgJQgEgJgGgFQgIgFgJAAQgJAAgHAGg");
	this.shape_17.setTransform(248.6,76.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AgUAzQgHgCgFgDIAEgOQAFADAGACQAHACAGAAQAKABAFgFQAEgEAAgGQABgHgFgEQgEgFgKgDQgNgFgHgHQgGgHgBgJQABgJAEgGQAEgHAIgEQAIgEAJAAQAJAAAGACIALAFIgFANIgJgEQgEgCgIAAQgHAAgEAEQgFAEAAAGQABAGAEADQAFAEAIAEQAOAFAHAGQAGAIAAALQAAANgKAIQgKAJgRAAQgIAAgIgCg");
	this.shape_18.setTransform(238.2,74.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgTAzQgIgCgGgDIAGgOQAEADAGACQAHACAGAAQAKABAEgFQAFgEABgGQAAgHgFgEQgFgFgIgDQgOgFgHgHQgHgHABgJQgBgJAFgGQAEgHAIgEQAIgEAJAAQAIAAAHACIAKAFIgEANIgIgEQgGgCgHAAQgHAAgEAEQgEAEAAAGQgBAGAFADQAEAEAKAEQANAFAHAGQAGAIABALQgBANgJAIQgKAJgSAAQgIAAgHgCg");
	this.shape_19.setTransform(225.4,74.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgLAAgPQAAgOAGgNQAGgMAKgIQALgHAOAAQAMABAIAEQAJAFAEAHQAFAHACAJQACAHAAAIIAAAEIgBADIhGAAQAAANAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgJQAAgGgCgGQgCgHgGgGQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAGgBAHIA1AAIAAAAg");
	this.shape_20.setTransform(216,74.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgIBKIAAiTIARAAIAACTg");
	this.shape_21.setTransform(208.3,72.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgXAwQgIgEgGgJQgFgKAAgRIAAg7IASAAIAAA3QAAAOAFAKQAGAIAMABQAFgBAFgCQAFgCADgEQAEgEACgEIABgFIAAgFIAAg9IATAAIAABJIAAAPIAAAMIgQAAIgBgQIAAAAIgHAIQgFAFgGACQgHADgIABQgIAAgIgEg");
	this.shape_22.setTransform(200,74.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AgPAuQgLgGgGgMQgHgLAAgQQAAgPAHgMQAGgMAMgHQANgHAPAAQAJAAAGACQAHABAEACIgEAPIgIgEQgGgBgIAAQgLAAgHAFQgIAFgEAJQgFAIAAAKQABAMAFAJQAEAIAIAFQAHAEAKAAQAHAAAHgCIAJgDIADAOIgLAEQgIACgKAAQgPAAgLgHg");
	this.shape_23.setTransform(189.7,74.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgLAAgPQAAgOAGgNQAGgMAKgIQALgHAOAAQAMABAIAEQAJAFAEAHQAFAHACAJQACAHAAAIIAAAEIgBADIhGAAQAAANAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgJQAAgGgCgGQgCgHgGgGQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAGgBAHIA1AAIAAAAg");
	this.shape_24.setTransform(179.6,74.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgIBKIAAiTIARAAIAACTg");
	this.shape_25.setTransform(171.9,72.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AgZAvQgLgHgGgLQgHgMAAgQQAAgQAHgMQAHgMALgHQALgGAOAAQAOAAALAHQALAGAGAMQAGALABAQQgBASgHAMQgIAMgLAFQgMAGgLAAQgOAAgLgGgAgRggQgHAFgDAJQgDAJAAAJQAAALAEAJQAEAJAHAFQAHAFAIAAQAJAAAHgFQAHgFAEgJQAEgJAAgLQAAgIgDgJQgEgJgGgGQgHgGgLAAQgKAAgHAGg");
	this.shape_26.setTransform(163.6,74.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AA3A0IAAg5QAAgPgFgHQgGgJgLAAQgIABgGAEQgGAFgCAHIgBAEIgBAFIAAA+IgRAAIAAg8QABgMgGgIQgFgHgLgBQgFAAgFADQgEADgEAEIgFAJIgBAEIAAAFIAAA8IgSAAIAAhJIgBgOIAAgOIAQAAIABARIABAAIAHgKQAEgEAGgCQAGgDAJAAQAKABAIAFQAGAGAEAIIAFgHIAGgGIAKgFQAFgCAIAAQAGAAAIAEQAIADAGAKQAFAJAAASIAAA7g");
	this.shape_27.setTransform(149.1,74.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AAZA0IAAg6QAAgIgCgGQgCgHgGgFQgFgDgIAAQgJAAgGAFQgHAFgCAJIgBADIAAAFIAAA8IgTAAIAAhJIAAgOIgBgOIARAAIABARIAAAAQADgFAEgEQAFgFAHgCQAGgDAIAAQAFAAAGACQAGACAGAEQAFAFAEAJQADAJABAMIAAA8g");
	this.shape_28.setTransform(130.1,74.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgIBHIAAhlIASAAIAABlgAgHgyQgDgEAAgEQAAgFADgEQADgDAEAAQAGAAADADQACAEAAAFQAAAEgCAEQgEADgFAAQgFAAgCgDg");
	this.shape_29.setTransform(121.8,72.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgTAzQgIgCgGgDIAGgOQADADAHACQAGACAIAAQAJABAEgFQAGgEAAgGQgBgHgEgEQgFgFgIgDQgOgFgHgHQgHgHABgJQgBgJAFgGQAEgHAIgEQAIgEAKAAQAHAAAHACIAKAFIgEANIgIgEQgFgCgHAAQgIAAgFAEQgDAEAAAGQgBAGAFADQAEAEAKAEQANAFAHAGQAHAIAAALQgBANgJAIQgLAJgQAAQgJAAgHgCg");
	this.shape_30.setTransform(110.8,74.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AAZA0IAAg6QAAgIgCgGQgCgHgGgFQgFgDgIAAQgJAAgGAFQgHAFgCAJIgBADIAAAFIAAA8IgTAAIAAhJIAAgOIgBgOIARAAIABARIAAAAQADgFAEgEQAFgFAHgCQAGgDAIAAQAFAAAGACQAGACAGAEQAFAFAEAJQADAJABAMIAAA8g");
	this.shape_31.setTransform(100.8,74.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AgZAvQgLgHgGgLQgHgMAAgQQAAgQAHgMQAHgMALgHQALgGAOAAQAOAAALAHQALAGAGAMQAGALABAQQgBASgHAMQgIAMgLAFQgMAGgLAAQgOAAgLgGgAgRggQgHAFgDAJQgDAJAAAJQAAALAEAJQAEAJAHAFQAHAFAIAAQAJAAAHgFQAHgFAEgJQAEgJAAgLQAAgIgDgJQgEgJgGgGQgHgGgLAAQgKAAgHAGg");
	this.shape_32.setTransform(89.2,74.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AABBAQgEgCgDgDQgEgFgCgGQgCgHABgIIAAg3IgQAAIAAgOIAQAAIAAgZIARgEIAAAdIAaAAIAAAOIgaAAIAAA2QAAAJACAFQAEAGAHAAIAHgBIAEgBIABAOIgHACIgJAAQgHAAgFgCg");
	this.shape_33.setTransform(80,73.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgZAvQgLgHgGgLQgHgMAAgQQAAgQAHgMQAHgMALgHQALgGAOAAQAOAAALAHQALAGAGAMQAGALABAQQgBASgHAMQgIAMgLAFQgMAGgLAAQgOAAgLgGgAgRggQgHAFgDAJQgDAJAAAJQAAALAEAJQAEAJAHAFQAHAFAIAAQAJAAAHgFQAHgFAEgJQAEgJAAgLQAAgIgDgJQgEgJgGgGQgHgGgLAAQgKAAgHAGg");
	this.shape_34.setTransform(70.8,74.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AgYA0IAAhFIAAgRIgBgPIARAAIABAVIAAAAQAEgLAGgGQAIgGAJAAIADAAIADAAIAAASIgEgBIgDAAQgKABgGAGQgGAGgCALIAAAEIgBAFIAAA1g");
	this.shape_35.setTransform(62.4,74.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgqBHIAAiLIAPgBIAUgBQAMAAAKADQAKADAGAFQAGAGADAHQADAIAAAJQAAAKgCAHQgDAIgGAEQgHAIgLAEQgLAEgNAAIgIAAIgGgBIAAA4gAgSg3IgGABIAAA2IAGABIAJAAQAPAAAKgHQAJgHAAgPQAAgOgJgHQgJgHgOAAIgLABg");
	this.shape_36.setTransform(53.6,72.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(406));

	// LargeProton
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],44.2,-50.8,0,44.2,-50.8,134.1).s().p("AiHLqQiRgah+hQQh9hQhWh4QhZh9ghiWQgiiXAciVQAaiRBQh+QBQh9B4hWQB9hZCWghQCXgiCVAcQCSAaB9BQQB9BQBWB4QBZB9AhCWQAiCXgcCVQgaCShQB9QhPB9h5BWQh8BZiXAhQhSAThTAAQhDAAhEgNg");
	this.shape_37.setTransform(179.8,212);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#3C489A").ss(5).p("Ar2L3IXt3t");
	this.shape_38.setTransform(179.8,212);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38,p:{rotation:0}},{t:this.shape_37,p:{rotation:0,y:212}}]}).to({state:[{t:this.shape_38,p:{rotation:1}},{t:this.shape_37,p:{rotation:1,y:212.1}}]},2).to({state:[{t:this.shape_38,p:{rotation:0}},{t:this.shape_37,p:{rotation:0,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:-1}},{t:this.shape_37,p:{rotation:-1,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:0}},{t:this.shape_37,p:{rotation:0,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:1}},{t:this.shape_37,p:{rotation:1,y:212.1}}]},2).to({state:[{t:this.shape_38,p:{rotation:0}},{t:this.shape_37,p:{rotation:0,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:-1}},{t:this.shape_37,p:{rotation:-1,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:0}},{t:this.shape_37,p:{rotation:0,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:1}},{t:this.shape_37,p:{rotation:1,y:212.1}}]},2).to({state:[{t:this.shape_38,p:{rotation:0}},{t:this.shape_37,p:{rotation:0,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:-1}},{t:this.shape_37,p:{rotation:-1,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:0}},{t:this.shape_37,p:{rotation:0,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:1}},{t:this.shape_37,p:{rotation:1,y:212.1}}]},2).to({state:[{t:this.shape_38,p:{rotation:0}},{t:this.shape_37,p:{rotation:0,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:-1}},{t:this.shape_37,p:{rotation:-1,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:0}},{t:this.shape_37,p:{rotation:0,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:1}},{t:this.shape_37,p:{rotation:1,y:212.1}}]},2).to({state:[{t:this.shape_38,p:{rotation:0}},{t:this.shape_37,p:{rotation:0,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:-1}},{t:this.shape_37,p:{rotation:-1,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:0}},{t:this.shape_37,p:{rotation:0,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:1}},{t:this.shape_37,p:{rotation:1,y:212.1}}]},2).to({state:[{t:this.shape_38,p:{rotation:0}},{t:this.shape_37,p:{rotation:0,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:-1}},{t:this.shape_37,p:{rotation:-1,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:0}},{t:this.shape_37,p:{rotation:0,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:1}},{t:this.shape_37,p:{rotation:1,y:212.1}}]},2).to({state:[{t:this.shape_38,p:{rotation:0}},{t:this.shape_37,p:{rotation:0,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:-1}},{t:this.shape_37,p:{rotation:-1,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:0}},{t:this.shape_37,p:{rotation:0,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:1}},{t:this.shape_37,p:{rotation:1,y:212.1}}]},2).to({state:[{t:this.shape_38,p:{rotation:0}},{t:this.shape_37,p:{rotation:0,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:-1}},{t:this.shape_37,p:{rotation:-1,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:0}},{t:this.shape_37,p:{rotation:0,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:1}},{t:this.shape_37,p:{rotation:1,y:212.1}}]},2).to({state:[{t:this.shape_38,p:{rotation:0}},{t:this.shape_37,p:{rotation:0,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:-1}},{t:this.shape_37,p:{rotation:-1,y:212}}]},2).to({state:[{t:this.shape_38,p:{rotation:0}},{t:this.shape_37,p:{rotation:0,y:212}}]},2).wait(334));

	// Arrow
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#38467C").s().p("Ag0g4IBeAlIALBMg");
	this.shape_39.setTransform(217.4,130.6,0.99,0.99);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#38467C").s().p("AEZGTQhpgdiNhrQiNhrh4iNIAfgDQBnB6B6BdQB7BdBaAYQBtAeAGhSQAGhRhkiQQhliPiUh7QiUh8htgdQhcgZgTA6QgTA5A/ByIgwgXQgkg/gNgzQgNgzAKggQAKghAhgKQAigKA0AOQB+AiCrCPQCsCOB0CmQB0CngHBeQgFBFhFAAQgZAAgigJg");
	this.shape_40.setTransform(250.9,143.8,0.99,0.99);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39}]}).wait(406));

	// Inside an fMRI machine, powerful magnets (3 teslas or 50,000 times the field of each) are trained on the brain. 
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgIAJQgDgDAAgGQAAgFADgEQADgDAFAAQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAQgFAAgDgEg");
	this.shape_41.setTransform(234.7,382.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AAZA0IAAg5QAAgJgCgGQgCgIgGgDQgFgFgIAAQgJABgGAFQgHAGgCAHIgBAFIAAAEIAAA8IgTAAIAAhJIAAgPIgBgMIARAAIABARIAAAAQADgGAEgEQAFgEAHgDQAGgDAIAAQAFAAAGACQAGACAGAEQAFAGAEAIQADAIABANIAAA8g");
	this.shape_42.setTransform(226.5,378.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgIBHIAAhlIASAAIAABlgAgHgyQgEgEAAgEQABgFADgEQADgDAEAAQAFAAADADQAEAEAAAFQAAAEgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_43.setTransform(218.3,376.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AgaAxQgHgFgDgGQgDgHAAgHQAAgTAPgIQAQgKAdAAIAAgCIgCgKQgCgFgEgEQgGgEgJAAQgHAAgGACQgIACgFADIgEgMQAGgEAIgDQAJgCAJAAQAPAAAJAGQAIAGADAKQAEAJAAAKIAAAlIAAANIACAMIgSAAIgBgNIAAAAQgFAGgIAEQgHAFgLAAQgKAAgHgEgAABAAQgJACgGAFQgHAFAAAKQAAAJAFAEQAFAEAIAAQAIAAAHgFQAFgFADgHIABgDIAAgCIAAgRQgLAAgJAAg");
	this.shape_44.setTransform(210.5,378.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AgXA0IAAhFIgBgRIAAgOIAPAAIACAUIAAAAQAEgLAHgGQAHgGAKAAIACABIACAAIAAARIgDgBIgCAAQgKABgHAGQgFAGgCALIgBAFIAAAEIAAA1g");
	this.shape_45.setTransform(203,378.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AgQBHQgIgFgGgKIAAAAIgBARIgQAAIAAgMIABgOIAAh6IARAAIAABAIABAAQAFgJAJgEQAIgGAMAAQAMAAAKAHQAKAGAFAMQAGALAAAPQgBASgGAMQgHANgKAFQgKAHgMAAQgKAAgJgFgAgRgJQgHAGgEAKIAAADIgBAEIAAATIABADIAAADQAEAKAGAGQAIAGAKAAQAOAAAIgLQAIgKAAgSQAAgKgEgJQgDgIgHgFQgHgFgJAAQgJAAgIAGg");
	this.shape_46.setTransform(193.3,376.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgVAvQgLgHgGgLQgGgMAAgPQAAgOAGgNQAGgMAKgIQALgGAOgBQAMAAAIAFQAJAEAEAIQAFAIACAHQACAJAAAHIAAAEIgBAEIhGAAQAAAMAFAHQAFAIAIAEQAHAEAJAAQAJAAAHgBIAMgFIADAOIgNAEQgJACgMAAQgPAAgLgGgAAbgJQAAgGgCgGQgCgIgGgEQgFgGgLABQgIgBgGAGQgGAEgDAHQgDAHgBAGIA1AAIAAAAg");
	this.shape_47.setTransform(177.3,378.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AAZBLIAAg7QAAgIgDgHQgCgGgFgEQgFgEgJAAQgIAAgGAFQgHAGgDAHIgBADIAAAGIAAA9IgSAAIAAiUIASAAIAAA/IAGgIIAIgFIAJgEQADgBAGAAQAFgBAGACQAGACAFAFQAGAFADAIQAEAIAAANIAAA9g");
	this.shape_48.setTransform(166.3,376.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AABBBQgEgDgDgDQgEgEgCgHQgBgGAAgKIAAg2IgQAAIAAgOIAQAAIAAgYIARgGIAAAeIAaAAIAAAOIgaAAIAAA2QAAAJADAGQADAEAHAAIAHAAIAEgBIABAOIgHACIgJABQgHAAgFgCg");
	this.shape_49.setTransform(156.9,377.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AAZA0IAAg5QAAgJgCgGQgCgIgGgDQgFgFgIAAQgJABgGAFQgHAGgCAHIgBAFIAAAEIAAA8IgTAAIAAhJIAAgPIgBgMIARAAIABARIAAAAQADgGAEgEQAFgEAHgDQAGgDAIAAQAFAAAGACQAGACAGAEQAFAGAEAIQADAIABANIAAA8g");
	this.shape_50.setTransform(143.2,378.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AgZAvQgLgHgGgLQgHgMAAgQQAAgQAHgMQAHgMALgHQALgGAOAAQAOAAALAHQALAGAGAMQAGALABAQQgBASgHAMQgIAMgLAFQgMAGgLAAQgOAAgLgGgAgRggQgHAFgDAJQgDAJAAAJQAAALAEAJQAEAJAHAFQAHAFAIAAQAJAAAHgFQAHgFAEgJQAEgJAAgLQAAgIgDgJQgEgJgGgGQgHgGgLAAQgKAAgHAGg");
	this.shape_51.setTransform(131.6,378.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AgaBFQgJgGgGgMQgGgMAAgPQAAgRAGgLQAGgMAKgHQALgHANAAQAKABAIAEQAHAFAEAGIAAAAIAAg9IATAAIAAB6IAAAOIABAMIgRAAIgBgRIAAAAQgFAIgIAGQgJAFgMABQgMgBgKgGgAgPgKQgGAFgEAIQgDAJAAALQgBAKAEAJQADAIAHAGQAGAFAJAAQAKAAAIgGQAHgGADgKIAAgEIAAgEIAAgSIAAgEIAAgEQgDgIgHgGQgHgGgKAAQgIAAgIAFg");
	this.shape_52.setTransform(115.2,376.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AgVAvQgLgHgGgLQgGgMAAgPQAAgOAGgNQAGgMAKgIQALgGAOgBQAMAAAIAFQAJAEAEAIQAFAIACAHQACAJAAAHIAAAEIgBAEIhGAAQAAAMAFAHQAFAIAIAEQAHAEAJAAQAJAAAHgBIAMgFIADAOIgNAEQgJACgMAAQgPAAgLgGgAAbgJQAAgGgCgGQgCgIgGgEQgFgGgLABQgIgBgGAGQgGAEgDAHQgDAHgBAGIA1AAIAAAAg");
	this.shape_53.setTransform(104.3,378.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AAZA0IAAg5QAAgJgCgGQgCgIgGgDQgFgFgIAAQgJABgGAFQgHAGgCAHIgBAFIAAAEIAAA8IgTAAIAAhJIAAgPIgBgMIARAAIABARIAAAAQADgGAEgEQAFgEAHgDQAGgDAIAAQAFAAAGACQAGACAGAEQAFAGAEAIQADAIABANIAAA8g");
	this.shape_54.setTransform(93.2,378.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgIBHIAAhlIARAAIAABlgAgIgyQgDgEAAgEQABgFADgEQADgDAEAAQAFAAADADQAEAEAAAFQAAAEgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_55.setTransform(85,376.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgaAxQgHgFgDgGQgEgHABgHQAAgTAPgIQAQgKAdAAIAAgCIgCgKQgBgFgFgEQgGgEgJAAQgHAAgHACQgGACgGADIgEgMQAGgEAIgDQAKgCAIAAQAQAAAIAGQAJAGACAKQAEAJAAAKIAAAlIAAANIACAMIgRAAIgCgNIAAAAQgFAGgIAEQgHAFgLAAQgKAAgHgEgAABAAQgJACgGAFQgHAFAAAKQAAAJAFAEQAFAEAIAAQAIAAAHgFQAGgFACgHIABgDIAAgCIAAgRQgKAAgKAAg");
	this.shape_56.setTransform(77.2,378.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AgXA0IAAhFIgBgRIAAgOIAPAAIABAUIABAAQAEgLAHgGQAHgGAKAAIACABIACAAIAAARIgCgBIgDAAQgKABgHAGQgFAGgCALIgBAFIAAAEIAAA1g");
	this.shape_57.setTransform(69.7,378.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AABBBQgEgDgDgDQgEgEgCgHQgCgGABgKIAAg2IgQAAIAAgOIAQAAIAAgYIARgGIAAAeIAaAAIAAAOIgaAAIAAA2QAAAJACAGQAEAEAHAAIAHAAIAEgBIABAOIgHACIgJABQgHAAgFgCg");
	this.shape_58.setTransform(62.1,377.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgVAvQgLgHgGgLQgGgMAAgPQAAgOAGgNQAGgMAKgIQALgGAOgBQAMAAAIAFQAJAEAEAIQAFAIACAHQACAJAAAHIAAAEIgBAEIhGAAQAAAMAFAHQAFAIAIAEQAHAEAJAAQAJAAAHgBIAMgFIADAOIgNAEQgJACgMAAQgPAAgLgGgAAbgJQAAgGgCgGQgCgIgGgEQgFgGgLABQgIgBgGAGQgGAEgDAHQgDAHgBAGIA1AAIAAAAg");
	this.shape_59.setTransform(49,378.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgYA0IAAhFIAAgRIgBgOIAQAAIABAUIABAAQAEgLAHgGQAHgGAJAAIADABIACAAIAAARIgCgBIgEAAQgJABgHAGQgFAGgCALIgBAFIgBAEIAAA1g");
	this.shape_60.setTransform(41.1,378.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AgaAxQgHgFgDgGQgEgHAAgHQAAgTAQgIQAQgKAcAAIAAgCIgBgKQgBgFgGgEQgFgEgIAAQgIAAgHACQgGACgGADIgEgMQAGgEAJgDQAIgCAJAAQAPAAAJAGQAJAGADAKQADAJgBAKIAAAlIABANIABAMIgRAAIgBgNIgBAAQgEAGgHAEQgIAFgKAAQgLAAgHgEgAABAAQgJACgHAFQgGAFAAAKQAAAJAFAEQAFAEAHAAQAJAAAGgFQAGgFADgHIAAgDIABgCIAAgRQgLAAgJAAg");
	this.shape_61.setTransform(31.8,378.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("AgUBWQALgQAIgVQAGgVAAgcQAAgbgGgVQgHgVgMgQIAPAAQAFAJAGAMQAHAMAEAQQAEAQAAAUQAAAUgEAQQgEAQgHANQgGAMgFAJg");
	this.shape_62.setTransform(382.2,348.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#373535").s().p("AAZBKIAAg6QAAgIgDgHQgCgFgFgFQgFgEgJAAQgIAAgGAFQgHAFgDAIIgBAEIAAAFIAAA8IgSAAIAAiTIASAAIAAA/IAGgIIAIgFIAJgEQADgCAGABQAFAAAGABQAGADAFAEQAGAFADAIQAEAIAAANIAAA8g");
	this.shape_63.setTransform(373.9,347);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#373535").s().p("AgPAuQgMgGgFgMQgHgLAAgQQAAgPAHgMQAHgMAMgHQAMgHAQAAQAIAAAHACQAGABAEACIgEAPIgJgEQgFgBgHAAQgMAAgHAFQgIAFgEAJQgEAIAAAKQAAAMAEAJQAFAIAIAFQAHAEAKAAQAIAAAFgCIAJgDIAEAOIgMAEQgHACgLAAQgOAAgLgHg");
	this.shape_64.setTransform(363.4,349.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#373535").s().p("AgaAxQgGgFgEgGQgDgHAAgHQAAgTAPgIQAQgKAcAAIAAgCIgBgKQgBgFgGgEQgEgEgJAAQgIAAgHACQgGACgGADIgEgMQAGgEAIgDQAKgCAIAAQAQAAAIAGQAJAGADAKQADAJgBAKIAAAlIABANIACAMIgRAAIgCgNIgBAAQgEAGgIAEQgHAFgKAAQgLAAgHgEgAABAAQgJACgHAFQgGAFAAAKQAAAJAFAEQAFAEAIAAQAIAAAGgFQAHgFACgHIAAgDIABgCIAAgRQgLAAgJAAg");
	this.shape_65.setTransform(353.3,349.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgKAAgQQAAgOAGgNQAGgMAKgIQALgGAOgBQAMABAIAEQAJAFAEAHQAFAHACAJQACAHAAAIIAAAEIgBAEIhGAAQAAAMAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgJQAAgGgCgGQgCgHgGgGQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAHgBAGIA1AAIAAAAg");
	this.shape_66.setTransform(343.3,349.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#373535").s().p("AgSBMIAAhXIgOAAIAAgOIAOAAIAAgFQAAgLADgJQACgJAHgGQAFgFAFgCQAHgDAGAAIAKABIAGACIgCAPIgFgCIgHgBQgIAAgEAEQgEAEgCAHQgBAHAAAIIAAAFIAYAAIAAAOIgYAAIAABXg");
	this.shape_67.setTransform(331,346.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#373535").s().p("AgZAvQgLgHgGgLQgHgMAAgQQAAgQAHgMQAHgMALgHQALgGAOAAQAOAAALAHQALAGAGAMQAGALABAQQgBASgHAMQgIAMgLAFQgMAGgLAAQgOAAgLgGgAgRggQgHAFgDAJQgDAJAAAJQAAALAEAJQAEAJAHAFQAHAFAIAAQAJAAAHgFQAHgFAEgJQAEgJAAgLQAAgIgDgJQgEgJgGgGQgHgGgLAAQgKAAgHAGg");
	this.shape_68.setTransform(321.6,349.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#373535").s().p("AgaBFQgKgGgFgMQgGgMAAgPQAAgRAGgLQAGgMALgHQAKgHAMAAQALABAIAEQAIAFADAGIABAAIAAg9IASAAIAAB6IABAOIAAAMIgRAAIAAgRIgBAAQgEAIgJAGQgJAFgMABQgMgBgKgGgAgOgKQgHAFgDAIQgFAJAAALQAAAKAEAJQADAIAHAGQAHAFAJAAQAJAAAIgGQAHgGADgKIABgEIAAgEIAAgSIAAgEIgBgEQgDgIgGgGQgIgGgKAAQgJAAgGAFg");
	this.shape_69.setTransform(305.2,347.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#373535").s().p("AgIBKIAAiTIARAAIAACTg");
	this.shape_70.setTransform(297.1,347);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgKAAgQQAAgOAGgNQAGgMAKgIQALgGAOgBQAMABAIAEQAJAFAEAHQAFAHACAJQACAHAAAIIAAAEIgBAEIhGAAQAAAMAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgJQAAgGgCgGQgCgHgGgGQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAHgBAGIA1AAIAAAAg");
	this.shape_71.setTransform(289.4,349.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#373535").s().p("AgIBHIAAhlIASAAIAABlgAgHgyQgEgEAAgEQABgFADgEQADgDAEAAQAFAAADADQAEAEAAAFQAAAEgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_72.setTransform(281.7,347.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#373535").s().p("AgSBMIAAhXIgOAAIAAgOIAOAAIAAgFQAAgLADgJQACgJAHgGQAFgFAFgCQAHgDAGAAIAKABIAGACIgCAPIgFgCIgHgBQgIAAgEAEQgEAEgCAHQgBAHAAAIIAAAFIAYAAIAAAOIgYAAIAABXg");
	this.shape_73.setTransform(276.7,346.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgKAAgQQAAgOAGgNQAGgMAKgIQALgGAOgBQAMABAIAEQAJAFAEAHQAFAHACAJQACAHAAAIIAAAEIgBAEIhGAAQAAAMAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgJQAAgGgCgGQgCgHgGgGQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAHgBAGIA1AAIAAAAg");
	this.shape_74.setTransform(263.4,349.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#373535").s().p("AAZBKIAAg6QAAgIgDgHQgCgFgFgFQgFgEgJAAQgIAAgGAFQgHAFgDAIIgBAEIAAAFIAAA8IgSAAIAAiTIASAAIAAA/IAGgIIAIgFIAJgEQADgCAGABQAFAAAGABQAGADAFAEQAGAFADAIQAEAIAAANIAAA8g");
	this.shape_75.setTransform(252.4,347);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#373535").s().p("AABBAQgEgCgDgDQgEgFgCgGQgCgHAAgIIAAg3IgPAAIAAgOIAPAAIAAgZIARgEIAAAdIAbAAIAAAOIgbAAIAAA2QAAAJAEAFQADAGAIAAIAGgBIAEgBIABAOIgHACIgKABQgGgBgFgCg");
	this.shape_76.setTransform(243,348);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#373535").s().p("AgUAzQgHgCgFgDIAEgOQAFADAGACQAHADAGAAQAKAAAFgFQAEgEAAgGQABgHgFgEQgEgFgKgDQgNgFgHgHQgGgHgBgJQABgJAEgGQAEgHAIgEQAIgEAJAAQAJAAAGACIALAEIgFAOIgJgEQgEgCgIAAQgHAAgEAEQgFAEAAAGQABAGAEADQAFAEAIAEQAOAFAHAGQAGAIAAALQAAANgKAIQgKAJgRAAQgIAAgIgCg");
	this.shape_77.setTransform(231,349.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgKAAgQQAAgOAGgNQAGgMAKgIQALgGAOgBQAMABAIAEQAJAFAEAHQAFAHACAJQACAHAAAIIAAAEIgBAEIhGAAQAAAMAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgJQAAgGgCgGQgCgHgGgGQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAHgBAGIA1AAIAAAAg");
	this.shape_78.setTransform(221.6,349.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#373535").s().p("AA3A0IAAg5QAAgPgGgHQgFgJgLAAQgIAAgGAFQgFAFgDAHIgBAEIAAAFIAAA+IgRAAIAAg8QAAgMgGgIQgFgIgLAAQgGAAgEADQgFADgDADIgEAJIgCAFIAAAEIAAA9IgSAAIAAhJIAAgOIgBgNIAQAAIABAQIAAAAIAHgKQAFgEAGgCQAGgDAIAAQALABAHAFQAHAGADAJIAGgIIAGgGIAKgFQAGgCAGAAQAIAAAHAEQAIADAFAKQAGAJAAASIAAA7g");
	this.shape_79.setTransform(207.6,349.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#373535").s().p("AgIBHIAAhlIARAAIAABlgAgIgyQgCgEAAgEQAAgFADgEQADgDAEAAQAFAAADADQADAEAAAFQAAAEgDAEQgDADgFAAQgFAAgDgDg");
	this.shape_80.setTransform(196.4,347.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#373535").s().p("AABBAQgEgCgDgDQgEgFgCgGQgCgHABgIIAAg3IgQAAIAAgOIAQAAIAAgZIARgEIAAAdIAaAAIAAAOIgaAAIAAA2QAAAJACAFQAEAGAHAAIAHgBIAEgBIABAOIgHACIgJABQgHgBgFgCg");
	this.shape_81.setTransform(190.4,348);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#373535").s().p("AgYA+QgKgIgFgPQgGgQAAgXQAAgWAGgQQAGgPALgJQAKgHANgBQAWAAAMASQALATAAAgQAAAigMASQgMATgWAAQgNAAgLgIgAgTgpQgHAOgBAbQAAAbAIAPQAHAOAMAAQAKAAAGgHQAGgHADgMQADgNAAgRQAAgRgDgMQgDgMgGgHQgGgIgKABQgLAAgIAOg");
	this.shape_82.setTransform(177.1,347.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#373535").s().p("AgYA+QgKgIgFgPQgGgQAAgXQAAgWAGgQQAGgPALgJQAKgHANgBQAWAAAMASQALATAAAgQAAAigMASQgMATgWAAQgNAAgLgIgAgTgpQgHAOgBAbQAAAbAIAPQAHAOAMAAQAKAAAGgHQAGgHADgMQADgNAAgRQAAgRgDgMQgDgMgGgHQgGgIgKABQgLAAgIAOg");
	this.shape_83.setTransform(166.4,347.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#373535").s().p("AgYA+QgKgIgFgPQgGgQAAgXQAAgWAGgQQAGgPALgJQAKgHANgBQAWAAAMASQALATAAAgQAAAigMASQgMATgWAAQgNAAgLgIgAgTgpQgHAOgBAbQAAAbAIAPQAHAOAMAAQAKAAAGgHQAGgHADgMQADgNAAgRQAAgRgDgMQgDgMgGgHQgGgIgKABQgLAAgIAOg");
	this.shape_84.setTransform(155.6,347.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#373535").s().p("AgLALIAEgRIAEgRIAUgCIgHATIgHASIgGANIgNABIAFgPg");
	this.shape_85.setTransform(147.9,354.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#373535").s().p("AgYA+QgKgIgFgPQgGgQAAgXQAAgWAGgQQAGgPALgJQAKgHANgBQAWAAAMASQALATAAAgQAAAigMASQgMATgWAAQgNAAgLgIgAgTgpQgHAOgBAbQAAAbAIAPQAHAOAMAAQAKAAAGgHQAGgHADgMQADgNAAgRQAAgRgDgMQgDgMgGgHQgGgIgKABQgLAAgIAOg");
	this.shape_86.setTransform(140.5,347.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#373535").s().p("AgcBDQgIgDgFgDIAEgOIAMAFQAIACAJAAQAIAAAIgDQAHgEAEgGQAFgHAAgJQAAgNgKgJQgJgHgUAAIgKAAIgIABIAIhBIBBAAIAAAPIgzAAIgGAjIAFgBIAGAAQAHABAIABQAIACAGADQAIAFAGAIQAFAJAAANQAAANgGALQgHAKgLAGQgMAGgNAAQgMAAgJgCg");
	this.shape_87.setTransform(129.5,347.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#373535").s().p("AgXA0IAAhFIgBgRIAAgOIAQAAIABAUIAAAAQAEgLAGgGQAIgGAKAAIACAAIACAAIAAASIgDgBIgCAAQgKABgHAGQgFAHgDAKIAAAEIAAAFIAAA1g");
	this.shape_88.setTransform(117.1,349.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#373535").s().p("AgZAvQgLgHgGgLQgHgMAAgQQAAgQAHgMQAHgMALgHQALgGAOAAQAOAAALAHQALAGAGAMQAGALABAQQgBASgHAMQgIAMgLAFQgMAGgLAAQgOAAgLgGgAgRggQgHAFgDAJQgDAJAAAJQAAALAEAJQAEAJAHAFQAHAFAIAAQAJAAAHgFQAHgFAEgJQAEgJAAgLQAAgIgDgJQgEgJgGgGQgHgGgLAAQgKAAgHAGg");
	this.shape_89.setTransform(107.3,349.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#373535").s().p("AgTAzQgIgCgFgDIAEgOQAEADAHACQAGADAIAAQAJAAAEgFQAGgEAAgGQgBgHgEgEQgEgFgJgDQgOgFgHgHQgGgHAAgJQAAgJAEgGQAEgHAIgEQAIgEAKAAQAHAAAHACIALAEIgFAOIgJgEQgFgCgGAAQgIAAgFAEQgDAEAAAGQAAAGAEADQAEAEAJAEQAOAFAGAGQAIAIgBALQAAANgJAIQgLAJgQAAQgJAAgHgCg");
	this.shape_90.setTransform(93,349.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#373535").s().p("AgaAxQgHgFgDgGQgEgHABgHQAAgTAPgIQAQgKAdAAIAAgCIgCgKQgBgFgFgEQgGgEgJAAQgHAAgHACQgGACgGADIgEgMQAGgEAIgDQAKgCAIAAQAQAAAIAGQAJAGACAKQAEAJAAAKIAAAlIAAANIACAMIgRAAIgCgNIAAAAQgFAGgIAEQgHAFgLAAQgKAAgHgEgAABAAQgJACgGAFQgHAFAAAKQAAAJAFAEQAFAEAIAAQAIAAAHgFQAGgFACgHIABgDIAAgCIAAgRQgKAAgKAAg");
	this.shape_91.setTransform(83.5,349.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#373535").s().p("AgIBKIAAiTIARAAIAACTg");
	this.shape_92.setTransform(76.2,347);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#373535").s().p("AgTAzQgIgCgGgDIAGgOQAEADAGACQAHADAGAAQAKAAAFgFQAEgEABgGQAAgHgFgEQgFgFgJgDQgNgFgHgHQgHgHAAgJQAAgJAFgGQAEgHAIgEQAIgEAJAAQAJAAAGACIAKAEIgEAOIgIgEQgGgCgHAAQgHAAgEAEQgEAEgBAGQAAAGAFADQAFAEAJAEQANAFAHAGQAGAIABALQgBANgKAIQgJAJgSAAQgIAAgHgCg");
	this.shape_93.setTransform(69.6,349.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgKAAgQQAAgOAGgNQAGgMAKgIQALgGAOgBQAMABAIAEQAJAFAEAHQAFAHACAJQACAHAAAIIAAAEIgBAEIhGAAQAAAMAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgJQAAgGgCgGQgCgHgGgGQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAHgBAGIA1AAIAAAAg");
	this.shape_94.setTransform(60.2,349.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#373535").s().p("AABBAQgEgCgDgDQgEgFgCgGQgBgHAAgIIAAg3IgQAAIAAgOIAQAAIAAgZIARgEIAAAdIAaAAIAAAOIgaAAIAAA2QAAAJADAFQADAGAHAAIAHgBIAEgBIABAOIgHACIgJABQgHgBgFgCg");
	this.shape_95.setTransform(51.6,348);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#373535").s().p("AgbBEQgJgDgGgEIAGgOIALAFQAJADAJAAQALAAAHgEQAHgEADgGQACgGAAgGQABgKgGgFQgFgHgIgCQgHgDgJgBIgKAAIAAgMIAKAAQAHAAAGgCQAHgDAEgFQAGgFAAgJQgBgFgCgFQgDgEgEgDQgGgDgIAAQgHABgIACIgMAGIgEgNQAFgFAJgCQAKgDALgBQAMAAAJAFQAJAFAEAHQAEAHAAAJQAAAKgGAJQgHAIgMAFIAAABQAIABAIADQAGAFAEAIQAEAHABAKQAAAKgGAKQgFAJgMAFQgLAGgPAAQgMAAgJgCg");
	this.shape_96.setTransform(38.1,347.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#373535").s().p("AAHBWQgHgJgGgMQgGgMgEgQQgEgQAAgVQAAgTAEgQQAEgRAGgMQAGgMAHgJIAOAAQgMAQgHAVQgHAVAAAbQAAAcAHAVQAHAVAMAQg");
	this.shape_97.setTransform(30.5,348.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#373535").s().p("AgUAzQgHgBgFgEIAEgOQAFADAGACQAGACAHAAQAKABAFgFQAEgEAAgGQABgHgFgFQgEgEgKgDQgNgFgHgHQgGgHgBgJQABgIAEgHQAEgHAIgEQAIgEAJAAQAJAAAGACIALAFIgFANIgJgEQgEgCgIAAQgHAAgEAEQgFAEAAAGQABAGAEADQAEAFAJADQAOAFAGAGQAIAIgBAKQAAAOgKAJQgKAIgRAAQgIAAgIgCg");
	this.shape_98.setTransform(394.2,319.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#373535").s().p("AABBAQgEgCgDgDQgEgFgCgGQgCgHAAgIIAAg3IgPAAIAAgOIAPAAIAAgZIARgEIAAAdIAbAAIAAAOIgbAAIAAA2QAAAJAEAFQADAFAIABIAGgBIAEgBIABAOIgHACIgKAAQgGAAgFgCg");
	this.shape_99.setTransform(386.5,318.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgLAAgPQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAEAEAIQAFAHACAJQACAHAAAIIAAAEIgBADIhGAAQAAANAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgIQAAgHgCgHQgCgHgGgFQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_100.setTransform(377.9,319.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#373535").s().p("AAZA0IAAg6QAAgIgCgHQgCgHgGgEQgFgDgIAAQgJgBgGAGQgHAFgCAJIgBADIAAAFIAAA8IgTAAIAAhJIAAgOIgBgOIARAAIABARIAAAAQADgEAEgFQAFgFAHgCQAGgDAIAAQAFAAAGACQAGACAGAEQAFAFAEAJQADAJABANIAAA7g");
	this.shape_101.setTransform(366.8,319.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#373535").s().p("AgXBHQgIgBgGgEIAEgPIAMAGQAIACAKABQAJgBAGgDQAIgDAEgJQAEgHABgNIAAgLIgBAAQgEAHgIAEQgIAFgLABQgNAAgJgHQgLgGgFgLQgGgLABgOQgBgRAHgMQAGgNALgFQAKgHAMAAQAIAAAGADQAHADADADQAFAEACAFIAAAAIABgQIAQAAIgBANIAAAPIAAA6QAAARgDAMQgEALgHAHQgIAGgKADQgJADgJAAQgJAAgKgDgAgTgwQgJAKAAASQAAAKAEAIQADAIAGAEQAIAGAIgBQAJABAHgGQAHgEADgIIABgFIABgFIAAgSIgBgFIgBgEQgCgIgHgGQgGgFgLAAQgMAAgIAKg");
	this.shape_102.setTransform(354.9,322);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#373535").s().p("AgaAxQgHgFgDgGQgEgHABgHQAAgTAPgIQAQgKAdAAIAAgCIgCgKQgBgFgFgEQgGgEgJAAQgHAAgHACQgGACgGADIgEgMQAGgEAIgDQAKgCAIAAQAQAAAIAGQAJAGACAKQAEAJAAAKIAAAlIAAANIACAMIgRAAIgCgNIAAAAQgFAGgIAEQgHAFgLAAQgKAAgHgEgAABAAQgJACgGAFQgHAFAAAKQAAAJAFAEQAFAEAIAAQAIAAAHgFQAGgFACgHIABgDIAAgCIAAgRQgKAAgKAAg");
	this.shape_103.setTransform(344.1,319.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#373535").s().p("AA3A0IAAg5QAAgPgGgHQgFgJgLAAQgIAAgGAFQgFAFgDAHIgBAEIAAAFIAAA+IgRAAIAAg8QgBgMgFgIQgFgHgLgBQgGAAgEADQgFACgDAFIgEAJIgCAEIAAAFIAAA8IgSAAIAAhJIAAgOIgBgOIAQAAIABARIABAAIAGgKQAFgDAGgDQAGgDAIAAQALABAHAFQAHAGADAIIAGgHIAGgGIAKgFQAGgCAGAAQAIAAAHADQAIAFAFAJQAGAJAAASIAAA7g");
	this.shape_104.setTransform(330.5,319.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#373535").s().p("AgIBKIAAiTIARAAIAACTg");
	this.shape_105.setTransform(314.8,317.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#373535").s().p("AgXAwQgIgEgGgKQgFgJAAgSIAAg6IASAAIAAA3QAAAPAFAJQAGAIAMABQAFAAAFgDQAFgCADgEQAEgEACgEIABgFIAAgFIAAg9IATAAIAABJIAAAPIAAAMIgQAAIgBgQIAAAAIgHAIQgFAFgGACQgHADgIABQgIAAgIgEg");
	this.shape_106.setTransform(306.6,320.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#373535").s().p("AgSBMIAAhXIgOAAIAAgOIAOAAIAAgFQAAgLADgJQACgJAHgGQAFgFAFgCQAHgDAGAAIAKABIAGACIgCAPIgFgCIgHgBQgIAAgEAEQgEAEgCAHQgBAHAAAIIAAAFIAYAAIAAAOIgYAAIAABXg");
	this.shape_107.setTransform(298.3,317.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#373535").s().p("AgXA0IAAhFIgBgQIAAgQIAPAAIACAVIAAAAQAEgLAHgGQAHgGAKAAIACAAIACAAIAAASIgDAAIgCAAQgKAAgHAGQgFAHgCAKIgBAEIAAAFIAAA1g");
	this.shape_108.setTransform(291.2,319.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgLAAgPQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAEAEAIQAFAHACAJQACAHAAAIIAAAEIgBADIhGAAQAAANAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgIQAAgHgCgHQgCgHgGgFQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_109.setTransform(281.9,319.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#373535").s().p("AAYAzIgPgxIgFgPIgEgRIAAAAIgEARIgFAPIgQAxIgRAAIgfhlIATAAIANAzIAFAQIADAQIABAAIAEgQIAFgQIAQgzIAPAAIAPAyIAGARIADAQIABAAIADgQIAFgRIAOgyIATAAIghBlg");
	this.shape_110.setTransform(269.2,319.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#373535").s().p("AgZAvQgLgHgGgLQgHgMAAgQQAAgQAHgMQAHgMALgHQALgGAOAAQAOAAALAHQALAGAGAMQAGALABAQQgBASgHAMQgIAMgLAFQgMAGgLAAQgOAAgLgGgAgRggQgHAFgDAJQgDAJAAAJQAAALAEAJQAEAJAHAFQAHAFAIAAQAJAAAHgFQAHgFAEgJQAEgJAAgLQAAgIgDgJQgEgJgGgGQgHgGgLAAQgKAAgHAGg");
	this.shape_111.setTransform(255.8,319.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#373535").s().p("AgvBJIAAhtIAAgSIgBgPIARAAIABARIAAAAQAGgJAJgFQAJgGALAAQANAAAKAHQAJAGAFAMQAHALAAAQQgBASgGALQgGAMgLAGQgKAHgMAAQgKgBgIgEQgIgEgFgHIgBAAIAAA3gAgQgzQgIAGgDALIgBAEIgBADIAAASIABAEIAAADQADAJAHAGQAIAGAKAAQAJAAAHgFQAGgFAEgJQAEgHAAgMQAAgKgEgJQgDgJgHgFQgGgFgKAAQgJAAgHAGg");
	this.shape_112.setTransform(244.4,321.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#373535").s().p("AgLALIAEgRIAEgRIAUgCIgHATIgHARIgFAOIgOABIAFgPg");
	this.shape_113.setTransform(231.3,325);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgLAAgPQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAEAEAIQAFAHACAJQACAHAAAIIAAAEIgBADIhGAAQAAANAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgIQAAgHgCgHQgCgHgGgFQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_114.setTransform(224.3,319.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#373535").s().p("AAZA0IAAg6QAAgIgCgHQgCgHgGgEQgFgDgIAAQgJgBgGAGQgHAFgCAJIgBADIAAAFIAAA8IgTAAIAAhJIAAgOIgBgOIARAAIABARIAAAAQADgEAEgFQAFgFAHgCQAGgDAIAAQAFAAAGACQAGACAGAEQAFAFAEAJQADAJABANIAAA7g");
	this.shape_115.setTransform(213.2,319.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#373535").s().p("AgIBHIAAhlIARAAIAABlgAgIgyQgCgEAAgEQAAgFADgEQADgDAEAAQAFAAADADQADAEAAAFQAAAEgDAEQgDADgFAAQgFAAgDgDg");
	this.shape_116.setTransform(204.9,317.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#373535").s().p("AAZBKIAAg6QAAgIgDgHQgCgFgFgFQgFgEgJAAQgIAAgGAGQgHAFgDAGIgBAFIAAAEIAAA9IgSAAIAAiTIASAAIAAA/IAGgHIAIgGIAJgEQADgBAGAAQAFAAAGACQAGACAFAEQAGAFADAIQAEAIAAANIAAA8g");
	this.shape_117.setTransform(196.7,317.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#373535").s().p("AgPAuQgMgGgFgMQgHgLAAgQQAAgPAHgMQAHgMAMgHQAMgHAPAAQAJAAAHACQAGABAEACIgEAPIgJgEQgFgBgIAAQgLAAgHAFQgIAFgEAJQgEAIAAAKQAAAMAFAJQAEAIAIAFQAHAEAKAAQAIAAAFgCIAJgDIAEAOIgLAEQgIACgKAAQgPAAgLgHg");
	this.shape_118.setTransform(186.2,319.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#373535").s().p("AgaAxQgHgFgDgGQgEgHABgHQAAgTAPgIQAQgKAcAAIAAgCIgBgKQgBgFgFgEQgGgEgIAAQgIAAgHACQgGACgGADIgEgMQAGgEAIgDQAKgCAIAAQAQAAAIAGQAJAGACAKQAEAJgBAKIAAAlIABANIACAMIgRAAIgCgNIAAAAQgFAGgIAEQgHAFgLAAQgKAAgHgEgAABAAQgJACgHAFQgGAFAAAKQAAAJAFAEQAFAEAIAAQAIAAAGgFQAHgFACgHIAAgDIABgCIAAgRQgLAAgJAAg");
	this.shape_119.setTransform(176.1,319.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#373535").s().p("AA3A0IAAg5QAAgPgGgHQgFgJgLAAQgIAAgGAFQgFAFgDAHIgBAEIAAAFIAAA+IgRAAIAAg8QAAgMgGgIQgFgHgLgBQgGAAgEADQgFACgDAFIgEAJIgCAEIAAAFIAAA8IgSAAIAAhJIAAgOIgBgOIAQAAIABARIAAAAIAHgKQAFgDAGgDQAGgDAIAAQALABAHAFQAHAGADAIIAGgHIAGgGIAKgFQAGgCAGAAQAIAAAHADQAIAFAFAJQAGAJAAASIAAA7g");
	this.shape_120.setTransform(162.6,319.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#373535").s().p("AgIBHIAAiNIARAAIAACNg");
	this.shape_121.setTransform(146.9,317.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#373535").s().p("AAbBHIgEgMIgFgWQgDgOgHgGQgHgHgKAAIgSAAIAAA9IgSAAIAAiKIAQgDIATAAQANAAAKACQAKADAHAGQAFAFADAHQADAHAAAIQAAAKgDAHQgEAHgGAFQgGAEgIACIAAABQAIADAGAHQAEAHADALIAGAZIAFAOgAgUg4IgHABIAAA0IATAAQANAAAJgHQAIgHABgNQgBgNgIgHQgJgGgNAAIgMAAg");
	this.shape_122.setTransform(139.3,317.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#373535").s().p("AA3BHIgEg+IgBgUIgBgVIAAgUIgBAAIgIAaIgKAbIgZBFIgMAAIgXhEIgKgbIgHgbIAAAAIgBAUIgBAVIgBAVIgEA9IgRAAIAKiNIAXAAIAYBFIAIAYIAGAWIAAAAIAHgWIAIgYIAZhFIAYAAIAICNg");
	this.shape_123.setTransform(124.6,317.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#373535").s().p("AgSBMIAAhXIgOAAIAAgOIAOAAIAAgFQAAgLADgJQACgJAHgGQAFgFAFgCQAHgDAGAAIAKABIAGACIgCAPIgFgCIgHgBQgIAAgEAEQgEAEgCAHQgBAHAAAIIAAAFIAYAAIAAAOIgYAAIAABXg");
	this.shape_124.setTransform(113.6,317.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#373535").s().p("AAZA0IAAg6QAAgIgCgHQgCgHgGgEQgFgDgIAAQgJgBgGAGQgHAFgCAJIgBADIAAAFIAAA8IgTAAIAAhJIAAgOIgBgOIARAAIABARIAAAAQADgEAEgFQAFgFAHgCQAGgDAIAAQAFAAAGACQAGACAGAEQAFAFAEAJQADAJABANIAAA7g");
	this.shape_125.setTransform(99.7,319.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#373535").s().p("AgaAxQgGgFgEgGQgEgHAAgHQABgTAPgIQAQgKAcAAIAAgCIgBgKQgCgFgFgEQgFgEgIAAQgIAAgHACQgGACgGADIgEgMQAGgEAJgDQAJgCAIAAQAQAAAIAGQAJAGADAKQADAJgBAKIAAAlIABANIABAMIgQAAIgCgNIgBAAQgEAGgIAEQgIAFgJAAQgLAAgHgEgAABAAQgJACgHAFQgGAFAAAKQAAAJAFAEQAFAEAHAAQAJAAAGgFQAGgFADgHIAAgDIABgCIAAgRQgLAAgJAAg");
	this.shape_126.setTransform(88.6,319.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgLAAgPQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAEAEAIQAFAHACAJQACAHAAAIIAAAEIgBADIhGAAQAAANAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgIQAAgHgCgHQgCgHgGgFQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_127.setTransform(74.1,319.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#373535").s().p("AgaBFQgKgGgFgMQgGgMAAgPQAAgRAGgLQAGgMALgHQAKgHAMAAQALABAIAEQAIAFADAGIABAAIAAg9IASAAIAAB6IABAOIAAAMIgRAAIgBgRIAAAAQgEAIgJAGQgJAFgMABQgMgBgKgGgAgOgKQgHAFgDAIQgFAJAAALQAAAKAEAJQADAIAHAGQAHAFAJAAQAJAAAIgGQAHgGADgKIABgEIAAgEIAAgSIAAgEIgBgEQgDgIgGgGQgIgGgKAAQgIAAgHAFg");
	this.shape_128.setTransform(62.7,317.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#373535").s().p("AgIBHIAAhlIARAAIAABlgAgIgyQgCgEAAgEQAAgFADgEQADgDAEAAQAFAAADADQADAEAAAFQAAAEgDAEQgDADgFAAQgFAAgDgDg");
	this.shape_129.setTransform(54.6,317.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#373535").s().p("AgTAzQgIgBgGgEIAGgOQAEADAGACQAHACAGAAQAKABAEgFQAFgEABgGQAAgHgFgFQgFgEgJgDQgNgFgHgHQgHgHAAgJQAAgIAFgHQAEgHAIgEQAIgEAJAAQAJAAAGACIAKAFIgEANIgIgEQgGgCgHAAQgHAAgEAEQgEAEgBAGQAAAGAFADQAFAFAJADQANAFAHAGQAGAIABAKQgBAOgKAJQgJAIgSAAQgIAAgHgCg");
	this.shape_130.setTransform(48,319.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#373535").s().p("AAZA0IAAg6QAAgIgCgHQgCgHgGgEQgFgDgIAAQgJgBgGAGQgHAFgCAJIgBADIAAAFIAAA8IgTAAIAAhJIAAgOIgBgOIARAAIABARIAAAAQADgEAEgFQAFgFAHgCQAGgDAIAAQAFAAAGACQAGACAGAEQAFAFAEAJQADAJABANIAAA7g");
	this.shape_131.setTransform(38,319.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#373535").s().p("AgIBHIAAiNIARAAIAACNg");
	this.shape_132.setTransform(29.5,317.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},73).wait(333));

	// Inside the magnetic field, all the protons align their spinning axes along the field
	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#373535").s().p("AgaBFQgJgGgGgMQgGgMAAgPQAAgRAGgLQAGgMAKgHQALgHANAAQAKABAIAEQAHAFAEAGIAAAAIAAg9IATAAIAAB6IAAAOIABAMIgRAAIgBgRIAAAAQgFAIgIAGQgJAFgMABQgMgBgKgGgAgPgKQgGAFgEAIQgDAJAAALQgBAKAEAJQADAIAHAGQAGAFAJAAQAKAAAIgGQAHgGADgKIAAgEIAAgEIAAgSIAAgEIAAgEQgDgIgHgGQgHgGgKAAQgIAAgIAFg");
	this.shape_133.setTransform(760,471.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#373535").s().p("AgIBKIAAiTIARAAIAACTg");
	this.shape_134.setTransform(751.9,471);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgLAAgPQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAEAEAIQAFAHACAJQACAHAAAIIAAAEIgBADIhGAAQAAANAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgIQAAgHgCgHQgCgHgGgFQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_135.setTransform(744.2,473.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#373535").s().p("AgIBHIAAhlIASAAIAABlgAgHgyQgDgEAAgEQAAgFADgEQADgDAEAAQAFAAAEADQACAEAAAFQAAAEgCAEQgEADgFAAQgFAAgCgDg");
	this.shape_136.setTransform(736.5,471.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#373535").s().p("AgSBMIAAhXIgOAAIAAgOIAOAAIAAgFQAAgLADgJQACgJAHgGQAFgFAFgCQAHgDAGAAIAKABIAGACIgCAPIgFgCIgHgBQgIAAgEAEQgEAEgCAHQgBAHAAAIIAAAFIAYAAIAAAOIgYAAIAABXg");
	this.shape_137.setTransform(731.5,470.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgLAAgPQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAEAEAIQAFAHACAJQACAHAAAIIAAAEIgBADIhGAAQAAANAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgIQAAgHgCgHQgCgHgGgFQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_138.setTransform(718.2,473.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#373535").s().p("AAZBKIAAg6QAAgIgDgHQgCgFgFgFQgFgEgJAAQgIAAgGAGQgHAFgDAGIgBAFIAAAEIAAA9IgSAAIAAiTIASAAIAAA/IAGgHIAIgGIAJgEQADgBAGAAQAFAAAGACQAGACAFAEQAGAFADAIQAEAIAAANIAAA8g");
	this.shape_139.setTransform(707.2,471);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#373535").s().p("AABBAQgEgCgDgDQgEgEgCgHQgBgHAAgIIAAg3IgQAAIAAgOIAQAAIAAgZIARgEIAAAdIAaAAIAAAOIgaAAIAAA2QAAAJACAFQAEAFAHABIAHgBIAEgBIABAOIgHACIgJAAQgHAAgFgCg");
	this.shape_140.setTransform(697.8,472);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#373535").s().p("AgWBHQgKgCgFgDIAEgOIANAFQAHACAKABQAIgBAIgDQAHgDAEgJQAFgHgBgNIAAgLIAAAAQgEAHgIAEQgJAFgKABQgNAAgKgHQgKgGgFgLQgFgLAAgOQAAgRAGgMQAHgNAKgFQALgHALAAQAIAAAHADQAFADAFADQAEAEACAFIABAAIAAgQIAQAAIgBANIAAAPIAAA6QABARgEAMQgDALgIAHQgIAGgJADQgKADgJAAQgKAAgIgDgAgTgwQgJAKAAASQAAAKADAIQAEAIAGAEQAIAGAIgBQAJABAHgGQAGgEAEgIIABgFIAAgFIAAgSIAAgFIgBgEQgDgIgGgGQgHgFgKAAQgMAAgIAKg");
	this.shape_141.setTransform(683.7,475.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#373535").s().p("AAZA0IAAg6QAAgIgCgHQgCgGgGgFQgFgDgIAAQgJgBgGAGQgHAFgCAJIgBADIAAAFIAAA8IgTAAIAAhJIAAgOIgBgOIARAAIABARIAAAAQADgEAEgFQAFgFAHgCQAGgDAIAAQAFAAAGACQAGACAGAEQAFAFAEAJQADAJABANIAAA7g");
	this.shape_142.setTransform(672.3,473.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#373535").s().p("AgZAvQgLgHgGgLQgHgMAAgQQAAgQAHgMQAHgMALgHQALgGAOAAQAOAAALAHQALAGAGAMQAGALABAQQgBASgHAMQgIAMgLAFQgMAGgLAAQgOAAgLgGgAgRggQgHAFgDAJQgDAJAAAJQAAALAEAJQAEAJAHAFQAHAFAIAAQAJAAAHgFQAHgFAEgJQAEgJAAgLQAAgIgDgJQgEgJgGgGQgHgGgLAAQgKAAgHAGg");
	this.shape_143.setTransform(660.7,473.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#373535").s().p("AgIBKIAAiTIARAAIAACTg");
	this.shape_144.setTransform(652.5,471);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#373535").s().p("AgaAxQgHgFgDgGQgEgHAAgHQAAgTAQgIQAQgKAcAAIAAgCIgBgKQgBgFgGgEQgFgEgIAAQgIAAgHACQgGACgGADIgEgMQAGgEAJgDQAIgCAJAAQAPAAAJAGQAJAGADAKQADAJgBAKIAAAlIABANIABAMIgRAAIgBgNIgBAAQgEAGgHAEQgIAFgKAAQgLAAgHgEgAABAAQgJACgHAFQgGAFAAAKQAAAJAFAEQAFAEAHAAQAJAAAGgFQAGgFADgHIAAgDIABgCIAAgRQgLAAgJAAg");
	this.shape_145.setTransform(644.7,473.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#373535").s().p("AgTAzQgIgBgGgEIAGgOQAEADAGACQAHACAGAAQAKABAEgFQAFgEABgGQAAgHgFgFQgFgDgIgEQgOgFgHgHQgHgHABgJQgBgIAFgHQAEgHAIgEQAIgEAJAAQAIAAAHACIAKAFIgEANIgIgEQgGgCgHAAQgHAAgEAEQgEAEAAAGQgBAGAFADQAEAFAKADQANAFAHAGQAGAIABAKQgBAOgJAJQgKAIgSAAQgIAAgHgCg");
	this.shape_146.setTransform(631.3,473.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgLAAgPQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAEAEAIQAFAHACAJQACAHAAAIIAAAEIgBADIhGAAQAAANAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgIQAAgHgCgHQgCgHgGgFQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_147.setTransform(621.9,473.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#373535").s().p("AAaAzIgPgXIgGgJIgFgJIAAAAIgFAJIgFAJIgPAXIgUAAIAkgzIgjgyIAVAAIAOAWIAGAIIAEAJIAAAAIAGgJIAEgIIAPgWIATAAIgiAxIAjA0g");
	this.shape_148.setTransform(612.1,473.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#373535").s().p("AgaAxQgHgFgDgGQgEgHAAgHQAAgTAQgIQAQgKAcAAIAAgCIgBgKQgBgFgGgEQgFgEgIAAQgIAAgHACQgGACgGADIgEgMQAGgEAJgDQAIgCAJAAQAPAAAJAGQAJAGADAKQADAJgBAKIAAAlIABANIABAMIgRAAIgBgNIgBAAQgEAGgHAEQgIAFgKAAQgLAAgHgEgAABAAQgJACgHAFQgGAFAAAKQAAAJAFAEQAFAEAHAAQAJAAAGgFQAGgFADgHIAAgDIABgCIAAgRQgLAAgJAAg");
	this.shape_149.setTransform(602,473.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#373535").s().p("AgWBHQgKgCgFgDIAEgOIANAFQAHACAKABQAIgBAIgDQAHgDAEgJQAFgHgBgNIAAgLIAAAAQgEAHgIAEQgJAFgKABQgNAAgKgHQgKgGgFgLQgFgLAAgOQAAgRAGgMQAHgNAKgFQALgHALAAQAIAAAHADQAFADAFADQAEAEACAFIABAAIAAgQIAQAAIgBANIAAAPIAAA6QABARgEAMQgDALgIAHQgHAGgKADQgKADgJAAQgKAAgIgDgAgTgwQgJAKAAASQAAAKADAIQAEAIAGAEQAIAGAIgBQAJABAHgGQAGgEAEgIIABgFIAAgFIAAgSIAAgFIgBgEQgDgIgGgGQgHgFgKAAQgMAAgIAKg");
	this.shape_150.setTransform(586.5,475.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#373535").s().p("AAZA0IAAg6QAAgIgCgHQgCgGgGgFQgFgDgIAAQgJgBgGAGQgHAFgCAJIgBADIAAAFIAAA8IgTAAIAAhJIAAgOIgBgOIARAAIABARIAAAAQADgEAEgFQAFgFAHgCQAGgDAIAAQAFAAAGACQAGACAGAEQAFAFAEAJQADAJABANIAAA7g");
	this.shape_151.setTransform(575.1,473.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#373535").s().p("AgIBHIAAhlIASAAIAABlgAgHgyQgDgEAAgEQAAgFADgEQADgDAEAAQAGAAADADQACAEAAAFQAAAEgCAEQgEADgFAAQgFAAgCgDg");
	this.shape_152.setTransform(566.9,471.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#373535").s().p("AAZA0IAAg6QAAgIgCgHQgCgGgGgFQgFgDgIAAQgJgBgGAGQgHAFgCAJIgBADIAAAFIAAA8IgTAAIAAhJIAAgOIgBgOIARAAIABARIAAAAQADgEAEgFQAFgFAHgCQAGgDAIAAQAFAAAGACQAGACAGAEQAFAFAEAJQADAJABANIAAA7g");
	this.shape_153.setTransform(558.6,473.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#373535").s().p("AAZA0IAAg6QAAgIgCgHQgCgGgGgFQgFgDgIAAQgJgBgGAGQgHAFgCAJIgBADIAAAFIAAA8IgTAAIAAhJIAAgOIgBgOIARAAIABARIAAAAQADgEAEgFQAFgFAHgCQAGgDAIAAQAFAAAGACQAGACAGAEQAFAFAEAJQADAJABANIAAA7g");
	this.shape_154.setTransform(546.9,473.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#373535").s().p("AgIBHIAAhlIASAAIAABlgAgHgyQgEgEAAgEQAAgFAEgEQADgDAEAAQAFAAADADQAEAEAAAFQAAAEgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_155.setTransform(538.7,471.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#373535").s().p("AgvBJIAAhtIAAgSIgBgPIARAAIABARIAAAAQAGgJAJgFQAJgGALAAQANAAAKAHQAJAGAFAMQAHALAAAQQgBASgGALQgGAMgLAGQgKAHgMAAQgKgBgIgEQgIgEgFgHIgBAAIAAA3gAgQgzQgIAGgDALIgBAEIgBADIAAASIABAEIAAADQADAJAHAGQAIAGAKAAQAJAAAHgFQAGgFAEgJQAEgHAAgMQAAgKgEgJQgDgJgHgFQgGgFgKAAQgJAAgHAGg");
	this.shape_156.setTransform(530.6,475.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#373535").s().p("AgUAzQgHgBgFgEIAEgOQAEADAHACQAGACAIAAQAJABAFgFQAEgEAAgGQAAgHgEgFQgEgDgKgEQgNgFgHgHQgGgHgBgJQABgIAEgHQAEgHAIgEQAIgEAKAAQAHAAAHACIALAFIgFANIgJgEQgFgCgGAAQgIAAgFAEQgEAEAAAGQABAGAEADQAEAFAJADQAOAFAGAGQAIAIgBAKQAAAOgJAJQgLAIgQAAQgJAAgIgCg");
	this.shape_157.setTransform(520.1,473.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#373535").s().p("AgYA0IAAhFIAAgRIgBgPIAQAAIABAVIABAAQAEgLAHgGQAHgGAJAAIADAAIADAAIAAASIgDgBIgEAAQgJABgHAGQgFAHgCAKIgBAEIgBAFIAAA1g");
	this.shape_158.setTransform(508.7,473.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#373535").s().p("AgIBHIAAhlIASAAIAABlgAgHgyQgEgEAAgEQABgFADgEQADgDAEAAQAFAAADADQAEAEAAAFQAAAEgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_159.setTransform(502.2,471.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgLAAgPQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAEAEAIQAFAHACAJQACAHAAAIIAAAEIgBADIhGAAQAAANAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgIQAAgHgCgHQgCgHgGgFQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_160.setTransform(494.5,473.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#373535").s().p("AAZBKIAAg6QAAgIgDgHQgCgFgFgFQgFgEgJAAQgIAAgGAGQgHAFgDAGIgBAFIAAAEIAAA9IgSAAIAAiTIASAAIAAA/IAGgHIAIgGIAJgEQADgBAGAAQAFAAAGACQAGACAFAEQAGAFADAIQAEAIAAANIAAA8g");
	this.shape_161.setTransform(483.5,471);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#373535").s().p("AABBAQgEgCgDgDQgEgEgCgHQgBgHgBgIIAAg3IgPAAIAAgOIAPAAIAAgZIARgEIAAAdIAbAAIAAAOIgbAAIAAA2QAAAJADAFQAEAFAIABIAGgBIAEgBIABAOIgHACIgKAAQgGAAgFgCg");
	this.shape_162.setTransform(474.1,472);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#373535").s().p("AAZA0IAAg6QAAgIgCgHQgCgGgGgFQgFgDgIAAQgJgBgGAGQgHAFgCAJIgBADIAAAFIAAA8IgTAAIAAhJIAAgOIgBgOIARAAIABARIAAAAQADgEAEgFQAFgFAHgCQAGgDAIAAQAFAAAGACQAGACAGAEQAFAFAEAJQADAJABANIAAA7g");
	this.shape_163.setTransform(460.4,473.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#373535").s().p("AgXBHQgIgCgGgDIAEgOIAMAFQAIACAKABQAJgBAGgDQAIgDAEgJQAEgHABgNIAAgLIgBAAQgEAHgIAEQgIAFgLABQgNAAgJgHQgLgGgFgLQgGgLABgOQgBgRAHgMQAGgNALgFQAKgHAMAAQAIAAAGADQAHADADADQAFAEACAFIAAAAIABgQIAQAAIgBANIAAAPIAAA6QAAARgDAMQgEALgHAHQgIAGgKADQgJADgJAAQgJAAgKgDgAgTgwQgJAKAAASQAAAKADAIQAEAIAGAEQAIAGAIgBQAJABAHgGQAHgEADgIIABgFIABgFIAAgSIgBgFIgBgEQgCgIgHgGQgGgFgLAAQgMAAgIAKg");
	this.shape_164.setTransform(448.5,475.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#373535").s().p("AgIBHIAAhlIARAAIAABlgAgIgyQgCgEAAgEQgBgFAEgEQADgDAEAAQAGAAADADQACAEAAAFQAAAEgCAEQgEADgFAAQgEAAgEgDg");
	this.shape_165.setTransform(440.5,471.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#373535").s().p("AgIBKIAAiTIARAAIAACTg");
	this.shape_166.setTransform(435.6,471);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#373535").s().p("AgaAxQgHgFgDgGQgEgHAAgHQAAgTAQgIQAQgKAcAAIAAgCIgBgKQgBgFgGgEQgFgEgIAAQgIAAgHACQgGACgGADIgEgMQAGgEAJgDQAIgCAJAAQAPAAAJAGQAJAGADAKQADAJgBAKIAAAlIABANIABAMIgRAAIgBgNIgBAAQgEAGgHAEQgIAFgKAAQgLAAgHgEgAABAAQgJACgHAFQgGAFAAAKQAAAJAFAEQAFAEAHAAQAJAAAGgFQAGgFADgHIAAgDIABgCIAAgRQgKAAgKAAg");
	this.shape_167.setTransform(427.8,473.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#373535").s().p("AgTAzQgIgBgGgEIAFgOQAEADAHACQAGADAIgBQAJAAAEgEQAGgEAAgHQgBgGgEgFQgEgDgJgFQgOgEgHgGQgHgIABgJQgBgJAFgGQAEgHAIgEQAIgEAKAAQAHAAAHACIAKAFIgEANIgJgEQgEgCgHAAQgIAAgFAEQgDAEAAAGQgBAGAFAEQAEADAKAEQANAFAGAGQAIAHAAALQgBAOgJAJQgLAIgQAAQgJAAgHgCg");
	this.shape_168.setTransform(769.7,443.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#373535").s().p("AAZA0IAAg5QAAgJgCgHQgCgGgGgFQgFgDgIAAQgJgBgGAGQgHAFgCAJIgBADIAAAFIAAA8IgTAAIAAhJIAAgOIgBgOIARAAIABARIAAAAQADgEAEgFQAFgEAHgDQAGgDAIAAQAFAAAGACQAGACAGAFQAFAEAEAJQADAIABAOIAAA7g");
	this.shape_169.setTransform(759.7,443.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#373535").s().p("AgZAvQgLgHgGgLQgHgMAAgQQAAgQAHgMQAHgMALgHQALgGAOAAQAOAAALAHQALAGAGAMQAGALABAQQgBASgHAMQgIAMgLAFQgMAGgLAAQgOAAgLgGgAgRggQgHAFgDAJQgDAJAAAJQAAALAEAJQAEAJAHAFQAHAFAIAAQAJAAAHgFQAHgFAEgJQAEgJAAgLQAAgIgDgJQgEgJgGgGQgHgGgLAAQgKAAgHAGg");
	this.shape_170.setTransform(748.1,443.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#373535").s().p("AABBBQgEgCgDgEQgEgFgCgGQgCgHABgJIAAg2IgQAAIAAgOIAQAAIAAgYIARgGIAAAeIAaAAIAAAOIgaAAIAAA2QAAAJACAGQAEAEAHAAIAHAAIAEgBIABAOIgHACIgJAAQgHAAgFgBg");
	this.shape_171.setTransform(738.9,442.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#373535").s().p("AgZAvQgLgHgGgLQgHgMAAgQQAAgQAHgMQAHgMALgHQALgGAOAAQAOAAALAHQALAGAGAMQAGALABAQQgBASgHAMQgIAMgLAFQgMAGgLAAQgOAAgLgGgAgRggQgHAFgDAJQgDAJAAAJQAAALAEAJQAEAJAHAFQAHAFAIAAQAJAAAHgFQAHgFAEgJQAEgJAAgLQAAgIgDgJQgEgJgGgGQgHgGgLAAQgKAAgHAGg");
	this.shape_172.setTransform(729.7,443.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#373535").s().p("AgYA0IAAhFIAAgQIgBgQIARAAIABAUIAAAAQAEgKAGgGQAIgGAJAAIADABIADAAIAAARIgEAAIgDAAQgKAAgGAGQgGAGgCALIAAAFIgBAEIAAA1g");
	this.shape_173.setTransform(721.3,443.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#373535").s().p("AgvBJIAAhtIAAgSIgBgPIARAAIABARIAAAAQAGgJAJgFQAJgGALAAQANAAAKAHQAJAGAFAMQAHALgBAQQAAASgGALQgHAMgKAGQgLAHgMAAQgJgBgIgEQgIgEgFgHIgBAAIAAA3gAgQgzQgIAGgDALIgBAEIgBADIAAASIABAEIABADQACAJAIAGQAHAGAKAAQAJAAAHgFQAGgFAFgJQADgHAAgMQAAgKgDgJQgEgJgGgFQgIgFgJAAQgJAAgHAGg");
	this.shape_174.setTransform(711.7,445.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#373535").s().p("AgVAvQgLgHgGgLQgGgLAAgQQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAFAEAHQAFAIACAHQACAIAAAIIAAAEIgBADIhGAAQAAANAFAHQAFAJAIADQAHAEAJAAQAJAAAHgBIAMgFIADAOIgNAEQgJACgMAAQgPAAgLgGgAAbgIQAAgHgCgHQgCgGgGgFQgFgFgLgBQgIABgGAFQgGAEgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_175.setTransform(695.7,443.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#373535").s().p("AAZBLIAAg7QAAgIgDgHQgCgGgFgEQgFgEgJAAQgIAAgGAGQgHAFgDAGIgBAFIAAAEIAAA+IgSAAIAAiVIASAAIAABAIAGgHIAIgGIAJgEQADgCAGAAQAFAAAGADQAGABAFAFQAGAFADAJQAEAHAAANIAAA9g");
	this.shape_176.setTransform(684.6,441.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#373535").s().p("AABBBQgEgCgDgEQgEgFgCgGQgBgHgBgJIAAg2IgPAAIAAgOIAPAAIAAgYIARgGIAAAeIAbAAIAAAOIgbAAIAAA2QAAAJADAGQAEAEAIAAIAGAAIAEgBIABAOIgHACIgKAAQgGAAgFgBg");
	this.shape_177.setTransform(675.2,442.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#373535").s().p("AgIBLIAAiVIARAAIAACVg");
	this.shape_178.setTransform(664.9,441.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#373535").s().p("AgIBLIAAiVIARAAIAACVg");
	this.shape_179.setTransform(659.9,441.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#373535").s().p("AgaAxQgGgFgEgGQgDgHgBgHQAAgTAQgIQAQgKAdAAIAAgCIgCgKQgCgFgFgEQgEgEgKAAQgHAAgGACQgIACgFADIgEgMQAGgEAJgDQAIgCAJAAQAPAAAJAGQAIAGAEAKQADAJAAAKIAAAlIAAANIABAMIgRAAIgBgNIgBAAQgEAGgHAEQgJAFgJAAQgLAAgHgEgAABAAQgJACgGAFQgHAFAAAKQAAAJAFAEQAFAEAHAAQAJAAAHgFQAFgFADgHIABgDIAAgCIAAgRQgKAAgKAAg");
	this.shape_180.setTransform(652.2,443.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#373535").s().p("AgLALIAFgRIADgRIAUgCIgGATIgIARIgGAOIgMABIAEgPg");
	this.shape_181.setTransform(640.6,449);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#373535").s().p("AgaBFQgJgGgGgMQgGgMAAgPQAAgRAHgLQAGgMAJgHQALgHAMAAQALABAIAEQAHAFAEAGIAAAAIAAg9IATAAIAAB6IABAOIAAAMIgQAAIgBgRIgBAAQgFAIgIAGQgJAFgLABQgNgBgKgGgAgOgKQgHAFgEAIQgEAJAAALQABAKADAJQAEAIAGAGQAHAFAIAAQAKAAAHgGQAIgGADgKIAAgEIAAgEIAAgSIAAgEIAAgEQgCgIgIgGQgGgGgLAAQgJAAgGAFg");
	this.shape_182.setTransform(632.5,441.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#373535").s().p("AgIBLIAAiVIARAAIAACVg");
	this.shape_183.setTransform(624.4,441.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#373535").s().p("AgVAvQgLgHgGgLQgGgLAAgQQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAFAEAHQAFAIACAHQACAIAAAIIAAAEIgBADIhGAAQAAANAFAHQAFAJAIADQAHAEAJAAQAJAAAHgBIAMgFIADAOIgNAEQgJACgMAAQgPAAgLgGgAAbgIQAAgHgCgHQgCgGgGgFQgFgFgLgBQgIABgGAFQgGAEgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_184.setTransform(616.7,443.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#373535").s().p("AgIBHIAAhlIARAAIAABlgAgIgyQgCgEAAgEQAAgFADgEQADgDAEAAQAFAAADADQADAEAAAFQAAAEgDAEQgDADgFAAQgFAAgDgDg");
	this.shape_185.setTransform(609,441.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#373535").s().p("AgSBMIAAhXIgOAAIAAgOIAOAAIAAgFQAAgLADgJQACgJAHgGQAFgFAFgCQAHgDAGAAIAKABIAGACIgCAPIgFgCIgHgBQgIAAgEAEQgEAEgCAHQgBAHAAAIIAAAFIAYAAIAAAOIgYAAIAABXg");
	this.shape_186.setTransform(604,441.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#373535").s().p("AgPAuQgLgGgHgMQgGgLAAgQQAAgPAHgMQAHgMALgHQANgHAQAAQAIAAAGACQAIABADACIgEAPIgJgEQgFgBgHAAQgMAAgHAFQgIAFgEAJQgFAIABAKQAAAMAEAJQAFAIAIAFQAHAEAKAAQAIAAAFgCIAJgDIAEAOIgMAEQgHACgLAAQgOAAgLgHg");
	this.shape_187.setTransform(591.4,443.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#373535").s().p("AgIBHIAAhlIASAAIAABlgAgHgyQgEgEAAgEQAAgFAEgEQADgDAEAAQAFAAADADQAEAEAAAFQAAAEgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_188.setTransform(584.1,441.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#373535").s().p("AABBBQgEgCgDgEQgEgFgCgGQgBgHgBgJIAAg2IgPAAIAAgOIAPAAIAAgYIARgGIAAAeIAbAAIAAAOIgbAAIAAA2QAAAJAEAGQADAEAIAAIAGAAIAEgBIABAOIgHACIgKAAQgGAAgFgBg");
	this.shape_189.setTransform(578.1,442.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#373535").s().p("AgVAvQgLgHgGgLQgGgLAAgQQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAFAEAHQAFAIACAHQACAIAAAIIAAAEIgBADIhGAAQAAANAFAHQAFAJAIADQAHAEAJAAQAJAAAHgBIAMgFIADAOIgNAEQgJACgMAAQgPAAgLgGgAAbgIQAAgHgCgHQgCgGgGgFQgFgFgLgBQgIABgGAFQgGAEgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_190.setTransform(569.5,443.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#373535").s().p("AAZA0IAAg5QAAgJgCgHQgCgGgGgFQgFgDgIAAQgJgBgGAGQgHAFgCAJIgBADIAAAFIAAA8IgTAAIAAhJIAAgOIgBgOIARAAIABARIAAAAQADgEAEgFQAFgEAHgDQAGgDAIAAQAFAAAGACQAGACAGAFQAFAEAEAJQADAIABAOIAAA7g");
	this.shape_191.setTransform(558.4,443.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#373535").s().p("AgXBHQgJgBgGgFIAFgNIAMAFQAIADAKAAQAIAAAHgEQAIgDAEgJQAEgIABgMIAAgMIgBAAQgEAIgJAFQgHAEgLAAQgNABgJgHQgLgHgFgKQgGgLAAgOQAAgRAHgMQAGgMALgGQAKgHAMAAQAIAAAGADQAHADADAEQAFADACAFIAAAAIABgQIARAAIgBAMIAAAQIAAA7QgBARgDALQgEALgHAHQgIAHgKACQgJADgJAAQgJAAgKgDgAgUgwQgHAKgBASQAAAKAEAJQADAGAHAFQAHAGAIAAQAJAAAHgGQAHgFADgHIABgFIABgFIAAgSIgBgFIgBgEQgCgIgHgGQgGgFgKgBQgNABgJAKg");
	this.shape_192.setTransform(546.5,446);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#373535").s().p("AgaAxQgHgFgDgGQgEgHABgHQAAgTAPgIQAQgKAcAAIAAgCIgBgKQgBgFgFgEQgGgEgIAAQgIAAgHACQgGACgGADIgEgMQAGgEAIgDQAKgCAIAAQAQAAAIAGQAJAGACAKQAEAJgBAKIAAAlIABANIACAMIgRAAIgCgNIAAAAQgFAGgIAEQgHAFgLAAQgKAAgHgEgAABAAQgJACgHAFQgGAFAAAKQAAAJAFAEQAFAEAIAAQAIAAAGgFQAHgFACgHIAAgDIABgCIAAgRQgLAAgJAAg");
	this.shape_193.setTransform(535.7,443.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#373535").s().p("AA3A0IAAg5QAAgOgGgJQgFgHgLgBQgIAAgGAFQgFAFgDAHIgBAFIAAAEIAAA+IgRAAIAAg8QAAgMgGgIQgFgIgLAAQgGAAgEADQgFADgDAEIgEAJIgCAEIAAAFIAAA8IgSAAIAAhJIAAgOIgBgOIAQAAIABARIAAAAIAHgJQAFgEAGgDQAGgDAJAAQAKABAHAFQAHAFADAJIAGgHIAGgGIAKgFQAFgCAHAAQAHAAAIADQAIAFAFAJQAGAKAAARIAAA7g");
	this.shape_194.setTransform(522.1,443.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#373535").s().p("AgVAvQgLgHgGgLQgGgLAAgQQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAFAEAHQAFAIACAHQACAIAAAIIAAAEIgBADIhGAAQAAANAFAHQAFAJAIADQAHAEAJAAQAJAAAHgBIAMgFIADAOIgNAEQgJACgMAAQgPAAgLgGgAAbgIQAAgHgCgHQgCgGgGgFQgFgFgLgBQgIABgGAFQgGAEgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_195.setTransform(503.7,443.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#373535").s().p("AAZBLIAAg7QAAgIgDgHQgCgGgFgEQgFgEgJAAQgIAAgGAGQgHAFgDAGIgBAFIAAAEIAAA+IgSAAIAAiVIASAAIAABAIAGgHIAIgGIAJgEQADgCAGAAQAFAAAGADQAGABAFAFQAGAFADAJQAEAHAAANIAAA9g");
	this.shape_196.setTransform(492.6,441.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#373535").s().p("AABBBQgEgCgDgEQgEgFgCgGQgCgHABgJIAAg2IgQAAIAAgOIAQAAIAAgYIARgGIAAAeIAaAAIAAAOIgaAAIAAA2QAAAJACAGQAEAEAHAAIAHAAIAEgBIABAOIgHACIgJAAQgHAAgFgBg");
	this.shape_197.setTransform(483.2,442.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#373535").s().p("AgVAvQgLgHgGgLQgGgLAAgQQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAFAEAHQAFAIACAHQACAIAAAIIAAAEIgBADIhGAAQAAANAFAHQAFAJAIADQAHAEAJAAQAJAAAHgBIAMgFIADAOIgNAEQgJACgMAAQgPAAgLgGgAAbgIQAAgHgCgHQgCgGgGgFQgFgFgLgBQgIABgGAFQgGAEgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_198.setTransform(470.1,443.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#373535").s().p("AgaBFQgKgGgFgMQgGgMAAgPQAAgRAHgLQAFgMALgHQAKgHAMAAQALABAIAEQAIAFADAGIABAAIAAg9IASAAIAAB6IABAOIAAAMIgRAAIgBgRIAAAAQgEAIgJAGQgJAFgMABQgMgBgKgGgAgOgKQgHAFgDAIQgFAJAAALQAAAKAEAJQADAIAHAGQAHAFAJAAQAJAAAIgGQAHgGADgKIABgEIAAgEIAAgSIAAgEIgBgEQgDgIgGgGQgIgGgKAAQgIAAgHAFg");
	this.shape_199.setTransform(458.7,441.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#373535").s().p("AgIBHIAAhlIARAAIAABlgAgIgyQgCgEAAgEQgBgFAEgEQADgDAEAAQAFAAADADQADAEAAAFQAAAEgDAEQgDADgFAAQgFAAgDgDg");
	this.shape_200.setTransform(450.6,441.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#373535").s().p("AgTAzQgIgBgGgEIAGgOQAEADAGACQAHADAGgBQAKAAAEgEQAFgEABgHQAAgGgFgFQgFgDgJgFQgNgEgHgGQgHgIAAgJQAAgJAFgGQAEgHAIgEQAIgEAJAAQAJAAAGACIAKAFIgEANIgIgEQgGgCgHAAQgHAAgEAEQgEAEgBAGQAAAGAFAEQAFADAJAEQANAFAHAGQAGAHABALQgBAOgKAJQgJAIgSAAQgIAAgHgCg");
	this.shape_201.setTransform(444,443.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#373535").s().p("AAZA0IAAg5QAAgJgCgHQgCgGgGgFQgFgDgIAAQgJgBgGAGQgHAFgCAJIgBADIAAAFIAAA8IgTAAIAAhJIAAgOIgBgOIARAAIABARIAAAAQADgEAEgFQAFgEAHgDQAGgDAIAAQAFAAAGACQAGACAGAFQAFAEAEAJQADAIABAOIAAA7g");
	this.shape_202.setTransform(434,443.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#373535").s().p("AgIBHIAAiNIARAAIAACNg");
	this.shape_203.setTransform(425.5,441.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133}]},215).wait(191));

	// MagneticField
	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#00A85A").s().p("AgWA7QgIgFgFgKQgFgKAAgNQAAgPAFgJQAFgKAJgHQAJgFALAAQAJAAAHAEQAGAEADAFIAAAAIAAg0IARAAIAABpIAAALIAAALIgOAAIgBgPIgBAAQgDAHgHAFQgIAFgKAAQgKAAgJgGgAgMgIQgGAEgDAHQgDAHAAAKQAAAJADAHQADAHAGAFQAFAEAHAAQAIAAAHgFQAGgEADgKIAAgDIAAgEIAAgOIAAgEIAAgDQgCgHgGgGQgGgEgJAAQgIAAgFAEg");
	this.shape_204.setTransform(635.8,28.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#00A85A").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_205.setTransform(628.8,28.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#00A85A").s().p("AgSAnQgJgEgFgKQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALAAQALAAAHADQAHAFAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLAEIgSABQgMAAgKgGgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_206.setTransform(622.2,30.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#00A85A").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgCgDgBgEQABgEACgDQACgDAEAAQAEAAADADQACADABAEQAAAEgDADQgCADgFAAQgEAAgCgDg");
	this.shape_207.setTransform(615.6,28.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#00A85A").s().p("AggA9IAAh5IBBAAIAAAOIgxAAIAAAoIAtAAIAAAMIgtAAIAAA3g");
	this.shape_208.setTransform(609.8,28.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#00A85A").s().p("AgNAnQgKgFgFgKQgFgKAAgNQAAgMAFgLQAGgLALgFQAKgHANABQAHAAAGABIAJADIgDANIgIgDIgLgCQgKABgGAEQgGAEgEAHQgDAIAAAIQAAAKAEAHQAEAIAGADQAGAFAJAAIALgBIAIgEIADAMQgDACgHACIgPABQgMAAgKgGg");
	this.shape_209.setTransform(597.5,30.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#00A85A").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_210.setTransform(591.3,28.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#00A85A").s().p("AABA3QgDgBgDgEQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABALIgGACIgIABQgGAAgEgCg");
	this.shape_211.setTransform(586.1,29.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#00A85A").s().p("AgSAnQgJgEgFgKQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALAAQALAAAHADQAHAFAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHACIgSABQgMAAgKgGgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_212.setTransform(578.7,30.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#00A85A").s().p("AAVAtIAAgyQAAgHgCgFQgCgGgEgEQgEgEgIAAQgHABgFAEQgGAFgCAHIAAAEIgBADIAAA0IgQAAIAAg/IAAgNIAAgLIANAAIABAPIABAAQACgEAEgEQAEgEAFgCQAGgCAHAAIAKABQAEACAGAEQAEAEADAHQADAHAAALIAAA0g");
	this.shape_213.setTransform(569.2,30.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#00A85A").s().p("AgTA+QgIgCgFgEIAEgMQAEADAHACQAHACAHAAQAIAAAGgDQAGgDAEgHQAEgHgBgKIAAgKIAAAAQgDAGgIAEQgGAEgKAAQgLAAgIgFQgIgGgFgJQgEgJgBgMQABgPAFgKQAGgKAIgGQAKgFAJAAQAHAAAGACQAFACAEAEQADADABAEIABAAIABgNIANAAIAAAKIAAAOIAAAxQAAAPgDAKQgDAJgGAGQgHAGgIACQgJACgHAAIgQgBgAgQgpQgIAJABAPQAAAJACAHQADAGAGAEQAGAEAHAAQAIAAAFgEQAGgEADgHIABgEIAAgEIAAgQIAAgEIgBgDQgCgHgGgFQgFgFgIAAQgLAAgHAJg");
	this.shape_214.setTransform(559,32.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#00A85A").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgBQABgFgCgEQgBgFgEgDQgFgDgHgBQgHAAgFACQgGACgFACIgEgKQAGgEAHgCQAIgCAHABQANAAAHAFQAIAFACAIQADAIAAAJIAAAgIAAALIACAKIgPAAIgBgLIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGABQAHAAAGgFQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_215.setTransform(549.7,30.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#00A85A").s().p("AAuA9IgCg2IgBgQIgBgSIAAgRIgBAAIgHAWIgIAXIgVA7IgMAAIgTg6IgIgXIgGgXIgBAAIAAARIgBASIgBASIgDA0IgPAAIAIh5IAUAAIAVA7IAHAUIAFAUIAAAAIAGgTIAGgVIAXg7IATAAIAIB5g");
	this.shape_216.setTransform(538.3,28.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#00A85A").s().p("AheboMAAAgi/IC9AAMAAAAi/gAheodIAApEIg/AAICdqGICdKGIg+AAIAAJEg");
	this.shape_217.setTransform(447.9,224.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#00A85A").s().p("AheboMAAAgi/IC9AAMAAAAi/gAheodIAApEIg+AAICcqGICeKGIg/AAIAAJEg");
	this.shape_218.setTransform(626.5,224.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#00A85A").s().p("AheboMAAAgi/IC9AAMAAAAi/gAheodIAApEIg+AAICcqGICeKGIg/AAIAAJEg");
	this.shape_219.setTransform(715.8,221.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#00A85A").s().p("AheboMAAAgi/IC9AAMAAAAi/gAheodIAApEIg/AAICdqGICdKGIg+AAIAAJEg");
	this.shape_220.setTransform(537.2,221.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]},73).wait(333));

	// ProtonField
	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],-4.8,-14.6,0,-4.8,-14.6,30.7).s().p("Ag1ClQhEgWghhAQgghBAWhDQAWhEBAghQBBggBDAWQBEAWAhBAQAgBBgWBDQgWBFhAAgQgnATgnAAQgaAAgcgJg");
	this.shape_221.setTransform(476.7,151.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#3C489A").ss(2).p("AA9DuIh5nb");
	this.shape_222.setTransform(476.7,151.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],0.3,-15.4,0,0.3,-15.4,30.7).s().p("AhpCKQg5gtgJhGQgKhHAsg5QAsg5BHgJQBHgJA5ArQA5AsAJBIQAJBGgsA5QgsA5hHAJQgMACgMAAQg4AAgvgkg");
	this.shape_223.setTransform(489.7,372.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#3C489A").ss(2).p("AgWD1IAtnp");
	this.shape_224.setTransform(489.7,372.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],1.5,-15.3,0,1.5,-15.3,30.7).s().p("AhzCBQg2gwgDhIQgFhHAxg1QAwg2BIgEQBHgDA1AvQA2AxADBIQAFBHgxA1QgwA2hIAEIgJAAQhCAAgxgtg");
	this.shape_225.setTransform(573.4,167.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#3C489A").ss(2).p("AgoDzIBRnl");
	this.shape_226.setTransform(573.4,168);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],-1.8,-15.3,0,-1.8,-15.3,30.7).s().p("AhVCXQg+gjgUhGQgThEAkg/QAjg+BFgUQBFgTA+AkQA/AjATBFQAUBFgkA+QgjA/hGATQgYAHgXAAQgrAAgpgXg");
	this.shape_227.setTransform(588.1,238.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#3C489A").ss(2).p("AAND2IgZnq");
	this.shape_228.setTransform(588.1,238.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],-2.5,-15.2,0,-2.5,-15.2,30.7).s().p("AhOCbQhAghgXhEQgWhEAhhAQAhhABEgWQBEgWBAAgQBAAhAWBEQAWBEggBAQghBAhEAWQgcAJgaAAQgoAAgmgTg");
	this.shape_229.setTransform(502.6,311.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#3C489A").ss(2).p("AAXD1Igtno");
	this.shape_230.setTransform(502.6,311.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],-0.4,-15.4,0,-0.4,-15.4,30.7).s().p("AhiCPQg7gpgNhHQgNhFApg8QApg7BHgNQBGgNA7ApQA7ApANBHQANBGgpA7QgpA8hHAMQgRADgPAAQg0AAgtgfg");
	this.shape_231.setTransform(664.8,167.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#3C489A").ss(2).p("AgJD2IATnq");
	this.shape_232.setTransform(664.8,168);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],-4.1,-14.9,0,-4.1,-14.9,30.7).s().p("Ag9CiQhDgagehBQgdhCAahDQAahDBBgdQBCgdBCAaQBDAaAeBBQAdBCgaBCQgaBDhBAeQgjAPgkAAQgeAAgfgMg");
	this.shape_233.setTransform(676.4,235.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#3C489A").ss(2).p("AAxDxIhhnh");
	this.shape_234.setTransform(676.4,235.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],0.6,-15.4,0,0.6,-15.4,30.7).s().p("AhsCIQg4gugIhHQgHhGAtg5QAtg4BHgIQBHgHA4AtQA4AtAIBHQAIBHgtA4QguA4hHAIIgVABQg6AAgwgmg");
	this.shape_235.setTransform(689.2,320.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#3C489A").ss(2).p("AgaD0IA1nn");
	this.shape_236.setTransform(689.2,320.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],0.6,-15.4,0,0.6,-15.4,30.7).s().p("AhsCHQg4gtgHhHQgIhGAtg5QAsg3BIgJQBHgHA3AsQA4AuAIBHQAIBHgtA4QgsA4hIAHIgUACQg7AAgwgng");
	this.shape_237.setTransform(581.8,334.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#3C489A").ss(2).p("AgaD0IA1no");
	this.shape_238.setTransform(581.8,334.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],0.8,-15.4,0,0.8,-15.4,30.7).s().p("AhuCGQg3gugHhIQgHhGAug4QAug3BHgHQBHgHA3AuQA4AuAHBHQAHBHguA3QguA4hIAHIgRABQg9AAgwgog");
	this.shape_239.setTransform(666.6,372.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#3C489A").ss(2).p("AgdD0IA7nn");
	this.shape_240.setTransform(666.6,372.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],2.2,-15.2,0,2.2,-15.2,30.7).s().p("Ah5B8QgzgzgBhHQAAhHAyg0QAzgzBHgBQBHAAA0AyQAzAzABBIQAABHgyAzQgzAzhIABIgBAAQhGAAgzgyg");
	this.shape_241.setTransform(487.9,212.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#3C489A").ss(2).p("AgzDwIBmnf");
	this.shape_242.setTransform(487.9,212.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},215).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).to({state:[{t:this.shape_242,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_241,p:{rotation:0,x:487.9,y:212.9}},{t:this.shape_240,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_239,p:{rotation:0,x:666.6,y:372.4}},{t:this.shape_238,p:{rotation:0,x:581.8}},{t:this.shape_237,p:{rotation:0,x:581.8}},{t:this.shape_236,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_235,p:{rotation:0,x:689.2,y:320.8}},{t:this.shape_234,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_233,p:{rotation:0,x:676.4,y:235.1}},{t:this.shape_232,p:{rotation:0,x:664.8,y:168}},{t:this.shape_231,p:{rotation:0,x:664.8,y:167.9}},{t:this.shape_230,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_229,p:{rotation:0,x:502.6,y:311.9}},{t:this.shape_228,p:{rotation:0,x:588.1,y:238.9}},{t:this.shape_227,p:{rotation:0,x:588.1}},{t:this.shape_226,p:{rotation:0,x:573.4}},{t:this.shape_225,p:{rotation:0,x:573.4,y:167.9}},{t:this.shape_224,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_223,p:{rotation:0,x:489.7,y:372.4}},{t:this.shape_222,p:{rotation:0,x:476.7,y:151.4}},{t:this.shape_221,p:{rotation:0,x:476.7,y:151.4}}]},2).to({state:[{t:this.shape_242,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_241,p:{rotation:-0.4,x:487.6,y:213.7}},{t:this.shape_240,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_239,p:{rotation:-0.4,x:667.5,y:371.7}},{t:this.shape_238,p:{rotation:-0.4,x:582.4}},{t:this.shape_237,p:{rotation:-0.4,x:582.4}},{t:this.shape_236,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_235,p:{rotation:-0.4,x:689.7,y:319.9}},{t:this.shape_234,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_233,p:{rotation:-0.4,x:676.3,y:234.3}},{t:this.shape_232,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_231,p:{rotation:-0.4,x:664.2,y:167.3}},{t:this.shape_230,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_229,p:{rotation:-0.4,x:503.1,y:312.5}},{t:this.shape_228,p:{rotation:-0.4,x:588,y:238.8}},{t:this.shape_227,p:{rotation:-0.4,x:588}},{t:this.shape_226,p:{rotation:-0.4,x:572.8}},{t:this.shape_225,p:{rotation:-0.4,x:572.8,y:168}},{t:this.shape_224,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_223,p:{rotation:-0.4,x:490.6,y:373.1}},{t:this.shape_222,p:{rotation:-0.4,x:476,y:152.3}},{t:this.shape_221,p:{rotation:-0.4,x:476,y:152.3}}]},2).wait(1));

	// 1
	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#373535").s().p("AAIB1IAAjLIAAAAIgoAVIgGgYIAygbIAbAAIAADpg");
	this.shape_243.setTransform(10.4,23.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#009900").s().p("AgtB2QgQgLgKgTQgKgUAAgbQAAgdALgUQAKgVASgLQASgLAVAAQATAAANAIQAOAHAGALIAAAAIAAhoIAgAAIAADSIAAAYIABAVIgcAAIgCgeIAAAAQgIAOgPAKQgPAJgVABQgVgBgRgLgAgZgSQgMAJgGAOQgGAPAAAUQAAASAGAOQAFAPAMAIQALAJAQAAQARAAAMgKQANgKAFgSIABgGIAAgHIAAgfIAAgGIgBgHQgEgOgMgLQgMgKgSgBQgPABgMAIg");
	this.shape_244.setTransform(142.3,23.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#009900").s().p("AgkBQQgTgLgKgUQgKgUgBgaQAAgZAKgWQAKgVASgMQASgMAZgBQAVABAOAHQAOAJAJAMQAHANADAOQAEAOAAAMIgBAIIAAAGIh5AAQAAAVAIANQAJAOAMAGQAOAGAPAAQARAAAMgCQALgDAJgEIAFAXQgJAEgOADQgOAEgVAAQgaAAgTgLgAAugQQAAgKgDgMQgEgMgKgIQgJgJgSAAQgOAAgLAIQgKAIgFAMQgGAMgBALIBbAAIAAAAg");
	this.shape_245.setTransform(123.7,27.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#009900").s().p("AArCAIAAhkQgBgOgEgMQgDgLgJgHQgJgHgPAAQgPAAgLAJQgLAJgFANIgBAHIgBAIIAABpIgfAAIAAj/IAfAAIAABtIABAAQAEgHAGgGQAGgFAHgEQAHgEAIgDQAIgCAIAAQAJAAAKADQALADAKAIQAIAJAHAOQAGAOAAAWIAABog");
	this.shape_246.setTransform(104.7,23.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#009900").s().p("AgiBYQgMgEgKgFIAIgYQAIAFAKADQAMAEAMAAQAQAAAJgHQAHgHABgLQAAgMgIgHQgHgHgRgGQgXgJgMgMQgLgMAAgQQAAgOAIgMQAGgLAOgHQANgHATAAQANAAAKADQALAEAIAEIgIAXIgOgHQgKgDgLAAQgNAAgIAHQgIAHAAAKQABAKAHAHQAJAGAQAGQAWAJAMALQALAMAAAUQAAAXgRAOQgRAOgeABQgPAAgMgDg");
	this.shape_247.setTransform(87.5,27.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#009900").s().p("AgPB5IAAitIAfAAIAACtgAgNhXQgGgGAAgHQABgJAFgGQAGgFAHgBQAJABAGAFQAEAGAAAJQAAAHgEAGQgGAFgJABQgIgBgFgFg");
	this.shape_248.setTransform(76.2,24.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#009900").s().p("AArBZIAAhjQAAgOgEgMQgEgLgIgHQgJgIgPAAQgPAAgLAKQgLAJgFAOIgBAGIgBAIIAABoIgfAAIAAh+IgBgZIgBgWIAcAAIACAdIABAAQAEgIAIgIQAIgHALgFQAMgFANAAQAKAAAKADQALADAJAJQAJAIAHAOQAGAPAAAWIAABng");
	this.shape_249.setTransform(62,27.5);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#009900").s().p("AgOB5IAAitIAeAAIAACtgAgOhXQgEgGgBgHQAAgJAGgGQAFgFAIgBQAJABAFAFQAGAGAAAJQAAAHgGAGQgFAFgJABQgIgBgGgFg");
	this.shape_250.setTransform(47.8,24.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#009900").s().p("AhAB5IAAjxICBAAIAAAaIhiAAIAABRIBbAAIAAAYIhbAAIAABug");
	this.shape_251.setTransform(36.3,24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_243}]}).to({state:[{t:this.shape_243},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244}]},405).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400.8,248.8,340,291.6);
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