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