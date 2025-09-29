window.onload = function() {
    const janelaOverlay = document.getElementById('janela-overlay');
    const fechar = document.getElementById('fechar');

    janelaOverlay.style.display = "flex";

    fechar.onclick = function() {
        janelaOverlay.style.display = "none";
    };
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



    document.getElementById("anos").textContent = anos;
    document.getElementById("meses").textContent = meses;
    document.getElementById("semanas").textContent = semanas;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

setInterval(atualizarContagem, 1000); //Atualiza a contagem a cada 1 segundo
atualizarContagem();



