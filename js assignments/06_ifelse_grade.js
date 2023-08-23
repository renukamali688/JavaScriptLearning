console.log("...........................Assignment 2...........................................");

var voteEligible=function(age,voter){
    var ageValue= +age;
    if (age<18 || age>130 || isNaN(ageValue))
    {
    console.log(`"${voter}" Invalid Data Enter the Correct Age Value.`);
    }else{
        if(age>=18)
        {
            console.log(`"${voter}" Congrats!! You are Eligible for Voting`);
        }else{
            console.log(`"${voter}" your age is ${age} so you are Not Eligible for Voting`);
        }
    }
}
voteEligible(23,"Jenny");
voteEligible(17,"Shyam");
voteEligible(8,"Maya");
voteEligible(-10,"shital");
voteEligible(200,"joky");
voteEligible(null,"Rushi");
voteEligible(undefined,"Syami");

