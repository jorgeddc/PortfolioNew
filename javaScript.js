const hamburguer = document.querySelector('.hamburguer')
const aboutMe = document.getElementById('about-me')
const navegador = document.querySelector('.navegador')
const circle1  = document.querySelector('.circles1')
const circle2  = document.querySelector('.circles2')
const circle3  = document.querySelector('.circles3')
const circle4  = document.querySelector('.circles4')


hamburguer.addEventListener('click', e=>{
    e.preventDefault();
    navegador.classList.toggle('active')
    document.querySelector('.barra1').classList.toggle('active')
    document.querySelector('.barra0').classList.toggle('active')
    document.querySelector('.barra2').classList.toggle('active')
    
    
    document.querySelector('.navegador-grande').classList.toggle('active')
})

aboutMe.addEventListener('click', e=>{
    e.preventDefault()
    document.querySelector(' .perfil-img').classList.toggle('active')
    document.querySelector('.container__main-home-aboutme').classList.toggle('active')
})



circle1.addEventListener('mouseover', ()=>{

    document.querySelectorAll('span')[0].style.opacity='1'
    document.querySelectorAll('span')[0].style.top='-20px'
    document.querySelector('.circles1').style.transform = 'rotate(180deg)';

})
circle2.addEventListener('mouseover', ()=>{

    document.querySelectorAll('span')[1].style.opacity='1'
    document.querySelectorAll('span')[1].style.top='-20px'
    document.querySelector('.circles2').style.transform = 'rotate(180deg)';
  

})
circle3.addEventListener('mouseover', ()=>{

    document.querySelectorAll('span')[2].style.opacity='1'
    document.querySelectorAll('span')[2].style.top='-20px'
    document.querySelector('.circles3').style.transform = 'rotate(180deg)';

  

})
circle4.addEventListener('mouseover', ()=>{

    document.querySelectorAll('span')[3].style.opacity='1'
    document.querySelectorAll('span')[3].style.top='-20px'
    
    document.querySelector('.circles4').style.transform = 'rotate(180deg)';

  

})