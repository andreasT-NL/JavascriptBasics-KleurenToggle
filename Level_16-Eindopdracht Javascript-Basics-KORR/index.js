const backgroundColor = document.body;
const homeGray = document.querySelector('.home');
const menuRed = document.querySelector('.red');
const menuBlue = document.querySelector('.blue');
const menuYellow = document.querySelector('.yellow');
const menuGreen = document.querySelector('.green');
const menuPurple = document.querySelector('.purple');
const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
//remove all background-styles
const removeBackgroundStyle = function () {
    backgroundColor.classList.remove('background-default');
    backgroundColor.classList.remove('home');
    backgroundColor.classList.remove('red');
    backgroundColor.classList.remove('blue');
    backgroundColor.classList.remove('yellow');
    backgroundColor.classList.remove('green');
    backgroundColor.classList.remove('purple');
};
// hide menu
const toggleMenu = function () {
    menu.classList.toggle('menu');
};
const makeGray = function () {
    document.querySelector('h1').innerHTML = 'KleurenToggle';
    removeBackgroundStyle();
    backgroundColor.classList.add('home');
    toggleMenu();
};
const makeRed = function () {
    document.querySelector('h1').innerHTML = 'Red';
    removeBackgroundStyle();
    backgroundColor.classList.add('red');
    toggleMenu();
};
const makeBlue = function () {
    document.querySelector('h1').innerHTML = 'Blue';
    removeBackgroundStyle();
    backgroundColor.classList.add('blue');
    toggleMenu();
};
const makeYellow = function () {
    document.querySelector('h1').innerHTML = 'Yellow';
    removeBackgroundStyle();
    backgroundColor.classList.add('yellow');
    toggleMenu();
};
const makeGreen = function () {
    document.querySelector('h1').innerHTML = 'Green';
    removeBackgroundStyle();
    backgroundColor.classList.add('green');
    toggleMenu();
};
const makePurple = function () {
    document.querySelector('h1').innerHTML = 'Purple';
    removeBackgroundStyle();
    backgroundColor.classList.add('purple');
    toggleMenu();
};
//interaction with menu -> change background color
hamburger.addEventListener('click', toggleMenu);
homeGray.addEventListener('click', makeGray);
menuRed.addEventListener('click', makeRed);
menuBlue.addEventListener('click', makeBlue);
menuYellow.addEventListener('click', makeYellow);
menuGreen.addEventListener('click', makeGreen);
menuPurple.addEventListener('click', makePurple);