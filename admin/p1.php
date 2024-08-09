<?php
$conn = mysqli_connect("localhost", "root", "", "restaurantwebsite");
try {
    if($conn)
    echo "Successfully connected to database<br>";
    else {
        echo "Error while Connecting";
        exit(0);
    }
} catch (Exception $e) {
    echo "exception occur";
}
?>