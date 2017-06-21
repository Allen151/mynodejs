var fs = require("fs");
fs.readFile("input.txt", function(err, data){
	if(err){
	return console.log(err)
	}else{
		console.log(data.toString());
	}
});
console.log("³ÌĞò½áÊø");