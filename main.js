let inputSubmit = document.getElementById('submit')
let btnEnviar = document.querySelector('.enviar')
let form = document.querySelector('form')
let inputEmail = document.getElementById('email')

btnEnviar.addEventListener('click', () => {
    inputSubmit.click()
})

form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    console.log(inputEmail.value)
    inputEmail.value = ''
})