////1.参考求助首页侧边栏关键字，实现：当鼠标移动到关键字上，显示关键字被使用次数
//let btns = document.getElementById("keyword").getElementsByTagName("a");
//for (var i = 0; i < btns.length; i++) {
//    btns[i].onmouseover = function () {
//        console.log("该关键字已被使用" + this.getAttribute('data-used') + "次");
//    }
//}
////////////////////http://localhost:59058/Problem

//2.参考文章的全系列阅读功能，当滚动到页面底部时，将页面现有内容粘贴到页面底部，直到5次过后，在页面底部显示：已经没有更多内容了

//{
//    let h = 0,
//        height = document.documentElement.clientHeight,
//        ContentHeight = document.documentElement.offsetHeight,
//        scroll = document.documentElement.scrollTop,
//        //获取页面的高度
//        a = Math.ceil(scroll);
//    document.body.onscroll = function () {
//        if (a === ContentHeight - height && h < 5) {
//            let page = document.body,
//                ClonePage = page.cloneNode(true);
//            this.append(ClonePage);
//            h += 1;
//        } else {
//            alert("已经没有更多内容了！！");
//        }
//    }
//}
////////////////////http://localhost:59058/Problem

////3.参考消息页面：完成勾选全选功能
//let input = document.getElementsByName("filter")[0].getElementsByTagName("input");  //所有的框
//    input[2].onclick = function () {  //全选框
//        for (var i = 0; i < a.length; i++) {
//            input[i].checked = input[2].checked;
//        }
//    }
////////////////////http://localhost:59058/Problem

////4.参考注册页面：
////(1).提交时，如果用户名重复（已有用户名用数组保存），阻止form提交，提示“用户名重复”。
////(2).重新输入用户名，一旦输入用户名部分没有重复，“用户名重复”的提示消失
////(3).当用户名或密码等有值时，关闭页面前弹出确认框
//let arr = ["laocheng", "laozhao", "wenxuan"],
//    User = document.getElementsByTagName("input")[2];
//document.getElementsByTagName("input")[6].onsubmit = function (event) {
//    for (let i = 0; i < arr.length; i++) {
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
////////////////////http://localhost:59058


//5.参考求助首页侧边栏“免费广告发布”弹出Modal，实现（不需要弹出Modal）：
//(1.)根据下拉列表选中项，填充“文字内容”和“链接”文本框
//(2.)勾选修改的checkbox，实现“文字内容”和“链接”文本框的禁用和启用
//let list = document.getElementsByTagName("select")[0],
//    input = document.getElementsByTagName("input");
//list.onclick = function () {
//    if (list.value === "1") {
//        input[7].value = "点击赠送屠龙宝刀 一刀999级不是梦 是兄弟就来砍我。";
//        input[8].value = "https://user.qzone.qq.com/1403300189/infocenter";
//        input[7].readOnly = " readonly";
//        input[8].readOnly = " readonly";
//    } else if (list.value === "2") {
//        input[7].value = "c#天下第一，JAVA就是弟弟";
//        input[8].value = "https://http://17bang.ren/Problem";
//        input[7].readOnly = "readonly";
//        input[8].readOnly = "readonly";
//    } else {
//        input[7].value = "";
//        input[8].value = "";
//        input[7].readOnly = "";
//        input[8].readOnly = "";
//    }
//}
////////////////////http://localhost:59058/Problem


