 document.addEventListener('DOMContentLoaded', ()=>{
    
  
  
        const DayNight = document.querySelector('.daynight')
        const DayNightB = document.querySelector('.daynightB')
        const active = document.querySelector('.active')
        const hobby =  document.querySelector('.hobby')
        const viajar =  document.querySelector('.viajar')
        const containerSobremi = document.getElementById('sobre-mi')
        const contenedorSlide = document.querySelectorAll('.slide')
        const arrowLeft = document.querySelector('.arrow-left')
        const arrowRight = document.querySelector('.arrow-right')
        const hamburguer = document.querySelector('.hamburguer')
        const proyecto = document.querySelectorAll('.itemP')
       
        let pixels = 700;
        let cont=0;
        let contProgress=0
        var progres   
     

        console.log(proyecto.length)
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

       

    })


