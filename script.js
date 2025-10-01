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
    }

    // O restante do código da contagem e do IntersectionObserver permanece inalterado
    // pois o problema principal era o erro fatal acima.
};

const dataInicio = new Date("2024-11-15T00:00:00");

function atualizarContagem() {
    const agora = new Date;
    const diferenca = agora - dataInicio;

    const segundos = Math.floor(diferenca / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const semanas = Math.floor(dias / 7);
    const meses = (agora.getFullYear() - dataInicio.getFullYear()) * 12 + (agora.getMonth() - dataInicio.getMonth());
    const anos = agora.getFullYear() - dataInicio.getFullYear() -
        (agora.getMonth() < dataInicio.getMonth() ||
        (agora.getMonth() === dataInicio.getMonth() && agora.getDate() < dataInicio.getDate()) ? 1 : 0);

    // Adiciona verificações de existência para os elementos da contagem
    // para evitar erros em páginas onde eles não estão presentes.
    if (document.getElementById("anos")) document.getElementById("anos").textContent = anos;
    if (document.getElementById("meses")) document.getElementById("meses").textContent = meses;
    if (document.getElementById("semanas")) document.getElementById("semanas").textContent = semanas;
    if (document.getElementById("dias")) document.getElementById("dias").textContent = dias;
    if (document.getElementById("horas")) document.getElementById("horas").textContent = horas;
    if (document.getElementById("minutos")) document.getElementById("minutos").textContent = minutos;
    if (document.getElementById("segundos")) document.getElementById("segundos").textContent = segundos;
}

// Inicia a contagem apenas se os elementos existirem (ou seja, na index.html)
if (document.getElementById("anos")) {
    setInterval(atualizarContagem, 1000); //Atualiza a contagem a cada 1 segundo
    atualizarContagem();
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
