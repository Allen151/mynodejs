# 路由  
在这里，我们需要了解一下什么是路由，跟我们平时所说的路由器是不同的。  
我们访问一个地址是，网址是这样的，例如我们前面说过的：`http://127.0.0.1:1337/`，这应该叫网页的路径，而有时候我们点击连接后面就多了些东西出来，`http://127.0.0.1:1337/login`之类的。路由的操作过程就是：在JS中，我们通过得到后面的`login`来访问`login`方法。具体路由是个什么概念我也说不清楚，我们应该看一下百科，我还没有时间去看，我先把学到的东西记录下来吧。  
- `url`是`node.js`内置的一个模块。我们获取地址栏输入的路由地址，然后通过正则法除掉反斜杠，在后台输出，这时候我们访问网址的时候，在后面添加的字符串就台在后台输出。
```javascript
//node.js里内置的一个模块
var url = require("url");

	var pathName = url.parse(req.url).pathname;//路由地址
		
	//通过正则法删除斜线
	pathName = pathName.replace(/\//, "");

	console.log(pathName);
```
- 上一节我们学习过，调用另一个文件的多个函数，这里我们又要用到这个知识点啦，开不开心？重温一下：  
```javascript
module.exports = {
	login:function(res){
		res.write("你是不是要登录\n");
	},
	register:function(res){
		res.write("你是要注册吗？");
	}
}
```
- 在运行的文件`n4_rout.js`文件中的主要代码如下：
```javascript
//导入另一个文件的模块
var myFunction = require("./modules/router.js");

//在这里通过得到的路由名来调用方法
myFunction[pathName](res);
```
在这里的第一步是取得与另一个文件的关联。还用到了上一节函数调用那一节的知识，通过变量储存函数名，用方括号的方法调用函数。这里变量储存的函数名来源于前面通过地址栏得到的路由，在这里我们访问的网站一定要是：`http://127.0.0.1:1337/login`或`http://127.0.0.1:1337/register`。其他的都报错，因为其他的传入的函数名不正确，无法正常调用，就报错，在后面我们将学习到如果进行异常处理。  

---
## 学习到的新代码  
```javascript
//node.js里内置的一个模块
var url = require("url");

var pathName = url.parse(req.url).pathname;//路由地址

//通过正则法删除斜线
pathName = pathName.replace(/\//, "");
```














