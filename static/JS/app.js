const { createApp } = Vue;

createApp({
    data() {
        return {
            isMenuOpen: false,
            isScrolled: false,
            activeSection: 'home',
            parallaxOffset: 0,
            heroTextStyle: {
                opacity: '0',
                transform: 'translateY(30px)',
                transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
            },
            heroImageStyle: {
                opacity: '0',
                transform: 'translateY(30px)',
                transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s'
            },
            navLinks: [
                { id: 'home', text: 'Home', href: '#home' },
                { id: 'features', text: 'Features', href: '#features' },
                { id: 'services', text: 'Services', href: '#services' },
                { id: 'about', text: 'About', href: '#about' },
                { id: 'contact', text: 'Contact', href: '#contact' }
            ],
            stats: [
                { label: 'Active Patients', value: 10, suffix: 'K+', displayValue: '0K+' },
                { label: 'Healthcare Providers', value: 500, suffix: '+', displayValue: '0+' },
                { label: 'Satisfaction Rate', value: 98, suffix: '%', displayValue: '0%' }
            ],
            dashboardItems: [
                { icon: '🏥', title: 'Appointment Scheduled', subtitle: 'Today at 2:00 PM' },
                { icon: '💊', title: 'Prescription Ready', subtitle: 'Pick up at Pharmacy' },
                { icon: '📋', title: 'Lab Results Available', subtitle: 'View in Portal' }
            ],
            features: [
                {
                    title: 'Patient Management',
                    description: 'Digital patient profiles with complete medical history, allergy tracking, vaccination records, and secure QR-based Medical ID for emergency access.',
                    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M16 2L4 8V14C4 21.5 10.5 27.5 16 30C21.5 27.5 28 21.5 28 14V8L16 2Z" fill="#2563EB" fill-opacity="0.1"/>
                        <path d="M16 22C18.7614 22 21 19.7614 21 17C21 14.2386 18.7614 12 16 12C13.2386 12 11 14.2386 11 17C11 19.7614 13.2386 22 16 22Z" fill="#2563EB"/>
                    </svg>`
                },
                {
                    title: 'Appointment & Queue System',
                    description: 'Online appointment booking with real-time queue monitoring, SMS/Email notifications, and intelligent scheduling to minimize wait times.',
                    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <rect x="4" y="6" width="24" height="20" rx="2" fill="#2563EB" fill-opacity="0.1"/>
                        <path d="M8 14H24M8 18H20M8 22H16" stroke="#2563EB" stroke-width="2" stroke-linecap="round"/>
                    </svg>`
                },
                {
                    title: 'Electronic Medical Records',
                    description: 'Complete EMR system with doctor notes, lab results, imaging uploads, prescription history, and encrypted visit timeline.',
                    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M6 8H26C27.1046 8 28 8.89543 28 10V26C28 27.1046 27.1046 28 26 28H6C4.89543 28 4 27.1046 4 26V10C4 8.89543 4.89543 8 6 8Z" fill="#2563EB" fill-opacity="0.1"/>
                        <path d="M10 14H22M10 18H18M10 22H16" stroke="#2563EB" stroke-width="2" stroke-linecap="round"/>
                    </svg>`
                },
                {
                    title: 'AI-Assisted Diagnosis',
                    description: 'Advanced symptom checker, health risk scoring, abnormal lab result detection, and drug interaction warnings to support healthcare professionals.',
                    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="12" fill="#2563EB" fill-opacity="0.1"/>
                        <path d="M12 16L15 19L20 14" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`
                },
                {
                    title: 'Pharmacy & Prescription',
                    description: 'Electronic prescriptions, medicine availability lookup, automatic refill reminders, and controlled drug monitoring for safe medication management.',
                    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <rect x="6" y="4" width="20" height="24" rx="2" fill="#2563EB" fill-opacity="0.1"/>
                        <path d="M12 12H20M12 16H18M12 20H16" stroke="#2563EB" stroke-width="2" stroke-linecap="round"/>
                    </svg>`
                },
                {
                    title: 'Laboratory Integration',
                    description: 'Online lab test requests, automatic result uploads, normal range comparison, and critical value alerts for timely patient care.',
                    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="10" fill="#2563EB" fill-opacity="0.1"/>
                        <path d="M16 10V16L20 18" stroke="#2563EB" stroke-width="2" stroke-linecap="round"/>
                    </svg>`
                }
            ],
            services: [
                {
                    title: 'For Patients',
                    items: [
                        'Secure access to medical records',
                        'Easy appointment booking',
                        'Prescription management',
                        'Lab results in real-time',
                        'Emergency Medical ID'
                    ]
                },
                {
                    title: 'For Healthcare Providers',
                    items: [
                        'Integrated EMR system',
                        'AI-assisted diagnosis support',
                        'Patient queue management',
                        'Electronic prescriptions',
                        'Analytics dashboard'
                    ]
                },
                {
                    title: 'For Institutions',
                    items: [
                        'Multi-facility management',
                        'Billing & insurance tracking',
                        'Performance analytics',
                        'Inventory forecasting',
                        'Compliance reporting'
                    ]
                }
            ],
            benefits: [
                { title: 'Unified Records', description: 'Access medical records from any participating facility' },
                { title: 'AI-Powered Support', description: 'Advanced clinical decision support tools' },
                { title: 'Mobile-First Design', description: 'Responsive platform accessible from any device' },
                { title: 'Enterprise Security', description: 'End-to-end encryption and HIPAA compliance-ready' },
                { title: 'Scalable Solution', description: 'From single clinic to city-wide deployment' }
            ],
            securityFeatures: [
                'Two-Factor Authentication',
                'End-to-End Encryption',
                'Activity Logging',
                'Role-Based Access',
                'HIPAA-Inspired Compliance'
            ],
            featureCardRefs: [],
            serviceCardRefs: [],
            benefitItemRefs: [],
            benefitsCardRef: null,
            benefitsCardStyle: {
                opacity: '0',
                transform: 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
            },
            animatedElements: {
                features: new Set(),
                services: new Set(),
                benefits: new Set(),
                benefitsCard: false
            }
        }
    },
    mounted() {
        // Animate hero on mount
        setTimeout(() => {
            this.heroTextStyle.opacity = '1';
            this.heroTextStyle.transform = 'translateY(0)';
        }, 100);
        
        setTimeout(() => {
            this.heroImageStyle.opacity = '1';
            this.heroImageStyle.transform = 'translateY(0)';
        }, 300);

        // Scroll handlers
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();

        // Close menu when clicking outside
        document.addEventListener('click', this.handleClickOutside);

        // Setup intersection observers
        this.$nextTick(() => {
            this.setupIntersectionObservers();
            this.setupStatsAnimation();
        });

        // Console welcome message
        console.log('%c🏥 Care - Integrated Healthcare System', 'color: #2563EB; font-size: 20px; font-weight: bold;');
        console.log('%cWelcome to Care! Building better healthcare, one connection at a time.', 'color: #6B7280; font-size: 14px;');
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        document.removeEventListener('click', this.handleClickOutside);
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        handleClickOutside(event) {
            const nav = this.$el.querySelector('.nav-content');
            if (nav && !nav.contains(event.target) && this.isMenuOpen) {
                this.isMenuOpen = false;
            }
        },
        handleScroll() {
            // Navbar scroll effect
            this.isScrolled = window.pageYOffset > 100;

            // Parallax effect
            if (window.pageYOffset < window.innerHeight) {
                this.parallaxOffset = window.pageYOffset * 0.5;
            }

            // Update active section
            this.updateActiveSection();
        },
        updateActiveSection() {
            const scrollPosition = window.pageYOffset + 150;
            const sections = ['home', 'features', 'services', 'about', 'contact'];
            
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        this.activeSection = sections[i];
                        break;
                    }
                }
            }
        },
        scrollToSection(sectionId) {
            this.isMenuOpen = false;
            const section = document.getElementById(sectionId);
            if (section) {
                const headerOffset = 80;
                const elementPosition = section.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        },
        handleButtonClick(event) {
            // Ripple effect
            const button = event.currentTarget;
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;

            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            button.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        },
        setupIntersectionObservers() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        const index = element.dataset.index;
                        const type = element.dataset.type;

                        if (type === 'feature' && !this.animatedElements.features.has(index)) {
                            this.animatedElements.features.add(index);
                        } else if (type === 'service' && !this.animatedElements.services.has(index)) {
                            this.animatedElements.services.add(index);
                        } else if (type === 'benefit' && !this.animatedElements.benefits.has(index)) {
                            this.animatedElements.benefits.add(index);
                        } else if (type === 'benefitsCard' && !this.animatedElements.benefitsCard) {
                            this.animatedElements.benefitsCard = true;
                            this.benefitsCardStyle.opacity = '1';
                            this.benefitsCardStyle.transform = 'translateY(0)';
                        }
                    }
                });
            }, observerOptions);

            // Observe feature cards
            this.$nextTick(() => {
                this.featureCardRefs.forEach((el, index) => {
                    if (el) {
                        el.dataset.index = index;
                        el.dataset.type = 'feature';
                        observer.observe(el);
                    }
                });

                // Observe service cards
                this.serviceCardRefs.forEach((el, index) => {
                    if (el) {
                        el.dataset.index = index;
                        el.dataset.type = 'service';
                        observer.observe(el);
                    }
                });

                // Observe benefit items
                this.benefitItemRefs.forEach((el, index) => {
                    if (el) {
                        el.dataset.index = index;
                        el.dataset.type = 'benefit';
                        observer.observe(el);
                    }
                });

                // Observe benefits card
                if (this.benefitsCardRef) {
                    this.benefitsCardRef.dataset.type = 'benefitsCard';
                    observer.observe(this.benefitsCardRef);
                }
            });
        },
        setupStatsAnimation() {
            const statsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateStats();
                        statsObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            const statsSection = this.$refs.statsSection;
            if (statsSection) {
                statsObserver.observe(statsSection);
            }
        },
        animateStats() {
            this.stats.forEach((stat, index) => {
                setTimeout(() => {
                    this.animateCounter(stat, stat.value, 2000);
                }, index * 200);
            });
        },
        animateCounter(stat, target, duration = 2000) {
            let start = 0;
            const increment = target / (duration / 16);
            const isPercentage = stat.suffix === '%';
            const isPlus = stat.suffix === '+';
            const isK = stat.suffix === 'K+';

            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    stat.displayValue = isPercentage 
                        ? `${Math.round(target)}%` 
                        : isPlus 
                            ? `${Math.round(target)}+` 
                            : `${Math.round(target)}K+`;
                    clearInterval(timer);
                } else {
                    stat.displayValue = isPercentage 
                        ? `${Math.round(start)}%` 
                        : isPlus 
                            ? `${Math.round(start)}+` 
                            : `${Math.round(start)}K+`;
                }
            }, 16);
        },
        setFeatureCardRef(el, index) {
            if (el) {
                this.featureCardRefs[index] = el;
            }
        },
        setServiceCardRef(el, index) {
            if (el) {
                this.serviceCardRefs[index] = el;
            }
        },
        setBenefitItemRef(el, index) {
            if (el) {
                this.benefitItemRefs[index] = el;
            }
        },
        getFeatureCardStyle(index) {
            if (this.animatedElements.features.has(index)) {
                return {
                    opacity: '1',
                    transform: 'translateY(0)',
                    transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
                };
            }
            return {
                opacity: '0',
                transform: 'translateY(30px)',
                transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
            };
        },
        getServiceCardStyle(index) {
            if (this.animatedElements.services.has(index)) {
                return {
                    opacity: '1',
                    transform: 'translateY(0)',
                    transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
                };
            }
            return {
                opacity: '0',
                transform: 'translateY(30px)',
                transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
            };
        },
        getBenefitItemStyle(index) {
            if (this.animatedElements.benefits.has(index)) {
                return {
                    opacity: '1',
                    transform: 'translateY(0)',
                    transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
                };
            }
            return {
                opacity: '0',
                transform: 'translateY(30px)',
                transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
            };
        },
        formatServiceNumber(index) {
            return String(index + 1).padStart(2, '0');
        }
    }
}).mount('#app');
