console.log("------******************step1*****************------");

function show1(){
    console.log("Hello This is First function No Argument and no return value");
}
show1();

function show2(){
    console.log("Hello This is Second function No Argument and no return value");
}
show2();

console.log("------******************step2*****************------");

function personDetail(fname,lname,cname){
    console.log(" First Name is:",fname,"Last name is:",lname,"Collage Name is:",cname);

}
personDetail("Renuka","Malangner","Mahatma Phule Collage");

console.log("------******************step3*****************------");

function swapvalue(arg1,arg2){
    console.log("Before Swaping: Argument 1",arg1,"Argument 2",arg2);
     var temp=arg1;
     arg1=arg2;
     arg2=temp;
    console.log("After Swaping: Argument 1",arg1,"Argument 2",arg2);
}
swapvalue("virat","Anushka");
console.log(".....................................................");
swapvalue(1000,2000);

console.log("------******************step4*****************------");

function addThreeValues(arg1,arg2,arg3){
    var result=arg1+arg2+arg3;
    console.log("Addition is :",result);
}
addThreeValues(20.5,50,669);
addThreeValues("Hello","Good","Morning");

console.log("------******************step5*****************------");

function bankDetails(bankName,accountNum,location,pinCode){

        console.log("Bank Name:",bankName,"AccountNumber:",accountNum,"Location:",location,"Pin Code:",pinCode);
}
bankDetails("CITI Bank",3456782345,"pune",431202);
bankDetails("Axis Bank",6879843612,"Mumbai",441202);
bankDetails("HDFC Bank",8643186415,"pune",631202,"Open");