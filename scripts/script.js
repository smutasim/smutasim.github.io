<<<<<<< HEAD
// Shared site behavior.
// Highlights the current page in the top nav, as a safety net in case
// a page's static "active" class ever gets out of sync.
document.addEventListener('DOMContentLoaded', function () {
    const here = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav.site-nav a').forEach(function (link) {
        if (link.getAttribute('href') === here) {
            link.classList.add('active');
        }
    });
});
=======
// Add interactivity or dynamic behavior here if needed

>>>>>>> 0cdec83f4c81ca08c7c724a97a1e342e92194d19
