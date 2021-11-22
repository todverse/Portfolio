let main = document.getElementById('main');
swipe(document.body, { maxTime: 1000, minTime: 100, maxDist: 150,  minDist: 60 });
document.body.addEventListener("swipe", function() {
  main.click();
 });