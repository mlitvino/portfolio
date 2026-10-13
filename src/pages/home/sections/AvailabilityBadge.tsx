import type { Availability } from '@/shared/config/site'

import styles from '../HomePage.module.css'

const labels: Record<Availability, string> = {
  open: 'Open to work',
  selective: 'Open to interesting offers',
  closed: 'Not available',
}

interface AvailabilityBadgeProps {
  status: Availability
}

export function AvailabilityBadge({ status }: AvailabilityBadgeProps) {
  return (
    <p className={styles.badge} data-status={status}>
      <span className={styles.dot} aria-hidden="true" />
      {labels[status]}
    </p>
  )
}
