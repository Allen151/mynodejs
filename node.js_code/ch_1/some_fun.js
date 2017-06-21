//多个函数调用
module.exports={
	"get Name":function(res){
		res.write("Hello Allen"+"\n");
	},
	"get !@ * (Play":function(res){
		res.write("I am a student"+"\n");
	}
}











//通过module名称只能调用一个函数
/*function controller(req,res){
	res.write("发送请求"); 
}
module.exports  =  controller;*/





//多个函数调用
/*module.exports={
	getName:function(res){
		res.write("Hello Allen"+"\n");
	},
	getPlay:function(res){
		res.write("I am a student"+"\n");
	}
}*/

