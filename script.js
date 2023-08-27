// Mostra ou esconde o botão dependendo da posição do scroll
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topButton").style.display = "block";
    } else {
        document.getElementById("topButton").style.display = "none";
    }
};

// Função para voltar ao topo suavemente
function scrollToTop() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}

document.addEventListener('DOMContentLoaded', function() {
    const textoElemento = document.getElementById('texto');
    const texto = textoElemento.innerHTML;
    textoElemento.innerHTML = ''; // Limpa o conteúdo original

    let i = 0;
    function escreverTexto() {
        if (i < texto.length) {
            textoElemento.innerHTML += texto.charAt(i);
            i++;
            setTimeout(escreverTexto, 50); // Velocidade de digitação
        }
    }

    escreverTexto();
});
