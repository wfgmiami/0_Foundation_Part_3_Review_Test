function MyEventEmitter(){
	this.events = {};
	this.arr = [];
}

MyEventEmitter.prototype.addListener = function(evt, callBack){
	this.arr.push(callBack);
	this.events[evt] = this.arr;
}

MyEventEmitter.prototype.emit = function(){
	var event = arguments[0];

	for (var i = 0; i < this.arr.length; i++){
		this.events[event][i].apply(null,arguments[i + 1]);
	}
	
}