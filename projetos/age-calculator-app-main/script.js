function calculate(){
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDay() 
    let fday = document.getElementByName('day')
    let fmonth = document.getElementByName('month')
    let fyear = document.getElementByName('year')
    let container = document.getElementsByClassName('container')
    if (container.value.length == 0){
        alert('ERROR')
    }
}