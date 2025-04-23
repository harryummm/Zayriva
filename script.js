// Smooth scroll to anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Initialize AOS (Animate on Scroll)
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
  });
  
  // Dark mode toggle
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  
    // Optional: Toggle icon change (e.g., sun/moon)
    const icon = document.getElementById("darkModeIcon");
    if (icon) {
      icon.classList.toggle("fa-sun");
      icon.classList.toggle("fa-moon");
    }
  }
  
  // Typing text effect
  const typingText = [
    "Explore the Latest Fashion Trends",
    "Shop Luxury Pret Now",
    "Zayriva - Desi Elegance"
  ];
  
  let lineIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingElement = document.querySelector(".typing");
  
  function typeEffect() {
    const currentLine = typingText[lineIndex];
    const displayText = currentLine.substring(0, charIndex);
  
    if (typingElement) typingElement.textContent = displayText;
  
    if (!isDeleting && charIndex < currentLine.length) {
      charIndex++;
      setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 50);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        lineIndex = (lineIndex + 1) % typingText.length;
      }
      setTimeout(typeEffect, 1000);
    }
  }
  
  typeEffect();
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    });
  });
  