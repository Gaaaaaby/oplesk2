/**
* agregar los skills del objeto foo al array result, 
* mediante la funcion map 
*
* output => ["javascript", "html", "css", "python", "flask", "react", "redux"]
*/
let foo = {
    id:100,
    name:"foo",
    role:"admin",
    skills:["javascript", "html", "css", "python", "flask", "react", "redux"]
};
let result;

// console.log(foo)
for (let index = 0; index < foo.length; index++) {
    console.log(...Object.keys(foo[index]))
    
}

//export result
module.exports = result; 