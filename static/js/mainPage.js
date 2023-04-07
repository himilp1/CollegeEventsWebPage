function addEvent(){
    
    let eventName = document.getElementById("eventName").value;
    let eventDesc = document.getElementById("eventDesc").value;
    let location = document.getElementById("location").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let type = document.getElementById("type").value;

    let eventData = {
        "eventName": eventName,
        "eventDesc": eventDesc,
        "location": location,
        "phone": phone,
        "email": email,
        "type": type
    }

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(eventData)
    }

    const modal = document.querySelector('#addEventButton')
    modal.style.display = "none";   
    
    document.getElementById("eventName").value = "";
    document.getElementById("eventDesc").value = "";
    document.getElementById("location").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("type").value = "";

    const closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const modal = this.closest(".overlay");
            modal.style.display = "none";
        });
    });

    const openModalButton = document.querySelector("#openAddEventButton");
    openModalButton.addEventListener("click", function() {
        const modal = document.querySelector("#addEventButton");
            modal.style.display = "block";
    });
}

function deleteEvent(){

    //TODO
}

function editEvent(){

    //TODO
}

function createRSO(){

    let RSOName = document.getElementById("RSOName").value;
    let RSODesc = document.getElementById("RSODesc").value;
    let email1 = document.getElementById("email1").value;
    let email2 = document.getElementById("email2").value;
    let email3 = document.getElementById("email3").value;
    let email4 = document.getElementById("email5").value;
    
    let RSOData = {
        "RSOName": RSOName,
        "RSODesc": RSODesc,
        "email1": email1,
        "email2": email2,
        "email3": email3,
        "email4": email4
    }

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(RSOData)
    }

    const modal = document.querySelector('#createRSOButton')
    modal.style.display = "none";   

    document.getElementById("RSOName").value = "";
    document.getElementById("RSODesc").value = "";
    document.getElementById("email1").value = "";
    document.getElementById("email2").value = "";
    document.getElementById("email3").value = "";
    document.getElementById("email4").value = "";

    const closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const modal = this.closest(".overlay");
            modal.style.display = "none";
        });
    });

    const openModalButton = document.querySelector("#openCreateRSOButton");
    openModalButton.addEventListener("click", function() {
        const modal = document.querySelector("#createRSOButton");
            modal.style.display = "block";
    });
}

function deleteRSO(){

    //TODO: Logic to delete RSO from database

    const modal = document.querySelector('#deleteRSOButton')
    modal.style.display = "none";   

    document.getElementById("deleteRSO").value = "";

    const closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const modal = this.closest(".overlay");
            modal.style.display = "none";
        });
    });

    const openModalButton = document.querySelector("#openDeleteRSOButton");
    openModalButton.addEventListener("click", function() {
        const modal = document.querySelector("#deleteRSOButton");
            modal.style.display = "block";
    });
}

function addUniversity(){
    
    let UniName = document.getElementById("UniName").value;

    let UniversityData = {
        "UniName": UniName
    }
    
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(RSOData)
    }

    const modal = document.querySelector('#addUniversityButton')
    modal.style.display = "none";   

    document.getElementById("UniName").value = "";

    const closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const modal = this.closest(".overlay");
            modal.style.display = "none";
        });
    });

    const openModalButton = document.querySelector("#openAddUniButton");
    openModalButton.addEventListener("click", function() {
        const modal = document.querySelector("#addUniversityButton");
            modal.style.display = "block";
    });
}

function deleteUniversity(){

        //TODO: Logic to delete University from database

        const modal = document.querySelector('#deleteUNIButton')
        modal.style.display = "none";   
    
        document.getElementById("deleteUni").value = "";
    
        const closeButtons = document.querySelectorAll(".close");
        closeButtons.forEach(function(button) {
            button.addEventListener("click", function() {
                const modal = this.closest(".overlay");
                modal.style.display = "none";
            });
        });
    
        const openModalButton = document.querySelector("#openDeleteUniButton");
        openModalButton.addEventListener("click", function() {
            const modal = document.querySelector("#deleteUNIButton");
                modal.style.display = "block";
        });
}

function joinRSO(){

    //TODO
}