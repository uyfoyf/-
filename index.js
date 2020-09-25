// 1、引入express
const express=require("express");
//2、创建web服务器
const app=express();
// 6、引入解析模块
const bodyParser=require("body-parser");
// 5、引入路由模块
const userRouter=require("./router/user.js");
// 3、设置端口
app.listen(8080);
// 4、使用中间件托管静态资源public
app.use(express.static("./public"));
// 7、使用解析数据中间件bodyParser,不用自带的扩展模块
app.use(bodyParser.urlencoded({
	extended:false
}));
// 6、挂载路由并添加前缀
app.use("/user",userRouter);
