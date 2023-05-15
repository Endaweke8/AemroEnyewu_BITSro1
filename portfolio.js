// Toggle mobile menu
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('nav ul');



// Smooth scroll to section
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));
    
    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: 'smooth'
    });

    navMenu.classList.remove('show');
  });
});

// Skill bars animation
const skillBars = document.querySelectorAll('.skill-bar');

skillBars.forEach(bar => {
  const progress = bar.querySelector('.skill-progress');
  const value = progress.getAttribute('data-value');

  progress.style.width = `${value}%`;
});

// Work section overlay
const workItems = document.querySelectorAll('#work a');

workItems.forEach(item => {
  const overlay = item.querySelector('.overlay');

  item.addEventListener('mouseenter', () => {
    overlay.style.opacity = '1';
  });

  item.addEventListener('mouseleave', () => {
    overlay.style.opacity = '0';
  });
});