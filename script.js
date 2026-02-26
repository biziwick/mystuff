// script.js
// Smooth active nav highlight on scroll, subtle interactivity

document.addEventListener('DOMContentLoaded', () => {
  // ---- active menu while scrolling ----
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function setActiveLink() {
    let scrollY = window.scrollY;
    const headerOffset = 150; // offset to trigger before section passes

    sections.forEach(section => {
      const sectionTop = section.offsetTop - headerOffset;
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
  setActiveLink(); // call once on load

  // ---- optional: replace placeholder image / logo with your own files ----
  // if you have actual image URLs, you can set them via JS or just replace src in HTML.
  // For demonstration, we keep placeholders. But you can uncomment and assign:
  // 
  // const profilePic = document.getElementById('profilePic');
  // if (profilePic) {
  //   profilePic.src = 'path/to/your/photo.jpg';  // <-- replace with your image
  // }
  // 
  // const uniLogo = document.getElementById('uniLogo');
  // if (uniLogo) {
  //   uniLogo.src = 'path/to/mubas-logo.png';
  // }

  // ---- small hover effect for project links (already in css) ----
  // additional: open project links in new tab safely (target _blank added in html)
  // currently all project links are "#", replace with actual URLs in html

  // ---- cool tilt effect on profile picture (optional gentle 3D) ----
  const imageFrame = document.querySelector('.image-frame');
  if (imageFrame) {
    imageFrame.addEventListener('mousemove', (e) => {
      const rect = imageFrame.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;   // max ~5deg
      const rotateY = (centerX - x) / 20;
      imageFrame.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    imageFrame.addEventListener('mouseleave', () => {
      imageFrame.style.transform = 'perspective(500px) rotateX(0) rotateY(0) scale(1)';
    });
  }

  // ---- footer year auto-update ----
  const yearSpan = document.querySelector('.credit-note p');
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.innerHTML = yearSpan.innerHTML.replace('2025', currentYear);
  }
});