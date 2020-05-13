<?php
    $path = '../Galleries/photos';
    $files = scandir($path);
    
    echo json_encode($files);

?>