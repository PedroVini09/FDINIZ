// Dados das unidades (ATUALIZADO COM HORÁRIOS ESTRUTURADOS)
const unidadesData = [
    {
        id: "matriz",
        nome: "Unidade Matriz - Centro",
        regiao: "centro",
        tipo: "matriz",
        horarios: {
            semana: { abre: "06:00", fecha: "19:00" },
            sabado: { abre: "06:00", fecha: "12:00" },
            domingo: { aberto: false }
        },
        telefone: "(83) 3315-7373",
        facilidades: ["Acessível", "Estacionamento", "WiFi grátis", "Todos os exames"],
        endereco: "Avenida Pedro II, 407, Centro<br>Próximo a Integração<br>Campina Grande - PB",
        imagem: "../Imagem/imagem/matriz.jpg"
    },
    {
        id: "catole",
        nome: "Unidade Catolé",
        regiao: "catole",
        tipo: "laboratorio",
        horarios: {
            semana: { 
                manha: { abre: "07:00", fecha: "12:00" },
                tarde: { abre: "13:15", fecha: "17:00" }
            },
            sabado: { aberto: false },
            domingo: { aberto: false }
        },
        telefone: "(83) 3315-7373",
        facilidades: ["Estacionamento", "F.Diniz Kids"],
        endereco: "Rua João Quirino, 820, Catolé<br>Próximo ao Luiza Motta<br>Campina Grande - PB",
        imagem: "../Imagem/imagem/unidade_catole.jpg"
    },
    {
        id: "centro2",
        nome: "Unidade Centro",
        regiao: "centro",
        tipo: "laboratorio",
        horarios: {
            semana: { abre: "06:00", fecha: "17:00" },
            sabado: { abre: "06:00", fecha: "12:00" },
            domingo: { aberto: false }
        },
        telefone: "(83) 3315-7373",
        facilidades: ["Acessível", "WiFi grátis"],
        endereco: "Rua Afonso Campos, 68, Centro<br>Próximo ao Cirne Center<br>Campina Grande - PB",
        imagem: "../Imagem/imagem/unidade_centro.jpg"
    },
    {
        id: "malvinas",
        nome: "Policlínica Malvinas",
        regiao: "malvinas",
        tipo: "policlinica",
        horarios: {
            semana: { abre: "06:00", fecha: "17:00" },
            sabado: { abre: "06:00", fecha: "12:00" },
            domingo: { aberto: false }
        },
        telefone: "(83) 99149-6634",
        facilidades: ["Consultas", "Injeções", "Atendimento médico"],
        endereco: "Rua Jamila Abraão Jorge, 425, Malvinas<br>Campina Grande - PB",
        imagem: "../Imagem/imagem/policlinica.jpg"
    },
    {
        id: "liberdade",
        nome: "Policlínica Liberdade",
        regiao: "liberdade",
        tipo: "policlinica",
        horarios: {
            semana: { abre: "06:00", fecha: "17:00" },
            sabado: { aberto: false },
            domingo: { aberto: false }
        },
        telefone: "(83) 3315-7373",
        facilidades: ["Consultas", "Receitas", "Exames"],
        endereco: "Rua Odon Bezerra, 440, Liberdade<br>Campina Grande - PB",
        imagem: "../Imagem/imagem/policlinica_liberdade.png"
    },
    {
        id: "san-pietro",
        nome: "Unidade San Pietro",
        regiao: "prata",
        tipo: "laboratorio",
        horarios: {
            semana: { abre: "07:00", fecha: "18:00" },
            sabado: { aberto: false },
            domingo: { aberto: false }
        },
        telefone: "(83) 3315-7373",
        facilidades: ["Shopping", "Estacionamento", "Acessível"],
        endereco: "Rua Montevidéu, 720, Prata<br>Edifício San Pietro - Térreo<br>Campina Grande - PB",
        imagem: "../Imagem/imagem/unidade_san_pietro.png"
    },
    {
        id: "inga",
        nome: "Unidade Ingá",
        regiao: "inga",
        tipo: "laboratorio",
        horarios: {
            semana: { abre: "07:00", fecha: "17:00" },
            sabado: { aberto: false },
            domingo: { aberto: false }
        },
        telefone: "(83) 99400-4626",
        facilidades: ["Unidade regional", "Coleta domiciliar"],
        endereco: "Rua Rui Barbosa, 155 A, Ingá - PB",
        imagem: "../Imagem/imagem/unidade_inga.jpg"
    },
    {
        id: "queimadas",
        nome: "Unidade Queimadas",
        regiao: "queimadas",
        tipo: "laboratorio",
        horarios: {
            semana: { abre: "07:00", fecha: "17:00" },
            sabado: { aberto: false },
            domingo: { aberto: false }
        },
        telefone: "(83) 3315-7373",
        facilidades: ["Interior", "Coleta domiciliar"],
        endereco: "Rua João Barbosa da Silva, 48, Centro<br>Queimadas - PB",
        imagem: "../Imagem/imagem/unidade_queimadas.jpg"
    },
    {
        id: "sao-jose",
        nome: "Unidade São José da Mata",
        regiao: "sao-jose",
        tipo: "laboratorio",
        horarios: {
            semana: { abre: "07:00", fecha: "17:00" },
            sabado: { aberto: false },
            domingo: { aberto: false }
        },
        telefone: "(83) 99882-0610",
        facilidades: ["Interior", "Coleta domiciliar"],
        endereco: "Rua Cícero Alexandrino, 485<br>São José da Mata - PB",
        imagem: "../Imagem/imagem/unidade_sao_jose_da_mata.png"
    },
     {
        id: "bezerra-carvalho",
        nome: "Unidade Bezerra Carvalho",
        regiao: "bezerra-carvalho",
        tipo: "laboratorio",
        horarios: {
            semana: { abre: "07:00", fecha: "17:00" },
            sabado: { aberto: false },
            domingo: { aberto: false }
        },
        telefone: "(83) 93321-3400",
        facilidades: ["Acessível", "WiFi grátis"],
        endereco: "Rua Duque de Caxias,368<br>Prata - PB",
        imagem: "../Imagem/imagem/unidade_bezera.jpg"
    },
];

