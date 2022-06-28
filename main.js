window.addEventListener('load', () => {
    const menuBtn = document.querySelector('.alt-nav');
    const menuBtnLine = document.querySelectorAll('.alt-nav-line');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        menuBtnLine[1].classList.toggle('open');
        menuBtnLine[2].classList.toggle('open');
    });

    const resizeBtn = document.querySelector('#tool-resize');
    const main = document.querySelector('main');

    resizeBtn.addEventListener('click', () => {
        resizeBtn.firstElementChild.classList.toggle("displaytool");
        resizeBtn.lastElementChild.classList.toggle("displaytool");
        main.classList.toggle("expanded");
    });
});

