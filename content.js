var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
}
document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
      chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.create

 chrome.browserAction.onClicked.addListener(function() {

      chrome.tabs.create({'url': chrome.extension.getURL('popup.html')}, function(tab) {

      });

 });
    chrome.tabs.getSelected(null, function(tab) {
      d = document;
      chrome.tabs.create({"url": "http://google.com"});
      var f = d.createElement('form');
      f.action = 'http://gtmetrix.com/analyze.html?bm';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);