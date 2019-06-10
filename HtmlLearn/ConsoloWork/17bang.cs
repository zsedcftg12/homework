using System;
using System.Collections.Generic;
using System.Text;
namespace ConsoloWork
{
    #region 方法接口
    interface IFunction<T>
    {
        T Publish();
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

        public T Publish()
        {
            throw new NotImplementedException();
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
}
