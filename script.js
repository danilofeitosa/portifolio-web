// Espera o DOM (a página) ser totalmente carregado para executar o script
document.addEventListener("DOMContentLoaded", function() {

    // --- VALIDAÇÃO DO FORMULÁRIO DE CONTATO (Requisito Obrigatório) ---
    
    // Seleciona o formulário pelo ID
    const contactForm = document.getElementById("contact-form");

    // Adiciona um "ouvinte" para o evento de 'submit' (envio) do formulário
    contactForm.addEventListener("submit", function(event) {
        
        // Impede o comportamento padrão do formulário (que é recarregar a página)
        event.preventDefault(); 

        // Seleciona os campos do formulário
        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const mensagem = document.getElementById("mensagem");

        // 1. Validação: Verifica se os campos estão preenchidos [cite: 58]
        if (nome.value.trim() === "") {
            alert("Por favor, preencha o campo Nome.");
            nome.focus(); // Foca no campo que precisa ser preenchido
            return; // Para a execução
        }

        if (email.value.trim() === "") {
            alert("Por favor, preencha o campo E-mail.");
            email.focus();
            return;
        }

        // 2. Validação: Verifica se o e-mail tem um formato válido [cite: 59]
        if (!isValidEmail(email.value)) {
            alert("Por favor, insira um formato de e-mail válido (ex: usuario@dominio.com).");
            email.focus();
            return;
        }

        if (mensagem.value.trim() === "") {
            alert("Por favor, preencha o campo Mensagem.");
            mensagem.focus();
            return;
        }

        // 3. Simulação de Envio (Obrigatório) 
        
        // Exibe uma mensagem de sucesso
        alert("Mensagem enviada com sucesso!");

        // Limpa os campos do formulário
        contactForm.reset();
    });

    /**
     * Função auxiliar para validar o formato do e-mail usando uma expressão regular (Regex).
     * @param {string} email - O e-mail a ser validado.
     * @returns {boolean} - True se o e-mail for válido, False caso contrário.
     */
    function isValidEmail(email) {
        // Expressão regular simples para validação de e-mail
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }


    // --- FUNCIONALIDADE BÔNUS: TROCA DE TEMA (Claro/Escuro) --- 

    // Seleciona o botão de troca de tema
    const themeToggle = document.getElementById("theme-toggle");
    
    // Seleciona o <body> da página
    const body = document.body;

    // Adiciona um "ouvinte" para o evento de 'click' no botão
    themeToggle.addEventListener("click", function() {
        // Adiciona ou remove a classe 'dark-mode' do <body>
        body.classList.toggle("dark-mode");
    });

});