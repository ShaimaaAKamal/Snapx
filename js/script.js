carousel();

function carousel() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for(i=0 ; i<slides.length ; i++) {
    let x =((slides[i].children[0]).children[0].getAttribute('alt').split(' '))[1];
    if(x != 3){
      (slides[i].children[0]).children[0].setAttribute('src',`images/waiting-0${1+parseInt(x)}.jpg`);
      (slides[i].children[0]).children[0].setAttribute('alt',`Pic ${1+parseInt(x)}`)
    } 
    else{
      (slides[i].children[0]).children[0].setAttribute('src',`images/waiting-01.jpg`);
      (slides[i].children[0]).children[0].setAttribute('alt',`Pic 1`);
    }
  }
  setTimeout(carousel, 4000); // Change image every 2 seconds
}





function plusDivs(n) {
  showDivs(n);
}

function showDivs(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for(i=0 ; i < slides.length ; i++){
    let x =((slides[i].children[0]).children[0].getAttribute('alt').split(' '))[1];
    if(n==1){
      if(x != 3){
        (slides[i].children[0]).children[0].setAttribute('src',`images/waiting-0${parseInt(n)+parseInt(x)}.jpg`);
        (slides[i].children[0]).children[0].setAttribute('alt',`Pic ${parseInt(n)+parseInt(x)}`)
      } 
      else{
        (slides[i].children[0]).children[0].setAttribute('src',`images/waiting-01.jpg`);
        (slides[i].children[0]).children[0].setAttribute('alt',`Pic 1`);
      }
    }
    else{
      {
        if(x == 1){
          (slides[i].children[0]).children[0].setAttribute('src',`images/waiting-03.jpg`);
          (slides[i].children[0]).children[0].setAttribute('alt',`Pic 3`)
        } 
        else{
          (slides[i].children[0]).children[0].setAttribute('src',`images/waiting-0${parseInt(n)+parseInt(x)}.jpg`);
          (slides[i].children[0]).children[0].setAttribute('alt',`Pic ${parseInt(n)+parseInt(x)}`);
        }
      }
    }
  }
}


