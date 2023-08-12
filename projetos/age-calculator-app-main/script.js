const date = new Date()
const year = date.getFullYear()
const month = date.getMonth()
const day = date.getDay()
const fday = document.getElementById('day')
const fyear = document.getElementById('year')
const fmonth = document.getElementById('month')
const textDay = document.getElementById('d1')
const textMonth = document.getElementById('d2')
const TextYear = document.getElementById('d3')

function calculate(){
    if (fday.value.length == 0){
        alert('ERROR')
    }else if(fday.value > 31 || fday.value <= 0){
        alert("Must be a valid day")
    }else if (fmonth.value.length == 0 ){
        alert("ERROR")
    }else if (fmonth.value > 12 || fmonth.value <= 0){
        alert("Must be a valid month")
    }else if (fyear.value.length == 0){
        alert("ERROR")
    }else if (fyear.value > year){
        alert("The year must be in the past")
    }else{
        
    }
    //const yearValue = ((year - fyear.value) - 1)
    //const monthValue = (month - fmonth.value)
    //const resOne = document.getElementById('--1')
    //const resTwo = document.getElementById('--2')
    //resTwo.innerHTML = monthValue
    //resOne.innerHTML = yearValue
    
    
}