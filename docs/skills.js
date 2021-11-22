let contact = document.getElementById('contact');
swipe(document.body, { maxTime: 1000, minTime: 100, maxDist: 150,  minDist: 60 });
document.body.addEventListener("swipe", function() {
  contact.click();
 });