
let today = new Date();
let outputString = "";
let month = 0;

month = today.getMonth()+1;

outputString = today.getFullYear()+"年"+month+"月"+today.getDate()+"日";
console.log(outputString);