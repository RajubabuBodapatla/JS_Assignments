for (var i=0 ; i<200 ; i++){
   if(i % 2 ==0) (
    console.log(i)
   )
}


 var i=0;
 while(i<200){
    if(i % 2 == 0){
     console.log(i);
    } i++
 } 


do
    {
    if(i % 2 == 0){
    console.log(i);
  } i++
}
 while(i<200);


for(var i=0; i < 100; i++){
    if(i%2==0){
        console.log(i);
    }
}


var i=0;
while(i<100){
  if(i%2==0){
    console.log(i);

  }
  i++
}


var i=0;
do{
    if(i%2==0){
        console.log(i);

    }i++
}
while(i<100);
var i=4;
var j;
for(var j=1;j<=4;j++){
   if(i%j==0){
    console.log(j);
   }
}

// PRIME NUMBER
var i=2;
var j;
var s=0;
for(j=2;j<i;j++){
    if(i%j==0){
        s++
        console.log(i + " is not prime number")
        break
    }
  
}
if(s==0){
    console.log(i + " is a prime number")
}

// FIBONACCI SERIES
var i=0,j=1,k;
for(a=1;a<100;a++){
      k=i+j;
        console.log(i)
    i=j;
    j=k;
}

// HALF RHOMBUS
for(var i=1; i<5;i++)
{
    var s="";
    
    for(var j=1;j<=i;j++)
    {
        s="*"+s;
    }
    console.log(s);
}
for(var i=5; i>0;i--)
{
    var s="";
    
    for(var j=1;j<=i;j++)
    {
        s="*"+s;
    }
    console.log(s);
}

for(var i=1;i<=5;i++){
    var s=" ";
    for(var j=1;j<5-i;j++){
     s=s+j;
    }
    console.log(s);
    var t="";
    for(var k=1;k<i;k++){

       
        t=t+k;
    }
    console.log(t);
}



