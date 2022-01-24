function IsMobile() { 
  return( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) 
}

function SwitchToMobileVersion(){
  $("#game-preview-mobile").show()
  $('#preview-video-pc').hide()
  $('#gif-footsies').show()
  $('#video-footsies').hide()
  $('#gif-combos').show()
  $('#video-combos').hide()
  $('#gif-win').show()
  $('#video-win').hide()

  function delayAsync(ms) {
      return new Promise(p_resolve => setTimeout(p_resolve, ms));
  }

  async function SetGif(path,duration,callback) {
      // console.log(path);
      $('#game-preview-gif').attr('src', path)
      await delayAsync(duration);
      if (callback instanceof Function) {
          callback();
      }
  }

  let amp = 1.5;
  function LoopGifts() {
      return new Promise(async (resolve, reject) => {
          await SetGif('/videos/special-attacks.gif', 7540*amp);
          await SetGif('/videos/footsies.gif', 8000*amp);
          await SetGif('/videos/win-the-match.gif', 6060*amp);
          resolve();
      });
  }
  LoopGifts();
  setInterval(LoopGifts, 21600*amp);
  // $('#game-preview-mobile').show();
  // $("#preview-video-mobile").css('width','100%');
  // let height = $(window).width()*0.5625+'px';
  // $("#preview-video-mobile").css('height',height);
}

$(document).ready(function() {
  let includes = $('[data-include]')
  let count = includes.length;
  $.each(includes, function (i) {
    let file = 'views/' + $(this).data('include') + '.html?v=1'
    $(this).load(file, ()=>{
      if (i+1 === count && IsMobile()) {        
        setTimeout(SwitchToMobileVersion, 100)
      }
    })
    
    
  })


})



$(document).ready(function() {

  

  
  

  // document.addEventListener("DOMContentLoaded", function(){
  //   document.body.addEventListener("touchstart", playVideo);
  //   function playVideo() {
  //       const video = document.getElementById('preview-video-mobile');
  //       if(!video.playing) {
  //         video.play();
  //       }
  //   }
  // });



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