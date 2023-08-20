var eligibility= function(gradScore,hscScore,sscScore,candidateName){
    var result=(gradScore>70 || hscScore>80 || sscScore>90 && candidateName)? "You are Eligible For TCS Interview" : " Unfortunately you are no eligible for Inteview";
    console.log(`" ${candidateName} " ${result}`);

}
eligibility(80,86,90,"Renuka");
eligibility(70,65,55,"Ashwini");
eligibility(60,79,88,"Mohini");

