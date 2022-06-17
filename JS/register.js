const registerForm = document.querySelector("#register-form")
const registerID = document.querySelector("#register-form #id")
const registerPassword = document.querySelector("#register-form #password")
const registerPasswordCheck = document.querySelector("#register-form #passwordCheck")
const registerName = document.querySelector("#register-form #name")
const registerEmail = document.querySelector("#register-form #email")
const registerBirth = document.querySelector("#register-form #birth")
const registerButton = document.querySelector("#register-form #button")

const USER_ID_KEY = "userID"
const USER_PASSWORD_KEY = "userPassword"

function onRegisterButtonClick(event) {
    event.preventDefault()

    const userID = registerID.value
    const userPassword = registerPassword.value

    if (userID === "") {
        alert("아이디")
    } else if (userPassword !== userPasswordCheck){
        alert("")
    } else if (userPassword.length < 6) {
        alert("")
    } else if (userName === "") {
        alert("")
    } else {
        alert("")
    }
}

registerButton.addEventListener("click", onRegisterButtonClick)