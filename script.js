// Função para mostrar apenas a categoria clicada
function mostrarCategoria(categoria) {
    // Oculta todas as categorias
    let categorias = document.querySelectorAll('.categoria');
    categorias.forEach(cat => cat.style.display = 'none');

    // Exibe apenas a categoria selecionada
    document.getElementById(categoria).style.display = 'block';

    // Oculta todas as subcategorias ao abrir uma nova categoria
    let subcategorias = document.querySelectorAll('.subcategoria');
    subcategorias.forEach(sub => sub.style.display = 'none');
}

// Função para mostrar apenas a subcategoria clicada
function mostrarSubcategoria(subcategoria) {
    // Oculta todas as subcategorias da categoria aberta
    let subcategorias = document.querySelectorAll('.subcategoria');
    subcategorias.forEach(sub => sub.style.display = 'none');

    // Exibe apenas a subcategoria selecionada
    document.getElementById(subcategoria).style.display = 'block';
}

// Oculta todas as categorias ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    let categorias = document.querySelectorAll('.categoria');
    categorias.forEach(cat => cat.style.display = 'none');
});
