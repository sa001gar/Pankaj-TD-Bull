// Background animation
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({ alpha: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.getElementById("canvas-container").appendChild(renderer.domElement)

const geometry = new THREE.BufferGeometry()
const vertices = []
for (let i = 0; i < 5000; i++) {
  vertices.push(Math.random() * 2000 - 1000, Math.random() * 2000 - 1000, Math.random() * 2000 - 1000)
}
geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3))
const material = new THREE.PointsMaterial({
  color: 0xa3ff12,
  size: 2,
  transparent: true,
  opacity: 0.5,
})
const particles = new THREE.Points(geometry, material)
scene.add(particles)

camera.position.z = 1000

function animate() {
  requestAnimationFrame(animate)
  particles.rotation.x += 0.0001
  particles.rotation.y += 0.0001
  renderer.render(scene, camera)
}
animate()

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
})

// Initialize Swiper
new Swiper(".course-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
})

new Swiper(".testimonial-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
})

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle")
const navLinks = document.querySelector(".nav-links")

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active")
  navLinks.classList.toggle("active")
})

// Hide menu when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active")
    navLinks.classList.remove("active")
  })
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})

