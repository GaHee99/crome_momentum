const clock = document.querySelector('h2#clock')

function getClock() {
  const date = new Date()
  const Hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const second = String(date.getSeconds()).padStart(2, '0')
  clock.innerText = `${Hours} : ${minutes} : ${second}`
}
getClock()
//웹사이트가 로드되자마자 바로 실행시킬라고
setInterval(getClock, 1000)
