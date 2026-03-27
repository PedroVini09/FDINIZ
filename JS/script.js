// ================= HEADER SCROLL =================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// ================= DROPDOWN MENU =================
const btnContato = document.getElementById("btn-contato");
if (btnContato) {
    const submenu = btnContato.parentElement;
    
    btnContato.addEventListener("click", (e) => {
        e.preventDefault();
        submenu.classList.toggle("ativo");
    });
}

// ================= DOM CARREGADO =================
document.addEventListener('DOMContentLoaded', function() {
    
    // Adicionar redes sociais
    adicionarRedesSociais();
    
    // Inicializar carrossel
    iniciarCarrossel();
    
    // Animações de revelação
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('ativo');
                }
            });
        }, { threshold: 0.1 });
        
        reveals.forEach(reveal => observer.observe(reveal));
    }
    
    // Smooth scroll para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== "#" && href !== "") {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// ================= ADICIONAR REDES SOCIAIS =================
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
        
        link.addEventListener('mouseenter', function() {
            this.style.setProperty('--hover-color', rede.color + '40');
        });
        
        containerRedes.appendChild(link);
    });
    
    const primeiraColuna = document.querySelector('.rodape-coluna:first-child');
    if (primeiraColuna && !primeiraColuna.querySelector('.rodape-redes')) {
        primeiraColuna.appendChild(containerRedes);
    }
}

// ================= CARROSSEL AUTOMÁTICO =================
// ================= CARROSSEL PREMIUM =================
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide-full');
    const slidesContainer = document.querySelector('.carrossel-slides-container');
    const prevBtn = document.getElementById('prevPremium');
    const nextBtn = document.getElementById('nextPremium');
    const progressBar = document.getElementById('progressBar');
    const indicatorsContainer = document.getElementById('indicatorsPremium');
    
    if (!slides.length || !slidesContainer) return;
    
    let currentIndex = 0;
    let autoSlideInterval;
    let progressInterval;
    const totalSlides = slides.length;
    
    // Criar indicadores
    function criarIndicadores() {
        if (!indicatorsContainer) return;
        indicatorsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator-premium');
            if (i === currentIndex) indicator.classList.add('active');
            indicator.addEventListener('click', () => irParaSlide(i));
            indicatorsContainer.appendChild(indicator);
        }
    }
    
    // Atualizar indicadores
    function atualizarIndicadores() {
        const indicators = document.querySelectorAll('.indicator-premium');
        indicators.forEach((ind, i) => {
            if (i === currentIndex) {
                ind.classList.add('active');
            } else {
                ind.classList.remove('active');
            }
        });
    }
    
    // Atualizar slide ativo
    function atualizarSlideAtivo() {
        slides.forEach((slide, i) => {
            if (i === currentIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }
    
    // Ir para slide específico
    function irParaSlide(index) {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        
        currentIndex = index;
        const offset = -currentIndex * 100;
        slidesContainer.style.transform = `translateX(${offset}%)`;
        
        atualizarIndicadores();
        atualizarSlideAtivo();
        reiniciarAutoSlide();
        resetProgressBar();
        iniciarProgressBar();
    }
    
    // Próximo slide
    function proximoSlide() {
        irParaSlide(currentIndex + 1);
    }
    
    // Slide anterior
    function slideAnterior() {
        irParaSlide(currentIndex - 1);
    }
    
    // Reset barra de progresso
    function resetProgressBar() {
        if (progressBar) {
            progressBar.style.width = '0%';
            clearInterval(progressInterval);
        }
    }
    
    // Iniciar barra de progresso
    function iniciarProgressBar() {
        if (!progressBar) return;
        
        let width = 0;
        const duration = 5000; // 5 segundos
        const increment = 100 / (duration / 50); // Atualizar a cada 50ms
        
        progressInterval = setInterval(() => {
            width += increment;
            if (width >= 100) {
                width = 100;
                clearInterval(progressInterval);
            }
            progressBar.style.width = width + '%';
        }, 50);
    }
    
    // Reiniciar autoplay
    function reiniciarAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(proximoSlide, 5000);
    }
    
    // Parar autoplay
    function pararAutoSlide() {
        clearInterval(autoSlideInterval);
        clearInterval(progressInterval);
    }
    
    // Iniciar autoplay
    function iniciarAutoSlide() {
        autoSlideInterval = setInterval(proximoSlide, 5000);
        iniciarProgressBar();
    }
    
    // Eventos dos botões
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            slideAnterior();
            resetProgressBar();
            iniciarProgressBar();
        });
        
        nextBtn.addEventListener('click', () => {
            proximoSlide();
            resetProgressBar();
            iniciarProgressBar();
        });
    }
    
    // Pausar no hover
    const carrosselFull = document.querySelector('.carrossel-fullscreen');
    if (carrosselFull) {
        carrosselFull.addEventListener('mouseenter', pararAutoSlide);
        carrosselFull.addEventListener('mouseleave', () => {
            iniciarAutoSlide();
            resetProgressBar();
            iniciarProgressBar();
        });
    }
    
    // Suporte a touch
    let touchStartX = 0;
    let touchEndX = 0;
    
    if (carrosselFull) {
        carrosselFull.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            pararAutoSlide();
        });
        
        carrosselFull.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                proximoSlide();
            } else if (touchEndX - touchStartX > 50) {
                slideAnterior();
            }
            resetProgressBar();
            iniciarAutoSlide();
            iniciarProgressBar();
        });
    }
    
    // Inicializar
    criarIndicadores();
    atualizarSlideAtivo();
    iniciarAutoSlide();
});

