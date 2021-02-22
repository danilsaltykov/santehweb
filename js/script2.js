let btn = document.querySelector('.questions__button');
let questionText = document.querySelector('.questions__text');


btn.addEventListener('click', function(){
    if(questionText.style.display == 'none'){
        questionText.style.display = 'block';
    } else {
        questionText.style.display = 'none';
    }
})