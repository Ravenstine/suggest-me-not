// ==UserScript==
// @name         Suggest Me Not
// @version      0.1.5
// @description  Block ads disguised as content on Facebook.
// @author       Ravenstine
// @match        https://www.facebook.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-2.2.4.min.js
// ==/UserScript==

(function(){

  var counter = 0;

  var selectors = [
    "span:contains('Suggested Post')",
    "a.uiStreamSponsoredLink"
  ].join(", ")

  $('body').on('DOMNodeInserted', "[id^=hyperfeed_story_id_]", function (e) {
    var element = $(e.currentTarget)
    if(element.find(selectors).length){
      element.remove()
      counter++
      if(chrome && chrome.runtime){
        chrome.runtime.sendMessage('' + counter);
      }
    }
  })

  $(document).ready(function(){
    counter = 0;
    $("[id^=hyperfeed_story_id_]").trigger('DOMNodeInserted')
  })

})()