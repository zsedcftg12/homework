using System;
using System.Collections.Generic;
using System.Text;
namespace ConsoloWork
{
    class OutputFunc { 
    public static void Output()
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
    }
    }
    #region 方法接口
    interface IFunction<T>
    {
        int Agree();
        int Disagree();

    }
    #endregion
    #region 求助
    public class Problem<T> : IFunction<T>
    {
        public User<T> Author;
        public T Title;
        public T Body;
        public int amount;
        public Problem(User<T> author, T title, T body)
        {
            this.Title = title;
            this.Author = author;
            this.Body = body;
        }

        public int Agree()
        {
            Console.WriteLine($"当前有{amount}个赞");
            return ++amount;
        }

        public int Disagree()
        {
            Console.WriteLine($"当前有{amount}个赞");
            return --amount;
        }

    }
    #endregion
    #region 用户
    public class User<T>
    {
        public T Name { get; set; }
        public int Id { get; set; }
        public Article<T> article;
    }
    #endregion
    #region 文章
    public class Article<T> : Problem<T>, IFunction<T>//文章
    {
        public new User<T> Author;
        public new T Title;
        public new T Body;
        public Appraise<T> Appraise;
        public DateTime PublishTime;
        public Article(User<T> author, T title, T body, Appraise<T> appraise, DateTime publishtime) : base(author, title, body)
        {
            this.Title = title;
            this.Author = author;
            this.Body = body;
            this.Appraise = appraise;
            this.PublishTime = publishtime;
        }
        IList<Keyword> KeyWords;
    }
    #endregion
    #region 意见建议
    class Suggest<T> : Problem<T>, IFunction<T>//意见建议
    {
        public new User<T> Author;
        public new T Title;
        public new T Body;
        public Suggest(User<T> author, T title, T body) : base(author, title, body)
        {
            this.Title = title;
            this.Author = author;
            this.Body = body;
        }
    }
    #endregion
    #region 评论
    class Comment<T>//评论
    {
        public T body;
        public Article<T> article;
        public Appraise<T> appraise;
        public Comment(Article<T> Article, Appraise<T> Appraise, T Body)
        {
            this.article = Article;
            this.appraise = Appraise;
            this.body = Body;
        }
        //        一篇文章可以有多个评论
        //一个评论必须有一个它所评论的文章
        //每个文章和评论都有一个评价
        //一篇文章可以有多个关键字，一个关键字可以对应多篇文章
    }
    #endregion
    #region 评价
    public class Appraise<T>//评价
    {
        public T Speak { get; set; }
    }
    #endregion
    #region 关键字
    public class Keyword//关键字
    {
        IList<Article<String>> Articles;
    }
    #endregion
    class Publish<T>
    {
        public Article<T> article;
        public Publish(Article<T> Article)
        {
            this.article = Article;
        }
    }
}
