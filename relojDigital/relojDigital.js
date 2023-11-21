function updateClock() {
  var now = new Date();

  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  var hourNow = hours + ':' + minutes + ':' + seconds;
  $('#clock').text(hourNow);

  var localDate = now.toLocaleDateString();
  $('#date').text(localDate);

  var weekDay = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  var weekDayNow = weekDay[now.getDay()];
  $('#day').text(weekDayNow);
}

// Actualizar el reloj cada segundo
$(document).ready(function () {
  updateClock(); // Llamar a la función una vez para evitar un retraso inicial
  setInterval(updateClock, 1000);
});