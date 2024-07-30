<?php
require_once("login.php");
try{
    $pdo = new PDO($att, $user, $pass, $opts);
}
catch(PDOException $ex){
    throw new PDOException($ex->getMessage(), (int)$ex->getCode());
}
if ($_POST["Email"] != "" && $_POST["Username"] != "" && $_POST["Password"] != ""){
    $email = $_POST["Email"];
    $username = $_POST["Username"];
    $password = $_POST["Password"];
    $query = "INSERT INTO Users (Username, Email, Password) VALUES (:username, :email, :password)";
    $stmt = $pdo->prepare($query);
    if ($stmt->execute([":username"=>$username, ":email"=>$email, ":password"=>$password])){
        header("location: index.php");
        exit();
    }
    else{
        echo "Ты не русский";
    }
}
else{
    header("location: registration.php");
    exit();
}