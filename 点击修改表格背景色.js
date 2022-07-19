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
<input type="button" value="11" onClick="changecolor('yellow')">
<input type="button" value="222" onClick="changecolor('red')">
<input type="button" value="3333" onClick="changecolor('black')">
</body>
</html>

