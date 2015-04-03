$(document).ready(function() {

  // fancybox
  /* This is basic - uses default settings */
  $("a.fb").fancybox();
  $("a#single_image").fancybox();
  $("a#inline").fancybox({
    'zoomSpeedIn':    300,
    'zoomSpeedOut':   300,
    'hideOnContentClick': true
  });
  /* Using custom settings */
  $("a.group").fancybox({
    'zoomSpeedIn':    300,
    'zoomSpeedOut':   300,
    'overlayShow':    true
  });
  $("a.iframe").fancybox({
    'width': '75%',
    'height': '75%',
    'autoScale': true,
    'transitionIn': 'fade',
    'transitionOut': 'fade',
    'type': 'iframe',
    'hideOnContentClick': false
  });

  /* generic toggle for next element */
  $(".toggle").click(function () {
    $(this).parent().next('div.toggle-content').slideToggle();
    $(this).hide();
  });
  $(".togglenormal").click(function () {
    $(this).parent().next('div.toggle-content').slideToggle();
  });

  // generic select content
  $("textarea.selectall").click(function() {
   $(this).select();
  });

  // filters used on conferences page
  //$('#filterlist .frow').addClass('hidden');
  //$('#filterlist .frow.ux').removeClass('hidden');
  $('ul#filter a').click(function() {
    $(this).css('outline','none');
    $('ul#filter .current').removeClass('current');
    $(this).parent().addClass('current');

    var filterVal = $(this).text().toLowerCase().replace(' ','-');

    if(filterVal === 'all') {
      $('#filterlist .frow.hidden').removeClass('hidden');
    } else {
      $('#filterlist .frow').each(function() {
        if(!$(this).hasClass(filterVal)) {
          $(this).addClass('hidden');
        } else {
          $(this).removeClass('hidden');
        }
      });
    }
    return false;
  });

  /* konami */
  (function() {
  $.fn.extend({
    showMe: $.fn.addClass
    });
    var a = 0;
    var kkeys = '';
    var konami = '38,38,40,40,37,39,37,39,66,65';
    $(window).keydown(function(e) {
    kkeys += ',' + e.keyCode;
    if(kkeys.indexOf(konami)>=0 && a<=1) {
    a += 1;
    // DO KONAMI THING
    if(a===1) {
      $('#body').showMe('unicorns');
      $('body').showMe('unibg');
      kkeys = '';
    }
    else {
      $('#body').showMe('evil');
    }
    }
    });
  })();

});
