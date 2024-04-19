//Only one key cannot me changed;

var ns={
 name:'raju',age:22,nid:222,
};

Object.defineProperty(ns,"name",{
    value:"raju",
    writable:false,
})
ns.name="indhu"
ns.age=25
console.log(ns)

//All values should not change

var vs={
    name:'Gameo',age:22,nid:111,
};
Object.freeze(vs)
vs.name="gani"
vs.age=29
vs.nid=229
vs.nit=11111
console.log(vs)


//3rd qstn
var vs={
    name:'Gameo',age:22,nid:111,
};
Object.preventExtensions(vs)
vs.name="gani"
vs.age=29
vs.nid=229

console.log(vs)



