
console.log(`.......................Assignment 2................................`);

function marriageEligibility(age,gender){

    var ag =+age; 
    if((age<0 ) || isNaN(ag)){
        console.log(`data is inValid please Enter the correct data.`);

    }else if((age<=0 && gender=="Other" )||( age>=21 && gender=="Male") || (age>=18 && gender=="Female")){

            console.log(`Gender "${gender}" - Age ${age} => You Are Eligible for Marriage`);

        }else{
            
                console.log(`Gender "${gender}" - Age ${age} => you Are Not Eligible For Marriage`);
              
        }      
}
marriageEligibility(17,"Male");
marriageEligibility(19,"Female");
marriageEligibility(25,"Male");
marriageEligibility(16,"Female");
marriageEligibility(35,"Other");
marriageEligibility(41,"Other");

