$(function() {
  $('#s').click(function() {
     chrome.tabs.create({url: 'http://www.google.com'});
  });
});

document.addEventListener('DOMContentLoaded');