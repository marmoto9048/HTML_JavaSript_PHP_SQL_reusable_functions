<html>
<table id="myTable">
  <tr id="testBody1">
  <td class="tg-lboi" colspan="3" id="testBody2">menggu</td></tr>
</table>
<script>
  function formatDate(date) {//格式化日期：yyyy-MM-dd
    var myyear = date.getFullYear();
    var mymonth = date.getMonth() + 1;
    var myweekday = date.getDate();
    if (mymonth < 10) {
      mymonth = "0" + mymonth;}
    if (myweekday < 10) {
      myweekday = "0" + myweekday;}
    return (myyear + "/" + mymonth + "/" + myweekday);//想要什么格式都可以随便自己拼
}
  var date = new Date();
  formatDate(date);

  // var y=document.getElementById("testBody2");
  // y.innerHTML=formatDate(date);
  var table = document.getElementById("myTable");
  var rowNode = document.getElementById("testBody1");
  var cellNode = document.createElement("td");
  var textNode2 = document.createTextNode("createTextNode");
  var textNode = document.createTextNode(formatDate(date));

  cellNode.appendChild(textNode);
  cellNode.appendChild(textNode2);
  rowNode.appendChild(cellNode);
  table.appendChild(rowNode);
</script>
</html>

