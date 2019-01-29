function biggerWords( string, wordsArray ){
    var answer = [];
    for(var i=0; i<wordsArray.length; i++ ){
      if (wordsArray[i].length > string.length){
        answer.push(wordsArray[i]);
      }
    }
    return answer;
  }
  
  var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];
  
  console.log(biggerWords('whales', myArray));