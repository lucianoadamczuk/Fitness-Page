
////////// Concepts and explanations
// Concepts
const concept1 = document.querySelector('.concept-1');
const concept2 = document.querySelector('.concept-2');
const concept3 = document.querySelector('.concept-3');
const concept4 = document.querySelector('.concept-4');
const concept5 = document.querySelector('.concept-5');

// Explanations
const explanation1 = document.querySelector('.explanation-1');
const explanation2 = document.querySelector('.explanation-2');
const explanation3 = document.querySelector('.explanation-3');
const explanation4 = document.querySelector('.explanation-4');
const explanation5 = document.querySelector('.explanation-5');


// ShowExplanation
const showExplanation = document.querySelector('.showExplanation');


// Event listener
concept1.addEventListener('click', executeExplanation1);
concept2.addEventListener('click', executeExplanation2);
concept3.addEventListener('click', executeExplanation3);
concept4.addEventListener('click', executeExplanation4);
concept5.addEventListener('click', executeExplanation5);


// function to show explanations
function executeExplanation1(){
    explanation1.classList.toggle('showExplanation')
    explanation2.classList.remove('showExplanation')
    explanation3.classList.remove('showExplanation')
    explanation4.classList.remove('showExplanation')
    explanation5.classList.remove('showExplanation')
}
function executeExplanation2(){
    explanation1.classList.remove('showExplanation')
    explanation2.classList.toggle('showExplanation')
    explanation3.classList.remove('showExplanation')
    explanation4.classList.remove('showExplanation')
    explanation5.classList.remove('showExplanation')
}
function executeExplanation3(){
    explanation1.classList.remove('showExplanation')
    explanation2.classList.remove('showExplanation')
    explanation3.classList.toggle('showExplanation')
    explanation4.classList.remove('showExplanation')
    explanation5.classList.remove('showExplanation')
}
function executeExplanation4(){
    explanation1.classList.remove('showExplanation')
    explanation2.classList.remove('showExplanation')
    explanation3.classList.remove('showExplanation')
    explanation4.classList.toggle('showExplanation')
    explanation5.classList.remove('showExplanation')
}
function executeExplanation5(){
    explanation1.classList.remove('showExplanation')
    explanation2.classList.remove('showExplanation')
    explanation3.classList.remove('showExplanation')
    explanation4.classList.remove('showExplanation')
    explanation5.classList.toggle('showExplanation')
}




////////// Audiovisual Content
// Links
const audiovisualVideoLink1 = document.querySelector('.audiovisualVideoLink-1');
const audiovisualVideoLink2 = document.querySelector('.audiovisualVideoLink-2');
const audiovisualVideoLink3 = document.querySelector('.audiovisualVideoLink-3');
const audiovisualVideoLink4 = document.querySelector('.audiovisualVideoLink-4');
const audiovisualVideoLink5 = document.querySelector('.audiovisualVideoLink-5');

// Videos
const audiovisualVideo1 = document.querySelector('.audiovisualVideo-1');
const audiovisualVideo2 = document.querySelector('.audiovisualVideo-2');
const audiovisualVideo3 = document.querySelector('.audiovisualVideo-3');
const audiovisualVideo4 = document.querySelector('.audiovisualVideo-4');
const audiovisualVideo5 = document.querySelector('.audiovisualVideo-5');

// Show video
const showAudiovisualVideo = document.querySelector('.showAudiovisualVideo');

// Event Listener
audiovisualVideoLink1.addEventListener('click', executeAudiovisualVideo1);
audiovisualVideoLink2.addEventListener('click', executeAudiovisualVideo2);
audiovisualVideoLink3.addEventListener('click', executeAudiovisualVideo3);
audiovisualVideoLink4.addEventListener('click', executeAudiovisualVideo4);
audiovisualVideoLink5.addEventListener('click', executeAudiovisualVideo5);


// Functions to show videos
function executeAudiovisualVideo1(){
    audiovisualVideo1.classList.toggle('showAudiovisualVideo');
    audiovisualVideo2.classList.remove('showAudiovisualVideo');
    audiovisualVideo3.classList.remove('showAudiovisualVideo');
    audiovisualVideo4.classList.remove('showAudiovisualVideo');
    audiovisualVideo5.classList.remove('showAudiovisualVideo');
}
function executeAudiovisualVideo2(){
    audiovisualVideo1.classList.remove('showAudiovisualVideo');
    audiovisualVideo2.classList.toggle('showAudiovisualVideo');
    audiovisualVideo3.classList.remove('showAudiovisualVideo');
    audiovisualVideo4.classList.remove('showAudiovisualVideo');
    audiovisualVideo5.classList.remove('showAudiovisualVideo');
}
function executeAudiovisualVideo3(){
    audiovisualVideo1.classList.remove('showAudiovisualVideo');
    audiovisualVideo2.classList.remove('showAudiovisualVideo');
    audiovisualVideo3.classList.toggle('showAudiovisualVideo');
    audiovisualVideo4.classList.remove('showAudiovisualVideo');
    audiovisualVideo5.classList.remove('showAudiovisualVideo');
}
function executeAudiovisualVideo4(){
    audiovisualVideo1.classList.remove('showAudiovisualVideo');
    audiovisualVideo2.classList.remove('showAudiovisualVideo');
    audiovisualVideo3.classList.remove('showAudiovisualVideo');
    audiovisualVideo4.classList.toggle('showAudiovisualVideo');
    audiovisualVideo5.classList.remove('showAudiovisualVideo');
}
function executeAudiovisualVideo5(){
    audiovisualVideo1.classList.remove('showAudiovisualVideo');
    audiovisualVideo2.classList.remove('showAudiovisualVideo');
    audiovisualVideo3.classList.remove('showAudiovisualVideo');
    audiovisualVideo4.classList.remove('showAudiovisualVideo');
    audiovisualVideo5.classList.toggle('showAudiovisualVideo');
}

