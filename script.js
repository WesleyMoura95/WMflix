// Função para mostrar apenas a categoria clicada
function mostrarCategoria(categoria) {
    var categorias = document.getElementsByClassName('categoria');
    for (var i = 0; i < categorias.length; i++) {
        categorias[i].style.display = 'none';
    }

    document.getElementById(categoria).style.display = 'block';

    var subcategorias = document.getElementsByClassName('subcategoria');
    for (var j = 0; j < subcategorias.length; j++) {
        subcategorias[j].style.display = 'none';
    }
}

// Função para mostrar apenas a subcategoria clicada
function mostrarSubcategoria(subcategoria) {
    var subcategorias = document.getElementsByClassName('subcategoria');
    for (var i = 0; i < subcategorias.length; i++) {
        subcategorias[i].style.display = 'none';
    }

    document.getElementById(subcategoria).style.display = 'block';
}

// Oculta todas as categorias ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    var categorias = document.getElementsByClassName('categoria');
    for (var i = 0; i < categorias.length; i++) {
        categorias[i].style.display = 'none';
    }
});

// Suporte para controle remoto/navegação por teclado
document.addEventListener('keydown', function(event) {
    var buttons = document.getElementsByTagName('button');
    var focusIndex = -1;

    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i] === document.activeElement) {
            focusIndex = i;
            break;
        }
    }

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        if (focusIndex < buttons.length - 1) {
            buttons[focusIndex + 1].focus();
        }
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        if (focusIndex > 0) {
            buttons[focusIndex - 1].focus();
        }
    } else if (event.key === "Enter") {
        document.activeElement.click();
    }
});
