//  Single Line Comment
/* 
    Multiline Comment
*/

/*
    Datatype :- 
        1) Number(int float double long int)
        2) Boolean(True False)
        3) String : a aaa a10
        4) Object

    In C language 

        int i = 1;
        char[2] str = "string";

    Javascript

        var i = 1;
        var str = "string"

        let i = 1;
        i = "one";

        const j = 5;

        j = 7;
*/
/*
let i;

//console.log(i);
i = null;
//console.log(typeof(i));
i = "Five";
//console.log(typeof(i));

    Operators In JS
*/
/*
let i1,j,k;

i1 = "A";
j = 10;

k = i1 - j;   // "5"+"10" = 510 A-10 = -5

// % / + - 

console.log(k); //510

// > < >= <= == !=  === !==

let a = 19, b = "2";



if(a%2 == 1){
    console.log("True");
}
else{
    console.log("False");
}

// Loop :- while for do-while for-in for-each

//number

let i = 2; //literal
let i = new Number(2);//using Constructor

//string

let i = "two";
let i = new String("Two");

*/
// Array
/*
let Arr = [1,2,3]
let ArrS = ["One", 2 , "Three", true, [1,2]]

Arr[2] = 5
Arr[4] = 10

console.log(Arr);


// Object 

let Obj = {
    name : "ECS",
    Address : "Karad",
    Mobile : 797290088,
}

console.log(Obj["name"]);
*/

function gstCalculation(Amount,gst){
    return Amount+gst;
}

let i = function(){
    console.log("Hiii");
}

let j = () =>{
    
}

i();
console.log(gstCalculation(1000));
console.log(gstCalculation(1000,12));