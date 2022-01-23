$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = 'views/' + $(this).data('include') + '.html?v=1'
      $(this).load(file)
    })
  })

  $(document).ready(function() {
    function IsMobile() { 
      console.log("aa")
      if( navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i))   {
        console.log("aatrue")
         return true;
      }
      else {
        console.log("aafalse")
         return false;
      }
     }

    console.log(navigator.userAgent)
    if(!IsMobile()) {
      console.log("Is desktop!")
      $('video').attr('autoplay', 'autoplay');
      $('video').removeAttr('controls', 'controls');
      // $('video').removeAttr('autoplay');
     }

  })