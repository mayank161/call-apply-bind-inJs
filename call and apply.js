// difference between call and apply

// call function

var obj = {num: 2}

var add = function(a) {
    return this.num + a; // num work when we call obj as call reference
}

console.log(add.call(obj,3)); // we can use call method to combine an object with passing argument

// apply function if we have multiple argument in function then we can use apply and can pass all argument in form of array

var sum = function(a,b,c) {
    return this.num + a+b+c;
}
var arr = [1,2,3,6]; // if you pass more then expected argument then first three will counted

console.log(sum.apply(obj,arr)) // .apply can pass array contains multiple argument

// use of bind
// so by bind you can  bind a object to function for later use

var bound = sum.bind(obj); //it will bind an object with sum and save i bound
console.log(bound(5,6,7)); // here after creating bind we are passing value in bound
