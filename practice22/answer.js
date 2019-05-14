function sort_by_field(arr, field){
    let answer = arr.sort((a,b) => a[field] < b[field] ? -1 : 1);
    return answer;
  }
  
  var input_array = 
  [
      {name: 'John', age:42, gender:'M'},
      {name: 'Jack', age:34, gender:'M'},
      {name: 'Michael',age:40, gender: 'M'},
      {name: 'Kendra',age:48, gender:'F'}
  ]
  
  console.log(sort_by_field(input_array, 'age'));