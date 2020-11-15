//making the function and declaring it async
//async makes the function execute when called and wait for user input statement
//if async is not defined then await can not be defined and all user inputs will be taken together
async function main()
{
    //defining console read write module for taking input from the user
    io= require('console-read-write');
    console.log("Please enter the month ");
    //entering months
   let month= await io.read();
    //let month='Ki';
    console.log("Please enter the day");
    //let day=20;
    //entering days and parsing to integer
    let day=  await io.read(parseInt());
    //checking for months condition
    if(month.toLowerCase() =='march' || month.toLowerCase() =='april' || month.toLowerCase() =='may' || month.toLowerCase() =='june' )
    {
        //checking for days condition
        if(day>=1 && day<=20)
        {
            console.log('date is correct');
        }
        else
        {
            console.log('day is incorrect');
        }
    }
    else
        console.log('month is incorrect');
}
//calling main function
main();