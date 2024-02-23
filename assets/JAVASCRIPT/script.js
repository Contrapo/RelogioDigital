const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    
    let dateToday = new Date();

    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var period = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12; // Converte para o formato 12-horas

    document.getElementById('horas_12').innerText = formatTime(hours);
    document.getElementById('minutos_12').innerText = formatTime(minutes);
    document.getElementById('segundos_12').innerText = formatTime(seconds);
    document.getElementById('periodo').innerText = period;

    setTimeout(updateClock, 0); // Atualiza a cada segundo
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

updateClock();

// Felipe Araújo Carnaúba //