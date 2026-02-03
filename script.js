/* =========================================
   HUB DE INOVAÇÃO - SCRIPT PRINCIPAL
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    // Configuração do Menu Mobile (se necessário no futuro)
    const menuBtn = document.getElementById('mobile-menu-btn');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            alert('Menu mobile clicado! Você pode adicionar um dropdown aqui.');
        });
    }

    // Efeito de console para debug
    console.log("Hub de Inovação carregado com sucesso.");
});