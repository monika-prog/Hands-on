let ohr;
const loadOriginals = () => {
    ohr = new XMLHttpRequest();

    if(!ohr){
        alert('couldn\'t create xhr object');
        return false;
    }
    ohr.onreadystatechange = reqHear;
    ohr.open('GET' , '/originals.json');
    ohr.send();
}
window.onload = loadOriginals();

function reqHear() {
    if(ohr.readyState === 4){
        if(ohr.status === 200 ){
            newOr = JSON.parse(ohr.responseText).originals;
           // console.log(newOr);
            var fragment = document.createDocumentFragment();
            for(let y=0; y<newOr.length; y++){
                let pies = newOr[y];
                let crd = document.createElement("div");
                crd.className = "crd";
                crd.innerHTML = '<a href="'+pies.href+'"><img class="'+pies.class+'" src="'+pies.src+'" alt="'+pies.alt+'"></img></a>';
               
                fragment.appendChild(crd);
            }
            var target = document.getElementsByClassName('cntnt')[0];
            target.appendChild(fragment);
        }
    }
}