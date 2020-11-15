//defining console read write module for taking input from the user
io= require('console-read-write');
//making the function and declaring it async
//async makes the function execute when called and wait for user input statement
//if async is not defined then await can not be defined and all user inputs will be taken together
async function main()
{
    console.log("Please enter the first no. to check for prime");
    //taking input for calculating factorial
    let n= await io.read();
    let factorial=1;
    //iterating the loop to calculate factorial
    for(let i=1;i<=n;i++)
    {
        factorial= factorial*i;
    }
    console.log("factorial for "+ n+" is: "+factorial);
}
main();