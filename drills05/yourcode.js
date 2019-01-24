

function populateRecords( chargesList ){
    var chargeTypes = {
        "charge": 0,
        "cash advance": 0
    }
    
    for (var i=0; i<chargesList.length; i++){
        if(chargesList[i].type ===  "charge"){
            chargeTypes["charge"] = chargeTypes["charge"] + parseFloat(chargesList[i].amount);
        } else if (chargesList[i].type ===  "cash advance"){
            chargeTypes["cash advance"] = chargeTypes["cash advance"] + parseFloat(chargesList[i].amount);
        }
    }

    return chargeTypes;
}


