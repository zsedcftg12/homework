////1.实现铃铛（没有学bootstrap的同学用文字代替）闪烁效果
//function CirculateTwinkle() {
//    var love = document.getElementsByTagName("span")[2]
//    if (love.style.color === "gray") {
//        love.style.color = "red";
//    } else if (love.style.color === "red") {
//        love.style.color = "gray";
//    }
//}
//setInterval(CirculateTwinkle, 500)

    ////1.模拟求助首页，并：
    ////                  统计有多少个悬赏大于1的求助
    ////                  将状态为“协助中”的求助背景改成灰黑色
    ////                  写一个函数，可以统计某个求助使用了多少关键字
    ////                  如果总结数为0，将其从DOM树中删除
    //var counts = function () {
    //    var count = 0;
    //    for (var i = 0; i < document.getElementsByName("reward").length; i++) {
    //        if (+document.getElementsByName("reward")[i].childNodes[0].nodeValue > 1) {
    //            count++;
    //        }
    //    }
    //    return count;
    //}
    //console.log("大于1的悬赏有"+counts()+"个");

    ////(2).将状态为“协助中”的求助背景改成灰黑色
    //(function () {
    //    for (var i = 0; i < document.getElementsByClassName("problem-status label-info").length; i++) {
    //        if (document.getElementsByClassName("problem-status label-info")[i].childNodes[0].nodeValue === "协助中") {
    //            document.getElementsByClassName("problem-status label-info")[i].parentElement.parentElement.style.backgroundColor = "black";
    //        }
    //    }
    //})();

    ////(3).写一个函数，可以统计某个求助使用了多少关键字
    //function StatisticsKeyWrod(title) {
    //    var count = 0;
    //    for (var i = 0; i < document.getElementsByClassName("h3").length;) {
    //        if (title === document.getElementsByClassName("h3")[i].childNodes[0].nodeValue) {
    //            count = document.getElementsByClassName("h3")[i].parentElement.parentElement.getElementsByClassName("badge").length;
    //        }
    //        i++;
    //    }
    //    return count
    //}

    ////(4).如果总结数为0，将其从DOM树中删除
    //function DelectStatistics() {
    //    var count = 0;
    //    for (var i = 0; i < document.getElementsByName("statistics").length; i++) {
    //        if (+document.getElementsByName("statistics")[i].childNodes[0].nodeValue === 0) {
    //            document.getElementsByClassName("col-md-8")[0].getElementsByClassName("clearfix")[0].parentNode.remove()
    //            count += 1;
    //        }
    //    }
    //    console.log("已删除" + count + "个总结为0的");
    //}
    //console.log(DelectStatistics());