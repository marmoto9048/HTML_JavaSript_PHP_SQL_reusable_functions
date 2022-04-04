<?php
$dbServer ="xxxxx"; //服务器IP地址,如果是本地，可以写成localhost
$dbUser ="xxx"; //用户名
$dbPassword ="xxxxx"; //密码
$dbName ="xxxxxx"; //数据库名称

$connectionInfo = array(
    "Database" => $dbName,
    "UID" => $dbUser,
    "PWD" => $dbPassword
);
$conn = sqlsrv_connect($dbServer, $connectionInfo);
////执行查询语句
$query ="SELECT *  FROM ｘｘｘｘｘｘｘｘｘｘｘｘｘ ";
$query = iconv('UTF-8','cp932',$query);
$stmt = sqlsrv_query($conn, $query);
if( $stmt === false) {
    die( print_r( sqlsrv_errors(), true) );
}
while($row = sqlsrv_fetch_array($stmt))
{echo $row[0]."-----".$row[1]."\n";}
?>