////6.参考发布求助，实现其关键字功能：
////(1.)没有选择一级关键字，不能选择二级关键字
////(2.)选择一级关键字后，二级关键字只能是一级关键字下的子集
////(3.)一级关键字和二级关键字被选中后，会显示在下拉列表上方
////(4.)自定义关键字输入完成后（按空格键），输入的关键字显示在下拉列表上方
////(5.)后输入的关键字显示在前面
//var DownMenu = document.getElementsByClassName("input-group")[0].getElementsByClassName("dropdown-toggle"),
//    //一级关键字下拉栏
//    Spread = document.getElementsByClassName("input-group-btn"),
//    //二级关键字下拉栏
//    oneKeyWord = document.getElementsByClassName("dropdown-menu")[0].getElementsByTagName("a"),
//    //一级关键字
//    twoKeyWord = document.getElementsByClassName("input-group-btn")[1].getElementsByTagName("a");
////二级关键字
//DownMenu[0].onclick = function () {
//    if (Spread[0].className === "input-group-btn") {
//        Spread[0].classList = "input-group-btn open";
//    } else {
//        Spread[0].classList = "input-group-btn";
//    }
//}//一级关键字下拉栏显示
//DownMenu[1].onclick = function () {
//    if (Spread[1].className === "input-group-btn") {
//        Spread[1].classList = "input-group-btn open";
//    } else {
//        Spread[1].classList = "input-group-btn";
//    }
//}//二级关键字下拉栏显示

//for (let i = 0; i < oneKeyWord.length; i++) {
//    oneKeyWord[i].onclick = function (event) {
//        //一级关键字点击事件
//        event.preventDefault();
//        //分割
//        let div = document.createElement("div")
//        div.setAttribute("class", "badge");
//        div.style.marginRight = "15px";
//        document.getElementsByClassName("gap")[3].getElementsByTagName("label")[0].nextElementSibling.append(div);
//        //创建div标签
//        let span = document.createElement("span");
//        div.appendChild(span);
//        //在div标签下创建span标签
//        var text = document.createTextNode(this.childNodes[0].wholeText);
//        span.appendChild(text);
//        //在span标签下添加文字
//        let badge = document.createElement("span");
//        badge.setAttribute("class", "glyphicon glyphicon-remove-sign");
//        span.appendChild(badge);
//        //在span标签下添加图标
//        //点击在下拉列表上方显示
//        for (let i = 0; i < oneKeyWord.length; i++) {
//            document.querySelectorAll("ul.dropdown-menu")[i + 1].style.display = "none";
//        }
//        let k = +this.getAttribute('data-used');
//        document.querySelectorAll("ul.dropdown-menu")[k].removeAttribute("style");
//    }   //判断点击事件显示二级关键字
//}

//for (let i = 0; i < twoKeyWord.length; i++) {
//    twoKeyWord[i].onclick = function (event) {
//        event.preventDefault();
//        //二级关键字点击在下拉列表上方显示
//        let div = document.createElement("div");
//        div.setAttribute("class", "badge");
//        div.style.marginRight = "15px";
//        document.getElementsByClassName("gap")[3].getElementsByTagName("label")[0].nextElementSibling.append(div);
//        //创建div标签
//        let span = document.createElement("span");
//        div.appendChild(span);
//        //在div标签下创建span标签
//        let text = document.createTextNode(this.childNodes[0].wholeText);
//        span.appendChild(text);
//        //在span标签下添加文字
//        let badge = document.createElement("span");
//        badge.setAttribute("class", "glyphicon glyphicon-remove-sign");
//        span.appendChild(badge);
//        //在span标签下添加图标
//    }
//}

//document.getElementsByClassName("form-control")[2].onkeydown = function (event) {
//    if (event.keyCode == 32 || event.keyCode == 13) {
//        //判断键盘按下的键32是空格，13是回车
//        let div = document.createElement("div");
//        div.setAttribute("class", "badge");
//        div.style.marginRight = "15px";
//        let first = document.getElementsByClassName("gap")[3].getElementsByTagName("div")[0].firstElementChild;
//        //获取第一个元素
//        document.getElementsByClassName("gap")[3].getElementsByTagName("label")[0].nextElementSibling.insertBefore(div, first);
//        //把添加的元素始终丢前面
//        let span = document.createElement("span");
//        div.appendChild(span);
//        let text = document.createTextNode(this.value);
//        span.appendChild(text);
//        let badge = document.createElement("span");
//        badge.setAttribute("class", "glyphicon glyphicon-remove-sign");
//        span.appendChild(badge);
//    }
//}
////////////////////http://localhost:59058/Problem






