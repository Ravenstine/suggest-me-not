chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  chrome.tabs.get(sender.tab.id, function(tab) {
    if (chrome.runtime.lastError) {
      return;
    }
    if (tab.index >= 0) {
      chrome.browserAction.setBadgeText({tabId:tab.id, text:message});
    } else {
      var tabId = sender.tab.id;
      chrome.webNavigation.onCommitted.addListener(function update(details) {
        if (details.tabId == tabId) {
          chrome.browserAction.setBadgeText({tabId: tabId, text: message});
          chrome.webNavigation.onCommitted.removeListener(update);
        }
      })
    }
  })
})