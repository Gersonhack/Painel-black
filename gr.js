const showbtn = document.querySelector('.showform')
bg = document.querySelector('.background')
login = document.querySelector('.loginbox')
close = document.querySelector('.close')

showbtn.addEventListener('click', (e) => {
  showbtn.classList.add('hide')
  bg.classList.add('show')
  login.classList.add('show')
})

close.addEventListener('click', (e) => {
  bg.classList.remove('show')
  login.classList.remove('show')
  showbtn.classList.remove('hide')
})