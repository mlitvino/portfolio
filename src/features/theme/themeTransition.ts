import './themeTransition.css'

import type { Point, Theme } from './ThemeContext'

const DURATION_MS = 500

export function switchThemeAnimated(next: Theme, origin: Point, update: () => void) {
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!('startViewTransition' in document) || reduceMotion) {
    update()
    return
  }

  const root = document.documentElement
  root.dataset.themeTransition = next === 'dark' ? 'to-dark' : 'to-light'
  const cleanUp = () => {
    delete root.dataset.themeTransition
  }

  const transition = document.startViewTransition(update)
  transition.ready.then(() => {
    const circle = animateCircle(next, origin)
    const stop = () => {
      circle.cancel()
    }
    transition.finished.then(stop, stop)
  }, cleanUp)
  transition.finished.then(cleanUp, cleanUp)
}

function animateCircle(next: Theme, { x, y }: Point): Animation {
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
  const center = `at ${String(x)}px ${String(y)}px`
  const fullScreen = `circle(${String(radius)}px ${center})`
  const point = `circle(0px ${center})`
  const toDark = next === 'dark'

  return document.documentElement.animate(
    { clipPath: toDark ? [fullScreen, point] : [point, fullScreen] },
    {
      duration: DURATION_MS,
      easing: 'ease-in-out',
      fill: 'both',
      pseudoElement: toDark
        ? '::view-transition-old(root)'
        : '::view-transition-new(root)',
    },
  )
}
