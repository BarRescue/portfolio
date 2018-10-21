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

    const colors = ["#247ba0", "#70c1b3", "#b2dbbf", "#ff1654", "#f3ffbd"];

    const numBalls = 100;
    const balls = [];

    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement("div");
      ball.classList.add("ball");
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
      ball.style.transform = `scale(${Math.random()})`;
      ball.style.width = `${Math.random()}em`;
      ball.style.height = ball.style.width;
      
      balls.push(ball);
      $('.portfolio-items').append(ball);
    }

    // Keyframes
    balls.forEach((el, i, ra) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
      };

      let anim = el.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
          duration: (Math.random() + 1) * 2000, // random duration
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out"
        }
      );
    });
});