const burger = document.getElementsByClassName('fa-bars')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

burger.addEventListener('click', ()=>{
  navbarLinks.classList.toggle('active')
})
