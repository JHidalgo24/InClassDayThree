

$(function(){
    // preload audio
    var toast = new Audio('media/toast.wav');


    $('.code').on('click', function(e) {
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();

        let code = $(this).data('code');
        let productName = $(this).data('product');
        $('#product').html(productName);
        $('#code').html(code)

        $('#toast').toast({ autohide: false }).toast('show');

        $(document).keydown(function (e){
            if(e.keyCode === 27){
                $("#closeX").click();
            }
        })
    });
});


