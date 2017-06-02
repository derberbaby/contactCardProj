
$(document).ready(function() {

  $('form').submit(function() {
    var fname = $('input[name="fname"]').val()
    var lname = $('input[name="lname"]').val()
    var description = $('textarea[name="description"]').val()

    $('#contactCards').append('<div class="card"><h3>'+fname+" "+lname+'</h3><p id="click">Click for description!</p><p id="desc">'+description+'</p></div>');

    return false;
  })

  $(document).on('click', '.card', function() {
    $(this).children().toggle();
  })

  var maxLength = 300;
  $('textarea').keyup(function() {
    var length = $(this).val().length;
    var length = maxLength - length;
    $('#chars').text(length + " characters left!");

  })

})
