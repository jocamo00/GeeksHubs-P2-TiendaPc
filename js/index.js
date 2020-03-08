var Ordenador = [
    {
        img:"img/lenovo_ideapad_i3.jpg",
        marca:"Lenovo",
        modelo:"Ideapad",
        procesador:"i3",
        ram:"8GB",
        hd:"250GB SSD",
        precio:"349€",
        valoracion:"★"
    },
    {
        img:"img/Apple_macBookAir_i3.jpg",
        marca:"Apple",
        modelo:"MacBook Air",
        procesador:"i3",
        ram:"8GB",
        hd:"128GB SSD",
        precio:"1099€",
        valoracion:"★"
    },
    {
        img:"img/lenovo_ideapad_i3.jpg",
        marca:"Lenovo",
        modelo:"Ideapad",
        procesador:"i3",
        ram:"8GB",
        hd:"250GB SSD",
        precio:"349€",
        valoracion:"★"      
    },
    {
        img:"img/Apple_macBookAir_i3.jpg",
        marca:"Apple",
        modelo:"MacBook Air",
        procesador:"i3",
        ram:"8GB",
        hd:"128GB SSD",
        precio:"1099€",
        valoracion:"★"
    },
    {
        img:"img/lenovo_ideapad_i3.jpg",
        marca:"Lenovo",
        modelo:"Ideapad",
        procesador:"i3",
        ram:"8GB",
        hd:"250GB SSD",
        precio:"349€",
        valoracion:"★"
                
    },
    {
        img:"img/Apple_macBookAir_i3.jpg",
        marca:"Apple",
        modelo:"MacBook Air",
        procesador:"i3",
        ram:"8GB",
        hd:"128GB SSD",
        precio:"1099€",
        valoracion:"★"
    },
    {
        img:"img/lenovo_ideapad_i3.jpg",
        marca:"Lenovo",
        modelo:"Ideapad",
        procesador:"i3",
        ram:"8GB",
        hd:"250GB SSD",
        precio:"349€",
        valoracion:"★"
                
    },
    {
        img:"img/Apple_macBookAir_i3.jpg",
        marca:"Apple",
        modelo:"MacBook Air",
        procesador:"i3",
        ram:"8GB",
        hd:"128GB SSD",
        precio:"1099€",
        valoracion:"★"
    },
    {
        img:"img/lenovo_ideapad_i3.jpg",
        marca:"Lenovo",
        modelo:"Ideapad",
        procesador:"i3",
        ram:"8GB",
        hd:"250GB SSD",
        precio:"349€",
        valoracion:"★"
                
    },
    {
        img:"img/Apple_macBookAir_i3.jpg",
        marca:"Lenovo",
        modelo:"Ideapad",
        procesador:"i3",
        ram:"8GB",
        hd:"250GB SSD",
        precio:"349€",
        valoracion:"★"
                
    },
    {
        img:"img/Apple_macBookAir_i3.jpg",
        marca:"Apple",
        modelo:"MacBook Air",
        procesador:"i3",
        ram:"8GB",
        hd:"128GB SSD",
        precio:"1099€",
        valoracion:"★"
    },
    {
        img:"img/Apple_macBookAir_i3.jpg",
        marca:"Lenovo",
        modelo:"Ideapad",
        procesador:"i3",
        ram:"8GB",
        hd:"250GB SSD",
        precio:"349€",
        valoracion:"★"
    }
]


let val;

for(let i = 0; i<Ordenador.length; i++){

    document.getElementById("productos").innerHTML += '<div id="elemento'+[i]+'" class="container-producto col-sm-6 col-lg-4 col-xl-3">'+
        //'<button id="btnFavorito'+[i]+'" onclick="favoritos()">favoritos</button>'+
        '<img class="d-block w-100" src='+Ordenador[i].img+' alt="">'+
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
           
            '<div id="estrella'+[i]+'">' 
            
                for(let k = 0; k < 5; k++){
                    document.getElementById("estrella"+[i]).innerHTML +=
                        '<input id="radio'+i+k+'" type="radio" name="estrellas" value="'+(1+k)+'">'+
                        '<label for="radio'+i+k+'">★</label>'

                        /* function myFunction() {
                            let r = document.getElementById("radio"+i+k);
                            console.log(r)
                            //console.log(r.getAttribute("value"));
                            //val = r.getAttribute("value");
                            //let suma = Number(val) +100;
                            //console.log(val);
                        } */

                        /* function myFunction() {
                            let radio = document.getElementById("radio"+[i]+[k]);
                            console.log(r);
                        } */
                        


                        

                        /* let r = document.getElementById("radio"+i+k);
                        val = r.getAttribute("value"); */
                }
            '</div>'+
        '</div>'+   
    '</div>'; 
}

 



/* let favoritos = [];
let elemento = document.getElementById("elemento0");


favoritos.push(elemento);

console.log(favoritos); */
/* document.getElementById("favoritos").innerHTML += '<div id="jose"></div>'; */

//console.log(elemento);




var container;
     
        function init(){
            container = document.querySelector('.carrito');
            container.addEventListener('dragover', dragSobreContainer, false);
            container.addEventListener('dragleave', dragSalioContainer, false);
            container.addEventListener('drop', manejarDrop, false);

            var container_producto = document.getElementsByClassName('container-producto');

            for(i in container_producto){
                var contProducto = container_producto[i];
                contProducto.addEventListener('dragstart', dragIniciado, false);
                contProducto.addEventListener('dragend', dragFinalizado,false);

                }
            }
        

        init();


        function dragIniciado(e){
            //this.style.backgroundColor='blue';
            var padre = document.createElement('div');
            var clon = this.cloneNode(true);
            padre.appendChild(clon);
            e.dataTransfer.setData('text', padre.innerHTML);
        }

        function manejarDrop(e){
            e.preventDefault();
            var datos = e.dataTransfer.getData('text');
            this.innerHTML += datos;

        }

        function dragSobreContainer(e){
            e.preventDefault();
            this.classList.add('over');
            return false;

        }

        function dragSalioContainer(e){
            this.classList.remove('over');
        }

        function dragFinalizado(e){
            //this.style.backgroundColor='red';
            
            
        }



