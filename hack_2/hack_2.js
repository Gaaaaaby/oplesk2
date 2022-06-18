/**
* mediante el loop for agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [2,3,4]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];
for (let index = 0; index < arr.length; index++) {
    // console.log(Object.values(arr[index]))
    if(Object.values(arr[index]) > 1 && Object.values(arr[index]) < 5 ){
    //  console.log(Object.values(arr[index]))
     result.push(...Object.values(arr[index]))
    }
    
    
}
console.log(result)
//export result
module.exports = result;