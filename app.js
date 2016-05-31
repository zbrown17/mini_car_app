function Car(year, make, model, color) {
	this.year = year;
  this.make = make;
  this.model = model;
  this.color = color
  this.ad = function() {
  	console.log("This is a "+ this.year + " " + this.make + " " + this.model + " in " + this.color + ".")
  }
}

var jetta = new Car ('2001','volkswaggon','jetta','white');
	jetta.ad();
var oldBlue = new Car ('1888','buick','regal','old blue');
	oldBlue.ad();
var tesla = new Car ('2015','Tesla', 'Model S','black');
	tesla.ad();
  
console.log(tesla);