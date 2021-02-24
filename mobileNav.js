document.querySelector('.burger').addEventListener('click', () => {
    if (document.querySelector('.mobile-nav').style.display == 'flex') {
        document.querySelector('.mobile-nav').style.display = "none";
        document.querySelector('.burger').style.backgroundImage = "url('images/burger.png')";
    }
    else{
        document.querySelector('.mobile-nav').style.display = "flex";
        document.querySelector('.burger').style.backgroundImage = "url('images/cross.png')";
    }
})