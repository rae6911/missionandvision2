const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
function openPopup() {
      document.getElementById("popup").style.display = "block";
    }

    function closePopup() {
      document.getElementById("popup").style.display = "none";
    }
function toggleSearch() {
  const searchContainer = document.querySelector(".search-container");
  searchContainer.classList.toggle("active");

  const input = searchContainer.querySelector(".search-input");
  if (searchContainer.classList.contains("active")) {
    input.focus();
  } else {
    input.blur();
  }
}

document.querySelectorAll(".dropdown > a").forEach((dropdownLink) => {
  dropdownLink.addEventListener("click", (e) => {
    e.preventDefault();
    const parent = dropdownLink.parentElement;
    parent.classList.toggle("active");
  });
});

