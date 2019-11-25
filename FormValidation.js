var email = document.getElementById("email");

email.addEventListener('onFocus', setStyle(validEmail(email.value)));

function validEmail(emailString){
    if(emailString.contains("@")){
        alert("there is an @");
        return true;
    }
    else{
        alert("there is no @");
        return false;
    }
}

function setStyle(valid){
    if(valid){
        email.style = "color: red; border: 2px solid red;";
    }
    else{
        email.style = "";
    }
}

function validateForm(){
    
}

function displayAltAddress(){
    var box = document.getElementById("displayAlt");
    var alt = document.getElementsByName("altAddress");

    

    switch(box.checked){
        case true:
            for(i = 0; i <alt.length; i++){
                alt[i].style = "visibility: visible;";
            }
            break;
        case false:
            for(i = 0; i <alt.length; i++){
                alt[i].style = "visibility: hidden;";
            }
            break;
    }
}