/* ========================================
   VR PHYSIO - MODERN ANIMATIONS & INTERACTIONS
   ======================================== */

(function() {
  'use strict';

  // ========================================
  // SCROLL ANIMATIONS
  // ========================================
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          if (entry.target.classList.contains('animate-once')) {
            observer.unobserve(entry.target);
          }
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-animate class
    document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el);
    });
  }

  // ========================================
  // NAVBAR SCROLL EFFECT
  // ========================================
  function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // ========================================
  // SMOOTH SCROLL FOR NAVIGATION LINKS
  // ========================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#section_1') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
          const targetPosition = target.offsetTop - navbarHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ========================================
  // FAQ ACCORDION
  // ========================================
  function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isActive = question.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-question').forEach(q => {
          q.classList.remove('active');
          q.nextElementSibling.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
          question.classList.add('active');
          answer.classList.add('active');
        }
      });
    });
  }

  // ========================================
  // ANIMATED COUNTER
  // ========================================
  function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current).toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target.toLocaleString();
      }
    };
    
    updateCounter();
  }

  function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    const observerOptions = {
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          const target = parseInt(entry.target.getAttribute('data-count'));
          animateCounter(entry.target, target);
          entry.target.classList.add('counted');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
  }

  // ========================================
  // PROGRESS BAR ANIMATION
  // ========================================
  function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    const observerOptions = {
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          const targetWidth = entry.target.getAttribute('aria-valuenow') + '%';
          entry.target.style.width = targetWidth;
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    progressBars.forEach(bar => {
      bar.style.width = '0%';
      observer.observe(bar);
    });
  }

  // ========================================
  // PARALLAX EFFECT
  // ========================================
  function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-parallax') || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });
  }

  // ========================================
  // TESTIMONIAL CAROUSEL AUTO-PLAY
  // ========================================
  function initTestimonialCarousel() {
    const carousel = document.querySelector('#testimonialCarousel');
    if (carousel && typeof bootstrap !== 'undefined') {
      const bsCarousel = new bootstrap.Carousel(carousel, {
        interval: 5000,
        wrap: true,
        touch: true
      });
    }
  }

  // ========================================
  // ACTIVE NAV LINK HIGHLIGHT
  // ========================================
  function initActiveNavLink() {
  const navLinks = document.querySelectorAll('.navbar .nav-link');
  const currentPath = window.location.pathname.split("/").pop().toLowerCase() || "index.html";
  const currentHash = window.location.hash;

  function updateNavHighlight() {
    // 1️⃣ Remove all active classes
    navLinks.forEach(link => link.classList.remove('active'));

    // 2️⃣ Highlight by page (multi-page support)
    navLinks.forEach(link => {
      const href = link.getAttribute('href').toLowerCase();
      if (href === currentPath || (currentPath === "" && href === "index.html")) {
        link.classList.add('active');
      }
    });

    // 3️⃣ If homepage & hash exists, highlight anchor link
    if ((currentPath === "index.html" || currentPath === "") && currentHash) {
      navLinks.forEach(link => {
        if (link.getAttribute('href') === currentHash) {
          link.classList.add('active');
        }
      });
    }

    // 4️⃣ Optional: highlight section while scrolling on homepage
    if (currentPath === "index.html" || currentPath === "") {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset + 150;

      sections.forEach(section => {
        if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
          const id = section.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }
  }

  // Initial call + scroll listener
  updateNavHighlight();
  window.addEventListener('scroll', updateNavHighlight);

  // Fix flicker by removing hash from URL bar on load
  if (window.location.hash && window.scrollY < 100) {
    history.replaceState("", document.title, window.location.pathname);
  }
}

  // ========================================
  // IMAGE LAZY LOADING ENHANCEMENT
  // ========================================
  function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          img.classList.add('fade-in');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // ========================================
  // FORM VALIDATION ENHANCEMENT
  // ========================================
  function initFormValidation() {
    const forms = document.querySelectorAll('.needs-validation');
    
    forms.forEach(form => {
      form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }

  // ========================================
  // BACK TO TOP BUTTON
  // ========================================
  function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ========================================
  // CHART.JS INITIALIZATION
  // ========================================
  window.initRecoveryChart = function() {
    const ctx = document.getElementById('recoveryChart');
    if (!ctx || typeof Chart === 'undefined') return;

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 6', 'Week 8', 'Week 12'],
        datasets: [{
          label: 'Average Recovery Progress (%)',
          data: [15, 30, 45, 60, 75, 88, 95],
          borderColor: '#00D9FF',
          backgroundColor: 'rgba(0, 217, 255, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#00D9FF',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              color: '#2b2b2b',
              font: {
                family: 'Poppins',
                size: 14,
                weight: '600'
              },
              padding: 20
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleFont: {
              family: 'Poppins',
              size: 14
            },
            bodyFont: {
              family: 'Poppins',
              size: 13
            },
            padding: 12,
            borderColor: '#00D9FF',
            borderWidth: 1
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              callback: function(value) {
                return value + '%';
              },
              color: '#555',
              font: {
                family: 'Poppins',
                size: 12
              }
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            }
          },
          x: {
            ticks: {
              color: '#555',
              font: {
                family: 'Poppins',
                size: 12
              }
            },
            grid: {
              display: false
            }
          }
        }
      }
    });
  };

  window.initPatientMetricsChart = function() {
    const ctx = document.getElementById('patientMetricsChart');
    if (!ctx || typeof Chart === 'undefined') return;

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Orthopedic', 'Neurological', 'Sports Injury', 'Post-Surgical', 'Women\'s Health', 'Pediatric'],
        datasets: [{
          data: [35, 20, 15, 15, 10, 5],
          backgroundColor: [
            '#00D9FF',
            '#0099CC',
            '#00FFD1',
            '#48bdc5',
            '#20c997',
            '#17a185'
          ],
          borderWidth: 0,
          hoverOffset: 20
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#2b2b2b',
              font: {
                family: 'Poppins',
                size: 13,
                weight: '500'
              },
              padding: 15,
              usePointStyle: true,
              pointStyle: 'circle'
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleFont: {
              family: 'Poppins',
              size: 14
            },
            bodyFont: {
              family: 'Poppins',
              size: 13
            },
            padding: 12,
            callbacks: {
              label: function(context) {
                return context.label + ': ' + context.parsed + '%';
              }
            }
          }
        }
      }
    });
  };

  // ========================================
  // INITIALIZE ALL ON DOM LOADED
  // ========================================
  document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initNavbarScroll();
    initSmoothScroll();
    initFAQ();
    initCounters();
    initProgressBars();
    initParallax();
    initTestimonialCarousel();
    initActiveNavLink();
    initLazyLoading();
    initFormValidation();
    initBackToTop();
    
    // Initialize charts if Chart.js is loaded
    if (typeof Chart !== 'undefined') {
      window.initRecoveryChart();
      window.initPatientMetricsChart();
    }
    
    console.log('✅ VR Physio Modern Animations Initialized');
  });

  // ========================================
  // INITIALIZE ON WINDOW LOAD (for charts)
  // ========================================
  window.addEventListener('load', function() {
    if (typeof Chart !== 'undefined') {
      window.initRecoveryChart();
      window.initPatientMetricsChart();
    }
  });

})();
