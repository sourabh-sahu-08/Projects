// Select the search input
const searchInput = document.querySelector('input[type="text"]');

// Trigger an action when the user presses Enter
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const query = searchInput.value.trim();
        if(query) {
            alert(`Searching for: "${query}"`);
            // Here you can add real search logic later
        } else {
            alert("Please enter a food item to search.");
        }
    }
});

// Optional: simple animation on main images
const mainImages = document.querySelectorAll('main img');

mainImages.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = '0.3s';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});

// Optional: footer year auto-update
const footer = document.querySelector('footer');
footer.innerHTML = `&copy; ${new Date().getFullYear()} ALL RIGHTS RESERVED`;





