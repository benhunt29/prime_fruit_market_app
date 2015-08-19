// random numnber generator
function sellAll(fruitArr){
	
	if(fruitArr.length >= 1){
		var amountMade = 0;
		fruitArr.forEach(function(item,index){
			console.log("inforeach");
			amountMade += item.cost;
		});
		customer.totalCash += amountMade;
		customer.totalCash = +(customer.totalCash.toFixed(2));
		customer.fruit = [];
		$('.bananaNum').text(0);
		$('.appleNum').text(0);
		$('.pearNum').text(0);
		$('.orangeNum').text(0);
		$('.walletNum').text(customer.totalCash);
		customer.avgBananaPrice = 0;
		customer.avgApplePrice = 0;
		customer.avgPearPrice = 0;
		customer.avgOrangePrice = 0;
	}
	//alert("Market Reset! All fruits have been sold at current market values!");
}
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
// create fruit object

function Fruit(type, cost){

	this.type = type;
	this.cost = cost;
};

// fruit price increment/decrement function

function fruitPrice(fruit){ //fruit price change function
	
	var crement = randomNumber(0,1);

	if (crement == 0){
		 fruit.cost += 0.5
	}
	else{
		fruit.cost -= 0.50
	}

	if(fruit.cost > 9.99){
		fruit.cost = 9.99;
	}
	else if(fruit.cost < 0.5) {
		fruit.cost = 0.5;
	}
		

	fruit.cost = +(fruit.cost.toFixed(2));
	if (fruit.type == 'banana'){
		$('#BananaPrice').text("$"+marketBanana.cost);
	}
	else if (fruit.type == 'apple'){
		$('#ApplePrice').text("$"+marketApple.cost);
	}
	else if (fruit.type == 'pear'){
		$('#PearPrice').text("$"+marketPear.cost);
	}
	else{
		$('#OrangePrice').text("$"+marketOrange.cost);
	};

	return fruit.cost;

}

// function for updating inventory

function updateInventory(fruitArray, fruitType){
var count = 0;
var totalCost = 0;
console.log(fruitType);
	fruitArray.forEach(function(item){
			console.log(item.type);
			if (item.type == fruitType){
				
				count ++;
				totalCost += item.cost;
			}
	});
	if (fruitType == 'banana'){
		customer.avgBananaPrice = totalCost/count;
		//$('#AvgBananaPrice') = customer.avgBananaPrice;
	}
	else if (fruitType == 'apple'){
		customer.avgApplePrice = totalCost/count;
		//$('#AvgApplePrice') = customer.avgApplePrice;
	}
	else if (fruitType == 'pear'){
		customer.avgPearPrice = totalCost/count;
		//$('#AvgPearPrice') = customer.avgPearPrice;
	}
	else {
		customer.avgOrangePrice = totalCost/count;
		//$('#AvgOrangePrice') = customer.avgOrangePrice;
	}

	return count;
}


// creating fruit objects from fruit constructor
var marketApple = new Fruit("apple", 9.77);
var marketOrange = new Fruit("orange",5.55);
var marketPear = new Fruit("pear", 2.23);
var marketBanana = new Fruit("banana", 1.35);

//targeting the class of inventory and amount of money in jQuery
var $appleNum = $('.appleNum');
var $bananaNum = $('.bananaNum');
var $pearNum = $('.pearNum');
var $oranageNum = $('.orangeNum');
var $walletNum = $('.walletNum');


var Customer = function(totalCash, idNum, fruitArr){
	var customer = {};
	customer.avgBananaPrice = 0;
	customer.avgOrangePrice = 0;
	customer.avgPearPrice = 0;
	customer.avgApplePrice = 0;
	customer.totalCash = totalCash;
	customer.idNum = idNum;
	customer.fruit = fruitArr;

	return customer;

};

customer = new Customer(100,'0001',[]);


