
window.addEventListener("load", function(event) {
  var dropdown = document.getElementsByClassName("menu");
  var i;
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
      var otherMenu = document.getElementsByClassName("menu");
      for (i = 0; i < otherMenu.length; i++) {
        var otherContent = otherMenu[i].nextElementSibling;
        if(otherContent != dropdownContent && dropdownContent.style.display === "block") {
          otherContent.style.display = "none"; 
        }
      }
    });
  }
});