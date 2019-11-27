var countries = new Array("", "AL", "AK", "AZ", "AR", "CA", "CO"
                         ,"CT","DE", "DC", "FL", "GA", "HI", "ID"
                         ,"IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD"
                         ,"MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV"
                         ,"NH", "NJ", "NM", "NY", "NC", "ND", "OH"
                         ,"OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX"
                         ,"UT", "VT", "VA", "WA", "WV", "WI", "WY");
                         
var select = document.getElementById("stateSelect");

for(i = 0; i < countries.length; i++){
    var text = document.createTextNode(countries[i]);
    var o = document.createElement("option");

    o.appendChild(text);
    select.appendChild(o);
}