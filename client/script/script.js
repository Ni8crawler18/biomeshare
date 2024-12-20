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
document.getElementById("start_organizing").addEventListener("click", function() {
    
    window.location.href = "E:/BiomeShare/main/signup_organizer.html"; 
});
document.getElementById("start_investing").addEventListener("click", function() {
    
    window.location.href = "E:/BiomeShare/main/signup_buyer.html"; 
});


