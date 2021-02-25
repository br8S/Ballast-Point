var mobileOn = false;

document.querySelector('.burger').addEventListener('click', () => {
    if(mobileOn == false){
        document.querySelector('.burger').style.backgroundImage = "url('images/cross.png')";
        document.querySelector('.mobile-nav').classList.add('mobile-nav-bg');
        document.querySelectorAll('.mobile-nav-links').forEach(link => {
            link.style.transform = "translate(0, 0)";
        })
        mobileOn = true;
    }

    else {
        document.querySelector('.burger').style.backgroundImage = "url('images/burger.png')";
        document.querySelector('.mobile-nav').classList.remove('mobile-nav-bg');
        document.querySelectorAll('.mobile-nav-links').forEach(link => {
            link.style.transform = "translate(0, 2000%)";
        })
        mobileOn = false;
    }
})

