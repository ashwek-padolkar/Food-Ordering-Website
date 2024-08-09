<html>
    <head>
    </head>

    <body>
        <?php
            include 'p1.php';
            $delete = $_POST['delete'];

            $sq1 = "DELETE FROM foodbar WHERE id=$delete";
            $q1 = mysqli_query($conn, $sq1);
            try
            {
                if ($q1)
                {
                    echo "Deleted succesfully";
                }
                else
                    echo "Error while deleting";
            }
            catch (Exception $e)
            {
                echo "exception occur";
            }
        ?>
    </body>
</html>