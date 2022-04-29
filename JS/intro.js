const loginForm = document.querySelector("#login-form")
const idInput = document.querySelector("#login-form #id")
const passwordInput = document.querySelector("#login-form #password")
const button = document.querySelector("#button")

function onLoginButtonClick(event) {
    event.preventDefault()

    const id = idInput.value
    const password = passwordInput.value

    console.log(id)
    console.log(password)

    if (id === "jake081717J" && password === "081717J") {
        alert("로그인 완료")
        window.location.href = "j_illustrate.html"
    } else {
        alert("로그인 실패")
    }
}

button.addEventListener("click", onLoginButtonClick)