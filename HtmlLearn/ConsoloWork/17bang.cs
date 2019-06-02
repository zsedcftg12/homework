using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoloWork
{
    public class Problem
    {
        Tabulation tabulation = new Tabulation();
        public void Publish()
        {
            Console.WriteLine("发布"); ;
        }
    }
    public class Tabulation
    {
        public Problem Title { get; set; }
        public Problem Content { get; set; }

    }
}
