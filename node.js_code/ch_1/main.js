var http = require("http");
//创建module.exports输出，
var otherFun = require("./some_fun.js");
http.createServer(function(req,res){
	res.writeHead(200, {"Content-Type" : "text/plain; charset=utf-8"});	
	if(req.url!=="/favicon.ico"){//如果请求不是***
		res.write("必须"+"\n");

		//用点表示方法调用方法
		otherFun["get Name"](res);
		otherFun["get !@ * (Play"](res);
		//把函数名放进一个变量里再通过变量调用
		var getName = "get Name" ;
		otherFun.getName(res) ;
		console.log("告诉后台访问");
		res.end("");	
	}
}).listen(1337);

console.log("Server run at http://127.0.0.1:1337");





//一个内部的函数,直接调用   
/*function fun1(res){
	res.write("hello,我是fun1");
}*/
