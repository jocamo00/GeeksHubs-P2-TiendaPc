
var Ordenador = [
    {
        img:"img/lenovo_ideapad_i3.jpg",
        marca:"Lenovo",
        modelo:"Ideapad",
        procesador:"i3",
        ram:"8GB",
        hd:"250GB SSD",
        precio:"349€"
                
    },
    {
        img:"img/Apple_macBookAir_i3.jpg",
        marca:"Apple",
        modelo:"MacBook Air",
        procesador:"i3",
        ram:"8GB",
        hd:"128GB SSD",
        precio:"1099€"
    }
]

for(var i = 0; i<Ordenador.length; i++){

    document.getElementById("contenedor").innerHTML +=
    '<div class="div1">'+
        '<img class="imgProducto" src='+Ordenador[i].img+' alt="">'+
        '<div class="contenedor-info">'+
            '<div class="contenedorMarca">'+
            '<p class="marca">'+Ordenador[i].marca+'</p>'+
            '<p class="modelo">'+Ordenador[i].modelo+'</p>'+
        '</div>'+
        '<div class="contenedorProcesador">'+
            '<p class="procesador">'+Ordenador[i].procesador+'</p>'+
            '<p class="ram">/ '+Ordenador[i].ram+'</p>'+
            '<p class="hd"> / '+Ordenador[i].hd+'</p>'+
        '</div>'+
            '<p class="precio">'+Ordenador[i].precio+'</p>'+  
        '</div>'+     
    '</div>'; 
} 
/* Fin funcionalidad card producto */