// ===== FUNÇÕES PARA VERIFICAÇÃO DE HORÁRIO =====

// Converter hora HH:MM para minutos desde meia-noite
function horaParaMinutos(horaString) {
    if (!horaString) return 0;
    const [horas, minutos] = horaString.split(':').map(Number);
    return horas * 60 + minutos;
}

// Verificar se está dentro do intervalo de horário
function estaNoHorario(abreStr, fechaStr, agoraMinutos) {
    const abreMinutos = horaParaMinutos(abreStr);
    const fechaMinutos = horaParaMinutos(fechaStr);
    
    return agoraMinutos >= abreMinutos && agoraMinutos <= fechaMinutos;
}

// Verificar se a unidade está aberta AGORA
function verificarSeEstaAberto(horarios) {
    const agora = new Date();
    const diaSemana = agora.getDay(); // 0=Domingo, 1=Segunda, ..., 6=Sábado
    const agoraMinutos = agora.getHours() * 60 + agora.getMinutes();
    
    // DOMINGO
    if (diaSemana === 0) {
        return horarios.domingo?.aberto === true ? 
               estaNoHorario(horarios.domingo.abre, horarios.domingo.fecha, agoraMinutos) : false;
    }
    
    // SÁBADO
    if (diaSemana === 6) {
        if (horarios.sabado?.aberto === false) return false;
        return horarios.sabado?.abre ? 
               estaNoHorario(horarios.sabado.abre, horarios.sabado.fecha, agoraMinutos) : false;
    }
    
    // SEGUNDA A SEXTA
    if (horarios.semana) {
        // Para unidades com horários separados (manhã/tarde como Catolé)
        if (horarios.semana.manha && horarios.semana.tarde) {
            const manhaAberta = estaNoHorario(
                horarios.semana.manha.abre, 
                horarios.semana.manha.fecha, 
                agoraMinutos
            );
            
            const tardeAberta = estaNoHorario(
                horarios.semana.tarde.abre, 
                horarios.semana.tarde.fecha, 
                agoraMinutos
            );
            
            return manhaAberta || tardeAberta;
        }
        
        // Para horário único
        if (horarios.semana.abre) {
            return estaNoHorario(horarios.semana.abre, horarios.semana.fecha, agoraMinutos);
        }
    }
    
    return false;
}

