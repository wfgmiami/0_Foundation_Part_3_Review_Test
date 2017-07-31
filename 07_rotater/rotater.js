function rotater(str){
	var flip = 0;
	
	return function(num){
		if (num == str.length)
			flip++;
		if(flip % 2){
			return str.substring(str.length - num) + str.substring(str.length - num,0);
		}else{
			return str.substring(num, str.length) + str.substring(num,0);
		}
	}
}