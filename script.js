// Main application initialization
document.addEventListener("DOMContentLoaded", () => {
    // Initialize all components
    initSmoothScrolling();
    initNavbarEffects();
    initMobileMenu();
    initRevealAnimations();
    initModals();
    initForms();
    initNavbarScroll();
    initPlacementSlider();
    initCounters();
    initChatBox();
});

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    // Smooth scroll for anchor links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Helper function for buttons to scroll to sections
    window.scrollToSection = function(id) { 
        document.getElementById(id)?.scrollIntoView({behavior: 'smooth', block: 'start'}); 
    }
}

// ===== NAVBAR EFFECTS =====
function initNavbarEffects() {
    // Navbar background change on scroll
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(0,0,0,0.6)";
            navbar.style.backdropFilter = "blur(8px)";
        } else {
            navbar.style.background = "transparent";
        }
    });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const $ = (s) => document.querySelector(s);
    
    // Mobile menu toggle
    $('#mobile-menu-btn')?.addEventListener('click', () => {
        $('#mobile-menu')?.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', () => {
            const mm = $('#mobile-menu');
            if (mm && !mm.classList.contains('hidden')) {
                mm.classList.add('hidden');
            }
        });
    });
}

// ===== REVEAL ANIMATIONS =====
function initRevealAnimations() {
    // Reveal-on-scroll using IntersectionObserver
    const io = new IntersectionObserver(entries => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                io.unobserve(entry.target);
            }
        }
    }, { threshold: 0.15 });
    
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

// ===== MODALS =====
function initModals() {
    // Course modal functions
    window.openCourseModal = function(courseId) {
        const course = courseData[courseId];
        if (!course) return;
        
        document.getElementById('modalTitle').textContent = course.title;
        document.getElementById('courseDuration').textContent = course.duration;
        
        const wrap = document.getElementById('syllabusContent');
        wrap.innerHTML = '';
        
        course.syllabus.forEach(m => {
            const div = document.createElement('div');
            div.className = 'glass rounded-xl border border-white/10 p-4';
            div.innerHTML = `
                <div class="flex items-center justify-between mb-2">
                    <span class="text-orange-300 font-semibold">${m.module}</span>
                    <span class="text-purple-300">${m.duration}</span>
                </div>
                <ul class="list-disc list-inside text-indigo-100/90 text-sm">
                    ${m.topics.map(t => `<li>${t}</li>`).join('')}
                </ul>
            `;
            wrap.appendChild(div);
        });
        
        const modal = document.getElementById('courseModal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    window.closeCourseModal = function() {
        const modal = document.getElementById('courseModal');
        modal?.classList.add('hidden');
        modal?.classList.remove('flex');
    }

    // Signup modal functions
    window.openSignupModal = function() {
        closeCourseModal();
        const modal = document.getElementById('signupModal');
        modal?.classList.remove('hidden');
        modal?.classList.add('flex');
    }

    window.closeSignupModal = function() {
        const modal = document.getElementById('signupModal');
        modal?.classList.add('hidden');
        modal?.classList.remove('flex');
    }

    // Login modal functions
    window.openLoginModal = function() {
        closeCourseModal();
        const modal = document.getElementById('loginModal');
        modal?.classList.remove('hidden');
        modal?.classList.add('flex');
    }

    window.closeLoginModal = function() {
        const modal = document.getElementById('loginModal');
        modal?.classList.add('hidden');
        modal?.classList.remove('flex');
    }

    // Modal switching functions
    window.switchToLogin = function() {
        closeSignupModal();
        openLoginModal();
    }

    window.switchToSignup = function() {
        closeLoginModal();
        openSignupModal();
    }
}

// ===== FORM HANDLING =====
function initForms() {
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Login form handling
            if (form.closest('#loginModal')) {
                const email = form.querySelector('input[type="email"]').value.trim();
                const pass = form.querySelector('input[type="password"]').value.trim();
                
                if (email === 'av24soft@gmail.com' && pass === 'BXLinx!6') {
                    alert('Logged in (demo)!');
                    closeLoginModal();
                } else {
                    alert('Demo: use the credentials shown in the modal.');
                }
                return;
            }
            
            // Signup form handling
            if (form.closest('#signupModal')) {
                alert('Account created (demo). Welcome to Amit IT!');
                closeSignupModal();
                return;
            }
            
            // Contact form handling
            if (form.closest('#contact')) {
                alert('Thank you! We will contact you soon.');
                return;
            }
        });
    });
}

