$(function(){

    var nav = $('.stickyNav');
    var logoNav = nav.find('.logoNav');

    function scroll(){
         var windowScrollTop = $(window).scrollTop();

        if(windowScrollTop > 0){
            nav.addClass('sticky');
            logoNav.addClass('logoNavSticky');
        } else {
            nav.removeClass('sticky');
            logoNav.removeClass('logoNavSticky');
        }
    }

    $(window).on('scroll',function(){
     scroll();
    });

    scroll();

    function smartScroll1(){
         var menu = $('.menu');
         var a = menu.find('a');

         a.on('click', function(){
             var href = $(this).attr('href');
             var adres = $(href).offset().top - 77;
             $('html, body').animate({
                scrollTop: adres
               }, 1000);
         })
     }

    smartScroll1();

    function smartScroll2(){
      var headerIcon = $('.headerIcon');
      var linkHeaderIcon = headerIcon.find('a');


        linkHeaderIcon.on('click', function(){
            var href = $(this).attr('href');
            var adres = $(href).offset().top;
            var width = $(window).width();
            if (width > 1023) {
              $('html, body').animate({
                 scrollTop: adres - 77
                }, 1000);
            }  else {
              $('html, body').animate({
                 scrollTop: adres
                }, 1000);
            }
        })
    }

    smartScroll2();

    function smartScroll3(){
      var arrowSign = $('.arrowSign');
      var arrowSignLink = arrowSign.find('a');

        arrowSignLink.on('click', function(){
            var href = $(this).attr('href');
            var adres = $(href).offset().top;
            var width = $(window).width();
            if (width > 1023) {
              $('html, body').animate({
                 scrollTop: adres - 77
                }, 1000);
            }  else {
              $('html, body').animate({
                 scrollTop: adres
                }, 1000);
            }
        })
    }

    smartScroll3();

    function smartScroll4(){
      var menuHamList = $('.menuHamList');
      var menuHamListLinks = menuHamList.find('a');

        menuHamListLinks.on('click', function(){
            var href = $(this).attr('href');
            var adres = $(href).offset().top;
            $('html, body').animate({
               scrollTop: adres
              }, 1000);
        })
    }

    smartScroll4();


    function hideIcon(){
      var aboutFourth = $('.aboutFourth');
      var boxLocalize1 = aboutFourth.find('.boxLocalize1');
      var boxLocalize2 = aboutFourth.find('.boxLocalize2');
      var boxLocalize3 = aboutFourth.find('.boxLocalize3');
      var icon1 = aboutFourth.find('.iconFirst');
      var icon2 = aboutFourth.find('.iconSecond');
      var icon3 = aboutFourth.find('.iconThird');

      var width = $(window).width();
        if (width > 1023) {

          boxLocalize1.on('mouseenter', function(){
            icon1.slideUp(400);
          });

          boxLocalize1.on('mouseleave', function(){
            icon1.slideDown(400);
          });

          boxLocalize2.on('mouseenter', function(){
            icon2.slideUp(400);
          });

          boxLocalize2.on('mouseleave', function(){
            icon2.slideDown(400);
          });

          boxLocalize3.on('mouseenter', function(){
            icon3.slideUp(400);
          });

          boxLocalize3.on('mouseleave', function(){
            icon3.slideDown(400);
          });
        }
    }

    hideIcon();

    $(window).on('resize', function(){
       hideIcon();
   });

   function showHamburgerMenu(){
     var hamburgerOpened = $('.hamburgerOpened');
     var hamburgerButton = $('.hamburgerMenu');

     hamburgerButton.on('click', function(){
       hamburgerOpened.toggleClass('hamburgerOpenedHide');
     });
   }

   showHamburgerMenu();

   function hideHamburgerMenuClick(){
     var a = $('.menuHamList').find('li').find('a');
     var hamburgerOpened = $('.hamburgerOpened');

      a.on('click', function(){
        hamburgerOpened.toggleClass('hamburgerOpenedHide');
      });
   }

   hideHamburgerMenuClick();

   function processButtonsBigRes(){
     var wrapInfoSheetLi = $('.wrapInfoSheet').find('li');
     var buttonsBigRes = $('.processButtSingle')


     buttonsBigRes.on('click', function(){
       var indexButtons = $(this).index('.processButtSingle');
       wrapInfoSheetLi.hide();
       wrapInfoSheetLi.eq(indexButtons).fadeIn();
     })

   }

   processButtonsBigRes();

   function processButtonsSmallerRes(){
     var wrapInfoSheetLi = $('.wrapInfoSheet').find('li');
     var buttonsSmallerRes = $('.processButtSingle2')

     buttonsSmallerRes.on('click', function(){
       var indexButtons = $(this).index('.processButtSingle2');
       console.log(indexButtons);
       wrapInfoSheetLi.hide();
       wrapInfoSheetLi.eq(indexButtons).fadeIn();
     })

   }

   processButtonsSmallerRes();

});
