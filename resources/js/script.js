$(window).on("load", function () {
  $("#status").fadeOut(1000);
  $("#preloader").delay(1100).fadeOut(1000);
});

// carousal
// .owl-carousal -> #team-members //error fixed
$(document).ready(function () {
  $("#team-members").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      // 600: {
      //   items: 3,
      // },
      1000: {
        items: 2,
      },
    },
  });
});

// Progress Bar
$(document).ready(function () {
  $("#progress-elements").waypoint(
    function () {
      // alert("hello");
      $(".progress-bar").each(function () {
        $(this).animate(
          {
            width: $(this).attr("aria-valuenow") + "%",
          },
          3000
        );
      });
      this.destory();
    },
    {
      offset: "bottom-in-view",
    }
  );
});
// Responsive Tab Service Section
$(document).ready(function () {
  $("#services-tab").responsiveTabs({
    animation: "slide",
  });
});
// $("#services-tab").responsiveTabs({
//   startCollapsed: "accordion",
// });

// Portifolio
$(window).on("load", function () {
  // init Isotope
  $(".isotope-container").isotope({
    // options
  });
  // filter items on button click
  $("#isotope-filters").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    // alert(filterValue);
    $(".isotope-container").isotope({ filter: filterValue });

    // Active Button
    $("#isotope-filters").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});

//Magnific-Popup
$(document).ready(function () {
  $("#portfolio-wapper").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    // other options
    gallery: {
      enabled: true,
    },
  });
});

//Testimonial Section
$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      // 600: {
      //   items: 3,
      // },
      1000: {
        items: 1,
      },
    },
  });
});
//Stats Section //Counterup(waypoint)
$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 4000,
  });
});
//Client Section //OwlCarousal
$(document).ready(function () {
  $("#client-list").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

// Map Js
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 16.8409, lng: 96.1735 },
    zoom: 8,
  });
}
window.initMap = initMap;

// Nav Section
$(document).ready(function () {
  $(window).scroll(function () {
    // alert("Hello");

    if ($(window).scrollTop() > 100) {
      // For Show
      $("nav").addClass("white-nav-top");
      $(".navbar-brand img").attr("src", "./resources/img/logo/logo-dark.png");
      $("#back-to-top").fadeIn();
    } else {
      //For Hide
      $("nav").removeClass("white-nav-top");
      $(".navbar-brand img").attr("src", "./resources/img/logo/logo.png");
      $("#back-to-top").fadeOut();
    }
  });
});

// Scroll Effect //Jquery Easing 1.3
$(document).ready(function () {
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();
    var select_id = $(this).attr("href");
    $("html,body").animate(
      {
        scrollTop: $(select_id).offset().top - 64,
      },
      1250,
      "easeInOutExpo"
    );
  });
});
