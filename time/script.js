let btn = document.querySelector(".btn"),
    box = document.querySelector(".box")

function anim() {

    let pos = 0;

    let id = setInterval(frame, 10)

    function frame() {

            pos++;
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';

    }

}

btn.addEventListener('click', anim);