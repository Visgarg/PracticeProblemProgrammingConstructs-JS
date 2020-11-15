//defining console read write module for taking input from the user
io= require('console-read-write');
//making the function and declaring it async
//async makes the function execute when called and wait for user input statement
//if async is not defined then await can not be defined and all user inputs will be taken together
async function main()
{
console.log("please enter 1st no.");
let a= await io.read(parseInt())
console.log("please enter 2nd no.");
let b= await io.read(parseInt())
console.log("please enter 3rd no.");
let c=await io.read(parseInt())
if(a>b & a>c)
    console.log("max value- "+a);
else if(b>c & b>a)
    console.log("max value- "+b);
else
    console.log("maximum value- "+c);
if(a<b & a<c)
    console.log("min value- "+a);
else if(b<c & b<a)
    console.log("min value- "+b);
else
    console.log("min value- "+c);
}
main();
