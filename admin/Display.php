<html>
    <head>
        
    </head>

    <body>
        <table class="table">
            
        </table>

        <?php
            $con = mysqli_connect("localhost", "root", "", "restaurantwebsite");
            $sql = "SELECT * from foodbar";
            $result = $con->query($sql);

            echo '
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                ';

            if ($result->num_rows > 0) {
              while ($row = $result-> fetch_assoc()) {
                echo '
                    
                        <tbody>
                            <tr>
                                <td>'.$row["id"].'</td>
                                <td>' . $row["name"] . '</td>
                                <td>' . $row["product"] . '</td>
                                <td>' . $row["qty"] . '</td>
                                <td>' . $row["price"] . '</td>
                            </tr>
                        </tbody>
                    ';
              }
            }else{
              echo"no result";
            }
            $con->close();
        ?>

    </body>
</html>