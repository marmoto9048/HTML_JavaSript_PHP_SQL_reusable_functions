怎样使页面加载完再执行js代码
由于HTML页面的加载顺序是从上到下，所以js代码要写在页面靠下的位置，否则可能会发生元素获取不到的问题，为了避免这种情况，可以通过页面元素加载完之后，再执行js代码，这样即使代码写在html元素前面也没有问题。

一、在原生js中，在页面所有元素加载完执行js代码 如下：
1.使用load事件

<script>
        window.addEventListener('load', function() {
            //js代码
        });
</script>

2.使用DOMContentLoaded事件

<script>
        document.addEventListener('DOMContentLoaded', function() {
            //js代码
        });
</script>

以上两种区别：
window.load是在窗口加载事件，是文档所有内容（图像、js文件、css文件等）都加载完成后才触发。只能写一次，如果注册多个事件则会以最后注册的为准，后者覆盖前者。
document.addEventListener窗口加载事件，在DOM加载完成就会触发，不包括样式图片动画等。 

通过下方代码验证发现：

        使用1：jQuery的$(function){}和2：jquery的$(document).ready(function(){});无论位置放置在哪里，总是优先其余三种方式（原因是：这两种方式是在document加载完成后就执行，后三种是等到整个window页面加载完成后才执行），这两者之间的执行顺序是谁在上方谁优先执行。

        使用3：jQuery的$(window).load(function(){});

　　　　4:window.onload = function bbb(){}这两种方式，总是优先于<body onload="aaa()">执行。他们两者执行顺序也是根据谁在上方谁先执行。

       使用5：<body onload="aaa()">总是最后执行。

1.在页面还没加载完成就获取那个元素的属性,导致获取属性失败

这类问题有很多情况

常见的是调用的或许html标签的js写在了js上面，导致js加载完毕而html元素尚未加载，找不到目标

我的问题是，js虽然写在html下面。但是在弹窗的时候重复调用获取基本信息页面。导致js报错

2.是不是书写的问题 比如想document.getElementById("a").style 写错为 document.getElementById("ɑ").style等

3.你调用属性的object是空的，你看看是不是没有找到你想要的对象，可能你调用的对象调用错了 
