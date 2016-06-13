
$(document).ready(function(){
  $(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
          var pos = $('#p1').position();
          pos.left-=5;
          $('#p1').css('left', pos.left);
        break;

        case 38: // up
          var pos = $('#p1').position();
          pos.top-=5;
          $('#p1').css('top', pos.top);
        break;

        case 39: // right
          var pos = $('#p1').position();
          pos.left+=5;
          $('#p1').css('left', pos.left)
        break;

        case 40: // down
          var pos = $('#p1').position();
          pos.top+=5;
          $('#p1').css('top', pos.top);
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });

  $('.square').click(function(){
    var posi = $(this).position();
    alert(posi.top);
  })
});