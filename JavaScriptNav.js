// ENCENDIDO Y APAGADO DE NAVEGADOR
const navegador = document.querySelectorAll('.navegador-item')


navegador.forEach(element =>{


  navegador[0].classList.add('activo')

  element.addEventListener(('click') , e =>{
    
    if(e.target.classList.contains('hogar-b') ){
     
      element.classList.add('activo')
      
       

      navegador[1].classList.remove('activo')
      navegador[2].classList.remove('activo')
      navegador[3].classList.remove('activo')
    }



   
    if(e.target.classList.contains('about-me-b') )
    {
     
      
       element.classList.add('activo')
      
       

        navegador[0].classList.remove('activo')
        navegador[2].classList.remove('activo')
        navegador[3].classList.remove('activo')
      }
      if(e.target.classList.contains('projects-b'))
      { 
        console.log('click') 
        element.classList.add('activo')
     
      
       navegador[0].classList.remove('activo')
       navegador[1].classList.remove('activo')
       navegador[3].classList.remove('activo')
   
   
       
     }  
     if(e.target.classList.contains('objetivo-b'))
     {
       element.classList.add('activo')
     
       navegador[0].classList.remove('activo')
       navegador[1].classList.remove('activo')
       navegador[2].classList.remove('activo')
 
   
       
     } 
   })
   
   })