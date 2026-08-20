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

    services_eyebrow: "HİZMETLERİMİZ",

    services_title: "Gümrük ve Dış Ticarette Sunduğumuz Hizmetler",

    services_subtitle:
      "İthalat ve ihracat süreçlerinizin her aşamasında yanınızdayız.",

    service_1_title: "Gümrük Müşavirliği",
    service_1_desc:
      "Beyanname hazırlama, tarife sınıflandırma ve mevzuat uyumluluğu konularında uzman danışmanlık.",

    service_2_title: "İthalat İşlemleri",
    service_2_desc:
      "Gümrük beyannamesinden teslimata kadar ithalat sürecinizi uçtan uca yönetiyoruz.",

    service_3_title: "İhracat İşlemleri",
    service_3_desc:
      "İhracat belgelerinizi hazırlar, gümrük süreçlerinizi hızlandırırız.",

    service_4_title: "Antrepo Hizmetleri",
    service_4_desc:
      "Güvenli depolama ve envanter yönetimi için lisanslı antrepo çözümleri.",

    service_5_title: "Dış Ticaret Danışmanlığı",
    service_5_desc:
      "Pazar araştırmasından teşvik mevzuatına, dış ticaret stratejinizi birlikte kurgularız.",

    service_6_title: "Lojistik Danışmanlık",
    service_6_desc:
      "Taşımacılık planlamasından rota optimizasyonuna kadar lojistik süreç danışmanlığı.",

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

    services_eyebrow: "OUR SERVICES",

    services_title: "Our Customs & Foreign Trade Services",

    services_subtitle:
      "We're with you at every stage of your import and export processes.",

    service_1_title: "Customs Consultancy",
    service_1_desc:
      "Expert guidance on declaration preparation, tariff classification, and regulatory compliance.",

    service_2_title: "Import Operations",
    service_2_desc:
      "We manage your import process end-to-end, from customs declaration to delivery.",

    service_3_title: "Export Operations",
    service_3_desc:
      "We prepare your export documentation and accelerate your customs procedures.",

    service_4_title: "Bonded Warehousing",
    service_4_desc:
      "Licensed bonded warehouse solutions for secure storage and inventory management.",

    service_5_title: "Foreign Trade Consulting",
    service_5_desc:
      "From market research to incentive regulations, we help shape your foreign trade strategy.",

    service_6_title: "Logistics Consulting",
    service_6_desc:
      "Logistics process consulting, from transportation planning to route optimization.",

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

      if (window.innerWidth > 1024) {
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
