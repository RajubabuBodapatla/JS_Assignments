
const d=document.body.style.color="green"
console.log(d)
a=document.createElement("h1");
a.innerHTML="HIi kantii"
document.body.append(a);
c=document.createElement("span");
c.innerHTML="Thank u"
document.getElementById("h01").appendChild(c)
document.getElementById("bro").src="./pikachushock.jpeg"

function submitx(){
   a= document.forms["Haiyya"]["haaa"].value;
   if(a==""){
     alert("Fill the name");
     return false
   }
}
document.body.style.fontFamily="cursive"
document.body.style.fontSize="16px"
document.body.style.backgroundColor="#a9c7ee"

head=document.getElementsByTagName("h1");
head[0].style.color="tomato"
head[0].style.textAlign="center"
let shead=document.getElementById("head2");
shead.style.textAlign='center'
shead.style.color='purple'
let p1=document.getElementById("para1");
p1.style.width="50%"
p1.style.margin="auto"
p1.style.backgroundColor="#001d3d"
p1.style.color="#ebebeb"
p1.style.padding="15px"
// p1.style.borderRadius="20px"
let p2=document.getElementsByClassName("para");
console.log(p2);
for(i=0;i<p2.length;i++){
    p2[i].style.color="white"
    p2[i].style.width="70%"
    p2[i].style.margin='auto' 
    p2[i].style.backgroundColor="purple"
    p2[i].style.padding="15px"
    // p2[i].style.borderRadius="20px"
}
let p3=document.querySelectorAll(".parab");
for(j in p3){
    p3[j].style.width="90%"
    p3[j].style.margin="auto"
    p3[j].style.backgroundColor="#ee4e56"
    p3[j].style.padding="15px"
    // p3[j].style.borderRadius="20px"
}
let b=document.createElement("button");
b.innerHTML="Read More";
document.body.append(b)
console.log(b)
