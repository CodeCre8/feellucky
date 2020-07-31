// window.onload = function(){
//   document.getElementById('container').style.backgroundImage = "url('https://source.unsplash.com/user/olexa/800x600')";
// }

const container = document.querySelector('#container')
const openModal = document.querySelector('#open-modal')
const modalPanel = document.querySelector('#modal')
const quoteDisplay = document.querySelector('#quotedisplay')
const quoteName = document.querySelector('#quotename')

let luckQuotes = [
  {
    quote: 'Luck marches with those who give their very best.',
    name: 'H. Jackson Brown, Jr.'
  },
  {
    quote: 'I have had lots of luck in my career but there has also been a lot of hard work.',
    name: 'Maria Sharapova'
  },
  {
    quote: 'Look, sometimes, no matter how hard you try, sometimes you need a bit of luck.',
    name: 'Bear Grylls'
  },
  {
    quote: 'Nothing goes by luck in composition. It allows of no tricks. The best you can write will be the best you are.',
    name: 'Henry David Thoreau'
  },
  {
    quote: 'For a long time now I have tried simply to write the best I can. Sometimes I have good luck and write better than I can.',
    name: 'Ernest Hemingway'
  },
  {
    quote: 'Some people, through luck and skill, end up with a lot of assets. If you\'re good at kicking a ball, writing software, investing in stocks, it pays extremely well.',
    name: 'Bill Gates'
  },
  {
    quote: 'I have never believed much in luck, and my sense of humor has tended to walk on the dark side.',
    name: 'Hunter S. Thompson'
  }
]

// display quote after 1 sec
function quotePick() {
  let x = Math.floor(Math.random()*luckQuotes.length)
  console.log(x)
  quoteDisplay.textContent = luckQuotes[x]['quote']
  quoteName.textContent = '– '+ luckQuotes[x]['name']
}

window.setTimeout(quotePick(), 3000)

// openModal.addEventListener('click', function(e) {
//   e.preventDefault()
//   modalPanel.style.display = 'block'
// })