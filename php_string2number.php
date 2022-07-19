<?php 

//使用类型转换：类型转换可以直接将字符串转换为float，double或integer基本类型。这是将字符串转换为数字而不使用任何函数的最佳方法

// 字符串格式的数字 

$num = "1000.314"; 

   

// 使用int类型转换

echo (int)$num, "\n"; 

   

// 使用float 类型转换 

echo (float)$num, "\n"; 

   

// 使用double 类型转换

echo (double)$num; 

?>
