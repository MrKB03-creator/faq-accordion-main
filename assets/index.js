const FQA = () => {
    let show1 = document.querySelector('#FQA-icon1');
    show1.addEventListener('click', e => {
      show1.removeEventListener('click',e);
        let p1 = document.getElementById("FQA-p1");
        let img1 = document.querySelector('#img1');
        if (p1.style.display == "none") {
          p1.style.display = "block";
          img1.src = './assets/images/icon-minus.svg';
        } else {
          p1.style.display = "none";
          img1.src = './assets/images/icon-plus.svg';
        }
    })


    let show2 = document.querySelector('#FQA-icon2');
    show2.addEventListener('click', e => {
      show2.removeEventListener('click',e);
        let p2 = document.getElementById("FQA-p2");
        let img2 = document.querySelector('#img2');
        if (p2.style.display === "none") {
          p2.style.display = "block";
          img2.src = './assets/images/icon-minus.svg';
        } else {
          p2.style.display = "none";
          img2.src = './assets/images/icon-plus.svg';
        }
    })

    let show3 = document.querySelector('#FQA-icon3');
    show3.addEventListener('click', e => {
      show3.removeEventListener('click',e);
        let p3 = document.getElementById("FQA-p3");
        let img3 = document.querySelector('#img3');
        if (p3.style.display === "none") {
          p3.style.display = "block";
          img3.src = './assets/images/icon-minus.svg';
        } else {
          p3.style.display = "none";
          img3.src = './assets/images/icon-plus.svg';
        }
    })

    let show4 = document.querySelector('#FQA-icon4');
    show4.addEventListener('click', e => {
      show4.removeEventListener('click',e);
        let p4 = document.getElementById("FQA-p4");
        let img4 = document.querySelector('#img4');
        if (p4.style.display === "none") {
          p4.style.display = "block";
          img4.src = './assets/images/icon-minus.svg';
        } else {
          p4.style.display = "none";
          img4.src = './assets/images/icon-plus.svg';
        }
    })
};

