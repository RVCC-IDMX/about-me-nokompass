/* navbar was made using a tutorial I found by Kevin Powell */
/* https://www.youtube.com/watch?v=HbBMp6yUXO0 */

const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if(visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("data-visible", true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("data-visible", false);
    }
})