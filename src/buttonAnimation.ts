export const createButtonAnimation = () => {
  const animateButtons = document.querySelectorAll('.button--animate')

  animateButtons.forEach((button) =>
    button.addEventListener('mousemove', (event) => {
      const target = event.target as HTMLButtonElement
      const rect = target.getBoundingClientRect()

      const { clientX, clientY } = event as MouseEvent

      const x = clientX - rect.left
      const y = clientY - rect.top

      target.style.setProperty('--x', x + 'px')
      target.style.setProperty('--y', y + 'px')
    }),
  )
}

createButtonAnimation()
