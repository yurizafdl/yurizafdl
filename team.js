// Initialize AOS animations
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  
    // Team card hover effect
    const teamCards = document.querySelectorAll('.team-card');
    
    teamCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = 'translateY(-15px) scale(1.03) rotateY(${xAxis}deg) rotateX(${yAxis}deg)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(-15px) scale(1.03) rotateY(0deg) rotateX(0deg)';
      });
    });
  
    // Initialize all modals
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      modal.addEventListener('shown.bs.modal', function () {
        const modalImg = modal.querySelector('.team-modal-img');
        modalImg.style.animation = 'fadeIn 0.5s ease-in-out';
      });
    });
  });