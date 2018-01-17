/* eslint-disable */
var audioControl = document.getElementsByTagName('audio')[0];

$('.muted').click(function () {
    audioControl.muted = !audioControl.muted;
    return false;
});

//VOLUME BAR
//volume bar event
var volumeDrag = false;
$('.volume,.volumeBar').on('mousedown', function (e) { //onTouchStart
    volumeDrag = true;
    audioControl.muted = false;
    $('.sound').removeClass('muted');
    updateVolume(e.pageX);
});
$(document).on('mouseup', function (e) { //touchend
    if (volumeDrag) {
        volumeDrag = false;
        updateVolume(e.pageX);
    }
});
$(document).on('mousemove', function (e) { //touchmove
    if (volumeDrag) {
        updateVolume(e.pageX);
    }
});
var updateVolume = function (x, vol) {
    var volume = $('.volume');
    var percentage;
    //if only volume have specificed
    //then direct update volume
    if (vol) {
        percentage = vol * 100;
    } else {
        var position = x - volume.offset().left;
        percentage = 100 * position / volume.width();
    }

    if (percentage > 100) {
        percentage = 100;
    }
    if (percentage < 0) {
        percentage = 0;
    }

    //update volume bar and video volume
    $('.volume').css('clip', 'rect(0px, '+percentage+'px, 50px, 0px)')
    //$('.volume').css('width', percentage + '%');
    audioControl.volume = percentage / 100;
    
    console.log(percentage);

    //change sound icon based on volume
    if (audioControl.volume == 0) {
        $('.sound').removeClass('sound2').addClass('muted');
    } else if (audioControl.volume > 0.5) {
        $('.sound').removeClass('muted').addClass('sound2');
    } else {
        $('.sound').removeClass('muted').removeClass('sound2');
    }

};