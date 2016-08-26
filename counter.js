var counter = 0;
chrome.runtime.onMessage.addListener(function(msg, _, sendResponse){
  counter++;
  chrome.browserAction.setBadgeText({"text": "" + counter});
});