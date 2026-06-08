import styles from './DemoZone.module.css';

/**
 * The clearly-marked DEMO zone every project page carries. Renders an
 * empty, taped-off placeholder ("the interactive bit goes here") so a
 * section reads as a reserved slot in the notebook rather than missing
 * content. `hint` lets each page describe what will eventually live here.
 */
export default function DemoZone({ hint, accent }) {
  return (
    <section
      className={styles.demo}
      style={accent ? { '--hue': accent } : undefined}
      aria-label="Demo (coming soon)"
    >
      <span className={styles.label}>DEMO</span>
      <div className={styles.well}>
        <svg
          className={styles.glyph}
          viewBox="0 0 48 48"
          aria-hidden="true"
          fill="none"
        >
          <rect
            x="6"
            y="10"
            width="36"
            height="28"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeDasharray="4 4"
          />
          <path
            d="M20 19l9 5-9 5z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
        <p className={styles.hint}>{hint || 'interactive demo lands here'}</p>
        <span className={styles.soon}>not wired up yet</span>
      </div>
    </section>
  );
}
