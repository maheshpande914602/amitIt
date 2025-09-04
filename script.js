        // Course data with detailed syllabus
        const courseData = {
            java: {
                title: 'Java & Spring Boot Mastery',
                duration: '6 Months',
                syllabus: [
                    {
                        module: 'Module 1: Core Java Fundamentals',
                        duration: '6 Weeks',
                        topics: [
                            'Java Syntax and Basic Programming',
                            'Object-Oriented Programming Concepts',
                            'Exception Handling and Collections',
                            'Multithreading and Concurrency',
                            'File I/O and Serialization'
                        ]
                    },
                    {
                        module: 'Module 2: Advanced Java',
                        duration: '4 Weeks',
                        topics: [
                            'JDBC and Database Connectivity',
                            'Java 8+ Features (Lambda, Streams)',
                            'Design Patterns',
                            'JVM Internals and Performance Tuning'
                        ]
                    },
                    {
                        module: 'Module 3: Spring Framework',
                        duration: '6 Weeks',
                        topics: [
                            'Spring Core and Dependency Injection',
                            'Spring MVC Architecture',
                            'Spring Data JPA',
                            'Spring Security Implementation',
                            'RESTful Web Services'
                        ]
                    },
                    {
                        module: 'Module 4: Spring Boot & Microservices',
                        duration: '6 Weeks',
                        topics: [
                            'Spring Boot Auto-configuration',
                            'Building REST APIs',
                            'Microservices Architecture',
                            'Service Discovery and Load Balancing',
                            'API Gateway and Circuit Breaker'
                        ]
                    },
                    {
                        module: 'Module 5: Project & Deployment',
                        duration: '2 Weeks',
                        topics: [
                            'Capstone Project Development',
                            'Docker Containerization',
                            'Cloud Deployment (AWS/Azure)',
                            'CI/CD Pipeline Setup'
                        ]
                    }
                ]
            },
            python: {
                title: 'Python Full-Stack Development',
                duration: '5 Months',
                syllabus: [
                    {
                        module: 'Module 1: Python Fundamentals',
                        duration: '4 Weeks',
                        topics: [
                            'Python Syntax and Data Types',
                            'Control Structures and Functions',
                            'Object-Oriented Programming',
                            'File Handling and Exception Management',
                            'Libraries and Package Management'
                        ]
                    },
                    {
                        module: 'Module 2: Web Development with Django',
                        duration: '6 Weeks',
                        topics: [
                            'Django Framework Architecture',
                            'Models, Views, and Templates',
                            'Django ORM and Database Integration',
                            'User Authentication and Authorization',
                            'Django REST Framework'
                        ]
                    },
                    {
                        module: 'Module 3: Flask and API Development',
                        duration: '4 Weeks',
                        topics: [
                            'Flask Framework Basics',
                            'Building RESTful APIs',
                            'Database Integration with SQLAlchemy',
                            'API Testing and Documentation'
                        ]
                    },
                    {
                        module: 'Module 4: Data Science Basics',
                        duration: '4 Weeks',
                        topics: [
                            'NumPy and Pandas for Data Manipulation',
                            'Data Visualization with Matplotlib',
                            'Basic Machine Learning with Scikit-learn',
                            'Working with APIs and Web Scraping'
                        ]
                    },
                    {
                        module: 'Module 5: Deployment & DevOps',
                        duration: '2 Weeks',
                        topics: [
                            'Application Deployment',
                            'Docker and Containerization',
                            'Cloud Platforms (Heroku, AWS)',
                            'Final Project Presentation'
                        ]
                    }
                ]
            },
            frontend: {
                title: 'React & Angular Development',
                duration: '4 Months',
                syllabus: [
                    {
                        module: 'Module 1: JavaScript Fundamentals',
                        duration: '3 Weeks',
                        topics: [
                            'ES6+ Features and Modern JavaScript',
                            'DOM Manipulation and Event Handling',
                            'Asynchronous Programming (Promises, Async/Await)',
                            'JavaScript Design Patterns'
                        ]
                    },
                    {
                        module: 'Module 2: React.js Development',
                        duration: '6 Weeks',
                        topics: [
                            'React Components and JSX',
                            'State Management and Props',
                            'React Hooks (useState, useEffect, Custom Hooks)',
                            'Context API and State Management',
                            'React Router for Navigation'
                        ]
                    },
                    {
                        module: 'Module 3: Advanced React',
                        duration: '3 Weeks',
                        topics: [
                            'Redux for State Management',
                            'Performance Optimization',
                            'Testing React Applications',
                            'React with TypeScript'
                        ]
                    },
                    {
                        module: 'Module 4: Angular Framework',
                        duration: '4 Weeks',
                        topics: [
                            'Angular Architecture and Components',
                            'Services and Dependency Injection',
                            'Routing and Navigation',
                            'Forms and Validation',
                            'HTTP Client and API Integration'
                        ]
                    },
                    {
                        module: 'Module 5: Project Development',
                        duration: '2 Weeks',
                        topics: [
                            'Full-Stack Application Development',
                            'Deployment and Hosting',
                            'Performance Optimization',
                            'Portfolio Project Completion'
                        ]
                    }
                ]
            },
            devops: {
                title: 'DevOps & Cloud Engineering',
                duration: '5 Months',
                syllabus: [
                    {
                        module: 'Module 1: DevOps Fundamentals',
                        duration: '3 Weeks',
                        topics: [
                            'DevOps Culture and Practices',
                            'Version Control with Git',
                            'Linux System Administration',
                            'Shell Scripting and Automation'
                        ]
                    },
                    {
                        module: 'Module 2: Containerization',
                        duration: '4 Weeks',
                        topics: [
                            'Docker Fundamentals',
                            'Container Orchestration with Kubernetes',
                            'Docker Compose and Multi-container Apps',
                            'Container Security Best Practices'
                        ]
                    },
                    {
                        module: 'Module 3: CI/CD Pipelines',
                        duration: '4 Weeks',
                        topics: [
                            'Jenkins for Continuous Integration',
                            'GitLab CI/CD Pipelines',
                            'Automated Testing Integration',
                            'Deployment Strategies'
                        ]
                    },
                    {
                        module: 'Module 4: Cloud Platforms',
                        duration: '6 Weeks',
                        topics: [
                            'AWS Services (EC2, S3, RDS, Lambda)',
                            'Azure Cloud Services',
                            'Infrastructure as Code (Terraform)',
                            'Cloud Security and Monitoring'
                        ]
                    },
                    {
                        module: 'Module 5: OpenShift & Advanced Topics',
                        duration: '3 Weeks',
                        topics: [
                            'Red Hat OpenShift Platform',
                            'Monitoring and Logging (ELK Stack)',
                            'Infrastructure Automation',
                            'Capstone DevOps Project'
                        ]
                    }
                ]
            },
            microservices: {
                title: 'Microservices Architecture',
                duration: '4 Months',
                syllabus: [
                    {
                        module: 'Module 1: Microservices Fundamentals',
                        duration: '3 Weeks',
                        topics: [
                            'Monolith vs Microservices',
                            'Domain-Driven Design',
                            'Service Decomposition Strategies',
                            'Communication Patterns'
                        ]
                    },
                    {
                        module: 'Module 2: Service Development',
                        duration: '5 Weeks',
                        topics: [
                            'Building Services with Spring Boot',
                            'RESTful API Design',
                            'Database per Service Pattern',
                            'Event-Driven Architecture'
                        ]
                    },
                    {
                        module: 'Module 3: Service Communication',
                        duration: '4 Weeks',
                        topics: [
                            'Synchronous Communication (REST, GraphQL)',
                            'Asynchronous Messaging (RabbitMQ, Kafka)',
                            'Service Discovery and Load Balancing',
                            'Circuit Breaker Pattern'
                        ]
                    },
                    {
                        module: 'Module 4: Infrastructure & Deployment',
                        duration: '3 Weeks',
                        topics: [
                            'API Gateway Implementation',
                            'Containerization with Docker',
                            'Orchestration with Kubernetes',
                            'Monitoring and Observability'
                        ]
                    },
                    {
                        module: 'Module 5: Advanced Topics',
                        duration: '1 Week',
                        topics: [
                            'Security in Microservices',
                            'Data Consistency Patterns',
                            'Performance Optimization',
                            'Real-world Case Studies'
                        ]
                    }
                ]
            },
            fullstack: {
                title: 'Full-Stack Web Development',
                duration: '7 Months',
                syllabus: [
                    {
                        module: 'Module 1: Frontend Fundamentals',
                        duration: '4 Weeks',
                        topics: [
                            'HTML5, CSS3, and Responsive Design',
                            'JavaScript ES6+ and DOM Manipulation',
                            'CSS Frameworks (Bootstrap, Tailwind)',
                            'Version Control with Git'
                        ]
                    },
                    {
                        module: 'Module 2: Frontend Frameworks',
                        duration: '6 Weeks',
                        topics: [
                            'React.js Development',
                            'Component Architecture and State Management',
                            'React Router and Navigation',
                            'API Integration and HTTP Requests'
                        ]
                    },
                    {
                        module: 'Module 3: Backend Development',
                        duration: '6 Weeks',
                        topics: [
                            'Node.js and Express.js',
                            'RESTful API Development',
                            'Database Design and Integration',
                            'Authentication and Authorization'
                        ]
                    },
                    {
                        module: 'Module 4: Database Management',
                        duration: '3 Weeks',
                        topics: [
                            'SQL and NoSQL Databases',
                            'MongoDB and Mongoose',
                            'Database Optimization',
                            'Data Modeling Best Practices'
                        ]
                    },
                    {
                        module: 'Module 5: Advanced Topics',
                        duration: '4 Weeks',
                        topics: [
                            'Real-time Applications (WebSockets)',
                            'Testing (Unit, Integration, E2E)',
                            'Performance Optimization',
                            'Security Best Practices'
                        ]
                    },
                    {
                        module: 'Module 6: Deployment & DevOps',
                        duration: '3 Weeks',
                        topics: [
                            'Cloud Deployment (AWS, Heroku)',
                            'CI/CD Pipeline Setup',
                            'Docker Containerization',
                            'Monitoring and Maintenance'
                        ]
                    },
                    {
                        module: 'Module 7: Capstone Project',
                        duration: '2 Weeks',
                        topics: [
                            'Full-Stack Application Development',
                            'Project Planning and Architecture',
                            'Code Review and Best Practices',
                            'Portfolio Presentation'
                        ]
                    }
                ]
            }
        };

        // Modal functions
        function openCourseModal(courseId) {
            const course = courseData[courseId];
            if (!course) return;

            document.getElementById('modalTitle').textContent = course.title;
            document.getElementById('courseDuration').textContent = course.duration;
            
            const syllabusContent = document.getElementById('syllabusContent');
            syllabusContent.innerHTML = '';
            
            course.syllabus.forEach((module, index) => {
                const moduleDiv = document.createElement('div');
                moduleDiv.className = 'bg-gray-700 rounded-lg p-6 border border-gray-600';
                
                moduleDiv.innerHTML = `
                    <div class="flex justify-between items-center mb-4">
                        <h4 class="text-lg font-bold text-orange-400">${module.module}</h4>
                        <span class="text-purple-400 font-semibold">${module.duration}</span>
                    </div>
                    <ul class="space-y-2">
                        ${module.topics.map(topic => `
                            <li class="flex items-start">
                                <span class="text-green-400 mr-2 mt-1">•</span>
                                <span class="text-gray-300">${topic}</span>
                            </li>
                        `).join('')}
                    </ul>
                `;
                
                syllabusContent.appendChild(moduleDiv);
            });
            
            document.getElementById('courseModal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeCourseModal() {
            document.getElementById('courseModal').classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        function openSignupModal() {
            closeCourseModal();
            document.getElementById('signupModal').classList.remove('hidden');
        }

        function closeSignupModal() {
            document.getElementById('signupModal').classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        function openLoginModal() {
            closeCourseModal();
            document.getElementById('loginModal').classList.remove('hidden');
        }

        function closeLoginModal() {
            document.getElementById('loginModal').classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        function switchToLogin() {
            closeSignupModal();
            openLoginModal();
        }

        function switchToSignup() {
            closeLoginModal();
            openSignupModal();
        }

        // Close modals when clicking outside
        document.getElementById('courseModal').addEventListener('click', function(e) {
            if (e.target === this) closeCourseModal();
        });

        document.getElementById('signupModal').addEventListener('click', function(e) {
            if (e.target === this) closeSignupModal();
        });

        document.getElementById('loginModal').addEventListener('click', function(e) {
            if (e.target === this) closeLoginModal();
        });

        // User state management
        let currentUser = null;

        // Form submission handlers
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const formType = this.closest('#signupModal') ? 'signup' : 
                               this.closest('#loginModal') ? 'login' : 'contact';
                
                if (formType === 'signup') {
                    alert('Account created successfully! Welcome to Amit IT!');
                    closeSignupModal();
                } else if (formType === 'login') {
                    handleLogin(this);
                } else {
                    alert('Thank you for your interest! We will contact you soon.');
                }
            });
        });

        // Login API handler
        async function handleLogin(form) {
            const email = form.querySelector('input[type="email"]').value;
            const password = form.querySelector('input[type="password"]').value;
            const submitBtn = form.querySelector('button[type="submit"]');
            
            // Show loading state
            submitBtn.textContent = 'Logging in...';
            submitBtn.disabled = true;
            
            try {
                // Call the login API
                const response = await fetch('https://your-api-endpoint.com/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                });
                
                if (response.ok) {
                    const userData = await response.json();
                    
                    // Set current user with dummy data for now
                    currentUser = {
                        name: 'Amit Verma',
                        email: email,
                        phone: '+91 9876543210',
                        enrolledCourses: ['Java & Spring Boot', 'DevOps & Cloud'],
                        completedModules: 12,
                        totalModules: 24,
                        progress: 50,
                        joinDate: '2024-01-15',
                        nextClass: 'Spring Security - Tomorrow 10:00 AM',
                        achievements: ['First Project Completed', 'Perfect Attendance', 'Top Performer'],
                        profilePicture: '👨‍💻'
                    };
                    
                    closeLoginModal();
                    showUserProfile();
                    updateNavigation();
                    
                } else {
                    throw new Error('Invalid credentials');
                }
                
            } catch (error) {
                // For demo purposes, if API fails, use dummy login
                if (email === 'av24soft@gmail.com' && password === 'BXLinx!6') {
                    currentUser = {
                        name: 'Amit Verma',
                        email: email,
                        phone: '+91 9876543210',
                        enrolledCourses: ['Java & Spring Boot', 'DevOps & Cloud'],
                        completedModules: 12,
                        totalModules: 24,
                        progress: 50,
                        joinDate: '2024-01-15',
                        nextClass: 'Spring Security - Tomorrow 10:00 AM',
                        achievements: ['First Project Completed', 'Perfect Attendance', 'Top Performer'],
                        profilePicture: '👨‍💻'
                    };
                    
                    closeLoginModal();
                    showUserProfile();
                    updateNavigation();
                } else {
                    alert('Invalid email or password. Please try again.');
                }
            } finally {
                // Reset button state
                submitBtn.textContent = 'Login';
                submitBtn.disabled = false;
            }
        }

        // Update navigation for logged-in user
        function updateNavigation() {
            const navButtons = document.querySelector('.flex.items-center.space-x-3');
            navButtons.innerHTML = `
                <div class="flex items-center space-x-3">
                    <span class="text-gray-300">Welcome, ${currentUser.name}</span>
                    <button onclick="showUserProfile()" class="text-white hover:text-blue-400 px-4 py-2 rounded-lg text-sm font-medium transition border border-transparent hover:border-blue-400">
                        Profile
                    </button>
                    <button onclick="logout()" class="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-red-600 hover:to-red-700 transition transform hover:scale-105 shadow-lg">
                        Logout
                    </button>
                </div>
            `;
        }

        // Show user profile
        function showUserProfile() {
            if (!currentUser) return;
            
            document.getElementById('userProfileModal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        // Close user profile
        function closeUserProfile() {
            document.getElementById('userProfileModal').classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        // Logout function
        function logout() {
            currentUser = null;
            location.reload(); // Simple way to reset the page
        }

        // Mobile menu toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // Smooth scrolling function
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Add smooth scrolling to all navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                // Close mobile menu if open
                document.getElementById('mobile-menu').classList.add('hidden');
            });
        });

        // Add scroll effect to navbar
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('nav');
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-xl');
            } else {
                navbar.classList.remove('shadow-xl');
            }
        });

        // Add some interactive effects
        document.querySelectorAll('.card-hover').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 20px 40px rgba(147,51,234,0.3)';
            });
            card.addEventListener('mouseleave', function() {
                this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
            });
        });

        // Live Chat Functionality
        const chatButton = document.getElementById('chatButton');
        const chatBox = document.getElementById('chatBox');
        const closeChatBox = document.getElementById('closeChatBox');
        const chatInput = document.getElementById('chatInput');
        const sendMessage = document.getElementById('sendMessage');
        const chatMessages = document.getElementById('chatMessages');

        const chatResponses = {
            'hello': 'Hello! Welcome to Amit IT Institute! How can I help you today?',
            'hi': 'Hi there! I\'m here to help you with any questions about our courses.',
            'courses': 'We offer Java & Spring Boot, Python Development, React & Angular, DevOps & Cloud, Microservices, and Full Stack Development courses. Which one interests you?',
            'fees': 'Our course fees vary by program. Please contact us at +91 7507502027 for detailed pricing information.',
            'duration': 'Course durations range from 4-7 months depending on the program. Each course includes hands-on projects and placement assistance.',
            'placement': 'We have a 95% placement rate with an average package of ₹8.5L. Our students work at top companies like TCS, Infosys, Wipro, and more!',
            'location': 'We\'re located at Pentagon Tower, Karve Nagar, Pune. We offer both online and offline classes.',
            'contact': 'You can reach us at +91 7507502027 or visit our website at www.amitit.com',
            'default': 'That\'s a great question! For detailed information, please call us at +91 7507502027 or fill out our contact form. Our team will get back to you soon!'
        };

        chatButton.addEventListener('click', () => {
            chatBox.classList.toggle('hidden');
        });

        closeChatBox.addEventListener('click', () => {
            chatBox.classList.add('hidden');
        });

        function sendChatMessage() {
            const message = chatInput.value.trim();
            if (!message) return;

            // Add user message
            const userMessage = document.createElement('div');
            userMessage.className = 'bg-gray-600 text-white p-3 rounded-lg max-w-xs ml-auto';
            userMessage.innerHTML = `<p class="text-sm">${message}</p>`;
            chatMessages.appendChild(userMessage);

            // Clear input
            chatInput.value = '';

            // Generate response
            setTimeout(() => {
                const response = getChatResponse(message.toLowerCase());
                const botMessage = document.createElement('div');
                botMessage.className = 'bg-blue-500 text-white p-3 rounded-lg max-w-xs';
                botMessage.innerHTML = `<p class="text-sm">${response}</p>`;
                chatMessages.appendChild(botMessage);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);

            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function getChatResponse(message) {
            for (const key in chatResponses) {
                if (message.includes(key)) {
                    return chatResponses[key];
                }
            }
            return chatResponses.default;
        }

        sendMessage.addEventListener('click', sendChatMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendChatMessage();
        });

        // Testimonials Carousel
        let currentTestimonial = 0;
        const testimonialSlides = document.getElementById('testimonialSlides');
        const testimonialIndicators = document.querySelectorAll('.testimonial-indicator');
        const totalTestimonials = 3;

        function showTestimonial(index) {
            currentTestimonial = index;
            testimonialSlides.style.transform = `translateX(-${index * 100}%)`;
            
            testimonialIndicators.forEach((indicator, i) => {
                if (i === index) {
                    indicator.classList.remove('bg-gray-400');
                    indicator.classList.add('bg-blue-500');
                } else {
                    indicator.classList.remove('bg-blue-500');
                    indicator.classList.add('bg-gray-400');
                }
            });
        }

        document.getElementById('nextTestimonial').addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
            showTestimonial(currentTestimonial);
        });

        document.getElementById('prevTestimonial').addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
            showTestimonial(currentTestimonial);
        });

        testimonialIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showTestimonial(index);
            });
        });

        // Auto-advance testimonials
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
            showTestimonial(currentTestimonial);
        }, 5000);

        // Skills Assessment
        const courseRecommendations = {
            beginner: {
                course: 'fullstack',
                title: 'Full-Stack Web Development',
                description: 'Perfect for beginners! Start with HTML, CSS, JavaScript and progress to full-stack development.',
                icon: '🌐',
                duration: '7 Months',
                highlights: ['Step-by-step learning', 'No prior experience needed', 'Complete web development']
            },
            intermediate: {
                course: 'java',
                title: 'Java & Spring Boot',
                description: 'Great choice for those with basic programming knowledge. Master enterprise Java development.',
                icon: '☕',
                duration: '6 Months',
                highlights: ['Industry-standard technology', 'High demand skills', 'Enterprise development']
            },
            experienced: {
                course: 'microservices',
                title: 'Microservices Architecture',
                description: 'Perfect for experienced developers looking to master modern architecture patterns.',
                icon: '🏗️',
                duration: '4 Months',
                highlights: ['Advanced architecture', 'Scalable systems', 'Modern development']
            },
            expert: {
                course: 'devops',
                title: 'DevOps & Cloud Engineering',
                description: 'Ideal for experts wanting to specialize in DevOps, cloud platforms, and automation.',
                icon: '🔧',
                duration: '5 Months',
                highlights: ['Cloud expertise', 'Automation skills', 'High-paying career path']
            }
        };

        function nextQuestion(level) {
            const recommendation = courseRecommendations[level];
            
            document.getElementById('assessmentQuestion').classList.add('hidden');
            document.getElementById('assessmentResult').classList.remove('hidden');
            
            const recommendedCourse = document.getElementById('recommendedCourse');
            recommendedCourse.innerHTML = `
                <div class="text-center">
                    <div class="text-6xl mb-4">${recommendation.icon}</div>
                    <h4 class="text-2xl font-bold text-white mb-2">${recommendation.title}</h4>
                    <p class="text-gray-300 mb-4">${recommendation.description}</p>
                    <div class="flex justify-center items-center space-x-6 text-sm">
                        <div class="flex items-center space-x-2">
                            <span class="text-cyan-400">⏱️</span>
                            <span class="text-gray-300">${recommendation.duration}</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <span class="text-green-400">✓</span>
                            <span class="text-gray-300">Placement Support</span>
                        </div>
                    </div>
                    <div class="mt-4 flex flex-wrap justify-center gap-2">
                        ${recommendation.highlights.map(highlight => 
                            `<span class="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs">${highlight}</span>`
                        ).join('')}
                    </div>
                </div>
            `;
            
            document.getElementById('viewCourseBtn').setAttribute('onclick', `openCourseModal('${recommendation.course}')`);
        }

        function resetAssessment() {
            document.getElementById('assessmentQuestion').classList.remove('hidden');
            document.getElementById('assessmentResult').classList.add('hidden');
        }

        (function() {
    function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
            var d = b.createElement('script');
            d.innerHTML = "window.__CF$cv$params={r:'9799c5ee33b758c9',t:'MTc1Njk0OTk2Ny4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
            b.getElementsByTagName('head')[0].appendChild(d);
        }
    }

    if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);

        if ('loading' !== document.readyState) {
            c();
        } else if (window.addEventListener) {
            document.addEventListener('DOMContentLoaded', c);
        } else {
            var e = document.onreadystatechange || function() {};
            document.onreadystatechange = function(b) {
                e(b);
                if ('loading' !== document.readyState) {
                    document.onreadystatechange = e;
                    c();
                }
            }
        }
    }
})();


