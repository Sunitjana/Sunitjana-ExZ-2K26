
const menuBar = document.getElementById("menuBar");
const menuToggle = document.getElementById("menuToggle");
const menuOverlay = document.getElementById("menuOverlay");
const loginBtn = document.getElementById("loginBtn");


if (menuBar) {
  menuBar.style.display = "flex";
}

function toggleMenu(forceState) {
  if (!menuOverlay || !menuToggle) return;
  
  const isOpen =
    forceState !== undefined
      ? forceState
      : !menuOverlay.classList.contains("show");
  menuOverlay.classList.toggle("show", isOpen);
  menuToggle.classList.toggle("open", isOpen);
  menuOverlay.setAttribute("aria-hidden", !isOpen);
}


if (menuToggle) {
  menuToggle.addEventListener("click", () => toggleMenu());
}

if (menuOverlay) {
  menuOverlay.addEventListener("click", (e) => {
    if (e.target === menuOverlay) {
      toggleMenu(false);
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") toggleMenu(false);
});

if (loginBtn) {
  loginBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    window.location.href = "login.html";
    toggleMenu(false);
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const links = {
    about: "about.html",
    team: "team.html",
    contacts: "contacts.html",
    events: "#",
    glimpses: "glimps.html",
    sponsor: "sponsor.html"
  };

  document.querySelectorAll(".orbit-item").forEach((item) => {
    const text = item.textContent.trim().toLowerCase();
    if (links[text]) {
      item.href = links[text];
    }
  });
});
