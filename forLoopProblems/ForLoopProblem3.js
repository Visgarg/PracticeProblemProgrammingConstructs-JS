//defining console read write module for taking input from the user
io= require('console-read-write');
//making the function and declaring it async
//async makes the function execute when called and wait for user input statement
//if async is not defined then await can not be defined and all user inputs will be taken together
async function main()
{
    console.log("Please enter the no. to check for prime");
    //taking input from the user
    let n= await io.read(parseInt());
    //check is used to validate if no is divided by any iterator
    let check=false;
    //iterating loop upto n/2
    for(let i=2;i<=Math.ceil(n/2);i++)
    {
        //if n is divisible by any iterator, then n is not prime no
        if(n%i==0)
        {
            check= true;
            console.log(n +" is not a prime number");
            break;
        }
    }
    //if check is still false
    //then n is prime number.
    if(!check)
    {
        console.log(n+" is a prime number.");
    }
}
main();