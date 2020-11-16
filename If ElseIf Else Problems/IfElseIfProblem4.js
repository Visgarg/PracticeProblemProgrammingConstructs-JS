//defining module for taking input from user
io= require('process');
//getting the inputs from the user
let inputOne= parseInt(process.argv[2]);
let inputTwo= parseInt(process.argv[3]);
let inputThree= parseInt(process.argv[4]);
//calculating different results from different formulas
resultOne= inputOne+inputTwo*inputThree;
resultTwo= inputThree+inputOne/inputTwo;
resultThree= inputOne%inputTwo+inputThree;
resultFour= inputOne*inputTwo+inputThree;
//calculating max and min 
let maxFromResult= Math.max(resultOne,resultTwo,resultThree,resultFour);
let minFromResult= Math.min(resultOne,resultTwo,resultThree,resultFour);
//prinitng result
console.log("Max result from forumlas "+maxFromResult);
console.log("Min result from formulas "+minFromResult);
