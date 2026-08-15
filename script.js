// ==========================================================================
// ACID BRUTAL PORTFOLIO — INTERACTIVE JAVASCRIPT LOGIC
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  
  // 1. COPY EMAIL TO CLIPBOARD
  const copyEmailBtn = document.getElementById("copy-email-btn");
  const mainContactBtn = document.getElementById("main-contact-btn");
  const toast = document.getElementById("toast-notify");

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

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", handleCopyEmail);
  }

  if (mainContactBtn) {
    mainContactBtn.addEventListener("click", handleCopyEmail);
  }

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
