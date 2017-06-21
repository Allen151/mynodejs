var http = require("http");

//与另一个文件取得关联，括号里的相对路径打好来就行了
var otherFun = require("./some_fun.js");

http.createServer(function(req,res){
	res.writeHead(200, {"Content-Type" : "text/plain; charset=utf-8"});	
	if(req.url!=="/favicon.ico"){//如果请求不是***
		res.write("必须"+"\n");
		//直接用关联时定义的变量名访问
		otherFun(req,res);
		console.log("告诉后台访问");
		res.end("");	
	}
}).listen(1337);

console.log("Server run at http://127.0.0.1:1337");