document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a").forEach(link => {
    if (link.textContent.includes("(N/A)")) {
      link.addEventListener("click", e => {
        e.preventDefault(); // stop navigation
        alert("This Pokédex is not yet available!");
      });
    }
  });
});