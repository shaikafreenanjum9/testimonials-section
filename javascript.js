const cards = document.querySelectorAll(".testimonial-card");
const dotsContainer = document.getElementById("dots");

let currentIndex = 0;

// Create dots
cards.forEach((card, index) => {
    const dot = document.createElement("span");

    dot.classList.add("dot");

    dot.addEventListener("click", () => {
        showTestimonial(index);
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

// Show testimonial
function showTestimonial(index) {

    cards.forEach(card => {
        card.classList.remove("active");
        card.style.display = "none";
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    cards[index].style.display = "block";
    cards[index].classList.add("active");

    dots[index].classList.add("active");

    currentIndex = index;
}

// Next button
document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    showTestimonial(currentIndex);
});

// Previous button
document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showTestimonial(currentIndex);
});

// Automatic sliding
showTestimonial(0);

setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    showTestimonial(currentIndex);
}, 4000);