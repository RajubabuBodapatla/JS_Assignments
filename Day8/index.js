// pblm-1

a="+91-9494661817"
console.log(a.match(/^\+\d{1,3}\-\d{10}/));

// pblm-2

b="191.200.222.100";

console.log(b.match());

// pblm-3

 c="_ a";
console.log(c.match(/^[A-Z\_]+$/gi))

// pblm-4

pwd="Raju@2"
console.log(pwd.match(/^(?=.*[_$\-@])(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d_$-@]{5,8}$/));
console.log(typeof undefined);


