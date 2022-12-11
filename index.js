////////// boxes video animations

// box-1
const box1 = document.querySelector('.box-1');
const videoBox1 = document.querySelector('.videoBox-1');
// box-2
const box2 = document.querySelector('.box-2');
const videoBox2 = document.querySelector('.videoBox-2');
// box-3
const box3 = document.querySelector('.box-3');
const videoBox3 = document.querySelector('.videoBox-3');

// play
box1.addEventListener('mouseover', playVideo1);
box2.addEventListener('mouseover', playVideo2);
box3.addEventListener('mouseover', playVideo3);

function playVideo1(){
    videoBox1.play();
};

function playVideo2(){
    videoBox2.play();
};

function playVideo3(){
    videoBox3.play();
};

// pause
box1.addEventListener('mouseleave', stopVideo1);
box2.addEventListener('mouseleave', stopVideo2);
box3.addEventListener('mouseleave', stopVideo3);

function stopVideo1(){
    videoBox1.pause()
};

function stopVideo2(){
    videoBox2.pause()
};

function stopVideo3(){
    videoBox3.pause()
};



