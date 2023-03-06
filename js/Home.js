$(document).ready(function () {

  counter_1 = counter_2 = counter_3 = counter_course_accordion = 1
  index = ''
  $.ajaxSetup({ async: false }); // to stop async
  console.log("ready!");
  $(".navbar-toggler").on("click", function () {
    $(".navbar-collapse").toggle();
  });

  // $('.accordion-collapse').hide()

  $('.dropdown-toggle').on('click', function () {
    $('.dropdown-menu').toggle();
  })

  $('#heading_One').on('click', function () {
    $('#collapse_Two').removeClass('show in')
    $('#collapse_Three').removeClass('show in')
    $('#heading_Two button').addClass('collapsed')
    $('#heading_Three button').addClass('collapsed')
    $('#heading_Two button').attr('aria-expanded', 'false')
    $('#heading_Three button').attr('aria-expanded', 'false')
    $('#heading_One button').attr('aria-expanded', 'true')
    if ($('#collapse_One').hasClass('show')) {
      $('#collapse_One').removeClass('show')
      $('#heading_One button').attr('aria-expanded', 'false')
      $('#heading_One button').addClass('collapsed')
    }
    else {
      $('#collapse_One').addClass('show')
      $('#heading_One button').removeClass('collapsed')
    }
  })
  $('#heading_Two').on('click', function () {
    $('#collapse_One').removeClass('show in')
    $('#collapse_Three').removeClass('show in')
    $('#heading_One button').addClass('collapsed')
    $('#heading_Three button').addClass('collapsed')
    $('#heading_One button').attr('aria-expanded', 'false')
    $('#heading_Three button').attr('aria-expanded', 'false')
    $('#heading_Two button').attr('aria-expanded', 'true')
    if ($('#collapse_Two').hasClass('show')) {
      $('#collapse_Two').removeClass('show')
      $('#heading_Two button').attr('aria-expanded', 'false')
      $('#heading_Two button').addClass('collapsed')
    }
    else {
      $('#collapse_Two').addClass('show')
      $('#heading_Two button').removeClass('collapsed')
    }
  })
  $('#heading_Three').on('click', function () {
    $('#collapse_Two').removeClass('show in')
    $('#collapse_One').removeClass('show in')
    $('#heading_Two button').addClass('collapsed')
    $('#heading_One button').addClass('collapsed')
    $('#heading_Two button').attr('aria-expanded', 'false')
    $('#heading_One button').attr('aria-expanded', 'false')
    $('#heading_Three button').attr('aria-expanded', 'true')
    if ($('#collapse_Three').hasClass('show')) {
      $('#collapse_Three').removeClass('show')
      $('#heading_Three button').attr('aria-expanded', 'false')
      $('#heading_Three button').addClass('collapsed')
    }
    else {
      $('#collapse_Three').addClass('show')
      $('#heading_Three button').removeClass('collapsed')
    }
  })

  $('.course-accordion').on('click', function () {
    temp = $('.course-accordion').index(this)
    counter_course_accordion += 1
    console.log(temp)
    if (counter_course_accordion % 2 == 0 && counter_course_accordion <= 2) {
      $(this).addClass('active')
      $(this).next().css('max-height', 'fit-content')
    }
    else if (counter_course_accordion > 2) {
      if (temp == index) {
        if ($(this).hasClass('active')) {
          $('.course-accordion').removeClass('active')
          $('.course-panel').css('max-height', '0px')
        }
        else if (!$(this).hasClass('active')) {
          $(this).addClass('active')
          $(this).next().css('max-height', 'fit-content')
        }
      }
      else if (temp != index) {
        $('.course-accordion').removeClass('active')
        $('.course-panel').css('max-height', '0px')
        $(this).addClass('active')
        $(this).next().css('max-height', 'fit-content')
      }
    }
    index = temp
  })

  // const scrollContainer = document.querySelector("main");

  // scrollContainer.addEventListener("wheel", (evt) => {
  //   evt.preventDefault();
  //   scrollContainer.scrollLeft += evt.deltaY;
  // });

  // scroll_counter = 0;
  // lastScrollTop = 0;

  // var wrap = $("main");

  // $(window).bind('mousewheel', function (event) {
  //   if (event.originalEvent.wheelDelta >= 0) {
  //     scroll_counter = 0
  //     console.log('Scroll up - MOVING LEFT');
  //     if ($('#business-studio').scrollLeft < 1000 && $('#business-studio').scrollLeft > 0) {
  //       console.log(scroll_counter);
  //       $($('#business-studio')).scrollLeft(1000)
  //       if (scroll_counter > 15) {
  //         $($('#business-studio')).scrollLeft(0)
  //       }
  //     } else if ($('#business-studio').scrollLeft < 2000 && $('#business-studio').scrollLeft > 1000) {
  //       console.log(scroll_counter);
  //       $($('#business-studio')).scrollLeft(2000)
  //       if (scroll_counter > 10) {
  //         $($('#business-studio')).scrollLeft(1000)
  //       }
  //     } else if ($('#business-studio').scrollLeft < 3000 && $('#business-studio').scrollLeft > 2000) {
  //       console.log(scroll_counter);
  //       $($('#business-studio')).scrollLeft(3000)
  //       if (scroll_counter > 5) {
  //         $($('#business-studio')).scrollLeft(2000)
  //       }
  //     }
  //   }
  // });


  // wrap.on("scroll", function (e) {
  //   // scroll_counter += 1;
  //   // if (this.scrollLeft < 1000 && this.scrollLeft > 0) {
  //   //   console.log(scroll_counter);
  //   //   $(this).scrollLeft(0)
  //   //   if (scroll_counter > 5) {
  //   //     $(this).scrollLeft(1000)
  //   //   }
  //   // } else if (this.scrollLeft < 2000 && this.scrollLeft > 1000) {
  //   //   console.log(scroll_counter);
  //   //   $(this).scrollLeft(1000)
  //   //   if (scroll_counter > 10) {
  //   //     $(this).scrollLeft(2000)
  //   //   }
  //   // } else if (this.scrollLeft < 3000 && this.scrollLeft > 2000) {
  //   //   console.log(scroll_counter);
  //   //   $(this).scrollLeft(2000)
  //   //   if (scroll_counter > 15) {
  //   //     $(this).scrollLeft(3000)
  //   //   }
  //   // }
  // });

  // $(window).scroll(function (event) {
  //   horizontal_scroll_1_start = $(".mySwiper").offset().top == $(window).scrollTop()
  //   // horizontal_scroll_2_start = $("#slide_9").offset().top == $(window).scrollTop()
  //   console.log("horizontal_scroll_2_start", horizontal_scroll_1_start)
  //   // if ($(window).width() < 413) {
  //   //   if (horizontal_scroll_1_start == true) {
  //   //     $('body').css('overflow-x', 'visible !important')
  //   //   }
  //   // }
  //   // else if ($(window).width() > 413) {
  //   //   $('body').css('overflow-x', 'clip')
  //   // }
  // });



  $(window).resize(function () {
    if ($(window).width() < 1200) {
      $("#Rocket_container")
        .removeClass("container")
        .addClass("container-fluid");
    }
    if ($(window).width() > 1200) {
      $("#Rocket_container")
        .removeClass("container-fluid")
        .addClass("container");
    }
    if ($(window).width() < 413) {
      $("#For_Mobile_View_image-item").removeClass("justify-content-center");
      $('body').css('overflow-x', 'clip')
      mobile_scene.addTo(mobile_controller)
      mobile_scene_1.addTo(mobile_controller_1)
      mobile_scene_2.addTo(mobile_controller_2)
      scene.destroy()
      scene_1.destroy()
      scene_2.destroy()
    }
    if ($(window).width() > 413) {
      $("#For_Mobile_View_image-item").addClass("justify-content-center");
      $('body').css('overflow-x', 'clip')
      scene.addTo(controller)
      scene_1.addTo(controller_1)
      scene_2.addTo(controller_2)
      mobile_scene.destroy()
      mobile_scene_1.destroy()
      mobile_scene_2.destroy()
    }
  });

  if ($(window).width() < 1200) {
    $("#Rocket_container").removeClass("container").addClass("container-fluid");
  }
  if ($(window).width() > 1200) {
    $("#Rocket_container").removeClass("container-fluid").addClass("container");
  }
  if ($(window).width() < 413) {
    $("#For_Mobile_View_image-item").removeClass("justify-content-center");
    $('body').css('overflow-x', 'clip')
    mobile_scene.addTo(mobile_controller)
    mobile_scene_1.addTo(mobile_controller_1)
    mobile_scene_2.addTo(mobile_controller_2)
    scene.destroy()
    scene_1.destroy()
    scene_2.destroy()
  }
  if ($(window).width() > 413) {
    $("#For_Mobile_View_image-item").addClass("justify-content-center");
    $('body').css('overflow-x', 'clip')
    scene.addTo(controller)
    scene_1.addTo(controller_1)
    scene_2.addTo(controller_2)
    mobile_scene.destroy()
    mobile_scene_1.destroy()
    mobile_scene_2.destroy()
  }
});
