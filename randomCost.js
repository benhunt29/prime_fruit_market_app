function randomPrice (){
	var randomDollars= Math.floor(Math.random()*10);
	var randomCents= Math.floor(Math.random()*100);
	var randomMonies= parseFloat(randomDollars + '.' + randomCents);
	var result= Math.round((10-randomMonies)*100)/100;
	
	if (result < 0.5){
		var cost = 0.50;
	}
	else if (result > 9.99){
		var cost = 9.99;
	}
	else{
		var cost = result;
	}

	return cost;
}