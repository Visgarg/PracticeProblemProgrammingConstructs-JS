//defining console read write module for taking input from the user
io= require('console-read-write');
//making the function and declaring it async
//async makes the function execute when called and wait for user input statement
//if async is not defined then await can not be defined and all user inputs will be taken together
async function main()
{
    console.log("Please enter the first no. to check for prime");
    //taking input range from the user
    let n1= await io.read();
    console.log("please enter the last element of the range");
    let n2= await io.read();
    if(n1<=n2)
    {
        //iterating over the range
        for(let range=n1;range<=n2;range++)
        {
            prime(range);
        }
    }
    else
    {
        console.log("you entered incorrect range");
    }
} function prime(n)
{
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