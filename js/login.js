const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    let users = Array(
        {
            usuario: username.value,
            contraseña: password.value
        }
    );
    
    //Lo pasa a string y lo almacena en el localStorage
    localStorage.setItem('user', JSON.stringify(users));
    location.href='index.html';
});