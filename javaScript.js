document.addEventListener('DOMContentLoaded',  ()=>{
  
  
  
          const DayNight = document.querySelector('.daynight')
          const magic = document.querySelector('.magic')
          const DayNightB = document.querySelector('.daynightB')
          const active = document.querySelector('.active')
          const activo = document.querySelector('.activo')
          const activoFondo = document.querySelector('.activo-fondo')
          const hobby =  document.querySelector('.hobby')
          const showSlide =  document.querySelector('.show-slide')
          const containerSobremi = document.getElementById('sobre-mi')
          const contenedorSlide = document.querySelectorAll('.slidePicture')
          const arrowLeft = document.querySelector('.arrow-left')
          const arrowRight = document.querySelector('.arrow-right')
          const hamburguer = document.querySelector('.hamburguer')
          const proyecto = document.querySelectorAll('.itemP')
          const containerCorreo = document.querySelector('.container-correo')
         
          const nav = document.querySelector('.navegador-grande')
          
        
        
        
   


proyecto.forEach( (element,index)  => {
  
  element.addEventListener('mouseover', (e) =>{
            e.preventDefault()
          element.classList.toggle('active')

          })
        

          })
     
          
     

          DayNight.addEventListener('click', (e)=>{
            e.preventDefault()
            
            document.querySelector('body').classList.toggle('active')
            document.querySelector('.hola').classList.toggle('active')
            document.querySelector('.desarrollador').classList.toggle('active')
            document.querySelector('.front').classList.toggle('active')
            document.querySelector('.circle').classList.toggle('active')    
            document.querySelector('.container-daynight-small').classList.toggle('active')
            document.querySelector('.curriculum').classList.toggle('active')
            document.querySelector('.hola').classList.toggle('active')
            document.querySelector('.front').classList.toggle('active')
            document.querySelector('.octo-cat').classList.toggle('active')    
            document.querySelector('.octo-cat1').classList.toggle('active')    
            document.querySelector('.octo-cat2').classList.toggle('active')      
            document.querySelector('.octo-cat3').classList.toggle('active')      
            document.querySelector('.octo-cat4').classList.toggle('active')      

           
            
            
            
          } )
          
          DayNightB.addEventListener('click', (e)=>{
            e.preventDefault()
            document.querySelector('body').classList.toggle('active')
            document.querySelector('.hola').classList.toggle('active')
            document.querySelector('.desarrollador').classList.toggle('active')
            document.querySelector('.front').classList.toggle('active')
            document.querySelector('.circleB').classList.toggle('active')    
            document.querySelector('.container-daynight-big').classList.toggle('active')
            document.querySelector('.curriculum').classList.toggle('active')
            document.querySelector('.hola').classList.toggle('active')
            document.querySelector('.front').classList.toggle('active')
            document.querySelector('.diferent').classList.toggle('active') 
            document.querySelector('.octo-cat').classList.toggle('active')    
            document.querySelector('.octo-cat1').classList.toggle('active')    
            document.querySelector('.octo-cat2').classList.toggle('active')    
            document.querySelector('.octo-cat3').classList.toggle('active')    
          
            document.querySelector('.magic').classList.toggle('active') 
            document.querySelector('.container-navegador-grande').classList.toggle('active') 
           
            
            
            } )
          
          
          
          
         hobby.addEventListener('click' , () =>{
            console.log('first')
            document.querySelector('.container-image').style.opacity='0.8'
            document.querySelector('.container-image').style.top='-60%'
        
            document.querySelector('.container-image').style.left='30%'
            document.querySelector('.container-image').style.transform='rotate(-16deg)'
            
            
          })
          hobby.addEventListener('mouseleave' , () =>{
            document.querySelector('.container-image').style.opacity='0'
            document.querySelector('.container-image').style.top='-50px'
          })
          
          
          
          
        
        
        magic.addEventListener('click', e =>{
          magic.classList.toggle('active')
          
          
          
        })
        
        
        //  MAQUINA DE ESCRIBIR
        
        const vivir = document.querySelector('.vivir')
        
        let caso = 0
        let firstStr 
        let dinamico = 0
        
        
        
        const frasesEmo = (caso) => {
          switch (caso) {
            case 1:
              vivir.innerText=" "
              
              
              firstStr = `Ayudarte en tus proyectos WEB`
              
              break;
              case 2:
                vivir.innerText=" "
                
                
                firstStr = 'Formar parte de tu equipo.'
                
                break;
                
                case 3:
                  vivir.innerText=" "
                  
                  
                  firstStr = 'Compartir experiencias profesionales.'
                 
                  break;
                  
                  
                }
              }    
              const writing = () => {
                
                if (caso==0){
                  caso=1
                  frasesEmo(caso)
                  
                }
                let sentence=firstStr.split('')
                
                vivir.innerHTML+=sentence[dinamico]
                dinamico++
                
                
                if ( dinamico>firstStr.length) 
                { 
                  caso++
                  dinamico=0
                  frasesEmo(caso)
                  
                  
                  if (caso>=4)
                  { 
                    vivir.innerText=" "
                    caso=0
                  }
                }
              }
              const parar = setInterval(writing,200)
              //  TAMAÑO MOVIL
              
              
                      hamburguer.addEventListener('click', e =>{
              
                      document.querySelector('.barra0').classList.toggle('active')
                      document.querySelector('.barra1').classList.toggle('active')
                      document.querySelector('.barra2').classList.toggle('active')
                      document.querySelector('.navegador-small').classList.toggle('active')
                      containerCorreo.classList.toggle('active')
              
                      })
              const itemS = document.querySelector('.item-s')
              
              itemS.addEventListener('click', e =>
              {
                document.querySelector('.barra0').classList.remove('active')
                document.querySelector('.barra1').classList.remove('active')
                document.querySelector('.barra2').classList.remove('active')
                document.querySelector('.navegador-small').classList.remove('active')
                containerCorreo.classList.toggle('active')

                
              })
              
              
              
              
            })
            
            
            