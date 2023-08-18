
console.log("---------------- Step 1 -------------------");
var squar=function (n){
    result=n*n;
    console.log(`square of ${n} is => ${result}`);
}
squar(5);
squar(6);
squar(25);
squar(100);
squar(67);
squar(89);
squar(59);

console.log("---------------- Step 2 -------------------");
console.log(`Type of Function:`,typeof squar);

console.log("---------------- Step 3 -------------------");
var rect=function(l,b){
    result=l*b;
    console.log(`Area of Rectangle is:`, result);
}
rect(499,917);

console.log("---------------- Step 4 -------------------");
var swapVar=function(num1,num2){
    console.log(`Before Swap Number Are:  ${num1} , ${num2}`);
    temp=num1;
    num1=num2;
    num2=temp;
    console.log(`After Swap Number Are:  ${num1} , ${num2}`);

}
swapVar("Mahi","Raina");
swapVar(55,77);

console.log("---------------- Step 5 -------------------");

var str="JS the most popular language of Internet";
var stringLen=str.length;
console.log(`The Given String is: ${str} 
Total number of Characters available in the String : ${stringLen}`);

var sixth=str.charAt(6);
console.log(`Charachter at index 6 is: ${sixth}`);

var elevnth=str.charAt(11);
console.log(`Charachter at index 11 is: ${elevnth}`);

var lenghStr=str.length;
var lastElemnt=str.charAt(lenghStr-1);
console.log(`Charachter at Last Element is: ${lastElemnt}`);

var firstChar=str.charAt(0);
console.log(`Charachter at Very First Element is: ${firstChar}`);


var thirdLastElemnt=str.charAt(lenghStr-3);
console.log(`Charachter at Last Element is: ${thirdLastElemnt}`);

var word=str.split(' ');
var totalWord=word.length;
console.log(`Total Number of Words of the Given String:${totalWord}`);

var squareWord=totalWord*totalWord;
console.log(`and square of total number of words is: ${squareWord}`);