const value1 = document.getElementById('value1')
const value2 = document.getElementById('value2')
const value3 = document.getElementById('value3')
const button = document.getElementById('switch')
function ativado(){
    if (button.checked){
        value1.innerHTML = '&dollar;19.99'
        value2.innerHTML = '&dollar;24.99'
        value3.innerHTML = '&dollar;39.99'
    }else{
        value1.innerHTML = '&dollar;199.99'
        value2.innerHTML = '&dollar;249.99'
        value3.innerHTML = '&dollar;399.99'
    }
}