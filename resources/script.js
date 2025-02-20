/*





*/

let openNav = document.getElementById('openNav')
let navigation = document.getElementById('navOverlay');
let closeNav = document.getElementById('closeNav');

function revealNav() {
    navigation.style.zIndex = '6';

}

function hideNav() {
    navigation.style.zIndex = '0';
}

openNav.addEventListener('click', revealNav);
closeNav.addEventListener('click', hideNav);


