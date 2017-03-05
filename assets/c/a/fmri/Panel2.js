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


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],-2,11.9,0,-2,11.9,24).s().p("AgCCIQg4gBgngpQgngpABg3QABg4ApgnQAognA4ABQA4ABAnApQAnAogBA4QgBA4gpAnQgnAmg3AAIgCAAg");
	this.shape.setTransform(13.6,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3C489A").ss(2).p("AAui6IhbF1");
	this.shape_1.setTransform(13.6,18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,-1,27.2,39.4), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],0.1,-12,0,0.1,-12,24.1).s().p("AhRBtQgtgigIg4QgIg3AigtQAigtA4gIQA3gHAtAiQAtAiAIA4QAHA3giAsQgiAtg4AIIgUABQgrAAgkgbg");
	this.shape.setTransform(13.6,19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3C489A").ss(2).p("AgPDAIAfl/");
	this.shape_1.setTransform(13.6,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,-1,27.3,40.4), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],0.9,-12,0,0.9,-12,24).s().p("AhYBnQgrglgEg4QgEg4AlgqQAlgrA4gEQA3gEArAlQAqAkAFA5QAEA3glArQglAqg4AFIgKAAQgxAAgnghg");
	this.shape.setTransform(13.6,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3C489A").ss(2).p("AgbC/IA3l9");
	this.shape_1.setTransform(13.6,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,-1,27.3,40.1), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],-2,-11.9,0,-2,-11.9,24).s().p("Ag8B6QgzgagRg1QgSg1AagyQAZgzA2gRQA0gSAyAaQAzAZARA2QASA1gaAyQgZAyg2ARQgWAHgUAAQgfAAgdgOg");
	this.shape.setTransform(13.6,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3C489A").ss(2).p("AATDAIgll+");
	this.shape_1.setTransform(13.6,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,-1,27.3,40.3), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],-0.3,-12,0,-0.3,-12,24).s().p("AhNBwQgugggKg4QgKg3AgguQAhguA3gKQA3gKAuAgQAuAgAKA4QAKA3ggAuQghAug3AKQgOACgLAAQgpAAgjgYg");
	this.shape.setTransform(13.6,19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3C489A").ss(2).p("AgHDAIAPl/");
	this.shape_1.setTransform(13.6,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,-1,27.3,40.5), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],0.5,-12,0,0.5,-12,24).s().p("AhVBqQgsgjgFg4QgGg3AjgsQAjgsA4gGQA3gGAsAjQAsAkAGA4QAGA3gjAsQgkAsg4AGIgOAAQgvAAgmgeg");
	this.shape.setTransform(13.6,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3C489A").ss(2).p("AgVC/IArl9");
	this.shape_1.setTransform(13.6,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,-1,27.3,40.2), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],-1,12,0,-1,12,24).s().p("AhZBmQgqglgEg4QgDg3AlgrQAlgqA4gEQA3gDArAlQAqAlAEA4QADA3glArQglAqg4AEIgJAAQgyAAgngig");
	this.shape.setTransform(13.6,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3C489A").ss(2).p("AAdi9Ig5F7");
	this.shape_1.setTransform(13.6,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,-1,27.3,40.1), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],-1.6,-12,0,-1.6,-12,24).s().p("AhAB4QgygbgQg2QgPg2AbgxQAbgyA2gPQA1gQAxAbQAxAbAQA1QAQA1gbAyQgbAyg2AQQgUAFgSAAQghAAgfgQg");
	this.shape.setTransform(13.7,19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3C489A").ss(2).p("AANDAIgZl/");
	this.shape_1.setTransform(13.7,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,-1,27.3,40.4), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],1,-12,0,1,-12,24).s().p("AhZBmQgqglgEg4QgEg3AmgrQAlgqA4gEQA3gDArAlQAqAlAEA5QADA3glAqQglAqg5AEIgIAAQgyAAgngig");
	this.shape.setTransform(13.6,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3C489A").ss(2).p("AgdC+IA6l7");
	this.shape_1.setTransform(13.6,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,-1,27.3,40), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],-1.9,-11.9,0,-1.9,-11.9,24).s().p("Ag+B5QgygagRg2QgRg0AagyQAagyA2gSQA0gRAzAaQAyAaARA2QARA1gaAyQgaAyg2ARQgVAHgVAAQgfAAgegQg");
	this.shape.setTransform(13.6,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3C489A").ss(2).p("AARDAIghl+");
	this.shape_1.setTransform(13.6,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,-1,27.3,40.3), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],-1.9,-11.9,0,-1.9,-11.9,24).s().p("Ag9B5QgygagSg2QgRg0AagyQAagyA2gSQA0gRAzAaQAyAaARA2QARA1gaAyQgaAyg2ARQgVAGgUAAQgfAAgegPg");
	this.shape.setTransform(13.6,19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3C489A").ss(2).p("AARDAIghl/");
	this.shape_1.setTransform(13.7,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,-1,27.3,40.4), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],-12,-0.6,0,-12,-0.6,24).s().p("AhWBpQgrgkgGg4QgFg3AkgrQAkgsA4gFQA3gGArAkQAsAkAFA4QAGA3gkAsQgkArg4AGIgNAAQgvAAgngfg");
	this.shape.setTransform(19.1,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3C489A").ss(2).p("AC/AYIl9gv");
	this.shape_1.setTransform(19.1,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-1,0,40.2,27.2), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],12,-1.5,0,12,-1.5,24).s().p("AhBB3QgygcgPg2QgQg1AcgxQAbgyA2gPQA2gPAxAbQAyAcAPA2QAPA1gbAxQgcAxg2AQQgTAFgSAAQgiAAgfgRg");
	this.shape.setTransform(19.2,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3C489A").ss(2).p("Ai/ALIF/gV");
	this.shape_1.setTransform(19.2,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-1,0,40.4,27.3), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],11.9,-2.2,0,11.9,-2.2,24).s().p("Ag6B6QgzgYgSg1QgTg0AYgzQAZgzA1gSQA0gTAzAYQAzAZASA1QATA0gYAzQgZAzg1ASQgXAIgWAAQgdAAgdgOg");
	this.shape.setTransform(19.1,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3C489A").ss(2).p("Ai+AWIF9gr");
	this.shape_1.setTransform(19.1,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-1,0,40.2,27.3), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],11.8,-2.3,0,11.8,-2.3,24).s().p("Ag5B7QgzgYgTg1QgTg0AYgzQAYgzA1gTQA0gTAzAYQAzAXATA1QATA0gYA0QgYAzg1ATQgXAIgXAAQgcAAgdgNg");
	this.shape.setTransform(19.1,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3C489A").ss(2).p("Ai+AZIF9gw");
	this.shape_1.setTransform(19.1,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-1,0,40.2,27.3), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],11.3,-4.2,0,11.3,-4.2,24).s().p("AgkCDQg2gPgbgxQgcgxAPg1QAPg3AxgbQAxgcA2APQA2APAbAxQAcAxgPA2QgPA2gxAcQggARgiAAQgRAAgUgFg");
	this.shape.setTransform(18.4,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3C489A").ss(2).p("Ai3A4IFvhv");
	this.shape_1.setTransform(18.4,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-1,0,38.9,27.3), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],11.8,-2.7,0,11.8,-2.7,24).s().p("Ag0B9Qg0gWgVg1QgVgzAWg0QAWgzA0gVQA0gVA0AWQAzAWAVA0QAVA0gWA0QgWAzg1AVQgZAKgZAAQgaAAgagLg");
	this.shape.setTransform(19,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3C489A").ss(2).p("Ai9AfIF7g9");
	this.shape_1.setTransform(19,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-1,0,40,27.3), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],-12,-0.4,0,-12,-0.4,24).s().p("AhUBqQgsgjgGg4QgGg3AjgsQAjgsA4gGQA3gGAsAjQAsAjAGA4QAGA3gjAsQgjAsg4AGIgPABQgvAAglgeg");
	this.shape.setTransform(19.1,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3C489A").ss(2).p("AC/AVIl9gp");
	this.shape_1.setTransform(19.1,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-1,0,40.3,27.3), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],11.8,-2.7,0,11.8,-2.7,24).s().p("Ag1B9Qg0gXgUg0QgVg0AWgzQAXg0A0gVQA0gUAzAWQA0AWAVA1QAUAzgWA0QgWA0g1AUQgZAKgZAAQgaAAgbgLg");
	this.shape.setTransform(19,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3C489A").ss(2).p("Ai9AeIF7g7");
	this.shape_1.setTransform(19,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-1,0,40,27.3), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],12.1,0,0,12.1,0,24).s().p("AhPBuQgtghgJg4QgJg3AhgtQAhguA4gJQA3gIAtAhQAuAhAJA4QAIA2ghAuQghAug4AIQgMACgKAAQgqAAgkgag");
	this.shape.setTransform(19.2,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3C489A").ss(2).p("Ai/gLIF/AX");
	this.shape_1.setTransform(19.2,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-1,0,40.4,27.3), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],11.9,-2.2,0,11.9,-2.2,24).s().p("Ag7B6QgygYgTg2QgSg0AZgzQAZgyA1gTQA0gSAzAZQAyAZATA1QASA0gZAyQgZAzg1ASQgXAIgVAAQgeAAgdgOg");
	this.shape.setTransform(19.1,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3C489A").ss(2).p("Ai+AWIF9gq");
	this.shape_1.setTransform(19.1,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1,0,40.3,27.3), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#AAABAE","#D1D3D4"],[0,0.875,1],11.7,-2.9,0,11.7,-2.9,24).s().p("AgyB+Qg0gVgWg0QgWg0AVgzQAVg0A0gWQA0gWAzAVQA0AVAWA0QAWA0gVAzQgVA0g0AWQgbALgaAAQgZAAgZgKg");
	this.shape.setTransform(18.9,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3C489A").ss(2).p("Ai8AiIF5hE");
	this.shape_1.setTransform(18.9,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,0,39.9,27.3), null);


// stage content:
(lib.Panel2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Once the protons are lined up, a  short burst of energy “knocks them all over” 
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AAFALIAEgRIADgRIATgCIgGATIgHARIgGANIgMACIAFgPgAgZALIAEgRIADgRIASgCIgFATIgHARIgGANIgMACIAFgPg");
	this.shape.setTransform(141.4,82.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AgYA0IAAhFIAAgRIgBgOIARAAIAAAUIABAAQAEgLAGgGQAIgGAJAAIADAAIADAAIAAASIgEgBIgDAAQgKABgGAGQgGAHgCAKIAAAEIgBAFIAAA1g");
	this.shape_1.setTransform(134.1,88.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgKAAgQQAAgOAGgNQAGgMAKgIQALgGAOgBQAMABAIAEQAJAFAEAHQAFAHACAJQACAHAAAIIAAAEIgBAEIhGAAQAAAMAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgJQAAgGgCgGQgCgHgGgGQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAHgBAGIA1AAIAAAAg");
	this.shape_2.setTransform(124.8,88.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgJAzIgmhlIATAAIAVA4IAEAOIADAMIABAAIADgMIAFgOIAUg4IATAAIgoBlg");
	this.shape_3.setTransform(114.8,88.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AgZAvQgLgHgGgLQgHgMAAgQQAAgQAHgMQAHgMALgHQALgGAOAAQAOAAALAHQALAGAGAMQAGALABAQQgBASgHAMQgIAMgLAFQgMAGgLAAQgOAAgLgGgAgRggQgHAFgDAJQgDAJAAAJQAAALAEAJQAEAJAHAFQAHAFAIAAQAJAAAHgFQAHgFAEgJQAEgJAAgLQAAgIgDgJQgEgJgGgGQgHgGgLAAQgKAAgHAGg");
	this.shape_4.setTransform(104,88.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgIBKIAAiTIARAAIAACTg");
	this.shape_5.setTransform(91.3,86.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AgIBKIAAiTIARAAIAACTg");
	this.shape_6.setTransform(86.4,86.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AgaAxQgHgFgDgGQgEgHAAgHQAAgTAQgIQAQgKAcAAIAAgCIgBgKQgBgFgGgEQgFgEgIAAQgIAAgHACQgGACgGADIgEgMQAGgEAJgDQAIgCAJAAQAPAAAJAGQAJAGADAKQADAJgBAKIAAAlIABANIABAMIgRAAIgBgNIgBAAQgEAGgHAEQgJAFgJAAQgLAAgHgEgAABAAQgJACgHAFQgGAFAAAKQAAAJAFAEQAFAEAHAAQAJAAAGgFQAGgFADgHIAAgDIABgCIAAgRQgLAAgJAAg");
	this.shape_7.setTransform(78.6,88.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AA3A0IAAg5QAAgPgGgHQgFgJgLAAQgIAAgGAFQgGAFgCAHIgBAEIAAAFIAAA+IgRAAIAAg8QAAgMgGgIQgFgHgLgBQgGAAgEADQgFACgDAFIgEAJIgCAEIAAAFIAAA8IgSAAIAAhJIgBgOIAAgOIAQAAIABARIAAAAIAHgKQAFgDAGgDQAGgDAJAAQAKABAIAFQAGAGADAIIAGgHIAGgGIAKgFQAFgCAIAAQAGAAAIADQAIAFAFAJQAGAJAAASIAAA7g");
	this.shape_8.setTransform(370.8,59.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgLAAgPQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAEAEAIQAFAHACAJQACAHAAAIIAAAEIgBADIhGAAQAAANAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgIQAAgHgCgHQgCgHgGgFQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_9.setTransform(356.8,59.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AAZBKIAAg6QAAgIgDgHQgCgFgFgFQgFgEgJAAQgIAAgGAGQgHAFgDAGIgBAFIAAAEIAAA9IgSAAIAAiTIASAAIAAA/IAGgHIAIgGIAJgEQADgBAGAAQAFAAAGACQAGACAFAEQAGAFADAIQAEAIAAANIAAA8g");
	this.shape_10.setTransform(345.8,57);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AABBAQgEgCgDgDQgEgFgCgGQgBgHgBgIIAAg3IgPAAIAAgOIAPAAIAAgZIARgEIAAAdIAbAAIAAAOIgbAAIAAA2QAAAJADAFQAEAFAIABIAGgBIAEgBIABAOIgHACIgKAAQgGAAgFgCg");
	this.shape_11.setTransform(336.4,58);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgUAzQgHgBgFgEIAEgOQAFADAGACQAGACAIAAQAJABAFgFQAEgEAAgGQAAgHgEgFQgEgDgKgEQgNgFgHgHQgGgHgBgJQABgIAEgHQAEgHAIgEQAIgEAKAAQAHAAAHACIALAFIgFANIgJgEQgFgCgGAAQgIAAgFAEQgEAEABAGQAAAGAEADQAEAFAJADQAOAFAGAGQAIAIgBAKQAAAOgKAJQgKAIgQAAQgJAAgIgCg");
	this.shape_12.setTransform(324.4,59.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AAUBKIgigwIgJALIAAAlIgSAAIAAiTIASAAIAABdIAAAAIAEgHIAFgFIAdgiIAWAAIgmAoIArA8g");
	this.shape_13.setTransform(316.2,57);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgPAuQgLgGgHgMQgGgLAAgQQAAgPAHgMQAGgMAMgHQANgHAPAAQAJAAAGACQAHABAEACIgEAPIgIgEQgGgBgIAAQgLAAgHAFQgIAFgEAJQgFAIAAAKQABAMAFAJQAEAIAIAFQAHAEAKAAQAHAAAHgCIAJgDIADAOIgLAEQgIACgKAAQgPAAgLgHg");
	this.shape_14.setTransform(305.8,59.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AgZAvQgLgHgGgLQgHgMAAgQQAAgQAHgMQAHgMALgHQALgGAOAAQAOAAALAHQALAGAGAMQAGALABAQQgBASgHAMQgIAMgLAFQgMAGgLAAQgOAAgLgGgAgRggQgHAFgDAJQgDAJAAAJQAAALAEAJQAEAJAHAFQAHAFAIAAQAJAAAHgFQAHgFAEgJQAEgJAAgLQAAgIgDgJQgEgJgGgGQgHgGgLAAQgKAAgHAGg");
	this.shape_15.setTransform(295.2,59.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AAZA0IAAg6QAAgIgCgHQgCgGgGgFQgFgDgIAAQgJgBgGAGQgHAFgCAJIgBADIAAAFIAAA8IgTAAIAAhJIAAgOIgBgOIARAAIABARIAAAAQADgEAEgFQAFgFAHgCQAGgDAIAAQAFAAAGACQAGACAGAEQAFAFAEAJQADAJABANIAAA7g");
	this.shape_16.setTransform(283.6,59.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AAUBKIgigwIgKALIAAAlIgRAAIAAiTIARAAIAABdIABAAIAFgHIAEgFIAdgiIAWAAIgmAoIArA8g");
	this.shape_17.setTransform(273.4,57);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AAGAHIAHgRIAHgNIALgCIgEAPIgFARIgDARIgTACIAGgTgAgYAHIAHgRIAHgNIAKgCIgDAPIgFARIgDARIgTACIAGgTg");
	this.shape_18.setTransform(263.8,52.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgpA7IAIgEIAIgFIAIgJIAIgMIABgDIAAgBIAAgCIgBgEIgmhcIAUAAIAXA8IADALIACAJIADgJIAEgMIAUg7IAUAAIgcBJIgMAcQgGAMgEAIQgGAJgGAFQgHAGgGADQgGADgEAAg");
	this.shape_19.setTransform(252.3,61.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgXBHQgIgCgGgDIAEgPIANAGQAHACAKABQAJgBAGgDQAIgDAEgJQAEgHAAgNIAAgLIAAAAQgEAHgIAFQgJAEgKABQgNAAgKgHQgKgGgFgLQgGgLABgOQgBgRAHgMQAGgNALgFQALgHALAAQAIAAAGADQAGADAFADQAEAEACAFIAAAAIABgQIAQAAIgBANIAAAPIAAA7QAAAQgDAMQgDALgIAHQgIAGgJADQgKADgJAAQgKAAgJgDgAgTgwQgJAKAAASQAAAKADAJQAEAHAGAEQAIAGAIAAQAJAAAHgGQAHgEADgIIABgFIAAgFIAAgSIAAgFIgBgEQgCgIgHgGQgGgFgLAAQgMAAgIAKg");
	this.shape_20.setTransform(241.2,61.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgXA0IAAhFIgBgRIgBgPIAQAAIABAVIABAAQAEgLAHgGQAHgGAKAAIACAAIACAAIAAASIgCgBIgEAAQgJABgHAGQgFAHgCAKIgBAEIAAAFIAAA1g");
	this.shape_21.setTransform(232.9,59.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgLAAgPQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAEAEAIQAFAHACAJQACAHAAAIIAAAEIgBADIhGAAQAAANAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgIQAAgHgCgHQgCgHgGgFQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_22.setTransform(223.7,59.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AAZA0IAAg6QAAgIgCgHQgCgGgGgFQgFgDgIAAQgJgBgGAGQgHAFgCAJIgBADIAAAFIAAA8IgTAAIAAhJIAAgOIgBgOIARAAIABARIAAAAQADgEAEgFQAFgFAHgCQAGgDAIAAQAFAAAGACQAGACAGAEQAFAFAEAJQADAJABANIAAA7g");
	this.shape_23.setTransform(212.6,59.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgLAAgPQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAEAEAIQAFAHACAJQACAHAAAIIAAAEIgBADIhGAAQAAANAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgIQAAgHgCgHQgCgHgGgFQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_24.setTransform(201.5,59.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgSBMIAAhXIgOAAIAAgOIAOAAIAAgFQAAgLADgJQACgJAHgGQAFgFAFgCQAHgDAGAAIAKABIAGACIgCAPIgFgCIgHgBQgIAAgEAEQgEAEgCAHQgBAHAAAIIAAAFIAYAAIAAAOIgYAAIAABXg");
	this.shape_25.setTransform(189.3,56.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AgZAvQgLgHgGgLQgHgMAAgQQAAgQAHgMQAHgMALgHQALgGAOAAQAOAAALAHQALAGAGAMQAGALABAQQgBASgHAMQgIAMgLAFQgMAGgLAAQgOAAgLgGgAgRggQgHAFgDAJQgDAJAAAJQAAALAEAJQAEAJAHAFQAHAFAIAAQAJAAAHgFQAHgFAEgJQAEgJAAgLQAAgIgDgJQgEgJgGgGQgHgGgLAAQgKAAgHAGg");
	this.shape_26.setTransform(179.9,59.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AABBAQgEgCgDgDQgEgFgCgGQgCgHAAgIIAAg3IgPAAIAAgOIAPAAIAAgZIARgEIAAAdIAbAAIAAAOIgbAAIAAA2QABAJADAFQADAFAHABIAHgBIAEgBIABAOIgHACIgKAAQgGAAgFgCg");
	this.shape_27.setTransform(166.1,58);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgTAzQgIgBgGgEIAFgOQAEADAHACQAGACAIAAQAJABAEgFQAGgEAAgGQgBgHgEgFQgEgDgJgEQgOgFgHgHQgGgHAAgJQgBgIAFgHQAEgHAIgEQAIgEAKAAQAHAAAHACIAKAFIgEANIgJgEQgEgCgHAAQgIAAgFAEQgDAEAAAGQgBAGAFADQAEAFAKADQANAFAGAGQAIAIAAAKQgBAOgJAJQgLAIgQAAQgJAAgHgCg");
	this.shape_28.setTransform(158.6,59.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgXA0IAAhFIgBgRIAAgPIAPAAIABAVIABAAQAEgLAHgGQAHgGAKAAIACAAIACAAIAAASIgCgBIgDAAQgKABgHAGQgFAHgCAKIgBAEIAAAFIAAA1g");
	this.shape_29.setTransform(151.6,59.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgXAwQgIgEgGgKQgFgJAAgSIAAg6IASAAIAAA3QAAAPAFAJQAGAIAMABQAFAAAFgDQAFgCADgEQAEgEACgEIABgFIAAgFIAAg9IATAAIAABJIAAAPIAAAMIgQAAIgBgQIAAAAIgHAIQgFAFgGACQgHADgIABQgIAAgIgEg");
	this.shape_30.setTransform(141.8,59.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AgQBHQgJgFgFgKIgBAAIgBARIgQAAIABgMIABgOIAAh6IASAAIAABAIAAAAQAFgJAIgEQAKgGAKAAQAOAAAJAHQAKAGAFAMQAGALgBAPQABASgIAMQgGANgKAFQgKAHgMAAQgKAAgJgFgAgQgJQgJAGgCAKIgBADIAAAEIAAATIAAADIABADQACAKAIAGQAHAGAKAAQAOAAAIgLQAIgKAAgSQAAgKgDgJQgEgIgGgFQgIgFgJAAQgJAAgHAGg");
	this.shape_31.setTransform(130.4,57.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AABBAQgEgCgDgDQgEgFgCgGQgCgHAAgIIAAg3IgPAAIAAgOIAPAAIAAgZIARgEIAAAdIAbAAIAAAOIgbAAIAAA2QAAAJAEAFQADAFAIABIAGgBIAEgBIABAOIgHACIgKAAQgGAAgFgCg");
	this.shape_32.setTransform(116.1,58);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AgYA0IAAhFIAAgRIgBgPIARAAIAAAVIABAAQAEgLAGgGQAIgGAJAAIADAAIADAAIAAASIgEgBIgDAAQgKABgGAGQgGAHgCAKIAAAEIgBAFIAAA1g");
	this.shape_33.setTransform(109.3,59.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgZAvQgLgHgGgLQgHgMAAgQQAAgQAHgMQAHgMALgHQALgGAOAAQAOAAALAHQALAGAGAMQAGALABAQQgBASgHAMQgIAMgLAFQgMAGgLAAQgOAAgLgGgAgRggQgHAFgDAJQgDAJAAAJQAAALAEAJQAEAJAHAFQAHAFAIAAQAJAAAHgFQAHgFAEgJQAEgJAAgLQAAgIgDgJQgEgJgGgGQgHgGgLAAQgKAAgHAGg");
	this.shape_34.setTransform(99.5,59.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AAZBKIAAg6QAAgIgDgHQgCgFgFgFQgFgEgJAAQgIAAgGAGQgHAFgDAGIgBAFIAAAEIAAA9IgSAAIAAiTIASAAIAAA/IAGgHIAIgGIAJgEQADgBAGAAQAFAAAGACQAGACAFAEQAGAFADAIQAEAIAAANIAAA8g");
	this.shape_35.setTransform(88,57);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgUAzQgHgBgFgEIAEgOQAFADAGACQAHACAGAAQAKABAFgFQAEgEAAgGQABgHgFgFQgEgDgKgEQgNgFgHgHQgGgHgBgJQABgIAEgHQAEgHAIgEQAIgEAJAAQAJAAAGACIALAFIgFANIgJgEQgEgCgIAAQgHAAgEAEQgFAEAAAGQABAGAEADQAFAFAIADQAOAFAHAGQAGAIAAAKQAAAOgKAJQgKAIgRAAQgIAAgIgCg");
	this.shape_36.setTransform(78,59.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgaAxQgHgFgDgGQgEgHABgHQAAgTAPgIQAQgKAcAAIAAgCIgBgKQgBgFgFgEQgGgEgIAAQgIAAgHACQgGACgGADIgEgMQAGgEAIgDQAKgCAIAAQAQAAAIAGQAJAGACAKQAEAJgBAKIAAAlIABANIACAMIgRAAIgCgNIAAAAQgFAGgIAEQgHAFgLAAQgKAAgHgEgAABAAQgJACgHAFQgGAFAAAKQAAAJAFAEQAFAEAIAAQAIAAAGgFQAHgFACgHIAAgDIABgCIAAgRQgLAAgJAAg");
	this.shape_37.setTransform(347.1,29.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AgLALIAEgRIAEgRIATgCIgGATIgGARIgGAOIgOABIAFgPg");
	this.shape_38.setTransform(335.5,35);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AguBJIAAhtIgBgSIgBgPIARAAIABARIAAAAQAGgJAJgFQAJgGALAAQANAAAKAHQAJAGAGAMQAFALAAAQQAAASgGALQgGAMgLAGQgLAHgMAAQgJgBgIgEQgIgEgFgHIAAAAIAAA3gAgQgzQgIAGgDALIgBAEIAAADIAAASIAAAEIABADQACAJAIAGQAHAGAKAAQAJAAAHgFQAGgFAFgJQADgHAAgMQAAgKgDgJQgEgJgGgFQgIgFgJAAQgJAAgHAGg");
	this.shape_39.setTransform(328.4,31.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AgXAwQgIgDgGgLQgFgJAAgSIAAg6IASAAIAAA3QAAAPAFAIQAGAJAMAAQAFAAAFgCQAFgDADgEQAEgDACgEIABgFIAAgFIAAg9IATAAIAABJIAAAOIAAAOIgQAAIgBgRIAAAAIgHAJQgFAEgGADQgHADgIAAQgIAAgIgEg");
	this.shape_40.setTransform(316.3,30.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgaBFQgKgGgFgMQgGgMAAgPQAAgRAHgLQAGgMAJgHQALgHANAAQAKABAIAEQAHAFAEAGIAAAAIAAg9IATAAIAAB6IAAAOIABAMIgQAAIgBgRIgBAAQgFAIgIAGQgJAFgLABQgNgBgKgGgAgPgKQgGAFgEAIQgDAJAAALQAAAKADAJQADAIAHAGQAGAFAJAAQAKAAAHgGQAIgGADgKIAAgEIAAgEIAAgSIAAgEIAAgEQgCgIgIgGQgGgGgLAAQgIAAgIAFg");
	this.shape_41.setTransform(299.9,27.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgVAvQgLgHgGgLQgGgLAAgQQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAFAEAHQAFAIACAHQACAIAAAIIAAAEIgBADIhGAAQAAANAFAHQAFAJAIADQAHAEAJAAQAJAAAHgBIAMgFIADAOIgNAEQgJACgMAAQgPAAgLgGgAAbgIQAAgHgCgHQgCgGgGgFQgFgFgLgBQgIABgGAFQgGAEgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_42.setTransform(289,29.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AAZA0IAAg5QAAgJgCgHQgCgGgGgFQgFgDgIAAQgJgBgGAGQgHAFgCAJIgBADIAAAFIAAA8IgTAAIAAhJIAAgOIgBgOIARAAIABARIAAAAQADgEAEgFQAFgEAHgDQAGgDAIAAQAFAAAGACQAGACAGAFQAFAEAEAJQADAIABAOIAAA7g");
	this.shape_43.setTransform(277.9,29.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AgIBHIAAhlIASAAIAABlgAgHgyQgEgEAAgEQAAgFAEgEQADgDAEAAQAGAAADADQADAEAAAFQAAAEgDAEQgEADgFAAQgFAAgCgDg");
	this.shape_44.setTransform(269.7,27.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AgIBLIAAiVIARAAIAACVg");
	this.shape_45.setTransform(264.7,27.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AgVAvQgLgHgGgLQgGgLAAgQQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAFAEAHQAFAIACAHQACAIAAAIIAAAEIgBADIhGAAQAAANAFAHQAFAJAIADQAHAEAJAAQAJAAAHgBIAMgFIADAOIgNAEQgJACgMAAQgPAAgLgGgAAbgIQAAgHgCgHQgCgGgGgFQgFgFgLgBQgIABgGAFQgGAEgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_46.setTransform(252.6,29.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgYA0IAAhFIAAgQIgBgQIARAAIABAUIAAAAQAEgKAGgGQAIgGAJAAIADABIADAAIAAARIgEAAIgDAAQgKAAgGAGQgGAGgCALIAAAFIgBAEIAAA1g");
	this.shape_47.setTransform(244.7,29.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AgaAxQgGgFgEgGQgDgHAAgHQAAgTAPgIQAQgKAdAAIAAgCIgCgKQgCgFgEgEQgFgEgKAAQgHAAgGACQgIACgFADIgEgMQAGgEAIgDQAJgCAJAAQAPAAAJAGQAIAGADAKQAEAJAAAKIAAAlIAAANIABAMIgRAAIgBgNIAAAAQgFAGgHAEQgJAFgKAAQgKAAgHgEgAABAAQgJACgGAFQgHAFAAAKQAAAJAFAEQAFAEAHAAQAJAAAHgFQAFgFADgHIABgDIAAgCIAAgRQgKAAgKAAg");
	this.shape_48.setTransform(235.4,29.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgUAzQgHgBgFgEIAEgOQAFADAGACQAHADAGgBQAKAAAFgEQAEgEAAgHQABgGgFgFQgEgDgKgFQgNgEgHgHQgGgHgBgJQABgJAEgGQAEgHAIgEQAIgEAJAAQAJAAAGACIALAFIgFANIgJgEQgEgCgIAAQgHAAgEAEQgFAEAAAGQABAGAEAEQAFADAIAEQAOAFAHAGQAGAHAAALQAAAOgKAJQgKAIgRAAQgIAAgIgCg");
	this.shape_49.setTransform(222,29.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AAZA0IAAg5QAAgJgCgHQgCgGgGgFQgFgDgIAAQgJgBgGAGQgHAFgCAJIgBADIAAAFIAAA8IgTAAIAAhJIAAgOIgBgOIARAAIABARIAAAAQADgEAEgFQAFgEAHgDQAGgDAIAAQAFAAAGACQAGACAGAFQAFAEAEAJQADAIABAOIAAA7g");
	this.shape_50.setTransform(212,29.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AgZAvQgLgHgGgLQgHgMAAgQQAAgQAHgMQAHgMALgHQALgGAOAAQAOAAALAHQALAGAGAMQAGALABAQQgBASgHAMQgIAMgLAFQgMAGgLAAQgOAAgLgGgAgRggQgHAFgDAJQgDAJAAAJQAAALAEAJQAEAJAHAFQAHAFAIAAQAJAAAHgFQAHgFAEgJQAEgJAAgLQAAgIgDgJQgEgJgGgGQgHgGgLAAQgKAAgHAGg");
	this.shape_51.setTransform(200.4,29.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AABBBQgEgCgDgEQgEgFgCgGQgCgHAAgJIAAg2IgPAAIAAgOIAPAAIAAgYIARgGIAAAeIAbAAIAAAOIgbAAIAAA2QAAAJAEAGQADAEAIAAIAGAAIAEgBIABAOIgHACIgKAAQgGAAgFgBg");
	this.shape_52.setTransform(191.2,28.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AgZAvQgLgHgGgLQgHgMAAgQQAAgQAHgMQAHgMALgHQALgGAOAAQAOAAALAHQALAGAGAMQAGALABAQQgBASgHAMQgIAMgLAFQgMAGgLAAQgOAAgLgGgAgRggQgHAFgDAJQgDAJAAAJQAAALAEAJQAEAJAHAFQAHAFAIAAQAJAAAHgFQAHgFAEgJQAEgJAAgLQAAgIgDgJQgEgJgGgGQgHgGgLAAQgKAAgHAGg");
	this.shape_53.setTransform(182,29.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AgXA0IAAhFIgBgQIAAgQIAPAAIABAUIABAAQAEgKAHgGQAHgGAKAAIACABIACAAIAAARIgCAAIgDAAQgKAAgHAGQgFAGgCALIgBAFIAAAEIAAA1g");
	this.shape_54.setTransform(173.6,29.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AguBJIAAhtIgBgSIAAgPIAQAAIABARIABAAQAFgJAJgFQAJgGAMAAQAMAAAJAHQAKAGAGAMQAFALABAQQAAASgHALQgGAMgLAGQgKAHgNAAQgJgBgIgEQgIgEgFgHIAAAAIAAA3gAgRgzQgHAGgDALIgBAEIAAADIAAASIAAAEIAAADQADAJAHAGQAIAGAKAAQAJAAAHgFQAHgFADgJQAEgHAAgMQAAgKgEgJQgDgJgHgFQgHgFgJAAQgJAAgIAGg");
	this.shape_55.setTransform(164,31.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgVAvQgLgHgGgLQgGgLAAgQQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAFAEAHQAFAIACAHQACAIAAAIIAAAEIgBADIhGAAQAAANAFAHQAFAJAIADQAHAEAJAAQAJAAAHgBIAMgFIADAOIgNAEQgJACgMAAQgPAAgLgGgAAbgIQAAgHgCgHQgCgGgGgFQgFgFgLgBQgIABgGAFQgGAEgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_56.setTransform(148,29.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AAZBLIAAg7QAAgIgDgHQgCgGgFgEQgFgEgJAAQgIAAgGAGQgHAFgDAGIgBAFIAAAEIAAA+IgSAAIAAiVIASAAIAABAIAGgHIAIgGIAJgEQADgCAGAAQAFAAAGADQAGABAFAFQAGAFADAJQAEAHAAANIAAA9g");
	this.shape_57.setTransform(136.9,27.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AABBBQgEgCgDgEQgEgFgCgGQgBgHAAgJIAAg2IgQAAIAAgOIAQAAIAAgYIARgGIAAAeIAaAAIAAAOIgaAAIAAA2QAAAJADAGQADAEAHAAIAHAAIAEgBIABAOIgHACIgJAAQgHAAgFgBg");
	this.shape_58.setTransform(127.5,28.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgVAvQgLgHgGgLQgGgLAAgQQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAFAEAHQAFAIACAHQACAIAAAIIAAAEIgBADIhGAAQAAANAFAHQAFAJAIADQAHAEAJAAQAJAAAHgBIAMgFIADAOIgNAEQgJACgMAAQgPAAgLgGgAAbgIQAAgHgCgHQgCgGgGgFQgFgFgLgBQgIABgGAFQgGAEgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_59.setTransform(114.4,29.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgPAuQgLgGgHgMQgGgLAAgQQAAgPAHgMQAGgMAMgHQANgHAPAAQAJAAAGACQAIABADACIgEAPIgIgEQgGgBgIAAQgLAAgHAFQgIAFgEAJQgFAIAAAKQABAMAEAJQAFAIAIAFQAHAEAKAAQAHAAAHgCIAJgDIADAOIgMAEQgHACgLAAQgOAAgLgHg");
	this.shape_60.setTransform(104.7,29.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AAZA0IAAg5QAAgJgCgHQgCgGgGgFQgFgDgIAAQgJgBgGAGQgHAFgCAJIgBADIAAAFIAAA8IgTAAIAAhJIAAgOIgBgOIARAAIABARIAAAAQADgEAEgFQAFgEAHgDQAGgDAIAAQAFAAAGACQAGACAGAFQAFAEAEAJQADAIABAOIAAA7g");
	this.shape_61.setTransform(94.1,29.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("AghBAQgOgJgIgQQgJgQAAgWQABgVAIgRQAIgRAPgJQAPgJASAAQATAAAPAJQAOAJAIAQQAIAQAAAWQgBAXgIAQQgJARgPAIQgPAJgRAAQgTAAgOgJgAgYgxQgKAIgFAOQgFANAAAPQAAAPAFANQAFANAKAIQALAIANAAQAOAAALgIQAKgIAFgNQAFgNAAgQQAAgKgCgLQgDgKgGgIQgFgIgJgFQgIgFgMAAQgOAAgKAIg");
	this.shape_62.setTransform(81,27.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(325));

	// After the radio burst ends, the  protons realign themselves.
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#373535").s().p("AgIAJQgEgDABgGQgBgFAEgEQADgDAFAAQAFAAAEADQAEAEAAAFQAAAGgEADQgEAEgFAAQgFAAgDgEg");
	this.shape_63.setTransform(705.8,63.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#373535").s().p("AgUAzQgHgBgGgEIAGgOQAEADAGACQAHACAGAAQAKABAFgFQAEgEAAgGQABgHgFgFQgEgDgKgEQgNgFgHgHQgHgHAAgJQAAgIAFgHQAEgHAIgEQAIgEAJAAQAJAAAGACIALAFIgFANIgIgEQgGgCgHAAQgHAAgEAEQgFAEAAAGQAAAGAFADQAFAFAIADQAOAFAHAGQAGAIAAAKQAAAOgKAJQgJAIgSAAQgIAAgIgCg");
	this.shape_64.setTransform(699.5,59.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgLAAgPQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAEAEAIQAFAHACAJQACAHAAAIIAAAEIgBADIhGAAQAAANAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgIQAAgHgCgHQgCgHgGgFQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_65.setTransform(690.1,59.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#373535").s().p("AgIAzIgnhlIATAAIAVA4IAEAOIADAMIABAAIADgMIAFgOIAUg4IATAAIgoBlg");
	this.shape_66.setTransform(680.1,59.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#373535").s().p("AgIBKIAAiTIARAAIAACTg");
	this.shape_67.setTransform(672.5,57);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgLAAgPQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAEAEAIQAFAHACAJQACAHAAAIIAAAEIgBADIhGAAQAAANAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgIQAAgHgCgHQgCgHgGgFQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_68.setTransform(664.8,59.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#373535").s().p("AgTAzQgIgBgGgEIAFgOQAEADAHACQAGACAIAAQAJABAEgFQAGgEAAgGQgBgHgEgFQgEgDgJgEQgOgFgHgHQgHgHABgJQgBgIAFgHQAEgHAIgEQAIgEAKAAQAHAAAHACIAKAFIgEANIgJgEQgEgCgHAAQgIAAgFAEQgDAEAAAGQgBAGAFADQAEAFAKADQANAFAGAGQAIAIAAAKQgBAOgJAJQgLAIgQAAQgJAAgHgCg");
	this.shape_69.setTransform(655.4,59.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#373535").s().p("AA3A0IAAg5QAAgPgGgHQgFgJgLAAQgIAAgGAFQgFAFgDAHIgBAEIAAAFIAAA+IgRAAIAAg8QgBgMgFgIQgFgHgLgBQgFAAgFADQgEACgEAFIgEAJIgCAEIAAAFIAAA8IgSAAIAAhJIAAgOIgBgOIAQAAIABARIABAAIAGgKQAFgDAGgDQAGgDAIAAQALABAHAFQAHAGADAIIAGgHIAGgGIAKgFQAGgCAGAAQAIAAAHADQAIAFAFAJQAGAJAAASIAAA7g");
	this.shape_70.setTransform(642.5,59.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgLAAgPQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAEAEAIQAFAHACAJQACAHAAAIIAAAEIgBADIhGAAQAAANAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgIQAAgHgCgHQgCgHgGgFQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_71.setTransform(628.5,59.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#373535").s().p("AAZBKIAAg6QAAgIgDgHQgCgFgFgFQgFgEgJAAQgIAAgGAGQgHAFgDAGIgBAFIAAAEIAAA9IgSAAIAAiTIASAAIAAA/IAGgHIAIgGIAJgEQADgBAGAAQAFAAAGACQAGACAFAEQAGAFADAIQAEAIAAANIAAA8g");
	this.shape_72.setTransform(617.4,57);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#373535").s().p("AABBAQgEgCgDgDQgEgFgCgGQgCgHAAgIIAAg3IgPAAIAAgOIAPAAIAAgZIARgEIAAAdIAbAAIAAAOIgbAAIAAA2QABAJADAFQADAFAIABIAGgBIAEgBIABAOIgHACIgKAAQgGAAgFgCg");
	this.shape_73.setTransform(608,58);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#373535").s().p("AAZA0IAAg6QAAgIgCgHQgCgGgGgFQgFgDgIAAQgJgBgGAGQgHAFgCAJIgBADIAAAFIAAA8IgTAAIAAhJIAAgOIgBgOIARAAIABARIAAAAQADgEAEgFQAFgFAHgCQAGgDAIAAQAFAAAGACQAGACAGAEQAFAFAEAJQADAJABANIAAA7g");
	this.shape_74.setTransform(594.3,59.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#373535").s().p("AgWBHQgKgCgFgDIAEgPIANAGQAHACAKABQAIgBAIgDQAHgDAEgJQAFgHgBgNIAAgLIAAAAQgEAHgIAFQgJAEgKABQgNAAgKgHQgKgGgFgLQgFgLAAgOQAAgRAGgMQAHgNAKgFQALgHALAAQAIAAAHADQAFADAFADQAEAEACAFIABAAIAAgQIAQAAIgBANIAAAPIAAA7QABAQgEAMQgDALgIAHQgIAGgJADQgKADgJAAQgKAAgIgDgAgTgwQgJAKAAASQAAAKADAJQAEAHAGAEQAIAGAIAAQAJAAAHgGQAGgEAEgIIABgFIAAgFIAAgSIAAgFIgBgEQgDgIgGgGQgHgFgKAAQgMAAgIAKg");
	this.shape_75.setTransform(582.5,61.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#373535").s().p("AgIBHIAAhlIARAAIAABlgAgIgyQgCgEgBgEQABgFADgEQADgDAEAAQAFAAADADQADAEABAFQgBAEgDAEQgDADgFAAQgEAAgEgDg");
	this.shape_76.setTransform(574.5,57.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#373535").s().p("AgIBKIAAiTIARAAIAACTg");
	this.shape_77.setTransform(569.5,57);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#373535").s().p("AgaAxQgHgFgDgGQgEgHABgHQAAgTAPgIQAQgKAcAAIAAgCIgBgKQgBgFgFgEQgFgEgJAAQgIAAgHACQgGACgGADIgEgMQAGgEAIgDQAKgCAIAAQAQAAAIAGQAJAGACAKQAEAJgBAKIAAAlIABANIACAMIgRAAIgCgNIAAAAQgFAGgIAEQgHAFgLAAQgKAAgHgEgAABAAQgJACgHAFQgGAFAAAKQAAAJAFAEQAFAEAIAAQAIAAAGgFQAHgFACgHIAAgDIABgCIAAgRQgLAAgJAAg");
	this.shape_78.setTransform(561.8,59.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgLAAgPQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAEAEAIQAFAHACAJQACAHAAAIIAAAEIgBADIhGAAQAAANAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgIQAAgHgCgHQgCgHgGgFQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_79.setTransform(551.7,59.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#373535").s().p("AgYA0IAAhFIAAgRIAAgPIAQAAIABAVIAAAAQAEgLAGgGQAIgGAJAAIADAAIADAAIAAASIgEgBIgCAAQgLABgGAGQgGAHgCAKIAAAEIgBAFIAAA1g");
	this.shape_80.setTransform(543.8,59.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#373535").s().p("AgUAzQgHgBgGgEIAGgOQAEADAGACQAHACAGAAQAKABAFgFQAEgEAAgGQABgHgFgFQgEgDgKgEQgNgFgHgHQgHgHAAgJQAAgIAFgHQAEgHAIgEQAIgEAJAAQAJAAAGACIAKAFIgEANIgIgEQgGgCgHAAQgHAAgEAEQgFAEAAAGQAAAGAFADQAFAFAIADQAOAFAHAGQAGAIAAAKQAAAOgKAJQgJAIgSAAQgIAAgIgCg");
	this.shape_81.setTransform(531.2,59.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#373535").s().p("AAZA0IAAg6QAAgIgCgHQgCgGgGgFQgFgDgIAAQgJgBgGAGQgHAFgCAJIgBADIAAAFIAAA8IgTAAIAAhJIAAgOIgBgOIARAAIABARIAAAAQADgEAEgFQAFgFAHgCQAGgDAIAAQAFAAAGACQAGACAGAEQAFAFAEAJQADAJABANIAAA7g");
	this.shape_82.setTransform(521.2,59.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#373535").s().p("AgZAvQgLgHgGgLQgHgMAAgQQAAgQAHgMQAHgMALgHQALgGAOAAQAOAAALAHQALAGAGAMQAGALABAQQgBASgHAMQgIAMgLAFQgMAGgLAAQgOAAgLgGgAgRggQgHAFgDAJQgDAJAAAJQAAALAEAJQAEAJAHAFQAHAFAIAAQAJAAAHgFQAHgFAEgJQAEgJAAgLQAAgIgDgJQgEgJgGgGQgHgGgLAAQgKAAgHAGg");
	this.shape_83.setTransform(509.6,59.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#373535").s().p("AABBAQgEgCgDgDQgEgFgCgGQgCgHAAgIIAAg3IgPAAIAAgOIAPAAIAAgZIARgEIAAAdIAbAAIAAAOIgbAAIAAA2QABAJADAFQADAFAIABIAGgBIAEgBIABAOIgHACIgKAAQgGAAgFgCg");
	this.shape_84.setTransform(500.5,58);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#373535").s().p("AgZAvQgLgHgGgLQgHgMAAgQQAAgQAHgMQAHgMALgHQALgGAOAAQAOAAALAHQALAGAGAMQAGALABAQQgBASgHAMQgIAMgLAFQgMAGgLAAQgOAAgLgGgAgRggQgHAFgDAJQgDAJAAAJQAAALAEAJQAEAJAHAFQAHAFAIAAQAJAAAHgFQAHgFAEgJQAEgJAAgLQAAgIgDgJQgEgJgGgGQgHgGgLAAQgKAAgHAGg");
	this.shape_85.setTransform(491.3,59.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#373535").s().p("AgXA0IAAhFIgBgRIAAgPIAPAAIACAVIAAAAQAEgLAHgGQAHgGAKAAIACAAIACAAIAAASIgCgBIgDAAQgKABgHAGQgFAHgCAKIgBAEIAAAFIAAA1g");
	this.shape_86.setTransform(482.9,59.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#373535").s().p("AgvBJIAAhtIAAgSIAAgPIAQAAIABARIABAAQAFgJAJgFQAJgGAMAAQAMAAAJAHQAKAGAFAMQAGALABAQQAAASgHALQgHAMgKAGQgLAHgLAAQgKgBgIgEQgIgEgFgHIgBAAIAAA3gAgRgzQgHAGgDALIgBAEIgBADIAAASIABAEIAAADQADAJAHAGQAIAGAKAAQAJAAAHgFQAGgFAEgJQAEgHAAgMQAAgKgEgJQgDgJgHgFQgHgFgJAAQgJAAgIAGg");
	this.shape_87.setTransform(473.2,61.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#373535").s().p("AgVAvQgLgHgGgLQgGgLAAgQQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAFAEAHQAFAIACAHQACAIAAAIIAAAEIgBADIhGAAQAAANAFAHQAFAJAIADQAHAEAJAAQAJAAAHgBIAMgFIADAOIgNAEQgJACgMAAQgPAAgLgGgAAbgIQAAgHgCgHQgCgGgGgFQgFgFgLgBQgIABgGAFQgGAEgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_88.setTransform(722.4,29.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#373535").s().p("AAZBLIAAg7QAAgIgDgHQgCgGgFgEQgFgEgJAAQgIAAgGAGQgHAFgDAGIgBAFIAAAEIAAA+IgSAAIAAiVIASAAIAABAIAGgHIAIgGIAJgEQADgCAGAAQAFAAAGADQAGABAFAFQAGAFADAJQAEAHAAANIAAA9g");
	this.shape_89.setTransform(711.4,27.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#373535").s().p("AABBBQgEgCgDgEQgEgFgCgGQgCgHAAgJIAAg2IgPAAIAAgOIAPAAIAAgYIARgGIAAAeIAbAAIAAAOIgbAAIAAA2QAAAJAEAGQADAEAIAAIAGAAIAEgBIABAOIgHACIgKAAQgGAAgFgBg");
	this.shape_90.setTransform(702,28.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#373535").s().p("AgLALIAFgRIADgRIATgCIgFATIgIARIgGAOIgMABIAEgPg");
	this.shape_91.setTransform(691.8,35);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#373535").s().p("AgTAzQgIgBgGgEIAGgOQADADAHACQAGADAIgBQAJAAAEgEQAGgEAAgHQgBgGgEgFQgFgDgIgFQgOgEgHgHQgHgHABgJQgBgJAFgGQAEgHAIgEQAIgEAKAAQAHAAAHACIAKAFIgEANIgIgEQgFgCgHAAQgIAAgFAEQgDAEAAAGQgBAGAFAEQAEADAKAEQANAFAGAGQAIAHAAALQgBAOgJAJQgLAIgQAAQgJAAgHgCg");
	this.shape_92.setTransform(685.9,29.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#373535").s().p("AgaBFQgKgGgFgMQgGgMAAgPQAAgRAGgLQAGgMAKgHQALgHANAAQAKABAIAEQAHAFAEAGIAAAAIAAg9IATAAIAAB6IAAAOIABAMIgQAAIgCgRIAAAAQgEAIgJAGQgJAFgLABQgNgBgKgGgAgPgKQgGAFgEAIQgDAJAAALQgBAKAEAJQADAIAHAGQAGAFAJAAQAKAAAIgGQAHgGADgKIAAgEIAAgEIAAgSIAAgEIAAgEQgDgIgHgGQgHgGgKAAQgIAAgIAFg");
	this.shape_93.setTransform(675.5,27.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#373535").s().p("AAZA0IAAg5QAAgJgCgHQgCgGgGgFQgFgDgIAAQgJgBgGAGQgHAFgCAJIgBADIAAAFIAAA8IgTAAIAAhJIAAgOIgBgOIARAAIABARIAAAAQADgEAEgFQAFgEAHgDQAGgDAIAAQAFAAAGACQAGACAGAFQAFAEAEAJQADAIABAOIAAA7g");
	this.shape_94.setTransform(664.1,29.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#373535").s().p("AgVAvQgLgHgGgLQgGgLAAgQQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAFAEAHQAFAIACAHQACAIAAAIIAAAEIgBADIhGAAQAAANAFAHQAFAJAIADQAHAEAJAAQAJAAAHgBIAMgFIADAOIgNAEQgJACgMAAQgPAAgLgGgAAbgIQAAgHgCgHQgCgGgGgFQgFgFgLgBQgIABgGAFQgGAEgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_95.setTransform(653,29.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#373535").s().p("AABBBQgEgCgDgEQgEgFgCgGQgBgHgBgJIAAg2IgPAAIAAgOIAPAAIAAgYIARgGIAAAeIAbAAIAAAOIgbAAIAAA2QAAAJAEAGQADAEAIAAIAGAAIAEgBIABAOIgHACIgKAAQgGAAgFgBg");
	this.shape_96.setTransform(639.8,28.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#373535").s().p("AgTAzQgIgBgGgEIAGgOQADADAHACQAHADAGgBQAKAAAEgEQAFgEABgHQAAgGgFgFQgFgDgIgFQgOgEgHgHQgHgHABgJQgBgJAFgGQAEgHAIgEQAIgEAJAAQAIAAAHACIAKAFIgEANIgIgEQgGgCgHAAQgHAAgFAEQgDAEAAAGQgBAGAFAEQAEADAKAEQANAFAHAGQAGAHABALQgBAOgJAJQgKAIgSAAQgIAAgHgCg");
	this.shape_97.setTransform(632.2,29.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#373535").s().p("AgYA0IAAhFIAAgQIgBgQIAQAAIABAUIABAAQAEgKAHgGQAHgGAJAAIADABIACAAIAAARIgCAAIgEAAQgJAAgHAGQgGAGgBALIgBAFIgBAEIAAA1g");
	this.shape_98.setTransform(625.2,29.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#373535").s().p("AgXAwQgIgDgGgLQgFgJAAgSIAAg6IASAAIAAA3QAAAPAFAIQAGAJAMAAQAFAAAFgCQAFgDADgEQAEgDACgEIABgFIAAgFIAAg9IATAAIAABJIAAAOIAAAOIgQAAIgBgRIAAAAIgHAJQgFAEgGADQgHADgIAAQgIAAgIgEg");
	this.shape_99.setTransform(615.4,30.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#373535").s().p("AgQBHQgIgFgGgKIgBAAIgBARIgQAAIABgMIAAgOIAAh6IASAAIAABAIABAAQAFgJAJgEQAJgGAKAAQAOAAAJAHQAJAGAGAMQAFALAAAPQABASgIAMQgGANgKAFQgLAHgLAAQgKAAgJgFgAgQgJQgIAGgEAKIAAADIgBAEIAAATIABADIAAADQAEAKAHAGQAHAGAKAAQAOAAAIgLQAIgKAAgSQAAgKgDgJQgEgIgHgFQgGgFgKAAQgJAAgHAGg");
	this.shape_100.setTransform(604,27.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#373535").s().p("AgZAvQgLgHgGgLQgHgMAAgQQAAgQAHgMQAHgMALgHQALgGAOAAQAOAAALAHQALAGAGAMQAGALABAQQgBASgHAMQgIAMgLAFQgMAGgLAAQgOAAgLgGgAgRggQgHAFgDAJQgDAJAAAJQAAALAEAJQAEAJAHAFQAHAFAIAAQAJAAAHgFQAHgFAEgJQAEgJAAgLQAAgIgDgJQgEgJgGgGQgHgGgLAAQgKAAgHAGg");
	this.shape_101.setTransform(587.5,29.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#373535").s().p("AgIBHIAAhlIASAAIAABlgAgHgyQgEgEAAgEQAAgFAEgEQADgDAEAAQAFAAAEADQADAEAAAFQAAAEgDAEQgEADgFAAQgFAAgCgDg");
	this.shape_102.setTransform(579.3,27.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#373535").s().p("AgaBFQgJgGgGgMQgGgMAAgPQAAgRAHgLQAFgMALgHQAKgHAMAAQALABAIAEQAHAFAEAGIABAAIAAg9IASAAIAAB6IABAOIAAAMIgQAAIgBgRIgBAAQgFAIgIAGQgJAFgMABQgMgBgKgGgAgOgKQgHAFgDAIQgFAJAAALQABAKADAJQADAIAHAGQAHAFAJAAQAJAAAHgGQAIgGADgKIABgEIAAgEIAAgSIAAgEIgBgEQgDgIgGgGQgIgGgKAAQgJAAgGAFg");
	this.shape_103.setTransform(570.6,27.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#373535").s().p("AgaAxQgHgFgDgGQgEgHABgHQAAgTAPgIQAQgKAdAAIAAgCIgCgKQgCgFgEgEQgGgEgJAAQgHAAgGACQgIACgFADIgEgMQAGgEAIgDQAJgCAJAAQAPAAAJAGQAIAGADAKQAEAJAAAKIAAAlIAAANIACAMIgSAAIgBgNIAAAAQgFAGgIAEQgHAFgLAAQgKAAgHgEgAABAAQgJACgGAFQgHAFAAAKQAAAJAFAEQAFAEAIAAQAIAAAHgFQAFgFADgHIABgDIAAgCIAAgRQgLAAgJAAg");
	this.shape_104.setTransform(559.7,29.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#373535").s().p("AgXA0IAAhFIgBgQIAAgQIAPAAIACAUIAAAAQAEgKAHgGQAHgGAKAAIACABIACAAIAAARIgDAAIgCAAQgKAAgHAGQgFAGgCALIgBAFIAAAEIAAA1g");
	this.shape_105.setTransform(552.2,29.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#373535").s().p("AgVAvQgLgHgGgLQgGgLAAgQQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAFAEAHQAFAIACAHQACAIAAAIIAAAEIgBADIhGAAQAAANAFAHQAFAJAIADQAHAEAJAAQAJAAAHgBIAMgFIADAOIgNAEQgJACgMAAQgPAAgLgGgAAbgIQAAgHgCgHQgCgGgGgFQgFgFgLgBQgIABgGAFQgGAEgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_106.setTransform(538.5,29.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#373535").s().p("AAZBLIAAg7QAAgIgDgHQgCgGgFgEQgFgEgJAAQgIAAgGAGQgHAFgDAGIgBAFIAAAEIAAA+IgSAAIAAiVIASAAIAABAIAGgHIAIgGIAJgEQADgCAGAAQAFAAAGADQAGABAFAFQAGAFADAJQAEAHAAANIAAA9g");
	this.shape_107.setTransform(527.4,27.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#373535").s().p("AABBBQgEgCgDgEQgEgFgCgGQgCgHAAgJIAAg2IgPAAIAAgOIAPAAIAAgYIARgGIAAAeIAbAAIAAAOIgbAAIAAA2QABAJADAGQADAEAIAAIAGAAIAEgBIABAOIgHACIgKAAQgGAAgFgBg");
	this.shape_108.setTransform(518,28.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#373535").s().p("AgYA0IAAhFIAAgQIgBgQIAQAAIABAUIABAAQAEgKAHgGQAHgGAJAAIADABIADAAIAAARIgDAAIgEAAQgJAAgHAGQgGAGgBALIgBAFIgBAEIAAA1g");
	this.shape_109.setTransform(507.3,29.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#373535").s().p("AgVAvQgLgHgGgLQgGgLAAgQQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAFAEAHQAFAIACAHQACAIAAAIIAAAEIgBADIhGAAQAAANAFAHQAFAJAIADQAHAEAJAAQAJAAAHgBIAMgFIADAOIgNAEQgJACgMAAQgPAAgLgGgAAbgIQAAgHgCgHQgCgGgGgFQgFgFgLgBQgIABgGAFQgGAEgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_110.setTransform(498.1,29.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#373535").s().p("AABBBQgEgCgDgEQgEgFgCgGQgBgHAAgJIAAg2IgQAAIAAgOIAQAAIAAgYIARgGIAAAeIAaAAIAAAOIgaAAIAAA2QAAAJACAGQAEAEAHAAIAHAAIAEgBIABAOIgHACIgJAAQgHAAgFgBg");
	this.shape_111.setTransform(489.4,28.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#373535").s().p("AgSBMIAAhXIgOAAIAAgOIAOAAIAAgFQAAgLADgJQACgJAHgGQAFgFAFgCQAHgDAGAAIAKABIAGACIgCAPIgFgCIgHgBQgIAAgEAEQgEAEgCAHQgBAHAAAIIAAAFIAYAAIAAAOIgYAAIAABXg");
	this.shape_112.setTransform(483.2,27.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#373535").s().p("AAoBHIgPgtIgxAAIgPAtIgTAAIAwiNIAVAAIAwCNgAAVAMIgOgoIgEgNIgDgNIAAAAIgDANIgEANIgOAoIAqAAg");
	this.shape_113.setTransform(473.3,27.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},131).wait(194));

	// When cells realign, they release a small amount of measurable energy.
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#373535").s().p("AgIAJQgDgDgBgGQABgFADgEQAEgDAEAAQAFAAAEADQADAEABAFQgBAGgDADQgEAEgFAAQgFAAgDgEg");
	this.shape_114.setTransform(537.8,493.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#373535").s().p("AgpA6IAIgDIAIgGIAIgIIAIgMIABgCIAAgCIAAgDIgBgCIgmhdIAUAAIAXA8IADAKIACAKIADgKIAEgLIAUg7IAUAAIgcBJIgMAcQgGAMgEAIQgGAJgGAFQgHAGgGADQgGADgEAAg");
	this.shape_115.setTransform(531.3,492.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#373535").s().p("AgWBHQgJgBgHgFIAFgNIANAFQAHADAKAAQAIAAAIgEQAHgDAEgIQAFgJAAgMIAAgMIgBAAQgEAIgJAFQgIAEgKAAQgNABgKgHQgJgHgGgKQgFgLgBgOQABgRAGgMQAGgMALgGQALgHALAAQAIAAAHADQAFADAFAEQAEADACAFIABAAIAAgQIARAAIgBAMIAAAQIAAA7QAAARgEALQgEALgHAHQgHAHgLACQgJADgJAAQgKAAgIgDgAgUgwQgIAKAAASQAAAKAEAJQADAGAHAFQAGAGAJAAQAJAAAHgGQAGgFAEgHIABgFIABgFIAAgSIgBgFIgBgEQgDgIgGgGQgHgFgJgBQgNABgJAKg");
	this.shape_116.setTransform(520.1,491.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#373535").s().p("AgYA0IAAhFIAAgQIAAgQIAQAAIABAUIAAAAQAEgKAGgGQAIgGAJAAIADABIADAAIAAARIgEAAIgCAAQgLAAgGAGQgGAGgCALIAAAFIAAAEIAAA1g");
	this.shape_117.setTransform(511.9,489.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#373535").s().p("AgVAvQgLgHgGgLQgGgLAAgQQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAFAEAHQAFAIACAHQACAIAAAIIAAAEIgBADIhGAAQAAANAFAHQAFAJAIADQAHAEAJAAQAJAAAHgBIAMgFIADAOIgNAEQgJACgMAAQgPAAgLgGgAAbgIQAAgHgCgHQgCgGgGgFQgFgFgLgBQgIABgGAFQgGAEgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_118.setTransform(502.6,489.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#373535").s().p("AAZA0IAAg5QAAgJgCgHQgCgGgGgFQgFgDgIAAQgJgBgGAGQgHAFgCAJIgBADIAAAFIAAA8IgTAAIAAhJIAAgOIgBgOIARAAIABARIAAAAQADgEAEgFQAFgEAHgDQAGgDAIAAQAFAAAGACQAGACAGAFQAFAEAEAJQADAIABAOIAAA7g");
	this.shape_119.setTransform(491.5,489.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#373535").s().p("AgVAvQgLgHgGgLQgGgLAAgQQAAgPAGgMQAGgNAKgGQALgIAOAAQAMABAIAEQAJAFAEAHQAFAIACAHQACAIAAAIIAAAEIgBADIhGAAQAAANAFAHQAFAJAIADQAHAEAJAAQAJAAAHgBIAMgFIADAOIgNAEQgJACgMAAQgPAAgLgGgAAbgIQAAgHgCgHQgCgGgGgFQgFgFgLgBQgIABgGAFQgGAEgDAHQgDAGgBAIIA1AAIAAAAg");
	this.shape_120.setTransform(480.5,489.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#373535").s().p("AgVAvQgLgHgGgLQgGgMAAgPQAAgPAGgMQAGgMAKgIQALgGAOgBQAMAAAIAFQAJAEAEAIQAFAIACAHQACAJAAAHIAAAEIgBAEIhGAAQAAAMAFAHQAFAJAIADQAHAEAJAAQAJAAAHgBIAMgFIADAOIgNAEQgJACgMAAQgPAAgLgGgAAbgJQAAgGgCgGQgCgIgGgEQgFgGgLAAQgIAAgGAGQgGAEgDAHQgDAHgBAGIA1AAIAAAAg");
	this.shape_121.setTransform(732.8,460.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#373535").s().p("AgIBLIAAiVIARAAIAACVg");
	this.shape_122.setTransform(725,458);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#373535").s().p("AgQBHQgIgFgGgKIAAAAIgCARIgPAAIAAgMIABgOIAAh6IASAAIAABAIAAAAQAFgJAIgEQAKgGALAAQANAAAJAHQAJAGAGAMQAGALgBAPQAAASgGAMQgHANgKAFQgKAHgMAAQgKAAgJgFgAgRgJQgIAGgCAKIgBADIAAAEIAAATIAAADIABADQACAKAHAGQAIAGAKAAQAOAAAIgLQAIgKAAgSQAAgKgEgJQgDgIgGgFQgIgFgJAAQgJAAgIAGg");
	this.shape_123.setTransform(716.9,458.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#373535").s().p("AgaAxQgHgFgDgGQgEgHABgHQAAgTAPgIQAQgKAcAAIAAgCIgBgKQgBgFgFgEQgGgEgIAAQgIAAgHACQgGACgGADIgEgMQAGgEAIgDQAKgCAIAAQAQAAAIAGQAJAGACAKQAEAJgBAKIAAAlIABANIACAMIgRAAIgCgNIAAAAQgFAGgIAEQgHAFgLAAQgKAAgHgEgAABAAQgJACgHAFQgGAFAAAKQAAAJAFAEQAFAEAIAAQAIAAAGgFQAHgFACgHIAAgDIABgCIAAgRQgLAAgJAAg");
	this.shape_124.setTransform(705.3,460.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#373535").s().p("AgXA0IAAhFIgBgQIgBgPIAQAAIABATIABAAQAEgKAHgGQAHgGAKAAIACABIACAAIAAARIgCAAIgEAAQgJAAgHAGQgFAGgCALIgBAFIAAAEIAAA1g");
	this.shape_125.setTransform(697.8,460.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#373535").s().p("AgXAwQgIgDgGgLQgFgJAAgRIAAg7IASAAIAAA3QAAAPAFAIQAGAJAMAAQAFABAFgDQAFgCADgFQAEgDACgFIABgEIAAgFIAAg9IATAAIAABJIAAAOIAAAOIgQAAIgBgRIAAAAIgHAJQgFADgGAEQgHACgIABQgIAAgIgEg");
	this.shape_126.setTransform(688,460.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#373535").s().p("AgUAzQgHgCgFgDIAEgOQAFADAGACQAGACAIABQAJgBAFgEQAEgEAAgHQAAgGgEgFQgEgEgJgEQgOgEgHgGQgGgIAAgJQAAgJAEgGQAEgHAIgEQAIgEAKAAQAHAAAHACIALAEIgFAOIgJgEQgFgCgGAAQgIAAgFAEQgEAEAAAGQABAGAEAEQAEAEAJADQAOAFAGAGQAIAHgBAMQAAANgKAIQgKAJgQAAQgJAAgIgCg");
	this.shape_127.setTransform(678.1,460.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#373535").s().p("AgaAxQgHgFgDgGQgDgHAAgHQAAgTAPgIQAQgKAdAAIAAgCIgCgKQgCgFgEgEQgGgEgJAAQgHAAgGACQgIACgFADIgEgMQAGgEAIgDQAJgCAJAAQAPAAAJAGQAIAGADAKQAEAJAAAKIAAAlIAAANIACAMIgRAAIgCgNIAAAAQgFAGgIAEQgHAFgLAAQgKAAgHgEgAABAAQgJACgGAFQgHAFAAAKQAAAJAFAEQAFAEAIAAQAIAAAHgFQAFgFADgHIABgDIAAgCIAAgRQgLAAgJAAg");
	this.shape_128.setTransform(668.6,460.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#373535").s().p("AgVAvQgLgHgGgLQgGgMAAgPQAAgPAGgMQAGgMAKgIQALgGAOgBQAMAAAIAFQAJAEAEAIQAFAIACAHQACAJAAAHIAAAEIgBAEIhGAAQAAAMAFAHQAFAJAIADQAHAEAJAAQAJAAAHgBIAMgFIADAOIgNAEQgJACgMAAQgPAAgLgGgAAbgJQAAgGgCgGQgCgIgGgEQgFgGgLAAQgIAAgGAGQgGAEgDAHQgDAHgBAGIA1AAIAAAAg");
	this.shape_129.setTransform(658.6,460.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#373535").s().p("AA3A0IAAg4QAAgPgFgJQgGgHgLgBQgIABgGAEQgGAFgCAHIgBAFIgBAEIAAA+IgRAAIAAg8QAAgMgFgIQgFgIgLAAQgFABgFACQgEACgEAEIgFAJIgBAFIAAAEIAAA9IgSAAIAAhJIgBgPIAAgMIAQAAIABAQIABAAIAHgJQAEgEAGgDQAGgDAJAAQAKAAAIAGQAGAFAEAKIAFgIIAGgGIAKgFQAFgCAIAAQAGAAAIADQAIAEAGAKQAFAKAAARIAAA7g");
	this.shape_130.setTransform(644.6,460.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#373535").s().p("AgSBMIAAhXIgOAAIAAgOIAOAAIAAgFQAAgLADgJQACgJAHgGQAFgFAFgCQAHgDAGAAIAKABIAGACIgCAPIgFgCIgHgBQgIAAgEAEQgEAEgCAHQgBAHAAAIIAAAFIAYAAIAAAOIgYAAIAABXg");
	this.shape_131.setTransform(628.8,457.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#373535").s().p("AgZAvQgLgHgGgLQgHgMAAgQQAAgQAHgMQAHgMALgHQALgGAOAAQAOAAALAHQALAGAGAMQAGALABAQQgBASgHAMQgIAMgLAFQgMAGgLAAQgOAAgLgGgAgRggQgHAFgDAJQgDAJAAAJQAAALAEAJQAEAJAHAFQAHAFAIAAQAJAAAHgFQAHgFAEgJQAEgJAAgLQAAgIgDgJQgEgJgGgGQgHgGgLAAQgKAAgHAGg");
	this.shape_132.setTransform(619.4,460.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#373535").s().p("AABBBQgEgCgDgEQgEgFgCgGQgCgGAAgKIAAg2IgPAAIAAgOIAPAAIAAgYIARgGIAAAeIAbAAIAAAOIgbAAIAAA2QAAAJAEAGQADAEAIAAIAGAAIAEgBIABAOIgHACIgKABQgGAAgFgCg");
	this.shape_133.setTransform(605.7,459);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#373535").s().p("AAZA0IAAg5QAAgJgCgGQgCgIgGgDQgFgFgIAAQgJAAgGAGQgHAGgCAHIgBAFIAAAEIAAA8IgTAAIAAhJIAAgPIgBgMIARAAIABARIAAAAQADgFAEgFQAFgEAHgDQAGgDAIAAQAFAAAGACQAGACAGAFQAFAEAEAJQADAIABANIAAA8g");
	this.shape_134.setTransform(596.5,460.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#373535").s().p("AgXAwQgIgDgGgLQgFgJAAgRIAAg7IASAAIAAA3QAAAPAFAIQAGAJAMAAQAFABAFgDQAFgCADgFQAEgDACgFIABgEIAAgFIAAg9IATAAIAABJIAAAOIAAAOIgQAAIgBgRIAAAAIgHAJQgFADgGAEQgHACgIABQgIAAgIgEg");
	this.shape_135.setTransform(584.9,460.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#373535").s().p("AgZAvQgLgHgGgLQgHgMAAgQQAAgQAHgMQAHgMALgHQALgGAOAAQAOAAALAHQALAGAGAMQAGALABAQQgBASgHAMQgIAMgLAFQgMAGgLAAQgOAAgLgGgAgRggQgHAFgDAJQgDAJAAAJQAAALAEAJQAEAJAHAFQAHAFAIAAQAJAAAHgFQAHgFAEgJQAEgJAAgLQAAgIgDgJQgEgJgGgGQgHgGgLAAQgKAAgHAGg");
	this.shape_136.setTransform(573.4,460.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#373535").s().p("AA3A0IAAg4QAAgPgGgJQgFgHgLgBQgIABgGAEQgGAFgCAHIgBAFIgBAEIAAA+IgQAAIAAg8QgBgMgFgIQgFgIgLAAQgGABgEACQgFACgDAEIgFAJIgBAFIAAAEIAAA9IgSAAIAAhJIAAgPIgBgMIAQAAIABAQIABAAIAHgJQAEgEAGgDQAGgDAIAAQALAAAHAGQAHAFAEAKIAFgIIAGgGIAKgFQAGgCAGAAQAIAAAHADQAIAEAFAKQAGAKAAARIAAA7g");
	this.shape_137.setTransform(558.9,460.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#373535").s().p("AgaAxQgHgFgDgGQgEgHAAgHQAAgTAQgIQAQgKAcAAIAAgCIgBgKQgBgFgGgEQgFgEgIAAQgIAAgHACQgHACgFADIgEgMQAGgEAJgDQAIgCAJAAQAPAAAJAGQAIAGAEAKQADAJgBAKIAAAlIABANIABAMIgRAAIgBgNIgBAAQgEAGgHAEQgJAFgJAAQgLAAgHgEgAABAAQgJACgHAFQgGAFAAAKQAAAJAFAEQAFAEAHAAQAJAAAGgFQAGgFADgHIAAgDIABgCIAAgRQgLAAgJAAg");
	this.shape_138.setTransform(544.8,460.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#373535").s().p("AgIBLIAAiVIARAAIAACVg");
	this.shape_139.setTransform(533.1,458);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#373535").s().p("AgIBLIAAiVIARAAIAACVg");
	this.shape_140.setTransform(528.1,458);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#373535").s().p("AgaAxQgHgFgDgGQgEgHABgHQAAgTAPgIQAQgKAcAAIAAgCIgBgKQgBgFgFgEQgGgEgIAAQgIAAgHACQgGACgGADIgEgMQAGgEAIgDQAKgCAIAAQAQAAAIAGQAJAGACAKQAEAJgBAKIAAAlIABANIACAMIgRAAIgCgNIAAAAQgFAGgIAEQgHAFgLAAQgKAAgHgEgAABAAQgJACgHAFQgGAFAAAKQAAAJAFAEQAFAEAIAAQAIAAAGgFQAHgFACgHIAAgDIABgCIAAgRQgLAAgJAAg");
	this.shape_141.setTransform(520.4,460.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#373535").s().p("AA3A0IAAg4QAAgPgGgJQgFgHgLgBQgIABgGAEQgGAFgCAHIgBAFIAAAEIAAA+IgRAAIAAg8QAAgMgGgIQgFgIgLAAQgGABgEACQgFACgDAEIgEAJIgCAFIAAAEIAAA9IgSAAIAAhJIAAgPIgBgMIAQAAIABAQIAAAAIAHgJQAFgEAGgDQAGgDAJAAQAKAAAHAGQAHAFADAKIAGgIIAGgGIAKgFQAGgCAGAAQAIAAAHADQAIAEAFAKQAGAKAAARIAAA7g");
	this.shape_142.setTransform(506.8,460.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#373535").s().p("AgTAzQgIgCgFgDIAEgOQAEADAHACQAGACAIABQAJgBAEgEQAGgEgBgHQAAgGgEgFQgEgEgJgEQgOgEgHgGQgGgIAAgJQAAgJAEgGQAEgHAIgEQAIgEAKAAQAHAAAHACIALAEIgFAOIgJgEQgFgCgGAAQgIAAgFAEQgDAEAAAGQAAAGAEAEQAEAEAJADQAOAFAGAGQAIAHAAAMQgBANgJAIQgLAJgQAAQgJAAgHgCg");
	this.shape_143.setTransform(493.9,460.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#373535").s().p("AgaAxQgHgFgDgGQgEgHAAgHQAAgTAQgIQAQgKAcAAIAAgCIgBgKQgBgFgGgEQgFgEgIAAQgIAAgGACQgHACgGADIgEgMQAGgEAJgDQAIgCAJAAQAPAAAJAGQAJAGADAKQADAJgBAKIAAAlIABANIABAMIgRAAIgBgNIgBAAQgEAGgHAEQgJAFgJAAQgLAAgHgEgAABAAQgJACgHAFQgGAFAAAKQAAAJAFAEQAFAEAHAAQAJAAAGgFQAGgFADgHIAAgDIABgCIAAgRQgLAAgJAAg");
	this.shape_144.setTransform(480,460.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgKAAgQQAAgOAGgNQAGgMAKgIQALgGAOgBQAMABAIAEQAJAFAEAHQAFAHACAJQACAIAAAHIAAAEIgBAEIhGAAQAAAMAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgJQAAgGgCgGQgCgHgGgGQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAHgBAGIA1AAIAAAAg");
	this.shape_145.setTransform(742.4,430.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#373535").s().p("AgUAzQgHgCgFgDIAEgOQAEADAHACQAGADAIAAQAJAAAFgFQAEgEAAgGQAAgHgEgEQgEgFgKgDQgNgFgHgGQgGgIgBgJQABgIAEgHQAEgHAIgEQAIgEAKAAQAHAAAHACIALAEIgFAOIgJgEQgFgCgGAAQgIAAgFAEQgEAEABAGQAAAGAEAEQAEAEAJADQAOAFAGAGQAIAIgBALQAAANgKAIQgKAJgQAAQgJAAgIgCg");
	this.shape_146.setTransform(733,430.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#373535").s().p("AgaAxQgHgFgDgGQgEgHABgHQAAgTAPgIQAQgKAdAAIAAgCIgCgKQgCgFgEgEQgGgEgJAAQgHAAgGACQgIACgFADIgEgMQAGgEAIgDQAJgCAJAAQAPAAAJAGQAIAGADAKQAEAJAAAKIAAAlIAAANIACAMIgSAAIgBgNIAAAAQgFAGgIAEQgHAFgLAAQgKAAgHgEgAABAAQgJACgGAFQgHAFAAAKQAAAJAFAEQAFAEAIAAQAIAAAHgFQAFgFADgHIABgDIAAgCIAAgRQgLAAgJAAg");
	this.shape_147.setTransform(723.5,430.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgKAAgQQAAgOAGgNQAGgMAKgIQALgGAOgBQAMABAIAEQAJAFAEAHQAFAHACAJQACAIAAAHIAAAEIgBAEIhGAAQAAAMAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgJQAAgGgCgGQgCgHgGgGQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAHgBAGIA1AAIAAAAg");
	this.shape_148.setTransform(713.5,430.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#373535").s().p("AgIBKIAAiTIARAAIAACTg");
	this.shape_149.setTransform(705.7,428.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgKAAgQQAAgOAGgNQAGgMAKgIQALgGAOgBQAMABAIAEQAJAFAEAHQAFAHACAJQACAIAAAHIAAAEIgBAEIhGAAQAAAMAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgJQAAgGgCgGQgCgHgGgGQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAHgBAGIA1AAIAAAAg");
	this.shape_150.setTransform(698,430.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#373535").s().p("AgXA0IAAhFIgBgRIgBgOIAQAAIABAUIABAAQAEgLAHgGQAHgGAKAAIACAAIACAAIAAASIgCgBIgEAAQgJABgHAGQgFAHgCAKIgBAEIAAAFIAAA1g");
	this.shape_151.setTransform(690.1,430.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#373535").s().p("AgpA7IAIgEIAIgFIAIgJQAEgFAEgHIABgDIAAgCIAAgBIgBgDIgmhdIAUAAIAXA8IADAKIACAKIADgKIAEgKIAUg8IAUAAIgcBIIgMAdQgGAMgEAJQgGAHgGAGQgHAGgGACQgGADgEABg");
	this.shape_152.setTransform(676.7,433.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgKAAgQQAAgOAGgNQAGgMAKgIQALgGAOgBQAMABAIAEQAJAFAEAHQAFAHACAJQACAIAAAHIAAAEIgBAEIhGAAQAAAMAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgJQAAgGgCgGQgCgHgGgGQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAHgBAGIA1AAIAAAAg");
	this.shape_153.setTransform(666.5,430.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#373535").s().p("AAZBKIAAg6QAAgIgDgHQgCgGgFgEQgFgEgJAAQgIAAgGAFQgHAGgDAHIgBADIAAAGIAAA8IgSAAIAAiTIASAAIAAA/IAGgIIAIgFIAJgEQADgCAGABQAFAAAGABQAGACAFAFQAGAFADAIQAEAIAAANIAAA8g");
	this.shape_154.setTransform(655.5,428.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#373535").s().p("AABBAQgEgBgDgEQgEgEgCgHQgBgGgBgJIAAg3IgPAAIAAgOIAPAAIAAgZIARgEIAAAdIAbAAIAAAOIgbAAIAAA2QAAAJAEAFQADAGAIgBIAGAAIAEgBIABAOIgHACIgKABQgGAAgFgDg");
	this.shape_155.setTransform(646.1,429.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#373535").s().p("AgLALIAFgRIADgRIATgCIgFATIgHASIgHANIgMABIAEgPg");
	this.shape_156.setTransform(635.9,436);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#373535").s().p("AAZA0IAAg6QAAgIgCgGQgCgIgGgDQgFgFgIAAQgJABgGAFQgHAGgCAHIgBAFIAAAEIAAA8IgTAAIAAhJIAAgPIgBgMIARAAIABARIAAAAQADgGAEgEQAFgFAHgCQAGgDAIAAQAFAAAGACQAGACAGAEQAFAGAEAIQADAIABANIAAA8g");
	this.shape_157.setTransform(628,430.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#373535").s().p("AgXBIQgIgDgHgDIAFgPIAMAGQAIADAKgBQAIABAHgEQAIgEAEgHQAEgIABgNIAAgLIgBAAQgEAHgJAEQgIAGgKAAQgNgBgJgGQgKgHgGgLQgGgKAAgOQAAgRAHgNQAHgLAKgHQAKgGAMAAQAIAAAGADQAHACADAEQAFAFACAEIABAAIAAgPIARAAIgBALIAAARIAAA5QgBASgDALQgEALgHAHQgIAGgKADQgJADgJAAQgJAAgKgCgAgUgwQgHAKgBASQAAAKAEAIQADAHAHAGQAGAEAJAAQAJAAAHgEQAGgGAEgIIABgEIABgGIAAgSIgBgEIgBgEQgCgIgHgFQgGgGgKgBQgNABgJAKg");
	this.shape_158.setTransform(616.2,433);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#373535").s().p("AgIBHIAAhlIASAAIAABlgAgHgyQgDgEgBgEQAAgFAEgEQADgDAEAAQAFAAAEADQACAEAAAFQAAAEgCAEQgEADgFAAQgFAAgCgDg");
	this.shape_159.setTransform(608.2,428.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#373535").s().p("AgIBKIAAiTIARAAIAACTg");
	this.shape_160.setTransform(603.2,428.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#373535").s().p("AgaAxQgGgFgEgGQgDgHgBgHQAAgTAQgIQAQgKAdAAIAAgCIgCgKQgCgFgEgEQgFgEgKAAQgHAAgGACQgIACgFADIgEgMQAGgEAJgDQAIgCAJAAQAPAAAJAGQAIAGAEAKQADAJAAAKIAAAlIAAANIABAMIgRAAIgBgNIgBAAQgEAGgHAEQgJAFgJAAQgLAAgHgEgAABAAQgJACgGAFQgHAFAAAKQAAAJAFAEQAFAEAHAAQAJAAAHgFQAFgFADgHIABgDIAAgCIAAgRQgKAAgKAAg");
	this.shape_161.setTransform(595.5,430.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgKAAgQQAAgOAGgNQAGgMAKgIQALgGAOgBQAMABAIAEQAJAFAEAHQAFAHACAJQACAIAAAHIAAAEIgBAEIhGAAQAAAMAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgJQAAgGgCgGQgCgHgGgGQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAHgBAGIA1AAIAAAAg");
	this.shape_162.setTransform(585.4,430.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#373535").s().p("AgYA0IAAhFIAAgRIgBgOIAQAAIABAUIABAAQAEgLAHgGQAHgGAJAAIADAAIACAAIAAASIgCgBIgEAAQgJABgHAGQgGAHgBAKIgBAEIgBAFIAAA1g");
	this.shape_163.setTransform(577.5,430.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#373535").s().p("AgTAzQgIgCgGgDIAFgOQAEADAHACQAGADAIAAQAJAAAEgFQAGgEAAgGQgBgHgEgEQgEgFgJgDQgOgFgHgGQgHgIABgJQgBgIAFgHQAEgHAIgEQAIgEAKAAQAHAAAHACIAKAEIgEAOIgJgEQgEgCgHAAQgIAAgFAEQgDAEAAAGQgBAGAFAEQAEAEAKADQANAFAGAGQAIAIAAALQgBANgJAIQgLAJgQAAQgJAAgHgCg");
	this.shape_164.setTransform(564.9,430.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#373535").s().p("AgIBKIAAiTIARAAIAACTg");
	this.shape_165.setTransform(558.3,428.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#373535").s().p("AgIBKIAAiTIARAAIAACTg");
	this.shape_166.setTransform(553.3,428.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgKAAgQQAAgOAGgNQAGgMAKgIQALgGAOgBQAMABAIAEQAJAFAEAHQAFAHACAJQACAIAAAHIAAAEIgBAEIhGAAQAAAMAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgJQAAgGgCgGQgCgHgGgGQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAHgBAGIA1AAIAAAAg");
	this.shape_167.setTransform(545.6,430.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#373535").s().p("AgPAuQgLgGgHgMQgGgLAAgQQAAgPAHgMQAGgMAMgHQANgHAQAAQAIAAAGACQAIABADACIgEAPIgJgEQgFgBgHAAQgMAAgHAFQgIAFgEAJQgFAIABAKQAAAMAEAJQAFAIAIAFQAHAEAKAAQAIAAAFgCIAJgDIAEAOIgMAEQgHACgLAAQgOAAgLgHg");
	this.shape_168.setTransform(535.9,430.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#373535").s().p("AAZA0IAAg6QAAgIgCgGQgCgIgGgDQgFgFgIAAQgJABgGAFQgHAGgCAHIgBAFIAAAEIAAA8IgTAAIAAhJIAAgPIgBgMIARAAIABARIAAAAQADgGAEgEQAFgFAHgCQAGgDAIAAQAFAAAGACQAGACAGAEQAFAGAEAIQADAIABANIAAA8g");
	this.shape_169.setTransform(520.8,430.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#373535").s().p("AgVAuQgLgGgGgMQgGgKAAgQQAAgOAGgNQAGgMAKgIQALgGAOgBQAMABAIAEQAJAFAEAHQAFAHACAJQACAIAAAHIAAAEIgBAEIhGAAQAAAMAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgJQAAgGgCgGQgCgHgGgGQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAHgBAGIA1AAIAAAAg");
	this.shape_170.setTransform(509.8,430.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#373535").s().p("AAZBKIAAg6QAAgIgDgHQgCgGgFgEQgFgEgJAAQgIAAgGAFQgHAGgDAHIgBADIAAAGIAAA8IgSAAIAAiTIASAAIAAA/IAGgIIAIgFIAJgEQADgCAGABQAFAAAGABQAGACAFAFQAGAFADAIQAEAIAAANIAAA8g");
	this.shape_171.setTransform(498.7,428.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#373535").s().p("AAbBHIgRhJIgGgYIgEgWIAAAAIgEAVIgGAZIgVBJIgTAAIgkiNIAUAAIAQBHIAGAaIAFAXIABAAIAEgXIAHgaIAThHIASAAIARBHIAGAZIAEAYIABAAIAFgYIAGgZIAThHIATAAIgpCNg");
	this.shape_172.setTransform(484.2,428.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114}]},205).wait(120));

	// MagneticField
	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#00A85A").s().p("AgaBFQgJgGgGgMQgGgMAAgPQAAgRAHgLQAFgMALgHQAKgHAMAAQALABAIAEQAHAFAEAGIABAAIAAg9IASAAIAAB6IABAOIAAAMIgQAAIgBgRIgBAAQgFAIgIAGQgJAFgLABQgNgBgKgGgAgOgKQgHAFgDAIQgFAJAAALQABAKADAJQAEAIAGAGQAHAFAIAAQAKAAAHgGQAIgGADgKIABgEIAAgEIAAgSIAAgEIgBgEQgCgIgIgGQgGgGgLAAQgJAAgGAFg");
	this.shape_173.setTransform(269.9,102.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#00A85A").s().p("AgIBKIAAiTIARAAIAACTg");
	this.shape_174.setTransform(261.8,102.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#00A85A").s().p("AgVAuQgLgGgGgMQgGgKAAgQQAAgOAGgNQAGgMAKgIQALgGAOgBQAMABAIAEQAJAFAEAHQAFAHACAJQACAHAAAIIAAAEIgBAEIhGAAQAAAMAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgJQAAgGgCgGQgCgHgGgGQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAHgBAGIA1AAIAAAAg");
	this.shape_175.setTransform(254.1,105);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#00A85A").s().p("AgIBHIAAhlIARAAIAABlgAgIgyQgDgEAAgEQABgFADgEQADgDAEAAQAFAAADADQADAEABAFQgBAEgDAEQgDADgFAAQgEAAgEgDg");
	this.shape_176.setTransform(246.4,103);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#00A85A").s().p("AglBHIAAiNIBLAAIAAAQIg5AAIAAAvIA1AAIAAAOIg1AAIAABAg");
	this.shape_177.setTransform(239.7,103);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#00A85A").s().p("AgPAuQgLgGgHgMQgGgLAAgQQAAgPAHgMQAGgMAMgHQANgHAPAAQAJAAAGACQAHABAEACIgEAPIgIgEQgGgBgIAAQgLAAgHAFQgIAFgEAJQgFAIAAAKQABAMAFAJQAEAIAIAFQAHAEAKAAQAHAAAHgCIAJgDIADAOIgLAEQgIACgKAAQgPAAgLgHg");
	this.shape_178.setTransform(225.2,105);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#00A85A").s().p("AgIBHIAAhlIARAAIAABlgAgIgyQgCgEAAgEQAAgFADgEQADgDAEAAQAFAAADADQADAEAAAFQAAAEgDAEQgDADgFAAQgFAAgDgDg");
	this.shape_179.setTransform(218,103);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#00A85A").s().p("AABBAQgEgCgDgDQgEgFgCgGQgCgHABgIIAAg3IgQAAIAAgOIAQAAIAAgZIARgEIAAAdIAaAAIAAAOIgaAAIAAA2QAAAJACAFQAEAGAHAAIAHgBIAEgBIABAOIgHACIgJABQgHgBgFgCg");
	this.shape_180.setTransform(212,103.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#00A85A").s().p("AgVAuQgLgGgGgMQgGgKAAgQQAAgOAGgNQAGgMAKgIQALgGAOgBQAMABAIAEQAJAFAEAHQAFAHACAJQACAHAAAIIAAAEIgBAEIhGAAQAAAMAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgJQAAgGgCgGQgCgHgGgGQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAHgBAGIA1AAIAAAAg");
	this.shape_181.setTransform(203.3,105);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#00A85A").s().p("AAZA0IAAg6QAAgIgCgGQgCgHgGgFQgFgDgIgBQgJABgGAFQgHAGgCAHIgBAFIAAAEIAAA8IgTAAIAAhJIAAgPIgBgMIARAAIABAQIAAAAQADgFAEgEQAFgEAHgDQAGgDAIAAQAFAAAGACQAGACAGAEQAFAGAEAIQADAJABAMIAAA8g");
	this.shape_182.setTransform(192.2,104.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#00A85A").s().p("AgWBHQgJgCgHgDIAFgPIAMAGQAIADAKgBQAIAAAIgDQAHgDAEgJQAFgHAAgNIAAgLIgBAAQgEAHgJAEQgHAGgLAAQgNgBgKgGQgJgHgGgLQgFgKgBgOQABgRAGgMQAGgNALgGQALgGALAAQAIAAAHADQAFACAEAEQAFAEACAFIABAAIAAgPIARAAIgBAMIAAAQIAAA5QAAARgEAMQgEALgHAHQgHAGgKADQgKADgJAAQgKAAgIgDgAgUgwQgHAKgBASQAAAKAEAIQADAHAHAGQAGAEAJAAQAJAAAHgEQAGgGAEgIIABgEIABgFIAAgTIgBgEIgBgEQgDgIgGgFQgHgGgJAAQgNAAgJAKg");
	this.shape_183.setTransform(180.4,107.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#00A85A").s().p("AgaAxQgHgFgDgGQgEgHAAgHQAAgTAQgIQAQgKAcAAIAAgCIgBgKQgBgFgGgEQgFgEgIAAQgIAAgHACQgGACgGADIgEgMQAGgEAJgDQAIgCAJAAQAPAAAJAGQAJAGADAKQADAJgBAKIAAAlIABANIABAMIgRAAIgBgNIgBAAQgEAGgHAEQgJAFgJAAQgLAAgHgEgAABAAQgJACgHAFQgGAFAAAKQAAAJAFAEQAFAEAHAAQAJAAAGgFQAGgFADgHIAAgDIABgCIAAgRQgKAAgKAAg");
	this.shape_184.setTransform(169.5,105);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#00A85A").s().p("AA3BHIgEg+IgBgUIgBgVIAAgUIgBAAIgIAaIgKAbIgZBFIgMAAIgXhEIgKgbIgHgbIAAAAIgBAUIgBAVIgBAVIgEA9IgRAAIAKiNIAXAAIAYBFIAIAYIAGAWIAAAAIAHgWIAIgYIAZhFIAYAAIAICNg");
	this.shape_185.setTransform(156.1,103);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#00A85A").s().p("AhKV2IAA7qICVAAIAAbqgAhKmsIAAnKIgyAAIB8n/IB8H/IgxAAIAAHKg");
	this.shape_186.setTransform(104.1,264.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#00A85A").s().p("AhKV2IAA7qICWAAIAAbqgAhKmsIAAnKIgxAAIB7n/IB8H/IgwAAIAAHKg");
	this.shape_187.setTransform(245.3,264.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#00A85A").s().p("AhKV2IAA7qICVAAIAAbqgAhKmrIAAnLIgyAAIB8n+IB9H+IgyAAIAAHLg");
	this.shape_188.setTransform(315.9,262.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#00A85A").s().p("AhKV2IAA7qICVAAIAAbqgAhKmrIAAnLIgyAAIB8n+IB9H+IgyAAIAAHLg");
	this.shape_189.setTransform(174.7,262.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173}]}).wait(325));

	// Layer 14
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(132.4,199.1,1,1,-74,0,0,13.9,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:18.9,regY:13.6,x:133.1,y:194.2},0).wait(82).to({regX:14.1,regY:14.2,x:132.4,y:199.1},0).wait(1).to({regX:18.9,regY:13.6,rotation:-71.8,x:133.2,y:194.3},0).wait(1).to({rotation:-69.6,x:133.5,y:194.4},0).wait(1).to({rotation:-67.4,x:133.6},0).wait(1).to({rotation:-65.2,x:133.8,y:194.5},0).wait(1).to({rotation:-63,x:134},0).wait(1).to({rotation:-60.8,x:134.1,y:194.6},0).wait(1).to({rotation:-58.6,x:134.3,y:194.7},0).wait(1).to({rotation:-56.4,x:134.5,y:194.8},0).wait(1).to({rotation:-54.2,x:134.7},0).wait(1).to({rotation:-52,x:134.8,y:194.9},0).wait(1).to({rotation:-49.8,x:135,y:195},0).wait(1).to({rotation:-47.6,x:135.2,y:195.1},0).wait(1).to({rotation:-45.4,x:135.3,y:195.2},0).wait(1).to({rotation:-43.2,x:135.5,y:195.3},0).wait(1).to({rotation:-41,x:135.6,y:195.5},0).wait(1).to({rotation:-38.8,x:135.7,y:195.6},0).wait(1).to({rotation:-36.6,x:135.8,y:195.7},0).wait(1).to({rotation:-34.4,x:136,y:195.8},0).wait(1).to({rotation:-32.2,x:136.1,y:196},0).wait(1).to({rotation:-30,x:136.2,y:196.2},0).wait(1).to({rotation:-27.8,x:136.3,y:196.4},0).wait(1).to({rotation:-25.6,x:136.5,y:196.5},0).wait(1).to({rotation:-23.4,y:196.7},0).wait(1).to({rotation:-21.2,x:136.6,y:196.8},0).wait(1).to({rotation:-19,x:136.7,y:197},0).wait(1).to({rotation:-16.8,x:136.8,y:197.1},0).wait(1).to({rotation:-14.6,x:136.9,y:197.3},0).wait(1).to({rotation:-12.4,y:197.5},0).wait(1).to({rotation:-10.2,x:137,y:197.7},0).wait(1).to({rotation:-8,y:197.8},0).wait(1).to({rotation:-5.8,x:137.1,y:198.1},0).wait(1).to({rotation:-3.6,y:198.2},0).wait(1).to({rotation:-1.4,x:137.2,y:198.4},0).wait(1).to({rotation:0.8,y:198.6},0).wait(1).to({rotation:3,y:198.8},0).wait(1).to({regX:13.9,regY:14.2,x:132.4,y:199.2},0).wait(1).to({regX:13.4,y:199.1},0).wait(1).to({regX:18.9,regY:13.6,x:137.8,y:198.8},0).wait(204));

	// Layer 15
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(137.6,371,1,1,-83,0,0,14.4,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:19.1,regY:13.6,x:140.6,y:366.6},0).wait(82).to({regX:14.7,regY:11.3,x:137.6,y:371},0).wait(1).to({regX:19.1,regY:13.6,rotation:-80.7,x:140.5,y:367},0).wait(1).to({rotation:-78.3,x:140.7,y:367.1},0).wait(1).to({rotation:-76,x:140.9,y:367.3},0).wait(1).to({rotation:-73.6,x:141,y:367.4},0).wait(1).to({rotation:-71.3,x:141.2,y:367.5},0).wait(1).to({rotation:-68.9,x:141.3,y:367.8},0).wait(1).to({rotation:-66.6,x:141.5,y:367.9},0).wait(1).to({rotation:-64.3,x:141.6,y:368},0).wait(1).to({rotation:-61.9,x:141.7,y:368.2},0).wait(1).to({rotation:-59.6,x:141.8,y:368.4},0).wait(1).to({rotation:-57.2,x:141.9,y:368.6},0).wait(1).to({rotation:-54.9,x:142,y:368.7},0).wait(1).to({rotation:-52.5,x:142.1,y:368.9},0).wait(1).to({rotation:-50.2,x:142.2,y:369.1},0).wait(1).to({rotation:-47.9,y:369.3},0).wait(1).to({rotation:-45.5,x:142.3,y:369.5},0).wait(1).to({rotation:-43.2,x:142.4,y:369.7},0).wait(1).to({rotation:-40.8,y:369.9},0).wait(1).to({rotation:-38.5,y:370.1},0).wait(1).to({rotation:-36.1,y:370.3},0).wait(1).to({rotation:-33.8,x:142.5,y:370.5},0).wait(1).to({rotation:-31.5,y:370.7},0).wait(1).to({rotation:-29.1,y:370.9},0).wait(1).to({rotation:-26.8,x:142.6,y:371.1},0).wait(1).to({rotation:-24.4,x:142.5,y:371.3},0).wait(1).to({rotation:-22.1,y:371.5},0).wait(1).to({rotation:-19.7,y:371.7},0).wait(1).to({rotation:-17.4,y:372},0).wait(1).to({rotation:-15.1,x:142.4,y:372.2},0).wait(1).to({rotation:-12.7,y:372.3},0).wait(1).to({rotation:-10.4,x:142.3,y:372.6},0).wait(1).to({rotation:-8,x:142.2,y:372.7},0).wait(1).to({rotation:-5.7,y:372.9},0).wait(1).to({rotation:-3.3,x:142.1,y:373.2},0).wait(1).to({rotation:-1,x:142,y:373.3},0).wait(1).to({regX:14.6,regY:11.2,x:137.5,y:371.1},0).wait(2).to({regX:19.1,regY:13.6,x:142.1,y:373.3},0).wait(204));

	// Layer 16
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(203.1,211,1,1,-87,0,0,18.1,12.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:19.2,regY:13.6,x:203.8,y:209.9},0).wait(82).to({regX:18.1,regY:12.9,x:203.1,y:211},0).wait(1).to({regX:19.2,regY:13.6,rotation:-84.8,x:203.9,y:210},0).wait(1).to({rotation:-82.5,y:209.9},0).wait(1).to({rotation:-80.3,x:204,y:210},0).wait(1).to({rotation:-78.1},0).wait(1).to({rotation:-75.9,x:204.1,y:210.1},0).wait(1).to({rotation:-73.6},0).wait(1).to({rotation:-71.4,y:210.2},0).wait(1).to({rotation:-69.2},0).wait(1).to({rotation:-66.9,y:210.3},0).wait(1).to({rotation:-64.7,x:204.2},0).wait(1).to({rotation:-62.5},0).wait(1).to({rotation:-60.3,x:204.3,y:210.4},0).wait(1).to({rotation:-58},0).wait(1).to({rotation:-55.8,y:210.5},0).wait(1).to({rotation:-53.6},0).wait(1).to({rotation:-51.3,y:210.6},0).wait(1).to({rotation:-49.1},0).wait(1).to({rotation:-46.9,x:204.4,y:210.7},0).wait(1).to({rotation:-44.7},0).wait(1).to({rotation:-42.4,y:210.8},0).wait(1).to({rotation:-40.2},0).wait(1).to({rotation:-38,y:210.9},0).wait(1).to({rotation:-35.7,y:211},0).wait(1).to({rotation:-33.5},0).wait(1).to({rotation:-31.3},0).wait(1).to({rotation:-29.1,y:211.1},0).wait(1).to({rotation:-26.8,y:211.2},0).wait(1).to({rotation:-24.6},0).wait(1).to({rotation:-22.4,y:211.3},0).wait(1).to({rotation:-20.1},0).wait(1).to({rotation:-17.9,x:204.3,y:211.4},0).wait(1).to({rotation:-15.7,x:204.4},0).wait(1).to({rotation:-13.5,x:204.3,y:211.5},0).wait(1).to({rotation:-11.2},0).wait(1).to({rotation:-9,y:211.6},0).wait(1).to({regX:18.2,regY:12.9,x:203.1,y:211.1},0).wait(1).to({regX:18.3,regY:12.8},0).wait(1).to({regX:19.2,regY:13.6,x:204.1,y:211.7},0).wait(204));

	// Layer 17
	this.instance_3 = new lib.Symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(214.6,266.6,1,1,-89,0,0,19,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:13.7,x:214.7},0).wait(82).to({regY:13.6,x:214.6},0).wait(1).to({regY:13.7,rotation:-86},0).wait(1).to({rotation:-83.1,x:214.7},0).wait(1).to({rotation:-80.1},0).wait(1).to({rotation:-77.1},0).wait(1).to({rotation:-74.1},0).wait(1).to({rotation:-71.2,y:266.5},0).wait(1).to({rotation:-68.2,x:214.6,y:266.6},0).wait(1).to({rotation:-65.2,x:214.7},0).wait(1).to({rotation:-62.3},0).wait(1).to({rotation:-59.3},0).wait(1).to({rotation:-56.3},0).wait(1).to({rotation:-53.3},0).wait(1).to({rotation:-50.4,x:214.6},0).wait(1).to({rotation:-47.4,x:214.7},0).wait(1).to({rotation:-44.4,x:214.6},0).wait(1).to({rotation:-41.5},0).wait(1).to({rotation:-38.5},0).wait(1).to({rotation:-35.5},0).wait(1).to({rotation:-32.5},0).wait(1).to({rotation:-29.6},0).wait(1).to({rotation:-26.6,x:214.7},0).wait(1).to({rotation:-23.6,x:214.6},0).wait(1).to({rotation:-20.7,x:214.7},0).wait(1).to({rotation:-17.7,x:214.6,y:266.7},0).wait(1).to({rotation:-14.7,y:266.6},0).wait(1).to({rotation:-11.7},0).wait(1).to({rotation:-8.8},0).wait(1).to({rotation:-5.8,y:266.7},0).wait(1).to({rotation:-2.8,y:266.6},0).wait(1).to({rotation:0.1},0).wait(1).to({rotation:3.1,x:214.5,y:266.7},0).wait(1).to({rotation:6.1,x:214.6,y:266.6},0).wait(1).to({rotation:9.1,y:266.7},0).wait(1).to({rotation:12,y:266.6},0).wait(1).to({rotation:15,x:214.5},0).wait(1).to({regX:19.2,regY:13.6,x:214.7},0).wait(1).to({regX:19.4,regY:13.4,x:214.6},0).wait(1).to({regX:19,regY:13.7,x:214.1,y:266.8},0).wait(204));

	// Layer 18
	this.instance_4 = new lib.Symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(143,301.6,1,1,95,0,0,19.1,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:142.9},0).wait(82).to({x:143},0).wait(1).to({rotation:97.3,x:142.9},0).wait(1).to({rotation:99.6},0).wait(1).to({rotation:101.9,x:143,y:301.5},0).wait(1).to({rotation:104.1,x:142.9},0).wait(1).to({rotation:106.4},0).wait(1).to({rotation:108.7,y:301.6},0).wait(1).to({rotation:111},0).wait(1).to({rotation:113.3,y:301.5},0).wait(1).to({rotation:115.6,y:301.6},0).wait(1).to({rotation:117.9,x:143},0).wait(1).to({rotation:120.1,x:142.9,y:301.5},0).wait(1).to({rotation:122.4},0).wait(1).to({rotation:124.7},0).wait(1).to({rotation:127},0).wait(1).to({rotation:129.3,y:301.6},0).wait(1).to({rotation:131.6,x:143},0).wait(1).to({rotation:133.9,x:142.9,y:301.5},0).wait(1).to({rotation:136.1,x:143},0).wait(1).to({rotation:138.4,x:142.9},0).wait(1).to({rotation:140.7},0).wait(1).to({rotation:143},0).wait(1).to({rotation:145.3},0).wait(1).to({rotation:147.6},0).wait(1).to({rotation:149.9},0).wait(1).to({rotation:152.1},0).wait(1).to({rotation:154.4},0).wait(1).to({rotation:156.7},0).wait(1).to({rotation:159},0).wait(1).to({rotation:161.3},0).wait(1).to({rotation:163.6},0).wait(1).to({rotation:165.9},0).wait(1).to({rotation:168.1},0).wait(1).to({rotation:170.4},0).wait(1).to({rotation:172.7},0).wait(1).to({rotation:175},0).wait(1).to({regX:18.8,regY:13.4},0).wait(1).to({regX:18.1,regY:13},0).wait(1).to({regX:19.1,regY:13.6,x:141.8,y:300.9},0).wait(204));

	// Layer 19
	this.instance_5 = new lib.Symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(274.7,211.1,1,1,-76,0,0,16.1,14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:19,regY:13.7,x:274.5,y:208},0).wait(82).to({regX:16.3,regY:14.5,x:274.6,y:211},0).wait(1).to({regX:19,regY:13.7,rotation:-73.5,y:208.2},0).wait(1).to({rotation:-71.1,x:274.7},0).wait(1).to({rotation:-68.6,x:274.8},0).wait(1).to({rotation:-66.2,x:275},0).wait(1).to({rotation:-63.7,x:275.1},0).wait(1).to({rotation:-61.3,x:275.2,y:208.3},0).wait(1).to({rotation:-58.8,x:275.3},0).wait(1).to({rotation:-56.3,x:275.5},0).wait(1).to({rotation:-53.9},0).wait(1).to({rotation:-51.4,x:275.7,y:208.4},0).wait(1).to({rotation:-49,x:275.8},0).wait(1).to({rotation:-46.5,x:275.9,y:208.5},0).wait(1).to({rotation:-44.1,x:276,y:208.6},0).wait(1).to({rotation:-41.6,x:276.1},0).wait(1).to({rotation:-39.1,x:276.2,y:208.7},0).wait(1).to({rotation:-36.7,x:276.3,y:208.8},0).wait(1).to({rotation:-34.2,x:276.4},0).wait(1).to({rotation:-31.8,x:276.5,y:208.9},0).wait(1).to({rotation:-29.3,x:276.6,y:209},0).wait(1).to({rotation:-26.9,x:276.7},0).wait(1).to({rotation:-24.4,y:209.2},0).wait(1).to({rotation:-21.9,x:276.8},0).wait(1).to({rotation:-19.5,x:276.9,y:209.3},0).wait(1).to({rotation:-17,y:209.5},0).wait(1).to({rotation:-14.6,x:277},0).wait(1).to({rotation:-12.1,x:277.1,y:209.6},0).wait(1).to({rotation:-9.7,x:277.2,y:209.7},0).wait(1).to({rotation:-7.2,y:209.8},0).wait(1).to({rotation:-4.7,x:277.3,y:210},0).wait(1).to({rotation:-2.3,y:210.1},0).wait(1).to({rotation:0.2,y:210.2},0).wait(1).to({rotation:2.6,y:210.3},0).wait(1).to({rotation:5.1,x:277.4,y:210.5},0).wait(1).to({rotation:7.5,y:210.6},0).wait(1).to({rotation:10,y:210.7},0).wait(1).to({regX:16.3,regY:14.5,x:274.7,y:211.1},0).wait(2).to({regX:19,regY:13.7,x:277.4,y:210.7},0).wait(204));

	// Layer 20
	this.instance_6 = new lib.Symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(283.7,263.6,1,1,-69,0,0,14.2,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:18.4,regY:13.6,x:285.7,y:259.8},0).wait(82).to({regX:14.4,regY:13.1,x:283.8,y:263.6},0).wait(1).to({regX:18.4,regY:13.6,rotation:-66.2,x:285.8,y:260.1},0).wait(1).to({rotation:-63.5,x:285.9,y:260.2},0).wait(1).to({rotation:-60.7,x:286.1,y:260.3},0).wait(1).to({rotation:-57.9,x:286.3,y:260.4},0).wait(1).to({rotation:-55.1,x:286.4,y:260.5},0).wait(1).to({rotation:-52.4,x:286.6,y:260.7},0).wait(1).to({rotation:-49.6,x:286.7,y:260.8},0).wait(1).to({rotation:-46.8,x:286.9,y:261},0).wait(1).to({rotation:-44.1,x:287,y:261.1},0).wait(1).to({rotation:-41.3,x:287.1,y:261.3},0).wait(1).to({rotation:-38.5,x:287.2,y:261.5},0).wait(1).to({rotation:-35.7,x:287.3,y:261.6},0).wait(1).to({rotation:-33,x:287.4,y:261.8},0).wait(1).to({rotation:-30.2,x:287.5,y:262},0).wait(1).to({rotation:-27.4,x:287.6,y:262.1},0).wait(1).to({rotation:-24.7,y:262.3},0).wait(1).to({rotation:-21.9,y:262.5},0).wait(1).to({rotation:-19.1,x:287.7,y:262.8},0).wait(1).to({rotation:-16.3,x:287.8,y:262.9},0).wait(1).to({rotation:-13.6,y:263.1},0).wait(1).to({rotation:-10.8,y:263.3},0).wait(1).to({rotation:-8,y:263.5},0).wait(1).to({rotation:-5.3,y:263.7},0).wait(1).to({rotation:-2.5,y:263.9},0).wait(1).to({rotation:0.3,y:264.1},0).wait(1).to({rotation:3.1,x:287.7,y:264.4},0).wait(1).to({rotation:5.8,y:264.5},0).wait(1).to({rotation:8.6,x:287.6,y:264.7},0).wait(1).to({rotation:11.4,y:264.9},0).wait(1).to({rotation:14.1,y:265.1},0).wait(1).to({rotation:16.9,x:287.5,y:265.2},0).wait(1).to({rotation:19.7,x:287.3,y:265.4},0).wait(1).to({rotation:22.5,y:265.6},0).wait(1).to({rotation:25.2,x:287.2,y:265.8},0).wait(1).to({rotation:28,x:287.1,y:265.9},0).wait(1).to({regX:14.3,regY:13.2,x:283.7,y:263.7},0).wait(2).to({regX:18.4,regY:13.6,x:287.1,y:265.9},0).wait(204));

	// Layer 21
	this.instance_7 = new lib.Symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(280.6,313.7,1,1,-89,0,0,15.7,14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:19.1,regY:13.6,x:279.4,y:310.3},0).wait(82).to({regX:15.9,regY:14.9,x:280.6,y:313.6},0).wait(1).to({regX:19.1,regY:13.6,rotation:-86.3,x:279.4,y:310.3},0).wait(1).to({rotation:-83.7,x:279.6},0).wait(1).to({rotation:-81,x:279.8,y:310.2},0).wait(1).to({rotation:-78.4,x:279.9},0).wait(1).to({rotation:-75.7,x:280.1},0).wait(1).to({rotation:-73.1,x:280.3},0).wait(1).to({rotation:-70.4,x:280.4,y:310.1},0).wait(1).to({rotation:-67.7,x:280.6},0).wait(1).to({rotation:-65.1,x:280.8,y:310.2},0).wait(1).to({rotation:-62.4,x:280.9},0).wait(1).to({rotation:-59.8,x:281.1},0).wait(1).to({rotation:-57.1,x:281.2},0).wait(1).to({rotation:-54.5,x:281.4},0).wait(1).to({rotation:-51.8,x:281.6,y:310.3},0).wait(1).to({rotation:-49.1,x:281.7,y:310.4},0).wait(1).to({rotation:-46.5,x:281.9},0).wait(1).to({rotation:-43.8,x:282},0).wait(1).to({rotation:-41.2,x:282.2,y:310.6},0).wait(1).to({rotation:-38.5,x:282.3},0).wait(1).to({rotation:-35.9,x:282.5,y:310.7},0).wait(1).to({rotation:-33.2,x:282.6,y:310.8},0).wait(1).to({rotation:-30.5,x:282.7,y:310.9},0).wait(1).to({rotation:-27.9,x:282.8,y:311},0).wait(1).to({rotation:-25.2,x:283,y:311.1},0).wait(1).to({rotation:-22.6,x:283.1,y:311.2},0).wait(1).to({rotation:-19.9,x:283.2,y:311.4},0).wait(1).to({rotation:-17.3,x:283.3,y:311.5},0).wait(1).to({rotation:-14.6,x:283.4,y:311.6},0).wait(1).to({rotation:-11.9,x:283.5,y:311.7},0).wait(1).to({rotation:-9.3,x:283.6,y:311.8},0).wait(1).to({rotation:-6.6,y:312},0).wait(1).to({rotation:-4,x:283.7,y:312.1},0).wait(1).to({rotation:-1.3,x:283.8,y:312.3},0).wait(1).to({rotation:1.3,x:283.9,y:312.4},0).wait(1).to({rotation:4,y:312.6},0).wait(1).to({regX:15.9,regY:15.2,x:280.6,y:313.7},0).wait(1).to({regY:15.7},0).wait(1).to({regX:19.1,regY:13.6,x:283.9,y:311.9},0).wait(204));

	// Layer 22
	this.instance_8 = new lib.Symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(209.7,341.5,1,1,-80,0,0,18.4,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:19.1,regY:13.7,x:209.8,y:340.8},0).wait(82).to({regX:18.4,regY:13.6,x:209.7,y:341.5},0).wait(1).to({regX:19.1,regY:13.7,rotation:-77.3,x:209.9,y:340.7},0).wait(1).to({rotation:-74.6,y:340.8},0).wait(1).to({rotation:-71.9},0).wait(1).to({rotation:-69.1,x:210},0).wait(1).to({rotation:-66.4,y:340.9},0).wait(1).to({rotation:-63.7},0).wait(1).to({rotation:-61,x:210.1},0).wait(1).to({rotation:-58.3},0).wait(1).to({rotation:-55.6},0).wait(1).to({rotation:-52.9},0).wait(1).to({rotation:-50.1,x:210.2,y:341},0).wait(1).to({rotation:-47.4},0).wait(1).to({rotation:-44.7},0).wait(1).to({rotation:-42},0).wait(1).to({rotation:-39.3,y:341.1},0).wait(1).to({rotation:-36.6,x:210.3},0).wait(1).to({rotation:-33.9},0).wait(1).to({rotation:-31.1,y:341.2},0).wait(1).to({rotation:-28.4},0).wait(1).to({rotation:-25.7},0).wait(1).to({rotation:-23,y:341.3},0).wait(1).to({rotation:-20.3},0).wait(1).to({rotation:-17.6},0).wait(1).to({rotation:-14.9,y:341.4},0).wait(1).to({rotation:-12.1},0).wait(1).to({rotation:-9.4,x:210.4},0).wait(1).to({rotation:-6.7,x:210.3},0).wait(1).to({rotation:-4,y:341.5},0).wait(1).to({rotation:-1.3},0).wait(1).to({rotation:1.4,y:341.6},0).wait(1).to({rotation:4.1},0).wait(1).to({rotation:6.9},0).wait(1).to({rotation:9.6,y:341.7},0).wait(1).to({rotation:12.3},0).wait(1).to({rotation:15},0).wait(1).to({regX:18.1,x:209.7,y:341.5},0).wait(1).to({regX:17.6,regY:13.8},0).wait(1).to({regX:19.1,regY:13.7,x:211.1,y:341.8},0).wait(204));

	// Layer 23
	this.instance_9 = new lib.Symbol10();
	this.instance_9.parent = this;
	this.instance_9.setTransform(276.1,371,1,1,-95,0,0,15.7,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:19.2,regY:13.7,x:276.4,y:367.4},0).wait(82).to({regX:15.8,regY:13.1,x:276,y:371.1},0).wait(1).to({regX:19.2,regY:13.7,rotation:-92.3,x:276.5,y:367.6},0).wait(1).to({rotation:-89.7,x:276.6,y:367.7},0).wait(1).to({rotation:-87,x:276.8},0).wait(1).to({rotation:-84.4,x:277,y:367.8},0).wait(1).to({rotation:-81.7,x:277.1},0).wait(1).to({rotation:-79.1,x:277.3},0).wait(1).to({rotation:-76.4,x:277.4,y:367.9},0).wait(1).to({rotation:-73.7,x:277.5,y:368},0).wait(1).to({rotation:-71.1,x:277.7,y:368.1},0).wait(1).to({rotation:-68.4,x:277.8},0).wait(1).to({rotation:-65.8,x:278,y:368.2},0).wait(1).to({rotation:-63.1,x:278.1,y:368.3},0).wait(1).to({rotation:-60.5,x:278.2,y:368.4},0).wait(1).to({rotation:-57.8,x:278.4,y:368.5},0).wait(1).to({rotation:-55.1,y:368.6},0).wait(1).to({rotation:-52.5,x:278.6,y:368.7},0).wait(1).to({rotation:-49.8,x:278.7,y:368.9},0).wait(1).to({rotation:-47.2,x:278.8,y:369},0).wait(1).to({rotation:-44.5,x:278.9,y:369.1},0).wait(1).to({rotation:-41.9,x:279,y:369.3},0).wait(1).to({rotation:-39.2,y:369.4},0).wait(1).to({rotation:-36.5,x:279.1,y:369.5},0).wait(1).to({rotation:-33.9,x:279.2,y:369.7},0).wait(1).to({rotation:-31.2,y:369.8},0).wait(1).to({rotation:-28.6,x:279.3,y:370},0).wait(1).to({rotation:-25.9,y:370.1},0).wait(1).to({rotation:-23.3,x:279.4,y:370.3},0).wait(1).to({rotation:-20.6,y:370.4},0).wait(1).to({rotation:-17.9,y:370.6},0).wait(1).to({rotation:-15.3,y:370.7},0).wait(1).to({rotation:-12.6,x:279.5,y:370.9},0).wait(1).to({rotation:-10,x:279.4,y:371.1},0).wait(1).to({rotation:-7.3,x:279.5,y:371.2},0).wait(1).to({rotation:-4.7,y:371.4},0).wait(1).to({rotation:-2,y:371.6},0).wait(1).to({regX:15.8,regY:13.1,x:276,y:371.1},0).wait(2).to({regX:19.2,regY:13.7,x:279.4,y:371.6},0).wait(204));

	// Layer 24
	this.instance_10 = new lib.Symbol11();
	this.instance_10.parent = this;
	this.instance_10.setTransform(136.1,246.3,1,1,74,0,0,17.1,7.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:19.1,regY:13.6,x:130.9,y:249.8},0).wait(82).to({regX:17.1,regY:7.8,x:136.1,y:246.3},0).wait(1).to({regX:19.1,regY:13.6,rotation:77,x:130.9,y:249.5},0).wait(1).to({rotation:80,x:130.7,y:249.2},0).wait(1).to({rotation:83,x:130.6,y:248.9},0).wait(1).to({rotation:86,x:130.5,y:248.6},0).wait(1).to({rotation:89,x:130.3,y:248.3},0).wait(1).to({rotation:92,x:130.2,y:248.1},0).wait(1).to({rotation:95,x:130.1,y:247.7},0).wait(1).to({rotation:98,y:247.4},0).wait(1).to({rotation:101,x:130,y:247.1},0).wait(1).to({rotation:104,y:246.8},0).wait(1).to({rotation:107,x:129.9,y:246.4},0).wait(1).to({rotation:110,y:246.1},0).wait(1).to({rotation:113,x:130,y:245.8},0).wait(1).to({rotation:116,y:245.5},0).wait(1).to({rotation:119,y:245.1},0).wait(1).to({rotation:122,x:130.1,y:244.8},0).wait(1).to({rotation:125,x:130.2,y:244.5},0).wait(1).to({rotation:128,x:130.3,y:244.2},0).wait(1).to({rotation:131,x:130.4,y:243.9},0).wait(1).to({rotation:134,x:130.5,y:243.6},0).wait(1).to({rotation:137,x:130.7,y:243.3},0).wait(1).to({rotation:140,x:130.8,y:243.1},0).wait(1).to({rotation:143,x:131,y:242.8},0).wait(1).to({rotation:146,x:131.2,y:242.5},0).wait(1).to({rotation:149,x:131.4,y:242.3},0).wait(1).to({rotation:152,x:131.6,y:242},0).wait(1).to({rotation:155,x:131.8,y:241.7},0).wait(1).to({rotation:158,x:132.1,y:241.6},0).wait(1).to({rotation:161,x:132.3,y:241.3},0).wait(1).to({rotation:164,x:132.6,y:241.2},0).wait(1).to({rotation:167,x:132.9,y:241},0).wait(1).to({rotation:170,x:133.1,y:240.8},0).wait(1).to({rotation:173,x:133.4,y:240.7},0).wait(1).to({rotation:176,x:133.7,y:240.6},0).wait(1).to({rotation:179,x:134,y:240.4},0).wait(1).to({regX:16.7,regY:7.5,x:136.1,y:246.3},0).wait(1).to({regX:16.3,regY:7},0).wait(1).to({regX:19.1,regY:13.6,x:133.1,y:239.7},0).wait(204));

	// Waves
	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#A93437").p("A1OgwQCABFCNgDQBcgCCZgpQCngtBDgHQCBgMBrA2QD8CAC9gEQCsgDEah5QCMg8CEAIQBXAFB7ArQCDAtAwAFQBeALBSg1");
	this.shape_190.setTransform(202.5,273.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#A93437").p("A1NgwQB/BFCOgDQBcgCCYgpQCngtBDgHQCCgMBqA2QD8CAC+gEQCsgDEah5QCLg8CEAIQBXAFB7ArQCDAtAwAFQBeALBSg1");
	this.shape_191.setTransform(196,318.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#A93437").p("A1NgwQB/BFCOgDQBcgCCYgpQCogtBCgHQCCgMBqA2QD8CAC+gEQCsgDEah5QCLg8CEAIQBXAFB7ArQCDAtAwAFQBeALBSg1");
	this.shape_192.setTransform(189.4,364.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#A93437").p("A1NgwQB/BFCOgDQBcgCCYgpQCngtBDgHQCCgMBqA2QD8CAC+gEQCsgDEah5QCLg8CEAIQBXAFB7ArQCDAsAwAGQBeALBSg2");
	this.shape_193.setTransform(209.6,227.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190}]},83).to({state:[{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190}]},4).to({state:[{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190}]},37).to({state:[{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190}]},1).wait(200));

	// Magneticfield2
	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#00A85A").s().p("AgaBFQgJgGgGgMQgGgMAAgPQAAgRAHgLQAFgMALgHQAKgHAMAAQALABAIAEQAHAFAEAGIABAAIAAg9IASAAIAAB6IABAOIAAAMIgRAAIAAgRIgBAAQgEAIgJAGQgJAFgLABQgNgBgKgGgAgOgKQgHAFgDAIQgFAJAAALQAAAKAEAJQADAIAHAGQAHAFAJAAQAJAAAHgGQAIgGADgKIABgEIAAgEIAAgSIAAgEIgBgEQgDgIgGgGQgIgGgKAAQgJAAgGAFg");
	this.shape_194.setTransform(646.7,102.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#00A85A").s().p("AgIBKIAAiTIARAAIAACTg");
	this.shape_195.setTransform(638.6,102.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#00A85A").s().p("AgVAuQgLgGgGgMQgGgKAAgQQAAgOAGgNQAGgMAKgIQALgGAOgBQAMABAIAEQAJAFAEAHQAFAHACAJQACAHAAAIIAAAEIgBAEIhGAAQAAAMAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgJQAAgGgCgGQgCgHgGgGQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAHgBAGIA1AAIAAAAg");
	this.shape_196.setTransform(630.9,105);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#00A85A").s().p("AgIBHIAAhlIARAAIAABlgAgIgyQgDgEAAgEQABgFADgEQADgDAEAAQAFAAADADQAEAEAAAFQAAAEgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_197.setTransform(623.2,103);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#00A85A").s().p("AglBHIAAiNIBLAAIAAAQIg5AAIAAAvIA1AAIAAAOIg1AAIAABAg");
	this.shape_198.setTransform(616.4,103);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#00A85A").s().p("AgPAuQgLgGgHgMQgGgLAAgQQAAgPAHgMQAGgMAMgHQANgHAPAAQAJAAAGACQAIABADACIgEAPIgIgEQgGgBgIAAQgLAAgHAFQgIAFgEAJQgFAIAAAKQABAMAEAJQAFAIAIAFQAHAEAKAAQAHAAAHgCIAJgDIADAOIgMAEQgHACgLAAQgOAAgLgHg");
	this.shape_199.setTransform(602,105);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#00A85A").s().p("AgIBHIAAhlIARAAIAABlgAgIgyQgCgEgBgEQABgFADgEQADgDAEAAQAFAAADADQADAEABAFQgBAEgDAEQgDADgFAAQgEAAgEgDg");
	this.shape_200.setTransform(594.7,103);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#00A85A").s().p("AABBAQgEgCgDgDQgEgFgCgGQgBgHgBgIIAAg3IgPAAIAAgOIAPAAIAAgZIARgEIAAAdIAbAAIAAAOIgbAAIAAA2QABAJACAFQAEAGAIAAIAGgBIAEgBIABAOIgHACIgJABQgHgBgFgCg");
	this.shape_201.setTransform(588.7,103.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#00A85A").s().p("AgVAuQgLgGgGgMQgGgKAAgQQAAgOAGgNQAGgMAKgIQALgGAOgBQAMABAIAEQAJAFAEAHQAFAHACAJQACAHAAAIIAAAEIgBAEIhGAAQAAAMAFAIQAFAHAIAEQAHAEAJAAQAJAAAHgCIAMgDIADANIgNAEQgJACgMAAQgPAAgLgHgAAbgJQAAgGgCgGQgCgHgGgGQgFgEgLAAQgIAAgGAEQgGAFgDAHQgDAHgBAGIA1AAIAAAAg");
	this.shape_202.setTransform(580.1,105);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#00A85A").s().p("AAZA0IAAg6QAAgIgCgGQgCgHgGgFQgFgDgIgBQgJABgGAFQgHAGgCAHIgBAFIAAAEIAAA8IgTAAIAAhJIAAgPIgBgMIARAAIABAQIAAAAQADgFAEgEQAFgEAHgDQAGgDAIAAQAFAAAGACQAGACAGAEQAFAGAEAIQADAJABAMIAAA8g");
	this.shape_203.setTransform(569,104.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#00A85A").s().p("AgWBHQgJgCgHgDIAFgPIAMAGQAIADAKgBQAIAAAIgDQAHgDAEgJQAFgHAAgNIAAgLIgBAAQgEAHgJAEQgIAGgKAAQgNgBgJgGQgKgHgGgLQgFgKgBgOQABgRAGgMQAHgNAKgGQAKgGAMAAQAIAAAHADQAFACAEAEQAFAEACAFIABAAIAAgPIARAAIgBAMIAAAQIAAA5QAAARgEAMQgDALgIAHQgHAGgLADQgJADgJAAQgJAAgJgDgAgUgwQgHAKgBASQAAAKAEAIQADAHAHAGQAGAEAJAAQAJAAAHgEQAGgGAEgIIABgEIABgFIAAgTIgBgEIgBgEQgDgIgGgFQgHgGgJAAQgNAAgJAKg");
	this.shape_204.setTransform(557.1,107.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#00A85A").s().p("AgaAxQgGgFgEgGQgEgHAAgHQABgTAPgIQAQgKAcAAIAAgCIgBgKQgCgFgFgEQgFgEgIAAQgIAAgHACQgGACgGADIgEgMQAGgEAJgDQAJgCAIAAQAQAAAIAGQAJAGADAKQADAJgBAKIAAAlIABANIABAMIgQAAIgCgNIgBAAQgEAGgHAEQgJAFgJAAQgLAAgHgEgAABAAQgJACgHAFQgGAFAAAKQAAAJAFAEQAFAEAHAAQAJAAAGgFQAGgFADgHIAAgDIABgCIAAgRQgLAAgJAAg");
	this.shape_205.setTransform(546.3,105);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#00A85A").s().p("AA3BHIgEg+IgBgUIgBgVIAAgUIgBAAIgIAaIgKAbIgZBFIgMAAIgXhEIgKgbIgHgbIAAAAIgBAUIgBAVIgBAVIgEA9IgRAAIAKiNIAXAAIAYBFIAIAYIAGAWIAAAAIAHgWIAIgYIAZhFIAYAAIAICNg");
	this.shape_206.setTransform(532.8,103);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#00A85A").s().p("AhKV1IAA7pICVAAIAAbpgAhKmsIAAnKIgxAAIB7n+IB8H+IgxAAIAAHKg");
	this.shape_207.setTransform(479.4,263.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#00A85A").s().p("AhKV1IAA7pICVAAIAAbpgAhKmsIAAnKIgxAAIB7n+IB8H+IgxAAIAAHKg");
	this.shape_208.setTransform(620.6,263.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#00A85A").s().p("AhKV2IAA7qICVAAIAAbqgAhKmrIAAnLIgyAAIB8n/IB9H/IgyAAIAAHLg");
	this.shape_209.setTransform(691.2,261.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#00A85A").s().p("AhKV2IAA7qICVAAIAAbqgAhKmrIAAnLIgyAAIB8n/IB9H/IgyAAIAAHLg");
	this.shape_210.setTransform(550,261.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194}]},131).wait(194));

	// Layer 25
	this.instance_11 = new lib.Symbol12();
	this.instance_11.parent = this;
	this.instance_11.setTransform(510.2,204.6,1,1,84,0,0,15.9,17.7);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(131).to({_off:false},0).wait(1).to({regX:13.6,regY:19.2,x:508.4,y:202.4},0).wait(42).to({regX:15.8,regY:17.8,x:510.2,y:204.6},0).wait(1).to({regX:13.6,regY:19.2,rotation:82.1,x:508.5,y:202.6},0).wait(1).to({rotation:80.2,x:508.4,y:202.7},0).wait(1).to({rotation:78.3},0).wait(1).to({rotation:76.4,x:508.3,y:202.8},0).wait(1).to({rotation:74.4,y:202.9},0).wait(1).to({rotation:72.5,x:508.2},0).wait(1).to({rotation:70.6,y:203},0).wait(1).to({rotation:68.7,x:508.1},0).wait(1).to({rotation:66.8,y:203.1},0).wait(1).to({rotation:64.9,x:508,y:203.2},0).wait(1).to({rotation:63,y:203.3},0).wait(1).to({rotation:61.1,y:203.4},0).wait(1).to({rotation:59.1,x:507.9,y:203.5},0).wait(1).to({rotation:57.2,x:507.8,y:203.6},0).wait(1).to({rotation:55.3},0).wait(1).to({rotation:53.4,y:203.7},0).wait(1).to({rotation:51.5,x:507.7,y:203.8},0).wait(1).to({rotation:49.6,y:203.9},0).wait(1).to({rotation:47.7,y:204},0).wait(1).to({rotation:45.8,y:204.1},0).wait(1).to({rotation:43.9},0).wait(1).to({rotation:41.9,x:507.6,y:204.2},0).wait(1).to({rotation:40,y:204.3},0).wait(1).to({rotation:38.1,x:507.7,y:204.4},0).wait(1).to({rotation:36.2,x:507.6,y:204.5},0).wait(1).to({rotation:34.3,x:507.7},0).wait(1).to({rotation:32.4,x:507.6,y:204.6},0).wait(1).to({rotation:30.5,y:204.7},0).wait(1).to({rotation:28.6,y:204.8},0).wait(1).to({rotation:26.6,x:507.7,y:204.9},0).wait(1).to({rotation:24.7,y:205},0).wait(1).to({rotation:22.8,y:205.1},0).wait(1).to({rotation:20.9,y:205.2},0).wait(1).to({rotation:19,y:205.3},0).wait(1).to({regX:15.9,regY:17.7,x:510.4,y:204.6},0).wait(1).to({regX:13.6,regY:19.2,x:507.7,y:205.3},0).wait(115));

	// Layer 26
	this.instance_12 = new lib.Symbol13();
	this.instance_12.parent = this;
	this.instance_12.setTransform(515.4,376.6,1,1,87,0,0,13.3,16.7);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(131).to({_off:false},0).wait(1).to({regX:13.6,regY:19.1,x:513.1,y:377},0).wait(42).to({regX:13.3,regY:16.9,x:515.4,y:376.7},0).wait(1).to({regX:13.6,regY:19.1,rotation:84.8,x:513.3,y:377.1},0).wait(1).to({rotation:82.6,x:513.2,y:377.2},0).wait(1).to({rotation:80.5,y:377.3},0).wait(1).to({rotation:78.3,x:513.3,y:377.4},0).wait(1).to({rotation:76.1,y:377.5},0).wait(1).to({rotation:73.9},0).wait(1).to({rotation:71.8,x:513.4,y:377.6},0).wait(1).to({rotation:69.6,y:377.7},0).wait(1).to({rotation:67.4,y:377.8},0).wait(1).to({rotation:65.2,x:513.5},0).wait(1).to({rotation:63.1,y:377.9},0).wait(1).to({rotation:60.9,x:513.6,y:378},0).wait(1).to({rotation:58.7,x:513.7},0).wait(1).to({rotation:56.5,y:378.1},0).wait(1).to({rotation:54.4,x:513.8,y:378.2},0).wait(1).to({rotation:52.2,x:513.9},0).wait(1).to({rotation:50,y:378.3},0).wait(1).to({rotation:47.8,x:514},0).wait(1).to({rotation:45.6,x:514.1,y:378.4},0).wait(1).to({rotation:43.5},0).wait(1).to({rotation:41.3,x:514.2,y:378.5},0).wait(1).to({rotation:39.1,x:514.3},0).wait(1).to({rotation:36.9},0).wait(1).to({rotation:34.8,x:514.4,y:378.6},0).wait(1).to({rotation:32.6,x:514.5},0).wait(1).to({rotation:30.4,x:514.6,y:378.7},0).wait(1).to({rotation:28.2,x:514.7,y:378.8},0).wait(1).to({rotation:26.1,y:378.7},0).wait(1).to({rotation:23.9,x:514.8},0).wait(1).to({rotation:21.7,x:514.9,y:378.8},0).wait(1).to({rotation:19.5,x:515},0).wait(1).to({rotation:17.4,x:515.1},0).wait(1).to({rotation:15.2,x:515.2},0).wait(1).to({rotation:13},0).wait(1).to({regX:13.2,regY:16.8,x:515.4,y:376.6},0).wait(1).to({regX:13.6,regY:19.1,x:515.3,y:378.9},0).wait(115));

	// Layer 27
	this.instance_13 = new lib.Symbol14();
	this.instance_13.parent = this;
	this.instance_13.setTransform(580.9,216.6,1,1,73,0,0,13.8,18.4);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(131).to({_off:false},0).wait(1).to({regX:13.6,regY:19,x:580.3,y:216.5},0).wait(42).to({regX:13.8,regY:18.4,x:580.9,y:216.6},0).wait(1).to({regX:13.6,regY:19,rotation:71,x:580.3,y:216.5},0).wait(1).to({rotation:68.9,y:216.6},0).wait(1).to({rotation:66.9},0).wait(1).to({rotation:64.9,x:580.2},0).wait(1).to({rotation:62.9,x:580.3},0).wait(1).to({rotation:60.8},0).wait(1).to({rotation:58.8,y:216.7},0).wait(1).to({rotation:56.8},0).wait(1).to({rotation:54.7},0).wait(1).to({rotation:52.7},0).wait(1).to({rotation:50.7,y:216.8},0).wait(1).to({rotation:48.6},0).wait(1).to({rotation:46.6},0).wait(1).to({rotation:44.6,y:216.9},0).wait(1).to({rotation:42.6},0).wait(1).to({rotation:40.5,x:580.4},0).wait(1).to({rotation:38.5},0).wait(1).to({rotation:36.5,y:217},0).wait(1).to({rotation:34.4,y:216.9},0).wait(1).to({rotation:32.4,y:217},0).wait(1).to({rotation:30.4,x:580.5},0).wait(1).to({rotation:28.4},0).wait(1).to({rotation:26.3},0).wait(1).to({rotation:24.3},0).wait(1).to({rotation:22.3,y:217.1},0).wait(1).to({rotation:20.2},0).wait(1).to({rotation:18.2},0).wait(1).to({rotation:16.2},0).wait(1).to({rotation:14.1,x:580.6,y:217},0).wait(1).to({rotation:12.1,y:217.1},0).wait(1).to({rotation:10.1},0).wait(1).to({rotation:8.1},0).wait(1).to({rotation:6,y:217.2},0).wait(1).to({rotation:4,x:580.7,y:217.1},0).wait(1).to({regX:13.8,regY:18.2,x:581,y:216.5},0).wait(1).to({regX:13.6,regY:19,x:580.7,y:217.3},0).wait(115));

	// Layer 28
	this.instance_14 = new lib.Symbol15();
	this.instance_14.parent = this;
	this.instance_14.setTransform(592.5,272.1,1,1,88,0,0,14.9,17.6);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(131).to({_off:false},0).wait(1).to({regX:13.6,regY:19.2,x:590.8,y:270.8},0).wait(42).to({regX:14.7,regY:17.7,x:592.5,y:272.1},0).wait(1).to({regX:13.6,regY:19.2,rotation:85.6,x:590.9,y:271},0).wait(1).to({rotation:83.2,y:271.1},0).wait(1).to({rotation:80.9,y:271.2},0).wait(1).to({rotation:78.5,x:590.8,y:271.3},0).wait(1).to({rotation:76.1},0).wait(1).to({rotation:73.7,x:590.7,y:271.4},0).wait(1).to({rotation:71.3,y:271.5},0).wait(1).to({rotation:68.9,x:590.8,y:271.6},0).wait(1).to({rotation:66.6,x:590.7,y:271.7},0).wait(1).to({rotation:64.2},0).wait(1).to({rotation:61.8,y:271.8},0).wait(1).to({rotation:59.4,x:590.6},0).wait(1).to({rotation:57,x:590.7,y:271.9},0).wait(1).to({rotation:54.6,y:272},0).wait(1).to({rotation:52.3,x:590.6,y:272.1},0).wait(1).to({rotation:49.9,y:272.2},0).wait(1).to({rotation:47.5,x:590.7,y:272.3},0).wait(1).to({rotation:45.1,y:272.4},0).wait(1).to({rotation:42.7},0).wait(1).to({rotation:40.4,y:272.5},0).wait(1).to({rotation:38,y:272.6},0).wait(1).to({rotation:35.6,x:590.8},0).wait(1).to({rotation:33.2,y:272.7},0).wait(1).to({rotation:30.8,y:272.8},0).wait(1).to({rotation:28.4,y:272.9},0).wait(1).to({rotation:26.1},0).wait(1).to({rotation:23.7,x:590.9,y:273},0).wait(1).to({rotation:21.3,x:591,y:273.1},0).wait(1).to({rotation:18.9},0).wait(1).to({rotation:16.5,x:591.1,y:273.2},0).wait(1).to({rotation:14.1},0).wait(1).to({rotation:11.8,y:273.3},0).wait(1).to({rotation:9.4,x:591.2},0).wait(1).to({rotation:7,y:273.4},0).wait(1).to({regX:14.6,regY:17.7,x:592.5,y:272.1},0).wait(1).to({regX:13.6,regY:19.2,x:591.3,y:273.5},0).wait(115));

	// Layer 29
	this.instance_15 = new lib.Symbol16();
	this.instance_15.parent = this;
	this.instance_15.setTransform(520.8,307,1,1,-99,0,0,13.6,18.9);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(131).to({_off:false},0).wait(1).to({regY:19},0).wait(42).to({regY:18.9},0).wait(1).to({regY:19,rotation:-101.9,x:520.9},0).wait(1).to({rotation:-104.8},0).wait(1).to({rotation:-107.6},0).wait(1).to({rotation:-110.5},0).wait(1).to({rotation:-113.4},0).wait(1).to({rotation:-116.3},0).wait(1).to({rotation:-119.2},0).wait(1).to({rotation:-122.1,y:306.9},0).wait(1).to({rotation:-124.9,x:520.8,y:307},0).wait(1).to({rotation:-127.8,x:520.9},0).wait(1).to({rotation:-130.7},0).wait(1).to({rotation:-133.6,x:520.8},0).wait(1).to({rotation:-136.5,x:520.9},0).wait(1).to({rotation:-139.4},0).wait(1).to({rotation:-142.2},0).wait(1).to({rotation:-145.1,y:306.9},0).wait(1).to({rotation:-148,x:520.8,y:307},0).wait(1).to({rotation:-150.9},0).wait(1).to({rotation:-153.8,x:520.9},0).wait(1).to({rotation:-156.6,y:306.9},0).wait(1).to({rotation:-159.5,y:307},0).wait(1).to({rotation:-162.4},0).wait(1).to({rotation:-165.3,x:520.8,y:306.9},0).wait(1).to({rotation:-168.2,x:520.9},0).wait(1).to({rotation:-171.1,x:520.8,y:307},0).wait(1).to({rotation:-173.9,x:520.9,y:306.9},0).wait(1).to({rotation:-176.8,x:520.8,y:307},0).wait(1).to({rotation:-179.7},0).wait(1).to({rotation:-182.6,y:306.9},0).wait(1).to({rotation:-185.5,y:307},0).wait(1).to({rotation:-188.4},0).wait(1).to({rotation:-191.2,y:306.9},0).wait(1).to({rotation:-194.1},0).wait(1).to({rotation:-197,y:307},0).wait(1).to({regX:13.4,regY:18.7,x:520.9},0).wait(1).to({regX:13.6,regY:19,x:520.6,y:306.8},0).wait(115));

	// Layer 30
	this.instance_16 = new lib.Symbol17();
	this.instance_16.parent = this;
	this.instance_16.setTransform(652.5,216.5,1,1,82,0,0,13.5,17.6);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(131).to({_off:false},0).wait(1).to({regX:13.6,regY:19.1,x:651,y:216.8},0).wait(42).to({regX:13.5,regY:17.6,x:652.5,y:216.5},0).wait(1).to({regX:13.6,regY:19.1,rotation:79.4,x:651,y:216.9},0).wait(1).to({rotation:76.8,y:217},0).wait(1).to({rotation:74.2,y:217.1},0).wait(1).to({rotation:71.6,x:651.1},0).wait(1).to({rotation:69.1,y:217.2},0).wait(1).to({rotation:66.5,x:651.2},0).wait(1).to({rotation:63.9,y:217.3},0).wait(1).to({rotation:61.3},0).wait(1).to({rotation:58.7,y:217.4},0).wait(1).to({rotation:56.1,x:651.3,y:217.5},0).wait(1).to({rotation:53.5},0).wait(1).to({rotation:50.9,y:217.6},0).wait(1).to({rotation:48.4,x:651.4},0).wait(1).to({rotation:45.8,x:651.5},0).wait(1).to({rotation:43.2,y:217.7},0).wait(1).to({rotation:40.6,x:651.6,y:217.8},0).wait(1).to({rotation:38},0).wait(1).to({rotation:35.4,x:651.7},0).wait(1).to({rotation:32.8,x:651.8},0).wait(1).to({rotation:30.2,y:217.9},0).wait(1).to({rotation:27.6,x:651.9},0).wait(1).to({rotation:25.1},0).wait(1).to({rotation:22.5,x:652,y:218},0).wait(1).to({rotation:19.9,x:652.1},0).wait(1).to({rotation:17.3},0).wait(1).to({rotation:14.7,x:652.2},0).wait(1).to({rotation:12.1,x:652.3},0).wait(1).to({rotation:9.5,y:218.1},0).wait(1).to({rotation:6.9,x:652.4},0).wait(1).to({rotation:4.4,x:652.5},0).wait(1).to({rotation:1.8},0).wait(1).to({rotation:-0.8,x:652.6},0).wait(1).to({rotation:-3.4,x:652.7,y:218},0).wait(1).to({rotation:-6,x:652.8,y:218.1},0).wait(1).to({regX:13.5,regY:17.4,x:652.5,y:216.6},0).wait(1).to({regX:13.6,regY:19.1,x:652.8,y:218.3},0).wait(115));

	// Layer 31
	this.instance_17 = new lib.Symbol18();
	this.instance_17.parent = this;
	this.instance_17.setTransform(661.6,269.1,1,1,85,0,0,12.3,16.8);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(131).to({_off:false},0).wait(1).to({regX:13.6,regY:19.2,x:659.3,y:270.6},0).wait(42).to({regX:12.4,regY:16.9,x:661.7,y:269},0).wait(1).to({regX:13.6,regY:19.2,rotation:82.5,x:659.6,y:270.5},0).wait(1).to({rotation:79.9,x:659.7,y:270.6},0).wait(1).to({rotation:77.4,y:270.7},0).wait(1).to({rotation:74.9,x:659.8,y:270.8},0).wait(1).to({rotation:72.4},0).wait(1).to({rotation:69.8,x:660,y:270.9},0).wait(1).to({rotation:67.3,y:271},0).wait(1).to({rotation:64.8,x:660.1,y:271.1},0).wait(1).to({rotation:62.2,x:660.2,y:271.2},0).wait(1).to({rotation:59.7,x:660.3},0).wait(1).to({rotation:57.2,x:660.4,y:271.3},0).wait(1).to({rotation:54.6,x:660.5},0).wait(1).to({rotation:52.1,x:660.6,y:271.4},0).wait(1).to({rotation:49.6,x:660.7},0).wait(1).to({rotation:47.1,x:660.8,y:271.5},0).wait(1).to({rotation:44.5,x:660.9},0).wait(1).to({rotation:42,x:661},0).wait(1).to({rotation:39.5,x:661.1},0).wait(1).to({rotation:36.9,x:661.2},0).wait(1).to({rotation:34.4,x:661.3,y:271.6},0).wait(1).to({rotation:31.9,x:661.5},0).wait(1).to({rotation:29.4,x:661.6},0).wait(1).to({rotation:26.8,x:661.7},0).wait(1).to({rotation:24.3,x:661.8},0).wait(1).to({rotation:21.8,x:662},0).wait(1).to({rotation:19.2},0).wait(1).to({rotation:16.7,x:662.2,y:271.5},0).wait(1).to({rotation:14.2,x:662.3},0).wait(1).to({rotation:11.6},0).wait(1).to({rotation:9.1,x:662.5,y:271.4},0).wait(1).to({rotation:6.6,x:662.6},0).wait(1).to({rotation:4.1,x:662.7,y:271.3},0).wait(1).to({rotation:1.5,x:662.8},0).wait(1).to({rotation:-1,x:662.9,y:271.2},0).wait(1).to({regX:12.3,regY:16.8,x:661.7,y:269.1},0).wait(1).to({regX:13.6,regY:19.2,x:663,y:271.4},0).wait(115));

	// Layer 32
	this.instance_18 = new lib.Symbol19();
	this.instance_18.parent = this;
	this.instance_18.setTransform(658.5,319.1,1,1,96,0,0,14.8,16.1);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(131).to({_off:false},0).wait(1).to({regX:13.6,regY:19.2,x:655.5,y:317.7},0).wait(42).to({regX:14.9,regY:16.3,x:658.4,y:319.2},0).wait(1).to({regX:13.6,regY:19.2,rotation:93.2,x:655.6,y:317.8},0).wait(1).to({rotation:90.4,x:655.5,y:317.9},0).wait(1).to({rotation:87.6,x:655.4,y:318.1},0).wait(1).to({rotation:84.8,y:318.2},0).wait(1).to({rotation:82,y:318.3},0).wait(1).to({rotation:79.2,x:655.3,y:318.5},0).wait(1).to({rotation:76.4,y:318.6},0).wait(1).to({rotation:73.6,y:318.8},0).wait(1).to({rotation:70.9,x:655.2,y:319},0).wait(1).to({rotation:68.1,x:655.3,y:319.1},0).wait(1).to({rotation:65.3,x:655.2,y:319.3},0).wait(1).to({rotation:62.5,y:319.4},0).wait(1).to({rotation:59.7,x:655.3,y:319.6},0).wait(1).to({rotation:56.9,y:319.8},0).wait(1).to({rotation:54.1,y:319.9},0).wait(1).to({rotation:51.3,y:320},0).wait(1).to({rotation:48.5,x:655.4,y:320.2},0).wait(1).to({rotation:45.7,y:320.3},0).wait(1).to({rotation:42.9,x:655.5,y:320.5},0).wait(1).to({rotation:40.1,x:655.6,y:320.6},0).wait(1).to({rotation:37.3,y:320.7},0).wait(1).to({rotation:34.5,x:655.7,y:320.9},0).wait(1).to({rotation:31.7,x:655.8,y:321},0).wait(1).to({rotation:28.9,x:655.9,y:321.2},0).wait(1).to({rotation:26.1,x:656,y:321.3},0).wait(1).to({rotation:23.4,x:656.1,y:321.4},0).wait(1).to({rotation:20.6,x:656.2,y:321.5},0).wait(1).to({rotation:17.8,x:656.4,y:321.6},0).wait(1).to({rotation:15,x:656.5,y:321.7},0).wait(1).to({rotation:12.2,x:656.6,y:321.8},0).wait(1).to({rotation:9.4,x:656.7,y:321.9},0).wait(1).to({rotation:6.6,x:656.8},0).wait(1).to({rotation:3.8,x:657,y:322},0).wait(1).to({rotation:1,x:657.1,y:322.1},0).wait(1).to({regX:14.9,regY:16.1,x:658.5,y:319.1},0).wait(1).to({regX:13.6,regY:19.2,x:657.1,y:322.2},0).wait(115));

	// Layer 33
	this.instance_19 = new lib.Symbol20();
	this.instance_19.parent = this;
	this.instance_19.setTransform(587.6,347,1,1,68,0,0,14.5,17);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(131).to({_off:false},0).wait(1).to({regX:13.6,regY:19,x:585.4,y:346.9},0).wait(42).to({regX:14.4,regY:17.2,x:587.6,y:347},0).wait(1).to({regX:13.6,regY:19,rotation:65.7,x:585.6},0).wait(1).to({rotation:63.4,y:347.1},0).wait(1).to({rotation:61.1,y:347.2},0).wait(1).to({rotation:58.8,y:347.3},0).wait(1).to({rotation:56.5},0).wait(1).to({rotation:54.2,y:347.4},0).wait(1).to({rotation:51.9,x:585.7},0).wait(1).to({rotation:49.6,x:585.6,y:347.5},0).wait(1).to({rotation:47.4,x:585.7,y:347.6},0).wait(1).to({rotation:45.1,y:347.7},0).wait(1).to({rotation:42.8,x:585.8,y:347.8},0).wait(1).to({rotation:40.5},0).wait(1).to({rotation:38.2,y:347.9},0).wait(1).to({rotation:35.9,y:348},0).wait(1).to({rotation:33.6,x:585.9},0).wait(1).to({rotation:31.3,y:348.1},0).wait(1).to({rotation:29,x:586},0).wait(1).to({rotation:26.7,y:348.2},0).wait(1).to({rotation:24.4,x:586.1,y:348.3},0).wait(1).to({rotation:22.1,x:586.2},0).wait(1).to({rotation:19.8,y:348.4},0).wait(1).to({rotation:17.5,x:586.3},0).wait(1).to({rotation:15.2,y:348.5},0).wait(1).to({rotation:12.9,x:586.4},0).wait(1).to({rotation:10.6,x:586.5},0).wait(1).to({rotation:8.4,y:348.6},0).wait(1).to({rotation:6.1,x:586.6,y:348.7},0).wait(1).to({rotation:3.8},0).wait(1).to({rotation:1.5,x:586.7},0).wait(1).to({rotation:-0.8,x:586.8,y:348.8},0).wait(1).to({rotation:-3.1,x:586.9},0).wait(1).to({rotation:-5.4,x:587},0).wait(1).to({rotation:-7.7,x:587.1,y:348.9},0).wait(1).to({rotation:-10},0).wait(1).to({regX:14.4,regY:17.2,x:587.6,y:347},0).wait(1).to({regX:13.6,regY:19,x:587.1,y:348.8},0).wait(115));

	// Layer 34
	this.instance_20 = new lib.Symbol21();
	this.instance_20.parent = this;
	this.instance_20.setTransform(653.9,376.5,1,1,85,0,0,13.3,15.6);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(131).to({_off:false},0).wait(1).to({regX:13.6,regY:19.2,x:650.3,y:377.1},0).wait(42).to({regX:13.3,regY:15.8,x:653.9,y:376.6},0).wait(1).to({regX:13.6,regY:19.2,rotation:82.4,x:650.5,y:377.3},0).wait(1).to({rotation:79.7,x:650.6,y:377.5},0).wait(1).to({rotation:77.1,y:377.6},0).wait(1).to({rotation:74.4,x:650.7,y:377.7},0).wait(1).to({rotation:71.8,y:377.9},0).wait(1).to({rotation:69.1,x:650.8,y:378},0).wait(1).to({rotation:66.5,x:650.9,y:378.1},0).wait(1).to({rotation:63.8,y:378.3},0).wait(1).to({rotation:61.2,x:651.1,y:378.4},0).wait(1).to({rotation:58.5,y:378.6},0).wait(1).to({rotation:55.9,x:651.2,y:378.7},0).wait(1).to({rotation:53.2,x:651.3,y:378.8},0).wait(1).to({rotation:50.6,x:651.4,y:378.9},0).wait(1).to({rotation:47.9,x:651.6,y:379},0).wait(1).to({rotation:45.3,x:651.7,y:379.1},0).wait(1).to({rotation:42.6,x:651.8,y:379.2},0).wait(1).to({rotation:40,x:651.9,y:379.4},0).wait(1).to({rotation:37.4,x:652.1},0).wait(1).to({rotation:34.7,x:652.2,y:379.6},0).wait(1).to({rotation:32.1,x:652.4},0).wait(1).to({rotation:29.4,x:652.5,y:379.7},0).wait(1).to({rotation:26.8,x:652.6},0).wait(1).to({rotation:24.1,x:652.8,y:379.8},0).wait(1).to({rotation:21.5,x:652.9},0).wait(1).to({rotation:18.8,x:653.1,y:379.9},0).wait(1).to({rotation:16.2,x:653.2},0).wait(1).to({rotation:13.5,x:653.4},0).wait(1).to({rotation:10.9,x:653.6},0).wait(1).to({rotation:8.2,x:653.7,y:380},0).wait(1).to({rotation:5.6,x:653.9},0).wait(1).to({rotation:2.9,x:654},0).wait(1).to({rotation:0.3,x:654.2},0).wait(1).to({rotation:-2.4,x:654.4},0).wait(1).to({rotation:-5,x:654.5,y:379.9},0).wait(1).to({regX:13.3,regY:15.7,x:653.9,y:376.6},0).wait(1).to({regX:13.6,regY:19.2,x:654.5,y:380},0).wait(115));

	// Layer 35
	this.instance_21 = new lib.Symbol22();
	this.instance_21.parent = this;
	this.instance_21.setTransform(514.1,251.6,1,1,-100,0,0,13.6,18.9);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(131).to({_off:false},0).wait(1).to({regY:18.7,x:513.9,y:251.7},0).wait(42).to({regY:18.9,x:514.1,y:251.6},0).wait(1).to({regY:18.7,rotation:-102.6,x:513.9,y:251.7},0).wait(1).to({rotation:-105.1,y:251.6},0).wait(1).to({rotation:-107.7,y:251.7},0).wait(1).to({rotation:-110.2},0).wait(1).to({rotation:-112.8},0).wait(1).to({rotation:-115.4},0).wait(1).to({rotation:-117.9},0).wait(1).to({rotation:-120.5},0).wait(1).to({rotation:-123},0).wait(1).to({rotation:-125.6},0).wait(1).to({rotation:-128.1},0).wait(1).to({rotation:-130.7,x:514},0).wait(1).to({rotation:-133.3,x:513.9,y:251.8},0).wait(1).to({rotation:-135.8,y:251.7},0).wait(1).to({rotation:-138.4},0).wait(1).to({rotation:-140.9,x:514,y:251.8},0).wait(1).to({rotation:-143.5,x:513.9,y:251.7},0).wait(1).to({rotation:-146.1,y:251.8},0).wait(1).to({rotation:-148.6,x:514},0).wait(1).to({rotation:-151.2,x:513.9},0).wait(1).to({rotation:-153.7},0).wait(1).to({rotation:-156.3},0).wait(1).to({rotation:-158.9},0).wait(1).to({rotation:-161.4},0).wait(1).to({rotation:-164,x:514},0).wait(1).to({rotation:-166.5,x:513.9},0).wait(1).to({rotation:-169.1,x:514,y:251.9},0).wait(1).to({rotation:-171.6,y:251.8},0).wait(1).to({rotation:-174.2,y:251.9},0).wait(1).to({rotation:-176.8},0).wait(1).to({rotation:-179.3,y:251.8},0).wait(1).to({rotation:-181.9},0).wait(1).to({rotation:-184.4},0).wait(1).to({rotation:-187},0).wait(1).to({regX:13.3,y:251.7},0).wait(1).to({regX:13.6,x:513.7},0).wait(115));

	// Layer 36
	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#E93344").ss(2).p("ACQEWQAxiyhbigQhcihixgx");
	this.shape_211.setTransform(687.1,359.6);
	this.shape_211._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_211).wait(220).to({_off:false},0).to({_off:true},7).wait(16).to({_off:false},0).to({_off:true},7).wait(17).to({_off:false},0).to({_off:true},7).wait(17).to({_off:false},0).to({_off:true},7).wait(17).to({_off:false},0).to({_off:true},7).wait(3));

	// Layer 37
	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#E93344").ss(2).p("ABuDYQAmiKhHh7QhGh8iJgn");
	this.shape_212.setTransform(679.1,362.9);
	this.shape_212._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_212).wait(215).to({_off:false},0).to({_off:true},12).wait(11).to({_off:false},0).to({_off:true},12).wait(12).to({_off:false},0).to({_off:true},12).wait(12).to({_off:false},0).to({_off:true},12).wait(12).to({_off:false},0).to({_off:true},12).wait(3));

	// Layer 38
	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#E93344").ss(2).p("ABPCdQAchjg0hZQgzhahjgc");
	this.shape_213.setTransform(672.6,366);
	this.shape_213._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_213).wait(210).to({_off:false},0).to({_off:true},17).wait(6).to({_off:false},0).to({_off:true},17).wait(7).to({_off:false},0).to({_off:true},17).wait(7).to({_off:false},0).to({_off:true},17).wait(7).to({_off:false},0).to({_off:true},17).wait(3));

	// Layer 39
	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#E93344").ss(2).p("AAyBnQARhAghg5Qghg6g/gS");
	this.shape_214.setTransform(666.7,369.4);
	this.shape_214._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_214).wait(205).to({_off:false},0).to({_off:true},22).wait(1).to({_off:false},0).to({_off:true},22).wait(2).to({_off:false},0).to({_off:true},22).wait(2).to({_off:false},0).to({_off:true},22).wait(2).to({_off:false},0).to({_off:true},22).wait(3));

	// 2
	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#373535").s().p("AhKB3IAAgUIAZgXQAegdATgVQATgUAJgRQAJgRAAgSQABgMgFgLQgEgJgKgHQgLgGgQAAQgQAAgNAGQgMAGgJAHIgKgWQANgKAQgHQARgHAUAAQAZAAAPAKQAQAKAIAQQAHAPAAARQAAAWgKATQgKATgSAVQgSAUgXAXIgTASIAAAAIBoAAIAAAbg");
	this.shape_215.setTransform(11.8,23.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#009900").s().p("AgtB2QgQgLgKgTQgKgUAAgbQAAgdALgUQAKgVASgLQASgLAVAAQATAAANAIQAOAHAGALIAAAAIAAhoIAgAAIAADSIAAAYIABAVIgcAAIgCgeIAAAAQgIAOgPAKQgPAJgVABQgVgBgRgLgAgZgSQgMAJgGAOQgGAPAAAUQAAASAGAOQAFAPAMAIQALAJAQAAQARAAAMgKQANgKAFgSIABgGIAAgHIAAgfIAAgGIgBgHQgEgOgMgLQgMgKgSgBQgPABgMAIg");
	this.shape_216.setTransform(154.8,447.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#009900").s().p("AgkBQQgTgLgLgUQgKgUAAgaQABgZAJgWQAKgVASgMQATgMAYgBQAVABAOAHQAOAJAIAMQAIANAEAOQADAOAAAMIAAAIIgBAGIh6AAQABAVAIANQAIAOAOAGQANAGAPAAQARAAALgCQAMgDAIgEIAGAXQgIAEgPADQgPAEgUAAQgaAAgTgLgAAvgQQAAgKgEgMQgEgMgJgIQgKgJgRAAQgQAAgKAIQgKAIgFAMQgGAMgBALIBcAAIAAAAg");
	this.shape_217.setTransform(136.3,451.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#009900").s().p("AArCAIAAhkQgBgOgDgMQgFgLgIgHQgJgHgPAAQgPAAgKAJQgMAJgEANIgCAHIAAAIIAABpIggAAIAAj/IAgAAIAABtIAAAAQAEgHAGgGQAGgFAHgEQAHgEAIgDQAIgCAIAAQAJAAALADQAKADAJAIQAKAJAGAOQAGAOAAAWIAABog");
	this.shape_218.setTransform(117.3,447.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#009900").s().p("AgiBYQgMgEgKgFIAIgYQAIAFALADQALAEAMAAQAQAAAIgHQAJgHgBgLQAAgMgHgHQgIgHgQgGQgXgJgLgMQgMgMAAgQQAAgOAHgMQAIgLANgHQAOgHARAAQANAAAMADQALAEAHAEIgIAXIgOgHQgKgDgMAAQgMAAgIAHQgHAHAAAKQgBAKAJAHQAHAGAQAGQAXAJALALQAMAMAAAUQAAAXgRAOQgRAOgeABQgOAAgNgDg");
	this.shape_219.setTransform(100.1,451.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#009900").s().p("AgOB6IAAiuIAeAAIAACugAgOhXQgEgGgBgHQAAgJAGgGQAFgFAIAAQAJAAAFAFQAGAGAAAJQAAAHgGAGQgFAFgJABQgIgBgGgFg");
	this.shape_220.setTransform(88.8,448.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#009900").s().p("AArBZIAAhkQAAgOgEgLQgEgLgIgIQgJgGgPgBQgPAAgLAKQgLAJgFAOIgBAHIgBAIIAABnIgfAAIAAh+IgBgZIgBgWIAcAAIACAdIABAAQAEgJAIgHQAIgHALgFQAMgFANAAQAKAAAKADQALADAJAIQAJAJAHAPQAGAOAAAWIAABng");
	this.shape_221.setTransform(74.5,451.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#009900").s().p("AgPB6IAAiuIAfAAIAACugAgOhXQgEgGAAgHQAAgJAFgGQAFgFAIAAQAJAAAGAFQAEAGAAAJQAAAHgEAGQgGAFgJABQgIgBgGgFg");
	this.shape_222.setTransform(60.4,448.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#009900").s().p("AhAB5IAAjxICBAAIAAAaIhiAAIAABRIBbAAIAAAYIhbAAIAABug");
	this.shape_223.setTransform(48.8,448.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_215}]}).to({state:[{t:this.shape_215},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216}]},324).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400.8,248.8,381,405.3);
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