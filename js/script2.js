
let questionText = document.querySelector('.questions__text');



let btn = document.getElementsByClassName("questions__button");


for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
to highlight the button that controls the panel */
    this.classList.toggle("active");


    /* Toggle between hiding and showing the active panel */
    let panel = this.previousElementSibling;
    if (panel.style.display === "none") {
      panel.style.display = "block";
} else {
      panel.style.display = "block";
}




if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
} else {
panel.style.maxHeight = panel.scrollHeight + 10 + "px";
}
});
}
