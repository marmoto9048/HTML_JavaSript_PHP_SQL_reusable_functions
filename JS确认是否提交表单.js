<script type=“text/javascript”>
 
function rec()
{
	var mymessage=confirm(“确认提交表单吗？”);
	if(mymessage==true)
	{
		document.write(“确认提交！”);
	}
	else if(mymessage==false)
	{
		document.write(“取消提交”);
	}
}
</script>
	
<head></head>
 
<body>
	<input type=“button” name=“button” value=“点击我，弹出确认对话框” onclick=“rec()” />
</body>
