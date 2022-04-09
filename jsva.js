const button = document.getElementById('chat-button');
const chat = document.getElementById('chatwindow');
const closePop = document.getElementById('close');
const nav = document.querySelector('#navs');
const naves = nav.querySelectorAll('div.nav-links > a');
const options = document.querySelector('.nav-links')
const menu = document.getElementById('menu');



button.addEventListener('click', function (_event) {
    chat.classList.add('chat')
    button.style.display = 'none'
});

closePop.addEventListener('click', function (_event) {
    chat.classList.remove('chat')
    button.style.display = 'flex'
});

menu.addEventListener('click', function(e){
    options.style.display = 'flex'
})


naves.forEach(a => {
    a.addEventListener('click', function (e) {

        if (this.hash !== '') {
            e.preventDefault
        };
         const hash = this.hash

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);

        options.style.display = 'none'

    })
})





