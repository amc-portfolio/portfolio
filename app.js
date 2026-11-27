(function () {
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = ["Software Engineer", "Web Developer", "Programmer", "Learner"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;


    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } 
        else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } 
        else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if(textArrayIndex>=textArray.length) textArrayIndex=0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
        if(textArray.length) setTimeout(type, newTextDelay + 250);
    });
    const sectionLinks = [...document.querySelectorAll(".controls .control")];

    function updateActiveSectionLink() {
        const activeHash = window.location.hash || "#home";
        sectionLinks.forEach(link => {
            const isActive = link.hash === activeHash;
            link.classList.toggle("active-btn", isActive);
            if (isActive) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    window.addEventListener("hashchange", updateActiveSectionLink);
    updateActiveSectionLink();
    let mode = localStorage.getItem('mode');


    if(!mode || mode == null || mode == 0){
        document.body.classList.remove("light-mode");
    } else {
        document.body.classList.add("light-mode");
    }
    document.querySelector(".theme-btn").addEventListener("click", () => {
        
        if(!mode || mode == null || mode == 0){
            localStorage.setItem('mode', 1);
        } else {
            localStorage.setItem('mode', 0);
        }
        document.body.classList.toggle("light-mode");
    })
   

 
})();
