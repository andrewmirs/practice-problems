
function matrix_add(arr1, arr2){
    var answer = [];
    for( var i=0; i<arr1.length; i++){
      var container = [];
      arr1[i].map((num, index) => {
        container.push(num + arr2[i][index]);
      });
      answer.push(container);
      container=[];
    }
    return answer;
  }
  
  var array1 = [ [1,2,3], [3,4,5], [6,7,8] ];
  var array2 = [ [1,2,3], [1,2,3], [1,2,3] ];
  
  console.log(matrix_add(array1, array2));