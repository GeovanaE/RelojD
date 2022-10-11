const $tiempo = document.querySelector('.tiempo'),
$fecha = document.querySelector('.fecha');

function digitalClock(){
    let h = new Date(),
    dia = h.getDate(),
    mes = h.getMonth(),
    year = h.getFullYear(),
    diaSemana = h.getDay();
    
    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2)
    let timeString = h.toLocaleTimeString()
    $tiempo.innerHTML = timeString;

    let semana = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let showSemana = (semana[diaSemana]);
    $fecha.innerHTML =year + "/"+mes+ "/"+dia;
}
setInterval(() => {
    digitalClock()
}, 1000);