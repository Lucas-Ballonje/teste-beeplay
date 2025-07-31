// Variáveis globais
let activeNotification = false;
let notificationTimeout;
let userNames = ["João", "Maria", "Carlos", "Ana", "Pedro", "Fernanda", "Lucas", "Juliana", "Marcos", "Camila"];
let cities = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Salvador", "Brasília", "Curitiba", "Fortaleza", "Recife", "Porto Alegre", "Manaus"];
let plans = ["mensal", "trimestral", "semestral", "anual"];
let activeUsers = 1547;

// Função para inicializar o site
document.addEventListener('DOMContentLoaded', function() {
    // Iniciar contador regressivo
    startCountdown();
    
    // Atualizar contador de usuários ativos
    updateActiveUsers();
    
    // Mostrar notificações de compra
    scheduleNotifications();
    
    // Inicializar FAQ
    initFAQ();
    
    // Inicializar vídeo placeholder
    initVideoPlaceholder();
    
    // Mostrar notificação de cookies após 2 segundos
    setTimeout(function() {
        document.getElementById('cookieNotice').style.display = 'flex';
    }, 2000);
});

// Função para fechar o overlay de entrada
function closeOverlay() {
    const overlay = document.getElementById('entryOverlay');
    overlay.style.opacity = '0';
    setTimeout(function() {
        overlay.style.display = 'none';
    }, 500);
}

// Função para iniciar o contador regressivo
function startCountdown() {
    // Definir tempo inicial (12 horas)
    let hours = 11;
    let minutes = 59;
    let seconds = 59;
    
    // Atualizar o contador a cada segundo
    setInterval(function() {
        seconds--;
        
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            
            if (minutes < 0) {
                minutes = 59;
                hours--;
                
                if (hours < 0) {
                    hours = 11;
                    minutes = 59;
                    seconds = 59;
                }
            }
        }
        
        // Atualizar os elementos HTML
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }, 1000);
}

// Função para atualizar o contador de usuários ativos
function updateActiveUsers() {
    setInterval(function() {
        // Gerar um número aleatório entre -3 e +5
        const change = Math.floor(Math.random() * 9) - 3;
        activeUsers += change;
        
        // Garantir que o número não fique muito baixo
        if (activeUsers < 1500) {
            activeUsers = 1500 + Math.floor(Math.random() * 20);
        }
        
        // Atualizar o elemento HTML
        document.getElementById('activeUsers').textContent = activeUsers.toLocaleString();
    }, 5000);
}

// Função para agendar notificações de compra
function scheduleNotifications() {
    setInterval(function() {
        if (!activeNotification) {
            showNotification();
        }
    }, 15000); // Mostrar uma notificação a cada 15 segundos
}

// Função para mostrar notificação de compra
function showNotification() {
    // Selecionar um nome e cidade aleatórios
    const randomName = userNames[Math.floor(Math.random() * userNames.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const randomPlan = plans[Math.floor(Math.random() * plans.length)];
    
    // Atualizar o texto da notificação
    const notificationText = document.querySelector('.notification-text p');
    notificationText.innerHTML = `<strong>${randomName} de ${randomCity}</strong> acabou de assinar o plano ${randomPlan}!`;
    
    // Mostrar a notificação
    const notification = document.getElementById('notification');
    notification.classList.add('show');
    activeNotification = true;
    
    // Esconder a notificação após 5 segundos
    notificationTimeout = setTimeout(function() {
        notification.classList.remove('show');
        activeNotification = false;
    }, 5000);
}

// Função para inicializar o FAQ
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Fechar todos os outros itens
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Alternar o estado do item atual
            item.classList.toggle('active');
        });
    });
}

// Função para inicializar o vídeo placeholder
function initVideoPlaceholder() {
    const videoPlaceholder = document.querySelector('.video-placeholder');
    
    videoPlaceholder.addEventListener('click', function() {
        // Aqui você pode implementar a lógica para mostrar o vídeo real
        // Por enquanto, vamos apenas mudar o estilo do placeholder
        videoPlaceholder.innerHTML = '<p>Vídeo em produção</p><p>Disponível em breve!</p>';
        videoPlaceholder.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    });
}

// Função para alternar o menu mobile
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// Função para fechar o menu mobile
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('active');
}

// Função para aceitar cookies
function acceptCookies() {
    document.getElementById('cookieNotice').style.display = 'none';
    // Aqui você pode adicionar código para salvar a preferência do usuário
}

// Efeito de rolagem suave para links de âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajuste para o cabeçalho fixo
                behavior: 'smooth'
            });
        }
    });
});

// Efeito de cabeçalho fixo com mudança de estilo ao rolar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        header.style.padding = '10px 0';
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        header.style.padding = '15px 0';
    }
});

// Validação de formulários
const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Verificar se todos os campos obrigatórios estão preenchidos
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = 'var(--error-color)';
            } else {
                field.style.borderColor = '';
            }
        });
        
        if (isValid) {
            // Simulação de envio bem-sucedido
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            
            setTimeout(function() {
                submitButton.textContent = 'Enviado com Sucesso!';
                submitButton.style.backgroundColor = 'var(--success-color)';
                
                // Limpar o formulário
                form.reset();
                
                // Restaurar o botão após 3 segundos
                setTimeout(function() {
                    submitButton.textContent = originalText;
                    submitButton.style.backgroundColor = '';
                    submitButton.disabled = false;
                }, 3000);
            }, 1500);
        }
    });
});

// Animação de elementos ao rolar a página
window.addEventListener('scroll', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .plan-card, .testimonial, .comparison-item');
    
    animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Inicializar elementos com opacidade 0 para animação
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .plan-card, .testimonial, .comparison-item');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
});
