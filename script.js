// ==========================================================================
// ACID BRUTAL PORTFOLIO — INTERACTIVE JAVASCRIPT LOGIC
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  
  // 1. COPY EMAIL TO CLIPBOARD
  const emailTriggers = document.querySelectorAll("#copy-email-btn, #main-contact-btn, .copy-email-trigger");

  const emailToCopy = "tejaspatil1175@gmail.com";

  function handleCopyEmail() {
    navigator.clipboard.writeText(emailToCopy).then(() => {
      if (toast) {
        toast.className = "toast-visible";
        setTimeout(() => {
          toast.className = "toast-hidden";
        }, 2500);
      }
    }).catch(err => {
      console.error("Failed to copy email: ", err);
    });
  }

  emailTriggers.forEach(trigger => {
    trigger.addEventListener("click", handleCopyEmail);
  });

  // Prevent image right-click save and dragging
  const heroImages = document.querySelectorAll(".hero-img");
  heroImages.forEach(img => {
    img.addEventListener("contextmenu", (e) => e.preventDefault());
    img.addEventListener("dragstart", (e) => e.preventDefault());
  });

  // 2. PROJECT FILTER TABS
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filterValue === "all" || category === filterValue) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 3. MOBILE MENU TOGGLE
  const menuToggle = document.getElementById("menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

});
