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
        $conn = mysqli_connect("localhost", "root", "", "restaurantwebsite");
        $id=$_POST['id'];
        $price=$_POST['price'];

        $sq1 = "UPDATE foodbar SET price=$price WHERE id=$id";
        $q1=mysqli_query($conn,$sq1);

        try
        {
          if($q1)
          {
            echo "updated succesfully";
          }
          else
            echo "error while updating data";
        }
        catch (Exception $e)
        {
          echo "exception occurs";
        }
      ?>
    </body>
</html>