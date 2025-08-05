// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  });
});

// Schedule tabs functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const daySchedules = document.querySelectorAll('.day-schedule');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons and schedules
    tabButtons.forEach((btn) => btn.classList.remove('active'));
    daySchedules.forEach((schedule) => schedule.classList.remove('active'));

    // Add active class to clicked button
    button.classList.add('active');

    // Show corresponding schedule
    const targetDay = button.getAttribute('data-day');
    const targetSchedule = document.getElementById(targetDay);
    if (targetSchedule) {
      targetSchedule.classList.add('active');
    }
  });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
  }
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll('.speaker-card, .schedule-item, .sponsor-card')
  .forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

// Registration button functionality
// document.querySelectorAll('.btn-primary').forEach((button) => {
//   if (button.textContent.includes('Register')) {
//     button.addEventListener('click', (e) => {
//       e.preventDefault();
//       // Here you would typically integrate with a registration system
//       alert(
//         'Registration system would be integrated here. Contact the organizers for early bird pricing!'
//       );
//     });
//   }
// });

// Add loading animation to the page
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  // Set initial opacity for smooth loading
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';

  // Trigger load animation
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
});

// Add hover effects for interactive elements
document
  .querySelectorAll('.speaker-card, .sponsor-card, .schedule-item')
  .forEach((card) => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
    });
  });

// Update active navigation link based on scroll position
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
