unction skippy_numbers(num){
    let answer = [];
    answer.push(num);
    for(var i=0; i<7; i++){
      if(answer.length%num === 0){
        answer.push(answer[i]+2)
      } else {
         answer.push(answer[i]+1)
      }
    }
    return answer;
  }
  
  console.log(skippy_numbers(2));