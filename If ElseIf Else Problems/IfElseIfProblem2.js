//defining process module to get input from the user
io= require('process');
console.log("please enter a number to find weekday");
//taking numerical input to write days of week.
let input= process.argv[2];
//if else for writing days of week from input
if(input==0)
{
    console.log("Sunday");
}
else if(input==1)
{
    console.log("Monday");
}
else if(input==2)
{
    console.log("Tueday");
}
else if(input==3)
{
    console.log("Wednesday");
}
else if(input==4)
{
    console.log("Thruday");
}
else if(input==5)
{
    console.log("Friday");
}
else if(input==6)
{
    console.log("Saturday");
}
else
{
    console.log("input was not in correct range");
}
