//defining console read write module for taking input from the user
io= require('console-read-write');
//making the function and declaring it async
//async makes the function execute when called and wait for user input statement
//if async is not defined then await can not be defined and all user inputs will be taken together
async function main()
{
    //taking input from the user about reading type of conversion
    console.log("Please enter 1 for converting farheniet to celcius\npress 2 for converting celcius to farheniet");
    let n= parseInt(await io.read());
    switch(n)
    {
        case 1:
            farehnietToCelcius();
            break;
        case 2:
            CelciusTofarehniet();
            break;
        default:
            console.log("you entered incorrect input");
            break;
    }
}
async function farehnietToCelcius()
{
    console.log("Please enter farehniets temperature");
    let degF= parseInt(await io.read());
    if(degF>=32 && degF<=212 )
    {
    let degC= (degF-32)*(5/9);
    console.log("celcius: "+degC);
    }
    else
    {
        console.log("farheniet temperature is not in correct range");
    }
}
async function CelciusTofarehniet()
{
    console.log("Please enter celcius temperature");
    let degC= parseInt(await io.read());
    if(degC>=0 && degC<=100 )
    {
    let degF= (degC*(9/5))+32;
    console.log("celcius: "+degF);
    }
    else
    {
        console.log("celcius temperature is not in correct range");
    }
}
main();