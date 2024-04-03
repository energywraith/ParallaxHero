export const createHeroObserver = () => {
  const target = document.querySelector('.hero')

  if (!target) {
    return
  }

  const toggleHeroClassname: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        entry.target.classList.add('hero--not-in-view')
      } else {
        entry.target.classList.remove('hero--not-in-view')
      }
    })
  }

  const observer = new IntersectionObserver(toggleHeroClassname, {
    threshold: [0.5, 1],
  })

  observer.observe(target)
}

createHeroObserver()
