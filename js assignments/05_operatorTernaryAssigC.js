function maleMarriageEligibility(gender,age,boyName){
    var result=(gender="Male" && age >= 21 && boyName)? "You are 'Eligible' For Marriage" : "You Are 'Not Eligible' For Marriage";
    console.log(`"${boyName}" ${result}`);
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",15,"Stew Jobs");

function femaleMarriageEligibility(gender,age,girlName){
    var result=(gender="Female" && age >= 18 && girlName)? "You are 'Eligible' For Marriage" : `You Are 'Not Eligible' For Marriage`;
    console.log(`"${girlName}" ${result}`);
}
femaleMarriageEligibility("Female",16,"Jennifer");
femaleMarriageEligibility("Female",27,"Millinda Gates");
