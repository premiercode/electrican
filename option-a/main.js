/* Option A, "High voltage" — preview-only behavior. No network requests. */
(function () {
  "use strict";

  var form = document.getElementById("booking-form");
  if (!form) return;

  var status = document.getElementById("form-status");
  var urgent = document.getElementById("f-urgent");
  var urgentMsg = document.getElementById("urgent-msg");

  // The urgent note is shown by CSS (:has) even without JS. With JS we also
  // toggle `hidden` so browsers without :has get the same behavior.
  if (urgent && urgentMsg) {
    var syncUrgent = function () {
      urgentMsg.hidden = !urgent.checked;
      urgentMsg.style.display = urgent.checked ? "block" : "none";
    };
    urgent.addEventListener("change", syncUrgent);
    syncUrgent();
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Honeypot: a filled "website" field means a bot. Drop silently.
    var trap = form.elements.namedItem("website");
    if (trap && trap.value) return;

    // reCAPTCHA v3 placeholder: at launch, call grecaptcha.execute(SITE_KEY, {action: "book"})
    // here and send the token with the request. This preview sends nothing.

    status.textContent = "";
    window.setTimeout(function () {
      status.textContent = "Preview only. Nothing was sent.";
    }, 50);
  });
})();
