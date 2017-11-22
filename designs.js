// Select color input
const colorPicker = $('#colorPicker');

// Select size input
const sizePicker = $('#sizePicker');

// When size is submitted by the user, call makeGrid()


sizePicker.submit(function(event) {
  $('#pixel_canvas').empty();
  event.preventDefault();
  const height = $('#input_height').val();
  const width = $('#input_width').val();

  for(let i = 0; i < height; i++) {
    $('#pixel_canvas').append('<tr class="row' + i + '"></tr>');

    let j = 0;
    while(j < width) {
      $('.row' + i).append('<td></td>');
      j++;
    }
  }
});

$('#pixel_canvas').on('click','td', (event) => {
  const color = colorPicker.val();
  $(event.currentTarget).css('background', color);
});


// Your code goes here!