// Gerar texto do horário para exibição
function gerarTextoHorario(horarios) {
    let texto = '';
    
    // Horário de semana
    if (horarios.semana) {
        if (horarios.semana.manha && horarios.semana.tarde) {
            // Horário dividido (manhã e tarde)
            texto += `Seg a Sex: ${horarios.semana.manha.abre} às ${horarios.semana.manha.fecha}, `;
            texto += `${horarios.semana.tarde.abre} às ${horarios.semana.tarde.fecha}<br>`;
        } else if (horarios.semana.abre) {
            // Horário único
            texto += `Seg a Sex: ${horarios.semana.abre} às ${horarios.semana.fecha}<br>`;
        }
    }
    
    // Horário de sábado
    if (horarios.sabado) {
        if (horarios.sabado.aberto === false) {
            texto += `Sábado: Fechado<br>`;
        } else if (horarios.sabado.abre) {
            texto += `Sábado: ${horarios.sabado.abre} às ${horarios.sabado.fecha}<br>`;
        }
    } else {
        texto += `Sábado: Fechado<br>`;
    }
    
    // Horário de domingo
    if (horarios.domingo) {
        if (horarios.domingo.aberto === false) {
            texto += `Domingo: Fechado`;
        } else if (horarios.domingo.abre) {
            texto += `Domingo: ${horarios.domingo.abre} às ${horarios.domingo.fecha}`;
        }
    } else {
        texto += `Domingo: Fechado`;
    }
    
    return texto;
}

// ===== FUNÇÃO PARA CRIAR CARD =====

function criarCardUnidade(unidade) {
    const badgeIcon = unidade.tipo === 'matriz' ? 'fa-crown' : 
                     unidade.tipo === 'policlinica' ? 'fa-hospital' : 'fa-flask-vial';
    
    const badgeClass = unidade.tipo === 'matriz' ? 'matriz-badge' : 
                      unidade.tipo === 'policlinica' ? 'policlinica-badge' : '';
    
    const cardClass = unidade.tipo === 'policlinica' ? 'policlinica' : '';
    
    // Verificar se está aberto AGORA
    const estaAberto = verificarSeEstaAberto(unidade.horarios);
    
    // Gerar texto do horário
    const horarioTexto = gerarTextoHorario(unidade.horarios);
    
    const facilidadesHTML = unidade.facilidades.map(fac => `
        <span class="facilidade">
            <i class="fa-solid ${fac.includes('Consultas') || fac.includes('Receitas') || fac.includes('Injeções') ? 'fa-user-md' : 
                              fac.includes('Estacionamento') ? 'fa-car' : 
                              fac.includes('WiFi') ? 'fa-wifi' : 
                              fac.includes('Acessível') ? 'fa-wheelchair' : 
                              fac.includes('F.Diniz Kids') ? 'fa-baby' : 
                              fac.includes('Coleta') ? 'fa-truck-medical' : 
                              fac.includes('Shopping') ? 'fa-building' : 
                              fac.includes('Interior') ? 'fa-city' : 
                              fac.includes('regional') ? 'fa-home' : 
                              fac.includes('todos') ? 'fa-flask' : 'fa-star'}"></i> 
            ${fac}
        </span>
    `).join('');
    
    // Determinar se mostra "Aberto agora" ou "Fecha às XX:XX"
    let statusTexto = estaAberto ? 'Aberto agora' : 'Fechado';
    let statusClasse = estaAberto ? 'aberto' : 'fechado';
    
    // Se estiver fechado mas vai abrir hoje, mostrar horário de abertura
    if (!estaAberto) {
        const agora = new Date();
        const diaSemana = agora.getDay();
        const agoraMinutos = agora.getHours() * 60 + agora.getMinutes();
        
        // Verificar se vai abrir ainda hoje
        if (diaSemana >= 1 && diaSemana <= 5 && unidade.horarios.semana) {
            if (unidade.horarios.semana.abre) {
                const abreMinutos = horaParaMinutos(unidade.horarios.semana.abre);
                if (agoraMinutos < abreMinutos) {
                    statusTexto = `Abre às ${unidade.horarios.semana.abre}`;
                } else {
                    statusTexto = `Fecha às ${unidade.horarios.semana.fecha}`;
                }
            }
        } else if (diaSemana === 6 && unidade.horarios.sabado?.abre) {
            const abreMinutos = horaParaMinutos(unidade.horarios.sabado.abre);
            if (agoraMinutos < abreMinutos) {
                statusTexto = `Abre às ${unidade.horarios.sabado.abre}`;
            } else {
                statusTexto = `Fecha às ${unidade.horarios.sabado.fecha}`;
            }
        }
    }
    
    return `
        <div class="unidade-card ${cardClass}" data-unidade="${unidade.id}" data-regiao="${unidade.regiao}">
            <div class="unidade-imagem">
                <img src="${unidade.imagem}" alt="${unidade.nome}" onerror="this.src='../Imagem/placeholder-unidade.jpg'">
                ${unidade.tipo === 'matriz' || unidade.tipo === 'policlinica' ? `
                    <span class="unidade-badge ${badgeClass}">
                        <i class="fa-solid ${badgeIcon}"></i>
                        ${unidade.tipo === 'matriz' ? 'Matriz' : 'Policlínica'}
                    </span>
                ` : ''}
            </div>
            <div class="unidade-header">
                <h3>${unidade.nome}</h3>
                <span class="unidade-status ${statusClasse}">
                    <i class="fa-solid fa-circle"></i> ${statusTexto}
                </span>
            </div>
            <div class="unidade-info">
                <div class="info-item">
                    <i class="fa-solid fa-clock"></i>
                    <div>
                        <h4>Horário de atendimento</h4>
                        <p>${horarioTexto}</p>
                    </div>
                </div>
                <div class="info-item">
                    <i class="fa-solid fa-phone"></i>
                    <div>
                        <h4>Telefone</h4>
                        <p><strong>${unidade.telefone}</strong></p>
                    </div>
                </div>
                <div class="info-item">
                    <i class="fa-solid fa-star"></i>
                    <div>
                        <h4>${unidade.tipo === 'policlinica' ? 'Serviços' : 'Facilidades'}</h4>
                        <div class="facilidades">
                            ${facilidadesHTML}
                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <i class="fa-solid fa-location-dot"></i>
                    <div>
                        <h4>Endereço</h4>
                        <p>${unidade.endereco}</p>
                    </div>
                </div>
            </div>
            <div class="unidade-actions">
                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(unidade.endereco.replace(/<br>/g, ', '))}" 
                   target="_blank" class="btn-unidade">
                    <i class="fa-solid fa-directions"></i> Como chegar
                </a>
                <a href="tel:${unidade.telefone.replace(/[^\d]/g, '')}" class="btn-unidade secundario">
                    <i class="fa-solid fa-phone"></i> Ligar agora
                </a>
            </div>
        </div>
    `;
}

