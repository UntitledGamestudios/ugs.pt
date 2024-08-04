/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
  
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
  
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
  }
  
  showMenu('nav-toggle','nav-menu')
  
  
  let slideIndex = 1;
  window.onload = function() {
    showSlides(slideIndex);
  };
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
    
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  