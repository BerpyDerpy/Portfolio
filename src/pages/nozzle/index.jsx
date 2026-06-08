import { PROJECTS_BY_SLUG } from '../../shared/projects.js';
import DemoZone from '../../shared/DemoZone.jsx';
import note from '../../shared/notebook.module.css';
import styles from './styles.module.css';

const p = PROJECTS_BY_SLUG.nozzle;

/* Section 03 — Stability-Aware Engine Generator.
   Personality: a propulsion engineer's worksheet. Burn-red, a De Laval nozzle
   cross-section, scribbled specs, a "generation" log. Slightly singed. */
export default function Nozzle() {
  return (
    <article className={styles.page} style={{ '--hue': p.hue }}>
      <header className={styles.head}>
        <div className={styles.row}>
          <span className={note.tape}>Section {p.index}</span>
          <span className={styles.burn}>⚠ COMBUSTION STABILITY</span>
        </div>
        <h1 className={styles.title}>{p.title}</h1>
        <p className={styles.field}>{p.field}</p>
        <p className={styles.oneliner}>
          A genetic algorithm that{' '}
          <span className={note.swipe}>breeds rocket nozzles</span>, scored by a
          surrogate model that says “yes, but will it shake itself apart?”
        </p>
      </header>

      {/* De Laval nozzle cross-section, sketched. */}
      <div className={styles.specRow}>
        <svg className={styles.nozzle} viewBox="0 0 240 110" aria-hidden="true">
          {/* upper contour */}
          <path d="M10 24 C70 24 96 50 130 52 C170 54 210 30 230 16" />
          {/* lower contour (mirror) */}
          <path d="M10 86 C70 86 96 60 130 58 C170 56 210 80 230 94" />
          {/* throat marker */}
          <line x1="130" y1="40" x2="130" y2="70" className={styles.dash} />
          <text x="130" y="36" className={styles.tick}>throat</text>
          {/* flow arrows */}
          <path d="M30 55 H70" className={styles.flow} />
          <path d="M150 55 H210" className={styles.flow} />
          <text x="206" y="48" className={styles.tick}>Mach &gt; 1</text>
        </svg>
        <ul className={styles.specs}>
          <li><span className={styles.k}>gen</span> 412 / 1000</li>
          <li><span className={styles.k}>Isp</span> ↑ 7.2%</li>
          <li><span className={styles.k}>p′ rms</span> within bound ✓</li>
          <li className={styles.fail}><span className={styles.k}>culled</span> 38 unstable</li>
        </ul>
      </div>

      <section className={styles.body}>
        <h2 className={styles.h2}>What it does</h2>
        <p>
          It treats a nozzle contour as a genome and evolves a population of
          them toward higher specific impulse. The catch: high-performance
          geometries love to trigger combustion instability. So every candidate
          is screened by a fast surrogate model trained on expensive CFD runs,
          which predicts pressure-oscillation behaviour in milliseconds. Designs
          that would resonate get culled before they ever reach a real solver.
        </p>

        <h2 className={styles.h2}>Why it matters</h2>
        <p>
          Combustion instability has destroyed real engines — it’s the failure
          mode you can’t optimize away by chasing thrust alone. Folding a
          stability predictor directly into the fitness function means the
          search explores only the part of the design space that won’t tear
          itself apart, and it does it thousands of times faster than running
          full simulations on every guess.
        </p>

        <p className={`${note.hand} ${styles.aside}`}>
          surrogate ≈ the difference between 3 weeks of CFD and an afternoon.
        </p>

        <DemoZone
          accent={p.hue}
          hint="dial in thrust + stability weights → watch a population evolve"
        />
      </section>

      <footer className={styles.foot}>
        <span className={note.stamp}>Test Stand · WIP</span>
        <span className={note.pencil}>— M.H., gen 412 and counting</span>
      </footer>
    </article>
  );
}
