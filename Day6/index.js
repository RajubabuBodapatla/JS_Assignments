// tostring
var a=970;
console.log(a.toString());
console.log(typeof a.toString());

//toexponential
var a=970;
console.log(a.toExponential());
console.log(typeof a.toExponential());

// tofixed
var a=970.363;
console.log(a.toFixed(4));
console.log(typeof a.toFixed(1));//It will roudoff to the give number decimals

//tprecision
var a=970.363;
console.log(a.toPrecision(2));
console.log(typeof a.toPrecision());//number will be as given length

//valueof
var a=970.363;
console.log(a.valueOf(0));
console.log(typeof a.valueOf());



x="10.77"
x=parseFloat(x)
console.log(typeof x);
console.log(Number.isInteger(x));

// Epsilon

var x="carrot";
console.log(x.charAt(1));
a=4;
b=a>>2;
console.log(b);
