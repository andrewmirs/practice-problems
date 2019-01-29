function reverseArray( array ){
    var answer=[];
    for (var i=array.length-1; i>=0; --i){
      answer.push(array[i]);
    }
    return answer;
  }
  
  var myArray = ['hello', 45, 'Bob', 'what', '23'];
  
  console.log(reverseArray(myArray));