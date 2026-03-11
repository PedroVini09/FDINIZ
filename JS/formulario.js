// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // ================= HEADER SCROLL =================
    const header = document.querySelector("header");
    
    if (header) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 80) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }

    // ================= DROPDOWN MENU =================
    const btnContato = document.getElementById("btn-contato");
    
    if (btnContato) {
        const submenu = btnContato.parentElement;
        
        btnContato.addEventListener("click", function(e) {
            e.preventDefault();
            submenu.classList.toggle("ativo");
        });
    }

    // ================= BUSCAR CEP =================
    const btnBuscarCep = document.querySelector('.btn-buscar-cep');
    const cepInput = document.getElementById('cep');
    
    if (btnBuscarCep && cepInput) {
        btnBuscarCep.addEventListener('click', buscarCEP);
        
        cepInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                buscarCEP();
            }
        });
    }
    
    function buscarCEP() {
        const cep = cepInput.value.replace(/\D/g, '');
        
        if (cep.length !== 8) {
            alert('Digite um CEP válido com 8 dígitos');
            cepInput.focus();
            return;
        }
        
        const originalText = btnBuscarCep.innerHTML;
        btnBuscarCep.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Buscando...';
        btnBuscarCep.disabled = true;
        
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    alert('CEP não encontrado');
                    return;
                }
                
                document.getElementById('endereco').value = data.logradouro || '';
                document.getElementById('bairro').value = data.bairro || '';
                
                const cidadeCampo = document.getElementById('cidade');
                const estadoCampo = document.getElementById('estado');
                
                if (cidadeCampo) cidadeCampo.value = data.localidade || '';
                if (estadoCampo) estadoCampo.value = data.uf || '';
                
                setTimeout(() => {
                    document.getElementById('numero').focus();
                }, 100);
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Erro ao buscar CEP. Tente novamente.');
            })
            .finally(() => {
                btnBuscarCep.innerHTML = originalText;
                btnBuscarCep.disabled = false;
            });
    }

    // ================= CARDS DE MORADIA =================
    const cardsMoradia = document.querySelectorAll('.checkbox-card');
    
    cardsMoradia.forEach(card => {
        const radio = card.querySelector('input[type="radio"]');
        
        card.addEventListener('click', function(e) {
            if (e.target.tagName !== 'INPUT') {
                radio.checked = true;
                const event = new Event('change', { bubbles: true });
                radio.dispatchEvent(event);
            }
        });
        
        radio.addEventListener('change', function() {
            const name = this.name;
            document.querySelectorAll(`.checkbox-card input[name="${name}"]`).forEach(input => {
                input.closest('.checkbox-card').classList.remove('selected');
            });
            
            if (this.checked) {
                card.classList.add('selected');
            }
        });
        
        if (radio.checked) {
            card.classList.add('selected');
        }
    });

    // ================= MOSTRAR/OCULTAR CAMPOS =================
    const radiosMenor = document.querySelectorAll('input[name="menorIdade"]');
    const responsavelGroup = document.getElementById('responsavelGroup');
    
    if (radiosMenor.length > 0 && responsavelGroup) {
        radiosMenor.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value === 'sim' && this.checked) {
                    responsavelGroup.style.display = 'block';
                    const inputResponsavel = document.getElementById('nomeResponsavel');
                    if (inputResponsavel) inputResponsavel.required = true;
                } else if (this.value === 'nao' && this.checked) {
                    responsavelGroup.style.display = 'none';
                    const inputResponsavel = document.getElementById('nomeResponsavel');
                    if (inputResponsavel) inputResponsavel.required = false;
                }
            });
            
            if (radio.checked && radio.value === 'sim') {
                responsavelGroup.style.display = 'block';
            }
        });
    }

    const radiosMedicamento = document.querySelectorAll('input[name="usaMedicamento"]');
    const medicamentoGroup = document.getElementById('medicamentoGroup');
    
    if (radiosMedicamento.length > 0 && medicamentoGroup) {
        radiosMedicamento.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value === 'sim' && this.checked) {
                    medicamentoGroup.style.display = 'block';
                } else if (this.value === 'nao' && this.checked) {
                    medicamentoGroup.style.display = 'none';
                }
            });
            
            if (radio.checked && radio.value === 'sim') {
                medicamentoGroup.style.display = 'block';
            }
        });
    }
});