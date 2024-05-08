$(document).ready(function(){
    // Carrossel 1
    var carrossel1 = $('.carrossel1');
    var larguraElemento1 = $('.elementoCarrosselDoacao1').outerWidth(true);
    var quantidadeElementos1 = $('.elementoCarrosselDoacao1').length;
    var larguraCarrossel1 = larguraElemento1 * quantidadeElementos1;
    carrossel1.css('width', larguraCarrossel1);

    $('.next1').click(function(){
        carrossel1.animate({left: -larguraElemento1}, 500, function(){
            carrossel1.find('.elementoCarrosselDoacao1:first').appendTo(carrossel1);
            carrossel1.css('left', 0);
        });
    });

    $('.prev1').click(function(){
        carrossel1.find('.elementoCarrosselDoacao1:last').prependTo(carrossel1);
        carrossel1.css('left', -larguraElemento1);
        carrossel1.animate({left: 0}, 500);
    });

    // Carrossel 2
    var carrossel2 = $('.carrossel2');
    var larguraElemento2 = $('.elementoCarrosselDoacao2').outerWidth(true);
    var quantidadeElementos2 = $('.elementoCarrosselDoacao2').length;
    var larguraCarrossel2 = larguraElemento2 * quantidadeElementos2;
    carrossel2.css('width', larguraCarrossel2);

    $('.next2').click(function(){
        carrossel2.animate({left: -larguraElemento2}, 500, function(){
            carrossel2.find('.elementoCarrosselDoacao2:first').appendTo(carrossel2);
            carrossel2.css('left', 0);
        });
    });

    $('.prev2').click(function(){
        carrossel2.find('.elementoCarrosselDoacao2:last').prependTo(carrossel2);
        carrossel2.css('left', -larguraElemento2);
        carrossel2.animate({left: 0}, 500);
    });

    // Carrossel 3
    var carrossel3 = $('.carrossel3');
    var larguraElemento3 = $('.elementoCarrosselDoacao3').outerWidth(true);
    var quantidadeElementos3 = $('.elementoCarrosselDoacao3').length;
    var larguraCarrossel3 = larguraElemento3 * quantidadeElementos3;
    carrossel3.css('width', larguraCarrossel3);

    $('.next3').click(function(){
        carrossel3.animate({left: -larguraElemento3}, 500, function(){
            carrossel3.find('.elementoCarrosselDoacao3:first').appendTo(carrossel3);
            carrossel3.css('left', 0);
        });
    });

    $('.prev3').click(function(){
        carrossel3.find('.elementoCarrosselDoacao3:last').prependTo(carrossel3);
        carrossel3.css('left', -larguraElemento3);
        carrossel3.animate({left: 0}, 500);
    });

    // Ativar descrições
    $('.elementoCarrosselDoacao1').click(function(){
        $(this).find('.descrição').toggle();
    });

    $('.elementoCarrosselDoacao2').click(function(){
        $(this).find('.descrição').toggle();
    });

    $('.elementoCarrosselDoacao3').click(function(){
        $(this).find('.descrição').toggle();
    });
});
