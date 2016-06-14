
  var keys = {};
  setInterval(printKeys, 50);
  $(document).keydown(function (e) {
      keys[e.which] = true;
  });
  $(document).keyup(function (e) {
      delete keys[e.which];
  });
  function printKeys() {
      var html = '';
      for (var i in keys) {
          if (!keys.hasOwnProperty(i)) continue;
          html += '<p>' + i + '</p>';
      }
      move();
      $('#console').html(html);
  }
  function move(){
    var pos = $('#p1').position();
    for (var i in keys){
      if (i == 38){
        $('#p1').css('top', pos.top -= 5);
      } 
      if (i == 39){
        $('#p1').css('left', pos.left += 5);
      } 
      if (i == 37){
        $('#p1').css('left', pos.left -= 5);
      } 
      if (i == 40){
        $('#p1').css('top', pos.top += 5);
      } 
    }
  };

