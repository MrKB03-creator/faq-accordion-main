const FQA = (x,i) => {
  let p = document.getElementById(x);
  let img = document.querySelector(i);
  if(p.style.display === "none") {
    p.style.display = "block";
    img.src = './assets/images/icon-minus.svg';
  } else {
    p.style.display = "none";
    img.src = './assets/images/icon-plus.svg';
  }
}
