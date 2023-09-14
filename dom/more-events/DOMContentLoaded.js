/**
The DOMContentLoaded event fires 
when the initial HTML document has been completely loaded and parsed, 
without waiting for stylesheets, images, and subframes to finish loading.

window.addEventListener('DOMContentLoaded', function() { //…Code here })
 */

window.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.dom-loaded');
    content.style.color= 'red';
    console.log('hello world')
})






