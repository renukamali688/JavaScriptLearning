console.log("Without Using Function:-");

console.log("Swap Two Numbers:");

var name1="Sweety";
var name2="Cutie";
console.log('Before Swaping: name1 =>',name1,'name2 =>',name2);

var temp=name1
name1=name2
name2=temp

console.log('After Swaping: name1 =>',name1,'name2 =>',name2);

console.log("----------------------************--------------------");

console.log("Swap Three Numbers:");

var num1="10";
var num2="20";
var num3="30";
console.log('Before Swaping: number1 =>',num1,'number2 =>',num2,'number3 =>',num3);

var temp=num1 
num1=num2
num2=num3
num3=temp

console.log('After Swaping: number1 =>',num1,'number2 =>',num2,'number3 =>',num3);

console.log("----------------------************--------------------");


console.log(" Using Function:-");

console.log("Swap Two Numbers:");

function swap(na1,na2){
    console.log("Before Swaping: name1 =>",na1,"name2 =>",na2);
  
    var temp=na1;
    na1=na2;
    na2=temp;
    
    console.log("After Swaping: name1 =>",na1,"name2 =>",na2);
}
var name1="Ravi";
var name2="Ram";
swap(name1,name2)

console.log("--------***------------************-----------***--------");
console.log("Swap Three Numbers:");

function swap(n1,n2,n3){
    console.log("Before Swaping: num2 =>",n1,"num2 =>",n2,"num3 =>",n3);
  
    var temp=n1;
    n1=n2;
    n2=n3;
    n3=temp;
    
    console.log("After Swaping: num2 =>",n1,"num2 =>",n2,"num3",n3);
}
var num1=100;
var num2=200;
var num3=300;
swap(num1,num2,num3)

console.log("--------***------------************-----------***--------");

