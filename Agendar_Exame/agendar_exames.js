// const header = document.querySelector("header");

// window.addEventListener("scroll", () => {
//     if (window.scrollY > 80) {
//         header.classList.add("scrolled");
//     } else {
//         header.classList.remove("scrolled");
//     }
// });


// const btnContato = document.getElementById("btn-contato");
// const submenu = btnContato.parentElement;

// btnContato.addEventListener("click", (e) => {
//     e.preventDefault();
//     submenu.classList.toggle("ativo");
// });



// JavaScript para funcionalidades das seções

// FAQ - Alternar abertura/fechamento
document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const pergunta = item.querySelector('.faq-pergunta');
        
        pergunta.addEventListener('click', () => {
            // Fecha outros itens abertos
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Alterna o item clicado
            item.classList.toggle('active');
        });
    });
    
    // Carregar exames populares (exemplo)
    carregarExamesPopulares();
});

// Função para carregar exames populares (exemplo)
function carregarExamesPopulares() {
    const examesPopulares = [
        {
            id: 1,
            nome: "Hemograma Completo",
            codigo: "HC-001",
            descricao: "Avaliação das células sanguíneas (hemácias, leucócitos e plaquetas).",
            preco: "R$ 45,90",
            icone: "fa-solid fa-droplet"
        },
        {
            id: 2,
            nome: "Glicemia em Jejum",
            codigo: "GL-002",
            descricao: "Medição dos níveis de glicose no sangue após jejum de 8 horas.",
            preco: "R$ 25,50",
            icone: "fa-solid fa-prescription-bottle-medical"
        },
        {
            id: 3,
            nome: "Colesterol Total e Frações",
            codigo: "CT-003",
            descricao: "Avaliação do perfil lipídico (colesterol total, HDL, LDL e triglicerídeos).",
            preco: "R$ 68,90",
            icone: "fa-solid fa-heart-pulse"
        },
        {
            id: 4,
            nome: "TSH e T4 Livre",
            codigo: "TT-004",
            descricao: "Avaliação da função tireoidiana (hormônios TSH e T4 livre).",
            preco: "R$ 89,90",
            icone: "fa-solid fa-brain"
        },
        {
            id: 5,
            nome: "Creatinina",
            codigo: "CR-005",
            descricao: "Exame que avalia a função renal através da dosagem de creatinina no sangue.",
            preco: "R$ 32,80",
            icone: "fa-solid fa-kidneys"
        },
        {
            id: 6,
            nome: "EAS (Urina)",
            codigo: "EU-006",
            descricao: "Exame de urina tipo 1 que avalia aspectos físicos, químicos e sedimentos.",
            preco: "R$ 28,50",
            icone: "fa-solid fa-flask-vial"
        }
    ];
    
    const container = document.getElementById('exames-populares');
    
    if (container) {
        examesPopulares.forEach(exame => {
            const card = document.createElement('div');
            card.className = 'exame-card';
            card.innerHTML = `
                <div class="exame-card-header">
                    <div class="exame-card-icon">
                        <i class="${exame.icone}"></i>
                    </div>
                    <div class="exame-card-title">
                        <h3>${exame.nome}</h3>
                        <span class="exame-card-codigo">${exame.codigo}</span>
                    </div>
                </div>
                <div class="exame-card-descricao">
                    <p>${exame.descricao}</p>
                </div>
                <div class="exame-card-footer">
                    <div class="exame-card-preco">${exame.preco}</div>
                    <button class="exame-card-botao">Agendar</button>
                </div>
            `;
            
            // Adicionar evento de clique ao botão de agendar
            const botaoAgendar = card.querySelector('.exame-card-botao');
            botaoAgendar.addEventListener('click', () => {
                alert(`Você solicitou agendar o exame: ${exame.nome} (${exame.codigo})`);
            });
            
            container.appendChild(card);
        });
    }
}
// DADOS DE EXEMPLO PARA A TABELA
const examesData = [
    {
        id: 1,
        nome: "Hemograma Completo",
        codigo: "HC-001",
        material: "Sangue",
        metodo: "Contador Automático",
        preparo: "Jejum de 8h",
        prazo: "24h",
        categoria: "sangue",
        tipoPreparo: "jejum-obrigatorio"
    },
    {
        id: 2,
        nome: "Glicemia em Jejum",
        codigo: "GL-002",
        material: "Sangue",
        metodo: "Enzimático Colorimétrico",
        preparo: "Jejum de 8h obrigatório",
        prazo: "24h",
        categoria: "sangue",
        tipoPreparo: "jejum-obrigatorio"
    },
    {
        id: 3,
        nome: "Colesterol Total e Frações",
        codigo: "CT-003",
        material: "Sangue",
        metodo: "Enzimático Colorimétrico",
        preparo: "Jejum de 12h",
        prazo: "48h",
        categoria: "sangue",
        tipoPreparo: "jejum-obrigatorio"
    },
    {
        id: 4,
        nome: "TSH e T4 Livre",
        codigo: "TT-004",
        material: "Sangue",
        metodo: "Quimioluminescência",
        preparo: "Nenhum preparo especial",
        prazo: "72h",
        categoria: "sangue",
        tipoPreparo: "normal"
    },
    {
        id: 5,
        nome: "Creatinina",
        codigo: "CR-005",
        material: "Sangue",
        metodo: "Cinético",
        preparo: "Evitar atividade física 72h antes",
        prazo: "24h",
        categoria: "sangue",
        tipoPreparo: "prep-especial"
    },
    {
        id: 6,
        nome: "EAS (Urina Tipo 1)",
        codigo: "EU-006",
        material: "Urina",
        metodo: "Físico-Químico e Sedimento",
        preparo: "Primeira urina da manhã",
        prazo: "24h",
        categoria: "urina",
        tipoPreparo: "prep-especial"
    },
    {
        id: 7,
        nome: "Urocultura",
        codigo: "UC-007",
        material: "Urina",
        metodo: "Cultura e Antibiograma",
        preparo: "Coleta asséptica",
        prazo: "5 dias",
        categoria: "urina",
        tipoPreparo: "prep-especial"
    },
    {
        id: 8,
        nome: "Parasitológico de Fezes",
        codigo: "PF-008",
        material: "Fezes",
        metodo: "Método de Hoffman",
        preparo: "Não usar pomadas ou supositórios",
        prazo: "48h",
        categoria: "fezes",
        tipoPreparo: "prep-especial"
    },
    {
        id: 9,
        nome: "Ultrassonografia Abdominal",
        codigo: "UA-009",
        material: "-",
        metodo: "Ultrassom",
        preparo: "Jejum de 8h",
        prazo: "24h",
        categoria: "imagem",
        tipoPreparo: "jejum-obrigatorio"
    },
    {
        id: 10,
        nome: "Raio-X de Tórax",
        codigo: "RX-010",
        material: "-",
        metodo: "Radiografia Digital",
        preparo: "Nenhum preparo especial",
        prazo: "24h",
        categoria: "imagem",
        tipoPreparo: "normal"
    }
];

