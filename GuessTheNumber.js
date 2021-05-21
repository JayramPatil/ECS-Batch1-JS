const uNum = document.getElementById('userNumber');
const btn = document.getElementById('btn');
const res = document.getElementById('result');

btn.addEventListener('click', checkTheNumber);

const RandomNumber = Math.floor(Math.random()*100)+1;

const p = document.createElement('p');

function checkTheNumber(){

    if(uNum.value == ''){
        alert('Please Enter Any Value Then Continue !')
    }
    else{
        if(uNum.value == RandomNumber){
            p.innerHTML = "You Have Guessed Right Number";
            p.className = 'result'
            p.style.backgroundColor = 'green'
        }
        else if(uNum.value > RandomNumber){
            p.innerHTML = 'Correct Number Is Less Than Entered Number'
            p.className = 'result'
            p.style.backgroundColor = 'Yellow'
        }
        else{
            p.innerHTML = 'Correct Number Is Greater Than Entered Number'
            p.className = 'result'
            p.style.backgroundColor = 'Yellow'
        }

        res.appendChild(p);
    }
    console.log(RandomNumber);
}