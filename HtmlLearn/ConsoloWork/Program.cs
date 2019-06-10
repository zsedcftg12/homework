using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoloWork
{
    class Program
    {
        static void Main(string[] args)
        {
            #region 在之前“文章 / 评价 / 评论 / 用户 / 关键字”对象模型的基础上，添加相应的数据，然后完成以下操作：
            //List<Article<string>> articles = new List<Article<string>> {
            //    new Article<string>(new User<string> { Name = "小龙", Id = 1 },"这题好难","不写了", new Appraise<string> { Speak = "拳打南山养老院" },new DateTime(2019,5,10)),
            //    new Article<string>(new User<string> { Name = "飞哥", Id = 2 },"这能叫题？","这题这么简单，是给人做的吗？", new Appraise<string> { Speak = "脚踢北海幼儿园" },new DateTime(2019,6,05)),
            //    new Article<string>(new User<string> { Name = "老程", Id = 3 },"我完事了","你呢", new Appraise<string> { Speak = "5秒完事" },new DateTime(2019,6,06)),
            //    new Article<string>(new User<string> { Name = "文轩", Id = 4 },"我也完事了","弟弟", new Appraise<string> { Speak = "999" },new DateTime(2019,6,06)),
            //    new Article<string>(new User<string> { Name = "王平", Id = 5 },"什么作？","什么业？", new Appraise<string> { Speak = "666" },new DateTime(2019,6,10)),
            //    new Article<string>(new User<string> { Name = "小鱼", Id = 6 },"吃吃吃吃","吃就完事了", new Appraise<string> { Speak = "吃。。。" },new DateTime(2019,12,10))
            //};
            #endregion
            List<User<string>> users = new List<User<string>>() {
                new User<string>{ Name = "小龙",Id = 1,}
                };
            #region 找出“飞哥”发布找出评论数量最多的文章的文章
            //var excellent = from a in articles
            //                where a.Author.Name.StartsWith("飞")
            //                select a;
            #endregion
            #region 找出2019年1月1日以后“小鱼”发布的文章
            //var excellent = from a in articles
            //                where a.PublishTime > new DateTime(2019 / 1 / 1) && a.Author.Name == "小鱼"
            //                select a;
            //foreach (var item in excellent)
            //{
            //    Console.WriteLine($"{item.PublishTime}:{item.Author.Name}:{item.Title}:{item.Body}");
            //} 
            #endregion
            #region 按发布时间升序 / 降序排列显示文章
            //var excellent = from a in articles
            //                orderby a.PublishTime descending  //升序
            //                //orderby a.PublishTime ascending  //降序
            //                select a;
            //foreach (var item in excellent)
            //{
            //    Console.WriteLine($"{item.Author.Name}--{item.Title}--{item.Body}--{item.PublishTime}");
            //} 
            #endregion
            #region 统计每个用户各发布了多少篇文章
            //var excellent = from a in articles
            //                group a by a.Author.Name into user
            //                select new
            //                {
            //                    //待作。。。。。。
            //                };
            #endregion
            #region 找出包含关键字“C#”或“.NET”的文章

            #endregion
            #region 找出评论数量最多的文章 
            #endregion
            //problem = new Problem<string>(new User<string> { Name = "小龙", Id = 1 }, "哈哈哈", "嘿嘿嘿");
            ////为排序定义一个接口，并在冒泡”和“快速排序”中实现
            ////用接口实例（不是类的实例）调用“排序”的方法
            //ISort Climb = new Climb();
            //ISort BinarySort = new BinarySort();
            //Climb.Algorithm();
            //BinarySort.Algorithm();
            ////自定义接口
            //ITea BlackTea = new BlackTea();
            //ITea GreenTea = new GreenTea();
            //BlackTea.Tea();
            //GreenTea.Tea();
            ////构造一个能装任何数据的数组，并完成数据的读写
            //Box box = new Box(new object[] { 21, 545, 978, 64, 45, 453 });
            //box.Input();
            /////////////////////////////////////////////////////冒泡排序
            //int[] arr = { 15, 12, 18, 5, 41, 4, 51, 2, 5, 84, 57, 12, 45, 21, 12, 45, 25, 133, 554, 510, 13, 152, 7478, 745, 15, 21, 5 };
            //int container;
            //for (int i = 0; i < arr.Length; i++)
            //{
            //    for (int j = 0; j < arr.Length - 1; j++)
            //    {
            //        if (arr[j + 1] < arr[j])
            //        {
            //            container = arr[j];
            //            arr[j] = arr[j + 1];
            //            arr[j + 1] = container;
            //        }
            //    }
            //}
            //for (int i = 0; i < arr.Length; i++)
            //{
            //    Console.Write($"[{arr[i]}]");
            //}
            /////////////////////////////////////////////////////二分查找
            //int[] arr = { 1, 8, 15, 64, 97, 104, 132, 154, 215, 666, 4548 };
            //int among = arr.Length / 2;
            //int input = Convert.ToInt32(Console.Read());
            //int i;
            //i = 32;
            //int j = i;
            //int k = i * j;
            //mode ddd = new mode();
            //modes aaa = new mode();
            //mode ccc = ddd;
            /////////////////////////////////////////////////////////
            ///ref引用传递案例
            //void Method(ref int refArgument)
            //{
            //    refArgument = refArgument + 44;
            //}
            //int number = 1;
            //Method(ref number);
            //Console.WriteLine(number);
            // Output: 45
            //    Studer dab = new Studer() { Name = "弟弟" };
            //    Console.WriteLine(dab.Name);
            //}
            //public class Studer
            //{
            //    public void nameID()
            //    {
            //    }
            //    int id = 0;
            //    public string Name { get; set; }
            //}
            //////////////////类的创建与构造函数的使用，静态函数
            //Student name = new Student("两开花",04);
            //name.Hello();
            //Console.WriteLine($"这是学生总数{Student.Amount}");
            //    AICaculate(1, 1);
            //}
            //static void AICaculate(int a, int b)
            //{
            //    Console.WriteLine("I'm AI caculator, let me try:");
            //    Add(a, b);
            //    //Multiple(a, b);
            //}

            //static void Add(int a, int b)
            //{
            //    Console.WriteLine($"it's so easy, {a}+{b}={a + b}");
            //}
            //class Student
            //{
            //    public static int Amount { get; set; }
            //    static Student()
            //    {
            //        Amount=0;
            //    }
            //    public Student(string name,int id)
            //    {
            //        this.Name = name;
            //        this.ID = id;
            //        Amount++;
            //    }
            //    public string Name { get; set; }
            //    public int ID { get; set; }
            //    public void Hello()
            //    {
            //        Console.WriteLine($"我的名字是{Name}，这是我的学号{ID}");
            //    }
            //}
        }
    }
}
