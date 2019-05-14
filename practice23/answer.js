function find_factors(num){
    let answer = [];
    for(let i=1; i<=num; i++){
        if(num % i === 0){
        answer.push(i);
        }
    }
    return answer;
}

console.log(find_factors(10));