// VARIÁVEIS GLOBAIS
let currentPage = 1;
let entriesPerPage = 25;
let currentSort = { column: 'nome', direction: 'asc' };
let currentFilter = 'todos';
let filteredExames = [...examesData];

// INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar tabela
    renderTable();
    
    // Configurar eventos
    setupEventListeners();
    
    // Configurar busca
    setupSearch();
});

// RENDERIZAR TABELA
function renderTable() {
    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;
    const pageExames = filteredExames.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredExames.length / entriesPerPage);
    
    // Renderizar corpo da tabela
    const tbody = document.getElementById('exames-body');
    tbody.innerHTML = '';
    
    pageExames.forEach(exame => {
        const row = document.createElement('tr');
        row.className = exame.tipoPreparo;
        
        row.innerHTML = `
            <td>${exame.nome}</td>
            <td><span class="codigo-exame">${exame.codigo}</span></td>
            <td>${exame.material}</td>
            <td>${exame.metodo}</td>
            <td>
                ${exame.preparo.includes('Jejum') || exame.preparo.includes('especial') 
                    ? `<span class="preparo-info"><i class="fa-solid fa-exclamation-circle"></i> ${exame.preparo}</span>` 
                    : exame.preparo}
            </td>
            <td>${exame.prazo}</td>
            <td class="acoes-cell">
                <button class="btn-agendar" data-id="${exame.id}">
                    <i class="fa-solid fa-calendar-check"></i> Agendar
                </button>
                <button class="btn-detalhes" data-id="${exame.id}">
                    <i class="fa-solid fa-circle-info"></i> Detalhes
                </button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    // Atualizar informações de paginação
    updatePaginationInfo();
    
    // Renderizar paginação
    renderPagination(totalPages);
    
    // Adicionar eventos aos botões
    addActionEvents();
}

// CONFIGURAR EVENT LISTENERS
function setupEventListeners() {
    // Ordenação
    document.querySelectorAll('.sortable').forEach(th => {
        th.addEventListener('click', () => {
            const column = th.dataset.sort;
            toggleSort(column);
            renderTable();
        });
    });
    
    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            applyFilter();
            renderTable();
        });
    });
    
    // Entradas por página
    document.getElementById('entries-per-page').addEventListener('change', function() {
        entriesPerPage = parseInt(this.value);
        currentPage = 1;
        renderTable();
    });
    
    // Botão de impressão
    document.getElementById('btn-print').addEventListener('click', function() {
        window.print();
    });
    
    // Botão de exportar PDF
    document.getElementById('btn-export-pdf').addEventListener('click', function() {
        alert('Funcionalidade de exportação PDF em desenvolvimento. Os dados da tabela seriam exportados.');
    });
}

// CONFIGURAR BUSCA
function setupSearch() {
    const searchInput = document.getElementById('search-exame');
    const searchButton = document.getElementById('btn-search');
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Busca em tempo real
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(performSearch, 500);
    });
}

// REALIZAR BUSCA
function performSearch() {
    const searchTerm = document.getElementById('search-exame').value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredExames = [...examesData];
    } else {
        filteredExames = examesData.filter(exame => 
            exame.nome.toLowerCase().includes(searchTerm) ||
            exame.codigo.toLowerCase().includes(searchTerm) ||
            exame.material.toLowerCase().includes(searchTerm) ||
            exame.metodo.toLowerCase().includes(searchTerm)
        );
    }
    
    applyFilter();
    currentPage = 1;
    renderTable();
}

// APLICAR FILTRO
function applyFilter() {
    if (currentFilter === 'todos') {
        // Já está filtrado pela busca
        return;
    }
    
    filteredExames = filteredExames.filter(exame => 
        exame.categoria === currentFilter
    );
}

// ORDENAÇÃO
function toggleSort(column) {
    if (currentSort.column === column) {
        currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
        currentSort.column = column;
        currentSort.direction = 'asc';
    }
    
    // Atualizar indicadores visuais
    document.querySelectorAll('.sortable').forEach(th => {
        th.classList.remove('sorted-asc', 'sorted-desc');
    });
    
    const currentTh = document.querySelector(`[data-sort="${column}"]`);
    currentTh.classList.add(`sorted-${currentSort.direction}`);
    
    // Ordenar dados
    filteredExames.sort((a, b) => {
        let aValue = a[column];
        let bValue = b[column];
        
        if (column === 'nome' || column === 'codigo') {
            aValue = aValue.toLowerCase();
            bValue = bValue.toLowerCase();
        }
        
        if (currentSort.direction === 'asc') {
            return aValue > bValue ? 1 : -1;
        } else {
            return aValue < bValue ? 1 : -1;
        }
    });
}

// ATUALIZAR INFORMAÇÕES DE PAGINAÇÃO
function updatePaginationInfo() {
    const start = (currentPage - 1) * entriesPerPage + 1;
    const end = Math.min(currentPage * entriesPerPage, filteredExames.length);
    const total = filteredExames.length;
    
    document.getElementById('pagination-info').textContent = 
        `Mostrando ${start} a ${end} de ${total} exames`;
}

// RENDERIZAR PAGINAÇÃO
function renderPagination(totalPages) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    
    // Botão anterior
    const prevButton = document.createElement('button');
    prevButton.className = 'pagination-btn';
    prevButton.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderTable();
        }
    });
    pagination.appendChild(prevButton);
    
    // Números das páginas
    const maxVisible = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = startPage + maxVisible - 1;
    
    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxVisible + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            renderTable();
        });
        pagination.appendChild(pageButton);
    }
    
    // Botão próximo
    const nextButton = document.createElement('button');
    nextButton.className = 'pagination-btn';
    nextButton.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderTable();
        }
    });
    pagination.appendChild(nextButton);
}

// ADICIONAR EVENTOS AOS BOTÕES DE AÇÃO
function addActionEvents() {
    document.querySelectorAll('.btn-agendar').forEach(btn => {
        btn.addEventListener('click', function() {
            const exameId = this.dataset.id;
            const exame = examesData.find(e => e.id == exameId);
            alert(`Agendando exame: ${exame.nome} (${exame.codigo})\n\nRedirecionando para página de agendamento...`);
        });
    });
    
    document.querySelectorAll('.btn-detalhes').forEach(btn => {
        btn.addEventListener('click', function() {
            const exameId = this.dataset.id;
            const exame = examesData.find(e => e.id == exameId);
            
            // Modal de detalhes
            const modalHTML = `
                <div class="modal-detalhes">
                    <div class="modal-header">
                        <h3>${exame.nome} <span class="codigo-exame">(${exame.codigo})</span></h3>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="detalhes-grid">
                            <div class="detalhe-item">
                                <strong>Material:</strong> ${exame.material}
                            </div>
                            <div class="detalhe-item">
                                <strong>Método:</strong> ${exame.metodo}
                            </div>
                            <div class="detalhe-item">
                                <strong>Preparo:</strong> ${exame.preparo}
                            </div>
                            <div class="detalhe-item">
                                <strong>Prazo de Entrega:</strong> ${exame.prazo}
                            </div>
                            <div class="detalhe-item">
                                <strong>Unidades Disponíveis:</strong> Todas as unidades
                            </div>
                        </div>
                        <div class="modal-actions">
                            <button class="btn-agendar-modal">Agendar Este Exame</button>
                        </div>
                    </div>
                </div>
                <div class="modal-overlay"></div>
            `;
            
            // Criar e mostrar modal
            const modalContainer = document.createElement('div');
            modalContainer.className = 'modal-container';
            modalContainer.innerHTML = modalHTML;
            document.body.appendChild(modalContainer);
            
            // Configurar eventos do modal
            modalContainer.querySelector('.modal-close').addEventListener('click', () => {
                document.body.removeChild(modalContainer);
            });
            
            modalContainer.querySelector('.modal-overlay').addEventListener('click', () => {
                document.body.removeChild(modalContainer);
            });
            
            modalContainer.querySelector('.btn-agendar-modal').addEventListener('click', () => {
                alert(`Agendando exame: ${exame.nome}`);
                document.body.removeChild(modalContainer);
            });
        });
    });
}

// FUNÇÕES DO MODAL
function abrirModalExame(exameId) {
    const exame = examesData.find(e => e.id == exameId);
    if (!exame) return;
    
    // Preencher modal com dados do exame
    document.getElementById('modal-titulo').textContent = exame.nome;
    
    // Gerar conteúdo do modal
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = criarConteudoModal(exame);
    
    // Mostrar modal
    document.getElementById('modal-exame').classList.add('ativo');
    document.body.style.overflow = 'hidden'; // Previne scroll da página
    
    // Configurar eventos do modal
    configurarEventosModal(exame);
}

function criarConteudoModal(exame) {
    const preparoEspecial = exame.preparo.includes('Jejum') || exame.preparo.includes('especial');
    
    return `
        <div class="detalhes-exame">
            <div class="detalhes-header">
                <div class="detalhes-header-icono">
                    <i class="fa-solid fa-flask-vial"></i>
                </div>
                <div class="detalhes-header-info">
                    <h4>${exame.nome}</h4>
                    <span class="codigo-exame-modal">${exame.codigo}</span>
                </div>
            </div>
            
            <div class="detalhes-grid">
                <div class="detalhe-item">
                    <strong>Material Necessário</strong>
                    <p>${exame.material}</p>
                </div>
                <div class="detalhe-item">
                    <strong>Método de Análise</strong>
                    <p>${exame.metodo}</p>
                </div>
                <div class="detalhe-item">
                    <strong>Prazo para Resultado</strong>
                    <p>${exame.prazo}</p>
                </div>
                <div class="detalhe-item">
                    <strong>Categoria</strong>
                    <p>${formatarCategoria(exame.categoria)}</p>
                </div>
            </div>
            
            ${preparoEspecial ? criarSecaoPreparo(exame) : ''}
            
            <div class="info-adicional">
                <div class="info-item">
                    <i class="fa-solid fa-clock"></i>
                    <span>Coletas: 6h às 18h (Seg-Sex)</span>
                </div>
                <div class="info-item">
                    <i class="fa-solid fa-hospital"></i>
                    <span>Disponível em todas as unidades</span>
                </div>
                <div class="info-item">
                    <i class="fa-solid fa-file-medical"></i>
                    <span>Requisição médica obrigatória</span>
                </div>
            </div>
        </div>
    `;
}

function criarSecaoPreparo(exame) {
    let preparoLista = '';
    
    if (exame.preparo.includes('Jejum')) {
        preparoLista += '<li>Jejum mínimo de 8 horas</li>';
        preparoLista += '<li>Ingerir apenas água durante o jejum</li>';
    }
    
    if (exame.preparo.includes('atividade física')) {
        preparoLista += '<li>Evitar atividade física intensa 72h antes</li>';
    }
    
    if (exame.preparo.includes('Primeira urina')) {
        preparoLista += '<li>Coletar primeira urina da manhã</li>';
        preparoLista += '<li>Higienização adequada antes da coleta</li>';
    }
    
    if (exame.preparo.includes('Coleta asséptica')) {
        preparoLista += '<li>Coleta com técnica asséptica</li>';
        preparoLista += '<li>Utilizar frasco estéril fornecido pelo laboratório</li>';
    }
    
    return `
        <div class="preparo-detalhado">
            <h5><i class="fa-solid fa-exclamation-circle"></i> Preparo Especial</h5>
            <ul class="preparo-lista">
                ${preparoLista || '<li>' + exame.preparo + '</li>'}
                <li>Informar medicamentos em uso</li>
                <li>Levar documento com foto e requisição médica</li>
            </ul>
        </div>
    `;
}

function formatarCategoria(categoria) {
    const categorias = {
        'sangue': 'Exame de Sangue',
        'imagem': 'Exame de Imagem',
        'urina': 'Exame de Urina',
        'fezes': 'Exame de Fezes'
    };
    return categorias[categoria] || categoria;
}

function configurarEventosModal(exame) {
    // Botão de fechar
    document.getElementById('btn-fechar-modal').addEventListener('click', fecharModal);
    
    // Fechar clicando fora
    document.getElementById('modal-exame').addEventListener('click', function(e) {
        if (e.target === this) {
            fecharModal();
        }
    });
    
    // Fechar com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            fecharModal();
        }
    });
    
    // Botão de imprimir
    document.getElementById('btn-modal-imprimir').addEventListener('click', function() {
        imprimirDetalhesExame(exame);
    });
}

function fecharModal() {
    document.getElementById('modal-exame').classList.remove('ativo');
    document.body.style.overflow = 'auto';
    
    // Limpar eventos para evitar duplicação
    document.getElementById('btn-fechar-modal').replaceWith(document.getElementById('btn-fechar-modal').cloneNode(true));
    document.getElementById('btn-modal-imprimir').replaceWith(document.getElementById('btn-modal-imprimir').cloneNode(true));
}

function imprimirDetalhesExame(exame) {
    const conteudoImpressao = `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">
                ${exame.nome} <small style="color: #7f8c8d;">(${exame.codigo})</small>
            </h2>
            
            <div style="margin: 20px 0;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 10px; font-weight: bold; width: 150px;">Material:</td>
                        <td style="padding: 10px;">${exame.material}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 10px; font-weight: bold;">Método:</td>
                        <td style="padding: 10px;">${exame.metodo}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 10px; font-weight: bold;">Preparo:</td>
                        <td style="padding: 10px;">${exame.preparo}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 10px; font-weight: bold;">Prazo:</td>
                        <td style="padding: 10px;">${exame.prazo}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; font-weight: bold;">Categoria:</td>
                        <td style="padding: 10px;">${formatarCategoria(exame.categoria)}</td>
                    </tr>
                </table>
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #3498db;">
                <h3 style="color: #2c3e50; margin-top: 0;">Informações Importantes</h3>
                <ul style="color: #5a6c7d;">
                    <li>Comparecer com documento com foto e requisição médica</li>
                    <li>Horário de coleta: 6h às 18h (Segunda a Sexta)</li>
                    <li>Disponível em todas as unidades do Laboratório F. Diniz</li>
                    <li>Para dúvidas: (83) 3315-7373</li>
                </ul>
            </div>
            
            <div style="text-align: center; margin-top: 30px; color: #7f8c8d; font-size: 12px;">
                <p>Laboratório F. Diniz • ANVISA: 253451860001-90</p>
                <p>Documento impresso em ${new Date().toLocaleDateString('pt-BR')}</p>
            </div>
        </div>
    `;
    
    const janelaImpressao = window.open('', '_blank');
    janelaImpressao.document.write(conteudoImpressao);
    janelaImpressao.document.close();
    janelaImpressao.focus();
    
    setTimeout(() => {
        janelaImpressao.print();
    }, 250);
}

// ATUALIZAR FUNÇÃO addActionEvents PARA USAR O MODAL
function addActionEvents() {
    document.querySelectorAll('.btn-agendar').forEach(btn => {
        btn.addEventListener('click', function() {
            const exameId = this.dataset.id;
            const exame = examesData.find(e => e.id == exameId);
            alert(`Agendando exame: ${exame.nome} (${exame.codigo})\n\nRedirecionando para página de agendamento...`);
        });
    });
    
    document.querySelectorAll('.btn-detalhes').forEach(btn => {
        btn.addEventListener('click', function() {
            const exameId = this.dataset.id;
            abrirModalExame(exameId);
        });
    });
}

// SCROLL SUAVE PARA ÂNCORAS NO RODAPÉ
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar scroll suave para links âncora
    document.querySelectorAll('.rodape-menu a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animar números de telefone
    const numeroTelefone = document.querySelector('.rodape-contato a[href^="tel:"] span');
    if (numeroTelefone) {
        numeroTelefone.classList.add('numero-telefone');
    }
});

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
