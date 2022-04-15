<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>PHP设置下拉框值的示例</title>
</head>
<body>
<form>
    <select>
        <option selected="selected">选一个</option>
        <?php
        $arr = array("PHP", "HTML", "CSS", "JavaScript");
        foreach ($arr as $v) {
            ?>
            <option value="<?php echo $v; ?>"><?php echo $v; ?></option>
            <?php  } ?>
    </select>
    <input type="submit" value="提交">
</form>
</body>
</html>
