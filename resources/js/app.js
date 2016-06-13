
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
        
        case 13:
          var posi = $('#p1').position();
          cat("andrew");
          alert("" + posi.left + ", " + posi.top);

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });

  $('.square').click(function(){
    var posi = $(this).position();
    alert("" + posi.left + ", " + posi.top);
  });
  /**
  var keys = {};

  $(document).keydown(function (e) {
      keys[e.which] = true;

      move();
  });

  $(document).keyup(function (e) {
      delete keys[e.which];

      move();
  });

  function move() {
      var html = '';
      for (var i in keys) {
        if (!keys.hasOwnProperty(i)) continue;
        var pos = $('#p1').position();
        switch(i) {
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

          case 13:
            var posi = $('#p1').position();
            alert("" + posi.left + ", " + posi.top);

          default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
      }
  }*/
  function cat(name){
    alert(name);
  }
});


/**
Print all keys currently pressed
var keys = {};

$(document).keydown(function (e) {
    keys[e.which] = true;
    
    printKeys();
});

$(document).keyup(function (e) {
    delete keys[e.which];
    
    printKeys();
});

function printKeys() {
    var html = '';
    for (var i in keys) {
        if (!keys.hasOwnProperty(i)) continue;
        html += '<p>' + i + '</p>';
    }
    $('#out').html(html);
}
*/