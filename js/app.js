$(document).ready( function() {

    var bgColorArray = ['#009be1', '#64c200', '#ff1842', '#ffbf00', '#ffd400'],
    selectBG = bgColorArray[Math.floor(Math.random() * bgColorArray.length)];

    $('.preloader').css('background-color', selectBG);

    $('a').click( function(e) {
        e.preventDefault();
        var href = $(this).attr('href');

        $("body").addClass('is_entering');

        $.ajax(
        {
            url: href, 
            success: function(result) {

                setTimeout( function() {
                    history.pushState(null, null, href);
                    $("body").html(result);
                    $("body").removeClass('is_entering');
                    $("body").addClass('is_exiting');

                }, 700);

                setTimeout( function() {
                    $("body").removeClass('is_exiting');
                }, 1400);
                
            }
        });
    });

    window.addEventListener("popstate", function(e) {
        e.preventDefault();
        var url = location.href;
        $("body").addClass('is_entering');

        $.ajax(
        {
            url: url, 
            success: function(result) {
                setTimeout( function() {
                    $("body").html(result);
                    $("body").removeClass('is_entering');
                    $("body").addClass('is_exiting');
                }, 700);

                setTimeout( function() {
                    $("body").removeClass('is_exiting');
                }, 1400);

                $('a').click( function(e) {
                    e.preventDefault();
                    var href = $(this).attr('href');

                    $("body").addClass('is_entering');

                    $.ajax(
                    {
                        url: href, 
                        success: function(result) {

                            setTimeout( function() {
                                history.pushState(null, null, href);
                                $("body").html(result);
                                $("body").removeClass('is_entering');
                                $("body").addClass('is_exiting');
                            }, 700);

                            setTimeout( function() {
                                $("body").removeClass('is_exiting');
                            }, 1400);
                        }
                    });
                });
            }
        });

        $('a').click( function(e) {
            e.preventDefault();
            var href = $(this).attr('href');

            $("body").addClass('is_entering');

            $.ajax(
            {
                url: href, 
                success: function(result) {

                    setTimeout( function() {
                        history.pushState(null, null, href);
                        $("body").html(result);
                        $("body").removeClass('is_entering');
                        $("body").addClass('is_exiting');
                    }, 700);

                    setTimeout( function() {
                        $("body").removeClass('is_exiting');
                    }, 1400);
                }
            });
        });
    });
});