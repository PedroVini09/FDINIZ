document.addEventListener('DOMContentLoaded', function() {
    
    // ================= VARIÁVEIS GLOBAIS =================
    let temaSelecionado = 'hotwheels';
    let tipoSelecionado = 'hotwheels';
    let generoSelecionado = 'menino';
    let isPezinho = false;
    
    // ================= MENU MOBILE =================
    const menuToggle = document.querySelector('.kids-menu-toggle');
    const kidsNav = document.querySelector('.kids-nav');
    
    if (menuToggle && kidsNav) {
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
                if (menuToggle) menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }
    
    // ================= SELEÇÃO DE GÊNERO =================
    const generoBtns = document.querySelectorAll('.genero-btn');
    if (generoBtns.length) {
        generoBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                generoBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                generoSelecionado = this.dataset.genero;
            });
        });
    }
    
    // ================= SELEÇÃO DE TEMAS =================
    const temas = document.querySelectorAll('[data-tema]');
    const pezinhoCard = document.querySelector('.pezinho-card');
    
    if (temas.length) {
        temas.forEach(tema => {
            tema.addEventListener('click', function() {
                // Remover seleção do Teste do Pezinho
                if (pezinhoCard) pezinhoCard.classList.remove('active');
                isPezinho = false;
                
                // Remover seleção de outros temas
                temas.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                temaSelecionado = this.dataset.tema;
                tipoSelecionado = this.dataset.tema;
            });
        });
    }
    
    // ================= SELEÇÃO ESPECIAL DO TESTE DO PEZINHO =================
    if (pezinhoCard) {
        pezinhoCard.addEventListener('click', function() {
            // Remover seleção de todos os temas
            if (temas.length) {
                temas.forEach(t => t.classList.remove('active'));
            }
            
            // Ativar Teste do Pezinho
            this.classList.add('active');
            isPezinho = true;
            tipoSelecionado = 'pezinho';
        });
    }
    
    // ================= GERAR CERTIFICADO =================
    window.gerarCertificado = function() {
        const nome = document.getElementById('hero-name')?.value || document.getElementById('nomeCrianca')?.value;
        const idade = document.getElementById('hero-age')?.value || document.getElementById('idade')?.value;
        
        if (!nome) {
            alert('Por favor, digite o nome da criança');
            return;
        }
        
        const certificadoArea = document.getElementById('certificadoArea');
        if (!certificadoArea) return;
        
        const certificado = criarCertificado(nome, idade, tipoSelecionado, generoSelecionado, isPezinho);
        
        certificadoArea.innerHTML = certificado;
        certificadoArea.style.display = 'block';
        
        // Scroll suave até o certificado
        certificadoArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    
    // ================= CRIAR CERTIFICADO =================
    function criarCertificado(nome, idade, tipo, genero, isPezinho) {
        // Se for Teste do Pezinho, usar formato especial
        if (isPezinho || tipo === 'pezinho') {
            return `
                <div class="certificado pezinho-especial" style="background: linear-gradient(135deg, #fef5e7 0%, #ffe6d5 100%); border: 10px solid #ff9f4a; border-radius: 20px; padding: 40px;">
                    <div class="certificado-header" style="text-align: center;">
                        <h2 style="color: #e67e22; font-size: 36px;">✨ TESTE DO PEZINHO ✨</h2>
                    </div>
                    
                    <div class="certificado-body">
                        <div class="pezinho-icones" style="display: flex; justify-content: center; gap: 20px; margin-bottom: 30px;">
                            <i class="fas fa-baby" style="font-size: 40px; color: #ff9f4a;"></i>
                            <i class="fas fa-heart" style="font-size: 40px; color: #ff6b6b;"></i>
                            <i class="fas fa-footprints" style="font-size: 40px; color: #ff9f4a;"></i>
                        </div>
                        <h3 style="color: #e67e22; text-align: center; font-size: 24px;">Olá! Meu nome é:</h3>
                        <div class="nome-crianca" style="color: #e67e22; font-size: 48px; font-weight: bold; text-align: center; margin: 30px 0;">${nome}</div>
                        <div class="mensagem" style="white-space: pre-line; color: #e67e22; text-align: center; margin-top: 30px; font-size: 18px; line-height: 1.6;">
                            REALIZEI O TESTE DO PEZINHO COM MUITA CORAGEM!
                            
                            Dei o primeiro passo com amor e cuidado.
                            
                            Força e coragem para todos os pequenos guerreiros!
                        </div>
                        <div class="mensagem" style="font-size: 18px; margin-top: 20px; text-align: center; color: #e67e22;">
                            <i class="fas fa-baby"></i> ${idade || 'Recém-nascido(a)'} ${idade ? 'anos' : ''}<br>
                            <i class="fas fa-heart"></i> Força e Coragem!
                        </div>
                    </div>
                    
                    <div class="certificado-footer" style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 2px solid #ff9f4a;">
                        <div class="assinatura" style="color: #e67e22; font-size: 24px;">
                            <i class="fas fa-stethoscope"></i> Laboratório F. Diniz
                        </div>
                        <div style="font-size: 12px; color: #e67e22; margin-top: 10px;">
                            www.labfdiniz.com.br | Cuidando da sua saúde com carinho
                        </div>
                    </div>
                    
                    <button class="btn-download" onclick="baixarCertificado(this)" style="margin-top: 30px; width: 100%; padding: 15px; background: #ff9f4a; color: white; border: none; border-radius: 10px; font-weight: bold; cursor: pointer;">
                        <i class="fas fa-download"></i> Baixar Certificado
                    </button>
                </div>
            `;
        }
        
        // Para os outros temas (apenas temas infantis)
        const cores = {
            hotwheels: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)',
            divertidamente: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)',
            sonic: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
            coragem: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
            parabens: 'linear-gradient(135deg, #f1c40f 0%, #f39c12 100%)'
        };
        
        const titulos = {
            hotwheels: 'HOT WHEELS',
            divertidamente: 'DIVERTIDAMENTE',
            sonic: 'SONIC - CERTIFICADO DE VELOCIDADE',
            coragem: 'CERTIFICADO DE CORAGEM',
            parabens: 'PARABÉNS!'
        };
        
        const icones = {
            hotwheels: '🏎️',
            divertidamente: '😊',
            sonic: '⚡',
            coragem: '🦁',
            parabens: '🎉'
        };
        
        let mensagem = '';
        let titulo = titulos[tipo] || 'CERTIFICADO';
        
        if (tipo === 'hotwheels') {
            const pronome = genero === 'menino' ? 'campeão' : 'campeã';
            mensagem = `${nome.toUpperCase()}!\n\nVOCÊ É UM(A) VERDADEIRO(A) ${pronome.toUpperCase()} DAS PISTAS!\n\nSua velocidade e coragem são incríveis! Continue acelerando rumo aos seus sonhos!`;
        }
        else if (tipo === 'divertidamente') {
            mensagem = `${nome.toUpperCase()}!\n\nVOCÊ APRENDEU A CONTROLAR SUAS EMOÇÕES COM MUITA ALEGRIA!\n\nMedo, Raiva, Nojinho, Tristeza e Alegria - todas as emoções fazem parte de você! Continue sendo incrível!`;
        }
        else if (tipo === 'sonic') {
            const pronome = genero === 'menino' ? 'veloz' : 'veloz';
            mensagem = `${nome.toUpperCase()}!\n\nVOCÊ É RÁPIDO(A) COMO O SONIC!\n\nSua energia e determinação te levam cada vez mais longe! Continue correndo atrás dos seus sonhos!`;
        }
        else if (tipo === 'coragem') {
            mensagem = `${nome.toUpperCase()}!\n\nVOCÊ PROVOU SER SUPER HIPER VALENTE!\n\nSua coragem inspira todos ao seu redor! Nunca desista, você é um verdadeiro herói!`;
        }
        else if (tipo === 'parabens') {
            mensagem = `${nome.toUpperCase()}!\n\nPARABÉNS POR MAIS ESTA CONQUISTA!\n\nVocê é especial e merece todo reconhecimento! Continue brilhando como sempre!`;
        }
        
        return `
            <div class="certificado" style="background: ${cores[tipo]}; border: none; border-radius: 20px; padding: 40px;">
                <div class="certificado-header" style="text-align: center;">
                    <h2 style="color: white; font-size: 36px;">${titulo}</h2>
                </div>
                
                <div class="certificado-body" style="text-align: center;">
                    <div class="nome-crianca" style="color: white; font-size: 48px; font-weight: bold; margin: 30px 0;">${nome}</div>
                    <div class="mensagem" style="white-space: pre-line; color: white; font-size: 20px; line-height: 1.6; margin: 30px 0;">${mensagem}</div>
                    <div class="mensagem" style="font-size: 16px; color: rgba(255,255,255,0.9);">
                        <i class="fas fa-calendar"></i> ${new Date().toLocaleDateString('pt-BR')}
                    </div>
                    ${idade ? `<div class="mensagem" style="font-size: 14px; color: rgba(255,255,255,0.9); margin-top: 10px;"><i class="fas fa-cake-candles"></i> ${idade} anos</div>` : ''}
                </div>
                
                <div class="certificado-footer" style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 2px solid rgba(255,255,255,0.3);">
                    <div class="assinatura" style="color: white; font-size: 24px;">
                        <i>${icones[tipo]}</i> Laboratório F. Diniz
                    </div>
                    <div style="font-size: 12px; color: rgba(255,255,255,0.8); margin-top: 10px;">
                        www.labfdiniz.com.br | Cuidando da sua saúde com carinho
                    </div>
                </div>
                
                <button class="btn-download" onclick="baixarCertificado(this)" style="margin-top: 30px; width: 100%; padding: 15px; background: white; color: #f39c12; border: none; border-radius: 10px; font-weight: bold; cursor: pointer;">
                    <i class="fas fa-download"></i> Baixar Certificado
                </button>
            </div>
        `;
    }
    
    // ================= BAIXAR CERTIFICADO =================
    window.baixarCertificado = function(btn) {
        const certificado = btn.closest('.certificado');
        const nome = document.getElementById('hero-name')?.value || document.getElementById('nomeCrianca')?.value || 'certificado';
        
        // Criar um elemento temporário para impressão
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Certificado - ${nome}</title>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
                <style>
                    * { margin: 0; padding: 0; box-sizing: border-box; }
                    body {
                        font-family: 'Open Sans', sans-serif;
                        background: white;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        min-height: 100vh;
                        padding: 20px;
                    }
                    .certificado {
                        max-width: 800px;
                        margin: 0 auto;
                    }
                    .btn-download {
                        display: none;
                    }
                    @media print {
                        body { padding: 0; }
                        .btn-download { display: none; }
                        .certificado { box-shadow: none; }
                    }
                </style>
            </head>
            <body>
                ${certificado.outerHTML.replace('<button class="btn-download" onclick="baixarCertificado(this)">', '<button style="display:none">')}
                <script>
                    window.onload = function() {
                        setTimeout(function() {
                            window.print();
                            setTimeout(function() { window.close(); }, 1000);
                        }, 500);
                    };
                <\/script>
            </body>
            </html>
        `);
        printWindow.document.close();
    };
    
    // ================= EFEITO DE DIGITAÇÃO =================
    const heroNameElement = document.querySelector('.hero-name');
    if (heroNameElement) {
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
    }
    
    // ================= DATA ATUAL NO CERTIFICADO =================
    const today = new Date();
    const formattedDate = today.toLocaleDateString('pt-BR');
    const dateElement = document.querySelector('.highlight');
    if (dateElement) {
        dateElement.textContent = formattedDate;
    }
    
    // ================= ANIMAÇÃO DE ELEMENTOS AO ROLAR =================
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
});