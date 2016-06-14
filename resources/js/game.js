var MoveRate = 3;
var keys = {};
var attackx = 0;
var attacky = 0;
setInterval(loop, 20);
  
$(document).keydown(function (e) {
      keys[e.which] = true;
  });
  
$(document).keyup(function (e) {
      delete keys[e.which];
  });
  

function move(){// defines character movement
    var pos = $('#p1').position();
    for (var i in keys){
      if (i == 38){ //up
        if (pos.top - 3 >= 0){
          $('#p1').css('top', pos.top -= MoveRate);
        }
      } 
      if (i == 39){ //right
        if (pos.left - 6 <= $('#main_body').width()){
          $('#p1').css('left', pos.left += MoveRate);
        }
      } 
      if (i == 37){ //left
        if (pos.left - 3  >= 0){
          $('#p1').css('left', pos.left -= MoveRate);
        }
      } 
      if (i == 40){ //down
        if (pos.top + 23 <= $('#main_body').height()){
      $('#p1').css('top', pos.top += MoveRate);
        }
      } 
    }
  };


function shoot() {// defines bullet origin point
    var attackPos = $('#p1').offset();
    for (var i in keys){   
        if (i == 32){ //spacebar
            $('#attack').css('left', attackPos.left +=0);
            $('#attack').css('top', attackPos.top -=15);
            attackx = $('#p1').offset().left;
            attacky = $('#p1').offset().top;
            
        }
       
        }
    };


function updatePositions() {// defines movement of all non character objets (i.e. attacks, npcs, weather)
    $('#attack').css('top', attacky -=5);
};
/*function setPosition(sprite) {
    var e = document.getElementById(sprite.element);
    e.style.left = sprite.x + 'px';
     $('#sprite').css('top', pos.top += MoveRate);
};

function showSprites() {
    setPostition(p1);
};*/

function loop() { // updates game data every 20 ms
        move();
        shoot();
        updatePositions();
        //showSprites();
};