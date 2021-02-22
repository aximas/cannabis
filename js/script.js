document.addEventListener('DOMContentLoaded', () => {

    var maxHeight = document.querySelector('body').scrollHeight;

    console.log(maxHeight);

    // const leftLine = document.querySelector('.left-line'),
    //       rightLine = document.querySelector('.right-line');

    // leftLine.style.setProperty('--element-height', `${maxHeight}` + 'px');
    // rightLine.style.setProperty('--element-height', `${maxHeight}` + 'px');
    

    // function disablecontext(e) {
    //     var clickedEl = (e==null) ? event.srcElement.tagName : e.target.tagName;
    //     if (clickedEl == "IMG") {
    //         alert(errorMsg);
    //         return false;
    //     }
    // }
    // var errorMsg = "Вы не можете сохранять изображения с этого сайта.";
    // document.oncontextmenu = disablecontext;

    document.querySelectorAll('input').forEach((item) => {
        var inputsValue = []

        inputsValue.push(item.value);

    })
    
})