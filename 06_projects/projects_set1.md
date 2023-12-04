# Projects related to DOM

# Solution code

## project 1

```javascript
  
  console.log("saloni)

  const btn = document.querySelectorAll('.button');
const body = document.querySelector("body")
btn.forEach(function(btn) {
  console.log(btn)
  btn.addEventListener('click',function(e){
     console.log(e);
     console.log(e.target);
     if(e.target.id === 'grey'){
       body.style.backgroundColor = e.target.id;
     }
     if(e.target.id === 'white'){
       body.style.backgroundColor = e.target.id;
     }
     if(e.target.id === 'blue'){
       body.style.backgroundColor = e.target.id;
     }
     if(e.target.id === 'yellow'){
       body.style.backgroundColor = e.target.id;
     }
     if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id;
    }
  })
});

```
## project 2 Solution

```javascript

const frm = document.querySelector('form')
// this usecase will give you empty

frm.addEventListener('submit',function(e){
  e.preventDefault()

  const ht = parseInt(document.querySelector('#height').value)
  const wt = parseInt(document.querySelector('#weight').value)
  const res = document.querySelector('#results')
  if(ht === '' || ht < 0 || isNaN(ht)){
    results.innerHTML = `please give a valid ht ${ht}`;
  }else if(wt === '' || wt < 0 || isNaN(wt)){
    results.innerHTML = `please give a valid ht ${wt}`;
  }else{
   const bmi =  ( wt / ((ht* ht) / 10000)).toFixed(2)
  //  show the results
  
  if(bmi < 18){
    results.innerHTML = `<span>Under Weight = Less than ${bmi}</span>`
  }else if(bmi > 18 && bmi < 24){
    results.innerHTML = `<span>NOrmal Range =  ${bmi}</span>`
  }else{
    results.innerHTML = `<span>OverWeight = Greater than ${bmi}</span>`
  }
  }
  
})

```
## project 3 Solution

```javascript

// document.getElementById('clock')
const clc = document.querySelector('#clock')

// let date = new Date();
// console.log(date.toLocaleTimeString())

setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  clc.innerHTML = date.toLocaleTimeString();
},1000)

```
## project 4 solution

```javascript

let rndnum = (parseInt(Math.random()  * 100 +1 ))
const submit = document.querySelector('#subt')
const userinput = document.querySelector('#guessfield')
const guesslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let count = 1

let playGame = true
if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userinput.value)
    validateGuess(guess)
  })
}
function validateGuess(guess){
  if(NaN(guess)){
    alert('plz enter valid number')
  }else if(guess < 1){
    alert('plz enter a number more than 1')
  }
   else if(guess < 1){
    alert('plz enter a number less than 100')
  }else{
    prevGuess.push(guess)
    if(count > 10){
      displayGuess(guess)
      displayMsg(`Game Over. Random number was ${rndnum}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === rndnum){
    displayMsg('you guessed it right')
    endGame()
  }else if(guess < rndnum){
    displayMsg('number is too low')
  }else if(guess < rndnum){
    displayMsg('number is too high')
  }
}

function displayGuess(guess){
  userinput.value = '';
  guesslot.innerHTML += `${guess} `
  count++;
  remaining.innerHTML = `${11-count}`

}
function displayMsg(msg){
  loworHi.innerHTML = `<h2>${msg}</h2>`
}
function newGame(){
  const btn = document.querySelector('#newGame')
  btn.addEventListener('click',function(e){
    rndnum = (parseInt(Math.random()  * 100 +1 ))
    prevGuess = []
    count = 1
    guesslot.innerHTML = ''
    remaining.innerHTML = `${11-count}`
    userinput.removeAttribute('disabled')
    startOver.removeChild(p);
    playGame =true
  })
}

function endGame(){
  userinput.value = '';
  userinput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p)
  playGame = false 
  newGame();
}


```