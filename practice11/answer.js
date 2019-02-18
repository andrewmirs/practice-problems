function evenOdds(numbers){
    var answer = {
      even: [],
      odd: []
    }
    
    for(var i=0; i< numbers.length; i++){
      if(numbers[i] % 2 === 0){
        answer.even.push(numbers[i]);
      } else if (numbers[i] % 2 === 1){
        answer.odd.push(numbers[i]);
      }
    }
    answer.even = [...new Set(answer.even)];
    answer.odd = [...new Set(answer.odd)];
    return answer;
  }
  
  console.log(evenOdds([2,5,1,6,8,2,20,'cat',13,3]));