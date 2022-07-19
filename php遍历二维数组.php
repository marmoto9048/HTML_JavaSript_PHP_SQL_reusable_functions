<?php$arr = array(//定义外层数组
    array(1,'高某','A','北京市','(010)987654321','gm@Linux.com'),//子数组1
    array(2,'洛某','B','上海市','(021)123456789','lm@apache.com'),//子数组2
    array(3,'峰某','C','天津市','(022)24680246','fm@mysql.com'),  //子数组3
    array(4,'书某','D','重庆市','(023)13579135','sm@php.com')     //子数组4
    );
	for($row=0;$row<count($arr);$row++){
		for($col=0;$col<count($arr[$row]);$col++){
			echo $arr[$row][$col]."</br>";
		}
	}?> 
