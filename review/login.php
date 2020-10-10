<?php
   header("Content-type:text/html;charset=utf-8");

   $responseData = array('code' => 0,'msg' => 0);

   $username = $_POST['username'];
   $password = $_POST['password'];
   //var_dump($_POST);
   if(!$username){
       $responseData['code'] = 1;
       $responseData['msg'] = "请输入用户名";
       echo json_encode($responseData);
       exit;
   }
   if(!$password){
       $responseData['code'] = 2;
       $responseData['msg'] = "请输入密码";
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

   $password = md5(md5(md5($password)."qd")."dsk");

   $sql = "SELECT * from stu where username='{$username}' and password='{$password}'";
   //echo $sql;

   $res = mysql_query($sql);

   $row = mysql_fetch_assoc($res);

   if($row){
        $responseData['msg'] = "登录成功";
        echo json_encode($responseData);
   }else{
    $responseData['code'] = 5;
    $responseData['msg'] = "账号或密码错误";
    echo json_encode($responseData);
    exit;
    }
    mysql_close($link);
?>