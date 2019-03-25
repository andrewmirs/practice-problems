function fittingWords(str, words){
  var split = str.split('');
  var answer = [];
  
  for( var i=0; i< words.length; i++ ){
    for( var ltrs=0; ltrs < split.length; ltrs++ ){
      if(!words[i].includes(split[ltrs])){
//           console.log(split[ltrs] + ' doesnt exist in '  + words[i])
        i++;
        break;
      }
    }
    if(i < words.length){
      answer.push(words[i]);
    }
  }
  
  return answer;
}

var myArray = ['cat','caterpillar','whale','accurate','smile','cactus','cute'];

  