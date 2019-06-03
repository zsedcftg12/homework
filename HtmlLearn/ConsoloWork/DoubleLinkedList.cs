using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoloWork
{
    //用泛型实现一个类：双向链表节点DLinkNode<T>，包含以下几个属性：
    public class DlinkNode<T>
    {
       internal DlinkNode<T> Previous { get; set; }
        internal DlinkNode<T> Next { get; set; }
        internal T Content { get; set; }
    }
    //创建一个类：“双向链表”（DoubleLinkedList<T>），包含以下属性方法：
    public class DoubleLinkedList<T>
    {
        T Head { get; set; }
        T Tail { get; set; }
        int Count;
        //TODO:索引this[n]获得第n个节点
        internal void AddAftrr(T node, T beAdded)  //在beAdded之后添加节点node
        {

        }
        internal void Remove(T node)//删除链表中的node节点
        {

        }
        internal void Swap(T a,T b)//交换a节点和b节点的位置
        {

        }
    }
}
