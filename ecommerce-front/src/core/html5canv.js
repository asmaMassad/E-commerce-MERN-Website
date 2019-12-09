(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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


(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6666").ss(1,1,1).p("AI1AAQAADqilCmQimCljqAAQjpAAimilQilimAAjqQAAjpClimQCmilDpAAQDqAACmClQClCmAADpg");
	this.shape.setTransform(56.5,56.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003C07").s().p("AmOGQQimimAAjqQAAjpCmilQClimDpAAQDqAACmCmQClClAADpQAADqilCmQimCljqAAQjpAAililg");
	this.shape_1.setTransform(56.5,56.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball, new cjs.Rectangle(-1,-1,115,115), null);


// stage content:
(lib.html5canv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.ball = new lib.ball();
	this.ball.name = "ball";
	this.ball.parent = this;
	this.ball.setTransform(145.6,161.5,1,1,0,0,0,56.5,56.5);

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1).to({x:157,y:164.5},0).wait(1).to({x:168.4,y:167.5},0).wait(1).to({x:179.8,y:170.5},0).wait(1).to({x:191.3,y:173.5},0).wait(1).to({x:202.7,y:176.5},0).wait(1).to({x:214.1,y:179.5},0).wait(1).to({x:225.6,y:182.5},0).wait(1).to({x:237,y:185.5},0).wait(1).to({x:248.4,y:188.5},0).wait(1).to({x:259.9,y:191.5},0).wait(1).to({x:271.3,y:194.5},0).wait(1).to({x:282.7,y:197.5},0).wait(1).to({x:294.2,y:200.5},0).wait(1).to({x:305.6,y:203.5},0).wait(1).to({x:317,y:206.5},0).wait(1).to({x:328.5,y:209.5},0).wait(1).to({x:339.9,y:212.5},0).wait(1).to({x:351.3,y:215.5},0).wait(1).to({x:362.8,y:218.5},0).wait(1).to({x:374.2,y:221.5},0).wait(1).to({x:385.6,y:224.5},0).wait(1).to({x:397.1,y:227.5},0).wait(1).to({x:408.5,y:230.5},0).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6666").ss(1,1,1).p("EhTpgf0MCnSAAAMAAAA/pMinSAAAg");
	this.shape.setTransform(466.6,203.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9933").s().p("EhToAf0MAAAg/nMCnRAAAMAAAA/ng");
	this.shape_1.setTransform(466.6,203.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(430.2,248.8,1072.7,409.3);
// library properties:
lib.properties = {
	id: '92623A45E504B344A2FF33F29B101B49',
	width: 1000,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['92623A45E504B344A2FF33F29B101B49'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;