function search(func){
	var result = this.map(function(item){

		if (Array.isArray(item)){
			return search.call(item, func);
		}else{
			return func(item);
		}
	})

	if (result.findIndex(function(item) {return item == true}) > -1){
		return true;
	}
	return false;		
}