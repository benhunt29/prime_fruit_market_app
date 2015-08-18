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

	if (fruit.type == 'banana'){
		$('#BananaPrice').text(marketBanana.cost);
	}
	else if (fruit.type == 'apple'){
		$('#ApplePrice').text(marketApple.cost);
	}
	else if (fruit.type == 'pear'){
		$('#PearPrice').text(marketPear.cost);
	}
	else{
		$('#OrangePrice').text(marketOrange.cost);
	};

	return fruit.cost;

}

// function for updating inventory

function updateInventory(fruitArray, fruitType){
var count = 0;
	fruitArray.forEach(function(item){
			if (item.type == fruitType){
				count ++;
}
	})

	return count;

	
}


// creating fruit objects from fruit constructor
var marketApple = new Fruit("apple", 10.77);
var marketOrange = new Fruit("orange",5.55);
var marketPear = new Fruit("pear", 2.23);
var marketBanana = new Fruit("banana", 1.35);

//targeting the class of inventory and amount of money in jQuery
var $appleNum = $('.appleNum');
var $bananaNum = $('.bananaNum');
var $pearNum = $('.pearNum');
var $oranageNum = $('.orangeNum');
var $walletNum = $('.walletNum');

//IDs in html file
var $ApplePrice = $('#ApplePrice');
var $BananaPrice = $('#BananaPrice');
var $PearPrice = $('#PearPrice');
var $OrangePrice = $('#OrangePrice');



//calling the fruit price function on each fruit object

// fruitPrice(marketApple);
// fruitPrice(marketOrange);
// fruitPrice(marketPear);
// fruitPrice(marketBanana);


//calls fruit price function every 15 seconds for each fruit
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


//all the click event functions for the Buy and Sell buttons
$(document).ready(function(){

	$('#BuyBanana').on('click', function(){		
		
		customer.fruit.push(marketBanana);
		customer.totalCash -= marketBanana.cost;
		customer.totalCash = +(customer.totalCash.toFixed(2));	
		$('#BananaPrice').text(marketBanana.cost);
		$('.walletNum').text(customer.totalCash);
		var bananaCount = updateInventory(customer.fruit, "banana");
		$('.bananaNum').text(bananaCount);

	});

	$('#BuyOrange').on('click', function(){		
		
		customer.fruit.push(marketOrange);
		customer.totalCash -= marketOrange.cost;
		customer.totalCash = +(customer.totalCash.toFixed(2));	
		$('#OrangePrice').text(marketOrange.cost);
		$('.walletNum').text(customer.totalCash);	
		var orangeCount = updateInventory(customer.fruit, "orange");
		$('.orangeNum').text(orangeCount);
	});

	$('#BuyPear').on('click', function(){		
		
		customer.fruit.push(marketPear);
		customer.totalCash -= marketPear.cost;
		customer.totalCash = +(customer.totalCash.toFixed(2));	
		$('#PearPrice').text(marketPear.cost);
		$('.walletNum').text(customer.totalCash);
		var pearCount = updateInventory(customer.fruit, "pear");
		$('.pearNum').text(pearCount);		

	});

	$('#BuyApple').on('click', function(){		
		
		customer.fruit.push(marketApple);
		customer.totalCash -= marketApple.cost;
		customer.totalCash = +(customer.totalCash.toFixed(2));	
		$('#ApplePrice').text(marketApple.cost);
		$('.walletNum').text(customer.totalCash);
		var appleCount = updateInventory(customer.fruit, "apple");	
		$('.appleNum').text(appleCount);
	});

});


