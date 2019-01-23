

function changeElements( elementClass ){
        let num = elementClass.split('.')
        let numbers = document.getElementsByClassName(num[1]);
     
        for (var i=0; i<numbers.length; i++){
            switch (numbers[i].innerText){
                case 'one':
                    $(numbers[i]).text(1);
                    break;
                case 'two':
                    $(numbers[i]).text(2);
                    break;
                case 'three':
                    $(numbers[i]).text(3);
                    break;
                case 'four':
                    $(numbers[i]).text(4);
                    break;
                case 'five':
                    $(numbers[i]).text(5);
                    break;
                case 'six':
                    $(numbers[i]).text(6);
                    break;
                case 'seven':
                    $(numbers[i]).text(7);
                    break;
                case 'eight':
                    $(numbers[i]).text(8);
                    break;
                case 'nine':
                    $(numbers[i]).text(9);
                    break;
            }
        }
}

function appendTextToElement( elementClass, string ){
    let className= elementClass.split('.')
    let elements = document.getElementsByClassName(className[1]);
     
    for (var i=0; i<elements.length; i++){
        let newText = elements[i].innerText + string
        $(elements[i]).text(newText);
    }
}

function addClass( elementClass, newClass ){
    let className= elementClass.split('.')
    let elements = document.getElementsByClassName(className[1]);
     
    for (var i=0; i<elements.length; i++){
        $(elements[i]).addClass(newClass);
    }
    return elements.length;
}

function removeElements( elementClass ){
    $(elementClass).remove();
   
}

