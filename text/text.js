let md5 = require("md5")
console.log(md5('12345&*&^%#^@#^ggvf'));

// 登陆页面
// 思路:
// 1.在登录页序列化表单,收集数据将数据传给后端
// 2.后端收到数据将数据与其数据库进行对比,有此用户,允许登陆,将用户设置到session,便于用户在
// 一段时间内免登陆,将用户其他信息储存到cookie上,如:昵称,便于用户其他页面显示使用,
// 3.在入口文件设置免拦截路径,其他页面都要通过验证,防止翻墙

// 点击的时候发送请求去模糊查询
