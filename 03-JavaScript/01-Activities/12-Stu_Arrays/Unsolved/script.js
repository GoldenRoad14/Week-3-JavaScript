// WRITE YOUR CODE HERE
// var names = ["Billy","James","Jimmy","Darcy"];

// console.log("Welcome to the class " + names[0]);


var names = ["Billy","James","Jimmy","Darcy"];
console.log(names.length);
console.log("Welcome to the class " + names[0]);
console.log("Welcome to the class " + names[1]);
console.log("Welcome to the class " + names[2]);
console.log("Welcome to the class " + names[3]);

names[0] = "Bob";

if(names[0] === "Bob") {
    console.log(names[0] + " is in class!");
}