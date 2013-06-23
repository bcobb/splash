// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require_self

(function($) {
  var worker = new Worker($('[rel="interested-user-worker"]').attr('href'));
  var signal = $('.signal');
  var alertClass = 'alert-box';

  $('form').on('submit', function(event) {
    signal.fadeIn(function() {
      signal.addClass(alertClass);
      signal.html($('#registered_interest').html());

      setTimeout(function() {
        signal.fadeOut(function() {
          signal.removeClass(alertClass);
          signal.html('');
        });
      }, 1500);
    });

    var form = $(this);
    var payload = JSON.stringify({
      data: form.serialize(),
      url: form.attr('action')
    });

    worker.postMessage(payload);

    this.reset();
    event.preventDefault();
  });
})(jQuery);
