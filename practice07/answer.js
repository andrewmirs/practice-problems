function pigLatin(string){
    var answer = '';
    var firstletter = '';
    
    for (var i=0; i<string.length; i++){
      if((firstletter !== '') && (string.charAt(i) !== ' ')){
        answer = answer + string[i]
        string.slice(i, 1);
      }
        if((firstletter === '') && (string.charAt(i) !== ' ')){
        firstletter = string[i];
        string.slice(i, 1);
      }
      if(((string.charAt(i) === ' ') && (i !== 0)) || (i === string.length-1)){
        answer = answer + firstletter + 'ay ';
        firstletter = '';
      }
    }
    
    return answer
  }
  
  console.log(pigLatin('Hello my name is Stu'));