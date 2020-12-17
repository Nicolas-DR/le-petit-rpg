


    let togg0 = document.getElementById("togg0");
    let togg1 = document.getElementById("togg1");
    let togg2 = document.getElementById("togg2");
    let togg3 = document.getElementById("togg3");
    let togg4 = document.getElementById("togg4");
    let d0 = document.getElementById("d0");
    let d1 = document.getElementById("d1");
    let d2 = document.getElementById("d2");
    let d3 = document.getElementById("d3");
    let d4 = document.getElementById("d4");
    $(document).ready(function(){
      $(togg0).click(function(){
        if(getComputedStyle(d0).display != "none"){
          $(d0).animate({
            height: 'toggle'
          });
          d1.style.display = "none";
          d2.style.display = "none";
          d3.style.display = "none";
          d4.style.display = "none";
        } else {
          $(d0).animate({
            height: 'toggle'
          });
          d1.style.display = "none";
          d2.style.display = "none";
          d3.style.display = "none";
          d4.style.display = "none";
        }
      });
    });



    let fullscreen1 = document.getElementById("fullscreen1");
    let fullscreen2 = document.getElementById("fullscreen2");
    $(document).ready(function(){
      $(fullscreen1).click(function(){
        if(getComputedStyle(fullscreen1).display != "none"){
          $(fullscreen1).animate({
            height: 'toggle'
          });
          fullscreen2.style.display = "block";

        } else {
          $(fullscreen1).animate({
            height: 'toggle'
          });
          fullscreen2.style.display = "block";
        }
      });
    });
    $(document).ready(function(){
      $(fullscreen2).click(function(){
        if(getComputedStyle(fullscreen2).display != "none"){
          $(fullscreen2).animate({
            height: 'toggle'
          });
          fullscreen1.style.display = "block";
        } else {
          $(fullscreen2).animate({
            height: 'toggle'
          });
          fullscreen1.style.display = "block";
        }
      });
    });


var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}






