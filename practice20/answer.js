
function randomize_array(arr){
    var answer = [];
    var array = arr;
    while(array.length > 0){
        var random = Math.floor(Math.random() * array.length);
        var randomNum = array[random]
        answer.push(randomNum);
        array.splice(random, 1);
    }
    return answer;
}

console.log(randomize_array([5,9,11,2,99,27,0]))