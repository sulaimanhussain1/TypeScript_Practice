"use strict";
// sb se pehle unknown or any me difference kia hai 
// any me hum koi si bhi type assign krsakte hain . or any javascript ki power ko off krdeta hai 
// unknown ek smart type hai jo javascript ki power use kr k variable ki type ko pehchanti hai . example dekhein
//   ########################### any ##################
// let data:any;
// data = 30;
// data = "Sulaiman";
// data = "I am Smart. " ; 
// let item:string=data;
//  ############################# unknown ################## (isme error ajayega )
// let data:unknown;
// data = 30;
// data = "Sulaiman";
// data = "I am Smart. " ; 
// let item:string=data;
// ################################## Unknown ################## (with slve error)
let data;
data = "Sulaiman";
data = "Hussain";
data = 20;
let item;
if (typeof data === "string") {
    item = data;
}
