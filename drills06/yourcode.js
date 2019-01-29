

function removeClassFromElement( element, className ){
    $(element).removeClass(className);
}

function toggleClassOnElement( element, className ){
    $(element).toggleClass(className);
}

function hideElements( element, removalType ){
    if(removalType === "hide"){
        $(element).hide();
    } else if (removalType === "removeChildren"){
        $(element).empty();
    } else if (removalType === "removeSelf"){
        $(element).remove();
    }
}

function addAttributeToElement( element, attr, val ){
    $(element).setAttribute(attr, val);
}

function putPosInElement( element, attr, val ){
	$(element).setAttribute(attr, val);
}


