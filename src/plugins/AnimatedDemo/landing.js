import ScrollReveal from './scrollreveal.js'
import Typed from './typed.js'

import './wow.js'
import './sweetalert2.js'

var isIE = !!document.documentMode, isEdge = !isIE && !!window.StyleMedia;
isIE && $("body").addClass("is-ie"), isEdge && $("body").addClass("is-edge"), $(window).on('load',function() {
  function t() {
      for (var i = 0; i < n.length; i++) $(n[i]).find(".field-content").empty(), $(n[i]).find(".placeholder-content").show();
      ++e > n.length && (e = 1);
      var s = $(n[e - 1]);
      s.addClass("is-on"), s.is(".has-run") || s.is(".is-running") || setTimeout(function() {
          new Typed("#field-card-" + e, {
              stringsElement: "#field-card-strings-" + e,
              typeSpeed: 50,
              startDelay: 1e3,
              onBegin: function(t) {
                  s.addClass("is-running"), $(t.stringsElement).siblings(".placeholder-content").hide(), $(t.stringsElement).closest(".pcard-form-field").addClass("is-active")
              },
              onComplete: function(n) {
                  $(n.stringsElement).siblings(".typed-cursor").remove(), $(n.stringsElement).closest(".pcard-form-field").removeClass("is-active");
                  new Typed("#field-exp-" + e, {
                      stringsElement: "#field-exp-strings-" + e,
                      typeSpeed: 100,
                      startDelay: 500,
                      onBegin: function(t) {
                          $(t.stringsElement).siblings(".placeholder-content").hide(), $(t.stringsElement).closest(".pcard-form-field").addClass("is-active")
                      },
                      onComplete: function(n) {
                          $(n.stringsElement).siblings(".typed-cursor").remove(), $(n.stringsElement).closest(".pcard-form-field").removeClass("is-active");
                          new Typed("#field-cvc-" + e, {
                              stringsElement: "#field-cvc-strings-" + e,
                              typeSpeed: 100,
                              startDelay: 700,
                              onBegin: function(t) {
                                  $(t.stringsElement).siblings(".placeholder-content").hide(), $(t.stringsElement).closest(".pcard-form-field").addClass("is-active")
                              },
                              onComplete: function(e) {
                                  s.removeClass("is-running").addClass("has-run"), setTimeout(function() {
                                      $(e.stringsElement).siblings(".typed-cursor").remove(), $(e.stringsElement).closest(".pcard-form-field").removeClass("is-active"), isIE || (s.addClass("is-submitting"), setTimeout(function() {
                                          $(e.stringsElement).siblings(".typed-cursor").remove(), s.removeClass("is-submitting").addClass("has-submitted"), setTimeout(function() {
                                              s.addClass("fade-out"), s.closest("#hero").addClass("fading-out"), setTimeout(function() {
                                                  s.removeClass("is-on fade-out has-run has-submitted"), s.closest("#hero").removeClass("fading-out"), t()
                                              }, 650)
                                          }, 3e3)
                                      }, 1500))
                                  }, 500)
                              }
                          })
                      }
                  })
              }
          })
      }, 1e3)
  }

  $("body").addClass("is-fully-loaded");

  window.sr = new ScrollReveal();

  if ($(".left-reveal").length) {
    sr.reveal(".left-reveal", {
      duration: 800,
      mobile: !1,
      viewFactor: .5,
      distance: "120px",
      origin: "left",
      scale: 1
    });
  }

  if ($(".right-reveal").length) {
    sr.reveal(".right-reveal", {
      duration: 800,
      mobile: !1,
      viewFactor: .5,
      distance: "120px",
      origin: "right",
      scale: 1
    });
  }

  if ($(".bottom-reveal").length) {
    sr.reveal(".bottom-reveal", {
      duration: 800,
      mobile: !1,
      viewFactor: .5,
      distance: "120px",
      origin: "bottom",
      scale: 1
    });
  }

  if ($(".pcard").length) {
    var e = 0, n = $(".pcard"); t();
  }
});

$(function() {
  $(".form-material input, .form-material textarea").each(function() {
    if ($(this).val() != "") {
      $(this).addClass('filled');
      $(this).parents('.form-group').addClass('focused');
    }
  });

  $(".form-material input, .form-material textarea").focus(function(){
    $(this).parents('.form-group').addClass('focused');
  });

  $(".form-material input, .form-material textarea").blur(function(){
    var inputValue = $(this).val();
    if (inputValue == "") {
      $(this).removeClass('filled');
      $(this).parents('.form-group').removeClass('focused');
    } else {
      $(this).addClass('filled');
    }
  });
});
