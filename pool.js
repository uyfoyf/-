// 1、引入mysql模块
const mysql=require("mysql");
//2、创建连接池
const pool=mysql.createPool({
	post:"127.168.0.0.1",
	port:"3306",
	user:"root",
	password:"",
	database:"wx",
	connectionLimit:"20"
});
// 3、导出连接池
module.exports=pool;