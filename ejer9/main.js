const form = document.querySelector('form')
const numero = Math.floor(Math.random() * 101)

form.addEventListener('click', e =>{
  e.preventDefault()

  const num = document.getElementById('num').value

  if(e.target.matches("input[class=adivina]")){
    if(isNaN(parseInt(num)) === false){
      if(parseInt(num) === numero){
        document.querySelector('h1').innerText = "Ganaste acabas de adivinar el numero"
        document.querySelector('h1').className = "verde"
        document.querySelector('.reiniciar').style.visibility = "visible"
        document.querySelector('.adivina').style.visibility = "hidden"
      }else if(parseInt(num) <= numero){
        document.querySelector('h1').innerText = "El numero es mayor"
      }else if(parseInt(num) >= numero){
        document.querySelector('h1').innerText = "El numero es menor"
      }
    }else{
      document.querySelector('h1').innerText = "No es un numero :c"
    }
  }

  if(e.target.matches("input[class=reiniciar]")){
    window.location.reload()
  }
})