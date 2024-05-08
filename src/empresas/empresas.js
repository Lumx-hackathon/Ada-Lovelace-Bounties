$(document).ready(function(){
    // Carrossel 1
    var carrossel1 = $('.carrosselContainerAlimenticio .carrossel1');
    var larguraElemento1 = $('.carrosselContainerAlimenticio .elementoCarrosselEmpresas1').outerWidth(true);
    var quantidadeElementos1 = $('.carrosselContainerAlimenticio .elementoCarrosselEmpresas1').length;
    var larguraCarrossel1 = larguraElemento1 * quantidadeElementos1;
    carrossel1.css('width', larguraCarrossel1);

    $('.carrosselContainerAlimenticio .next1').click(function(){
        carrossel1.animate({left: -larguraElemento1}, 500, function(){
            carrossel1.find('.elementoCarrosselEmpresas1:first').appendTo(carrossel1);
            carrossel1.css('left', 0);
        });
    });

    $('.carrosselContainerAlimenticio .prev1').click(function(){
        carrossel1.find('.elementoCarrosselEmpresas1:last').prependTo(carrossel1);
        carrossel1.css('left', -larguraElemento1);
        carrossel1.animate({left: 0}, 500);
    });

    // Carrossel 2
    var carrossel2 = $('.carrosselContainerEducacional .carrossel2');
    var larguraElemento2 = $('.carrosselContainerEducacional .elementoCarrosselEmpresas2').outerWidth(true);
    var quantidadeElementos2 = $('.carrosselContainerEducacional .elementoCarrosselEmpresas2').length;
    var larguraCarrossel2 = larguraElemento2 * quantidadeElementos2;
    carrossel2.css('width', larguraCarrossel2);

    $('.carrosselContainerEducacional .next2').click(function(){
        carrossel2.animate({left: -larguraElemento2}, 500, function(){
            carrossel2.find('.elementoCarrosselEmpresas2:first').appendTo(carrossel2);
            carrossel2.css('left', 0);
        });
    });

    $('.carrosselContainerEducacional .prev2').click(function(){
        carrossel2.find('.elementoCarrosselEmpresas2:last').prependTo(carrossel2);
        carrossel2.css('left', -larguraElemento2);
        carrossel2.animate({left: 0}, 500);
    });

    // Carrossel 3
    var carrossel3 = $('.carrosselContainerFinancas .carrossel3');
    var larguraElemento3 = $('.carrosselContainerFinancas .elementoCarrosselEmpresas3').outerWidth(true);
    var quantidadeElementos3 = $('.carrosselContainerFinancas .elementoCarrosselEmpresas3').length;
    var larguraCarrossel3 = larguraElemento3 * quantidadeElementos3;
    carrossel3.css('width', larguraCarrossel3);

    $('.carrosselContainerFinancas .next3').click(function(){
        carrossel3.animate({left: -larguraElemento3}, 500, function(){
            carrossel3.find('.elementoCarrosselEmpresas3:first').appendTo(carrossel3);
            carrossel3.css('left', 0);
        });
    });

    $('.carrosselContainerFinancas .prev3').click(function(){
        carrossel3.find('.elementoCarrosselEmpresas3:last').prependTo(carrossel3);
        carrossel3.css('left', -larguraElemento3);
        carrossel3.animate({left: 0}, 500);
    });

    // Ativar descrições
    $('.elementoCarrosselEmpresas1').click(function(){
        $(this).find('.descrição').toggle();
    });

    $('.elementoCarrosselEmpresas2').click(function(){
        $(this).find('.descrição').toggle();
    });

    $('.elementoCarrosselEmpresas3').click(function(){
        $(this).find('.descrição').toggle();
    });
});
