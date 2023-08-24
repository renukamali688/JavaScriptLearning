
console.log(`.............................Assignment 3.....................................`);
var leapYear=function(year){
    var yr= +year;
    if(year<=0 || isNaN(yr)){
        console.log(`${yr} => Data is Invalid Please Enter the Valid data For Correct Result`);

    }else{
        if(year%4==0 || year%400==0 || year%100==0){
            console.log(`${year} => is a Leap Year`);

        }else{
            console.log(`${year} => Not a leap year`);

        }
    }

}
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear('Twenty Twenty');
leapYear(undefined);
leapYear(NaN);
leapYear(1750);
leapYear(0);
