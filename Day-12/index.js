const onchg=(event)=>{
       document.getElementById("id1").style.color=event.target.style.color="pink";
       document.getElementById("id1").value=event.target.value.toUpperCase();
}
const onipt=(event)=>{
    document.getElementById("id1").style.color=event.target.style.color="tomato"
}

function pswd(){
    var psw1=document.getElementById("pw").value;
    let psw=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_$\-@])[A-Za-z\d_$-@]{5,8}$/g;
    if(psw1==""){  
        document.getElementById("pwalert").innerText="Password is required"
        return false
    }
  
    if(!psw.test(psw1)){
         alert("password should be between 5 and 8 chahrcters and include a number,symbol,an Uppercase and a lower case");    
    }
       
     }
