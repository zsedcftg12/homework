using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace framwork1
{
    class Program
    {
        static void Main(string[] args)
        {
            //plotting.Output();//调用绘图类
            try
            {
                RString BeginCanvas = new RString();
                BeginCanvas.NewCanvas();
            }
            catch (UnableHandleException U)
            {
                File.AppendAllText(@"C:\Users\14033\Documents\Upupoo\Docker\config\快捷方式\杂项\无法处理的错误.log", U.ToString() + "\n");
                Console.WriteLine("程序出现未知的错误！请稍后重试或联系我们");
                Console.Read();
            }
            catch (IndexOutOfRangeException I)
            {
                File.AppendAllText(@"C:\Users\14033\Documents\Upupoo\Docker\config\快捷方式\杂项\线条错误.log", I.ToString() + "\n");
                Console.WriteLine("线条可能出现错误");
                Console.Read();
            }
            catch (Exception)
            {
                File.AppendText(@"C:\Users\14033\Documents\Upupoo\Docker\config\快捷方式\杂项\Exceotion.log");
                Console.WriteLine("如果走到这一步那么就是异常中的异常");
                Console.Read();
            }
        }
    }

}
