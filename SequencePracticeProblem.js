//generating random numbers ---1
console.log(Math.floor(Math.random()*10));
//random to get no . between 1 to 6 ----2
min=1;
console.log(Math.floor((Math.random()*12)%6)+min);
//random two dice numbers
diceNumber1= Math.floor((Math.random()*12)%6)+min;
diceNumber2= Math.floor((Math.random()*12)%6)+min;
console.log(diceNumber1+diceNumber2);

//defining console read write module for taking input from the user
const io = require('console-read-write');

//reading random no and finding their sum and average ---3

//making the function and declaring it async
//async makes the function execute when called and wait for user input statement
//if async is not defined then await can not be defined and all user inputs will be taken together
async function main()
{
    //defining array for adding inputs
    let numbers= new Array();
    //for loop used for reading input 
    for(i=1;i<=5;i++)
    {
    io.write("Please enter"+i+" number");
    //taking input from the user asynchnronously
    a= await io.read();
    let check= true
    //iterating the loop until correct input is entered
    while(check)
    {
        //checking for no. to be double digit
        if(a>=10&a<=99)
        {
            break;
        }
        else
        {
            //taking the input again, if not in range.
            console.log("you entered no in wrong range");
            console.log("please enter "+i+" no again");
            a=await io.read();
        }
    }
    //adding element in array
    console.log('No. is in correct range');
    numbers[i-1]=parseInt(a);
    }
    //printing array
    console.log(numbers);
    //declaring variable sum
    let sum=0;
    //iterating loop to calculate sum
    for(i=0;i<numbers.length;i++)
        sum= sum+numbers[i];
    console.log(sum);
    console.log("average- "+(sum/5));

}
main();

//defining functions feet to inches for converting feet to inch ---4
function feetToInches(feet)
{
    return feet*12;
}
//defining function to convert inches to feet for converting inch to feet
function inchesToFeet(inches)
{
    return inches/12;
}
//calling function for converting digit
let a= inchesToFeet(42);
console.log(a);

