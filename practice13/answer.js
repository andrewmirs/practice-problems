function mathSequence(num1, num2){
    let answer = [];
    let plus = num1 + num2;
    answer.push(num1 + " + " + num2 + " = " + plus);
    let minus = num1 - num2;
    answer.push(num1 + " - " + num2 + " = " + minus);
    let mult = num1 * num2;
    answer.push(num1 + " * " + num2 + " = " + mult);
    let div = num1 / num2;
    answer.push(num1 + " / " + num2 + " = " + div);
    
    return answer
  }
  
  console.log(mathSequence(2,5));