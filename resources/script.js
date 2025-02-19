





//let transitionedElement = document.createElement('navOverlay:active');
let openNav = document.getElementById('openNav')
let navigation = document.getElementById('navOverlay');
let closeNav = document.getElementById('closeNav');

function dropDownNav() {
    navigation.style.zIndex = '1';

}

function reverseDropDownNav() {
    navigation.style.zIndex = '0';

}

openNav.addEventListener('click', dropDownNav);
closeNav.addEventListener('click', reverseDropDownNav);


