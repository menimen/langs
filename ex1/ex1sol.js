function constfuncs() {
    var funcs = [];
	for (var i = 0; i < 10; i++)
		funcs[i] = func

	return funcs;
}

var func = function () {return i};
var funcs = constfuncs();

for (var i = 0; i < 10; i++)
	console.log(funcs[i] + ":", funcs[i]())