//all the click event functions for the Buy and Sell buttons
$(document).ready(function(){
	setInterval(sellAll,10000,customer.fruit);
	$('.walletNum').text(customer.totalCash);

	fruitPrice(marketApple);
	setInterval(fruitPrice,15000,marketApple);
	fruitPrice(marketOrange);
	setInterval(fruitPrice,15000,marketOrange);
	fruitPrice(marketPear);
	setInterval(fruitPrice,15000,marketPear);
	fruitPrice(marketBanana);
	setInterval(fruitPrice,15000,marketBanana);

	$('#BuyBanana').on('click', function(){		
		customer.fruit.push(new Fruit('banana',marketBanana.cost));	
		$('#BananaPrice').text("$"+marketBanana.cost);
		if((customer.totalCash - marketBanana.cost) < 0){
			alert("You don't have enough money!");
		}else{
			customer.totalCash -= marketBanana.cost;
			customer.totalCash = +(customer.totalCash.toFixed(2));
			$('.walletNum').text(customer.totalCash);
		}
		var bananaCount = updateInventory(customer.fruit, "banana");
		console.log(bananaCount);
		$('.bananaNum').text(bananaCount);

	});

	$('#BuyOrange').on('click', function(){		
		customer.fruit.push(new Fruit('orange',marketOrange.cost));
		$('#OrangePrice').text("$"+marketOrange.cost);
		if((customer.totalCash - marketOrange.cost) < 0){
			alert("You don't have enough money!");
		}else{
			customer.totalCash -= marketOrange.cost;
			customer.totalCash = +(customer.totalCash.toFixed(2));
			$('.walletNum').text(customer.totalCash);	
		}	
		var orangeCount = updateInventory(customer.fruit, "orange");
		$('.orangeNum').text(orangeCount);
	});

	$('#BuyPear').on('click', function(){

		customer.fruit.push(new Fruit('pear',marketPear.cost));	
		$('#PearPrice').text("$"+marketPear.cost);
		if((customer.totalCash - marketPear.cost) < 0){
			alert("You don't have enough money!");
		}else{
			customer.totalCash -= marketPear.cost;
			customer.totalCash = +(customer.totalCash.toFixed(2));
			$('.walletNum').text(customer.totalCash);
		}
		var pearCount = updateInventory(customer.fruit, "pear");
		$('.pearNum').text(pearCount);		

	});

	$('#BuyApple').on('click', function(){		
		customer.fruit.push(new Fruit('apple',marketApple.cost));	
		$('#ApplePrice').text("$"+marketApple.cost);
		if((customer.totalCash - marketApple.cost) < 0){
			alert("You don't have enough money!");
		}else{
			customer.totalCash -= marketApple.cost;
			customer.totalCash = +(customer.totalCash.toFixed(2));
			$('.walletNum').text(customer.totalCash);
		}
		var appleCount = updateInventory(customer.fruit, "apple");	
		$('.appleNum').text(appleCount);

	});

	$('#SellApple').on('click', function(){
		var count=0;
		customer.fruit.forEach(function(item, index, fruitArr){
				if(item.type == "apple"){
					count++;
					fruitArr.splice(index, 1);
					customer.totalCash += marketApple.cost;
					customer.totalCash = +(customer.totalCash.toFixed(2));
					$('.walletNum').text(customer.totalCash);
					var appleCount = updateInventory(customer.fruit, "apple");	
					$('.appleNum').text(appleCount);

				}
		});
		if(count == 0){
			alert("Can't sell what you don't have!");
		}
	});

	$('#SellBanana').on('click', function(){
		var count=0;
		customer.fruit.forEach(function(item, index, fruitArr){
				if(item.type == "banana"){
					count++;
					fruitArr.splice(index, 1);
					customer.totalCash += marketBanana.cost;
					customer.totalCash = +(customer.totalCash.toFixed(2));
					$('.walletNum').text(customer.totalCash);
					var bananaCount = updateInventory(customer.fruit, "banana");	
					$('.bananaNum').text(bananaCount);
				}
		});
		if(count == 0){
			alert("Can't sell what you don't have!");
		}

	});

		$('#SellPear').on('click', function(){
		var count=0;
		customer.fruit.forEach(function(item, index, fruitArr){
				if(item.type == "pear"){
					count++;
					fruitArr.splice(index, 1);
					customer.totalCash += marketPear.cost;
					customer.totalCash = +(customer.totalCash.toFixed(2));
					$('.walletNum').text(customer.totalCash);
					var pearCount = updateInventory(customer.fruit, "pear");	
					$('.pearNum').text(pearCount);

				}

		});
		if(count == 0){
			alert("Can't sell what you don't have!");
		}

	});

		$('#SellOrange').on('click', function(){
		var count=0;
		customer.fruit.forEach(function(item, index, fruitArr){
				if(item.type == "orange"){
					count++;
					fruitArr.splice(index, 1);
					customer.totalCash += marketOrange.cost;
					customer.totalCash = +(customer.totalCash.toFixed(2));
					$('.walletNum').text(customer.totalCash);
					var orangeCount = updateInventory(customer.fruit, "orange");	
					$('.orangeNum').text(orangeCount);
				}
		});
		if(count == 0){
			alert("Can't sell what you don't have!");
		}

	});



})


