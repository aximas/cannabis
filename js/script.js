document.addEventListener('DOMContentLoaded', () => {

    // const welcomeBlockHeight = document.querySelector('section.welcome').scrollHeight;
    const welcomeBlock = document.querySelector('section.welcome'),
          body = document.querySelector('body'),
          sectionExperience = document.querySelector('section.experience'),
          centerLine = sectionExperience.querySelector('.central-line');

          window.addEventListener('scroll', () => {

                if (window.pageYOffset > welcomeBlock.clientHeight + +((sectionExperience.clientHeight)*0.1) 
                    && 
                    window.pageYOffset < (+(welcomeBlock.clientHeight) + +(sectionExperience.clientHeight))) {
                    // centerLine.top += 
                    var counter = ((window.pageYOffset - 900)/6);
                    var counterMinus = +(90 - +((window.pageYOffset - 900)/6));
                    console.log('counterPlus', counter);
                    console.log('counterMinus', counterMinus);

                    centerLine.style.top =+ counter + '%';
                    centerLine.style.height =+ counterMinus + '%';
                }

                else {
                    centerLine.style.top = 10 + '%';
                    centerLine.style.height = 80 + '%';
                }
          });

    console.log(welcomeBlock);
    

    // function disablecontext(e) {
    //     var clickedEl = (e==null) ? event.srcElement.tagName : e.target.tagName;
    //     if (clickedEl == "IMG") {
    //         alert(errorMsg);
    //         return false;
    //     }
    // }
    // var errorMsg = "Вы не можете сохранять изображения с этого сайта.";
    // document.oncontextmenu = disablecontext;

  



    
})