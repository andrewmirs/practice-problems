
function sort_object_list_by_name(arr){
  let answer = arr;
  answer.sort((a,b) => a.age < b.age ? -1 : 1 );
  return answer;
}

var input_array = 
[
    {name: 'Michael',age:40, gender: 'M'},
	{name: 'John', age:42, gender:'M'},
	{name: 'Jack', age:34, gender:'M'},
	{name: 'Kendra',age:48, gender:'F'}
];

console.log(sort_object_list_by_name(input_array));