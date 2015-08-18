// random numnber generator

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

randomNumber(0,1);



// create fruit object

function Fruit(type, cost){

	this.type = type;
	this.cost = cost;
};

// fruit price increment/decrement function

function fruitPrice(fruit){ //fruit price change function

	var crement = randomNumber(0,1);

	//console.log(fruit.type + ": "+ fruit.cost);

	if (crement == 0){
		 fruit.cost += 0.5
	}
	else{
		fruit.cost -= 0.5
	}

	if(fruit.cost > 9.99){
		fruit.cost = 9.99;
	}
	else if(fruit.cost < 0.5) {
		fruit.cost = 0.5;
	}

	return fruit.cost;

}

var marketApple = new Fruit("apple", 10.77);
var marketOrange = new Fruit("orange",5.55);
var marketPear = new Fruit("pear", 2.23);
var marketBanana = new Fruit("banana", 1.35);

fruitPrice(marketApple);
fruitPrice(marketOrange);
fruitPrice(marketPear);
fruitPrice(marketBanana);

setInterval(fruitPrice,15000,marketApple);
setInterval(fruitPrice,15000,marketOrange);
setInterval(fruitPrice,15000,marketPear);
setInterval(fruitPrice,15000,marketBanana);

// create customer object

var Customer = function(totalCash, idNum, fruitArr){
	var customer = {};
	customer.totalCash = totalCash;
	customer.idNum = idNum;
	customer.fruit = fruitArr;

	return customer;

};

customer = new Customer(100,'0001',[]);
//console.log(customer1);

$(document).ready(function(){

	$('#BuyBanana').on('click', function(){		
		
		customer.fruit.push(marketBanana);
		customer.totalCash -= marketBanana.cost;
		customer.totalCash = +(customer.totalCash.toFixed(2));	
		console.log(customer.totalCash, marketBanana.cost);	

	});

	$('#BuyOrange').on('click', function(){		
		
		customer.fruit.push(marketOrange);
		customer.totalCash -= marketOrange.cost;
		customer.totalCash = +(customer.totalCash.toFixed(2));	
		console.log(customer.totalCash, marketOrange.cost);		

	});

	$('#BuyPear').on('click', function(){		
		
		customer.fruit.push(marketPear);
		customer.totalCash -= marketPear.cost;
		customer.totalCash = +(customer.totalCash.toFixed(2));	
		console.log(customer.totalCash, marketPear.cost);		

	});

	$('#BuyApple').on('click', function(){		
		
		customer.fruit.push(marketApple);
		customer.totalCash -= marketApple.cost;
		customer.totalCash = +(customer.totalCash.toFixed(2));	
		console.log(customer.totalCash, marketApple.cost);		

	});

});


