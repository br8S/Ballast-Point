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

        //makes sure all nested nav options are not displayed when mobile nav is closed
        document.querySelector('.beers-drop-nav').style.display = "none";
        document.querySelector('.beers-drop-nav').classList.remove('mobile-nav-bg');
        document.querySelector('.locations-drop-nav').style.display = "none";
        document.querySelector('.locations-drop-nav').classList.remove('mobile-nav-bg');
        document.querySelector('.about-drop-nav').style.display = "none";
        document.querySelector('.about-drop-nav').classList.remove('mobile-nav-bg');

        mobileOn = false;
    }
})

var mobile_nav_children = document.querySelector('.mobile-nav').children;
var beers_nav_children = document.querySelector('.beers-drop-nav').children;
var locations_nav_children = document.querySelector('.locations-drop-nav').children;
var about_nav_children = document.querySelector('.about-drop-nav').children;

for (var i = 0; i < mobile_nav_children.length; i++) {
    if (i === 0) {
        mobile_nav_children[i].addEventListener('click', () => {
            document.querySelector('.beers-drop-nav').style.display = "flex";
            document.querySelector('.mobile-nav').style.display = "none";
            document.querySelector('.beers-drop-nav').classList.add('mobile-nav-bg');
        })

        beers_nav_children[0].addEventListener('click', () => {
            document.querySelector('.beers-drop-nav').style.display = "none";
            document.querySelector('.mobile-nav').style.display = "flex";
            document.querySelector('.mobile-nav').classList.add('mobile-nav-bg');
        })
    }

    if (i === 1) {
        mobile_nav_children[i].addEventListener('click', () => {
            document.querySelector('.locations-drop-nav').style.display = "flex";
            document.querySelector('.mobile-nav').style.display = "none";
            document.querySelector('.locations-drop-nav').classList.add('mobile-nav-bg');
        })

        locations_nav_children[0].addEventListener('click', () => {
            document.querySelector('.locations-drop-nav').style.display = "none";
            document.querySelector('.mobile-nav').style.display = "flex";
            document.querySelector('.mobile-nav').classList.add('mobile-nav-bg');
        })
    }

    if (i === 2) {
        mobile_nav_children[i].addEventListener('click', () => {
            document.querySelector('.about-drop-nav').style.display = "flex";
            document.querySelector('.mobile-nav').style.display = "none";
            document.querySelector('.about-drop-nav').classList.add('mobile-nav-bg');
        })

        about_nav_children[0].addEventListener('click', () => {
            document.querySelector('.about-drop-nav').style.display = "none";
            document.querySelector('.mobile-nav').style.display = "flex";
            document.querySelector('.mobile-nav').classList.add('mobile-nav-bg');
        })
    }
}

