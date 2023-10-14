'use strict'

let numberChange = document.querySelector('.lov')
let numberChange1 = document.querySelector('.one')
let numberChange2 = document.querySelector('.two')
let numberChange3 = document.querySelector('.three')
let reload = document.querySelector('.four')
let numberChange4 = document.querySelector('.lou')
let numberChange5 = document.querySelector('.five')
let numberChange6 = document.querySelector('.six')
let numberChange7 = document.querySelector('.seven')


numberChange1.addEventListener('click', function(){
    numberChange.textContent++
})
numberChange5.addEventListener('click', function(){
    numberChange4.textContent++
})
numberChange2.addEventListener('click', function(){
    numberChange.textContent=2*2
})
numberChange6.addEventListener('click', function(){
    numberChange4.textContent=2*2
})
numberChange3.addEventListener('click', function(){
    numberChange.textContent=+3
})
numberChange7.addEventListener('click', function(){
    numberChange4.textContent=+3
})




reload.addEventListener('click', ()=>{
    window.location.reload()
})
