function reverseArray( array ){
    var answer=[];
    for (var i=array.length-1; i>=0; --i){
      answer.push(array[i]);
    }
    return answer;
  }
  
  var myArray = ['hello', 45, 'Bob', 'what', '23'];
  
  console.log(reverseArray(myArray));

// -OR- //

function reverseArray2( array ){
    var answer=[];
    for (var i=0; i< array.length; i++){
      answer.unshift(array[i]);
    }
    return answer;
  }
  
  var myArray = ['hello', 45, 'Bob', 'what', '23'];
  
  console.log(reverseArray2(myArray));