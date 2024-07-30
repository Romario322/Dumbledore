<?php
require_once("login.php");
try{
    $pdo = new PDO($att, $user, $pass, $opts);
}
catch(PDOException $ex){
    throw new PDOException($ex->getMessage(), (int)$ex->getCode());
}
if ($_POST["Username_Email"] != "" && $_POST["Password"] != ""){
    $username_email = $_POST["Username_Email"];
    $password = $_POST["Password"];
    $query_user = "SELECT * FROM Users WHERE Username = :username AND Password = :password";
    $query_email = "SELECT * FROM Users WHERE Email = :email AND Password = :password";
    $stmt_user = $pdo->prepare($query_user);
    $stmt_user->execute([":username"=>$username_email, ":password"=>$password]);
    $stmt_email = $pdo->prepare($query_email);
    $stmt_email->execute([":email"=>$username_email, ":password"=>$password]);
    if ($stmt_email->rowCount() > 0 || $stmt_user->rowCount() > 0){
        header("location: site.php");
        exit();
    }
    else{
        echo "Ты не русский";
    }
}
else{
    header("location: index.php");
    exit();
}