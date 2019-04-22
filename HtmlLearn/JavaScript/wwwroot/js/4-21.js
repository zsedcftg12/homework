//4 - 21.
//1.不使用JavaScript内置函数,将一个字符串顺序颠倒,比如："hello,yuanzhan"变成"nahznauy,olleh"
//2.统计出这段文字中有多少个单词：
//There are two ways to create a RegExp object: a literal notation and a constructor.To indicate strings,
//the parameters to the literal notation do not use quotation marks while the parameters to the constructor
//function do use quotation - marks.So the following expressions create the same regular expression

var text = "There are two ways to create a RegExp object : a literal notation and a constructor. To indicate strings , the parameters to the literal notation do not use quotation marks while the parameters to the constructor function do use quotation-marks. So the following expressions create the same regular expression"
var texta = text.split(" "," : "," , ")
var textb = texta.