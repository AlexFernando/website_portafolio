window.addEventListener("hashchange", function() { scrollBy(0, -80) })

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() { onScrollInit($('.waypoint')) }, 100);
    navegacion();
    $(function() {  
        var mixer = mixitup('.container');
    });
});


function navegacion(){
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
}

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

