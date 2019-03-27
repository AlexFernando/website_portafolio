window.addEventListener("hashchange", function() { scrollBy(0, -80) })

//change background color when scroll 
window.onscroll = (e) => {
    const scroll = window.scrollY; 
    const home = document.querySelector('#home_nav');
    const about = document.querySelector('#about_nav');
    const project = document.querySelector('#projects_nav');
    const gear = document.querySelector('#gear_nav');
    const contact = document.querySelector('#contact_nav');
  

    switch(true) {
        case (scroll>0 && scroll<320):
            project.removeAttribute('style');
            contact.removeAttribute('style');
            home.classList.add('mycolor');
            break;
        case (scroll>320 && scroll<1524):
            home.classList.remove('mycolor');
            project.removeAttribute('style');
            contact.removeAttribute('style');
            about.style.color = '#e5e5e5';
            break;
        case (scroll>1524 && scroll<2096):
            home.classList.remove('mycolor');
            about.removeAttribute('style');
            gear.removeAttribute('style')
            contact.removeAttribute('style');
            project.style.color = '#e5e5e5';
            break;
        case (scroll>2096 && scroll<2624):
            home.classList.remove('mycolor');
            about.removeAttribute('style');
            project.removeAttribute('style');
            contact.removeAttribute('style');
            gear.style.color = '#e5e5e5';
            break;
        case (scroll>2624 && scroll<2955):
            about.removeAttribute('style');
            home.removeAttribute('style');
            project.removeAttribute('style');
            gear.removeAttribute('style');
            contact.style.color = '#e5e5e5';
            break;
        default: 
            home.removeAttribute('style');
            about.removeAttribute('style');
            project.removeAttribute('style');
            gear.removeAttribute('style');
            contact.removeAttribute('style');
    }
}


jQuery(document).ready(function() {
    jQuery(".menu-Trigger").click(function() {
        jQuery(".menu-mobile").slideToggle(100, function() {
            jQuery(this).toggleClass("nav-Expanded");
            if($(".menu-mobile").is(":hidden")) $(".menu-Trigger").text("☰ Menu"); else $(".menu-Trigger").text("X Close");
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() { onScrollInit($('.waypoint')) }, 100);
    //navegacion();
    //mixItUp function
    $(function() {  
        var mixer = mixitup('.container');
    });
    //slider function
    $(function() {
        $(".rslides").responsiveSlides();
        $("#slider3").responsiveSlides({
            manualControls: '#slider3-pager',
            maxwidth: 540
          });
    });
      
});


/*function navegacion(){
        //Inicializar las variables 
        let i = 0;
        let tiempo = 0;
        //boton flotante en el footer
        const borderMenu = document.querySelector('.border-menu');
    
        borderMenu.addEventListener('click', (e) => {
            e.preventDefault();
    
            // Prevenimos default, pero ejecutamos el siguiente código
    
            const menuMobile = document.querySelector('#navbar-mobile');
            console.log(menuMobile.classList, borderMenu.classList);
    
            if(menuMobile.classList.contains('activo')) {
                //Si contiene activo, ejecuta este codigo
                menuMobile.classList.remove('activo');
                borderMenu.classList.remove('activo');
                borderMenu.innerText = '';
    
            }
            else {
                //Si no lo contiene, ejecuta esto
                menuMobile.classList.add('activo');
                borderMenu.classList.add('activo');
            }
        })
}*/

   // SCROLL ANIMATIONS
   function onScrollInit( items, elemTrigger ) {

  var offset = $(window).height() / 1.6
 
  items.each( function() {
    var elem = $(this),
        animationClass = elem.attr('data-animation'),
        animationDelay = elem.attr('data-delay');
  
        elem.css({
          '-webkit-animation-delay':  animationDelay,
          '-moz-animation-delay':     animationDelay,
          'animation-delay':          animationDelay
        });

        var trigger = (elemTrigger) ? trigger : elem;

        trigger.waypoint(function() {
          elem.addClass('animated').addClass(animationClass);
          if (elem.get(0).id === 'gallery') mixClear(); //OPTIONAL
          },{
              triggerOnce: true,
              offset: offset
        });
  });
}

