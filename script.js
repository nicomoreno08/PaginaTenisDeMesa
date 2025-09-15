// Navegación móvil
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Cerrar menú al hacer click en un enlace
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// Formulario de contacto
const contactForm = document.getElementById("contact-form")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Obtener datos del formulario
  const formData = new FormData(contactForm)
  const name = formData.get("name")
  const email = formData.get("email")
  const level = formData.get("level")
  const message = formData.get("message")

  // Crear el enlace mailto
  const subject = encodeURIComponent(`Consulta de clases de tenis de mesa - ${name}`)
  const body = encodeURIComponent(`
Nombre: ${name}
Email: ${email}
Nivel de experiencia: ${level}

Mensaje:
${message}

---
Enviado desde el formulario de contacto del sitio web.
    `)

  const mailtoLink = `mailto:morenopablonicolas7@gmail.com?subject=${subject}&body=${body}`

  // Abrir cliente de correo
  window.location.href = mailtoLink

  // Mostrar mensaje de confirmación
  alert(
    "Se abrirá tu cliente de correo para enviar la consulta. Si no se abre automáticamente, puedes escribir directamente a profesor.tenismesa@email.com",
  )

  // Limpiar formulario
  contactForm.reset()
})

// Efecto de scroll para el header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.95)"
    header.style.backdropFilter = "blur(10px)"
  } else {
    header.style.background = "#ffffff"
    header.style.backdropFilter = "none"
  }
})

// Animación de números en las estadísticas
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const statNumbers = entry.target.querySelectorAll(".stat-number")
      statNumbers.forEach((stat) => {
        const finalNumber = stat.textContent
        const number = Number.parseInt(finalNumber)
        if (!isNaN(number)) {
          animateNumber(stat, 0, number, 2000)
        }
      })
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

const aboutStats = document.querySelector(".about-stats")
if (aboutStats) {
  observer.observe(aboutStats)
}

function animateNumber(element, start, end, duration) {
  const startTime = performance.now()
  const suffix = element.textContent.replace(/[0-9]/g, "")

  function updateNumber(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    const current = Math.floor(start + (end - start) * easeOutQuart(progress))
    element.textContent = current + suffix

    if (progress < 1) {
      requestAnimationFrame(updateNumber)
    }
  }

  requestAnimationFrame(updateNumber)
}

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4)
}

// Smooth scroll para navegación interna
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerHeight = document.querySelector(".header").offsetHeight
      const targetPosition = target.offsetTop - headerHeight - 20

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Bootstrap maneja automáticamente el carrusel con sus propios controles y funcionalidad

document.addEventListener("DOMContentLoaded", () => {
  // Configurar auto-play del carrusel Bootstrap
  const carousel = document.querySelector("#trainingCarousel")
  const bootstrap = window.bootstrap // Declare the bootstrap variable
  if (carousel) {
    // Pausar auto-play al hacer hover
    carousel.addEventListener("mouseenter", () => {
      const bsCarousel = bootstrap.Carousel.getInstance(carousel)
      if (bsCarousel) {
        bsCarousel.pause()
      }
    })

    // Reanudar auto-play al quitar hover
    carousel.addEventListener("mouseleave", () => {
      const bsCarousel = bootstrap.Carousel.getInstance(carousel)
      if (bsCarousel) {
        bsCarousel.cycle()
      }
    })
  }
})

