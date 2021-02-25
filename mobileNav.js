var mobileOn = false;

document.querySelector('.burger').addEventListener('click', () => {
    if(mobileOn == false){
        document.querySelector('.burger').style.backgroundImage = "url('images/cross.png')";
        document.querySelector('.mobile-nav').classList.add('mobile-nav-bg');
        document.querySelectorAll('.mobile-nav-links').forEach(link => {
            link.style.transform = "translate(0, 0)";
        })
        mobileOn = true;

        document.querySelector('.mobile-nav').style.display = "flex";
    }

    else {
        document.querySelector('.burger').style.backgroundImage = "url('images/burger.png')";
        document.querySelector('.mobile-nav').classList.remove('mobile-nav-bg');
        document.querySelectorAll('.mobile-nav-links').forEach(link => {
            link.style.transform = "translate(0, 2000%)";
        })
        document.querySelector('.beers-drop-nav').style.display = "none";
        document.querySelector('.beers-drop-nav').classList.remove('mobile-nav-bg');
        mobileOn = false;
    }
})

document.querySelectorAll('.mobile-nav-links').forEach(function (link, index) {
    if (index === 0) {
        link.addEventListener('click', () => {
            document.querySelector('.beers-drop-nav').style.display = "flex";
            document.querySelector('.mobile-nav').style.display = "none";
            document.querySelector('.beers-drop-nav').classList.add('mobile-nav-bg');
        })
    }
    if (index === 1) {
        link.addEventListener('click', () => {
            console.log("locations")
        })
    }
    if (index === 2) {
        link.addEventListener('click', () => {
            console.log("locations")
        })
    }

})

