// Select color input
const colorPicker = $('#colorPicker');

// Select size input
const sizePicker = $('#sizePicker');

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // Your code goes here!

  $('#pixel_canvas').empty();
  const height = $('#input_height').val();
  const width = $('#input_width').val();

  for(let i = 0; i < height; i++) {
    $('#pixel_canvas').append('<tr id="row' + i + '"></tr>');

    // Usually, it makes sense to use 'for' loop here too.
    // However, there was a requirement to demonstrate both 'for' and 'while' loops.
    // That's why 'while' is used here.
    let j = 0;
    while(j < width) {
      $('#row' + i).append('<td></td>');
      j++;
    }
  }
}

sizePicker.submit(function(event) {
  event.preventDefault();
  makeGrid();
});

$('#pixel_canvas').on('click','td', function(event) {
  const color = colorPicker.val();
  $(event.currentTarget).css('background', color);
});
