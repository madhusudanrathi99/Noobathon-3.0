function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op <= 0){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 3000);
}

window.addEventListener('load', function () {
  var preloader = document.getElementsByClassName('preloader')[0];
  unfade(preloader);//preloader.fadeOut(1000);
  var img = document.getElementsByClassName('bg_img')[0];
  img.style.backgroundImage = "url(" + img.dataset.background + ")";
});