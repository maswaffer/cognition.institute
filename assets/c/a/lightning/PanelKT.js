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
(lib.PanelKT = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3).p("EAGfggpMA3yAAAMAAABBTMg3yAAAgEg+QggpMAzQAAAMAAABBJMgzQAAAg");
	this.shape.setTransform(399.5,289);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EAGfAgqMAAAhBTMA3yAAAMAAABBTgEg+QAggMAAAhBJMAzQAAAMAAABBJg");
	this.shape_1.setTransform(399.5,289);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3).p("EAGfggpMA3yAAAMAAABBTMg3yAAAgEg+QgZdIAAnMMAzQAAAIAAHM");
	this.shape_2.setTransform(399.5,289);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Eg+QAkLMAAAhBJMAzQAAAMAAABBJgAGfdJMAAAhBTMA3yAAAMAAABBTg");
	this.shape_3.setTransform(399.5,311.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Eg+QAn6MAAAhBJMAzQAAAMAAABBJgAGfZaMAAAhBTMA3yAAAMAAABBTg");
	this.shape_4.setTransform(399.5,335.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Eg+QAsZMAAAhBIMAzQAAAMAAABBIgAGfU6MAAAhBSMA3yAAAMAAABBSg");
	this.shape_5.setTransform(399.5,364.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Eg+QAwgMAAAhBJMAzQAAAMAAABBJgAGfQzMAAAhBSMA3yAAAMAAABBSg");
	this.shape_6.setTransform(399.5,390.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Eg+QAz6MAAAhBIMAzQAAAMAAABBIgAGfNZMAAAhBSMA3yAAAMAAABBSg");
	this.shape_7.setTransform(399.5,412.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Eg+QA3+MAAAhBIMAzQAAAMAAABBIgAGfJVMAAAhBSMA3yAAAMAAABBSg");
	this.shape_8.setTransform(399.5,438.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Eg+QA7NMAAAhBJMAzQAAAMAAABBJgAGfGHMAAAhBTMA3yAAAMAAABBTg");
	this.shape_9.setTransform(399.5,458.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Eg+QBBRMAAAhBJMAzQAAAMAAABBJgAGfACMAAAhBSMA3yAAAMAAABBSg");
	this.shape_10.setTransform(399.5,497.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(3).p("AGfDuIAAnMMA3yAAAIAAHMEg+QADuIAAnMMAzQAAAIAAHM");
	this.shape_11.setTransform(399.5,102.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Eg+QA9rMAAAhBIMAzQAAAMAAABBIgAGfDoIAAnLMAAAg6HMA3yAAAMAAAA6HIAAHLg");
	this.shape_12.setTransform(399.5,520.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Eg+QA6kMAAAhBJMAzQAAAMAAABBJgAGfGvMAAAhBSMA3yAAAMAAABBSg");
	this.shape_13.setTransform(399.5,540.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Eg+QA2bMAAAhBIMAzQAAAMAAABBIgAGfK4MAAAhBSMA3yAAAMAAABBSg");
	this.shape_14.setTransform(399.5,567.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Eg+QAyYMAAAhBIMAzQAAAMAAABBIgAGfO7MAAAhBSMA3yAAAMAAABBSg");
	this.shape_15.setTransform(399.5,593.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Eg+QAurMAAAhBJMAzQAAAMAAABBJgAGfSoMAAAhBSMA3yAAAMAAABBSg");
	this.shape_16.setTransform(399.5,616.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Eg+QAqaMAAAhBJMAzQAAAMAAABBJgAGfW5MAAAhBSMA3yAAAMAAABBSg");
	this.shape_17.setTransform(399.5,644.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("EAGfAg+MAAAhBSMA3yAAAMAAABBSgEg+QAgLMAAAhBJMAzQAAAMAAABBJg");
	this.shape_18.setTransform(399.5,709.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},47).to({state:[{t:this.shape_4},{t:this.shape_2}]},49).to({state:[{t:this.shape_5},{t:this.shape_2}]},48).to({state:[{t:this.shape_6},{t:this.shape_2}]},49).to({state:[{t:this.shape_7},{t:this.shape_2}]},48).to({state:[{t:this.shape_8},{t:this.shape_2}]},47).to({state:[{t:this.shape_9},{t:this.shape_2}]},47).to({state:[{t:this.shape_10},{t:this.shape_2}]},50).to({state:[{t:this.shape_12},{t:this.shape_11}]},47).to({state:[{t:this.shape_13},{t:this.shape_11}]},47).to({state:[{t:this.shape_14},{t:this.shape_11}]},48).to({state:[{t:this.shape_15},{t:this.shape_11}]},50).to({state:[{t:this.shape_16},{t:this.shape_11}]},47).to({state:[{t:this.shape_17},{t:this.shape_11}]},47).to({state:[{t:this.shape_18},{t:this.shape_11}]},48).to({state:[{t:this.shape_18},{t:this.shape_11}]},40).wait(1));

	// Layer 3
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A4BCDB").s().p("AAqByQgcgIgxgDIhHgDQgbgCgFgdQgFgdAdgMQAfgMAQgCQARgCALAIQAPAMgIgcQgIgagWgCQgbgDgagoQgagpAbgGQAXgFAgAGIAwAJQAWADAcAWQAcAVgZgEQgYgFgbANQgcAMAWACQAhACAMACQAZAFADAJIAGAYQAEANAMgMQAOgQAZAcQAZAbgFAaQgEAageAOQgTAJgUAAQgMAAgMgDg");
	this.shape_19.setTransform(76.7,205.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgOBgIAAhSIhOAAIAAgcIBOAAIAAhRIAdAAIAABRIBOAAIAAAcIhOAAIAABSg");
	this.shape_20.setTransform(84.5,400.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("Ag+AYIAAgvIB9AAIAAAvg");
	this.shape_21.setTransform(59,399.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BBCCE4").s().p("AiRA+QgCgUAQgQIAZgbQAGgHABADIABAIQADAFAIgEQAMgFAUgOQAEAAAIAIQAGAHADgCIANgFQAJgDACgFQACgHAGgEQAFgFACAFQABAEAGgEQAHgEgBgCQgBgCAGgIQAFgHADABQAEACADgGIADgKQABgFAHgDQAIgDACADQACADAIgBQAHgCABgCQADgEAAAGQAAAFgIACIgRADQgJABABAEQAAAGgDAIQgEAJgGABQgGABACAOQACAPAGgHQAFgEACgLQACgMACgEQAQgTAFAIQADAFAIAAQAIABABADQAAADAJABIAOACQAGABAKgCQALgDABgEQACgGADAKQACAJgGAAQgIAAgJADQgMACACAFQACAFgEAHQgFAHgGgCQgJgCgUABQgWABgCADQgEAHgaAKQgbALgHgGQgJgHgcgBQgdAAgHAKIgQAYQgKAMgLgBQgLgCgEAGQgBADAAAIQgDgDgBgJg");
	this.shape_22.setTransform(84.8,147.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D8E1EF").s().p("Ak8CeQgQgogBhAQgBg/APgVQATgbAYgaQAegfAQgGQANgFAbgOQAWgKAEAHQAEAIAEAEIALAHQAFADAIgNQAJgRAEgCQAfgSADAFQAEAGAIgFQAFgCAJAAQAKAAgBAEQgBAFADADQADADACgGQAEgHAHgHQAHgHAEABQAEABAFAFQAFADABgBQACgDAEgBQAFgBABACIADAFQgBADgHAAQgKAAgKAEQgMADAAAEQAAAEAGAIQAGAIAHAFQAIAGgCADQgFAGglAFQgiAEgQAPQgPAPgDAAQgLABANARQANARAJAAQAGAAAYgFQAVgEABAGQABAIAHAEQAJAEAKgGQAGgEAIgDQAJgCAIgGQARgQALgHQAHgDAPgBQARgBAFgBQAPgFAZAVQANALAEADQAMAHAJgFIAQgJQAJgDANACQAPACAbgGQAbgGABgHQABgIAcAIQAcAJAAANIABAfQgCASgPgBQgQgBACALQACALAIABQAIABg3AtQg5AvgiAKQhIAVi4AVQhhAMg5AAQhKAAgHgUg");
	this.shape_23.setTransform(84.6,148.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4C4C4D").s().p("AAdg3QACACADAAIhDBtg");
	this.shape_24.setTransform(79.6,358.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4C4C4D").s().p("Ag/AAIB/gCIgBADIABACg");
	this.shape_25.setTransform(75.9,352.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4C4C4D").s().p("Aggg1QACAAACgDIA9Bxg");
	this.shape_26.setTransform(86.8,358.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4C4C4D").s().p("AhAABIgBgDICDADIiCACg");
	this.shape_27.setTransform(90.4,352.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4C4C4D").s().p("Aghg4IBDBwIgBAAQgDAAgCABg");
	this.shape_28.setTransform(79.8,346.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4C4C4D").s().p("AghA2IBDhuIg/ByQgCgDgCgBg");
	this.shape_29.setTransform(86.8,346.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4C4C4D").s().p("AgDBxIgGAHIgEgEIAKgLIgBgHIgIAKIgGgEIAOgPIgBgGIgJALIgFgEIAOgPIgBgHIgMANIgEgEIAPgSIACgvIgqAZIgIAXIgFgCIAGgRIgGADIgHAVIgGgCIAFgPIgFACIgHAUIgGgCIAFgOIgGADIgFAQIgHgCIAEgKIg5AdIA0gjIgJgCIABgGIAQADIAFgEIgNgDIABgGIATAEIAFgDIgOgDIABgGIAVAEIAEgEIgQgDIABgGIAXAEIArgXIgpgVIgXAFIgCgGIASgDIgFgEIgWAEIgBgGIAPgDIgEgDIgVAEIgBgGIAOgDIgGgEIgQADIgBgGIAKgCIg1gjIA5AcIgEgJIAGgCIAGAOIAFADIgEgMIAGgCIAGASIAGADIgFgOIAGgCIAHAUIAFADIgFgRIAGgCIAHAWIApAaIgCgxIgQgTIAFgEIAMAOIABgGIgPgRIAEgEIALAMIABgGIgPgQIAGgEIAJALIABgHIgLgMIAEgEIAHAIIADhAIAEA/IAGgHIAFAEIgKAMIABAGIAIgKIAEAEIgMAPIAAAGIAKgLIAFAEIgOAQIAAAGIALgNIAGAEIgQASIgCAxIAngZIAIgXIAHACIgHASIAGgDIAIgVIAFACIgFAPIAFgDIAHgUIAGADIgFANIAHgDIAEgQIAGACIgCAKIA4gcIg0AjIAJACIgBAGIgPgDIgFAEIAMACIgBAGIgTgDIgFADIAOADIgBAGIgUgEIgGADIARAEIgBAGIgXgFIgqAWIAqAXIAZgFIABAGIgSAEIAGADIAVgEIABAGIgPADIAEAEIAVgEIABAGIgOADIAGADIAQgDIABAGIgKACIA1AjIg5gbIADAJIgFACIgGgPIgGgDIAFANIgGACIgGgTIgFgCIAEANIgGACIgHgTIgGgDIAGAQIgGACIgHgWIgqgaIACAuIAQATIgFAEIgMgOIAAAGIAPARIgGAEIgKgMIAAAGIANAQIgEAEIgJgLIgBAHIALAMIgFAEIgGgHIgFA/gAgFgDQgDACAAADQAAAEADACQADADACAAQAEAAACgDQADgDAAgDQAAgDgDgCQgCgDgEAAQgCAAgDADg");
	this.shape_30.setTransform(83.1,352.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4C4C4D").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTAUgbgBQgaABgTgUgAgrgrQgSATAAAYQAAAZASATQASASAZAAQAaAAASgSQASgTAAgZQAAgYgSgTQgSgRgagBQgZABgSARg");
	this.shape_31.setTransform(83,352.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4C4C4D").s().p("AgHAHQgCgDAAgEQAAgDACgDQADgDAEgBQAEABAEADQACADAAADQAAAEgCADQgEAEgEAAQgEAAgDgEg");
	this.shape_32.setTransform(80.6,357);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgEADAAQAFAAADAEQADADAAADQAAAEgDADQgDADgFABQgDgBgDgDg");
	this.shape_33.setTransform(85.7,356.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4C4C4D").s().p("AgGAIQgDgEAAgEQAAgEADgDQADgCADAAQAEAAADACQADADAAAEQAAAEgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_34.setTransform(88.3,352.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4C4C4D").s().p("AgHAHQgCgDAAgEQAAgDACgDQAEgDADgBQAFABADADQACADAAADQAAAEgCADQgDAEgFAAQgDAAgEgEg");
	this.shape_35.setTransform(85.9,348);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4C4C4D").s().p("AgGAHQgDgDAAgEQAAgDADgEQADgDADAAQAEAAADADQADAEAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_36.setTransform(80.7,347.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4C4C4D").s().p("AgHAIQgCgDAAgFQAAgDACgEQADgCAEAAQAEAAAEACQACAEAAADQAAAFgCADQgEACgEAAQgEAAgDgCg");
	this.shape_37.setTransform(77.8,352.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#72C050").s().p("AhKBQIA3AAIAAiTQgRgGgJgPQgLgOAAgSQAAgYAQgRQARgQAXAAQAYAAAQAQQARARAAAYQAAASgKAOQgKAPgRAGIAACTIA3AAIhLBigAgFhdIALAAIAAgVIAWAEIAAgUIgWAEIAAgWIgLAAIAAAWIgWgEIAAAUIAWgEg");
	this.shape_38.setTransform(489.4,403);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#47BDA0").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_39.setTransform(111.6,436.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#47BDA0").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_40.setTransform(76.2,453.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#373535").ss(5,1,1).p("ACkidQgEArgTA2QgUA3ghA3Qg5BkhCA4QhCA4glgVQgkgVAPhVQAPhWA6hjQA6hkBBg4QBCg4AlAVQARALAGAZ");
	this.shape_41.setTransform(95,455);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#373535").ss(5,1,1).p("AjMgiQgbgggKgbQgKgcALgSQAVgkBVAPQBWAPBjA6QBkA5A4BCQA3BDgVAkQgVAlhVgPQhWgPhjg6QhFgog0gw");
	this.shape_42.setTransform(95.1,455);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#47BDA0").s().p("AgjAkQgPgPAAgVQAAgUAPgPQAPgPAUAAQAVAAAPAPQAPAPAAAUQAAAVgPAPQgPAPgVAAQgUAAgPgPg");
	this.shape_43.setTransform(95.1,455.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AgdAMIAAgXIA7AAIAAAXg");
	this.shape_44.setTransform(482.8,282.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AgeAMIAAgXIA8AAIAAAXg");
	this.shape_45.setTransform(482.7,296.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AgeAMIAAgXIA8AAIAAAXg");
	this.shape_46.setTransform(500.6,302.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgeAMIAAgXIA8AAIAAAXg");
	this.shape_47.setTransform(466.4,274.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AgFAoIAAgiIghAAIAAgLIAhAAIAAgiIALAAIAAAiIAhAAIAAALIghAAIAAAig");
	this.shape_48.setTransform(499,339.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgFAoIAAgiIghAAIAAgLIAhAAIAAgiIALAAIAAAiIAhAAIAAALIghAAIAAAig");
	this.shape_49.setTransform(484.2,344.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AgFAoIAAgiIghAAIAAgLIAhAAIAAgiIALAAIAAAiIAhAAIAAALIghAAIAAAig");
	this.shape_50.setTransform(474.2,363);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AgeAMIAAgXIA9AAIAAAXg");
	this.shape_51.setTransform(475.3,236.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AgeAMIAAgXIA9AAIAAAXg");
	this.shape_52.setTransform(475.2,250.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AgeAMIAAgXIA9AAIAAAXg");
	this.shape_53.setTransform(493.1,256.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AgdAMIAAgXIA8AAIAAAXg");
	this.shape_54.setTransform(458.9,228.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgmAPIAAgdIBNAAIAAAdg");
	this.shape_55.setTransform(494.1,195.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgJA7IAAgyIgvAAIAAgRIAvAAIAAgyIASAAIAAAyIAwAAIAAARIgwAAIAAAyg");
	this.shape_56.setTransform(488.8,205.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AgJA7IAAgyIgvAAIAAgRIAvAAIAAgyIASAAIAAAyIAwAAIAAARIgwAAIAAAyg");
	this.shape_57.setTransform(484.6,185.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AgmAPIAAgdIBNAAIAAAdg");
	this.shape_58.setTransform(478.9,198.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("Ag+AYIAAgvIB9AAIAAAvg");
	this.shape_59.setTransform(478.4,147.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgOBgIAAhSIhOAAIAAgcIBOAAIAAhRIAdAAIAABRIBOAAIAAAcIhOAAIAABSg");
	this.shape_60.setTransform(477.3,98.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#FFDE31","#EE3338"],[0,1],4.9,3.8,-0.6,-2.6).s().p("AgnADIBMgwIAEBbg");
	this.shape_61.setTransform(99.2,313.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#FFDE31","#EE3338"],[0,1],15.4,17.2,-15.4,-18.8).s().p("ACiAuIgdgcQgNgNgYgPQgSgOgYgOQgTgLgcgMQgRgIgfgKQgUgFgegGIhcgHIhBAIIgLABIgOADIA0gPIAlgIIAWgDIBJgDQAdABAZAFQAcAEAbAHQAhALAUAIQAbALAYANQAYANAUAOIAmAbIApAnIAKAMIAEAEIANAPIg8Atg");
	this.shape_62.setTransform(75.4,303.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#FFDE31","#EE3338"],[0,1],-0.6,2.7,4.9,-3.8).s().p("AgngCIBQgrIgEBbg");
	this.shape_63.setTransform(99.4,252.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#FFDE31","#EE3338"],[0,1],-15.4,18.8,15.4,-17.2).s().p("AiLByIhSgMIg0gQIA1AJQATACASAAIBcgGQAegFAUgGQAZgIAXgKQAVgJAagOQAXgNATgOQAVgOAQgOIAdgeIAMgNIAog3IA8AtIgNAPIgnApIgQANQgWARgQALQgSANgaAOQgQAJgiAPQgZAKgdAIQgVAHgiAFQgWAEggACg");
	this.shape_64.setTransform(75.6,262.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F8C045").s().p("AAlAJIAABSInGi1IF9BSIAAhSIHGC1g");
	this.shape_65.setTransform(56.8,101.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFD055").s().p("ADjAJIAABSIl7hSIAABSInHi1IF8BSIAAhSIF8BSIAAhSIHHC1g");
	this.shape_66.setTransform(75.8,101.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#FFDE31","#EE3338"],[0,1],15.4,17.2,-15.4,-18.8).s().p("ACiAuIgdgcQgNgNgYgPQgSgOgYgOQgTgLgcgMQgRgIgfgKQgUgFgegGIhcgHIhaAMIA0gPIAlgIIAWgDIBJgDQAdABAZAFQAcAEAbAHQAhALAUAIQAbALAYANQAYANAUAOIAmAbIApAnIAKAMIAEAEIANAPIg8Atg");
	this.shape_67.setTransform(75.4,303.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#FFDE31","#EE3338"],[0,1],-15.4,18.8,15.4,-17.2).s().p("AiLByIhSgMIg0gQIA1AJQATACASAAIBcgGQAegFAUgGQAZgIAXgKQAVgJAagOQAXgNATgOQAVgOAQgOIAdgeIAMgNIAog3IA8AtIg0A4IgQANQgWARgQALQgSANgaAOQgQAJgiAPQgZAKgdAIQgVAHgiAFQgWAEggACg");
	this.shape_68.setTransform(75.6,262.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_68},{t:this.shape_63},{t:this.shape_67},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},759).wait(1));

	// Layer 1
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#373535").s().p("AgYA1QgMgHgHgOQgHgNAAgRQAAgRAGgOQAHgOAMgJQAMgIAQAAQAOABAKAFQAJAFAGAIQAFAJACAJQACAKAAAIIAAAFIAAADIhRAAQAAAPAGAJQAFAJAJAEQAJAEAKAAQALAAAIgBIANgFIAEAPQgGADgKACQgJACgOABQgRgBgNgHgAgPgnQgHAFgDAJQgEAHgBAIIA9AAQAAgIgCgHQgDgIgGgGQgHgFgLAAQgKgBgHAGg");
	this.shape_69.setTransform(695.7,401.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#373535").s().p("AgEBUQgLAAgKgCQgLgDgHgEIAFgQQAGADAJADQAIADALAAQAKAAAJgEQAIgEAFgJQAFgJAAgPIAAgNIgBAAQgFAJgJAFQgJAGgNAAQgOAAgLgIQgLgHgHgNQgGgMAAgQQAAgUAIgNQAHgOAMgHQAMgHANAAQAJAAAHADQAIADAEAEQAFAFACAFIABAAIABgSIASAAIAAAOIgBASIAABCQAAAUgEANQgEANgIAIQgJAHgLADQgKADgIAAIgDAAgAgWg3QgKAMAAAUQAAALAEAKQAEAIAHAGQAIAGALAAQAJAAAIgGQAIgGAEgJIABgFIAAgGIAAgVIAAgFIgBgFQgDgJgHgGQgIgHgLAAQgPAAgJAMg");
	this.shape_70.setTransform(682.6,403.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#373535").s().p("AgbA7IAAhPIAAgTIgBgRIASAAIABAXIABAAQAEgMAIgHQAIgGALAAIADAAIADAAIAAAUIgDAAIgEgBQgLABgIAHQgGAHgCANIgBAEIAAAFIAAA9g");
	this.shape_71.setTransform(673.2,401.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#373535").s().p("AgdA3QgIgEgEgHQgEgIAAgIQAAgWASgKQASgLAhAAIAAgCIgCgLQgCgGgFgGQgGgEgLAAQgIAAgIACQgIACgGAFIgFgPQAHgEAKgDQAKgCAKgBQASAAAKAIQAJAHAEAKQAEALgBAMIAAAqIABAPIABANIgTAAIgCgOIAAAAQgFAHgJAEQgJAFgMABQgMgBgHgFgAABAAQgKACgIAGQgHAGAAALQAAAKAGAFQAFAFAJAAQAKAAAHgGQAHgGADgHIABgEIAAgDIAAgTQgMAAgLAAg");
	this.shape_72.setTransform(662.6,401.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#373535").s().p("AAcBVIAAhCQAAgKgDgIQgCgGgGgFQgFgFgLAAQgJAAgIAGQgHAGgDAIIgBAFIgBAFIAABGIgUAAIAAipIAUAAIAABIIABAAQADgEAEgEQAEgEAFgCQAEgDAFgCQAFgBAGAAQAGgBAHADQAGACAHAFQAGAGAEAKQAFAIAAAPIAABFg");
	this.shape_73.setTransform(650.5,398.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#373535").s().p("AgSA1QgNgHgHgOQgGgNgBgSQAAgRAIgOQAHgNAPgJQAOgIARAAQAKAAAHACIANAFIgFAQQgEgCgGgCQgGgBgJgBQgNAAgIAHQgJAFgFAKQgFAKABALQAAAOAEAJQAGAKAJAFQAIAFAMABQAIAAAHgDIAKgDIAFAQQgFACgJACQgIACgMABQgRgBgNgHg");
	this.shape_74.setTransform(638.6,401.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#373535").s().p("AgJBVIAAipIATAAIAACpg");
	this.shape_75.setTransform(625.1,398.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#373535").s().p("AgdA3QgIgEgEgHQgEgIAAgIQAAgWASgKQASgLAhAAIAAgCIgCgLQgCgGgFgGQgGgEgLAAQgIAAgIACQgIACgGAFIgFgPQAHgEAKgDQAKgCAKgBQASAAAKAIQAJAHAEAKQAEALgBAMIAAAqIABAPIABANIgTAAIgCgOIAAAAQgFAHgJAEQgJAFgMABQgMgBgHgFgAABAAQgKACgIAGQgHAGAAALQAAAKAGAFQAFAFAJAAQAKAAAHgGQAHgGADgHIABgEIAAgDIAAgTQgMAAgLAAg");
	this.shape_76.setTransform(616.2,401.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#373535").s().p("AgSA1QgMgHgIgOQgHgNAAgSQABgRAHgOQAHgNAOgJQAOgIASAAQAKAAAHACIANAFIgFAQQgEgCgGgCQgGgBgJgBQgNAAgIAHQgJAFgFAKQgFAKABALQAAAOAEAJQAGAKAJAFQAIAFAMABQAIAAAHgDIALgDIADAQQgEACgIACQgJACgMABQgQgBgOgHg");
	this.shape_77.setTransform(605.5,401.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#373535").s().p("AgJBRIAAhzIATAAIAABzgAgJg5QgDgEAAgFQAAgHADgDQAEgEAFAAQAGAAADAEQAEADAAAHQAAAFgEAEQgDADgGAAQgFAAgEgDg");
	this.shape_78.setTransform(597.2,399);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#373535").s().p("AgbA7IAAhPIAAgTIgBgRIASAAIABAXIABAAQAEgMAIgHQAIgGALAAIADAAIADAAIAAAUIgDAAIgEgBQgLABgIAHQgGAHgCANIgBAEIAAAFIAAA9g");
	this.shape_79.setTransform(591,401.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#373535").s().p("AABBKQgEgCgEgFQgFgFgBgHQgCgIAAgKIAAg+IgSAAIAAgQIASAAIAAgcIATgGIAAAiIAeAAIAAAQIgeAAIAAA9QAAALAEAGQADAFAJAAIAHAAIAFgBIABAQIgIACIgKABQgIAAgGgCg");
	this.shape_80.setTransform(582.4,399.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#373535").s().p("AgRA1QgNgHgIgOQgGgNgBgSQAAgRAIgOQAHgNAPgJQAOgIARAAQAKAAAHACIANAFIgFAQQgEgCgGgCQgGgBgJgBQgNAAgIAHQgJAFgFAKQgEAKAAALQAAAOAEAJQAGAKAJAFQAIAFAMABQAIAAAHgDIAKgDIAFAQQgFACgJACQgIACgMABQgQgBgNgHg");
	this.shape_81.setTransform(573,401.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#373535").s().p("AgYA1QgMgHgHgOQgHgNAAgRQAAgRAGgOQAHgOAMgJQAMgIAQAAQAOABAKAFQAJAFAGAIQAFAJACAJQACAKAAAIIAAAFIAAADIhRAAQAAAPAGAJQAFAJAJAEQAJAEAKAAQALAAAIgBIANgFIAEAPQgGADgKACQgJACgOABQgRgBgNgHgAgPgnQgHAFgDAJQgEAHgBAIIA9AAQAAgIgCgHQgDgIgGgGQgHgFgLAAQgKgBgHAGg");
	this.shape_82.setTransform(561.5,401.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#373535").s().p("AgKBVIAAipIAVAAIAACpg");
	this.shape_83.setTransform(552.6,398.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#373535").s().p("AgsBRIAAihIBWAAIAAASIhCAAIAAAzIA+AAIAAAQIg+AAIAAA6IBFAAIAAASg");
	this.shape_84.setTransform(544.4,399);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#373535").s().p("AgbA7IAAhPIAAgTIgBgRIASAAIABAXIABAAQAEgMAIgHQAIgGALAAIADAAIADAAIAAAUIgDAAIgEgBQgLABgIAHQgGAHgCANIgBAEIAAAFIAAA9g");
	this.shape_85.setTransform(625.5,351.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#373535").s().p("AgYA1QgMgHgHgNQgHgNAAgSQAAgRAGgOQAHgOAMgJQAMgHAQgBQAOABAKAFQAJAFAGAIQAFAJACAJQACAJAAAJIAAAFIAAADIhRAAQAAAPAGAJQAFAJAJAEQAJAEAKAAQALAAAIgBIANgFIAEAPQgGADgKACQgJACgOABQgRgBgNgHgAgPgnQgHAFgDAJQgEAHgBAIIA9AAQAAgHgCgIQgDgIgGgFQgHgHgLABQgKAAgHAFg");
	this.shape_86.setTransform(614.9,351.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#373535").s().p("AA/A7IAAhAQAAgRgHgKQgFgJgOAAQgJAAgGAGQgGAFgEAIIgBAFIAAAGIAABGIgUAAIAAhEQAAgOgGgJQgGgJgMAAQgGAAgGADQgFADgEAFQgDAEgCAGIgCAFIAAAFIAABFIgUAAIAAhTIAAgRIgBgPIASAAIABATIABAAQADgGAFgFQAFgEAGgDQAIgDAJAAQAMAAAIAGQAIAGAEALIABAAQACgFADgEIAHgGQAFgEAHgCQAGgCAIAAQAIgBAJAFQAJAEAGALQAGALAAAUIAABDg");
	this.shape_87.setTransform(598.9,351.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#373535").s().p("AgdA3QgIgEgEgHQgEgIAAgJQAAgVASgKQASgLAhAAIAAgCIgCgLQgCgGgFgGQgGgEgLAAQgIAAgIACQgIADgGAEIgFgPQAHgEAKgDQAKgCAKgBQASAAAKAHQAJAIAEAKQAEALgBAMIAAAqIABAPIABANIgTAAIgCgOIAAAAQgFAGgJAFQgJAFgMABQgMgBgHgFgAABAAQgKACgIAGQgHAGAAALQAAAKAGAFQAFAFAJAAQAKAAAHgGQAHgGADgHIABgEIAAgDIAAgTQgMgBgLABg");
	this.shape_88.setTransform(582.8,351.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#373535").s().p("AgYA1QgMgHgHgNQgHgNAAgSQAAgRAGgOQAHgOAMgJQAMgHAQgBQAOABAKAFQAJAFAGAIQAFAJACAJQACAJAAAJIAAAFIAAADIhRAAQAAAPAGAJQAFAJAJAEQAJAEAKAAQALAAAIgBIANgFIAEAPQgGADgKACQgJACgOABQgRgBgNgHgAgPgnQgHAFgDAJQgEAHgBAIIA9AAQAAgHgCgIQgDgIgGgFQgHgHgLABQgKAAgHAFg");
	this.shape_89.setTransform(571.4,351.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#373535").s().p("AgbA7IAAhPIAAgTIgBgRIASAAIABAXIABAAQAEgMAIgHQAIgGALAAIADAAIADAAIAAAUIgDAAIgEgBQgLABgIAHQgGAHgCANIgBAEIAAAFIAAA9g");
	this.shape_90.setTransform(562.3,351.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#373535").s().p("AABBKQgEgCgEgFQgFgFgBgHQgCgIAAgKIAAg+IgSAAIAAgQIASAAIAAgcIATgGIAAAiIAeAAIAAAQIgeAAIAAA9QAAALAEAGQADAGAJgBIAHAAIAFgBIABAQIgIACIgKABQgIAAgGgCg");
	this.shape_91.setTransform(553.7,349.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#373535").s().p("AgXBSIgOgEIgLgFIAFgRQAHAEAKADQAKADAKAAQAQAAAJgHQAJgIAAgMQAAgLgIgIQgGgHgQgHQgUgGgLgLQgLgLAAgRQgBgMAHgKQAGgKAMgFQAMgGAPgBQAMABAJACQAJADAGACIgGASQgEgDgIgDQgIgCgLAAQgKAAgGAEQgHAEgEAFQgDAFAAAGQAAALAJAHQAHAHAQAGQAUAIAKAKQALALAAASQAAANgGAKQgHAKgMAHQgNAGgSABIgQgCg");
	this.shape_92.setTransform(543.9,349.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#373535").s().p("AgbA7IAAhPIAAgTIgBgRIASAAIABAXIABAAQAEgMAIgHQAIgGALAAIADAAIADAAIAAAUIgDAAIgEgBQgLABgIAHQgGAHgCANIgBAEIAAAFIAAA9g");
	this.shape_93.setTransform(687.8,301.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#373535").s().p("AgYA1QgMgHgHgNQgHgNAAgSQAAgRAGgOQAHgOAMgJQAMgHAQgBQAOAAAKAGQAJAFAGAIQAFAJACAJQACAJAAAJIAAAFIAAADIhRAAQAAAPAGAJQAFAJAJAEQAJAEAKAAQALAAAIgBIANgFIAEAPQgGADgKACQgJACgOABQgRgBgNgHgAgPgnQgHAGgDAHQgEAIgBAIIA9AAQAAgHgCgJQgDgHgGgFQgHgHgLAAQgKABgHAFg");
	this.shape_94.setTransform(677.2,301.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#373535").s().p("AgdBPQgLgHgHgNQgGgNgBgTQABgTAHgMQAHgPALgHQAMgIAOAAQANAAAJAGQAIAEAEAIIABAAIAAhFIAVAAIAACLIAAAQIABAOIgTAAIgBgUIAAAAQgFAJgLAHQgKAGgNABQgOAAgLgIgAgQgLQgIAFgEAKQgEAJAAANQAAANAEAKQADAJAIAFQAIAHAKAAQALgBAIgGQAJgHADgMIABgEIAAgFIAAgUIAAgEIgBgEQgCgKgIgHQgJgHgLAAQgKAAgIAGg");
	this.shape_95.setTransform(664,299);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#373535").s().p("AgdA3QgIgEgEgHQgEgIAAgJQAAgVASgKQASgLAhAAIAAgDIgCgKQgCgHgFgEQgGgFgLAAQgIAAgIACQgIADgGADIgFgOQAHgEAKgDQAKgDAKAAQASABAKAGQAJAIAEAKQAEALgBAMIAAAqIABAPIABANIgTAAIgCgOIAAAAQgFAGgJAFQgJAGgMAAQgMAAgHgGgAABAAQgKACgIAGQgHAFAAAMQAAAKAGAFQAFAFAJAAQAKAAAHgGQAHgGADgHIABgDIAAgEIAAgTQgMgBgLABg");
	this.shape_96.setTransform(651.6,301.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#373535").s().p("AgYA1QgMgHgHgNQgHgNAAgSQAAgRAGgOQAHgOAMgJQAMgHAQgBQAOAAAKAGQAJAFAGAIQAFAJACAJQACAJAAAJIAAAFIAAADIhRAAQAAAPAGAJQAFAJAJAEQAJAEAKAAQALAAAIgBIANgFIAEAPQgGADgKACQgJACgOABQgRgBgNgHgAgPgnQgHAGgDAHQgEAIgBAIIA9AAQAAgHgCgJQgDgHgGgFQgHgHgLAAQgKABgHAFg");
	this.shape_97.setTransform(640.1,301.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#373535").s().p("AgKBVIAAipIAVAAIAACpg");
	this.shape_98.setTransform(631.3,298.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#373535").s().p("AgdBPQgLgHgHgNQgGgNgBgTQABgTAHgMQAHgPALgHQAMgIAOAAQANAAAJAGQAIAEAEAIIABAAIAAhFIAVAAIAACLIAAAQIABAOIgTAAIgBgUIAAAAQgFAJgLAHQgKAGgNABQgOAAgLgIgAgQgLQgIAFgEAKQgEAJAAANQAAANAEAKQADAJAIAFQAIAHAKAAQALgBAIgGQAJgHADgMIABgEIAAgFIAAgUIAAgEIgBgEQgCgKgIgHQgJgHgLAAQgKAAgIAGg");
	this.shape_99.setTransform(616.2,299);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#373535").s().p("AgYA1QgMgHgHgNQgHgNAAgSQAAgRAGgOQAHgOAMgJQAMgHAQgBQAOAAAKAGQAJAFAGAIQAFAJACAJQACAJAAAJIAAAFIAAADIhRAAQAAAPAGAJQAFAJAJAEQAJAEAKAAQALAAAIgBIANgFIAEAPQgGADgKACQgJACgOABQgRgBgNgHgAgPgnQgHAGgDAHQgEAIgBAIIA9AAQAAgHgCgJQgDgHgGgFQgHgHgLAAQgKABgHAFg");
	this.shape_100.setTransform(603.8,301.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#373535").s().p("AgEBUQgLAAgKgCQgLgDgHgEIAFgQQAGADAJADQAIADALAAQAKAAAJgEQAIgEAFgJQAFgJAAgPIAAgNIgBAAQgFAJgJAFQgJAGgNAAQgOAAgLgIQgLgHgHgNQgGgMAAgQQAAgUAIgNQAHgOAMgHQAMgHANAAQAJAAAHADQAIADAEAEQAFAFACAFIABAAIABgSIASAAIAAAOIgBASIAABCQAAAUgEANQgEANgIAIQgJAHgLADQgKADgJAAIgCAAgAgWg3QgKAMAAAUQAAALAEAKQAEAIAHAGQAIAGALAAQAJAAAIgGQAIgGAEgJIABgFIAAgGIAAgVIAAgFIgBgFQgDgJgHgGQgIgHgLAAQgPAAgJAMg");
	this.shape_101.setTransform(590.7,303.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#373535").s().p("AgbA7IAAhPIAAgTIgBgRIASAAIABAXIABAAQAEgMAIgHQAIgGALAAIADAAIADAAIAAAUIgDAAIgEgBQgLABgIAHQgGAHgCANIgBAEIAAAFIAAA9g");
	this.shape_102.setTransform(581.3,301.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#373535").s().p("AgdA3QgIgEgEgHQgEgIAAgJQAAgVASgKQASgLAhAAIAAgDIgCgKQgCgHgFgEQgGgFgLAAQgIAAgIACQgIADgGADIgFgOQAHgEAKgDQAKgDAKAAQASABAKAGQAJAIAEAKQAEALgBAMIAAAqIABAPIABANIgTAAIgCgOIAAAAQgFAGgJAFQgJAGgMAAQgMAAgHgGgAABAAQgKACgIAGQgHAFAAAMQAAAKAGAFQAFAFAJAAQAKAAAHgGQAHgGADgHIABgDIAAgEIAAgTQgMgBgLABg");
	this.shape_103.setTransform(570.7,301.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#373535").s().p("AAcBVIAAhCQAAgKgDgIQgCgGgGgFQgFgFgLAAQgJAAgIAGQgHAGgDAIIgBAFIAAAFIAABGIgVAAIAAipIAVAAIAABIIAAAAQACgEAFgEQADgEAGgCQAEgDAGgCQAEgBAGAAQAGgBAHADQAGACAHAFQAGAGAEAKQAFAIAAAPIAABFg");
	this.shape_104.setTransform(558.6,298.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#373535").s().p("AgVBKQgTgJgKgSQgKgTgBgaQABgZAKgTQALgTATgLQATgKAYgBQAPABAKADQAKABAEADIgGARQgFgDgJgCQgIgBgKgBQgTAAgOAIQgOAIgHAPQgIAOAAAVQgBAUAIAOQAIAPAOAIQAMAHAUABQAKAAAJgCQAIgCAHgDIAFARQgHADgKACQgMACgPABQgWgBgRgJg");
	this.shape_105.setTransform(545,299.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#373535").s().p("AgbA7IAAhPIAAgTIgBgRIASAAIABAXIABAAQAEgMAIgHQAIgGALAAIADAAIADAAIAAAUIgDAAIgEgBQgLABgIAHQgGAHgCANIgBAEIAAAFIAAA9g");
	this.shape_106.setTransform(686.9,251.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#373535").s().p("AgYA1QgMgHgHgNQgHgOAAgRQAAgRAGgOQAHgOAMgJQAMgHAQgBQAOAAAKAGQAJAFAGAJQAFAIACAKQACAIAAAJIAAAFIAAAEIhRAAQAAAOAGAJQAFAJAJAEQAJAEAKAAQALAAAIgBIANgFIAEAPQgGADgKACQgJACgOABQgRgBgNgHgAgPgnQgHAGgDAHQgEAIgBAIIA9AAQAAgIgCgIQgDgHgGgFQgHgHgLAAQgKABgHAFg");
	this.shape_107.setTransform(676.3,251.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#373535").s().p("AgdBPQgLgHgHgNQgGgNgBgTQABgTAHgMQAHgPALgHQAMgIAOAAQANABAJAEQAIAFAEAIIABAAIAAhFIAVAAIAACLIAAAQIABAOIgTAAIgBgUIAAAAQgFAKgLAGQgKAGgNABQgOgBgLgHgAgQgLQgIAFgEAKQgEAJAAANQAAAMAEALQADAJAIAFQAIAHAKgBQALAAAIgGQAJgHADgMIABgEIAAgFIAAgUIAAgEIgBgEQgCgKgIgHQgJgHgLAAQgKAAgIAGg");
	this.shape_108.setTransform(663.1,249.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#373535").s().p("AgdA3QgIgEgEgIQgEgHAAgJQAAgVASgKQASgLAhAAIAAgDIgCgKQgCgHgFgEQgGgFgLAAQgIAAgIACQgIADgGADIgFgNQAHgFAKgDQAKgDAKAAQASABAKAGQAJAIAEAKQAEALgBAMIAAAqIABAPIABANIgTAAIgCgPIAAAAQgFAIgJAEQgJAGgMAAQgMAAgHgGgAABAAQgKACgIAGQgHAGAAALQAAAKAGAFQAFAFAJAAQAKAAAHgGQAHgFADgIIABgDIAAgEIAAgTQgMAAgLAAg");
	this.shape_109.setTransform(650.7,251.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#373535").s().p("AgYA1QgMgHgHgNQgHgOAAgRQAAgRAGgOQAHgOAMgJQAMgHAQgBQAOAAAKAGQAJAFAGAJQAFAIACAKQACAIAAAJIAAAFIAAAEIhRAAQAAAOAGAJQAFAJAJAEQAJAEAKAAQALAAAIgBIANgFIAEAPQgGADgKACQgJACgOABQgRgBgNgHgAgPgnQgHAGgDAHQgEAIgBAIIA9AAQAAgIgCgIQgDgHgGgFQgHgHgLAAQgKABgHAFg");
	this.shape_110.setTransform(639.2,251.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#373535").s().p("AgKBVIAAipIAVAAIAACpg");
	this.shape_111.setTransform(630.4,249);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#373535").s().p("AgdBPQgLgHgHgNQgGgNgBgTQABgTAHgMQAHgPALgHQAMgIAOAAQANABAJAEQAIAFAEAIIABAAIAAhFIAVAAIAACLIAAAQIABAOIgTAAIgBgUIAAAAQgFAKgLAGQgKAGgNABQgOgBgLgHgAgQgLQgIAFgEAKQgEAJAAANQAAAMAEALQADAJAIAFQAIAHAKgBQALAAAIgGQAJgHADgMIABgEIAAgFIAAgUIAAgEIgBgEQgCgKgIgHQgJgHgLAAQgKAAgIAGg");
	this.shape_112.setTransform(615.3,249.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#373535").s().p("AgYA1QgMgHgHgNQgHgOAAgRQAAgRAGgOQAHgOAMgJQAMgHAQgBQAOAAAKAGQAJAFAGAJQAFAIACAKQACAIAAAJIAAAFIAAAEIhRAAQAAAOAGAJQAFAJAJAEQAJAEAKAAQALAAAIgBIANgFIAEAPQgGADgKACQgJACgOABQgRgBgNgHgAgPgnQgHAGgDAHQgEAIgBAIIA9AAQAAgIgCgIQgDgHgGgFQgHgHgLAAQgKABgHAFg");
	this.shape_113.setTransform(602.9,251.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#373535").s().p("Ag2BTIAAh9IAAgUIAAgSIASAAIABAUIABAAQAGgKALgGQAKgGAOAAQAOAAALAIQAKAGAHAOQAGANAAARQAAAVgHANQgIAPgMAGQgMAHgOAAQgKAAgKgEQgJgFgFgJIgBAAIAAA/gAgTg6QgJAGgDANIgBAEIgBAFIAAAUIAAADIABAFQAEAKAIAHQAJAGALABQAKAAAIgGQAIgGAEgKQAEgJABgNQAAgMgFgKQgDgJgJgHQgHgFgLAAQgLgBgIAIg");
	this.shape_114.setTransform(590.5,254);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#373535").s().p("Ag2BTIAAh9IAAgUIgBgSIATAAIABAUIABAAQAGgKALgGQAKgGANAAQAOAAAMAIQALAGAGAOQAHANAAARQgBAVgHANQgIAPgLAGQgMAHgOAAQgLAAgKgEQgIgFgGgJIAAAAIAAA/gAgTg6QgJAGgDANIgBAEIAAAFIAAAUIAAADIABAFQACAKAJAHQAIAGAMABQAKAAAIgGQAIgGAEgKQAFgJgBgNQAAgMgDgKQgFgJgIgHQgHgFgLAAQgLgBgIAIg");
	this.shape_115.setTransform(576.8,254);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#373535").s().p("AgYA1QgMgHgHgNQgHgOAAgRQAAgRAGgOQAHgOAMgJQAMgHAQgBQAOAAAKAGQAJAFAGAJQAFAIACAKQACAIAAAJIAAAFIAAAEIhRAAQAAAOAGAJQAFAJAJAEQAJAEAKAAQALAAAIgBIANgFIAEAPQgGADgKACQgJACgOABQgRgBgNgHgAgPgnQgHAGgDAHQgEAIgBAIIA9AAQAAgIgCgIQgDgHgGgFQgHgHgLAAQgKABgHAFg");
	this.shape_116.setTransform(563.6,251.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#373535").s().p("AABBJQgEgCgEgEQgFgEgBgIQgCgIAAgKIAAg/IgSAAIAAgQIASAAIAAgcIATgFIAAAhIAeAAIAAAQIgeAAIAAA+QAAALAEAGQADAGAJgBIAHAAIAFgBIABAQIgIACIgKABQgIAAgGgDg");
	this.shape_117.setTransform(553.7,250.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#373535").s().p("AgXBSIgOgEIgLgFIAFgRQAHAEAKADQAKADAKAAQAQAAAJgIQAJgHAAgMQAAgLgIgIQgGgHgQgHQgUgGgLgLQgLgKAAgSQgBgMAHgKQAGgKAMgGQAMgFAPgBQAMABAJACQAJACAGADIgGARQgEgCgIgCQgIgDgLAAQgKAAgGAEQgHADgEAGQgDAGAAAFQAAALAJAHQAHAHAQAGQAUAIAKAKQALALAAASQAAAMgGALQgHALgMAGQgNAGgSABIgQgCg");
	this.shape_118.setTransform(543.9,249.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#373535").s().p("AgdBPQgLgHgHgNQgGgNgBgTQABgTAHgMQAHgPALgHQAMgIAOABQANAAAJAEQAIAFAEAIIABAAIAAhFIAVAAIAACLIAAAQIABAOIgTAAIgBgUIAAAAQgFAJgLAHQgKAGgNAAQgOAAgLgHgAgQgMQgIAGgEAKQgEAKAAAMQAAAMAEALQADAJAIAFQAIAHAKgBQALAAAIgGQAJgHADgMIABgEIAAgFIAAgUIAAgEIgBgFQgCgJgIgHQgJgHgLAAQgKAAgIAFg");
	this.shape_119.setTransform(652.5,199.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#373535").s().p("AgJBVIAAipIAUAAIAACpg");
	this.shape_120.setTransform(643.3,199.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#373535").s().p("AgYA1QgMgIgHgMQgHgOAAgRQAAgRAGgOQAHgOAMgJQAMgHAQAAQAOgBAKAGQAJAFAGAJQAFAIACAKQACAIAAAJIAAAFIAAAEIhRAAQAAAOAGAJQAFAJAJAEQAJAEAKAAQALAAAIgCIANgEIAEAPQgGADgKACQgJACgOAAQgRAAgNgHgAgPgnQgHAGgDAHQgEAIgBAHIA9AAQAAgHgCgIQgDgHgGgFQgHgHgLAAQgKABgHAFg");
	this.shape_121.setTransform(634.5,201.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#373535").s().p("AgKBRIAAhzIAUAAIAABzgAgJg6QgDgDAAgGQAAgFADgEQAEgEAFAAQAGAAADAEQAEAEAAAFQAAAGgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_122.setTransform(625.7,199.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#373535").s().p("AgVBWIAAhjIgQAAIAAgQIAQAAIAAgFQAAgNADgKQAEgKAGgIQAHgFAGgDQAIgCAHgBIAKABIAIADIgDAQIgFgCIgIAAQgJAAgGAEQgEAFgCAIQgBAHAAAJIAAAGIAbAAIAAAQIgbAAIAABjg");
	this.shape_123.setTransform(620,199);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#373535").s().p("AgSA1QgMgIgIgNQgHgNAAgSQABgRAHgNQAHgOAOgJQAOgHASAAQAKAAAHACIANADIgFARQgEgDgGgBQgGgCgJAAQgNABgIAFQgJAGgFAKQgFAKABALQAAANAEALQAGAJAJAGQAIAEAMAAQAIAAAHgBIALgEIADAPQgEADgIACQgJACgMAAQgQAAgOgHg");
	this.shape_124.setTransform(605.5,201.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#373535").s().p("AgJBRIAAhzIATAAIAABzgAgJg6QgDgDAAgGQAAgFADgEQAEgEAFAAQAGAAADAEQAEAEAAAFQAAAGgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_125.setTransform(597.2,199.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#373535").s().p("AgbA7IAAhPIAAgTIgBgRIASAAIABAXIABAAQAEgMAIgHQAIgGALAAIADAAIADAAIAAAUIgDAAIgEgBQgLABgIAHQgGAHgCANIgBAEIAAAFIAAA9g");
	this.shape_126.setTransform(591,201.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#373535").s().p("AABBJQgEgCgEgEQgFgEgBgJQgCgHAAgKIAAg/IgSAAIAAgQIASAAIAAgcIATgFIAAAhIAeAAIAAAQIgeAAIAAA+QAAALAEAGQADAGAJAAIAHgBIAFgBIABAQIgIACIgKABQgIAAgGgDg");
	this.shape_127.setTransform(582.4,200.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#373535").s().p("AgRA1QgNgIgIgNQgGgNgBgSQAAgRAIgNQAHgOAPgJQAOgHARAAQAKAAAHACIANADIgFARQgEgDgGgBQgGgCgJAAQgNABgIAFQgJAGgFAKQgEAKAAALQAAANAEALQAGAJAJAGQAIAEAMAAQAIAAAHgBIAKgEIAFAPQgFADgJACQgIACgMAAQgQAAgNgHg");
	this.shape_128.setTransform(573,201.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#373535").s().p("AgYA1QgMgIgHgMQgHgOAAgRQAAgRAGgOQAHgOAMgJQAMgHAQAAQAOgBAKAGQAJAFAGAJQAFAIACAKQACAIAAAJIAAAFIAAAEIhRAAQAAAOAGAJQAFAJAJAEQAJAEAKAAQALAAAIgCIANgEIAEAPQgGADgKACQgJACgOAAQgRAAgNgHgAgPgnQgHAGgDAHQgEAIgBAHIA9AAQAAgHgCgIQgDgHgGgFQgHgHgLAAQgKABgHAFg");
	this.shape_129.setTransform(561.5,201.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#373535").s().p("AgKBVIAAipIAVAAIAACpg");
	this.shape_130.setTransform(552.6,199.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#373535").s().p("AgsBRIAAihIBWAAIAAASIhCAAIAAAzIA+AAIAAAQIg+AAIAAA6IBFAAIAAASg");
	this.shape_131.setTransform(544.4,199.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#373535").s().p("AgYA1QgMgIgHgMQgHgOAAgRQAAgRAGgOQAHgOAMgIQAMgIAQAAQAOgBAKAGQAJAFAGAJQAFAIACAKQACAIAAAJIAAAFIAAAEIhRAAQAAAOAGAJQAFAJAJAEQAJAEAKAAQALAAAIgCIANgEIAEAPQgGADgKACQgJACgOAAQgRAAgNgHgAgPgnQgHAGgDAHQgEAIgBAHIA9AAQAAgGgCgJQgDgHgGgFQgHgGgLgBQgKAAgHAGg");
	this.shape_132.setTransform(695.3,152);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#373535").s().p("AgEBUQgLAAgKgCQgLgDgHgEIAFgQQAGADAJADQAIADALAAQAKAAAJgEQAIgEAFgJQAFgJAAgPIAAgNIgBAAQgFAJgJAFQgJAGgNAAQgOAAgLgIQgLgHgHgNQgGgMAAgQQAAgUAIgNQAHgOAMgHQAMgHANAAQAJAAAHADQAIADAEAEQAFAFACAFIABAAIABgSIASAAIAAAOIgBASIAABCQAAAUgEANQgEANgIAIQgJAHgLADQgKADgIAAIgDAAgAgWg3QgKAMAAAUQAAALAEAKQAEAIAHAGQAIAGALAAQAJAAAIgGQAIgGAEgJIABgFIAAgGIAAgVIAAgFIgBgFQgDgJgHgGQgIgHgLAAQgPAAgJAMg");
	this.shape_133.setTransform(682.2,154.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#373535").s().p("AgbA7IAAhPIAAgTIgBgRIASAAIABAXIABAAQAEgMAIgHQAIgGALAAIADAAIADAAIAAAUIgDAAIgEgBQgLABgIAHQgGAHgCANIgBAEIAAAFIAAA9g");
	this.shape_134.setTransform(672.8,151.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#373535").s().p("AgdA4QgIgFgEgIQgEgHAAgJQAAgVASgKQASgLAhAAIAAgDIgCgLQgCgFgFgFQgGgFgLAAQgIAAgIACQgIACgGAEIgFgNQAHgFAKgDQAKgCAKAAQASAAAKAGQAJAIAEAKQAEALgBAMIAAAqIABAPIABANIgTAAIgCgPIAAAAQgFAHgJAGQgJAEgMAAQgMAAgHgEgAABAAQgKACgIAGQgHAFAAAMQAAAKAGAFQAFAFAJAAQAKAAAHgGQAHgFADgJIABgCIAAgEIAAgUQgMABgLAAg");
	this.shape_135.setTransform(662.1,152);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#373535").s().p("AAcBVIAAhCQAAgKgDgIQgCgGgGgFQgFgFgLAAQgJAAgIAGQgHAGgDAIIgBAFIgBAFIAABGIgUAAIAAipIAUAAIAABIIABAAQADgEAEgEQAEgEAFgCQAEgDAFgCQAFgBAGAAQAGgBAHADQAGACAHAFQAGAGAEAKQAFAIAAAPIAABFg");
	this.shape_136.setTransform(650.1,149.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#373535").s().p("AgSA1QgNgIgHgNQgGgNgBgSQAAgRAIgOQAHgOAPgHQAOgIARAAQAKAAAHACIANADIgFARQgEgDgGgBQgGgBgJAAQgNAAgIAFQgJAGgFAKQgFAKABALQAAANAEAKQAGAKAJAGQAIAEAMAAQAIAAAHgCIAKgDIAFAPQgFADgJACQgIACgMAAQgRAAgNgHg");
	this.shape_137.setTransform(638.1,152);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#373535").s().p("AgYA1QgMgIgHgMQgHgOAAgRQAAgRAGgOQAHgOAMgIQAMgIAQAAQAOgBAKAGQAJAFAGAJQAFAIACAKQACAIAAAJIAAAFIAAAEIhRAAQAAAOAGAJQAFAJAJAEQAJAEAKAAQALAAAIgCIANgEIAEAPQgGADgKACQgJACgOAAQgRAAgNgHgAgPgnQgHAGgDAHQgEAIgBAHIA9AAQAAgGgCgJQgDgHgGgFQgHgGgLgBQgKAAgHAGg");
	this.shape_138.setTransform(621.5,152);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#373535").s().p("AgKA6IgshzIAXAAIAWBAIAGAQIADAOIAAAAIAFgOIAFgQIAXhAIAWAAIguBzg");
	this.shape_139.setTransform(610,152);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#373535").s().p("AgJBRIAAhzIAUAAIAABzgAgIg6QgEgDAAgGQAAgFAEgEQAEgEAEAAQAGAAAEAEQADAEAAAFQAAAGgDADQgEAEgGAAQgFAAgDgEg");
	this.shape_140.setTransform(601.4,149.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#373535").s().p("AABBJQgEgCgEgEQgFgEgBgJQgCgHAAgKIAAg/IgSAAIAAgQIASAAIAAgcIATgFIAAAhIAeAAIAAAQIgeAAIAAA+QAAALAEAGQADAGAJAAIAHgBIAFgBIABAQIgIACIgKABQgIAAgGgDg");
	this.shape_141.setTransform(594.5,150.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#373535").s().p("AgdA4QgIgFgEgIQgEgHAAgJQAAgVASgKQASgLAhAAIAAgDIgCgLQgCgFgFgFQgGgFgLAAQgIAAgIACQgIACgGAEIgFgNQAHgFAKgDQAKgCAKAAQASAAAKAGQAJAIAEAKQAEALgBAMIAAAqIABAPIABANIgTAAIgCgPIAAAAQgFAHgJAGQgJAEgMAAQgMAAgHgEgAABAAQgKACgIAGQgHAFAAAMQAAAKAGAFQAFAFAJAAQAKAAAHgGQAHgFADgJIABgCIAAgEIAAgUQgMABgLAAg");
	this.shape_142.setTransform(584.7,152);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#373535").s().p("AgEBUQgLAAgKgCQgLgDgHgEIAFgQQAGADAJADQAIADALAAQAKAAAJgEQAIgEAFgJQAFgJAAgPIAAgNIgBAAQgFAJgJAFQgJAGgNAAQgOAAgLgIQgLgHgHgNQgGgMAAgQQAAgUAIgNQAHgOAMgHQAMgHANAAQAJAAAHADQAIADAEAEQAFAFACAFIABAAIABgSIASAAIAAAOIgBASIAABCQAAAUgEANQgEANgIAIQgJAHgLADQgKADgJAAIgCAAgAgWg3QgKAMAAAUQAAALAEAKQAEAIAHAGQAIAGALAAQAJAAAIgGQAIgGAEgJIABgFIAAgGIAAgVIAAgFIgBgFQgDgJgHgGQgIgHgLAAQgPAAgJAMg");
	this.shape_143.setTransform(572.1,154.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#373535").s().p("AgYA1QgMgIgHgMQgHgOAAgRQAAgRAGgOQAHgOAMgIQAMgIAQAAQAOgBAKAGQAJAFAGAJQAFAIACAKQACAIAAAJIAAAFIAAAEIhRAAQAAAOAGAJQAFAJAJAEQAJAEAKAAQALAAAIgCIANgEIAEAPQgGADgKACQgJACgOAAQgRAAgNgHgAgPgnQgHAGgDAHQgEAIgBAHIA9AAQAAgGgCgJQgDgHgGgFQgHgGgLgBQgKAAgHAGg");
	this.shape_144.setTransform(559.8,152);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#373535").s().p("AAnBRIgxhRIgRgbIgOgbIgBAAIABAfIABAjIAABFIgUAAIAAihIAXAAIAzBRIAQAbIANAZIABAAIgCggIgBghIAAhEIAUAAIAAChg");
	this.shape_145.setTransform(545.9,149.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#373535").s().p("AgYA1QgMgIgHgNQgHgMAAgSQAAgRAGgOQAHgOAMgIQAMgJAQABQAOgBAKAGQAJAFAGAJQAFAIACAKQACAJAAAIIAAAFIAAAEIhRAAQAAAOAGAJQAFAJAJAEQAJAEAKAAQALAAAIgCIANgEIAEAPQgGADgKACQgJACgOAAQgRAAgNgHgAgPgnQgHAFgDAJQgEAHgBAHIA9AAQAAgGgCgIQgDgIgGgGQgHgFgLgBQgKAAgHAGg");
	this.shape_146.setTransform(686.2,102.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#373535").s().p("AgEBUQgLAAgKgCQgLgDgHgEIAFgQQAGADAJADQAIADALAAQAKAAAJgEQAIgEAFgJQAFgJAAgPIAAgNIgBAAQgFAJgJAFQgJAGgNAAQgOAAgLgIQgLgHgHgNQgGgMAAgQQAAgUAIgNQAHgOAMgHQAMgHANAAQAJAAAHADQAIADAEAEQAFAFACAFIABAAIABgSIASAAIAAAOIgBASIAABCQAAAUgEANQgEANgIAIQgJAHgLADQgKADgJAAIgCAAgAgWg3QgKAMAAAUQAAALAEAKQAEAIAHAGQAIAGALAAQAJAAAIgGQAIgGAEgJIABgFIAAgGIAAgVIAAgFIgBgFQgDgJgHgGQgIgHgLAAQgPAAgJAMg");
	this.shape_147.setTransform(673.1,104.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#373535").s().p("AgbA7IAAhPIAAgTIgBgRIASAAIABAXIABAAQAEgMAIgHQAIgGALAAIADAAIADAAIAAAUIgDAAIgEgBQgLABgIAHQgGAHgCANIgBAEIAAAFIAAA9g");
	this.shape_148.setTransform(663.7,102);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#373535").s().p("AgdA4QgIgFgEgIQgEgHAAgIQAAgWASgKQASgLAhAAIAAgDIgCgLQgCgGgFgFQgGgEgLAAQgIAAgIACQgIACgGAEIgFgNQAHgFAKgDQAKgDAKABQASgBAKAIQAJAGAEALQAEALgBAMIAAAqIABAPIABANIgTAAIgCgPIAAAAQgFAHgJAGQgJAEgMAAQgMAAgHgEgAABAAQgKACgIAGQgHAFAAAMQAAAKAGAFQAFAFAJAAQAKAAAHgGQAHgFADgJIABgCIAAgEIAAgUQgMAAgLABg");
	this.shape_149.setTransform(653.1,102.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#373535").s().p("AAdBVIAAhCQAAgKgDgIQgDgGgFgFQgHgFgJAAQgKAAgHAGQgIAGgDAIIgBAFIAAAFIAABGIgWAAIAAipIAWAAIAABIIAAAAQACgEAEgEQAFgEAEgCQAFgDAFgCQAFgBAGAAQAGgBAGADQAIACAGAFQAGAGAFAKQADAIAAAPIAABFg");
	this.shape_150.setTransform(641,99.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#373535").s().p("AgWBKQgRgKgLgSQgKgSAAgbQAAgYAKgTQALgTATgKQATgLAYAAQAPAAAKACQAKADADACIgEARQgHgDgIgCQgIgBgKAAQgTgBgNAIQgPAIgIAPQgHAPgBAUQAAAUAIAPQAHAOAOAHQANAJAUAAQAKAAAIgCQAKgCAGgDIAEAQQgGAEgKACQgLACgPAAQgXAAgSgJg");
	this.shape_151.setTransform(627.4,99.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#373535").s().p("AgYA1QgMgIgHgNQgHgMAAgSQAAgRAGgOQAHgOAMgIQAMgJAQABQAOgBAKAGQAJAFAGAJQAFAIACAKQACAJAAAIIAAAFIAAAEIhRAAQAAAOAGAJQAFAJAJAEQAJAEAKAAQALAAAIgCIANgEIAEAPQgGADgKACQgJACgOAAQgRAAgNgHgAgPgnQgHAFgDAJQgEAHgBAHIA9AAQAAgGgCgIQgDgIgGgGQgHgFgLgBQgKAAgHAGg");
	this.shape_152.setTransform(609.3,102.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#373535").s().p("AgJA6IgthzIAXAAIAXBAIAFAQIADAOIABAAIAEgOIAGgQIAWhAIAWAAIgtBzg");
	this.shape_153.setTransform(597.8,102.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#373535").s().p("AgKBRIAAhzIAUAAIAABzgAgJg6QgDgDAAgGQAAgGADgDQAEgEAFAAQAGAAADAEQAEADAAAGQAAAGgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_154.setTransform(589.2,99.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#373535").s().p("AABBJQgEgBgEgFQgFgEgBgJQgCgHAAgKIAAg/IgSAAIAAgPIASAAIAAgdIATgFIAAAiIAeAAIAAAPIgeAAIAAA+QAAALAEAGQADAFAJABIAHgBIAFgBIABAQIgIACIgKABQgIAAgGgDg");
	this.shape_155.setTransform(582.3,100.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#373535").s().p("AgKBRIAAhzIAVAAIAABzgAgIg6QgEgDAAgGQAAgGAEgDQAEgEAEAAQAGAAAEAEQADADAAAGQAAAGgDADQgEAEgGAAQgFAAgDgEg");
	this.shape_156.setTransform(575.7,99.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#373535").s().p("AgXA6QgIgCgGgEIAFgPIAMAFQAIADAIAAQAKgBAGgEQAGgFAAgHQgBgIgFgFQgEgFgLgEQgPgGgIgHQgHgIAAgKQAAgKAEgIQAFgHAJgFQAJgFALABQAKAAAGABQAIACAFAEIgFAPQgEgCgGgCQgGgDgIAAQgJAAgEAFQgGAEAAAHQABAHAFAEQAFAEALAEQAOAGAIAHQAIAJAAAMQAAAQgLAJQgLAKgVAAQgJABgJgDg");
	this.shape_157.setTransform(568.1,102.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#373535").s().p("AgcA1QgNgHgHgOQgHgNgBgSQABgSAHgOQAIgOANgHQANgIAPABQARAAAMAHQANAIAHANQAHANAAASQgBAUgIAOQgIAOgOAGQgNAGgNAAQgQAAgMgHgAgTglQgIAGgEAKQgDALAAAKQAAANAEAKQAFAKAIAGQAIAGAJAAQAKAAAIgGQAIgGAFgKQAEgKAAgNQAAgJgDgLQgEgKgHgHQgIgGgNgBQgLAAgIAHg");
	this.shape_158.setTransform(556.7,102.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#373535").s().p("AgxBRIAAieIARgDIAXgBQAPAAALAEQALADAHAHQAHAGAEAIQADAJABALQAAALgEAJQgDAIgGAFQgIAJgNAFQgNAEgOAAIgJAAIgIgCIAABBgAgUhAIgIACIAAA+IAIABIAJABQASgBALgHQALgKAAgQQgBgQgKgIQgKgIgQAAIgMAAg");
	this.shape_159.setTransform(544.8,99.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#373535").s().p("AgWA6QgJgCgGgDIAFgQIAMAFQAIACAIABQALgBAFgFQAGgEgBgHQAAgIgEgFQgGgEgKgFQgQgGgHgHQgIgIAAgKQAAgKAFgIQAFgHAJgFQAJgEAMgBQAJAAAHACQAHADAFADIgGAPQgDgCgGgDQgGgCgIAAQgIAAgGAFQgEAFAAAGQgBAHAGAEQAFAFAKAEQAQAFAHAHQAIAJAAANQAAAPgMAJQgLAKgTAAQgKAAgIgCg");
	this.shape_160.setTransform(256.3,451.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#373535").s().p("AAdA7IAAhCQAAgJgDgIQgCgIgGgEQgGgFgKAAQgJAAgIAGQgHAHgDAJIgBAEIgBAGIAABEIgVAAIAAhTIAAgRIgBgPIATAAIABATIAAAAQAEgFAEgFQAGgFAIgDQAHgDAJAAQAGgBAHADQAHACAHAFQAGAGAEAKQAEAJAAAPIAABEg");
	this.shape_161.setTransform(244.9,451.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#373535").s().p("AgcA1QgNgHgHgOQgHgMgBgTQABgSAHgPQAIgNANgHQANgIAPAAQARABAMAHQANAIAHANQAHANAAASQgBAVgIANQgIAOgOAGQgNAHgNgBQgQABgMgIgAgTglQgIAHgEAJQgDALAAAKQAAANAEAKQAFAKAIAGQAIAFAJABQAKgBAIgFQAIgGAFgKQAEgKAAgNQAAgKgDgKQgEgKgHgGQgIgIgNAAQgLABgIAGg");
	this.shape_162.setTransform(231.6,451.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#373535").s().p("AgbA7IAAhPIAAgTIgBgRIASAAIABAXIABAAQAEgMAIgHQAIgGALAAIADAAIADAAIAAAUIgDAAIgEgBQgLABgIAHQgGAHgCANIgBAEIAAAFIAAA9g");
	this.shape_163.setTransform(222,451.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#373535").s().p("AABBKQgEgCgEgFQgFgFgBgHQgCgIAAgKIAAg+IgSAAIAAgQIASAAIAAgcIATgGIAAAiIAeAAIAAAQIgeAAIAAA9QAAALAEAGQADAFAJABIAHgBIAFgBIABAQIgIACIgKABQgIAAgGgCg");
	this.shape_164.setTransform(213.4,450);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#373535").s().p("AgRA1QgNgHgIgOQgGgNgBgSQAAgRAIgOQAHgOAPgHQAOgJARAAQAKAAAHACIANAFIgFAQQgEgCgGgCQgGgCgJABQgNgBgIAHQgJAFgFAKQgEAKAAALQAAAOAEAJQAGAKAJAFQAIAFAMABQAJgBAGgCIAKgDIAFAQQgFACgJACQgIACgMAAQgQAAgNgHg");
	this.shape_165.setTransform(204,451.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#373535").s().p("AgYA1QgMgHgHgOQgHgMAAgSQAAgRAGgOQAHgOAMgIQAMgJAQAAQAOABAKAFQAJAFAGAIQAFAJACAJQACAKAAAIIAAAFIAAADIhRAAQAAAPAGAJQAFAJAJAEQAJAEAKAAQALAAAIgCIANgEIAEAPQgGADgKACQgJACgOAAQgRAAgNgHgAgPgnQgHAFgDAJQgEAHgBAHIA9AAQAAgHgCgHQgDgIgGgGQgHgFgLAAQgKgBgHAGg");
	this.shape_166.setTransform(192.5,451.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#373535").s().p("AgKBVIAAipIAVAAIAACpg");
	this.shape_167.setTransform(183.6,448.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#373535").s().p("AgsBRIAAihIBWAAIAAASIhCAAIAAAzIA+AAIAAAQIg+AAIAAA6IBFAAIAAASg");
	this.shape_168.setTransform(175.4,449.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#373535").s().p("AgWA6QgJgCgGgDIAFgQIAMAFQAIACAIABQALAAAFgGQAGgEgBgIQAAgHgEgFQgGgFgKgEQgQgGgHgHQgIgIABgLQgBgJAFgIQAFgHAJgFQAJgEALgBQAKAAAHACQAHADAFADIgFAPQgEgDgGgCQgGgCgIAAQgIAAgGAFQgEAEAAAHQgBAHAGAEQAFAFAKAEQAQAFAHAHQAIAJAAANQAAAPgMAKQgKAJgUABQgKAAgIgDg");
	this.shape_169.setTransform(247.9,402.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#373535").s().p("AgYA1QgMgHgHgNQgHgNAAgSQAAgRAGgOQAHgOAMgJQAMgIAQAAQAOABAKAFQAJAFAGAIQAFAJACAJQACAJAAAJIAAAFIAAADIhRAAQAAAPAGAJQAFAJAJAEQAJAEAKAAQALAAAIgBIANgFIAEAPQgGADgKACQgJACgOABQgRgBgNgHgAgPgnQgHAFgDAIQgEAIgBAIIA9AAQAAgHgCgJQgDgHgGgFQgHgHgLABQgKAAgHAFg");
	this.shape_170.setTransform(237.1,402.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#373535").s().p("AgKBVIAAipIAVAAIAACpg");
	this.shape_171.setTransform(228.3,400);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#373535").s().p("AgSA1QgNgHgGgOQgIgNAAgSQABgRAHgNQAHgOAOgJQAPgIARAAQAKAAAIACIAMAFIgFAQQgEgCgGgCQgGgBgJgBQgNAAgIAHQgJAFgFAKQgFAKAAALQABANAFALQAFAJAJAFQAIAGAMAAQAJAAAGgCIALgEIADAQQgEACgIACQgJACgMABQgQgBgOgHg");
	this.shape_172.setTransform(220.2,402.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#373535").s().p("AgJBRIAAhzIATAAIAABzgAgIg5QgEgEAAgFQAAgGAEgEQADgEAFAAQAGAAADAEQAEAEAAAGQAAAFgEAEQgDADgGAAQgFAAgDgDg");
	this.shape_173.setTransform(211.9,400.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#373535").s().p("AABBKQgEgCgEgFQgFgFgBgHQgCgIAAgKIAAg+IgSAAIAAgRIASAAIAAgbIATgGIAAAhIAeAAIAAARIgeAAIAAA9QAAALAEAGQADAGAJgBIAHAAIAFgBIABAQIgIACIgKABQgIAAgGgCg");
	this.shape_174.setTransform(205,401.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#373535").s().p("AgbA7IAAhPIAAgTIgBgRIASAAIABAXIABAAQAEgMAIgHQAIgGALAAIADAAIADAAIAAAUIgDAAIgEgBQgLABgIAHQgGAHgCANIgBAEIAAAFIAAA9g");
	this.shape_175.setTransform(197.3,402.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#373535").s().p("AgdA3QgIgEgEgHQgEgIAAgJQAAgVASgKQASgLAhAAIAAgCIgCgLQgCgHgFgFQgGgEgLAAQgIAAgIACQgIADgGAEIgFgPQAHgEAKgDQAKgCAKgBQASAAAKAIQAJAHAEAKQAEALgBAMIAAAqIABAPIABANIgTAAIgCgOIAAAAQgFAGgJAFQgJAFgMABQgMgBgHgFgAABAAQgKACgIAGQgHAGAAALQAAAKAGAFQAFAFAJAAQAKAAAHgGQAHgGADgHIABgEIAAgDIAAgTQgMgBgLABg");
	this.shape_176.setTransform(186.6,402.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#373535").s().p("AgxBSIAAifIARgCIAXgBQAPgBALAEQALADAHAHQAHAGAEAJQADAIABALQAAALgEAIQgDAJgGAGQgIAIgNAEQgNAFgOAAIgJAAIgIgBIAABBgAgUg/IgIABIAAA+IAIABIAJAAQASAAALgHQALgKAAgQQgBgQgKgIQgKgIgQAAIgMABg");
	this.shape_177.setTransform(175.8,400.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#373535").s().p("AgJBVIAAipIAUAAIAACpg");
	this.shape_178.setTransform(245.5,351.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#373535").s().p("AgYA1QgMgHgHgNQgHgOAAgRQAAgRAGgOQAHgOAMgJQAMgHAQgBQAOAAAKAGQAJAFAGAJQAFAIACAKQACAIAAAJIAAAFIAAAEIhRAAQAAAOAGAJQAFAJAJAEQAJAEAKAAQALAAAIgBIANgFIAEAPQgGADgKACQgJACgOABQgRgBgNgHgAgPgnQgHAGgDAHQgEAIgBAIIA9AAQAAgIgCgIQgDgHgGgFQgHgHgLAAQgKABgHAFg");
	this.shape_179.setTransform(236.7,353.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#373535").s().p("Ag1BTIAAh9IAAgUIgCgSIAUAAIABAUIAAAAQAHgKAKgGQAKgGANAAQAOAAALAIQALAGAHAOQAGANABARQgBAVgHANQgHAPgMAGQgMAHgOAAQgLAAgJgEQgJgGgGgIIAAAAIAAA/gAgTg6QgJAGgDANIgBAEIAAAFIAAAUIAAADIAAAFQADAKAJAHQAIAGAMABQALAAAHgGQAIgGAEgKQAFgJgBgNQAAgMgDgKQgFgJgHgHQgIgFgLAAQgKgBgJAIg");
	this.shape_180.setTransform(224.2,356.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#373535").s().p("AgbA3QgJgEgGgLQgGgLAAgVIAAhCIAVAAIAAA/QgBARAGAKQAGAKAPAAQAGAAAFgDQAGgDAEgEQAEgFACgEIABgGIAAgFIAAhGIAVAAIAABTIABARIAAAPIgSAAIgCgTQgDAFgFAEQgFAFgHAEQgIADgJAAQgKAAgJgEg");
	this.shape_181.setTransform(210.4,354);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#373535").s().p("AgdA3QgIgEgEgIQgEgHAAgJQAAgVASgKQASgLAhAAIAAgDIgCgKQgCgHgFgEQgGgFgLAAQgIAAgIACQgIADgGADIgFgNQAHgFAKgDQAKgDAKAAQASABAKAGQAJAIAEAKQAEALgBAMIAAAqIABAPIABANIgTAAIgCgPIAAAAQgFAHgJAFQgJAGgMAAQgMAAgHgGgAABAAQgKACgIAGQgHAGAAALQAAAKAGAFQAFAFAJAAQAKAAAHgGQAHgFADgJIABgCIAAgEIAAgUQgMABgLAAg");
	this.shape_182.setTransform(197.7,353.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#373535").s().p("AgbA7IAAhPIAAgTIgBgRIASAAIABAXIABAAQAEgMAIgHQAIgGALAAIADAAIADAAIAAAUIgDAAIgEgBQgLABgIAHQgGAHgCANIgBAEIAAAFIAAA9g");
	this.shape_183.setTransform(189.1,353.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#373535").s().p("AgQBNQgPgFgMgLQgLgKgFgQQgGgPgBgTQABgXAKgTQALgTAUgLQATgKAagBQAPABAKACQALACAEADIgEARQgHgDgJgCQgIgCgMAAQgUAAgOAIQgOAIgIAOQgIAPAAATQAAAUAIAPQAHAPAOAHQAOAIASAAQAKAAAIgBQAGgBAEgCIAAgwIghAAIAAgQIA1AAIAABMQgHADgNADQgMADgSAAIgDABQgPAAgOgGg");
	this.shape_184.setTransform(176.5,351.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#373535").s().p("AABBJQgEgCgEgEQgFgEgBgJQgCgHAAgKIAAg/IgSAAIAAgQIASAAIAAgcIATgFIAAAhIAeAAIAAAQIgeAAIAAA+QAAALAEAGQADAGAJAAIAHgBIAFgBIABAQIgIACIgKABQgIAAgGgDg");
	this.shape_185.setTransform(273.1,303.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#373535").s().p("AgVBWIAAhjIgQAAIAAgQIAQAAIAAgFQAAgMADgLQAEgKAGgIQAHgFAGgDQAHgCAIgBIAKABIAIADIgDAQIgGgCIgHgBQgKAAgEAGQgFAEgCAIQgBAHAAAJIAAAGIAbAAIAAAQIgbAAIAABjg");
	this.shape_186.setTransform(266.1,302.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#373535").s().p("AgdA4QgIgFgEgIQgEgHAAgJQAAgVASgKQASgLAhAAIAAgDIgCgLQgCgFgFgFQgGgFgLAAQgIAAgIACQgIACgGAEIgFgNQAHgFAKgDQAKgCAKAAQASAAAKAGQAJAIAEAKQAEALgBAMIAAAqIABAPIABANIgTAAIgCgPIAAAAQgFAHgJAGQgJAEgMAAQgMAAgHgEgAABAAQgKACgIAGQgHAFAAAMQAAAKAGAFQAFAFAJAAQAKAAAHgGQAHgFADgJIABgCIAAgEIAAgUQgMABgLAAg");
	this.shape_187.setTransform(255.9,305);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#373535").s().p("AgbA7IAAhPIAAgTIgBgRIASAAIABAXIABAAQAEgMAIgHQAIgGALAAIADAAIADAAIAAAUIgDAAIgEgBQgLABgIAHQgGAHgCANIgBAEIAAAFIAAA9g");
	this.shape_188.setTransform(247.2,304.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#373535").s().p("AgdBPQgLgHgHgNQgGgOgBgRQABgUAHgMQAHgOALgIQAMgIAOABQANAAAJAEQAIAGAEAHIABAAIAAhFIAVAAIAACLIAAAQIABAOIgTAAIgBgUIAAAAQgFAJgLAHQgKAGgNAAQgOAAgLgHgAgQgMQgIAHgEAJQgEAJAAANQAAAMAEALQADAJAIAGQAIAFAKAAQALAAAIgGQAJgGADgNIABgEIAAgFIAAgUIAAgEIgBgFQgCgJgIgHQgJgHgLAAQgKAAgIAFg");
	this.shape_189.setTransform(235.5,302.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#373535").s().p("AAdA7IAAhCQAAgJgDgIQgDgIgFgEQgGgFgKAAQgKAAgHAGQgIAHgDAJIgBAEIAAAGIAABEIgVAAIAAhTIAAgRIgBgPIATAAIABATIABAAQACgFAGgFQAFgFAHgDQAIgDAJAAQAGgBAHADQAHACAGAFQAGAGAFAKQAEAJAAAPIAABEg");
	this.shape_190.setTransform(222.5,304.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#373535").s().p("AAcA6IgSg3IgGgSIgEgUIAAAAIgFAUIgFASIgTA3IgTAAIgjhzIAVAAIAQA6IAEATIAEASIABAAIAFgSIAFgTIATg6IARAAIASA5IAGAUIAEASIABAAIAEgSIAFgUIAQg5IAVAAIglBzg");
	this.shape_191.setTransform(207,305);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#373535").s().p("AgcA1QgNgHgHgNQgHgOgBgSQABgSAHgOQAIgOANgIQANgGAPAAQARgBAMAIQANAIAHANQAHANAAASQgBAUgIAOQgIANgOAHQgNAGgNAAQgQAAgMgHgAgTglQgIAGgEALQgDAKAAAKQAAANAEAKQAFAKAIAGQAIAGAJAAQAKAAAIgGQAIgGAFgKQAEgKAAgNQAAgJgDgLQgEgKgHgHQgIgGgNgBQgLAAgIAHg");
	this.shape_192.setTransform(191.7,305);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#373535").s().p("AgwBSIgRgCIAAieIAUgCIAYgBQAVAAARAFQAQAFAKAKQALAKAGAOQAGAOAAAUQAAATgGAQQgGAQgLALQgLALgTAGQgRAGgYAAIgUAAgAgihAIgLABIAAB/IAKABIALAAQAhAAASgSQARgRAAggQABgTgIgOQgHgOgOgIQgPgHgVgBIgOABg");
	this.shape_193.setTransform(177.5,302.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#373535").s().p("AABBKQgEgDgEgEQgFgEgBgJQgCgHAAgKIAAg/IgSAAIAAgPIASAAIAAgcIATgGIAAAiIAeAAIAAAPIgeAAIAAA+QAAALAEAGQADAFAJABIAHgBIAFgBIABAQIgIACIgKABQgIAAgGgCg");
	this.shape_194.setTransform(242.2,254.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#373535").s().p("AgVBXIAAhkIgQAAIAAgPIAQAAIAAgGQAAgMADgLQADgLAIgGQAFgHAHgCQAHgDAIAAIAKABIAIADIgDAQIgGgCIgIgBQgIAAgFAGQgFAEgCAHQgBAIAAAJIAAAHIAbAAIAAAPIgbAAIAABkg");
	this.shape_195.setTransform(235.2,253.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#373535").s().p("AgdA4QgIgFgEgIQgEgHAAgIQAAgWASgKQASgLAhAAIAAgCIgCgMQgCgGgFgFQgGgEgLAAQgIAAgIACQgIADgGAEIgFgOQAHgFAKgDQAKgDAKABQASgBAKAIQAJAGAEALQAEALgBAMIAAAqIABAPIABANIgTAAIgCgPIAAAAQgFAHgJAGQgJAEgMAAQgMAAgHgEgAABAAQgKACgIAGQgHAFAAAMQAAAKAGAFQAFAFAJAAQAKAAAHgGQAHgFADgJIABgDIAAgDIAAgUQgMAAgLABg");
	this.shape_196.setTransform(225,256.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#373535").s().p("AgbA7IAAhPIAAgTIgBgRIASAAIABAXIABAAQAEgMAIgHQAIgGALAAIADAAIADAAIAAAUIgDAAIgEgBQgLABgIAHQgGAHgCANIgBAEIAAAFIAAA9g");
	this.shape_197.setTransform(216.3,256);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#373535").s().p("AgdBPQgLgHgHgOQgGgNgBgRQABgUAHgNQAHgNALgIQAMgHAOAAQANAAAJAEQAIAGAEAHIABAAIAAhGIAVAAIAACMIAAAQIABAOIgTAAIgBgUIAAAAQgFAKgLAGQgKAHgNgBQgOABgLgIgAgQgMQgIAGgEAJQgEALAAANQAAAMAEAJQADAKAIAGQAIAFAKAAQALABAIgHQAJgGADgMIABgFIAAgEIAAgVIAAgEIgBgFQgCgJgIgHQgJgHgLAAQgKAAgIAFg");
	this.shape_198.setTransform(204.6,253.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#373535").s().p("Ag1BTIAAh9IAAgUIgBgRIASAAIABAUIABAAQAGgMALgFQAKgGAOAAQAOAAALAHQAKAIAHANQAGANAAASQAAAUgHAOQgIANgMAHQgMAHgOAAQgKAAgKgFQgJgEgFgJIgBAAIAAA/gAgTg7QgJAIgDALIgBAFIgBAEIAAAUIAAAFIABAEQAEAKAIAGQAJAIALgBQAKAAAIgFQAIgGAEgKQAEgJABgOQAAgLgFgKQgDgKgJgFQgHgHgLAAQgLAAgIAHg");
	this.shape_199.setTransform(191.8,258.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#373535").s().p("AgeBLQgNgGgHgPQgJgQABgZIAAheIAUAAIAABeQABATAFALQAEALAJAGQAJAFAKAAQASAAAKgMQALgNAAgbIAAheIAUAAIAABdQABAZgJAQQgHAPgOAHQgNAHgSAAQgQAAgNgHg");
	this.shape_200.setTransform(176.8,254);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#373535").s().p("AgbA7IAAhPIAAgTIgBgRIASAAIABAXIABAAQAEgMAIgHQAIgGALAAIADAAIADAAIAAAUIgDAAIgEgBQgLABgIAHQgGAHgCANIgBAEIAAAFIAAA9g");
	this.shape_201.setTransform(224.5,207.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#373535").s().p("AgcA1QgNgHgHgOQgHgNgBgSQABgTAHgOQAIgNANgHQANgIAPAAQARABAMAHQANAIAHANQAHANAAASQgBAVgIANQgIAOgOAGQgNAHgNAAQgQAAgMgIgAgTglQgIAHgEAJQgDALAAAKQAAANAEAKQAFAKAIAGQAIAFAJABQAKgBAIgFQAIgGAFgKQAEgKAAgNQAAgKgDgJQgEgLgHgGQgIgIgNAAQgLABgIAGg");
	this.shape_202.setTransform(213.3,207.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#373535").s().p("Ag2BTIAAh9IAAgUIAAgRIASAAIABATIABAAQAGgLALgFQAKgGAOAAQAOAAALAHQAKAIAHANQAGANAAARQAAAWgHAMQgIAOgMAHQgMAHgOAAQgKAAgKgEQgJgGgFgIIgBAAIAAA/gAgTg7QgJAHgDAMIgBAFIgBAEIAAAVIAAAEIABAEQAEAKAIAGQAJAIALgBQAKABAIgGQAIgGAEgKQAEgJABgOQAAgLgFgKQgDgJgJgHQgHgFgLgBQgLABgIAGg");
	this.shape_203.setTransform(200.3,209.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#373535").s().p("AgdA3QgIgEgEgHQgEgIAAgIQAAgWASgKQASgLAhAAIAAgCIgCgLQgCgGgFgGQgGgEgLAAQgIAAgIACQgIACgGAFIgFgPQAHgEAKgDQAKgCAKgBQASAAAKAIQAJAHAEAKQAEALgBAMIAAAqIABAPIABANIgTAAIgCgOIAAAAQgFAHgJAEQgJAFgMABQgMgBgHgFgAABAAQgKACgIAGQgHAGAAALQAAAKAGAFQAFAFAJAAQAKAAAHgGQAHgGADgHIABgEIAAgDIAAgTQgMAAgLAAg");
	this.shape_204.setTransform(187,207.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#373535").s().p("AgNBRIg1ihIAXAAIAZBQIAKAeIAHAdIABAAIAHgdIAKgeIAchQIAWAAIg6Chg");
	this.shape_205.setTransform(175.8,205);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#373535").s().p("AgYA1QgMgHgHgNQgHgNAAgSQAAgRAGgOQAHgOAMgJQAMgHAQgBQAOAAAKAGQAJAFAGAIQAFAJACAJQACAJAAAJIAAAFIAAADIhRAAQAAAPAGAJQAFAJAJAEQAJAEAKAAQALAAAIgBIANgFIAEAPQgGADgKACQgJACgOABQgRgBgNgHgAgPgnQgHAGgDAHQgEAIgBAIIA9AAQAAgHgCgJQgDgHgGgFQgHgHgLAAQgKABgHAFg");
	this.shape_206.setTransform(251.5,158.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#373535").s().p("AgbA7IAAhPIAAgTIgBgRIASAAIABAXIABAAQAEgMAIgHQAIgGALAAIADAAIADAAIAAAUIgDAAIgEgBQgLABgIAHQgGAHgCANIgBAEIAAAFIAAA9g");
	this.shape_207.setTransform(242.5,158.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#373535").s().p("AgbA3QgJgEgGgLQgGgLAAgVIAAhCIAVAAIAAA/QgBARAGAKQAGAKAPAAQAGAAAFgDQAGgDAEgEQAEgFACgEIABgGIAAgFIAAhGIAVAAIAABTIABARIAAAPIgSAAIgCgTQgDAFgFAEQgFAFgHAEQgIADgJAAQgKAAgJgEg");
	this.shape_208.setTransform(231.3,158.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#373535").s().p("AABBJQgEgCgEgEQgFgFgBgHQgCgIAAgKIAAg+IgSAAIAAgRIASAAIAAgcIATgFIAAAhIAeAAIAAARIgeAAIAAA9QAAALAEAGQADAGAJgBIAHAAIAFgBIABAQIgIACIgKABQgIAAgGgDg");
	this.shape_209.setTransform(220.6,156.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#373535").s().p("AgXA6QgIgCgGgDIAFgRIANAGQAHADAIAAQAKAAAGgGQAFgEABgIQAAgHgGgFQgEgEgLgFQgQgGgHgHQgIgIAAgLQABgJAEgIQAFgHAJgFQAJgFAMAAQAIAAAHADQAIACAFACIgGAQQgDgDgGgCQgGgCgIAAQgJAAgEAFQgFAEgBAHQAAAHAGAEQAFAFALAEQAOAFAIAIQAIAIAAANQAAAPgMAKQgLAJgUABQgJgBgJgCg");
	this.shape_210.setTransform(212,158.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#373535").s().p("AgKBRIAAhzIAUAAIAABzgAgJg5QgDgEAAgGQAAgFADgEQAEgEAFAAQAGAAADAEQAEAEAAAFQAAAGgEAEQgDADgGAAQgFAAgEgDg");
	this.shape_211.setTransform(204.5,156.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#373535").s().p("AgcA1QgNgHgHgNQgHgNgBgTQABgTAHgOQAIgNANgIQANgGAPgBQARAAAMAIQANAHAHAOQAHANAAASQgBAUgIAOQgIANgOAHQgNAGgNABQgQAAgMgIgAgTglQgIAHgEAKQgDAKAAAKQAAANAEAKQAFAKAIAGQAIAGAJAAQAKAAAIgGQAIgGAFgKQAEgKAAgNQAAgJgDgKQgEgLgHgGQgIgIgNAAQgLABgIAGg");
	this.shape_212.setTransform(195,158.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#373535").s().p("AA+BRIgEhHIgBgXIgBgYIAAgWIgBAAIgJAdIgMAfIgcBPIgPAAIgahNIgLggQgEgQgEgOIAAAAIgBAWIgBAZIgBAXIgEBGIgVAAIAMihIAbAAIAbBOIAJAcIAHAaIAAAAIAHgaIAKgcIAdhOIAbAAIAKChg");
	this.shape_213.setTransform(178.7,156.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#373535").s().p("AgEBUQgLAAgKgCQgLgDgHgEIAFgQQAGADAJADQAIADALAAQAKAAAJgEQAIgEAFgJQAFgJAAgPIAAgNIgBAAQgFAJgJAFQgJAGgNAAQgOAAgLgIQgLgHgHgNQgGgMAAgQQAAgUAIgNQAHgOAMgHQAMgHANAAQAJAAAHADQAIADAEAEQAFAFACAFIABAAIABgSIASAAIAAAOIgBASIAABCQAAAUgEANQgEANgIAIQgJAHgLADQgKADgJAAIgCAAgAgWg3QgKAMAAAUQAAALAEAKQAEAIAHAGQAIAGALAAQAJAAAIgGQAIgGAEgJIABgFIAAgGIAAgVIAAgFIgBgFQgDgJgHgGQgIgHgLAAQgPAAgJAMg");
	this.shape_214.setTransform(259,112);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#373535").s().p("AAdA7IAAhCQAAgJgDgIQgCgIgGgEQgGgFgKAAQgJAAgIAGQgHAHgEAJIgBAEIAAAGIAABEIgVAAIAAhTIAAgRIgBgPIATAAIABATIAAAAQAEgFAEgFQAGgFAHgDQAIgDAJAAQAGgBAHADQAHACAGAFQAHAGAEAKQAEAJAAAPIAABEg");
	this.shape_215.setTransform(246.1,109.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#373535").s().p("AgKBRIAAhzIAVAAIAABzgAgJg6QgDgDAAgGQAAgFADgEQAEgEAFAAQAGAAADAEQAEAEAAAFQAAAGgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_216.setTransform(236.6,107.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#373535").s().p("AAdA7IAAhCQAAgJgDgIQgDgIgFgEQgGgFgKAAQgJAAgIAGQgHAHgEAJIgBAEIAAAGIAABEIgVAAIAAhTIAAgRIgBgPIATAAIABATIAAAAQAEgFAEgFQAGgFAHgDQAIgDAJAAQAGgBAHADQAHACAGAFQAHAGAEAKQAEAJAAAPIAABEg");
	this.shape_217.setTransform(227.2,109.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#373535").s().p("AABBJQgEgCgEgEQgFgEgBgJQgCgHAAgKIAAg/IgSAAIAAgQIASAAIAAgcIATgFIAAAhIAeAAIAAAQIgeAAIAAA+QAAALAEAGQADAGAJAAIAHgBIAFgBIABAQIgIACIgKABQgIAAgGgDg");
	this.shape_218.setTransform(216.4,108.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#373535").s().p("AAcBVIAAhCQAAgKgCgIQgDgGgFgFQgHgFgKAAQgJAAgIAGQgHAGgDAIIgBAFIAAAFIAABGIgWAAIAAipIAWAAIAABIIAAAAQADgEAEgEQADgEAGgCQAEgDAGgCQAEgBAGAAQAGgBAGADQAIACAGAFQAGAGAEAKQAEAIAAAPIAABFg");
	this.shape_219.setTransform(206.1,106.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#373535").s().p("AgEBUQgLAAgKgCQgLgDgHgEIAFgQQAGADAJADQAIADALAAQAKAAAJgEQAIgEAFgJQAFgJAAgPIAAgNIgBAAQgFAJgJAFQgJAGgNAAQgOAAgLgIQgLgHgHgNQgGgMAAgQQAAgUAIgNQAHgOAMgHQAMgHANAAQAJAAAHADQAIADAEAEQAFAFACAFIABAAIABgSIASAAIAAAOIgBASIAABCQAAAUgEANQgEANgIAIQgJAHgLADQgKADgIAAIgDAAgAgWg3QgKAMAAAUQAAALAEAKQAEAIAHAGQAIAGALAAQAJAAAIgGQAIgGAEgJIABgFIAAgGIAAgVIAAgFIgBgFQgDgJgHgGQgIgHgLAAQgPAAgJAMg");
	this.shape_220.setTransform(192.3,112);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#373535").s().p("AgKBRIAAhzIAVAAIAABzgAgJg6QgDgDAAgGQAAgFADgEQAFgEAEAAQAGAAAEAEQADAEAAAFQAAAGgDADQgEAEgGAAQgFAAgEgEg");
	this.shape_221.setTransform(183.2,107.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#373535").s().p("AgsBRIAAihIAUAAIAACPIBFAAIAAASg");
	this.shape_222.setTransform(175.4,107.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#373535").s().p("AgHAnQgDgDAAgEQAAgFADgDQADgEAEAAQAFAAADAEQACADABAFQgBAEgCADQgDAEgFAAQgEAAgDgEgAgHgXQgDgDAAgEQAAgGADgDQADgDAEAAQAFAAADADQACADABAGQgBAEgCADQgDADgFABQgEgBgDgDg");
	this.shape_223.setTransform(492.2,68.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#373535").s().p("AAVAsIAAgwQAAgHgCgHQgCgFgEgEQgEgEgIABQgGAAgGAEQgGAFgCAHIAAAEIgBADIAAAzIgQAAIAAg+IAAgMIAAgMIANAAIACAPIAAAAQACgFAEgDQAEgEAFgCQAGgCAHgBIAKACQAFABAEAFQAFAEADAHQADAIAAAKIAAAzg");
	this.shape_224.setTransform(485.2,68.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#373535").s().p("AgWAoQgJgFgFgLQgGgKABgOQgBgNAGgKQAGgKAJgGQALgFALgBQAMABAJAFQAKAGAFAKQAGAKgBANQAAAPgGAKQgHALgJAFQgKAEgKAAQgMABgKgGgAgOgcQgGAFgDAIQgCAIAAAHQAAAKADAHQADAIAGAEQAGAEAHAAQAIAAAFgEQAGgEADgIQAEgIAAgJQAAgHgDgHQgCgIgGgGQgFgEgKAAQgIAAgGAEg");
	this.shape_225.setTransform(475.2,68.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#373535").s().p("AgQArQgHgBgFgCIAFgNIAJAFQAGABAFAAQAIAAAEgDQAEgEABgFQgBgGgDgDQgEgFgIgCQgLgFgHgFQgFgGAAgIQAAgHADgGQAEgGAHgDQAHgDAIgBQAHABAFABQAGABADADIgDALIgIgDQgEgBgGAAQgHAAgDADQgEADAAAFQAAAGAEADQAFADAGADQAMAEAGAGQAGAFAAAKQAAAMgJAHQgIAHgPAAQgHAAgGgCg");
	this.shape_226.setTransform(466.7,68.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#373535").s().p("AgRArQgGgBgEgCIADgNIAJAFQAGABAHAAQAHAAAEgDQAFgEAAgFQgBgGgEgDQgDgFgIgCQgMgFgFgFQgGgGAAgIQAAgHAEgGQAEgGAGgDQAHgDAIgBQAHABAGABQAFABAEADIgFALIgGgDQgFgBgGAAQgHAAgDADQgEADAAAFQAAAGAEADQAEADAIADQALAEAGAGQAFAFAAAKQAAAMgIAHQgJAHgOAAQgHAAgHgCg");
	this.shape_227.setTransform(459.5,68.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLADIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_228.setTransform(451.5,68.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_229.setTransform(444.8,66.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#373535").s().p("AgRArQgGgBgFgCIAEgNIAJAFQAGABAHAAQAHAAAEgDQAFgEAAgFQAAgGgFgDQgDgFgIgCQgMgFgFgFQgGgGAAgIQAAgHAEgGQAEgGAGgDQAGgDAJgBQAHABAFABQAGABAEADIgEALIgHgDQgFgBgGAAQgGAAgEADQgEADAAAFQAAAGAEADQAEADAIADQALAEAGAGQAGAFgBAKQABAMgJAHQgJAHgOAAQgHAAgHgCg");
	this.shape_230.setTransform(435.3,68.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#373535").s().p("AgHA9IAAhWIAPAAIAABWgAgGgrQgCgDgBgEQABgEACgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_231.setTransform(429.7,66.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#373535").s().p("AAVBAIAAgyQAAgHgCgGQgCgFgEgDQgFgEgHAAQgHABgFAEQgGAFgCAFIgBADIAAAFIAAA0IgQAAIAAh/IAQAAIAAA2IAAAAIAFgFIAGgGIAIgDIAIgBIAJACQAGABAEAFQAFAEADAHQADAGAAALIAAA0g");
	this.shape_232.setTransform(422.6,66.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_233.setTransform(414.5,67.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#373535").s().p("AAvAsIAAgwQAAgMgFgIQgEgGgKAAQgHAAgFADQgFAFgCAGIgBAEIAAADIAAA1IgPAAIAAgzQABgKgFgHQgEgHgKABQgEAAgFACQgEACgCAEQgDADgBAEIgBAEIgBAEIAAAzIgPAAIAAg+IAAgMIgBgMIAPAAIAAAOIAAAAIAHgIQADgDAGgCQAEgCAIgBQAJAAAGAGQAGAEADAIIAAAAIAEgHIAGgEQADgDAFgCQAFgBAGgBQAGAAAGAEQAHADAFAIQAEAIAAAPIAAAyg");
	this.shape_234.setTransform(400.3,68.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#373535").s().p("AgWAoQgIgFgGgLQgFgKgBgOQABgNAFgKQAGgKAKgGQAJgFALgBQANABAJAFQAKAGAFAKQAGAKAAANQgBAPgGAKQgGALgLAFQgJAEgKAAQgMABgKgGgAgOgcQgGAFgDAIQgCAIgBAHQABAKADAHQADAIAGAEQAGAEAHAAQAIAAAFgEQAHgEACgIQAEgIABgJQAAgHgDgHQgDgIgFgGQgHgEgJAAQgIAAgGAEg");
	this.shape_235.setTransform(387.9,68.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#373535").s().p("AgUAsIAAg7IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJAAgFAFQgFAFgCAJIAAAEIAAAEIAAAtg");
	this.shape_236.setTransform(380.6,68.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#373535").s().p("AgPBBIAAhKIgMAAIAAgMIAMAAIAAgEQgBgKADgIQACgIAGgFQAEgEAFgCIALgCIAIABIAGACIgCAMIgFgCIgFAAQgIAAgDADQgEAEgBAGQgBAFAAAHIAAAFIAVAAIAAAMIgVAAIAABKg");
	this.shape_237.setTransform(375.1,66.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#373535").s().p("AgUAsIAAg7IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJAAgFAFQgFAFgCAJIAAAEIAAAEIAAAtg");
	this.shape_238.setTransform(365.7,68.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_239.setTransform(357.8,68.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#373535").s().p("AgNA9QgHgEgGgJIAAAAIgBAPIgNAAIAAgLIAAgMIAAhoIAQAAIAAA3QAFgHAHgFQAHgEAKAAQALAAAIAFQAIAGAFAKQAEAJABAOQAAAPgHALQgFAJgJAFQgJAGgKAAQgIAAgHgEgAgOgHQgGAFgEAIIAAADIAAADIAAAQIAAADIAAADQADAIAGAFQAGAGAJgBQAMAAAGgJQAIgJgBgPQAAgJgCgHQgDgHgGgEQgGgEgIgBQgIAAgGAGg");
	this.shape_240.setTransform(348.5,66.7);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#373535").s().p("AAvAsIAAgwQAAgMgEgIQgFgGgKAAQgGAAgFADQgGAFgBAGIgBAEIgBADIAAA1IgPAAIAAgzQAAgKgEgHQgEgHgKABQgEAAgEACQgEACgDAEQgDADgBAEIgBAEIAAAEIAAAzIgQAAIAAg+IAAgMIAAgMIANAAIABAOIABAAIAFgIQAEgDAFgCQAGgCAHgBQAJAAAGAGQAFAEADAIIABAAIAFgHIAEgEQAFgDAEgCQAFgBAGgBQAGAAAGAEQAHADAEAIQAGAIAAAPIAAAyg");
	this.shape_241.setTransform(335.6,68.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_242.setTransform(323.6,68.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#373535").s().p("AAvAsIAAgwQAAgMgEgIQgFgGgKAAQgHAAgFADQgEAFgDAGIgBAEIAAADIAAA1IgPAAIAAgzQABgKgFgHQgEgHgKABQgEAAgFACQgEACgCAEQgDADgBAEIgBAEIgBAEIAAAzIgPAAIAAg+IAAgMIgBgMIAPAAIAAAOIABAAIAGgIQADgDAGgCQAFgCAHgBQAJAAAGAGQAFAEAEAIIAAAAIAEgHIAGgEQAEgDAEgCQAFgBAGgBQAGAAAGAEQAHADAFAIQAEAIAAAPIAAAyg");
	this.shape_243.setTransform(311.6,68.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLADIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_244.setTransform(299.6,68.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#373535").s().p("AgUAsIAAg7IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJAAgFAFQgFAFgCAJIAAAEIAAAEIAAAtg");
	this.shape_245.setTransform(292.8,68.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#373535").s().p("AgVAoQgKgFgFgLQgGgKABgOQgBgNAGgKQAGgKAKgGQAJgFALgBQANABAKAFQAJAGAFAKQAFAKABANQgBAPgGAKQgHALgKAFQgJAEgKAAQgMABgJgGgAgOgcQgGAFgDAIQgDAIAAAHQAAAKAEAHQADAIAGAEQAGAEAHAAQAHAAAHgEQAGgEADgIQADgIAAgJQAAgHgCgHQgDgIgGgGQgGgEgJAAQgIAAgGAEg");
	this.shape_246.setTransform(280.6,68.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_247.setTransform(272.8,67.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#373535").s().p("AgUAqQgHgEgEgIQgFgIAAgQIAAgyIAQAAIAAAwQAAAMAEAHQAFAIAKABQAFgBAEgCQAEgCADgEQADgCACgEIABgEIAAgEIAAg1IAQAAIAAA/IAAANIAAAKIgOAAIgBgOIAAAAQgCAEgEADQgDAEgHADQgFACgHAAQgHAAgHgCg");
	this.shape_248.setTransform(261.1,68.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#373535").s().p("AgWAoQgJgFgFgLQgFgKAAgOQAAgNAFgKQAGgKAJgGQALgFALgBQAMABAJAFQAKAGAFAKQAGAKgBANQAAAPgGAKQgGALgKAFQgKAEgKAAQgMABgKgGgAgOgcQgGAFgDAIQgCAIAAAHQgBAKAEAHQADAIAGAEQAGAEAHAAQAIAAAFgEQAHgEACgIQAEgIABgJQgBgHgDgHQgCgIgGgGQgFgEgKAAQgIAAgGAEg");
	this.shape_249.setTransform(251.2,68.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#373535").s().p("AgjAyIAGgDIAIgFIAHgHQADgEADgHIABgBIABgCIgBgCIAAgDIghhPIARAAIATA0IADAJIACAHIABAAIACgHIADgKIARgzIARAAIgXA+IgLAZIgJARQgEAIgGAEQgFAFgGACIgIAEg");
	this.shape_250.setTransform(242.2,70.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#373535").s().p("AgUAsIAAg7IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJAAgFAFQgFAFgCAJIAAAEIAAAEIAAAtg");
	this.shape_251.setTransform(231.7,68.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#373535").s().p("AgWAoQgJgFgFgLQgFgKAAgOQAAgNAFgKQAGgKAJgGQALgFALgBQAMABAJAFQAKAGAFAKQAGAKgBANQAAAPgGAKQgGALgKAFQgKAEgKAAQgMABgKgGgAgOgcQgGAFgDAIQgCAIAAAHQgBAKAEAHQADAIAGAEQAGAEAHAAQAIAAAFgEQAHgEACgIQAEgIABgJQgBgHgDgHQgCgIgGgGQgFgEgKAAQgIAAgGAEg");
	this.shape_252.setTransform(223.3,68.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#373535").s().p("AgPBBIAAhKIgNAAIAAgMIANAAIAAgEQgBgKADgIQADgIAFgFQAFgEAEgCIALgCIAIABIAGACIgDAMIgEgCIgGAAQgGAAgEADQgEAEgBAGQgBAFAAAHIAAAFIAVAAIAAAMIgVAAIAABKg");
	this.shape_253.setTransform(216.5,66.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#373535").s().p("AgQArQgHgBgEgCIADgNIAJAFQAHABAFAAQAIAAAEgDQAFgEgBgFQAAgGgDgDQgEgFgIgCQgMgFgFgFQgGgGAAgIQAAgHADgGQAFgGAGgDQAGgDAJgBQAHABAGABQAFABAEADIgFALIgHgDQgEgBgGAAQgHAAgDADQgEADAAAFQAAAGAEADQAFADAGADQAMAEAGAGQAFAFABAKQgBAMgIAHQgJAHgOAAQgHAAgGgCg");
	this.shape_254.setTransform(206,68.7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#373535").s().p("AAvAsIAAgwQAAgMgEgIQgFgGgKAAQgHAAgEADQgFAFgDAGIgBAEIAAADIAAA1IgPAAIAAgzQABgKgFgHQgEgHgKABQgEAAgFACQgEACgCAEQgDADgBAEIgBAEIAAAEIAAAzIgQAAIAAg+IAAgMIgBgMIAPAAIAAAOIABAAIAFgIQAFgDAEgCQAGgCAHgBQAJAAAGAGQAFAEAEAIIAAAAIAEgHIAGgEQAEgDAEgCQAEgBAHgBQAGAAAGAEQAHADAEAIQAGAIgBAPIAAAyg");
	this.shape_255.setTransform(194.9,68.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#373535").s().p("AgUAsIAAg7IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJAAgFAFQgFAFgCAJIAAAEIAAAEIAAAtg");
	this.shape_256.setTransform(184.9,68.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMIgLADIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_257.setTransform(177,68.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#373535").s().p("AABA3QgDgBgDgEQgEgEgBgFIgBgNIAAgvIgOAAIAAgMIAOAAIAAgVIAOgEIAAAZIAXAAIAAAMIgXAAIAAAuQAAAIADAFQACAEAHAAIAFgBIAEAAIABAMIgGABIgIABQgGAAgEgCg");
	this.shape_258.setTransform(169.6,67.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#373535").s().p("AgjAyIAGgDIAIgFIAHgHQADgEADgHIABgBIABgCIgBgCIAAgDIghhPIARAAIATA0IAEAJIABAHIABAAIACgHIADgKIARgzIARAAIgXA+IgLAZIgJARQgEAIgGAEQgFAFgGACIgIAEg");
	this.shape_259.setTransform(158.6,70.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_260.setTransform(149.9,68.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#373535").s().p("AASBAIgegqIgIAJIAAAhIgPAAIAAh/IAPAAIAABQIAFgFIADgFIAZgdIATAAIghAjIAmAzg");
	this.shape_261.setTransform(141.9,66.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_262.setTransform(128.6,68.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#373535").s().p("AAvAsIAAgwQAAgMgEgIQgFgGgKAAQgHAAgEADQgFAFgDAGIgBAEIAAADIAAA1IgPAAIAAgzQABgKgFgHQgEgHgKABQgEAAgFACQgEACgCAEQgDADgBAEIgBAEIAAAEIAAAzIgQAAIAAg+IAAgMIgBgMIAPAAIAAAOIABAAIAFgIQAFgDAEgCQAGgCAHgBQAJAAAGAGQAFAEAEAIIAAAAIAEgHIAGgEQAEgDAEgCQAEgBAHgBQAGAAAGAEQAHADAEAIQAGAIgBAPIAAAyg");
	this.shape_263.setTransform(116.6,68.6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#373535").s().p("AgWAoQgIgFgGgLQgFgKAAgOQAAgNAFgKQAGgKAJgGQALgFALgBQAMABAJAFQAKAGAFAKQAGAKgBANQAAAPgGAKQgGALgKAFQgKAEgKAAQgMABgKgGgAgOgcQgGAFgDAIQgDAIABAHQgBAKAEAHQADAIAGAEQAGAEAHAAQAIAAAFgEQAHgEACgIQAEgIABgJQAAgHgEgHQgCgIgGgGQgFgEgKAAQgIAAgGAEg");
	this.shape_264.setTransform(104.2,68.7);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#373535").s().p("AgQArQgHgBgEgCIAEgNIAIAFQAGABAGAAQAIAAAEgDQAFgEgBgFQAAgGgDgDQgEgFgIgCQgLgFgHgFQgFgGAAgIQAAgHADgGQAFgGAGgDQAGgDAJgBQAHABAGABQAFABAEADIgFALIgHgDQgEgBgGAAQgGAAgEADQgEADAAAFQAAAGAEADQAFADAGADQAMAEAGAGQAFAFABAKQAAAMgJAHQgIAHgPAAQgHAAgGgCg");
	this.shape_265.setTransform(95.6,68.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_266.setTransform(83.8,68.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#373535").s().p("AgUAsIAAg7IAAgOIgBgNIAOAAIABARIAAAAQADgIAGgFQAGgGAIAAIADAAIACABIAAAPIgDAAIgCAAQgJAAgFAFQgFAFgCAJIAAAEIAAAEIAAAtg");
	this.shape_267.setTransform(77,68.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#373535").s().p("AgWAqQgGgEgDgFQgDgGAAgGQAAgRAOgGQANgJAYAAIAAgBQABgFgCgEQgBgFgEgDQgFgEgHAAQgHAAgFACQgGABgFADIgEgKQAGgDAHgDQAIgCAHAAQANABAHAFQAIAFACAIQADAIAAAJIAAAgIAAAKIACAKIgPAAIgBgKIgBAAQgDAFgHAEQgHADgIAAQgJAAgGgDgAABAAQgIACgFAEQgGAFAAAHQAAAJAEADQAFADAGAAQAHAAAGgDQAFgFACgGIABgDIAAgCIAAgOIgRAAg");
	this.shape_268.setTransform(69,68.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#373535").s().p("AAVArIgOgpIgEgNIgDgPIAAAAIgDAPIgFANIgOApIgOAAIgahWIAQAAIALArIAEAPIADANIAAAAIAEgNIAEgOIAOgsIANAAIANArIAEAPIAEANIAAAAIADgNIAEgPIAMgrIAQAAIgcBWg");
	this.shape_269.setTransform(54.5,68.7);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#373535").s().p("AgVAoQgKgFgFgLQgGgKABgOQgBgNAGgKQAGgKAKgGQAJgFALgBQANABAKAFQAJAGAFAKQAFAKABANQgBAPgGAKQgHALgKAFQgJAEgKAAQgMABgJgGgAgOgcQgGAFgDAIQgDAIAAAHQAAAKAEAHQADAIAGAEQAGAEAHAAQAHAAAHgEQAGgEADgIQADgIAAgJQAAgHgCgHQgDgIgGgGQgGgEgJAAQgIAAgGAEg");
	this.shape_270.setTransform(43,68.7);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#373535").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_271.setTransform(35.9,66.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#373535").s().p("AgSAoQgJgGgFgKQgFgKAAgNQAAgMAFgKQAEgLAKgGQAJgGALgBQALAAAHAFQAHAEAEAGQAEAHACAGQACAHgBAHIAAADIAAADIg8AAQAAALAEAGQAEAHAHADQAHADAHAAQAIAAAGgBIAKgEIACAMQgEACgHABIgSACQgMAAgKgFgAAXgIQAAgEgCgHQgBgFgFgFQgFgEgJAAQgHAAgFAEQgFAEgDAGIgDALIAtAAIAAAAg");
	this.shape_272.setTransform(29.3,68.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#373535").s().p("AgbA9IgKgBIAAh2IANgCIAQAAQAKAAAIACQAIACAGAEQAFAEACAFQADAFAAAIQAAAJgGAHQgFAGgKAEIAAABQAGABAGACQAGAFADAGQAEAGAAAJQAAAIgCAGQgDAGgFAEQgGAGgLADQgKADgOgBIgOAAgAgVAxIAFAAIAIABQAIgBAGgCQAHgCAEgFQAFgGAAgJQAAgHgEgFQgFgGgHgCQgGgCgIAAIgNAAgAgVgwIAAAnIAOAAQALAAAHgFQAHgGAAgJQAAgLgHgEQgHgEgMAAIgIAAIgFAAg");
	this.shape_273.setTransform(20.2,67);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#373535").s().p("AguB1QgRgEgMgIIAKggQAKAHAPAEQAPAGAQAAQAWAAALgKQALgKAAgOQABgPgLgKQgKgKgWgIQgfgLgPgQQgPgRgBgVQAAgSAKgQQAKgQASgJQARgIAZgBQARAAAPAFQAPADAJAHIgKAeQgHgFgMgEQgMgEgQAAQgSAAgKAJQgKAJAAANQAAAPALAIQAKAIAWAJQAeALAPAQQAQAQAAAZQAAAggXASQgXATgoABQgTAAgRgEg");
	this.shape_274.setTransform(205.9,36.7);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#373535").s().p("AB9B3IAAiDQAAghgMgTQgNgTgZAAQgSAAgNALQgOALgFAQIgDAKIgBALIAACPIgoAAIAAiKQAAgdgMgRQgMgSgYAAQgNAAgLAGQgLAGgHAKQgHAJgEALIgCAKIgBALIAACLIgpAAIAAipIgBghIgBgeIAlAAIACAmIABAAQAHgLAJgKQAKgJAOgHQAOgFATgBQAYABARAMQAQANAIAVIABAAQAFgKAHgHQAHgIAHgFQAKgIAMgEQANgFAQAAQAQAAASAJQARAIANAWQAMAWABAoIAACIg");
	this.shape_275.setTransform(176.3,36.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#373535").s().p("Ag4B3IAAifIAAgnIgBgiIAkAAIACAuIACAAQAIgXAQgOQASgNAVgBIAGABIAGABIAAAoIgHgCIgHAAQgXABgPAOQgOAPgEAYIgBAKIgBAKIAAB7g");
	this.shape_276.setTransform(149.6,36.4);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#373535").s().p("AgxBrQgZgPgOgaQgNgbAAgjQAAgiANgdQANgcAYgQQAZgRAhAAQAcAAASALQATALALARQAKAQAFAUQAFASgBAQIAAALIgBAIIiiAAQABAcALASQAKASASAJQASAHAVABQAWAAAPgEQAPgDAMgGIAHAfQgLAFgTAFQgUAEgbAAQgjAAgagOgAgfhOQgOALgHAPQgHAQgCAPIB7AAQAAgOgFgQQgFgQgMgLQgNgLgYAAQgUAAgOALg");
	this.shape_277.setTransform(128.4,36.7);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#373535").s().p("AgUCiIAAkfIhjAAIAAgkIDvAAIAAAkIhjAAIAAEfg");
	this.shape_278.setTransform(107.8,32.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#373535").s().p("AhfCGQAIgDAKgFQAJgFAKgIQAJgHAJgMQAKgMAIgQIACgGIABgEIgBgEIgCgHIhWjVIAuAAIAzCJIAIAYIAGAXIABAAIAHgWIAIgaIAuiIIAsAAIg/CmQgPAmgNAcQgMAcgMATQgMATgPAMQgPAOgOAGQgOAGgJABg");
	this.shape_279.setTransform(76.4,42);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#373535").s().p("AgxBrQgZgPgOgaQgNgbAAgjQAAgiANgdQANgcAYgQQAZgRAhAAQAcAAASALQATALALARQAKAQAFAUQAFASgBAQIAAALIgBAIIiiAAQABAcALASQAKASASAJQASAHAVABQAWAAAPgEQAPgDAMgGIAHAfQgLAFgTAFQgUAEgbAAQgjAAgagOgAgfhOQgOALgHAPQgHAQgCAPIB7AAQAAgOgFgQQgFgQgMgLQgNgLgYAAQgUAAgOALg");
	this.shape_280.setTransform(53.1,36.7);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#373535").s().p("ABBCiIhqifIgeAjIAAB8IgqAAIAAlDIAqAAIAACcIABAAIANgSIAMgQIBih6IA0AAIh0CKIB9C5g");
	this.shape_281.setTransform(30.1,32.1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#009900").s().p("Ag8CeQgXgPgNgaQgNgbAAgiQABgoAOgbQANgbAYgPQAYgPAdAAQAZAAARAKQATALAHAOIABAAIAAiLIAqAAIAAEYIABAgIABAcIgmAAIgBgoIgBAAQgKATgVANQgTANgdAAQgbAAgXgPgAgigXQgQALgHATQgJAVAAAZQAAAYAIATQAHAUAPAMQAQALAVAAQAWAAASgNQAQgNAGgYIACgJIAAgKIAAgoIAAgIIgCgJQgEgUgQgOQgQgOgZgBQgUABgQAMg");
	this.shape_282.setTransform(740,31.5);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#009900").s().p("AgxBrQgZgPgOgaQgNgbAAgjQAAgiANgdQANgcAYgQQAZgRAhAAQAcAAASALQATALALARQAKAQAFAUQAFASgBAQIAAALIgBAIIiiAAQABAcALASQAKASASAJQASAHAVABQAWAAAPgEQAPgDAMgGIAHAfQgLAFgTAFQgUAEgbAAQgjAAgagOgAgfhOQgOALgHAPQgHAQgCAPIB7AAQAAgOgFgQQgFgQgMgLQgNgLgYAAQgUAAgOALg");
	this.shape_283.setTransform(715.2,36.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#009900").s().p("AA5CrIAAiGQAAgTgFgPQgGgPgLgJQgMgJgUgBQgUABgOAMQgPALgHASIgCAJIAAAKIAACNIgrAAIAAlUIArAAIAACRIABAAQAFgJAHgIQAIgHAKgGQAJgFALgDQAKgEAMAAQAMAAAOAFQAOAEAMALQANALAIATQAIATAAAdIAACLg");
	this.shape_284.setTransform(689.8,31.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#009900").s().p("AguB1QgRgEgMgIIALggQAJAHAPAEQAPAGAQAAQAWAAALgKQALgKAAgOQAAgPgKgKQgKgKgWgIQgfgLgQgQQgPgRAAgVQAAgSAKgQQAKgQASgJQARgIAYgBQATAAAOAFQAPADAKAHIgLAeQgHgFgMgEQgMgEgQAAQgSAAgKAJQgKAJAAANQAAAPAKAIQAMAIAVAJQAeALAQAQQAPAQAAAZQAAAggXASQgWATgpABQgTAAgRgEg");
	this.shape_285.setTransform(667,36.7);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#009900").s().p("AgUCiIAAjoIApAAIAADogAgSh0QgHgIAAgLQAAgLAHgHQAHgHALgBQAMABAHAHQAHAHAAALQAAALgHAIQgHAHgMAAQgLAAgHgHg");
	this.shape_286.setTransform(651.8,32.1);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#009900").s().p("AA6B3IAAiFQAAgTgGgPQgFgQgMgJQgLgJgUgBQgUABgPAMQgPANgGASIgCAJIgBAKIAACLIgqAAIAAipIgBghIgBgeIAlAAIADAnIABAAQAGgLAKgKQALgKAPgGQAPgGASgBQANAAAOAFQAPAEALALQAOALAHATQAJATgBAeIAACKg");
	this.shape_287.setTransform(632.9,36.4);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#009900").s().p("AgUCiIAAjoIApAAIAADogAgSh0QgHgIAAgLQAAgLAHgHQAHgHALgBQAMABAHAHQAHAHAAALQAAALgHAIQgHAHgMAAQgLAAgHgHg");
	this.shape_288.setTransform(613.9,32.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#009900").s().p("AhWCiIAAlDICtAAIAAAjIiDAAIAABsIB5AAIAAAhIh5AAIAACTg");
	this.shape_289.setTransform(598.5,32.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]}).to({state:[{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282}]},759).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(399.6,250.6,800,547.3);
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