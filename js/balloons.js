$(document).ready(function () {
    randomClass()
    $('#toast').hide()
    $('#checkAll').on('click', function () {
        checkAll()
    })

    $('#blue').hover(function () {
        $('#HappyBirthday').css('color','blue')
    },function () {
        $('#HappyBirthday').css('color','gray')
    })

    $('#green').hover(function () {
        $('#HappyBirthday').css('color','green')
    },
        function () {
        $('#HappyBirthday').css('color','gray')
    })


    $('#red').hover(function () {
        $('#HappyBirthday').css('color','red')
    },function () {
        $('#HappyBirthday').css('color','gray')
    })

})



$(function () {
    $('#birthday').pickadate({format: 'mmmm, d'});
    //uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')


        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInUp') :
            $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');

    });

    //show toast if nothing is checked
    $('#submit').click(function () {
        const cb = document.querySelector('#red, #blue, #green');

        if (cb.checked === false) {
            $('#toast').show()
            $('#toast').toast({autohide: false}).toast('show');
        }
    })
})


function randomClass() {
    let animations = ["animate__animated animate__bounce",
        "animate__animated animate__flash",
        "animate__animated animate__tada",
        "animate__animated animate__swing",
        "animate__animated animate__heartBeat"]

    let value = Math.floor(Math.random() * 5);
    let classAnimation = animations[value]
    console.log(value)
    console.log(classAnimation)

    $('#HappyBirthday').removeClass().addClass(classAnimation)
}

function checkAll() {
    let ballonObjs = ['#red', '#blue', '#green']

    document.getElementById('red').checked = true;
    document.getElementById('blue').checked = true;
    document.getElementById('green').checked = true;

    for (let i = 0; i < 3; i++) {
        $(ballonObjs[i]).is(':checked') ?
            $(ballonObjs[i] + 'Img').removeClass().addClass('animate__animated animate__bounceInUp') :
            $(ballonObjs[i] + 'Img').addClass('animate__animated animate__bounceOutUp');
    }

}