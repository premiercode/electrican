/* Ampwell Electric (Sample) | Option B
   Gentle reveal, urgent toggle and a preview-only form. No network calls. */
(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Quiet fade-up as sections enter. Content is visible without JS;
     the hiding class is only added when we can reveal it again. */
  var revealables = document.querySelectorAll("[data-reveal]");
  if (!reduceMotion && "IntersectionObserver" in window && revealables.length) {
    root.classList.add("js-reveal");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    // Small stagger for items that share a parent list.
    revealables.forEach(function (el) {
      var parent = el.parentElement;
      if (parent && parent.matches("ul, ol")) {
        var index = Array.prototype.indexOf.call(parent.children, el);
        el.style.transitionDelay = Math.min(index, 5) * 70 + "ms";
      }
      io.observe(el);
    });

    // Safety net: never leave content hidden (e.g. print, odd viewports).
    window.addEventListener("beforeprint", function () {
      revealables.forEach(function (el) { el.classList.add("is-in"); });
    });
  }

  /* "Is this urgent?" toggle shows the 911 / 24/7 note. */
  var urgent = document.getElementById("f-urgent");
  var urgentNote = document.getElementById("urgent-note");
  if (urgent && urgentNote) {
    var sync = function () { urgentNote.classList.toggle("is-visible", urgent.checked); };
    urgent.addEventListener("change", sync);
    sync();
  }

  /* Preview-only form: nothing is sent anywhere. */
  var form = document.getElementById("booking-form");
  var status = document.getElementById("form-status");
  if (form && status) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      // At launch: run grecaptcha.execute(SITE_KEY, {action: "book"}) and check the
      // honeypot (name="website") on the server before accepting the request.
      status.textContent = "";
      window.setTimeout(function () {
        status.textContent = "Preview only. Nothing was sent.";
      }, 60);
    });
  }
})();
