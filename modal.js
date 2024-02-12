function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

var modal = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");
var span = document.getElementById("close");
var span2 = document.getElementById("close2");
var span3 = document.getElementById("close3");

// Fecha o modal 1
span.onclick = function() {
    modal.style.display = "none";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

span3.onclick = function() {
    modal3.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

