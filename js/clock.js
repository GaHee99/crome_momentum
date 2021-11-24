const clock = document.querySelector('h2#clock')

function getClock() {
  const date = new Date()
  const Hours = date.getHours()
  const minutes = date.getMinutes()
  const second = date.getSeconds()
  clock.innerText = `${Hours} : ${minutes} : ${second}`
}
getClock()
//웹사이트가 로드되자마자 바로 실행시킬라고
setInterval(getClock, 1000)
//첫번째 인수는 내가 실행하고자 하는 function
//두번째 인수는 호출되는 function간격을 몇초에 반복하는지
//setInterval(sayHello, 5000)
