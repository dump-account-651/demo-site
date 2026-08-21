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

    hero_title:
      "Gümrük İşlemlerinizde Güvenilir Çözüm Ortağınız",

    hero_subtitle:
      "İthalat ve ihracat süreçlerinizi hızlı, şeffaf ve sorunsuz şekilde yönetiyoruz.",

    hero_cta: "Teklif Alın",

    hero_caption: "",

    services_eyebrow: "HİZMETLERİMİZ",

    services_title:
      "Gümrük ve Dış Ticarette Sunduğumuz Hizmetler",

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

    service_6_title: "Lojistik Danışmanlık",
    service_6_desc:
      "Taşımacılık planlamasından rota optimizasyonuna kadar lojistik süreç danışmanlığı.",

    about_eyebrow: "HAKKIMIZDA",

    about_title:
      "Yılların Verdiği Deneyimle Yanınızdayız",

    about_text:
      "2005 yılında gümrük sektöründe başlayan yolculuğumuz, yıllar içerisinde edindiğimiz bilgi, deneyim ve güçlü iş ortaklıklarıyla devam etmektedir. Gümrük müşavirliği ve dış ticaret süreçlerinde müşterilerimize hızlı, güvenilir ve çözüm odaklı hizmet sunmayı hedefliyoruz.",

    about_highlight_2: "Mevzuata Tam Uyum",
    about_highlight_3: "7/24 Operasyonel Destek",
    about_highlight_4: "Global Lojistik Ağı",

    contact_eyebrow: "İLETİŞİM",

    contact_title:
      "Bizimle İletişime Geçin",

    contact_subtitle:
      "Sorularınız için bize ulaşın, size en kısa sürede dönüş yapalım.",

    contact_address_label: "Adres",

    contact_address_value:
      "Alsancak Mahallesi 1472 Sokak Osmanbey Apartmanı No:44 K:2 D:4 Konak, İzmir",

    contact_phone_label: "Telefon",

    // | karakteri telefonlar arasında ayraç olarak kullanılıyor
    contact_phone_value:
      "Emrah GÜLTEKİN: +90 (535) 215 68 40|Muhammet YANAR: +90 (538) 095 80 31|Eren ALKAN: +90 (532) 402 29 36",

    contact_email_label: "E-posta",

    contact_email_value:
      "info@sigmagumruk.com",

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

    hero_caption: "",

    services_eyebrow: "OUR SERVICES",

    services_title:
      "Our Customs & Foreign Trade Services",

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

    service_6_title: "Logistics Consulting",

    service_6_desc:
      "Logistics process consulting, from transportation planning to route optimization.",

    about_eyebrow: "ABOUT US",

    about_title:
      "By Your Side With Years of Experience",

    about_text:
      "Our journey began in the customs sector in 2005 and has continued over the years with the knowledge, experience, and strong partnerships we have gained. We aim to provide our clients with fast, reliable, and solution-oriented services in customs consultancy and foreign trade processes.",

    about_highlight_2:
      "Full Regulatory Compliance",

    about_highlight_3:
      "24/7 Operational Support",

    about_highlight_4:
      "Global Logistics Network",

    contact_eyebrow: "CONTACT",

    contact_title:
      "Get in Touch",

    contact_subtitle:
      "Reach out with your questions — we'll get back to you as soon as possible.",

    contact_address_label: "Address",

    contact_address_value:
      "Alsancak Mahallesi 1472 Sokak Osmanbey Apartmanı No:44 K:2 D:4 Konak, İzmir",

    contact_phone_label: "Phone",

    contact_phone_value:
      "Emrah GÜLTEKİN: +90 (535) 215 68 40|Muhammet YANAR: +90 (538) 095 80 31|Eren ALKAN: +90 (532) 402 29 36",

    contact_email_label: "Email",

    contact_email_value:
      "info@sigmagumruk.com",

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

          // =================================================
          // PHONE NUMBERS
          // =================================================
          // Each phone number is separated by "|"
          // and displayed on its own line.

          if (key === "contact_phone_value") {

            el.innerHTML = dict[key]
              .split("|")
              .map(
                (phone) =>
                  `<span>${phone}</span>`
              )
              .join("");

          }

          // =================================================
          // NORMAL TRANSLATIONS
          // =================================================

          else {

            el.textContent =
              dict[key];

          }

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
  // SCROLL REVEAL
  // =======================================================

  const revealEls =
    document.querySelectorAll(".reveal");

  if (
    revealEls.length &&
    "IntersectionObserver" in window
  ) {

    const revealObserver =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "in-view"
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.15,
          rootMargin:
            "0px 0px -40px 0px"
        }
      );

    revealEls.forEach((el) => {

      revealObserver.observe(el);

    });

  }

  else {

    revealEls.forEach((el) => {

      el.classList.add("in-view");

    });

  }


  // =======================================================
  // MOBILE MENU
  // =======================================================

  navMenuToggle.addEventListener(
    "click",
    (event) => {

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

    navIsland.classList.remove(
      "menu-open"
    );

  }

});
