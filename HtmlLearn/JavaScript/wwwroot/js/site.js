////用JavaScript弹出你的入栈口号
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
//text = text.replace(/飞哥/, "大神");
//text = text.replace(/小/, '"小"');
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
//console.log(arr.length+"位同学");

////6.在上述数组头部加上小雨老师，末尾加上大飞哥
//var arr = ["LC", "LW", "XWZ", "LZ", "ZX", "WX", "WF", "MH", "CL"];
//arr.unshift("小余老师");
//arr.push("大飞哥");
//console.log(arr)

////7.如果一个数只能被1和它自己整除，这个数就被称之为“素数”。请找出100以内的所有素数。然后封装成一个函数findPrime(max) ，可以返回max以内的所有素数。
//function findPrime() {
//    var arr = [];
//    for (var i = 2; i <= arguments; i++) {
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
//findPrime(100)
////8.建立一个函数getMaxNumber() ，可以接受任意多各种类型（整数、小数、正数、负数、字符串、布尔值等）的参数，并找出里面最大的数（忽略其他类型）
//function getMaxNumber() {
//    var max = 0;
//    for (var i = 0; i < arguments.length; i++) {
//        if (arguments[i] > max) {
//            max = arguments[i];
//        }
//    }
//}
//getMaxNumber([1, 5, 7, 7, 61, 24, 43, 84, true, false, true, true, false])

////9.创建一个函数getRandomArray(length, max) ，能返回一个长度不大于length，每个元素值不大于100随机整数数组。

////10.删除一个数组里面重复的元素
//function ToRepeated() {
//    for (var i = 0; i < arguments.length; i++) {
//        for (var j = i + 1; j < arguments.length; j++) {
//            if (arguments[i] === arguments[j]) {
//                arguments.splice(i, 1);
//                i--;
//            }
//        }
//    }
//}
//ToRepeated([8, 14, 8, '8', '14', 14, '8', true, false, true, true, false, '路炜', '路炜', '老程', '小龙', '小龙'])


////11.编写一个计算源栈返还红包金额的函数 Redbag() ，参考：
//function myfunction(a = []) {
//    var count = 0
//    if (a[0] !== 0) {
//        count = ((a[0] * 19.8) - 19.8) * (a[1] * 0.1)
//    }
//    console.log(count);
//    return count
//}

