window.addEventListener("hashchange", function() { scrollBy(0, -80) })


//change background color when scroll 
/*window.onscroll = (e) => {
    const scroll = window.scrollY; 
    const otherScroll = document.body.scrollTop;
    const home = document.querySelector('#home_nav');
    const about = document.querySelector('#about_nav');
    const project = document.querySelector('#projects_nav');
    const gear = document.querySelector('#gear_nav');
    const contact = document.querySelector('#contact_nav');
    console.log(otherScroll);

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
            home.classList.remove('mycolor');
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
}*/


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

//scrollSpy
/*(function() {
    'use strict';

    let sections = document.querySelectorAll('.mySection');
    
    let arrayOffset = {};

    let section = 0;

    Array.prototype.forEach.call(sections, function(e) {
        arrayOffset[e.id] = e.offsetTop;
    });
    
    window.onscroll = function() {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for(section in arrayOffset) {
            if(arrayOffset[section] <= scrollPosition) {
                let myNavbar =  document.querySelector('.navegacion');
                
                document.querySelector('.active').setAttribute('class',' ');
                document.querySelector('a[href*=' + section + ']').setAttribute('class', 'active');
            }
        }
    };


})();*/

(function () {
    'use strict';

    const sections = document.querySelectorAll('.mySection');
    let sectionOffsets = [];

    function updateOffsets() {
        sectionOffsets = Array.from(sections).map(section => ({
            id: section.id,
            offset: section.offsetTop
        }));
    }

    function onScroll() {
        const scrollPosition = window.scrollY || window.pageYOffset;
        const bottomOffset = window.innerHeight + scrollPosition;
        const pageHeight = document.body.scrollHeight;

        let currentSectionId = sectionOffsets[0].id;

        for (let i = 0; i < sectionOffsets.length; i++) {
            const sectionTop = sectionOffsets[i].offset;

            // Add a buffer of 100px so it activates slightly earlier
            if (scrollPosition + 100 >= sectionTop) {
                currentSectionId = sectionOffsets[i].id;
            }
        }

        // If we're at the bottom of the page, force the last section to be active
        if (bottomOffset >= pageHeight - 2) {
            currentSectionId = sectionOffsets[sectionOffsets.length - 1].id;
        }

        const currentActive = document.querySelector('.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }

        const newActive = document.querySelector(`a[href*="${currentSectionId}"]`);
        if (newActive) {
            newActive.classList.add('active');
        }
    }

    updateOffsets();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', updateOffsets);
})();



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

 // Set current year in the footer
 document.addEventListener('DOMContentLoaded', function () {
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  });