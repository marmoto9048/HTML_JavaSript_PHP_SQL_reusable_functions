
<!DOCTYPE html>
<html>
<head>
	<title>Javascript中点击事件方法二</title>
</head>
<body>
	<button id="btn">click</button>
	<script type="text/javascript">
		var btn = document.getElementById("btn");
		btn.addEventListener('click',function(){
			alert("hello wrold");
		},false)
	</script>
</body>
</html>
 
