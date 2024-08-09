<html>
    <head>
    </head>

    <body>
        <?php
            include 'p1.php';
            $id = $_POST["id"];
            $name = $_POST["name"];
            $product = $_POST["product"];
            $qty = $_POST["quantity"];
            $price = $_POST["price"];

            $sq1 = "INSERT INTO foodbar VALUES($id,'$name','$product',$qty,$price)";
            try
            {
                if(mysqli_query($conn, $sq1))
                {
                    echo "Data inserted sucessfully";
                    // include 'Display.php';
                }

                else
                    echo "Error while addding data";
            }
            catch (Exception $e)
            {
                echo "exception occur";
            }
        ?>
    </body>
</html>