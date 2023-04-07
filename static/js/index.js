alert('Its working!!!');

function logIn(){

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPass").value;

    let loginData = {
        "email": email,
        "password": password
    }

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(loginData)
    }

    fetch('/login', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error)); 

    //logic to clear input boxes
    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPass").value = "";
}

function studentRegister(){

    //Add logic to recognize student user
    console.log(" in js file");
    let school = document.getElementById("studentSchool").value;
    let email = document.getElementById("studentEmail").value;
    let password = document.getElementById("studentPass").value;

    let loginData = {
        "university": school,
        "email": email,
        "password": password
    }

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(loginData)
    }

    fetch('/register', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error)); 

    myModal.hide()
    //modal.style.display = "none";   
    

    //logic to clear input boxes in modal
    document.getElementById("studentSchool").value = "";
    document.getElementById("studentEmail").value = "";
    document.getElementById("studentPass").value = "";
}

function superAdminRegister(){

        //Add logic to recognize superAdmin user

        let school = document.getElementById("superAdminSchool").value;
        let email = document.getElementById("superAdminEmail").value;
        let password = document.getElementById("superAdminPass").value;
    
        let loginData = {
            "university": school,
            "email": email,
            "password": password
        }
    
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(loginData)
        }
    
        fetch('/register', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error)); 
    
        modal.style.display = "none";  

        //logic to clear input boxes in modal
        document.getElementById("superAdminSchool").valu = "";
        document.getElementById("superAdminEmail").value = "";
        document.getElementById("superAdminPass").value = "";
}

function adminRegister(){
 
    //Add logic to recognize admin user

    let school = document.getElementById("adminSchool").value;
    let email = document.getElementById("adminEmail").value;
    let password = document.getElementById("adminPass").value;

    let loginData = {
        "university": school,
        "email": email,
        "password": password
    }

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(loginData)
    }

    fetch('/register', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error)); 
       
    modal.style.display = "none";  

    //logic to clear input boxes in modal
    document.getElementById("adminSchool").valu = "";
    document.getElementById("adminEmail").value = "";
    document.getElementById("adminPass").value = "";
}