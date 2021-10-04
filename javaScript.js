document.addEventListener('DOMContentLoaded', ()=>{
const hamburguer = document.querySelector('.hamburguer')
const aboutMeS = document.querySelector('.about-me-s')
const aboutMeB = document.querySelector('.about-me-b')
const navegadorItem=document.querySelector('.navegador')
const projectsB=document.querySelector('.projects-b')
const circle1  = document.querySelector('.circles1')
const circle2  = document.querySelector('.circles2')
const circle3  = document.querySelector('.circles3')
const circle4  = document.querySelector('.circles4')
const arrowApear  = document.querySelector('.arrow-up')
const home = document.getElementById('home')


hamburguer.addEventListener('click', e=>{
    e.preventDefault();
    console.log('click')
    navegadorItem.classList.toggle('active')
    
    document.querySelector('.barra1').classList.toggle('active')
    document.querySelector('.barra0').classList.toggle('active')
    document.querySelector('.barra2').classList.toggle('active')
    
    
     document.querySelector('.navegador-grande').classList.toggle('active')
})

aboutMeS.addEventListener('click', e=>{
    e.preventDefault()
   
   
    document.querySelector('.container-img').classList.toggle('active')
})
aboutMeB.addEventListener('click', e=>{
    e.preventDefault()
    
   
    document.querySelector('.container-img').classList.toggle('active')
})

projectsB.addEventListener('click' , e=>{
    e.preventDefault()
const navegadorItem=document.querySelector('.navegador')
    document.querySelector('.container-color-back-two').classList.toggle('active')
})

circle1.addEventListener('mouseover', ()=>{

    document.querySelectorAll('span')[0].style.opacity='1'
    document.querySelectorAll('span')[0].style.top='-10px'
    document.querySelector('.circles1').style.transform = 'rotate(180deg)';

})
circle2.addEventListener('mouseover', ()=>{

    document.querySelectorAll('span')[1].style.opacity='1'
    document.querySelectorAll('span')[1].style.top='-10px'
    document.querySelector('.circles2').style.transform = 'rotate(180deg)';
  

})
circle3.addEventListener('mouseover', ()=>{

    document.querySelectorAll('span')[2].style.opacity='1'
    document.querySelectorAll('span')[2].style.top='-10px'
    document.querySelector('.circles3').style.transform = 'rotate(180deg)';

  

})
circle4.addEventListener('mouseover', ()=>{

    document.querySelectorAll('span')[3].style.opacity='1'
    document.querySelectorAll('span')[3].style.top='-10px'
    
    document.querySelector('.circles4').style.transform = 'rotate(180deg)';

  

})

window.addEventListener('scroll', fixNav)

function fixNav()


 {
     console.log(home.offsetHeight)
     
    if(window.scrollY > home.offsetHeight + 10 ) {
        arrowApear.classList.add('active')
        console.log('nuer')
        
    
        } 
    
        else {
        arrowApear.classList.remove('active')
     
      

        
 }


}
})