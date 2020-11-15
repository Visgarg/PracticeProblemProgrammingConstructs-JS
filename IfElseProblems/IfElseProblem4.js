//defining math floor and math random for getting random number between 0 or 1.
let headOrTails= Math.floor(Math.random()*10)%2;
//if random no generated is 0, then heads
if(headOrTails==0)
{
    console.log("Heads");
}
//if random no generated is 1, then tails
else
{
    console.log("Tails");
}