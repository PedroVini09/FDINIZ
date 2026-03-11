// ================= ARQUIVO PRINCIPAL =================
// Gerencia header, dropdown, redes sociais e outros

document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 Script principal carregado!');
    
    // ================= HEADER SCROLL =================
    const header = document.querySelector('header');
    
    if (header) {
        function atualizarHeader() {
            if (window.scrollY > 80) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        
        window.addEventListener('scroll', atualizarHeader);
        atualizarHeader(); // Executar uma vez no carregamento
        console.log('✅ Header scroll funcionando');
    }
    
    // ================= DROPDOWN MENU =================
    const btnContato = document.getElementById('btn-contato');
    
    if (btnContato) {
        const submenu = btnContato.parentElement;
        
        btnContato.addEventListener('click', function(e) {
            e.preventDefault();
            submenu.classList.toggle('ativo');
            console.log('📌 Dropdown toggled');
        });
        
        // Fechar ao clicar fora
        document.addEventListener('click', function(e) {
            if (!submenu.contains(e.target)) {
                submenu.classList.remove('ativo');
            }
        });
        
        console.log('✅ Dropdown funcionando');
    }
    
    // ================= REDES SOCIAIS =================
    function adicionarRedesSociais() {
        console.log('🔗 Tentando adicionar redes sociais...');
        
        // Encontrar onde adicionar
        const colunaRodape = document.querySelector('.rodape-coluna:first-child');
        
        if (!colunaRodape) {
            console.log('❌ Coluna do rodapé não encontrada');
            return;
        }
        
        // Verificar se já existem
        if (colunaRodape.querySelector('.rodape-redes')) {
            console.log('✅ Redes sociais já existem');
            return;
        }
        
        // Criar container
        const container = document.createElement('div');
        container.className = 'rodape-redes';
        
        // Lista de redes
        const redes = [
            { nome: 'facebook', icon: 'fa-brands fa-facebook-f', url: 'https://www.facebook.com/LaboratorioFDiniz/?locale=pt_BR' },
            { nome: 'instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/laboratoriofdiniz/' },
            { nome: 'linkedin', icon: 'fa-brands fa-linkedin-in', url: 'https://www.linkedin.com/company/laborat%C3%B3rio-f.diniz/about/' },
            { nome: 'youtube', icon: 'fa-brands fa-youtube', url: 'https://www.youtube.com/@LabFDiniz' }
        ];
        
        // Criar cada link
        redes.forEach(rede => {
            const link = document.createElement('a');
            link.href = rede.url;
            link.className = 'rede-social';
            link.setAttribute('data-rede', rede.nome);
            link.target = '_blank';
            link.rel = 'noopener';
            link.innerHTML = `<i class="${rede.icon}"></i>`;
            link.setAttribute('title', `Siga-nos no ${rede.nome.charAt(0).toUpperCase() + rede.nome.slice(1)}`);
            
            container.appendChild(link);
        });
        
        // Adicionar ao rodapé
        colunaRodape.appendChild(container);
        console.log('✅ Redes sociais adicionadas com sucesso!');
    }
    
    // Aguardar um pouco para garantir que o rodapé carregou
    setTimeout(adicionarRedesSociais, 500);
    
    // ================= OUVIR EVENTOS DO COOKIE =================
    document.addEventListener('cookiesAceitos', function() {
        console.log('🍪 Evento: Cookies aceitos - pode carregar analytics');
        // Aqui você pode carregar scripts de analytics
    });
    
    document.addEventListener('cookiesRejeitados', function() {
        console.log('🍪 Evento: Cookies rejeitados - não carregar analytics');
        // Aqui você pode bloquear scripts de analytics
    });
});