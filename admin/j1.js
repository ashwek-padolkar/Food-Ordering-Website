// 1. Modal Popup

// i) Events of clicking on buttons
const users = document.querySelector('.users');
const modalWrapper = document.querySelector('.modal__wrapper');

users.addEventListener('click',function(e){
    if((e.target.classList.contains('insert'))){
        modalWrapper.classList.add('active');
        insertFunction();
    }
    else if((e.target.classList.contains('delete'))){
        modalWrapper.classList.add('active');
        deleteFunction();
    }
    else if((e.target.classList.contains('update'))){
        modalWrapper.classList.add('active');
        updateFunction();
    }
    else if((e.target.classList.contains('search'))){
        modalWrapper.classList.add('active');
        searchFunction();
    }
    else
    {
        exit(0);
    }
});


// ii) modal popup after clicking button

function insertFunction(){
    const preview = `

    <head>
        <title>Insert</title>
        <link rel="stylesheet" href="common.css">
    </head>

    <form action="Insertd.php" method="post" id="insert-form">
        <div id="outline">
            <div id="form">
                <div id="heading">
                    <h1>Insert</h1>
                    <button class="close">&times;</button>
                </div>
                <input type="textbox" class="box" name="id" placeholder="Id">
                <input type="textbox" class="box" name="name" placeholder="Name">
                <input type="textbox" class="box" name="product" placeholder="Product">
                <input type="textbox" class="box" name="quantity" placeholder="Quantity">
                <input type="textbox" class="box" name="price" placeholder="Price">
                <input type="submit" id="submit" value="Submit">
            </div>
        </div>
    </form>`;

    const data =  document.getElementById('addData');
    data.innerHTML = preview;

    document.getElementById("insert-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents from: redirecting to the "data inserted successfully" page
        submitForm1();
    });
}

function deleteFunction(){
    const preview = `

    <head>
        <title>Insert</title>
        <link rel="stylesheet" href="common.css">
    </head>

    <form method="post" action="Deleted.php" id="delete-form">
        <div id="outline">
            <div id="form">
                <div id="heading">
                    <h1>Delete</h1>
                    <button class="close">&times;</button>
                </div>
                <input type="textbox" class="box" name="delete"
                    placeholder="Product Id to be deleted">
                <input type="submit" id="submit" value="Submit">
            </div>
        </div>
    </form>`;

    const data =  document.getElementById('addData');
    data.innerHTML = preview;

    document.getElementById("delete-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents from: redirecting to the "data inserted successfully" page
        submitForm2();
    });
}

function updateFunction(){
    const preview = `

    <head>
        <title>Insert</title>
        <link rel="stylesheet" href="common.css">
    </head>

    <form method="post" action="Updated.php" id="update-form">
        <div id="outline">
            <div id="form">
                <div id="heading">
                    <h1>Update</h1>
                    <button class="close">&times;</button>
                </div>
                <input type="textbox" class="box" name="id" placeholder="Product Id to be Updated">
                <input type="textbox" class="box" name="price" placeholder="New Price Value">
                <input type="submit" id="submit" value="Submit">
            </div>
        </div>
    </form>`;

    const data =  document.getElementById('addData');
    data.innerHTML = preview;

    document.getElementById("update-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents from: redirecting to the "data inserted successfully" page
        submitForm3();
    });
}

function searchFunction(){
    const preview = `

    <head>
        <title>Insert</title>
        <link rel="stylesheet" href="common.css">
    </head>

    <form method="POST" action="Searchd.php" id="search-form">
        <div id="outline">
            <div id="form">
                <div id="heading">
                    <h1>Search</h1>
                    <button class="close">&times;</button>
                </div>
                <input type="textbox" class="box" name="id" placeholder="Product Id to be Searched">
                <input type="submit" id="submit" value="Submit">
            </div>
        </div>
    </form>`;

    const data =  document.getElementById('addData');
    data.innerHTML = preview;
}

// 2. It submits the data to php, and reloads the page to show the inserted data
function submitForm1() {
    var formData = new FormData(document.getElementById("insert-form"));

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            location.reload();
        }
    };
    xhr.open("POST", "Insertd.php", true);
    xhr.send(formData);
}

function submitForm2() {
    var formData = new FormData(document.getElementById("delete-form"));

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            location.reload();
        }
    };
    xhr.open("POST", "Deleted.php", true);
    xhr.send(formData);
}

function submitForm3() {
    var formData = new FormData(document.getElementById("update-form"));

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            location.reload();
        }
    };
    xhr.open("POST", "Updated.php", true);
    xhr.send(formData);
}

// 3. To close the form
const closeBtn = document.querySelector('.modal__wrapper');

closeBtn.addEventListener('click',function(e){
    if((e.target.classList.contains('close'))){
        modalWrapper.classList.remove('active');
    }
});

