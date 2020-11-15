//defining console read write module for taking input from the user
io= require('console-read-write');
//making the function and declaring it async
//async makes the function execute when called and wait for user input statement
//if async is not defined then await can not be defined and all user inputs will be taken together
async function main()
{
    console.log("Please enter the no. upto which harmonic sum is to be calculated");
    //taking input from the user
    let n= await io.read(parseInt());
    let total=0;
    for(let i=1;i<=n;i++)
    {
        total+= Reciprocal(i);
    }
    console.log("Harmonic sum is: "+total);
}
function Reciprocal(a)
{
    return 1/a;
}
main();