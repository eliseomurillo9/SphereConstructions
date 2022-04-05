const button = document.getElementById('chat-button');
const chat = document.getElementById('chatwindow');
const closePop = document.getElementById('close');



button.addEventListener('click', function (event) {
    chat.classList.add('chat')
});

closePop.addEventListener('click', function (event) {
    chat.classList.remove('chat')
})


