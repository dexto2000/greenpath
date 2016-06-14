
  var keys = {};
  setInterval(printKeys, 20);
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
      getPos();
      $('#console').html(html);
  }
  function move(){
    var pos = $('#p1').position();
    for (var i in keys){
      if (i == 38 || i == 87){ //up
        if (pos.top - 3 >= 0){
          $('#p1').css('top', pos.top -= 3);
        }
      } 
      if (i == 39 || i == 68){ //right
        if (pos.left - 6 <= $('#main_body').width()){
          $('#p1').css('left', pos.left += 3);
        }
      } 
      if (i == 37 || i == 65){ //left
        if (pos.left - 3  >= 0){
          $('#p1').css('left', pos.left -= 3);
        }
      } 
      if (i == 40 || i == 83){ //down
        if (pos.top + 23 <= $('#main_body').height()){
          $('#p1').css('top', pos.top += 3);
        }
      } 
    }
  };
  function getPos(){
    var pos = $('#p1').position();
        var text = '<p>';
        text += pos.left;
        text += ', ';
        text += pos.top;
        text += '</p>';
    $('#map').html(text);
    $('#map').css('left', $('#main_body').width() - 50);
    $('#map').css('top', 15);
  }

