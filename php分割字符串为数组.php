<?php

$str= 'one|two|three|four';

print_r(explode('|',$str));

print_r(explode('|',$str, 2));

//负数的 limit（自 PHP 5.1 起）

print_r(explode('|',$str, -1));

?>
