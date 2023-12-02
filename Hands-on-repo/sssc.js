
var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
 
  slides[slideIndex-1].style.display = "block";  

  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

let xhr;

const loadData = () => {
    xhr = new XMLHttpRequest();

    if(!xhr){
        alert('couldn\'t create xhr object');
        return false;
    }
    xhr.onreadystatechange = reqListener;
    xhr.open('GET' , '/carousel.json');
    xhr.send();
}
window.onload = loadData();

function reqListener() {
    if(xhr.readyState === 4) {
        if(xhr.status === 200 ) {
            carousel = JSON.parse(xhr.responseText).carousel;
           // console.log(carousel);
                var fragment = document.createDocumentFragment();
                for(let i=0 ; i<carousel.length ; i++){
                    let item = carousel[i];
                    let slide = document.createElement("div");
                    slide.className = "mySlides";
                    slide.innerHTML = '<a class="image-wrapper" href="' + item.href + '">' +
                        '<img class="carousel-image" src=" '+item.src+'" alt="'+ item.alt +'"> </a>' +
                        '<div class="aside-left"><p>'+item.name+'</p><br/>'+  '<div class="right"><p class="desc">'+item.description+'</p>' +
                        '<button class="watchnow">Watch Now</button></div></div>';

                    fragment.appendChild(slide);
                    /*
                     <div class="mySlides">
                <a class="image-wrapper" href="sacredgames.html"> <img class="carousel-image"
                        src="ott project images/carousel/i1.png" alt="carousel-image"> </a>
                <div class="aside-left">
                    <p>Sacred Games</p>
                    <br>
                    <button class="watchnow">Watch Now</button>
                </div>
            </div>
                    */
                    
                
                }
                var targetEl = document.getElementsByClassName('slideshow-container')[0];
                targetEl.appendChild(fragment);
                showSlides();
           // var carouselimages = document.getElementsByClassName('slideshow-container');
        }

    }
}