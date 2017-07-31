function difference(arr1, arr2){
	var result = [];
	
	result = arr1.filter(function(item, index){
		if (arr2.findIndex(function(elem) { return elem == item }) == -1){
			if (typeof item === "string")
				return item;
			return index + 1;
		}
		
	})

	return result;
}

function symmetricDiff(arr1, arr2){
	var first = difference(arr1, arr2);
	var second = difference(arr2, arr1);
	return first.concat(second);
}
