let numbers = [
{
    "id": "2",
    "name" : "sam"
},
{
    "id": "3",
    "name" : "sam"
},
{
    "id": "1",
    "name" : "sam"
}]
let len = numbers.length;
for(var i=0;i<len;i++) // for loop
{
    console.log(numbers[i]);
}

for (let x in numbers)  //for in
{
    console.log(numbers[x])
}

for (let x of numbers)  //for of
{
    console.log(x)
}

let sum = 0
numbers.forEach(func) // for each

function func(item){
    console.log(item);
}


