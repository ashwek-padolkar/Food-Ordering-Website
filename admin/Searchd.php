<html>
    <head>
        <style>
            body{
                background: linear-gradient(-135deg, #dfdfdf, #370097);
                text-align: center;
                font-size: 20px;
            }
        </style>
    </head>

    <body>
        <?php
            include 'p1.php';
            $id=$_POST['id'];

            $sq1 = "SELECT * FROM foodbar WHERE id=$id";
            try{
                $q1 = mysqli_query($conn, $sq1);
                if ($q1) {
                        while ($info = mysqli_fetch_array($q1)) {
                            echo "<br>Id is " . $info['id'];
                            echo "<br>Name " . $info['name'];
                            echo "<br>Product " . $info['product'];
                            echo "<br>Quantity " . $info['qty'];
                            echo "<br>Price " . $info['price'];
                            echo "<br>";
                        }
                } else
                    echo "not found";
            }
            catch (Exception $e) {
                echo "exception occurs";
            }
        ?>
    </body>
</html>