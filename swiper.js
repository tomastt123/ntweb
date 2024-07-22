    document.addEventListener('DOMContentLoaded', function() {
      const swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 5,
        slidesPerGroup: 3,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
          },
        },
        navigation: {
          nextEl: '#slide-next',
          prevEl: '#slide-prev',
        },
        on: {
          init: function () {
            const totalSlides = this.slides.length - 2;
            const visibleBullets = 3; 
            const dotsContainer = document.querySelector('.swiper-pagination');
            dotsContainer.style.display = 'flex';
            dotsContainer.style.justifyContent = 'center';
  

            for (let i = 0; i < visibleBullets - totalSlides; i++) {
              const dummyBullet = document.createElement('span');
              dummyBullet.className = 'swiper-pagination-bullet';
              dotsContainer.appendChild(dummyBullet);
            }
          },
        },
      });
  
      
      document.getElementById('slide-prev').addEventListener('click', function() {
        swiper.slidePrev();
      });
  
      document.getElementById('slide-next').addEventListener('click', function() {
        swiper.slideNext();
      });
    });


    /*Sirdeles paraudonavimas*/


    document.addEventListener('DOMContentLoaded', function() {
      var heartIcon = document.getElementById('heart-icon-1');
      if (heartIcon) {
          heartIcon.addEventListener('click', function() {
              this.classList.toggle('clicked');
          });
      }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var heartIcon = document.getElementById('heart-icon-2');
    if (heartIcon) {
        heartIcon.addEventListener('click', function() {
            this.classList.toggle('clicked');
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
  var heartIcon = document.getElementById('heart-icon-3');
  if (heartIcon) {
      heartIcon.addEventListener('click', function() {
          this.classList.toggle('clicked');
      });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var heartIcon = document.getElementById('heart-icon-4');
  if (heartIcon) {
      heartIcon.addEventListener('click', function() {
          this.classList.toggle('clicked');
        });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var heartIcon = document.getElementById('heart-icon-5');
  if (heartIcon) {
      heartIcon.addEventListener('click', function() {
          this.classList.toggle('clicked');
      });
  }
});
    
    document.addEventListener('DOMContentLoaded', function() {
      var heartIcon = document.getElementById('heart-icon-6');
      if (heartIcon) {
          heartIcon.addEventListener('click', function() {
              this.classList.toggle('clicked');
            });
  }
});

  document.addEventListener('DOMContentLoaded', function() {
    var heartIcon = document.getElementById('heart-icon-7');
    if (heartIcon) {
        heartIcon.addEventListener('click', function() {
            this.classList.toggle('clicked');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
  var heartIcon = document.getElementById('heart-icon-8');
  if (heartIcon) {
      heartIcon.addEventListener('click', function() {
          this.classList.toggle('clicked');
      });
  }
});