// ===== NAVBAR SCROLL & HIGHLIGHT =====
function initNavbarScroll() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('a.navlink');
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const offset = 120;
    
    function updateNav() {
        // Add/remove shadow based on scroll position
        if (window.scrollY > 2) {
            nav?.classList.add('nav-scrolled');
        } else {
            nav?.classList.remove('nav-scrolled');
        }
        
        // Highlight active section in navbar
        let current = sections[0]?.id || '';
        const y = window.scrollY + offset + 1;
        
        for (const sec of sections) {
            if (y >= sec.offsetTop) current = sec.id;
        }
        
        navLinks.forEach(link => {
            link.classList.toggle('active-link', link.getAttribute('href') === '#' + current);
        });
    }
    
    window.addEventListener('scroll', updateNav, { passive: true });
    window.addEventListener('resize', updateNav);
    updateNav();
}

// ===== PLACEMENT SLIDER =====
function initPlacementSlider() {
    const placeTrack = document.getElementById('placeTrack');
    const placePrev = document.getElementById('placePrev');
    const placeNext = document.getElementById('placeNext');
    
    if (!placeTrack) return;
    
    placeTrack.classList.add('cursor-grab');
    
    // Drag (mouse) functionality
    let isDown = false;
    let startX = 0;
    let scrollStart = 0;
    let resumeTimer = null;
    let autoplayTimer = null;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Mouse event handlers
    placeTrack.addEventListener('mousedown', (e) => {
        isDown = true;
        placeTrack.classList.add('cursor-grabbing');
        startX = e.pageX;
        scrollStart = placeTrack.scrollLeft;
        clearAutoplay();
    });
    
    placeTrack.addEventListener('mouseleave', () => {
        isDown = false;
        placeTrack.classList.remove('cursor-grabbing');
    });
    
    placeTrack.addEventListener('mouseup', () => {
        isDown = false;
        placeTrack.classList.remove('cursor-grabbing');
        resumeAutoplaySoon();
    });
    
    placeTrack.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const walk = (e.pageX - startX) * 1.5;
        placeTrack.scrollLeft = scrollStart - walk;
    });
    
    // Touch event handlers
    placeTrack.addEventListener('touchstart', clearAutoplay, { passive: true });
    placeTrack.addEventListener('touchend', resumeAutoplaySoon, { passive: true });
    
    // Hover pause/resume
    placeTrack.addEventListener('mouseenter', clearAutoplay);
    placeTrack.addEventListener('focusin', clearAutoplay);
    placeTrack.addEventListener('mouseleave', resumeAutoplaySoon);
    placeTrack.addEventListener('focusout', resumeAutoplaySoon);
    
    // Navigation buttons
    function scrollAmount() {
        return Math.min(420, placeTrack.clientWidth * 0.85);
    }
    
    function scrollCards(dir) {
        placeTrack.scrollBy({ left: dir * scrollAmount(), behavior: 'smooth' });
    }
    
    placePrev?.addEventListener('click', () => {
        clearAutoplay();
        scrollCards(-1);
        resumeAutoplaySoon();
    });
    
    placeNext?.addEventListener('click', () => {
        clearAutoplay();
        scrollCards(1);
        resumeAutoplaySoon();
    });
    
    // Autoplay functionality
    const STEP_MS = 2600;
    
    function tick() {
        const nearEnd = placeTrack.scrollLeft + placeTrack.clientWidth >= placeTrack.scrollWidth - 2;
        if (nearEnd) {
            placeTrack.scrollTo({ left: 0, behavior: 'auto' });
        } else {
            scrollCards(1);
        }
    }
    
    function startAutoplay() {
        if (prefersReduced) return;
        if (autoplayTimer) return;
        autoplayTimer = setInterval(tick, STEP_MS);
    }
    
    function clearAutoplay() {
        if (autoplayTimer) {
            clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
        if (resumeTimer) {
            clearTimeout(resumeTimer);
            resumeTimer = null;
        }
    }
    
    function resumeAutoplaySoon() {
        if (prefersReduced) return;
        if (resumeTimer) clearTimeout(resumeTimer);
        resumeTimer = setTimeout(() => startAutoplay(), 900);
    }
    
    // Handle page visibility changes
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearAutoplay();
        } else {
            resumeAutoplaySoon();
        }
    });
    
    startAutoplay();
}

