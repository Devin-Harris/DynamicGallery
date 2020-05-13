<?php
    $path = '../Galleries/illustrations';
    $files = scandir($path);
    
    echo json_encode($files);

?>