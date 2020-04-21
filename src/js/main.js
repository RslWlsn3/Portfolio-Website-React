// //Select DOM Items
// const menuBtn = document.querySelector('.menu-btn'); //querySelector selects first element
// const menu = document.querySelector('.menu');
// const menuNav = document.querySelector('.menu-nav');
// const menuBranding = document.querySelector('.menu-branding');
// const navItems = document.querySelectorAll('.nav-item'); //selects all elemtents and stores them in a node list (similar to array)

// //Set Initial State Of Menu
// let showMenu = false; //use let becuase we will need to reassign

// menuBtn.addEventListener('click', toggleMenu);

// function toggleMenu() {
//   if (!showMenu) {
//     menuBtn.classList.add('close'); //adds the class="close" to the html elemtens, can view live in dev tools
//     menu.classList.add('show');
//     menuNav.classList.add('show');
//     menuBranding.classList.add('show');
//     navItems.forEach((item) => item.classList.add('show')); //need to loop through since its a node list

//     //Set Menu State
//     showMenu = true;
//   } else {
//     menuBtn.classList.remove('close');
//     menu.classList.remove('show');
//     menuNav.classList.remove('show');
//     menuBranding.classList.remove('show');
//     navItems.forEach((item) => item.classList.remove('show'));

//     //Set Menu State
//     showMenu = false;
//   }
// }
