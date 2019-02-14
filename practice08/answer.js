function character_convert(string){
    var answer = "";
    for(var i=0; i<string.length; i++){
      answer= answer + string.charCodeAt(i);
    }
    return answer;
  }
  
  console.log(character_convert("the cat in the hat"));