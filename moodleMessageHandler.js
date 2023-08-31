var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent"; /* for IE8 and below support */
var eventer = window[eventMethod];
var messageEvent = eventMethod === "attachEvent" ? "onmessage" : "message";

eventer(messageEvent, function (e) {
  console.log(e);
  document.querySelector("#dataTarget > input").value = e.data;
})
