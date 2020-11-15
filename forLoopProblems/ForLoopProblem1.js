//defining console read write module for taking input from the user
io= require('console-read-write');
//making the function and declaring it async
//async makes the function execute when called and wait for user input statement
//if async is not defined then await can not be defined and all user inputs will be taken together
async function main()
{
    console.log("Please enter the no. below which power for 2 is needed to be find out");
    //taking input from the user
    let n= await io.read(parseInt());
    //iterating to calculate power and writing into file
    for(let i=0;i<n;i++)
    {
        let x= power(i);
        console.log("Element at "+(i+1)+"th position is: "+x);
    }
}
//function to calculate power
function power(a)
{
    let powerResult=0;
    //loop to iterate upto a and calculate power
    for(let j=0;j<=a;j++)
    {
        if(j==0)
        {
            powerResult=1;
        }
        else
            powerResult= 2*powerResult;
    }
    return powerResult;
}
main();