// ===== ATUALIZAR STATUS EM TEMPO REAL =====

// Função para atualizar status periodicamente
function atualizarStatusUnidades() {
    // Atualiza a cada minuto
    setInterval(() => {
        const cards = document.querySelectorAll('.unidade-card');
        cards.forEach(card => {
            const unidadeId = card.getAttribute('data-unidade');
            const unidade = unidadesData.find(u => u.id === unidadeId);
            
            if (unidade) {
                const estaAberto = verificarSeEstaAberto(unidade.horarios);
                const statusSpan = card.querySelector('.unidade-status');
                
                if (statusSpan) {
                    statusSpan.className = `unidade-status ${estaAberto ? 'aberto' : 'fechado'}`;
                    statusSpan.innerHTML = `<i class="fa-solid fa-circle"></i> ${estaAberto ? 'Aberto agora' : 'Fechado'}`;
                    
                    // Atualizar texto se estiver fechado mas vai abrir hoje
                    if (!estaAberto) {
                        const agora = new Date();
                        const diaSemana = agora.getDay();
                        const agoraMinutos = agora.getHours() * 60 + agora.getMinutes();
                        
                        if (diaSemana >= 1 && diaSemana <= 5 && unidade.horarios.semana?.abre) {
                            const abreMinutos = horaParaMinutos(unidade.horarios.semana.abre);
                            if (agoraMinutos < abreMinutos) {
                                statusSpan.innerHTML = `<i class="fa-solid fa-circle"></i> Abre às ${unidade.horarios.semana.abre}`;
                            } else {
                                statusSpan.innerHTML = `<i class="fa-solid fa-circle"></i> Fecha às ${unidade.horarios.semana.fecha}`;
                            }
                        } else if (diaSemana === 6 && unidade.horarios.sabado?.abre) {
                            const abreMinutos = horaParaMinutos(unidade.horarios.sabado.abre);
                            if (agoraMinutos < abreMinutos) {
                                statusSpan.innerHTML = `<i class="fa-solid fa-circle"></i> Abre às ${unidade.horarios.sabado.abre}`;
                            }
                        }
                    }
                }
            }
        });
    }, 60000); // Atualiza a cada 1 minuto
}

// ===== FUNÇÕES PRINCIPAIS =====

