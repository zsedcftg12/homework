﻿////用JavaScript弹出你的入栈口号
//alert("先众人而为,后众人而言");

////1.利用JavaScript计算出：[(23 + 7)x12 - 8]÷6的值

//var sum = ((23 + 7) * 12 - 8) / 6;
//console.log(sum);

////2.利用循环，计算出1 + 3 + 5 + 7 +...+99=?
//var sum = 0;
//for (var i = 1; i <= 99; i += 2) {
//    sum += i;
//}
//console.log(sum);

////4-19日
////1.使用JavaScript内置字符串函数，将 “‘源栈’：飞哥小班教学，线下免费收看” 变成：“大神"小"班教学，线上免费收看”。
//var text = "“‘源栈’：飞哥小班教学，线下免费收看”";
//text = text.replace(/飞哥/, "大神").replace(/小/, '"小"').replace(/下/, "上");
//console.log(text);

////2.将数组['why', 'gIT', 'vs2019', 'community', 'VERSION']规范化，所有字符串：
////    (1).首字母大写开头，其他字母小写
////    (2).截去超过6个字符的部分，如'community'将变成'Commun'

//var arr = ['why', 'gIT', 'vs2019', 'community', 'VERSION'];
//var standard = [];
//for (var j = 0; j < arr.length; j++) {
//    standard.push(arr[j][0].toUpperCase() + arr[j].substring(0, 6).substring(1).toLowerCase());
//}
//console.log(standard);

////5.将源栈同学姓名 / 昵称装入数组，再根据该数组输出共有多少同学
//var arr = ["老程", "芦苇", "文轩", "王枫", "明辉", "子祥", "老赵", "采苓"];
//console.log(arr.length + "位同学");

////6.在上述数组头部加上小雨老师，末尾加上大飞哥
//var arr = ["LC", "LW", "XWZ", "LZ", "ZX", "WX", "WF", "MH", "CL"];
//arr.unshift("小余老师");
//arr.push("大飞哥");
//console.log(arr);

////7.如果一个数只能被1和它自己整除，这个数就被称之为“素数”。请找出100以内的所有素数。然后封装成一个函数findPrime(max) ，可以返回max以内的所有素数。
//function findPrime(max) {
//    var arr = [];
//    for (var i = 2; i <= max; i++) {
//        if (isPrime(i)) {
//            arr.push(i);
//        }
//    }
//    return arr;
//}
//function isPrime(n) {
//    for (var i = 2; i < n; i++) {
//        if (n % i === 0) {
//            return false;
//        }
//    }
//    return true;
//}
////8.建立一个函数getMaxNumber() ，可以接受任意多各种类型（整数、小数、正数、负数、字符串、布尔值等）的参数，并找出里面最大的数（忽略其他类型）
//function getMaxNumber(arr) {
//    var max = 0;
//    for (var i = 0; i < arr.length; i++) {
//        if (arr[i] >= max && arr[i] !== "") {
//            max = arr[i];
//        }
//    }
//    return max;
//}
//9.创建一个函数getRandomArray(length, max) ，能返回一个长度不大于length，每个元素值不大于100随机整数数组。
////--------------------------------------------------------
//function getRandomArray(length, max) {                  //|
//    var rool = (Math.random() * max).toFixed(length);   //|
//    return rool;                                        //|
//}                                                       //|
////---------------------------------------------------已作废
//function getRandomArray(length, max) {
//    var arr = [];
//    for (var i = 0; i < length; i++) {
//        arr.push((Math.random() * max).toFixed(0));
//    }
//    return arr;
//}

////10.删除一个数组里面重复的元素
//function ToRepeated(arr) {
//    //var arr = [8, 14, 8, '8', '14', 14, '8', true, false, true, true, false, '路炜', '路炜', '老程', '小龙', '小龙']
//    for (var i = 0; i < arr.length; i++) {
//        for (var j = i + 1; j < arr.length; j++) {
//            if (arr[i] === arr[j]) {
//                arr.splice(i, 1);  //判断一旦外循环=内循环 删除外循环相同的值
//            }
//        }
//    }
//    return arr;
//}
//ToRepeated([8, 14, 8, '8', '14', 14, '8', true, false, true, true, false, '路炜', '路炜', '老程', '小龙', '小龙'])

////11.编写一个计算源栈返还红包金额的函数 Redbag() ，参考：
//function money(name, discount, man) {
//    var count = 0;
//    if (man !== 0) {
//        count = ((man * 19.8) - 19.8) * (discount * 0.1);
//    }
//    return name + "同学," + discount + "折本周共有" + man + "人应返金额" + count;
//}

////12.不使用JavaScript内置函数，将一个字符串顺序颠倒，比如：'hello,yuanzhan' 变成 'nahznauy,olleh'。
//function reversal(text) {
//    //var text = 'hello,yuanzhan';
//    var k = "";
//    for (var i = text.length - 1; i >= 0; i--) {
//        k += text[i];
//    }
//    return k;
//}

