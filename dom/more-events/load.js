/*
The load event is fired when the whole page has loaded, including
all dependent resources such as stylesheets and images. this is
in contrast to DOMContentLoaded, which is fired as soon as the
page DOM has been loaded, without waiting for resources to finish loading.

window.addEventListener('load', () => {})

*/

function lesson124() {
    // load
    window.addEventListener('load', () => {
        console.log('loaded')
        const img = document.querySelector('.load img');
        console.log(img.width);
    })
    
    // Content Loaded
    window.addEventListener('DOMContentLoaded', () => {
        console.log('DOM loaded')
        const img = document.querySelector('.load img');
        console.log(img.width);
    })  

}
