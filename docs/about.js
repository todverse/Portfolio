let port = document.getElementById('port');
swipe(document.body, { maxTime: 1000, minTime: 100, maxDist: 150,  minDist: 60 });
document.body.addEventListener("swipe", function() {
  port.click();
 });