function getRandomImg() {
  var randomNumber = Math.floor(Math.random() * 5);
  var imgName= "chara/ima_" +    randomNumber +       ".jpg";
  document.getElementById("imageid").src=imgName;
}
