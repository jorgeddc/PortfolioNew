// ENCENDIDO Y APAGADO DE NAVEGADOR
const navegador = document.querySelectorAll('.navegador-item')
navegador.forEach(element =>{

    element.addEventListener('click' , e =>{
     if(e.target.classList.contains('about-me-b'))
      {
          console.log(e.target)
        element.classList.add('activo')
        navegador[1].classList.remove('activo')
        navegador[2].classList.remove('activo')
       if (document.querySelector("body").classList.contains("active"))
          {
                      }
            
     
      
      }
      if(e.target.classList.contains('projects-b'))
      { 
       element.classList.add('activo')
      
       navegador[0].classList.remove('activo')
       navegador[2].classList.remove('activo')
   
   
       
     }  
     if(e.target.classList.contains('objetivo-b'))
     {
       element.classList.add('activo')
     
       navegador[1].classList.remove('activo')
       navegador[0].classList.remove('activo')
 
   
       
     } 
   })
   
   })