function sortByDataType( array ){
    var boolean=[];
    var string=[];
    var number=[];
    
    for(var i=0; i< array.length; i++){
      if(typeof array[i] === "string"){
        string.push(array[i]);
      } else if(typeof array[i] === "number"){
        number.push(array[i]);
      } else if(typeof array[i] === "boolean"){
        boolean.push(array[i]);
      }
    }
    
    return [boolean, number, string];
  }
  
  var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
  
  console.log(sortByDataType(myArray));