// Função para carregar unidades
function carregarUnidades(regiao = '') {
    const container = document.getElementById('unidades-container');
    const semResultados = document.getElementById('sem-resultados');
    
    // Filtrar unidades
    const unidadesFiltradas = regiao ? 
        unidadesData.filter(unidade => unidade.regiao === regiao) : 
        unidadesData;
    
    // Limpar container
    container.innerHTML = '';
    
    // Se não houver unidades
    if (unidadesFiltradas.length === 0) {
        semResultados.style.display = 'block';
        return;
    }
    
    // Mostrar unidades
    semResultados.style.display = 'none';
    unidadesFiltradas.forEach(unidade => {
        container.innerHTML += criarCardUnidade(unidade);
    });
    
    // Adicionar event listeners aos novos cards
    adicionarEventListenersCards();
}

// Função para adicionar event listeners aos cards
function adicionarEventListenersCards() {
    document.querySelectorAll('.unidade-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || 
                e.target.closest('a') || e.target.closest('button')) {
                return;
            }
            
            document.querySelectorAll('.unidade-card').forEach(c => {
                c.classList.remove('ativa');
            });
            
            this.classList.add('ativa');
        });
    });
}

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

    // Carregar todas as unidades inicialmente
    carregarUnidades();
    
    // Iniciar atualização automática de status
    atualizarStatusUnidades();
    
    // Event listener para o filtro
    const selectRegiao = document.getElementById('regiao');
    const btnFiltrar = document.getElementById('btn-filtrar');
    
    if (btnFiltrar) {
        btnFiltrar.addEventListener('click', function() {
            const regiaoSelecionada = selectRegiao.value;
            carregarUnidades(regiaoSelecionada);
            
            document.querySelector('.lista-unidades-section').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    // Dropdown do menu de contato
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

// Função global para filtro rápido
window.filtrarUnidades = function(regiao) {
    const selectRegiao = document.getElementById('regiao');
    if (selectRegiao) {
        selectRegiao.value = regiao;
        carregarUnidades(regiao);
        
        document.querySelector('.lista-unidades-section').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

// ===== FUNÇÃO PARA TESTAR HORÁRIOS (OPCIONAL) =====
// Use no console para testar: testarHorario('matriz')
window.testarHorario = function(unidadeId) {
    const unidade = unidadesData.find(u => u.id === unidadeId);
    if (unidade) {
        const aberto = verificarSeEstaAberto(unidade.horarios);
        console.log(`${unidade.nome}: ${aberto ? 'ABERTO' : 'FECHADO'}`);
        console.log('Horários:', unidade.horarios);
        console.log('Horário atual:', new Date().toLocaleTimeString());
        return aberto;
    }
    return false;
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
// JavaScript para mapa interativo
document.addEventListener('DOMContentLoaded', function() {
    // Criar pontos interativos no mapa
    criarPontosInterativos();
    
    // Configurar tooltips
    configurarTooltips();
    
    // Configurar zoom (opcional)
    configurarZoom();
    
    // Animar elementos ao scroll
    observarAnimacaoMapa();
});

// CRIAR PONTOS INTERATIVOS DINAMICAMENTE
function criarPontosInterativos() {
    const mapaImagem = document.querySelector('.mapa-imagem');
    if (!mapaImagem) return;
    
    // Coordenadas dos pontos (ajustar conforme sua imagem)
    const pontos = [
        {
            top: '30%',
            left: '40%',
            cor: '#0a4fff',
            titulo: 'Unidade Centro',
            descricao: 'Atendimento integral 24h'
        },
        {
            top: '50%',
            left: '60%',
            cor: '#00a859',
            descricao: 'Coleta domiciliar disponível'
        },
        {
            top: '40%',
            left: '70%',
            cor: '#ff6b00',
            titulo: 'Policlínica Norte',
            descricao: 'Especialidades médicas'
        },
        {
            top: '60%',
            left: '30%',
            cor: '#0a4fff',
            descricao: 'Laboratório completo'
        }
    ];
    
    pontos.forEach((ponto, index) => {
        const pontoElement = document.createElement('div');
        pontoElement.className = 'ponto-mapa';
        pontoElement.style.cssText = `
            position: absolute;
            top: ${ponto.top};
            left: ${ponto.left};
            width: 20px;
            height: 20px;
            background: ${ponto.cor};
            border-radius: 50%;
            transform: translate(-50%, -50%);
            cursor: pointer;
            z-index: 2;
            animation: pontoPulse 2s infinite ${index * 0.3}s;
            box-shadow: 0 0 0 0 rgba(${hexToRgb(ponto.cor)}, 0.7);
        `;
        
        // Tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip-mapa';
        tooltip.innerHTML = `
            <h4>${ponto.titulo || 'Unidade F. Diniz'}</h4>
            <p>${ponto.descricao}</p>
        `;
        
        // Posicionar tooltip
        tooltip.style.cssText = `
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            margin-bottom: 10px;
        `;
        
        pontoElement.appendChild(tooltip);
        
        // Eventos
        pontoElement.addEventListener('mouseenter', function() {
            tooltip.classList.add('ativo');
            this.style.transform = 'translate(-50%, -50%) scale(1.3)';
            this.style.zIndex = '3';
        });
        
        pontoElement.addEventListener('mouseleave', function() {
            tooltip.classList.remove('ativo');
            this.style.transform = 'translate(-50%, -50%) scale(1)';
            this.style.zIndex = '2';
        });
        
        pontoElement.addEventListener('click', function() {
            alert(`${ponto.titulo || 'Unidade F. Diniz'}\n${ponto.descricao}`);
        });
        
        mapaImagem.appendChild(pontoElement);
    });
}

// CONFIGURAR TOOLTIPS
function configurarTooltips() {
    // Tooltips já configuradas nos pontos interativos
}

// CONFIGURAR ZOOM (OPCIONAL)
function configurarZoom() {
    const mapaImagem = document.querySelector('.mapa-imagem img');
    if (!mapaImagem) return;
    
    // Criar controles de zoom
    const zoomControls = document.createElement('div');
    zoomControls.className = 'zoom-controls';
    zoomControls.innerHTML = `
        <button class="zoom-btn" id="zoom-in">
            <i class="fa-solid fa-plus"></i>
        </button>
        <button class="zoom-btn" id="zoom-out">
            <i class="fa-solid fa-minus"></i>
        </button>
        <button class="zoom-btn" id="zoom-reset">
            <i class="fa-solid fa-rotate-right"></i>
        </button>
    `;
    
    mapaImagem.parentElement.appendChild(zoomControls);
    
    // Variáveis de zoom
    let escala = 1;
    const escalaMax = 2;
    const escalaMin = 0.5;
    const passoZoom = 0.2;
    
    // Configurar eventos
    document.getElementById('zoom-in').addEventListener('click', function() {
        if (escala < escalaMax) {
            escala += passoZoom;
            aplicarZoom();
        }
    });
    
    document.getElementById('zoom-out').addEventListener('click', function() {
        if (escala > escalaMin) {
            escala -= passoZoom;
            aplicarZoom();
        }
    });
    
    document.getElementById('zoom-reset').addEventListener('click', function() {
        escala = 1;
        aplicarZoom();
    });
    
    // Zoom com scroll (opcional)
    mapaImagem.parentElement.addEventListener('wheel', function(e) {
        e.preventDefault();
        
        if (e.deltaY < 0 && escala < escalaMax) {
            escala += passoZoom / 2;
        } else if (e.deltaY > 0 && escala > escalaMin) {
            escala -= passoZoom / 2;
        }
        
        aplicarZoom();
    });
    
    function aplicarZoom() {
        mapaImagem.style.transform = `scale(${escala})`;
        
        // Atualizar estado dos botões
        document.getElementById('zoom-in').disabled = escala >= escalaMax;
        document.getElementById('zoom-out').disabled = escala <= escalaMin;
    }
}

// OBSERVAR ANIMAÇÃO AO SCROLL
function observarAnimacaoMapa() {
    const mapaContainer = document.querySelector('.mapa-container');
    if (!mapaContainer) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, {
        threshold: 0.1
    });
    
    observer.observe(mapaContainer);
}

// UTILITÁRIOS
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? 
        `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` 
        : '10, 79, 255';
}

// ANIMAÇÃO CSS DINÂMICA
function adicionarAnimacaoCSS() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pontoPulse {
            0% {
                box-shadow: 0 0 0 0 rgba(var(--cor-ponto), 0.7);
                transform: translate(-50%, -50%) scale(1);
            }
            70% {
                box-shadow: 0 0 0 15px rgba(var(--cor-ponto), 0);
                transform: translate(-50%, -50%) scale(1.1);
            }
            100% {
                box-shadow: 0 0 0 0 rgba(var(--cor-ponto), 0);
                transform: translate(-50%, -50%) scale(1);
            }
        }
    `;
    document.head.appendChild(style);
}

// INICIAR TODAS AS FUNCIONALIDADES
function initMapaInterativo() {
    adicionarAnimacaoCSS();
    criarPontosInterativos();
    configurarZoom();
}

// Inicializar quando a página carregar
window.addEventListener('load', initMapaInterativo);