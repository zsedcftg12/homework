using System;

namespace ConsoloWork
{
    class Program
    {
        static void Main(string[] args)
        {
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














        }
    }
}
