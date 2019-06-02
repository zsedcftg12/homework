using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoloWork
{
    //排序接口
    interface ISort
    {
         void Algorithm();
    }
    class Climb : ISort
    {
        public void Algorithm()
        {
            Console.WriteLine("冒泡排序");
        }
    }
    class BinarySort: ISort
    {
        public void Algorithm()
        {
            Console.WriteLine("快速排序");
        }
    }
    //虚拟一个需要使用接口“显式实现”的场景，并实现之
    interface ITea
    {
        void Tea();
    }
    class BlackTea:ITea
    {
        public void Tea()
        {
            Console.WriteLine("这是红茶");
        }
    }
    class GreenTea:ITea 
    {
        public void Tea()
        {
            Console.WriteLine("这是绿茶");
        }
    }
}
