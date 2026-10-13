import { useState } from 'react'

import type { ProjectVisual } from '../model/types'
import styles from './ScreenshotGallery.module.css'

interface ScreenshotGalleryProps {
  visuals: readonly ProjectVisual[]
}

export function ScreenshotGallery({ visuals }: ScreenshotGalleryProps) {
  const [index, setIndex] = useState(0)
  const current = visuals[index] ?? visuals[0]

  if (!current) return null

  return (
    <div>
      <figure className={styles.figure}>
        <div className={styles.frame}>
          <img src={current.src} alt={current.alt} className={styles.image} />
        </div>
        {current.caption &&
          <figcaption className={styles.caption}>
            {current.caption}
          </figcaption>
        }
      </figure>

      {visuals.length > 1 && (
        <div role="group" aria-label="Choose screenshot" className={styles.thumbnails}>
          {visuals.map((visual, i) => (
            <button
              key={`${visual.src}#${visual.alt}`}
              type="button"
              className={styles.thumbnail}
              aria-current={i === index}
              aria-label={`Show screenshot ${String(i + 1)}: ${visual.alt}`}
              onClick={() => {
                setIndex(i)
              }}
            >
              <img src={visual.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
