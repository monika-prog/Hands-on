let thr;
const loadTv = () => {
    thr = new XMLHttpRequest();
    if (!thr) {
        alert('couldn\'t create xhr object');
        return false;
    }
    thr.onreadystatechange = reqTv;
    thr.open('GET', '/tv.json');
    thr.send();
}
window.onload = loadTv();

function reqTv() {
    if (thr.readyState === 4) {
        if (thr.status === 200) {
            tv = JSON.parse(thr.responseText).TV;
           // console.log(tv);
            var fragment = document.createDocumentFragment();
            for (let t = 0; t < tv.length; t++) {
                let tele = tv[t];
                let box = document.createElement("div");
                box.className = "box-slide";
                box.innerHTML = '<a href="' + tele.href + '"><img class="c4" src="' + tele.src + '" alt="' + tele.alt + '"></img> </a>';



                fragment.appendChild(box);

            }
            var target11 = document.getElementsByClassName('channels')[0];
            target11.appendChild(fragment);

        }
    }
}