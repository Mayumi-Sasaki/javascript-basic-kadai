let num = 15;
let numStr;
let outputStr;

if (num >= 1){
  if (num%3 === 0 && num%5 === 0){
    numStr="3と5";
  }else if(num%3 === 0){
    numStr="3";
  }else if(num%5 === 0){
    numStr="5";
  }else{
    numStr = "";
  }
  if(numStr!=""){
    outputStr=numStr + "の倍数です";
  }else{
    outputStr = num;
  }
  
}else{
 outputStr="1以上の数を入力してください" ;
}

console.log(outputStr);