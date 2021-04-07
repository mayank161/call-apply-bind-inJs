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


// currying in js
// means copy of function into another function or variable without affecting the original function

// we can curry our function by two ways first is binding and second is closures 
// curry by bind

let multiple = function(x,y) {
    console.log('after currying by bind method answer is',x*y);
}

let mulByBind = multiple.bind(this,2); // now it takes 2 as x inside the variable
mulByBind(3)// now takes 3 as y if pass another argument then it will take first two only

// curry by closures

let mulClosure = function(x) {
    return function(y) {
        console.log('after currying by closures answer is',x*y);
    }
}

let mulByClo = mulClosure(2); // takes 2 as x n mulByClo
mulByClo(3); // 3 as y