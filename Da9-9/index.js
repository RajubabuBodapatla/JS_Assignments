class automobile {
	constructor(name, cc) {
		this.name = name;
		this.cc = cc;
	}
	engine() {
		console.log(`${this.name} 
	has ${this.cc} engine`);
	}
}

class car extends automobile {
    constructor(){
        super();
    }
	engine() {
      
		console.log(this.name,
			"has ", this.cc, "cc engine");

	}

}

let carz = new car('Rex', "1149");
carz.engine();


const obj= {name:"hi",b:"bye",
  fullname:function(){
    return this.name;
}
};
 console.log(obj.fullname());


