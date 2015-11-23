window.addEventListener("load", function() {
  var change = 1;
  text = document.createElement("h2");
  text.innerHTML = 'Congratulations,<br>you did it!';
  document.getElementById("stick").addEventListener("click", function() {
    if(change>0) {
      document.getElementById("outer").style.marginTop = '60%';
      document.getElementById("outer").insertBefore(text, outer.firstChild);
      document.getElementById("stick").innerHTML = 'OH YEAH, DO IT AGAIN';
      change = 0;
    }
    else {
      document.getElementById("outer").style.marginTop = '70%';
      document.getElementById("outer").removeChild(document.getElementById("outer").firstChild);
      document.getElementById("stick").innerHTML = 'CLICK HERE TO STICK WITH THE FOX';
      change = 1;      
    }
  });
});
