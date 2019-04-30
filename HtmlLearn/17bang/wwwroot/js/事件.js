////1.参考求助首页侧边栏关键字，实现：当鼠标移动到关键字上，显示关键字被使用次数
//var btns = document.getElementById("keyword").getElementsByTagName("a")
//for (var i = 0; i < btns.length; i++) {
//    btns[i].onmouseover = function () {
//        console.log("该关键字已被使用" + this.getAttribute('data-used') + "次");
//    }
//}

////2.参考文章的全系列阅读功能，当滚动到页面底部时，将页面现有内容粘贴到页面底部，直到5次过后，在页面底部显示：已经没有更多内容了
////3.参考消息页面：完成勾选全选功能

//var a = document.getElementsByName("filter")[0].getElementsByTagName("input")
//    a[2].onclick = function () {
//        for (var i = 0; i < a.length; i++) {
//            a[i].checked = a[2].checked
//        }
//    }

////4.参考注册页面：
////(1).提交时，如果用户名重复（已有用户名用数组保存），阻止form提交，提示“用户名重复”。
////(2).重新输入用户名，一旦输入用户名部分没有重复，“用户名重复”的提示消失
////(3).当用户名或密码等有值时，关闭页面前弹出确认框

//var arr = ["laocheng", "laozhao", "wenxuan"];
//var User = document.getElementsByTagName("input")[2];
//document.getElementsByTagName("input")[6].onclick = function (event) {
//    for (var i = 0; i < arr.length; i++) {
//        if (this.value === arr[i]) {
//            event.preventDefault(); //阻止form提交
//            document.getElementsByTagName("h4")[0].style.display = "block";
//        }
//        else {

//        }
//    }
//}

//User.onkeyup = function () {
//    for (let i = 0; i < arr.length; i++) {
//        if (this.value === arr[i]) {
//            document.getElementsByTagName("h4")[0].style.display = "block";
//            break;
//        }
//        document.getElementsByTagName("h4")[0].style.display = "none";
//    }
//}
//window.addEventListener('beforeunload', function (e) {
//    if ("" !== document.getElementsByTagName("input")[2].value) {
//        e.preventDefault();
//    }
//})

////5.参考求助首页侧边栏“免费广告发布”弹出Modal，实现（不需要弹出Modal）：
////(1.)根据下拉列表选中项，填充“文字内容”和“链接”文本框
////(2.)勾选修改的checkbox，实现“文字内容”和“链接”文本框的禁用和启用
//var list = document.getElementsByTagName("select")[0]
//var ad = document.getElementsByTagName("input")
//list.onclick = function () {
//    if (list.value === "1") {
//        ad[7].value = "点击赠送屠龙宝刀 一刀999级不是梦 是兄弟就来砍我。"
//        ad[8].value = "https://user.qzone.qq.com/1403300189/infocenter"
//        ad[7].readOnly = " readonly"
//        ad[8].readOnly = " readonly"
//    } else if (list.value === "2") {
//        ad[7].value = "c#天下第一，JAVA就是弟弟"
//        ad[8].value = "https://http://17bang.ren/Problem"
//        ad[7].readOnly = " readonly"
//        ad[8].readOnly = " readonly"
//    } else {
//        ad[7].value = ""
//        ad[8].value = ""
//        ad[7].readOnly = ""
//        ad[8].readOnly = ""
//    }
//}

//6.参考发布求助，实现其关键字功能：
//(1.)没有选择一级关键字，不能选择二级关键字
//(2.)选择一级关键字后，二级关键字只能是一级关键字下的子集
//(3.)一级关键字和二级关键字被选中后，会显示在下拉列表上方
//(4.)自定义关键字输入完成后（按空格键），输入的关键字显示在下拉列表上方
//(5.)后输入的关键字显示在前面
