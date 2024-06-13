function toggleMenu() {
    var menuItems = document.getElementById("menuItems");
    if (window.innerWidth <= 768) {
      if (menuItems.style.display === "" || menuItems.style.display === "none") {
        menuItems.style.display = "grid";
      } else {
        menuItems.style.display = "none";
      }
    }
  }
 