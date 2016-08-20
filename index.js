// ==UserScript==
// @name         Suggest Me Not
// @version      0.1.2
// @description  Block ads disguised as content on Facebook.
// @author       Ravenstine
// @match        https://www.facebook.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-2.2.4.min.js
// ==/UserScript==

(function(){

  var selectors = [
    "span:contains('Suggested Post')",
    "a.uiStreamSponsoredLink"
  ]

  $('body').on('DOMNodeInserted', "[id^=hyperfeed_story_id_]", function (e) {
    var element = $(e.currentTarget)
    if(element.find(selectors.join(", ")).length){
      element.remove()
    }
  })

})()