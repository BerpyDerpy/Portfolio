import { Link } from 'react-router-dom';
import { PROJECTS, OWNER } from '../../shared/projects.js';
import note from '../../shared/notebook.module.css';
import styles from './styles.module.css';

/**
 * The inside cover / table of contents — the first thing you see when the
 * notebook is open. Nameplate, a scrawled premise, and a hand-written index
 * of the six sections.
 */
export default function Cover() {
  return (
    <article className={styles.cover}>
      <header className={styles.plate}>
        <span className={note.tape}>Property of</span>
        <h1 className={styles.name}>{OWNER.name}</h1>
        <p className={styles.role}>{OWNER.role}</p>
        <p className={`${note.hand} ${styles.tagline}`}>{OWNER.tagline}</p>
      </header>

      <section className={styles.toc} aria-label="Table of contents">
        <div className={styles.tocHead}>
          <h2 className={note.swipe}>Contents</h2>
          <span className={note.pencil}>six experiments, one desk</span>
        </div>

        <ol className={styles.list}>
          {PROJECTS.map((p) => (
            <li key={p.slug} className={styles.row} style={{ '--hue': p.hue }}>
              <Link to={`/${p.slug}`} className={styles.link}>
                <span className={styles.no}>{p.index}</span>
                <span className={styles.titleCol}>
                  <span className={styles.title}>{p.title}</span>
                  <span className={styles.field}>{p.field}</span>
                </span>
                <span className={styles.dots} aria-hidden="true" />
                <span className={`${note.hand} ${styles.scrawl}`}>{p.note}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <footer className={styles.foot}>
        <span className={note.pencil}>
          flip a tab on the spine to open a section →
        </span>
      </footer>
    </article>
  );
}
