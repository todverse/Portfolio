let about = document.getElementById('about');
swipe(document.body, { maxTime: 1000, minTime: 100, maxDist: 150,  minDist: 60 });
document.body.addEventListener("swipe", function() {
  about.click();
 });