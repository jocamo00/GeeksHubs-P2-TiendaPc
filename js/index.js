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
        img:"img/msi-gf65.jpg",
        marca:"MSI",
        modelo:"GF65",
        procesador:"i5",
        ram:"16GB",
        hd:"512GB SSD",
        precio:"898€",
        valoracion:"★"      
    },
    {
        img:"img/Asus-fx505dv.jpg",
        marca:"Asus",
        modelo:"TUF Gaming",
        procesador:"73",
        ram:"16GB",
        hd:"256GB SSD",
        precio:"898€",
        valoracion:"★"
    },
    {
        img:"img/HP-Pavilion.jpg",
        marca:"HP",
        modelo:"Pavilion",
        procesador:"i5",
        ram:"16GB",
        hd:"512GB SSD",
        precio:"699€",
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
        img:"img/Asus-fx505dv.jpg",
        marca:"Asus",
        modelo:"TUF Gaming",
        procesador:"73",
        ram:"16GB",
        hd:"256GB SSD",
        precio:"898€",
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
        img:"img/HP-Pavilion.jpg",
        marca:"HP",
        modelo:"Pavilion",
        procesador:"i5",
        ram:"16GB",
        hd:"512GB SSD",
        precio:"699€",
        valoracion:"★"
    },
    {
        img:"img/msi-gf65.jpg",
        marca:"MSI",
        modelo:"GF65",
        procesador:"i5",
        ram:"16GB",
        hd:"512GB SSD",
        precio:"898€",
        valoracion:"★" 
    }
] 



for(let i = 0; i<Ordenador.length; i++){

    document.getElementById("productos").innerHTML += '<div id="elemento'+[i]+'" class="container-producto col-sm-6 col-lg-4 col-xl-3">'+
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

                }
            '</div>'+
        '</div>'+   
    '</div>'; 

    /* function mostrarPrecio(){
        d = document.getElementById("elemento"+[i]).childNodes[1].childNodes[2].textContent;
        document.getElementById("desglose").innerHTML += d;
    } */
    
}




   





/******DRAG AND DROP COMPRA PRODUCTOS *****/
/* var container;
let arrayCompra = [];
let nuevoArrayCompra=[];
let prueba, prueba2;

     
        function init(){
            container = document.querySelector('.compra');
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
            //this.innerHTML += datos;
            arrayCompra.push(datos);

            document.getElementById("oculto").innerHTML = arrayCompra;


           prueba = document.getElementById("oculto").childNodes;
          

            for(let c = 0; c < prueba.length; c++){
                document.getElementById("desglose").innerHTML += prueba[c].childNodes[1].childNodes[2].textContent;
             
            } 

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
            
        } */


        
           
        
        
        


 






