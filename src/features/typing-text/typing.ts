const strings = [
  "Дизайн Менеджер",
  "UX дизайнер",
  "Product дизайнер",
]

const el = document.querySelector<HTMLElement>(".text")!

const typeSpeed = 80
const deleteSpeed = 40
const pauseAfterType = 1500
const pauseAfterDelete = 300

let stringIndex = 0
let charIndex = 0
let isDeleting = false

function tick() {
  const current = strings[stringIndex]

  if (isDeleting) {
    charIndex--
    el.textContent = current.slice(0, charIndex)

    if (charIndex === 0) {
      isDeleting = false
      stringIndex = (stringIndex + 1) % strings.length
      setTimeout(tick, pauseAfterDelete)
      return
    }

    setTimeout(tick, deleteSpeed)
  } else {
    charIndex++
    el.textContent = current.slice(0, charIndex)

    if (charIndex === current.length) {
      isDeleting = true
      setTimeout(tick, pauseAfterType)
      return
    }

    setTimeout(tick, typeSpeed)
  }
}

tick()
