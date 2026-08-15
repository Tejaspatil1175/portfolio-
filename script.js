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

  // 4. SCROLL SPY FOR DESKTOP OVAL NAVBAR
  const ovalNavItems = document.querySelectorAll(".nav-oval-item[href]");
  const sections = document.querySelectorAll("section[id]");

  function updateScrollSpy() {
    let currentSectionId = "hero";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        currentSectionId = section.getAttribute("id");
      }
    });

    ovalNavItems.forEach(item => {
      const itemHref = item.getAttribute("href");
      if (itemHref === `#${currentSectionId}`) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  // 5. CLICK TOGGLE FOR DESKTOP OVAL NAVBAR
  const ovalNavToggle = document.getElementById("oval-nav-toggle");
  const desktopOvalNavbar = document.getElementById("desktop-oval-navbar");

  if (ovalNavToggle && desktopOvalNavbar) {
    ovalNavToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      desktopOvalNavbar.classList.toggle("expanded");
    });
  }

  // 6. DYNAMIC HERO MICRO PIXEL GRID GENERATOR (5X SMALLER DENSE MICRO DOTS GRID)
  const pixelGridContainer = document.getElementById("hero-pixel-grid");
  if (pixelGridContainer) {
    const totalCells = 2500;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < totalCells; i++) {
      const cell = document.createElement("div");
      cell.className = "pixel-cell";
      cell.addEventListener("mouseenter", () => {
        cell.classList.add("active");
        setTimeout(() => {
          cell.classList.remove("active");
        }, 500);
      });
      fragment.appendChild(cell);
    }
    pixelGridContainer.appendChild(fragment);
  }

});
