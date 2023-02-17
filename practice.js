// let a1 = "as";
// a1 = 9 ; 
// console.log(a1)
// const b1 = 5;
// b1++;
// console.log(b1)
// let a2 = <any> {name: "zia" , id:2};
// a2 = {name: "zia" , id:2};
// a2 = {name: "zia" , id:2 , gender:false};
// a2 = {name: "zia", gender:false};
// enum Color2 {Red=1 , Green =2 , Blue= 4};
// let c = Color2["Blue"]
// console.log(colorIndex)
// let as : (...rest : string[], fname:string) => string = function(...restOfName : string[] , firstName : string) { return firstName + " " + restOfName.join( " ")
//  }
//  console.log(as("Khan" ,"zia" , "u"))
// function myCall(text : string){
//     console.log("inside " + text)
// }
// function myCall2(initial:string, callback: (text:string) => void){
//     callback(initial)
// } 
// myCall2("mytext" , myCall );
var myType = { name: "zia", id: 1 };
var myType1 = { id: 2, name: "Tom", age: 22 };
myType = myType1;
