let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let clip = document.querySelector('.clip')


menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    clip.classList.toggle('hidden');


}