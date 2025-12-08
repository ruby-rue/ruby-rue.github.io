// Close banner functionality
document.querySelector(".close-banner").addEventListener("click", () => {
  document.querySelector(".top-banner").style.display = "none"
})

// Carousel functionality
let currentSlide = 0
const totalSlides = 32

document.querySelector(".carousel-btn.next").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides
  updateCarousel()
})

document.querySelector(".carousel-btn.prev").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
  updateCarousel()
})

function updateCarousel() {
  document.querySelector(".counter").textContent = `${currentSlide + 1} / ${totalSlides}`

  // Update active dot
  const dots = document.querySelectorAll(".dot")
  dots.forEach((dot, index) => {
    dot.classList.remove("active")
    if (index === Math.floor(currentSlide / 4)) {
      dot.classList.add("active")
    }
  })
}

// Smooth scroll behavior
document.querySelectorAll("button").forEach((button) => {
  if (button.textContent.includes("RESERVE") || button.textContent.includes("DESIGN")) {
    button.addEventListener("click", function () {
      console.log("Button clicked:", this.textContent)
      // Add your navigation logic here
    })
  }
})
