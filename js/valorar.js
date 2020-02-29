/* var starRegular = [
    {
        img1:"img/starRegular.png",
        img2:"img/starRegular.png",
        img3:"img/starRegular.png",
        img4:"img/starRegular.png",
        img5:"img/starRegular.png"
    }
]

for(var i = 0; i<starRegular.length; i++){

    document.getElementById("contenedor-star").innerHTML +=
        '<img class="imgStar" id="idStarReg" src='+starRegular[i].img1+' alt="">'+   
        '<img class="imgStar" src='+starRegular[i].img2+' alt="">'+ 
        '<img class="imgStar" src='+starRegular[i].img3+' alt="">'+ 
        '<img class="imgStar" src='+starRegular[i].img4+' alt="">'+ 
        '<img class="imgStar" src='+starRegular[i].img5+' alt="">'; 
} 
 */


    /* let estrella = 'img/starRegular.png';

    for(let i = 0; i < 5; i++){
       let e = document.getElementById("demo").innerHTML += '<img class="imgStar" id="imgStar" onclick="cambioEstrella()" src=' +estrella+ ' alt="">'; 
       
    }

    function cambioEstrella(){
        let elemento = document.getElementById(id);
        document.getElementById("imgStar").style.backgroundColor = "red";
    }  */

    /* let estrella = 'img/starRegular.png';
    let array = [];
    let cadena;
    
    for(let i = 0; i < 5; i++){
        let e = document.getElementById("demo").innerHTML += '<img class="imgStar" id="imgStar'+[i]+'" onclick="cambioEstrella()" src=' +estrella+ ' alt="">'; 
        cadena = array.push(e);

     } 
     

    function cambioEstrella(){
        let elemento = document.getAttribute("id");  
        console.log(elemento);
    
    } 
 */

 
let estrellas = 5;
let array = [];

 for(let i = 0; i < estrellas; i++){
    let e = document.getElementById("demo").innerHTML += '<img class="imgStar" id="imgStar'+[i]+'" onclick="cambioEstrella()" src= "img/starRegular.png" alt="">'; 
    
    array.push(e);
    
    
 } 

 function cambioEstrella(){
    
    if(array[0]){
        document.getElementById("imgStar0").style.backgroundColor = "red";
        console.log(array[0]);
    } 
    if (array[1]){
        document.getElementById("imgStar1").style.backgroundColor = "blue";
        console.log(array[1]);
    }
} 

     



