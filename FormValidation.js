function validateForm(){
    
}

function displayAltAddress(){
    var box = document.getElementById("displayAlt");    //Variable for the checkbox element
    var alt = document.getElementsByName("altAddress"); //Variable for the alternate address label and text box

    switch(box.checked){        //Simple switch that uses the true/false checked property
        case true:              //To display or hide the alternate address line
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