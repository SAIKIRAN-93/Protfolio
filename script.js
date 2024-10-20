document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('#sidebar ul li a');
    
    // Particle.js configuration
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });

    // Split section titles into floating letters
    sections.forEach(section => {
        const title = section.querySelector('h2');
        if (title) {
            const letters = title.textContent.split('');
            title.innerHTML = '';
            letters.forEach(letter => {
                const span = document.createElement('span');
                span.className = 'floating-letter';
                span.textContent = letter;
                span.style.setProperty('--float-x', Math.random() * 2 - 1);
                span.style.setProperty('--float-y', Math.random() * 2 - 1);
                title.appendChild(span);
            });
        }
    });

    // Intersection Observer for section visibility
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible', 'active');
                updateActiveNavLink(entry.target.id);
                if (entry.target.id === 'skills') {
                    animateSkills();
                }
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Floating letter animation on scroll
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const letters = section.querySelectorAll('.floating-letter');
            const scrollProgress = 1 - Math.max(0, Math.min(1, (rect.top + rect.height / 2) / window.innerHeight));
            
            letters.forEach(letter => {
                if (scrollProgress > 0 && scrollProgress < 1) {
                    letter.classList.add('float');
                } else {
                    letter.classList.remove('float');
                }
            });
        });
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

    // Animate skills
    function animateSkills() {
        const skillItems = document.querySelectorAll('.skill-list li');
        skillItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 100}ms`;
        });
    }

    // Typing effect for the introduction
    const introText = "A motivated individual with in-depth knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my skills.";
    const introElement = document.querySelector('#about-text');
    let i = 0;
    function typeWriter() {
        if (i < introText.length) {
            introElement.innerHTML += introText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();

    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 200}ms`;
    });

    // Animate certification items
    const certItems = document.querySelectorAll('.certification-list li');
    certItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 200}ms`;
    });

    // Create bubbles
    function createBubbles() {
        const bubblesContainer = document.getElementById('bubbles');
        for (let i = 0; i < 50; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            bubble.style.left = `${Math.random() * 100}%`;
            bubble.style.width = `${Math.random() * 20 + 10}px`;
            bubble.style.height = bubble.style.width;
            bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;
            bubble.style.animationDelay = `${Math.random() * 5}s`;
            bubblesContainer.appendChild(bubble);
        }
    }

    // Create fish
    function createFish() {
        const fishContainer = document.getElementById('fish-container');
        for (let i = 0; i < 5; i++) {
            const fish = document.createElement('div');
            fish.classList.add('fish');
            fish.style.top = `${Math.random() * 80 + 10}%`;
            fish.style.animationDuration = `${Math.random() * 10 + 15}s`;
            fish.style.animationDelay = `${Math.random() * 5}s`;
            fishContainer.appendChild(fish);
        }
    }

    // Call functions to create underwater elements
    createBubbles();
    createFish();

    // Add parallax effect
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        document.querySelectorAll('.section').forEach(section => {
            const moveX = (mouseX - 0.5) * 20;
            const moveY = (mouseY - 0.5) * 20;
            section.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    // Scroll-triggered animations
    const scrollAnimElements = document.querySelectorAll('.scroll-anim');
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, { threshold: 0.1 });

    scrollAnimElements.forEach(el => scrollObserver.observe(el));

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Form submitted! (This is a placeholder - implement actual form submission)');
    });

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    });

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }
});
