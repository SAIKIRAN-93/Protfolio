document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('#sidebar ul li a');
    
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

    // Add scroll-triggered animations
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
                section.classList.add('visible');
            }
        });
    });
});
