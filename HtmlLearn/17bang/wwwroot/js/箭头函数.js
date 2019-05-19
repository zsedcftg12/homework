//1.判断并证明事件处理函数中的this，等于target还是currentTarget
//2.已有如下代码：
var sname = "飞哥";
var a = {
    sname: '老程',
    fn: function () {
        console.log(this.sname);
    }
}
//请用不同的方式调用fn()函数，能分别打印出‘飞哥’和‘老程’
a.fn(sname);
var i = a.fn;
i();

//3.不改变上述代码，分别使用call()和apply() ，打印出‘文轩’和‘两开花’
a.fn.apply({ sname: "文轩" });
a.fn.call({ sname: "两开花" });
//4.将fn()永久拷贝到showName() ，始终打印‘源栈最棒！^ _ ^’
grret = a.fn.bind({ sname: "源栈最棒！^ _ ^" });