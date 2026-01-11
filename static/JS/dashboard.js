// Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Sidebar Toggle
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainContent = document.getElementById('mainContent');
    
    // Desktop sidebar toggle
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
        });
    }
    
    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
    }
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 1024) {
            if (sidebar && sidebar.classList.contains('open')) {
                if (!sidebar.contains(event.target) && 
                    !mobileMenuToggle.contains(event.target)) {
                    sidebar.classList.remove('open');
                }
            }
        }
    });
    
    // Close sidebar on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            sidebar.classList.remove('open');
        }
    });
    
    // User menu toggle (if needed)
    const userMenuToggle = document.getElementById('userMenuToggle');
    if (userMenuToggle) {
        userMenuToggle.addEventListener('click', function() {
            // Add user menu dropdown functionality here
            console.log('User menu clicked');
        });
    }
    
    // Auto-hide alerts after 5 seconds
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(function(alert) {
        setTimeout(function() {
            alert.style.transition = 'opacity 0.3s';
            alert.style.opacity = '0';
            setTimeout(function() {
                alert.remove();
            }, 300);
        }, 5000);
    });
    
    // Smooth scroll for sidebar navigation
    const sidebarLinks = document.querySelectorAll('.sidebar-item');
    sidebarLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // Remove active class from all items
            sidebarLinks.forEach(function(item) {
                item.classList.remove('active');
            });
            // Add active class to clicked item
            this.classList.add('active');
        });
    });
});
