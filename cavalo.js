var modal4 = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("cavalinho");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal4.style.display = "block";
  modalImg.src = "img/get.jpg";
}

// Get the <span> element that closes the modal
var span4 = document.getElementById("close4");

// When the user clicks on <span> (x), close the modal
span4.onclick = function() { 
  modal4.style.display = "none";
}