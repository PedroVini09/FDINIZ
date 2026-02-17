// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector("header");
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }

    // ===== FILTRO DE ESPECIALIDADES =====
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    const especialidadeCards = document.querySelectorAll('.especialidade-card');
    
    filtroBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filtroBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filtro = this.getAttribute('data-filtro');
            
            especialidadeCards.forEach(card => {
                const categorias = card.getAttribute('data-categoria').split(' ');
                
                if (filtro === 'todas' || categorias.includes(filtro)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ===== BOTÕES DE AGENDAMENTO NAS ESPECIALIDADES =====
    document.querySelectorAll('.btn-especialidade').forEach(btn => {
        btn.addEventListener('click', function() {
            const especialidade = this.getAttribute('data-especialidade');
            const selectEspecialidade = document.getElementById('especialidade');
            
            // Mostra o formulário de agendamento
            document.getElementById('form-agendamento').classList.add('active');
            document.getElementById('form-agendamento').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Seleciona a especialidade no formulário
            if (selectEspecialidade) {
                selectEspecialidade.value = especialidade;
            }
            
            // Vai para o primeiro passo do formulário
            irParaPasso('step-1');
        });
    });

    // ===== FORMULÁRIO DE AGENDAMENTO =====
    const btnAgendarOnline = document.getElementById('btn-agendar-online');
    const formAgendamento = document.getElementById('form-agendamento');
    const btnFecharForm = document.getElementById('btn-fechar-form');
    const formularioAgendamento = document.getElementById('formulario-agendamento');
    const btnNovoAgendamento = document.getElementById('btn-novo-agendamento');
    const btnFecharAgendamento = document.getElementById('btn-fechar-agendamento');
    
    // Botão "Agendar online" na seção de agendamento
    if (btnAgendarOnline) {
        btnAgendarOnline.addEventListener('click', function() {
            formAgendamento.classList.add('active');
            formAgendamento.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            irParaPasso('step-1');
        });
    }
    
    // Botão para fechar o formulário
    if (btnFecharForm) {
        btnFecharForm.addEventListener('click', function() {
            formAgendamento.classList.remove('active');
            resetarFormulario();
        });
    }
    
    // Botão para fechar após agendamento
    if (btnFecharAgendamento) {
        btnFecharAgendamento.addEventListener('click', function() {
            formAgendamento.classList.remove('active');
            resetarFormulario();
        });
    }
    
    // Função para navegar entre os passos do formulário
    function irParaPasso(passoId) {
        document.querySelectorAll('.form-step').forEach(step => {
            step.classList.remove('active');
            step.style.display = 'none';
        });
        
        const passoAtual = document.getElementById(passoId);
        if (passoAtual) {
            passoAtual.classList.add('active');
            passoAtual.style.display = 'block';
        }
    }
    
    // Botões "Próximo" no formulário
    document.querySelectorAll('.btn-proximo').forEach(btn => {
        btn.addEventListener('click', function() {
            const proximoPasso = this.getAttribute('data-next');
            
            // Valida os campos obrigatórios do passo atual
            const passoAtual = this.closest('.form-step');
            const inputsObrigatorios = passoAtual.querySelectorAll('[required]');
            let valido = true;
            
            inputsObrigatorios.forEach(input => {
                if (!input.value.trim()) {
                    valido = false;
                    input.style.borderColor = '#ff4444';
                    
                    setTimeout(() => {
                        input.style.borderColor = '#ddd';
                    }, 3000);
                }
            });
            
            if (valido) {
                irParaPasso(proximoPasso);
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    });
    
    // Botões "Voltar" no formulário
    document.querySelectorAll('.btn-anterior').forEach(btn => {
        btn.addEventListener('click', function() {
            const passoAnterior = this.getAttribute('data-prev');
            irParaPasso(passoAnterior);
        });
    });
    
    // Envio do formulário
    if (formularioAgendamento) {
        formularioAgendamento.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio
            setTimeout(() => {
                irParaPasso('step-4');
                
                // Gera número de protocolo aleatório
                const protocolo = Math.floor(Math.random() * 90000) + 10000;
                const protocoloElement = document.getElementById('numero-protocolo');
                if (protocoloElement) {
                    protocoloElement.textContent = protocolo;
                }
                
                // Rola para o topo do formulário
                formAgendamento.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 1000);
        });
    }
    
    // Botão para novo agendamento
    if (btnNovoAgendamento) {
        btnNovoAgendamento.addEventListener('click', function() {
            resetarFormulario();
            irParaPasso('step-1');
        });
    }
    
    // Função para resetar o formulário
    function resetarFormulario() {
        formularioAgendamento.reset();
        const dataInput = document.getElementById('data_preferencial');
        if (dataInput) {
            const hoje = new Date();
            const amanha = new Date(hoje);
            amanha.setDate(hoje.getDate() + 1);
            const dataMinima = amanha.toISOString().split('T')[0];
            dataInput.min = dataMinima;
            dataInput.value = dataMinima;
        }
    }
    
    // ===== MÁSCARA PARA TELEFONE =====
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 10) {
                value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
                value = value.replace(/(\d{5})(\d)/, '$1-$2');
            } else if (value.length > 6) {
                value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
                value = value.replace(/(\d{4})(\d)/, '$1-$2');
            } else if (value.length > 2) {
                value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
            } else {
                value = value.replace(/^(\d*)/, '($1');
            }
            
            e.target.value = value;
        });
    }
    
    // ===== DATA MÍNIMA PARA AGENDAMENTO =====
    const dataInput = document.getElementById('data_preferencial');
    if (dataInput) {
        const hoje = new Date();
        const amanha = new Date(hoje);
        amanha.setDate(hoje.getDate() + 1);
        
        const dataMinima = amanha.toISOString().split('T')[0];
        dataInput.min = dataMinima;
        dataInput.value = dataMinima;
    }
    
    // ===== FAQ ACORDEÃO =====
    const faqPerguntas = document.querySelectorAll('.faq-pergunta');
    
    faqPerguntas.forEach(pergunta => {
        pergunta.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const resposta = this.nextElementSibling;
            
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.querySelector('.faq-resposta').style.maxHeight = '0';
                }
            });
            
            faqItem.classList.toggle('active');
            
            if (faqItem.classList.contains('active')) {
                resposta.style.maxHeight = resposta.scrollHeight + 'px';
            } else {
                resposta.style.maxHeight = '0';
            }
        });
    });
    
    // ===== DROPDOWN DO MENU =====
    const dropdownBtn = document.querySelector('.dropdown > a');
    if (dropdownBtn) {
        dropdownBtn.addEventListener('click', function(e) {
            e.preventDefault();
            this.parentElement.classList.toggle('ativo');
        });
        
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.dropdown')) {
                document.querySelector('.dropdown')?.classList.remove('ativo');
            }
        });
    }
});

// ===== FUNÇÕES GLOBAIS =====
window.agendarConsulta = function(especialidade) {
    const selectEspecialidade = document.getElementById('especialidade');
    const formAgendamento = document.getElementById('form-agendamento');
    
    if (formAgendamento && selectEspecialidade) {
        formAgendamento.classList.add('active');
        formAgendamento.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        selectEspecialidade.value = especialidade;
        
        document.querySelectorAll('.form-step').forEach(step => {
            step.classList.remove('active');
            step.style.display = 'none';
        });
        
        const passo1 = document.getElementById('step-1');
        if (passo1) {
            passo1.classList.add('active');
            passo1.style.display = 'block';
        }
    }
};

window.filtrarEspecialidades = function(categoria) {
    const btn = document.querySelector(`[data-filtro="${categoria}"]`);
    if (btn) {
        btn.click();
        document.getElementById('especialidades').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

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