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
    const circle = animateCircle(
      next,
      toggleCenterInTransition() ?? origin,
      transitionSize(),
    )
    const stop = () => {
      circle.cancel()
    }
    transition.finished.then(stop, stop)
  }, cleanUp)
  transition.finished.then(cleanUp, cleanUp)
}

function toggleCenterInTransition(): Point | null {
  const group = getComputedStyle(document.documentElement, '::view-transition-group(theme-toggle)')
  const width = parseFloat(group.width)
  const height = parseFloat(group.height)
  if (!group.transform || group.transform === 'none' || !width || !height) return null

  const { e: left, f: top } = new DOMMatrixReadOnly(group.transform)
  return { x: left + width / 2, y: top + height / 2 }
}

function transitionSize(): { width: number; height: number } {
  const root = getComputedStyle(document.documentElement, '::view-transition-group(root)')
  return {
    width: Math.max(parseFloat(root.width) || 0, innerWidth),
    height: Math.max(parseFloat(root.height) || 0, innerHeight),
  }
}

function animateCircle(
  next: Theme,
  { x, y }: Point,
  { width, height }: { width: number; height: number },
): Animation {
  const radius = Math.hypot(Math.max(x, width - x), Math.max(y, height - y))
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
