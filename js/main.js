$(document).ready(function() {

    //SLIDER
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1600
    });

    //posts
    var posts = [
        {
            titulo: 'Prueba de titulo 1',
            date: 'Publicado el dia ' + moment().day() + ' de ' + moment().format("MMM" ) + ' del ' + moment().format("YYYY" ),
            contenido: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, aperiam ea ab numquam quos rerum nisi autem pariatur ratione sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, aperiam ea ab numquam quos rerum nisi autem pariatur ratione sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, molestiae'
        },
        {
            titulo: 'Prueba de titulo 2',
            date: 'Publicado el dia ' + moment().day() + ' de ' + moment().format("MMM" ) + ' del ' + moment().format("YYYY" ),
            contenido: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, aperiam ea ab numquam quos rerum nisi autem pariatur ratione sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, aperiam ea ab numquam quos rerum nisi autem pariatur ratione sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, molestiae'
        },
        {
            titulo: 'Prueba de titulo 3',
            date: 'Publicado el dia ' + moment().day() + ' de ' + moment().format("MMM" ) + ' del ' + moment().format("YYYY" ),
            contenido: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, aperiam ea ab numquam quos rerum nisi autem pariatur ratione sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, aperiam ea ab numquam quos rerum nisi autem pariatur ratione sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, molestiae'
        },
        {
            titulo: 'Prueba de titulo 4',
            date: 'Publicado el dia ' + moment().day() + ' de ' + moment().format("MMM" ) + ' del ' + moment().format("YYYY" ),
            contenido: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, aperiam ea ab numquam quos rerum nisi autem pariatur ratione sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, aperiam ea ab numquam quos rerum nisi autem pariatur ratione sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, molestiae'
        }
    ];
    
    posts.forEach((item, index) => {
        var post = `<article class="post">
                                <h3>${item.titulo}</h3>
                                <span class="fecha">${item.date}</span>
                                <p>
                                    ${item.contenido}
                                </p>
                                <a href="#" class="ver-post">Leer mas</a>
                            </article>`;

    $('#posts').append(post);
    });
});