let result;
result ='3' + 2;
console.log(`Result is ${result} Because 2 is number type converted into String Implicitly.`);

result='3' + true;
console.log(`Result is ${result} Because true is Boolean type converted into string implicitly.`);

result='3' + undefined;
console.log(`Result is ${result} Because undefined is converted into String.` );

result='3' + null;
console.log(`Rresult is ${result} Because null is converted into string.`);

console.log("---------=-------------*******************--------------------------");

let result1;

result1 = '4' - true;
console.log(`Result is ${result1} Because true is Boolean Type and it's 1 converted into number Implicitly then 4-1=3.`);

result1 = 4 + true;
console.log(`Result is ${result1} Because true is Boolean type and it's 1 converted into Number implicitly then 4+1=5.`);

result1 = 4 + false;
console.log(`Result is ${result1} Because false id Boolean Type and it's 0 Converted into Number Implicitly then 4+0=4.`);

console.log("----------------------*********************--------------------------");

let result2;

console.log("---------------------------Step 1------------------------------------------");
result2 = '4' - '2';
console.log(`Result is ${result2} '4' and '2' Strig is converted into Number 4-2=2.`);

console.log("---------------------------step 2-------------------------------------------");
result2 = '4' - 2;
console.log(`Result is ${result2} Because 4 is String value and it's converted into number then Result will be 4-2=2`);

console.log("---------------------------step 3-------------------------------------------");
result2 = '4' * 2;
console.log(`Result is ${result2} Because '4' is Converted into Number that is Result 4*2=8.`);

console.log("---------------------------step 4-------------------------------------------");
result2 = '4' / 2;
console.log(`Result is ${result2} Because '4' is converted into Number that is Result will be 4/2=2.`);

console.log("=====================***************************========================");

let result3;

result3 = 0 == ' ';
console.log(`Result is ${result3} Because Space is converted into number implicitly.`); 

result3 = 0 == '0';
console.log(`Result is ${result3} Because '0' is Converted into Number `);

result3 = 0 == false;
console.log(`Result is ${result3} Because false is converted into number and That is 0.`);

result3 = null == undefined;
console.log(`Rresult is ${result3} Because undefined and null it's are same datatype.`);

result3 = 1 == [1];
console.log(`Result is ${result3} Because Both are same type that is number. `);

result3 = 1 == true;
console.log(`Result is ${result3} Because True is converted into a Number that is 1.`);

result3 = 1 == '1';
console.log(`Result is ${result3} Because String '1' Converted into a Number.`);





