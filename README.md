# topbutton
一个jquery返回页面顶部的按钮插件
<br/>
作者：陈明新
<br/>
学校：北京理工大学
<br/>
本插件用于页面返回顶部功能，由于使用了jquery，所以在使用时请在页面头部引用jquery的js文件
<br/><br/>
##参数设定
* Showbuttondistance:滚动条距离顶部多少px显示返回按钮，默认100px
* FadeIntime:返回按钮渐变显示的时间，默认500ms
* FadeOuttime:返回按钮渐变消失的时间，默认500ms
* Totoptime:滚动返回顶部所用时间，默认300ms   

##如何使用
* 首先需要在页面中引入jquery的js文件和插件的js文件，jquery版本自行选择，版本最好不要过低，jquery文件一定要在插件文件之前，文件路径根据自己的文件目录更改：
```html
<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="js/topbutton.js"></script>
```
* 要想达到top按钮效果，还必须在页面中添加一个按钮或a标签，当然div也可以，具体情况自己选定，例如：
```html
<a id="topback" href="#"> &gt; </a>
```
* 之后在对应的js代码处添加：
```javascript
$("#topback").topbutton({
	Showbuttondistance:100,
	FadeIntime:500,
	FadeOuttime:500,
	Totoptime:300
});
```
默认情况下参数可以均不填写，不填写则将按照默认参数进行设定。

##展示效果
![效果展示图](https://github.com/RedstoneCMX/topbutton/blob/master/showimages/show1.png)
具体可参考demo.html
