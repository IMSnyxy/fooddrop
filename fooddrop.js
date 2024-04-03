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

