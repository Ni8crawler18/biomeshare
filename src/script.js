document.addEventListener('DOMContentLoaded', function() {
    const texts = ["Blockchain Transactions", "Fractional Ownership", "Integrated GIS"];
    const line3 = document.querySelector('.line3');
    let textIndex = 0;
    let currentTextIndex = 0;
    let isTyping = true;

    function type() {
        if (isTyping) {
            if (textIndex < texts[currentTextIndex].length) {
                line3.textContent += texts[currentTextIndex][textIndex];
                textIndex++;
                setTimeout(type, 100); 
            } else {
                isTyping = false;
                setTimeout(erase, 1000);
            }
        }
    }

    function erase() {
        if (!isTyping) {
            if (textIndex > 0) {
                line3.textContent = texts[currentTextIndex].substring(0, textIndex - 1);
                textIndex--;
                setTimeout(erase, 100);
            } else {
                isTyping = true;
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                setTimeout(type, 1000);
            }
        }
    }
    type();
});
document.addEventListener("DOMContentLoaded", function() {
    var glidInSection = document.querySelector(".glid-in");

    function handleScroll() {
        var glidInPosition = glidInSection.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.3;

        if (glidInPosition < screenPosition) {
            glidInSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", handleScroll);
});

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

document.getElementById("start-organizing").addEventListener("click", function() {
    window.location.href = "/signup-organizer.html"; // Correct the URL here
});

document.getElementById("start-investing").addEventListener("click", function() {
    window.location.href = "/signup-user.html"; // Correct the URL here
});

document.getElementById("login").addEventListener("click", function() {
    window.location.href = "/login-user.html"; // Correct the URL here
});
