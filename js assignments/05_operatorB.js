console.log("---------------------- Assignment 2----------------------------------");

console.log("=================********* Step 1 **********=========================");

var greaterNumber=function(num1,num2){
    var result= (num1 > num2) ? num1 : num2; 
        console.log(`Greatest Number Amungst ${num1} and ${num2} is:  ${result}`);

}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("=================********* Step 2 **********=========================");

var evenOdd=function(n){
    var result= (n % 2 == 0) ? "EVEN" : "ODD"; 
    console.log(`Given Number ${n} is:  ${ result}`);

}
evenOdd(29);
evenOdd(44);
evenOdd(0);
evenOdd(101);

console.log("=================********* Step 3 **********=========================");

 var wordLength=function(word){
    var num=word.length;
    var evenodd=(num%2==0)?"EVEN":"ODD"
    console.log(`The "${word}" length is ${num} so That is: ${evenodd}`);


}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");

