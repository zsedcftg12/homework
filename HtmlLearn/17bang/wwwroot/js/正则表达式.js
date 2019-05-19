//1.完成详细的、可测试的需求文档：学费计算器（Web版）。实现以下功能：
//(1.)用户可以选择在源栈学习的开始时间、共学习多少天 / 周 / 月
//(2.)然后，系统自动计算出截至日期和总学费

document.querySelectorAll("input.btn-primary")[0].onclick = function () {
    //整个模块
    var time = document.querySelector("[xl-input-BeginDate]").value,
        count = document.querySelector("[xl-input-StudyTime]").value,
        month = document.querySelector("[xl-choice-month]").checked,
        week = document.querySelector("[xl-choice-week]").checked,
        day = document.querySelector("[xl-choice-day]").checked,
        StopDate = document.querySelector("[xl-display-result]").getElementsByTagName("span")

    if (month) {
        StopDate[0].childNodes[0].nodeValue = count + "月";
        StopDate[1].childNodes[0].nodeValue = time;
        StopDate[2].childNodes[0].nodeValue = CountDateMonth(time, count);
        StopDate[3].childNodes[0].nodeValue = StudyCostMonth(count) + "元";
    } else {

    }
    if (week) {
        StopDate[0].childNodes[0].nodeValue = count + "周";
        StopDate[1].childNodes[0].nodeValue = time;
        StopDate[2].childNodes[0].nodeValue = CountDateWeek(time, count);
        StopDate[3].childNodes[0].nodeValue = StudyCostWeek(count) + "元";
    } else {

    }
    if (day) {
        StopDate[0].childNodes[0].nodeValue = count + "天";
        StopDate[1].childNodes[0].nodeValue = time;
        StopDate[2].childNodes[0].nodeValue = CountDateDay(time, count);
        StopDate[3].childNodes[0].nodeValue = StudyCostDay(count) + "元";

    }
}

////////////////计算月份的函数
//function CountDateMonth(time, count) {
//    //计算月份
//    var BigMonth = 30,
//        K = +time.substring(7, 5);
//    if (K === 1 || K === 3 || K === 5 || K === 7 || K === 8 || K === 10 || K === 12) {
//        BigMonth = 31;
//    } else if (count === 2) {
//        var Year = time.substring(4, 0);
//        if (+ Year % 4 === 0) {
//            BigMonth = 29;
//        } else {
//            BigMonth = 28;
//        }
//        //以上判断大小月份和闰年2月
//    }
//    let a = new Date(time);
//    a = a.valueOf();
//    a = a + count * BigMonth * 24 * 60 * 60 * 1000;
//    a = new Date(a);
//    return a.getFullYear() + "年" + (a.getMonth() + 1) + "月" + a.getDate() + "日";
//}
//function StudyCostMonth(count) {
//    return Math.floor(count * 30 * (998 / 7));
//    //取整计算学费
//}

//function CountDateWeek(time, count) {
//    //计算一周的时间
//    let a = new Date(time);
//    a = a.valueOf();
//    a = a + count * 7 * 24 * 60 * 60 * 1000;
//    a = new Date(a);
//    return a.getFullYear() + "年" + (a.getMonth() + 1) + "月" + a.getDate() + "日";
//}
//function StudyCostWeek(count) {
//    return Math.floor(count * 7 * (998 / 7));
//    //取整计算学费
//}

//function CountDateDay(time, count) {
//    //计算一天的时间
//    let a = new Date(time);
//    a = a.valueOf();
//    a = a + count * 24 * 60 * 60 * 1000;
//    a = new Date(a);
//    return a.getFullYear() + "年" + (a.getMonth() + 1) + "月" + a.getDate() + "日";
//}
//function StudyCostDay(count) {
//    return Math.floor(count * 1 * (998 / 7));
//    //取整计算学费
//}
//////////////////////http://localhost:59058/Problem



//2.使用正则表达式判断某个字符串:
//  （1.）是否是合格的Email格式

