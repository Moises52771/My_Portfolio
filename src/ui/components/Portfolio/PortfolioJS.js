//     Mostrar em qual slide está


if (typeof window !== "undefined") {
    let sl1 = document.querySelector('#lbSlide1')
    let sl2 = document.querySelector('#lbSlide2')
    let sl3 = document.querySelector('#lbSlide3')
    let sl4 = document.querySelector('#lbSlide4')
    let sl5 = document.querySelector('#lbSlide5')
    


    sl1.addEventListener("click", () =>{
                                          
            document.getElementById("lbSlide1").style.backgroundColor = '#f3f3f3';
            document.getElementById("lbSlide2").style.backgroundColor = '#414141';
            document.getElementById("lbSlide3").style.backgroundColor = '#414141';
            document.getElementById("lbSlide4").style.backgroundColor = '#414141';
            document.getElementById("lbSlide5").style.backgroundColor = '#414141';    
        
                
            
        }     
    )

    sl2.addEventListener("click", () =>{
                    
            document.getElementById("lbSlide1").style.backgroundColor = '#414141';
            document.getElementById("lbSlide2").style.backgroundColor = '#f3f3f3';
            document.getElementById("lbSlide3").style.backgroundColor = '#414141';
            document.getElementById("lbSlide4").style.backgroundColor = '#414141';
            document.getElementById("lbSlide5").style.backgroundColor = '#414141';
                
        
            
        }     
    )

    sl3.addEventListener("click", () =>{
                    
            document.getElementById("lbSlide1").style.backgroundColor = '#414141';
            document.getElementById("lbSlide2").style.backgroundColor = '#414141';
            document.getElementById("lbSlide3").style.backgroundColor = '#f3f3f3';
            document.getElementById("lbSlide4").style.backgroundColor = '#414141';
            document.getElementById("lbSlide5").style.backgroundColor = '#414141';
                
        
            
        }     
    )

    sl4.addEventListener("click", () =>{
                    
            document.getElementById("lbSlide1").style.backgroundColor = '#414141';
            document.getElementById("lbSlide2").style.backgroundColor = '#414141';
            document.getElementById("lbSlide3").style.backgroundColor = '#414141';
            document.getElementById("lbSlide4").style.backgroundColor = '#f3f3f3';
            document.getElementById("lbSlide5").style.backgroundColor = '#414141';
                
        
            
        }     
    )

    sl5.addEventListener("click", () =>{
                    
            document.getElementById("lbSlide1").style.backgroundColor = '#414141';
            document.getElementById("lbSlide2").style.backgroundColor = '#414141';
            document.getElementById("lbSlide3").style.backgroundColor = '#414141';
            document.getElementById("lbSlide4").style.backgroundColor = '#414141';
            document.getElementById("lbSlide5").style.backgroundColor = '#f3f3f3';
                
        
            
        }     
    )
}

