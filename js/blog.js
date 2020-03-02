var Entrada = [
    {
        img:"img/img_blog01.jpg",
        titulo:"Reps is a nyc agency repres photographers text",
        fecha:"15 Feb, 2020",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, .",
        enlace:"READ MORE..."
        
    },
    {
        img:"img/img_blog04.jpg",
        titulo:"Post Format: Image, Lorem Ipsum is simply text",
        fecha:"20 Feb, 2020",
        descripcion:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint .",
        enlace:"READ MORE..."
    },
    {
        img:"img/img_blog03.jpg",
        titulo:"Post Format: Audio , Lorem Ipsum is simply text",
        fecha:"25 Feb, 2020",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, .",
        enlace:"READ MORE..."
        
    },
    {
        img:"img/img_blog02.jpg",
        titulo:"Post Format: Quote , Lorem Ipsum is simply text",
        fecha:"25 Feb, 2020",
        descripcion:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint .",
        enlace:"READ MORE..."
    },
    {
        img:"img/img_blog01.jpg",
        titulo:"Reps is a nyc agency repres photographers text",
        fecha:"15 Feb, 2020",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, .",
        enlace:"READ MORE..."
        
    },
    {
        img:"img/img_blog04.jpg",
        titulo:"Post Format: Image, Lorem Ipsum is simply text",
        fecha:"20 Feb, 2020",
        descripcion:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint .",
        enlace:"READ MORE..."
    },
    {
        img:"img/img_blog03.jpg",
        titulo:"Post Format: Audio , Lorem Ipsum is simply text",
        fecha:"25 Feb, 2020",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, .",
        enlace:"READ MORE..."
        
    },
    {
        img:"img/img_blog02.jpg",
        titulo:"Post Format: Quote , Lorem Ipsum is simply text",
        fecha:"25 Feb, 2020",
        descripcion:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint .",
        enlace:"READ MORE..."
    },
    {
        img:"img/img_blog01.jpg",
        titulo:"Reps is a nyc agency repres photographers text",
        fecha:"15 Feb, 2020",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, .",
        enlace:"READ MORE..."
        
    }
]


for(var f = 0; f<Entrada.length; f++){

    document.getElementById("entradasBlog").innerHTML += 
    '<div id="entradaB'+[f]+'" class="card-entrada col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">'+
        '<img class="d-block w-100" src='+Entrada[f].img+' alt="">'+
        '<div class="info-entrada">'+
                '<p class="titulo-entrada">'+Entrada[f].titulo+'</p>'+
                '<hr>'+
                '<p class="fecha-entrada">'+Entrada[f].fecha+'</p>'+
                '<p class="descripcion-entrada">'+Entrada[f].descripcion+'</p>'+
                '<p class="enlace-entrada">'+Entrada[f].enlace+'</p>'+
        '</div>'+  
        '<div class="linea-entrada"></div>' 
    '</div>'; 
}  