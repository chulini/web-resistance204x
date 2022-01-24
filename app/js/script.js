$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = 'views/' + $(this).data('include') + '.html?v=1'
    $(this).load(file)
  })

    //   $('#preview-video-mobile').hide();
    // $('#preview-video-pc').hide();

})


function IsMobile() { 
  return( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) 
}

$(document).ready(function() {

  
  setTimeout(() => {
    if(IsMobile()) 
    {
      $("#preview-video-mobile").show()
      $('#preview-video-pc').hide()
      $('#gif-footsies').show()
      $('#video-footsies').hide()
      $('#gif-combos').show()
      $('#video-combos').hide()
      $('#gif-win').show()
      $('#video-win').hide()

    }
    
  }, 100)
  
  

  document.addEventListener("DOMContentLoaded", function(){
    document.body.addEventListener("touchstart", playVideo);
    function playVideo() {
        const video = document.getElementById('preview-video-mobile');
        if(!video.playing) {
          video.play();
        }
    }
  });



  // $('video#video-combos').on('play', () => {
  //   console.log("autoplay works!")
  // })

  // // In browsers that don’t yet support this functionality,
  // // playPromise won’t be defined.
  // if (playPromise !== undefined) {
  //   playPromise.then(function() {
  //     // Automatic playback started!
  //     console.log('automatic playback started')
  //   }).catch(function(error) {
  //     // Automatic playback failed.
  //     // Show a UI element to let the user manually start playback.
  //     console.log('automatic playback FAILED')
  //   });
  // }



})