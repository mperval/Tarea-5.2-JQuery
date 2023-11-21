$(document).ready(function() {
    $('#calcular').on('click', function() {
      var cantidad = parseFloat($('#cantidad').val());
      var porcentaje = parseFloat($('#porcentaje').val());

      if (!isNaN(cantidad) && !isNaN(porcentaje)) {
        var propina = cantidad * (porcentaje / 100);
        var total = cantidad + propina;
        //$('#resultado').text('tienes que pagar: ' + total.toFixed(2) + 'propina: ' + propina.toFixed(2));
        $('#propina').text(propina.toFixed(2));
        $('#total').text(total.toFixed(2));
      } else {
        $('#resultado').text('Por favor, introduce números válidos en los campos.');
      }
    });
  });