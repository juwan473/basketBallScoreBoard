/*****************************************************\
*
*
*
*
* 
******************************************************/

let b1= document.getElementById("homeScore")
let b2= document.getElementById("guestScore")
let count1=0
let count2=0

//functions to increment the home score
function homeIncrement1(){
    count1 +=1
    b1.textContent=count1
}

function homeIncrement2(){
    count1 +=2
    b1.textContent=count1
}

function homeIncrement3(){
    count1 +=3
    b1.textContent=count1
}
//////////////////////////////////////////////////////

//funcions to increment the guest score
function guestIncrement1(){
    count2 +=1
    b2.textContent=count2
}

function guestIncrement2(){
    count2 +=2
    b2.textContent=count2
}

function guestIncrement3(){
    count2 +=3
    b2.textContent=count2
}
//////////////////////////////////////////////////////