////13.统计出这段文字中有多少个单词：
//There are two ways to create a RegExp object: a literal notation and a constructor.To indicate strings, the parameters to the literal notation
//do not use quotation marks while the parameters to the constructor function do use quotation - marks.So the following expressions create the same regular expression
//var text = "There are two ways to create a RegExp object : a literal notation and a constructor. To indicate strings , the parameters to the literal notation do not use quotation marks while the parameters to the constructor function do use quotation-marks. So the following expressions create the same regular expression"
//text = text.split(" ");
//var k = 0;
//for (var i = 1; i < text.length; i++) {
//    if (text[i] === ":" || text[i] === "," || text[i] === ".") {
//    }
//    else {
//        k += 1;
//    }
//}

////14.在函数yz.fei.get986()中嵌入不带参数的函数has9() / has8() / has6() ，并调用上述函数，找出10000以内有多少个数字包含：9或者8或者6。
//var yz = {};
//yz.fei = {};
//yz.fei.get986 = function (max) {
//    function has9() {
//        if (j.indexOf(9) !== -1) {
//            return true;
//        }
//    }
//    function has8() {
//        if (j.indexOf(8) !== -1) {
//            return true;
//        }
//    }
//    function has6() {
//        if (j.indexOf(6) !== -1) {
//            return true;
//        }
//    }
//    var k = 0;
//    var i = 0;
//    var j = 0;
//    while (i < max) {
//        i++;
//        j = i.toString();
//        if (has9() || has8() || has6()) {
//            k += 1;
//        }
//    }
//    return k;
//}

////15.在函数student()中声明了函数域变量name、age和female，使用闭包机制，将其暴露到函数外部
//function student() {
//    var sname = "小龙";
//    var age = "18";
//    var female = false;
//    return function myfunction() {
//        return sname + age + female;
//    }
//}
//var information = student();

////16.解释以下代码运行结果：（ condition ? <statement when true> : <statement when false>）
//function foo(x) {
//    var tmp = 3;   //3赋值给tmp
//    return function (y) {  
//        x = x ? x + 1 : 1;    //判断x x如果等于x那么x+1,不等于就把1赋值给x。-1 = -1所以-1 + 1 = 0，x = 0
//        console.log(x + y + tmp);  //以上判断所以console.log(0 + 10 + 3 )
//    }
//}
//var bar = foo(-1);  //传入参数-1给x
////或者：var bar = foo(1);
////或者：var bar = foo(0);
//bar(10);  //传入参数10 给y

////16.改动以下代码，让其输出如图所示，并说明理由。
//function buildList(list) {
//    var result = [];
//    for (let i = 0; i < list.length; i++) {
//        result.push(function () {
//            setTimeout('item' + i + ': ' + list[i], 1000)
//        });
//    }
//    return result;
//}

//(function () {
//    var fnlist = buildList([1, 2, 3]);
//    for (var i = 0; i < fnlist.length; i++) {
//        fnlist[i]();
//    }
//})();

//17.使用setTimeout() （不是setInterval() ）实现每隔1秒钟依次显示：第n周，源栈同学random人。（n逐次递增，random随机）
//function circle() {
//    var i = 0;
//    function CircleShow() {
//        i++;
//        alert('第' + i + '周,源栈同学' + Math.round((Math.random()) * 100) + "人");
//        setTimeout(CircleShow, 1000);
//    }
//    setTimeout(CircleShow, 1000);
//}
//circle();

////18.完成猜数字的游戏：
////  弹出游戏玩法说明，等待用户点击“确认”，开始游戏；
////  浏览器生成一个不大于1000的随机正整数；
////  用户输入猜测；
////  如果用户没有猜对，浏览器比较后告知结果：“大了”或者“小了”。如果用户：
////  只用了不到6次就猜到，弹出：碉堡了！
////  只用了不到8次就猜到，弹出：666！
////  用了8 - 10次猜到，弹出：猜到了。
////  用了10次都还没猜对，弹出：^ (*￣(oo) ￣)^
//alert("游戏玩法：系统将会随机生成一个不大于1000的数字。\n请在输入框内输入不大于1000的数字。\n您一共有十次猜测机会^-^。\n点击确认开始游戏！");
//var eventuate = Math.round((Math.random()) * 1000),
//    times = 0;
//while (input !== eventuate) {
//    var input = +prompt("您已猜测" + times + "次" + eventuate);
//    if (times >= 10) {
//        alert("^ (*￣(oo) ￣)^ ")
//        break;
//    } else if (input === 0) {
//        alert("您已取消");
//        break;
//    } else if (typeof input === "number" && input < 1000 && input > 0) {
//        compare(input);
//    } else {
//        alert("去找老程领巴掌！");
//        times--;
//    }
//    times++;
//}

//function compare(input) {
//    if (input < eventuate) {
//        return alert("太小了！！");
//    } else if (input > eventuate) {
//        return alert("太大了！！");
//    } else {
//        return ofnumber(times);
//    }
//}

//function ofnumber(times) {
//    if (times <= 6) {
//        return alert("碉堡了!");
//    } else if (times <= 8) {
//        return alert("666");
//    } else if (times >= 9) {
//        return alert("猜到了");
//    }
//}
