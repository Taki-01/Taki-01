$(function() {
    var showFlag = false;
    var topBtn = $('#toppage');    
    topBtn.css('bottom', '-300px');
    var showFlag = false;
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({'bottom' : '20px'}, 200); 
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({'bottom' : '-300px'}, 200); 
            }
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

  $(function() {
    $(".menu_button").on("click", function() {
      if ($(this).hasClass(".nav show")) {
        $(this).removeClass(".nav show");
        $(".nav").removeClass("show");
        $(this).addClass(".menu_button close");
      } else {
        $(this).addClass(".nav show");
        $(".nav").addClass("show");
        $(this).removeClass(".menu_button close");
      }
    });

    $(".nav li").on("click", function() {
      $(".nav").removeClass("show");
      $(".menu_button").removeClass("show");
    });
  });

  $(function() {
    $(window).scroll(function() {
      $('.fadein').each(function() {
        var targetElement = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight + 200) {
          $(this).css('opacity', '1');
          $(this).css('transform', 'translateY(0)');
        }
      });
    });
  });


      $(document).ready(function() {

        $('.skillbar').skillBars({
          from: 0,
          speed: 4000,
          interval: 100,
          decimals: 0,
        });

      });
