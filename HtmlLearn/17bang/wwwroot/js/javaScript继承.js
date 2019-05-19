//1.在封装作业的基础上，为Course添加两个子类：主修课（MajorCourse）和辅修课（ElectiveCourse）

class Course {
    constructor(startDate, endDate, students, name) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.students = students;
        this.name = name;
    }
    begin() {
        console.log(`${this.name}于${this.startDate}开课，共有${this.students.length}名${this.students}同学报名。`);
    };
    end() {
        console.log(`${this.name}将于${this.endDate}结束课程.`);
    };
    get EndDate() {
        return this.endDate;
    }
    set EndDate(endDate) {
        var time = Date.parse(endDate) - Date.parse(this.startDate);
        if (time > 0 && time < (365 * 24 * 60 * 60 * 1000)) {
            this.endDate = endDate;
        } else {
            alert("警告！！结束时间小于或大于开始时间365天！！");
        }
    }
    static GetStudentsByName(name) {
        console.log(`${name.name}${name.students.length}`)
        this.name = name
        length = this.students.length
    }
}
class MajorCourse extends Course {
    constructor(startDate, endDate,name ) {
        super(startDate, endDate,name);
    }
    Exam(student) {
        student.score = (Math.floor(Math.random() * 50 + 50));
        super.end();
        console.log(`分数${student.score}`)
    }
}
class ElectiveCourse extends Course {
    constructor(startDate, endDate, name) {
        super(startDate, endDate, name);
    }
    Assess(student) {
        student.score = "A"
        super.end()
        console.log(`分数${student.score}`)
    }
}

var JavaScript = new Course("2019/05/01", "2019/06/01", ["老程", "文轩", "小龙", "王平", "王枫"], "JavaScript");
var SQL = new Course("2019/05/01", "2019/06/01", ["老程", "文轩", "小龙", "王平", "王枫"], "SQL");
var a = new MajorCourse();
//2.声明一个Stundent类，包含name和score两个属性，让Course的Students包含的是Student的对象
class Stundent {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}
let score = [new Stundent('老程', 65), new Stundent('文轩', 80), new Stundent('小龙', 99), new Stundent('王枫', 60), new Stundent('王平', 9)]
let csharp = new Course('2019/05/01', '2019/06/10', score, "c#");
//3.主修课需要参加考试，所以有一个Exam(student)方法；辅修课只需要测评，所以有一个方法Asse ss(student)
//4.创建一个MajorCourse的实例，运行它的Exam(student)方法，结束课程（使用end()方法），并给该student的score赋值为50 - 100的随机整数
let random = new MajorCourse('2019/05/01', '2019/06/10', "老程");//写不来！！！！！！！
let student = new Stundent("老程", 12);
random.Exam(student)
//5.创建一个ElectiveCourse的实例，运行它的Exam(student)方法，结束课程（使用end()方法），给该student的score赋值为ABCDE中的一个随机值
let ABC = new ElectiveCourse("2019/05/01", "2019/7/10", "文轩");
let studenT = new Stundent("文轩", "A");
ABC.Assess(studenT)
//6.给Course声明一个静态的GetStudentsByName(name) ，能根据不同的name返回不同的整数值（参加该course的学生数量）
//7.在子类调用GetStudentsByName(name)

//8.说明：为什么子类可以继承父类的实例和静态方法？