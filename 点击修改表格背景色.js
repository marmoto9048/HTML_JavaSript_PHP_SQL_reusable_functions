<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title></title>
		<script src="js/jquery.js"></script>
	</head>
	<style>
		
		tr td{
			border: 2px solid black;
			width: 150px;
			height: 30px;
		}
		
		.odd{
			background-color: antiquewhite;
		}
		
		.even{
			background-color: aquamarine;
		}
		
		.checked{
			background-color: yellow;
		}
		
	</style>
	<body>
		<table>
			<tr><td></td><td>姓名</td><td>薪水</td><td>年龄</td></tr>
			<tr><td><input type="checkbox"></td><td>张三</td><td>22000</td><td>21</td></tr>
			<tr><td><input type="checkbox"></td><td>李四</td><td>10000</td><td>25</td></tr>
			<tr><td><input type="checkbox"></td><td>王五</td><td>15000</td><td>23</td></tr>
			<tr><td><input type="checkbox"></td><td>赵六</td><td>12000</td><td>28</td></tr>
		</table>
	</body>
	<script>
		$(function(){
			$("tr:odd").addClass("odd");
			$("tr:even").addClass("even");
			$(":checkbox").on("click",function(){
				$(this).parent().parent().toggleClass("checked");
			});
			
		});
	</script>
</html>

 ------------------------------------------------------------------------------------------------------------------------------
    
/* 
*Copyright (c) 2017，烟台大学计算机学院 
All rights reserved. 
*文件名称：关于HTML的练习
*作    者：张晴晴 
*完成日期：2017年11月11日 
*版 本 号：v1.0  * 
*问题描述：HTML5-JavaScript
*输入描述： 无
*程序输出： 无
*/ 
 
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>单击按钮改变背景颜色</title>
<script>
   function changecolor(color){
   document.bgColor=color;
   }
 
 
 
</script>
</head>
 
<body>
<input type="button" value="不许碰我" onClick="changecolor('yellow')">
<input type="button" value="警告你别碰我" onClick="changecolor('red')">
<input type="button" value="给你点颜色看看" onClick="changecolor('black')">
</body>
</html>
————————————————
版权声明：本文为CSDN博主「爱新觉罗_每天都要很努力」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_34216631/article/details/78506161
