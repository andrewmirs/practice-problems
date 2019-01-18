

function getPath(string){
    return string.split('/');
}

function getPathParts(url){
    return url.split(":");
}

function getCapitalCount(array){
    count = 0;
    for ( var i=0; i<array.length; i++){
        if(array[i].charCodeAt(0) < 91){
            count ++
        }
    }
    return count;
}

function correctCalcChecker(equations){
    var answer = [];

    for (var i=0; i<equations.length; i++){
        if(doMath(equations[i].num1,equations[i].num2,equations[i].op) === equations[i].result){
            answer.push(equations[i]);
        }
    }

    return answer;
}

function doMath(num1, num2, op){
    if(op === "+"){
        return num1 + num2;
    }
    if(op === "-"){
        return num1 - num2;
    }
    if (op === "*"){
        return num1 * num2;
    }
    if (op === "/"){
        return num1 / num2;
    }
}
