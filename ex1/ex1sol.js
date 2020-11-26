function constfuncs() {
	var funcs = [];
	function f(i){
		var b = function (){return i};
		return b;
	}
	for(var i=0; i<10; i++) 
		funcs[i]=f(i);
	
	return funcs;
}

var funcs = constfuncs();

for(var i=0; i<10; i++) 
	console.log(funcs[i]+":",funcs[i]())