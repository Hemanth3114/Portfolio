// mobile nav toggle
  const navToggle = document.getElementById('navtoggle');
  const navLinks = document.getElementById('navlinks');
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // animate skill bars when in view
  const bars = document.querySelectorAll('.bar-fill');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.fill + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  bars.forEach(bar => observer.observe(bar));
