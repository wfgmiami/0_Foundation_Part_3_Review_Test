function sometimes(func){
	var cnt = 0;

	return function(){
		if (cnt < 3){
			cnt++;
			return func.apply(null, arguments);
		}else{
			if (cnt % 2){
				cnt++;
				return "I do not know!";
			}else{
				cnt++;
				return func.apply(null, arguments);
			}
			
		}
		
	}
}