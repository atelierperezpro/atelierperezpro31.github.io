// Spinner de chargement
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});

// Toggle des détails
function toggleDetails(element) {
  const detail = element.querySelector(".details");
  const isVisible = detail.style.display === "block";

  // Fermer tous les autres
  document.querySelectorAll(".details").forEach(d => d.style.display = "none");

  if (!isVisible) {
    detail.style.display = "block";
  }
}
