onmessage = function(event) {
  var payload = JSON.parse(event.data);
  var http = new XMLHttpRequest();

  http.open("POST", payload.url, true);
  http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  http.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  http.send(payload.data);
}
