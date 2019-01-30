function fizzBuzz(){
    var answer=[];
    for(var i=1; i<101; i++){
      if(i/15 === Math.floor(i/15)){
        answer.push("FizzBuzz");
      } else if (i/5 === Math.floor(i/5)){
        answer.push("Buzz");
      } else if (i/3 === Math.floor(i/3)){
        answer.push("Fizz");
      } else {
        answer.push(i);
      }
    }
    return answer;
  }
  
  console.log(fizzBuzz());