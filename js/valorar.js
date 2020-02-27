/* Funcionalidad valoración */
/* 
var starRegular = [
    {
        img1: "img/starRegular",
        img2: "img/starRegular",
        img3: "img/starRegular",
        img4: "img/starRegular",
        img5: "img/starRegular"
    }
]

var starSolid = [
    {
        img1: "img/starRegular",
        img2: "img/starRegular",
        img3: "img/starRegular",
        img4: "img/starRegular",
        img5: "img/starRegular"
    }
]

for(var i = 0; i<starRegular.length; i++){
    document.getElementById("contenedor-star").innerHTML +=
            '<div class="star">'+
                '<img class="imgStarRegular" src='+starRegular[i].img1+' alt="">'+     
            '</div>';  


}  */
/* Fin funcionalidad valoración */

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


    let estrella = 'img/starRegular.png';

    for(let i = 0; i < 5; i++){
       let e = document.getElementById("demo").innerHTML += '<img class="imgStar" id="imgStar" onclick="cambioEstrella()" src=' +estrella+ ' alt="">'; 
       
    }

    function cambioEstrella(){
        document.getElementById("imgStar").style.backgroundColor = "red";
    }
    



