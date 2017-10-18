console.log("openWebstore.js loaded");
function openWebstore() {
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    var tab_url=tabs[0].url;
    chrome.tabs.create({ url:"https://supremenewyork.com/shop/new" });
});
}
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('webstore');
  if (btn) {
    btn.addEventListener('click', openWebstore);
  }
});
