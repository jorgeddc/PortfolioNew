 document.addEventListener('DOMContentLoaded', ()=>{
    
  
  
    const DayNight = document.querySelector('.daynight')
    const active = document.querySelector('.active')
    const hobby =  document.querySelector('.hobby')
    const viajar =  document.querySelector('.viajar')
    const containerSobremi = document.getElementById('sobre-mi')
    const contenedorSlide = document.querySelectorAll('.slide')
    const arrowLeft = document.querySelector('.arrow-left')
    const arrowRight = document.querySelector('.arrow-right')
    let pixels = 700;
    let cont=0;
    let contProgress=0
    
   


    DayNight.addEventListener('click', ()=>{
        document.querySelector('body').classList.toggle('active')
        document.querySelector('.square-container1').classList.toggle('active')
        document.querySelector('.square-container2').classList.toggle('active')
        document.querySelector('.square-container3').classList.toggle('active')
        document.querySelector('.circle').classList.toggle('active')    
        document.querySelector('.container-daynight').classList.toggle('active')
        document.querySelector('.curriculum').classList.toggle('active')    
        document.querySelector('.raya1').classList.toggle('active')    
        document.querySelector('.raya2').classList.toggle('active')    
        document.querySelector('.raya3').classList.toggle('active')    
    })

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
viajar.classList.toggle('active')
setInterval(progressPhoto,1000)



 cont++;
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
console.log(cont)

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

function trasladarFoto()
{
  
  
  
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
  cont++;
}

function progressPhoto () {
   
  contProgress++
 if (contProgress<=4){

        document.querySelector('.progres').innerHTML = `${contProgress}%` 
 }
     
     if ( contProgress==4){
     cont++
      trasladarFoto()
        contProgress=0
     
     }
      if (cont==3) 
        {
            console.log("he perque")
            cont=0;
            cont=0
            // cuadro.style.transform=`translateX(${-cont * 500}px)`


        }




      }
    })


