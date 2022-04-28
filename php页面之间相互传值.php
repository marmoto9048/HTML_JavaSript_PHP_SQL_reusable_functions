<?php
//session赋值
   session_start();
   $_SESSION['one']=value1;
   $_SESSION['two']=value2;
 
//session值的读取:
   $one = $_SESSION['one'];
    
   //session值的销毁
   unset($_SESSION['one']);
?>
