let chr;

const loadInfo = () => {
    chr = new XMLHttpRequest();
    if(!chr){
        alert('couldn\'t create xhr object');
        return false;
    }
    chr.onreadystatechange = reqInfo;
    chr.open('GET' , '/newrelease.json');
    chr.send();
}
window.onload = loadInfo();

function reqInfo() {
    if(chr.readyState === 4){
        if(chr.status === 200 ){
            newrel = JSON.parse(chr.responseText).newrelease;
           // console.log(newrel);
            var fragment = document.createDocumentFragment();
            for(let x=0; x<newrel.length; x++){
                let piece = newrel[x];
                let card = document.createElement("div");
                card.className = "card";
                card.innerHTML = '<a class="newreleaseanchor" href="'+piece.href+'"><img class="'+piece.class+'" src="'+piece.src+'" alt="'+piece.alt+'"></img> </a>';
               
                fragment.appendChild(card);
            }
            var target = document.getElementsByClassName('content')[0];
            target.appendChild(fragment);
        }
    }
}

/*<div class="card">
               
<a><img class="c1" src="ott project images/movies/b-police.jpg" alt="Avatar"  ></a>
           

<img class="c1" src="ott project images/movies/anabelle-hind.jpg" alt="Avatar" >
<img class="c1" src="ott project images/movies/bhuj.jpg" alt="Avatar" >
<img class="c1" src="ott project images/movies/black-widow.jpg" alt="Avatar" >
<img class="c1" src="ott project images/movies/DOTA.jpg" alt="Avatar" >
<img class="c1" src="ott project images/movies/FIRE in the blood.jpg" alt="Avatar">

           
            
            
            
           
</div>*/