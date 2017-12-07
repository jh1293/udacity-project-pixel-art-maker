// Select color input
// Select size input

// Empty canvas
function initGrid() {
  // Initialize canvas
  $('#canvas').empty();
}

// Make grid
function makeGrid() {
  // Fetch data from user input
  let canvasHeight = $('#canvas-height').val();
  let canvasWidth = $('#canvas-width').val();
  let cellSize = $('#cell-size').val();
  let gridStyle = $('#grid-style').val();

  // Pre-calculating tr string
  let trString = '';
  if (canvasHeight > 0) {
    for (let row = 0; row < canvasHeight; row++) {
      trString += '<tr></tr>'
    }
  } else {
      trString = '<tr></tr>'
  }

  // Pre-calculating td string
  let tdString = '';
  if (canvasWidth > 0) {
    for (let col = 0; col < canvasWidth; col++) {
      tdString += '<td></td>'
    }
  } else {
      tdString = '<td></td>'
  }

  // Appending tr string to canvas
  $('#canvas').append(trString);

  // Appending td string to trs
  $('tr').append(tdString);

  // Applying cell size
  if (cellSize >= 10) {
    $('td').css('width', cellSize);
    $('td').css('height', cellSize);
  } else {
    $('td').css('width', 10);
    $('td').css('height', 10);
  }

  // Applying grid style
  switch (gridStyle) {
    case 'dotted':
      $('td').css('border-style', 'dotted');
      break;
    case 'solid':
      $('td').css('border-style', 'solid');
      $('td').css('border-color', '#000000');
      break;
    case 'none':
      $('#canvas').css('border', 'none');
      $('tr').css('border', 'none');
      $('td').css('border', 'none');
      break;
    default:
      $('td').css('border-style', 'dotted');
  }
}

// Hovering and clicking events
function refreshGrid() {
  // Hovering event
  // Highlighting when mouse is hovering, fading out when mouse is leaving
  $('td').hover(
    function() {
      if ($(this).hasClass('filled')) {
        return;
      } else {
        $(this).css('background-color', '#aaaaaa');
      }
  },
    function() {
      if ($(this).hasClass('filled')) {
        return;
      } else {
        $(this).css('background-color', '#ffffff');
      }
  });

  // Clicking event
  // Changing cell color when clicking
  $('td').click(function() {
    // Get color from color picker
    let pickedColor = $('#color-picker').val();
    // Changing color
    $(this).css('background-color', pickedColor);
    // Preventing color changed by hovering event
    $(this).addClass('filled');
  });
}

// Main loop
function gridLoop() {
  initGrid();
  makeGrid();
  refreshGrid();
}

// Button click event, triggering main loop
$('button').click(gridLoop);
