 function getRandomImg() {
   var randomNumber = Math.floor(Math.random() * 6);
   var imgName= "Memes/img_" +    randomNumber +       ".jpg";
   document.getElementById("imageid").src=imgName;
}
