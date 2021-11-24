const quotes = [
  {
    quote: '꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다',
    autor: '월트 디즈니',
  },
  {
    quote: ' 비록 해가 진다고 해도, 나에게는 전기불이 있다 ',
    autor: ' 로커 커트 코베인 ',
  },
  {
    quote:
      ' 우리는 한 번도 존재하지 않았던 것을 꿈꿀 수 있는 사람들이 필요하다 ',
    autor: ' 존 F. 케네디 ',
  },
  {
    quote: ' 조금도 도전하지 않으려고 하는 것이 인생에서 가장 위험한 일이다 ',
    autor: ' 오프라 윈프리 ',
  },
  {
    quote:
      ' 남들이 할 수 있거나 하려는 일을 하지 말고 남들이 할 수 없거나 하지 않으려는 일을 하라 ',
    autor: ' 아멜리아 에어하트 ',
  },
  {
    quote:
      ' 로운 일에 도전하다 보면 가끔 실수를 저지를 수 있다. 자신의 실수를 빨리 인정하고 다른 시도에 집중하는 것이 최선이다. ',
    autor: ' 스티브 잡스 ',
  },
  {
    quote: ' 행동은 모든 성공의 가장 기초적인 핵심이다. ',
    autor: ' 파블로 피카소 ',
  },
  {
    quote: ' 용기란 죽을만큼 두려워도 무언가 해보는 것이다. ',
    autor: ' 존 웨인 ',
  },
  {
    quote:
      ' 무언가를 위해 죽을 각오가 없다면, 인생을 살게 해줄 무언가도 가질 수 없을 것이다. ',
    autor: ' 체게바라 ',
  },
  {
    quote: ' 승리는 가장 끈기 있는 사람에게 돌아간다. ',
    autor: ' 나폴레옹 ',
  },
]

const quote = document.querySelector('#quote span:first-child')
const autor = document.querySelector('#quote span:last-child')

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todayQuote.quote
autor.innerText = todayQuote.autor
