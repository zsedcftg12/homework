////1.用class声明一个课程（Course），包含属性：name，startDate，endDate，students，以及方法：begin()和end()

//class Course {
//    constructor(startDate, endDate, students, name) {
//        this.startDate = startDate;
//        this.students = students;
//        this.length = this.students.length
//        this.name = name;
//    }
//    begin() {
//        console.log(`${this.name}于${this.startDate}开课，共有${this.length}名${this.students}同学报名。`);
//    };
//    end() {
//        console.log(`${this.name}将于${this.endDate}结束课程.`);
//    };
//    在Course中使用getter和setter包装endDate，保证endDate不会小于startDate，也不会比startDate多出365天
//    get EndDate() {
//        return this.endDate
//    }
//    set EndDate(endDate) {
//        var time = Date.parse(endDate) - Date.parse(this.startDate);
//        if (time > 0 && time < (365 * 24 * 60 * 60 * 1000)) {
//            this.endDate = endDate
//        } else {
//            alert("警告！！结束时间小于或大于开始时间365天！！");
//        }
//    }
//}


////2.生成两个课程对象：JavaScript和SQL
//var JavaScript = new Course("2019/05/01", "2019/06/01", ["老程","文轩","小龙","王平","王枫"], "JavaScript");
//var SQL = new Course("2019/05/01", "2019/06/01", ["老程","文轩","小龙","王平","王枫"], "SQL");



////3.调用对象的begin()和end()方法，可以在控制台输出开课信息，如：JavaScript于2019年5月5日开课，共有5名同学（两开花、王枫、王平、采铃、老程）报名。
//Course.prototype.begin()
//Course.prototype.end()



////4.不修改class，动态的改变begin()方法，使其能影响所有Course对象
////var i = Course.prototype.begin = function () {
////    console.log("JavaScript于2019年5月5日开课，共有5名同学（两开花、王枫、王平、采铃、老程）报名。");
////}


////5.让end()方法为各自对象“自有”，其他对象无法修改

//JavaScript.end = function () {
//    console.log("JavaScript(两开花、王枫、王平、采铃、老程)结束课程.");
//}
//JavaScript.hasOwnProperty("end");



////判断并证明以下说法：
////ES里的class其实就是一个function

//typeof class Course {
//    constructor(name) {
//        this.name = name;
//    }
//    end() { }
//}
//"function"

////constructor总是返回class的实例

//Course.prototype.constructor
//JavaScript.constructor
//SQL.constructor
//"是的总是返回class的实例"

////当new了一个class之后，class里声明的方法就会被copy到新生成的实例对象上

//class test {
//    constructor(name) {
//        this.name = name;
//    }
//    hello() {
//        console.log("测试"+this.name)
//    }
//}
//let i = new test("i")
////JavaScript里面，类就是对象，对象也是类
//Course.__

////只有Function才有prototype
//Object.prototype
////Javascript是动态类型语言，所以对象的类型是可以随意更改的
//var o = new object()
//typeof o
//var o = new Function()
//typeof o

