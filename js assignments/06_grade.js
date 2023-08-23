console.log(".............................Assignment 3................................................");

function gradeCalculation(marks){
    var mks= +marks;
    if(mks<0 || mks >100 || isNaN(mks)){
        console.log(`${mks} is InValid Data Please Enter Valid Data For Effective Result `);

    }else{
        if(mks>=90){
            console.log(`Fantastic Marks: ${mks}, Your Grade is A+`);

        }else if(mks>=75 && mks<90){
            console.log(`Excellent Marks ${mks}, your Grade is A`);
    
        }
        else if(mks>=50 && mks<75){
            console.log(`Good Marks ${mks}, your Grade is B`);
    
        }else if(mks>=35 && mks<50){
            console.log(`Marks is${mks}, your Grade is C,Need Improvement`);
    
        }
    }
    
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation(91);
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);