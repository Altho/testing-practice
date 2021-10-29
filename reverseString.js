function reverseString(string){
let resultString = "";
for (let i = string.length; i!=0; i--){
    resultString = resultString+string[i-1];
}
return resultString;
}

module.exports=reverseString;