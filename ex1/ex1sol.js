function constfuncs() {
	var funcs = []
	for (var i = 0; i < 10; i++)
		funcs[i] = f(i)
	function f(i){
		var func = function () {return i};
		return func
	}

	return funcs;
}

var funcs = constfuncs();

for (var i = 0; i < 10; i++)
	console.log(funcs[i] + ":", funcs[i]())