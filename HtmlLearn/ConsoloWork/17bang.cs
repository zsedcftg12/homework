using System;
using System.Collections.Generic;
using System.Text;
namespace ConsoloWork
{
    public class User
    {
        public string Author { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        internal void Publish()
        {
            Console.WriteLine("你发布了一个求助");
        }
        internal void Agree()
        {
            Console.WriteLine("你被人赞了一下");
        }
        internal void Disagree()
        {
            Console.WriteLine("你被人踩了一下");
        }
    }
    public class Problem : User
    {
        internal Comment wp = new Comment { NameID = "王平" };
        internal Comment lc = new Comment { NameID = "老程" };
        internal Comment wx = new Comment { NameID = "文轩" };

    }
    public class Article : User
    {

    }
    public class Suggest : User
    {

    }
    public class Comment//评论
    {
        internal string NameID { get; set; }
    }
    public class Appraise//评价
    {

    }
    public class Keyword//关键字
    {

    }
    /// <summary>
    /// //////////////////////////////////////////
    /// </summary>
}
