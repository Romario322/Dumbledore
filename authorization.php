<?php
session_start();
require_once("login.php");
try{
    $pdo = new PDO($att, $user, $pass, $opts);
}
catch(PDOException $ex){
    throw new PDOException($ex->getMessage(), (int)$ex->getCode());
}
$username_email = $_POST["Username_Email"];
$password = $_POST["Password"];
if (empty($username_email) && empty($password)){
    $_SESSION["error"] = "Все поля должны быть заполнены.";
    header("location: index.php");
    exit();
}
$query = "SELECT * FROM Users WHERE Username = :username OR Email = :email";
$stmt = $pdo->prepare($query);
$stmt->execute([":username"=>$username_email, ":email"=>$username_email]);
if ($stmt->rowCount() == 0){
    $_SESSION["error"] = "Почта или никнейм не зарегестрированы.";
    header("location: index.php");
    exit();
}
$query = "SELECT * FROM Users WHERE (Username = :username OR Email = :email) AND Password = :password";
$stmt = $pdo->prepare($query);
$stmt->execute([":username"=>$username_email, ":email"=>$username_email, ":password"=>$password]);
if ($stmt->rowCount() > 0){
    header("location: site.php");
    exit();
}
else{
    $_SESSION["error"] = "Неверный пароль.";
    header("location: index.php");
    exit();
}