using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Drawing;
using System.IO;

namespace framwork1
{
    class RString
    {

        public void NewLine(Graphics graphics, Random random)
        {
            for (int i = 0; i < 20; i++)  //随机创造线条
            {
                graphics.DrawLine(new Pen(Color.FromArgb(random.Next(255), random.Next(255), random.Next(255))),
                    new Point(random.Next(200), random.Next(100)),
                    new Point(random.Next(200), random.Next(100)));  //线条
            }
        }
        public void NewCanvas() //调用开始的地方
        {
            Bitmap bitmap = new Bitmap(200, 100); //创建画板的宽度与高度
            Graphics graphics = Graphics.FromImage(bitmap); // 封装画板
            graphics.Clear(Color.Silver); //改变画板背景色
            Random random = new Random(); // 创建随机数的实例
            NewLine(graphics, random); //随机出现线条
            NewPoint(random, bitmap); //随机出现像素点
            RollSting(graphics, random);//随机出现字符串
            bitmap.Save(@"C:\Users\14033\Documents\Upupoo\Docker\config\快捷方式\杂项\作业.JPG");//图片所在位置
            InputCaptcha();
        }
        public void RollSting(Graphics graphics, Random random)
        {
            RollStingdd rollStingdd = new RollStingdd();
            graphics.DrawString($"{rollStingdd.GetSting(random, rollStingdd)}",
                new Font("宋体", 32),
                new SolidBrush(Color.FromArgb(random.Next(255), random.Next(255), random.Next(255))),
                new Point(random.Next(50), random.Next(50)));
        }
        public void NewPoint(Random random, Bitmap bitmap)
        {
            for (int i = 0; i < 4000; i++)
            {
                bitmap.SetPixel(random.Next(200), random.Next(100),
                    Color.FromArgb(random.Next(255), random.Next(255), random.Next(255)));
            }
        }
        public void InputCaptcha()
        {
            var input = Console.ReadLine();
            RollStingdd Captcha = new RollStingdd();
            if (input == (Captcha.first + Captcha.second + Captcha.third + Captcha.fourth))
            {
                Console.WriteLine("恭喜你！验证成功！");
            }
            else
            {
                Console.WriteLine("验证失败");
            }
        }
    }
    class RollStingdd
    {
        public string first;
        public string second;
        public string third;
        public string fourth;
        public string str = "123456789qazwsxedcrfvtgbyhnujmikolp";
        public string GetSting(Random random,RollStingdd r)
        {
            
            first = r.str.Substring(random.Next(35), 1);
            second = r.str.Substring(random.Next(35), 1);
            third = r.str.Substring(random.Next(35), 1);
            fourth = r.str.Substring(random.Next(35), 1);
            return first + second + third + fourth;
        }
    }
    class UnableHandleException : Exception
    {
        public UnableHandleException() : base()
        {

        }
    }

}
