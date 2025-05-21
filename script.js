document.addEventListener('DOMContentLoaded', function() {
    const personalMessageDiv = document.querySelector('.personal-message');
    const friendNameElement = document.querySelector('.greeting');
    const birthdayImage = document.getElementById('birthday-image');
    const backgroundMusic = document.getElementById('background-music');

    // --- CUSTOMIZE THESE VALUES ---
    const friendActualName = "Radha"; // <--- REPLACE with your friend's actual name
    const customBirthdayMessage = "My dearest Friend, wishing you a birthday as beautiful and loving as you are! ❤️"; // <--- CUSTOMIZE your personal message
    // -----------------------------

    // Update friend's name in the greeting
    if (friendNameElement) {
        friendNameElement.textContent = `Happy Birthday, ${friendActualName}!`;
    }

    // Update the personal message
    if (personalMessageDiv) {
        personalMessageDiv.textContent = customBirthdayMessage;
    }

    // Make the image appear after a delay
    // Present opens (1.5s), confetti falls (ends ~3.5s).
    // Let's show the image after everything settles, around 3.8 seconds.
    const imageAppearanceDelay = 3800; // milliseconds (3.8 seconds)

    if (birthdayImage) {
        setTimeout(() => {
            birthdayImage.classList.add('visible'); // Add 'visible' class to trigger CSS transition
        }, imageAppearanceDelay);
    }

    // --- IMPORTANT: Autoplay Policy ---
    // Modern browsers often block autoplay unless the user has interacted with the page.
    // If the music doesn't play automatically, you might need to:
    // 1. Ask the user to click anywhere on the page (e.g., add a "Click to start" button)
    // 2. Or, tell them to enable autoplay for your site in their browser settings.
    // For local testing, it might work, but for deployment, be aware.
});