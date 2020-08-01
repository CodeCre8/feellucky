// window.onload = function(){
//   document.getElementById('container').style.backgroundImage = "url('https://source.unsplash.com/user/olexa/800x600')";
// }


const container = document.querySelector('#container')
const modalPanel = document.querySelector('#modal')
const luckyTitle = document.querySelector('#luckytitle')
const quoteDisplay = document.querySelector('#quotedisplay')
const quoteName = document.querySelector('#quotename')
const addBtn = document.querySelector('#addbtn')

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
    quote: 'I have never believed much in luck, and my sense of humor has tended to walk on the dark side.',
    name: 'Hunter S. Thompson'
  }
]


// display quote after 1 sec
function quotePick() {
  let x = Math.floor(Math.random()*luckQuotes.length)
  quoteDisplay.textContent = luckQuotes[x]['quote']
  quoteName.textContent = '– '+ luckQuotes[x]['name']
  quoteDisplay.classList.add('fade-in')
  quoteName.classList.add('fade-in')
  const createOpenBtn = document.createElement('button')
  const openBtnText = document.createTextNode('Dare')
  createOpenBtn.classList.add('open-modal', 'fade-in')
  createOpenBtn.appendChild(openBtnText)
  addBtn.appendChild(createOpenBtn)  
}

setTimeout(quotePick, 2000)

function openModalBtn() {
  document.querySelector('.open-modal').addEventListener('click', function(e) {
    e.preventDefault()
    modalPanel.style.display = 'block'
  })
}

console.log(document.querySelector('.open-modal'))

setTimeout(openModalBtn, 3000)