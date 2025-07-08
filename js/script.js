window.addEventListener("load", function () {
  console.log("CookieConsent disponibile?", window.cookieconsent);
  if (!window.cookieconsent) {
    console.error("CookieConsent non è definito, controlla il caricamento della libreria.");
    return;
  }

 window.cookieconsent.initialise({
  current_lang: "it",
  autoclear_cookies: true,
  page_scripts: true,
  position: "bottom",      // banner in basso
  theme: "classic",        // tema classico, o "edgeless"
  palette: {
    popup: {
      background: "#FDF9F0",
      text: "#7B3035"
    },
    button: {
      background: "#7B3035",
      text: "#FDF9F0"
    }
  },
  content: {
    message: "Utilizziamo i cookie per migliorare la tua esperienza.",
    dismiss: "Accetta tutto",
    deny: "Rifiuta",
    link: "Leggi di più",
    href: "https://www.example.com/privacy"
  }
});
    
  const form = document.querySelector('#contactModal form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      try {
        const response = await fetch(form.action, {
          method: "POST",
          headers: { 'Accept': 'application/json' },
          body: formData
        });

        if (response.ok) {
          const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
          modal.hide();
          form.reset();
          alert("Messaggio inviato con successo!");
        } else {
          alert("Errore nell'invio. Riprova.");
        }
      } catch (error) {
        alert("Errore di connessione.");
      }
    });
  } else {
    console.warn("Form element not found in #contactModal");
  }
});