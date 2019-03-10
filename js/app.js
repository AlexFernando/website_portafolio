document.addEventListener('DOMContentLoaded', function() {
    cargarPortafolio();
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
           <div class="project-tile view view-tenth elemento">
                <a href="${portafolio.link}" target="_blank">
                    <img src="img/${portafolio.id}.jpg">
                </a> 
                <div class="mask contenido">
                    <h2>${portafolio.nombre}</h2>
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