
$(document).ready(function() {

  $('#submitButton').on('click',function() {
    var amount = $('#amount').val();
    $('meter')[0].value = amount;
  });
