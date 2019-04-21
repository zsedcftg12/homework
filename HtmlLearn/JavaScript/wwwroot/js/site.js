//用JavaScript弹出你的入栈口号
alert("2K不包吃住");

//1.利用JavaScript计算出：[(23 + 7)x12 - 8]÷6的值

var bear = ((23 + 7) * 12 - 8) / 6;
alert(bear);

//2.利用循环，计算出1 + 3 + 5 + 7 +...+99=?
var sum = 0;
for (var i = 1; i <= 99; i = i + 2) {
    sum = sum + i;
}
alert(sum);

//4-19日
//1.使用JavaScript内置字符串函数，将 “‘源栈’：飞哥小班教学，线下免费收看” 变成：“大神"小"班教学，线上免费收看”。

//2.将数组['why', 'gIT', 'vs2019', 'community', 'VERSION']规范化，所有字符串：
//    (1).首字母大写开头，其他字母小写
//    (2).截去超过6个字符的部分，如'community'将变成'Commun'

//5.将源栈同学姓名 / 昵称装入数组，再根据该数组输出共有多少同学
var arr = ["LC", "LW", "XWZ", "LZ", "ZX", "WX", "WF", "MH", "CL"];
alert(arr.length);
//6.在上述数组头部加上小雨老师，末尾加上大飞哥
var arr = ["LC", "LW", "XWZ", "LZ", "ZX", "WX", "WF", "MH", "CL"];
arr.unshift("小余老师");
arr.push("大飞哥");
//7.如果一个数只能被1和它自己整除，这个数就被称之为“素数”。请找出100以内的所有素数。然后封装成一个函数findPrime(max) ，可以返回max以内的所有素数。
function findPrime(max) {
    var arr = [];
    for (var i = 2; i <= max; i++) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }
    return arr;
}
function isPrime(n) {
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
//8.建立一个函数getMaxNumber() ，可以接受任意多各种类型（整数、小数、正数、负数、字符串、布尔值等）的参数，并找出里面最大的数（忽略其他类型）

function getMaxNumber(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
//9.创建一个函数getRandomArray(length, max) ，能返回一个长度不大于length，每个元素值不大于100随机整数数组。

//10.删除一个数组里面重复的元素
function DeleteRepeated(arr) {
    var arr = [1, 5, 7, 7, 61, 24, 43, 84, 31, 54, 21, 54, "1", 1].sort();
    var Newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== Newarr[Newarr.length - 1]) {
            Newarr.push(arr[i]);
        }
    }
    return arr
}

    var arr = [8, 14, 8, '8', '14', 14, '8', true, false, true, true, false, '路炜', '路炜', '老程', '小龙', '小龙'];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(i, 1)
                i--
            }
        }
    }

//11.编写一个计算源栈返还红包金额的函数 Redbag() ，参考：