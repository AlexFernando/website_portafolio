document.addEventListener('DOMContentLoaded', function() {
    cargarPortafolio();
    setTimeout(function() { onScrollInit($('.waypoint')) }, 100);

});


function cargarPortafolio() {
   fetch('datos.json')
   .then(function(respuesta) {
       return respuesta.json();
   })
   .then(function(datos) {
       let html = ''
       datos.portafolio.forEach( portafolio => {
           // crear el template
           html += `   
           <div class="project-content content-effects elemento">
                <a href="${portafolio.link}" target="_blank">
                    <img src="img/${portafolio.id}.jpg">
                </a> 
                <div class="mask contenido">
                    <h3>${portafolio.nombre}</h3>
                    <p>${portafolio.desc}</p>
                    <a href="${portafolio.link}"  target="_blank" class="info">View Live</a>
                </div>
           </div>
           `;            
       });
       // despues de recorrer, lo inyectamos
       document.querySelector('#listado').innerHTML = html;
   })
   .catch(function(error) {
       console.log(error);
   });
}


   // SCROLL ANIMATIONS
   function onScrollInit( items, elemTrigger ) {
    console.log("items: ",items,"elemTrigger: ",elemTrigger);
  var offset = $(window).height() / 1.6
  console.log("offset", offset);
  items.each( function() {
    var elem = $(this),
        animationClass = elem.attr('data-animation'),
        animationDelay = elem.attr('data-delay');
        console.log("animationClass: ", animationClass);
        console.log("animationDelay: ", animationDelay);
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

