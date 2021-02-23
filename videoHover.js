document.querySelector('.complete-video-bg').addEventListener('mouseenter', () => {
    document.querySelector('.play-button').style.backgroundImage = "url('images/play-red.png')";
    document.querySelector('.complete-video-bg').style.opacity = "70%";
    document.querySelector('.complete-video-bg').style.cursor = "pointer";
})

document.querySelector('.complete-video-bg').addEventListener('mouseleave', () => {
    document.querySelector('.play-button').style.backgroundImage = "url('images/play-white.png')";
    document.querySelector('.complete-video-bg').style.opacity = "100%";
})

document.querySelector('.play-button').addEventListener('mouseenter', () => {
    document.querySelector('.play-button').style.backgroundImage = "url('images/play-red.png')";
    document.querySelector('.complete-video-bg').style.opacity = "70%";
    document.querySelector('.play-button').style.cursor = "pointer";
})

document.querySelector('.play-button').addEventListener('mouseleave', () => {
    document.querySelector('.play-button').style.backgroundImage = "url('images/play-red.png')";
    document.querySelector('.complete-video-bg').style.opacity = "70%";
})