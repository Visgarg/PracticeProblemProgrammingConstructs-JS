fs= require("fs");
//defining module process for taking input from the user
io= require('process');
console.log("Please enter the single digit number");
//taking single  digit input from the user 
input= process.argv[2];
//if else condition for converting it into word
if(input==0)
{
    console.log("Zero");
}
else if(input==1)
{
    console.log("One")
}
else if(input==1)
{
    console.log("One")
}
else if(input==2)
{
    console.log("Two")
}
else if(input==3)
{
    console.log("Three")
}
else if(input==4)
{
    console.log("Four")
}
else if(input==5)
{
    console.log("Five")
}
else if(input==6)
{
    console.log("Six")
}
else if(input==7)
{
    console.log("Seven")
}
else if(input==8)
{
    console.log("Eight")
}
else if(input==9)
{
    console.log("Nine");
}
else
    console.log("input was not in required range");
