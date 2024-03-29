//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
function reversing(names){

return(names.reverse())
}
console.log(reversing(["wato","Adano"]))

//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
var array=(2,3,4,0,o,-3,8);
function myArray(){
    let negative = arrat.filter((elemnt)=>
    element >0)
    let positive =array.filter((element)=>
    element >0)

    let zeroNums =array.filter((element)=>
    element==0)
    return{
        negative:negative,
        positive:positve,
        zeroNums:zeroNums,
    }
}


//Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.


//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.

function multiplication(number){
    SVGAnimatedNumberList.forEach((number)=>{
        console.log(number*2);
    })
}
  multiplication([8,6,3,4])

    
//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function =ValuesArray(arr){
let theFour = arr.slice(0,4).map(item =>item *8);
let thetwo = arr,slice(-3).map(item => item+5);
const newArray = theFour.concat(thetwo);
console.log(newArray);
}
ValuesArray([6,2,78,6,12,8])