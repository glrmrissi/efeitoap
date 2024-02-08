let video = document.getElementById('vd'); 
let texta = document.getElementById('texta')
let all = document.getElementById('items')
let offvideo = document.getElementById('offshow')

function clickvd() {
    video.autoplay = true
    video.load();
    texta.style.display = ('none')
    setInterval(pageOpen, 8000);
}

function pageOpen() {
    if (video.autoplay === true) {
        items.style.display = 'flex';
        items.style.width = '100%'
        items.style.height = '100%'
        offvideo.style.display = 'none';
    }
}
