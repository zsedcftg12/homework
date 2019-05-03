//1.完成详细的、可测试的需求文档：学费计算器（Web版）。实现以下功能：
//(1.)用户可以选择在源栈学习的开始时间、共学习多少天 / 周 / 月
//(2.)然后，系统自动计算出截至日期和总学费




//2.使用正则表达式判断某个字符串:
//  （1.）是否是合格的Email格式
//  （2.）是否是小数（正负小数都可以）
//  （3.）将所有以zyf - 开头的属性去掉zyf - （尽可能多的制造测试用例，比如：<a lzyf-old=''， 或者：<span>zyf---+---fyz</span> ……）

//var pattern = /(?!\s+)[A-Za-z0-9]+@.+\.([A-Za-z]+)/,
//    str = '1403300189@qq.com';
//console.log(pattern.test(str));


//var pattern = /(^[0-9]*)\.*([0-9]*$)/,
//    str = "156148651456.156156"
//console.log(pattern.test(str))

//^zyf\-*


//3.JSON生成和解析：
//(1.)按自己的情况，生成一个JSON字符串，包括真实姓名、QQ昵称、年龄、性别、兴趣爱好、自我介绍……，上传到QQ群：一起帮·有意向（729600626）
//(2.)根据其他同学的JSON获得其个人资料，生成一个表格显示。


//var XiaoCheng = {
//    name: "小程",
//    QQname: "老程",
//    age: 41,
//    gender: "女",
//    hobby: "blackmail,cheat,thief",
//    introduction:"Never Mind the Scandal and Liber"
//}
//console.log(JSON.stringify(XiaoCheng, function (key, value) {
//    return value
//}))

var lw = JSON.parse('{ "name": "小程", "QQname": "老程", "age": 41, "gender": "女", "hobby": "blackmail,cheat,thief", "introduction": "Never Mind the Scandal and Liber" }')
