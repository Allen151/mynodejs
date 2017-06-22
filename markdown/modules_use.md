# 模块的调用

这里的使用，效果有些像java里的~~类~~，能做一些像java里的类那样的操作。  

## 简单类的调用 

上节我们学过怎么把另一个文件夹的的方法引进来使用，这节在上一节的基础上添加一些功能。下面这个虽然是一个方法，但是能像类一样工作。应该不难看懂，就不多说了。
```javascript
function User(){
	this.id ;
	this.name ;
	this.age ;
	this.enter = function(){
		console.log(this.name+"进入图书馆");
	}
}

//将方法映射出来
module.exports = User ;
```
上一节我们也说过创建一个服务必不可少的代码，是像下面那样，那我们以后的笔记只，必要的代码就不说了，只说几个重要的操作代码。必要代码如下：
```javascript
var http = require("http") ;

//在这里写我们要引入的模块

http.createServer(function(req,res){
	//请求头部
	res.writeHead(200,{"Content-Type" : "text/plain; charset=utf-8"});

	if(req.url !== "/favicon.ico"){
	//在这里写我们需要操作的代码。
	
		res.end("");	
	};
}).listen(1337);

console.log("Server running at http://127.0.0.1:1337");
```
下面这个代码是我们使用上面的那个类的代码。：  
```javascript
//将类引进来
var User = require("./modules/User.js");

//实例化一个对象
var user = new User();
//使用实例化的对象，为对象的属性赋值
user.id = "1" ;
user.name = "Allen" ;
user.age = 21 ;
user.enter();//调用类中的方法
```  
就是像这么使用。  
但是这样但还不是很好，id、name、age这些参数的接收还不太好，所以我们就修改如下：这样的调用就更明了了。  
```javascript
//-----------User.js-------------------
function User(id, name, age){
	this.id = id;
	this.name = name;
	this.age = age;
	this.enter = function(){
		console.log(this.name+"进入图书馆");
	}
}

//将方法映射出来
module.exports = User ;

//-----------ch_3.js----------------------
	var user = new User(1, "Allen", 20);
	user.enter();
```

---  
## 继承类的调用
类似`java`中的继承类的使用。`user`是用户，用户可以是老师，可以是学生，老师和学生有相同的属性也有不同的属性。那我们就要用到继承了。    
在`User.js`相同的目录下创建一个`Teacher.js`文件，代码如下：
```javascript
//将User类引导进来
var User = require("./User") ;
function Teacher(id, name, age){
	//将User应用进来，相当于java中的实现类的继承操作
	User.apply(this, [id, name, age]);
	//子类的新方法
	this.teach = function(res){
		res.write(this.name+"在讲课");
	}
}
//将Teacher类映射出去
module.exports = Teacher ;
```
那我们现在的下一步就是要使用上面的`Teacher`类了。直接将Teacher类引导进来，调用父类的方法，调用自己的方法。  
```javascript
//引用继承类的模块，跳过User，直接使用Teacher  
var Teacher = require("./modules/Teacher");

//引用继承类的模块，相当于实例化对象
var teacher = new Teacher(1, "张老师", 40);
teacher.enter();//调用父类的方法
teacher.teach(res);//调用自己的方法
```
那来到这里，我们就学会的类的调用，与类的继承的调用了。那我们还可以再写一个类的继承，学生的类的还没写呢。  
## 学生类的继承  
也是跟上面Teacher类的继承一样。我也进行了练习，所以，我只贴代码出来算了。不再重复记笔记。  
```javascript
//------------Student.js---------------
var User = require("./User");
function Student(id, name, age){
	User.apply(this, [id, name, age]);
	this.study = function(res){
		res.write(this.name+"学会了自己学习");
	}
}
module.exports = Student ;

//------------ch_3.js-------------------------
var Student = require("./modules/Student");
var student = new Student(1, "小明", 12) ;
student.enter();
student.study(res);
```  

## 学习到的新代码  
```javascript
//创建一个对象  
function User(id, name, age){

}
//实例化一个对象，调用对象里的方法
var user = new User(1, "Allen", 20);
user.enter();

//继承一个父类，得到接口，实用上父类，自己的函数，抛出接口
var User = require("./User") ;
function Teacher(id, name, age){
	//将User应用进来，相当于java中的实现类的继承操作
	User.apply(this, [id, name, age]);
	this.teach = function(res){
		res.write(this.name+"在讲课");
	}
}
module.exports = Teacher ;//抛出接口
//使用继承类跟使用类一样，不多说。

```