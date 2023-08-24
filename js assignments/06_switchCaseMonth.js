console.log(`....................Assignment 1...............................`);

function monthOfYear(month) {
  switch (month) {
    case 1:
        console.log(`${month} => January`);
      break;

    case 2:
        console.log(`${month} => February`);
      break;
    case 3:
        console.log(`${month} => March`);
      break;
    case 4:
        console.log(`${month} => April`);
      break;
    case 5:
        console.log(`${month} => May`);
      break;
    case 6:
        console.log(`${month} => Jun`);
      break;
    case 7:
        console.log(`${month} => July`);
      break;
    case 8:
        console.log(`${month} => August`);
      break;
    case 9:
        console.log(`${month} => September`);
      break;
    case 10:
        console.log(`${month} => October`);
      break;
    case 11:
        console.log(`${month} => November`);
      break;
    case 12:
        console.log(`${month} => December`);
      break;

    default:
        // if(isNaN(mon = +month))
        // {
        //     console.log(`${mon} - Ented Value is Invalid -- please Enter the valid Value`);
        // }
        // else if(month>=12){
        //     console.log(`${month} - is Greater than 12 -- please Enter Monthwise value`);
        // }
       
        // else if(month<=0){   
        //     console.log(`${month} - is lesser value or Invalid -- please enter correct value`);
        // }
        console.log(`-----------------------------------------------------------------`);

        console.log(`${month} - Ented Value is Invalid -- please Enter the valid Value`);
      
      break;
  }
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);









