function start() {
  var value = 0;
  for(var i = 1; i <= 10; i++) {
    var radios = document.getElementsByName('q'+i);
   for(var j = 0; j < radios.length; j++) {
     var radio = radios[j];
     if (radio.checked) {
            value+=j;
    }
}

document.getElementById("quiz").innerHTML= "result: "+value;
}
}
