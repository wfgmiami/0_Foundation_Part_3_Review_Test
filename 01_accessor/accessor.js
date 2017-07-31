function accessor(obj){

	return function(key){

		if (arguments.length > 1){
			return obj[key] = arguments[1];

		}else{
			return obj[key];
		}
	}
}

