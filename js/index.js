const img = document.querySelector('.img');
const img_1 = document.querySelector('.img_1');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');

const txt1 = document.querySelector('#txt1');
const txt2 = document.querySelector('#txt2');
const txt3 = document.querySelector('#txt3');
const txt4 = document.querySelector('#txt4');


function change(image){
    img.src = image;
}

img_1.addEventListener('mouseover', ()=> {
    change('img/c1.jpg');
    txt1.classList.add('active');
    txt2.classList.remove('active');
    txt3.classList.remove('active');
    txt4.classList.remove('active');
});

img1.addEventListener('mouseover', ()=> {
    change('img/c2.jpg');
    txt2.classList.add('active');
    txt1.classList.remove('active');
    txt3.classList.remove('active');
    txt4.classList.remove('active');
});

img2.addEventListener('mouseover', ()=> {
    change('img/c3.jpg');
    txt3.classList.add('active');
    txt4.classList.remove('active');
    txt2.classList.remove('active');
    txt1.classList.remove('active');
    
});

img3.addEventListener('mouseover', ()=> {
    change('img/c4.jpg');
    txt4.classList.add('active');
    txt3.classList.remove('active');
    txt2.classList.remove('active');
    txt1.classList.remove('active');
});


const loader = document.querySelector('.loader');

setTimeout(() => {
    loader.style.display = 'none';
}, 3000);