<<<<<<< HEAD
function Fruit(type, cost){

	this.type = type;
	this.cost = function (cost){
		if(cost > 9.99){
			this.cost = 9.99;}
		else if(cost < 0.5) {
			this.cost = 0.5;
		}
		else {
			this.cost = cost:
		}

};
=======
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

function fruitPrice(fruit){

	var crement = randomNumber(0,1);

	console.log(fruit.type + ": "+ fruit.cost);

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

var apple = new Fruit("apple", 10.77);
var orange = new Fruit("orange",5.55);
var pear = new Fruit("pear", 2.23);
var banana = new Fruit("banana", 1.35);

fruitPrice(apple);
fruitPrice(orange);
fruitPrice(pear);
fruitPrice(banana);

setInterval(fruitPrice,15000,apple);
setInterval(fruitPrice,15000,orange);
setInterval(fruitPrice,15000,pear);
setInterval(fruitPrice,15000,banana);

// create customer object

var Customer = function(totalCash, idNum, fruitArr){
	var customer = {};
	customer.totalCash = totalCash;
	customer.idNum = idNum;
	customer.fruit = fruitArr;

	return customer;

};

customer1 = new Customer(100,'0001',[]);
console.log(customer1);
>>>>>>> 2512207e1be01c7ae8910c8b50c88e6bf47b4eb7
