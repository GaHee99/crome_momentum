const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')

function onLoginSubmit(event) {
  //이렇게 공간을 만들어주면 js에서 event를 채워준다.
  event.preventDefault() //브라우저가 기본 동작을 실행하지 못하게 막아주는 것
  console.log(loginInput.value)
}
loginForm.addEventListener('submit', onLoginSubmit)
//js가 어떤 정보를 담은채로 onLoginSubmit이라는 function을 호출한다.