// ================= POP-UP DE COOKIES SIMPLES =================
document.addEventListener('DOMContentLoaded', function() {
    const cookiePopup = document.getElementById('cookiePopup');
    const acceptBtn = document.getElementById('acceptCookies');
    const rejectBtn = document.getElementById('rejectCookies');
    const cookieSettingsBtn = document.getElementById('cookieSettingsBtn');
    
    // Verificar se os elementos existem
    if (!cookiePopup || !acceptBtn || !rejectBtn) {
        console.log('Elementos de cookies não encontrados');
        return;
    }
    
    // Verificar se já escolheu
    const cookieChoice = localStorage.getItem('cookieConsent');
    console.log('Escolha anterior:', cookieChoice);
    
    if (!cookieChoice) {
        // Mostrar popup após 1.5 segundos
        setTimeout(() => {
            cookiePopup.style.display = 'block';
            console.log('Popup de cookies exibido');
        }, 1500);
    } else {
        cookiePopup.style.display = 'none';
        if (cookieSettingsBtn) cookieSettingsBtn.style.display = 'flex';
        console.log('Popup ocultado (já escolheu)');
    }
    
    // ACEITAR COOKIES
    acceptBtn.addEventListener('click', function() {
        console.log('Aceitar clicado');
        localStorage.setItem('cookieConsent', 'accepted');
        cookiePopup.style.display = 'none';
        if (cookieSettingsBtn) cookieSettingsBtn.style.display = 'flex';
        
        // Feedback visual
        showFeedbackMessage('Cookies aceitos! Obrigado por confiar em nós.', 'success');
        
        // Disparar evento personalizado
        document.dispatchEvent(new CustomEvent('cookiesAceitos'));
    });
    
    // REJEITAR COOKIES
    rejectBtn.addEventListener('click', function() {
        console.log('Rejeitar clicado');
        localStorage.setItem('cookieConsent', 'rejected');
        cookiePopup.style.display = 'none';
        if (cookieSettingsBtn) cookieSettingsBtn.style.display = 'flex';
        
        // Feedback visual
        showFeedbackMessage('Cookies rejeitados. Apenas os cookies essenciais serão utilizados.', 'info');
        
        // Disparar evento personalizado
        document.dispatchEvent(new CustomEvent('cookiesRejeitados'));
    });
    
    // Botão flutuante para reabrir popup (opcional)
    if (cookieSettingsBtn) {
        cookieSettingsBtn.addEventListener('click', function() {
            cookiePopup.style.display = 'block';
            cookieSettingsBtn.style.display = 'none';
            
            // Scroll suave até o popup
            cookiePopup.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
    
    // Função para mostrar feedback (opcional)
    function showFeedbackMessage(message, type) {
        // Criar elemento de feedback
        const feedback = document.createElement('div');
        feedback.className = `cookie-feedback ${type}`;
        feedback.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(feedback);
        
        // Animação de entrada
        setTimeout(() => {
            feedback.style.opacity = '1';
            feedback.style.transform = 'translateY(0)';
        }, 10);
        
        // Remover após 3 segundos
        setTimeout(() => {
            feedback.style.opacity = '0';
            feedback.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                feedback.remove();
            }, 300);
        }, 3000);
    }
});

// CSS para o feedback (adicione ao seu CSS)
const style = document.createElement('style');
style.textContent = `
    .cookie-feedback {
        position: fixed;
        top: 100px;
        right: 30px;
        background: white;
        padding: 15px 25px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        gap: 12px;
        z-index: 10001;
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.3s ease;
        border-left: 4px solid;
    }
    
    .cookie-feedback.success {
        border-left-color: #00a859;
    }
    
    .cookie-feedback.success i {
        color: #00a859;
    }
    
    .cookie-feedback.info {
        border-left-color: #0a4fff;
    }
    
    .cookie-feedback.info i {
        color: #0a4fff;
    }
    
    .cookie-feedback i {
        font-size: 20px;
    }
    
    .cookie-feedback span {
        font-size: 14px;
        color: #2c3e50;
    }
    
    @media (max-width: 768px) {
        .cookie-feedback {
            top: 80px;
            right: 20px;
            left: 20px;
            padding: 12px 20px;
        }
    }
`;
document.head.appendChild(style);