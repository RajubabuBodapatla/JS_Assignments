// Day3
// Task-1
function fib(a,b,n){
    var a;
    var b;
    var sum;
    for(var i=1;i<=n;i++){
        sum=a+b;
        console.log(a)
        a=b;
        b=sum;
    }
    return a;
} 
console.log(fib(0,1,10))



// Prime Number with Function


function prime(num)
{
     var num;
     var a=0;
    for(i=2;i<num;i++){
     if(num%i==0){
        a++;
        console.log("it is not a prime")
        break;
    }
}
if(a==0){
    console.log("num is a prime")
}
}
prime(123)


// String Palindrome


var a="manam";
temp=a;
l=a.length;
b=(l-1);
str="";
for(b;b>=0;b--){
    var rev=a[b];
    str+=rev
}
console.log(str)
if(temp==str){
    console.log("The word is a palindrome")
}
else{
    console.log("The word is not a Palindrome")
}


// Num Palindrome


var a=1224;
var c=0;
var t=a;
while(a>0){
    b=a%10;
    c=10*c+b;
    a=parseInt(a/10);
}
console.log(c);
 if(c==t){
    console.log("The  number is a palindrome")
 }
 else{
    console.log("the number is not a palindrome")
 }

// 5.Factorial 

var a = 6;
var c=1;
for(i=a;i>0;i--){
   c=c*i;
}
console.log(c)


// 7.sqaure and square root

function sqrt(a){
var a;
sqr=a*a;
console.log(sqr);
var bo=0;
for(i=1;i<a;i++){
    if(i*i==a){
        bo++
        console.log(i)
    } 
}
   if(bo==0){
    console.log("its not a perfect square")
}
}
sqrt(5)


// 6.lcd and gcm

var a=3;
var b=4;
var c;
var d;
for(i=1;i<10;i++){
   c=a*i;
   d=b*i;
   if(c==d){
    console.log(c)
}
}
var n1=9,n2=3;
var max=(n1>n2)?n1:n2;
var lcm=max;
while(true){
    if(lcm%n1==0 && lcm%n2==0){ 
        break;
    }
    lcm++;
}
console.log(lcm)





var n1=10;n2=12;
var lt=(n1<n2)?n1:n2;
var gcf=0;
for(i=1;i<=lt;i++){
    if(n1%i==0 && n2%i==0){
       gcf=i;
    }
}
console.log(gcf)


// diff btw sum of even numbers and sum of odd numbers
 sume=0;
 sumo=0;
 for(i=1;i<=100;i++){ 
    if(i%2==0){
        sume=sume+i;
    }
    else{
        sumo=sumo+i;
  }
 }
console.log(sume)
console.log(sumo)
if(sume>sumo){
    console.log(sume-sumo)
}
else{
    console.log(sumo-sume)
}



for(i=1;!(i>=100);i++){
    console.log(i);  
}
console.log(i++)


for(i=0;i<=100;i++){
    i++;
    console.log(i)
}



