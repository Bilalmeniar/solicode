<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php  
    require_once("arrays.php");
    foreach($articles as $article):
    ?>
    <div class="card">
        <h1>hello evryone</h1>
        <p><?= $article["id"]; ?></p>
        <h2><?= $article["name"]; ?></h2>
        <h4><?= $article["age"]; ?></h4>
    </div>
    <?php endforeach; ?>
</body>
</html>