// =========================================================
// TRANSLATIONS
// =========================================================

const translations = {
  tr: {
    nav_home: "Anasayfa",
    nav_services: "Hizmetler",
    nav_about: "Hakkımızda",
    nav_contact: "İletişim",

    hero_eyebrow: "SIGMA GÜMRÜK",

    hero_title: "Gümrük İşlemlerinizde Güvenilir Çözüm Ortağınız",

    hero_subtitle:
      "İthalat ve ihracat süreçlerinizi hızlı, şeffaf ve sorunsuz şekilde yönetiyoruz.",

    hero_cta: "Teklif Alın",

    hero_caption: "Ayrıntılı Şube ve Temsilcilik Haritası",

    footer_text:
      "© 2026 Sigma Gümrük. Tüm hakları saklıdır.",

    lang_toggle: "EN"
  },

  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_about: "About",
    nav_contact: "Contact",

    hero_eyebrow: "SIGMA CUSTOMS",

    hero_title:
      "Your Trusted Partner in Customs Operations",

    hero_subtitle:
      "We handle your import and export processes quickly, transparently, and seamlessly.",

    hero_cta: "Get a Quote",

    hero_caption: "Detailed Branch & Representative Map",

    footer_text:
      "© 2026 Sigma Gümrük. All rights reserved.",

    lang_toggle: "TR"
  }
};


const STORAGE_KEY = "sigmaLang";


document.addEventListener("DOMContentLoaded", () => {

  // =======================================================
  // ELEMENTS
  // =======================================================

  const loader =
    document.getElementById("loader");

  const loaderBarFill =
    document.getElementById("loaderBarFill");

  const loaderPercent =
    document.getElementById("loaderPercent");

  const langScreen =
    document.getElementById("langScreen");

  const site =
    document.getElementById("site");

  const langToggle =
    document.getElementById("langToggle");

  const langButtons =
    document.querySelectorAll(".lang-btn");

  const navIsland =
    document.getElementById("navIsland");

  const navMenuToggle =
    document.getElementById("navMenuToggle");

  const navDropdown =
    document.getElementById("navDropdown");


  // =======================================================
  // LOADING BAR
  // =======================================================

  let progress = 0;

  const loadingInterval = setInterval(() => {

    progress += Math.random() * 18 + 7;

    if (progress >= 100) {

      progress = 100;

      clearInterval(loadingInterval);

      setTimeout(finishLoading, 300);
    }

    loaderBarFill.style.width =
      `${progress}%`;

    loaderPercent.textContent =
      `${Math.floor(progress)}%`;

  }, 180);


  function finishLoading() {

    loader.classList.add("fade-out");

    setTimeout(() => {

      loader.classList.add("hidden");

      // Check whether the user has already
      // selected a language.

      const savedLang =
        localStorage.getItem(STORAGE_KEY);

      if (
        savedLang &&
        translations[savedLang]
      ) {

        setLanguage(savedLang);

        revealSite();

      } else {

        langScreen.classList.remove("hidden");
      }

    }, 500);
  }


  // =======================================================
  // LANGUAGE SELECTION
  // =======================================================

  langButtons.forEach((btn) => {

    btn.addEventListener("click", () => {

      const lang =
        btn.dataset.lang;

      setLanguage(lang);

      localStorage.setItem(
        STORAGE_KEY,
        lang
      );

      langScreen.classList.add("hidden");

      revealSite();
    });

  });


  // =======================================================
  // LANGUAGE TOGGLE
  // =======================================================

  langToggle.addEventListener("click", () => {

    const current =
      document.documentElement.lang === "tr"
        ? "en"
        : "tr";

    setLanguage(current);

    localStorage.setItem(
      STORAGE_KEY,
      current
    );
  });


  // =======================================================
  // APPLY TRANSLATIONS
  // =======================================================

  function setLanguage(lang) {

    document.documentElement.lang =
      lang;

    const dict =
      translations[lang];

    document
      .querySelectorAll("[data-i18n]")
      .forEach((el) => {

        const key =
          el.dataset.i18n;

        if (dict[key]) {
          el.textContent =
            dict[key];
        }

      });

    langToggle.textContent =
      dict.lang_toggle;
  }


  // =======================================================
  // REVEAL SITE
  // =======================================================

  function revealSite() {

    site.classList.remove("hidden");

    requestAnimationFrame(() => {

      setTimeout(() => {

        navIsland.classList.add(
          "expanded"
        );

      }, 400);

    });
  }


  // =======================================================
  // MOBILE MENU
  // =======================================================

  navMenuToggle.addEventListener(
    "click",
    (event) => {

      // Prevent the document-level
      // outside-click handler from
      // immediately closing the menu.

      event.stopPropagation();

      const isOpen =
        navDropdown.classList.toggle(
          "open"
        );

      navMenuToggle.classList.toggle(
        "active",
        isOpen
      );

      navMenuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      // This class is used by CSS to
      // flatten the bottom corners of
      // the island while the menu is open.

      navIsland.classList.toggle(
        "menu-open",
        isOpen
      );

    }
  );


  // =======================================================
  // CLOSE MENU AFTER CLICKING A LINK
  // =======================================================

  navDropdown
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener(
        "click",
        () => {
          closeMobileMenu();
        }
      );

    });


  // =======================================================
  // CLOSE MENU WHEN CLICKING OUTSIDE
  // =======================================================

  document.addEventListener(
    "click",
    (event) => {

      const clickedInsideIsland =
        navIsland.contains(event.target);

      const clickedInsideDropdown =
        navDropdown.contains(event.target);

      if (
        !clickedInsideIsland &&
        !clickedInsideDropdown
      ) {

        closeMobileMenu();
      }

    }
  );


  // =======================================================
  // CLOSE MENU WHEN SWITCHING TO DESKTOP
  // =======================================================

  window.addEventListener(
    "resize",
    () => {

      if (window.innerWidth > 720) {
        closeMobileMenu();
      }

    }
  );


  // =======================================================
  // CLOSE MOBILE MENU
  // =======================================================

  function closeMobileMenu() {

    navDropdown.classList.remove(
      "open"
    );

    navMenuToggle.classList.remove(
      "active"
    );

    navMenuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    // Restore the island's rounded
    // bottom corners.

    navIsland.classList.remove(
      "menu-open"
    );
  }

});