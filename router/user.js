// 1、引入express模块
const express=require("express");
// 5、引入连接池模块
const pool=require("../pool.js");
// 2、创建路由器
const r=express.Router();
// 3、在路由下添加路由
r.get("/login/:email&:upwd",(req,res)=>{
	// let _email=req.params.email;
	// let _upwd=req.params.upwd;
	// console.log(_email,_upwd);
	res.send("登录页面");
	
});
// 4、导出路由
module.exports=r;