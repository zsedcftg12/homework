using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoloWork
{
    class Box
    {
        internal object[] Arr;
        internal Box(object[] _Arr)
        {
            Arr = _Arr;
        }
        internal void Input()
        {
            for (int i = 0; i < Arr.Length; i++)
            {
                Console.WriteLine(Arr[i]);
            }
        }

    }
    public class modes
    {

    }
    public class mode:modes
    {

    }

}
