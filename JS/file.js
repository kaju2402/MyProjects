//*var VS let VS const 

function wow(){
  if(true) {
    if(true){
      /*var*/ /*let*/ const myVar = "Hello";
      console.log(myVar);
    }
  }
} 
wow();


//* array.map

const arr = [1,2,3,4,5];
const newarr =arr.map((val) => {
  return val +5;
});
console.log(arr);
console.log(newarr);


//*array.reduce

const ar = [1,2,3.4,5];
const newar = ar.reduce(function(acc,val)
{
return acc+val;
},0);
console.log(newar);


//*function declaration & expression

fn();
function fn()
{
const f = 5;
}

const funcExpression = fn();
{
  const t =3;
} 
funcExpression();