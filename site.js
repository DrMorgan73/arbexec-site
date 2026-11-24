/* ARBEXEC public site — EN/ES language switch (same pattern as IEC's other
   public sites). English is the text in the HTML; Spanish lives in the
   dictionaries below (shared) and in each page's PAGE_I18N. A missing
   Spanish key falls back to the English in the page — never blank. */
(function () {
  var SHARED = {
    es: {
      "skip": "Saltar al contenido",
      "strip": "<strong>En piloto.</strong> ARBEXEC está incorporando ahora a un número reducido de organizaciones proveedoras.",
      "nav.workflow": "Flujo de trabajo",
      "nav.capture": "Captura",
      "nav.signin": "Iniciar sesión",
      "nav.why": "Por qué ARBEXEC",
      "nav.pilot": "Piloto",
      "nav.rules": "El reglamento",
      "nav.providers": "Para proveedores",
      "nav.demo": "Demostración",
      "nav.contact": "Contacto",
      "footer.tag": "ARBEXEC prepara casos federales de IDR bajo la Ley Sin Sorpresas (No Surprises Act). La presentación la realiza una entidad IDR certificada.",
      "footer.rights": "© 2026 International Empire Consultants, Inc. ARBEXEC es un producto de IEC, Inc.",
      "footer.home": "Inicio",
      "cta.demo": "Solicitar una demostración",
      "cta.workflow": "Ver el flujo de trabajo"
    }
  };

  function dict(lang) {
    var d = {};
    var shared = SHARED[lang] || {};
    var page = (window.PAGE_I18N && window.PAGE_I18N[lang]) || {};
    for (var k in shared) d[k] = shared[k];
    for (var k2 in page) d[k2] = page[k2];
    return d;
  }

  function setLang(lang) {
    var d = dict(lang);
    document.documentElement.lang = lang === "es" ? "es" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (lang === "en") {
        if (el.dataset.enHtml !== undefined) el.innerHTML = el.dataset.enHtml;
      } else if (d[key] !== undefined) {
        if (el.dataset.enHtml === undefined) el.dataset.enHtml = el.innerHTML;
        el.innerHTML = d[key];
      }
    });
    if (d["title"]) document.title = d["title"];
    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false");
    });
    try { localStorage.setItem("arbexec-lang", lang); } catch (e) {}
  }

  document.querySelectorAll(".lang-toggle button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.lang); });
  });

  var saved = "en";
  try { saved = localStorage.getItem("arbexec-lang") || "en"; } catch (e) {}
  if (saved === "es") setLang("es");
})();
