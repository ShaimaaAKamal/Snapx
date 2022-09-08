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


function nextClosed(n) {
  showSlides(n);
}
 
let data=[` <div >
<h5>88 Participants</h5>
<p class="text-secondary ">Number Of Artists</p>
</div>
<div>
<h5>284 Pictures</h5>
<p class="text-secondary ">Submited Pics</p>
</div>`,
  ` <div >
  <h5>96 Participants</h5>
  <p class="text-secondary ">Number Of Artists</p>
</div>
<div>
  <h5>410 Pictures</h5>
  <p class="text-secondary ">Submited Pics</p>
</div>`,
`
<div >
<h5>74 Participants</h5>
<p class="text-secondary ">Number Of Artists</p>
</div>
<div>
<h5>310 Pictures</h5>
<p class="text-secondary ">Submited Pics</p>
</div>
`
]
function showSlides(n) {
  let slides = document.getElementsByClassName("myClosedSlides");
  for(let i=0 ; i < slides.length ; i++){
     let x =(((slides[i].children[0]).children[0].getAttribute('src').split('/'))[1].split('.'))[0]
     if(n==1){
    if(x !=3)
{    (slides[i].children[0]).children[0].setAttribute('src',`images/${parseInt(n)+parseInt(x)}.jpg`)
      slides[i].children[1].innerHTML=data[parseInt(x)]
}   else
    { (slides[i].children[0]).children[0].setAttribute('src',`images/1.jpg`);
       slides[i].children[1].innerHTML=data[0]
 }
     }
     else{
        if(x == 1)
   {   (slides[i].children[0]).children[0].setAttribute('src',`images/3.jpg`);
         slides[i].children[1].innerHTML=data[2];

    }
       else{
        (slides[i].children[0]).children[0].setAttribute('src',`images/${parseInt(n)+parseInt(x)}.jpg`)
       slides[i].children[1].innerHTML=data[(parseInt(x))-2]}
     }
  }
}

displaySlide()

function displaySlide(){
  let i;
  let slides = document.getElementsByClassName("myClosedSlides");
  for(i=0 ; i<slides.length ; i++) {
    let x =(((slides[i].children[0]).children[0].getAttribute('src').split('/'))[1].split('.'))[0]
    if(x !=3)
    {    (slides[i].children[0]).children[0].setAttribute('src',`images/${1+parseInt(x)}.jpg`)
          slides[i].children[1].innerHTML=data[parseInt(x)]
    }   else
        { (slides[i].children[0]).children[0].setAttribute('src',`images/1.jpg`);
           slides[i].children[1].innerHTML=data[0]
     }
  }
  setTimeout(displaySlide, 4000); // Change image every 2 seconds
}






