function filter(arr, func){

	var result = [];
	arr.forEach(function(item){
		if (func(item)){
			result.push(item);
		}
	})
	return result;
}