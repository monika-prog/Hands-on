let search=document.getElementById('searchbar');
search.addEventListener('keyup',showsearch);

function  showsearch(){
    let input=search.value.toUpperCase();
    console.log("I am searching",input);
    

}