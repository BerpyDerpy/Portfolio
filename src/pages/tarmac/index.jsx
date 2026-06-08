import { PROJECTS_BY_SLUG } from '../../shared/projects.js';
import DemoZone from '../../shared/DemoZone.jsx';
import note from '../../shared/notebook.module.css';
import styles from './styles.module.css';

const p = PROJECTS_BY_SLUG.tarmac;

/* Section 04 — TARMAC-0.
   Personality: a field-station logbook. Earthy green, a sketched rover on a
   furrow, and a big, proud grant stamp — the funding is the headline. */
export default function Tarmac() {
  return (
    <article className={styles.page} style={{ '--hue': p.hue }}>
      {/* The grant: stamped proudly in the corner like an approval seal. */}
      <div className={styles.grant} aria-label="Grant: ₹14.7 lakh MSME">
        <span className={styles.grantTop}>SANCTIONED</span>
        <span className={styles.grantAmt}>₹14.7 L</span>
        <span className={styles.grantBtm}>MSME GRANT</span>
      </div>

      <header className={styles.head}>
        <span className={note.tape}>Section {p.index}</span>
        <h1 className={styles.title}>
          TARMAC<span className={styles.zero}>-0</span>
        </h1>
        <p className={styles.field}>{p.field}</p>
        <p className={styles.oneliner}>
          A teleoperated farm rover you can drive from anywhere — built to put{' '}
          <span className={note.swipe}>precision agriculture</span> in reach of
          a single operator covering many fields.
        </p>
      </header>

      {/* rover on a furrowed field, sketched. */}
      <figure className={styles.scene}>
        <svg viewBox="0 0 300 96" aria-hidden="true">
          {/* furrows */}
          {[70, 78, 86].map((y, i) => (
            <path key={y} d={`M0 ${y} Q150 ${y - 6 - i} 300 ${y}`} className={styles.furrow} />
          ))}
          {/* rover body */}
          <rect x="118" y="38" width="64" height="22" rx="4" className={styles.rover} />
          <rect x="134" y="26" width="20" height="14" rx="2" className={styles.rover} />
          {/* mast / camera */}
          <line x1="176" y1="38" x2="176" y2="20" className={styles.mast} />
          <circle cx="176" cy="18" r="3" className={styles.cam} />
          {/* wheels */}
          <circle cx="130" cy="62" r="8" className={styles.wheel} />
          <circle cx="170" cy="62" r="8" className={styles.wheel} />
          {/* signal arcs */}
          <path d="M182 14 q8 -8 16 0" className={styles.signal} />
          <path d="M186 10 q12 -12 24 0" className={styles.signal} />
        </svg>
        <figcaption className={`${note.hand} ${styles.cap}`}>
          drive it from the next district over →
        </figcaption>
      </figure>

      <section className={styles.body}>
        <h2 className={styles.h2}>What it does</h2>
        <p>
          TARMAC-0 is a ruggedized rover for crop fields, operated remotely over
          a live video and telemetry link. An operator steers it down furrows to
          scout, monitor, and run precision tasks — no need to be standing in the
          field, or even in the same town. It’s the “-0” because it’s the
          ground-truth platform: the first unit everything else gets tested on.
        </p>

        <h2 className={styles.h2}>Why it matters</h2>
        <p>
          Precision agriculture promises a lot and asks for expensive,
          field-resident hardware. Making the rover teleoperable lets one skilled
          operator cover many plots that could never each justify their own
          machine — and it earned a{' '}
          <strong>₹14.7 lakh MSME grant</strong> to take it from a working
          prototype toward something a small farm can actually deploy.
        </p>

        <p className={`${note.pencil} ${styles.margin}`}>
          field log: latency &lt; 200 ms is the whole game. anything more and you
          drive into the crop.
        </p>

        <DemoZone
          accent={p.hue}
          hint="live operator console + telemetry feed will mount here"
        />
      </section>

      <footer className={styles.foot}>
        <span className={note.pencil}>— M.H., from the control tent</span>
      </footer>
    </article>
  );
}
