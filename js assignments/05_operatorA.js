console.log("--------------- Assignment 1 -------------------------------------");

console.log("...................................................................");
function squareOfWordLength(giveStr){

        var wordLen=giveStr.length;
        console.log(`Given String is: ${giveStr}`);
        console.log(`Given String Lenght is: ${wordLen}`);
        var lensqueare=wordLen*wordLen;
        console.log(`Square is: ${lensqueare}`);
        console.log("...................................................................");

}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log("...................................................................");
var divideStr = function(str){
        var strLength=str.length;
        console.log(`String Length is: ${strLength}`);

        var wordSeprate=str.split(' ');
        var wordCount=wordSeprate.length;
        console.log(`Total Word is: ${wordCount}`);

        var result=strLength/wordCount;
        console.log(`Total no of Word length divided by word Count is: ${result}`);

}
divideStr("I am Angular Developer");

console.log("....................................................................");
var multiplyStr = function(str){
    var strLength=str.length;
    console.log(`String Length is: ${strLength}`);

    var wordSeprate=str.split(' ');
    var wordCount=wordSeprate.length;
    console.log(`Total Word is: ${wordCount}`);

    var result=strLength*wordCount;
    console.log(`Total no of Word length Multiply by word Count is: ${result}`);

}
multiplyStr("I am Angular Developer");