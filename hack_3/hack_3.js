/**
* mediante el loop while agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [1,3,5]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];
 
for (let index = 0; index < arr.length; index++) {
    if(Object.values(arr[index]) % 2 != 0){
        console.log(...Object.values(arr[index]))
        result.push(...Object.values(arr[index]))
    }
    
}
 
//export result
module.exports = result; 