document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("mobileToggle");
  const drawer = document.getElementById("mobileDrawer");

  if (toggle && drawer) {
    toggle.addEventListener("click", () => {
      drawer.classList.toggle("open");
    });
  }
});
