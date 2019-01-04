

function sumArray(numbers){
    var answer = 0;

    for (var i=0; i<numbers.length; i++){
        answer = answer + numbers[i];
    }

    return answer;
}

function fitWithinVal(array, number){
    var answer = [];
    var added = 0;
    var i=0

    while (added < number){
        if(array[i] < number && (added + array[i]) <= number){
            answer.push(array[i]);
            added = added + array[i]
        }
        i++
    }

    return answer;
}

function getAllNamesShorterThan(names, number){
    var answer = [];

    for (var i=0; i<names.length; i++){
        if (names[i].length < number){
            answer.push(names[i]);
        }
    }

    return answer;
}

function makeLabel(info){
    return label = info.greeting + " " + info.givenName + " " + info.familyName + "\n" + info["home address"].streetNumber + " " +  info["home address"].streetName + "\n" +  info["home address"].city + ", " +  info["home address"].state + " " +  info["home address"].zip; 
}
