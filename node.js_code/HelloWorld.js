var http = require("http") ; //使用require指令来载入http模块
http.createServer(function(req,res){
	/*此行代码说明
  发送Head头部
  HTTP状态值：200：OK
  内容类型：text/plain
   */
  	res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});
  	if(req.url!=="/favicon.ico"){  //清除第2此访问  
	  	console.log("访问成功");
		res.write('Hello World\n');
		res.end("结束");
	}
}).listen(1337,'127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');