//funcao é chamada logo quando a página é carregada
window.onload = function() {
    const janelaOverlay = document.getElementById("janela-overlay");
    const fechar = document.getElementById("fechar");

    // Adiciona uma verificação para garantir que 'janelaOverlay' e 'fechar' existam
    // antes de tentar manipulá-los. Isso evita erros fatais em páginas como cartinha.html
    // onde esses elementos não estão presentes.
    if (janelaOverlay && fechar) {
        janelaOverlay.style.display = "flex";
        fechar.onclick = function() {
            janelaOverlay.style.display = "none";
        };
        janelaOverlay.onclick = function() {
            janelaOverlay.style.display = "none"
        }
    }
};

// Data de início da contagem
const dataInicio = new Date("2024-11-15T00:00:00");

function atualizarContagem() {
    const agora = new Date();

    // ========= ANOS =========
    // Diferença bruta entre os anos
    let anos = agora.getFullYear() - dataInicio.getFullYear();
    // Ajuste: só conta o ano quando o mês e o dia já passaram
    if (
        agora.getMonth() < dataInicio.getMonth() ||
        (agora.getMonth() === dataInicio.getMonth() && agora.getDate() < dataInicio.getDate())
    ) {
        anos--;
    }

    // ========= MESES =========
    // Diferença em meses (ano → meses + diferença de meses do calendário)
    let meses = (agora.getFullYear() - dataInicio.getFullYear()) * 12 + (agora.getMonth() - dataInicio.getMonth());
    // Ajuste: só conta o mês quando o dia já passou
    if (agora.getDate() < dataInicio.getDate()) {
        meses--;
    }

    // ========= DIAS =========
    // Contagem de dias completos desde a data de início
    let dias = Math.floor((agora - dataInicio) / (1000 * 60 * 60 * 24));

    // ========= SEMANAS =========
    // Número de semanas completas (cada 7 dias)
    let semanas = Math.floor(dias / 7);

    // ========= HORAS =========
    // Base inicial: total de dias * 24h + diferença das horas
    let horas = dias * 24 + agora.getHours() - dataInicio.getHours();
    // Ajuste: só conta a próxima hora quando o minuto/segundo inicial também já passou
    if (agora.getMinutes() < dataInicio.getMinutes() ||
        (agora.getMinutes() === dataInicio.getMinutes() && agora.getSeconds() < dataInicio.getSeconds())) {
        horas--;
    }

    // ========= MINUTOS =========
    // Base: total de horas * 60 + diferença de minutos
    let minutos = horas * 60 + (agora.getMinutes() - dataInicio.getMinutes());
    // Ajuste: só vira o minuto quando os segundos completam
    if (agora.getSeconds() < dataInicio.getSeconds()) {
        minutos--;
    }

    // ========= SEGUNDOS =========
    // Base: total de minutos * 60 + diferença de segundos
    let segundos = minutos * 60 + (agora.getSeconds() - dataInicio.getSeconds());
    // Evita valores negativos caso ainda não tenha dado 1 segundo completo
    if (segundos < 0) segundos = 0;

    // ========= ATUALIZAÇÃO NA PÁGINA =========
    if (document.getElementById("anos")) document.getElementById("anos").textContent = anos;
    if (document.getElementById("meses")) document.getElementById("meses").textContent = meses;
    if (document.getElementById("semanas")) document.getElementById("semanas").textContent = semanas;
    if (document.getElementById("dias")) document.getElementById("dias").textContent = dias;
    if (document.getElementById("horas")) document.getElementById("horas").textContent = horas;
    if (document.getElementById("minutos")) document.getElementById("minutos").textContent = minutos;
    if (document.getElementById("segundos")) document.getElementById("segundos").textContent = segundos;
}

// Inicia a contagem apenas se o elemento existir na página
if (document.getElementById("anos")) {
    setInterval(atualizarContagem, 1000); // Atualiza a cada 1s
    atualizarContagem(); // Chamada inicial imediata
}

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }   else {
            entry.target.classList.remove("show");
        }
    });
});

const elements = document.querySelectorAll(".hidden");

elements.forEach ((element) => myObserver.observe(element));
