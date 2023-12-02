let mohr;
const loadMo = () => {
    mohr = new XMLHttpRequest();
    if(!mohr){
        alert('couldn\'t create xhr object');
        return false;
    }
    mohr.onreadystatechange = reqMo;
    mohr.open('GET' , '/movies.json');
    mohr.send();
}
window.onload = loadMo();

function reqMo(){
    if(mohr.readyState === 4){
        if(mohr.status === 200 ){
            mo = JSON.parse(mohr.responseText).movie;
           // console.log(mo);
            var fragment = document.createDocumentFragment();
            for(let q=0; q<mo.length; q++){
                let mov = mo[q];
                let movie = document.createElement("div");
                movie.className = "movie-slide";
                movie.innerHTML = '<a href="'+mov.href+'"><img class="c3" src="'+mov.src+'" alt="'+mov.alt+'"></img> </a>'+
                '<div class="modetails"> <p class="mpdesc"> '+mov.name+'</p> <button>Play</button> </div>';

                
               
                fragment.appendChild(movie);
               
            }
            var target = document.getElementsByClassName('cnt')[0];
            target.appendChild(fragment);

        }
    }
}