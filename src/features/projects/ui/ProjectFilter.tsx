import type { FilterGroup } from '../model/filters'
import styles from './ProjectFilter.module.css'

interface ProjectFilterProps {
  groups: readonly FilterGroup[]
  total: number
  onToggle: (tag: string) => void
  onClear: () => void
}

export function ProjectFilter({ groups, total, onToggle, onClear }: ProjectFilterProps) {
  const noneSelected = groups.every((group) => group.options.every((option) => !option.selected))

  return (
    <div className={styles.filter}>
      <button type="button" className={styles.chip} aria-pressed={noneSelected} onClick={onClear}>
        All <span className={styles.count}>{total}</span>
      </button>

      {groups.filter((group) => group.options.length > 0).map((group) => (
        <div key={group.label} role="group" aria-label={group.label} className={styles.group}>
          <span className={styles.groupLabel} aria-hidden="true">
            {group.label}
          </span>

          {group.options.map((option) => (
            <button
              key={option.name}
              type="button"
              className={styles.chip}
              aria-pressed={option.selected}
              disabled={!option.selected && option.count === 0}
              onClick={() => {
                onToggle(option.name)
              }}
            >
              {option.name} <span className={styles.count}>{option.count}</span>
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}
