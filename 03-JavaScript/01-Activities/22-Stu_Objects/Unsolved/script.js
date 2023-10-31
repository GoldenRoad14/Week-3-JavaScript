//WRITE YOUR CODE BELOW
var customerDrink = {
    name: "Matt",
    sugars: "0",
    ready: true
};

console.log(customerDrink);

if (customerDrink.ready){
    console.log(customerDrink.name + " your order with " + customerDrink.sugars + " sugars is ready.");
} else{
        console.log("Still in order queue.");
}
