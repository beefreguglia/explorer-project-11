const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let attempts = 1;

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.createEvent('keydown', handlePressEnter)

//Métodos
function handleTryClick(event) {
  event.preventDefault()
  let guess = document.querySelector('#guess')

  if(guess.value < 0 || guess.value > 10) {
    alert('Digite um número entre 1 e 10!')
  } else {
    if (Number(guess.value) === randomNumber) {
      toggleScreen()
      screen2.querySelector('h2')
        .innerText = `Acertou em ${attempts} tentativas`
    }
    guess.value = ""
    attempts++
  }
}

function handleResetClick(event) {
  event.preventDefault()
  randomNumber = Math.round(Math.random() * 10)
  attempts = 1
  toggleScreen()
}

function toggleScreen() {
  screen2.classList.toggle('hide')
  screen1.classList.toggle('hide')
}

function handlePressEnter(event) {
  event.preventDefault()
  if(event.key === 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
  if(event.key === 'Enter' && screen2.classList.contains('hide')) {
    handleTryClick()
  }
}