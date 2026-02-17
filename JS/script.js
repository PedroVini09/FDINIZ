const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


const btnContato = document.getElementById("btn-contato");
const submenu = btnContato.parentElement;

btnContato.addEventListener("click", (e) => {
    e.preventDefault();
    submenu.classList.toggle("ativo");
});


document.addEventListener('DOMContentLoaded', function() {

    // Adicionar redes sociais dinamicamente (opcional)
    adicionarRedesSociais();
   
});
// ADICIONAR REDES SOCIAIS (OPCIONAL)
function adicionarRedesSociais() {
    const redesSociais = [
        {
            icon: 'fa-brands fa-facebook-f',
            url: 'https://www.facebook.com/LaboratorioFDiniz/?locale=pt_BR',
            color: '#1877F2',
            tooltip: 'Siga-nos no Facebook'
        },
        {
            icon: 'fa-brands fa-instagram',
            url: 'https://www.instagram.com/laboratoriofdiniz/',
            color: '#E4405F',
            tooltip: 'Siga-nos no Instagram'
        },
        {
            icon: 'fa-brands fa-linkedin-in',
            url: 'https://www.linkedin.com/company/laborat%C3%B3rio-f.diniz/about/',
            color: '#0A66C2',
            tooltip: 'Conecte-se no LinkedIn'
        },
        {
            icon: 'fa-brands fa-youtube',
            url: 'https://www.youtube.com/@LabFDiniz',
            color: '#FF0000',
            tooltip: 'Inscreva-se no YouTube'
        }
    ];
    
    const containerRedes = document.createElement('div');
    containerRedes.className = 'rodape-redes';
    
    redesSociais.forEach(rede => {
        const link = document.createElement('a');
        link.href = rede.url;
        link.className = 'rede-social';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.title = rede.tooltip;
        link.style.setProperty('--rede-color', rede.color);
        
        link.innerHTML = `<i class="${rede.icon}"></i>`;
        
        // Efeito de brilho personalizado
        link.addEventListener('mouseenter', function() {
            this.style.setProperty('--hover-color', rede.color + '40');
        });
        
        containerRedes.appendChild(link);
    });
    
    // Adicionar após o parágrafo da primeira coluna
    const primeiraColuna = document.querySelector('.rodape-coluna:first-child');
    if (primeiraColuna) {
        primeiraColuna.appendChild(containerRedes);
    }
}