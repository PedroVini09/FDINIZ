document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const menuToggle = document.querySelector('.kids-menu-toggle');
    const kidsNav = document.querySelector('.kids-nav');
    
    menuToggle.addEventListener('click', function() {
        kidsNav.classList.toggle('active');
        this.innerHTML = kidsNav.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Fechar menu ao clicar em link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            kidsNav.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Formulário de agendamento
    const adventureForm = document.getElementById('adventure-form');
    
    adventureForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Coletar dados do formulário
        const heroName = document.getElementById('hero-name').value;
        const heroAge = document.getElementById('hero-age').value;
        const parentName = document.getElementById('parent-name').value;
        const parentPhone = document.getElementById('parent-phone').value;
        
        // Simulação de envio (substituir por código real)
        alert(`🏆 Aventura agendada para ${heroName}! \nEm breve entraremos em contato com ${parentName} pelo telefone ${parentPhone} para confirmar a missão do nosso herói de ${heroAge} anos!`);
        
        // Resetar formulário
        adventureForm.reset();
        
        // Animações de confirmação
        const submitBtn = document.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Missão Agendada!';
        submitBtn.style.background = 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)';
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = 'linear-gradient(135deg, var(--accent-pink) 0%, var(--hero-purple) 100%)';
        }, 3000);
    });
    
    // Animar elementos ao rolar
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    document.querySelectorAll('.step, .gallery-item, .info-item').forEach(el => {
        observer.observe(el);
    });
    
    // Efeito de digitação no certificado
    const heroNameElement = document.querySelector('.hero-name');
    const defaultName = '[Nome do Pequeno Herói]';
    
    heroNameElement.addEventListener('click', function() {
        if (this.textContent === defaultName) {
            const heroName = prompt('Qual o nome do pequeno herói?', '');
            if (heroName && heroName.trim() !== '') {
                this.textContent = heroName.trim();
                this.style.color = '#f72585';
            }
        }
    });
    
    // Data atual no certificado
    const today = new Date();
    const formattedDate = today.toLocaleDateString('pt-BR');
    document.querySelector('.highlight').textContent = formattedDate;
    
    // Efeito de confetes no botão principal
    const heroBtn = document.querySelector('.btn-hero');
    
    heroBtn.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#contact') {
            e.preventDefault();
            document.getElementById('contact').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }
    });
});