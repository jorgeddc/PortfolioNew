document.addEventListener('DOMContentLoaded', ()=>{
  
  
  
          const DayNight = document.querySelector('.daynight')
          const magic = document.querySelector('.magic')
          const DayNightB = document.querySelector('.daynightB')
          const active = document.querySelector('.active')
          const activo = document.querySelector('.activo')
          const activoFondo = document.querySelector('.activo-fondo')
          const hobby =  document.querySelector('.hobby')
          const viajar =  document.querySelector('.viajar')
          const containerSobremi = document.getElementById('sobre-mi')
          const contenedorSlide = document.querySelectorAll('.slide')
          const arrowLeft = document.querySelector('.arrow-left')
          const arrowRight = document.querySelector('.arrow-right')
          const hamburguer = document.querySelector('.hamburguer')
          const proyecto = document.querySelectorAll('.itemP')
          const navegador = document.querySelectorAll('.navegador-item')
          const nav = document.querySelector('.navegador-grande')
        
        let pixels = 700;
        let cont=0;
        let contProgress=0
        var progres   
        
        // window.addEventListener('scroll', fixNav)
        //       function fixNav() {
        //                 if(window.scrollY > nav.offsetHeight + 770) {
        //                     document.querySelector('.about-me-b').classList.add('activo')
        //                 } else {
                          
        //                 }
        //               }

  navegador.forEach(element =>{

 element.addEventListener('click' , e =>{
  if(e.target.classList.contains('about-me-b'))
   {
     element.classList.add('activo')
   navegador[1].classList.add('activo-fondo')
   navegador[2].classList.add('activo-fondo')
 
  
   
   }
   if(e.target.classList.contains('projects-b'))
   { console.log(navegador[0].textContent,navegador[2].textContent)
    navegador[1].classList.remove('activo-fondo')
    navegador[2].classList.remove('activo-fondo')
    navegador[0].classList.remove('activo')
    navegador[2].classList.remove('activo')

    element.classList.add('activo')
    
  }  
  if(e.target.classList.contains('objetivo-b'))
  {
    element.classList.add('activo')
    navegador[0].classList.remove('activo-fondo')
    navegador[1].classList.remove('activo-fondo')
    navegador[2].classList.remove('activo-fondo')
    navegador[1].classList.remove('activo')
    navegador[0].classList.remove('activo')

    
  } 
})

})

proyecto.forEach( (element,index)  => {
  
  element.addEventListener('mouseover', (e) =>{
            e.preventDefault()
          element.classList.toggle('active')

          })
        

          })
     
          
     


        hamburguer.addEventListener('click', e =>{

        document.querySelector('.barra0').classList.toggle('active')
        document.querySelector('.barra1').classList.toggle('active')
        document.querySelector('.barra2').classList.toggle('active')
        document.querySelector('.container-navegador-small').classList.toggle('active')


        })
        DayNight.addEventListener('click', (e)=>{
        e.preventDefault()
        // console.log('click')
        document.querySelector('body').classList.toggle('active')
        document.querySelector('.square-container1').classList.toggle('active')
        document.querySelector('.square-container2').classList.toggle('active')
        document.querySelector('.square-container3').classList.toggle('active')
        document.querySelector('.circle').classList.toggle('active')    
        document.querySelector('.container-daynight-small').classList.toggle('active')
        // document.querySelector('.container-daynight-big').classList.toggle('active')
        document.querySelector('.curriculum').classList.toggle('active')
        document.querySelector('.raya1').classList.toggle('active')    
        document.querySelector('.raya2').classList.toggle('active')    
        document.querySelector('.raya3').classList.toggle('active') 
         
        document.querySelector('.octo-cat').classList.toggle('active')    
        document.querySelector('.octo-cato').classList.toggle('active')    

        } )
        DayNightB.addEventListener('click', (e)=>{
          e.preventDefault()
          console.log('click')
          document.querySelector('body').classList.toggle('active')
          document.querySelector('.square-container1').classList.toggle('active')
          document.querySelector('.square-container2').classList.toggle('active')
          document.querySelector('.square-container3').classList.toggle('active')
          document.querySelector('.circleB').classList.toggle('active')    
          // document.querySelector('.container-daynight-small').classList.toggle('active')
          document.querySelector('.container-daynight-big').classList.toggle('active')
          document.querySelector('.curriculum').classList.toggle('active')
          document.querySelector('.raya1').classList.toggle('active')    
          document.querySelector('.raya2').classList.toggle('active')    
          document.querySelector('.raya3').classList.toggle('active') 
          document.querySelector('.diferent').classList.toggle('active') 
           
          document.querySelector('.octo-cat').classList.toggle('active')    
          document.querySelector('.octo-cat1').classList.toggle('active')    
          document.querySelector('.octo-cat2').classList.toggle('active')    
          // document.querySelector('.octo-cato').classList.toggle('active')    
  
          } )
  



        hobby.addEventListener('mouseover' , () =>{
        document.querySelector('.container-image').style.opacity='0.8'
        document.querySelector('.container-image').style.top='-160px'
        document.querySelector('.container-image').style.transform='rotate(-16deg)'


        })
        hobby.addEventListener('mouseleave' , () =>{
        document.querySelector('.container-image').style.opacity='0'
        document.querySelector('.container-image').style.top='0px'
        })



        viajar.addEventListener('click' , e =>{
        e.preventDefault()
        document.querySelector('.cuenta').style.display='block'
        viajar.classList.toggle('active')

        if(e.target.classList.contains('active')){

        activaProgres()
        }

        if(!e.target.classList.contains('active')){

        desactivaProgres()
        }


        cont++
        contenedorSlide.forEach( element=>{
        element.style.transform=`translatex(${cont * -pixels}px)`
        document.querySelector('.arrow-right').classList.toggle('active')
        document.querySelector('.arrow-left').classList.toggle('active')
        document.querySelector('.l1').classList.toggle('active')
        document.querySelector('.l2').classList.toggle('active')
        document.querySelector('.r1').classList.toggle('active')
        document.querySelector('.r2').classList.toggle('active')
        document.getElementById('sobre-mi').classList.toggle('active')
        //  document.getElementById('sobre-mi').style.backgroundImage = `url(Espaldas.jpg)`

        if (cont>=2)
        {
        element.style.transform=`translatex(0px)`
        cont=0;

        }
        })


        })

        arrowLeft.addEventListener('click' , e =>{
        e.preventDefault()
        contProgress=0


        if (cont>=2){// este if no permite pasar al texto de sobre mi
        if (cont!=0) //este if obliga a dar a viajar para que sume 
        cont--;


        contenedorSlide.forEach( element=>{
        element.style.transform=`translatex(${cont * -pixels}px)`
        // document.getElementById('sobre-mi').style.backgroundImage = `url(${cont}.jpg)`

        let dato = cont * pixels
        console.log(cont , dato)
        })


        }
        })

        arrowRight.addEventListener('click' , e =>{
        e.preventDefault()
        contProgress=0


        if (cont!=0) //este if obliga a dar a viajar para que sume 
        cont++;

        contenedorSlide.forEach( element=>{
        arrowRight.style.zIndex='1'
        element.style.transform=`translatex(${cont * -pixels}px)`
        // document.getElementById('sobre-mi').style.backgroundImage = `url(${cont}.jpg)`
        let dato = cont * -pixels
        console.log(cont , dato)

        if (cont>=5)
        {

        element.style.transform=`translatex(-2800px)`
        cont=4

        }

        })

        })


        function activaProgres()
        {  progres = setInterval(progressPhoto,50)

        }

        function desactivaProgres()
        { clearInterval(progres)
        document.querySelector('.cuenta').style.display='none'
        }

        function trasladarFoto()
        { console.log(cont)
        cont++
        contenedorSlide.forEach( element=>{
        arrowRight.style.zIndex='1'
        element.style.transform=`translatex(${cont * -pixels}px)`
        // document.getElementById('sobre-mi').style.backgroundImage = `url(${cont}.jpg)`
        let dato = cont * -pixels

        if (cont>=5)
        {
        if (cont>=2){// este if no permite pasar al texto de sobre mi

        cont=1
        contenedorSlide.forEach( element=>{
        element.style.transform=`translatex(${cont * -pixels}px)`
        // document.getElementById('sobre-mi').style.backgroundImage = `url(${cont}.jpg)`

        let dato = cont * pixels
        console.log(cont , dato)
        })


        }
        }

        })

        }

        function progressPhoto () {

        contProgress++
        if (contProgress<=100){

        document.querySelector('.progres').innerHTML = `${contProgress}%` 
        }

        if (contProgress==100){

        trasladarFoto()
        contProgress=0

        }

        }
        
        magic.addEventListener('click', e =>{
          magic.classList.toggle('active')
          
          
          
        })
        
        
        //  MAQUINA DE ESCRIBIR
      
        const vivir = document.querySelector('.vivir')
        const disfrutando = str =>
        {
          let arrFromStr= str.split('') // LE PASSA UNA ARRAY 
          let i=0;
          let printStr=setInterval(function (){
            vivir.textContent += arrFromStr[i];
            
            i++;
            if (i === arrFromStr.length) {
              
              vivir.textContent =""  
              aprendiendo('seguir aprendiendo')
              
            }  },200) };
         
            disfrutando('seguir disfrutando')


                
      const aprendiendo = (string) =>{

        let array = string.split('') // LE PASSA UNA ARRAY
        let j=0;
        let imprimir = setInterval(function (){
        vivir.textContent += array[j];
         j++
          if (j===array.length)
         
          {  
            vivir.textContent =""  
            trabajar('aportar mi experiencia para un bien comun.')
        }


        },200)
      }          
      const trabajar = (cadena) =>{

        let palabra = cadena.split('') // LE PASSA UNA ARRAY
       console.log(palabra)
        let t=0;
        let pintar = setInterval(function ()
        {
         
          console.log(t)
          vivir.textContent += palabra[t];
         t++
          if (t===palabra.length)
         {  clearInterval(pintar)
        }


        },200)
      }   
    })


