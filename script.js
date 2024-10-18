document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('#sidebar ul li a');

    // Intersection Observer for section visibility
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                updateActiveNavLink(entry.target.id);
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Update active navigation link
    function updateActiveNavLink(sectionId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }

    // Skill bar animation
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = percentage;
        }, 500);
    });

    // Typing effect for the introduction
    const introText = "A motivated individual with in-depth knowledge of languages and development tools...";
    const introElement = document.querySelector('#about p');
    let i = 0;
    function typeWriter() {
        if (i < introText.length) {
            introElement.innerHTML += introText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();
});