const usernav = document.getElementById('usernav');
const close = document.getElementById('close');

//Pasamos la información a json y recuperamos la información
let username = JSON.parse(localStorage.getItem('user'));

if(username != null){
    usernav.innerHTML = '<a class="nav-item nav-link nav-enlaces" id="close" href="#">'+username[0].usuario+'</a>';
} else {
    usernav.innerHTML = '<a class="nav-item nav-link nav-enlaces" id="close" href="login.html">Iniciar sesión</a>';
}

close.addEventListener('click', function(){
    localStorage.clear('user');
    location.href='login.html';
}); 