import { PROJECTS_BY_SLUG } from './projects.js';
import note from './notebook.module.css';
import styles from './PlaceholderPage.module.css';

/**
 * The reusable section page. Until a real write-up lands, it renders the
 * section header (number, title, field) and a "lab page in progress" body
 * with ruled blanks, a taped photo slot, and margin scrawls — so an empty
 * section still feels like an active, hand-kept notebook page.
 *
 * Drop a real project later by replacing the page's component; this stays as
 * the fallback look-and-feel.
 */
export default function PlaceholderPage({ slug }) {
  const p = PROJECTS_BY_SLUG[slug];
  if (!p) return null;

  return (
    <article className={styles.page} style={{ '--hue': p.hue }}>
      <span className={note.clip} aria-hidden="true" />

      <header className={styles.head}>
        <div className={styles.headTop}>
          <span className={note.tape}>Section {p.index}</span>
          <span className={note.stamp}>In Progress</span>
        </div>
        <div className={styles.titleBlock}>
          <span className={note.sectionNo}>{p.index}</span>
          <div>
            <h1 className={styles.title}>{p.title}</h1>
            <p className={styles.field}>{p.field}</p>
          </div>
        </div>
        <p className={`${note.hand} ${styles.note}`}>“{p.note}”</p>
      </header>

      <section className={styles.body}>
        <p className={styles.lead}>
          This page of the notebook is reserved. The write-up, figures, and
          results for <span className={note.swipe}>{p.title}</span> are being
          inked in.
        </p>

        {/* Ruled blanks — the empty lines waiting to be filled. */}
        <div className={styles.ruled} aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={styles.rule} />
          ))}
        </div>

        <div className={styles.slots}>
          <figure className={styles.photoSlot}>
            <span className={note.pencil}>fig. — pending</span>
          </figure>
          <ul className={styles.checklist}>
            <li>
              <span className={styles.box} /> abstract
            </li>
            <li>
              <span className={styles.box} /> method
            </li>
            <li>
              <span className={`${styles.box} ${styles.boxDone}`} /> a working
              demo, eventually
            </li>
          </ul>
        </div>
      </section>

      <footer className={styles.foot}>
        <span className={note.pencil}>— M.H., still tinkering</span>
      </footer>
    </article>
  );
}
