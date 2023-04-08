import { auth } from "./firebase";
import {signInWithEmailAndPassword} from "firebase/auth"

function logIn(){

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPass").value;

    auth.signInWithEmailAndPassword(auth, email, password)
        .then(data => {
            console.log(data)
            window.location.href = "mainPage.html"
        })
    // let loginData = {
    //     "email": email,
    //     "password": password
    // }

    // const requestOptions = {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(loginData)
    // }

    // fetch('/login', requestOptions)
    //     .then(response => response.json())
    //     .then(
    //         console.log("inside"),
    //         window.location.href = "mainPage.html"
    //     )
    //     .catch(error => console.error(error)); 


    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPass").value = "";
}

function studentRegister(){

    let school = document.getElementById("studentSchool").value;
    let email = document.getElementById("studentEmail").value;
    let password = document.getElementById("studentPass").value;

    let loginData = {
        "role": "student",
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

    const modal = document.querySelector('#studentButton')
    modal.style.display = "none";   
    
    document.getElementById("studentSchool").value = "";
    document.getElementById("studentEmail").value = "";
    document.getElementById("studentPass").value = "";

    const closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const modal = this.closest(".overlay");
            modal.style.display = "none";
        });
    });

    const openModalButton = document.querySelector("#openStudentModal");
    openModalButton.addEventListener("click", function() {
        const modal = document.querySelector("#studentButton");
            modal.style.display = "block";
    });
}

function superAdminRegister(){

        let school = document.getElementById("superAdminSchool").value;
        let email = document.getElementById("superAdminEmail").value;
        let password = document.getElementById("superAdminPass").value;
    
        let loginData = {
            "role": "superAdmin",
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
    
        const modal = document.querySelector('#superAdminButton')
        modal.style.display = "none";   

        document.getElementById("superAdminSchool").value = "";
        document.getElementById("superAdminEmail").value = "";
        document.getElementById("superAdminPass").value = "";

        const closeButtons = document.querySelectorAll(".close");
        closeButtons.forEach(function(button) {
            button.addEventListener("click", function() {
                const modal = this.closest(".overlay");
                modal.style.display = "none";
            });
        });
    
        const openModalButton = document.querySelector("#openSuperAdminModal");
        openModalButton.addEventListener("click", function() {
            const modal = document.querySelector("#superAdminButton");
                modal.style.display = "block";
        });   
}

function adminRegister(){

    let school = document.getElementById("adminSchool").value;
    let email = document.getElementById("adminEmail").value;
    let password = document.getElementById("adminPass").value;

    let loginData = {
        "role": "admin",
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
       
    const modal = document.querySelector('#adminButton')
    modal.style.display = "none";   

    document.getElementById("adminSchool").value = "";
    document.getElementById("adminEmail").value = "";
    document.getElementById("adminPass").value = "";

    const closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const modal = this.closest(".overlay");
            modal.style.display = "none";
        });
    });

    const openModalButton = document.querySelector("#openAdminModal");
    openModalButton.addEventListener("click", function() {
        const modal = document.querySelector("#adminButton");
            modal.style.display = "block";
    });   
}