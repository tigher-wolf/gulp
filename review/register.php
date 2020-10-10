<?php
  header("Content-type:text/html;charset=utf-8");

  $responseData = array('code' => 0,'msg' => 0);
  //var_dump($_POST);
  $username = $_POST['username'];
  $password = $_POST['password'];
  $repassword = $_POST['repassword'];
  $time  = $_POST['time'];
  
  if(!$username){
      $responseData['code'] = 1;
      $responseData['msg'] = "用户名不能为空";
      echo json_encode($responseData);
      exit;
  }
  if(!$password){
    $responseData['code'] = 2;
    $responseData['msg'] = "密码不能为空";
    echo json_encode($responseData);
    exit;
}
if(!$repassword){
    $responseData['code'] = 3;
    $responseData['msg'] = "确认密码不能为空";
    echo json_encode($responseData);
    exit;
}
if($repassword != $password){
    $responseData['code'] = 7;
    $responseData['msg'] = "密码不一致";
    echo json_encode($responseData);
    exit;
}

$link = mysql_connect("localhost","root","123456");
if(!$link){
    $responseData['code'] = 4;
    $responseData['msg'] = "服务器繁忙";
    echo json_encode($responseData);
    exit;
}
mysql_set_charset("utf8");

mysql_select_db("stu");

$sql = "SELECT * from stu where username='{$username}'";
//echo $sql;
$res = mysql_query($sql);
// echo $res;
$row = mysql_fetch_assoc($res);
if($row){
    $responseData['code'] = 5;
    $responseData['msg'] = "用户名已存在";
    echo json_encode($responseData);
    exit;
}

$password = md5(md5(md5($password)."qd")."dsk");

$sql2 = "INSERT into stu(username,password,time) 
        values('${username}','${password}','${time}')";
// echo $sql2;

$res = mysql_query($sql2);

if(!$res){
    $responseData['code'] = 6;
    $responseData['msg'] = "注册失败";
    echo json_encode($responseData);
    exit;
}
$responseData['msg'] = "注册成功";
echo json_encode($responseData);
mysql_close($link);
?>