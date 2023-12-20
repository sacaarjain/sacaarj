// Function to check if the device is a mobile device
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Create a function to scroll to the top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function () {
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    // Check if it's a mobile device
    if (isMobileDevice()) {
        // Show or hide the scroll to top button based on scroll position
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) { // Adjust this value to change when the button appears
                scrollTopBtn.style.display = 'block';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });

        // Add click event listener to scroll to top button
        scrollTopBtn.addEventListener('click', scrollToTop);
    } else {
        scrollTopBtn.style.display = 'none'; // Hide the button on other devices
    }
});