// ===== COUNTER ANIMATION =====
function initCounters() {
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(counter => {
            const target = parseFloat(counter.getAttribute('data-target'));
            const suffix = counter.getAttribute('data-suffix') || '';
            let current = 0;
            const duration = 2000; // total animation time (ms)
            const startTime = performance.now();
            
            function update(now) {
                const progress = Math.min((now - startTime) / duration, 1);
                let value = target * progress;
                
                // Format value based on whether target has decimals
                if (target % 1 !== 0) {
                    value = value.toFixed(1);
                } else {
                    value = Math.floor(value);
                }
                
                counter.innerText = value + suffix;
                
                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            }
            
            requestAnimationFrame(update);
        });
    }
    
    // Trigger animation only when visible
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statObserver.disconnect(); // run once
            }
        });
    }, { threshold: 0.3 });
    
    document.querySelectorAll('.counter').forEach(el => statObserver.observe(el));
}

// ===== CHAT BOX =====
function initChatBox() {
    const chatToggle = document.getElementById("chatToggle");
    const chatBox = document.getElementById("chatBox");
    const chatClose = document.getElementById("chatClose");
    const chatInput = document.getElementById("chatInput");
    const chatSend = document.getElementById("chatSend");
    const chatMessages = document.getElementById("chatMessages");
    
    let firstMessage = true; // Track if it's the user's first message
    
    // Open/close chat
    chatToggle?.addEventListener("click", () => {
        chatBox.classList.toggle("hidden");
    });
    
    chatClose?.addEventListener("click", () => {
        chatBox.classList.add("hidden");
    });
    
    // Send message functionality
    function sendMessage() {
        const msg = chatInput.value.trim();
        if (!msg) return;
        
        // User message bubble
        const userMsg = document.createElement("div");
        userMsg.className = "text-right";
        userMsg.innerHTML = `<div class="inline-block bg-indigo-600 text-white px-3 py-2 rounded-xl">${msg}</div>`;
        chatMessages.appendChild(userMsg);
        
        chatInput.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Bot reply
        setTimeout(() => {
            const botMsg = document.createElement("div");
            botMsg.className = "text-left";
            
            if (firstMessage) {
                botMsg.innerHTML = `<div class="inline-block bg-slate-200 text-slate-900 px-3 py-2 rounded-xl">
                    Thanks for reaching out! 🚀<br/>Can you please share your <b>Name</b> and <b>Mobile Number</b> so we can assist you better?
                </div>`;
                firstMessage = false;
            } else {
                botMsg.innerHTML = `<div class="inline-block bg-slate-200 text-slate-900 px-3 py-2 rounded-xl">
                    Got it ✅ Our team will get back to you shortly!
                </div>`;
            }
            
            chatMessages.appendChild(botMsg);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 800);
    }
    
    // Event listeners for sending messages
    chatSend?.addEventListener("click", sendMessage);
    chatInput?.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendMessage();
    });
}

// Fallback for global functions
window.openCourseModal ||= (() => {});
window.closeCourseModal ||= (() => {});
window.openSignupModal ||= (() => {});
window.closeSignupModal ||= (() => {});
window.openLoginModal ||= (() => {});
window.closeLoginModal ||= (() => {});
window.switchToLogin ||= (() => {});
window.switchToSignup ||= (() => {});