//输入参数: 54s5d145s1.sd15..sd15@@@d2f2df.                === 输出结果 ===>>>> false
//输入参数: 215131@qqq.sd15s@@@.qs1251s                === 输出结果 ===>>>> false
//输入参数: 151531@wd.ds152132                === 输出结果 ===>>>> false
//输入参数: 156456132165@qwsws1.sdc                === 输出结果 ===>>>> true
//输入参数: 1403300189@qq.com                === 输出结果 ===>>>> true

//var pattern = /(?!\s+)[A-Za-z0-9]+@.+\.([A-Za-z]+)/,
//    str = '1403300189@qq.com';
//console.log(pattern.test(str));

//  （2.）是否是小数（正负小数都可以）

//输入参数: 1512DF0.11                 === 输出结果 ===>>>> false
//输入参数: 1513.SDSD021               === 输出结果 ===>>>> false
//输入参数: 151.5156.15.15             === 输出结果 ===>>>> false
//输入参数: 2100021000.15210021             === 输出结果 ===>>>> true
//var pattern = /(^[0-9]*)\..([0-9]*$)/g,
//str = "2100021000.15210021";
//console.log(pattern.test(str));


//(3.)将所有以zyf - 开头的属性去掉zyf - （尽可能多的制造测试用例，比如：<a lzyf-old=''， 或者：<span>zyf---+---fyz</span> ……）

//输入参数:<a lzyf-old=''                  ===输出结果===>>>>   <a lzyf-old=''
//输入参数:<div zyf-id="class"><div>       ===输出结果===>>>>   <div id="class"><div>
//输入参数:<div zyf-id="class" data-user=" zyf-"><div>        ===输出结果===>>>>   <divid="class" data-user=" zyf-"><div> 
//输入参数:<div style="zyf-" zyf-id="class" data-user=" zyf-"> zyf-<div>        ===输出结果===>>>>   <div style="zyf-"id="class" data-user=" zyf-"> zyf-<div>
//输入参数:<div style="zyf-" zyf- zyf-id="class" data-user=" zyf-"> zyf-<div>        ===输出结果===>>>>   <div style="zyf-"id="class" data-user=" zyf-"> zyf-<div> 

//var pattern = /(\szyf-(?!"|>|<))/g,
//    str = '<div style="zyf-" zyf- zyf-id="class" data-user=" zyf-"> zyf-<div>';
//str = str.replace(pattern, function (match, content) {
//    return match.replace(content,"");
//})



//3.JSON生成和解析：
//(1.)按自己的情况，生成一个JSON字符串，包括真实姓名、QQ昵称、年龄、性别、兴趣爱好、自我介绍……，上传到QQ群：一起帮·有意向（729600626）
//(2.)根据其他同学的JSON获得其个人资料，生成一个表格显示。

//var XiaoCheng = {
//    name: "小程",
//    QQname: "老程",
//    age: 41,
//    gender: "女",
//    hobby: "blackmail,cheat,thief",
//    introduction: "Never Mind the Scandal and Liber"
//}
//console.log(JSON.stringify(XiaoCheng, function (key, value) {
//    return value;
//}))

//var 基础扎实老程 = JSON.parse('{ "name": "小程", "QQname": "老程", "age": 41, "gender": "女", "hobby": "blackmail,cheat,thief", "introduction": "Never Mind the Scandal and Liber" }'),
//    我有问题芦苇 = JSON.parse('{ "sketch": { "name": "金路炜", "nickna": "路炜", "age": 24, "gender": "gentleman" }, "hobby": ["learning", "I love learning", "Learning makes me happy"], "introduction": "一粒金丹吞入腹，始知我命不由天" }'),
//    风流倜傥小龙 = JSON.parse('{"name":"小龙","nickname":"江流儿","age":3,"isFamel":true,"hobby":["eat","drink","goWhoring","gamble"],"indroduce":"神一样男人"}');






