var http = require("http");

http.createServer(function(req,res){
	res.writeHead(200, {"Content-Type" : "text/plain; charset=utf-8"});	
	if(req.url!=="/favicon.ico"){//如果请求不是***
		res.write("必须"+"\n");
		console.log("告诉后台访问");
		res.end("访问结束");	
	}
}).listen(1337);

console.log("Server run at http://127.0.0.1:1337");