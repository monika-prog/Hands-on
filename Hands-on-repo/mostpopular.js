let mhr;
const loadIn = () => {
    mhr = new XMLHttpRequest();
    if(!mhr){
        alert('couldn\'t create xhr object');
        return false;
    }
    mhr.onreadystatechange = reqIn;
    mhr.open('GET' , '/mostpopular.json');
    mhr.send();
}
window.onload = loadIn();

function reqIn(){
    if(mhr.readyState === 4){
        if(mhr.status === 200 ){
            mostpopular = JSON.parse(mhr.responseText).mostpopular;
          //  console.log(mostpopular);
            var fragment = document.createDocumentFragment();
            for(let m=0; m<mostpopular.length; m++){
                let most = mostpopular[m];
                let swiper = document.createElement("div");
                swiper.className = "swiper-slide";
                swiper.innerHTML = '<a href="'+most.href+'"><img class="netflix-images" src = "'+most.src+'" alt = "'+most.alt+'"></a>' + 
                '<div class="details"> <p class="mpdesc"> '+most.name+' <br/> '+most.rating+' <br/> </p> <button>Play</button> </div>';

                
               
                fragment.appendChild(swiper);
               
            }
            var target1 = document.getElementsByClassName('swiper')[0];
            target1.appendChild(fragment);

        }
    }
}












