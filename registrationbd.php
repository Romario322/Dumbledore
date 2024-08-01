<?php
session_start();
require_once("login.php");
try{
    $pdo = new PDO($att, $user, $pass, $opts);
}
catch(PDOException $ex){
    throw new PDOException($ex->getMessage(), (int)$ex->getCode());
}
$email = $_POST["Email"];
$username = $_POST["Username"];
$password = $_POST["Password"];
if (empty($email) || empty($username) || empty($password)){
    $_SESSION["error"] = "Все поля должны быть заполнены.";
    header("location: registration.php");
    exit();
}
$query = "SELECT * FROM Users WHERE Username = :username OR Email = :email";
$stmt = $pdo->prepare($query);
$stmt->execute([":username"=>$username, ":email"=>$email]);
if ($stmt->rowCount() > 0){
    $_SESSION["error"] = "Почта или никнейм уже занят.";
    header("location: registration.php");
    exit();
}
$query = "INSERT INTO Users (Username, Email, Password) VALUES (:username, :email, :password)";
$stmt = $pdo->prepare($query);
$stmt->execute([":username"=>$username, ":email"=>$email, ":password"=>$password]);
header("location: index.php");
exit();