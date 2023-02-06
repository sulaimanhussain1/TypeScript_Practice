"use strict";
// literal type me hum type ki jagah direct value assgin krskte hain
// for example :-    let Data : string | number = "Hello";  ( In union type )
//                  let Data : "abc" | 123 = "abc";     ( In  literal type )
let type = "Sulaiman Hussain" || "Jhangeer Hussain";
let User = prompt("what is your name ? ");
if (User === type) {
    console.log("You are Awesome");
}
else {
    console.log("I Don't Know. Who are you");
}
