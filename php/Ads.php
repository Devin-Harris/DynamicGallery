<?php
    $path = '../Galleries/ads';
    $files = scandir($path);
    
    echo json_encode($files);

?>