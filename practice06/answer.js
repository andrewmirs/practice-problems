function fibonacciSeq(num){
    if (num === 1) return [0];
    if (num === 2) return [0,1];
    var answer = [0,1];
    for (var i=2; i<num; i++){
      answer.push(answer[i-2]+ answer[i-1]);
    }
    return answer;
  }
  
  console.log(fibonacciSeq(12));