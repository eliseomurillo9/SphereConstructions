const button = document.getElementById('chat-button');
const chat = document.getElementById('chatwindow');
const closePop = document.getElementById('close');
const nav = document.querySelector('#navs');
const naves = nav.querySelectorAll('div.nav-links > a')



button.addEventListener('click', function (_event) {
    chat.classList.add('chat')
});

closePop.addEventListener('click', function (_event) {
    chat.classList.remove('chat')
});


naves.forEach(a => {
    a.addEventListener('click', function (e) {

        if (this.hash !== '') {
            e.preventDefault
        };
         const hash = this.hash

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);

    })
})





