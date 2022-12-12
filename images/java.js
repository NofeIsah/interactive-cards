var namedis = document.querySelector('.name') 
var numdis = document.querySelector('.numbers') 
var datedis = document.querySelector('.num3') 
var input = document.querySelectorAll('input')
var cvc = document.querySelectorAll('input')[4]
var cvcdis = document.querySelectorAll('p')[0]

cvcdis.textContent ='000'
console.log(cvcdis);

function changename(){
    namedis.textContent = input[0].value
}
function changenumber(){
    numdis.textContent = input[1].value
}
function changedate(){

    datedis.textContent = input[2].value + '/' + input[3].value
 
}

function changecvc() {
    cvcdis.textContent = cvc.value
    
}

changecvc()


function setname(){
    if (input[0].value.length < 1){
    namedis.textContent = "jane appleseed"
    }
}
function setnumber(){
    if (input[1].value.length < 1){
    numdis.textContent = "0000 0000 0000 0000"

    }
}
function changenumber(){
    lastdis.textContent = input[3]. value
}
