// random numnber generator

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
randomNumber(0,10s)

// create customer object

var customer = function(totalCash, idNum, fruitArr){
	var customer = {};
	customer.totalCash = totalCash;
	customer.idNum = idNum;
	customer.fruit = fruitArr;

	return customer;

};

// create fruit object

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
