function getRandomImage() {
  var randomNumber = Math.floor(Math.random() * 5);
  var imgName= "celebs/image_" + randomNumber +  ".jpg";
  document.getElementById("imageId").src=imgName;
}
