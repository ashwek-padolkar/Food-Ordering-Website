<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="c1.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
  </head>
  <body>
    <div class="container">

      <nav>
        <a href="#" class="admin-logo">
          <img src="admin_images/admin_img.jpg" alt="" height="30px" width="30px">
          <span>Admin</span>
        </a>

        <ul>

          <div class="li-container">
            <li>
              <a href="#">
                <i class="fas fa-home"></i>
                <div class="nav-item">Dashboard</div>
              </a>
            </li>
  
            <li>
              <a href="#">
                <i class="fas fa-chart-bar"></i>
                <div class="nav-item">Analysis</div>
              </a>
            </li>
  
            <li>
              <a href="#">
                <i class="fas fa-user"></i>
                <div class="nav-item">Customers</div>
              </a>
            </li>
  
            <li>
              <a href="#">
                <i class="fas fa-cog"></i>
                <div class="nav-item">Settings</div>
              </a>
            </li>
  
            <li>
              <a href="#">
                <i class="fas fa-question-circle"></i>
                <div class="nav-item">Help</div>
              </a>
            </li>
  
            <li>
              <a href="#" class="logout">
                <i class="fas fa-sign-out-alt"></i>
                <div class="nav-item">Log out</div>
              </a>
            </li>
          </div>
          
        </ul>
      </nav>

      <section class="main">
        <div class="main-top">
          <h1>Dashboard</h1>
        </div>
        <div class="users">

          <div class="card">
            <img src="admin_images/Insert.png" height="70px" width="70px">
            <p>Insert the items into database</p>
            <input type="button" value="Insert" class="insert" onclick="insertFunction()">
          </div>

          <div class="card">
            <img src="admin_images/Delete.png" height="70px" width="70px">
            <p>Delete the items from database</p>
            <input type="button" value="Delete" class="delete" onclick="deleteFunction()">
          </div>

          <div class="card">
            <img src="admin_images/Update.png" height="75px" width="75px">
            <p>Update the item from database</p>
            <input type="button" value="Update" class="update" onclick="updateFunction()">
          </div>

          <div class="card">
            <img src="admin_images/Search.png" height="75px" width="75px">
            <p>Search any item from database</p>
            <input type="button" value="Search" class="search" onclick="searchFunction()">
          </div>
        </div>


        <section class="products">

          <div class="products-list">
            <h1>Products List</h1>

            <?php
              include 'Display.php'
            ?>

          </div>

        </section>

      </section>

      <!-- Modal Popup -->
      <div class="modal__wrapper" id="addData">

      </div>
    
      <script src="j1.js"></script>

    </div>
  </body>
</html>