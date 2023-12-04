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