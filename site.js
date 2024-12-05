function showSection(sectionId) {
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");
}

function toggleMenu() {
  document.querySelector(".sidebar").classList.toggle("active");
}
