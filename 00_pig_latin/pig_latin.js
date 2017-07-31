function translate(wrd){
	var vowels = ["a", "o", "e", "i", "u", "y"];
	var str = "ay";

	if (wrd.split(" ").length > 1){

		var wrd = wrd.split(" ");
		var result = [];

		wrd.forEach(function(elem){
			var first = elem[0];

			if (vowels.findIndex(function(item) { return item == first}) > -1){
				elem += str;
				result.push(elem);
			}else{

				var conso = "";
			
				while (vowels.findIndex(function(item){ return item == elem[0] }) == -1){
					conso += elem[0];
					elem = elem.substring(1, elem.length);
				}

				
				if (conso[conso.length] = "q" && elem[0] == "u"){
					conso += elem[0];
					elem = elem.substring(1, elem.length);
				}

				elem += conso + str;
				result.push(elem);
			}

		})

	}else{
	
		if (vowels.findIndex(function(item){ return item == wrd[0]}) > -1){
			return wrd += str;
		}else{
			var conso = "";
			
			while (vowels.findIndex(function(item){ return item == wrd[0] }) == -1){
				conso += wrd[0];
				wrd = wrd.substring(1, wrd.length);
			}

			if (conso[conso.length] = "q" && wrd[0] == "u"){
					conso += wrd[0];
					wrd = wrd.substring(1, wrd.length);
			}

			return wrd += conso + str;
		}
	}	

	return result.reduce(function(whole, part) { return whole + " " + part });

}
