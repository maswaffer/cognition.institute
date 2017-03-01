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


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C4C4D").s().p("AAdg3QABACAEABIhDBsg");
	this.shape.setTransform(11.8,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4D").s().p("AhAAAICAgCIgBADIAAACg");
	this.shape_1.setTransform(8.1,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C4C4D").s().p("Aggg1QACAAACgDIA9Bxg");
	this.shape_2.setTransform(19,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C4C4D").s().p("AhAABIgBgDICDADIiCACg");
	this.shape_3.setTransform(22.7,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4D").s().p("Aggg4IBBBwIAAAAIgFABg");
	this.shape_4.setTransform(12,11.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4D").s().p("AgiA2IBFhvIhABzQgCgDgDgBg");
	this.shape_5.setTransform(19,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C4C4D").s().p("AgDBxIgGAHIgFgEIAKgMIAAgGIgJAKIgFgEIANgPIAAgGIgKALIgEgEIANgQIAAgGIgLANIgFgEIAPgSIABgwIgoAaIgIAYIgGgDIAGgRIgGADIgHAVIgGgCIAFgQIgFADIgHAUIgGgCIAFgNIgGACIgGAQIgGgCIAEgJIg5AcIA0gjIgJgCIABgHIAPADIAGgDIgNgDIABgGIATAEIAFgEIgOgCIABgHIAUAEIAFgDIgQgDIABgGIAXAEIArgXIgpgUIgYAEIgBgGIASgDIgFgEIgWAEIgBgGIAPgDIgFgDIgUAEIgBgHIAOgCIgGgEIgQADIgBgGIAKgCIg1gjIA4AbIgDgIIAGgCIAFAPIAGACIgEgMIAGgCIAGASIAGADIgFgOIAGgCIAHATIAFAEIgFgQIAGgCIAHAVIApAaIgCgxIgQgTIAFgEIAMAOIAAgGIgOgRIAEgEIALAMIAAgGIgNgQIAEgEIAKALIAAgHIgLgMIAFgEIAHAHIADg/IAEA+IAGgGIAFAEIgKALIAAAHIAJgKIAFAEIgNAPIAAAGIAKgLIAEAEIgNAQIAAAGIALgNIAFAEIgPASIgBAxIAmgZIAIgXIAGACIgGASIAGgEIAHgUIAGABIgFAQIAFgDIAHgUIAGADIgFANIAGgDIAGgPIAFABIgDAKIA5gcIg0AjIAJABIgBAHIgPgDIgGADIANADIgBAGIgTgDIgFADIAOACIgBAHIgUgEIgGAEIARACIgBAHIgXgFIgqAWIAqAXIAZgFIABAHIgSADIAFADIAWgEIABAGIgPADIAFADIAUgDIABAGIgOADIAGADIAQgDIABAGIgKACIA1AjIg5gbIADAJIgFACIgFgPIgHgDIAFAMIgGADIgGgTIgGgDIAFAOIgGADIgHgUIgFgDIAFAQIgGACIgHgWIgqgaIACAuIAQASIgFAFIgMgOIAAAGIAOARIgEAEIgLgMIAAAGIANAPIgEAFIgKgLIAAAGIALANIgFAEIgHgIIgEA/gAgHACQAAAIAHAAQAEAAACgCQADgCAAgEQAAgDgDgCQgCgCgEgBQgHAAAAAIg");
	this.shape_6.setTransform(15.3,17.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C4C4D").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTgAgqgrQgTASAAAZQAAAaATASQASASAYAAQAaAAASgSQASgSAAgaQAAgZgSgSQgSgSgaAAQgYAAgSASg");
	this.shape_7.setTransform(15.2,17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C4C4D").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgEADAAQAEAAADAEQAEADAAADQAAAEgEADQgDAEgEAAQgDAAgDgEg");
	this.shape_8.setTransform(12.8,22.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgEQADgDADAAQAEAAADADQADAEAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_9.setTransform(17.9,22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4C4C4D").s().p("AgGAIQgDgDAAgFQAAgDADgEQADgCADAAQAEAAADACQADAEAAADQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_10.setTransform(20.5,17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgEADAAQAEAAADAEQADADAAADQAAAEgDADQgDAEgEAAQgDAAgDgEg");
	this.shape_11.setTransform(18.1,13.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_12.setTransform(12.9,12.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4C4C4D").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgDADAAQAEAAADADQADADABADQgBAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_13.setTransform(10,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,30.6,35.1), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C4C4D").s().p("AAdg3QABACAEAAIhDBtg");
	this.shape.setTransform(11.8,24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4D").s().p("Ag/AAICAgCIgBADIAAACg");
	this.shape_1.setTransform(8.1,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C4C4D").s().p("Aggg0IAEgFIA9Byg");
	this.shape_2.setTransform(19,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C4C4D").s().p("AhAABIgBgDICDADIiCACg");
	this.shape_3.setTransform(22.7,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4D").s().p("Aghg4IBDBvIgBAAIgFACg");
	this.shape_4.setTransform(12,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4D").s().p("AghA3IBDhvIg/BxQgCgCgCAAg");
	this.shape_5.setTransform(19,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C4C4D").s().p("AgDBxIgGAHIgFgEIAKgLIAAgHIgJAKIgFgEIANgPIAAgGIgKALIgEgEIANgQIAAgGIgLANIgFgEIAPgSIABgwIgoAaIgIAXIgGgCIAGgRIgGADIgHAVIgGgCIAFgPIgFACIgHAUIgGgCIAFgOIgGADIgGAQIgGgCIAEgKIg5AcIA0gjIgJgBIABgGIAPADIAGgEIgNgDIABgGIATAEIAFgEIgOgCIABgGIAUAEIAFgEIgQgDIABgGIAXAEIArgXIgpgVIgYAFIgBgGIASgEIgFgDIgWAEIgBgGIAPgDIgFgDIgUAEIgBgGIAOgDIgGgEIgQADIgBgGIAKgCIg1gjIA4AcIgDgJIAGgCIAFAOIAGADIgEgMIAGgCIAGASIAGADIgFgOIAGgCIAGAUIAGACIgFgQIAGgCIAHAWIApAZIgCgwIgQgTIAFgEIAMAOIAAgGIgOgRIAEgEIALAMIAAgGIgNgQIAEgEIAKALIAAgHIgLgMIAFgEIAHAHIADg/IAEA/IAGgHIAFAEIgKALIAAAHIAJgKIAFAEIgNAPIAAAGIAKgLIAEAEIgNAQIAAAGIALgNIAFAEIgPASIgBAxIAmgZIAIgXIAGACIgGARIAGgCIAHgVIAGACIgFAPIAFgDIAHgUIAGACIgFAOIAGgDIAGgQIAFACIgDAKIA5gcIg0AjIAJACIgBAGIgPgDIgGAEIANACIgBAGIgTgDIgFADIAOADIgBAGIgUgEIgGADIARAEIgBAGIgXgFIgqAWIAqAXIAZgFIABAGIgSAEIAFADIAWgEIABAGIgPADIAFAEIAUgEIABAGIgOACIAGAEIAQgDIABAGIgKACIA1AjIg5gbIADAIIgFACIgFgOIgHgDIAFAMIgGACIgGgSIgGgDIAFAOIgGACIgHgTIgFgDIAFAQIgGACIgHgWIgqgaIACAuIAQATIgFAEIgMgOIAAAGIAOARIgEAEIgLgMIAAAGIANAQIgEAEIgKgLIAAAHIALAMIgFAEIgHgIIgEBAgAgFgDQgCACAAADQAAAIAHAAQAJAAAAgIQAAgDgDgCQgCgDgEAAQgCAAgDADg");
	this.shape_6.setTransform(15.3,17.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C4C4D").s().p("AgtAvQgTgUAAgbQAAgaATgTQATgTAagBQAbABATATQATATAAAaQAAAbgTAUQgTASgbABQgagBgTgSgAgqgqQgTARAAAZQAAAZATATQASASAYAAQAaAAASgSQASgTAAgZQAAgZgSgRQgSgTgaAAQgYAAgSATg");
	this.shape_7.setTransform(15.2,17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C4C4D").s().p("AgHAHQgCgDAAgEQAAgDACgDQADgDAEAAQAEAAAEADQACADAAADQAAAEgCADQgEADgEAAQgEAAgDgDg");
	this.shape_8.setTransform(12.8,22.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_9.setTransform(17.9,22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_10.setTransform(20.5,17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_11.setTransform(18.1,13.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C4C4D").s().p("AgGAIQgDgDAAgFQAAgDADgEQADgCADAAQAEAAADACQADAEAAADQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_12.setTransform(12.9,13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4C4C4D").s().p("AgHAIQgCgEAAgEQAAgDACgDQADgDAEAAQAEAAAEADQACADAAADQAAAEgCAEQgEADgEAAQgEAAgDgDg");
	this.shape_13.setTransform(10,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,30.6,35.2), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C4C4D").s().p("AAcg3IAGACIhDBtg");
	this.shape.setTransform(11.9,24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4D").s().p("Ag/AAIB/gCIgBADIABACg");
	this.shape_1.setTransform(8.1,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C4C4D").s().p("Aggg1QAEgBABgCIA8Byg");
	this.shape_2.setTransform(19,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C4C4D").s().p("AhAABIgBgDICDADIiCACg");
	this.shape_3.setTransform(22.7,17.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4D").s().p("Aghg4IBDBwIgBAAIgFABg");
	this.shape_4.setTransform(12,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4D").s().p("AghA3IBDhwIg/BzQgCgCgCgBg");
	this.shape_5.setTransform(19,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C4C4D").s().p("AgDBxIgGAHIgFgEIALgLIgBgHIgJAKIgEgEIAMgPIAAgGIgJALIgFgEIANgQIAAgGIgLANIgFgEIAPgSIACgwIgpAaIgIAXIgGgCIAGgRIgGADIgHAVIgGgCIAFgPIgFACIgHAUIgGgCIAFgOIgGADIgFAQIgGgCIADgKIg5AcIA0gjIgJgBIABgGIAPADIAGgEIgNgDIABgGIATAEIAFgDIgOgDIABgGIAUAEIAGgEIgRgDIABgGIAXAEIArgXIgogVIgZAFIgBgGIASgEIgFgDIgWAEIgBgGIAQgDIgFgDIgVAEIgBgGIAOgDIgFgEIgRADIgBgGIAKgCIg0gjIA4AcIgDgJIAGgCIAFAOIAGADIgFgMIAGgCIAHASIAFADIgFgOIAGgCIAHAUIAGADIgGgRIAGgCIAHAWIApAaIgBgxIgRgTIAFgEIAMAOIABgGIgPgRIAFgEIAKAMIABgGIgOgQIAFgEIAJALIAAgHIgKgMIAEgEIAHAIIADhAIAEA/IAGgHIAFAEIgKALIAAAHIAJgKIAFAEIgNAPIAAAGIAKgLIAFAEIgOAQIABAGIALgNIAEAEIgPASIgBAxIAngZIAIgXIAGACIgGARIAFgCIAHgVIAGACIgFAPIAGgDIAGgUIAGACIgFAOIAHgDIAFgQIAGACIgEAKIA5gcIg0AjIAJACIgBAGIgPgDIgGAEIANACIgBAGIgTgDIgFADIAPADIgCAGIgUgEIgFADIAQAEIgBAGIgXgFIgqAWIArAXIAYgFIABAGIgSAEIAFADIAWgEIABAGIgPADIAFAEIAUgEIABAGIgOADIAGADIAQgDIABAGIgKACIA1AjIg4gbIADAIIgGACIgFgOIgGgDIAEANIgGACIgGgTIgFgCIAEANIgGACIgGgTIgGgDIAFAQIgFACIgIgWIgqgaIACAuIAQATIgFAEIgMgOIAAAGIAPARIgFAEIgLgMIAAAGIAOAQIgFAEIgJgLIgBAHIALAMIgFAEIgGgHIgEA/gAgFgDQgCACAAADQAAADACADQADADACAAQAEAAADgDQACgCAAgEQAAgDgCgCQgDgDgEAAQgCAAgDADg");
	this.shape_6.setTransform(15.3,17.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C4C4D").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgUAaAAQAbAAATAUQATATAAAaQAAAbgTATQgTAUgbAAQgaAAgTgUgAgrgrQgSATAAAYQAAAZASATQASASAZAAQAZAAATgSQASgTAAgZQAAgYgSgTQgTgSgZAAQgZAAgSASg");
	this.shape_7.setTransform(15.3,17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C4C4D").s().p("AgGAIQgDgEAAgEQAAgEADgDQADgCADAAQAEAAADACQADADAAAEQAAAEgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_8.setTransform(12.8,22.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C4C4D").s().p("AgGAIQgDgEAAgEQAAgDADgDQADgDADAAQAEAAAEADQADADAAADQAAAEgDAEQgEADgEAAQgDAAgDgDg");
	this.shape_9.setTransform(18,22.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4C4C4D").s().p("AgHAHQgCgDAAgEQAAgDACgDQAEgDADAAQAFAAADADQACADAAADQAAAEgCADQgDADgFAAQgDAAgEgDg");
	this.shape_10.setTransform(20.5,17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4C4C4D").s().p("AgHAIQgCgEAAgEQAAgEACgDQADgCAEAAQAEAAAEACQACADAAAEQAAAEgCAEQgEACgEAAQgEAAgDgCg");
	this.shape_11.setTransform(18.2,13.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C4C4D").s().p("AgGAHQgEgDAAgEQABgDADgDQADgDADgBQAEABADADQAEADAAADQAAAEgEADQgDAEgEAAQgDAAgDgEg");
	this.shape_12.setTransform(12.9,13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgEQADgDADAAQAEAAADADQADAEAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_13.setTransform(10,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,30.6,35.2), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C4C4D").s().p("AAdg3IAEADIhBBsg");
	this.shape.setTransform(11.9,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4D").s().p("AhAAAICBgCQgBABAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIABACg");
	this.shape_1.setTransform(8.2,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C4C4D").s().p("Aggg0QADgCABgCIA9Bxg");
	this.shape_2.setTransform(19,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C4C4D").s().p("AhAABIgBgDICDADIiCACg");
	this.shape_3.setTransform(22.7,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4D").s().p("Aghg4IBDBwIgBAAQgDAAgCABg");
	this.shape_4.setTransform(12,11.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4D").s().p("AgiA2IBFhuIhAByQgBgCgEgCg");
	this.shape_5.setTransform(19,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C4C4D").s().p("AgDBxIgGAHIgEgEIAKgMIgBgGIgJAKIgEgEIANgPIgBgGIgJALIgFgEIANgQIAAgGIgLANIgFgEIAPgSIACgwIgpAaIgIAXIgGgCIAGgRIgGADIgHAVIgGgCIAFgPIgFACIgHAUIgGgCIAFgOIgGADIgFAQIgGgCIADgKIg5AcIA0gjIgJgBIABgHIAPADIAGgDIgNgDIABgGIATAEIAFgEIgOgCIABgHIAVAEIAFgDIgRgDIABgHIAXAFIArgXIgogVIgYAFIgCgGIASgEIgFgDIgWAEIgBgGIAQgDIgFgDIgVAEIgBgHIAOgCIgFgEIgRADIgBgGIAKgCIg0gjIA4AbIgDgIIAGgCIAFAOIAGADIgFgMIAGgCIAHASIAFADIgFgOIAGgCIAHAUIAGACIgGgQIAGgCIAIAWIAoAZIgBgwIgRgTIAFgEIAMAOIABgHIgPgQIAFgEIAKAMIABgGIgOgQIAFgEIAJALIABgHIgLgMIAEgEIAHAHIADg/IAEA+IAGgGIAFAEIgKALIABAHIAIgKIAFAEIgNAPIABAGIAJgLIAFAEIgOAPIABAHIALgNIAEAEIgPASIgBAxIAngZIAIgXIAGACIgGARIAFgDIAHgUIAGABIgFAPIAGgCIAGgUIAGACIgEAOIAGgDIAFgQIAGACIgEAKIA5gcIg0AjIAJACIgBAGIgPgDIgFADIANADIgCAGIgTgEIgFAEIAPACIgCAHIgUgEIgFADIAQADIgBAHIgXgFIgqAWIArAXIAYgFIABAGIgSAEIAGADIAVgEIABAGIgPADIAFADIAUgEIABAHIgOACIAGAEIAQgDIABAGIgKACIA1AjIg4gbIADAIIgGACIgFgOIgGgDIAEAMIgGACIgGgSIgFgDIAEAOIgGACIgGgUIgGgCIAFAQIgFACIgIgWIgqgaIACAuIAQATIgEAEIgNgOIAAAGIAPARIgFAEIgLgMIAAAGIAOAQIgFAEIgJgLIgBAHIALAMIgFAEIgGgIIgEBAgAgHACQAAADACADQADACADAAQADAAADgCQACgDAAgDQAAgIgIAAQgIAAAAAIg");
	this.shape_6.setTransform(15.3,17.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C4C4D").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTgAgrgqQgSASAAAYQAAAaASASQASASAZAAQAaAAASgSQASgSAAgaQAAgYgSgSQgSgTgaAAQgZAAgSATg");
	this.shape_7.setTransform(15.3,17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_8.setTransform(12.8,22.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C4C4D").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgDADAAQAEAAADADQADADABADQgBAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_9.setTransform(18,22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4C4C4D").s().p("AgGAIQgDgDAAgFQAAgDADgDQADgDADAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_10.setTransform(20.5,17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4C4C4D").s().p("AgGAHQgDgDgBgEQABgDADgDQADgDADAAQAEAAADADQAEADAAADQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_11.setTransform(18.2,13.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C4C4D").s().p("AgHAHQgDgDAAgEQAAgDADgDQAEgEADAAQAEAAADAEQADADAAADQAAAEgDADQgDAEgEAAQgDAAgEgEg");
	this.shape_12.setTransform(12.9,13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_13.setTransform(10,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,30.6,35.2), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C4C4D").s().p("AAdg3IAFADIhDBsg");
	this.shape.setTransform(11.8,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4D").s().p("Ag/AAICAgCIgBADIAAACg");
	this.shape_1.setTransform(8.1,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C4C4D").s().p("Aggg0QADgCABgCIA9Bxg");
	this.shape_2.setTransform(19,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C4C4D").s().p("AhAABIgBgDICDADIiCACg");
	this.shape_3.setTransform(22.7,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4D").s().p("Aghg4IBDBwIgBAAIgFABg");
	this.shape_4.setTransform(12,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4D").s().p("AghA2IBEhuIhAByQgCgDgCgBg");
	this.shape_5.setTransform(19,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C4C4D").s().p("AgDBxIgGAHIgFgEIAKgMIAAgGIgJAKIgEgEIAMgPIAAgGIgKALIgEgEIANgQIAAgGIgLANIgFgEIAPgSIACgwIgpAaIgIAXIgGgCIAGgRIgGADIgHAVIgGgCIAFgPIgFACIgHAUIgGgCIAFgOIgGADIgFAQIgGgCIADgKIg5AcIA0gjIgJgBIABgHIAPADIAGgDIgNgDIABgGIATAEIAFgEIgOgCIABgGIAUADIAGgDIgRgDIABgGIAXAEIArgXIgogVIgZAFIgBgGIASgEIgFgDIgWAEIgBgGIAPgDIgEgDIgVAEIgBgGIAOgDIgFgEIgRADIgBgGIAKgCIg1gjIA5AbIgDgIIAFgCIAFAOIAHADIgFgMIAGgCIAGASIAGADIgFgOIAGgCIAHAUIAFACIgFgQIAGgCIAHAWIApAZIgBgwIgRgTIAFgEIAMAOIAAgGIgOgRIAFgEIAKAMIAAgGIgNgQIAEgEIAKALIAAgHIgLgMIAFgEIAHAHIADg/IAEA/IAGgHIAFAEIgKALIAAAHIAJgKIAFAEIgNAPIAAAGIAKgLIAFAEIgOAPIAAAHIAMgNIAEAEIgPASIgBAxIAngZIAHgXIAGACIgGARIAGgDIAHgUIAGACIgFAPIAFgDIAHgUIAGACIgFAOIAGgDIAGgQIAGACIgEAKIA5gcIg0AjIAJACIgBAGIgPgDIgGAEIANACIgBAGIgTgEIgFAEIAOACIgBAHIgUgEIgFADIAQADIgBAHIgXgFIgqAWIArAXIAYgFIABAGIgSAEIAFADIAWgEIABAGIgPADIAFADIAUgEIABAHIgOACIAGAEIAQgDIABAGIgKACIA1AjIg4gbIADAIIgGACIgFgOIgGgDIAEAMIgGACIgGgSIgGgDIAFAOIgGACIgGgTIgGgDIAFAQIgGACIgHgWIgqgaIACAuIAQATIgFAEIgMgOIAAAGIAOARIgEAEIgLgMIAAAGIAOAQIgFAEIgKgLIAAAHIALAMIgFAEIgHgIIgEBAgAgFgDQgCACAAADQAAADACADQADACACAAQAJAAAAgIQAAgIgJAAQgCAAgDADg");
	this.shape_6.setTransform(15.3,17.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C4C4D").s().p("AgtAuQgUgTABgbQgBgaAUgTQATgTAaAAQAbAAATATQAUATgBAaQABAbgUATQgTATgbAAQgaAAgTgTgAgrgqQgSASAAAYQAAAaASASQATASAYAAQAZAAATgSQASgSAAgaQAAgYgSgSQgTgTgZAAQgYAAgTATg");
	this.shape_7.setTransform(15.3,17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_8.setTransform(12.8,22.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C4C4D").s().p("AgHAHQgCgDgBgEQABgDACgDQAEgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgEgDg");
	this.shape_9.setTransform(18,22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4C4C4D").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgEADAAQAEAAADAEQAEADAAADQAAAEgEADQgDAEgEAAQgDAAgDgEg");
	this.shape_10.setTransform(20.5,17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4C4C4D").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgDADAAQAEAAADADQADADABADQgBAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_11.setTransform(18.2,13.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C4C4D").s().p("AgHAHQgCgDAAgEQAAgEACgDQADgDAEAAQAEAAAEADQACADAAAEQAAAEgCADQgEADgEAAQgEAAgDgDg");
	this.shape_12.setTransform(12.9,13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_13.setTransform(10,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,30.6,35.2), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C4C4D").s().p("AAdg3IAEACIhBBtg");
	this.shape.setTransform(11.9,24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4D").s().p("AhAAAICBgCIgCADIAAACg");
	this.shape_1.setTransform(8.2,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C4C4D").s().p("Aggg1QADAAABgDIA9Byg");
	this.shape_2.setTransform(19,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C4C4D").s().p("AhAABIgBgDICDADIiCACg");
	this.shape_3.setTransform(22.7,17.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4D").s().p("Aghg4IBDBwIgBAAQgDgBgCACg");
	this.shape_4.setTransform(12,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4D").s().p("AgiA2IBFhvIhABzQgCgCgDgCg");
	this.shape_5.setTransform(19,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C4C4D").s().p("AgDBxIgGAHIgEgEIAKgLIgBgHIgJAKIgEgEIANgPIgBgGIgJALIgFgEIANgPIAAgHIgLANIgFgEIAPgSIACgvIgpAZIgIAXIgGgCIAGgRIgGADIgHAVIgGgCIAFgPIgFACIgHAUIgGgCIAFgOIgGADIgFAQIgGgCIADgKIg5AdIA0gjIgJgCIABgGIAPADIAGgEIgNgDIABgGIATAEIAFgDIgOgDIABgGIAVAEIAFgEIgRgDIABgGIAXAEIArgXIgogVIgYAFIgCgGIASgDIgFgEIgWAEIgBgGIAQgDIgFgDIgVAEIgBgGIAOgDIgFgEIgRADIgBgGIAKgCIg0gjIA4AcIgDgJIAGgCIAFAOIAGADIgFgMIAGgCIAHASIAFADIgFgOIAGgCIAHAUIAGADIgGgRIAGgCIAIAWIAoAaIgBgxIgRgTIAFgEIAMAOIABgGIgPgRIAFgEIAKAMIABgGIgOgQIAFgEIAJALIAAgHIgKgMIAEgEIAHAIIADhAIAEA/IAGgHIAFAEIgKAMIABAGIAIgKIAFAEIgNAPIABAGIAJgLIAFAEIgOAQIABAGIALgNIAEAEIgPASIgBAxIAngZIAIgXIAGACIgGASIAFgDIAHgVIAGACIgFAPIAGgDIAGgUIAGACIgFAOIAHgDIAFgQIAGACIgEAKIA5gcIg0AjIAJACIgBAGIgPgDIgFAEIANACIgCAGIgTgDIgFADIAPADIgCAGIgUgEIgFADIAQAEIgBAGIgXgFIgqAWIArAXIAYgFIABAGIgSAEIAGADIAVgEIABAGIgPADIAFAEIAUgEIABAGIgOADIAGADIAQgDIABAGIgKACIA1AjIg4gbIADAJIgGACIgFgPIgGgDIAEANIgGACIgGgTIgFgCIAEANIgGACIgGgTIgGgDIAFAQIgFACIgIgWIgqgaIACAuIAQATIgEAEIgNgOIAAAGIAPARIgFAEIgLgMIAAAGIAOAQIgFAEIgJgLIgBAHIALAMIgFAEIgGgHIgEA/gAgFgDQgCACAAADQAAAEACACQADADADAAQADAAADgDQACgDAAgDQAAgDgCgCQgDgDgDAAQgDAAgDADg");
	this.shape_6.setTransform(15.3,17.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C4C4D").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgUAaABQAbgBATAUQATATAAAaQAAAbgTATQgTAUgbgBQgaABgTgUgAgrgrQgSATAAAYQAAAZASATQASASAZAAQAaAAASgSQASgTAAgZQAAgYgSgTQgSgSgaAAQgZAAgSASg");
	this.shape_7.setTransform(15.3,17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C4C4D").s().p("AgGAIQgDgEAAgEQAAgEADgDQADgCADAAQAEAAADACQADADAAAEQAAAEgDAEQgDADgEAAQgDAAgDgDg");
	this.shape_8.setTransform(12.8,22.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C4C4D").s().p("AgHAHQgDgDAAgEQAAgDADgDQAEgDADgBQAEABADADQADADAAADQAAAEgDADQgDAEgEAAQgDAAgEgEg");
	this.shape_9.setTransform(18,22.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4C4C4D").s().p("AgGAHQgDgDgBgEQABgEADgDQADgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_10.setTransform(20.5,17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4C4C4D").s().p("AgGAIQgEgEAAgEQAAgEAEgDQADgCADAAQAEAAADACQAEADAAAEQAAAEgEAEQgDADgEAAQgDAAgDgDg");
	this.shape_11.setTransform(18.2,13.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C4C4D").s().p("AgHAHQgDgDAAgEQAAgDADgDQAEgEADAAQAFAAACAEQADADAAADQAAAEgDADQgCAEgFAAQgDAAgEgEg");
	this.shape_12.setTransform(12.9,13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4C4C4D").s().p("AgGAHQgDgCAAgFQAAgDADgEQADgCADAAQAEAAADACQADAEAAADQAAAFgDACQgDADgEAAQgDAAgDgDg");
	this.shape_13.setTransform(10,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,30.6,35.2), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C4C4D").s().p("AAdg3QACACADAAIhDBtg");
	this.shape.setTransform(11.9,24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4D").s().p("Ag/AAICAgCIgCAEIABABg");
	this.shape_1.setTransform(8.2,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C4C4D").s().p("Aggg1QACgBACgCIA9Byg");
	this.shape_2.setTransform(19,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C4C4D").s().p("AhAABIgBgDICDADIiCACg");
	this.shape_3.setTransform(22.7,17.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4D").s().p("Aghg4IBDBvIgBAAIgFACg");
	this.shape_4.setTransform(12.1,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4D").s().p("AgiA3IBEhwIg+BzQgDgDgDAAg");
	this.shape_5.setTransform(19,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C4C4D").s().p("AgDByIgGAGIgEgEIAKgLIgBgHIgIAKIgGgEIAOgPIgBgGIgKALIgEgEIANgPIAAgHIgMANIgEgEIAPgSIABgvIgoAZIgIAXIgGgCIAGgRIgGADIgHAVIgGgCIAFgPIgFADIgHATIgGgCIAFgOIgGADIgFAQIgHgCIAEgKIg5AdIA0gjIgJgCIABgGIAQADIAFgEIgNgDIABgGIATAEIAFgDIgOgDIABgGIAVAEIAEgEIgQgDIABgGIAXAEIArgXIgpgVIgXAFIgCgGIASgDIgFgEIgWAEIgBgGIAPgDIgFgDIgUAEIgBgGIAOgDIgGgEIgQADIgBgGIAKgCIg1gjIA5AcIgEgJIAHgCIAEAPIAGACIgEgMIAGgCIAGASIAGADIgFgOIAGgCIAGAUIAGADIgFgQIAGgCIAHAVIApAaIgCgxIgQgTIAFgEIAMAOIAAgGIgOgRIAEgEIALAMIABgGIgPgQIAGgEIAJALIABgHIgMgMIAFgEIAHAIIADhAIAEA/IAGgHIAFAEIgKAMIABAGIAIgKIAEAEIgMAPIABAGIAJgLIAEAEIgNAQIABAGIAKgNIAGAEIgQASIgBAxIAmgZIAIgXIAHACIgHASIAGgDIAIgVIAFACIgFAPIAFgDIAHgTIAGACIgFANIAHgDIAEgPIAHACIgDAJIA4gcIg0AjIAJACIgBAGIgPgDIgFAEIAMACIgBAGIgTgDIgFADIAOADIgBAGIgUgEIgGADIARAEIgBAGIgXgFIgqAWIAqAXIAZgFIABAGIgSAEIAGAEIAVgFIABAGIgQADIAFAEIAVgEIABAGIgOADIAFADIARgDIABAGIgKACIA1AjIg4gbIACAJIgFACIgGgPIgGgDIAFANIgGACIgHgTIgEgCIAEANIgFACIgIgTIgFgDIAFAQIgGACIgHgWIgqgZIACAtIAQATIgFAEIgMgOIAAAHIAPAQIgGAEIgJgMIgBAGIANAQIgEAEIgJgLIgBAHIALAMIgFAEIgGgHIgFA/gAgFgDQgCADgBACQABAEACACQADADACAAQAEAAADgDQACgCAAgEQAAgCgCgDQgDgDgEAAQgCAAgDADg");
	this.shape_6.setTransform(15.3,17.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C4C4D").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTgAgrgrQgSASAAAZQAAAZASATQASASAZAAQAaAAASgSQASgTAAgZQAAgZgSgSQgSgSgaAAQgZAAgSASg");
	this.shape_7.setTransform(15.3,17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C4C4D").s().p("AgHAIQgCgEAAgEQAAgEACgDQADgCAEAAQAEAAAEACQACADAAAEQAAAEgCAEQgEACgEAAQgEAAgDgCg");
	this.shape_8.setTransform(12.9,22.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C4C4D").s().p("AgGAIQgEgEAAgEQABgDADgDQADgDADAAQAEAAADADQAEADAAADQAAAEgEAEQgDADgEAAQgDAAgDgDg");
	this.shape_9.setTransform(18,22.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgEADAAQAEAAADAEQADADAAADQAAAEgDADQgDADgEABQgDgBgDgDg");
	this.shape_10.setTransform(20.5,17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4C4C4D").s().p("AgHAIQgCgEAAgEQAAgEACgDQAEgCADAAQAEAAAEACQACADAAAEQAAAEgCAEQgEACgEAAQgDAAgEgCg");
	this.shape_11.setTransform(18.2,13.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_12.setTransform(12.9,13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgEQACgDAEAAQAEAAAEADQACAEAAADQAAAEgCADQgEADgEAAQgEAAgCgDg");
	this.shape_13.setTransform(10.1,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,30.6,35.2), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C4C4D").s().p("AAdg3IAFADIhDBsg");
	this.shape.setTransform(11.8,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4D").s().p("AhAAAICBgCIgCADIAAACg");
	this.shape_1.setTransform(8.1,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C4C4D").s().p("Aggg0IAEgEIA9Bxg");
	this.shape_2.setTransform(19,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C4C4D").s().p("AhAABIgBgDICDADIiCACg");
	this.shape_3.setTransform(22.7,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4D").s().p("Aghg4IBCBwIAAAAIgFABg");
	this.shape_4.setTransform(12,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4D").s().p("AghA2IBDhuIg/ByQgBgCgDgCg");
	this.shape_5.setTransform(19,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C4C4D").s().p("AgDBxIgGAHIgFgEIAKgMIAAgGIgJAKIgEgEIAMgPIAAgGIgKALIgEgEIANgQIAAgGIgLANIgFgEIAPgSIACgwIgpAaIgIAXIgGgCIAGgRIgGADIgHAVIgGgCIAFgPIgFACIgHAUIgGgCIAFgOIgGADIgGAQIgFgCIADgKIg5AcIA0gjIgJgBIABgHIAPADIAGgDIgNgDIABgGIATAEIAFgEIgOgCIABgGIAUADIAGgDIgRgDIABgGIAXAEIArgXIgpgVIgYAFIgBgGIASgEIgFgDIgWAEIgBgGIAPgDIgFgDIgUAEIgBgGIAOgDIgGgEIgQADIgBgGIAKgCIg1gjIA4AbIgDgIIAGgCIAFAOIAGADIgEgMIAGgCIAGASIAGADIgFgOIAGgCIAHAUIAFACIgFgQIAGgCIAHAWIApAZIgCgwIgQgTIAFgEIAMAOIAAgGIgOgRIAFgEIAKAMIAAgGIgNgQIAEgEIAKALIAAgHIgLgMIAFgEIAHAHIADg/IAEA/IAGgHIAFAEIgKALIAAAHIAJgKIAFAEIgNAPIAAAGIAKgLIAFAEIgOAPIAAAHIALgNIAFAEIgPASIgBAxIAmgZIAIgXIAGACIgGARIAGgDIAHgUIAGACIgFAPIAFgDIAHgUIAGACIgFAOIAGgDIAGgQIAGACIgEAKIA5gcIg0AjIAJACIgBAGIgPgDIgGAEIANACIgBAGIgTgEIgFAEIAOACIgBAHIgUgEIgGADIARADIgBAHIgXgFIgqAWIArAXIAYgFIABAGIgSAEIAFADIAWgEIABAGIgPADIAFADIAUgEIABAHIgOACIAGAEIAQgDIABAGIgKACIA1AjIg4gbIADAIIgGACIgFgOIgGgDIAEAMIgGACIgGgSIgGgDIAFAOIgGACIgHgTIgFgDIAFAQIgGACIgHgWIgqgaIACAuIAQATIgFAEIgMgOIAAAGIAOARIgEAEIgLgMIAAAGIANAQIgEAEIgKgLIAAAHIALAMIgFAEIgHgIIgEBAgAgFgDQgCACAAADQAAADACADQADACACAAQAEAAACgCQADgDAAgDQAAgDgDgCQgCgDgEAAQgCAAgDADg");
	this.shape_6.setTransform(15.3,17.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C4C4D").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTgAgrgqQgSASAAAYQAAAaASASQASASAZAAQAZAAATgSQASgSAAgaQAAgYgSgSQgTgTgZAAQgZAAgSATg");
	this.shape_7.setTransform(15.3,17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C4C4D").s().p("AgGAHQgDgDgBgEQABgDADgDQADgDADAAQAEAAADADQAEADAAADQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_8.setTransform(12.8,22.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_9.setTransform(17.9,22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4C4C4D").s().p("AgHAHQgDgDAAgEQAAgDADgDQAEgDADgBQAEABADADQADADAAADQAAAEgDADQgDAEgEAAQgDAAgEgEg");
	this.shape_10.setTransform(20.5,17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_11.setTransform(18.1,13.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQACgEAEAAQAEAAAEAEQADADAAADQAAAEgDADQgEADgEABQgEgBgCgDg");
	this.shape_12.setTransform(12.9,13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4C4C4D").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgDADAAQAEAAADADQAEADAAADQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_13.setTransform(10,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,30.6,35.2), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C4C4D").s().p("AAdg3IAFADIhDBsg");
	this.shape.setTransform(11.8,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4D").s().p("AhAAAICBgCIgCADIAAACg");
	this.shape_1.setTransform(8.1,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C4C4D").s().p("Aggg1QADAAACgDIA8Bxg");
	this.shape_2.setTransform(19,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C4C4D").s().p("AhAABIgBgDICDADIiCACg");
	this.shape_3.setTransform(22.7,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4D").s().p("Aghg4IBCBwIAAAAIgFABg");
	this.shape_4.setTransform(12,11.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4D").s().p("AghA2IBDhvIg/BzQgCgDgCgBg");
	this.shape_5.setTransform(19,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C4C4D").s().p("AgDBxIgGAIIgFgFIAKgLIAAgHIgJAKIgEgEIAMgPIAAgGIgKALIgEgEIANgPIAAgHIgLANIgFgEIAPgSIACgvIgpAZIgIAXIgGgBIAGgSIgGADIgHAVIgGgDIAFgOIgFADIgHATIgGgCIAFgOIgGAEIgFAPIgGgCIADgKIg5AcIA0gjIgJgCIABgFIAPADIAGgFIgNgCIABgGIATAEIAFgDIgOgEIABgFIAUADIAGgDIgRgDIABgGIAXAEIArgXIgogVIgZAFIgBgGIASgDIgFgEIgWAEIgBgGIAQgDIgFgEIgVAFIgBgGIAOgDIgFgEIgRAEIgBgHIAKgCIg1gjIA5AcIgDgJIAGgCIAFAOIAGAEIgFgNIAGgCIAHASIAFADIgFgOIAGgCIAHAUIAFACIgFgQIAGgCIAHAXIApAYIgBgwIgRgSIAFgFIAMAOIABgHIgPgQIAFgEIAKAMIAAgGIgNgPIAEgFIAKALIAAgGIgKgNIAEgEIAHAIIADg/IAEA+IAGgIIAFAFIgKAMIAAAGIAJgKIAFAEIgNAPIAAAGIAKgLIAFAEIgOAPIABAHIALgNIAEAEIgPASIgBAwIAngXIAIgYIAFACIgFARIAFgCIAHgWIAGADIgFAOIAFgCIAHgTIAGABIgFAOIAGgDIAGgPIAGACIgEAJIA5gcIg0AjIAJACIgBAGIgPgDIgGAEIANACIgBAGIgTgEIgFAEIAOADIgBAFIgUgDIgFADIAQAEIgBAFIgXgEIgqAWIArAXIAYgFIABAGIgSAEIAFADIAWgEIABAGIgPAEIAFADIAUgFIABAGIgOADIAGAEIAQgDIABAGIgKACIA1AjIg4gbIADAIIgGACIgFgOIgGgDIAEANIgGABIgGgSIgGgCIAFANIgGACIgGgUIgGgCIAFAQIgGACIgHgWIgqgZIACAtIAQATIgFAEIgMgOIAAAHIAOAQIgEAEIgLgMIAAAGIAOAQIgFAEIgKgLIAAAHIALAMIgFAEIgHgHIgDA/gAgHACQAAADACADQADADACAAQAJAAAAgJQAAgIgJABQgHgBAAAIg");
	this.shape_6.setTransform(15.3,17.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C4C4D").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTgAgrgrQgSASAAAZQAAAaASASQASASAZAAQAZAAATgSQASgSAAgaQAAgZgSgSQgTgSgZAAQgZAAgSASg");
	this.shape_7.setTransform(15.3,17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C4C4D").s().p("AgGAIQgDgDAAgFQAAgDADgEQADgCADAAQAEAAADACQADAEAAADQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_8.setTransform(12.8,22.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C4C4D").s().p("AgHAIQgCgEAAgEQAAgDACgEQADgCAEAAQAEAAAEACQACAEAAADQAAAEgCAEQgEACgEAAQgEAAgDgCg");
	this.shape_9.setTransform(18,22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4C4C4D").s().p("AgHAHQgCgDgBgEQABgDACgDQAEgEADAAQAFAAACAEQADADAAADQAAAEgDADQgCAEgFAAQgDAAgEgEg");
	this.shape_10.setTransform(20.5,17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4C4C4D").s().p("AgHAIQgCgDAAgFQAAgDACgEQADgCAEAAQAEAAAEACQACAEAAADQAAAFgCADQgEACgEAAQgEAAgDgCg");
	this.shape_11.setTransform(18.2,13.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAAEADQADADAAADQAAAEgDADQgEADgEAAQgDAAgDgDg");
	this.shape_12.setTransform(12.9,12.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_13.setTransform(10,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,30.6,35.1), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C4C4D").s().p("AAcg3QADADACAAIhBBsg");
	this.shape.setTransform(11.9,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4D").s().p("AhAAAICBgCIgBADIAAACg");
	this.shape_1.setTransform(8.1,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C4C4D").s().p("Aggg0QADgCABgDIA9Byg");
	this.shape_2.setTransform(19,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C4C4D").s().p("AhAABQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAgBICDADIiCACg");
	this.shape_3.setTransform(22.7,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4D").s().p("Aghg4IBDBvIgBAAIgFACg");
	this.shape_4.setTransform(12,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4D").s().p("AghA3IBEhwIhAByQgBgCgDAAg");
	this.shape_5.setTransform(19,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C4C4D").s().p("AgDBxIgGAHIgFgEIALgLIgBgHIgJAKIgEgEIAMgPIAAgGIgKALIgEgEIANgQIAAgGIgLANIgFgEIAPgSIACgwIgpAaIgIAXIgGgCIAGgRIgGADIgHAVIgGgCIAFgPIgFACIgHAUIgGgCIAFgOIgGADIgFAQIgGgCIADgKIg5AcIA0gjIgJgBIABgGIAPACIAGgDIgNgDIABgGIATAEIAFgEIgOgCIABgGIAUAEIAGgEIgRgDIABgGIAXAEIArgXIgogVIgZAFIgBgGIASgEIgFgDIgWAEIgBgGIAQgDIgFgDIgVAEIgBgGIAOgDIgFgEIgRADIgBgGIAKgCIg1gjIA5AbIgDgIIAGgCIAFAOIAGADIgFgMIAGgCIAHASIAFADIgFgOIAGgCIAHAUIAFACIgFgQIAGgCIAHAWIApAZIgBgwIgRgTIAFgEIAMAOIABgGIgPgRIAFgEIAKAMIAAgGIgNgQIAFgEIAJALIAAgHIgKgMIAEgEIAHAHIADg/IAEA/IAGgHIAFAEIgKALIAAAHIAJgKIAFAEIgNAPIAAAGIAKgLIAFAEIgOAQIABAGIALgNIAEAEIgPASIgBAxIAngZIAIgXIAFACIgFARIAFgDIAHgUIAGACIgFAPIAGgDIAGgUIAGACIgFAOIAGgDIAGgQIAGACIgEAKIA5gcIg0AjIAJACIgBAGIgPgDIgGAEIANACIgBAGIgTgEIgFAEIAOADIgBAGIgUgEIgFADIAQAEIgBAGIgXgFIgqAWIArAXIAYgFIABAGIgSAEIAFADIAWgEIABAGIgPADIAFAEIAUgEIABAGIgOACIAGAEIAQgDIABAGIgKACIA1AjIg4gbIADAIIgGACIgFgOIgGgDIAEAMIgGACIgGgSIgGgDIAFAOIgGACIgGgTIgGgDIAFAQIgGACIgHgWIgqgaIACAuIAQATIgFAEIgMgOIAAAGIAOARIgEAEIgLgMIAAAGIAOAQIgFAEIgKgLIAAAHIALAMIgFAEIgHgIIgDBAgAgFgDQgCACAAADQAAAIAHAAQAJAAAAgIQAAgDgCgCQgDgDgEAAQgCAAgDADg");
	this.shape_6.setTransform(15.3,17.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C4C4D").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTgAgrgqQgSASAAAYQAAAaASASQASASAZAAQAZAAATgSQASgSAAgaQAAgYgSgSQgTgTgZAAQgZAAgSATg");
	this.shape_7.setTransform(15.3,17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_8.setTransform(12.8,22.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C4C4D").s().p("AgHAHQgCgDAAgEQAAgDACgDQADgDAEAAQAEAAAEADQACADAAADQAAAEgCADQgEADgEAAQgEAAgDgDg");
	this.shape_9.setTransform(18,22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4C4C4D").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgDADAAQAEAAADADQADADABADQgBAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_10.setTransform(20.5,17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4C4C4D").s().p("AgHAHQgDgDAAgEQAAgDADgDQADgDAEAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_11.setTransform(18.2,13.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C4C4D").s().p("AgHAIQgCgEAAgEQAAgEACgDQAEgCADAAQAFAAADACQACADAAAEQAAAEgCAEQgEACgEAAQgDAAgEgCg");
	this.shape_12.setTransform(12.9,13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADgBQAEABADADQADADAAADQAAAEgDADQgDAEgEAAQgDAAgDgEg");
	this.shape_13.setTransform(10,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,30.6,35.2), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#393769","#F9ED41"],[0,1],0,-38.9,0,39).s().p("ACyEGIApgDQgkjNiRicQiYinjZgyIAQhFQB1AbBnA8QBnA9BSBYQBSBaA0BrQAwBjASBtIhHAGIAEAZIBGgKIgDgVIAqgDIhCCLg");
	this.shape.setTransform(132.8,44.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EE3338","#F9ED41"],[0,1],0,34.4,0,-34.4).s().p("AmHEWIB+hXIAEAoIgZAFIAKBFIAVgDIADAqgAj/EuIgGhHQDVglCeiYQCoieAtjjIBFAOQgxD4i4CvQiwCojuAogAkFDng");
	this.shape_1.setTransform(122.2,131.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F9ED41","#EE3338"],[0,1],0,-39.2,0,39.3).s().p("AhdChQiqiwgpjxIBGgGIgEgYIhGAKIAEAUIgqAEIBBiMIBZB/IgqADQAnDYCZCeQCgCpDlAqIgNBGQj8gvivi5g");
	this.shape_2.setTransform(34.8,122.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#F9ED41","#393769"],[0,1],0,34.6,0,-34.6).s().p("AmIFNQAwj7C5ivQCwipDwgpIAGBGQjXAnieCYQipCggrDkgAEHjpIAYgDIgKhGIgUADIgEgqICMBBIh/BZg");
	this.shape_3.setTransform(43.7,34.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,166,166), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C4C4D").s().p("AAdg3QABACAEABIhDBsg");
	this.shape.setTransform(11.8,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4D").s().p("AhAAAICAgCIgBADIAAACg");
	this.shape_1.setTransform(8.1,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C4C4D").s().p("Aggg1QACAAACgDIA9Bxg");
	this.shape_2.setTransform(19,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C4C4D").s().p("AhAABIgBgDICDADIiCACg");
	this.shape_3.setTransform(22.7,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4D").s().p("Aggg4IBBBwIAAAAIgFABg");
	this.shape_4.setTransform(12,11.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4D").s().p("AgiA2IBFhvIhABzQgCgDgDgBg");
	this.shape_5.setTransform(19,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C4C4D").s().p("AgDByIgGAGIgFgEIAKgLIAAgHIgJAKIgFgEIANgPIAAgGIgKALIgEgEIANgQIAAgGIgLANIgFgEIAPgRIABgxIgoAaIgIAYIgGgCIAGgSIgGADIgHAUIgGgBIAFgQIgFAEIgHATIgGgCIAFgOIgGADIgGAQIgGgCIAEgJIg5AbIA0gjIgJgBIABgHIAPAEIAGgFIgNgCIABgGIATAEIAFgEIgOgCIABgHIAUAFIAFgEIgQgDIABgHIAXAFIArgXIgpgUIgYAEIgBgGIASgEIgFgDIgWAEIgBgGIAPgDIgFgDIgUADIgBgFIAOgDIgGgEIgQADIgBgGIAKgCIg1gjIA4AcIgDgJIAGgCIAFAOIAGADIgEgMIAGgCIAGASIAGADIgFgOIAGgCIAHATIAFAEIgFgRIAGgBIAHAVIApAZIgCgwIgQgSIAFgFIAMAOIAAgGIgOgRIAEgEIALAMIAAgGIgNgPIAEgFIAKALIAAgGIgLgNIAFgEIAHAIIADg/IAEA9IAGgGIAFAEIgKALIAAAHIAJgKIAFAEIgNAPIAAAGIAKgLIAEAEIgNAQIAAAGIALgNIAFAEIgPARIgBAyIAmgZIAIgXIAGACIgGASIAGgEIAHgVIAGACIgFAPIAFgCIAHgTIAGACIgFANIAGgDIAGgQIAFACIgDAKIA5gcIg0AjIAJABIgBAHIgPgDIgGADIANADIgBAGIgTgDIgFADIAOACIgBAGIgUgDIgGADIARADIgBAGIgXgDIgqAVIAqAXIAZgFIABAHIgSADIAFAEIAWgFIABAGIgPADIAFAEIAUgFIABAHIgOACIAGAEIAQgDIABAGIgKACIA1AjIg5gbIADAJIgFABIgFgOIgHgDIAFANIgGACIgGgTIgGgDIAFAOIgGACIgHgUIgFgCIAFAQIgGACIgHgWIgqgaIACAuIAQATIgFAEIgMgOIAAAGIAOARIgEAEIgLgMIAAAGIANAQIgEAEIgKgLIAAAHIALAMIgFAEIgHgHIgEA/gAgHACQAAAIAHAAQAEABACgDQADgDAAgDQAAgIgJAAQgHAAAAAIg");
	this.shape_6.setTransform(15.3,17.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C4C4D").s().p("AgtAuQgTgTgBgbQABgaATgTQATgTAaAAQAbAAAUATQASATABAaQgBAbgSATQgUATgbAAQgaAAgTgTgAgqgrQgTASAAAZQAAAaATASQARASAZAAQAZAAATgSQASgSAAgaQAAgZgSgSQgTgSgZAAQgZAAgRASg");
	this.shape_7.setTransform(15.3,17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C4C4D").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgDADAAQAEAAADADQAEADAAADQAAAFgEADQgDADgEAAQgDAAgDgDg");
	this.shape_8.setTransform(12.8,22.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgEADAAQAEAAADAEQADADAAADQAAAEgDADQgDAEgEAAQgDAAgDgEg");
	this.shape_9.setTransform(17.9,22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4C4C4D").s().p("AgGAIQgDgDAAgFQAAgDADgEQADgDADAAQAEAAADADQADAEAAADQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_10.setTransform(20.5,17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4C4C4D").s().p("AgGAIQgDgDAAgFQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_11.setTransform(18.1,13.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_12.setTransform(12.9,12.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4C4C4D").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgDADAAQAEAAADADQADADABADQgBAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_13.setTransform(10,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,30.6,35.1), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C4C4D").s().p("AAdg3QACACACABIhBBsg");
	this.shape.setTransform(11.9,24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4D").s().p("Ag/AAICAgCIgBADIAAACg");
	this.shape_1.setTransform(8.1,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C4C4D").s().p("Aggg1QADgBABgCIA9Byg");
	this.shape_2.setTransform(19,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C4C4D").s().p("AhAABIgBgDICDADIiCACg");
	this.shape_3.setTransform(22.7,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4D").s().p("Aghg4IBDBwIgBAAIgFABg");
	this.shape_4.setTransform(12,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4D").s().p("AgiA2IBFhvIhABzQgCgCgDgCg");
	this.shape_5.setTransform(19,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C4C4D").s().p("AgDBxIgGAHIgFgEIALgLIgBgHIgJAKIgEgEIAMgPIAAgGIgJALIgFgEIANgQIAAgGIgLANIgFgEIAPgSIACgwIgpAaIgIAXIgGgCIAGgRIgGADIgHAVIgGgCIAFgPIgFACIgHAUIgGgCIAFgOIgGADIgFAQIgGgCIADgKIg5AcIA0gjIgJgBIABgGIAPADIAGgEIgNgDIABgGIATAEIAFgDIgOgDIABgGIAUAEIAGgEIgRgDIABgGIAXAEIArgXIgogVIgZAFIgBgGIASgEIgFgDIgWAEIgBgGIAQgDIgFgDIgVAEIgBgGIAOgDIgFgEIgRADIgBgGIAKgCIg1gjIA5AcIgDgJIAGgCIAFAOIAGADIgFgMIAGgCIAHASIAFADIgFgOIAGgCIAHAUIAGACIgGgQIAGgCIAHAWIApAZIgBgwIgRgTIAFgEIAMAOIABgGIgPgRIAFgEIAKAMIAAgGIgNgQIAFgEIAJALIAAgHIgKgMIAEgEIAHAIIADhAIAEA/IAGgHIAFAEIgKALIAAAHIAJgKIAFAEIgNAPIAAAGIAKgLIAFAEIgOAQIABAGIALgNIAEAEIgPASIgBAxIAngZIAIgXIAFACIgFARIAFgCIAHgVIAGACIgFAPIAGgDIAGgUIAGACIgFAOIAGgDIAGgQIAGACIgEAKIA5gcIg0AjIAJACIgBAGIgPgDIgGAEIANACIgBAGIgTgDIgFADIAOADIgBAGIgUgEIgFADIAQAEIgBAGIgXgFIgqAWIArAXIAYgFIABAGIgSAEIAFADIAWgEIABAGIgPADIAFAEIAUgEIABAGIgOACIAGAEIAQgDIABAGIgKACIA1AjIg4gbIADAIIgGACIgFgOIgGgDIAEAMIgGACIgGgSIgGgCIAFANIgGACIgGgTIgGgDIAFAQIgGACIgHgWIgqgaIACAuIAQATIgFAEIgMgOIAAAGIAOARIgEAEIgLgMIAAAGIAOAQIgFAEIgKgLIAAAHIALAMIgFAEIgHgHIgDA/gAgFgDQgCACAAADQAAAIAHAAQAJAAAAgIQAAgDgCgCQgDgDgEAAQgCAAgDADg");
	this.shape_6.setTransform(15.3,17.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C4C4D").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgUAaABQAbgBATAUQATATAAAaQAAAbgTATQgTAUgbgBQgaABgTgUgAgrgrQgSATAAAYQAAAaASASQASARAZAAQAZAAATgRQASgSAAgaQAAgYgSgTQgTgSgZAAQgZAAgSASg");
	this.shape_7.setTransform(15.3,17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C4C4D").s().p("AgGAIQgDgEAAgEQAAgEADgDQADgCADAAQAEAAADACQADADAAAEQAAAEgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_8.setTransform(12.8,22.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C4C4D").s().p("AgHAHQgDgDAAgEQAAgDADgDQAEgDADgBQAEABADADQADADAAADQAAAEgDADQgDAEgEAAQgDAAgEgEg");
	this.shape_9.setTransform(18,22.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4C4C4D").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgDADAAQAEAAADADQAEADAAADQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_10.setTransform(20.5,17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4C4C4D").s().p("AgGAIQgEgEAAgEQAAgEAEgDQADgCADAAQAEAAADACQADADABAEQgBAEgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_11.setTransform(18.2,13.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C4C4D").s().p("AgHAHQgCgDAAgEQAAgDACgDQAEgEADAAQAFAAADAEQACADAAADQAAAEgCADQgDAEgFAAQgDAAgEgEg");
	this.shape_12.setTransform(12.9,13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgEQADgDADAAQAEAAADADQADAEAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_13.setTransform(10,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,30.6,35.2), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C4C4D").s().p("AAdg3QABACAEABIhDBsg");
	this.shape.setTransform(11.8,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4D").s().p("Ag/AAIB/gCIgBADIAAACg");
	this.shape_1.setTransform(8.1,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C4C4D").s().p("Aggg0IAEgEIA9Bxg");
	this.shape_2.setTransform(19,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C4C4D").s().p("AhAABIgBgDICDADIiCACg");
	this.shape_3.setTransform(22.7,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4D").s().p("Aggg4IBBBvIAAAAIgFACg");
	this.shape_4.setTransform(12,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4D").s().p("AgiA2IBFhuIhABxQgBgCgEgBg");
	this.shape_5.setTransform(19,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C4C4D").s().p("AgDBxIgGAHIgFgEIAKgMIAAgGIgJAKIgFgEIANgPIAAgGIgKALIgEgEIANgQIAAgGIgLANIgFgEIAPgSIABgwIgoAaIgIAXIgGgCIAGgRIgGADIgHAVIgGgCIAFgPIgFACIgHAUIgGgCIAFgOIgGADIgGAQIgGgCIAEgKIg5AcIA0gjIgJgBIABgHIAPADIAGgDIgNgDIABgGIATAEIAFgEIgOgCIABgGIAUADIAFgDIgQgDIABgGIAXAEIArgXIgpgVIgYAFIgBgGIASgEIgFgDIgWAEIgBgGIAPgDIgFgDIgUAEIgBgHIAOgCIgGgEIgQADIgBgGIAKgCIg1gjIA4AbIgDgIIAGgCIAFAOIAGADIgEgMIAGgCIAGASIAGADIgFgOIAGgCIAHAUIAFACIgFgQIAGgCIAHAWIApAZIgCgwIgQgTIAFgEIAMAOIAAgGIgOgRIAEgEIALAMIAAgGIgNgQIAEgEIAKALIAAgHIgLgMIAFgEIAHAHIADg/IAEA/IAGgHIAFAEIgKALIAAAHIAJgKIAFAEIgNAPIAAAGIAKgLIAEAEIgNAPIAAAHIALgNIAFAEIgPASIgBAxIAmgZIAIgXIAGACIgGARIAGgDIAHgUIAGACIgFAPIAFgDIAHgUIAGACIgFAOIAGgDIAGgQIAFACIgDAKIA5gcIg0AjIAJACIgBAGIgPgDIgGADIANADIgBAGIgTgEIgFAEIAOACIgBAHIgUgEIgGADIARADIgBAHIgXgFIgqAWIAqAXIAZgFIABAGIgSAEIAFADIAWgEIABAGIgPADIAFADIAUgEIABAHIgOACIAGAEIAQgDIABAGIgKACIA1AjIg5gbIADAIIgFACIgFgOIgHgDIAFAMIgGACIgGgSIgGgDIAFAOIgGACIgHgTIgFgDIAFAQIgGACIgHgWIgqgaIACAuIAQATIgFAEIgMgOIAAAGIAOARIgEAEIgLgMIAAAGIANAQIgEAEIgKgLIAAAHIALAMIgFAEIgHgIIgEBAgAgHACQAAAIAHAAQAEAAACgCQADgDAAgDQAAgIgJAAQgHAAAAAIg");
	this.shape_6.setTransform(15.3,17.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C4C4D").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTgAgqgqQgTASAAAYQAAAaATASQASASAYAAQAaAAASgSQASgSAAgaQAAgYgSgSQgSgTgaAAQgYAAgSATg");
	this.shape_7.setTransform(15.2,17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C4C4D").s().p("AgHAHQgDgDABgEQgBgDADgDQAEgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgEgDg");
	this.shape_8.setTransform(12.8,22.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_9.setTransform(17.9,22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgEQADgDADAAQAEAAADADQADAEAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_10.setTransform(20.5,17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_11.setTransform(18.1,13.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C4C4D").s().p("AgGAIQgDgEAAgEQAAgEADgDQADgCADAAQAEAAADACQADADAAAEQAAAEgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_12.setTransform(12.9,13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4C4C4D").s().p("AgHAHQgCgDAAgEQAAgDACgDQADgDAEAAQAEAAAEADQACADAAADQAAAEgCADQgEADgEAAQgEAAgDgDg");
	this.shape_13.setTransform(10,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,30.6,35.2), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFDE31","#EE3338"],[0,1],0,12.8,0,-12.7).s().p("Agih/ICqDXIkPAog");
	this.shape.setTransform(83.7,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFDE31","#EE3338"],[0,1],0,71.2,0,-71.1).s().p("AlNJ1QArgdAuglIAxgpIAxguIAygzIAxg3QA4hGAig2QAwhMAfg9QAkhKAahFQAchQAPhAQAThMAHg+QAHguAEhNIgDiUIgNhsIDggQIgECtIgPB3QgQBXgPAzQgRBEgfBRQgaBEgqBTQgiBDg1BQQgrBAg7BHQgsAzhGBDQgpAmgQANQgQAOgqAgIg4AoIg3AjQgqAag5AeIiWBBg");
	this.shape_1.setTransform(47.3,89.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,97.3,161.1), null);


(lib.Layer5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg+fAnEMAAAhOHMB8/AAAMAAABOHg");
	mask.setTransform(529.6,259.9);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AhKB3IAAgTIAZgZQAegcATgUQATgWAJgQQAJgRAAgSQABgMgFgLQgEgKgKgGQgLgHgQAAQgQABgNAGQgMAGgJAHIgKgWQANgLAQgGQARgHAUAAQAZAAAPALQAQAJAIAPQAHAQAAARQAAAVgKAVQgKASgSAUQgSAVgXAXIgTASIAAABIBoAAIAAAag");
	this.shape.setTransform(142.2,27.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5D90BF").s().p("AgEAPQgPgKgJAAQgRAAAZgSQAVgSAPALQAOAMAFAQQAEARgRAAQgMAAgOgKg");
	this.shape_1.setTransform(269,243.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D90BF").s().p("AB4CPQgjgLgagaQgcgbgKgDQgQgGgEglQgEgmgHgEQgMgHgUgUQgUgVgOgTQgOgSgtgKQgqgJgbAFQgTAEATgQIAXgQIAmgJQAogJAOACQALACAfAeQAeAeAHgCQAKgBARAQIAqAkQAZASAggNQAggOgTgNQgPgLgGALQgFAMAKAHQgIACgIgLQgIgLAJgJQAMgMAaAEQAcADgDAYQgCAPALAQQAKAQgDAKQgEANAOAiQAWA1ADALQAJAfgcAHQgHACgIAAQgXAAgjgLg");
	this.shape_2.setTransform(293.8,249.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5D90BF").s().p("ABGA3QgkgIgMAAQgOAAgTgcQgYghgGgEIgvglIAdAJQAiAKAVAEQAVAFAIAbQAFANAAANIAYACQAaAFAGAJQAJAOgQAAIgJgBg");
	this.shape_3.setTransform(514.7,204.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5D90BF").s().p("AAcAYQgDgFgYgHIgpgKQgRgCAPgRQAPgRAGAQQAFANAYABIAfACQARAKgKALQgHAIgFAAQgDAAgDgDg");
	this.shape_4.setTransform(548.2,221.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5D90BF").s().p("AAeATQgYgOgKgEQgTgIgOAAQgOAAgCgJIAAgJQAKAAAsAQIAUAEQAVAGAHAKQAIAMgEADIgDAAQgGAAgOgHg");
	this.shape_5.setTransform(575.8,224.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5D90BF").s().p("AgQgIQgLAEgJgMQgKgMAOAEQAIADATgJQAQgHABAFIANAfQANAaADALQghg1gYAJg");
	this.shape_6.setTransform(618.2,262.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8DADD2").s().p("AAAAuIgTgoQgOgbAKAFQAKAEAGgUIAEgVIADAsQAAASACALQACANAMAKQAGAGAGACQgGADgHAAIgCAAQgLAAgCgIg");
	this.shape_7.setTransform(924.7,258.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8DADD2").s().p("AAMArQgRgHgKgIQgIgHgCgbIgBgpIAGAeQAGAmAFgDQAFgCAOANQANALAEAGQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQgDAAgLgFg");
	this.shape_8.setTransform(907.3,144.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8DADD2").s().p("AATATQgQgCgOAEQgPAFgDgRQAAgWgCgJIAIANQAKAMALAAQALAAANAKQAHAFAEAFQgFgCgJgCg");
	this.shape_9.setTransform(877.3,113.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8DADD2").s().p("AAhAoQgcgQgUgGQgXgFACAMQABAPgNgGQgNgGgBgYQgBgRABgJQABgKgBgSIAHAaQAJAZAGABIAiAJQAbAFAIgEQAHgEAGANQAIARAFADQANAHgGADIgCAAQgHAAgUgLg");
	this.shape_10.setTransform(863.9,103.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8DADD2").s().p("AlEAZQgDgEANAMQATANANgBQArgDAHgVQAEgLATgMQARgMAQgFQBTgYAKALQAIALALAFQANAGAHgJQAEgGAJgSQAJgOALABQAJABATAQQATAPAKgCQAJgCAUgKQAUgHAVAEIAzANQAbAHAJgBQANgCAZgIQAbgJANgHQAMgHARABQAJAAAHACQgJABgLACQgYAFgSALIgcAYQgNAKgQgDQgGgBgjgOQgagKgSADQgGABgaAJQgPAFgWgEQgUgEgZgTQgSgPgFAFIgRAeQgNAVgJgFQgNgJgLAmIgBgWQgEgagNAAQgaAAgkAJQguALgHASIgLAeQgGAIgUAAQg4AAgUggg");
	this.shape_11.setTransform(817.2,98.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8DADD2").s().p("AAKAXQgMgGgLgOQgGgGgWgDIgpgEQgTgDAugFQArgEAIAKQAKAMAKACQAMADAGgIQAHgJATgHQASgHAKADQAEABgWAIQgeALgGAQQgEAMgKAAQgEAAgGgCg");
	this.shape_12.setTransform(667.5,60.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8DADD2").s().p("AhsDBQgygZABgiQABgLAkhLQAcg5gYgaQgNgNgdgSIgvgcQgwgiAhgcQAsglAmgKQArgKAZAaQASASAWAaQARAQATgFQAZgHAsAKQAvALAVAWQAeAdA7AeQAJAHgTAQQgSAPAJAIQARAMgJAVQgJAVgfgGQgjgGgagVQgdgXgJgfQgMgogKgTQgOgZgRABQgZAHgMACQgXADgUgOQgYgRgNAVQgNAVAdAHQAfAHARAOQASAPgLARQgFAHAHAGIARAKQAdAQgGAkQgIAvgSAOQgSAOgPgaQgOgZgcAPQgcAPAVASQAkAdAFAHQARAUgPASQgJAKgOAAQgSAAgbgOg");
	this.shape_13.setTransform(460.7,243.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8DADD2").s().p("AIoFiQgKgFACgJQAEgSgegUQgegTgogEQgegDgkhEQglhFgLgDQgXgHgXghQgZgjAAgiQAAgdg5gUQhJgUgjgMQgmgNgaAzIgRAfQgJANgJgJQghgZgjgFQgvgGgcApQgcAqg3gXQgpgQgZgcQgLgNgxAcQhDAqgoAVQg0AcgUgnQgRgkAPgYQANgUgLgaQgNgegnALQgoALAhgzQAjg0AOAHQAMAGAagSQAagSAIgUQAFgPAdACQAZACgBgIQgCgMAZgNIA2gUQAYgJgBgUQAAgIgKgbQgEgLgUgSQgLgKALAFQAMAFAnAWQAkASAWgFIAkgIQAKgBACALQACAOAegGQAegGgEgUQgEgUAZADQAXAEALAPQAIALAqANQAuAOAHAFIAhAXQAXAOAaAKQAaALATAeIAdA6QAKASAPAoQAPAeASACQASABAQAaQAYAlADAEQAOANAhAOIAxAUIAQAEQAUAIATAUQAKAJAVAtQAQAhAeALQAsAQAOAPQARAVACA2QACAzgjAHIgHABQgIAAgHgFg");
	this.shape_14.setTransform(575.1,253.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8DADD2").s().p("AjmCkQgNgJAeg2QAMgYACgHQABgLgRAHQgRAIgHgLQgEgGgDgXQgGg1gagLQghgOATggQAMgTAigtQAPgdApABQAYABAzAIQARAAAJALQAIAJgBALQgGAegogNQgmgLgRAfQgSAfAWALQgGgRAyATQAwARATATQAQAPAWgHQAXgIgNgNQgKgKAZgSQAZgRAKAHQAJAGARgLQAQgLAHgOQAHgOAPgJQAQgKAPAGQAKAEAOgNQAPgQAQACQATABAVAnQAgA7AHAJQAVAbAJA5QAIA4gJAhQgIAbgZgLQgcgTgLgEQgRgFgQgoQgRgpAIgeQAIggg5gDQg6gCgUAiQgUAigsABQgoAAgfgWQgagSgPAgQgPAfANAiQAMAdgwAWQgcANgUAAQgMAAgKgFg");
	this.shape_15.setTransform(363,240.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8DADD2").s().p("AFEE9Qg1gLgwgYQg/gfADgfQAJg/AAgkQAAhBghgIQg7gPg+AGQhQAIAOAyQAHAbgeASQgbAQgtADQgtADgigLQgngMgGgZQgFgVgBgkQABgogBgTQgDhDgjgRQgSgJgVgWIgigkQgrglhAAdQglARgJgJQgHgJASgWQATgXAcgPQAjgRAfAEQA0AHAnAtIAaAdQANANAMAAQATAAA8AOQAzAIACgUQAAgjADgQQAEgcAWgNQAKgFAVgcQAQgWAmgIQAggGAQgPQAJgJAUAHQA1AQAeApQAVAbAuAgQA2AmARgRQAZgZAFgRQAEAIASAMQARALADAJQACAGAdAMQAbAKgDARQgDAWAPAdQAPAdANgCQAQgCgDATQgDAUgdAOQg5AbAeAwQAIAOAZA1QAXAsAQgJQAUgMAfAKQAhAJgOAQQgCADgaA9QgTAtgVgDQgQgBgNg5QgNg4gegCQgmgDgLAmQgEAOADAMQAEAMAKABQAKABADALQACAKgFAMQgKAbgYAAIgMgCg");
	this.shape_16.setTransform(278.1,265.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8DADD2").s().p("AhtBVQAKgbAMgOQAmgqACgQQACgLANgMQAOgMAQgDQAMgDAQgPIAagbQALgKANADQAIACAXAMIAIAEIgHgCQgXgGgMAGQgJAEgbAbQgYAXgIgBQgXgDgbAsIgbAxQgRAdgVAUIgDABQgEAAAIgUg");
	this.shape_17.setTransform(228.6,195.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8DADD2").s().p("AgIACIgJgHQgFgEAFgBQAFgBAKAIQAKAIACAAQAGABADADQAEACgIAAQgPAAgIgJg");
	this.shape_18.setTransform(608,145.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8DADD2").s().p("AgzAHQgNgJAGgGQAYgbAfgCQAZgCASAPQAQANAEARQAFATgRgDQgSgDgXAFQgWAFgMAJQgGgQgSgPg");
	this.shape_19.setTransform(609.1,96.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8DADD2").s().p("AgNAPQgMgCgVgSQgVgWgHgFIAQAJQAcAQALgBQATgDAUADIAQgDQAQgEAAgMQAAgNAOAKQAPALgKAFQgLAHgNARQgNASACAIQgNgQgkgFg");
	this.shape_20.setTransform(684.2,157.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8DADD2").s().p("ABJAPQgbgIgGAAQgaAAgegIQgNgEgRAIIgaAMQgMADAAgJQABgJAFADQAEADAKgFQAJgEAIgHQAGgHAUACQARABAFAEQAQALAVgBQAVgBAYALQAFAHgHAAIgIgCg");
	this.shape_21.setTransform(825.3,138.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8DADD2").s().p("AggAHIgCgFQAPgIAWgDQATgDAJADQAIACgGAJQgFAJgJgFQgIgEgLAEIgSAFIgDAAQgHAAgEgEg");
	this.shape_22.setTransform(810.8,140.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8DADD2").s().p("AgoAWQgJgCALgNQAQgRACgFQACgKAMAFQAGACAMAJIAVALQANAIgBAGQgBAGgOgEQgOgEgFgIQgGgHgHgFQgJgGgCAGIgGATQgFAKgKAAIgGgBg");
	this.shape_23.setTransform(787.8,140.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8DADD2").s().p("AgBAGIgSgGQgIgBAGgFQAHgGAQAEQASADAEAHQADAIgKABIgDAAQgIAAgHgFg");
	this.shape_24.setTransform(705,177.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8DADD2").s().p("AA2AWQgagCgJgJQgKgJgPgDQgQgEgKADQgNADgPAAQgTgBAGgKQACgEATgDIATgBIAKgEQAMgCAHAGQAIAIARAKQARAJAFAAQAFgBALADQAMAEAEAEQACAEgLAAIgMgBg");
	this.shape_25.setTransform(667.5,159.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8DADD2").s().p("AgUAAIgDgGIAoADQAVAGgrADIgDABQgHAAgFgHg");
	this.shape_26.setTransform(564,150);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8DADD2").s().p("AgTAQQgIgDABgGQACgGASgKQASgLAIAFQAJAIgDAFQgCAEgIgDQgHgEgIAFQgGAEgDAIQgCAFgEAAIgFgBg");
	this.shape_27.setTransform(576.4,140.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8DADD2").s().p("AgLAYQgigMAHgOQADgHgIgEQgHgDAEgFQAEgFAIAFQAHAEAAAFIABANQABAJAGABQAFAAAOgCQANgDAFABIASgBQAMAAABADQAAADgOACQgOACgEgCQgCgBgKAGQgHAFgGAAIgDAAg");
	this.shape_28.setTransform(637.2,171);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8DADD2").s().p("AAGAVQgHgFgCgGIgHgNQgEgIADgFQAFgKAMAGQAFACABASIABAVQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAAAIgGgCg");
	this.shape_29.setTransform(626.2,162.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8DADD2").s().p("AgDAAQgEgPAIACQAGACgEAMIgDANIgDgOg");
	this.shape_30.setTransform(623.3,157.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8DADD2").s().p("AAFAGQgDgDgMABQgKAAgBgCQgBgFAPgCQAIgBAIAAQALABABACQACADgGAEQgEADgDAAIgFgBg");
	this.shape_31.setTransform(618.6,153.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8DADD2").s().p("AglgHQAQAJANAAQAeADAQgOQgCAJgPAGQgMAEgLAAQgVAAgOgRg");
	this.shape_32.setTransform(590,142.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8DADD2").s().p("AglBPIhShGQgkgVAHgWQAFgLACgGQADgLgHgJQgPgWAlgOQAkgOAGAYQAFAVgFADQgNAEgPAGQgSAHAjAaQATAPAiAWQAMANA1APQAwANApAFQA5AHgiAYQghAWg6AHIgJAAQglAAgmgig");
	this.shape_33.setTransform(896.5,316.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8DADD2").s().p("ACIBLQgTgDgZgRQgSgMg/gMQg0gKglgCQgcgBgXgUQgUgSgHgVQgGgSAYgBQAYgCAIARQAHAQAcgHQAcgIAAgRQAAgSAlAGQAkAGAMAUQALARgOABQgMABgPgKQgMgIgHATQgHATASAHQALAEApgNQAegLgDAUQgCASAkAIQAnAIACASQACAYgTAAIgFAAg");
	this.shape_34.setTransform(830.5,296);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A4BCDB").s().p("AjQEwQg9hZgMhpIgGhAQgCgbgKgJQgSgPASgeQASgegEgEQgOgOALgTQAKgTAeAZQAgAbApANQAoANAIgNQAIgNAVAHQAVAHAHATQAIAWAagFQAagFgJgdQgLggAMgVQAMgWAQAgQARAfAegFQAegFgGgZQgCgJgegqQgWgeARgGQAPgFAfgBQAWgCgEgXQgFgbAXAHQAYAHAFAXQAEAQAFAnQAHAeAPgLQARgMgJg+QgIg9gVgNQgrgVgWgMQgqgYAQgKQAXgOA5AUQA8AUACAfQADAmALAVQAMAZAOgXQAQgaAVgFQAWgGgIAXQgZAhgOAVQgbAnATAjQAfA7ADBQQAEBmg7AtQiVBzhEAiQhKAmg3AAQhBAAgkg0g");
	this.shape_35.setTransform(707.5,312.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A4BCDB").s().p("Ah/DFQgTgVg1AOIgWAGIALgKQAIgKAegBQAegBANAKQAOAMALgHQAKgGgFgRQgFgRAOgTQAPgTARABQAPABAAgNQAAgKgIgPQgEgIAXgUQAdgYADgJQAIgPAdgCQAbgBAQAIQAMAIARgSQAOgQABgMQACgIAUgMQAUgMAQgBQAQgBgFgWQgGgXgMAJQgLAHgLgaQgLgegEgHQgNgSAGgUQADgHACgCQADgBgBAIQgDAPANAUQAPAVAcASQAdASACAQQABARgaAKQgXAIgLAMIgSAcQgLARgeAPQgdAOgmAHQgiAHgHAGQgHAEgDASIgDAeQgFAPgXAHQgZAIgDARQgCAIAEAcQADATgYAEIgJABQgQAAgKgLg");
	this.shape_36.setTransform(526.4,160.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A4BCDB").s().p("AD/CwIg6gOQgRgEgHgNQgHgOAOgPQANgOgVgJQgegJgMgHQgOgIgjAGQgxAIgMAAQgWAAAJgcQARgsgBgHQgBgUgRAAQgQABgaAVQgSAPgfADQglAEgSAJQgZANAPgZQAGgJAZgfQALgOgUgdQgTgagfgUQgXgPgIAPIgOAcQgIAFgLgUQgOgcgNgIQgTgMARACQAQACAOAKQAIAFgDgSQgEgbALgJQAPgMAPALQANALAAAOQAAAHARAEQASAEABAIQACAIARADQAQAEgBALQgBALASALQARALAAAFQAAAMAbAiQAGAHAUgSQAXgTAGADQAFADAYgDQATgDgCAFQgCAFAIAMIAOAYQAGAMgNAQQgGAJgUAQQgLAJARAEQAPAEAMgCIAagCQAUgBAGgFQAGgFAMAAQAMABACAGQACADAYAMQAYANACAGQAEAJgEAKQgDALgKAJQgIAGAZALQAaAMAAACQgBADAQADQAWAEAHADQAIADgDAAIgZgFg");
	this.shape_37.setTransform(433.9,205.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A4BCDB").s().p("AiaB+QgQgZgMgDQgWgGgKgXQgLgZAbgOQAXgLACgTQAEgYAHgIQAZgfANgJQAagVAZAPQAhATAnADQAtAEANgaIAdg3QAQgXAVAQQARAOgLAfQgEANABACQABAEAMgEQAigOAaACQAfADgSAfQgTArgLAMQgTATgugMQg4gNgaAAQgbAAABAPQABAFgSAYQgOAQAYAPQAOAJgjgDQgjgCgJgMQgJgMgRAFQgNAEgNANIgZAZQgMAQANAHQARAHAEAMQAEALgPABIgBAAQgJAAgPgVg");
	this.shape_38.setTransform(902.5,231.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A4BCDB").s().p("AESDnQgxgBgZgTQgSgPgTgnQgLgWgmgiQgjgfgDgQQgEgWgYgLQgXgLgLAKIgYAoQgTAegSgCQgJgCAEgEIAQgMQAegYgJgiQgMgpgagXQgagWgPASIgrAsQgaAcADAQQAFAVgmAAQgmAAgOgZQgKgQgtAAQgmgBADgTQADgUAkgQQAbgNgOgNQgXgUAAgPQgBgQAcADQAhAEAugXQAygZAMghQANgjAkgBQAOAAAGAHQAGAJgJAOQgYAkgGAcQgHAiAXALIAtAOQAVAFADARQAGAaALAQQAPATAXgDQAhgDAVACQAdADgCAOQgBATAOAkQAPAmAOADQAVAEAOAIQATALgMALQgOAMANAgQANAgAWgFIA2gLQAigLAJgSQALA1hDAAIgEgBg");
	this.shape_39.setTransform(884.9,253.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A4BCDB").s().p("AH/IKQgFg5gFglQgZibiEgHQgdgCmMAYQh0AHhLADIAJgMQAUgdAghFQAWglgpgLQgogLgjAXQgcATgPgsQgGgRACgOQABgOAJAAQAQACAMgrQALgmgCgXQgBgQAjgNQAVgIA5gRQATgGgHgKQgFgGgXgPQg3ghAJgXQANghgyABQgwABgwAbQgqAXgMgqQgNgpAbgYQASgPgSgbQgegqgEgRQgGgbguAHQgtAGgCgOQgDgYgsgMQgsgMgiAOQgeAOgsgJQgegGghgQQgXgMgnASQgkAQgaAdQgLANgHgGQgGgFgBgQQgCgpAWgMQARgKAQgcQAIgOAKgWQAHgMAKACQALABAAATQAAAUAYgRQAYgRgIgKQgHgIAxADQAgACApAFQAFABAsgDQAcgDAOANQASAQAUAAQAUAAAUgQQAPgLAJARQANAYAHACQAtANAEAZQADARAMALQALAMAMgDQAMgCAhAKQAgALALAJQAHAHAdgUQAggWAFAAQAJAAAXAYQAPAQAPATQAIALATgTQASgTgCgJQgBgHATgIQAUgIAIAGQAIAFAfgCQAdgCAGgDQAGgEAcAEQAgAFAGAKQAHALAjAJQAiAIAAgGQAAgHANgUQAPgWALAAQALAAgNgaIgRgkQgCgKAbgCQAbgBAPAJQANAHAfgFIAugKQANgCAUAVQAVAWAHABQANABASAOQARANAKAOQAGAJAbgCQAdgDAJAFQALAHgQAdQgRAdAGADQALAGACAPQADAPgIASIgPAkQgHATAJAGQAtAiAOAcQAIAPAWgFQAMgDAagJQASgFAQANQAQANgFAPQgCAIAMAZQALAYgHAMQgVAnAzAeQA8AhCBgJQBBgFAZAnQAVAggIA2QgHAvgWAiQgWAjgMgQQgZgeg/AdQg+AdgJAoQgJAkgxAQQgtAPgwgKQgUgEgFASQgCAKACAlQAEBRglAdQgHAGgFAAQgMAAgEgXgAnOGKQgRgcAIgbQAGgYAYgQQAXgPAcAAQAbABAUAQIgvgBIACALQABAWgLAgQgMAhgQALQgGAEgGAAQgMAAgMgTgAlSExIgFgEIBHgDQgSAVgSAAQgPAAgPgOgAlXEtIAAAAg");
	this.shape_40.setTransform(825.3,318.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A4BCDB").s().p("AgaAeQgLgUgHgSQgEgMAPgDQANgDANAFQAHADAPgPQAQgQAHABQALABgFARQgFASgRAWIgPAQQgMANgEAHQAAABgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQgEAAgKgTg");
	this.shape_41.setTransform(185.9,243.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A4BCDB").s().p("AkWCXQAHABADgUQAEgVgGgJQgEgGAVgIQAZgIADgKQAEgNAUAFQASAGAKAPQAHAKAJgUQAMgZAJAAQAKgBABgVQABgXAFgDQAKgEAGgTQAFgUgIgIQgIgJAcgDQAcgEALAIQAIAGAJgQQAOgaACgCQAIgIAQAKQANAIgBgEQgCgIANgMQAOgLAIAEQAIADAWgMQAWgNAGgLQAFgMAcAGQAbAFADAKQACAJANACQAIACAXAAQARAAADAVQABAMgDAdQgCAQAPgVIAUggQALgOgKAaQgJAagLANQgIALgaABQgfAAgQACQgTADAMgdQASghACgHQACgLgagIQgZgJgNAJQgIAEggAIQgfAHgMAJQgPAMgIAMQgIALgJAVQgGARgVgFQgQgEgPgNQgJgIgJAIQgJAIgBATQgBASgKARQgJAQgOAIQgKAHgHARIgOAmQgLAXgTADQgRADgMgOQgMgOgOAEQgQAFgEAZQgEAWgIAAQgFAAgGgJg");
	this.shape_42.setTransform(211.8,188.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A4BCDB").s().p("Ah4BFQgBgKAIgPQAKgSARgLQAMgJAMgUQALgVAHgDQAKgFAMAYQALAVABgBQACgEAQgJQARgIAKgCQAGgCAQgVQARgVAHgCQAKgEALAIQAKAHAHAMQAFAIgGACQgFACgIgEQgFgCgYANQgaAOgHgBQgKgBgUANQgQAIgPANQgJAGgJgXQgJgWgFAGQgGAIgRAQIgaAYQgHAHgIATQgEAJgBAAIgBgBg");
	this.shape_43.setTransform(249.5,215.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#A4BCDB").s().p("AAoAoQgCgXAEgXQADgMgxgGQg+gHgHgDQgSgIAegLQAfgKANAKQAKAHAVgGQAbgHAFABQAKABAGAXQAJAgADAFQAKARgGAKIgVAYQgFAFgDAAQgHAAgCgTg");
	this.shape_44.setTransform(332.5,212.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A4BCDB").s().p("AI0GwQgqgChThdQgngsgTgQQgggYgZAHQgxANg4hQQgigwgjhOQgRgmh0gOQhdgLhUAIQgzAFgQgmQgJgvgPgQQgOgQAWgsQAXgxgKgaQgNgigvgJIhYgIQgagDgogVQgYgNgKAPQgLAQg5ANQhAALgQAEQgVAHgRgTQgOgQAAgSQAAgOgdgBQgdgBgXANQgWALACgVQACgXALAHQAJAGAUgLQAQgJALgLQAHgHARAFIAjAHQAOABABAUQABAeABAEQAFALAMgHQAQgJAEACQAHADALgJQAKgIAIgNQALgMADgEQAEgHgKgHQgMgIAOgFQAPgEAOAHQAIAFAMgHQAOgJAMAAIAfABQAPABAJADQALADAFgRQAEgPgCgWQgCgNATAGQAaAIALgGQASgJAEgBQAEAAgFAJQgGAJAPAAQAQAAAIgJQAIgJAJgBQAIAAAPAHQAPAHAMABQAPABANgIQALgGAGARQAJAVAFACQAYAIgCAZQgCAYA1gDQAMgBAQgEQAMgBAHAMQAIANANAAQALgBARgKIBng2QBvgxAlAZQAUAOCEA3QBvAuAHAVQAJAcAhAYQAfAXAgAGQAaAFALAkQAHAVAIAtQAGAYAugKQAwgLACAFQAEAIgXAUQgiAdgPAXQgSAcASBbQAZB7AAApQABBMg2AlQgrAdhCAAIgLAAg");
	this.shape_45.setTransform(264.8,282.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A4BCDB").s().p("AAqByQgcgIgygDIhGgDQgbgCgFgdQgFgdAdgMQAfgMAPgCQASgCALAIQAQAMgJgdQgIgZgXgDQgagDgagoQgagoAbgGQAXgFAfAGIAxAJQAWADAcAWQAcAVgZgEQgYgEgbAMQgcAMAWACQAhACAMACQAZAEADAJIAFAZQAFANALgNQAPgPAZAbQAZAcgFAaQgEAageAOQgTAJgUAAQgMAAgMgDg");
	this.shape_46.setTransform(519.7,325.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A4BCDB").s().p("AMrJWQhQgWgiAOQghAOgmgQQg8gZgsgGQgfgEgyggQgigXgUAVQgZAbhDgJQhAgJgLgaQgThBgQgtQgfhYgggBQgugCg2gVQg+gYgJgdQgIgdgugKQgrgJgPAOQgMALhGgEQhGgEgpgOQgSgGAJAJIAgAbQA+A0gGAUQgNArgJAOQgSAcgegNQg4gTgfgPQg3gbgRgnQgWgwAFhWQAEhZAegfQAYgZAVgxQAUg0AJgRIAVgpQAMgTAagVQAggZATghQAVgkgMgSQgMgSgbgFQgcgFAOAPQANAPgWAwQgWAwgQgJQgRgKgmAKQgoAKgeAaQgWATAIBRQAHBIgTgCQgLgCgRAUQgVAZgMAOQgvA1g1ghQhBgngphaQgphWASgzQAUg5AEhfQADhlgdAaQgPAOgUgPQgSgOgLgcQgLgdAGgXQAIgaAdgGQArgJBLgSQA8gJAeAfQAfAhAqAKQAbAGAugCQAigBAuAgQAuAgABAYQABARA2ANQA1ANAAAOQAAARAlAIQAvAKAKAIQAVASBzA4QB2A7AfAFQAeAEBSBDQBLA+ASAaQAOAUBkBGQBkBGAFgEIAsALQAuAPAMASQAFAIAvAmQAkAcgKARQgLAUAKApQAKAnAKgCQAFgBAIAnQAHAmAKgEQAQgIBTAqQAIAEAJAZQAKAeAOARQAeAlgWAbIgTARQgIAJACAFQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAgBAAQgLAAgygOg");
	this.shape_47.setTransform(519.8,283.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A4BCDB").s().p("AEICvQgBgCgjgHQgigIgCgcQAFgzgBgWQAAgoghgJQgcgHgRgbQgUgggZgNQgQgHgTgRIgdgZQgfgYgiAVQgfATg1gQQg6gSgUAHIhCANQghAGgPAVQgOAUgUAAIgOAAIAJgFQAhgUgCgRQgBgSAMgKQALgJASgCQAMgCAPgJQAQgJAFgBIAdgIQAVgDAOAQQATAWAgAFQAmAHAggdQAggcAWAKQAOAGAIAXQAGAOAOAJQAKAHAVAGQAXAJAQALQAVAOgCAPQgCAQAJALQAKAMARgCQATgDAVAIQAVAJgCAMQgDAMAKATQAJATAHgGQAIgHAGAKQAGAKgCAUQgCAOgIAbQgDATARACQANACAZgMQATgJABAGQADAPAEAHQAGAMALgCQAIgBAXAFQAWABAIgQQAFgJAAADQABAEgEAJQgNAbgaADQgmAFgXAAQgjAAgCgKgAmGhHIAKAAQgVAMgCAAQgDAAAQgMg");
	this.shape_48.setTransform(602.3,156.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A4BCDB").s().p("AAYBhQgagCgIgLQgHgIgTACQgZAEgQgMQgLgIgDgKQgDgJAZgOQAdgRAhAFQAfAFAIgZIADgqQgDggACgLQADgUAeAcQAeAdgFALQgDAIgRASQgOAcgBAKQgCAWAWATQAnAghIAAIgUAAg");
	this.shape_49.setTransform(614.1,89.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A4BCDB").s().p("ABgCWQgKgKAIgTQAGgRgLgbQgMgbgSgGQgPgFgEgnQgDgeAEgVQACgLg4ghQg2gfgqgPQghgLA9AAIBcADQAeAAASAKQAVALAAAYQAAAJAdAoQAWAggVAeQgIALAMAnQANAqgKAbQgJAbgIAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_50.setTransform(887.2,188.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A4BCDB").s().p("ABHAsQglgLgSgEQgegGgmANQgmANgrgVQgegVAKAFQAQAIAYgIQAYgIAagUQAVgPATACQATABACgBQALgJAcgHQAjgKAVAHQAXAIAWAbQAVAZgDAQQgDAVgZACIgEABQgQAAglgIg");
	this.shape_51.setTransform(820.8,112);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A4BCDB").s().p("ABABXQgSgBgUgfQgXgngMgQIhNhWIA8AHQA5AJgKAPQgIANAdAYQAiAZABAMQABANAJAgQADAXgXAAIgDAAg");
	this.shape_52.setTransform(645.4,118);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A4BCDB").s().p("AD7CnQgWgKgQgFQgXgGAAALQAAAMgNgEQgOgDgSgQQgZgWgngUQgwgZgMAOQgOAQgbAGQgbAHgQgKQgUgNgZgRQgdgVgGgIIgggQQgYgMAGgOQAFgLgvghQgtgfAKgGQALgHAJANQAMARALABQAMABAtAOQApAKAFgUQAFgUAhgMQAMgFAlgIQAUgEAcgcQAfgdAAgSQAAgKALAGQAKAGAMAQQAfAtgOAtQgOAuA1ArQAvApAXgGQARgFAmBAQAbAugQAAQgGAAgKgFg");
	this.shape_53.setTransform(688.4,146.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A4BCDB").s().p("AjaGxQgKgDgDgYQgEgbgHgHIgggYQgPgOASgFQATgFACgNQAAgEgFgaQgEgQgSgSQgQgPgSgJIhBgXQg1gTgPgQQgVgbgLgLQgRgSgRgFQgKgDgVgfQgTgbgTADQgXADgpgbQgigVgdgdQgQgQgigIQgigIgOgNQgigegPgLQgdgUgRADQgPADgpgYQgwgdgKgDQgYgGgbAFQgdAFgNARQgMAPgUgGQgWgKgKgBQgPgCATgHQARgHAGAIQAEAFATgXQAZgdANgGQARgJArALQAVAFAvARQAsAOA4APQANADAUAYIAeAnQANAQAaAHQAbAHAOgLQAJgJAIAXQAKAcAKADIAnAEQAbADAKAHQAkAWAMgPQAGgHAFATQAIAYAIAFIAWAOQAKAHAAAIQAAALATAIQASAJACgMQACgLAWAHQAUAFAJAKQAHAGgIAjIgOAxQgGAVBQAFQAUACAGgoQAFgngNgNQgLgLAZgbQAYgZAagLQAVgJAGgcQACgNAAgkQAAgQATgYQAVgaACgOQAEgVAlACQAkACAIAWQAIAWAdAUQAdATAWAAQARAAAZAXIApAmQASAOgBhOQgBhLgKgZQgGgPAVgYQAUgXgDgEQgJgMACgWQADgZAWgCQAYgCAJgOQAHgKAAgWQAAgWAKgZQAMgeAMAGIArAYQAjAVAXAIQAaAIAagOQAMgGAagXQAQgNAmgKQAmgJAGAIQAEAFAqgEQAygFAXAEQA5AKAPAFQAmALACARQABAOAQgKQAXgPANADQARADALAhQAJAaAAAXQAAAZBPgUQASgFAVAbQAaAiAJAFQANAGAegMQAYgKAAANQAAATAXAQQAVAOAZAEQAOADAbACQAWAFANARQAQAThCAOQhDAOgCgVQgBgShYgKQhWgKgQAJQgNAIhMgnQhKgmgOgQQgNgOg+gCQg/gBgVARQgUARg6AMQgwALgsADQgXABgaALQgOAGgDgIQgEgMA0glQA0gmATACQASACAZgWQATgRASgaQALgRAuAKQAYAFAhAKQA1AHANAWQAIAOAZADQAZADAOgMQAJgIgkgRQgrgTgCgMQgDgNgsgHQgzgIgIgGQgLgJgrARQgwASgPgCQgYgFgsAVQgtAUgTAbQgeAqh8AjQgcAIgIAlQgLAzgDAFQgMAQAWAdIAwA6QAhAvhOCEQgRAegUgQQgQgOgIgdQgFgSg4gTIhOgYQgXgHg0AQQgyAPggAVQgZARAKAtQAGAdARAdQAKAPAvAHQAtAIAfgHQAdgFggAZQggAagfAKQgXAIgQA9QgOA4gIAAIAAAAg");
	this.shape_54.setTransform(767.2,181);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A4BCDB").s().p("AAPAKQgIgFgXADQgQACAEgCQAEgDADgIQACgIALAAQARAAASALQAFADgEAGQgCADgDAAQgEAAgEgCg");
	this.shape_55.setTransform(851.3,152.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B5C8E1").s().p("APzGnQqHgUhwAGQhcAFpQgrQptguhlAAQg+AAhYAdQh+AqgLACQhJARg0gWQhAgagzhbQhfirAtiPQARg1AigqQAcgiAdgOQA2gbAMgNQARgSgOgfQgNgfAdgXQAMgJAKAAQALAAACAMQAFAVAWgWQAMgMAmgzQAYghA3gEQAqgDATAJQAFACAQA7QAPA4AIgDQAFgBABALIACAZQAFAkAmgHQALgCA5gSQA4gSAlgHQB8gYA0A4QAbAdBuAbQAuALCxAjQCTAcBEAWQBjAgANAmQAMAkAYgqQAOgbAlhTQAlhJAggOQAqgUArBNQBFB8ESC6QCPBhAeAYQBLA6AAAgQAAAfC+gFQBugDEpgXQEYgWBeAAQCYgCg6AnQhfA/oEAAIhsgBg");
	this.shape_56.setTransform(349.4,289.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#BBCCE4").s().p("AhVJiQjWgQhUgWQiNgkgfhhQgXhHAjg+QAKgSg4hRQgbgnhjiAQhWhugegxQgthJAcgHQAPgEA1gjQA1geAZAQQAYAOBFgkQBRgqARgCQAjgDARhLQAShLgYgXQgVgVAfguQAegtApgNQAfgKAfAHQAvAMAFAAIAjAZQAsAfAxAaQCdBWCXAQQCZAQDwF9QCADJClFAQAmBEibAiQiDAdj5ACIgtABQjAAAjLgQg");
	this.shape_57.setTransform(467.4,282.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#BBCCE4").s().p("ACaCcQAPgWgQg4QgQg6ghADQgfAEghgXQgWgOgRgYQgLgQgtAAQgtAAgpAQQgkANgTAdQACAJgDAEQgGAIAAgFQAAgFAHgKIAAgBQgDgMgRgaQgagoAIgJQAKgMgNgjIgQghQAtAOgKAIQgNAJAtA0QAIAKAggHQAqgKAQABIAyAEQAXAEAOANQALAMAYgOQAfgTAMAAQAWAAAQAeQANAZACAbQACAUAcgUQAcgWAGgXQAGgUAeAGQAeAGgIAOQgXgFgNANQgQARgGA1QgFAxgYAwIgMAXIgBABIACgEg");
	this.shape_58.setTransform(744.4,98.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#BBCCE4").s().p("AiHEvQgJg5gCgGQgHgYAagOQAOgHAUgIIARghQAOgbALgBQAHgBgPgMQgVgRADgSQAAgEAYgoQAPgZgVgSQgagYgIgnQgIgoAVgNQANgJgEggQgEgiAWgPQAMgKA2gbQApgUAOgUQAQgXAYgGQATgFARAHQAGADgDABIgNACQgbAEgKARQgVAhgKANQgVAZgXAIQgZALAEAuQAGAuAdgSQAhgUAoAVQAqAWgXApQgPAdgOAyQgMAhgbgMQgfgPgdAZQgbAYANAQIAZAeQAPAOAKgKQAGgGAFAIQAFAHgBALQAAAfgigGQghgFgWAMQgRAJgMAVQgEAJglAcQgdAWAJAKQASAVADAFQAGAOgQALQgDACgDAAQgJAAgDgVg");
	this.shape_59.setTransform(555.2,103.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#BBCCE4").s().p("AqVIhQhggCgRgTQgNgNAfggQA0g0AEgHQAZgkgZgZQgagagdg5IgxhsQg/iLg4gUQgigLAMgjQAKgeAkgiQAiggAbgKQAdgKgHAcQgMAyBzAjQBBAUCLAdQAnALABggQAAgXgYhBQgkhlgGgTQgWhIAEgsQAIhcBphMQApgdAkgLQAkgKAIAQQANAYgdBRQgpB2gGAfQgMA6BFAkIA7AbQAhARAOARQAfAoA9gFQA5gEApgjIANgYQAQgZAWgDQA/gHCrAiQDnAtCLBbQBXA4BRBTQBXBbAoBQQAuBdgeA4QgiBBiEAJQmsAcm4AHQiSADiCAAQicAAiEgEg");
	this.shape_60.setTransform(733.7,290.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#BBCCE4").s().p("ABwNKQAfiwhcARQgQADgcgBQgegDgPAAQg3gBgUAhQgeBEgOAbQgYAwgbgjQgigtgogWQgrgXgiAMQgWAIgtgNQglgKgOASQgKANgFgHQgGgHAFgQQAOgrA7gHQAugFA7gBQAjgFgPgkQgOghhPgYQhVgagIgIQgcghgcgSQgpgbgRAYQgQAWgLgUIgig/Ig3hTQghgxgUgQQgWgSA/AeQAwAYAuAYIBpA5QBNArAHAPQAMAdAdAeQAlAlAUgWQAMgNAJgoQAIgeAYgIQAngMARgYQATgegbgjQglg6gTgaQgigvgjAAQg9AAgggDQg3gFglgQQgbgLhSg4QhKgzgUgDQgsgJhpgoQh8gugRgcIgbgqQgIgbgNgcQgZg5gVgJQgNgFhghaQhdhXgYgDQgZgEgwgqQg1gtgJgEQgJgDAHgbIARg4QAXhOgtgEQgzgFAJgjQADgNALgLQAMgLAKAAQAVAAAPgLQAPgLgIgPQgFgLARgYQAVgdABgKQADgSAdgSQAcgTASAFQAIACAygHQAtgHALAMQAWAVAUANQAcASALgJQAKgHA2AIQA6AJAKgDQAOgEAZAKQAMAFAJAGIAegTQAggSAOAFQAGACAdAeQAWAXAQgJQANgJA1goQAxgkAQAAQATAAApAUQAnATAGAIIAWATQARANgCAMQgDAPAaAcQAaAcAIgDQAKgEAPAKQARAMgFAPQgFASgMAAQgLgBgagUQgvgzgegdQg5g2gVAeQgZAjgqAVQgrAVgcgKQglgNg/gGQhMgHgkAQQgsATg3gGQg8gHgbghQgdglgpgcQgrgcgPAMIhAA2QgwAtALAMQARAUARAjQAVArACAiQADAqAaAkQAcAnAcgQQAKgGA7gUQAhgLgWgKQgugRgRgIQgegOAdgJQAmgLA0AaQA2AagWAbQgrAsgTAYQgjArAaAKQAUAJAsAjQAmAZAXgZQAdgfAlAEQAQACABAKQACALgSASQgoAogOA6QgOA8ApgRQAsgSAtAFQAtAEgdAXQg2AYgXAOQgnAXAfAoQA2BEAIAGQAaAWAbgdQASgTA7gNQA3gMAUghQAbgtAaACQAZABADAqIAEBTQAHAtAgAMQAaALA8ATQAvAUACAfQADAoBAAlQBCAmATgiQAUgjArgEQArgFgFAfQgEAbARACQAFAAA/gJQA4gIAkAKQAqANAEAjQAGApApASQAqATAFgsQAEgsA4g+QA0g8A1gaQB5g8BCgZQCQg6AyATQAiAOB4BRQByBNAtANQBqAdAdAGQBLAOAUgWQAcgfAEguQAGgzgqgHQhNgNgphDQgQgcgrgfQgsgggFARQgCAIgMgCQgMgCgLgJQgegYAegMQAXgJAeATQAbASAPgIQAXgMAhAVQAhAUgFAZQgFAbASAVQATAWAWgMQAYgOASACQATABgHARQgEAKAZAZQAdAaAAAdQAAAbgDA3QACApAggFQAkgEALgnQAKgmgXgaQgKgLAGgVIAPglQAUg0gqgXQgngWgWhFQgLgggFgIQgJgPgPAEQgiALglgRQgogRgHgiQgIgmgYgVQgagXgdAOQgdAPgZgiQgXgfACgiQADgdgVgZQgVgZgZgCQgLgBAAgFQABgEAJgDQAbgIAcAYQAYAUAFAjQAFAeAOAGIA0AaQAjAQAVAGQAWAGAOAOQAHAHAOAUQAGAKAlAKQAkAKAFAKQAEAJAhADQAiAEANASQAMARAjAQQAaANgFAIIgVAVQgKAKAOAGQATAIAPARQAPASgCAOQgBAKARAMQAQAMgDAOQgEAVAHAVQAHAWASAMQAcATAKANQAQAVgNASQgOASAIAOQADAFAXAYQAUAUAIAVQAKAYgOAMQgKAIALAVQALAVgMALQgMAKAUAbQATAcgOAMQgTASALAdQAMAcAXAAQALAAgBAHQgCAHgKAIQgdAVgegKQg3gRgMgHQgggUAIgoQAFgVgSgEQgQgEgZAKQgZAJgPAQQgRARAHAOQAKAVAhA4QAaA2gIAmQgKAtAVAhQAUAgAkgCQAtgEAcAcQAfAfg5AgQgrAYhdgBQhOAAgIAVQgGAPgLgHQgGgEgTgVQgpgugdAJQgrAOgbgBQgfgBgRgTQg7g5gUgcQghgwAggtQAkgzgchaQgahWgugQQgugQg0gpQg4gsgMgiQgFgPgWAKQgKAFgoAcQhQA4gmgUQgzgahEAjQhCAiADAmIAFBfQAJA+AeAPQAQAJgJAOQgIANgXAMQg8AdgYgeQgZgdg0ApQgVAQgHAQQgIATAPAIQAiAUASAnQAUArgcAQQgeARgJAsQgJArAVALQAKAFgMAMQgMAMgRADIgIABQgnAAAOhNg");
	this.shape_61.setTransform(765.8,145.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#BBCCE4").s().p("ADGI8QhXhVgRg7QgGgUgrgXQgqgXg3gPQiNgjhAAwQg5ArAKh6QAXiKABgMQgRgXgWgWQgsgtgaADQgVACg3hzQg8iAgbgTQgkgaA9gEQAfgCA0ADQALABgNgfQgPglAFgKQAJgPABgaQABgbgJgHQgJgIASgtQASgtAQgJQAQgJAIggQAIgfgKgKQgKgLAGgQQAFgQARAKQALAHApgFQAqgFAUALQAVAKAmgXQArgbAQABQAZACAXAQQARAKAWAXQARARgCAfQgDAegQALQgdASg8ghQgZgNgSAzQgSA0AVAAQAMAAAogUQAsgVANgDQAQgDAMAWQANAbALAEQASAGAIAaQALAcgIgGQgFgFgMAGQgMAGAFALQAGANAkgIQAmgJAJgTQAHgOAfgNQAngSASgOQAbgWAYAdQASAWAKAqQAFAVAfAmQAeAlAHAdQAGAegXAWQgbAZgBAPQgEAxADANQAHAiAnALQAjAJgMA2IgOA1QgJAjgCAXQgBAYAlASQAXALA9AVQB9AzAGBsQAHB+hBBGQgrAuhjAoQgOAGgQAAQg6AAhQhPg");
	this.shape_62.setTransform(363,265.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#BBCCE4").s().p("AmjFkQgUgmgGgIQgIgLANgVQAMgUARgJQAOgGgNgSIgpg5QgVglACgQQACgSAKAUQAGAMAMgMIAWgeQAIgKADgaQADgZAIgHQAMgJAEgcQAEgagFgQQgDgMANgdQAPggADgJQADgJAlAGQAnAGAHgGQALgHAZgpQAVgiAJgSIAHgiQAGgWAPABQA/AEAageQASgTA6gRQA5gRAcAGQAbAFgBAkQAAAjgXAXQgUAUgPgcQgNgZADgZQACgSglAZQgmAZgGATQgFATgcAPQgdAOgPgKQgMgHgSARQgcAcgJAEQgSAKgLAmIgRBCQgIAXgpASQgmARgBAIQgBAPAWANQAWAOALgOQAKgMAWAAQAPAAAaAFQANADAegKQAfgKAJACQAIABAGgcQAGggAUgEQAVgEAbgfIAfgnQACgBAKghQAJgcAcgLQAdgLAOgMIAfgaQAtgEALAeQAFAMgBAEQAEgNAcgKQAdgKATAGQASAHAsgRQArgQANgSQAMgQAZAHQARAFATAOQAZARgmALQgdAIgiAAQgWAAg3ASQg7AUgPAPQgOAPgbgJQgWgIgNgQQgJgLgdAQQgcAQgRAWQgrA2gTAcQgNAUAJANQAIAMAXAFQAPAEAXggQAhgsAHgGQARgOALAaQAKAYACgEQAIgNATgGQAXgIANARQAKANAIAHQAAABgVAAQgPAAggARQgbAOgMgHQgNgHg9AnQg/AmgLgDQgSgGggAdQggAdgQAmQgOAlhCAVQg/ATgUgTQgSgRgjAQQgjAQAGATQAGATAkAEQAhAFAugKQAngIgRAcQgRAZggATQgiAThQBNQgHAHgIAAQgMAAgNgUg");
	this.shape_63.setTransform(222,212.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#BBCCE4").s().p("AmCCjQgEg0ApgsQAhgjAhglQARgSACAIIAEAXQAGANAVgKQAggQA2gmQAKABAVAUQASATAGgFIAhgNQAagJAFgNQAFgSAQgLQAPgMAEANQAEALARgLQAQgLgBgGQgCgGAOgTQAOgUAJAEQAJAEAHgQQADgGAHgVQADgLATgIQATgIAGAIQAGAHAUgDQASgEAEgGQAAgBAAgBQABAAAAAAQABAAAAAAQABAAABABQACACAAAEQAAAMgUAHQgGACgnAGQgXADABALQACAQgKAVQgKAXgOACQgQADAFAmQAGAmAPgRQALgLAGgfQAFgfAIgKQApgzAOAXQAGALAXADQAVACACAGQACAKAWADIAlAEQARACAagFQAdgHADgLQAEgPAIAaQAGAXgPAAQgWAAgZAHQgeAIAEAKQAHAOgMATQgMAUgSgFQgXgHg0ACQg6ACgHAMQgJAShGAaQhJAcgTgPQgYgThJgBQhNAAgTAbQgbAsgPATQgcAhgdgFQgegFgHARQgDAGAAAXQgKgHgCgag");
	this.shape_64.setTransform(272.7,214.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D8E1EF").s().p("ABZJPQhRhThYgvQhRgrggANQgnAQgygGQhAgHgcgtQghg0AFgXQAGgYA0gDQAxgDAUgdQAPgUAFgsIAFgjQADgCAZAMQAhAKAhgNQAlgPgNgiQgNgjAWgVQAVgUAUAKQASAJAYgHQAYgHgEgOQgGgTAFgKQAFgOAYgCQAhgEAOgVQARgYgjgZQhMg1gdgQQhFgmgOAdQgHAOgYARIgpAdQgsAgAnATQAYAMgFAIQgFAIgXACQg7AGgogYQhQgygigiQhChAA5gfQBFgmAjgjQAlgmgUgSQgIgIgVgIIgmgPQgygXgIgrQgEgVgXAHQgUAGgZAXQgYAXgKAVQgKAZAQAJQAQAJgGAQQgGAPgVAMQg2AggpgiQgxgph3gtQh8gvAGAjQAEAbA/A9QBIBHAQAbQBNCDg3AlQgQALAQAXQAPATAfAUQAfAUAWAEQAZAEgDgVQgGgqBHAGQBGAFAHAhQAMA1APAlQAXA6AXAAQAOAAAPAUQAOAUAFAZQANBBhCgBQhsgChpgYQiUgjg/hEQgeghgxhJIhYiDQhtijgzgFQgfgEgYgyQgWgtgLhCQgKhBAFg1QAGg4AVgOQA7glAjgNQAzgTAZAVQAhAfBZAfQBlAjA0gOQAmgKBTAHQBLAGAYgOIBPgxQAzgVAhArQAcAkA+AhQA0AcABAOQABAYAIARQAHARAJgGQAJgGADATQADATgNALQgQANgBAmQgBAoAWABIBJgEQA2gDARAHQBgAnAcgGQAOgDAbAhQAbAgANgDQAMgCAagmQAYgjAJACQASAEAeAMQAVAJAIgEQAHgCAVAIQASAHAGgJQAJgMAQAQQAPAQgNALQgJAIAJACQASADAKAJQAQAPAaAHQAbAIAPgKQAQgJATAFQATAFAAAPQAAALAJAIIAWATIAXAdQAMAOANgEIA9gcQAygWAMAEQAQAEAmgTQAngUgGgNQgIgPgxgHQgxgGgIAOQgLASgYARQgdAVgVgEQgOgDAKgOQAKgOgTgGQg0gHgYgFQgrgIAagSQAigXAdgLQAfgMAMAHQAJAFAPAOQAOAKAOgLQAKgIALgZQAHgRALAHQAJAHAUASQASAOAQAAQAFAAArgNQAigKAUALQAWAMATgDIAmgJQAQgBAUgJQAHgBgbAiQghApgRApQgRAoALAJQAQAOAOAgQARAlgWAEQgZADABAgQACAfAUgHQARgHAXAOQAVAOgBALQgBAHAZgKQAmgPAYgDQAVgCApAHQAcAFAEgMQAGgOAZAPQAXAPAKATQACAFALAuQAHAhANADQAKACApgBQAiABgFANQgHAVgaALQgfAMgYgbQgngygRgVQgfgkgLAXQgbA3hRgXQgzgOg8ghQhFgmAFgVQAGgXgkgeQglgdgWAOQgZAPhZgJQhbgIgIgZQgJgZhAgZQg+gagZALIhTAKQg7AGgFAcQgFAfgfAgQgbAcgXAIQgUAIAEATQAFAUAcABQATABAwBZQAsBUAUgKQAggQAdAPQAfAQgcAbQg3A0gOAKQgpAcgKgiQgMgog5hKQg6hLgTACIhRgPQg0gKAiAhQANANA9BXQAoA4AWgMQAYgMAlAnQAeAgAOAiQAHAQAWArQASApAAAXQAAARgMAZQgPAcgVAQQgWAQgYAAQgpAAgugwg");
	this.shape_65.setTransform(751,119.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D8E1EF").s().p("AoBJhQhdgLhIgSQhIgTgNgRQgaghBEgOQBEgOAYAaQAWAXAhgGQAggHAGgWQAGgWAhgKQAigKAZARQASANAwgFQA1gGAXAKQAQAHAGgLQADgFAFgaQAJg3AngKQA1gOAOgnQAOglgcgnQgagmA2g2QA2g2A9AHQAcAEAPgPQANgNgCgYQgHg3g7gbQg0gYAFhFQAEguAihQQAYg4hNghQhFgdhJAMQhYAOiWh4Qg6gug0CeQgNAmAXApQAKASABADQACAIgMABQg+AJgYhAQgKgbgNhuQgIhDCBhGQB7hDBiACQA7ABFCBJQEzBFAlgHQApgHBEA9QBTBLAYAKQAtATgBAnQgBAbgUAbQgWAcAcBGQAIAWgVAhQgSAegjAeIhyBMQhOA2ATASQAOANBdAlQBfAlAdAYQAhAcgCAsQgBAZgHAoQABAZAcAGQAbAEAogQQAggMAAAiIgBBFQAHAdghAOQghAOgGgbQgGgZgbgCQgZgDgpARQgcAMAIgaQAIgdgPABQgYABAAgfQAAgfAYgaQATgUgygsQg8g2gDgLQgHgag5gMQg4gMgPATQgOATgcAHQgcAHgSgMQgWgNATAoQATAnAaAGQAdAFApA0QApA0AWA4QARAtAxADIAaAAQAGgBgIAGQgOAKg6gIQg5gIgHAFQgPAKgwgdQgzgegNglQgHgTgWAAQgUgBgVAOQgVAOgFARQgHAUAUAOQAoAdgbAfQgLAMgQADQgSADgOgKQgjgZhPADQhcADhpAsQhBAbhyAAQhGAAhYgKg");
	this.shape_66.setTransform(859.6,223.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D8E1EF").s().p("ACwM8QhrgCiph0QiLheificQiGiChYhvQhVhsAmAPQAwAqAqAIQAmAHAFAGQBcBwAZguQAWgoAvgwQA0g1AcgCQAUAAAGhdQAGhgAWgKQA0gYAtgIQBBgMgFAmQgFApA1gFQAugFAdgbQAZgYA5gMQA8gOAIAXQADAKAAgDIAAgVQACgsAdgTQAZgPA7gnQArgagRAiQgUApAgAdQAhAeAkgZQAigWgkg/Qghg6gqgRQgQgGgYANIgnAaQgXAOgMgBQgQgCgHgeQgOg7AegvQAbgtAVAQQgdgZgzggQhphCgmAXQimBiALAhQADALgRATQgRARgWAMQgYAOgNgDQgPgDAGgZQAUhJiqgZQgjgFgSgQIhEhFQgmgnhhgKQgtgFgLgEQgWgHADgQQAHgkgOgSQgNgQgUAKQgQATgHAGQgMALglgTQgogVgkABQgbABgfAOQgXAKgpACQgZABgsgCQgYgBgTASQgbAZgRAIQgnATgggOQghgPA6giQA+glA1gVQAygVAegCQAYgBA3gaIBUgqQAYgLBXANQBXAMAOgGQAagOA8AWQBAAWAMAnQAJAeA8AkQA1AhgDANQgIAeAUAnQAXAvAwgFIBQgIQAcgFADgVQAGgiAIgQQAMgYATAEQBBANAcgWQAUgQBMANQBQAOA5AhQAvAcBxBSICQBpQAdAVCEBMQB0BLgEAkQgDAkhTAaQhfAdgBACQgGAGAEASIALAkQANAvgoAJQgnAJggBPQgvBygJAOQgnA7AGArQAIAzBJAOQA5ALBWgxQAtgbAPgGQAfgNAWAHQAcAJCKANQB2ALALAPQAKAOAYAvQAfAqA6APQAiAIhxA0QhtAxiyA7Qm7CTjVAAIgLAAg");
	this.shape_67.setTransform(656.7,226);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D8E1EF").s().p("AtJGjQgphrgCioQgDiqAog4QAzhHA/hDQBOhTAsgRQAggNBJgkQA7gaAJATQAKAUANALQAHAGAWAMQANAHAUgiQAZgsALgHQAcgRAZgKQAggPAEAIQAKARAXgNQAMgHAYAAQAaABgCAKQgCAOAHAHQAHAHAIgPQAJgSARgRQAUgUAMADQAIACAQANQAMAKADgFQAFgHANgCQAMgCAEAEQAGAKAAAEQgBAIgUAAQgaAAgdAJQgfAJAAAKQAAALARAWQARAUAQAMQAWARgHAJQgNAPhiANQhYAMgqAnIgZAbQgMAMgMABQgdADAiAsQAjAsAZAAQAPAABAgNQA4gJABAQQACAVAVAKQAXALAagQQAQgLAYgGQAWgGAVgQIApgkQARgPASgKQARgJAogCQAtgCAPgEQAkgMBEA3QAiAdAMAGQAgATAXgNIApgWQAZgJAiAFQAoAHBHgRQBIgQADgTQAEgWBJAYQBJAYACAgIADBTQgFAwgqgDQgrgDAGAeQAGAeAUADQAIABglAlQgnAmg4AuQiXB9hYAZQg7ASjCAhQjdAmjQAYQj9AeiXAAQjHAAgUg0g");
	this.shape_68.setTransform(272.2,216.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#D8E1EF").s().p("AFSHwQgZgNgPguQgQgxAMgOQAFgGAigHQAagFgDgVQgCgVgcgLQgdgMAEgYQAEgYAiAOQAoAQAUgDQAZgFAGgiQAHgjgagoQgZgogXAFQgLADg4gVQgrgRAGAWQAJAggMAgQgMAigaACQgeABgvANQgxANgCAJQAAAEgpgKQgsgMgPAQQgKAKgMgGQgLgFgHgPQgRglAcgQQA+gjAlg8QAYgmAHgnQAJgsgSgcQgJgNAIgKQAEgFATgMQAmgYgLgfQgUg+gGgLQgNgdgTgCQgjAEgUgBQgkgBgMgaQgPgfhFgnQhHgogUANQgcARgzASQg+AVgegEQghgFg2ATQg1ATAFAMQACAFgVAcQgPAVAagCQAegBAiALQAbAIAPALQANAJgcAUQgdAUgigEQgkgFgoAeQgoAdAMAPQAHAJg/AfQg+AeAQANQAMAJgKAAQgJABgNgJQgmgZAegwQAfgxghgJQgYgHgnANQgQAGAOgQQAXgZABgMQACgWALgTQAMgWAOAAQALAAASgDIAigEQAOgBAIgLQAKgOAJgEQAHgEAXgBQANgBAAgLIgKgaQgGgPASgLQAQgKAUABQASACAJgIQAKgKgFgNQgGgNAHgGQAEgDAWgBQAPgBAFgXQAHggAGgIQAHgMAXgEQARgEAZATQAYATAMgCQAMgBAPgIQANgGAOAAQAHAAAbAHQAPADABgKQACgMAPAAQAPABAOALQAIAHASgJQATgJANAJQAPALARAJIAjATQAXAMALAaQAMAbgWAAQgXAAAPAYQAOAZAYgEQAPgCANgTQAKgPAPAIQANAHAEAUQADARARAEQALACAaABQAQAAAMAIQANAIABARIADAmQAEAQAQABQAZABAFADQAKAFgFAbQgFAcALAMQALALAkAUQAgAWABAZQABAUAJAfQAHAXgEAHQgDAHAYgGQAigJATAKQARAJAdgEQAbgDALAJQAQAMAgAlQAdAhAMARQAHALAxgNQAxgNAFAHQAFAHgMAvQgLApAMgCQASgEAxABQA0ABALAGQAMAHgGAKQgIAJgWgEQgWgFguAQQgWAIgHAEQANAFgJAAQgMAAAIgFQgOgFgogLQhLgUASALQAVAMgJAcQgIAcgagKQgagJgxAMQgyANAGAOQAHAQgPAbQgQAbgTgDQgTgDgPAxQgPAwARAIQAIAEgDADIgDABQgDAAgFgDg");
	this.shape_69.setTransform(370,191.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D8E1EF").s().p("AheAvQgUgSgGgMQgGgNAOACQAYAEAIgQQAHgPAFACQAOAGAYAFQAdAGAXgCIAcgCIAPAAQAIABgCgIQgCgKAJgEQAHgEgBgXQAAgWASgGIgFAGIAMgEQAFgJAFABQAKACgUAGQgIARgIAuQgDARgRAGQgIACglAFQgRACACAkQABAjgYADIgEAAQggAAgwgqg");
	this.shape_70.setTransform(460.6,222.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D8E1EF").s().p("AGeIJQgQgGgTgSQgMgNADghQACgYAHgRQAIgUgrgEQgKgBghgfQgagYgcgfQgcgegRgLQgZgOgOAOQgPAPgtgDQgpgCgYgMQgQgIgkABIg3ABQgfgCg9BLQgPASgagDQgWgCgPgNQgJgHgOAXQgPAWgIgFQgPgJgYgBQgdAAgYANQgXAMgHgFIgGgNQgCgHA7gqQAMgIgUgQIgogbQgSgLgFgkQgFgiALgLIAYgVQAMgLgJAAQgMAAgDgqQgDgrASgHIAagYQAegZAUgKQARgIgFgwQgGgyANgNQAWgWACg8QABg+gZgdQgYgcAVghQASgcAngOQAagJAZgjQAXgiAHgBIArgCQAggDAPgNQAQgPAUAMQAIAEAdAaQAJAJAkAOQAbALgDAJQgIAXAjAyQALAPASACQAbAEAMAGQARAIAJAiQAJAhANAGQAOAHAMACQACACgRAOQgSAOgfghQgdggADgRQACgPgHgKQgGgKgGAIQgEAGgUgOQgVgPgDABQgIADgVgfQgWggAHgNQAHgLgkgVQgrgUgLgHQgNgIgkAWIhDAoQglARgJAmQgLAnApAAQAkAAAQAkQAKAWAOA7QAMAngUAcQgIAMgkAdQgTAQAiATQAUAMA0ASQAeAKgRArQgJAXgdAqQgMASgkgLQglgLgHAHQgRARgUAKQgdAOgXgJQgbgKgcAqQgbAqAZASQAVAPAGAkQAJAvACAFQAHANAagQQAfgTATAIQAXAKAZgYIAagiQAIgLA8gMQBAgNAbALQAZALAxgGQAagDAmgHQAVgCAsAbQAtAcAWAfQASAZAlAZQArAdAFAFQANANAHAxIAKBGQAEAQgJAAQgEAAgFgCg");
	this.shape_71.setTransform(582.6,120.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E7ECF5").s().p("AecXXQkigDpcgPQm/gKhCADQhPAFkng+IpRiCQl4hRjKgaQkPgkg5AvQhnBVu7gYQkpgIlcgRIkggQIPksZQgmhbgrhfQhXi9gbgRQhMguAHhDQAHg4A+g/QAygzBFgoQA/gkAVAEIBAAQQAbAEADgQQAHggAFgKQAKgYAVgGQAOgEAKgrQAKgoAcgCQAugDAUgFQAfgHAOgQIAkglQAXgWARgHQASgHgBgdIgKhYQgEguBTiPQBdidABgFQAEgNgPgqIgchVQgihzA7geQBWgrAagKQAogPARALQBQAyAFAdQAEAWAVAWQAWAXAUABQATABAUAWQATAUAFAUQAFAWARAOQAVAQAbgGQBJgQAggSQBJgngOhEQgbhjgGgjQgKg3AmgOQAogODfAkQDSAjAqASQALAFBNgCQBigEA1AEQDQAPAHB6QAICCA9AfQApAUA1gZQAagNCPAYICxAeQBVAJAngBQBWgDAighQAhghBmADQAzABAtAHIBtgBQBwgEASgPQAjgbAJgFQAZgMAZAOQALAGALASIAXAlQAnA3BZAqQBkAuBGA8QA1AuAPAgIBXDHQBOCzAMAfQAFAPgYByQgPBFgoCtQhLFTAnAMQA9AUBPA1QBaA8AEAnQAEAsA6A0QA6A1AhgLQAPgEAvggQAjgWASAIQAaAMAUgJQAVgJgUgVQgVgXgBgsQgBgvAZgLQAbgMAYgDQAXgDAgAFQAOADAKgJIAQgTQAUgXAmAVQAdARBAAMQAtAJAGAUQAIAaAWAUQAVASAZAGQAXAFgLAjQgLAjgXgJQgLgFgIAJQgIAHgBAMQgDAhAjgNQASgHAsgrQAdgdAKAXIAaA7QAQAdAagCQAmgCA4AgQA+AkgIAoQgGAeAEBMQgGA9g+gEQgjgDgbAZQgWAVgKAhQgJAgAJAUQAIAWAYgHQAigJArgUQAcgJAJAYQAGARA8ASQAzAOgLAYQgOAhAgAmQAfAmAZgKQAcgLA8ANQA/AOAAAXQAAAYAwgCQAYgCAUgHIAIgHQAOgMAJgDQAJgCgNAKQgMAJgPAFQgkAjgDAyQAAAZAEADQgLASgTAlQgnBPuTAAQiVAAitgCgEAy3AVUIgBgBIAGgJQAJgMgFALQgDALgFAAIgBAAg");
	this.shape_72.setTransform(736.5,211.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#FFFFFF","#5D90BF"],[0,1],0,266.4,0,-299.6).s().p("Eg+fAv9MAAAhf6MB8/AAAMAAABf6g");
	this.shape_73.setTransform(529.6,307);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Layer5, new cjs.Rectangle(129.6,9.9,800,500), null);


// stage content:
(lib.Panel2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Text1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgQArQgHgBgEgDIADgMIAJAEQAHACAGAAQAHABAEgEQAFgEgBgFQAAgGgEgDQgDgEgIgEQgMgDgFgGQgGgGAAgIQAAgHADgGQAFgFAGgEQAHgDAIAAQAHAAAGABQAFABAEADIgFALIgGgDQgFgCgGABQgHgBgDAEQgEADAAAFQAAAFAEADQAEAEAIADQALAEAGAFQAFAHAAAJQAAAMgIAHQgJAHgOABQgHAAgGgDg");
	this.shape.setTransform(165.6,367.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AgWA8QgJgGgEgKQgFgKAAgOQAAgOAFgJQAFgLAKgFQAIgGALAAQAJAAAHAEQAGAEADAFIABAAIAAg0IAQAAIAABoIAAANIAAAKIgOAAIgBgPIAAAAQgEAHgHAFQgIAFgKAAQgKAAgJgFgAgMgIQgGAEgDAGQgDAJAAAJQAAAJADAHQACAHAHAFQAFAEAHAAQAJAAAGgFQAHgFACgIIABgEIAAgDIAAgQIAAgDIgBgEQgCgGgGgGQgGgEgJgBQgHAAgGAFg");
	this.shape_1.setTransform(156.7,365.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AgUApQgHgDgEgIQgFgIAAgQIAAgxIAQAAIAAAuQAAANAEAHQAFAIALAAQAEAAAEgCQAEgCADgEQADgDACgDIAAgEIAAgEIAAg0IARAAIAAA+IAAAMIAAALIgOAAIgBgOIAAAAQgCAEgEAEQgDADgHADQgFADgHAAQgHAAgHgEg");
	this.shape_2.setTransform(146.9,367.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgWAoQgIgGgGgKQgFgJgBgOQABgOAFgKQAGgLAJgFQALgGALABQAMgBAJAGQAKAGAFAKQAGAKgBANQAAAQgGAJQgGALgKAEQgKAFgKABQgMAAgKgGgAgOgcQgGAGgDAHQgDAHABAIQgBAKAEAIQADAHAGAEQAGAFAHgBQAIABAFgFQAHgEACgIQAEgIABgJQAAgHgEgHQgCgIgGgGQgFgEgKAAQgIAAgGAEg");
	this.shape_3.setTransform(137,367.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_4.setTransform(129.9,365.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgNAnQgKgFgFgKQgFgKAAgNQAAgNAFgKQAGgKALgHQAKgFANAAQAHAAAGABIAJADIgDAMIgIgDIgLgBQgKAAgGAEQgGAFgEAIQgDAHAAAIQAAAKAEAIQAEAHAGAEQAGADAJAAIALgBIAIgCIADALQgDACgHABIgPADQgMgBgKgGg");
	this.shape_5.setTransform(123.9,367.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AgSAnQgJgEgFgLQgFgJAAgNQAAgNAFgLQAEgKAKgGQAJgHALABQALAAAHADQAHAEAEAHQAEAGACAIQACAHgBAFIAAAEIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALIgLADIgSADQgMgBgKgGgAAXgHQAAgGgCgGQgBgGgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_6.setTransform(111.5,367.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgEgEgEQgFgEgHAAQgHAAgFAFQgGAEgCAGIgBAEIAAADIAAA1IgQAAIAAh/IAQAAIAAA3IAAAAIAFgHIAGgEIAIgEIAIgBIAJABQAGACAEAFQAFADADAIQADAGAAALIAAA0g");
	this.shape_7.setTransform(102,365.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_8.setTransform(93.9,366.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AgWA8QgIgGgFgKQgFgKAAgOQAAgOAFgJQAGgLAJgFQAIgGALAAQAJAAAHAEQAGAEADAFIABAAIAAg0IAPAAIAABoIAAANIABAKIgOAAIgBgPIAAAAQgEAHgHAFQgIAFgKAAQgKAAgJgFgAgMgIQgGAEgDAGQgDAJAAAJQAAAJADAHQACAHAGAFQAGAEAIAAQAIAAAGgFQAHgFACgIIABgEIAAgDIAAgQIAAgDIgBgEQgCgGgGgGQgGgEgJgBQgIAAgFAFg");
	this.shape_9.setTransform(81.9,365.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_10.setTransform(74.9,365.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQACgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_11.setTransform(70.7,365.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgUApQgHgDgEgIQgFgIAAgQIAAgxIAQAAIAAAuQAAANAEAHQAFAIALAAQAEAAAEgCQAEgCADgEQADgDACgDIAAgEIAAgEIAAg0IARAAIAAA+IAAAMIAAALIgOAAIgBgOIAAAAQgCAEgEAEQgDADgHADQgFADgHAAQgHAAgHgEg");
	this.shape_12.setTransform(63.7,367.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgNA9QgHgEgGgJIAAAAIgBAPIgNAAIAAgKIAAgNIAAhoIAQAAIAAA3QAEgHAIgEQAIgFAJAAQAKAAAJAGQAIAFAFAKQAEAJAAANQABAQgHALQgFAJgJAGQgJAFgJAAQgJAAgHgEgAgOgIQgGAGgDAIIgBADIAAADIAAAQIAAADIABADQACAIAGAFQAHAFAIABQAMgBAGgJQAIgJgBgPQAAgJgCgHQgDgGgGgFQgFgFgJAAQgHABgHAEg");
	this.shape_13.setTransform(53.9,365.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgVAoQgKgGgFgKQgGgJAAgOQAAgOAGgKQAGgLAKgFQAKgGAKABQANgBAKAGQAJAGAFAKQAFAKABANQgBAQgGAJQgHALgKAEQgJAFgKABQgMAAgJgGgAgOgcQgGAGgDAHQgCAHgBAIQABAKADAIQADAHAGAEQAGAFAHgBQAHABAHgFQAFgEAEgIQADgIAAgJQAAgHgCgHQgDgIgFgGQgHgEgJAAQgIAAgGAEg");
	this.shape_14.setTransform(39.8,367.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_15.setTransform(31.9,366.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AgQAsQgHgCgEgDIADgMIAKAFQAFACAGAAQAIgBAEgDQAFgEgBgGQAAgFgDgEQgEgDgIgDQgLgFgHgFQgFgGAAgIQAAgHADgGQAFgGAGgDQAGgDAJgBQAHABAGABQAFACAEACIgFAMIgHgEQgEgCgGAAQgGAAgEAEQgEADAAAFQAAAGAEADQAFADAGADQAMAEAGAFQAFAHABAJQAAAMgJAHQgIAHgPAAQgHAAgGgBg");
	this.shape_16.setTransform(194.6,342.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAEQAHAFAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHACIgSABQgMAAgKgGgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_17.setTransform(186.6,342.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AgUAqQgGgEgFgIQgFgJAAgOIAAgzIAQAAIAAAwQAAAMAEAIQAEAHALABQAEgBAFgCQAEgCADgDQADgDABgEIACgEIAAgEIAAg1IAPAAIAAA/IAAANIABALIgNAAIgBgPIgBAAQgCAEgEADQgEAEgGADQgFADgHgBQgHAAgHgCg");
	this.shape_18.setTransform(177.1,342.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AAVAtIAAgyQAAgHgBgFQgCgGgFgEQgFgEgGAAQgIABgFAEQgGAFgCAHIgBAEIAAADIAAA0IgQAAIAAg/IAAgNIAAgLIANAAIABAPIABAAQACgEAEgEQAEgEAFgCQAGgCAGAAIALABQAEACAGAEQAEAEADAHQADAHABALIAAA0g");
	this.shape_19.setTransform(167.2,342);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_20.setTransform(160.1,340.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABALIgGACIgIABQgGAAgEgCg");
	this.shape_21.setTransform(154.9,340.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AAWAtIAAgyQAAgHgCgFQgDgGgEgEQgFgEgGAAQgIABgFAEQgGAFgCAHIgBAEIAAADIAAA0IgQAAIAAg/IAAgNIgBgLIAPAAIABAPIAAAAQACgEAEgEQAEgEAGgCQAFgCAGAAIAKABQAGACAEAEQAFAEADAHQADAHABALIAAA0g");
	this.shape_22.setTransform(147.1,342);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AgWAoQgIgGgGgJQgFgLgBgOQABgNAFgLQAGgJAJgGQAKgFAMgBQAMABAJAFQAKAGAFAKQAGAKAAANQgBAQgGAKQgGAKgKAFQgKAEgKAAQgMAAgKgFgAgOgbQgGAEgDAIQgDAHABAIQAAAKADAHQADAIAGAEQAGAEAHABQAIgBAFgEQAHgEACgIQAEgHABgKQAAgHgEgIQgCgHgFgFQgHgFgJgBQgIABgGAFg");
	this.shape_23.setTransform(137.1,342.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgNAnQgKgFgFgKQgFgKAAgNQAAgMAFgLQAGgLALgFQAKgHANAAQAHABAGABIAJADIgDANIgIgDIgLgCQgKABgGAEQgGAEgEAHQgDAIAAAIQAAAKAEAHQAEAIAGADQAGAEAJABIALgBIAIgEIADAMQgDACgHACIgPABQgMAAgKgGg");
	this.shape_24.setTransform(128.3,342.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgUAtIAAg8IAAgOIgBgNIAOAAIABARIAAAAQADgJAGgEQAGgGAIABIADAAIACAAIAAAPIgDAAIgCAAQgJgBgFAGQgFAFgCAKIAAADIAAAEIAAAug");
	this.shape_25.setTransform(117.9,342);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AgWAoQgIgGgGgJQgFgLgBgOQABgNAFgLQAGgJAJgGQALgFALgBQAMABAJAFQAKAGAFAKQAGAKgBANQAAAQgGAKQgGAKgKAFQgKAEgKAAQgMAAgKgFgAgOgbQgGAEgDAIQgDAHABAIQgBAKAEAHQADAIAGAEQAGAEAHABQAIgBAFgEQAHgEACgIQAEgHABgKQAAgHgEgIQgCgHgGgFQgFgFgKgBQgIABgGAFg");
	this.shape_26.setTransform(109.6,342.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgoA+IAAhdIAAgPIAAgNIANAAIABAPIABAAQAEgIAJgFQAHgEAKAAQAKAAAJAFQAIAGAEAKQAGAKgBANQAAAQgFAJQgGAKgIAFQgKAGgKAAQgIAAgGgEQgIgDgEgHIAAAvgAgOgrQgHAFgCAJIgBADIAAADIAAAPIAAAEIABADQACAHAGAFQAHAFAIAAQAHAAAHgEQAFgEAEgIQACgGAAgKQAAgJgCgHQgDgIgGgEQgGgFgIAAQgHAAgHAGg");
	this.shape_27.setTransform(99.8,343.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgBQABgFgCgEQgBgFgEgDQgFgDgHgBQgHAAgFACQgGACgFACIgEgKQAGgEAHgCQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAALIACAKIgPAAIgBgLIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGABQAHAAAGgFQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_28.setTransform(89.8,342.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgHAsIghhXIARAAIARAxIAEALIACAKIAAAAIAEgKIAEgLIARgxIAQAAIgiBXg");
	this.shape_29.setTransform(81.5,342.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AAvAtIAAgxQAAgMgFgIQgEgGgKgBQgGABgGAEQgEAEgCAGIgBADIgBAFIAAA1IgOAAIAAg0QgBgLgEgGQgFgHgIAAQgGAAgDADQgFACgCADQgDAEgBAEIgBAEIgBAEIAAA0IgPAAIAAg/IAAgNIAAgLIANAAIABAPIAAAAIAGgIQAFgEAEgCQAFgCAIAAQAJgBAGAGQAFAEADAIIABAAIAFgHIAEgEQAFgEAEgBQAEgBAHAAQAGgBAHADQAGAEAEAIQAFAIABAPIAAAzg");
	this.shape_30.setTransform(65.8,342);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AgUAtIAAg8IAAgOIgBgNIAOAAIABARIAAAAQADgJAGgEQAGgGAIABIADAAIACAAIAAAPIgDAAIgCAAQgJgBgFAGQgFAFgCAKIAAADIAAAEIAAAug");
	this.shape_31.setTransform(55.8,342);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgBQABgFgCgEQgBgFgEgDQgFgDgHgBQgHAAgFACQgGACgFACIgEgKQAGgEAHgCQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAALIACAKIgPAAIgBgLIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGABQAHAAAGgFQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_32.setTransform(47.8,342.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AAXA9IgPg+IgFgVIgDgTIAAAAIgDASIgGAWIgRA+IgQAAIgfh5IAQAAIAPA9IAFAWIAEAUIAAAAIAEgUIAGgWIAQg9IAQAAIAOA9IAFAVIAEAVIAAAAIAFgVIAFgVIAQg9IAQAAIgiB5g");
	this.shape_33.setTransform(36.7,340.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},445).wait(1));

	// Text2
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgQArQgHgBgEgCIADgNIAJAEQAGACAGAAQAIABAEgEQAFgEgBgFQAAgGgDgDQgEgFgIgCQgLgEgHgGQgFgGAAgIQAAgHADgGQAFgFAGgEQAGgEAJAAQAHAAAGACQAFABAEADIgFALIgHgDQgEgCgGABQgGgBgEAEQgEADAAAFQAAAGAEACQAFAEAGADQAMAEAGAGQAFAFABAKQAAAMgJAHQgIAHgPABQgHgBgGgCg");
	this.shape_34.setTransform(365.6,154.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AgWA7QgIgFgFgKQgFgKAAgOQAAgOAFgJQAGgLAIgFQAJgGALAAQAJAAAGAEQAHAEADAFIABAAIAAg0IAPAAIAABoIAAANIABAKIgOAAIgBgPIAAAAQgEAHgIAFQgHAFgKAAQgLAAgIgGgAgMgIQgGAEgDAGQgDAJAAAJQAAAJADAHQADAHAFAFQAGAEAIAAQAHAAAHgFQAGgFADgIIABgEIAAgDIAAgQIAAgDIgBgEQgCgGgGgFQgGgFgJgBQgIAAgFAFg");
	this.shape_35.setTransform(356.7,152.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgUApQgGgDgFgIQgFgJAAgPIAAgxIAQAAIAAAvQAAAMAEAHQAEAIALAAQAFAAAEgCQAEgCADgEQADgDACgDIABgEIAAgEIAAg0IAQAAIAAA+IAAAMIAAALIgOAAIgBgOIAAAAQgCAEgEAEQgDADgHADQgFADgHAAQgHgBgHgDg");
	this.shape_36.setTransform(347,154.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgWAoQgJgFgFgLQgGgKABgNQgBgOAGgKQAGgLAJgFQALgGALAAQAMAAAJAGQAKAGAFAKQAGAKgBANQAAAQgGAJQgHALgJAEQgKAFgKABQgMAAgKgGgAgOgcQgGAGgDAHQgCAHAAAIQAAAKADAHQADAIAGAEQAGAFAHgBQAIABAFgFQAGgEADgIQAEgIAAgJQAAgHgDgHQgCgIgGgGQgFgEgKAAQgIAAgGAEg");
	this.shape_37.setTransform(337.1,154.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_38.setTransform(330,152.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgNAoQgKgGgFgKQgFgKAAgNQAAgNAFgKQAGgKALgHQAKgFANgBQAHAAAGACIAJADIgDAMIgIgDIgLgBQgKAAgGAEQgGAFgEAIQgDAHAAAIQAAALAEAGQAEAIAGAEQAGADAJAAIALgBIAIgCIADALQgDACgHABIgPADQgMgBgKgFg");
	this.shape_39.setTransform(323.9,154.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AgSAoQgJgFgFgLQgFgKAAgMQAAgNAFgLQAEgKAKgGQAJgHALAAQALABAHAEQAHADAEAHQAEAGACAIQACAHgBAFIAAAEIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALQgEACgHABIgSADQgMgBgKgFgAAXgHQAAgGgCgGQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_40.setTransform(311.5,154.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgEgEgEQgFgEgHAAQgHABgFAEQgGAFgCAFIgBAEIAAADIAAA1IgQAAIAAh/IAQAAIAAA3IAAAAIAFgHIAGgFIAIgDIAIgBIAJABQAGACAEAFQAFADADAIQADAGAAALIAAA0g");
	this.shape_41.setTransform(302,152.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgDgBgGIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_42.setTransform(294,153.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AAVAsIAAgwQABgIgCgGQgCgFgFgEQgFgDgGAAQgIAAgFAEQgGAFgCAHIgBADIAAAEIAAAzIgQAAIAAg+IAAgMIgBgLIAOAAIABAOIABAAQACgFAEgDQAEgEAGgCQAFgDAGAAIAKACQAFABAGAFQAEAEADAHQADAIABALIAAAyg");
	this.shape_43.setTransform(282.3,154.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgCADgFAAQgDAAgDgDg");
	this.shape_44.setTransform(275.2,152.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AAvAsIAAgwQAAgNgEgGQgFgIgKABQgGAAgFADQgGAFgBAGIgBAEIgBADIAAA1IgPAAIAAgyQAAgLgEgHQgEgGgKAAQgEgBgFADQgDACgDAEQgDADgBAEIgBAEIAAAEIAAAzIgQAAIAAg+IAAgMIAAgLIANAAIABANIABAAIAFgIQAFgDAEgCQAGgDAHAAQAJABAGAFQAFAEADAIIABAAIAFgGIAEgGQAFgDAEgBQAFgCAGAAQAGABAGADQAHADAEAIQAGAIAAAPIAAAyg");
	this.shape_45.setTransform(261.8,154.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AgUAsIAAg6IAAgPIgBgMIAOAAIABARIAAAAQADgKAGgEQAGgFAIgBIADAAIACABIAAAPIgDgBIgCAAQgJABgFAFQgFAGgCAIIAAAEIAAAEIAAAtg");
	this.shape_46.setTransform(251.7,154.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgVAoQgKgFgFgLQgGgKABgNQgBgOAGgKQAGgLAJgFQALgGAKAAQANAAAKAGQAJAGAFAKQAFAKAAANQAAAQgGAJQgHALgJAEQgKAFgKABQgMAAgJgGgAgOgcQgGAGgDAHQgDAHAAAIQAAAKAEAHQADAIAGAEQAGAFAHgBQAHABAHgFQAFgEAEgIQADgIAAgJQAAgHgDgHQgCgIgGgGQgFgEgKAAQgIAAgGAEg");
	this.shape_47.setTransform(243.4,154.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AgPBBIAAhKIgNAAIAAgMIANAAIAAgEQAAgKACgIQACgIAGgFQAEgEAFgCIALgCIAIABIAFACIgCAMIgEgCIgGAAQgGAAgEADQgEAEgBAGQgBAFAAAHIAAAFIAVAAIAAAMIgVAAIAABKg");
	this.shape_48.setTransform(236.5,152.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgQAsQgHgCgFgDIAFgMIAJAEQAFADAGAAQAIAAAEgEQAEgEAAgGQAAgFgDgEQgEgDgIgEQgLgEgHgFQgFgGAAgIQAAgHADgGQAEgGAHgDQAGgDAJAAQAHgBAFACQAGACADACIgEAMIgHgEQgEgBgGgBQgGABgEADQgEADAAAFQAAAFAEADQAFAEAGADQAMAEAGAFQAFAHABAJQAAAMgJAHQgIAHgPAAQgHAAgGgBg");
	this.shape_49.setTransform(387.1,129.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_50.setTransform(381.4,127.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgCQABgEgCgEQgBgFgEgDQgFgDgHgBQgHAAgFACQgGACgFADIgEgLQAGgEAHgCQAIgBAHAAQANAAAHAFQAIAFACAIQADAIAAAJIAAAfIAAAMIACAKIgPAAIgBgLIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAEAAAIQAAAJAEADQAFAEAGAAQAHAAAGgFQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_51.setTransform(374.7,129.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFAAIAEgBIABALIgGACIgIABQgGAAgEgCg");
	this.shape_52.setTransform(367.6,128);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AgRAsQgGgCgFgDIAEgMIAJAEQAGADAHAAQAHAAAEgEQAFgEAAgGQAAgFgFgEQgDgDgIgEQgMgEgFgFQgGgGAAgIQAAgHAEgGQAEgGAGgDQAGgDAJAAQAHgBAFACQAGACAEACIgEAMIgHgEQgFgBgGgBQgGABgEADQgEADAAAFQAAAFAEADQAEAEAIADQALAEAGAFQAGAHgBAJQABAMgJAHQgJAHgOAAQgHAAgHgBg");
	this.shape_53.setTransform(361.1,129.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AgjAyIAGgDIAIgFIAHgHQADgFADgFIABgCIABgCIgBgCIAAgCIghhQIARAAIATA0IADAJIACAIIABAAIACgIIADgJIARg0IARAAIgXA+IgLAZIgJASQgEAGgGAFQgFAFgGADIgIACg");
	this.shape_54.setTransform(353.4,131.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgUAtIAAg8IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgGQAGgEAIAAIADAAIACAAIAAAPIgDAAIgCAAQgJgBgFAGQgFAFgCAKIAAADIAAAEIAAAug");
	this.shape_55.setTransform(346.2,129);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgNAnQgKgFgFgKQgFgKAAgNQAAgMAFgLQAGgLALgFQAKgHANABQAHgBAGACIAJADIgDANIgIgEIgLgBQgKAAgGAFQgGAEgEAHQgDAIAAAIQAAAKAEAIQAEAHAGADQAGAEAJABIALgCIAIgDIADAMQgDACgHACIgPABQgMAAgKgGg");
	this.shape_56.setTransform(338.8,129.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgLAAgNQAAgMAFgLQAEgKAKgGQAJgGALAAQALAAAHADQAHAFAEAGQAEAGACAHQACAIgBAFIAAAEIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgDIACAMQgEACgHACIgSABQgMAAgKgGgAAXgHQAAgFgCgGQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_57.setTransform(326.4,129.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AgNAnQgKgFgFgKQgFgKAAgNQAAgMAFgLQAGgLALgFQAKgHANABQAHgBAGACIAJADIgDANIgIgEIgLgBQgKAAgGAFQgGAEgEAHQgDAIAAAIQAAAKAEAIQAEAHAGADQAGAEAJABIALgCIAIgDIADAMQgDACgHACIgPABQgMAAgKgGg");
	this.shape_58.setTransform(318.1,129.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgCgDgBgEQABgEACgDQACgDAEAAQAEAAADADQACADABAEQAAAEgDADQgCADgFAAQgEAAgCgDg");
	this.shape_59.setTransform(311.9,127.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgJAKIAEgPIACgPIARgCIgFARIgGAPIgFALIgLABIAEgMg");
	this.shape_60.setTransform(303.9,133.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AgUAtIAAg8IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgGQAGgEAIAAIADAAIACAAIAAAPIgDAAIgCAAQgJgBgFAGQgFAFgCAKIAAADIAAAEIAAAug");
	this.shape_61.setTransform(300.7,129);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_62.setTransform(295.2,127.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgCQABgEgCgEQgBgFgEgDQgFgDgHgBQgHAAgFACQgGACgFADIgEgLQAGgEAHgCQAIgBAHAAQANAAAHAFQAIAFACAIQADAIAAAJIAAAfIAAAMIACAKIgPAAIgBgLIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAEAAAIQAAAJAEADQAFAEAGAAQAHAAAGgFQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_63.setTransform(288.5,129.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#373535").s().p("AgUAtIAAg8IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgGQAGgEAIAAIADAAIACAAIAAAPIgDAAIgCAAQgJgBgFAGQgFAFgCAKIAAADIAAAEIAAAug");
	this.shape_64.setTransform(278.1,129);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgLAAgNQAAgMAFgLQAEgKAKgGQAJgGALAAQALAAAHADQAHAFAEAGQAEAGACAHQACAIgBAFIAAAEIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgDIACAMQgEACgHACIgSABQgMAAgKgGgAAXgHQAAgFgCgGQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_65.setTransform(270.2,129.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#373535").s().p("AgWA8QgIgGgFgKQgFgKAAgNQAAgPAFgJQAGgKAIgHQAJgFALAAQAJAAAGAEQAHAEADAFIAAAAIAAg0IAQAAIAABpIAAALIABALIgOAAIgBgPIAAAAQgEAIgIAEQgHAFgKAAQgLAAgIgFgAgMgIQgGAEgDAHQgDAHAAAKQAAAJADAHQADAHAFAFQAGAEAIAAQAHAAAHgFQAGgEADgKIAAgDIAAgEIAAgOIAAgEIAAgDQgCgHgGgGQgGgEgJAAQgHgBgGAFg");
	this.shape_66.setTransform(260.3,127.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_67.setTransform(253.4,127.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#373535").s().p("AgVAoQgKgGgFgJQgGgLAAgOQAAgNAGgLQAGgKAKgFQAKgFAKAAQANAAAKAFQAJAGAFAKQAFAKABANQgBAQgGAKQgHAKgKAEQgJAGgKgBQgMAAgJgFgAgOgbQgGAEgDAIQgCAHgBAIQABAKADAIQADAHAGAEQAGAFAHAAQAHAAAHgFQAFgEAEgIQADgHAAgKQAAgHgCgIQgDgHgFgFQgHgGgJAAQgIAAgGAGg");
	this.shape_68.setTransform(246.3,129.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#373535").s().p("AgNAnQgKgFgFgKQgFgKAAgNQAAgMAFgLQAGgLALgFQAKgHANABQAHgBAGACIAJADIgDANIgIgEIgLgBQgKAAgGAFQgGAEgEAHQgDAIAAAIQAAAKAEAIQAEAHAGADQAGAEAJABIALgCIAIgDIADAMQgDACgHACIgPABQgMAAgKgGg");
	this.shape_69.setTransform(237.5,129.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgFgEgDQgFgEgHAAQgHABgFAEQgGAFgCAFIgBADIAAAFIAAA0IgQAAIAAh/IAQAAIAAA3IAAAAIAFgGIAGgGIAIgDIAIgBIAJABQAGACAEAFQAFAEADAHQADAGAAALIAAA0g");
	this.shape_70.setTransform(374.5,101.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#373535").s().p("AgNAoQgKgGgFgKQgFgKAAgNQAAgNAFgKQAGgKALgGQAKgGANgBQAHAAAGACIAJADIgDAMIgIgCIgLgCQgKAAgGAEQgGAFgEAIQgDAHAAAIQAAALAEAGQAEAIAGAEQAGADAJAAIALAAIAIgDIADALQgDACgHABIgPACQgMAAgKgFg");
	this.shape_71.setTransform(365.6,103.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#373535").s().p("AgUApQgHgDgEgIQgFgIAAgQIAAgxIAQAAIAAAvQAAAMAEAHQAFAIAKAAQAFAAAEgCQAEgCADgEQADgDACgDIABgEIAAgEIAAg0IAQAAIAAA+IAAAMIAAALIgOAAIgBgOIAAAAQgCAEgEADQgDAEgHADQgFACgHAAQgHAAgHgDg");
	this.shape_72.setTransform(356.5,104);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#373535").s().p("AAvAsIAAgwQAAgNgFgGQgEgIgKABQgHAAgFADQgFAFgCAGIgBAEIAAADIAAA1IgPAAIAAgzQABgKgFgHQgEgGgKAAQgEgBgFADQgEACgCAEQgDADgBAEIgBAEIgBAEIAAAzIgPAAIAAg+IAAgMIgBgLIAPAAIAAANIAAAAIAHgIQADgDAGgCQAEgDAIAAQAJABAGAFQAGAEADAIIAAAAIAEgGIAGgFQADgDAFgCQAFgCAGAAQAGAAAGAEQAHADAFAIQAEAIAAAPIAAAyg");
	this.shape_73.setTransform(344.1,103.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#373535").s().p("AgWAoQgIgFgGgLQgFgKgBgOQABgNAFgKQAGgKAJgGQALgGALAAQAMAAAJAGQAKAGAFAKQAGAKgBANQAAAPgGAKQgGALgKAFQgKAEgKAAQgMABgKgGgAgOgcQgGAGgDAHQgDAIABAHQgBAKAEAHQADAIAGAEQAGAEAHAAQAIAAAFgEQAHgEACgIQAEgIABgJQAAgHgEgHQgCgIgGgGQgFgEgKAAQgIAAgGAEg");
	this.shape_74.setTransform(327.8,103.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_75.setTransform(320,102.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#373535").s().p("AAWAsIAAgwQAAgHgDgHQgBgFgFgEQgEgEgIABQgGAAgGAEQgGAFgCAHIgBADIAAAEIAAAzIgQAAIAAg+IAAgMIgBgLIAPAAIABAOIAAAAQACgFAEgDQAEgEAGgCQAFgDAGAAIAKACQAFABAFAFQAFAEADAHQADAIAAAKIAAAzg");
	this.shape_76.setTransform(312.1,103.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgCgDgBgEQABgEACgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_77.setTransform(305,102.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#373535").s().p("AgTA+QgHgCgGgEIAEgMQAEADAHACQAHACAIAAQAGAAAHgDQAGgDAEgHQAEgHAAgKIAAgKIgBAAQgDAGgIAEQgHAEgIAAQgLAAgJgFQgIgGgFgJQgFgJAAgMQAAgPAGgKQAFgKAKgGQAIgFALAAQAGAAAFACQAGACADAEQAEADACAEIAAAAIABgNIANAAIAAAKIAAAOIAAAxQAAAPgDAKQgDAJgHAGQgGAGgJACQgHACgIAAIgQgBgAgRgpQgHAJAAAPQAAAJAEAHQACAGAGAEQAFAEAIAAQAHAAAHgEQAGgEACgHIABgEIABgEIAAgQIgBgEIAAgDQgDgHgFgFQgGgFgJAAQgKAAgIAJg");
	this.shape_78.setTransform(293.8,105.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#373535").s().p("AAVAsIAAgwQAAgHgBgHQgCgFgFgEQgFgEgGABQgIAAgFAEQgGAFgCAHIgBADIAAAEIAAAzIgQAAIAAg+IAAgMIgBgLIAOAAIABAOIABAAQACgFAEgDQAEgEAGgCQAFgDAGAAIAKACQAFABAGAFQAEAEADAHQADAIABAKIAAAzg");
	this.shape_79.setTransform(284.1,103.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgCADgFAAQgDAAgDgDg");
	this.shape_80.setTransform(277,102.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgFgEgDQgFgEgHAAQgHABgFAEQgGAFgCAFIgBADIAAAFIAAA0IgQAAIAAh/IAQAAIAAA3IAAAAIAFgGIAGgGIAIgDIAIgBIAJABQAGACAEAFQAFAEADAHQADAGAAALIAAA0g");
	this.shape_81.setTransform(269.9,101.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#373535").s().p("AgNAoQgKgGgFgKQgFgKAAgNQAAgNAFgKQAGgKALgGQAKgGANgBQAHAAAGACIAJADIgDAMIgIgCIgLgCQgKAAgGAEQgGAFgEAIQgDAHAAAIQAAALAEAGQAEAIAGAEQAGADAJAAIALAAIAIgDIADALQgDACgHABIgPACQgMAAgKgFg");
	this.shape_82.setTransform(260.9,103.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#373535").s().p("AgWAqQgGgEgDgGQgDgFAAgGQAAgRAOgGQANgJAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFADIgEgKQAGgEAHgBQAIgDAHAAQANAAAHAGQAIAFACAIQADAIAAAJIAAAgIAAAKIACAKIgPAAIgBgLIgBAAQgDAGgHAEQgHADgIAAQgJAAgGgDgAABAAQgIABgFAFQgGAFAAAHQAAAJAEADQAFADAGAAQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_83.setTransform(252.2,103.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgMQAAgNAFgKQAEgLAKgGQAJgHALAAQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgDIACALQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_84.setTransform(243.6,103.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#373535").s().p("AgUAsIAAg6IAAgPIgBgMIAOAAIABAQIAAAAQADgIAGgFQAGgFAIgBIADAAIACABIAAAPIgDgBIgCAAQgJABgFAFQgFAGgCAIIAAAEIAAAEIAAAtg");
	this.shape_85.setTransform(236.8,103.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#373535").s().p("AgUAtIAAg8IAAgOIgBgNIAOAAIABASIAAAAQADgJAGgGQAGgEAIAAIADAAIACAAIAAAPIgDgBIgCAAQgJAAgFAGQgFAFgCAKIAAADIAAAEIAAAug");
	this.shape_86.setTransform(412.9,78.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgKAAgNQAAgNAFgLQAEgKAKgGQAJgGALAAQALAAAHADQAHAFAEAGQAEAGACAIQACAGgBAGIAAAEIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgCIAKgDIACAMQgEACgHACIgSACQgMgBgKgGgAAXgHQAAgFgCgGQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_87.setTransform(405,78.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#373535").s().p("AgTA+QgIgCgFgEIAEgMQAEADAHACQAHACAHAAQAIAAAGgDQAGgDAEgHQAEgHgBgKIAAgKIAAAAQgDAGgIAEQgGAEgKAAQgLAAgIgFQgIgGgFgJQgEgJgBgMQABgPAFgKQAGgKAIgGQAKgFAJAAQAHAAAGACQAFACAEAEQADADABAEIABAAIABgNIANAAIAAAKIAAAOIAAAxQAAAPgDAKQgDAJgGAGQgHAGgJACQgIACgHAAIgQgBgAgQgpQgIAJABAPQAAAJACAHQADAGAGAEQAGAEAHAAQAIAAAFgEQAGgEADgHIABgEIAAgEIAAgQIAAgEIgBgDQgCgHgGgFQgFgFgIAAQgLAAgHAJg");
	this.shape_88.setTransform(395.2,80.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#373535").s().p("AgTA+QgHgCgGgEIAEgMQAEADAHACQAHACAIAAQAGAAAHgDQAGgDAEgHQAEgHAAgKIAAgKIgBAAQgDAGgIAEQgHAEgIAAQgMAAgIgFQgIgGgFgJQgFgJAAgMQAAgPAGgKQAFgKAKgGQAIgFALAAQAGAAAFACQAGACADAEQAEADACAEIAAAAIABgNIANAAIAAAKIAAAOIAAAxQAAAPgDAKQgDAJgHAGQgGAGgJACQgHACgIAAIgQgBgAgRgpQgHAJAAAPQAAAJAEAHQACAGAGAEQAFAEAIAAQAHAAAHgEQAGgEACgHIABgEIABgEIAAgQIgBgEIAAgDQgDgHgFgFQgGgFgJAAQgKAAgIAJg");
	this.shape_89.setTransform(385.2,80.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_90.setTransform(378.3,76.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#373535").s().p("AgNA9QgHgEgGgIIAAAAIgBAOIgNAAIAAgKIAAgMIAAhpIAQAAIAAA3QAFgIAHgDQAHgFAKAAQALAAAIAGQAIAFAFAKQAEAJABANQAAAQgHAKQgFAKgJAGQgJAFgKAAQgIAAgHgEgAgOgIQgGAGgEAIIAAADIAAAEIAAAPIAAADIAAADQADAIAGAFQAGAFAJABQAMgBAGgJQAIgJgBgPQAAgJgCgHQgDgHgGgEQgGgFgIABQgIAAgGAEg");
	this.shape_91.setTransform(371.4,76.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#373535").s().p("AgQAsQgHgCgEgDIADgMIAJAEQAHACAGABQAHAAAEgEQAFgEgBgGQAAgFgEgEQgDgDgIgEQgMgEgFgFQgGgGAAgIQAAgHADgGQAFgGAGgDQAHgEAIABQAHgBAGACQAFACAEACIgFAMIgGgEQgFgBgGgBQgHABgDADQgEADAAAFQAAAFAEADQAEAEAIADQALAEAGAFQAFAHAAAJQAAAMgIAHQgJAHgOABQgHAAgGgCg");
	this.shape_92.setTransform(358.6,78.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABALIgGACIgIABQgGAAgEgCg");
	this.shape_93.setTransform(352,77.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgKAAgNQAAgNAFgLQAEgKAKgGQAJgGALAAQALAAAHADQAHAFAEAGQAEAGACAIQACAGgBAGIAAAEIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgCIAKgDIACAMQgEACgHACIgSACQgMgBgKgGgAAXgHQAAgFgCgGQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_94.setTransform(344.6,78.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#373535").s().p("AgTA+QgHgCgGgEIAEgMQAEADAHACQAGACAIAAQAIAAAGgDQAGgDAEgHQAEgHgBgKIAAgKIAAAAQgEAGgHAEQgHAEgJAAQgLAAgIgFQgIgGgFgJQgEgJgBgMQABgPAFgKQAGgKAIgGQAKgFAJAAQAHAAAGACQAFACAEAEQADADABAEIABAAIABgNIAOAAIgBAKIAAAOIAAAxQAAAPgDAKQgDAJgGAGQgHAGgIACQgJACgHAAIgQgBgAgQgpQgIAJABAPQAAAJACAHQADAGAGAEQAFAEAIAAQAIAAAFgEQAGgEADgHIABgEIAAgEIAAgQIAAgEIgBgDQgCgHgGgFQgFgFgIAAQgLAAgHAJg");
	this.shape_95.setTransform(334.8,80.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#373535").s().p("AgWA8QgJgGgEgKQgFgKAAgOQAAgOAFgJQAFgLAKgFQAIgGALAAQAJAAAHAEQAGAEADAFIABAAIAAg0IAQAAIAABpIAAAMIAAAKIgOAAIgBgPIAAAAQgEAIgHAEQgIAFgKAAQgKAAgJgFgAgMgIQgGAEgDAGQgDAIAAAKQAAAJADAHQACAIAHAEQAFAEAHAAQAJAAAGgFQAHgEACgJIABgEIAAgEIAAgPIAAgDIgBgDQgCgHgGgGQgGgEgJAAQgHgBgGAFg");
	this.shape_96.setTransform(320.9,76.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#373535").s().p("AgUAqQgHgEgEgIQgFgJAAgOIAAgzIAQAAIAAAvQAAANAEAIQAFAHALAAQAEAAAEgCQAEgCADgDQADgDACgEIAAgEIAAgEIAAg1IARAAIAAA/IAAAMIAAAMIgOAAIgBgPIAAAAQgCAEgEAEQgDADgHADQgFACgHABQgHAAgHgDg");
	this.shape_97.setTransform(311.2,78.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#373535").s().p("AgWAoQgIgGgGgJQgFgKgBgOQABgOAFgLQAGgKAJgFQALgGALABQAMgBAJAGQAKAGAFAKQAGAKgBANQAAAPgGALQgGAKgKAEQgKAGgKAAQgMgBgKgFgAgOgbQgGAEgDAIQgDAIABAHQgBAKAEAIQADAHAGAEQAGAFAHAAQAIAAAFgFQAHgEACgIQAEgHABgKQAAgHgEgIQgCgHgGgFQgFgGgKAAQgIAAgGAGg");
	this.shape_98.setTransform(301.3,78.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_99.setTransform(294.2,76.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#373535").s().p("AgNAnQgKgFgFgKQgFgKAAgNQAAgMAFgLQAGgKALgHQAKgFANAAQAHgBAGACIAJADIgDANIgIgEIgLgBQgKAAgGAFQgGAEgEAHQgDAIAAAIQAAAKAEAIQAEAHAGADQAGAEAJAAIALgBIAIgDIADAMQgDACgHACIgPACQgMgBgKgGg");
	this.shape_100.setTransform(288.1,78.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgKAAgNQAAgNAFgLQAEgKAKgGQAJgGALAAQALAAAHADQAHAFAEAGQAEAGACAIQACAGgBAGIAAAEIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgCIAKgDIACAMIgLAEIgSACQgMgBgKgGgAAXgHQAAgFgCgGQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_101.setTransform(275.7,78.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgFgEgDQgFgEgHAAQgHAAgFAFQgGAFgCAFIgBAEIAAADIAAA1IgQAAIAAh/IAQAAIAAA2IAAAAIAFgGIAGgEIAIgEIAIgBIAJABQAGACAEAEQAFAEADAIQADAGAAALIAAA0g");
	this.shape_102.setTransform(266.2,76.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABALIgGACIgIABQgGAAgEgCg");
	this.shape_103.setTransform(258.2,77.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#373535").s().p("AgRAsQgGgCgFgDIAFgMIAJAEQAGACAGABQAHAAAEgEQAEgEABgGQAAgFgFgEQgDgDgIgEQgLgEgHgFQgFgGAAgIQAAgHAEgGQADgGAHgDQAHgEAIABQAHgBAFACQAGACADACIgDAMIgHgEQgFgBgGgBQgHABgDADQgEADAAAFQAAAFAEADQAEAEAHADQAMAEAGAFQAGAHAAAJQAAAMgJAHQgIAHgPABQgHAAgHgCg");
	this.shape_104.setTransform(247.9,78.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#373535").s().p("AAiA9IgNgmIgqAAIgNAmIgQAAIAph5IASAAIAqB5gAASAKIgMgiIgEgLIgCgLIAAAAIgDALIgDALIgMAiIAkAAg");
	this.shape_105.setTransform(238.9,76.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},74).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},371).wait(1));

	// Text3
	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#373535").s().p("AgRArQgGgBgFgCIAFgNIAJAFQAFABAHAAQAHAAAEgDQAEgEABgFQAAgGgFgDQgDgFgIgCQgLgEgGgGQgGgGAAgIQAAgHAEgGQAEgGAGgDQAGgEAJAAQAHAAAFACQAGABADADIgDALIgHgDQgFgBgGAAQgGgBgEAEQgEADAAAFQAAAGAEADQAEADAIADQALAEAGAGQAGAFgBAKQABAMgJAHQgJAHgOAAQgHAAgHgCg");
	this.shape_106.setTransform(794.1,43.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFgBIAEAAIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_107.setTransform(787.5,42.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#373535").s().p("AgPBBIAAhKIgNAAIAAgMIANAAIAAgEQgBgKADgIQADgIAFgFQAFgEAEgCIALgCIAIABIAGACIgCAMIgFgCIgGAAQgGAAgEADQgEAEgBAGQgBAFAAAHIAAAFIAVAAIAAAMIgVAAIAABKg");
	this.shape_108.setTransform(782.2,41.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#373535").s().p("AgWAqQgGgEgDgGQgDgFAAgGQAAgRAOgGQANgJAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFADIgEgKQAGgEAHgBQAIgDAHAAQANAAAHAGQAIAFACAIQADAIAAAJIAAAgIAAAKIACAKIgPAAIgBgLIgBAAQgDAGgHAEQgHADgIAAQgJAAgGgDgAABAAQgIABgFAFQgGAFAAAHQAAAJAEADQAFADAGAAQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_109.setTransform(774.5,43.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#373535").s().p("AgUAsIAAg6IAAgPIgBgMIAOAAIABAQIAAAAQADgIAGgFQAGgFAIgBIADAAIACABIAAAPIgDgBIgCAAQgJABgFAFQgFAGgCAIIAAAEIAAAEIAAAtg");
	this.shape_110.setTransform(768,43.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#373535").s().p("AgWA7QgJgFgEgKQgFgKAAgOQAAgOAFgJQAFgKAJgHQAJgFALAAQAJAAAGAEQAHAEADAFIAAAAIAAg0IAQAAIAABoIAAANIABAKIgOAAIgBgPIgBAAQgDAIgIAEQgHAFgKAAQgLAAgIgGgAgMgIQgGAEgDAGQgDAJAAAJQAAAJADAHQADAHAFAFQAGAEAIAAQAHAAAHgFQAHgEACgKIAAgDIAAgDIAAgQIAAgDIAAgEQgCgGgGgFQgGgGgJAAQgHABgGAEg");
	this.shape_111.setTransform(759.3,41.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#373535").s().p("AAVAsIAAgwQAAgHgBgHQgCgFgFgEQgFgEgGABQgIAAgFAEQgGAFgCAHIgBADIAAAEIAAAzIgQAAIAAg+IAAgMIAAgLIANAAIABAOIABAAQACgFAEgDQAEgEAFgCQAGgDAGAAIALACQAEABAGAFQAEAEADAHQADAIABAKIAAAzg");
	this.shape_112.setTransform(749.5,43.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#373535").s().p("AAVArIgOgpIgEgNIgDgPIAAAAIgDAPIgFANIgOApIgOAAIgahVIAQAAIALAqIAEAPIADAOIAAAAIAEgOIAEgOIAOgrIANAAIANAqIAEAPIAEAOIAAAAIADgOIAEgPIAMgqIAQAAIgcBVg");
	this.shape_113.setTransform(737.9,43.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#373535").s().p("AgWAoQgJgFgFgLQgFgKAAgOQAAgNAFgKQAGgKAJgGQALgGALAAQAMAAAJAGQAKAGAFAKQAGAKgBANQAAAPgGAKQgHALgJAFQgKAEgKAAQgMABgKgGgAgOgcQgGAGgDAHQgCAIAAAHQgBAKAEAHQADAIAGAEQAGAEAHAAQAIAAAFgEQAHgEACgIQAEgIABgJQgBgHgDgHQgCgIgGgGQgFgEgKAAQgIAAgGAEg");
	this.shape_114.setTransform(726.4,43.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#373535").s().p("AgWA7QgJgFgEgKQgFgKAAgOQAAgOAFgJQAFgKAKgHQAIgFALAAQAJAAAHAEQAGAEADAFIABAAIAAg0IAQAAIAABoIAAANIAAAKIgOAAIgBgPIgBAAQgDAIgHAEQgIAFgKAAQgLAAgIgGgAgMgIQgGAEgDAGQgDAJAAAJQAAAJADAHQACAHAHAFQAFAEAHAAQAJAAAGgFQAHgEACgKIABgDIAAgDIAAgQIAAgDIgBgEQgCgGgGgFQgGgGgJAAQgHABgGAEg");
	this.shape_115.setTransform(716.1,41.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#373535").s().p("AgWA7QgJgFgEgKQgFgKAAgOQAAgOAFgJQAFgKAKgHQAIgFALAAQAJAAAHAEQAGAEADAFIABAAIAAg0IAQAAIAABoIAAANIAAAKIgOAAIgBgPIAAAAQgEAIgHAEQgIAFgKAAQgLAAgIgGgAgMgIQgGAEgDAGQgDAJAAAJQAAAJADAHQACAHAHAFQAFAEAHAAQAJAAAGgFQAHgEACgKIABgDIAAgDIAAgQIAAgDIgBgEQgCgGgGgFQgGgGgJAAQgHABgGAEg");
	this.shape_116.setTransform(702.2,41.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#373535").s().p("AAWAsIAAgwQAAgHgDgHQgBgFgFgEQgEgEgIABQgGAAgGAEQgGAFgCAHIgBADIAAAEIAAAzIgQAAIAAg+IAAgMIgBgLIAPAAIABAOIAAAAQACgFAEgDQAEgEAGgCQAFgDAGAAIAKACQAFABAFAFQAFAEADAHQADAIAAAKIAAAzg");
	this.shape_117.setTransform(692.4,43.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#373535").s().p("AgWAqQgGgEgDgGQgDgFAAgGQAAgRAOgGQANgJAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFADIgEgKQAGgEAHgBQAIgDAHAAQANAAAHAGQAIAFACAIQADAIAAAJIAAAgIAAAKIACAKIgPAAIgBgLIgBAAQgDAGgHAEQgHADgIAAQgJAAgGgDgAABAAQgIABgFAFQgGAFAAAHQAAAJAEADQAFADAGAAQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_118.setTransform(682.8,43.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#373535").s().p("AgQArQgHgBgEgCIADgNIAJAFQAHABAFAAQAIAAAEgDQAFgEgBgFQAAgGgDgDQgEgFgIgCQgMgEgFgGQgGgGAAgIQAAgHADgGQAEgGAHgDQAGgEAJAAQAHAAAGACQAFABAEADIgFALIgHgDQgEgBgGAAQgHgBgDAEQgEADAAAFQAAAGAEADQAFADAGADQAMAEAGAGQAFAFAAAKQAAAMgIAHQgJAHgOAAQgHAAgGgCg");
	this.shape_119.setTransform(671.3,43.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFgBIAEAAIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_120.setTransform(664.7,42.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#373535").s().p("AgPBBIAAhKIgNAAIAAgMIANAAIAAgEQAAgKACgIQADgIAFgFQAEgEAFgCIALgCIAIABIAFACIgCAMIgEgCIgGAAQgGAAgEADQgEAEgBAGQgBAFAAAHIAAAFIAUAAIAAAMIgUAAIAABKg");
	this.shape_121.setTransform(659.4,41.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#373535").s().p("AgWAqQgGgEgDgGQgDgFAAgGQAAgRAOgGQANgJAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFADIgEgKQAGgEAHgBQAIgDAHAAQANAAAHAGQAIAFACAIQADAIAAAJIAAAgIAAAKIACAKIgPAAIgBgLIgBAAQgDAGgHAEQgHADgIAAQgJAAgGgDgAABAAQgIABgFAFQgGAFAAAHQAAAJAEADQAFADAGAAQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_122.setTransform(651.7,43.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#373535").s().p("AgUAsIAAg6IAAgPIgBgMIAOAAIABAQIAAAAQADgIAGgFQAGgFAIgBIADAAIACABIAAAPIgDgBIgCAAQgJABgFAFQgFAGgCAIIAAAEIAAAEIAAAtg");
	this.shape_123.setTransform(645.2,43.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#373535").s().p("AgWA7QgJgFgEgKQgFgKAAgOQAAgOAFgJQAFgKAKgHQAIgFALAAQAJAAAHAEQAGAEADAFIABAAIAAg0IAQAAIAABoIAAANIAAAKIgOAAIgBgPIgBAAQgDAIgHAEQgIAFgKAAQgLAAgIgGgAgMgIQgGAEgDAGQgDAJAAAJQAAAJADAHQACAHAHAFQAFAEAHAAQAJAAAGgFQAHgEACgKIABgDIAAgDIAAgQIAAgDIgBgEQgCgGgGgFQgGgGgJAAQgHABgGAEg");
	this.shape_124.setTransform(636.5,41.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#373535").s().p("AgoA+IAAhdIAAgPIAAgNIANAAIACAPIAAAAQAEgIAIgFQAIgEAJAAQAMAAAHAFQAJAGAFAKQAEAKAAANQAAAQgFAJQgFAKgJAFQgKAGgKAAQgHAAgIgEQgHgDgEgHIAAAvgAgOgrQgGAFgDAJIgBADIAAADIAAAPIAAAEIABADQACAHAGAFQAHAFAIAAQAIAAAGgEQAFgEADgIQADgGAAgKQAAgJgDgHQgCgIgGgEQgGgFgIAAQgIAAgGAGg");
	this.shape_125.setTransform(626.9,45.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#373535").s().p("AgUApQgGgDgFgIQgFgIAAgQIAAgxIAQAAIAAAvQAAAMAEAHQAEAIALAAQAFAAAEgCQAEgCADgEQADgDACgDIABgEIAAgEIAAg0IAQAAIAAA+IAAAMIAAALIgOAAIAAgOIgBAAQgCAEgEADQgEAEgGADQgFACgHAAQgHAAgHgDg");
	this.shape_126.setTransform(616.5,43.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#373535").s().p("AgRArQgGgBgFgCIAFgNIAJAFQAFABAHAAQAHAAAEgDQAEgEABgFQAAgGgFgDQgDgFgIgCQgLgEgHgGQgFgGAAgIQAAgHAEgGQADgGAHgDQAHgEAIAAQAHAAAFACQAGABADADIgDALIgHgDQgFgBgGAAQgGgBgEAEQgEADAAAFQAAAGAEADQAEADAIADQALAEAGAGQAGAFgBAKQABAMgJAHQgJAHgOAAQgHAAgHgCg");
	this.shape_127.setTransform(604.2,43.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgJAAgNQAAgNAFgKQAEgLAKgGQAJgHALAAQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgDIACALIgLADIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_128.setTransform(596.1,43.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFgBIAEAAIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_129.setTransform(588.7,42.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#373535").s().p("AgWAqQgGgEgDgGQgDgFAAgGQAAgRAOgGQANgJAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFADIgEgKQAGgEAHgBQAIgDAHAAQANAAAHAGQAIAFACAIQADAIAAAJIAAAgIAAAKIACAKIgPAAIgBgLIgBAAQgDAGgHAEQgHADgIAAQgJAAgGgDgAABAAQgIABgFAFQgGAFAAAHQAAAJAEADQAFADAGAAQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_130.setTransform(581.3,43.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgJAAgNQAAgNAFgKQAEgLAKgGQAJgHALAAQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgDIACALQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_131.setTransform(572.7,43.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#373535").s().p("AgUAsIAAg6IAAgPIgBgMIAOAAIABAQIAAAAQADgIAGgFQAGgFAIgBIADAAIACABIAAAPIgDgBIgCAAQgJABgFAFQgFAGgCAIIAAAEIAAAEIAAAtg");
	this.shape_132.setTransform(565.9,43.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#373535").s().p("AgNAoQgKgGgFgKQgFgKAAgNQAAgNAFgKQAGgKALgHQAKgFANgBQAHAAAGACIAJADIgDAMIgIgCIgLgCQgKAAgGAEQgGAFgEAIQgDAHAAAIQAAALAEAGQAEAIAGAEQAGADAJAAIALAAIAIgDIADALQgDACgHABIgPACQgMAAgKgFg");
	this.shape_133.setTransform(558.5,43.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#373535").s().p("AgUAtIAAg8IAAgOIgBgNIAOAAIABASIAAAAQADgJAGgGQAGgEAIAAIADAAIACAAIAAAPIgDgBIgCAAQgJAAgFAGQgFAFgCAKIAAADIAAAEIAAAug");
	this.shape_134.setTransform(770.8,18.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_135.setTransform(765.3,16.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgHQAAgPAOgIQANgIAYAAIAAgCQABgEgCgEQgBgFgEgDQgFgDgHgBQgHAAgFACQgGACgFADIgEgLQAGgDAHgDQAIgBAHAAQANgBAHAGQAIAFACAIQADAIAAAJIAAAfIAAAMIACAKIgPAAIgBgMIgBAAQgDAGgHADQgHAFgIAAQgJAAgGgFgAABAAQgIABgFAFQgGAEAAAJQAAAHAEAEQAFAEAGAAQAHgBAGgEQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_136.setTransform(758.6,18.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#373535").s().p("AAvAtIAAgxQAAgMgEgHQgFgIgKAAQgHAAgFAFQgFAEgCAGIgBADIAAAFIAAA1IgPAAIAAgzQABgLgFgHQgEgGgKgBQgEABgFACQgEACgCADQgDAEgBAEIgBAEIgBAEIAAA0IgPAAIAAg/IAAgNIgBgLIAPAAIAAAPIABAAIAGgIQADgEAGgCQAEgDAIABQAJAAAGAEQAGAFADAIIAAAAIAEgHIAGgFQADgCAFgCQAFgCAGABQAGAAAGACQAHAEAFAIQAEAIAAAPIAAAzg");
	this.shape_137.setTransform(743.2,18.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#373535").s().p("AgUAtIAAg8IAAgOIgBgNIAOAAIABASIAAAAQADgJAGgGQAGgEAIAAIADAAIACAAIAAAPIgDgBIgCAAQgJAAgFAGQgFAFgCAKIAAADIAAAEIAAAug");
	this.shape_138.setTransform(733.2,18.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgHQAAgPAOgIQANgIAYAAIAAgCQABgEgCgEQgBgFgEgDQgFgDgHgBQgHAAgFACQgGACgFADIgEgLQAGgDAHgDQAIgBAHAAQANgBAHAGQAIAFACAIQADAIAAAJIAAAfIAAAMIACAKIgPAAIgBgMIgBAAQgDAGgHADQgHAFgIAAQgJAAgGgFgAABAAQgIABgFAFQgGAEAAAJQAAAHAEAEQAFAEAGAAQAHgBAGgEQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_139.setTransform(725.2,18.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#373535").s().p("AAVAsIgOgqIgEgNIgDgOIAAAAIgDAOIgFANIgOAqIgOAAIgahXIAQAAIALAsIAEAOIADANIAAAAIAEgNIAEgOIAOgsIANAAIANArIAEAPIAEANIAAAAIADgNIAEgPIAMgrIAQAAIgcBXg");
	this.shape_140.setTransform(714.5,18.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgFgEgDQgFgEgHAAQgHAAgFAFQgGAFgCAFIgBAEIAAADIAAA1IgQAAIAAh/IAQAAIAAA3IAAAAIAFgHIAGgEIAIgEIAIgBIAJABQAGACAEAEQAFAEADAIQADAGAAALIAAA0g");
	this.shape_141.setTransform(699.1,16.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABALIgGACIgIABQgGAAgEgCg");
	this.shape_142.setTransform(691,17.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgCADgFAAQgDAAgDgDg");
	this.shape_143.setTransform(686,16.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#373535").s().p("AAVAsIgOgqIgEgNIgDgOIAAAAIgDAOIgFANIgOAqIgOAAIgahXIAQAAIALAsIAEAOIADANIAAAAIAEgNIAEgOIAOgsIANAAIANArIAEAPIAEANIAAAAIADgNIAEgPIAMgrIAQAAIgcBXg");
	this.shape_144.setTransform(677.3,18.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#373535").s().p("AgTA+QgIgCgFgEIAEgMQAEADAHACQAGACAJAAQAGAAAHgDQAGgDAEgHQADgHABgKIAAgKIgBAAQgEAGgGAEQgIAEgIAAQgLAAgJgFQgIgGgFgJQgFgJABgMQgBgPAGgKQAFgKAKgGQAIgFALAAQAGAAAFACQAGACADAEQAEADACAEIAAAAIABgNIAOAAIgBAKIAAAOIAAAxQAAAPgDAKQgDAJgHAGQgGAGgJACQgHACgIAAIgQgBgAgRgpQgGAJgBAPQAAAJAEAHQACAGAGAEQAFAEAIAAQAHAAAHgEQAFgEADgHIABgEIABgEIAAgQIgBgEIAAgDQgDgHgFgFQgGgFgJAAQgKAAgIAJg");
	this.shape_145.setTransform(661.6,20.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#373535").s().p("AAVAtIAAgyQAAgGgBgGQgCgHgFgDQgFgDgGgBQgIABgFAFQgGAEgCAHIgBADIAAAEIAAA0IgQAAIAAg/IAAgNIAAgLIANAAIABAPIABAAQACgFAEgDQAEgEAFgCQAGgDAGABIALABQAEACAGAEQAEAEADAHQADAIABALIAAAzg");
	this.shape_146.setTransform(651.8,18.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_147.setTransform(644.7,16.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#373535").s().p("AAWAsIgNgUIgFgHIgEgIIAAAAIgEAIIgFAHIgMAUIgSAAIAfgsIgdgrIARAAIANATIAEAHIAEAIIAAAAIAEgIIAFgHIAMgTIARAAIgeArIAfAsg");
	this.shape_148.setTransform(638.4,18.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgCgDgBgEQABgEACgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_149.setTransform(632.2,16.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#373535").s().p("AAvAtIAAgxQAAgMgFgHQgEgIgKAAQgGAAgFAFQgGAEgBAGIgBADIgBAFIAAA1IgOAAIAAgzQgBgLgEgHQgEgGgJgBQgFABgEACQgEACgDADQgDAEgBAEIgBAEIAAAEIAAA0IgQAAIAAg/IAAgNIAAgLIANAAIABAPIAAAAIAGgIQAEgEAFgCQAFgDAIABQAJAAAGAEQAFAFADAIIABAAIAFgHIAEgFQAEgCAFgCQAEgCAHABQAGAAAHACQAGAEAEAIQAFAIABAPIAAAzg");
	this.shape_150.setTransform(622.6,18.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#373535").s().p("AgUAtIAAg8IAAgOIgBgNIAOAAIABASIAAAAQADgJAGgGQAGgEAIAAIADAAIACAAIAAAPIgDgBIgCAAQgJAAgFAGQgFAFgCAKIAAADIAAAEIAAAug");
	this.shape_151.setTransform(608.8,18.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgCgDgBgEQABgEACgDQACgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_152.setTransform(603.3,16.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgHQAAgPAOgIQANgIAYAAIAAgCQABgEgCgEQgBgFgEgDQgFgDgHgBQgHAAgFACQgGACgFADIgEgLQAGgDAHgDQAIgBAHAAQANgBAHAGQAIAFACAIQADAIAAAJIAAAfIAAAMIACAKIgPAAIgBgMIgBAAQgDAGgHADQgHAFgIAAQgJAAgGgFgAABAAQgIABgFAFQgGAEAAAJQAAAHAEAEQAFAEAGAAQAHgBAGgEQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_153.setTransform(596.6,18.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_154.setTransform(586.5,16.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#373535").s().p("AgWAoQgIgGgGgJQgFgKgBgOQABgOAFgLQAGgKAJgFQAKgGAMABQAMgBAJAGQAKAGAFAKQAGAKAAANQgBAPgGALQgGAKgLAEQgJAGgKAAQgMgBgKgFgAgOgbQgGAEgDAIQgDAIABAHQAAAKADAIQADAHAGAEQAGAFAHAAQAIAAAFgFQAHgEACgIQAEgHABgKQAAgHgEgIQgCgHgFgFQgHgGgJAAQgIAAgGAGg");
	this.shape_155.setTransform(579.5,18.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#373535").s().p("AgWAoQgIgGgGgJQgFgKgBgOQABgOAFgLQAGgKAJgFQAKgGAMABQAMgBAJAGQAKAGAFAKQAGAKAAANQgBAPgGALQgGAKgKAEQgKAGgKAAQgMgBgKgFgAgOgbQgGAEgDAIQgDAIABAHQgBAKAEAIQADAHAGAEQAGAFAHAAQAIAAAFgFQAHgEACgIQAEgHABgKQAAgHgEgIQgCgHgFgFQgHgGgJAAQgIAAgGAGg");
	this.shape_156.setTransform(569.6,18.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#373535").s().p("AgQA3QgNgHgIgNQgIgOAAgUQAAgSAIgPQAIgOAOgHQAOgJATAAQALABAHABIAKAEIgDAMIgMgDQgFgCgIAAQgPABgJAFQgKAGgHALQgFAMAAAOQgBAQAGAKQAGALAKAGQAJAGAPAAIAOgBQAHgBAFgDIADAMIgMAFIgUACQgQgBgOgHg");
	this.shape_157.setTransform(559.7,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106}]},180).to({state:[{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106}]},265).wait(1));

	// Text4
	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#373535").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQACADABAEQgBAFgCADQgDADgFAAQgEAAgDgDg");
	this.shape_158.setTransform(604.1,492.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#373535").s().p("AAEAJIAEgOIADgOIAQgCIgFAQIgGAOIgGAMIgKABIAEgNgAgWAJIAEgOIADgOIAPgCIgEAQIgGAOIgFAMIgLABIAEgNg");
	this.shape_159.setTransform(601.8,483.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_160.setTransform(596.3,487.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_161.setTransform(589.7,489.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#373535").s().p("AgoA+IAAhdIAAgPIgBgNIAPAAIABAPIAAAAQAFgIAHgFQAIgEAJAAQAMAAAHAFQAJAGAFAKQAEAKAAANQABAQgGAJQgFAKgKAFQgIAGgLAAQgHAAgIgEQgHgDgEgHIAAAvgAgOgrQgHAFgCAJIgBADIAAADIAAAPIAAAEIAAADQADAHAGAFQAGAFAJAAQAHAAAGgEQAHgEACgIQAEgGAAgKQAAgJgEgHQgDgIgFgEQgGgFgIAAQgHAAgHAGg");
	this.shape_162.setTransform(580.4,491);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#373535").s().p("AgUAqQgGgEgFgIQgFgJAAgPIAAgyIAQAAIAAAwQAAAMAEAIQAFAHALABQADgBAFgCQAEgCADgDQADgDACgEIAAgEIAAgEIAAg1IARAAIAAA/IAAANIAAAKIgOAAIgBgOIAAAAQgCAEgEADQgDAEgGADQgGADgHgBQgHAAgHgCg");
	this.shape_163.setTransform(570,489.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgDgHgBQgHAAgFACQgGABgFADIgEgKQAGgEAHgCQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAALIACAJIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGABQAHAAAGgFQAFgEACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_164.setTransform(560.5,489.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#373535").s().p("AgUAsIAAg7IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJgBgFAGQgFAFgCAKIAAADIAAAEIAAAtg");
	this.shape_165.setTransform(554,489.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#373535").s().p("AgTA+QgHgCgGgEIAEgMQAEADAHACQAHACAIAAQAGAAAHgDQAGgDAEgHQAEgHAAgKIAAgKIgBAAQgDAGgIAEQgHAEgIAAQgMAAgIgFQgIgGgFgJQgFgJAAgMQAAgPAGgKQAFgKAKgGQAIgFALAAQAGAAAFACQAGACADAEQAEADACAEIAAAAIABgNIANAAIAAAKIAAAOIAAAxQAAAPgDAKQgDAJgHAGQgGAGgJACQgHACgIAAIgQgBgAgRgpQgHAJAAAPQAAAJAEAHQACAGAGAEQAFAEAIAAQAHAAAHgEQAGgEACgHIABgEIABgEIAAgQIgBgEIAAgDQgDgHgFgFQgGgFgJAAQgKAAgIAJg");
	this.shape_166.setTransform(545.4,491.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#373535").s().p("AAFAGIAGgOIAFgMIALgBIgFANIgDAOIgDAOIgQACIAFgQgAgVAGIAHgOIAFgMIAJgBIgDANIgDAOIgEAOIgQACIAFgQg");
	this.shape_167.setTransform(538.7,483.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#373535").s().p("AgWA7QgIgFgFgKQgFgKAAgNQAAgPAFgJQAGgKAIgHQAJgFALAAQAJAAAGAEQAHAEADAFIABAAIAAg0IAPAAIAABoIAAAMIABALIgOAAIgBgPIAAAAQgEAHgIAFQgHAFgKAAQgLAAgIgGgAgMgIQgGAEgDAHQgDAIAAAJQAAAJADAHQADAIAFAEQAGAEAIAAQAHAAAHgFQAGgEADgKIABgDIAAgEIAAgOIAAgEIgBgEQgCgGgGgFQgGgGgJAAQgIABgFAEg");
	this.shape_168.setTransform(527.7,487.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_169.setTransform(518.4,489.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_170.setTransform(511.8,487.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_171.setTransform(507.5,487.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgDgHgBQgHAAgFACQgGABgFADIgEgKQAGgEAHgCQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAALIACAJIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGABQAHAAAGgFQAFgEACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_172.setTransform(500.8,489.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#373535").s().p("AgNAoQgKgGgFgKQgFgKAAgNQAAgMAFgLQAGgLALgFQAKgHANAAQAHABAGABIAJADIgDAMIgIgCIgLgCQgKABgGADQgGAFgEAHQgDAIAAAIQAAAKAEAHQAEAIAGADQAGAFAJAAIALgBIAIgEIADAMQgDACgHABIgPACQgMAAgKgFg");
	this.shape_173.setTransform(492.8,489.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_174.setTransform(480.4,489.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#373535").s().p("AgUAsIAAg7IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJgBgFAGQgFAFgCAKIAAADIAAAEIAAAtg");
	this.shape_175.setTransform(473.6,489.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgDgHgBQgHAAgFACQgGABgFADIgEgKQAGgEAHgCQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAALIACAJIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGABQAHAAAGgFQAFgEACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_176.setTransform(465.6,489.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_177.setTransform(453.2,489.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#373535").s().p("AgQArQgHgBgFgCIAFgNIAJAFQAGACAFAAQAIgBAEgDQAEgEAAgGQAAgFgDgEQgEgDgIgDQgLgFgHgFQgFgGAAgIQAAgHADgGQAEgFAHgEQAHgDAIgBQAHABAFABQAGACADACIgDALIgIgDQgEgCgGAAQgHAAgDAEQgEADAAAFQAAAFAEAEQAFADAGADQAMAEAGAGQAGAFAAAKQAAAMgJAHQgIAHgPAAQgHAAgGgCg");
	this.shape_178.setTransform(445.1,489.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#373535").s().p("AgSAoQgJgGgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_179.setTransform(437,489.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgEgEgEQgFgEgHAAQgHABgFAEQgGAEgCAGIgBADIAAAFIAAA0IgQAAIAAh/IAQAAIAAA2IAAAAIAFgFIAGgGIAIgDIAIgBIAJACQAGABAEAEQAFAFADAHQADAGAAALIAAA0g");
	this.shape_180.setTransform(427.5,487.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#373535").s().p("AgHA9IAAhrIglAAIAAgOIBZAAIAAAOIglAAIAABrg");
	this.shape_181.setTransform(418.2,487.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#373535").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQACADABAEQgBAFgCADQgDADgFAAQgEAAgDgDg");
	this.shape_182.setTransform(773.9,467.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#373535").s().p("AgSAnQgJgEgFgLQgFgJAAgNQAAgNAFgLQAEgKAKgGQAJgHALABQALAAAHADQAHAEAEAHQAEAGACAIQACAHgBAFIAAAEIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALIgLADIgSADQgMgBgKgGgAAXgHQAAgGgCgGQgBgGgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_183.setTransform(767.6,464.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#373535").s().p("AgWA8QgIgGgFgKQgFgKAAgOQAAgOAFgJQAFgLAJgFQAJgGALAAQAJAAAGAEQAHAEADAFIAAAAIAAg0IARAAIAABoIAAANIAAAKIgOAAIgBgPIgBAAQgDAHgIAFQgHAFgKAAQgKAAgJgFgAgMgIQgGAEgDAGQgDAJAAAJQAAAJADAHQADAHAGAFQAFAEAHAAQAIAAAHgFQAGgFADgIIAAgEIAAgDIAAgQIAAgDIAAgEQgCgGgGgGQgGgEgJgBQgIAAgFAFg");
	this.shape_184.setTransform(757.7,462.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgCADgFAAQgEAAgCgDg");
	this.shape_185.setTransform(750.8,462.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#373535").s().p("AgRArQgGgBgFgDIAFgMIAJAEQAGACAFAAQAIABAEgEQAEgEABgFQAAgGgFgDQgDgEgIgEQgLgDgHgGQgFgGAAgIQAAgHAEgGQADgFAHgEQAHgDAIAAQAHAAAFABQAGABADADIgDALIgIgDQgEgCgGABQgHgBgDAEQgEADAAAFQAAAFAEADQAEAEAHADQAMAEAGAFQAGAHAAAJQAAAMgJAHQgIAHgPABQgHAAgHgDg");
	this.shape_186.setTransform(745.1,464.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#373535").s().p("AAWAsIAAgwQAAgIgCgGQgDgGgEgDQgFgDgGgBQgIABgFAFQgGAEgCAHIgBADIAAAEIAAAzIgQAAIAAg+IAAgNIgBgKIAPAAIABAOIAAAAQACgEAEgEQAEgEAGgCQAFgCAGAAIAKABQAGACAEAEQAFAEADAHQADAIABALIAAAyg");
	this.shape_187.setTransform(736.6,464);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgCgDgBgEQABgEACgDQACgDAEAAQAEAAADADQACADABAEQAAAEgDADQgCADgFAAQgEAAgCgDg");
	this.shape_188.setTransform(729.5,462.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#373535").s().p("AgSAnQgJgEgFgLQgFgJAAgNQAAgNAFgLQAEgKAKgGQAJgHALABQALAAAHADQAHAEAEAHQAEAGACAIQACAHgBAFIAAAEIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALIgLADIgSADQgMgBgKgGgAAXgHQAAgGgCgGQgBgGgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_189.setTransform(719.1,464.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgEgEgEQgFgEgHAAQgHAAgFAFQgGAEgCAGIgBAEIAAADIAAA1IgQAAIAAh/IAQAAIAAA3IAAAAIAFgHIAGgEIAIgEIAIgBIAJABQAGACAEAFQAFADADAIQADAGAAALIAAA0g");
	this.shape_190.setTransform(709.6,462);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_191.setTransform(701.5,462.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#373535").s().p("AAVAsIAAgwQAAgIgCgGQgCgGgEgDQgEgDgIgBQgGABgGAFQgGAEgCAHIAAADIgBAEIAAAzIgQAAIAAg+IAAgNIAAgKIANAAIABAOIABAAQACgEAEgEQAEgEAFgCQAGgCAHAAIAKABQAFACAFAEQAEAEADAHQADAIAAALIAAAyg");
	this.shape_192.setTransform(689.8,464);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#373535").s().p("AgVAoQgKgGgFgKQgGgJABgOQgBgOAGgKQAGgLAKgFQAKgGAKABQANgBAKAGQAJAGAFAKQAFAKAAANQAAAQgGAJQgHALgJAEQgKAFgKABQgMAAgJgGgAgOgcQgGAGgDAHQgDAHAAAIQAAAKAEAIQADAHAGAEQAGAFAHgBQAHABAHgFQAFgEAEgIQADgIAAgJQAAgHgCgHQgDgIgGgGQgFgEgKAAQgIAAgGAEg");
	this.shape_193.setTransform(679.9,464.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#373535").s().p("AgUAsIAAg6IAAgPIgBgMIAOAAIABARIAAAAQADgKAGgFQAGgEAIAAIADAAIACAAIAAAPIgDgBIgCAAQgJABgFAFQgFAGgCAIIAAAEIAAAEIAAAtg");
	this.shape_194.setTransform(668.6,464);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#373535").s().p("AgSAnQgJgEgFgLQgFgJAAgNQAAgNAFgLQAEgKAKgGQAJgHALABQALAAAHADQAHAEAEAHQAEAGACAIQACAHgBAFIAAAEIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALQgEACgHABIgSADQgMgBgKgGgAAXgHQAAgGgCgGQgBgGgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_195.setTransform(660.7,464.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#373535").s().p("AgWA8QgJgGgEgKQgFgKAAgOQAAgOAFgJQAFgLAKgFQAIgGALAAQAJAAAHAEQAGAEADAFIABAAIAAg0IAQAAIAABoIAAANIAAAKIgOAAIgBgPIgBAAQgDAHgHAFQgIAFgKAAQgLAAgIgFgAgMgIQgGAEgDAGQgDAJAAAJQAAAJADAHQACAHAHAFQAFAEAHAAQAJAAAGgFQAHgFACgIIABgEIAAgDIAAgQIAAgDIgBgEQgCgGgGgGQgGgEgJgBQgHAAgGAFg");
	this.shape_196.setTransform(650.9,462.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_197.setTransform(643.9,462);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#373535").s().p("AgWAoQgJgGgFgKQgFgJAAgOQAAgOAFgKQAGgLAJgFQALgGALABQAMgBAJAGQAKAGAFAKQAGAKgBANQAAAQgGAJQgGALgKAEQgKAFgKABQgMAAgKgGgAgOgcQgGAGgDAHQgCAHAAAIQgBAKAEAIQADAHAGAEQAGAFAHgBQAIABAFgFQAHgEACgIQAEgIABgJQgBgHgDgHQgCgIgGgGQgFgEgKAAQgIAAgGAEg");
	this.shape_198.setTransform(636.9,464.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#373535").s().p("AgNAnQgKgFgFgKQgFgKAAgNQAAgNAFgKQAGgKALgHQAKgFANAAQAHAAAGABIAJADIgDAMIgIgDIgLgBQgKAAgGAEQgGAFgEAIQgDAHAAAIQAAAKAEAIQAEAHAGAEQAGADAJAAIALgBIAIgCIADALQgDACgHABIgPADQgMgBgKgGg");
	this.shape_199.setTransform(628.1,464.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#373535").s().p("AgWA8QgJgGgEgKQgFgKAAgOQAAgOAFgJQAFgLAJgFQAJgGALAAQAJAAAGAEQAHAEADAFIAAAAIAAg0IAQAAIAABoIAAANIABAKIgOAAIgBgPIgBAAQgDAHgIAFQgHAFgKAAQgLAAgIgFgAgMgIQgGAEgDAGQgDAJAAAJQAAAJADAHQADAHAFAFQAGAEAIAAQAHAAAHgFQAGgFADgIIAAgEIAAgDIAAgQIAAgDIAAgEQgCgGgGgGQgGgEgJgBQgHAAgGAFg");
	this.shape_200.setTransform(614.8,462.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#373535").s().p("AAVAsIAAgwQAAgIgBgGQgCgGgFgDQgFgDgGgBQgIABgFAFQgGAEgCAHIgBADIAAAEIAAAzIgQAAIAAg+IAAgNIAAgKIANAAIABAOIABAAQACgEAEgEQAEgEAFgCQAGgCAGAAIALABQAEACAGAEQAEAEADAHQADAIABALIAAAyg");
	this.shape_201.setTransform(605,464);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgGQAAgQAOgIQANgIAYAAIAAgCQABgDgCgFQgBgFgEgDQgFgDgHgBQgHAAgFACQgGABgFAEIgEgLQAGgDAHgCQAIgCAHAAQANgBAHAGQAIAFACAIQADAIAAAJIAAAfIAAALIACAKIgPAAIgBgLIgBAAQgDAGgHADQgHAFgIAAQgJAAgGgFgAABAAQgIABgFAFQgGAEAAAJQAAAHAEAEQAFAEAGgBQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_202.setTransform(595.4,464.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#373535").s().p("AgJAJIAEgOIACgPIARgBIgFAQIgGAPIgFAMIgLABIAEgOg");
	this.shape_203.setTransform(585.5,468.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#373535").s().p("AgSAnQgJgEgFgLQgFgJAAgNQAAgNAFgLQAEgKAKgGQAJgHALABQALAAAHADQAHAEAEAHQAEAGACAIQACAHgBAFIAAAEIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALIgLADIgSADQgMgBgKgGgAAXgHQAAgGgCgGQgBgGgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_204.setTransform(579.5,464.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#373535").s().p("AgWA8QgIgGgFgKQgFgKAAgOQAAgOAFgJQAFgLAKgFQAIgGALAAQAJAAAGAEQAHAEADAFIAAAAIAAg0IARAAIAABoIAAANIAAAKIgOAAIgBgPIgBAAQgDAHgIAFQgHAFgKAAQgKAAgJgFgAgMgIQgGAEgDAGQgDAJAAAJQAAAJADAHQADAHAGAFQAFAEAHAAQAIAAAHgFQAGgFADgIIAAgEIAAgDIAAgQIAAgDIAAgEQgCgGgGgGQgGgEgJgBQgIAAgFAFg");
	this.shape_205.setTransform(569.6,462.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_206.setTransform(562.7,462.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#373535").s().p("AgRArQgGgBgFgDIAFgMIAJAEQAGACAFAAQAIABAEgEQAEgEABgFQAAgGgFgDQgDgEgIgEQgLgDgHgGQgFgGAAgIQAAgHAEgGQADgFAHgEQAHgDAIAAQAHAAAFABQAGABADADIgDALIgHgDQgFgCgGABQgHgBgDAEQgEADAAAFQAAAFAEADQAEAEAHADQAMAEAGAFQAGAHAAAJQAAAMgJAHQgIAHgPABQgHAAgHgDg");
	this.shape_207.setTransform(557,464.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_208.setTransform(550.4,462.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#373535").s().p("AgUApQgHgDgEgIQgFgIAAgQIAAgxIAQAAIAAAuQAAANAEAHQAFAIALAAQAEAAAEgCQAEgCADgEQADgDACgDIAAgEIAAgEIAAg0IARAAIAAA+IAAAMIAAALIgOAAIgBgOIAAAAQgCAEgEAEQgDADgGADQgGADgHAAQgHAAgHgEg");
	this.shape_209.setTransform(542.6,464.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#373535").s().p("AgWAoQgIgGgGgKQgFgJgBgOQABgOAFgKQAGgLAJgFQAKgGAMABQAMgBAJAGQAKAGAFAKQAGAKAAANQgBAQgGAJQgGALgLAEQgJAFgKABQgMAAgKgGgAgOgcQgGAGgDAHQgDAHABAIQgBAKAEAIQADAHAGAEQAGAFAHgBQAIABAFgFQAHgEACgIQAEgIABgJQAAgHgEgHQgCgIgFgGQgHgEgJAAQgIAAgGAEg");
	this.shape_210.setTransform(532.7,464.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#373535").s().p("AgSAnQgJgEgFgLQgFgJAAgNQAAgNAFgLQAEgKAKgGQAJgHALABQALAAAHADQAHAEAEAHQAEAGACAIQACAHgBAFIAAAEIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALQgEACgHABIgSADQgMgBgKgGgAAXgHQAAgGgCgGQgBgGgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_211.setTransform(519.4,464.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgEgEgEQgFgEgHAAQgHAAgFAFQgGAEgCAGIgBAEIAAADIAAA1IgQAAIAAh/IAQAAIAAA3IAAAAIAFgHIAGgEIAIgEIAIgBIAJABQAGACAEAFQAFADADAIQADAGAAALIAAA0g");
	this.shape_212.setTransform(509.9,462);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_213.setTransform(501.9,462.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#373535").s().p("AAVAsIAAgwQAAgIgBgGQgCgGgFgDQgFgDgGgBQgIABgFAFQgGAEgCAHIgBADIAAAEIAAAzIgQAAIAAg+IAAgNIgBgKIAOAAIABAOIABAAQACgEAEgEQAEgEAGgCQAFgCAGAAIAKABQAFACAGAEQAEAEADAHQADAIABALIAAAyg");
	this.shape_214.setTransform(490.2,464);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#373535").s().p("AgVAoQgJgGgGgKQgGgJAAgOQAAgOAGgKQAGgLAKgFQAJgGALABQANgBAKAGQAJAGAFAKQAFAKABANQgBAQgGAJQgHALgKAEQgJAFgKABQgMAAgJgGgAgOgcQgGAGgDAHQgCAHgBAIQABAKADAIQADAHAGAEQAGAFAHgBQAHABAHgFQAFgEAEgIQADgIABgJQgBgHgCgHQgDgIgFgGQgHgEgJAAQgIAAgGAEg");
	this.shape_215.setTransform(480.2,464.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#373535").s().p("AgUAsIAAg6IAAgPIgBgMIAOAAIABARIAAAAQADgKAGgFQAGgEAIAAIADAAIACAAIAAAPIgDgBIgCAAQgJABgFAFQgFAGgCAIIAAAEIAAAEIAAAtg");
	this.shape_216.setTransform(469,464);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#373535").s().p("AgSAnQgJgEgFgLQgFgJAAgNQAAgNAFgLQAEgKAKgGQAJgHALABQALAAAHADQAHAEAEAHQAEAGACAIQACAHgBAFIAAAEIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALQgEACgHABIgSADQgMgBgKgGgAAXgHQAAgGgCgGQgBgGgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_217.setTransform(461.1,464.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#373535").s().p("AAvAsIAAgwQAAgMgEgHQgFgIgKAAQgHAAgEAEQgGAFgCAGIAAAEIgBADIAAA1IgPAAIAAgyQAAgLgEgHQgEgGgKgBQgFABgEACQgDACgDAEQgDADgBAEIgBAEIAAAEIAAAzIgQAAIAAg+IAAgNIgBgKIAPAAIAAANIABAAIAFgIQAFgDAEgCQAGgCAHAAQAJAAAGAEQAFAFADAIIABAAIAEgGIAGgGQAEgDAEgBQAEgBAHAAQAGAAAGADQAHADAEAIQAGAIAAAPIAAAyg");
	this.shape_218.setTransform(449.1,464);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#373535").s().p("AgUAsIAAg6IAAgPIgBgMIAOAAIABARIAAAAQADgKAGgFQAGgEAIAAIADAAIACAAIAAAPIgDgBIgCAAQgJABgFAFQgFAGgCAIIAAAEIAAAEIAAAtg");
	this.shape_219.setTransform(439,464);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgGQAAgQAOgIQANgIAYAAIAAgCQABgDgCgFQgBgFgEgDQgFgDgHgBQgHAAgFACQgGABgFAEIgEgLQAGgDAHgCQAIgCAHAAQANgBAHAGQAIAFACAIQADAIAAAJIAAAfIAAALIACAKIgPAAIgBgLIgBAAQgDAGgHADQgHAFgIAAQgJAAgGgFgAABAAQgIABgFAFQgGAEAAAJQAAAHAEAEQAFAEAGgBQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_220.setTransform(431,464.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#373535").s().p("AAVArIgOgpIgEgNIgDgOIAAAAIgDAOIgFANIgOApIgOAAIgahVIAQAAIALArIAEAOIADAOIAAAAIAEgOIAEgOIAOgrIANAAIANAqIAEAPIAEAOIAAAAIADgOIAEgPIAMgqIAQAAIgcBVg");
	this.shape_221.setTransform(420.4,464.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALABAHADQAHAFAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLAEIgSABQgMAAgKgGgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_222.setTransform(786.6,438.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#373535").s().p("AAvAtIAAgxQAAgMgFgIQgEgGgKgBQgGABgGAEQgEAEgCAGIgBADIgBAFIAAA1IgOAAIAAg0QgBgLgEgGQgFgHgIAAQgGAAgDADQgFACgCADQgDAEgBAEIgBAEIgBAEIAAA0IgPAAIAAg/IAAgNIAAgLIANAAIABAPIAAAAIAGgIQAFgEAEgCQAFgCAIAAQAJgBAGAGQAFAEADAIIABAAIAFgHIAEgEQAEgEAFgBQAEgBAHAAQAGgBAHADQAGAEAEAIQAFAIABAPIAAAzg");
	this.shape_223.setTransform(774.6,438.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#373535").s().p("AgVAoQgKgGgFgJQgGgLABgOQgBgNAGgLQAGgJAKgGQAKgFAKgBQANABAKAFQAJAGAFAKQAFAKAAANQAAAQgGAKQgHAKgKAFQgJAEgKAAQgMAAgJgFgAgOgbQgGAEgDAIQgDAHAAAIQAAAKAEAHQADAIAGAEQAGAEAHABQAHgBAHgEQAFgEAEgIQADgHAAgKQAAgHgCgIQgDgHgGgFQgGgFgJgBQgIABgGAFg");
	this.shape_224.setTransform(762.1,438.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#373535").s().p("AgNAnQgKgFgFgKQgFgKAAgNQAAgMAFgLQAGgLALgFQAKgHANAAQAHABAGABIAJADIgDANIgIgDIgLgCQgKABgGAEQgGAEgEAHQgDAIAAAIQAAAKAEAHQAEAIAGADQAGAEAJABIALgBIAIgEIADAMQgDACgHACIgPABQgMAAgKgGg");
	this.shape_225.setTransform(753.3,438.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALABAHADQAHAFAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLAEIgSABQgMAAgKgGgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_226.setTransform(744.7,438.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#373535").s().p("AgNA9QgIgEgEgIIgBAAIgBAOIgNAAIAAgLIAAgLIAAhpIAQAAIAAA3QAFgIAHgEQAHgEAKAAQAKAAAJAFQAIAGAFAKQAFAJgBANQAAAQgFAKQgGALgJAEQgIAGgKAAQgJAAgHgEgAgOgIQgGAGgDAIIgBADIAAAEIAAAPIAAADIABADQACAIAGAFQAHAFAIAAQAMAAAHgJQAGgJAAgPQAAgJgDgHQgCgGgGgFQgGgEgIAAQgIAAgGAEg");
	this.shape_227.setTransform(735.4,436.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#373535").s().p("AgRAsQgGgCgFgDIAFgMIAJAFQAGACAFAAQAIgBAEgDQAEgEABgGQAAgFgFgEQgDgDgIgDQgLgFgHgFQgFgGAAgIQAAgHAEgGQADgGAHgDQAHgDAIgBQAHABAFABQAGACADACIgDAMIgIgEQgEgCgGAAQgHAAgDAEQgEADAAAFQAAAGAEADQAEADAHADQAMAEAGAFQAGAHAAAJQAAAMgJAHQgIAHgPAAQgHAAgHgBg");
	this.shape_228.setTransform(722.6,438.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABALIgGACIgIABQgGAAgEgCg");
	this.shape_229.setTransform(716,437.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALABAHADQAHAFAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLAEIgSABQgMAAgKgGgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_230.setTransform(708.6,438.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_231.setTransform(702,436.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#373535").s().p("AgoA+IAAhdIAAgPIAAgNIANAAIABAPIABAAQAEgIAJgFQAHgEAKAAQALAAAIAFQAIAGAEAKQAGAKAAANQgBAQgFAJQgGAKgIAFQgJAGgLAAQgIAAgGgEQgIgDgEgHIAAAvgAgOgrQgGAFgDAJIgBADIAAADIAAAPIAAAEIABADQACAHAGAFQAGAFAJAAQAHAAAHgEQAGgEADgIQACgGAAgKQAAgJgCgHQgDgIgGgEQgGgFgIAAQgHAAgHAGg");
	this.shape_232.setTransform(695.1,440.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#373535").s().p("AgVAoQgKgGgFgJQgGgLABgOQgBgNAGgLQAGgJAKgGQAJgFALgBQANABAKAFQAJAGAFAKQAFAKABANQgBAQgGAKQgHAKgKAFQgJAEgKAAQgMAAgJgFgAgOgbQgGAEgDAIQgDAHAAAIQAAAKAEAHQADAIAGAEQAGAEAHABQAHgBAHgEQAGgEADgIQADgHAAgKQAAgHgCgIQgDgHgGgFQgGgFgJgBQgIABgGAFg");
	this.shape_233.setTransform(684.7,438.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#373535").s().p("AgUAtIAAg8IAAgOIgBgNIAOAAIABARIAAAAQADgJAGgEQAGgGAIABIADAAIACAAIAAAPIgDAAIgCAAQgJgBgFAGQgFAFgCAKIAAADIAAAEIAAAug");
	this.shape_234.setTransform(677.5,438.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#373535").s().p("AgWA7QgJgFgEgKQgFgKAAgNQAAgPAFgJQAFgKAJgHQAJgFALAAQAJAAAGAEQAHAEADAFIAAAAIAAg0IAQAAIAABpIAAALIABALIgOAAIgBgPIgBAAQgDAHgIAFQgHAFgKAAQgKAAgJgGgAgMgIQgGAEgDAHQgDAHAAAKQAAAJADAHQADAHAFAFQAGAEAIAAQAHAAAHgFQAGgEADgKIAAgDIAAgEIAAgOIAAgEIAAgDQgCgHgGgGQgGgEgJAAQgIAAgFAEg");
	this.shape_235.setTransform(668.7,436.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALABAHADQAHAFAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLAEIgSABQgMAAgKgGgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_236.setTransform(655.6,438.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgFgEgDQgFgEgHAAQgHAAgFAFQgGAEgCAGIgBADIAAAFIAAA0IgQAAIAAh/IAQAAIAAA2IAAAAIAFgFIAGgGIAIgDIAIgBIAJACQAGABAEAEQAFAFADAHQADAGAAALIAAA0g");
	this.shape_237.setTransform(646.1,436.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#373535").s().p("AgHA9IAAhrIglAAIAAgOIBZAAIAAAOIglAAIAABrg");
	this.shape_238.setTransform(636.8,437.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#373535").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQACADABAEQgBAFgCADQgDADgFAAQgEAAgDgDg");
	this.shape_239.setTransform(623.7,442.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#373535").s().p("AgQAsQgHgCgFgDIAFgMIAJAFQAGACAFAAQAIgBAEgDQAEgEAAgGQAAgFgDgEQgEgDgIgDQgLgFgHgFQgFgGAAgIQAAgHADgGQAEgGAHgDQAHgDAIgBQAHABAFABQAGACADACIgDAMIgIgEQgEgCgGAAQgHAAgDAEQgEADAAAFQAAAGAEADQAEADAHADQAMAEAGAFQAGAHAAAJQAAAMgJAHQgIAHgPAAQgHAAgGgBg");
	this.shape_240.setTransform(618.3,438.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_241.setTransform(612.6,436.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALABAHADQAHAFAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLAEIgSABQgMAAgKgGgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_242.setTransform(606,438.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#373535").s().p("AgHAsIghhXIARAAIARAxIAEALIACAKIAAAAIAEgKIAEgLIARgxIAQAAIgiBXg");
	this.shape_243.setTransform(597.4,438.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALABAHADQAHAFAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLAEIgSABQgMAAgKgGgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_244.setTransform(588.6,438.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_245.setTransform(581.9,436.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#373535").s().p("AgUAtIAAg8IAAgOIgBgNIAOAAIABARIAAAAQADgJAGgEQAGgGAIABIADAAIACAAIAAAPIgDAAIgCAAQgJgBgFAGQgFAFgCAKIAAADIAAAEIAAAug");
	this.shape_246.setTransform(573.5,438.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALABAHADQAHAFAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLAEIgSABQgMAAgKgGgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_247.setTransform(565.6,438.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgFgEgDQgFgEgHAAQgHAAgFAFQgGAEgCAGIgBADIAAAFIAAA0IgQAAIAAh/IAQAAIAAA2IAAAAIAFgFIAGgGIAIgDIAIgBIAJACQAGABAEAEQAFAFADAHQADAGAAALIAAA0g");
	this.shape_248.setTransform(556.1,436.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#373535").s().p("AgTA+QgHgCgGgEIAEgMQAEADAHACQAHACAIAAQAGAAAHgDQAGgDAEgHQAEgHAAgKIAAgKIgBAAQgDAGgIAEQgHAEgIAAQgMAAgIgFQgIgGgFgJQgFgJAAgMQAAgPAGgKQAFgKAKgGQAIgFALAAQAGAAAFACQAGACADAEQAEADACAEIAAAAIABgNIANAAIAAAKIAAAOIAAAxQAAAPgDAKQgDAJgHAGQgGAGgJACQgHACgIAAIgQgBgAgRgpQgHAJAAAPQAAAJAEAHQACAGAGAEQAFAEAIAAQAHAAAHgEQAFgEADgHIABgEIABgEIAAgQIgBgEIAAgDQgDgHgFgFQgGgFgJAAQgKAAgIAJg");
	this.shape_249.setTransform(545.8,440.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_250.setTransform(539,437.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgFgEgDQgFgEgHAAQgHAAgFAFQgGAEgCAGIgBADIAAAFIAAA0IgQAAIAAh/IAQAAIAAA2IAAAAIAFgFIAGgGIAIgDIAIgBIAJACQAGABAEAEQAFAFADAHQADAGAAALIAAA0g");
	this.shape_251.setTransform(531.9,436.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABALIgGACIgIABQgGAAgEgCg");
	this.shape_252.setTransform(520,437.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgBQABgFgCgEQgBgFgEgDQgFgDgHgBQgHAAgFACQgGACgFACIgEgKQAGgEAHgCQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAALIACAKIgPAAIgBgLIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGABQAHAAAGgFQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_253.setTransform(512.6,438.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#373535").s().p("AAWAtIAAgyQgBgHgCgFQgCgGgEgEQgEgEgIAAQgGABgGAEQgGAFgCAHIAAAEIgBADIAAA0IgQAAIAAg/IAAgNIgBgLIAPAAIABAPIAAAAQACgEAEgEQAEgEAFgCQAGgCAHAAIAJABQAFACAFAEQAFAEADAHQADAHAAALIAAA0g");
	this.shape_254.setTransform(499.7,438.7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgCgDgBgEQABgEACgDQACgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_255.setTransform(492.6,437.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgBQABgFgCgEQgBgFgEgDQgFgDgHgBQgHAAgFACQgGACgFACIgEgKQAGgEAHgCQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAALIACAKIgPAAIgBgLIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGABQAHAAAGgFQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_256.setTransform(485.9,438.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#373535").s().p("AgTA+QgHgCgGgEIAEgMQAEADAHACQAGACAJAAQAHAAAGgDQAGgDAEgHQADgHAAgKIAAgKIAAAAQgEAGgGAEQgIAEgIAAQgMAAgIgFQgIgGgFgJQgEgJAAgMQAAgPAFgKQAFgKAJgGQAJgFAKAAQAHAAAGACQAFACAEAEQADADABAEIABAAIABgNIAOAAIgBAKIAAAOIAAAxQAAAPgDAKQgDAJgHAGQgGAGgIACQgJACgHAAIgQgBgAgRgpQgGAJAAAPQAAAJACAHQADAGAGAEQAFAEAIAAQAIAAAFgEQAGgEADgHIABgEIAAgEIAAgQIAAgEIgBgDQgCgHgGgFQgFgFgIAAQgLAAgIAJg");
	this.shape_257.setTransform(476.5,440.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgBQABgFgCgEQgBgFgEgDQgFgDgHgBQgHAAgFACQgGACgFACIgEgKQAGgEAHgCQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAALIACAKIgPAAIgBgLIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGABQAHAAAGgFQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_258.setTransform(467.1,438.8);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALABAHADQAHAFAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHACIgSABQgMAAgKgGgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_259.setTransform(454.7,438.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#373535").s().p("AgiAsIAAgJIAmgzIAGgHIAFgGIAAgBIguAAIAAgNIBCAAIgBAKIgmAyIgFAHIgGAGIAAABIAyAAIAAANg");
	this.shape_260.setTransform(446.5,438.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALABAHADQAHAFAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLAEIgSABQgMAAgKgGgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_261.setTransform(438.2,438.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgLAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALABAHADQAHAFAEAGQAEAHACAGQACAIgBAGIAAADIAAADIg8AAQAAAKAEAHQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLAEIgSABQgMAAgKgGgAAXgIQAAgFgCgFQgBgGgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_262.setTransform(429.2,438.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#373535").s().p("AgUAtIAAg8IAAgOIgBgNIAOAAIABARIAAAAQADgJAGgEQAGgGAIABIADAAIACAAIAAAPIgDAAIgCAAQgJgBgFAGQgFAFgCAKIAAADIAAAEIAAAug");
	this.shape_263.setTransform(422.4,438.7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#373535").s().p("AgPBBIAAhKIgNAAIAAgMIANAAIAAgEQgBgKADgIQADgIAFgFQAFgEAEgCIALgCIAIABIAGACIgCAMIgFgCIgGAAQgGAAgEADQgEAEgBAGQgBAFAAAHIAAAFIAVAAIAAAMIgVAAIAABKg");
	this.shape_264.setTransform(416.8,436.7);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#373535").s().p("AgWA7QgJgFgEgKQgFgKAAgOQAAgOAFgJQAFgLAJgFQAJgGALAAQAJAAAGAEQAHAEADAFIAAAAIAAg0IARAAIAABoIAAANIAAAKIgOAAIgBgPIgBAAQgDAHgIAFQgHAFgKAAQgKAAgJgGgAgMgIQgGAEgDAGQgDAJAAAJQAAAJADAHQADAHAFAFQAGAEAIAAQAHAAAHgFQAGgFADgIIAAgEIAAgDIAAgQIAAgDIAAgEQgCgGgGgFQgGgGgJAAQgIAAgFAFg");
	this.shape_265.setTransform(736.7,411.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#373535").s().p("AAVAsIAAgwQABgIgCgGQgCgFgFgEQgFgEgGABQgIAAgFAEQgGAFgCAHIgBADIAAAEIAAAzIgQAAIAAg+IAAgMIgBgLIAOAAIABAOIABAAQACgFAEgDQAEgEAGgCQAFgDAGAAIAKACQAGABAFAFQAEAEADAHQADAIABALIAAAyg");
	this.shape_266.setTransform(726.9,413.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgGQAAgQAOgIQANgIAYAAIAAgCQABgDgCgFQgBgFgEgDQgFgEgHAAQgHAAgFACQgGACgFACIgEgKQAGgDAHgCQAIgCAHgBQANAAAHAGQAIAFACAIQADAIAAAJIAAAfIAAALIACAKIgPAAIgBgLIgBAAQgDAGgHADQgHAEgIABQgJgBgGgEgAABAAQgIABgFAFQgGAEAAAJQAAAHAEAEQAFAEAGgBQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_267.setTransform(717.3,413.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#373535").s().p("AgRArQgGgBgFgCIAEgNIAJAEQAGACAHAAQAHABAEgEQAFgEAAgFQAAgGgFgDQgDgFgIgDQgMgDgFgGQgGgGAAgIQAAgHAEgGQAEgFAGgEQAGgEAJAAQAHAAAFACQAGABADADIgDALIgHgDQgFgCgGABQgGgBgEAEQgEADAAAFQAAAGAEACQAEAEAIADQALAEAGAGQAGAFgBAKQAAAMgIAHQgJAHgOABQgHgBgHgCg");
	this.shape_268.setTransform(705.8,413.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_269.setTransform(700.1,411.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgMQAAgNAFgLQAEgKAKgGQAJgHALAAQALABAHAEQAHADAEAHQAEAGACAIQACAHgBAGIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALQgEACgHABIgSADQgMgBgKgFgAAXgHQAAgGgCgGQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_270.setTransform(693.5,413.6);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#373535").s().p("AgHArIghhVIARAAIARAvIAEAMIACALIAAAAIAEgLIAEgMIARgvIAQAAIgiBVg");
	this.shape_271.setTransform(684.9,413.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgMQAAgNAFgLQAEgKAKgGQAJgHALAAQALABAHAEQAHADAEAHQAEAGACAIQACAHgBAGIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALQgEACgHABIgSADQgMgBgKgFgAAXgHQAAgGgCgGQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_272.setTransform(676,413.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_273.setTransform(669.4,411.5);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#373535").s().p("AgUAsIAAg6IAAgPIgBgMIAOAAIABARIAAAAQADgKAGgEQAGgFAIgBIADAAIACABIAAAPIgDgBIgCAAQgJABgFAFQgFAGgCAIIAAAEIAAAEIAAAtg");
	this.shape_274.setTransform(661,413.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgMQAAgNAFgLQAEgKAKgGQAJgHALAAQALABAHAEQAHADAEAHQAEAGACAIQACAHgBAGIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALQgEACgHABIgSADQgMgBgKgFgAAXgHQAAgGgCgGQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_275.setTransform(653.1,413.6);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#373535").s().p("AAVArIgOgpIgEgNIgDgOIAAAAIgDAOIgFANIgOApIgOAAIgahVIAQAAIALArIAEAOIADAOIAAAAIAEgOIAEgOIAOgrIANAAIANAqIAEAPIAEAOIAAAAIADgOIAEgPIAMgqIAQAAIgcBVg");
	this.shape_276.setTransform(642.2,413.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#373535").s().p("AgVAoQgKgFgFgLQgGgKABgNQgBgOAGgKQAGgLAKgFQAJgGALAAQANAAAKAGQAJAGAFAKQAFAKABANQgBAQgGAJQgHALgKAFQgJAEgKABQgMAAgJgGgAgOgcQgGAGgDAHQgDAHAAAIQAAAKAEAHQADAIAGAEQAGAFAHgBQAHABAHgFQAGgEADgIQADgIAAgJQAAgHgCgHQgDgIgGgGQgGgEgJAAQgIAAgGAEg");
	this.shape_277.setTransform(630.7,413.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_278.setTransform(623.6,411.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_279.setTransform(614.7,412.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgGQAAgQAOgIQANgIAYAAIAAgCQABgDgCgFQgBgFgEgDQgFgEgHAAQgHAAgFACQgGACgFACIgEgKQAGgDAHgCQAIgCAHgBQANAAAHAGQAIAFACAIQADAIAAAJIAAAfIAAALIACAKIgPAAIgBgLIgBAAQgDAGgHADQgHAEgIABQgJgBgGgEgAABAAQgIABgFAFQgGAEAAAJQAAAHAEAEQAFAEAGgBQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_280.setTransform(607.2,413.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_281.setTransform(596.3,412.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_282.setTransform(591.2,411.5);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgMQAAgNAFgLQAEgKAKgGQAJgHALAAQALABAHAEQAHADAEAHQAEAGACAIQACAHgBAGIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALQgEACgHABIgSADQgMgBgKgFgAAXgHQAAgGgCgGQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_283.setTransform(584.6,413.6);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#373535").s().p("AAvAsIAAgwQAAgNgFgGQgEgIgKABQgGAAgFADQgGAFgBAGIgBAEIgBADIAAA1IgOAAIAAgyQgBgLgEgHQgEgGgJAAQgFgBgEADQgEACgDAEQgDADgBAEIgBAEIAAAEIAAAzIgQAAIAAg+IAAgMIAAgLIANAAIABANIAAAAIAGgIQAEgDAFgCQAFgDAIAAQAJABAGAFQAFAEADAIIABAAIAFgGIAEgGQAEgDAFgBQAEgCAHAAQAGABAHADQAGADAEAIQAFAIABAPIAAAyg");
	this.shape_284.setTransform(572.6,413.5);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#373535").s().p("AgVAoQgKgFgFgLQgGgKAAgNQAAgOAGgKQAGgLAKgFQAJgGALAAQANAAAKAGQAJAGAFAKQAFAKABANQgBAQgGAJQgHALgKAFQgJAEgKABQgMAAgJgGgAgOgcQgGAGgDAHQgCAHgBAIQAAAKAEAHQADAIAGAEQAGAFAHgBQAHABAHgFQAFgEAEgIQADgIAAgJQAAgHgCgHQgDgIgFgGQgHgEgJAAQgIAAgGAEg");
	this.shape_285.setTransform(556.4,413.6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_286.setTransform(548.5,412.4);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#373535").s().p("AAVAsIAAgwQAAgIgCgGQgCgFgEgEQgEgEgIABQgGAAgGAEQgGAFgCAHIAAADIgBAEIAAAzIgQAAIAAg+IAAgMIAAgLIANAAIABAOIABAAQACgFAEgDQAEgEAFgCQAGgDAHAAIAKACQAFABAFAFQAEAEADAHQADAIAAALIAAAyg");
	this.shape_287.setTransform(536.8,413.5);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQACgDAEAAQAEAAADADQACADABAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_288.setTransform(529.7,411.8);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#373535").s().p("AgTA+QgHgCgGgEIAEgMQAEADAHACQAHACAIAAQAGAAAHgDQAGgDAEgHQAEgHAAgKIAAgKIgBAAQgDAGgIAEQgHAEgIAAQgLAAgJgFQgIgGgFgJQgFgJAAgMQAAgPAGgKQAFgKAKgGQAIgFALAAQAGAAAFACQAGACADAEQAEADACAEIAAAAIABgNIANAAIAAAKIAAAOIAAAxQAAAPgDAKQgDAJgHAGQgGAGgJACQgHACgIAAIgQgBgAgRgpQgHAJAAAPQAAAJAEAHQACAGAGAEQAFAEAIAAQAHAAAHgEQAGgEACgHIABgEIABgEIAAgQIgBgEIAAgDQgDgHgFgFQgGgFgJAAQgKAAgIAJg");
	this.shape_289.setTransform(522.4,415.3);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgMQAAgNAFgLQAEgKAKgGQAJgHALAAQALABAHAEQAHADAEAHQAEAGACAIQACAHgBAGIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALQgEACgHABIgSADQgMgBgKgFgAAXgHQAAgGgCgGQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_290.setTransform(513.2,413.6);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#373535").s().p("AgOA9QgGgEgFgJIgBAAIgBAPIgOAAIABgKIAAgNIAAhoIAQAAIAAA3QAEgHAIgFQAHgEAKAAQAKAAAJAGQAIAFAFAKQAFAJgBAOQAAAPgFALQgGAKgJAEQgIAGgLAAQgIAAgIgEgAgOgHQgHAFgDAIIAAADIAAADIAAAQIAAADIAAADQADAIAGAFQAGAGAJAAQAMgBAHgJQAGgJABgPQAAgJgEgHQgCgGgGgFQgGgFgIAAQgHAAgHAGg");
	this.shape_291.setTransform(503.9,411.6);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#373535").s().p("AgQArQgHgBgFgCIAFgNIAJAEQAFACAGAAQAIABAEgEQAEgEAAgFQAAgGgDgDQgEgFgIgDQgLgDgHgGQgFgGAAgIQAAgHADgGQAEgFAHgEQAGgEAJAAQAHAAAFACQAGABADADIgEALIgHgDQgEgCgGABQgGgBgEAEQgEADAAAFQAAAGAEACQAFAEAGADQAMAEAGAGQAFAFABAKQAAAMgJAHQgIAHgPABQgHgBgGgCg");
	this.shape_292.setTransform(491.1,413.6);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_293.setTransform(485.4,411.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgGQAAgQAOgIQANgIAYAAIAAgCQABgDgCgFQgBgFgEgDQgFgEgHAAQgHAAgFACQgGACgFACIgEgKQAGgDAHgCQAIgCAHgBQANAAAHAGQAIAFACAIQADAIAAAJIAAAfIAAALIACAKIgPAAIgBgLIgBAAQgDAGgHADQgHAEgIABQgJgBgGgEgAABAAQgIABgFAFQgGAEAAAJQAAAHAEAEQAFAEAGgBQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_294.setTransform(478.7,413.6);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAEQACAFAHAAIAFAAIAEgBIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_295.setTransform(471.5,412.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#373535").s().p("AgRArQgGgBgFgCIAEgNIAJAEQAGACAHAAQAHABAEgEQAFgEAAgFQAAgGgFgDQgDgFgIgDQgMgDgFgGQgGgGAAgIQAAgHAEgGQAEgFAGgEQAGgEAJAAQAHAAAFACQAGABADADIgDALIgHgDQgFgCgGABQgGgBgEAEQgEADAAAFQAAAGAEACQAEAEAIADQALAEAGAGQAGAFgBAKQABAMgJAHQgJAHgOABQgHgBgHgCg");
	this.shape_296.setTransform(465,413.6);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#373535").s().p("AgjAyIAGgDIAIgFIAHgHQADgEADgHIABgCIABgBIgBgCIAAgCIghhPIARAAIATAzIADAJIACAHIABAAIACgHIADgKIARgyIARAAIgXA+IgLAYIgJARQgEAIgGAEQgFAFgGACIgIAEg");
	this.shape_297.setTransform(457.3,415.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#373535").s().p("AgUAsIAAg6IAAgPIgBgMIAOAAIABARIAAAAQADgKAGgEQAGgFAIgBIADAAIACABIAAAPIgDgBIgCAAQgJABgFAFQgFAGgCAIIAAAEIAAAEIAAAtg");
	this.shape_298.setTransform(450.1,413.5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#373535").s().p("AgNAoQgKgGgFgKQgFgKAAgNQAAgNAFgKQAGgKALgHQAKgFANgBQAHAAAGACIAJADIgDAMIgIgDIgLgBQgKAAgGAEQgGAFgEAIQgDAHAAAIQAAALAEAGQAEAIAGAEQAGADAJAAIALgBIAIgCIADALQgDACgHABIgPADQgMgBgKgFg");
	this.shape_299.setTransform(442.8,413.6);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgMQAAgNAFgLQAEgKAKgGQAJgHALAAQALABAHAEQAHADAEAHQAEAGACAIQACAHgBAGIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgCIACALQgEACgHABIgSADQgMgBgKgFgAAXgHQAAgGgCgGQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDAMIAtAAIAAAAg");
	this.shape_300.setTransform(430.4,413.6);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#373535").s().p("AgNAoQgKgGgFgKQgFgKAAgNQAAgNAFgKQAGgKALgHQAKgFANgBQAHAAAGACIAJADIgDAMIgIgDIgLgBQgKAAgGAEQgGAFgEAIQgDAHAAAIQAAALAEAGQAEAIAGAEQAGADAJAAIALgBIAIgCIADALQgDACgHABIgPADQgMgBgKgFg");
	this.shape_301.setTransform(422,413.6);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgCgDgBgEQABgEACgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgCADgFAAQgEAAgCgDg");
	this.shape_302.setTransform(415.8,411.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgLAAgNQAAgMAFgLQAEgKAKgGQAJgGALAAQALAAAHADQAHAFAEAGQAEAGACAHQACAIgBAFIAAAEIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgDIACAMQgEACgHACIgSACQgMgBgKgGgAAXgIQAAgEgCgGQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_303.setTransform(750.9,388.3);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgFgEgDQgFgEgHAAQgHABgFAEQgGAFgCAFIgBAEIAAADIAAA1IgQAAIAAh/IAQAAIAAA2IAAAAIAFgGIAGgEIAIgEIAIgBIAJACQAGABAEAEQAFAFADAHQADAGAAALIAAA0g");
	this.shape_304.setTransform(741.4,386.3);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#373535").s().p("AgHA9IAAhrIglAAIAAgOIBZAAIAAAOIglAAIAABrg");
	this.shape_305.setTransform(732,386.6);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#373535").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQACADABAEQgBAFgCADQgDADgFAAQgEAAgDgDg");
	this.shape_306.setTransform(722.8,391.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#373535").s().p("AgWA8QgJgGgEgKQgFgKAAgNQAAgPAFgJQAGgKAIgHQAJgFALAAQAJAAAGAEQAHAEADAFIAAAAIAAg0IAQAAIAABpIAAALIABALIgOAAIgBgPIgBAAQgDAIgIAEQgHAFgKAAQgLAAgIgFgAgMgIQgGAEgDAHQgDAHAAAKQAAAJADAHQADAHAFAFQAGAEAIAAQAHAAAHgFQAGgEADgKIAAgDIAAgEIAAgOIAAgEIAAgDQgCgHgGgGQgGgEgJAAQgHgBgGAFg");
	this.shape_307.setTransform(715.6,386.4);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#373535").s().p("AAVAtIAAgyQAAgGgBgGQgCgHgFgDQgFgEgGAAQgIABgFAFQgGAEgCAHIgBAEIAAADIAAA0IgQAAIAAg/IAAgNIAAgLIANAAIABAPIABAAQACgEAEgEQAEgEAFgCQAGgDAGABIALABQAEACAGAEQAEAEADAHQADAHABALIAAA0g");
	this.shape_308.setTransform(705.8,388.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#373535").s().p("AgUAqQgHgEgEgIQgFgJAAgOIAAgzIAQAAIAAAvQgBANAFAIQAEAHAMABQADgBAFgCQAEgCADgDQADgEABgDIABgEIAAgEIAAg1IAQAAIAAA/IAAANIABALIgNAAIgBgPIgBAAQgCAEgEADQgEAEgFADQgGACgHABQgHgBgHgCg");
	this.shape_309.setTransform(695.9,388.4);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#373535").s().p("AgVAoQgKgGgFgJQgGgLAAgNQAAgOAGgLQAGgKAKgFQAKgFAKAAQANAAAKAFQAJAGAFAKQAFAKABANQgBAQgGAKQgHAKgKAEQgJAGgKAAQgMgBgJgFgAgOgbQgGAEgDAIQgCAHgBAIQABAKADAIQADAHAGAEQAGAFAHAAQAHAAAHgFQAFgEAEgIQADgHAAgKQAAgHgCgIQgDgHgFgFQgHgGgJAAQgIAAgGAGg");
	this.shape_310.setTransform(686,388.3);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#373535").s().p("AgUAtIAAg8IAAgOIgBgNIAOAAIABARIAAAAQADgJAGgFQAGgEAIAAIADAAIACAAIAAAPIgDAAIgCAAQgJgBgFAGQgFAFgCAKIAAADIAAAEIAAAug");
	this.shape_311.setTransform(678.7,388.2);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#373535").s().p("AgTA+QgIgCgFgEIAEgMQAEADAHACQAGACAJAAQAGAAAHgDQAGgDAEgHQADgHABgKIAAgKIgBAAQgEAGgGAEQgIAEgIAAQgLAAgJgFQgIgGgFgJQgFgJABgMQgBgPAGgKQAFgKAKgGQAIgFALAAQAGAAAFACQAGACADAEQAEADACAEIAAAAIABgNIAOAAIgBAKIAAAOIAAAxQAAAPgDAKQgDAJgHAGQgGAGgJACQgHACgIAAIgQgBgAgRgpQgGAJgBAPQAAAJAEAHQACAGAGAEQAGAEAHAAQAHAAAHgEQAFgEADgHIABgEIABgEIAAgQIgBgEIAAgDQgDgHgFgFQgGgFgJAAQgKAAgIAJg");
	this.shape_312.setTransform(670.1,390.1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgLAAgNQAAgMAFgLQAEgKAKgGQAJgGALAAQALAAAHADQAHAFAEAGQAEAGACAHQACAIgBAFIAAAEIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgDIACAMQgEACgHACIgSACQgMgBgKgGgAAXgIQAAgEgCgGQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_313.setTransform(657.1,388.3);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgFgEgDQgFgEgHAAQgHABgFAEQgGAFgCAFIgBAEIAAADIAAA1IgQAAIAAh/IAQAAIAAA2IAAAAIAFgGIAGgEIAIgEIAIgBIAJACQAGABAEAEQAFAFADAHQADAGAAALIAAA0g");
	this.shape_314.setTransform(647.6,386.3);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFAAIAEgBIABALIgGACIgIABQgGAAgEgCg");
	this.shape_315.setTransform(639.5,387.2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgLAAgNQAAgMAFgLQAEgKAKgGQAJgGALAAQALAAAHADQAHAFAEAGQAEAGACAHQACAIgBAFIAAAEIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgDIACAMIgLAEIgSACQgMgBgKgGgAAXgIQAAgEgCgGQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_316.setTransform(628.3,388.3);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#373535").s().p("AgHAsIghhXIARAAIARAxIAEALIACAKIAAAAIAEgKIAEgLIARgxIAQAAIgiBXg");
	this.shape_317.setTransform(619.7,388.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#373535").s().p("AgVAoQgKgGgFgJQgGgLABgNQgBgOAGgLQAGgKAJgFQALgFAKAAQANAAAKAFQAJAGAFAKQAFAKAAANQAAAQgGAKQgHAKgJAEQgKAGgKAAQgMgBgJgFgAgOgbQgGAEgDAIQgDAHAAAIQAAAKAEAIQADAHAGAEQAGAFAHAAQAHAAAHgFQAFgEAEgIQADgHAAgKQAAgHgDgIQgCgHgGgFQgFgGgKAAQgIAAgGAGg");
	this.shape_318.setTransform(610.6,388.3);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#373535").s().p("AgOA9QgHgEgFgIIAAAAIgBAOIgOAAIABgLIAAgLIAAhpIAQAAIAAA3QAFgIAHgDQAIgFAJAAQALAAAIAFQAIAGAFAKQAFAJAAANQgBAQgGAKQgFALgJAFQgJAFgKAAQgIAAgIgEgAgOgIQgGAGgEAIIAAADIAAAEIAAAPIAAADIAAADQADAIAGAFQAGAFAJAAQAMAAAGgJQAIgJAAgPQAAgJgDgHQgDgGgGgFQgGgFgIABQgIAAgGAEg");
	this.shape_319.setTransform(600.8,386.4);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgCQABgEgCgEQgBgFgEgDQgFgDgHgBQgHAAgFACQgGACgFADIgEgLQAGgEAHgCQAIgBAHAAQANAAAHAFQAIAFACAIQADAIAAAJIAAAfIAAAMIACAKIgPAAIgBgLIgBAAQgDAFgHAEQgHADgIABQgJgBgGgDgAABAAQgIACgFAEQgGAEAAAIQAAAIAEAEQAFAEAGAAQAHAAAGgFQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_320.setTransform(590.8,388.3);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgDgBgGIgBgOIAAguIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFAAIAEgBIABALIgGACIgIABQgGAAgEgCg");
	this.shape_321.setTransform(579.9,387.2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgLAAgNQAAgMAFgLQAEgKAKgGQAJgGALAAQALAAAHADQAHAFAEAGQAEAGACAHQACAIgBAFIAAAEIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgDIACAMQgEACgHACIgSACQgMgBgKgGgAAXgIQAAgEgCgGQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_322.setTransform(572.5,388.3);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#373535").s().p("AgSAnQgJgFgFgJQgFgLAAgNQAAgMAFgLQAEgKAKgGQAJgGALAAQALAAAHADQAHAFAEAGQAEAGACAHQACAIgBAFIAAAEIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgCIAKgDIACAMQgEACgHACIgSACQgMgBgKgGgAAXgIQAAgEgCgGQgBgHgFgEQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_323.setTransform(563.5,388.3);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#373535").s().p("AgPBBIAAhKIgMAAIAAgMIAMAAIAAgEQAAgKACgIQACgIAGgFQAEgEAFgCQAGgCAFAAIAIABIAFACIgBAMIgFgCIgFAAQgIAAgDADQgEAEgBAGQgBAFAAAHIAAAFIAUAAIAAAMIgUAAIAABKg");
	this.shape_324.setTransform(557.1,386.2);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#373535").s().p("AgUA1QgJgGgFgOQgEgNgBgUQAAgSAGgOQAFgNAJgIQAJgGALAAQATAAAKAPQAKAPAAAcQAAAdgLAQQgKAQgTABQgMAAgIgIgAgQgjQgHANAAAWQAAAYAHAMQAGAMAKAAQAIAAAFgGQAGgFACgMQADgLAAgOQAAgOgDgLQgCgKgFgGQgGgGgIAAQgKAAgGAMg");
	this.shape_325.setTransform(545.5,386.8);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#373535").s().p("AgUA1QgJgGgFgOQgEgNgBgUQAAgSAGgOQAFgNAJgIQAJgGALAAQATAAAKAPQAKAPAAAcQAAAdgLAQQgKAQgTABQgMAAgIgIgAgQgjQgHANAAAWQAAAYAHAMQAGAMAKAAQAIAAAFgGQAGgFACgMQADgLAAgOQAAgOgDgLQgCgKgFgGQgGgGgIAAQgKAAgGAMg");
	this.shape_326.setTransform(536.3,386.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#373535").s().p("AgUA1QgJgGgFgOQgEgNgBgUQAAgSAGgOQAFgNAJgIQAJgGALAAQATAAAKAPQAKAPAAAcQAAAdgLAQQgKAQgTABQgMAAgIgIgAgQgjQgHANAAAWQAAAYAHAMQAGAMAKAAQAIAAAFgGQAGgFACgMQADgLAAgOQAAgOgDgLQgCgKgFgGQgGgGgIAAQgKAAgGAMg");
	this.shape_327.setTransform(527,386.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#373535").s().p("AgJAKIAEgPIACgPIARgCIgFARIgGAPIgFALIgLABIAEgMg");
	this.shape_328.setTransform(520.4,392.6);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#373535").s().p("AgUA1QgJgGgFgOQgEgNgBgUQAAgSAGgOQAFgNAJgIQAJgGALAAQATAAAKAPQAKAPAAAcQAAAdgLAQQgKAQgTABQgMAAgIgIgAgQgjQgHANAAAWQAAAYAHAMQAGAMAKAAQAIAAAFgGQAGgFACgMQADgLAAgOQAAgOgDgLQgCgKgFgGQgGgGgIAAQgKAAgGAMg");
	this.shape_329.setTransform(514,386.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#373535").s().p("AgdA7IAxhnIAAgBIg4AAIAAgMIBJAAIAAAKIgyBqg");
	this.shape_330.setTransform(504.9,386.8);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#373535").s().p("AgWA8QgJgGgEgKQgFgKAAgNQAAgPAFgJQAFgKAKgHQAIgFALAAQAJAAAHAEQAGAEADAFIABAAIAAg0IAQAAIAABpIAAALIAAALIgOAAIgBgPIAAAAQgEAIgHAEQgIAFgKAAQgKAAgJgFgAgMgIQgGAEgDAHQgDAHAAAKQAAAJADAHQACAHAHAFQAFAEAHAAQAJAAAGgFQAHgEACgKIABgDIAAgEIAAgOIAAgEIgBgDQgCgHgGgGQgGgEgJAAQgHgBgGAFg");
	this.shape_331.setTransform(491,386.4);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#373535").s().p("AAWAtIAAgyQgBgGgCgGQgCgHgEgDQgEgEgIAAQgGABgGAFQgGAEgCAHIAAAEIgBADIAAA0IgQAAIAAg/IAAgNIgBgLIAPAAIABAPIAAAAQACgEAEgEQAEgEAFgCQAGgDAHABIAKABQAEACAFAEQAFAEADAHQADAHAAALIAAA0g");
	this.shape_332.setTransform(481.2,388.2);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgHQAAgQAOgGQANgJAYAAIAAgCQABgEgCgEQgBgFgEgDQgFgDgHgBQgHAAgFACQgGACgFADIgEgLQAGgEAHgCQAIgBAHAAQANAAAHAFQAIAFACAIQADAIAAAJIAAAfIAAAMIACAKIgPAAIgBgLIgBAAQgDAFgHAEQgHADgIABQgJgBgGgDgAABAAQgIACgFAEQgGAEAAAIQAAAIAEAEQAFAEAGAAQAHAAAGgFQAFgEACgGIABgCIAAgDIAAgOIgRAAg");
	this.shape_333.setTransform(471.6,388.3);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#373535").s().p("AgUA1QgJgGgFgOQgEgNgBgUQAAgSAGgOQAFgNAJgIQAJgGALAAQATAAAKAPQAKAPAAAcQAAAdgLAQQgKAQgTABQgMAAgIgIgAgQgjQgHANAAAWQAAAYAHAMQAGAMAKAAQAIAAAFgGQAGgFACgMQADgLAAgOQAAgOgDgLQgCgKgFgGQgGgGgIAAQgKAAgGAMg");
	this.shape_334.setTransform(459.1,386.8);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#373535").s().p("AgUA1QgJgGgFgOQgEgNgBgUQAAgSAGgOQAFgNAJgIQAJgGALAAQATAAAKAPQAKAPAAAcQAAAdgLAQQgKAQgTABQgMAAgIgIgAgQgjQgHANAAAWQAAAYAHAMQAGAMAKAAQAIAAAFgGQAGgFACgMQADgLAAgOQAAgOgDgLQgCgKgFgGQgGgGgIAAQgKAAgGAMg");
	this.shape_335.setTransform(449.8,386.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#373535").s().p("AgUA1QgJgGgFgOQgEgNgBgUQAAgSAGgOQAFgNAJgIQAJgGALAAQATAAAKAPQAKAPAAAcQAAAdgLAQQgKAQgTABQgMAAgIgIgAgQgjQgHANAAAWQAAAYAHAMQAGAMAKAAQAIAAAFgGQAGgFACgMQADgLAAgOQAAgOgDgLQgCgKgFgGQgGgGgIAAQgKAAgGAMg");
	this.shape_336.setTransform(440.6,386.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#373535").s().p("AgJAKIAEgPIACgPIARgCIgFARIgGAPIgFALIgLABIAEgMg");
	this.shape_337.setTransform(433.9,392.6);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#373535").s().p("AgXA5QgIgCgEgDIAEgMIAKAEQAHACAIABQAGgBAHgDQAGgDAEgFQADgGAAgHQAAgMgIgHQgIgHgQABIgJAAIgHAAIAHg3IA3AAIAAANIgrAAIgFAeIAEAAIAGgBIAMACQAGABAGADQAHAFAFAGQAEAIAAALQAAALgFAJQgGAJgKAFQgJAFgMABQgKgBgHgCg");
	this.shape_338.setTransform(427.3,386.9);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#373535").s().p("AgXA6QgIgDgFgDIAFgLIALAEQAGADAJAAQAJAAAFgEQAGgEADgFQADgFgBgFQAAgIgEgFQgFgGgGgCQgGgDgIAAIgJAAIAAgKIAJAAQAGAAAFgCQAGgCAEgFQAEgEAAgHQAAgFgCgEQgCgEgEgCQgFgCgGgBQgHABgHACIgKAFIgEgLQAFgEAIgCQAIgDAKAAQAKAAAIADQAHAEADAHQAEAGAAAIQAAAIgFAIQgGAHgLAEIAAABQAIABAGADQAFAEAEAGQADAGAAAIQAAAKgEAIQgFAHgJAFQgKAGgNAAQgKgBgIgCg");
	this.shape_339.setTransform(418.1,386.8);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#373535").s().p("AAVAsIAAgwQAAgHgCgHQgCgFgEgEQgFgEgHABQgHAAgFAEQgGAFgCAHIAAADIgBAEIAAAzIgQAAIAAg+IAAgMIAAgLIANAAIABAOIABAAQACgFAEgDQAEgEAFgCQAGgDAHAAIAKACQAEABAGAFQAEAEADAHQADAHAAALIAAAzg");
	this.shape_340.setTransform(739.7,363);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgJAAgNQAAgNAFgKQAEgLAKgGQAJgHALAAQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgDIACALQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_341.setTransform(730.2,363.1);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgJAAgNQAAgNAFgKQAEgLAKgGQAJgHALAAQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgDIACALQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_342.setTransform(721.2,363.1);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#373535").s().p("AAVArIgOgpIgEgNIgDgPIAAAAIgDAPIgFANIgOApIgOAAIgahVIAQAAIALAqIAEAPIADAOIAAAAIAEgOIAEgOIAOgrIANAAIANAqIAEAPIAEAOIAAAAIADgOIAEgPIAMgqIAQAAIgcBVg");
	this.shape_343.setTransform(710.3,363.1);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_344.setTransform(700.4,361.9);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgJAAgNQAAgNAFgKQAEgLAKgGQAJgHALAAQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgDIACALQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_345.setTransform(693,363.1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#373535").s().p("AgNA9QgHgEgGgJIAAAAIgBAPIgNAAIAAgKIAAgNIAAhoIAQAAIAAA3QAFgHAHgFQAHgEAKAAQALAAAIAFQAIAGAFAKQAEAJABAOQAAAPgHALQgFAJgJAFQgJAGgKAAQgIAAgHgEgAgOgHQgHAFgDAIIAAADIAAADIAAAQIAAADIAAADQADAIAGAFQAGAGAJAAQAMgBAGgJQAIgJgBgPQAAgJgCgHQgDgGgGgFQgGgEgIgBQgIAAgGAGg");
	this.shape_346.setTransform(683.7,361.1);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#373535").s().p("AgRArQgGgBgEgCIADgNIAJAFQAHABAGAAQAHAAAEgDQAFgEgBgFQAAgGgEgDQgDgFgIgCQgMgEgFgGQgGgGAAgIQAAgHADgGQAFgGAGgDQAHgEAIAAQAHAAAGACQAFABAEADIgFALIgGgDQgFgBgGAAQgHgBgDAEQgEADAAAFQAAAGAEADQAEADAIADQALAEAGAGQAFAFAAAKQAAAMgIAHQgJAHgOAAQgHAAgHgCg");
	this.shape_347.setTransform(670.9,363.1);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_348.setTransform(665.2,361);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgGQAAgRAOgHQANgIAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFADIgEgKQAGgEAHgBQAIgDAHAAQANAAAHAGQAIAFACAIQADAIAAAJIAAAgIAAAKIACAKIgPAAIgBgLIgBAAQgDAGgHADQgHAEgIAAQgJAAgGgEgAABAAQgIABgFAFQgGAFAAAHQAAAJAEADQAFADAGAAQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_349.setTransform(658.5,363.1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_350.setTransform(651.4,361.9);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#373535").s().p("AgQArQgHgBgFgCIAFgNIAJAFQAGABAFAAQAIAAAEgDQAEgEABgFQgBgGgDgDQgEgFgIgCQgLgEgHgGQgFgGAAgIQAAgHADgGQAEgGAHgDQAHgEAIAAQAHAAAFACQAGABADADIgDALIgIgDQgEgBgGAAQgHgBgDAEQgEADAAAFQAAAGAEADQAFADAGADQAMAEAGAGQAGAFAAAKQAAAMgJAHQgIAHgPAAQgHAAgGgCg");
	this.shape_351.setTransform(644.9,363.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#373535").s().p("AgjAyIAHgDIAHgFIAGgHQAEgEADgHIABgCIAAgBIAAgCIgBgDIgghOIARAAIATAzIAEAJIABAHIAAAAIADgHIADgKIARgyIARAAIgXA9IgLAZIgIARQgGAIgEAEQgHAFgFACIgIAEg");
	this.shape_352.setTransform(637.2,365.1);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#373535").s().p("AgUAsIAAg6IAAgPIgBgMIAOAAIABAQIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJAAgFAFQgFAGgCAIIAAAEIAAAEIAAAtg");
	this.shape_353.setTransform(630,363);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#373535").s().p("AgNAoQgKgGgFgKQgFgKAAgNQAAgNAFgKQAGgKALgGQAKgGANgBQAHAAAGACIAJADIgDAMIgIgCIgLgCQgKAAgGAEQgGAFgEAIQgDAHAAAIQAAALAEAGQAEAIAGAEQAGADAJAAIALAAIAIgDIADALQgDACgHABIgPACQgMAAgKgFg");
	this.shape_354.setTransform(622.6,363.1);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgJAAgNQAAgNAFgKQAEgLAKgGQAJgHALAAQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgDIACALQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_355.setTransform(610.2,363.1);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#373535").s().p("AgNAoQgKgGgFgKQgFgKAAgNQAAgNAFgKQAGgKALgGQAKgGANgBQAHAAAGACIAJADIgDAMIgIgCIgLgCQgKAAgGAEQgGAFgEAIQgDAHAAAIQAAALAEAGQAEAIAGAEQAGADAJAAIALAAIAIgDIADALQgDACgHABIgPACQgMAAgKgFg");
	this.shape_356.setTransform(601.9,363.1);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQADgDADAAQAFAAACADQACADABAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_357.setTransform(595.7,361.3);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#373535").s().p("AgWA7QgIgFgFgKQgFgKAAgOQAAgOAFgJQAGgKAIgHQAJgFALAAQAJAAAGAEQAHAEADAFIABAAIAAg0IAPAAIAABoIAAANIABAKIgOAAIgBgPIAAAAQgEAIgIAEQgHAFgKAAQgLAAgIgGgAgMgIQgGAEgDAHQgDAIAAAJQAAAJADAHQADAHAFAFQAGAEAIAAQAIAAAGgFQAGgEADgKIABgDIAAgDIAAgQIAAgDIgBgEQgCgGgGgFQgGgGgJAAQgIABgFAEg");
	this.shape_358.setTransform(584.4,361.1);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#373535").s().p("AAVAsIAAgwQAAgHgCgHQgCgFgEgEQgEgEgIABQgGAAgGAEQgGAFgCAHIAAADIgBAEIAAAzIgQAAIAAg+IAAgMIAAgLIANAAIABAOIABAAQACgFAEgDQAEgEAFgCQAGgDAHAAIAKACQAFABAFAFQAEAEADAHQADAHAAALIAAAzg");
	this.shape_359.setTransform(574.6,363);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgGQAAgRAOgHQANgIAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFADIgEgKQAGgEAHgBQAIgDAHAAQANAAAHAGQAIAFACAIQADAIAAAJIAAAgIAAAKIACAKIgPAAIgBgLIgBAAQgDAGgHADQgHAEgIAAQgJAAgGgEgAABAAQgIABgFAFQgGAFAAAHQAAAJAEADQAFADAGAAQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_360.setTransform(565,363.1);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#373535").s().p("AgUAsIAAg6IAAgPIgBgMIAOAAIABAQIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJAAgFAFQgFAGgCAIIAAAEIAAAEIAAAtg");
	this.shape_361.setTransform(554.6,363);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgDgDAAgEQAAgEADgDQACgDAEAAQAEAAADADQACADABAEQAAAEgDADQgCADgFAAQgEAAgCgDg");
	this.shape_362.setTransform(549.1,361.3);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgGQAAgRAOgHQANgIAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFADIgEgKQAGgEAHgBQAIgDAHAAQANAAAHAGQAIAFACAIQADAIAAAJIAAAgIAAAKIACAKIgPAAIgBgLIgBAAQgDAGgHADQgHAEgIAAQgJAAgGgEgAABAAQgIABgFAFQgGAFAAAHQAAAJAEADQAFADAGAAQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_363.setTransform(542.4,363.1);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgJAAgNQAAgNAFgKQAEgLAKgGQAJgHALAAQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgDIACALQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_364.setTransform(530,363.1);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#373535").s().p("AgHArIghhVIARAAIARAwIAEALIACAKIAAAAIAEgKIAEgLIARgwIAQAAIgiBVg");
	this.shape_365.setTransform(521.4,363.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#373535").s().p("AgVAoQgKgFgFgLQgGgKAAgOQAAgNAGgKQAGgKAKgGQAKgGAKAAQANAAAKAGQAJAGAFAKQAFAKABANQgBAPgGAKQgHALgKAFQgJAEgKAAQgMABgJgGgAgOgcQgGAGgDAHQgCAIgBAHQABAKADAHQADAIAGAEQAGAEAHAAQAHAAAHgEQAFgEAEgIQADgIAAgJQAAgHgCgHQgDgIgFgGQgHgEgJAAQgIAAgGAEg");
	this.shape_366.setTransform(512.3,363.1);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#373535").s().p("AAvAsIAAgwQAAgNgEgGQgFgIgKABQgGAAgFADQgGAFgBAGIgBAEIgBADIAAA1IgPAAIAAgzQAAgKgEgHQgEgGgKAAQgEgBgEADQgEACgDAEQgDADgBAEIgBAEIAAAEIAAAzIgQAAIAAg+IAAgMIAAgLIANAAIABANIABAAIAFgIQAEgDAFgCQAGgDAHAAQAJAAAGAGQAFAEADAIIABAAIAFgGIAEgFQAFgDAEgCQAFgCAGAAQAGAAAHAEQAGADAEAIQAGAIAAAPIAAAyg");
	this.shape_367.setTransform(499.8,363);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#373535").s().p("AgRArQgGgBgFgCIAFgNIAJAFQAFABAHAAQAHAAAEgDQAEgEABgFQAAgGgFgDQgDgFgIgCQgLgEgGgGQgGgGAAgIQAAgHAEgGQAEgGAGgDQAGgEAJAAQAHAAAFACQAGABADADIgDALIgHgDQgFgBgGAAQgGgBgEAEQgEADAAAFQAAAGAEADQAEADAIADQALAEAGAGQAGAFgBAKQABAMgJAHQgJAHgOAAQgHAAgHgCg");
	this.shape_368.setTransform(484.9,363.1);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#373535").s().p("AABA3QgDgCgDgDQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_369.setTransform(478.3,361.9);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#373535").s().p("AgPBBIAAhKIgNAAIAAgMIANAAIAAgEQgBgKADgIQADgIAFgFQAFgEAEgCIALgCIAIABIAGACIgCAMIgFgCIgGAAQgGAAgEADQgEAEgBAGQgBAFAAAHIAAAFIAVAAIAAAMIgVAAIAABKg");
	this.shape_370.setTransform(473.1,360.9);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#373535").s().p("AgWApQgGgDgDgGQgDgFAAgGQAAgRAOgHQANgIAYAAIAAgBQABgEgCgFQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFADIgEgKQAGgEAHgBQAIgDAHAAQANAAAHAGQAIAFACAIQADAIAAAJIAAAgIAAAKIACAKIgPAAIgBgLIgBAAQgDAGgHADQgHAEgIAAQgJAAgGgEgAABAAQgIABgFAFQgGAFAAAHQAAAJAEADQAFADAGAAQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_371.setTransform(465.4,363.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#373535").s().p("AgUAsIAAg6IAAgPIgBgMIAOAAIABAQIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJAAgFAFQgFAGgCAIIAAAEIAAAEIAAAtg");
	this.shape_372.setTransform(458.9,363);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#373535").s().p("AgWA7QgJgFgEgKQgFgKAAgOQAAgOAFgJQAGgKAIgHQAJgFALAAQAJAAAGAEQAHAEADAFIAAAAIAAg0IAQAAIAABoIAAANIABAKIgOAAIgBgPIgBAAQgDAIgIAEQgHAFgKAAQgLAAgIgGgAgMgIQgGAEgDAHQgDAIAAAJQAAAJADAHQADAHAFAFQAGAEAIAAQAHAAAHgFQAGgEADgKIAAgDIAAgDIAAgQIAAgDIAAgEQgCgGgGgFQgGgGgJAAQgHABgGAEg");
	this.shape_373.setTransform(450.1,361.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgJAAgNQAAgNAFgKQAEgLAKgGQAJgHALAAQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgDIACALQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_374.setTransform(437,363.1);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgFgEgDQgFgEgHAAQgHABgFAEQgGAFgCAFIgBADIAAAFIAAA0IgQAAIAAh/IAQAAIAAA3IAAAAIAFgGIAGgGIAIgDIAIgBIAJABQAGACAEAFQAFAEADAHQADAGAAALIAAA0g");
	this.shape_375.setTransform(427.5,361);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#373535").s().p("AgHA9IAAhrIglAAIAAgOIBZAAIAAAOIglAAIAABrg");
	this.shape_376.setTransform(418.2,361.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158}]},233).to({state:[{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158}]},212).wait(1));

	// ArrowUp
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(75.7,587.7,0.999,0.999,29.9,0,0,48.6,80.5);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.lf(["#FFDE31","#EE3338"],[0,1],0,12.8,0,-12.7).s().p("Agih/ICqDXIkPAog");
	this.shape_377.setTransform(282.2,306.4);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.lf(["#FFDE31","#EE3338"],[0,1],0,71.2,0,-71.1).s().p("AlNJ1QArgdAuglIAxgpIAxguIAygzIAxg3QA4hGAig2QAwhMAfg9QAkhKAahFQAchQAPhAQAThMAHg+QAHguAEhNIgDiUIgNhsIDggQIgECtIgPB3QgQBXgPAzQgRBEgfBRQgaBEgqBTQgiBDg1BQQgrBAg7BHQgsAzhGBDQgpAmgQANQgQAOgqAgIg4AoIg3AjQgqAag5AeIiWBBg");
	this.shape_378.setTransform(245.8,383.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_378},{t:this.shape_377}]},1).to({state:[{t:this.shape_378},{t:this.shape_377}]},371).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1,rotation:29.2,x:83.8,y:586.8},0).wait(1).to({rotation:28.3,x:92,y:585.6},0).wait(1).to({rotation:27.5,x:100.1,y:584.1},0).wait(1).to({rotation:26.7,x:108.2,y:582.2},0).wait(1).to({rotation:25.8,x:116.1,y:579.9},0).wait(1).to({rotation:25,x:123.9,y:577.4},0).wait(1).to({rotation:24.1,x:131.7,y:574.4},0).wait(1).to({rotation:23.3,x:139.2,y:571.2},0).wait(1).to({rotation:22.5,x:146.6,y:567.5},0).wait(1).to({rotation:21.6,x:153.8,y:563.5},0).wait(1).to({rotation:20.8,x:160.8,y:559.1},0).wait(1).to({rotation:20,x:167.6,y:554.3},0).wait(1).to({rotation:19.1,x:174,y:549.2},0).wait(1).to({rotation:18.3,x:180.2,y:543.8},0).wait(1).to({rotation:17.4,x:186.1,y:538},0).wait(1).to({rotation:16.6,x:191.7,y:532},0).wait(1).to({rotation:15.8,x:197,y:525.6},0).wait(1).to({rotation:14.9,x:202,y:519.1},0).wait(1).to({rotation:14.1,x:206.7,y:512.3},0).wait(1).to({rotation:13.3,x:211.1,y:505.3},0).wait(1).to({rotation:12.4,x:215.1,y:498.1},0).wait(1).to({rotation:11.6,x:218.9,y:490.8},0).wait(1).to({rotation:10.7,x:222.4,y:483.3},0).wait(1).to({rotation:9.9,x:225.6,y:475.7},0).wait(1).to({rotation:9.1,x:228.4,y:468},0).wait(1).to({rotation:8.2,x:231.1,y:460.1},0).wait(1).to({rotation:7.4,x:233.5,y:452.3},0).wait(1).to({rotation:6.6,x:235.7,y:444.3},0).wait(1).to({rotation:5.7,x:237.6,y:436.3},0).wait(1).to({rotation:4.9,x:239.3,y:428.2},0).wait(1).to({rotation:4,x:240.8,y:420.1},0).wait(1).to({rotation:3.2,x:242.1,y:411.9},0).wait(1).to({rotation:2.4,x:243.2,y:403.8},0).wait(1).to({rotation:1.5,x:244.2,y:395.6},0).wait(1).to({rotation:0.7,x:245,y:387.4},0).wait(1).to({rotation:-0.1,x:245.6,y:379.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:29.9,x:75.7,y:587.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:29.2,x:83.8,y:586.8},0).wait(1).to({rotation:28.3,x:92,y:585.6},0).wait(1).to({rotation:27.5,x:100.1,y:584.1},0).wait(1).to({rotation:26.7,x:108.2,y:582.2},0).wait(1).to({rotation:25.8,x:116.1,y:579.9},0).wait(1).to({rotation:25,x:123.9,y:577.4},0).wait(1).to({rotation:24.1,x:131.7,y:574.4},0).wait(1).to({rotation:23.3,x:139.2,y:571.2},0).wait(1).to({rotation:22.5,x:146.6,y:567.5},0).wait(1).to({rotation:21.6,x:153.8,y:563.5},0).wait(1).to({rotation:20.8,x:160.8,y:559.1},0).wait(1).to({rotation:20,x:167.6,y:554.3},0).wait(1).to({rotation:19.1,x:174,y:549.2},0).wait(1).to({rotation:18.3,x:180.2,y:543.8},0).wait(1).to({rotation:17.4,x:186.1,y:538},0).wait(1).to({rotation:16.6,x:191.7,y:532},0).wait(1).to({rotation:15.8,x:197,y:525.6},0).wait(1).to({rotation:14.9,x:202,y:519.1},0).wait(1).to({rotation:14.1,x:206.7,y:512.3},0).wait(1).to({rotation:13.3,x:211.1,y:505.3},0).wait(1).to({rotation:12.4,x:215.1,y:498.1},0).wait(1).to({rotation:11.6,x:218.9,y:490.8},0).wait(1).to({rotation:10.7,x:222.4,y:483.3},0).wait(1).to({rotation:9.9,x:225.6,y:475.7},0).wait(1).to({rotation:9.1,x:228.4,y:468},0).wait(1).to({rotation:8.2,x:231.1,y:460.1},0).wait(1).to({rotation:7.4,x:233.5,y:452.3},0).wait(1).to({rotation:6.6,x:235.7,y:444.3},0).wait(1).to({rotation:5.7,x:237.6,y:436.3},0).wait(1).to({rotation:4.9,x:239.3,y:428.2},0).wait(1).to({rotation:4,x:240.8,y:420.1},0).wait(1).to({rotation:3.2,x:242.1,y:411.9},0).wait(1).to({rotation:2.4,x:243.2,y:403.8},0).wait(1).to({rotation:1.5,x:244.2,y:395.6},0).wait(1).to({rotation:0.7,x:245,y:387.4},0).wait(1).to({rotation:-0.1,x:245.6,y:379.2},0).to({_off:true},1).wait(372));

	// CircularArrows
	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(669.2,190.3,1,1,0,0,0,83,83);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({_off:false},0).wait(1).to({rotation:6.9},0).wait(1).to({rotation:13.8},0).wait(1).to({rotation:20.8,x:669.1},0).wait(1).to({rotation:27.7,x:669.2},0).wait(1).to({rotation:34.6,x:669.1},0).wait(1).to({rotation:41.5},0).wait(1).to({rotation:48.5},0).wait(1).to({rotation:55.4},0).wait(1).to({rotation:62.3},0).wait(1).to({rotation:69.2},0).wait(1).to({rotation:76.2},0).wait(1).to({rotation:83.1},0).wait(1).to({rotation:90},0).wait(1).to({rotation:96.9},0).wait(1).to({rotation:103.8},0).wait(1).to({rotation:110.8,y:190.2},0).wait(1).to({rotation:117.7,y:190.3},0).wait(1).to({rotation:124.6,y:190.2},0).wait(1).to({rotation:131.5},0).wait(1).to({rotation:138.5},0).wait(1).to({rotation:145.4},0).wait(1).to({rotation:152.3},0).wait(1).to({rotation:159.2},0).wait(1).to({rotation:166.2},0).wait(1).to({rotation:173.1},0).wait(1).to({rotation:180,x:669.2},0).wait(1).to({rotation:186.9,x:669.1},0).wait(1).to({rotation:193.8},0).wait(1).to({rotation:200.8,x:669.2},0).wait(1).to({rotation:207.7,x:669.1},0).wait(1).to({rotation:214.6,x:669.2},0).wait(1).to({rotation:221.5},0).wait(1).to({rotation:228.5},0).wait(1).to({rotation:235.4},0).wait(1).to({rotation:242.3},0).wait(1).to({rotation:249.2},0).wait(1).to({rotation:256.2},0).wait(1).to({rotation:263.1},0).wait(1).to({rotation:270,y:190.3},0).wait(1).to({rotation:276.9,y:190.2},0).wait(1).to({rotation:283.8},0).wait(1).to({rotation:290.8,y:190.3},0).wait(1).to({rotation:297.7,y:190.2},0).wait(1).to({rotation:304.6,y:190.3},0).wait(1).to({rotation:311.5},0).wait(1).to({rotation:318.5},0).wait(1).to({rotation:325.4},0).wait(1).to({rotation:332.3},0).wait(1).to({rotation:339.2},0).wait(1).to({rotation:346.2},0).wait(1).to({rotation:353.1},0).wait(1).to({rotation:360},0).wait(2).to({rotation:366.9},0).wait(1).to({rotation:373.8},0).wait(1).to({rotation:380.8,x:669.1},0).wait(1).to({rotation:387.7,x:669.2},0).wait(1).to({rotation:394.6,x:669.1},0).wait(1).to({rotation:401.5},0).wait(1).to({rotation:408.5},0).wait(1).to({rotation:415.4},0).wait(1).to({rotation:422.3},0).wait(1).to({rotation:429.2},0).wait(1).to({rotation:436.2},0).wait(1).to({rotation:443.1},0).wait(1).to({rotation:450},0).wait(1).to({rotation:456.9},0).wait(1).to({rotation:463.8},0).wait(1).to({rotation:470.8,y:190.2},0).wait(1).to({rotation:477.7,y:190.3},0).wait(1).to({rotation:484.6,y:190.2},0).wait(1).to({rotation:491.5},0).wait(1).to({rotation:498.5},0).wait(1).to({rotation:505.4},0).wait(1).to({rotation:512.3},0).wait(1).to({rotation:519.2},0).wait(1).to({rotation:526.2},0).wait(1).to({rotation:533.1},0).wait(1).to({rotation:540,x:669.2},0).wait(1).to({rotation:546.9,x:669.1},0).wait(1).to({rotation:553.8},0).wait(1).to({rotation:560.8,x:669.2},0).wait(1).to({rotation:567.7,x:669.1},0).wait(1).to({rotation:574.6,x:669.2},0).wait(1).to({rotation:581.5},0).wait(1).to({rotation:588.5},0).wait(1).to({rotation:595.4},0).wait(1).to({rotation:602.3},0).wait(1).to({rotation:609.2},0).wait(1).to({rotation:616.2},0).wait(1).to({rotation:623.1},0).wait(1).to({rotation:630,y:190.3},0).wait(1).to({rotation:636.9,y:190.2},0).wait(1).to({rotation:643.8},0).wait(1).to({rotation:650.8,y:190.3},0).wait(1).to({rotation:657.7,y:190.2},0).wait(1).to({rotation:664.6,y:190.3},0).wait(1).to({rotation:671.5},0).wait(1).to({rotation:678.5},0).wait(1).to({rotation:685.4},0).wait(1).to({rotation:692.3},0).wait(1).to({rotation:699.2},0).wait(1).to({rotation:706.2},0).wait(1).to({rotation:713.1},0).wait(1).to({rotation:720},0).wait(2).to({rotation:726.9},0).wait(1).to({rotation:733.8},0).wait(1).to({rotation:740.8,x:669.1},0).wait(1).to({rotation:747.7,x:669.2},0).wait(1).to({rotation:754.6,x:669.1},0).wait(1).to({rotation:761.5},0).wait(1).to({rotation:768.5},0).wait(1).to({rotation:775.4},0).wait(1).to({rotation:782.3},0).wait(1).to({rotation:789.2},0).wait(1).to({rotation:796.2},0).wait(1).to({rotation:803.1},0).wait(1).to({rotation:810},0).wait(1).to({rotation:816.9},0).wait(1).to({rotation:823.8},0).wait(1).to({rotation:830.8,y:190.2},0).wait(1).to({rotation:837.7,y:190.3},0).wait(1).to({rotation:844.6,y:190.2},0).wait(1).to({rotation:851.5},0).wait(1).to({rotation:858.5},0).wait(1).to({rotation:865.4},0).wait(1).to({rotation:872.3},0).wait(1).to({rotation:879.2},0).wait(1).to({rotation:886.2},0).wait(1).to({rotation:893.1},0).wait(1).to({rotation:900,x:669.2},0).wait(1).to({rotation:906.9,x:669.1},0).wait(1).to({rotation:913.8},0).wait(1).to({rotation:920.8,x:669.2},0).wait(1).to({rotation:927.7,x:669.1},0).wait(1).to({rotation:934.6,x:669.2},0).wait(1).to({rotation:941.5},0).wait(1).to({rotation:948.5},0).wait(1).to({rotation:955.4},0).wait(1).to({rotation:962.3},0).wait(1).to({rotation:969.2},0).wait(1).to({rotation:976.2},0).wait(1).to({rotation:983.1},0).wait(1).to({rotation:990,y:190.3},0).wait(1).to({rotation:996.9,y:190.2},0).wait(1).to({rotation:1003.8},0).wait(1).to({rotation:1010.8,y:190.3},0).wait(1).to({rotation:1017.7,y:190.2},0).wait(1).to({rotation:1024.6,y:190.3},0).wait(1).to({rotation:1031.5},0).wait(1).to({rotation:1038.5},0).wait(1).to({rotation:1045.4},0).wait(1).to({rotation:1052.3},0).wait(1).to({rotation:1059.2},0).wait(1).to({rotation:1066.2},0).wait(1).to({rotation:1073.1},0).wait(1).to({rotation:1080},0).wait(108));

	// C1
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(413.2,167.1,0.524,0.556,0,0,0,16.5,16.2);
	this.instance_2._off = true;

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#4C4C4D").s().p("AAdg3QABACAEABIhDBsg");
	this.shape_379.setTransform(416.4,185.5);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#4C4C4D").s().p("Ag/AAIB/gCIgBADIAAACg");
	this.shape_380.setTransform(412.7,179.2);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#4C4C4D").s().p("Aggg0IAEgEIA9Bxg");
	this.shape_381.setTransform(423.5,185.4);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#4C4C4D").s().p("AhAABIgBgDICDADIiCACg");
	this.shape_382.setTransform(427.2,179.2);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#4C4C4D").s().p("Aggg4IBBBvIAAAAIgFACg");
	this.shape_383.setTransform(416.6,172.9);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#4C4C4D").s().p("AgiA2IBFhuIhABxQgBgCgEgBg");
	this.shape_384.setTransform(423.5,173.1);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#4C4C4D").s().p("AgDBxIgGAHIgFgEIAKgMIAAgGIgJAKIgFgEIANgPIAAgGIgKALIgEgEIANgQIAAgGIgLANIgFgEIAPgSIABgwIgoAaIgIAXIgGgCIAGgRIgGADIgHAVIgGgCIAFgPIgFACIgHAUIgGgCIAFgOIgGADIgGAQIgGgCIAEgKIg5AcIA0gjIgJgBIABgHIAPADIAGgDIgNgDIABgGIATAEIAFgEIgOgCIABgGIAUADIAFgDIgQgDIABgGIAXAEIArgXIgpgVIgYAFIgBgGIASgEIgFgDIgWAEIgBgGIAPgDIgFgDIgUAEIgBgHIAOgCIgGgEIgQADIgBgGIAKgCIg1gjIA4AbIgDgIIAGgCIAFAOIAGADIgEgMIAGgCIAGASIAGADIgFgOIAGgCIAHAUIAFACIgFgQIAGgCIAHAWIApAZIgCgwIgQgTIAFgEIAMAOIAAgGIgOgRIAEgEIALAMIAAgGIgNgQIAEgEIAKALIAAgHIgLgMIAFgEIAHAHIADg/IAEA/IAGgHIAFAEIgKALIAAAHIAJgKIAFAEIgNAPIAAAGIAKgLIAEAEIgNAPIAAAHIALgNIAFAEIgPASIgBAxIAmgZIAIgXIAGACIgGARIAGgDIAHgUIAGACIgFAPIAFgDIAHgUIAGACIgFAOIAGgDIAGgQIAFACIgDAKIA5gcIg0AjIAJACIgBAGIgPgDIgGADIANADIgBAGIgTgEIgFAEIAOACIgBAHIgUgEIgGADIARADIgBAHIgXgFIgqAWIAqAXIAZgFIABAGIgSAEIAFADIAWgEIABAGIgPADIAFADIAUgEIABAHIgOACIAGAEIAQgDIABAGIgKACIA1AjIg5gbIADAIIgFACIgFgOIgHgDIAFAMIgGACIgGgSIgGgDIAFAOIgGACIgHgTIgFgDIAFAQIgGACIgHgWIgqgaIACAuIAQATIgFAEIgMgOIAAAGIAOARIgEAEIgLgMIAAAGIANAQIgEAEIgKgLIAAAHIALAMIgFAEIgHgIIgEBAgAgHACQAAAIAHAAQAEAAACgCQADgDAAgDQAAgIgJAAQgHAAAAAIg");
	this.shape_385.setTransform(419.8,179.1);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#4C4C4D").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTgAgqgqQgTASAAAYQAAAaATASQASASAYAAQAaAAASgSQASgSAAgaQAAgYgSgSQgSgTgaAAQgYAAgSATg");
	this.shape_386.setTransform(419.8,179.1);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#4C4C4D").s().p("AgHAHQgDgDABgEQgBgDADgDQAEgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgEgDg");
	this.shape_387.setTransform(417.4,183.8);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_388.setTransform(422.5,183.6);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgEQADgDADAAQAEAAADADQADAEAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_389.setTransform(425,179.2);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_390.setTransform(422.7,174.8);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#4C4C4D").s().p("AgGAIQgDgEAAgEQAAgEADgDQADgCADAAQAEAAADACQADADAAAEQAAAEgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_391.setTransform(417.4,174.5);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#4C4C4D").s().p("AgHAHQgCgDAAgEQAAgDACgDQADgDAEAAQAEAAAEADQACADAAADQAAAEgCADQgEADgEAAQgEAAgDgDg");
	this.shape_392.setTransform(414.6,179.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},74).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(74).to({_off:false},0).wait(1).to({regX:15.3,regY:17.6,scaleX:0.55,scaleY:0.59,x:413.4,y:169.1},0).wait(1).to({scaleX:0.58,scaleY:0.61,x:414.2,y:170.3},0).wait(1).to({scaleX:0.61,scaleY:0.64,x:415.1,y:171.5},0).wait(1).to({scaleX:0.63,scaleY:0.67,x:415.9,y:172.7},0).wait(1).to({scaleX:0.66,scaleY:0.7,x:416.8,y:174},0).wait(1).to({scaleX:0.69,scaleY:0.73,x:417.6,y:175.2},0).wait(1).to({scaleX:0.72,scaleY:0.76,x:418.5,y:176.4},0).wait(1).to({scaleX:0.74,scaleY:0.79,x:419.3,y:177.6},0).wait(1).to({scaleX:0.77,scaleY:0.82,x:420.2,y:178.8},0).wait(1).to({scaleX:0.8,scaleY:0.85,x:421.1,y:180},0).wait(1).to({scaleX:0.82,scaleY:0.87,x:421.9,y:181.2},0).wait(1).to({scaleX:0.85,scaleY:0.9,x:422.7,y:182.5},0).wait(1).to({scaleX:0.88,scaleY:0.93,x:423.6,y:183.7},0).wait(1).to({scaleX:0.91,scaleY:0.96,x:424.5,y:184.9},0).wait(1).to({scaleX:0.93,scaleY:0.99,x:425.3,y:186.1},0).wait(1).to({scaleX:0.96,scaleY:1.02,x:426.2,y:187.3},0).wait(1).to({scaleX:0.99,scaleY:1.05,x:427,y:188.5},0).wait(1).to({scaleX:1.01,scaleY:1.08,x:427.9,y:189.7},0).wait(1).to({scaleX:1.04,scaleY:1.1,x:428.8,y:190.9},0).wait(1).to({scaleX:1.07,scaleY:1.13,x:429.6,y:192.1},0).wait(1).to({scaleX:1.1,scaleY:1.16,x:430.4,y:193.3},0).wait(1).to({scaleX:1.12,scaleY:1.19,x:431.3,y:194.5},0).wait(1).to({scaleX:1.15,scaleY:1.22,x:432.1,y:195.7},0).wait(1).to({scaleX:1.18,scaleY:1.25,x:433,y:197},0).wait(1).to({scaleX:1.21,scaleY:1.28,x:433.9,y:198.2},0).wait(1).to({scaleX:1.23,scaleY:1.31,x:434.7,y:199.4},0).wait(1).to({scaleX:1.26,scaleY:1.34,x:435.5,y:200.6},0).wait(1).to({scaleX:1.29,scaleY:1.36,x:436.4,y:201.8},0).wait(1).to({scaleX:1.31,scaleY:1.39,x:437.3,y:203},0).wait(1).to({scaleX:1.34,scaleY:1.42,x:438.1,y:204.2},0).wait(1).to({scaleX:1.33,scaleY:1.41,x:437.9,y:202.7},0).wait(1).to({scaleX:1.32,scaleY:1.39,x:437.7,y:201.2},0).wait(1).to({scaleX:1.3,scaleY:1.38,x:437.5,y:199.7},0).wait(1).to({scaleX:1.29,scaleY:1.37,x:437.3,y:198.2},0).wait(1).to({scaleX:1.27,scaleY:1.35,x:437.1,y:196.7},0).wait(1).to({scaleX:1.26,scaleY:1.34,x:436.9,y:195.2},0).wait(1).to({scaleX:1.25,scaleY:1.32,x:436.7,y:193.7},0).wait(1).to({scaleX:1.24,scaleY:1.31,x:436.5,y:192.2},0).wait(1).to({scaleX:1.22,scaleY:1.29,x:436.3,y:190.6},0).wait(1).to({scaleX:1.21,scaleY:1.28,x:436.1,y:189.1},0).wait(1).to({scaleX:1.2,scaleY:1.27,x:435.9,y:187.6},0).wait(1).to({scaleX:1.18,scaleY:1.25,x:435.7,y:186.1},0).wait(1).to({scaleX:1.17,scaleY:1.24,x:435.5,y:184.6},0).wait(1).to({scaleX:1.16,scaleY:1.22,x:435.3,y:183.1},0).wait(1).to({scaleX:1.14,scaleY:1.21,x:435.1,y:181.5},0).wait(1).to({scaleX:1.13,scaleY:1.2,x:434.9,y:180},0).wait(1).to({scaleX:1.12,scaleY:1.18,x:434.7,y:178.5},0).wait(1).to({scaleX:1.1,scaleY:1.17,x:434.5,y:177},0).wait(1).to({scaleX:1.09,scaleY:1.15,x:434.3,y:175.5},0).wait(1).to({scaleX:1.08,scaleY:1.14,x:434.1,y:174},0).wait(1).to({scaleX:1.06,scaleY:1.12,x:433.9,y:172.4},0).wait(1).to({scaleX:1.05,scaleY:1.11,x:433.7,y:170.9},0).wait(1).to({regX:16.5,regY:16.2,scaleX:0.52,scaleY:0.56,x:413.2,y:167.1},0).wait(1).to({regX:15.3,regY:17.6,scaleX:0.55,scaleY:0.59,x:413.4,y:169.1},0).wait(1).to({scaleX:0.58,scaleY:0.61,x:414.2,y:170.3},0).wait(1).to({scaleX:0.61,scaleY:0.64,x:415.1,y:171.5},0).wait(1).to({scaleX:0.63,scaleY:0.67,x:415.9,y:172.7},0).wait(1).to({scaleX:0.66,scaleY:0.7,x:416.8,y:174},0).wait(1).to({scaleX:0.69,scaleY:0.73,x:417.6,y:175.2},0).wait(1).to({scaleX:0.72,scaleY:0.76,x:418.5,y:176.4},0).wait(1).to({scaleX:0.74,scaleY:0.79,x:419.3,y:177.6},0).wait(1).to({scaleX:0.77,scaleY:0.82,x:420.2,y:178.8},0).wait(1).to({scaleX:0.8,scaleY:0.85,x:421.1,y:180},0).wait(1).to({scaleX:0.82,scaleY:0.87,x:421.9,y:181.2},0).wait(1).to({scaleX:0.85,scaleY:0.9,x:422.7,y:182.5},0).wait(1).to({scaleX:0.88,scaleY:0.93,x:423.6,y:183.7},0).wait(1).to({scaleX:0.91,scaleY:0.96,x:424.5,y:184.9},0).wait(1).to({scaleX:0.93,scaleY:0.99,x:425.3,y:186.1},0).wait(1).to({scaleX:0.96,scaleY:1.02,x:426.2,y:187.3},0).wait(1).to({scaleX:0.99,scaleY:1.05,x:427,y:188.5},0).wait(1).to({scaleX:1.01,scaleY:1.08,x:427.9,y:189.7},0).wait(1).to({scaleX:1.04,scaleY:1.1,x:428.8,y:190.9},0).wait(1).to({scaleX:1.07,scaleY:1.13,x:429.6,y:192.1},0).wait(1).to({scaleX:1.1,scaleY:1.16,x:430.4,y:193.3},0).wait(1).to({scaleX:1.12,scaleY:1.19,x:431.3,y:194.5},0).wait(1).to({scaleX:1.15,scaleY:1.22,x:432.1,y:195.7},0).wait(1).to({scaleX:1.18,scaleY:1.25,x:433,y:197},0).wait(1).to({scaleX:1.21,scaleY:1.28,x:433.9,y:198.2},0).wait(1).to({scaleX:1.23,scaleY:1.31,x:434.7,y:199.4},0).wait(1).to({scaleX:1.26,scaleY:1.34,x:435.5,y:200.6},0).wait(1).to({scaleX:1.29,scaleY:1.36,x:436.4,y:201.8},0).wait(1).to({scaleX:1.31,scaleY:1.39,x:437.3,y:203},0).wait(1).to({scaleX:1.34,scaleY:1.42,x:438.1,y:204.2},0).wait(1).to({scaleX:1.33,scaleY:1.41,x:437.9,y:202.7},0).wait(1).to({scaleX:1.32,scaleY:1.39,x:437.7,y:201.2},0).wait(1).to({scaleX:1.3,scaleY:1.38,x:437.5,y:199.7},0).wait(1).to({scaleX:1.29,scaleY:1.37,x:437.3,y:198.2},0).wait(1).to({scaleX:1.27,scaleY:1.35,x:437.1,y:196.7},0).wait(1).to({scaleX:1.26,scaleY:1.34,x:436.9,y:195.2},0).wait(1).to({scaleX:1.25,scaleY:1.32,x:436.7,y:193.7},0).wait(1).to({scaleX:1.24,scaleY:1.31,x:436.5,y:192.2},0).wait(1).to({scaleX:1.22,scaleY:1.29,x:436.3,y:190.6},0).wait(1).to({scaleX:1.21,scaleY:1.28,x:436.1,y:189.1},0).wait(1).to({scaleX:1.2,scaleY:1.27,x:435.9,y:187.6},0).wait(1).to({scaleX:1.18,scaleY:1.25,x:435.7,y:186.1},0).wait(1).to({scaleX:1.17,scaleY:1.24,x:435.5,y:184.6},0).wait(1).to({scaleX:1.16,scaleY:1.22,x:435.3,y:183.1},0).wait(1).to({scaleX:1.14,scaleY:1.21,x:435.1,y:181.5},0).wait(1).to({scaleX:1.13,scaleY:1.2,x:434.9,y:180},0).wait(1).to({scaleX:1.12,scaleY:1.18,x:434.7,y:178.5},0).wait(1).to({scaleX:1.1,scaleY:1.17,x:434.5,y:177},0).wait(1).to({scaleX:1.09,scaleY:1.15,x:434.3,y:175.5},0).wait(1).to({scaleX:1.08,scaleY:1.14,x:434.1,y:174},0).wait(1).to({scaleX:1.06,scaleY:1.12,x:433.9,y:172.4},0).wait(1).to({scaleX:1.05,scaleY:1.11,x:433.7,y:170.9},0).wait(1).to({regX:16.5,regY:16.2,scaleX:0.52,scaleY:0.56,x:413.2,y:167.1},0).wait(1).to({regX:15.3,regY:17.6,scaleX:0.55,scaleY:0.59,x:413.4,y:169.1},0).wait(1).to({scaleX:0.58,scaleY:0.61,x:414.2,y:170.3},0).wait(1).to({scaleX:0.61,scaleY:0.64,x:415.1,y:171.5},0).wait(1).to({scaleX:0.63,scaleY:0.67,x:415.9,y:172.7},0).wait(1).to({scaleX:0.66,scaleY:0.7,x:416.8,y:174},0).wait(1).to({scaleX:0.69,scaleY:0.73,x:417.6,y:175.2},0).wait(1).to({scaleX:0.72,scaleY:0.76,x:418.5,y:176.4},0).wait(1).to({scaleX:0.74,scaleY:0.79,x:419.3,y:177.6},0).wait(1).to({scaleX:0.77,scaleY:0.82,x:420.2,y:178.8},0).wait(1).to({scaleX:0.8,scaleY:0.85,x:421.1,y:180},0).wait(1).to({scaleX:0.82,scaleY:0.87,x:421.9,y:181.2},0).wait(1).to({scaleX:0.85,scaleY:0.9,x:422.7,y:182.5},0).wait(1).to({scaleX:0.88,scaleY:0.93,x:423.6,y:183.7},0).wait(1).to({scaleX:0.91,scaleY:0.96,x:424.5,y:184.9},0).wait(1).to({scaleX:0.93,scaleY:0.99,x:425.3,y:186.1},0).wait(1).to({scaleX:0.96,scaleY:1.02,x:426.2,y:187.3},0).wait(1).to({scaleX:0.99,scaleY:1.05,x:427,y:188.5},0).wait(1).to({scaleX:1.01,scaleY:1.08,x:427.9,y:189.7},0).wait(1).to({scaleX:1.04,scaleY:1.1,x:428.8,y:190.9},0).wait(1).to({scaleX:1.07,scaleY:1.13,x:429.6,y:192.1},0).wait(1).to({scaleX:1.1,scaleY:1.16,x:430.4,y:193.3},0).wait(1).to({scaleX:1.12,scaleY:1.19,x:431.3,y:194.5},0).wait(1).to({scaleX:1.15,scaleY:1.22,x:432.1,y:195.7},0).wait(1).to({scaleX:1.18,scaleY:1.25,x:433,y:197},0).wait(1).to({scaleX:1.21,scaleY:1.28,x:433.9,y:198.2},0).wait(1).to({scaleX:1.23,scaleY:1.31,x:434.7,y:199.4},0).wait(1).to({scaleX:1.26,scaleY:1.34,x:435.5,y:200.6},0).wait(1).to({scaleX:1.29,scaleY:1.36,x:436.4,y:201.8},0).wait(1).to({scaleX:1.31,scaleY:1.39,x:437.3,y:203},0).wait(1).to({scaleX:1.34,scaleY:1.42,x:438.1,y:204.2},0).wait(1).to({scaleX:1.33,scaleY:1.41,x:437.9,y:202.7},0).wait(1).to({scaleX:1.32,scaleY:1.39,x:437.7,y:201.2},0).wait(1).to({scaleX:1.3,scaleY:1.38,x:437.5,y:199.7},0).wait(1).to({scaleX:1.29,scaleY:1.37,x:437.3,y:198.2},0).wait(1).to({scaleX:1.27,scaleY:1.35,x:437.1,y:196.7},0).wait(1).to({scaleX:1.26,scaleY:1.34,x:436.9,y:195.2},0).wait(1).to({scaleX:1.25,scaleY:1.32,x:436.7,y:193.7},0).wait(1).to({scaleX:1.24,scaleY:1.31,x:436.5,y:192.2},0).wait(1).to({scaleX:1.22,scaleY:1.29,x:436.3,y:190.6},0).wait(1).to({scaleX:1.21,scaleY:1.28,x:436.1,y:189.1},0).wait(1).to({scaleX:1.2,scaleY:1.27,x:435.9,y:187.6},0).wait(1).to({scaleX:1.18,scaleY:1.25,x:435.7,y:186.1},0).wait(1).to({scaleX:1.17,scaleY:1.24,x:435.5,y:184.6},0).wait(1).to({scaleX:1.16,scaleY:1.22,x:435.3,y:183.1},0).wait(1).to({scaleX:1.14,scaleY:1.21,x:435.1,y:181.5},0).wait(1).to({scaleX:1.13,scaleY:1.2,x:434.9,y:180},0).wait(1).to({scaleX:1.12,scaleY:1.18,x:434.7,y:178.5},0).wait(1).to({scaleX:1.1,scaleY:1.17,x:434.5,y:177},0).wait(1).to({scaleX:1.09,scaleY:1.15,x:434.3,y:175.5},0).wait(1).to({scaleX:1.08,scaleY:1.14,x:434.1,y:174},0).wait(1).to({scaleX:1.06,scaleY:1.12,x:433.9,y:172.4},0).wait(1).to({scaleX:1.05,scaleY:1.11,x:433.7,y:170.9},0).wait(1).to({regX:16.5,regY:16.2,scaleX:0.52,scaleY:0.56,x:413.2,y:167.1},0).wait(1).to({regX:15.3,regY:17.6,scaleX:0.55,scaleY:0.59,x:413.4,y:169.1},0).wait(1).to({scaleX:0.58,scaleY:0.61,x:414.2,y:170.3},0).wait(1).to({scaleX:0.61,scaleY:0.64,x:415.1,y:171.5},0).wait(1).to({scaleX:0.63,scaleY:0.67,x:415.9,y:172.7},0).wait(1).to({scaleX:0.66,scaleY:0.7,x:416.8,y:174},0).wait(1).to({scaleX:0.69,scaleY:0.73,x:417.6,y:175.2},0).wait(1).to({scaleX:0.72,scaleY:0.76,x:418.5,y:176.4},0).wait(1).to({scaleX:0.74,scaleY:0.79,x:419.3,y:177.6},0).wait(1).to({scaleX:0.77,scaleY:0.82,x:420.2,y:178.8},0).wait(1).to({scaleX:0.8,scaleY:0.85,x:421.1,y:180},0).wait(1).to({scaleX:0.82,scaleY:0.87,x:421.9,y:181.2},0).wait(1).to({scaleX:0.85,scaleY:0.9,x:422.7,y:182.5},0).wait(1).to({scaleX:0.88,scaleY:0.93,x:423.6,y:183.7},0).wait(1).to({scaleX:0.91,scaleY:0.96,x:424.5,y:184.9},0).wait(1).to({scaleX:0.93,scaleY:0.99,x:425.3,y:186.1},0).wait(1).to({scaleX:0.96,scaleY:1.02,x:426.2,y:187.3},0).wait(1).to({scaleX:0.99,scaleY:1.05,x:427,y:188.5},0).wait(1).to({scaleX:1.01,scaleY:1.08,x:427.9,y:189.7},0).wait(1).to({scaleX:1.04,scaleY:1.1,x:428.8,y:190.9},0).wait(1).to({scaleX:1.07,scaleY:1.13,x:429.6,y:192.1},0).wait(1).to({scaleX:1.1,scaleY:1.16,x:430.4,y:193.3},0).wait(1).to({scaleX:1.12,scaleY:1.19,x:431.3,y:194.5},0).wait(1).to({scaleX:1.15,scaleY:1.22,x:432.1,y:195.7},0).wait(1).to({scaleX:1.18,scaleY:1.25,x:433,y:197},0).wait(1).to({scaleX:1.21,scaleY:1.28,x:433.9,y:198.2},0).wait(1).to({scaleX:1.23,scaleY:1.31,x:434.7,y:199.4},0).wait(1).to({scaleX:1.26,scaleY:1.34,x:435.5,y:200.6},0).wait(1).to({scaleX:1.29,scaleY:1.36,x:436.4,y:201.8},0).wait(1).to({scaleX:1.31,scaleY:1.39,x:437.3,y:203},0).wait(1).to({scaleX:1.34,scaleY:1.42,x:438.1,y:204.2},0).wait(1).to({scaleX:1.33,scaleY:1.41,x:437.9,y:202.7},0).wait(1).to({scaleX:1.32,scaleY:1.39,x:437.7,y:201.2},0).wait(1).to({scaleX:1.3,scaleY:1.38,x:437.5,y:199.7},0).wait(1).to({scaleX:1.29,scaleY:1.37,x:437.3,y:198.2},0).wait(1).to({scaleX:1.27,scaleY:1.35,x:437.1,y:196.7},0).wait(1).to({scaleX:1.26,scaleY:1.34,x:436.9,y:195.2},0).wait(1).to({scaleX:1.25,scaleY:1.32,x:436.7,y:193.7},0).wait(1).to({scaleX:1.24,scaleY:1.31,x:436.5,y:192.2},0).wait(1).to({scaleX:1.22,scaleY:1.29,x:436.3,y:190.6},0).wait(1).to({scaleX:1.21,scaleY:1.28,x:436.1,y:189.1},0).wait(1).to({scaleX:1.2,scaleY:1.27,x:435.9,y:187.6},0).wait(1).to({scaleX:1.18,scaleY:1.25,x:435.7,y:186.1},0).wait(1).to({scaleX:1.17,scaleY:1.24,x:435.5,y:184.6},0).wait(1).to({scaleX:1.16,scaleY:1.22,x:435.3,y:183.1},0).wait(1).to({scaleX:1.14,scaleY:1.21,x:435.1,y:181.5},0).wait(1).to({scaleX:1.13,scaleY:1.2,x:434.9,y:180},0).wait(1).to({scaleX:1.12,scaleY:1.18,x:434.7,y:178.5},0).wait(1).to({scaleX:1.1,scaleY:1.17,x:434.5,y:177},0).wait(1).to({scaleX:1.09,scaleY:1.15,x:434.3,y:175.5},0).wait(1).to({scaleX:1.08,scaleY:1.14,x:434.1,y:174},0).wait(1).to({scaleX:1.06,scaleY:1.12,x:433.9,y:172.4},0).wait(1).to({scaleX:1.05,scaleY:1.11,x:433.7,y:170.9},0).wait(1).to({regX:16.5,regY:16.2,scaleX:0.52,scaleY:0.56,x:413.2,y:167.1},0).wait(1).to({regX:15.3,regY:17.6,scaleX:0.55,scaleY:0.59,x:413.4,y:169.1},0).wait(1).to({scaleX:0.58,scaleY:0.61,x:414.2,y:170.3},0).wait(1).to({scaleX:0.61,scaleY:0.64,x:415.1,y:171.5},0).wait(1).to({scaleX:0.63,scaleY:0.67,x:415.9,y:172.7},0).wait(1).to({scaleX:0.66,scaleY:0.7,x:416.8,y:174},0).wait(1).to({scaleX:0.69,scaleY:0.73,x:417.6,y:175.2},0).wait(1).to({scaleX:0.72,scaleY:0.76,x:418.5,y:176.4},0).wait(1).to({scaleX:0.74,scaleY:0.79,x:419.3,y:177.6},0).wait(1).to({scaleX:0.77,scaleY:0.82,x:420.2,y:178.8},0).wait(1).to({scaleX:0.8,scaleY:0.85,x:421.1,y:180},0).wait(1).to({scaleX:0.82,scaleY:0.87,x:421.9,y:181.2},0).wait(1).to({scaleX:0.85,scaleY:0.9,x:422.7,y:182.5},0).wait(1).to({scaleX:0.88,scaleY:0.93,x:423.6,y:183.7},0).wait(1).to({scaleX:0.91,scaleY:0.96,x:424.5,y:184.9},0).wait(1).to({scaleX:0.93,scaleY:0.99,x:425.3,y:186.1},0).wait(1).to({scaleX:0.96,scaleY:1.02,x:426.2,y:187.3},0).wait(1).to({scaleX:0.99,scaleY:1.05,x:427,y:188.5},0).wait(1).to({scaleX:1.01,scaleY:1.08,x:427.9,y:189.7},0).wait(1).to({scaleX:1.04,scaleY:1.1,x:428.8,y:190.9},0).wait(1).to({scaleX:1.07,scaleY:1.13,x:429.6,y:192.1},0).wait(1).to({scaleX:1.1,scaleY:1.16,x:430.4,y:193.3},0).wait(1).to({scaleX:1.12,scaleY:1.19,x:431.3,y:194.5},0).wait(1).to({scaleX:1.15,scaleY:1.22,x:432.1,y:195.7},0).wait(1).to({scaleX:1.18,scaleY:1.25,x:433,y:197},0).wait(1).to({scaleX:1.21,scaleY:1.28,x:433.9,y:198.2},0).wait(1).to({scaleX:1.23,scaleY:1.31,x:434.7,y:199.4},0).wait(1).to({scaleX:1.26,scaleY:1.34,x:435.5,y:200.6},0).wait(1).to({scaleX:1.29,scaleY:1.36,x:436.4,y:201.8},0).wait(1).to({scaleX:1.31,scaleY:1.39,x:437.3,y:203},0).wait(1).to({scaleX:1.34,scaleY:1.42,x:438.1,y:204.2},0).wait(1).to({scaleX:1.33,scaleY:1.41,x:437.9,y:202.7},0).wait(1).to({scaleX:1.32,scaleY:1.39,x:437.7,y:201.2},0).wait(1).to({scaleX:1.3,scaleY:1.38,x:437.5,y:199.7},0).wait(1).to({scaleX:1.29,scaleY:1.37,x:437.3,y:198.2},0).wait(1).to({scaleX:1.27,scaleY:1.35,x:437.1,y:196.7},0).wait(1).to({scaleX:1.26,scaleY:1.34,x:436.9,y:195.2},0).wait(1).to({scaleX:1.25,scaleY:1.32,x:436.7,y:193.7},0).wait(1).to({scaleX:1.24,scaleY:1.31,x:436.5,y:192.2},0).wait(1).to({scaleX:1.22,scaleY:1.29,x:436.3,y:190.6},0).wait(1).to({scaleX:1.21,scaleY:1.28,x:436.1,y:189.1},0).wait(1).to({scaleX:1.2,scaleY:1.27,x:435.9,y:187.6},0).wait(1).to({scaleX:1.18,scaleY:1.25,x:435.7,y:186.1},0).wait(1).to({scaleX:1.17,scaleY:1.24,x:435.5,y:184.6},0).wait(1).to({scaleX:1.16,scaleY:1.22,x:435.3,y:183.1},0).wait(1).to({scaleX:1.14,scaleY:1.21,x:435.1,y:181.5},0).wait(1).to({scaleX:1.13,scaleY:1.2,x:434.9,y:180},0).wait(1).to({scaleX:1.12,scaleY:1.18,x:434.7,y:178.5},0).wait(1).to({scaleX:1.1,scaleY:1.17,x:434.5,y:177},0).wait(1).to({scaleX:1.09,scaleY:1.15,x:434.3,y:175.5},0).wait(1).to({scaleX:1.08,scaleY:1.14,x:434.1,y:174},0).wait(1).to({scaleX:1.06,scaleY:1.12,x:433.9,y:172.4},0).wait(1).to({scaleX:1.05,scaleY:1.11,x:433.7,y:170.9},0).wait(1).to({regX:16.5,regY:16.2,scaleX:0.52,scaleY:0.56,x:413.2,y:167.1},0).wait(1).to({regX:15.3,regY:17.6,scaleX:0.55,scaleY:0.59,x:413.4,y:169.1},0).wait(1).to({scaleX:0.58,scaleY:0.61,x:414.2,y:170.3},0).wait(1).to({scaleX:0.61,scaleY:0.64,x:415.1,y:171.5},0).wait(1).to({scaleX:0.63,scaleY:0.67,x:415.9,y:172.7},0).wait(1).to({scaleX:0.66,scaleY:0.7,x:416.8,y:174},0).wait(1).to({scaleX:0.69,scaleY:0.73,x:417.6,y:175.2},0).wait(1).to({scaleX:0.72,scaleY:0.76,x:418.5,y:176.4},0).wait(1).to({scaleX:0.74,scaleY:0.79,x:419.3,y:177.6},0).wait(1).to({scaleX:0.77,scaleY:0.82,x:420.2,y:178.8},0).wait(1).to({scaleX:0.8,scaleY:0.85,x:421.1,y:180},0).wait(1).to({scaleX:0.82,scaleY:0.87,x:421.9,y:181.2},0).wait(1).to({scaleX:0.85,scaleY:0.9,x:422.7,y:182.5},0).wait(1).to({scaleX:0.88,scaleY:0.93,x:423.6,y:183.7},0).wait(1).to({scaleX:0.91,scaleY:0.96,x:424.5,y:184.9},0).wait(1).to({scaleX:0.93,scaleY:0.99,x:425.3,y:186.1},0).wait(1).to({scaleX:0.96,scaleY:1.02,x:426.2,y:187.3},0).wait(1).to({scaleX:0.99,scaleY:1.05,x:427,y:188.5},0).wait(1).to({scaleX:1.01,scaleY:1.08,x:427.9,y:189.7},0).wait(1).to({scaleX:1.04,scaleY:1.1,x:428.8,y:190.9},0).wait(1).to({scaleX:1.07,scaleY:1.13,x:429.6,y:192.1},0).wait(1).to({scaleX:1.1,scaleY:1.16,x:430.4,y:193.3},0).wait(1).to({scaleX:1.12,scaleY:1.19,x:431.3,y:194.5},0).wait(1).to({scaleX:1.15,scaleY:1.22,x:432.1,y:195.7},0).wait(1).to({scaleX:1.18,scaleY:1.25,x:433,y:197},0).wait(1).to({scaleX:1.21,scaleY:1.28,x:433.9,y:198.2},0).wait(1).to({scaleX:1.23,scaleY:1.31,x:434.7,y:199.4},0).wait(1).to({scaleX:1.26,scaleY:1.34,x:435.5,y:200.6},0).wait(1).to({scaleX:1.29,scaleY:1.36,x:436.4,y:201.8},0).wait(1).to({scaleX:1.31,scaleY:1.39,x:437.3,y:203},0).wait(1).to({scaleX:1.34,scaleY:1.42,x:438.1,y:204.2},0).wait(1).to({scaleX:1.33,scaleY:1.41,x:437.9,y:202.7},0).wait(1).to({scaleX:1.32,scaleY:1.39,x:437.7,y:201.2},0).wait(1).to({scaleX:1.3,scaleY:1.38,x:437.5,y:199.7},0).wait(1).to({scaleX:1.29,scaleY:1.37,x:437.3,y:198.2},0).wait(1).to({scaleX:1.27,scaleY:1.35,x:437.1,y:196.7},0).wait(1).to({scaleX:1.26,scaleY:1.34,x:436.9,y:195.2},0).wait(1).to({scaleX:1.25,scaleY:1.32,x:436.7,y:193.7},0).wait(1).to({scaleX:1.24,scaleY:1.31,x:436.5,y:192.2},0).wait(1).to({scaleX:1.22,scaleY:1.29,x:436.3,y:190.6},0).wait(1).to({scaleX:1.21,scaleY:1.28,x:436.1,y:189.1},0).wait(1).to({scaleX:1.2,scaleY:1.27,x:435.9,y:187.6},0).wait(1).to({scaleX:1.18,scaleY:1.25,x:435.7,y:186.1},0).wait(1).to({scaleX:1.17,scaleY:1.24,x:435.5,y:184.6},0).wait(1).to({scaleX:1.16,scaleY:1.22,x:435.3,y:183.1},0).wait(1).to({scaleX:1.14,scaleY:1.21,x:435.1,y:181.5},0).wait(1).to({scaleX:1.13,scaleY:1.2,x:434.9,y:180},0).wait(1).to({scaleX:1.12,scaleY:1.18,x:434.7,y:178.5},0).wait(1).to({scaleX:1.1,scaleY:1.17,x:434.5,y:177},0).wait(1).to({scaleX:1.09,scaleY:1.15,x:434.3,y:175.5},0).wait(1).to({scaleX:1.08,scaleY:1.14,x:434.1,y:174},0).wait(1).to({scaleX:1.06,scaleY:1.12,x:433.9,y:172.4},0).wait(1).to({scaleX:1.05,scaleY:1.11,x:433.7,y:170.9},0).wait(1).to({regX:16.5,regY:16.2,scaleX:0.52,scaleY:0.56,x:413.2,y:167.1},0).wait(1).to({regX:15.3,regY:17.6,scaleX:0.55,scaleY:0.59,x:413.4,y:169.1},0).wait(1).to({scaleX:0.58,scaleY:0.61,x:414.2,y:170.3},0).wait(1).to({scaleX:0.61,scaleY:0.64,x:415.1,y:171.5},0).wait(1).to({scaleX:0.63,scaleY:0.67,x:415.9,y:172.7},0).wait(1).to({scaleX:0.66,scaleY:0.7,x:416.8,y:174},0).wait(1).to({scaleX:0.69,scaleY:0.73,x:417.6,y:175.2},0).wait(1).to({scaleX:0.72,scaleY:0.76,x:418.5,y:176.4},0).wait(1).to({scaleX:0.74,scaleY:0.79,x:419.3,y:177.6},0).wait(1).to({scaleX:0.77,scaleY:0.82,x:420.2,y:178.8},0).wait(1).to({scaleX:0.8,scaleY:0.85,x:421.1,y:180},0).wait(1).to({scaleX:0.82,scaleY:0.87,x:421.9,y:181.2},0).wait(1).to({scaleX:0.85,scaleY:0.9,x:422.7,y:182.5},0).wait(1).to({scaleX:0.88,scaleY:0.93,x:423.6,y:183.7},0).wait(1).to({scaleX:0.91,scaleY:0.96,x:424.5,y:184.9},0).wait(1).to({scaleX:0.93,scaleY:0.99,x:425.3,y:186.1},0).wait(1).to({scaleX:0.96,scaleY:1.02,x:426.2,y:187.3},0).wait(1).to({scaleX:0.99,scaleY:1.05,x:427,y:188.5},0).wait(1).to({scaleX:1.01,scaleY:1.08,x:427.9,y:189.7},0).wait(1).to({scaleX:1.04,scaleY:1.1,x:428.8,y:190.9},0).wait(1).to({scaleX:1.07,scaleY:1.13,x:429.6,y:192.1},0).wait(1).to({scaleX:1.1,scaleY:1.16,x:430.4,y:193.3},0).wait(1).to({scaleX:1.12,scaleY:1.19,x:431.3,y:194.5},0).wait(1).to({scaleX:1.15,scaleY:1.22,x:432.1,y:195.7},0).wait(1).to({scaleX:1.18,scaleY:1.25,x:433,y:197},0).wait(1).to({scaleX:1.21,scaleY:1.28,x:433.9,y:198.2},0).wait(1).to({scaleX:1.23,scaleY:1.31,x:434.7,y:199.4},0).wait(1).to({scaleX:1.26,scaleY:1.34,x:435.5,y:200.6},0).wait(1).to({scaleX:1.29,scaleY:1.36,x:436.4,y:201.8},0).wait(1).to({scaleX:1.31,scaleY:1.39,x:437.3,y:203},0).wait(1).to({scaleX:1.34,scaleY:1.42,x:438.1,y:204.2},0).wait(1).to({scaleX:1.33,scaleY:1.41,x:437.9,y:202.7},0).wait(1).to({scaleX:1.32,scaleY:1.39,x:437.7,y:201.2},0).wait(1).to({scaleX:1.3,scaleY:1.38,x:437.5,y:199.7},0).wait(1).to({scaleX:1.29,scaleY:1.37,x:437.3,y:198.2},0).wait(1).to({scaleX:1.27,scaleY:1.35,x:437.1,y:196.7},0).wait(1).to({scaleX:1.26,scaleY:1.34,x:436.9,y:195.2},0).wait(1).to({scaleX:1.25,scaleY:1.32,x:436.7,y:193.7},0).wait(1).to({scaleX:1.24,scaleY:1.31,x:436.5,y:192.2},0).wait(1).to({scaleX:1.22,scaleY:1.29,x:436.3,y:190.6},0).wait(1).to({scaleX:1.21,scaleY:1.28,x:436.1,y:189.1},0).wait(1).to({scaleX:1.2,scaleY:1.27,x:435.9,y:187.6},0).wait(1).to({scaleX:1.18,scaleY:1.25,x:435.7,y:186.1},0).wait(1).to({scaleX:1.17,scaleY:1.24,x:435.5,y:184.6},0).wait(1).to({scaleX:1.16,scaleY:1.22,x:435.3,y:183.1},0).wait(1).to({scaleX:1.14,scaleY:1.21,x:435.1,y:181.5},0).wait(1).to({scaleX:1.13,scaleY:1.2,x:434.9,y:180},0).wait(1).to({scaleX:1.12,scaleY:1.18,x:434.7,y:178.5},0).wait(1).to({scaleX:1.1,scaleY:1.17,x:434.5,y:177},0).wait(1).to({scaleX:1.09,scaleY:1.15,x:434.3,y:175.5},0).wait(1).to({scaleX:1.08,scaleY:1.14,x:434.1,y:174},0).wait(1).to({scaleX:1.06,scaleY:1.12,x:433.9,y:172.4},0).wait(1).to({scaleX:1.05,scaleY:1.11,x:433.7,y:170.9},0).to({_off:true},1).wait(1));

	// C2
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(466.5,166.7,0.655,0.654,0,0,0,15.9,18.4);
	this.instance_3._off = true;

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#4C4C4D").s().p("AAdg3QACACACABIhBBsg");
	this.shape_393.setTransform(493.2,180.1);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#4C4C4D").s().p("Ag/AAICAgCIgBADIAAACg");
	this.shape_394.setTransform(489.4,173.7);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#4C4C4D").s().p("Aggg1QADgBABgCIA9Byg");
	this.shape_395.setTransform(500.3,180);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#4C4C4D").s().p("AhAABIgBgDICDADIiCACg");
	this.shape_396.setTransform(504,173.7);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#4C4C4D").s().p("Aghg4IBDBwIgBAAIgFABg");
	this.shape_397.setTransform(493.3,167.5);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#4C4C4D").s().p("AgiA2IBFhvIhABzQgCgCgDgCg");
	this.shape_398.setTransform(500.3,167.6);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#4C4C4D").s().p("AgDBxIgGAHIgFgEIALgLIgBgHIgJAKIgEgEIAMgPIAAgGIgJALIgFgEIANgQIAAgGIgLANIgFgEIAPgSIACgwIgpAaIgIAXIgGgCIAGgRIgGADIgHAVIgGgCIAFgPIgFACIgHAUIgGgCIAFgOIgGADIgFAQIgGgCIADgKIg5AcIA0gjIgJgBIABgGIAPADIAGgEIgNgDIABgGIATAEIAFgDIgOgDIABgGIAUAEIAGgEIgRgDIABgGIAXAEIArgXIgogVIgZAFIgBgGIASgEIgFgDIgWAEIgBgGIAQgDIgFgDIgVAEIgBgGIAOgDIgFgEIgRADIgBgGIAKgCIg1gjIA5AcIgDgJIAGgCIAFAOIAGADIgFgMIAGgCIAHASIAFADIgFgOIAGgCIAHAUIAGACIgGgQIAGgCIAHAWIApAZIgBgwIgRgTIAFgEIAMAOIABgGIgPgRIAFgEIAKAMIAAgGIgNgQIAFgEIAJALIAAgHIgKgMIAEgEIAHAIIADhAIAEA/IAGgHIAFAEIgKALIAAAHIAJgKIAFAEIgNAPIAAAGIAKgLIAFAEIgOAQIABAGIALgNIAEAEIgPASIgBAxIAngZIAIgXIAFACIgFARIAFgCIAHgVIAGACIgFAPIAGgDIAGgUIAGACIgFAOIAGgDIAGgQIAGACIgEAKIA5gcIg0AjIAJACIgBAGIgPgDIgGAEIANACIgBAGIgTgDIgFADIAOADIgBAGIgUgEIgFADIAQAEIgBAGIgXgFIgqAWIArAXIAYgFIABAGIgSAEIAFADIAWgEIABAGIgPADIAFAEIAUgEIABAGIgOACIAGAEIAQgDIABAGIgKACIA1AjIg4gbIADAIIgGACIgFgOIgGgDIAEAMIgGACIgGgSIgGgCIAFANIgGACIgGgTIgGgDIAFAQIgGACIgHgWIgqgaIACAuIAQATIgFAEIgMgOIAAAGIAOARIgEAEIgLgMIAAAGIAOAQIgFAEIgKgLIAAAHIALAMIgFAEIgHgHIgDA/gAgFgDQgCACAAADQAAAIAHAAQAJAAAAgIQAAgDgCgCQgDgDgEAAQgCAAgDADg");
	this.shape_399.setTransform(496.6,173.7);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#4C4C4D").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgUAaABQAbgBATAUQATATAAAaQAAAbgTATQgTAUgbgBQgaABgTgUgAgrgrQgSATAAAYQAAAaASASQASARAZAAQAZAAATgRQASgSAAgaQAAgYgSgTQgTgSgZAAQgZAAgSASg");
	this.shape_400.setTransform(496.6,173.7);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#4C4C4D").s().p("AgGAIQgDgEAAgEQAAgEADgDQADgCADAAQAEAAADACQADADAAAEQAAAEgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_401.setTransform(494.1,178.4);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#4C4C4D").s().p("AgHAHQgDgDAAgEQAAgDADgDQAEgDADgBQAEABADADQADADAAADQAAAEgDADQgDAEgEAAQgDAAgEgEg");
	this.shape_402.setTransform(499.3,178.2);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#4C4C4D").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgDADAAQAEAAADADQAEADAAADQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_403.setTransform(501.8,173.8);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#4C4C4D").s().p("AgGAIQgEgEAAgEQAAgEAEgDQADgCADAAQAEAAADACQADADABAEQgBAEgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_404.setTransform(499.5,169.4);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#4C4C4D").s().p("AgHAHQgCgDAAgEQAAgDACgDQAEgEADAAQAFAAADAEQACADAAADQAAAEgCADQgDAEgFAAQgDAAgEgEg");
	this.shape_405.setTransform(494.2,169.1);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgEQADgDADAAQAEAAADADQADAEAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_406.setTransform(491.3,173.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},74).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(74).to({_off:false},0).wait(1).to({regX:15.3,regY:17.6,scaleX:0.68,scaleY:0.68,x:467.3,y:166.5},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:468.4,y:166.9},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:469.5,y:167.3},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:470.7,y:167.7},0).wait(1).to({scaleX:0.8,scaleY:0.79,x:471.8,y:168},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:472.9,y:168.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:474,y:168.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:475.2,y:169.1},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:476.3,y:169.5},0).wait(1).to({scaleX:0.94,scaleY:0.93,x:477.4,y:169.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:478.6,y:170.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:479.7,y:170.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:480.9,y:171},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:482,y:171.4},0).wait(1).to({scaleX:1.08,scaleY:1.07,x:483.1,y:171.8},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:484.2,y:172.1},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:485.4,y:172.5},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:486.5,y:172.8},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:487.6,y:173.2},0).wait(1).to({scaleX:1.22,scaleY:1.21,x:488.8,y:173.6},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:489.9,y:174},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:489,y:173.2},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:488.1,y:172.3},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:487.1,y:171.5},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:486.2,y:170.7},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:485.2,y:169.9},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:484.3,y:169},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:483.4,y:168.3},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:482.5,y:167.4},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:481.5,y:166.6},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:480.6,y:165.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:479.7,y:165},0).wait(1).to({scaleX:1.12,scaleY:1.11,x:478.8,y:164.1},0).wait(1).to({scaleX:1.11,scaleY:1.1,x:477.8,y:163.3},0).wait(1).to({scaleX:1.1,scaleY:1.09,x:476.9,y:162.5},0).wait(1).to({scaleX:1.09,scaleY:1.08,x:476,y:161.7},0).wait(1).to({scaleX:1.08,scaleY:1.07,x:475,y:160.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:474.1,y:160.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:473.1,y:159.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:472.2,y:158.4},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:471.3,y:157.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:470.4,y:156.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:469.4,y:155.9},0).wait(1).to({scaleX:1,scaleY:1,x:468.5,y:155.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:467.6,y:154.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:466.7,y:153.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:465.7,y:152.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:464.8,y:151.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:463.8,y:151},0).wait(1).to({scaleX:0.94,scaleY:0.93,x:462.9,y:150.2},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:462,y:149.4},0).wait(1).to({scaleX:0.92,scaleY:0.91,x:461.1,y:148.5},0).wait(1).to({regX:15.9,regY:18.4,scaleX:0.66,scaleY:0.65,x:466.5,y:166.7},0).wait(1).to({regX:15.3,regY:17.6,scaleX:0.68,scaleY:0.68,x:467.3,y:166.5},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:468.4,y:166.9},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:469.5,y:167.3},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:470.7,y:167.7},0).wait(1).to({scaleX:0.8,scaleY:0.79,x:471.8,y:168},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:472.9,y:168.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:474,y:168.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:475.2,y:169.1},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:476.3,y:169.5},0).wait(1).to({scaleX:0.94,scaleY:0.93,x:477.4,y:169.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:478.6,y:170.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:479.7,y:170.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:480.9,y:171},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:482,y:171.4},0).wait(1).to({scaleX:1.08,scaleY:1.07,x:483.1,y:171.8},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:484.2,y:172.1},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:485.4,y:172.5},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:486.5,y:172.8},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:487.6,y:173.2},0).wait(1).to({scaleX:1.22,scaleY:1.21,x:488.8,y:173.6},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:489.9,y:174},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:489,y:173.2},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:488.1,y:172.3},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:487.1,y:171.5},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:486.2,y:170.7},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:485.2,y:169.9},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:484.3,y:169},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:483.4,y:168.3},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:482.5,y:167.4},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:481.5,y:166.6},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:480.6,y:165.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:479.7,y:165},0).wait(1).to({scaleX:1.12,scaleY:1.11,x:478.8,y:164.1},0).wait(1).to({scaleX:1.11,scaleY:1.1,x:477.8,y:163.3},0).wait(1).to({scaleX:1.1,scaleY:1.09,x:476.9,y:162.5},0).wait(1).to({scaleX:1.09,scaleY:1.08,x:476,y:161.7},0).wait(1).to({scaleX:1.08,scaleY:1.07,x:475,y:160.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:474.1,y:160.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:473.1,y:159.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:472.2,y:158.4},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:471.3,y:157.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:470.4,y:156.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:469.4,y:155.9},0).wait(1).to({scaleX:1,scaleY:1,x:468.5,y:155.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:467.6,y:154.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:466.7,y:153.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:465.7,y:152.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:464.8,y:151.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:463.8,y:151},0).wait(1).to({scaleX:0.94,scaleY:0.93,x:462.9,y:150.2},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:462,y:149.4},0).wait(1).to({scaleX:0.92,scaleY:0.91,x:461.1,y:148.5},0).wait(1).to({regX:15.9,regY:18.4,scaleX:0.66,scaleY:0.65,x:466.5,y:166.7},0).wait(1).to({regX:15.3,regY:17.6,scaleX:0.68,scaleY:0.68,x:467.3,y:166.5},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:468.4,y:166.9},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:469.5,y:167.3},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:470.7,y:167.7},0).wait(1).to({scaleX:0.8,scaleY:0.79,x:471.8,y:168},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:472.9,y:168.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:474,y:168.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:475.2,y:169.1},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:476.3,y:169.5},0).wait(1).to({scaleX:0.94,scaleY:0.93,x:477.4,y:169.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:478.6,y:170.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:479.7,y:170.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:480.9,y:171},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:482,y:171.4},0).wait(1).to({scaleX:1.08,scaleY:1.07,x:483.1,y:171.8},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:484.2,y:172.1},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:485.4,y:172.5},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:486.5,y:172.8},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:487.6,y:173.2},0).wait(1).to({scaleX:1.22,scaleY:1.21,x:488.8,y:173.6},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:489.9,y:174},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:489,y:173.2},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:488.1,y:172.3},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:487.1,y:171.5},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:486.2,y:170.7},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:485.2,y:169.9},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:484.3,y:169},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:483.4,y:168.3},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:482.5,y:167.4},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:481.5,y:166.6},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:480.6,y:165.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:479.7,y:165},0).wait(1).to({scaleX:1.12,scaleY:1.11,x:478.8,y:164.1},0).wait(1).to({scaleX:1.11,scaleY:1.1,x:477.8,y:163.3},0).wait(1).to({scaleX:1.1,scaleY:1.09,x:476.9,y:162.5},0).wait(1).to({scaleX:1.09,scaleY:1.08,x:476,y:161.7},0).wait(1).to({scaleX:1.08,scaleY:1.07,x:475,y:160.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:474.1,y:160.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:473.1,y:159.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:472.2,y:158.4},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:471.3,y:157.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:470.4,y:156.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:469.4,y:155.9},0).wait(1).to({scaleX:1,scaleY:1,x:468.5,y:155.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:467.6,y:154.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:466.7,y:153.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:465.7,y:152.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:464.8,y:151.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:463.8,y:151},0).wait(1).to({scaleX:0.94,scaleY:0.93,x:462.9,y:150.2},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:462,y:149.4},0).wait(1).to({scaleX:0.92,scaleY:0.91,x:461.1,y:148.5},0).wait(1).to({regX:15.9,regY:18.4,scaleX:0.66,scaleY:0.65,x:466.5,y:166.7},0).wait(1).to({regX:15.3,regY:17.6,scaleX:0.68,scaleY:0.68,x:467.3,y:166.5},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:468.4,y:166.9},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:469.5,y:167.3},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:470.7,y:167.7},0).wait(1).to({scaleX:0.8,scaleY:0.79,x:471.8,y:168},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:472.9,y:168.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:474,y:168.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:475.2,y:169.1},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:476.3,y:169.5},0).wait(1).to({scaleX:0.94,scaleY:0.93,x:477.4,y:169.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:478.6,y:170.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:479.7,y:170.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:480.9,y:171},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:482,y:171.4},0).wait(1).to({scaleX:1.08,scaleY:1.07,x:483.1,y:171.8},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:484.2,y:172.1},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:485.4,y:172.5},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:486.5,y:172.8},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:487.6,y:173.2},0).wait(1).to({scaleX:1.22,scaleY:1.21,x:488.8,y:173.6},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:489.9,y:174},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:489,y:173.2},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:488.1,y:172.3},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:487.1,y:171.5},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:486.2,y:170.7},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:485.2,y:169.9},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:484.3,y:169},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:483.4,y:168.3},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:482.5,y:167.4},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:481.5,y:166.6},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:480.6,y:165.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:479.7,y:165},0).wait(1).to({scaleX:1.12,scaleY:1.11,x:478.8,y:164.1},0).wait(1).to({scaleX:1.11,scaleY:1.1,x:477.8,y:163.3},0).wait(1).to({scaleX:1.1,scaleY:1.09,x:476.9,y:162.5},0).wait(1).to({scaleX:1.09,scaleY:1.08,x:476,y:161.7},0).wait(1).to({scaleX:1.08,scaleY:1.07,x:475,y:160.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:474.1,y:160.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:473.1,y:159.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:472.2,y:158.4},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:471.3,y:157.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:470.4,y:156.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:469.4,y:155.9},0).wait(1).to({scaleX:1,scaleY:1,x:468.5,y:155.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:467.6,y:154.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:466.7,y:153.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:465.7,y:152.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:464.8,y:151.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:463.8,y:151},0).wait(1).to({scaleX:0.94,scaleY:0.93,x:462.9,y:150.2},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:462,y:149.4},0).wait(1).to({scaleX:0.92,scaleY:0.91,x:461.1,y:148.5},0).wait(1).to({regX:15.9,regY:18.4,scaleX:0.66,scaleY:0.65,x:466.5,y:166.7},0).wait(1).to({regX:15.3,regY:17.6,scaleX:0.68,scaleY:0.68,x:467.3,y:166.5},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:468.4,y:166.9},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:469.5,y:167.3},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:470.7,y:167.7},0).wait(1).to({scaleX:0.8,scaleY:0.79,x:471.8,y:168},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:472.9,y:168.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:474,y:168.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:475.2,y:169.1},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:476.3,y:169.5},0).wait(1).to({scaleX:0.94,scaleY:0.93,x:477.4,y:169.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:478.6,y:170.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:479.7,y:170.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:480.9,y:171},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:482,y:171.4},0).wait(1).to({scaleX:1.08,scaleY:1.07,x:483.1,y:171.8},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:484.2,y:172.1},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:485.4,y:172.5},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:486.5,y:172.8},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:487.6,y:173.2},0).wait(1).to({scaleX:1.22,scaleY:1.21,x:488.8,y:173.6},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:489.9,y:174},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:489,y:173.2},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:488.1,y:172.3},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:487.1,y:171.5},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:486.2,y:170.7},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:485.2,y:169.9},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:484.3,y:169},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:483.4,y:168.3},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:482.5,y:167.4},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:481.5,y:166.6},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:480.6,y:165.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:479.7,y:165},0).wait(1).to({scaleX:1.12,scaleY:1.11,x:478.8,y:164.1},0).wait(1).to({scaleX:1.11,scaleY:1.1,x:477.8,y:163.3},0).wait(1).to({scaleX:1.1,scaleY:1.09,x:476.9,y:162.5},0).wait(1).to({scaleX:1.09,scaleY:1.08,x:476,y:161.7},0).wait(1).to({scaleX:1.08,scaleY:1.07,x:475,y:160.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:474.1,y:160.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:473.1,y:159.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:472.2,y:158.4},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:471.3,y:157.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:470.4,y:156.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:469.4,y:155.9},0).wait(1).to({scaleX:1,scaleY:1,x:468.5,y:155.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:467.6,y:154.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:466.7,y:153.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:465.7,y:152.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:464.8,y:151.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:463.8,y:151},0).wait(1).to({scaleX:0.94,scaleY:0.93,x:462.9,y:150.2},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:462,y:149.4},0).wait(1).to({scaleX:0.92,scaleY:0.91,x:461.1,y:148.5},0).wait(1).to({regX:15.9,regY:18.4,scaleX:0.66,scaleY:0.65,x:466.5,y:166.7},0).wait(1).to({regX:15.3,regY:17.6,scaleX:0.68,scaleY:0.68,x:467.3,y:166.5},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:468.4,y:166.9},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:469.5,y:167.3},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:470.7,y:167.7},0).wait(1).to({scaleX:0.8,scaleY:0.79,x:471.8,y:168},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:472.9,y:168.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:474,y:168.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:475.2,y:169.1},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:476.3,y:169.5},0).wait(1).to({scaleX:0.94,scaleY:0.93,x:477.4,y:169.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:478.6,y:170.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:479.7,y:170.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:480.9,y:171},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:482,y:171.4},0).wait(1).to({scaleX:1.08,scaleY:1.07,x:483.1,y:171.8},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:484.2,y:172.1},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:485.4,y:172.5},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:486.5,y:172.8},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:487.6,y:173.2},0).wait(1).to({scaleX:1.22,scaleY:1.21,x:488.8,y:173.6},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:489.9,y:174},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:489,y:173.2},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:488.1,y:172.3},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:487.1,y:171.5},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:486.2,y:170.7},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:485.2,y:169.9},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:484.3,y:169},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:483.4,y:168.3},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:482.5,y:167.4},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:481.5,y:166.6},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:480.6,y:165.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:479.7,y:165},0).wait(1).to({scaleX:1.12,scaleY:1.11,x:478.8,y:164.1},0).wait(1).to({scaleX:1.11,scaleY:1.1,x:477.8,y:163.3},0).wait(1).to({scaleX:1.1,scaleY:1.09,x:476.9,y:162.5},0).wait(1).to({scaleX:1.09,scaleY:1.08,x:476,y:161.7},0).wait(1).to({scaleX:1.08,scaleY:1.07,x:475,y:160.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:474.1,y:160.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:473.1,y:159.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:472.2,y:158.4},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:471.3,y:157.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:470.4,y:156.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:469.4,y:155.9},0).wait(1).to({scaleX:1,scaleY:1,x:468.5,y:155.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:467.6,y:154.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:466.7,y:153.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:465.7,y:152.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:464.8,y:151.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:463.8,y:151},0).wait(1).to({scaleX:0.94,scaleY:0.93,x:462.9,y:150.2},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:462,y:149.4},0).wait(1).to({scaleX:0.92,scaleY:0.91,x:461.1,y:148.5},0).wait(1).to({regX:15.9,regY:18.4,scaleX:0.66,scaleY:0.65,x:466.5,y:166.7},0).wait(1).to({regX:15.3,regY:17.6,scaleX:0.68,scaleY:0.68,x:467.3,y:166.5},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:468.4,y:166.9},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:469.5,y:167.3},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:470.7,y:167.7},0).wait(1).to({scaleX:0.8,scaleY:0.79,x:471.8,y:168},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:472.9,y:168.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:474,y:168.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:475.2,y:169.1},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:476.3,y:169.5},0).wait(1).to({scaleX:0.94,scaleY:0.93,x:477.4,y:169.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:478.6,y:170.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:479.7,y:170.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:480.9,y:171},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:482,y:171.4},0).wait(1).to({scaleX:1.08,scaleY:1.07,x:483.1,y:171.8},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:484.2,y:172.1},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:485.4,y:172.5},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:486.5,y:172.8},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:487.6,y:173.2},0).wait(1).to({scaleX:1.22,scaleY:1.21,x:488.8,y:173.6},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:489.9,y:174},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:489,y:173.2},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:488.1,y:172.3},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:487.1,y:171.5},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:486.2,y:170.7},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:485.2,y:169.9},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:484.3,y:169},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:483.4,y:168.3},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:482.5,y:167.4},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:481.5,y:166.6},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:480.6,y:165.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:479.7,y:165},0).wait(1).to({scaleX:1.12,scaleY:1.11,x:478.8,y:164.1},0).wait(1).to({scaleX:1.11,scaleY:1.1,x:477.8,y:163.3},0).wait(1).to({scaleX:1.1,scaleY:1.09,x:476.9,y:162.5},0).wait(1).to({scaleX:1.09,scaleY:1.08,x:476,y:161.7},0).wait(1).to({scaleX:1.08,scaleY:1.07,x:475,y:160.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:474.1,y:160.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:473.1,y:159.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:472.2,y:158.4},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:471.3,y:157.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:470.4,y:156.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:469.4,y:155.9},0).wait(1).to({scaleX:1,scaleY:1,x:468.5,y:155.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:467.6,y:154.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:466.7,y:153.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:465.7,y:152.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:464.8,y:151.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:463.8,y:151},0).wait(1).to({scaleX:0.94,scaleY:0.93,x:462.9,y:150.2},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:462,y:149.4},0).wait(1).to({scaleX:0.92,scaleY:0.91,x:461.1,y:148.5},0).to({_off:true},1).wait(1));

	// C3
	this.instance_4 = new lib.Symbol4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(497.8,116.5,0.327,0.326,0,0,0,16.1,18.1);
	this.instance_4._off = true;

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#4C4C4D").s().p("AAdg3QABACAEABIhDBsg");
	this.shape_407.setTransform(504.4,134.5);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#4C4C4D").s().p("AhAAAICAgCIgBADIAAACg");
	this.shape_408.setTransform(500.7,128.2);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#4C4C4D").s().p("Aggg1QACAAACgDIA9Bxg");
	this.shape_409.setTransform(511.6,134.5);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#4C4C4D").s().p("AhAABIgBgDICDADIiCACg");
	this.shape_410.setTransform(515.3,128.2);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#4C4C4D").s().p("Aggg4IBBBwIAAAAIgFABg");
	this.shape_411.setTransform(504.6,121.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#4C4C4D").s().p("AgiA2IBFhvIhABzQgCgDgDgBg");
	this.shape_412.setTransform(511.6,122.1);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#4C4C4D").s().p("AgDByIgGAGIgFgEIAKgLIAAgHIgJAKIgFgEIANgPIAAgGIgKALIgEgEIANgQIAAgGIgLANIgFgEIAPgRIABgxIgoAaIgIAYIgGgCIAGgSIgGADIgHAUIgGgBIAFgQIgFAEIgHATIgGgCIAFgOIgGADIgGAQIgGgCIAEgJIg5AbIA0gjIgJgBIABgHIAPAEIAGgFIgNgCIABgGIATAEIAFgEIgOgCIABgHIAUAFIAFgEIgQgDIABgHIAXAFIArgXIgpgUIgYAEIgBgGIASgEIgFgDIgWAEIgBgGIAPgDIgFgDIgUADIgBgFIAOgDIgGgEIgQADIgBgGIAKgCIg1gjIA4AcIgDgJIAGgCIAFAOIAGADIgEgMIAGgCIAGASIAGADIgFgOIAGgCIAHATIAFAEIgFgRIAGgBIAHAVIApAZIgCgwIgQgSIAFgFIAMAOIAAgGIgOgRIAEgEIALAMIAAgGIgNgPIAEgFIAKALIAAgGIgLgNIAFgEIAHAIIADg/IAEA9IAGgGIAFAEIgKALIAAAHIAJgKIAFAEIgNAPIAAAGIAKgLIAEAEIgNAQIAAAGIALgNIAFAEIgPARIgBAyIAmgZIAIgXIAGACIgGASIAGgEIAHgVIAGACIgFAPIAFgCIAHgTIAGACIgFANIAGgDIAGgQIAFACIgDAKIA5gcIg0AjIAJABIgBAHIgPgDIgGADIANADIgBAGIgTgDIgFADIAOACIgBAGIgUgDIgGADIARADIgBAGIgXgDIgqAVIAqAXIAZgFIABAHIgSADIAFAEIAWgFIABAGIgPADIAFAEIAUgFIABAHIgOACIAGAEIAQgDIABAGIgKACIA1AjIg5gbIADAJIgFABIgFgOIgHgDIAFANIgGACIgGgTIgGgDIAFAOIgGACIgHgUIgFgCIAFAQIgGACIgHgWIgqgaIACAuIAQATIgFAEIgMgOIAAAGIAOARIgEAEIgLgMIAAAGIANAQIgEAEIgKgLIAAAHIALAMIgFAEIgHgHIgEA/gAgHACQAAAIAHAAQAEABACgDQADgDAAgDQAAgIgJAAQgHAAAAAIg");
	this.shape_413.setTransform(507.9,128.2);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#4C4C4D").s().p("AgtAuQgTgTgBgbQABgaATgTQATgTAaAAQAbAAAUATQASATABAaQgBAbgSATQgUATgbAAQgaAAgTgTgAgqgrQgTASAAAZQAAAaATASQARASAZAAQAZAAATgSQASgSAAgaQAAgZgSgSQgTgSgZAAQgZAAgRASg");
	this.shape_414.setTransform(507.9,128.2);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#4C4C4D").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgDADAAQAEAAADADQAEADAAADQAAAFgEADQgDADgEAAQgDAAgDgDg");
	this.shape_415.setTransform(505.4,132.8);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgEADAAQAEAAADAEQADADAAADQAAAEgDADQgDAEgEAAQgDAAgDgEg");
	this.shape_416.setTransform(510.5,132.6);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#4C4C4D").s().p("AgGAIQgDgDAAgFQAAgDADgEQADgDADAAQAEAAADADQADAEAAADQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_417.setTransform(513.1,128.3);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#4C4C4D").s().p("AgGAIQgDgDAAgFQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_418.setTransform(510.7,123.8);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_419.setTransform(505.5,123.5);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#4C4C4D").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgDADAAQAEAAADADQADADABADQgBAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_420.setTransform(502.6,128.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},74).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(74).to({_off:false},0).wait(1).to({regX:15.3,regY:17.5,scaleX:0.36,scaleY:0.36,x:498.6,y:118.6},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:499.6,y:120.8},0).wait(1).to({scaleX:0.43,scaleY:0.42,x:500.6,y:123},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:501.6,y:125.3},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:502.6,y:127.5},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:503.6,y:129.8},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:504.6,y:132},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:505.7,y:134.3},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:506.7,y:136.5},0).wait(1).to({scaleX:0.66,scaleY:0.65,x:507.7,y:138.7},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:508.7,y:141},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:509.7,y:143.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:510.7,y:145.5},0).wait(1).to({scaleX:0.79,scaleY:0.78,x:511.7,y:147.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:512.8,y:150},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:513.8,y:152.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:514.8,y:154.5},0).wait(1).to({scaleX:0.92,scaleY:0.91,x:515.9,y:156.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:516.9,y:159},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:517.9,y:161.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:518.9,y:163.4},0).wait(1).to({scaleX:1.05,scaleY:1.04,x:519.9,y:165.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:520.9,y:167.9},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:521.9,y:170.2},0).wait(1).to({scaleX:1.15,scaleY:1.14,x:523,y:172.4},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:524,y:174.7},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:525,y:176.9},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:526,y:179.2},0).wait(1).to({scaleX:1.28,scaleY:1.27,x:527,y:181.4},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:528,y:183.7},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:529,y:185.9},0).wait(1).to({scaleX:1.38,scaleY:1.37,x:530.1,y:188.2},0).wait(1).to({scaleX:1.41,scaleY:1.4,x:531.1,y:190.4},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:532.1,y:192.7},0).wait(1).to({scaleX:1.42,scaleY:1.41,x:530.4,y:188.6},0).wait(1).to({scaleX:1.4,scaleY:1.39,x:528.8,y:184.5},0).wait(1).to({scaleX:1.38,scaleY:1.37,x:527.1,y:180.5},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:525.5,y:176.4},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:523.8,y:172.4},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:522.2,y:168.3},0).wait(1).to({scaleX:1.29,scaleY:1.28,x:520.5,y:164.2},0).wait(1).to({scaleX:1.27,scaleY:1.26,x:518.9,y:160.2},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:517.3,y:156.1},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:515.6,y:152},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:513.9,y:148},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:512.3,y:143.9},0).wait(1).to({scaleX:1.16,scaleY:1.15,x:510.7,y:139.9},0).wait(1).to({scaleX:1.14,scaleY:1.13,x:509,y:135.8},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:507.4,y:131.7},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:505.7,y:127.7},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:504.1,y:123.6},0).wait(1).to({scaleX:1.05,scaleY:1.04,x:502.4,y:119.5},0).wait(1).to({regX:16.1,regY:18.1,scaleX:0.33,scaleY:0.33,x:497.8,y:116.5},0).wait(1).to({regX:15.3,regY:17.5,scaleX:0.36,scaleY:0.36,x:498.6,y:118.6},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:499.6,y:120.8},0).wait(1).to({scaleX:0.43,scaleY:0.42,x:500.6,y:123},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:501.6,y:125.3},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:502.6,y:127.5},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:503.6,y:129.8},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:504.6,y:132},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:505.7,y:134.3},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:506.7,y:136.5},0).wait(1).to({scaleX:0.66,scaleY:0.65,x:507.7,y:138.7},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:508.7,y:141},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:509.7,y:143.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:510.7,y:145.5},0).wait(1).to({scaleX:0.79,scaleY:0.78,x:511.7,y:147.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:512.8,y:150},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:513.8,y:152.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:514.8,y:154.5},0).wait(1).to({scaleX:0.92,scaleY:0.91,x:515.9,y:156.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:516.9,y:159},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:517.9,y:161.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:518.9,y:163.4},0).wait(1).to({scaleX:1.05,scaleY:1.04,x:519.9,y:165.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:520.9,y:167.9},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:521.9,y:170.2},0).wait(1).to({scaleX:1.15,scaleY:1.14,x:523,y:172.4},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:524,y:174.7},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:525,y:176.9},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:526,y:179.2},0).wait(1).to({scaleX:1.28,scaleY:1.27,x:527,y:181.4},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:528,y:183.7},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:529,y:185.9},0).wait(1).to({scaleX:1.38,scaleY:1.37,x:530.1,y:188.2},0).wait(1).to({scaleX:1.41,scaleY:1.4,x:531.1,y:190.4},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:532.1,y:192.7},0).wait(1).to({scaleX:1.42,scaleY:1.41,x:530.4,y:188.6},0).wait(1).to({scaleX:1.4,scaleY:1.39,x:528.8,y:184.5},0).wait(1).to({scaleX:1.38,scaleY:1.37,x:527.1,y:180.5},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:525.5,y:176.4},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:523.8,y:172.4},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:522.2,y:168.3},0).wait(1).to({scaleX:1.29,scaleY:1.28,x:520.5,y:164.2},0).wait(1).to({scaleX:1.27,scaleY:1.26,x:518.9,y:160.2},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:517.3,y:156.1},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:515.6,y:152},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:513.9,y:148},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:512.3,y:143.9},0).wait(1).to({scaleX:1.16,scaleY:1.15,x:510.7,y:139.9},0).wait(1).to({scaleX:1.14,scaleY:1.13,x:509,y:135.8},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:507.4,y:131.7},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:505.7,y:127.7},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:504.1,y:123.6},0).wait(1).to({scaleX:1.05,scaleY:1.04,x:502.4,y:119.5},0).wait(1).to({regX:16.1,regY:18.1,scaleX:0.33,scaleY:0.33,x:497.8,y:116.5},0).wait(1).to({regX:15.3,regY:17.5,scaleX:0.36,scaleY:0.36,x:498.6,y:118.6},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:499.6,y:120.8},0).wait(1).to({scaleX:0.43,scaleY:0.42,x:500.6,y:123},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:501.6,y:125.3},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:502.6,y:127.5},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:503.6,y:129.8},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:504.6,y:132},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:505.7,y:134.3},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:506.7,y:136.5},0).wait(1).to({scaleX:0.66,scaleY:0.65,x:507.7,y:138.7},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:508.7,y:141},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:509.7,y:143.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:510.7,y:145.5},0).wait(1).to({scaleX:0.79,scaleY:0.78,x:511.7,y:147.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:512.8,y:150},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:513.8,y:152.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:514.8,y:154.5},0).wait(1).to({scaleX:0.92,scaleY:0.91,x:515.9,y:156.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:516.9,y:159},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:517.9,y:161.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:518.9,y:163.4},0).wait(1).to({scaleX:1.05,scaleY:1.04,x:519.9,y:165.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:520.9,y:167.9},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:521.9,y:170.2},0).wait(1).to({scaleX:1.15,scaleY:1.14,x:523,y:172.4},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:524,y:174.7},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:525,y:176.9},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:526,y:179.2},0).wait(1).to({scaleX:1.28,scaleY:1.27,x:527,y:181.4},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:528,y:183.7},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:529,y:185.9},0).wait(1).to({scaleX:1.38,scaleY:1.37,x:530.1,y:188.2},0).wait(1).to({scaleX:1.41,scaleY:1.4,x:531.1,y:190.4},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:532.1,y:192.7},0).wait(1).to({scaleX:1.42,scaleY:1.41,x:530.4,y:188.6},0).wait(1).to({scaleX:1.4,scaleY:1.39,x:528.8,y:184.5},0).wait(1).to({scaleX:1.38,scaleY:1.37,x:527.1,y:180.5},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:525.5,y:176.4},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:523.8,y:172.4},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:522.2,y:168.3},0).wait(1).to({scaleX:1.29,scaleY:1.28,x:520.5,y:164.2},0).wait(1).to({scaleX:1.27,scaleY:1.26,x:518.9,y:160.2},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:517.3,y:156.1},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:515.6,y:152},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:513.9,y:148},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:512.3,y:143.9},0).wait(1).to({scaleX:1.16,scaleY:1.15,x:510.7,y:139.9},0).wait(1).to({scaleX:1.14,scaleY:1.13,x:509,y:135.8},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:507.4,y:131.7},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:505.7,y:127.7},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:504.1,y:123.6},0).wait(1).to({scaleX:1.05,scaleY:1.04,x:502.4,y:119.5},0).wait(1).to({regX:16.1,regY:18.1,scaleX:0.33,scaleY:0.33,x:497.8,y:116.5},0).wait(1).to({regX:15.3,regY:17.5,scaleX:0.36,scaleY:0.36,x:498.6,y:118.6},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:499.6,y:120.8},0).wait(1).to({scaleX:0.43,scaleY:0.42,x:500.6,y:123},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:501.6,y:125.3},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:502.6,y:127.5},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:503.6,y:129.8},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:504.6,y:132},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:505.7,y:134.3},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:506.7,y:136.5},0).wait(1).to({scaleX:0.66,scaleY:0.65,x:507.7,y:138.7},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:508.7,y:141},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:509.7,y:143.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:510.7,y:145.5},0).wait(1).to({scaleX:0.79,scaleY:0.78,x:511.7,y:147.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:512.8,y:150},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:513.8,y:152.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:514.8,y:154.5},0).wait(1).to({scaleX:0.92,scaleY:0.91,x:515.9,y:156.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:516.9,y:159},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:517.9,y:161.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:518.9,y:163.4},0).wait(1).to({scaleX:1.05,scaleY:1.04,x:519.9,y:165.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:520.9,y:167.9},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:521.9,y:170.2},0).wait(1).to({scaleX:1.15,scaleY:1.14,x:523,y:172.4},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:524,y:174.7},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:525,y:176.9},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:526,y:179.2},0).wait(1).to({scaleX:1.28,scaleY:1.27,x:527,y:181.4},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:528,y:183.7},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:529,y:185.9},0).wait(1).to({scaleX:1.38,scaleY:1.37,x:530.1,y:188.2},0).wait(1).to({scaleX:1.41,scaleY:1.4,x:531.1,y:190.4},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:532.1,y:192.7},0).wait(1).to({scaleX:1.42,scaleY:1.41,x:530.4,y:188.6},0).wait(1).to({scaleX:1.4,scaleY:1.39,x:528.8,y:184.5},0).wait(1).to({scaleX:1.38,scaleY:1.37,x:527.1,y:180.5},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:525.5,y:176.4},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:523.8,y:172.4},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:522.2,y:168.3},0).wait(1).to({scaleX:1.29,scaleY:1.28,x:520.5,y:164.2},0).wait(1).to({scaleX:1.27,scaleY:1.26,x:518.9,y:160.2},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:517.3,y:156.1},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:515.6,y:152},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:513.9,y:148},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:512.3,y:143.9},0).wait(1).to({scaleX:1.16,scaleY:1.15,x:510.7,y:139.9},0).wait(1).to({scaleX:1.14,scaleY:1.13,x:509,y:135.8},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:507.4,y:131.7},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:505.7,y:127.7},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:504.1,y:123.6},0).wait(1).to({scaleX:1.05,scaleY:1.04,x:502.4,y:119.5},0).wait(1).to({regX:16.1,regY:18.1,scaleX:0.33,scaleY:0.33,x:497.8,y:116.5},0).wait(1).to({regX:15.3,regY:17.5,scaleX:0.36,scaleY:0.36,x:498.6,y:118.6},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:499.6,y:120.8},0).wait(1).to({scaleX:0.43,scaleY:0.42,x:500.6,y:123},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:501.6,y:125.3},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:502.6,y:127.5},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:503.6,y:129.8},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:504.6,y:132},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:505.7,y:134.3},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:506.7,y:136.5},0).wait(1).to({scaleX:0.66,scaleY:0.65,x:507.7,y:138.7},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:508.7,y:141},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:509.7,y:143.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:510.7,y:145.5},0).wait(1).to({scaleX:0.79,scaleY:0.78,x:511.7,y:147.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:512.8,y:150},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:513.8,y:152.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:514.8,y:154.5},0).wait(1).to({scaleX:0.92,scaleY:0.91,x:515.9,y:156.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:516.9,y:159},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:517.9,y:161.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:518.9,y:163.4},0).wait(1).to({scaleX:1.05,scaleY:1.04,x:519.9,y:165.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:520.9,y:167.9},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:521.9,y:170.2},0).wait(1).to({scaleX:1.15,scaleY:1.14,x:523,y:172.4},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:524,y:174.7},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:525,y:176.9},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:526,y:179.2},0).wait(1).to({scaleX:1.28,scaleY:1.27,x:527,y:181.4},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:528,y:183.7},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:529,y:185.9},0).wait(1).to({scaleX:1.38,scaleY:1.37,x:530.1,y:188.2},0).wait(1).to({scaleX:1.41,scaleY:1.4,x:531.1,y:190.4},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:532.1,y:192.7},0).wait(1).to({scaleX:1.42,scaleY:1.41,x:530.4,y:188.6},0).wait(1).to({scaleX:1.4,scaleY:1.39,x:528.8,y:184.5},0).wait(1).to({scaleX:1.38,scaleY:1.37,x:527.1,y:180.5},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:525.5,y:176.4},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:523.8,y:172.4},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:522.2,y:168.3},0).wait(1).to({scaleX:1.29,scaleY:1.28,x:520.5,y:164.2},0).wait(1).to({scaleX:1.27,scaleY:1.26,x:518.9,y:160.2},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:517.3,y:156.1},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:515.6,y:152},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:513.9,y:148},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:512.3,y:143.9},0).wait(1).to({scaleX:1.16,scaleY:1.15,x:510.7,y:139.9},0).wait(1).to({scaleX:1.14,scaleY:1.13,x:509,y:135.8},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:507.4,y:131.7},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:505.7,y:127.7},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:504.1,y:123.6},0).wait(1).to({scaleX:1.05,scaleY:1.04,x:502.4,y:119.5},0).wait(1).to({regX:16.1,regY:18.1,scaleX:0.33,scaleY:0.33,x:497.8,y:116.5},0).wait(1).to({regX:15.3,regY:17.5,scaleX:0.36,scaleY:0.36,x:498.6,y:118.6},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:499.6,y:120.8},0).wait(1).to({scaleX:0.43,scaleY:0.42,x:500.6,y:123},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:501.6,y:125.3},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:502.6,y:127.5},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:503.6,y:129.8},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:504.6,y:132},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:505.7,y:134.3},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:506.7,y:136.5},0).wait(1).to({scaleX:0.66,scaleY:0.65,x:507.7,y:138.7},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:508.7,y:141},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:509.7,y:143.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:510.7,y:145.5},0).wait(1).to({scaleX:0.79,scaleY:0.78,x:511.7,y:147.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:512.8,y:150},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:513.8,y:152.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:514.8,y:154.5},0).wait(1).to({scaleX:0.92,scaleY:0.91,x:515.9,y:156.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:516.9,y:159},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:517.9,y:161.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:518.9,y:163.4},0).wait(1).to({scaleX:1.05,scaleY:1.04,x:519.9,y:165.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:520.9,y:167.9},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:521.9,y:170.2},0).wait(1).to({scaleX:1.15,scaleY:1.14,x:523,y:172.4},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:524,y:174.7},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:525,y:176.9},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:526,y:179.2},0).wait(1).to({scaleX:1.28,scaleY:1.27,x:527,y:181.4},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:528,y:183.7},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:529,y:185.9},0).wait(1).to({scaleX:1.38,scaleY:1.37,x:530.1,y:188.2},0).wait(1).to({scaleX:1.41,scaleY:1.4,x:531.1,y:190.4},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:532.1,y:192.7},0).wait(1).to({scaleX:1.42,scaleY:1.41,x:530.4,y:188.6},0).wait(1).to({scaleX:1.4,scaleY:1.39,x:528.8,y:184.5},0).wait(1).to({scaleX:1.38,scaleY:1.37,x:527.1,y:180.5},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:525.5,y:176.4},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:523.8,y:172.4},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:522.2,y:168.3},0).wait(1).to({scaleX:1.29,scaleY:1.28,x:520.5,y:164.2},0).wait(1).to({scaleX:1.27,scaleY:1.26,x:518.9,y:160.2},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:517.3,y:156.1},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:515.6,y:152},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:513.9,y:148},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:512.3,y:143.9},0).wait(1).to({scaleX:1.16,scaleY:1.15,x:510.7,y:139.9},0).wait(1).to({scaleX:1.14,scaleY:1.13,x:509,y:135.8},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:507.4,y:131.7},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:505.7,y:127.7},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:504.1,y:123.6},0).wait(1).to({scaleX:1.05,scaleY:1.04,x:502.4,y:119.5},0).wait(1).to({regX:16.1,regY:18.1,scaleX:0.33,scaleY:0.33,x:497.8,y:116.5},0).wait(1).to({regX:15.3,regY:17.5,scaleX:0.36,scaleY:0.36,x:498.6,y:118.6},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:499.6,y:120.8},0).wait(1).to({scaleX:0.43,scaleY:0.42,x:500.6,y:123},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:501.6,y:125.3},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:502.6,y:127.5},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:503.6,y:129.8},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:504.6,y:132},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:505.7,y:134.3},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:506.7,y:136.5},0).wait(1).to({scaleX:0.66,scaleY:0.65,x:507.7,y:138.7},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:508.7,y:141},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:509.7,y:143.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:510.7,y:145.5},0).wait(1).to({scaleX:0.79,scaleY:0.78,x:511.7,y:147.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:512.8,y:150},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:513.8,y:152.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:514.8,y:154.5},0).wait(1).to({scaleX:0.92,scaleY:0.91,x:515.9,y:156.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:516.9,y:159},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:517.9,y:161.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:518.9,y:163.4},0).wait(1).to({scaleX:1.05,scaleY:1.04,x:519.9,y:165.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:520.9,y:167.9},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:521.9,y:170.2},0).wait(1).to({scaleX:1.15,scaleY:1.14,x:523,y:172.4},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:524,y:174.7},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:525,y:176.9},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:526,y:179.2},0).wait(1).to({scaleX:1.28,scaleY:1.27,x:527,y:181.4},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:528,y:183.7},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:529,y:185.9},0).wait(1).to({scaleX:1.38,scaleY:1.37,x:530.1,y:188.2},0).wait(1).to({scaleX:1.41,scaleY:1.4,x:531.1,y:190.4},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:532.1,y:192.7},0).wait(1).to({scaleX:1.42,scaleY:1.41,x:530.4,y:188.6},0).wait(1).to({scaleX:1.4,scaleY:1.39,x:528.8,y:184.5},0).wait(1).to({scaleX:1.38,scaleY:1.37,x:527.1,y:180.5},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:525.5,y:176.4},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:523.8,y:172.4},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:522.2,y:168.3},0).wait(1).to({scaleX:1.29,scaleY:1.28,x:520.5,y:164.2},0).wait(1).to({scaleX:1.27,scaleY:1.26,x:518.9,y:160.2},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:517.3,y:156.1},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:515.6,y:152},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:513.9,y:148},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:512.3,y:143.9},0).wait(1).to({scaleX:1.16,scaleY:1.15,x:510.7,y:139.9},0).wait(1).to({scaleX:1.14,scaleY:1.13,x:509,y:135.8},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:507.4,y:131.7},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:505.7,y:127.7},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:504.1,y:123.6},0).wait(1).to({scaleX:1.05,scaleY:1.04,x:502.4,y:119.5},0).to({_off:true},1).wait(1));

	// Layer 10
	this.instance_5 = new lib.Symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(663.5,225.9,1,1,0,0,0,15.3,17.6);
	this.instance_5._off = true;

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#4C4C4D").s().p("AAcg3QADADACAAIhBBsg");
	this.shape_421.setTransform(660,232.2);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#4C4C4D").s().p("AhAAAICBgCIgBADIAAACg");
	this.shape_422.setTransform(656.3,225.9);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#4C4C4D").s().p("Aggg0QADgCABgDIA9Byg");
	this.shape_423.setTransform(667.1,232.2);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#4C4C4D").s().p("AhAABQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAgBICDADIiCACg");
	this.shape_424.setTransform(670.8,225.9);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#4C4C4D").s().p("Aghg4IBDBvIgBAAIgFACg");
	this.shape_425.setTransform(660.2,219.6);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#4C4C4D").s().p("AghA3IBEhwIhAByQgBgCgDAAg");
	this.shape_426.setTransform(667.2,219.8);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#4C4C4D").s().p("AgDBxIgGAHIgFgEIALgLIgBgHIgJAKIgEgEIAMgPIAAgGIgKALIgEgEIANgQIAAgGIgLANIgFgEIAPgSIACgwIgpAaIgIAXIgGgCIAGgRIgGADIgHAVIgGgCIAFgPIgFACIgHAUIgGgCIAFgOIgGADIgFAQIgGgCIADgKIg5AcIA0gjIgJgBIABgGIAPACIAGgDIgNgDIABgGIATAEIAFgEIgOgCIABgGIAUAEIAGgEIgRgDIABgGIAXAEIArgXIgogVIgZAFIgBgGIASgEIgFgDIgWAEIgBgGIAQgDIgFgDIgVAEIgBgGIAOgDIgFgEIgRADIgBgGIAKgCIg1gjIA5AbIgDgIIAGgCIAFAOIAGADIgFgMIAGgCIAHASIAFADIgFgOIAGgCIAHAUIAFACIgFgQIAGgCIAHAWIApAZIgBgwIgRgTIAFgEIAMAOIABgGIgPgRIAFgEIAKAMIAAgGIgNgQIAFgEIAJALIAAgHIgKgMIAEgEIAHAHIADg/IAEA/IAGgHIAFAEIgKALIAAAHIAJgKIAFAEIgNAPIAAAGIAKgLIAFAEIgOAQIABAGIALgNIAEAEIgPASIgBAxIAngZIAIgXIAFACIgFARIAFgDIAHgUIAGACIgFAPIAGgDIAGgUIAGACIgFAOIAGgDIAGgQIAGACIgEAKIA5gcIg0AjIAJACIgBAGIgPgDIgGAEIANACIgBAGIgTgEIgFAEIAOADIgBAGIgUgEIgFADIAQAEIgBAGIgXgFIgqAWIArAXIAYgFIABAGIgSAEIAFADIAWgEIABAGIgPADIAFAEIAUgEIABAGIgOACIAGAEIAQgDIABAGIgKACIA1AjIg4gbIADAIIgGACIgFgOIgGgDIAEAMIgGACIgGgSIgGgDIAFAOIgGACIgGgTIgGgDIAFAQIgGACIgHgWIgqgaIACAuIAQATIgFAEIgMgOIAAAGIAOARIgEAEIgLgMIAAAGIAOAQIgFAEIgKgLIAAAHIALAMIgFAEIgHgIIgDBAgAgFgDQgCACAAADQAAAIAHAAQAJAAAAgIQAAgDgCgCQgDgDgEAAQgCAAgDADg");
	this.shape_427.setTransform(663.4,225.8);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#4C4C4D").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTgAgrgqQgSASAAAYQAAAaASASQASASAZAAQAZAAATgSQASgSAAgaQAAgYgSgSQgTgTgZAAQgZAAgSATg");
	this.shape_428.setTransform(663.4,225.8);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_429.setTransform(661,230.5);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#4C4C4D").s().p("AgHAHQgCgDAAgEQAAgDACgDQADgDAEAAQAEAAAEADQACADAAADQAAAEgCADQgEADgEAAQgEAAgDgDg");
	this.shape_430.setTransform(666.1,230.3);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#4C4C4D").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgDADAAQAEAAADADQADADABADQgBAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_431.setTransform(668.7,225.9);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#4C4C4D").s().p("AgHAHQgDgDAAgEQAAgDADgDQADgDAEAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_432.setTransform(666.3,221.5);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#4C4C4D").s().p("AgHAIQgCgEAAgEQAAgEACgDQAEgCADAAQAFAAADACQACADAAAEQAAAEgCAEQgEACgEAAQgDAAgEgCg");
	this.shape_433.setTransform(661.1,221.2);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADgBQAEABADADQADADAAADQAAAEgDADQgDAEgEAAQgDAAgDgEg");
	this.shape_434.setTransform(658.2,225.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},180).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421}]},1).to({state:[{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(180).to({_off:false},0).wait(1).to({x:661.6,y:221.8},0).wait(1).to({x:659.6,y:217.8},0).wait(1).to({x:657.6,y:213.9},0).wait(1).to({x:655.4,y:210},0).wait(1).to({x:653.1,y:206.2},0).wait(1).to({x:650.6,y:202.5},0).wait(1).to({x:648,y:198.9},0).wait(1).to({x:645.2,y:195.5},0).wait(1).to({x:642.1,y:192.2},0).wait(1).to({x:638.9,y:189.2},0).wait(1).to({x:635.3,y:186.5},0).wait(1).to({x:631.6,y:184.2},0).wait(1).to({x:632.4,y:179.4},0).wait(1).to({x:633.6,y:174.7},0).wait(1).to({x:635.1,y:170.1},0).wait(1).to({x:637.2,y:165.8},0).wait(1).to({x:640,y:161.9},0).wait(1).to({x:643.7,y:158.9},0).wait(1).to({x:648.2,y:157.3},0).wait(1).to({x:653,y:157.2},0).wait(1).to({x:657.7,y:158.2},0).wait(1).to({x:662.2,y:160},0).wait(1).to({x:664.9,y:158},0).wait(1).to({x:667.4,y:156.4},0).wait(1).to({x:670,y:155},0).wait(1).to({x:672.9,y:153.7},0).wait(1).to({x:675.9,y:152.9},0).wait(1).to({x:678.9,y:152.6},0).wait(1).to({x:682,y:153.1},0).wait(1).to({x:684.8,y:154.3},0).wait(1).to({x:687.3,y:156.2},0).wait(1).to({x:689.3,y:158.5},0).wait(1).to({x:691,y:161.1},0).wait(1).to({x:692.4,y:163.9},0).wait(1).to({x:693.6,y:166.8},0).wait(1).to({x:694.6,y:169.7},0).wait(1).to({x:695.4,y:172.7},0).wait(1).to({x:696.2,y:175.7},0).wait(1).to({x:696.8,y:178.7},0).wait(1).to({x:697.3,y:181.7},0).wait(1).to({x:697.8,y:184.8},0).wait(1).to({x:698.2,y:187.9},0).wait(1).to({x:698.5,y:191},0).wait(1).to({x:698.8,y:194.1},0).wait(1).to({x:699,y:197.2},0).wait(1).to({x:699.2,y:200.3},0).wait(1).to({x:698.9,y:201.9},0).wait(1).to({x:698.7,y:203.2},0).wait(1).to({x:698.4,y:204.7},0).wait(1).to({x:698.1,y:206},0).wait(1).to({x:697.8,y:207.5},0).wait(1).to({x:697.4,y:208.8},0).wait(1).to({x:697,y:210.2},0).wait(1).to({x:696.6,y:211.6},0).wait(1).to({x:696.1,y:213},0).wait(1).to({x:695.5,y:214.3},0).wait(1).to({x:694.9,y:215.6},0).wait(1).to({x:694.2,y:216.9},0).wait(1).to({x:693.5,y:218.2},0).wait(1).to({x:692.7,y:219.4},0).wait(1).to({x:691.8,y:220.5},0).wait(1).to({x:690.7,y:221.5},0).wait(1).to({x:689.6,y:222.4},0).wait(1).to({x:688.4,y:223.2},0).wait(1).to({x:687.1,y:223.8},0).wait(1).to({x:685.7,y:224.1},0).wait(1).to({x:684.2,y:224.3},0).wait(1).to({x:683,y:225.8},0).wait(1).to({x:682.1,y:226.8},0).wait(1).to({x:681.1,y:227.8},0).wait(1).to({x:680,y:228.8},0).wait(1).to({x:678.8,y:229.8},0).wait(1).to({x:677.5,y:230.7},0).wait(1).to({x:676.2,y:231.5},0).wait(1).to({x:674.8,y:232.1},0).wait(1).to({x:673.3,y:232.5},0).wait(1).to({x:671.8,y:232.6},0).wait(1).to({x:670.2,y:232.4},0).wait(1).to({x:668.8,y:231.9},0).wait(1).to({x:667.4,y:231.2},0).wait(1).to({x:666.2,y:230.3},0).wait(1).to({x:665.1,y:229.3},0).wait(1).to({x:664.1,y:228.2},0).wait(1).to({x:663.1,y:227},0).wait(1).to({x:662.4,y:225.9},0).wait(1).to({x:661.4,y:224.3},0).wait(1).to({x:663.5,y:225.9},0).wait(1).to({x:661.6,y:221.8},0).wait(1).to({x:659.6,y:217.8},0).wait(1).to({x:657.6,y:213.9},0).wait(1).to({x:655.4,y:210},0).wait(1).to({x:653.1,y:206.2},0).wait(1).to({x:650.6,y:202.5},0).wait(1).to({x:648,y:198.9},0).wait(1).to({x:645.2,y:195.5},0).wait(1).to({x:642.1,y:192.2},0).wait(1).to({x:638.9,y:189.2},0).wait(1).to({x:635.3,y:186.5},0).wait(1).to({x:631.6,y:184.2},0).wait(1).to({x:632.4,y:179.4},0).wait(1).to({x:633.6,y:174.7},0).wait(1).to({x:635.1,y:170.1},0).wait(1).to({x:637.2,y:165.8},0).wait(1).to({x:640,y:161.9},0).wait(1).to({x:643.7,y:158.9},0).wait(1).to({x:648.2,y:157.3},0).wait(1).to({x:653,y:157.2},0).wait(1).to({x:657.7,y:158.2},0).wait(1).to({x:662.2,y:160},0).wait(1).to({x:664.9,y:158},0).wait(1).to({x:667.4,y:156.4},0).wait(1).to({x:670,y:155},0).wait(1).to({x:672.9,y:153.7},0).wait(1).to({x:675.9,y:152.9},0).wait(1).to({x:678.9,y:152.6},0).wait(1).to({x:682,y:153.1},0).wait(1).to({x:684.8,y:154.3},0).wait(1).to({x:687.3,y:156.2},0).wait(1).to({x:689.3,y:158.5},0).wait(1).to({x:691,y:161.1},0).wait(1).to({x:692.4,y:163.9},0).wait(1).to({x:693.6,y:166.8},0).wait(1).to({x:694.6,y:169.7},0).wait(1).to({x:695.4,y:172.7},0).wait(1).to({x:696.2,y:175.7},0).wait(1).to({x:696.8,y:178.7},0).wait(1).to({x:697.3,y:181.7},0).wait(1).to({x:697.8,y:184.8},0).wait(1).to({x:698.2,y:187.9},0).wait(1).to({x:698.5,y:191},0).wait(1).to({x:698.8,y:194.1},0).wait(1).to({x:699,y:197.2},0).wait(1).to({x:699.2,y:200.3},0).wait(1).to({x:698.9,y:201.9},0).wait(1).to({x:698.7,y:203.2},0).wait(1).to({x:698.4,y:204.7},0).wait(1).to({x:698.1,y:206},0).wait(1).to({x:697.8,y:207.5},0).wait(1).to({x:697.4,y:208.8},0).wait(1).to({x:697,y:210.2},0).wait(1).to({x:696.6,y:211.6},0).wait(1).to({x:696.1,y:213},0).wait(1).to({x:695.5,y:214.3},0).wait(1).to({x:694.9,y:215.6},0).wait(1).to({x:694.2,y:216.9},0).wait(1).to({x:693.5,y:218.2},0).wait(1).to({x:692.7,y:219.4},0).wait(1).to({x:691.8,y:220.5},0).wait(1).to({x:690.7,y:221.5},0).wait(1).to({x:689.6,y:222.4},0).wait(1).to({x:688.4,y:223.2},0).wait(1).to({x:687.1,y:223.8},0).wait(1).to({x:685.7,y:224.1},0).wait(1).to({x:684.2,y:224.3},0).wait(1).to({x:683,y:225.8},0).wait(1).to({x:682.1,y:226.8},0).wait(1).to({x:681.1,y:227.8},0).wait(1).to({x:680,y:228.8},0).wait(1).to({x:678.8,y:229.8},0).wait(1).to({x:677.5,y:230.7},0).wait(1).to({x:676.2,y:231.5},0).wait(1).to({x:674.8,y:232.1},0).wait(1).to({x:673.3,y:232.5},0).wait(1).to({x:671.8,y:232.6},0).wait(1).to({x:670.2,y:232.4},0).wait(1).to({x:668.8,y:231.9},0).wait(1).to({x:667.4,y:231.2},0).wait(1).to({x:666.2,y:230.3},0).wait(1).to({x:665.1,y:229.3},0).wait(1).to({x:664.1,y:228.2},0).wait(1).to({x:663.1,y:227},0).wait(1).to({x:662.4,y:225.9},0).wait(1).to({x:661.4,y:224.3},0).wait(1).to({x:663.5,y:225.9},0).wait(1).to({x:661.6,y:221.8},0).wait(1).to({x:659.6,y:217.8},0).wait(1).to({x:657.6,y:213.9},0).wait(1).to({x:655.4,y:210},0).wait(1).to({x:653.1,y:206.2},0).wait(1).to({x:650.6,y:202.5},0).wait(1).to({x:648,y:198.9},0).wait(1).to({x:645.2,y:195.5},0).wait(1).to({x:642.1,y:192.2},0).wait(1).to({x:638.9,y:189.2},0).wait(1).to({x:635.3,y:186.5},0).wait(1).to({x:631.6,y:184.2},0).wait(1).to({x:632.4,y:179.4},0).wait(1).to({x:633.6,y:174.7},0).wait(1).to({x:635.1,y:170.1},0).wait(1).to({x:637.2,y:165.8},0).wait(1).to({x:640,y:161.9},0).wait(1).to({x:643.7,y:158.9},0).wait(1).to({x:648.2,y:157.3},0).wait(1).to({x:653,y:157.2},0).wait(1).to({x:657.7,y:158.2},0).wait(1).to({x:662.2,y:160},0).wait(1).to({x:664.9,y:158},0).wait(1).to({x:667.4,y:156.4},0).wait(1).to({x:670,y:155},0).wait(1).to({x:672.9,y:153.7},0).wait(1).to({x:675.9,y:152.9},0).wait(1).to({x:678.9,y:152.6},0).wait(1).to({x:682,y:153.1},0).wait(1).to({x:684.8,y:154.3},0).wait(1).to({x:687.3,y:156.2},0).wait(1).to({x:689.3,y:158.5},0).wait(1).to({x:691,y:161.1},0).wait(1).to({x:692.4,y:163.9},0).wait(1).to({x:693.6,y:166.8},0).wait(1).to({x:694.6,y:169.7},0).wait(1).to({x:695.4,y:172.7},0).wait(1).to({x:696.2,y:175.7},0).wait(1).to({x:696.8,y:178.7},0).wait(1).to({x:697.3,y:181.7},0).wait(1).to({x:697.8,y:184.8},0).wait(1).to({x:698.2,y:187.9},0).wait(1).to({x:698.5,y:191},0).wait(1).to({x:698.8,y:194.1},0).wait(1).to({x:699,y:197.2},0).wait(1).to({x:699.2,y:200.3},0).wait(1).to({x:698.9,y:201.9},0).wait(1).to({x:698.7,y:203.2},0).wait(1).to({x:698.4,y:204.7},0).wait(1).to({x:698.1,y:206},0).wait(1).to({x:697.8,y:207.5},0).wait(1).to({x:697.4,y:208.8},0).wait(1).to({x:697,y:210.2},0).wait(1).to({x:696.6,y:211.6},0).wait(1).to({x:696.1,y:213},0).wait(1).to({x:695.5,y:214.3},0).wait(1).to({x:694.9,y:215.6},0).wait(1).to({x:694.2,y:216.9},0).wait(1).to({x:693.5,y:218.2},0).wait(1).to({x:692.7,y:219.4},0).wait(1).to({x:691.8,y:220.5},0).wait(1).to({x:690.7,y:221.5},0).wait(1).to({x:689.6,y:222.4},0).wait(1).to({x:688.4,y:223.2},0).wait(1).to({x:687.1,y:223.8},0).wait(1).to({x:685.7,y:224.1},0).wait(1).to({x:684.2,y:224.3},0).wait(1).to({x:683,y:225.8},0).wait(1).to({x:682.1,y:226.8},0).wait(1).to({x:681.1,y:227.8},0).wait(1).to({x:680,y:228.8},0).wait(1).to({x:678.8,y:229.8},0).wait(1).to({x:677.5,y:230.7},0).wait(1).to({x:676.2,y:231.5},0).wait(1).to({x:674.8,y:232.1},0).wait(1).to({x:673.3,y:232.5},0).wait(1).to({x:671.8,y:232.6},0).wait(1).to({x:670.2,y:232.4},0).wait(1).to({x:668.8,y:231.9},0).wait(1).to({x:667.4,y:231.2},0).wait(1).to({x:666.2,y:230.3},0).wait(1).to({x:665.1,y:229.3},0).wait(1).to({x:664.1,y:228.2},0).wait(1).to({x:663.1,y:227},0).wait(1).to({x:662.4,y:225.9},0).wait(1).to({x:661.4,y:224.3},0).to({_off:true},1).wait(5));

	// Layer 11
	this.instance_6 = new lib.Symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(597.1,124.9,1,1,0,0,0,15.3,17.6);
	this.instance_6._off = true;

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#4C4C4D").s().p("AAdg3IAFADIhDBsg");
	this.shape_435.setTransform(593.6,131.2);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#4C4C4D").s().p("AhAAAICBgCIgCADIAAACg");
	this.shape_436.setTransform(589.9,124.9);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#4C4C4D").s().p("Aggg1QADAAACgDIA8Bxg");
	this.shape_437.setTransform(600.8,131.2);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#4C4C4D").s().p("AhAABIgBgDICDADIiCACg");
	this.shape_438.setTransform(604.5,124.9);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#4C4C4D").s().p("Aghg4IBCBwIAAAAIgFABg");
	this.shape_439.setTransform(593.8,118.6);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#4C4C4D").s().p("AghA2IBDhvIg/BzQgCgDgCgBg");
	this.shape_440.setTransform(600.8,118.8);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#4C4C4D").s().p("AgDBxIgGAIIgFgFIAKgLIAAgHIgJAKIgEgEIAMgPIAAgGIgKALIgEgEIANgPIAAgHIgLANIgFgEIAPgSIACgvIgpAZIgIAXIgGgBIAGgSIgGADIgHAVIgGgDIAFgOIgFADIgHATIgGgCIAFgOIgGAEIgFAPIgGgCIADgKIg5AcIA0gjIgJgCIABgFIAPADIAGgFIgNgCIABgGIATAEIAFgDIgOgEIABgFIAUADIAGgDIgRgDIABgGIAXAEIArgXIgogVIgZAFIgBgGIASgDIgFgEIgWAEIgBgGIAQgDIgFgEIgVAFIgBgGIAOgDIgFgEIgRAEIgBgHIAKgCIg1gjIA5AcIgDgJIAGgCIAFAOIAGAEIgFgNIAGgCIAHASIAFADIgFgOIAGgCIAHAUIAFACIgFgQIAGgCIAHAXIApAYIgBgwIgRgSIAFgFIAMAOIABgHIgPgQIAFgEIAKAMIAAgGIgNgPIAEgFIAKALIAAgGIgKgNIAEgEIAHAIIADg/IAEA+IAGgIIAFAFIgKAMIAAAGIAJgKIAFAEIgNAPIAAAGIAKgLIAFAEIgOAPIABAHIALgNIAEAEIgPASIgBAwIAngXIAIgYIAFACIgFARIAFgCIAHgWIAGADIgFAOIAFgCIAHgTIAGABIgFAOIAGgDIAGgPIAGACIgEAJIA5gcIg0AjIAJACIgBAGIgPgDIgGAEIANACIgBAGIgTgEIgFAEIAOADIgBAFIgUgDIgFADIAQAEIgBAFIgXgEIgqAWIArAXIAYgFIABAGIgSAEIAFADIAWgEIABAGIgPAEIAFADIAUgFIABAGIgOADIAGAEIAQgDIABAGIgKACIA1AjIg4gbIADAIIgGACIgFgOIgGgDIAEANIgGABIgGgSIgGgCIAFANIgGACIgGgUIgGgCIAFAQIgGACIgHgWIgqgZIACAtIAQATIgFAEIgMgOIAAAHIAOAQIgEAEIgLgMIAAAGIAOAQIgFAEIgKgLIAAAHIALAMIgFAEIgHgHIgDA/gAgHACQAAADACADQADADACAAQAJAAAAgJQAAgIgJABQgHgBAAAIg");
	this.shape_441.setTransform(597.1,124.9);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#4C4C4D").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTgAgrgrQgSASAAAZQAAAaASASQASASAZAAQAZAAATgSQASgSAAgaQAAgZgSgSQgTgSgZAAQgZAAgSASg");
	this.shape_442.setTransform(597.1,124.9);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#4C4C4D").s().p("AgGAIQgDgDAAgFQAAgDADgEQADgCADAAQAEAAADACQADAEAAADQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_443.setTransform(594.6,129.5);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#4C4C4D").s().p("AgHAIQgCgEAAgEQAAgDACgEQADgCAEAAQAEAAAEACQACAEAAADQAAAEgCAEQgEACgEAAQgEAAgDgCg");
	this.shape_444.setTransform(599.8,129.3);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#4C4C4D").s().p("AgHAHQgCgDgBgEQABgDACgDQAEgEADAAQAFAAACAEQADADAAADQAAAEgDADQgCAEgFAAQgDAAgEgEg");
	this.shape_445.setTransform(602.3,125);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#4C4C4D").s().p("AgHAIQgCgDAAgFQAAgDACgEQADgCAEAAQAEAAAEACQACAEAAADQAAAFgCADQgEACgEAAQgEAAgDgCg");
	this.shape_446.setTransform(600,120.5);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAAEADQADADAAADQAAAEgDADQgEADgEAAQgDAAgDgDg");
	this.shape_447.setTransform(594.7,120.2);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_448.setTransform(591.8,124.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},180).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435}]},1).to({state:[{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(180).to({_off:false},0).wait(1).to({regY:17.5,x:606.4,y:119},0).wait(1).to({x:616.1,y:114.1},0).wait(1).to({x:626.2,y:110},0).wait(1).to({x:636.7,y:107},0).wait(1).to({x:647.4,y:105.1},0).wait(1).to({x:658.3,y:104.4},0).wait(1).to({x:669.2,y:104.8},0).wait(1).to({x:673.7,y:105.7},0).wait(1).to({x:678.2,y:106.7},0).wait(1).to({x:682.7,y:107.8},0).wait(1).to({x:687.2,y:108.9},0).wait(1).to({x:691.7,y:110.1},0).wait(1).to({x:696.1,y:111.4},0).wait(1).to({x:700.5,y:112.9},0).wait(1).to({x:704.9,y:114.4},0).wait(1).to({x:709.2,y:116.2},0).wait(1).to({x:713.4,y:118.1},0).wait(1).to({x:717.5,y:120.2},0).wait(1).to({x:721.5,y:122.6},0).wait(1).to({x:725.1,y:125.4},0).wait(1).to({x:728.3,y:128.8},0).wait(1).to({x:730.8,y:132.7},0).wait(1).to({x:732,y:137.1},0).wait(1).to({x:731.7,y:141.7},0).wait(1).to({x:730.2,y:146},0).wait(1).to({x:727.8,y:150},0).wait(1).to({x:725,y:153.5},0).wait(1).to({x:721.7,y:157},0).wait(1).to({x:718.2,y:160.1},0).wait(1).to({x:718.5,y:164.8},0).wait(1).to({x:718.7,y:169.5},0).wait(1).to({x:718.8,y:174.2},0).wait(1).to({x:718.7,y:178.9},0).wait(1).to({x:718.4,y:183.6},0).wait(1).to({x:717.9,y:188.3},0).wait(1).to({x:717.2,y:193},0).wait(1).to({x:716.2,y:197.6},0).wait(1).to({x:714.8,y:202.1},0).wait(1).to({x:713.1,y:206.4},0).wait(1).to({x:710.8,y:210.6},0).wait(1).to({x:708.1,y:214.4},0).wait(1).to({x:704.9,y:217.8},0).wait(1).to({x:701.1,y:220.7},0).wait(1).to({x:697,y:222.9},0).wait(1).to({x:692.6,y:224.4},0).wait(1).to({x:688,y:225.3},0).wait(1).to({x:683.2,y:225.8},0).wait(1).to({x:678.5},0).wait(1).to({x:673.7,y:222.6},0).wait(1).to({x:668.8,y:219.6},0).wait(1).to({x:663.7,y:216.8},0).wait(1).to({x:658.6,y:214.2},0).wait(1).to({x:653.3,y:211.9},0).wait(1).to({x:647.9,y:209.9},0).wait(1).to({x:642.4,y:208.3},0).wait(1).to({x:636.9,y:206.9},0).wait(1).to({x:631.2,y:206},0).wait(1).to({x:625.5,y:205.4},0).wait(1).to({x:619.7,y:205.3},0).wait(1).to({x:614,y:205.6},0).wait(1).to({x:608.3,y:206.3},0).wait(1).to({x:602.7,y:207.4},0).wait(1).to({x:597.1,y:209},0).wait(1).to({x:591.7,y:210.9},0).wait(1).to({x:586.5,y:213.2},0).wait(1).to({x:583.3,y:209.8},0).wait(1).to({x:580.3,y:206.3},0).wait(1).to({x:577.5,y:202.6},0).wait(1).to({x:574.9,y:198.8},0).wait(1).to({x:572.6,y:194.8},0).wait(1).to({x:570.5,y:190.7},0).wait(1).to({x:568.8,y:186.5},0).wait(1).to({x:567.4,y:182.1},0).wait(1).to({x:566.5,y:177.6},0).wait(1).to({x:566,y:173},0).wait(1).to({y:168.4},0).wait(1).to({x:566.5,y:163.8},0).wait(1).to({x:567.4,y:159.3},0).wait(1).to({x:568.8,y:154.9},0).wait(1).to({x:570.5,y:150.6},0).wait(1).to({x:572.6,y:146.5},0).wait(1).to({x:574.9,y:142.6},0).wait(1).to({x:577.5,y:138.7},0).wait(1).to({x:580.3,y:135.1},0).wait(1).to({x:583.3,y:131.5},0).wait(1).to({x:586.5,y:128.2},0).wait(1).to({regY:17.6,x:597.1,y:124.9},0).wait(1).to({regY:17.5,x:606.4,y:119},0).wait(1).to({x:616.1,y:114.1},0).wait(1).to({x:626.2,y:110},0).wait(1).to({x:636.7,y:107},0).wait(1).to({x:647.4,y:105.1},0).wait(1).to({x:658.3,y:104.4},0).wait(1).to({x:669.2,y:104.8},0).wait(1).to({x:673.7,y:105.7},0).wait(1).to({x:678.2,y:106.7},0).wait(1).to({x:682.7,y:107.8},0).wait(1).to({x:687.2,y:108.9},0).wait(1).to({x:691.7,y:110.1},0).wait(1).to({x:696.1,y:111.4},0).wait(1).to({x:700.5,y:112.9},0).wait(1).to({x:704.9,y:114.4},0).wait(1).to({x:709.2,y:116.2},0).wait(1).to({x:713.4,y:118.1},0).wait(1).to({x:717.5,y:120.2},0).wait(1).to({x:721.5,y:122.6},0).wait(1).to({x:725.1,y:125.4},0).wait(1).to({x:728.3,y:128.8},0).wait(1).to({x:730.8,y:132.7},0).wait(1).to({x:732,y:137.1},0).wait(1).to({x:731.7,y:141.7},0).wait(1).to({x:730.2,y:146},0).wait(1).to({x:727.8,y:150},0).wait(1).to({x:725,y:153.5},0).wait(1).to({x:721.7,y:157},0).wait(1).to({x:718.2,y:160.1},0).wait(1).to({x:718.5,y:164.8},0).wait(1).to({x:718.7,y:169.5},0).wait(1).to({x:718.8,y:174.2},0).wait(1).to({x:718.7,y:178.9},0).wait(1).to({x:718.4,y:183.6},0).wait(1).to({x:717.9,y:188.3},0).wait(1).to({x:717.2,y:193},0).wait(1).to({x:716.2,y:197.6},0).wait(1).to({x:714.8,y:202.1},0).wait(1).to({x:713.1,y:206.4},0).wait(1).to({x:710.8,y:210.6},0).wait(1).to({x:708.1,y:214.4},0).wait(1).to({x:704.9,y:217.8},0).wait(1).to({x:701.1,y:220.7},0).wait(1).to({x:697,y:222.9},0).wait(1).to({x:692.6,y:224.4},0).wait(1).to({x:688,y:225.3},0).wait(1).to({x:683.2,y:225.8},0).wait(1).to({x:678.5},0).wait(1).to({x:673.7,y:222.6},0).wait(1).to({x:668.8,y:219.6},0).wait(1).to({x:663.7,y:216.8},0).wait(1).to({x:658.6,y:214.2},0).wait(1).to({x:653.3,y:211.9},0).wait(1).to({x:647.9,y:209.9},0).wait(1).to({x:642.4,y:208.3},0).wait(1).to({x:636.9,y:206.9},0).wait(1).to({x:631.2,y:206},0).wait(1).to({x:625.5,y:205.4},0).wait(1).to({x:619.7,y:205.3},0).wait(1).to({x:614,y:205.6},0).wait(1).to({x:608.3,y:206.3},0).wait(1).to({x:602.7,y:207.4},0).wait(1).to({x:597.1,y:209},0).wait(1).to({x:591.7,y:210.9},0).wait(1).to({x:586.5,y:213.2},0).wait(1).to({x:583.3,y:209.8},0).wait(1).to({x:580.3,y:206.3},0).wait(1).to({x:577.5,y:202.6},0).wait(1).to({x:574.9,y:198.8},0).wait(1).to({x:572.6,y:194.8},0).wait(1).to({x:570.5,y:190.7},0).wait(1).to({x:568.8,y:186.5},0).wait(1).to({x:567.4,y:182.1},0).wait(1).to({x:566.5,y:177.6},0).wait(1).to({x:566,y:173},0).wait(1).to({y:168.4},0).wait(1).to({x:566.5,y:163.8},0).wait(1).to({x:567.4,y:159.3},0).wait(1).to({x:568.8,y:154.9},0).wait(1).to({x:570.5,y:150.6},0).wait(1).to({x:572.6,y:146.5},0).wait(1).to({x:574.9,y:142.6},0).wait(1).to({x:577.5,y:138.7},0).wait(1).to({x:580.3,y:135.1},0).wait(1).to({x:583.3,y:131.5},0).wait(1).to({x:586.5,y:128.2},0).wait(1).to({regY:17.6,x:597.1,y:124.9},0).wait(1).to({regY:17.5,x:606.4,y:119},0).wait(1).to({x:616.1,y:114.1},0).wait(1).to({x:626.2,y:110},0).wait(1).to({x:636.7,y:107},0).wait(1).to({x:647.4,y:105.1},0).wait(1).to({x:658.3,y:104.4},0).wait(1).to({x:669.2,y:104.8},0).wait(1).to({x:673.7,y:105.7},0).wait(1).to({x:678.2,y:106.7},0).wait(1).to({x:682.7,y:107.8},0).wait(1).to({x:687.2,y:108.9},0).wait(1).to({x:691.7,y:110.1},0).wait(1).to({x:696.1,y:111.4},0).wait(1).to({x:700.5,y:112.9},0).wait(1).to({x:704.9,y:114.4},0).wait(1).to({x:709.2,y:116.2},0).wait(1).to({x:713.4,y:118.1},0).wait(1).to({x:717.5,y:120.2},0).wait(1).to({x:721.5,y:122.6},0).wait(1).to({x:725.1,y:125.4},0).wait(1).to({x:728.3,y:128.8},0).wait(1).to({x:730.8,y:132.7},0).wait(1).to({x:732,y:137.1},0).wait(1).to({x:731.7,y:141.7},0).wait(1).to({x:730.2,y:146},0).wait(1).to({x:727.8,y:150},0).wait(1).to({x:725,y:153.5},0).wait(1).to({x:721.7,y:157},0).wait(1).to({x:718.2,y:160.1},0).wait(1).to({x:718.5,y:164.8},0).wait(1).to({x:718.7,y:169.5},0).wait(1).to({x:718.8,y:174.2},0).wait(1).to({x:718.7,y:178.9},0).wait(1).to({x:718.4,y:183.6},0).wait(1).to({x:717.9,y:188.3},0).wait(1).to({x:717.2,y:193},0).wait(1).to({x:716.2,y:197.6},0).wait(1).to({x:714.8,y:202.1},0).wait(1).to({x:713.1,y:206.4},0).wait(1).to({x:710.8,y:210.6},0).wait(1).to({x:708.1,y:214.4},0).wait(1).to({x:704.9,y:217.8},0).wait(1).to({x:701.1,y:220.7},0).wait(1).to({x:697,y:222.9},0).wait(1).to({x:692.6,y:224.4},0).wait(1).to({x:688,y:225.3},0).wait(1).to({x:683.2,y:225.8},0).wait(1).to({x:678.5},0).wait(1).to({x:673.7,y:222.6},0).wait(1).to({x:668.8,y:219.6},0).wait(1).to({x:663.7,y:216.8},0).wait(1).to({x:658.6,y:214.2},0).wait(1).to({x:653.3,y:211.9},0).wait(1).to({x:647.9,y:209.9},0).wait(1).to({x:642.4,y:208.3},0).wait(1).to({x:636.9,y:206.9},0).wait(1).to({x:631.2,y:206},0).wait(1).to({x:625.5,y:205.4},0).wait(1).to({x:619.7,y:205.3},0).wait(1).to({x:614,y:205.6},0).wait(1).to({x:608.3,y:206.3},0).wait(1).to({x:602.7,y:207.4},0).wait(1).to({x:597.1,y:209},0).wait(1).to({x:591.7,y:210.9},0).wait(1).to({x:586.5,y:213.2},0).wait(1).to({x:583.3,y:209.8},0).wait(1).to({x:580.3,y:206.3},0).wait(1).to({x:577.5,y:202.6},0).wait(1).to({x:574.9,y:198.8},0).wait(1).to({x:572.6,y:194.8},0).wait(1).to({x:570.5,y:190.7},0).wait(1).to({x:568.8,y:186.5},0).wait(1).to({x:567.4,y:182.1},0).wait(1).to({x:566.5,y:177.6},0).wait(1).to({x:566,y:173},0).wait(1).to({y:168.4},0).wait(1).to({x:566.5,y:163.8},0).wait(1).to({x:567.4,y:159.3},0).wait(1).to({x:568.8,y:154.9},0).wait(1).to({x:570.5,y:150.6},0).wait(1).to({x:572.6,y:146.5},0).wait(1).to({x:574.9,y:142.6},0).wait(1).to({x:577.5,y:138.7},0).wait(1).to({x:580.3,y:135.1},0).wait(1).to({x:583.3,y:131.5},0).wait(1).to({x:586.5,y:128.2},0).to({_off:true},1).wait(5));

	// Layer 12
	this.instance_7 = new lib.Symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(574.2,241.1,1,1,0,0,0,15.3,17.6);
	this.instance_7._off = true;

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#4C4C4D").s().p("AAdg3IAFADIhDBsg");
	this.shape_449.setTransform(570.7,247.4);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#4C4C4D").s().p("AhAAAICBgCIgCADIAAACg");
	this.shape_450.setTransform(567,241.1);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#4C4C4D").s().p("Aggg0IAEgEIA9Bxg");
	this.shape_451.setTransform(577.8,247.4);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#4C4C4D").s().p("AhAABIgBgDICDADIiCACg");
	this.shape_452.setTransform(581.5,241.1);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#4C4C4D").s().p("Aghg4IBCBwIAAAAIgFABg");
	this.shape_453.setTransform(570.9,234.9);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#4C4C4D").s().p("AghA2IBDhuIg/ByQgBgCgDgCg");
	this.shape_454.setTransform(577.9,235);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#4C4C4D").s().p("AgDBxIgGAHIgFgEIAKgMIAAgGIgJAKIgEgEIAMgPIAAgGIgKALIgEgEIANgQIAAgGIgLANIgFgEIAPgSIACgwIgpAaIgIAXIgGgCIAGgRIgGADIgHAVIgGgCIAFgPIgFACIgHAUIgGgCIAFgOIgGADIgGAQIgFgCIADgKIg5AcIA0gjIgJgBIABgHIAPADIAGgDIgNgDIABgGIATAEIAFgEIgOgCIABgGIAUADIAGgDIgRgDIABgGIAXAEIArgXIgpgVIgYAFIgBgGIASgEIgFgDIgWAEIgBgGIAPgDIgFgDIgUAEIgBgGIAOgDIgGgEIgQADIgBgGIAKgCIg1gjIA4AbIgDgIIAGgCIAFAOIAGADIgEgMIAGgCIAGASIAGADIgFgOIAGgCIAHAUIAFACIgFgQIAGgCIAHAWIApAZIgCgwIgQgTIAFgEIAMAOIAAgGIgOgRIAFgEIAKAMIAAgGIgNgQIAEgEIAKALIAAgHIgLgMIAFgEIAHAHIADg/IAEA/IAGgHIAFAEIgKALIAAAHIAJgKIAFAEIgNAPIAAAGIAKgLIAFAEIgOAPIAAAHIALgNIAFAEIgPASIgBAxIAmgZIAIgXIAGACIgGARIAGgDIAHgUIAGACIgFAPIAFgDIAHgUIAGACIgFAOIAGgDIAGgQIAGACIgEAKIA5gcIg0AjIAJACIgBAGIgPgDIgGAEIANACIgBAGIgTgEIgFAEIAOACIgBAHIgUgEIgGADIARADIgBAHIgXgFIgqAWIArAXIAYgFIABAGIgSAEIAFADIAWgEIABAGIgPADIAFADIAUgEIABAHIgOACIAGAEIAQgDIABAGIgKACIA1AjIg4gbIADAIIgGACIgFgOIgGgDIAEAMIgGACIgGgSIgGgDIAFAOIgGACIgHgTIgFgDIAFAQIgGACIgHgWIgqgaIACAuIAQATIgFAEIgMgOIAAAGIAOARIgEAEIgLgMIAAAGIANAQIgEAEIgKgLIAAAHIALAMIgFAEIgHgIIgEBAgAgFgDQgCACAAADQAAADACADQADACACAAQAEAAACgCQADgDAAgDQAAgDgDgCQgCgDgEAAQgCAAgDADg");
	this.shape_455.setTransform(574.1,241.1);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#4C4C4D").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTgAgrgqQgSASAAAYQAAAaASASQASASAZAAQAZAAATgSQASgSAAgaQAAgYgSgSQgTgTgZAAQgZAAgSATg");
	this.shape_456.setTransform(574.1,241.1);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#4C4C4D").s().p("AgGAHQgDgDgBgEQABgDADgDQADgDADAAQAEAAADADQAEADAAADQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_457.setTransform(571.7,245.7);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_458.setTransform(576.8,245.5);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#4C4C4D").s().p("AgHAHQgDgDAAgEQAAgDADgDQAEgDADgBQAEABADADQADADAAADQAAAEgDADQgDAEgEAAQgDAAgEgEg");
	this.shape_459.setTransform(579.4,241.2);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_460.setTransform(577,236.7);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQACgEAEAAQAEAAAEAEQADADAAADQAAAEgDADQgEADgEABQgEgBgCgDg");
	this.shape_461.setTransform(571.8,236.5);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#4C4C4D").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgDADAAQAEAAADADQAEADAAADQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_462.setTransform(568.9,241.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},180).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449}]},1).to({state:[{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(180).to({_off:false},0).wait(1).to({x:575.4,y:234.3},0).wait(1).to({x:577.7,y:227.5},0).wait(1).to({x:580.5,y:221},0).wait(1).to({x:583.8,y:214.7},0).wait(1).to({x:587.6,y:208.7},0).wait(1).to({x:591.9,y:203},0).wait(1).to({x:596.7,y:197.7},0).wait(1).to({x:602,y:193.1},0).wait(1).to({x:607.9,y:189.1},0).wait(1).to({x:614.3,y:186.1},0).wait(1).to({x:621.1,y:184.2},0).wait(1).to({x:628.1,y:183.6},0).wait(1).to({x:635.2,y:184.3},0).wait(1).to({x:641.5,y:185.6},0).wait(1).to({x:649,y:187.1},0).wait(1).to({x:656,y:188.9},0).wait(1).to({x:662.7,y:191.2},0).wait(1).to({x:669.2,y:194.2},0).wait(1).to({x:674.8,y:198.7},0).wait(1).to({x:679.4,y:203.5},0).wait(1).to({x:681.9,y:200.2},0).wait(1).to({x:680.8,y:191.3},0).wait(1).to({x:681.7,y:184.4},0).wait(1).to({x:684.6,y:178},0).wait(1).to({x:689,y:172.5},0).wait(1).to({x:694.5,y:168},0).wait(1).to({x:700.7,y:164.4},0).wait(1).to({x:707.5,y:161.6},0).wait(1).to({x:714.1,y:160.1},0).wait(1).to({x:716.9,y:156.4},0).wait(1).to({x:719.9,y:152.7},0).wait(1).to({x:722.9,y:149},0).wait(1).to({x:726.1,y:145.5},0).wait(1).to({x:729.4,y:142.1},0).wait(1).to({x:732.8,y:138.7},0).wait(1).to({x:736.4,y:135.7},0).wait(1).to({x:740.3,y:133},0).wait(1).to({x:744.5,y:131},0).wait(1).to({x:749.2,y:130.1},0).wait(1).to({x:753.6,y:131.5},0).wait(1).to({x:756.8,y:134.8},0).wait(1).to({x:758.9,y:138.9},0).wait(1).to({x:760.4,y:143.7},0).wait(1).to({x:761.4,y:148.3},0).wait(1).to({x:758.7,y:153.3},0).wait(1).to({x:756.1,y:158.2},0).wait(1).to({x:753.5,y:163.2},0).wait(1).to({x:750.8,y:168.2},0).wait(1).to({x:748.2,y:173.2},0).wait(1).to({x:745.6,y:178.1},0).wait(1).to({x:742.9,y:183.1},0).wait(1).to({x:740.3,y:188.1},0).wait(1).to({x:737.7,y:193},0).wait(1).to({x:735,y:198},0).wait(1).to({x:732.4,y:203},0).wait(1).to({x:729.8,y:208},0).wait(1).to({x:728.3,y:213},0).wait(1).to({x:726.8,y:218},0).wait(1).to({x:725.3,y:223},0).wait(1).to({x:723.6,y:228},0).wait(1).to({x:721.9,y:232.9},0).wait(1).to({x:720,y:237.9},0).wait(1).to({x:718,y:242.7},0).wait(1).to({x:715.9,y:247.5},0).wait(1).to({x:713.6,y:252.2},0).wait(1).to({x:711.1,y:256.8},0).wait(1).to({x:708.3,y:261.3},0).wait(1).to({x:705.2,y:265.5},0).wait(1).to({x:701.7,y:269.4},0).wait(1).to({x:697.7,y:272.7},0).wait(1).to({x:693.1,y:275.2},0).wait(1).to({x:688,y:276.4},0).wait(1).to({x:682.8,y:276.1},0).wait(1).to({x:675,y:274.5},0).wait(1).to({x:667.2,y:272.9},0).wait(1).to({x:659.4,y:271.4},0).wait(1).to({x:651.7,y:269.8},0).wait(1).to({x:643.9,y:268.2},0).wait(1).to({x:636.1,y:266.7},0).wait(1).to({x:628.4,y:265.1},0).wait(1).to({x:620.6,y:263.6},0).wait(1).to({x:612.8,y:262},0).wait(1).to({x:605.1,y:260.4},0).wait(1).to({x:597.3,y:258.9},0).wait(1).to({x:589.5,y:257.3},0).wait(1).to({x:581.8,y:255.8},0).wait(1).to({x:574.2,y:241.1},0).wait(1).to({x:575.4,y:234.3},0).wait(1).to({x:577.7,y:227.5},0).wait(1).to({x:580.5,y:221},0).wait(1).to({x:583.8,y:214.7},0).wait(1).to({x:587.6,y:208.7},0).wait(1).to({x:591.9,y:203},0).wait(1).to({x:596.7,y:197.7},0).wait(1).to({x:602,y:193.1},0).wait(1).to({x:607.9,y:189.1},0).wait(1).to({x:614.3,y:186.1},0).wait(1).to({x:621.1,y:184.2},0).wait(1).to({x:628.1,y:183.6},0).wait(1).to({x:635.2,y:184.3},0).wait(1).to({x:641.5,y:185.6},0).wait(1).to({x:649,y:187.1},0).wait(1).to({x:656,y:188.9},0).wait(1).to({x:662.7,y:191.2},0).wait(1).to({x:669.2,y:194.2},0).wait(1).to({x:674.8,y:198.7},0).wait(1).to({x:679.4,y:203.5},0).wait(1).to({x:681.9,y:200.2},0).wait(1).to({x:680.8,y:191.3},0).wait(1).to({x:681.7,y:184.4},0).wait(1).to({x:684.6,y:178},0).wait(1).to({x:689,y:172.5},0).wait(1).to({x:694.5,y:168},0).wait(1).to({x:700.7,y:164.4},0).wait(1).to({x:707.5,y:161.6},0).wait(1).to({x:714.1,y:160.1},0).wait(1).to({x:716.9,y:156.4},0).wait(1).to({x:719.9,y:152.7},0).wait(1).to({x:722.9,y:149},0).wait(1).to({x:726.1,y:145.5},0).wait(1).to({x:729.4,y:142.1},0).wait(1).to({x:732.8,y:138.7},0).wait(1).to({x:736.4,y:135.7},0).wait(1).to({x:740.3,y:133},0).wait(1).to({x:744.5,y:131},0).wait(1).to({x:749.2,y:130.1},0).wait(1).to({x:753.6,y:131.5},0).wait(1).to({x:756.8,y:134.8},0).wait(1).to({x:758.9,y:138.9},0).wait(1).to({x:760.4,y:143.7},0).wait(1).to({x:761.4,y:148.3},0).wait(1).to({x:758.7,y:153.3},0).wait(1).to({x:756.1,y:158.2},0).wait(1).to({x:753.5,y:163.2},0).wait(1).to({x:750.8,y:168.2},0).wait(1).to({x:748.2,y:173.2},0).wait(1).to({x:745.6,y:178.1},0).wait(1).to({x:742.9,y:183.1},0).wait(1).to({x:740.3,y:188.1},0).wait(1).to({x:737.7,y:193},0).wait(1).to({x:735,y:198},0).wait(1).to({x:732.4,y:203},0).wait(1).to({x:729.8,y:208},0).wait(1).to({x:728.3,y:213},0).wait(1).to({x:726.8,y:218},0).wait(1).to({x:725.3,y:223},0).wait(1).to({x:723.6,y:228},0).wait(1).to({x:721.9,y:232.9},0).wait(1).to({x:720,y:237.9},0).wait(1).to({x:718,y:242.7},0).wait(1).to({x:715.9,y:247.5},0).wait(1).to({x:713.6,y:252.2},0).wait(1).to({x:711.1,y:256.8},0).wait(1).to({x:708.3,y:261.3},0).wait(1).to({x:705.2,y:265.5},0).wait(1).to({x:701.7,y:269.4},0).wait(1).to({x:697.7,y:272.7},0).wait(1).to({x:693.1,y:275.2},0).wait(1).to({x:688,y:276.4},0).wait(1).to({x:682.8,y:276.1},0).wait(1).to({x:675,y:274.5},0).wait(1).to({x:667.2,y:272.9},0).wait(1).to({x:659.4,y:271.4},0).wait(1).to({x:651.7,y:269.8},0).wait(1).to({x:643.9,y:268.2},0).wait(1).to({x:636.1,y:266.7},0).wait(1).to({x:628.4,y:265.1},0).wait(1).to({x:620.6,y:263.6},0).wait(1).to({x:612.8,y:262},0).wait(1).to({x:605.1,y:260.4},0).wait(1).to({x:597.3,y:258.9},0).wait(1).to({x:589.5,y:257.3},0).wait(1).to({x:581.8,y:255.8},0).wait(1).to({x:574.2,y:241.1},0).wait(1).to({x:575.4,y:234.3},0).wait(1).to({x:577.7,y:227.5},0).wait(1).to({x:580.5,y:221},0).wait(1).to({x:583.8,y:214.7},0).wait(1).to({x:587.6,y:208.7},0).wait(1).to({x:591.9,y:203},0).wait(1).to({x:596.7,y:197.7},0).wait(1).to({x:602,y:193.1},0).wait(1).to({x:607.9,y:189.1},0).wait(1).to({x:614.3,y:186.1},0).wait(1).to({x:621.1,y:184.2},0).wait(1).to({x:628.1,y:183.6},0).wait(1).to({x:635.2,y:184.3},0).wait(1).to({x:641.5,y:185.6},0).wait(1).to({x:649,y:187.1},0).wait(1).to({x:656,y:188.9},0).wait(1).to({x:662.7,y:191.2},0).wait(1).to({x:669.2,y:194.2},0).wait(1).to({x:674.8,y:198.7},0).wait(1).to({x:679.4,y:203.5},0).wait(1).to({x:681.9,y:200.2},0).wait(1).to({x:680.8,y:191.3},0).wait(1).to({x:681.7,y:184.4},0).wait(1).to({x:684.6,y:178},0).wait(1).to({x:689,y:172.5},0).wait(1).to({x:694.5,y:168},0).wait(1).to({x:700.7,y:164.4},0).wait(1).to({x:707.5,y:161.6},0).wait(1).to({x:714.1,y:160.1},0).wait(1).to({x:716.9,y:156.4},0).wait(1).to({x:719.9,y:152.7},0).wait(1).to({x:722.9,y:149},0).wait(1).to({x:726.1,y:145.5},0).wait(1).to({x:729.4,y:142.1},0).wait(1).to({x:732.8,y:138.7},0).wait(1).to({x:736.4,y:135.7},0).wait(1).to({x:740.3,y:133},0).wait(1).to({x:744.5,y:131},0).wait(1).to({x:749.2,y:130.1},0).wait(1).to({x:753.6,y:131.5},0).wait(1).to({x:756.8,y:134.8},0).wait(1).to({x:758.9,y:138.9},0).wait(1).to({x:760.4,y:143.7},0).wait(1).to({x:761.4,y:148.3},0).wait(1).to({x:758.7,y:153.3},0).wait(1).to({x:756.1,y:158.2},0).wait(1).to({x:753.5,y:163.2},0).wait(1).to({x:750.8,y:168.2},0).wait(1).to({x:748.2,y:173.2},0).wait(1).to({x:745.6,y:178.1},0).wait(1).to({x:742.9,y:183.1},0).wait(1).to({x:740.3,y:188.1},0).wait(1).to({x:737.7,y:193},0).wait(1).to({x:735,y:198},0).wait(1).to({x:732.4,y:203},0).wait(1).to({x:729.8,y:208},0).wait(1).to({x:728.3,y:213},0).wait(1).to({x:726.8,y:218},0).wait(1).to({x:725.3,y:223},0).wait(1).to({x:723.6,y:228},0).wait(1).to({x:721.9,y:232.9},0).wait(1).to({x:720,y:237.9},0).wait(1).to({x:718,y:242.7},0).wait(1).to({x:715.9,y:247.5},0).wait(1).to({x:713.6,y:252.2},0).wait(1).to({x:711.1,y:256.8},0).wait(1).to({x:708.3,y:261.3},0).wait(1).to({x:705.2,y:265.5},0).wait(1).to({x:701.7,y:269.4},0).wait(1).to({x:697.7,y:272.7},0).wait(1).to({x:693.1,y:275.2},0).wait(1).to({x:688,y:276.4},0).wait(1).to({x:682.8,y:276.1},0).wait(1).to({x:675,y:274.5},0).wait(1).to({x:667.2,y:272.9},0).wait(1).to({x:659.4,y:271.4},0).wait(1).to({x:651.7,y:269.8},0).wait(1).to({x:643.9,y:268.2},0).wait(1).to({x:636.1,y:266.7},0).wait(1).to({x:628.4,y:265.1},0).wait(1).to({x:620.6,y:263.6},0).wait(1).to({x:612.8,y:262},0).wait(1).to({x:605.1,y:260.4},0).wait(1).to({x:597.3,y:258.9},0).wait(1).to({x:589.5,y:257.3},0).wait(1).to({x:581.8,y:255.8},0).to({_off:true},1).wait(5));

	// Layer 13
	this.instance_8 = new lib.Symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(662.2,247.2,1,1,0,0,0,15.3,17.6);
	this.instance_8._off = true;

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#4C4C4D").s().p("AAdg3QACACADAAIhDBtg");
	this.shape_463.setTransform(658.7,253.5);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#4C4C4D").s().p("Ag/AAICAgCIgCAEIABABg");
	this.shape_464.setTransform(655,247.2);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#4C4C4D").s().p("Aggg1QACgBACgCIA9Byg");
	this.shape_465.setTransform(665.9,253.5);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#4C4C4D").s().p("AhAABIgBgDICDADIiCACg");
	this.shape_466.setTransform(669.5,247.2);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#4C4C4D").s().p("Aghg4IBDBvIgBAAIgFACg");
	this.shape_467.setTransform(658.9,240.9);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#4C4C4D").s().p("AgiA3IBEhwIg+BzQgDgDgDAAg");
	this.shape_468.setTransform(665.9,241.1);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#4C4C4D").s().p("AgDByIgGAGIgEgEIAKgLIgBgHIgIAKIgGgEIAOgPIgBgGIgKALIgEgEIANgPIAAgHIgMANIgEgEIAPgSIABgvIgoAZIgIAXIgGgCIAGgRIgGADIgHAVIgGgCIAFgPIgFADIgHATIgGgCIAFgOIgGADIgFAQIgHgCIAEgKIg5AdIA0gjIgJgCIABgGIAQADIAFgEIgNgDIABgGIATAEIAFgDIgOgDIABgGIAVAEIAEgEIgQgDIABgGIAXAEIArgXIgpgVIgXAFIgCgGIASgDIgFgEIgWAEIgBgGIAPgDIgFgDIgUAEIgBgGIAOgDIgGgEIgQADIgBgGIAKgCIg1gjIA5AcIgEgJIAHgCIAEAPIAGACIgEgMIAGgCIAGASIAGADIgFgOIAGgCIAGAUIAGADIgFgQIAGgCIAHAVIApAaIgCgxIgQgTIAFgEIAMAOIAAgGIgOgRIAEgEIALAMIABgGIgPgQIAGgEIAJALIABgHIgMgMIAFgEIAHAIIADhAIAEA/IAGgHIAFAEIgKAMIABAGIAIgKIAEAEIgMAPIABAGIAJgLIAEAEIgNAQIABAGIAKgNIAGAEIgQASIgBAxIAmgZIAIgXIAHACIgHASIAGgDIAIgVIAFACIgFAPIAFgDIAHgTIAGACIgFANIAHgDIAEgPIAHACIgDAJIA4gcIg0AjIAJACIgBAGIgPgDIgFAEIAMACIgBAGIgTgDIgFADIAOADIgBAGIgUgEIgGADIARAEIgBAGIgXgFIgqAWIAqAXIAZgFIABAGIgSAEIAGAEIAVgFIABAGIgQADIAFAEIAVgEIABAGIgOADIAFADIARgDIABAGIgKACIA1AjIg4gbIACAJIgFACIgGgPIgGgDIAFANIgGACIgHgTIgEgCIAEANIgFACIgIgTIgFgDIAFAQIgGACIgHgWIgqgZIACAtIAQATIgFAEIgMgOIAAAHIAPAQIgGAEIgJgMIgBAGIANAQIgEAEIgJgLIgBAHIALAMIgFAEIgGgHIgFA/gAgFgDQgCADgBACQABAEACACQADADACAAQAEAAADgDQACgCAAgEQAAgCgCgDQgDgDgEAAQgCAAgDADg");
	this.shape_469.setTransform(662.2,247.1);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#4C4C4D").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTgAgrgrQgSASAAAZQAAAZASATQASASAZAAQAaAAASgSQASgTAAgZQAAgZgSgSQgSgSgaAAQgZAAgSASg");
	this.shape_470.setTransform(662.1,247.2);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#4C4C4D").s().p("AgHAIQgCgEAAgEQAAgEACgDQADgCAEAAQAEAAAEACQACADAAAEQAAAEgCAEQgEACgEAAQgEAAgDgCg");
	this.shape_471.setTransform(659.7,251.8);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#4C4C4D").s().p("AgGAIQgEgEAAgEQABgDADgDQADgDADAAQAEAAADADQAEADAAADQAAAEgEAEQgDADgEAAQgDAAgDgDg");
	this.shape_472.setTransform(664.8,251.6);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgEADAAQAEAAADAEQADADAAADQAAAEgDADQgDADgEABQgDgBgDgDg");
	this.shape_473.setTransform(667.4,247.3);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#4C4C4D").s().p("AgHAIQgCgEAAgEQAAgEACgDQAEgCADAAQAEAAAEACQACADAAAEQAAAEgCAEQgEACgEAAQgDAAgEgCg");
	this.shape_474.setTransform(665,242.8);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_475.setTransform(659.8,242.5);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgEQACgDAEAAQAEAAAEADQACAEAAADQAAAEgCADQgEADgEAAQgEAAgCgDg");
	this.shape_476.setTransform(656.9,247.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},180).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463}]},1).to({state:[{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(180).to({_off:false},0).wait(1).to({x:659.1,y:249.2},0).wait(1).to({x:655.9,y:251.2},0).wait(1).to({x:652.8,y:253},0).wait(1).to({x:649.5,y:254.8},0).wait(1).to({x:646.1,y:256.5},0).wait(1).to({x:642.8,y:258},0).wait(1).to({x:639.3,y:259.3},0).wait(1).to({x:635.8,y:260.4},0).wait(1).to({x:632.2,y:261.3},0).wait(1).to({x:628.6,y:261.9},0).wait(1).to({x:624.9,y:262.1},0).wait(1).to({x:621.2,y:261.9},0).wait(1).to({x:617.6,y:261.3},0).wait(1).to({x:614.1,y:260.2},0).wait(1).to({x:610.8,y:258.6},0).wait(1).to({x:607.7,y:256.6},0).wait(1).to({x:604.9,y:254.2},0).wait(1).to({x:602.4,y:251.5},0).wait(1).to({x:600.2,y:248.5},0).wait(1).to({x:598.2,y:245.4},0).wait(1).to({x:596.4,y:242.2},0).wait(1).to({x:594.9,y:238.9},0).wait(1).to({x:593.5,y:235.3},0).wait(1).to({x:592.3,y:231.9},0).wait(1).to({x:591.2,y:228.3},0).wait(1).to({x:590.3,y:224.8},0).wait(1).to({x:589.4,y:221.2},0).wait(1).to({x:589.2,y:217},0).wait(1).to({y:212.8},0).wait(1).to({x:589.4,y:208.6},0).wait(1).to({x:589.8,y:204.3},0).wait(1).to({x:590.5,y:200.2},0).wait(1).to({x:591.4,y:196.1},0).wait(1).to({x:592.6,y:192.1},0).wait(1).to({x:594.3,y:188.2},0).wait(1).to({x:596.3,y:184.6},0).wait(1).to({x:598.7,y:181.2},0).wait(1).to({x:601.6,y:178.1},0).wait(1).to({x:604.8,y:175.4},0).wait(1).to({x:608.3,y:173.2},0).wait(1).to({x:612.1,y:171.4},0).wait(1).to({x:616.1,y:170},0).wait(1).to({x:620.1,y:169},0).wait(1).to({x:624.3,y:168.3},0).wait(1).to({x:628.4,y:167.9},0).wait(1).to({x:632.7,y:167.8},0).wait(1).to({x:636.9,y:167.9},0).wait(1).to({x:639.6,y:164},0).wait(1).to({x:642.5,y:160.2},0).wait(1).to({x:645.5,y:156.5},0).wait(1).to({x:648.7,y:152.9},0).wait(1).to({x:652.1,y:149.7},0).wait(1).to({x:655.8,y:146.8},0).wait(1).to({x:659.9,y:144.4},0).wait(1).to({x:664.4,y:143.1},0).wait(1).to({x:669.1,y:143.4},0).wait(1).to({x:673.3,y:145.4},0).wait(1).to({x:676.8,y:148.6},0).wait(1).to({x:679.6,y:152.4},0).wait(1).to({x:681.9,y:156.6},0).wait(1).to({x:683.8,y:160.9},0).wait(1).to({x:685.4,y:165.4},0).wait(1).to({x:686.8,y:169.9},0).wait(1).to({x:688.1,y:174.5},0).wait(1).to({x:689.2,y:179.1},0).wait(1).to({x:690.2,y:183.7},0).wait(1).to({x:691.1,y:188.3},0).wait(1).to({x:691.9,y:193},0).wait(1).to({x:695.1,y:195.6},0).wait(1).to({x:698.1,y:198.4},0).wait(1).to({x:701,y:201.3},0).wait(1).to({x:703.7,y:204.4},0).wait(1).to({x:706.1,y:207.7},0).wait(1).to({x:707.9,y:211.3},0).wait(1).to({x:709.1,y:215.2},0).wait(1).to({x:709.3,y:219.3},0).wait(1).to({x:708.3,y:223.3},0).wait(1).to({x:706.3,y:226.8},0).wait(1).to({x:703.6,y:229.9},0).wait(1).to({x:700.5,y:232.5},0).wait(1).to({x:697.1,y:234.8},0).wait(1).to({x:693.5,y:236.9},0).wait(1).to({x:689.9,y:238.7},0).wait(1).to({x:686.1,y:240.3},0).wait(1).to({x:682.3,y:241.7},0).wait(1).to({x:678.4,y:243.1},0).wait(1).to({x:662.2,y:247.2},0).wait(1).to({x:659.1,y:249.2},0).wait(1).to({x:655.9,y:251.2},0).wait(1).to({x:652.8,y:253},0).wait(1).to({x:649.5,y:254.8},0).wait(1).to({x:646.1,y:256.5},0).wait(1).to({x:642.8,y:258},0).wait(1).to({x:639.3,y:259.3},0).wait(1).to({x:635.8,y:260.4},0).wait(1).to({x:632.2,y:261.3},0).wait(1).to({x:628.6,y:261.9},0).wait(1).to({x:624.9,y:262.1},0).wait(1).to({x:621.2,y:261.9},0).wait(1).to({x:617.6,y:261.3},0).wait(1).to({x:614.1,y:260.2},0).wait(1).to({x:610.8,y:258.6},0).wait(1).to({x:607.7,y:256.6},0).wait(1).to({x:604.9,y:254.2},0).wait(1).to({x:602.4,y:251.5},0).wait(1).to({x:600.2,y:248.5},0).wait(1).to({x:598.2,y:245.4},0).wait(1).to({x:596.4,y:242.2},0).wait(1).to({x:594.9,y:238.9},0).wait(1).to({x:593.5,y:235.3},0).wait(1).to({x:592.3,y:231.9},0).wait(1).to({x:591.2,y:228.3},0).wait(1).to({x:590.3,y:224.8},0).wait(1).to({x:589.4,y:221.2},0).wait(1).to({x:589.2,y:217},0).wait(1).to({y:212.8},0).wait(1).to({x:589.4,y:208.6},0).wait(1).to({x:589.8,y:204.3},0).wait(1).to({x:590.5,y:200.2},0).wait(1).to({x:591.4,y:196.1},0).wait(1).to({x:592.6,y:192.1},0).wait(1).to({x:594.3,y:188.2},0).wait(1).to({x:596.3,y:184.6},0).wait(1).to({x:598.7,y:181.2},0).wait(1).to({x:601.6,y:178.1},0).wait(1).to({x:604.8,y:175.4},0).wait(1).to({x:608.3,y:173.2},0).wait(1).to({x:612.1,y:171.4},0).wait(1).to({x:616.1,y:170},0).wait(1).to({x:620.1,y:169},0).wait(1).to({x:624.3,y:168.3},0).wait(1).to({x:628.4,y:167.9},0).wait(1).to({x:632.7,y:167.8},0).wait(1).to({x:636.9,y:167.9},0).wait(1).to({x:639.6,y:164},0).wait(1).to({x:642.5,y:160.2},0).wait(1).to({x:645.5,y:156.5},0).wait(1).to({x:648.7,y:152.9},0).wait(1).to({x:652.1,y:149.7},0).wait(1).to({x:655.8,y:146.8},0).wait(1).to({x:659.9,y:144.4},0).wait(1).to({x:664.4,y:143.1},0).wait(1).to({x:669.1,y:143.4},0).wait(1).to({x:673.3,y:145.4},0).wait(1).to({x:676.8,y:148.6},0).wait(1).to({x:679.6,y:152.4},0).wait(1).to({x:681.9,y:156.6},0).wait(1).to({x:683.8,y:160.9},0).wait(1).to({x:685.4,y:165.4},0).wait(1).to({x:686.8,y:169.9},0).wait(1).to({x:688.1,y:174.5},0).wait(1).to({x:689.2,y:179.1},0).wait(1).to({x:690.2,y:183.7},0).wait(1).to({x:691.1,y:188.3},0).wait(1).to({x:691.9,y:193},0).wait(1).to({x:695.1,y:195.6},0).wait(1).to({x:698.1,y:198.4},0).wait(1).to({x:701,y:201.3},0).wait(1).to({x:703.7,y:204.4},0).wait(1).to({x:706.1,y:207.7},0).wait(1).to({x:707.9,y:211.3},0).wait(1).to({x:709.1,y:215.2},0).wait(1).to({x:709.3,y:219.3},0).wait(1).to({x:708.3,y:223.3},0).wait(1).to({x:706.3,y:226.8},0).wait(1).to({x:703.6,y:229.9},0).wait(1).to({x:700.5,y:232.5},0).wait(1).to({x:697.1,y:234.8},0).wait(1).to({x:693.5,y:236.9},0).wait(1).to({x:689.9,y:238.7},0).wait(1).to({x:686.1,y:240.3},0).wait(1).to({x:682.3,y:241.7},0).wait(1).to({x:678.4,y:243.1},0).wait(1).to({x:662.2,y:247.2},0).wait(1).to({x:659.1,y:249.2},0).wait(1).to({x:655.9,y:251.2},0).wait(1).to({x:652.8,y:253},0).wait(1).to({x:649.5,y:254.8},0).wait(1).to({x:646.1,y:256.5},0).wait(1).to({x:642.8,y:258},0).wait(1).to({x:639.3,y:259.3},0).wait(1).to({x:635.8,y:260.4},0).wait(1).to({x:632.2,y:261.3},0).wait(1).to({x:628.6,y:261.9},0).wait(1).to({x:624.9,y:262.1},0).wait(1).to({x:621.2,y:261.9},0).wait(1).to({x:617.6,y:261.3},0).wait(1).to({x:614.1,y:260.2},0).wait(1).to({x:610.8,y:258.6},0).wait(1).to({x:607.7,y:256.6},0).wait(1).to({x:604.9,y:254.2},0).wait(1).to({x:602.4,y:251.5},0).wait(1).to({x:600.2,y:248.5},0).wait(1).to({x:598.2,y:245.4},0).wait(1).to({x:596.4,y:242.2},0).wait(1).to({x:594.9,y:238.9},0).wait(1).to({x:593.5,y:235.3},0).wait(1).to({x:592.3,y:231.9},0).wait(1).to({x:591.2,y:228.3},0).wait(1).to({x:590.3,y:224.8},0).wait(1).to({x:589.4,y:221.2},0).wait(1).to({x:589.2,y:217},0).wait(1).to({y:212.8},0).wait(1).to({x:589.4,y:208.6},0).wait(1).to({x:589.8,y:204.3},0).wait(1).to({x:590.5,y:200.2},0).wait(1).to({x:591.4,y:196.1},0).wait(1).to({x:592.6,y:192.1},0).wait(1).to({x:594.3,y:188.2},0).wait(1).to({x:596.3,y:184.6},0).wait(1).to({x:598.7,y:181.2},0).wait(1).to({x:601.6,y:178.1},0).wait(1).to({x:604.8,y:175.4},0).wait(1).to({x:608.3,y:173.2},0).wait(1).to({x:612.1,y:171.4},0).wait(1).to({x:616.1,y:170},0).wait(1).to({x:620.1,y:169},0).wait(1).to({x:624.3,y:168.3},0).wait(1).to({x:628.4,y:167.9},0).wait(1).to({x:632.7,y:167.8},0).wait(1).to({x:636.9,y:167.9},0).wait(1).to({x:639.6,y:164},0).wait(1).to({x:642.5,y:160.2},0).wait(1).to({x:645.5,y:156.5},0).wait(1).to({x:648.7,y:152.9},0).wait(1).to({x:652.1,y:149.7},0).wait(1).to({x:655.8,y:146.8},0).wait(1).to({x:659.9,y:144.4},0).wait(1).to({x:664.4,y:143.1},0).wait(1).to({x:669.1,y:143.4},0).wait(1).to({x:673.3,y:145.4},0).wait(1).to({x:676.8,y:148.6},0).wait(1).to({x:679.6,y:152.4},0).wait(1).to({x:681.9,y:156.6},0).wait(1).to({x:683.8,y:160.9},0).wait(1).to({x:685.4,y:165.4},0).wait(1).to({x:686.8,y:169.9},0).wait(1).to({x:688.1,y:174.5},0).wait(1).to({x:689.2,y:179.1},0).wait(1).to({x:690.2,y:183.7},0).wait(1).to({x:691.1,y:188.3},0).wait(1).to({x:691.9,y:193},0).wait(1).to({x:695.1,y:195.6},0).wait(1).to({x:698.1,y:198.4},0).wait(1).to({x:701,y:201.3},0).wait(1).to({x:703.7,y:204.4},0).wait(1).to({x:706.1,y:207.7},0).wait(1).to({x:707.9,y:211.3},0).wait(1).to({x:709.1,y:215.2},0).wait(1).to({x:709.3,y:219.3},0).wait(1).to({x:708.3,y:223.3},0).wait(1).to({x:706.3,y:226.8},0).wait(1).to({x:703.6,y:229.9},0).wait(1).to({x:700.5,y:232.5},0).wait(1).to({x:697.1,y:234.8},0).wait(1).to({x:693.5,y:236.9},0).wait(1).to({x:689.9,y:238.7},0).wait(1).to({x:686.1,y:240.3},0).wait(1).to({x:682.3,y:241.7},0).wait(1).to({x:678.4,y:243.1},0).to({_off:true},1).wait(5));

	// Layer 14
	this.instance_9 = new lib.Symbol10();
	this.instance_9.parent = this;
	this.instance_9.setTransform(624.5,167.9,1,1,0,0,0,15.3,17.6);
	this.instance_9._off = true;

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#4C4C4D").s().p("AAdg3IAEACIhBBtg");
	this.shape_477.setTransform(621.1,174.2);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#4C4C4D").s().p("AhAAAICBgCIgCADIAAACg");
	this.shape_478.setTransform(617.4,167.9);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#4C4C4D").s().p("Aggg1QADAAABgDIA9Byg");
	this.shape_479.setTransform(628.2,174.2);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#4C4C4D").s().p("AhAABIgBgDICDADIiCACg");
	this.shape_480.setTransform(631.9,167.9);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#4C4C4D").s().p("Aghg4IBDBwIgBAAQgDgBgCACg");
	this.shape_481.setTransform(621.2,161.6);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#4C4C4D").s().p("AgiA2IBFhvIhABzQgCgCgDgCg");
	this.shape_482.setTransform(628.2,161.8);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#4C4C4D").s().p("AgDBxIgGAHIgEgEIAKgLIgBgHIgJAKIgEgEIANgPIgBgGIgJALIgFgEIANgPIAAgHIgLANIgFgEIAPgSIACgvIgpAZIgIAXIgGgCIAGgRIgGADIgHAVIgGgCIAFgPIgFACIgHAUIgGgCIAFgOIgGADIgFAQIgGgCIADgKIg5AdIA0gjIgJgCIABgGIAPADIAGgEIgNgDIABgGIATAEIAFgDIgOgDIABgGIAVAEIAFgEIgRgDIABgGIAXAEIArgXIgogVIgYAFIgCgGIASgDIgFgEIgWAEIgBgGIAQgDIgFgDIgVAEIgBgGIAOgDIgFgEIgRADIgBgGIAKgCIg0gjIA4AcIgDgJIAGgCIAFAOIAGADIgFgMIAGgCIAHASIAFADIgFgOIAGgCIAHAUIAGADIgGgRIAGgCIAIAWIAoAaIgBgxIgRgTIAFgEIAMAOIABgGIgPgRIAFgEIAKAMIABgGIgOgQIAFgEIAJALIAAgHIgKgMIAEgEIAHAIIADhAIAEA/IAGgHIAFAEIgKAMIABAGIAIgKIAFAEIgNAPIABAGIAJgLIAFAEIgOAQIABAGIALgNIAEAEIgPASIgBAxIAngZIAIgXIAGACIgGASIAFgDIAHgVIAGACIgFAPIAGgDIAGgUIAGACIgFAOIAHgDIAFgQIAGACIgEAKIA5gcIg0AjIAJACIgBAGIgPgDIgFAEIANACIgCAGIgTgDIgFADIAPADIgCAGIgUgEIgFADIAQAEIgBAGIgXgFIgqAWIArAXIAYgFIABAGIgSAEIAGADIAVgEIABAGIgPADIAFAEIAUgEIABAGIgOADIAGADIAQgDIABAGIgKACIA1AjIg4gbIADAJIgGACIgFgPIgGgDIAEANIgGACIgGgTIgFgCIAEANIgGACIgGgTIgGgDIAFAQIgFACIgIgWIgqgaIACAuIAQATIgEAEIgNgOIAAAGIAPARIgFAEIgLgMIAAAGIAOAQIgFAEIgJgLIgBAHIALAMIgFAEIgGgHIgEA/gAgFgDQgCACAAADQAAAEACACQADADADAAQADAAADgDQACgDAAgDQAAgDgCgCQgDgDgDAAQgDAAgDADg");
	this.shape_483.setTransform(624.5,167.8);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#4C4C4D").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgUAaABQAbgBATAUQATATAAAaQAAAbgTATQgTAUgbgBQgaABgTgUgAgrgrQgSATAAAYQAAAZASATQASASAZAAQAaAAASgSQASgTAAgZQAAgYgSgTQgSgSgaAAQgZAAgSASg");
	this.shape_484.setTransform(624.5,167.9);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#4C4C4D").s().p("AgGAIQgDgEAAgEQAAgEADgDQADgCADAAQAEAAADACQADADAAAEQAAAEgDAEQgDADgEAAQgDAAgDgDg");
	this.shape_485.setTransform(622,172.5);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#4C4C4D").s().p("AgHAHQgDgDAAgEQAAgDADgDQAEgDADgBQAEABADADQADADAAADQAAAEgDADQgDAEgEAAQgDAAgEgEg");
	this.shape_486.setTransform(627.2,172.3);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#4C4C4D").s().p("AgGAHQgDgDgBgEQABgEADgDQADgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_487.setTransform(629.7,168);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#4C4C4D").s().p("AgGAIQgEgEAAgEQAAgEAEgDQADgCADAAQAEAAADACQAEADAAAEQAAAEgEAEQgDADgEAAQgDAAgDgDg");
	this.shape_488.setTransform(627.4,163.5);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#4C4C4D").s().p("AgHAHQgDgDAAgEQAAgDADgDQAEgEADAAQAFAAACAEQADADAAADQAAAEgDADQgCAEgFAAQgDAAgEgEg");
	this.shape_489.setTransform(622.1,163.2);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#4C4C4D").s().p("AgGAHQgDgCAAgFQAAgDADgEQADgCADAAQAEAAADACQADAEAAADQAAAFgDACQgDADgEAAQgDAAgDgDg");
	this.shape_490.setTransform(619.2,167.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},180).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477}]},1).to({state:[{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(180).to({_off:false},0).wait(1).to({x:623.9,y:162.8},0).wait(1).to({x:623.7,y:157.7},0).wait(1).to({x:623.9,y:152.7},0).wait(1).to({x:624.7,y:147.6},0).wait(1).to({x:626,y:142.7},0).wait(1).to({x:627.9,y:138},0).wait(1).to({x:630.3,y:133.5},0).wait(1).to({x:633.3,y:129.4},0).wait(1).to({x:636.7,y:125.7},0).wait(1).to({x:640.5,y:122.3},0).wait(1).to({x:644.6,y:119.3},0).wait(1).to({x:648.9,y:116.6},0).wait(1).to({x:653.4,y:114.3},0).wait(1).to({x:658,y:112.2},0).wait(1).to({x:662.8,y:110.4},0).wait(1).to({x:667.6,y:108.8},0).wait(1).to({x:672.5,y:107.4},0).wait(1).to({x:674.8,y:109.4},0).wait(1).to({x:677,y:111.5},0).wait(1).to({x:679.3,y:113.7},0).wait(1).to({x:681.4,y:115.9},0).wait(1).to({x:683.4,y:118.1},0).wait(1).to({x:685.4,y:120.4},0).wait(1).to({x:687.3,y:122.8},0).wait(1).to({x:689.2,y:125.2},0).wait(1).to({x:691,y:127.7},0).wait(1).to({x:692.7,y:130.2},0).wait(1).to({x:694.3,y:132.8},0).wait(1).to({x:695.8,y:135.5},0).wait(1).to({x:697.2,y:138.2},0).wait(1).to({x:698.5,y:140.9},0).wait(1).to({x:699.8,y:143.7},0).wait(1).to({x:700.9,y:146.6},0).wait(1).to({x:701.9,y:149.4},0).wait(1).to({x:702.8,y:152.4},0).wait(1).to({x:703.6,y:155.3},0).wait(1).to({x:704.3,y:158.3},0).wait(1).to({x:704.9,y:161.3},0).wait(1).to({x:705.4,y:164.2},0).wait(1).to({x:705.8,y:167.3},0).wait(1).to({x:706.1,y:170.4},0).wait(1).to({x:706.3,y:173.1},0).wait(1).to({x:706.4,y:176.5},0).wait(1).to({x:706,y:179.4},0).wait(1).to({x:705.6,y:182.2},0).wait(1).to({x:705.1,y:185},0).wait(1).to({x:704.6,y:187.9},0).wait(1).to({x:704.1,y:190.7},0).wait(1).to({x:703.5,y:193.6},0).wait(1).to({x:702.9,y:196.4},0).wait(1).to({x:702.2,y:199.2},0).wait(1).to({x:701.4,y:201.9},0).wait(1).to({x:700.6,y:204.7},0).wait(1).to({x:699.6,y:207.4},0).wait(1).to({x:698.6,y:210.1},0).wait(1).to({x:697.5,y:212.7},0).wait(1).to({x:696.3,y:215.3},0).wait(1).to({x:694.9,y:217.9},0).wait(1).to({x:693.4,y:220.3},0).wait(1).to({x:691.7,y:222.7},0).wait(1).to({x:689.9,y:224.9},0).wait(1).to({x:687.9,y:226.9},0).wait(1).to({x:685.7,y:228.8},0).wait(1).to({x:683.3,y:230.4},0).wait(1).to({x:680.7,y:231.6},0).wait(1).to({x:678,y:232.6},0).wait(1).to({x:675.2,y:233.2},0).wait(1).to({x:672.3,y:233.5},0).wait(1).to({x:669.5,y:233.4},0).wait(1).to({x:666.6,y:233.1},0).wait(1).to({x:663.8,y:232.6},0).wait(1).to({x:661,y:231.8},0).wait(1).to({x:658.3,y:230.9},0).wait(1).to({x:655.7,y:229.8},0).wait(1).to({x:653,y:228.6},0).wait(1).to({x:650.4,y:227.3},0).wait(1).to({x:647.9,y:225.9},0).wait(1).to({x:653.2,y:216.9},0).wait(1).to({x:657,y:207.2},0).wait(1).to({x:659.2,y:197},0).wait(1).to({x:659.7,y:186.6},0).wait(1).to({x:658.3,y:176.3},0).wait(1).to({x:654.6,y:166.6},0).wait(1).to({x:648.6,y:158.1},0).wait(1).to({x:640.5,y:151.6},0).wait(1).to({x:630.9,y:147.7},0).wait(1).to({x:624.5,y:167.9},0).wait(1).to({x:623.9,y:162.8},0).wait(1).to({x:623.7,y:157.7},0).wait(1).to({x:623.9,y:152.7},0).wait(1).to({x:624.7,y:147.6},0).wait(1).to({x:626,y:142.7},0).wait(1).to({x:627.9,y:138},0).wait(1).to({x:630.3,y:133.5},0).wait(1).to({x:633.3,y:129.4},0).wait(1).to({x:636.7,y:125.7},0).wait(1).to({x:640.5,y:122.3},0).wait(1).to({x:644.6,y:119.3},0).wait(1).to({x:648.9,y:116.6},0).wait(1).to({x:653.4,y:114.3},0).wait(1).to({x:658,y:112.2},0).wait(1).to({x:662.8,y:110.4},0).wait(1).to({x:667.6,y:108.8},0).wait(1).to({x:672.5,y:107.4},0).wait(1).to({x:674.8,y:109.4},0).wait(1).to({x:677,y:111.5},0).wait(1).to({x:679.3,y:113.7},0).wait(1).to({x:681.4,y:115.9},0).wait(1).to({x:683.4,y:118.1},0).wait(1).to({x:685.4,y:120.4},0).wait(1).to({x:687.3,y:122.8},0).wait(1).to({x:689.2,y:125.2},0).wait(1).to({x:691,y:127.7},0).wait(1).to({x:692.7,y:130.2},0).wait(1).to({x:694.3,y:132.8},0).wait(1).to({x:695.8,y:135.5},0).wait(1).to({x:697.2,y:138.2},0).wait(1).to({x:698.5,y:140.9},0).wait(1).to({x:699.8,y:143.7},0).wait(1).to({x:700.9,y:146.6},0).wait(1).to({x:701.9,y:149.4},0).wait(1).to({x:702.8,y:152.4},0).wait(1).to({x:703.6,y:155.3},0).wait(1).to({x:704.3,y:158.3},0).wait(1).to({x:704.9,y:161.3},0).wait(1).to({x:705.4,y:164.2},0).wait(1).to({x:705.8,y:167.3},0).wait(1).to({x:706.1,y:170.4},0).wait(1).to({x:706.3,y:173.1},0).wait(1).to({x:706.4,y:176.5},0).wait(1).to({x:706,y:179.4},0).wait(1).to({x:705.6,y:182.2},0).wait(1).to({x:705.1,y:185},0).wait(1).to({x:704.6,y:187.9},0).wait(1).to({x:704.1,y:190.7},0).wait(1).to({x:703.5,y:193.6},0).wait(1).to({x:702.9,y:196.4},0).wait(1).to({x:702.2,y:199.2},0).wait(1).to({x:701.4,y:201.9},0).wait(1).to({x:700.6,y:204.7},0).wait(1).to({x:699.6,y:207.4},0).wait(1).to({x:698.6,y:210.1},0).wait(1).to({x:697.5,y:212.7},0).wait(1).to({x:696.3,y:215.3},0).wait(1).to({x:694.9,y:217.9},0).wait(1).to({x:693.4,y:220.3},0).wait(1).to({x:691.7,y:222.7},0).wait(1).to({x:689.9,y:224.9},0).wait(1).to({x:687.9,y:226.9},0).wait(1).to({x:685.7,y:228.8},0).wait(1).to({x:683.3,y:230.4},0).wait(1).to({x:680.7,y:231.6},0).wait(1).to({x:678,y:232.6},0).wait(1).to({x:675.2,y:233.2},0).wait(1).to({x:672.3,y:233.5},0).wait(1).to({x:669.5,y:233.4},0).wait(1).to({x:666.6,y:233.1},0).wait(1).to({x:663.8,y:232.6},0).wait(1).to({x:661,y:231.8},0).wait(1).to({x:658.3,y:230.9},0).wait(1).to({x:655.7,y:229.8},0).wait(1).to({x:653,y:228.6},0).wait(1).to({x:650.4,y:227.3},0).wait(1).to({x:647.9,y:225.9},0).wait(1).to({x:653.2,y:216.9},0).wait(1).to({x:657,y:207.2},0).wait(1).to({x:659.2,y:197},0).wait(1).to({x:659.7,y:186.6},0).wait(1).to({x:658.3,y:176.3},0).wait(1).to({x:654.6,y:166.6},0).wait(1).to({x:648.6,y:158.1},0).wait(1).to({x:640.5,y:151.6},0).wait(1).to({x:630.9,y:147.7},0).wait(1).to({x:624.5,y:167.9},0).wait(1).to({x:623.9,y:162.8},0).wait(1).to({x:623.7,y:157.7},0).wait(1).to({x:623.9,y:152.7},0).wait(1).to({x:624.7,y:147.6},0).wait(1).to({x:626,y:142.7},0).wait(1).to({x:627.9,y:138},0).wait(1).to({x:630.3,y:133.5},0).wait(1).to({x:633.3,y:129.4},0).wait(1).to({x:636.7,y:125.7},0).wait(1).to({x:640.5,y:122.3},0).wait(1).to({x:644.6,y:119.3},0).wait(1).to({x:648.9,y:116.6},0).wait(1).to({x:653.4,y:114.3},0).wait(1).to({x:658,y:112.2},0).wait(1).to({x:662.8,y:110.4},0).wait(1).to({x:667.6,y:108.8},0).wait(1).to({x:672.5,y:107.4},0).wait(1).to({x:674.8,y:109.4},0).wait(1).to({x:677,y:111.5},0).wait(1).to({x:679.3,y:113.7},0).wait(1).to({x:681.4,y:115.9},0).wait(1).to({x:683.4,y:118.1},0).wait(1).to({x:685.4,y:120.4},0).wait(1).to({x:687.3,y:122.8},0).wait(1).to({x:689.2,y:125.2},0).wait(1).to({x:691,y:127.7},0).wait(1).to({x:692.7,y:130.2},0).wait(1).to({x:694.3,y:132.8},0).wait(1).to({x:695.8,y:135.5},0).wait(1).to({x:697.2,y:138.2},0).wait(1).to({x:698.5,y:140.9},0).wait(1).to({x:699.8,y:143.7},0).wait(1).to({x:700.9,y:146.6},0).wait(1).to({x:701.9,y:149.4},0).wait(1).to({x:702.8,y:152.4},0).wait(1).to({x:703.6,y:155.3},0).wait(1).to({x:704.3,y:158.3},0).wait(1).to({x:704.9,y:161.3},0).wait(1).to({x:705.4,y:164.2},0).wait(1).to({x:705.8,y:167.3},0).wait(1).to({x:706.1,y:170.4},0).wait(1).to({x:706.3,y:173.1},0).wait(1).to({x:706.4,y:176.5},0).wait(1).to({x:706,y:179.4},0).wait(1).to({x:705.6,y:182.2},0).wait(1).to({x:705.1,y:185},0).wait(1).to({x:704.6,y:187.9},0).wait(1).to({x:704.1,y:190.7},0).wait(1).to({x:703.5,y:193.6},0).wait(1).to({x:702.9,y:196.4},0).wait(1).to({x:702.2,y:199.2},0).wait(1).to({x:701.4,y:201.9},0).wait(1).to({x:700.6,y:204.7},0).wait(1).to({x:699.6,y:207.4},0).wait(1).to({x:698.6,y:210.1},0).wait(1).to({x:697.5,y:212.7},0).wait(1).to({x:696.3,y:215.3},0).wait(1).to({x:694.9,y:217.9},0).wait(1).to({x:693.4,y:220.3},0).wait(1).to({x:691.7,y:222.7},0).wait(1).to({x:689.9,y:224.9},0).wait(1).to({x:687.9,y:226.9},0).wait(1).to({x:685.7,y:228.8},0).wait(1).to({x:683.3,y:230.4},0).wait(1).to({x:680.7,y:231.6},0).wait(1).to({x:678,y:232.6},0).wait(1).to({x:675.2,y:233.2},0).wait(1).to({x:672.3,y:233.5},0).wait(1).to({x:669.5,y:233.4},0).wait(1).to({x:666.6,y:233.1},0).wait(1).to({x:663.8,y:232.6},0).wait(1).to({x:661,y:231.8},0).wait(1).to({x:658.3,y:230.9},0).wait(1).to({x:655.7,y:229.8},0).wait(1).to({x:653,y:228.6},0).wait(1).to({x:650.4,y:227.3},0).wait(1).to({x:647.9,y:225.9},0).wait(1).to({x:653.2,y:216.9},0).wait(1).to({x:657,y:207.2},0).wait(1).to({x:659.2,y:197},0).wait(1).to({x:659.7,y:186.6},0).wait(1).to({x:658.3,y:176.3},0).wait(1).to({x:654.6,y:166.6},0).wait(1).to({x:648.6,y:158.1},0).wait(1).to({x:640.5,y:151.6},0).wait(1).to({x:630.9,y:147.7},0).to({_off:true},1).wait(5));

	// Layer 15
	this.instance_10 = new lib.Symbol11();
	this.instance_10.parent = this;
	this.instance_10.setTransform(736.9,246.9,1,1,0,0,0,15.3,17.6);
	this.instance_10._off = true;

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#4C4C4D").s().p("AAdg3IAFADIhDBsg");
	this.shape_491.setTransform(733.4,253.2);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#4C4C4D").s().p("Ag/AAICAgCIgBADIAAACg");
	this.shape_492.setTransform(729.7,246.9);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#4C4C4D").s().p("Aggg0QADgCABgCIA9Bxg");
	this.shape_493.setTransform(740.6,253.1);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#4C4C4D").s().p("AhAABIgBgDICDADIiCACg");
	this.shape_494.setTransform(744.3,246.9);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#4C4C4D").s().p("Aghg4IBDBwIgBAAIgFABg");
	this.shape_495.setTransform(733.6,240.6);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#4C4C4D").s().p("AghA2IBEhuIhAByQgCgDgCgBg");
	this.shape_496.setTransform(740.6,240.8);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#4C4C4D").s().p("AgDBxIgGAHIgFgEIAKgMIAAgGIgJAKIgEgEIAMgPIAAgGIgKALIgEgEIANgQIAAgGIgLANIgFgEIAPgSIACgwIgpAaIgIAXIgGgCIAGgRIgGADIgHAVIgGgCIAFgPIgFACIgHAUIgGgCIAFgOIgGADIgFAQIgGgCIADgKIg5AcIA0gjIgJgBIABgHIAPADIAGgDIgNgDIABgGIATAEIAFgEIgOgCIABgGIAUADIAGgDIgRgDIABgGIAXAEIArgXIgogVIgZAFIgBgGIASgEIgFgDIgWAEIgBgGIAPgDIgEgDIgVAEIgBgGIAOgDIgFgEIgRADIgBgGIAKgCIg1gjIA5AbIgDgIIAFgCIAFAOIAHADIgFgMIAGgCIAGASIAGADIgFgOIAGgCIAHAUIAFACIgFgQIAGgCIAHAWIApAZIgBgwIgRgTIAFgEIAMAOIAAgGIgOgRIAFgEIAKAMIAAgGIgNgQIAEgEIAKALIAAgHIgLgMIAFgEIAHAHIADg/IAEA/IAGgHIAFAEIgKALIAAAHIAJgKIAFAEIgNAPIAAAGIAKgLIAFAEIgOAPIAAAHIAMgNIAEAEIgPASIgBAxIAngZIAHgXIAGACIgGARIAGgDIAHgUIAGACIgFAPIAFgDIAHgUIAGACIgFAOIAGgDIAGgQIAGACIgEAKIA5gcIg0AjIAJACIgBAGIgPgDIgGAEIANACIgBAGIgTgEIgFAEIAOACIgBAHIgUgEIgFADIAQADIgBAHIgXgFIgqAWIArAXIAYgFIABAGIgSAEIAFADIAWgEIABAGIgPADIAFADIAUgEIABAHIgOACIAGAEIAQgDIABAGIgKACIA1AjIg4gbIADAIIgGACIgFgOIgGgDIAEAMIgGACIgGgSIgGgDIAFAOIgGACIgGgTIgGgDIAFAQIgGACIgHgWIgqgaIACAuIAQATIgFAEIgMgOIAAAGIAOARIgEAEIgLgMIAAAGIAOAQIgFAEIgKgLIAAAHIALAMIgFAEIgHgIIgEBAgAgFgDQgCACAAADQAAADACADQADACACAAQAJAAAAgIQAAgIgJAAQgCAAgDADg");
	this.shape_497.setTransform(736.9,246.8);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#4C4C4D").s().p("AgtAuQgUgTABgbQgBgaAUgTQATgTAaAAQAbAAATATQAUATgBAaQABAbgUATQgTATgbAAQgaAAgTgTgAgrgqQgSASAAAYQAAAaASASQATASAYAAQAZAAATgSQASgSAAgaQAAgYgSgSQgTgTgZAAQgYAAgTATg");
	this.shape_498.setTransform(736.9,246.8);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_499.setTransform(734.4,251.5);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#4C4C4D").s().p("AgHAHQgCgDgBgEQABgDACgDQAEgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgEgDg");
	this.shape_500.setTransform(739.6,251.3);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#4C4C4D").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgEADAAQAEAAADAEQAEADAAADQAAAEgEADQgDAEgEAAQgDAAgDgEg");
	this.shape_501.setTransform(742.1,246.9);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#4C4C4D").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgDADAAQAEAAADADQADADABADQgBAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_502.setTransform(739.8,242.5);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#4C4C4D").s().p("AgHAHQgCgDAAgEQAAgEACgDQADgDAEAAQAEAAAEADQACADAAAEQAAAEgCADQgEADgEAAQgEAAgDgDg");
	this.shape_503.setTransform(734.5,242.2);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_504.setTransform(731.6,246.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},180).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491}]},1).to({state:[{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(180).to({_off:false},0).wait(1).to({x:734,y:256},0).wait(1).to({x:727.1,y:262},0).wait(1).to({x:717.7,y:262.3},0).wait(1).to({x:708.7,y:259.3},0).wait(1).to({x:700.4,y:254.8},0).wait(1).to({x:692.4,y:249.6},0).wait(1).to({x:684.8,y:244},0).wait(1).to({x:677.5,y:238.1},0).wait(1).to({x:670.3,y:231.9},0).wait(1).to({x:663.2,y:225.6},0).wait(1).to({x:653.8,y:234.4},0).wait(1).to({x:643.8,y:242.7},0).wait(1).to({x:633.1,y:250.1},0).wait(1).to({x:621.7,y:256.3},0).wait(1).to({x:609.5,y:260.6},0).wait(1).to({x:596.7,y:262.2},0).wait(1).to({x:583.9,y:260.2},0).wait(1).to({x:572.3,y:254.5},0).wait(1).to({x:562.4,y:246.2},0).wait(1).to({x:554.1,y:236.2},0).wait(1).to({x:547.1,y:225.3},0).wait(1).to({x:541.2,y:213.8},0).wait(1).to({x:542.3,y:205.6},0).wait(1).to({x:543.9,y:197.6},0).wait(1).to({x:546.1,y:189.8},0).wait(1).to({x:548.9,y:182.1},0).wait(1).to({x:552.3,y:174.6},0).wait(1).to({x:556.2,y:167.4},0).wait(1).to({x:560.5,y:160.5},0).wait(1).to({x:565.3,y:153.9},0).wait(1).to({x:570.5,y:147.6},0).wait(1).to({x:576,y:141.5},0).wait(1).to({x:581.8,y:135.8},0).wait(1).to({x:587.9,y:130.3},0).wait(1).to({x:594.2,y:125.1},0).wait(1).to({x:600.8,y:120.2},0).wait(1).to({x:607.4,y:115.5},0).wait(1).to({x:614.3,y:111},0).wait(1).to({x:621.3,y:106.8},0).wait(1).to({x:628.4,y:102.8},0).wait(1).to({x:632.4,y:100.6},0).wait(1).to({x:636.5,y:98.7},0).wait(1).to({x:640.7,y:96.9},0).wait(1).to({x:645.1,y:95.4},0).wait(1).to({x:649.5,y:94.1},0).wait(1).to({x:653.9,y:93.2},0).wait(1).to({x:658.4,y:92.6},0).wait(1).to({x:662.9,y:92.4},0).wait(1).to({x:667.5,y:92.6},0).wait(1).to({x:672,y:93.2},0).wait(1).to({x:676.4,y:94.4},0).wait(1).to({x:680.6,y:96},0).wait(1).to({x:684.7,y:98},0).wait(1).to({x:688.5,y:100.4},0).wait(1).to({x:692.2,y:103.1},0).wait(1).to({x:695.5,y:106.2},0).wait(1).to({x:698.7,y:109.4},0).wait(1).to({x:701.6,y:112.9},0).wait(1).to({x:704.4,y:116.6},0).wait(1).to({x:706.9,y:120.4},0).wait(1).to({x:709.3,y:124.3},0).wait(1).to({x:711.5,y:128.3},0).wait(1).to({x:711.3,y:132.9},0).wait(1).to({x:711.2,y:137.6},0).wait(1).to({x:711.1,y:142.2},0).wait(1).to({x:711,y:146.9},0).wait(1).to({y:151.6},0).wait(1).to({x:711.1,y:156.3},0).wait(1).to({x:711.2,y:161},0).wait(1).to({x:711.3,y:165.6},0).wait(1).to({x:711.5,y:170.3},0).wait(1).to({x:711.8,y:175},0).wait(1).to({x:712.2,y:179.6},0).wait(1).to({x:712.7,y:184.3},0).wait(1).to({x:713.2,y:188.9},0).wait(1).to({x:713.9,y:193.5},0).wait(1).to({x:714.6,y:198.1},0).wait(1).to({x:715.5,y:202.7},0).wait(1).to({x:716.5,y:207.2},0).wait(1).to({x:717.7,y:211.8},0).wait(1).to({x:719.1,y:216.2},0).wait(1).to({x:720.7,y:220.6},0).wait(1).to({x:722.5,y:224.9},0).wait(1).to({x:724.5,y:229},0).wait(1).to({x:727,y:233.1},0).wait(1).to({x:729.7,y:236.9},0).wait(1).to({x:736.9,y:246.9},0).wait(1).to({x:734,y:256},0).wait(1).to({x:727.1,y:262},0).wait(1).to({x:717.7,y:262.3},0).wait(1).to({x:708.7,y:259.3},0).wait(1).to({x:700.4,y:254.8},0).wait(1).to({x:692.4,y:249.6},0).wait(1).to({x:684.8,y:244},0).wait(1).to({x:677.5,y:238.1},0).wait(1).to({x:670.3,y:231.9},0).wait(1).to({x:663.2,y:225.6},0).wait(1).to({x:653.8,y:234.4},0).wait(1).to({x:643.8,y:242.7},0).wait(1).to({x:633.1,y:250.1},0).wait(1).to({x:621.7,y:256.3},0).wait(1).to({x:609.5,y:260.6},0).wait(1).to({x:596.7,y:262.2},0).wait(1).to({x:583.9,y:260.2},0).wait(1).to({x:572.3,y:254.5},0).wait(1).to({x:562.4,y:246.2},0).wait(1).to({x:554.1,y:236.2},0).wait(1).to({x:547.1,y:225.3},0).wait(1).to({x:541.2,y:213.8},0).wait(1).to({x:542.3,y:205.6},0).wait(1).to({x:543.9,y:197.6},0).wait(1).to({x:546.1,y:189.8},0).wait(1).to({x:548.9,y:182.1},0).wait(1).to({x:552.3,y:174.6},0).wait(1).to({x:556.2,y:167.4},0).wait(1).to({x:560.5,y:160.5},0).wait(1).to({x:565.3,y:153.9},0).wait(1).to({x:570.5,y:147.6},0).wait(1).to({x:576,y:141.5},0).wait(1).to({x:581.8,y:135.8},0).wait(1).to({x:587.9,y:130.3},0).wait(1).to({x:594.2,y:125.1},0).wait(1).to({x:600.8,y:120.2},0).wait(1).to({x:607.4,y:115.5},0).wait(1).to({x:614.3,y:111},0).wait(1).to({x:621.3,y:106.8},0).wait(1).to({x:628.4,y:102.8},0).wait(1).to({x:632.4,y:100.6},0).wait(1).to({x:636.5,y:98.7},0).wait(1).to({x:640.7,y:96.9},0).wait(1).to({x:645.1,y:95.4},0).wait(1).to({x:649.5,y:94.1},0).wait(1).to({x:653.9,y:93.2},0).wait(1).to({x:658.4,y:92.6},0).wait(1).to({x:662.9,y:92.4},0).wait(1).to({x:667.5,y:92.6},0).wait(1).to({x:672,y:93.2},0).wait(1).to({x:676.4,y:94.4},0).wait(1).to({x:680.6,y:96},0).wait(1).to({x:684.7,y:98},0).wait(1).to({x:688.5,y:100.4},0).wait(1).to({x:692.2,y:103.1},0).wait(1).to({x:695.5,y:106.2},0).wait(1).to({x:698.7,y:109.4},0).wait(1).to({x:701.6,y:112.9},0).wait(1).to({x:704.4,y:116.6},0).wait(1).to({x:706.9,y:120.4},0).wait(1).to({x:709.3,y:124.3},0).wait(1).to({x:711.5,y:128.3},0).wait(1).to({x:711.3,y:132.9},0).wait(1).to({x:711.2,y:137.6},0).wait(1).to({x:711.1,y:142.2},0).wait(1).to({x:711,y:146.9},0).wait(1).to({y:151.6},0).wait(1).to({x:711.1,y:156.3},0).wait(1).to({x:711.2,y:161},0).wait(1).to({x:711.3,y:165.6},0).wait(1).to({x:711.5,y:170.3},0).wait(1).to({x:711.8,y:175},0).wait(1).to({x:712.2,y:179.6},0).wait(1).to({x:712.7,y:184.3},0).wait(1).to({x:713.2,y:188.9},0).wait(1).to({x:713.9,y:193.5},0).wait(1).to({x:714.6,y:198.1},0).wait(1).to({x:715.5,y:202.7},0).wait(1).to({x:716.5,y:207.2},0).wait(1).to({x:717.7,y:211.8},0).wait(1).to({x:719.1,y:216.2},0).wait(1).to({x:720.7,y:220.6},0).wait(1).to({x:722.5,y:224.9},0).wait(1).to({x:724.5,y:229},0).wait(1).to({x:727,y:233.1},0).wait(1).to({x:729.7,y:236.9},0).wait(1).to({x:736.9,y:246.9},0).wait(1).to({x:734,y:256},0).wait(1).to({x:727.1,y:262},0).wait(1).to({x:717.7,y:262.3},0).wait(1).to({x:708.7,y:259.3},0).wait(1).to({x:700.4,y:254.8},0).wait(1).to({x:692.4,y:249.6},0).wait(1).to({x:684.8,y:244},0).wait(1).to({x:677.5,y:238.1},0).wait(1).to({x:670.3,y:231.9},0).wait(1).to({x:663.2,y:225.6},0).wait(1).to({x:653.8,y:234.4},0).wait(1).to({x:643.8,y:242.7},0).wait(1).to({x:633.1,y:250.1},0).wait(1).to({x:621.7,y:256.3},0).wait(1).to({x:609.5,y:260.6},0).wait(1).to({x:596.7,y:262.2},0).wait(1).to({x:583.9,y:260.2},0).wait(1).to({x:572.3,y:254.5},0).wait(1).to({x:562.4,y:246.2},0).wait(1).to({x:554.1,y:236.2},0).wait(1).to({x:547.1,y:225.3},0).wait(1).to({x:541.2,y:213.8},0).wait(1).to({x:542.3,y:205.6},0).wait(1).to({x:543.9,y:197.6},0).wait(1).to({x:546.1,y:189.8},0).wait(1).to({x:548.9,y:182.1},0).wait(1).to({x:552.3,y:174.6},0).wait(1).to({x:556.2,y:167.4},0).wait(1).to({x:560.5,y:160.5},0).wait(1).to({x:565.3,y:153.9},0).wait(1).to({x:570.5,y:147.6},0).wait(1).to({x:576,y:141.5},0).wait(1).to({x:581.8,y:135.8},0).wait(1).to({x:587.9,y:130.3},0).wait(1).to({x:594.2,y:125.1},0).wait(1).to({x:600.8,y:120.2},0).wait(1).to({x:607.4,y:115.5},0).wait(1).to({x:614.3,y:111},0).wait(1).to({x:621.3,y:106.8},0).wait(1).to({x:628.4,y:102.8},0).wait(1).to({x:632.4,y:100.6},0).wait(1).to({x:636.5,y:98.7},0).wait(1).to({x:640.7,y:96.9},0).wait(1).to({x:645.1,y:95.4},0).wait(1).to({x:649.5,y:94.1},0).wait(1).to({x:653.9,y:93.2},0).wait(1).to({x:658.4,y:92.6},0).wait(1).to({x:662.9,y:92.4},0).wait(1).to({x:667.5,y:92.6},0).wait(1).to({x:672,y:93.2},0).wait(1).to({x:676.4,y:94.4},0).wait(1).to({x:680.6,y:96},0).wait(1).to({x:684.7,y:98},0).wait(1).to({x:688.5,y:100.4},0).wait(1).to({x:692.2,y:103.1},0).wait(1).to({x:695.5,y:106.2},0).wait(1).to({x:698.7,y:109.4},0).wait(1).to({x:701.6,y:112.9},0).wait(1).to({x:704.4,y:116.6},0).wait(1).to({x:706.9,y:120.4},0).wait(1).to({x:709.3,y:124.3},0).wait(1).to({x:711.5,y:128.3},0).wait(1).to({x:711.3,y:132.9},0).wait(1).to({x:711.2,y:137.6},0).wait(1).to({x:711.1,y:142.2},0).wait(1).to({x:711,y:146.9},0).wait(1).to({y:151.6},0).wait(1).to({x:711.1,y:156.3},0).wait(1).to({x:711.2,y:161},0).wait(1).to({x:711.3,y:165.6},0).wait(1).to({x:711.5,y:170.3},0).wait(1).to({x:711.8,y:175},0).wait(1).to({x:712.2,y:179.6},0).wait(1).to({x:712.7,y:184.3},0).wait(1).to({x:713.2,y:188.9},0).wait(1).to({x:713.9,y:193.5},0).wait(1).to({x:714.6,y:198.1},0).wait(1).to({x:715.5,y:202.7},0).wait(1).to({x:716.5,y:207.2},0).wait(1).to({x:717.7,y:211.8},0).wait(1).to({x:719.1,y:216.2},0).wait(1).to({x:720.7,y:220.6},0).wait(1).to({x:722.5,y:224.9},0).wait(1).to({x:724.5,y:229},0).wait(1).to({x:727,y:233.1},0).wait(1).to({x:729.7,y:236.9},0).to({_off:true},1).wait(5));

	// Layer 16
	this.instance_11 = new lib.Symbol12();
	this.instance_11.parent = this;
	this.instance_11.setTransform(714.1,160.1,1,1,0,0,0,15.3,17.6);
	this.instance_11._off = true;

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#4C4C4D").s().p("AAdg3IAEADIhBBsg");
	this.shape_505.setTransform(723.3,134.6);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#4C4C4D").s().p("AhAAAICBgCQgBABAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIABACg");
	this.shape_506.setTransform(719.6,128.3);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#4C4C4D").s().p("Aggg0QADgCABgCIA9Bxg");
	this.shape_507.setTransform(730.4,134.5);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#4C4C4D").s().p("AhAABIgBgDICDADIiCACg");
	this.shape_508.setTransform(734.1,128.3);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#4C4C4D").s().p("Aghg4IBDBwIgBAAQgDAAgCABg");
	this.shape_509.setTransform(723.5,122);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#4C4C4D").s().p("AgiA2IBFhuIhAByQgBgCgEgCg");
	this.shape_510.setTransform(730.5,122.2);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#4C4C4D").s().p("AgDBxIgGAHIgEgEIAKgMIgBgGIgJAKIgEgEIANgPIgBgGIgJALIgFgEIANgQIAAgGIgLANIgFgEIAPgSIACgwIgpAaIgIAXIgGgCIAGgRIgGADIgHAVIgGgCIAFgPIgFACIgHAUIgGgCIAFgOIgGADIgFAQIgGgCIADgKIg5AcIA0gjIgJgBIABgHIAPADIAGgDIgNgDIABgGIATAEIAFgEIgOgCIABgHIAVAEIAFgDIgRgDIABgHIAXAFIArgXIgogVIgYAFIgCgGIASgEIgFgDIgWAEIgBgGIAQgDIgFgDIgVAEIgBgHIAOgCIgFgEIgRADIgBgGIAKgCIg0gjIA4AbIgDgIIAGgCIAFAOIAGADIgFgMIAGgCIAHASIAFADIgFgOIAGgCIAHAUIAGACIgGgQIAGgCIAIAWIAoAZIgBgwIgRgTIAFgEIAMAOIABgHIgPgQIAFgEIAKAMIABgGIgOgQIAFgEIAJALIABgHIgLgMIAEgEIAHAHIADg/IAEA+IAGgGIAFAEIgKALIABAHIAIgKIAFAEIgNAPIABAGIAJgLIAFAEIgOAPIABAHIALgNIAEAEIgPASIgBAxIAngZIAIgXIAGACIgGARIAFgDIAHgUIAGABIgFAPIAGgCIAGgUIAGACIgEAOIAGgDIAFgQIAGACIgEAKIA5gcIg0AjIAJACIgBAGIgPgDIgFADIANADIgCAGIgTgEIgFAEIAPACIgCAHIgUgEIgFADIAQADIgBAHIgXgFIgqAWIArAXIAYgFIABAGIgSAEIAGADIAVgEIABAGIgPADIAFADIAUgEIABAHIgOACIAGAEIAQgDIABAGIgKACIA1AjIg4gbIADAIIgGACIgFgOIgGgDIAEAMIgGACIgGgSIgFgDIAEAOIgGACIgGgUIgGgCIAFAQIgFACIgIgWIgqgaIACAuIAQATIgEAEIgNgOIAAAGIAPARIgFAEIgLgMIAAAGIAOAQIgFAEIgJgLIgBAHIALAMIgFAEIgGgIIgEBAgAgHACQAAADACADQADACADAAQADAAADgCQACgDAAgDQAAgIgIAAQgIAAAAAIg");
	this.shape_511.setTransform(726.7,128.2);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#4C4C4D").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTgAgrgqQgSASAAAYQAAAaASASQASASAZAAQAaAAASgSQASgSAAgaQAAgYgSgSQgSgTgaAAQgZAAgSATg");
	this.shape_512.setTransform(726.7,128.2);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_513.setTransform(724.3,132.9);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#4C4C4D").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgDADAAQAEAAADADQADADABADQgBAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_514.setTransform(729.4,132.7);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#4C4C4D").s().p("AgGAIQgDgDAAgFQAAgDADgDQADgDADAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_515.setTransform(732,128.3);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#4C4C4D").s().p("AgGAHQgDgDgBgEQABgDADgDQADgDADAAQAEAAADADQAEADAAADQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_516.setTransform(729.6,123.9);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#4C4C4D").s().p("AgHAHQgDgDAAgEQAAgDADgDQAEgEADAAQAEAAADAEQADADAAADQAAAEgDADQgDAEgEAAQgDAAgEgEg");
	this.shape_517.setTransform(724.4,123.6);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_518.setTransform(721.5,128.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},180).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505}]},1).to({state:[{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(180).to({_off:false},0).wait(1).to({x:719.7,y:161.3},0).wait(1).to({x:725.4,y:162.5},0).wait(1).to({x:731.2,y:163.5},0).wait(1).to({x:736.9,y:164.5},0).wait(1).to({x:742.7,y:165.3},0).wait(1).to({x:748.5,y:166.1},0).wait(1).to({x:754.2,y:166.8},0).wait(1).to({x:760.1,y:167.6},0).wait(1).to({x:765.9,y:168.5},0).wait(1).to({x:771.4,y:170.3},0).wait(1).to({x:771.7,y:175.2},0).wait(1).to({x:767.8,y:179.4},0).wait(1).to({x:763.3,y:183.3},0).wait(1).to({x:758.7,y:187},0).wait(1).to({x:754.1,y:190.6},0).wait(1).to({x:755.3,y:203.9},0).wait(1).to({x:756,y:217.2},0).wait(1).to({y:230.6},0).wait(1).to({x:755.2,y:243.9},0).wait(1).to({x:753.3,y:257.2},0).wait(1).to({x:749.8,y:270.1},0).wait(1).to({x:743.8,y:282},0).wait(1).to({x:734.5,y:291.4},0).wait(1).to({x:722.2,y:296.5},0).wait(1).to({x:708.9,y:297.1},0).wait(1).to({x:695.8,y:294.6},0).wait(1).to({x:683.1,y:290.2},0).wait(1).to({x:671,y:284.6},0).wait(1).to({x:659.2,y:278.3},0).wait(1).to({x:655.2,y:279.5},0).wait(1).to({x:651.1,y:280.7},0).wait(1).to({x:647.1,y:282},0).wait(1).to({x:643.1,y:283.2},0).wait(1).to({x:639.1,y:284.5},0).wait(1).to({x:635,y:285.7},0).wait(1).to({x:631,y:287},0).wait(1).to({x:627,y:288.2},0).wait(1).to({x:622.9,y:289.5},0).wait(1).to({x:618.9,y:290.7},0).wait(1).to({x:605.6,y:288.7},0).wait(1).to({x:592.5,y:285.9},0).wait(1).to({x:579.7,y:281.9},0).wait(1).to({x:567.5,y:276.2},0).wait(1).to({x:556.7,y:268.3},0).wait(1).to({x:548.7,y:257.6},0).wait(1).to({x:545,y:244.7},0).wait(1).to({x:545.7,y:231.3},0).wait(1).to({x:549.3,y:218.4},0).wait(1).to({x:554.8,y:206.1},0).wait(1).to({x:561.4,y:194.5},0).wait(1).to({x:568.9,y:183.3},0).wait(1).to({x:576.9,y:172.5},0).wait(1).to({x:575.7,y:162.4},0).wait(1).to({x:575.5,y:152.2},0).wait(1).to({x:576.7,y:142.1},0).wait(1).to({x:579.6,y:132.4},0).wait(1).to({x:584.4,y:123.4},0).wait(1).to({x:590.9,y:115.7},0).wait(1).to({x:598.9,y:109.4},0).wait(1).to({x:607.9,y:104.6},0).wait(1).to({x:617.4,y:101.1},0).wait(1).to({x:627.3,y:98.6},0).wait(1).to({x:637.3,y:96.9},0).wait(1).to({x:647.4,y:95.9},0).wait(1).to({x:657.6,y:95.5},0).wait(1).to({x:660.9,y:97.4},0).wait(1).to({x:664.2,y:99.4},0).wait(1).to({x:667.4,y:101.5},0).wait(1).to({x:670.5,y:103.7},0).wait(1).to({x:673.7,y:106},0).wait(1).to({x:676.7,y:108.3},0).wait(1).to({x:679.7,y:110.7},0).wait(1).to({x:682.5,y:113.3},0).wait(1).to({x:685.3,y:115.9},0).wait(1).to({x:687.9,y:118.7},0).wait(1).to({x:690.3,y:121.6},0).wait(1).to({x:692.6,y:124.7},0).wait(1).to({x:694.7,y:127.9},0).wait(1).to({x:696.5,y:131.3},0).wait(1).to({x:698,y:134.8},0).wait(1).to({x:699.1,y:138.5},0).wait(1).to({x:699.8,y:142.2},0).wait(1).to({x:700.1,y:146},0).wait(1).to({x:700,y:149.8},0).wait(1).to({x:699.6,y:153.3},0).wait(1).to({x:698.6,y:157.4},0).wait(1).to({x:714.1,y:160.1},0).wait(1).to({x:719.7,y:161.3},0).wait(1).to({x:725.4,y:162.5},0).wait(1).to({x:731.2,y:163.5},0).wait(1).to({x:736.9,y:164.5},0).wait(1).to({x:742.7,y:165.3},0).wait(1).to({x:748.5,y:166.1},0).wait(1).to({x:754.2,y:166.8},0).wait(1).to({x:760.1,y:167.6},0).wait(1).to({x:765.9,y:168.5},0).wait(1).to({x:771.4,y:170.3},0).wait(1).to({x:771.7,y:175.2},0).wait(1).to({x:767.8,y:179.4},0).wait(1).to({x:763.3,y:183.3},0).wait(1).to({x:758.7,y:187},0).wait(1).to({x:754.1,y:190.6},0).wait(1).to({x:755.3,y:203.9},0).wait(1).to({x:756,y:217.2},0).wait(1).to({y:230.6},0).wait(1).to({x:755.2,y:243.9},0).wait(1).to({x:753.3,y:257.2},0).wait(1).to({x:749.8,y:270.1},0).wait(1).to({x:743.8,y:282},0).wait(1).to({x:734.5,y:291.4},0).wait(1).to({x:722.2,y:296.5},0).wait(1).to({x:708.9,y:297.1},0).wait(1).to({x:695.8,y:294.6},0).wait(1).to({x:683.1,y:290.2},0).wait(1).to({x:671,y:284.6},0).wait(1).to({x:659.2,y:278.3},0).wait(1).to({x:655.2,y:279.5},0).wait(1).to({x:651.1,y:280.7},0).wait(1).to({x:647.1,y:282},0).wait(1).to({x:643.1,y:283.2},0).wait(1).to({x:639.1,y:284.5},0).wait(1).to({x:635,y:285.7},0).wait(1).to({x:631,y:287},0).wait(1).to({x:627,y:288.2},0).wait(1).to({x:622.9,y:289.5},0).wait(1).to({x:618.9,y:290.7},0).wait(1).to({x:605.6,y:288.7},0).wait(1).to({x:592.5,y:285.9},0).wait(1).to({x:579.7,y:281.9},0).wait(1).to({x:567.5,y:276.2},0).wait(1).to({x:556.7,y:268.3},0).wait(1).to({x:548.7,y:257.6},0).wait(1).to({x:545,y:244.7},0).wait(1).to({x:545.7,y:231.3},0).wait(1).to({x:549.3,y:218.4},0).wait(1).to({x:554.8,y:206.1},0).wait(1).to({x:561.4,y:194.5},0).wait(1).to({x:568.9,y:183.3},0).wait(1).to({x:576.9,y:172.5},0).wait(1).to({x:575.7,y:162.4},0).wait(1).to({x:575.5,y:152.2},0).wait(1).to({x:576.7,y:142.1},0).wait(1).to({x:579.6,y:132.4},0).wait(1).to({x:584.4,y:123.4},0).wait(1).to({x:590.9,y:115.7},0).wait(1).to({x:598.9,y:109.4},0).wait(1).to({x:607.9,y:104.6},0).wait(1).to({x:617.4,y:101.1},0).wait(1).to({x:627.3,y:98.6},0).wait(1).to({x:637.3,y:96.9},0).wait(1).to({x:647.4,y:95.9},0).wait(1).to({x:657.6,y:95.5},0).wait(1).to({x:660.9,y:97.4},0).wait(1).to({x:664.2,y:99.4},0).wait(1).to({x:667.4,y:101.5},0).wait(1).to({x:670.5,y:103.7},0).wait(1).to({x:673.7,y:106},0).wait(1).to({x:676.7,y:108.3},0).wait(1).to({x:679.7,y:110.7},0).wait(1).to({x:682.5,y:113.3},0).wait(1).to({x:685.3,y:115.9},0).wait(1).to({x:687.9,y:118.7},0).wait(1).to({x:690.3,y:121.6},0).wait(1).to({x:692.6,y:124.7},0).wait(1).to({x:694.7,y:127.9},0).wait(1).to({x:696.5,y:131.3},0).wait(1).to({x:698,y:134.8},0).wait(1).to({x:699.1,y:138.5},0).wait(1).to({x:699.8,y:142.2},0).wait(1).to({x:700.1,y:146},0).wait(1).to({x:700,y:149.8},0).wait(1).to({x:699.6,y:153.3},0).wait(1).to({x:698.6,y:157.4},0).wait(1).to({x:714.1,y:160.1},0).wait(1).to({x:719.7,y:161.3},0).wait(1).to({x:725.4,y:162.5},0).wait(1).to({x:731.2,y:163.5},0).wait(1).to({x:736.9,y:164.5},0).wait(1).to({x:742.7,y:165.3},0).wait(1).to({x:748.5,y:166.1},0).wait(1).to({x:754.2,y:166.8},0).wait(1).to({x:760.1,y:167.6},0).wait(1).to({x:765.9,y:168.5},0).wait(1).to({x:771.4,y:170.3},0).wait(1).to({x:771.7,y:175.2},0).wait(1).to({x:767.8,y:179.4},0).wait(1).to({x:763.3,y:183.3},0).wait(1).to({x:758.7,y:187},0).wait(1).to({x:754.1,y:190.6},0).wait(1).to({x:755.3,y:203.9},0).wait(1).to({x:756,y:217.2},0).wait(1).to({y:230.6},0).wait(1).to({x:755.2,y:243.9},0).wait(1).to({x:753.3,y:257.2},0).wait(1).to({x:749.8,y:270.1},0).wait(1).to({x:743.8,y:282},0).wait(1).to({x:734.5,y:291.4},0).wait(1).to({x:722.2,y:296.5},0).wait(1).to({x:708.9,y:297.1},0).wait(1).to({x:695.8,y:294.6},0).wait(1).to({x:683.1,y:290.2},0).wait(1).to({x:671,y:284.6},0).wait(1).to({x:659.2,y:278.3},0).wait(1).to({x:655.2,y:279.5},0).wait(1).to({x:651.1,y:280.7},0).wait(1).to({x:647.1,y:282},0).wait(1).to({x:643.1,y:283.2},0).wait(1).to({x:639.1,y:284.5},0).wait(1).to({x:635,y:285.7},0).wait(1).to({x:631,y:287},0).wait(1).to({x:627,y:288.2},0).wait(1).to({x:622.9,y:289.5},0).wait(1).to({x:618.9,y:290.7},0).wait(1).to({x:605.6,y:288.7},0).wait(1).to({x:592.5,y:285.9},0).wait(1).to({x:579.7,y:281.9},0).wait(1).to({x:567.5,y:276.2},0).wait(1).to({x:556.7,y:268.3},0).wait(1).to({x:548.7,y:257.6},0).wait(1).to({x:545,y:244.7},0).wait(1).to({x:545.7,y:231.3},0).wait(1).to({x:549.3,y:218.4},0).wait(1).to({x:554.8,y:206.1},0).wait(1).to({x:561.4,y:194.5},0).wait(1).to({x:568.9,y:183.3},0).wait(1).to({x:576.9,y:172.5},0).wait(1).to({x:575.7,y:162.4},0).wait(1).to({x:575.5,y:152.2},0).wait(1).to({x:576.7,y:142.1},0).wait(1).to({x:579.6,y:132.4},0).wait(1).to({x:584.4,y:123.4},0).wait(1).to({x:590.9,y:115.7},0).wait(1).to({x:598.9,y:109.4},0).wait(1).to({x:607.9,y:104.6},0).wait(1).to({x:617.4,y:101.1},0).wait(1).to({x:627.3,y:98.6},0).wait(1).to({x:637.3,y:96.9},0).wait(1).to({x:647.4,y:95.9},0).wait(1).to({x:657.6,y:95.5},0).wait(1).to({x:660.9,y:97.4},0).wait(1).to({x:664.2,y:99.4},0).wait(1).to({x:667.4,y:101.5},0).wait(1).to({x:670.5,y:103.7},0).wait(1).to({x:673.7,y:106},0).wait(1).to({x:676.7,y:108.3},0).wait(1).to({x:679.7,y:110.7},0).wait(1).to({x:682.5,y:113.3},0).wait(1).to({x:685.3,y:115.9},0).wait(1).to({x:687.9,y:118.7},0).wait(1).to({x:690.3,y:121.6},0).wait(1).to({x:692.6,y:124.7},0).wait(1).to({x:694.7,y:127.9},0).wait(1).to({x:696.5,y:131.3},0).wait(1).to({x:698,y:134.8},0).wait(1).to({x:699.1,y:138.5},0).wait(1).to({x:699.8,y:142.2},0).wait(1).to({x:700.1,y:146},0).wait(1).to({x:700,y:149.8},0).wait(1).to({x:699.6,y:153.3},0).wait(1).to({x:698.6,y:157.4},0).to({_off:true},1).wait(5));

	// Layer 17
	this.instance_12 = new lib.Symbol13();
	this.instance_12.parent = this;
	this.instance_12.setTransform(683.3,175,1,1,0,0,0,15.3,17.6);
	this.instance_12._off = true;

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#4C4C4D").s().p("AAcg3IAGACIhDBtg");
	this.shape_519.setTransform(688.5,182.9);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#4C4C4D").s().p("Ag/AAIB/gCIgBADIABACg");
	this.shape_520.setTransform(684.8,176.5);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#4C4C4D").s().p("Aggg1QAEgBABgCIA8Byg");
	this.shape_521.setTransform(695.6,182.8);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#4C4C4D").s().p("AhAABIgBgDICDADIiCACg");
	this.shape_522.setTransform(699.3,176.6);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#4C4C4D").s().p("Aghg4IBDBwIgBAAIgFABg");
	this.shape_523.setTransform(688.7,170.3);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#4C4C4D").s().p("AghA3IBDhwIg/BzQgCgCgCgBg");
	this.shape_524.setTransform(695.7,170.4);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#4C4C4D").s().p("AgDBxIgGAHIgFgEIALgLIgBgHIgJAKIgEgEIAMgPIAAgGIgJALIgFgEIANgQIAAgGIgLANIgFgEIAPgSIACgwIgpAaIgIAXIgGgCIAGgRIgGADIgHAVIgGgCIAFgPIgFACIgHAUIgGgCIAFgOIgGADIgFAQIgGgCIADgKIg5AcIA0gjIgJgBIABgGIAPADIAGgEIgNgDIABgGIATAEIAFgDIgOgDIABgGIAUAEIAGgEIgRgDIABgGIAXAEIArgXIgogVIgZAFIgBgGIASgEIgFgDIgWAEIgBgGIAQgDIgFgDIgVAEIgBgGIAOgDIgFgEIgRADIgBgGIAKgCIg0gjIA4AcIgDgJIAGgCIAFAOIAGADIgFgMIAGgCIAHASIAFADIgFgOIAGgCIAHAUIAGADIgGgRIAGgCIAHAWIApAaIgBgxIgRgTIAFgEIAMAOIABgGIgPgRIAFgEIAKAMIABgGIgOgQIAFgEIAJALIAAgHIgKgMIAEgEIAHAIIADhAIAEA/IAGgHIAFAEIgKALIAAAHIAJgKIAFAEIgNAPIAAAGIAKgLIAFAEIgOAQIABAGIALgNIAEAEIgPASIgBAxIAngZIAIgXIAGACIgGARIAFgCIAHgVIAGACIgFAPIAGgDIAGgUIAGACIgFAOIAHgDIAFgQIAGACIgEAKIA5gcIg0AjIAJACIgBAGIgPgDIgGAEIANACIgBAGIgTgDIgFADIAPADIgCAGIgUgEIgFADIAQAEIgBAGIgXgFIgqAWIArAXIAYgFIABAGIgSAEIAFADIAWgEIABAGIgPADIAFAEIAUgEIABAGIgOADIAGADIAQgDIABAGIgKACIA1AjIg4gbIADAIIgGACIgFgOIgGgDIAEANIgGACIgGgTIgFgCIAEANIgGACIgGgTIgGgDIAFAQIgFACIgIgWIgqgaIACAuIAQATIgFAEIgMgOIAAAGIAPARIgFAEIgLgMIAAAGIAOAQIgFAEIgJgLIgBAHIALAMIgFAEIgGgHIgEA/gAgFgDQgCACAAADQAAADACADQADADACAAQAEAAADgDQACgCAAgEQAAgDgCgCQgDgDgEAAQgCAAgDADg");
	this.shape_525.setTransform(691.9,176.5);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#4C4C4D").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgUAaAAQAbAAATAUQATATAAAaQAAAbgTATQgTAUgbAAQgaAAgTgUgAgrgrQgSATAAAYQAAAZASATQASASAZAAQAZAAATgSQASgTAAgZQAAgYgSgTQgTgSgZAAQgZAAgSASg");
	this.shape_526.setTransform(691.9,176.5);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#4C4C4D").s().p("AgGAIQgDgEAAgEQAAgEADgDQADgCADAAQAEAAADACQADADAAAEQAAAEgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_527.setTransform(689.5,181.2);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#4C4C4D").s().p("AgGAIQgDgEAAgEQAAgDADgDQADgDADAAQAEAAAEADQADADAAADQAAAEgDAEQgEADgEAAQgDAAgDgDg");
	this.shape_528.setTransform(694.6,181);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#4C4C4D").s().p("AgHAHQgCgDAAgEQAAgDACgDQAEgDADAAQAFAAADADQACADAAADQAAAEgCADQgDADgFAAQgDAAgEgDg");
	this.shape_529.setTransform(697.2,176.6);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#4C4C4D").s().p("AgHAIQgCgEAAgEQAAgEACgDQADgCAEAAQAEAAAEACQACADAAAEQAAAEgCAEQgEACgEAAQgEAAgDgCg");
	this.shape_530.setTransform(694.8,172.2);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#4C4C4D").s().p("AgGAHQgEgDAAgEQABgDADgDQADgDADgBQAEABADADQAEADAAADQAAAEgEADQgDAEgEAAQgDAAgDgEg");
	this.shape_531.setTransform(689.6,171.9);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgEQADgDADAAQAEAAADADQADAEAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_532.setTransform(686.7,176.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},180).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519}]},1).to({state:[{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(180).to({_off:false},0).wait(1).to({x:690.2,y:178.8},0).wait(1).to({x:696.8,y:183.1},0).wait(1).to({x:702.8,y:188.3},0).wait(1).to({x:706.8,y:195.2},0).wait(1).to({x:704.5,y:202.4},0).wait(1).to({x:698.1,y:207},0).wait(1).to({x:690.9,y:210.1},0).wait(1).to({x:683.3,y:212.5},0).wait(1).to({x:686.5,y:213.2},0).wait(1).to({x:689.6,y:214.1},0).wait(1).to({x:692.8,y:215},0).wait(1).to({x:696,y:216.1},0).wait(1).to({x:699,y:217.1},0).wait(1).to({x:701.9,y:218.3},0).wait(1).to({x:704.8,y:219.7},0).wait(1).to({x:707.7,y:221.3},0).wait(1).to({x:710.3,y:223.2},0).wait(1).to({x:712.7,y:225.5},0).wait(1).to({x:714.5,y:228.2},0).wait(1).to({x:715.3,y:231.3},0).wait(1).to({x:715,y:234.5},0).wait(1).to({x:713.8,y:237.5},0).wait(1).to({x:712.1,y:240.2},0).wait(1).to({x:710,y:242.7},0).wait(1).to({x:707.7,y:244.9},0).wait(1).to({x:705.2,y:247},0).wait(1).to({x:702.7,y:249},0).wait(1).to({x:699.9,y:250.9},0).wait(1).to({x:697.2,y:252.7},0).wait(1).to({x:694.4,y:254.5},0).wait(1).to({x:689.4,y:258},0).wait(1).to({x:684.3,y:261.4},0).wait(1).to({x:679.2,y:264.8},0).wait(1).to({x:674,y:268},0).wait(1).to({x:668.7,y:271.1},0).wait(1).to({x:663.3,y:274},0).wait(1).to({x:657.6,y:276.7},0).wait(1).to({x:651.9,y:278.8},0).wait(1).to({x:645.9,y:279.5},0).wait(1).to({x:641.4,y:276},0).wait(1).to({y:269.9},0).wait(1).to({x:643,y:264},0).wait(1).to({x:645.3,y:258.3},0).wait(1).to({x:647.8,y:252.7},0).wait(1).to({x:650.6,y:247.2},0).wait(1).to({x:653.6,y:241.9},0).wait(1).to({x:650.8,y:239.1},0).wait(1).to({x:648.1,y:236.4},0).wait(1).to({x:645.5,y:233.5},0).wait(1).to({x:642.9,y:230.6},0).wait(1).to({x:640.4,y:227.5},0).wait(1).to({x:638.1,y:224.4},0).wait(1).to({x:636,y:221.2},0).wait(1).to({x:633.9,y:217.9},0).wait(1).to({x:632.1,y:214.5},0).wait(1).to({x:630.4,y:211},0).wait(1).to({x:629,y:207.4},0).wait(1).to({x:627.9,y:203.7},0).wait(1).to({x:627.1,y:199.9},0).wait(1).to({x:626.6,y:196.1},0).wait(1).to({y:192.2},0).wait(1).to({x:626.9,y:188.3},0).wait(1).to({x:627.6,y:184.5},0).wait(1).to({x:628.8,y:180.8},0).wait(1).to({x:630.3,y:177.3},0).wait(1).to({x:632.1,y:173.8},0).wait(1).to({x:634.2,y:170.6},0).wait(1).to({x:636.5,y:167.5},0).wait(1).to({x:639,y:164.6},0).wait(1).to({x:641.7,y:161.8},0).wait(1).to({x:644.5,y:159.1},0).wait(1).to({x:647.5,y:156.6},0).wait(1).to({x:650.5,y:154.2},0).wait(1).to({x:653.7,y:151.9},0).wait(1).to({x:656.9,y:149.7},0).wait(1).to({x:660.2,y:147.6},0).wait(1).to({x:659,y:151.9},0).wait(1).to({x:658.1,y:156.2},0).wait(1).to({x:657.6,y:160.6},0).wait(1).to({y:165},0).wait(1).to({x:658.7,y:169.2},0).wait(1).to({x:661.4,y:172.6},0).wait(1).to({x:665.5,y:174.3},0).wait(1).to({x:669.8,y:174.5},0).wait(1).to({x:674.2,y:173.9},0).wait(1).to({x:678.5,y:172.8},0).wait(1).to({x:683.3,y:175},0).wait(1).to({x:690.2,y:178.8},0).wait(1).to({x:696.8,y:183.1},0).wait(1).to({x:702.8,y:188.3},0).wait(1).to({x:706.8,y:195.2},0).wait(1).to({x:704.5,y:202.4},0).wait(1).to({x:698.1,y:207},0).wait(1).to({x:690.9,y:210.1},0).wait(1).to({x:683.3,y:212.5},0).wait(1).to({x:686.5,y:213.2},0).wait(1).to({x:689.6,y:214.1},0).wait(1).to({x:692.8,y:215},0).wait(1).to({x:696,y:216.1},0).wait(1).to({x:699,y:217.1},0).wait(1).to({x:701.9,y:218.3},0).wait(1).to({x:704.8,y:219.7},0).wait(1).to({x:707.7,y:221.3},0).wait(1).to({x:710.3,y:223.2},0).wait(1).to({x:712.7,y:225.5},0).wait(1).to({x:714.5,y:228.2},0).wait(1).to({x:715.3,y:231.3},0).wait(1).to({x:715,y:234.5},0).wait(1).to({x:713.8,y:237.5},0).wait(1).to({x:712.1,y:240.2},0).wait(1).to({x:710,y:242.7},0).wait(1).to({x:707.7,y:244.9},0).wait(1).to({x:705.2,y:247},0).wait(1).to({x:702.7,y:249},0).wait(1).to({x:699.9,y:250.9},0).wait(1).to({x:697.2,y:252.7},0).wait(1).to({x:694.4,y:254.5},0).wait(1).to({x:689.4,y:258},0).wait(1).to({x:684.3,y:261.4},0).wait(1).to({x:679.2,y:264.8},0).wait(1).to({x:674,y:268},0).wait(1).to({x:668.7,y:271.1},0).wait(1).to({x:663.3,y:274},0).wait(1).to({x:657.6,y:276.7},0).wait(1).to({x:651.9,y:278.8},0).wait(1).to({x:645.9,y:279.5},0).wait(1).to({x:641.4,y:276},0).wait(1).to({y:269.9},0).wait(1).to({x:643,y:264},0).wait(1).to({x:645.3,y:258.3},0).wait(1).to({x:647.8,y:252.7},0).wait(1).to({x:650.6,y:247.2},0).wait(1).to({x:653.6,y:241.9},0).wait(1).to({x:650.8,y:239.1},0).wait(1).to({x:648.1,y:236.4},0).wait(1).to({x:645.5,y:233.5},0).wait(1).to({x:642.9,y:230.6},0).wait(1).to({x:640.4,y:227.5},0).wait(1).to({x:638.1,y:224.4},0).wait(1).to({x:636,y:221.2},0).wait(1).to({x:633.9,y:217.9},0).wait(1).to({x:632.1,y:214.5},0).wait(1).to({x:630.4,y:211},0).wait(1).to({x:629,y:207.4},0).wait(1).to({x:627.9,y:203.7},0).wait(1).to({x:627.1,y:199.9},0).wait(1).to({x:626.6,y:196.1},0).wait(1).to({y:192.2},0).wait(1).to({x:626.9,y:188.3},0).wait(1).to({x:627.6,y:184.5},0).wait(1).to({x:628.8,y:180.8},0).wait(1).to({x:630.3,y:177.3},0).wait(1).to({x:632.1,y:173.8},0).wait(1).to({x:634.2,y:170.6},0).wait(1).to({x:636.5,y:167.5},0).wait(1).to({x:639,y:164.6},0).wait(1).to({x:641.7,y:161.8},0).wait(1).to({x:644.5,y:159.1},0).wait(1).to({x:647.5,y:156.6},0).wait(1).to({x:650.5,y:154.2},0).wait(1).to({x:653.7,y:151.9},0).wait(1).to({x:656.9,y:149.7},0).wait(1).to({x:660.2,y:147.6},0).wait(1).to({x:659,y:151.9},0).wait(1).to({x:658.1,y:156.2},0).wait(1).to({x:657.6,y:160.6},0).wait(1).to({y:165},0).wait(1).to({x:658.7,y:169.2},0).wait(1).to({x:661.4,y:172.6},0).wait(1).to({x:665.5,y:174.3},0).wait(1).to({x:669.8,y:174.5},0).wait(1).to({x:674.2,y:173.9},0).wait(1).to({x:678.5,y:172.8},0).wait(1).to({x:683.3,y:175},0).wait(1).to({x:690.2,y:178.8},0).wait(1).to({x:696.8,y:183.1},0).wait(1).to({x:702.8,y:188.3},0).wait(1).to({x:706.8,y:195.2},0).wait(1).to({x:704.5,y:202.4},0).wait(1).to({x:698.1,y:207},0).wait(1).to({x:690.9,y:210.1},0).wait(1).to({x:683.3,y:212.5},0).wait(1).to({x:686.5,y:213.2},0).wait(1).to({x:689.6,y:214.1},0).wait(1).to({x:692.8,y:215},0).wait(1).to({x:696,y:216.1},0).wait(1).to({x:699,y:217.1},0).wait(1).to({x:701.9,y:218.3},0).wait(1).to({x:704.8,y:219.7},0).wait(1).to({x:707.7,y:221.3},0).wait(1).to({x:710.3,y:223.2},0).wait(1).to({x:712.7,y:225.5},0).wait(1).to({x:714.5,y:228.2},0).wait(1).to({x:715.3,y:231.3},0).wait(1).to({x:715,y:234.5},0).wait(1).to({x:713.8,y:237.5},0).wait(1).to({x:712.1,y:240.2},0).wait(1).to({x:710,y:242.7},0).wait(1).to({x:707.7,y:244.9},0).wait(1).to({x:705.2,y:247},0).wait(1).to({x:702.7,y:249},0).wait(1).to({x:699.9,y:250.9},0).wait(1).to({x:697.2,y:252.7},0).wait(1).to({x:694.4,y:254.5},0).wait(1).to({x:689.4,y:258},0).wait(1).to({x:684.3,y:261.4},0).wait(1).to({x:679.2,y:264.8},0).wait(1).to({x:674,y:268},0).wait(1).to({x:668.7,y:271.1},0).wait(1).to({x:663.3,y:274},0).wait(1).to({x:657.6,y:276.7},0).wait(1).to({x:651.9,y:278.8},0).wait(1).to({x:645.9,y:279.5},0).wait(1).to({x:641.4,y:276},0).wait(1).to({y:269.9},0).wait(1).to({x:643,y:264},0).wait(1).to({x:645.3,y:258.3},0).wait(1).to({x:647.8,y:252.7},0).wait(1).to({x:650.6,y:247.2},0).wait(1).to({x:653.6,y:241.9},0).wait(1).to({x:650.8,y:239.1},0).wait(1).to({x:648.1,y:236.4},0).wait(1).to({x:645.5,y:233.5},0).wait(1).to({x:642.9,y:230.6},0).wait(1).to({x:640.4,y:227.5},0).wait(1).to({x:638.1,y:224.4},0).wait(1).to({x:636,y:221.2},0).wait(1).to({x:633.9,y:217.9},0).wait(1).to({x:632.1,y:214.5},0).wait(1).to({x:630.4,y:211},0).wait(1).to({x:629,y:207.4},0).wait(1).to({x:627.9,y:203.7},0).wait(1).to({x:627.1,y:199.9},0).wait(1).to({x:626.6,y:196.1},0).wait(1).to({y:192.2},0).wait(1).to({x:626.9,y:188.3},0).wait(1).to({x:627.6,y:184.5},0).wait(1).to({x:628.8,y:180.8},0).wait(1).to({x:630.3,y:177.3},0).wait(1).to({x:632.1,y:173.8},0).wait(1).to({x:634.2,y:170.6},0).wait(1).to({x:636.5,y:167.5},0).wait(1).to({x:639,y:164.6},0).wait(1).to({x:641.7,y:161.8},0).wait(1).to({x:644.5,y:159.1},0).wait(1).to({x:647.5,y:156.6},0).wait(1).to({x:650.5,y:154.2},0).wait(1).to({x:653.7,y:151.9},0).wait(1).to({x:656.9,y:149.7},0).wait(1).to({x:660.2,y:147.6},0).wait(1).to({x:659,y:151.9},0).wait(1).to({x:658.1,y:156.2},0).wait(1).to({x:657.6,y:160.6},0).wait(1).to({y:165},0).wait(1).to({x:658.7,y:169.2},0).wait(1).to({x:661.4,y:172.6},0).wait(1).to({x:665.5,y:174.3},0).wait(1).to({x:669.8,y:174.5},0).wait(1).to({x:674.2,y:173.9},0).wait(1).to({x:678.5,y:172.8},0).to({_off:true},1).wait(5));

	// Layer 20
	this.instance_13 = new lib.Symbol14();
	this.instance_13.parent = this;
	this.instance_13.setTransform(647.9,208,1,1,0,0,0,15.3,17.6);
	this.instance_13._off = true;

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#4C4C4D").s().p("AAdg3QABACAEAAIhDBtg");
	this.shape_533.setTransform(644.4,214.3);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#4C4C4D").s().p("Ag/AAICAgCIgBADIAAACg");
	this.shape_534.setTransform(640.7,208);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#4C4C4D").s().p("Aggg0IAEgFIA9Byg");
	this.shape_535.setTransform(651.6,214.3);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#4C4C4D").s().p("AhAABIgBgDICDADIiCACg");
	this.shape_536.setTransform(655.3,208);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#4C4C4D").s().p("Aghg4IBDBvIgBAAIgFACg");
	this.shape_537.setTransform(644.6,201.7);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#4C4C4D").s().p("AghA3IBDhvIg/BxQgCgCgCAAg");
	this.shape_538.setTransform(651.6,201.9);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#4C4C4D").s().p("AgDBxIgGAHIgFgEIAKgLIAAgHIgJAKIgFgEIANgPIAAgGIgKALIgEgEIANgQIAAgGIgLANIgFgEIAPgSIABgwIgoAaIgIAXIgGgCIAGgRIgGADIgHAVIgGgCIAFgPIgFACIgHAUIgGgCIAFgOIgGADIgGAQIgGgCIAEgKIg5AcIA0gjIgJgBIABgGIAPADIAGgEIgNgDIABgGIATAEIAFgEIgOgCIABgGIAUAEIAFgEIgQgDIABgGIAXAEIArgXIgpgVIgYAFIgBgGIASgEIgFgDIgWAEIgBgGIAPgDIgFgDIgUAEIgBgGIAOgDIgGgEIgQADIgBgGIAKgCIg1gjIA4AcIgDgJIAGgCIAFAOIAGADIgEgMIAGgCIAGASIAGADIgFgOIAGgCIAGAUIAGACIgFgQIAGgCIAHAWIApAZIgCgwIgQgTIAFgEIAMAOIAAgGIgOgRIAEgEIALAMIAAgGIgNgQIAEgEIAKALIAAgHIgLgMIAFgEIAHAHIADg/IAEA/IAGgHIAFAEIgKALIAAAHIAJgKIAFAEIgNAPIAAAGIAKgLIAEAEIgNAQIAAAGIALgNIAFAEIgPASIgBAxIAmgZIAIgXIAGACIgGARIAGgCIAHgVIAGACIgFAPIAFgDIAHgUIAGACIgFAOIAGgDIAGgQIAFACIgDAKIA5gcIg0AjIAJACIgBAGIgPgDIgGAEIANACIgBAGIgTgDIgFADIAOADIgBAGIgUgEIgGADIARAEIgBAGIgXgFIgqAWIAqAXIAZgFIABAGIgSAEIAFADIAWgEIABAGIgPADIAFAEIAUgEIABAGIgOACIAGAEIAQgDIABAGIgKACIA1AjIg5gbIADAIIgFACIgFgOIgHgDIAFAMIgGACIgGgSIgGgDIAFAOIgGACIgHgTIgFgDIAFAQIgGACIgHgWIgqgaIACAuIAQATIgFAEIgMgOIAAAGIAOARIgEAEIgLgMIAAAGIANAQIgEAEIgKgLIAAAHIALAMIgFAEIgHgIIgEBAgAgFgDQgCACAAADQAAAIAHAAQAJAAAAgIQAAgDgDgCQgCgDgEAAQgCAAgDADg");
	this.shape_539.setTransform(647.9,207.9);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#4C4C4D").s().p("AgtAvQgTgUAAgbQAAgaATgTQATgTAagBQAbABATATQATATAAAaQAAAbgTAUQgTASgbABQgagBgTgSgAgqgqQgTARAAAZQAAAZATATQASASAYAAQAaAAASgSQASgTAAgZQAAgZgSgRQgSgTgaAAQgYAAgSATg");
	this.shape_540.setTransform(647.8,208);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#4C4C4D").s().p("AgHAHQgCgDAAgEQAAgDACgDQADgDAEAAQAEAAAEADQACADAAADQAAAEgCADQgEADgEAAQgEAAgDgDg");
	this.shape_541.setTransform(645.4,212.6);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_542.setTransform(650.5,212.4);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_543.setTransform(653.1,208);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_544.setTransform(650.7,203.6);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#4C4C4D").s().p("AgGAIQgDgDAAgFQAAgDADgEQADgCADAAQAEAAADACQADAEAAADQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_545.setTransform(645.5,203.3);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#4C4C4D").s().p("AgHAIQgCgEAAgEQAAgDACgDQADgDAEAAQAEAAAEADQACADAAADQAAAEgCAEQgEADgEAAQgEAAgDgDg");
	this.shape_546.setTransform(642.6,208);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},180).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533}]},1).to({state:[{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(180).to({_off:false},0).wait(1).to({x:639.4,y:210.5},0).wait(1).to({x:630.9,y:212.9},0).wait(1).to({x:622.2,y:215},0).wait(1).to({x:613.5,y:216.6},0).wait(1).to({x:604.7,y:217.7},0).wait(1).to({x:595.8,y:217.5},0).wait(1).to({x:587.7,y:214.1},0).wait(1).to({x:585.5,y:206},0).wait(1).to({x:588.4,y:197.4},0).wait(1).to({x:592.9,y:189.8},0).wait(1).to({x:598,y:182.5},0).wait(1).to({x:603.5,y:175.6},0).wait(1).to({x:609.3,y:168.8},0).wait(1).to({x:612.1,y:167.6},0).wait(1).to({x:614.9,y:166.5},0).wait(1).to({x:617.8,y:165.3},0).wait(1).to({x:620.6,y:164.1},0).wait(1).to({x:623.4,y:162.9},0).wait(1).to({x:626.3,y:161.8},0).wait(1).to({x:629.1,y:160.6},0).wait(1).to({x:631.9,y:159.4},0).wait(1).to({x:634.8,y:158.2},0).wait(1).to({x:637.6,y:157.1},0).wait(1).to({x:640.4,y:155.9},0).wait(1).to({x:643.3,y:154.7},0).wait(1).to({x:646.1,y:153.5},0).wait(1).to({x:648.9,y:152.4},0).wait(1).to({x:651.8,y:151.2},0).wait(1).to({x:654.6,y:150},0).wait(1).to({x:657.4,y:148.8},0).wait(1).to({x:660.3,y:147.7},0).wait(1).to({x:661.9,y:150.3},0).wait(1).to({x:663.7,y:153},0).wait(1).to({x:665.6,y:155.7},0).wait(1).to({x:667.4,y:158.2},0).wait(1).to({x:669.3,y:160.7},0).wait(1).to({x:671.3,y:163.2},0).wait(1).to({x:673.4,y:165.6},0).wait(1).to({x:675.5,y:167.9},0).wait(1).to({x:677.7,y:170.2},0).wait(1).to({x:679.9,y:172.4},0).wait(1).to({x:682.2,y:174.6},0).wait(1).to({x:684.6,y:176.7},0).wait(1).to({x:687.1,y:178.7},0).wait(1).to({x:689.6,y:180.6},0).wait(1).to({x:692.1,y:182.5},0).wait(1).to({x:694.8,y:184.3},0).wait(1).to({x:697.4,y:186},0).wait(1).to({x:700.2,y:187.6},0).wait(1).to({x:703,y:189.1},0).wait(1).to({x:705.8,y:190.5},0).wait(1).to({x:708.7,y:191.8},0).wait(1).to({x:711.6,y:193},0).wait(1).to({x:714.6,y:194.1},0).wait(1).to({x:717.6,y:195.2},0).wait(1).to({x:720.6,y:196.1},0).wait(1).to({x:723.6,y:197},0).wait(1).to({x:726.7,y:197.7},0).wait(1).to({x:729.7,y:198.4},0).wait(1).to({x:733,y:199},0).wait(1).to({x:736.1,y:199.4},0).wait(1).to({x:739.3,y:199.9},0).wait(1).to({x:737.7,y:202.2},0).wait(1).to({x:736.2,y:204.5},0).wait(1).to({x:734.6,y:206.8},0).wait(1).to({x:733.1,y:209.1},0).wait(1).to({x:731.5,y:211.4},0).wait(1).to({x:730,y:213.7},0).wait(1).to({x:728.4,y:216},0).wait(1).to({x:726.9,y:218.4},0).wait(1).to({x:725.3,y:220.7},0).wait(1).to({x:723.8,y:223},0).wait(1).to({x:722.2,y:225.3},0).wait(1).to({x:720.7,y:227.6},0).wait(1).to({x:719.1,y:229.9},0).wait(1).to({x:717.6,y:232.2},0).wait(1).to({x:716,y:234.5},0).wait(1).to({x:714.5,y:236.9},0).wait(1).to({x:706.2,y:233.2},0).wait(1).to({x:697.8,y:229.6},0).wait(1).to({x:689.5,y:226},0).wait(1).to({x:681.2,y:222.4},0).wait(1).to({x:672.8,y:218.8},0).wait(1).to({x:664.5,y:215.2},0).wait(1).to({x:656.2,y:211.6},0).wait(1).to({x:647.9,y:208},0).wait(2).to({x:639.4,y:210.5},0).wait(1).to({x:630.9,y:212.9},0).wait(1).to({x:622.2,y:215},0).wait(1).to({x:613.5,y:216.6},0).wait(1).to({x:604.7,y:217.7},0).wait(1).to({x:595.8,y:217.5},0).wait(1).to({x:587.7,y:214.1},0).wait(1).to({x:585.5,y:206},0).wait(1).to({x:588.4,y:197.4},0).wait(1).to({x:592.9,y:189.8},0).wait(1).to({x:598,y:182.5},0).wait(1).to({x:603.5,y:175.6},0).wait(1).to({x:609.3,y:168.8},0).wait(1).to({x:612.1,y:167.6},0).wait(1).to({x:614.9,y:166.5},0).wait(1).to({x:617.8,y:165.3},0).wait(1).to({x:620.6,y:164.1},0).wait(1).to({x:623.4,y:162.9},0).wait(1).to({x:626.3,y:161.8},0).wait(1).to({x:629.1,y:160.6},0).wait(1).to({x:631.9,y:159.4},0).wait(1).to({x:634.8,y:158.2},0).wait(1).to({x:637.6,y:157.1},0).wait(1).to({x:640.4,y:155.9},0).wait(1).to({x:643.3,y:154.7},0).wait(1).to({x:646.1,y:153.5},0).wait(1).to({x:648.9,y:152.4},0).wait(1).to({x:651.8,y:151.2},0).wait(1).to({x:654.6,y:150},0).wait(1).to({x:657.4,y:148.8},0).wait(1).to({x:660.3,y:147.7},0).wait(1).to({x:661.9,y:150.3},0).wait(1).to({x:663.7,y:153},0).wait(1).to({x:665.6,y:155.7},0).wait(1).to({x:667.4,y:158.2},0).wait(1).to({x:669.3,y:160.7},0).wait(1).to({x:671.3,y:163.2},0).wait(1).to({x:673.4,y:165.6},0).wait(1).to({x:675.5,y:167.9},0).wait(1).to({x:677.7,y:170.2},0).wait(1).to({x:679.9,y:172.4},0).wait(1).to({x:682.2,y:174.6},0).wait(1).to({x:684.6,y:176.7},0).wait(1).to({x:687.1,y:178.7},0).wait(1).to({x:689.6,y:180.6},0).wait(1).to({x:692.1,y:182.5},0).wait(1).to({x:694.8,y:184.3},0).wait(1).to({x:697.4,y:186},0).wait(1).to({x:700.2,y:187.6},0).wait(1).to({x:703,y:189.1},0).wait(1).to({x:705.8,y:190.5},0).wait(1).to({x:708.7,y:191.8},0).wait(1).to({x:711.6,y:193},0).wait(1).to({x:714.6,y:194.1},0).wait(1).to({x:717.6,y:195.2},0).wait(1).to({x:720.6,y:196.1},0).wait(1).to({x:723.6,y:197},0).wait(1).to({x:726.7,y:197.7},0).wait(1).to({x:729.7,y:198.4},0).wait(1).to({x:733,y:199},0).wait(1).to({x:736.1,y:199.4},0).wait(1).to({x:739.3,y:199.9},0).wait(1).to({x:737.7,y:202.2},0).wait(1).to({x:736.2,y:204.5},0).wait(1).to({x:734.6,y:206.8},0).wait(1).to({x:733.1,y:209.1},0).wait(1).to({x:731.5,y:211.4},0).wait(1).to({x:730,y:213.7},0).wait(1).to({x:728.4,y:216},0).wait(1).to({x:726.9,y:218.4},0).wait(1).to({x:725.3,y:220.7},0).wait(1).to({x:723.8,y:223},0).wait(1).to({x:722.2,y:225.3},0).wait(1).to({x:720.7,y:227.6},0).wait(1).to({x:719.1,y:229.9},0).wait(1).to({x:717.6,y:232.2},0).wait(1).to({x:716,y:234.5},0).wait(1).to({x:714.5,y:236.9},0).wait(1).to({x:706.2,y:233.2},0).wait(1).to({x:697.8,y:229.6},0).wait(1).to({x:689.5,y:226},0).wait(1).to({x:681.2,y:222.4},0).wait(1).to({x:672.8,y:218.8},0).wait(1).to({x:664.5,y:215.2},0).wait(1).to({x:656.2,y:211.6},0).wait(1).to({x:647.9,y:208},0).wait(2).to({x:639.4,y:210.5},0).wait(1).to({x:630.9,y:212.9},0).wait(1).to({x:622.2,y:215},0).wait(1).to({x:613.5,y:216.6},0).wait(1).to({x:604.7,y:217.7},0).wait(1).to({x:595.8,y:217.5},0).wait(1).to({x:587.7,y:214.1},0).wait(1).to({x:585.5,y:206},0).wait(1).to({x:588.4,y:197.4},0).wait(1).to({x:592.9,y:189.8},0).wait(1).to({x:598,y:182.5},0).wait(1).to({x:603.5,y:175.6},0).wait(1).to({x:609.3,y:168.8},0).wait(1).to({x:612.1,y:167.6},0).wait(1).to({x:614.9,y:166.5},0).wait(1).to({x:617.8,y:165.3},0).wait(1).to({x:620.6,y:164.1},0).wait(1).to({x:623.4,y:162.9},0).wait(1).to({x:626.3,y:161.8},0).wait(1).to({x:629.1,y:160.6},0).wait(1).to({x:631.9,y:159.4},0).wait(1).to({x:634.8,y:158.2},0).wait(1).to({x:637.6,y:157.1},0).wait(1).to({x:640.4,y:155.9},0).wait(1).to({x:643.3,y:154.7},0).wait(1).to({x:646.1,y:153.5},0).wait(1).to({x:648.9,y:152.4},0).wait(1).to({x:651.8,y:151.2},0).wait(1).to({x:654.6,y:150},0).wait(1).to({x:657.4,y:148.8},0).wait(1).to({x:660.3,y:147.7},0).wait(1).to({x:661.9,y:150.3},0).wait(1).to({x:663.7,y:153},0).wait(1).to({x:665.6,y:155.7},0).wait(1).to({x:667.4,y:158.2},0).wait(1).to({x:669.3,y:160.7},0).wait(1).to({x:671.3,y:163.2},0).wait(1).to({x:673.4,y:165.6},0).wait(1).to({x:675.5,y:167.9},0).wait(1).to({x:677.7,y:170.2},0).wait(1).to({x:679.9,y:172.4},0).wait(1).to({x:682.2,y:174.6},0).wait(1).to({x:684.6,y:176.7},0).wait(1).to({x:687.1,y:178.7},0).wait(1).to({x:689.6,y:180.6},0).wait(1).to({x:692.1,y:182.5},0).wait(1).to({x:694.8,y:184.3},0).wait(1).to({x:697.4,y:186},0).wait(1).to({x:700.2,y:187.6},0).wait(1).to({x:703,y:189.1},0).wait(1).to({x:705.8,y:190.5},0).wait(1).to({x:708.7,y:191.8},0).wait(1).to({x:711.6,y:193},0).wait(1).to({x:714.6,y:194.1},0).wait(1).to({x:717.6,y:195.2},0).wait(1).to({x:720.6,y:196.1},0).wait(1).to({x:723.6,y:197},0).wait(1).to({x:726.7,y:197.7},0).wait(1).to({x:729.7,y:198.4},0).wait(1).to({x:733,y:199},0).wait(1).to({x:736.1,y:199.4},0).wait(1).to({x:739.3,y:199.9},0).wait(1).to({x:737.7,y:202.2},0).wait(1).to({x:736.2,y:204.5},0).wait(1).to({x:734.6,y:206.8},0).wait(1).to({x:733.1,y:209.1},0).wait(1).to({x:731.5,y:211.4},0).wait(1).to({x:730,y:213.7},0).wait(1).to({x:728.4,y:216},0).wait(1).to({x:726.9,y:218.4},0).wait(1).to({x:725.3,y:220.7},0).wait(1).to({x:723.8,y:223},0).wait(1).to({x:722.2,y:225.3},0).wait(1).to({x:720.7,y:227.6},0).wait(1).to({x:719.1,y:229.9},0).wait(1).to({x:717.6,y:232.2},0).wait(1).to({x:716,y:234.5},0).wait(1).to({x:714.5,y:236.9},0).wait(1).to({x:706.2,y:233.2},0).wait(1).to({x:697.8,y:229.6},0).wait(1).to({x:689.5,y:226},0).wait(1).to({x:681.2,y:222.4},0).wait(1).to({x:672.8,y:218.8},0).wait(1).to({x:664.5,y:215.2},0).wait(1).to({x:656.2,y:211.6},0).wait(1).to({x:647.9,y:208},0).to({_off:true},1).wait(5));

	// Layer 21
	this.instance_14 = new lib.Symbol15();
	this.instance_14.parent = this;
	this.instance_14.setTransform(741.1,261.1,1,1,0,0,0,15.3,17.6);
	this.instance_14._off = true;

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#4C4C4D").s().p("AAdg3QABACAEABIhDBsg");
	this.shape_547.setTransform(726.3,243.2);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#4C4C4D").s().p("AhAAAICAgCIgBADIAAACg");
	this.shape_548.setTransform(722.6,236.9);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#4C4C4D").s().p("Aggg1QACAAACgDIA9Bxg");
	this.shape_549.setTransform(733.4,243.2);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#4C4C4D").s().p("AhAABIgBgDICDADIiCACg");
	this.shape_550.setTransform(737.1,236.9);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#4C4C4D").s().p("Aggg4IBBBwIAAAAIgFABg");
	this.shape_551.setTransform(726.5,230.6);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#4C4C4D").s().p("AgiA2IBFhvIhABzQgCgDgDgBg");
	this.shape_552.setTransform(733.4,230.8);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#4C4C4D").s().p("AgDBxIgGAHIgFgEIAKgMIAAgGIgJAKIgFgEIANgPIAAgGIgKALIgEgEIANgQIAAgGIgLANIgFgEIAPgSIABgwIgoAaIgIAYIgGgDIAGgRIgGADIgHAVIgGgCIAFgQIgFADIgHAUIgGgCIAFgNIgGACIgGAQIgGgCIAEgJIg5AcIA0gjIgJgCIABgHIAPADIAGgDIgNgDIABgGIATAEIAFgEIgOgCIABgHIAUAEIAFgDIgQgDIABgGIAXAEIArgXIgpgUIgYAEIgBgGIASgDIgFgEIgWAEIgBgGIAPgDIgFgDIgUAEIgBgHIAOgCIgGgEIgQADIgBgGIAKgCIg1gjIA4AbIgDgIIAGgCIAFAPIAGACIgEgMIAGgCIAGASIAGADIgFgOIAGgCIAHATIAFAEIgFgQIAGgCIAHAVIApAaIgCgxIgQgTIAFgEIAMAOIAAgGIgOgRIAEgEIALAMIAAgGIgNgQIAEgEIAKALIAAgHIgLgMIAFgEIAHAHIADg/IAEA+IAGgGIAFAEIgKALIAAAHIAJgKIAFAEIgNAPIAAAGIAKgLIAEAEIgNAQIAAAGIALgNIAFAEIgPASIgBAxIAmgZIAIgXIAGACIgGASIAGgEIAHgUIAGABIgFAQIAFgDIAHgUIAGADIgFANIAGgDIAGgPIAFABIgDAKIA5gcIg0AjIAJABIgBAHIgPgDIgGADIANADIgBAGIgTgDIgFADIAOACIgBAHIgUgEIgGAEIARACIgBAHIgXgFIgqAWIAqAXIAZgFIABAHIgSADIAFADIAWgEIABAGIgPADIAFADIAUgDIABAGIgOADIAGADIAQgDIABAGIgKACIA1AjIg5gbIADAJIgFACIgFgPIgHgDIAFAMIgGADIgGgTIgGgDIAFAOIgGADIgHgUIgFgDIAFAQIgGACIgHgWIgqgaIACAuIAQASIgFAFIgMgOIAAAGIAOARIgEAEIgLgMIAAAGIANAPIgEAFIgKgLIAAAGIALANIgFAEIgHgIIgEA/gAgHACQAAAIAHAAQAEAAACgCQADgCAAgEQAAgDgDgCQgCgCgEgBQgHAAAAAIg");
	this.shape_553.setTransform(729.7,236.9);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#4C4C4D").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTgAgqgrQgTASAAAZQAAAaATASQASASAYAAQAaAAASgSQASgSAAgaQAAgZgSgSQgSgSgaAAQgYAAgSASg");
	this.shape_554.setTransform(729.7,236.9);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#4C4C4D").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgEADAAQAEAAADAEQAEADAAADQAAAEgEADQgDAEgEAAQgDAAgDgEg");
	this.shape_555.setTransform(727.3,241.5);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgEQADgDADAAQAEAAADADQADAEAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_556.setTransform(732.4,241.3);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#4C4C4D").s().p("AgGAIQgDgDAAgFQAAgDADgEQADgCADAAQAEAAADACQADAEAAADQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_557.setTransform(734.9,237);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgEADAAQAEAAADAEQADADAAADQAAAEgDADQgDAEgEAAQgDAAgDgEg");
	this.shape_558.setTransform(732.6,232.5);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_559.setTransform(727.3,232.2);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#4C4C4D").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgDADAAQAEAAADADQADADABADQgBAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_560.setTransform(724.5,236.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},180).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547}]},1).to({state:[{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(180).to({_off:false},0).wait(1).to({regY:17.5,x:736.2,y:272.7},0).wait(1).to({x:729,y:283.5},0).wait(1).to({x:719.7,y:292.6},0).wait(1).to({x:708,y:297.5},0).wait(1).to({x:696.5,y:296.7},0).wait(1).to({x:682.7,y:295},0).wait(1).to({x:669.8,y:293.4},0).wait(1).to({x:656.9,y:291.6},0).wait(1).to({x:644.1,y:289.8},0).wait(1).to({x:631.3,y:287.9},0).wait(1).to({x:620.7,y:285.6},0).wait(1).to({x:606.8,y:279.4},0).wait(1).to({x:597.7,y:272.2},0).wait(1).to({x:591,y:260.1},0).wait(1).to({x:586.6,y:247.9},0).wait(1).to({x:585.4,y:235.8},0).wait(1).to({y:222.1},0).wait(1).to({x:582.9,y:212.3},0).wait(1).to({x:573.2,y:201.3},0).wait(1).to({x:563.1,y:193.4},0).wait(1).to({x:565.5,y:180.8},0).wait(1).to({x:570.9,y:169.1},0).wait(1).to({x:578.1,y:158.3},0).wait(1).to({x:586.2,y:148.3},0).wait(1).to({x:595.2,y:139},0).wait(1).to({x:604.7,y:130.3},0).wait(1).to({x:614.6,y:122},0).wait(1).to({x:625,y:114.4},0).wait(1).to({x:636,y:107.8},0).wait(1).to({x:641.1,y:105.8},0).wait(1).to({x:646.2,y:104.2},0).wait(1).to({x:651.5,y:103},0).wait(1).to({x:656.8,y:102},0).wait(1).to({x:662.1,y:101.2},0).wait(1).to({x:667.5,y:100.7},0).wait(1).to({x:672.9,y:100.4},0).wait(1).to({x:678.3,y:100.3},0).wait(1).to({x:683.7,y:100.5},0).wait(1).to({x:689,y:100.7},0).wait(1).to({x:694.4,y:101.2},0).wait(1).to({x:699.8,y:101.8},0).wait(1).to({x:705.1,y:102.5},0).wait(1).to({x:710.4,y:103.3},0).wait(1).to({x:715.8,y:104.3},0).wait(1).to({x:721.1,y:105.4},0).wait(1).to({x:726.4,y:106.6},0).wait(1).to({x:731.6,y:107.8},0).wait(1).to({x:736.8,y:109.2},0).wait(1).to({x:742.1,y:110.6},0).wait(1).to({x:743.7,y:114},0).wait(1).to({x:745.2,y:117.5},0).wait(1).to({x:746.8,y:121},0).wait(1).to({x:748.2,y:124.5},0).wait(1).to({x:749.6,y:128.1},0).wait(1).to({x:751,y:131.6},0).wait(1).to({x:752.2,y:135.1},0).wait(1).to({x:753.4,y:138.7},0).wait(1).to({x:754.5,y:142.4},0).wait(1).to({x:755.6,y:146},0).wait(1).to({x:756.6,y:149.7},0).wait(1).to({x:757.5,y:153.4},0).wait(1).to({x:758.3,y:157.1},0).wait(1).to({x:759,y:160.8},0).wait(1).to({x:759.7,y:164.5},0).wait(1).to({x:760.3,y:168.3},0).wait(1).to({x:760.8,y:172},0).wait(1).to({x:761.2,y:175.8},0).wait(1).to({x:761.5,y:179.6},0).wait(1).to({x:761.8,y:183.4},0).wait(1).to({x:761.9,y:187.2},0).wait(1).to({x:762,y:191},0).wait(1).to({y:194.8},0).wait(1).to({x:761.8,y:198.5},0).wait(1).to({x:761.6,y:202.3},0).wait(1).to({x:761.3,y:206.1},0).wait(1).to({x:760.9,y:209.9},0).wait(1).to({x:760.5,y:213.6},0).wait(1).to({x:759.9,y:217.4},0).wait(1).to({x:759.2,y:221.1},0).wait(1).to({x:758.5,y:224.8},0).wait(1).to({x:757.6,y:228.5},0).wait(1).to({x:756.7,y:232.2},0).wait(1).to({x:755.8,y:235.7},0).wait(1).to({x:754.6,y:239.5},0).wait(1).to({x:753.4,y:243.2},0).wait(1).to({x:752.2,y:246.8},0).wait(1).to({regY:17.6,x:741.1,y:261.1},0).wait(1).to({regY:17.5,x:736.2,y:272.7},0).wait(1).to({x:729,y:283.5},0).wait(1).to({x:719.7,y:292.6},0).wait(1).to({x:708,y:297.5},0).wait(1).to({x:696.5,y:296.7},0).wait(1).to({x:682.7,y:295},0).wait(1).to({x:669.8,y:293.4},0).wait(1).to({x:656.9,y:291.6},0).wait(1).to({x:644.1,y:289.8},0).wait(1).to({x:631.3,y:287.9},0).wait(1).to({x:620.7,y:285.6},0).wait(1).to({x:606.8,y:279.4},0).wait(1).to({x:597.7,y:272.2},0).wait(1).to({x:591,y:260.1},0).wait(1).to({x:586.6,y:247.9},0).wait(1).to({x:585.4,y:235.8},0).wait(1).to({y:222.1},0).wait(1).to({x:582.9,y:212.3},0).wait(1).to({x:573.2,y:201.3},0).wait(1).to({x:563.1,y:193.4},0).wait(1).to({x:565.5,y:180.8},0).wait(1).to({x:570.9,y:169.1},0).wait(1).to({x:578.1,y:158.3},0).wait(1).to({x:586.2,y:148.3},0).wait(1).to({x:595.2,y:139},0).wait(1).to({x:604.7,y:130.3},0).wait(1).to({x:614.6,y:122},0).wait(1).to({x:625,y:114.4},0).wait(1).to({x:636,y:107.8},0).wait(1).to({x:641.1,y:105.8},0).wait(1).to({x:646.2,y:104.2},0).wait(1).to({x:651.5,y:103},0).wait(1).to({x:656.8,y:102},0).wait(1).to({x:662.1,y:101.2},0).wait(1).to({x:667.5,y:100.7},0).wait(1).to({x:672.9,y:100.4},0).wait(1).to({x:678.3,y:100.3},0).wait(1).to({x:683.7,y:100.5},0).wait(1).to({x:689,y:100.7},0).wait(1).to({x:694.4,y:101.2},0).wait(1).to({x:699.8,y:101.8},0).wait(1).to({x:705.1,y:102.5},0).wait(1).to({x:710.4,y:103.3},0).wait(1).to({x:715.8,y:104.3},0).wait(1).to({x:721.1,y:105.4},0).wait(1).to({x:726.4,y:106.6},0).wait(1).to({x:731.6,y:107.8},0).wait(1).to({x:736.8,y:109.2},0).wait(1).to({x:742.1,y:110.6},0).wait(1).to({x:743.7,y:114},0).wait(1).to({x:745.2,y:117.5},0).wait(1).to({x:746.8,y:121},0).wait(1).to({x:748.2,y:124.5},0).wait(1).to({x:749.6,y:128.1},0).wait(1).to({x:751,y:131.6},0).wait(1).to({x:752.2,y:135.1},0).wait(1).to({x:753.4,y:138.7},0).wait(1).to({x:754.5,y:142.4},0).wait(1).to({x:755.6,y:146},0).wait(1).to({x:756.6,y:149.7},0).wait(1).to({x:757.5,y:153.4},0).wait(1).to({x:758.3,y:157.1},0).wait(1).to({x:759,y:160.8},0).wait(1).to({x:759.7,y:164.5},0).wait(1).to({x:760.3,y:168.3},0).wait(1).to({x:760.8,y:172},0).wait(1).to({x:761.2,y:175.8},0).wait(1).to({x:761.5,y:179.6},0).wait(1).to({x:761.8,y:183.4},0).wait(1).to({x:761.9,y:187.2},0).wait(1).to({x:762,y:191},0).wait(1).to({y:194.8},0).wait(1).to({x:761.8,y:198.5},0).wait(1).to({x:761.6,y:202.3},0).wait(1).to({x:761.3,y:206.1},0).wait(1).to({x:760.9,y:209.9},0).wait(1).to({x:760.5,y:213.6},0).wait(1).to({x:759.9,y:217.4},0).wait(1).to({x:759.2,y:221.1},0).wait(1).to({x:758.5,y:224.8},0).wait(1).to({x:757.6,y:228.5},0).wait(1).to({x:756.7,y:232.2},0).wait(1).to({x:755.8,y:235.7},0).wait(1).to({x:754.6,y:239.5},0).wait(1).to({x:753.4,y:243.2},0).wait(1).to({x:752.2,y:246.8},0).wait(1).to({regY:17.6,x:741.1,y:261.1},0).wait(1).to({regY:17.5,x:736.2,y:272.7},0).wait(1).to({x:729,y:283.5},0).wait(1).to({x:719.7,y:292.6},0).wait(1).to({x:708,y:297.5},0).wait(1).to({x:696.5,y:296.7},0).wait(1).to({x:682.7,y:295},0).wait(1).to({x:669.8,y:293.4},0).wait(1).to({x:656.9,y:291.6},0).wait(1).to({x:644.1,y:289.8},0).wait(1).to({x:631.3,y:287.9},0).wait(1).to({x:620.7,y:285.6},0).wait(1).to({x:606.8,y:279.4},0).wait(1).to({x:597.7,y:272.2},0).wait(1).to({x:591,y:260.1},0).wait(1).to({x:586.6,y:247.9},0).wait(1).to({x:585.4,y:235.8},0).wait(1).to({y:222.1},0).wait(1).to({x:582.9,y:212.3},0).wait(1).to({x:573.2,y:201.3},0).wait(1).to({x:563.1,y:193.4},0).wait(1).to({x:565.5,y:180.8},0).wait(1).to({x:570.9,y:169.1},0).wait(1).to({x:578.1,y:158.3},0).wait(1).to({x:586.2,y:148.3},0).wait(1).to({x:595.2,y:139},0).wait(1).to({x:604.7,y:130.3},0).wait(1).to({x:614.6,y:122},0).wait(1).to({x:625,y:114.4},0).wait(1).to({x:636,y:107.8},0).wait(1).to({x:641.1,y:105.8},0).wait(1).to({x:646.2,y:104.2},0).wait(1).to({x:651.5,y:103},0).wait(1).to({x:656.8,y:102},0).wait(1).to({x:662.1,y:101.2},0).wait(1).to({x:667.5,y:100.7},0).wait(1).to({x:672.9,y:100.4},0).wait(1).to({x:678.3,y:100.3},0).wait(1).to({x:683.7,y:100.5},0).wait(1).to({x:689,y:100.7},0).wait(1).to({x:694.4,y:101.2},0).wait(1).to({x:699.8,y:101.8},0).wait(1).to({x:705.1,y:102.5},0).wait(1).to({x:710.4,y:103.3},0).wait(1).to({x:715.8,y:104.3},0).wait(1).to({x:721.1,y:105.4},0).wait(1).to({x:726.4,y:106.6},0).wait(1).to({x:731.6,y:107.8},0).wait(1).to({x:736.8,y:109.2},0).wait(1).to({x:742.1,y:110.6},0).wait(1).to({x:743.7,y:114},0).wait(1).to({x:745.2,y:117.5},0).wait(1).to({x:746.8,y:121},0).wait(1).to({x:748.2,y:124.5},0).wait(1).to({x:749.6,y:128.1},0).wait(1).to({x:751,y:131.6},0).wait(1).to({x:752.2,y:135.1},0).wait(1).to({x:753.4,y:138.7},0).wait(1).to({x:754.5,y:142.4},0).wait(1).to({x:755.6,y:146},0).wait(1).to({x:756.6,y:149.7},0).wait(1).to({x:757.5,y:153.4},0).wait(1).to({x:758.3,y:157.1},0).wait(1).to({x:759,y:160.8},0).wait(1).to({x:759.7,y:164.5},0).wait(1).to({x:760.3,y:168.3},0).wait(1).to({x:760.8,y:172},0).wait(1).to({x:761.2,y:175.8},0).wait(1).to({x:761.5,y:179.6},0).wait(1).to({x:761.8,y:183.4},0).wait(1).to({x:761.9,y:187.2},0).wait(1).to({x:762,y:191},0).wait(1).to({y:194.8},0).wait(1).to({x:761.8,y:198.5},0).wait(1).to({x:761.6,y:202.3},0).wait(1).to({x:761.3,y:206.1},0).wait(1).to({x:760.9,y:209.9},0).wait(1).to({x:760.5,y:213.6},0).wait(1).to({x:759.9,y:217.4},0).wait(1).to({x:759.2,y:221.1},0).wait(1).to({x:758.5,y:224.8},0).wait(1).to({x:757.6,y:228.5},0).wait(1).to({x:756.7,y:232.2},0).wait(1).to({x:755.8,y:235.7},0).wait(1).to({x:754.6,y:239.5},0).wait(1).to({x:753.4,y:243.2},0).wait(1).to({x:752.2,y:246.8},0).to({_off:true},1).wait(5));

	// Layer 5
	this.instance_15 = new lib.Layer5();
	this.instance_15.parent = this;
	this.instance_15.setTransform(469.7,297,1,1,0,0,0,599.3,306.9);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#003300").s().p("AgmBVQgMgIgHgOQgHgPgBgUQABgVAHgOQAIgPANgIQANgIAPAAQALAAAJAEQAIADAFAHIAAAAIAAhFIAoAAIAACSIAAAVIABARIgjAAIgCgTIAAAAQgHALgKAFQgLAGgLAAQgQgBgMgIgAgMgDQgGAEgEAIQgDAIAAAKQABAQAHAKQAHAJALAAQAJAAAGgFQAGgFACgJIABgEIAAgFIAAgRIAAgDIAAgDQgCgJgGgEQgGgGgJAAQgIAAgGAFg");
	this.shape_561.setTransform(126.4,18.6);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#003300").s().p("AgpAxQgSgRAAgeQAAgMADgLQAFgNAHgJQAIgKAMgGQAMgGAQAAQAUAAANAJQAMAKAGAOQAGAOgBAQIAAAIIgBAHIhRAAQABAIAFAFQAFAGAIACQAHADAJAAIATgBIAQgEIAGAbQgKADgMACQgMACgNAAQgfAAgRgRgAAYgNQAAgFgCgGQgCgGgFgEQgFgFgIAAQgIAAgFAEQgFAFgDAFQgCAGgBAGIAuAAIAAAAg");
	this.shape_562.setTransform(112.2,21.3);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#003300").s().p("AAVBcIAAhGQAAgMgFgIQgFgHgLAAQgHABgFAEQgEADgDAFIgBAEIAAAFIAABLIgnAAIAAi3IAnAAIAABIIABAAIAHgHIAIgGQAEgCAFgBIALgCQAMAAALAGQAKAGAFANQAGAMAAASIAABKg");
	this.shape_563.setTransform(97.6,18.5);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#003300").s().p("AgdBAQgLgDgHgEIAHgcIAJAFIANADIAMACQAIAAAEgDQAEgDAAgFQAAgFgEgDQgEgDgJgDQgUgHgIgJQgJgKAAgMQAAgMAGgJQAHgJALgGQAMgFAPAAQALAAAKACQAJACAGADIgHAbQgFgCgHgCQgIgDgIAAQgHAAgDADQgEADAAAFQAAAEAEADQAEADALAEQATAGAIAJQAIAJAAAOQAAAMgGAJQgGAKgNAFQgMAFgRAAQgMAAgLgCg");
	this.shape_564.setTransform(84.4,21.3);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#003300").s().p("AgTBbIAAh+IAnAAIAAB+gAgOg4QgGgGAAgIQAAgJAGgGQAFgFAJAAQAKAAAFAFQAGAGAAAJQAAAIgGAGQgFAFgKAAQgJAAgFgFg");
	this.shape_565.setTransform(75.2,18.6);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#003300").s().p("AAVBBIAAhGQAAgMgEgIQgFgHgLAAQgHABgFAEQgFAFgCAFIgBAFIAAAEIAABJIgoAAIAAhVIAAgXIgBgSIAiAAIACARIABAAIAIgJQAFgEAIgEQAHgDAKAAQANAAALAGQAKAGAGAMQAGAMAAATIAABKg");
	this.shape_566.setTransform(63.9,21.2);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#003300").s().p("AgTBbIAAh+IAnAAIAAB+gAgOg4QgGgGAAgIQAAgJAGgGQAFgFAJAAQAKAAAFAFQAGAGAAAJQAAAIgGAGQgFAFgKAAQgJAAgFgFg");
	this.shape_567.setTransform(52.8,18.6);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#003300").s().p("Ag1BYIAAivIBqAAIAAAhIhBAAIAAAoIA+AAIAAAfIg+AAIAABHg");
	this.shape_568.setTransform(43.1,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).to({state:[{t:this.instance_15},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561}]},445).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(393.5,240.1,945.8,690.3);
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