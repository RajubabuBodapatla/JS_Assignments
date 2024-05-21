
document.body.style.backgroundColor="skyblue"
document.body.style.fontFamily="Verdana"

function btncolor(i){
     i.style.backgroundColor="lightgreen"
}

function formvalidate(){
     var fname=document.getElementById("firstname").value;
    if(fname==""){
     alert("Enter firstname");
    
}
    let a=/^\s/;
    if(a.test(fname)){
      alert("name should not include space at beginning");
    
    }

    var psw1=document.getElementById("pswd").value;
    let psw=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_$\-@])[A-Za-z\d_$-@]{5,8}$/g;
    if(psw1==""){  
       ag=document.getElementById("shut").innerText="Password Required";
        document.forms[0].style.boxShadow="2px 2px 10px red"; 
        return false
       
    }
   
    if(!psw.test(psw1)){
         alert("password should be between 5 and 8 chahrcters and include a number,symbol,an Uppercase and a lower case");    
    }
       
     }
let frms=document.forms[0]
frms.style.width="25%";
frms.style.margin="auto";
frms.style.padding="20px";
frms.style.display="flex";
frms.style.flexDirection="column";
frms.style.height="50vh";
frms.style.justifyContent="space-around";
frms.style.alignItems="center"
frms.style.borderRadius="15px"
frms.style.backgroundColor="white"
frms.style.marginTop="100px"
 
let inpt=document.getElementsByTagName("input")
for(i of inpt){
     i.style.padding="10px"
     i.style.borderRadius="15px"
     i.style.width="60%"
}




