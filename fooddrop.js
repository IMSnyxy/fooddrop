$(document).ready(function () {
  // Animation
  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();

    $(".slide-up").each(function () {
      var elementOffset = $(this).offset().top;

      if (scrollTop > elementOffset - windowHeight) {
        $(this).addClass("active");
        console.log("Detected");
      }
    });
  }

  $(window).on("scroll", handleScroll);

  handleScroll();

  // Truncation and Ellipsis
  var cardTexts = document.getElementsByClassName('card-text-truncate');
  for (var i = 0; i < cardTexts.length; i++) {
    $clamp(cardTexts[i], { clamp: 3 });
  }

  // Truncation and Ellipsis
  var cardOrgTexts = document.getElementsByClassName('card-text-truncate-org');
  for (var i = 0; i < cardOrgTexts.length; i++) {
    $clamp(cardOrgTexts[i], { clamp: 6 });
  }
});
