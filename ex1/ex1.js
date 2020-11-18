/*the output here is wrong.
make it work right by fixing the output by making 10 closures
*/

function constfuncs() {
	var funcs = [];
	for(var i=0; i<10; i++) 
		funcs[i]=function(){return i};
	
	return funcs;
}

var funcs = constfuncs();

for(var i=0; i<10; i++) 
	console.log(funcs[i]+":",funcs[i]())