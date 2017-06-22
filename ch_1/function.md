# 函数的调用  


我们说以下这个代码是开启服务必备的，那开启服务之后就要有所操作，有操作就是要用到函数，那我们这一节就来学习调用函数。    
```javascript
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
```  
- 同一个文件下的函数调用，直接调用就行，这个好理解  
```javascript
var http = require("http");

http.createServer(function(req,res){
    res.writeHead(200, {"Content-Type" : "text/plain; charset=utf-8"}); 
    if(req.url!=="/favicon.ico"){//如果请求不是***
        res.write("必须"+"\n");
        fun1(res);//调用方法
        console.log("告诉后台访问");
        res.end("访问结束");    
    }
}).listen(1337);

console.log("Server run at http://127.0.0.1:1337");
//函数内部一个简单的方法
function fun1(res){
	res.write("hello,我是fun1");
}
```
- 不同文件下的函数调用（单独一个）  
先在同一个根目录下创建一个文件some_fun.js，里面的代码如下：  
```javascript
//some_fun.js文件下的一个方法
function controller(req,res){
	res.write("发送请求"); 
}

//将这个方法发送出来
module.exports  =  controller;
```
在运行的文件下与其取得关联：  
`var otherFun = require("./some_fun.js");`这是与另一个文件取得关联，路径是相对路径。 `otherFun(req,res);`直接用取得关联时定义的对象名调用。这种方法在以后的开发中很少用，因为只能调用一个函数。
```javascript
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
```  
- 不同文件下的函数调用（单独多个）  
用这种对象的格式写`module`就能调用多个方法。
some_fun.js文件夹里的代码：  
```javascript
//多个函数调用
module.exports={
	getName:function(res){
		res.write("Hello Allen"+"\n");
	},
	getPlay:function(res){
		res.write("I am a student"+"\n");
	}
}
```
第一种调用方法，用点表示方法调用，这种方法常用，但是缺欠一种功能，如果方法名是不合法的呢？？因为创建函数的时候函数名是以字符串的形式创建，可以是不合法的。下面来说一下调用不合法函数名的函数。  
```javascript
var http = require("http");
//创建module.exports输出，
var otherFun = require("./some_fun.js");
http.createServer(function(req,res){
	res.writeHead(200, {"Content-Type" : "text/plain; charset=utf-8"});	
	if(req.url!=="/favicon.ico"){//如果请求不是***
		res.write("必须"+"\n");

		//用点表示方法调用方法
		otherFun.getName(res);
		otherFun.getPlay(res);
		console.log("告诉后台访问");
		res.end("");	
	}
}).listen(1337);

console.log("Server run at http://127.0.0.1:1337");

```
- 函数名不合法的情况下  
some_fun.js文件里的代码，特别注意函数名。函数名是以字符串的形式传递的，所以所以的字符串形式都是不会报错的，例如，我们可以用`get !@ * (Play`这种名称。但是如果用点表示法调用就会报错了，所以下面我们用方括号的方法调用。
```javascript
//不合法的函数名
module.exports={
	"get Name":function(res){
		res.write("Hello Allen"+"\n");
	},
	"get !@ * (Play":function(res){
		res.write("I am a student"+"\n");
	}
}
```
调用函数，可以直接把函数名的字符串放进方括号里，也可以把函数名的字符串放进一个变量里再通过变量使用。如果用点表示法就会报错。  
```javascript
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
		otherFun[getName](res) ;
		console.log("告诉后台访问");
		res.end("");	
	}
}).listen(1337);

console.log("Server run at http://127.0.0.1:1337");
```  
### 总结  
这节我们学习了怎么调用函数，是为以后的学习做准备的。  

## 学习到的新代码  
```javascript
//小文件抛出接口
module.exports  =  controller;

//与另一个文件取得连接，括号里的相对路径打好来就行了
var otherFun = require("./some_fun.js");
//访问小文件的唯一的方法  
otherFun(req,res);

//小文件可以抛多个函数，函数间用逗号隔开，函数名可用双引号括起来，可以是任意字符。
module.exports={
	getName:function(res){
		res.write("Hello Allen"+"\n");
	},
	getPlay:function(res){
		res.write("I am a student"+"\n");
	}
}

//用点表示方法调用方法
otherFun.getName(res);
otherFun.getPlay(res);


//用方括号的方法调用非法命名的函数
otherFun["get Name"](res);

```