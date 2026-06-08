import { PROJECTS_BY_SLUG } from '../../shared/projects.js';
import DemoZone from '../../shared/DemoZone.jsx';
import note from '../../shared/notebook.module.css';
import styles from './styles.module.css';

const p = PROJECTS_BY_SLUG.kite;

/* Section 02 — TOPOS (formerly KITE).
   Personality: a theorist's blue-ballpoint diagram. A central "workspace"
   blackboard with specialist modules competing to broadcast into it. */
export default function Topos() {
  return (
    <article className={styles.page} style={{ '--hue': p.hue }}>
      <header className={styles.head}>
        <div className={styles.row}>
          <span className={note.tape}>Section {p.index}</span>
          <span className={`${note.hand} ${styles.renamed}`}>
            (née KITE) ✗
          </span>
        </div>
        <h1 className={styles.title}>{p.title}</h1>
        <p className={styles.field}>{p.field}</p>
        <p className={styles.oneliner}>
          A cognitive architecture that gives a local AI agent{' '}
          <span className={note.swipe}>a single conscious workspace</span> its
          parts have to compete to write to.
        </p>
      </header>

      {/* Global Workspace sketch: modules → blackboard → broadcast back out. */}
      <figure className={styles.diagram}>
        <svg viewBox="0 0 320 180" aria-hidden="true">
          {/* central workspace */}
          <rect x="115" y="66" width="90" height="48" rx="6" className={styles.core} />
          <text x="160" y="86" className={styles.coreLabel}>GLOBAL</text>
          <text x="160" y="102" className={styles.coreLabel}>WORKSPACE</text>

          {/* specialist modules around it */}
          {[
            { x: 24, y: 18, t: 'percept' },
            { x: 232, y: 18, t: 'memory' },
            { x: 24, y: 128, t: 'planner' },
            { x: 232, y: 128, t: 'language' },
          ].map((m) => (
            <g key={m.t}>
              <rect x={m.x} y={m.y} width="64" height="34" rx="5" className={styles.mod} />
              <text x={m.x + 32} y={m.y + 21} className={styles.modLabel}>
                {m.t}
              </text>
            </g>
          ))}

          {/* arrows in */}
          <path d="M90 36 L118 70" className={styles.arrow} />
          <path d="M230 36 L202 70" className={styles.arrow} />
          <path d="M90 144 L118 110" className={styles.arrow} />
          <path d="M230 144 L202 110" className={styles.arrow} />
        </svg>
        <figcaption className={`${note.pencil} ${styles.cap}`}>
          fig. 2 — winner-take-all broadcast (Baars / Dehaene, abridged)
        </figcaption>
      </figure>

      <section className={styles.body}>
        <h2 className={styles.h2}>What it does</h2>
        <p>
          TOPOS runs entirely on local hardware. Independent modules —
          perception, memory recall, planning, language — each propose what
          should hold the agent’s attention next. They compete; the winner is
          broadcast to a shared workspace that every other module can then read.
          That broadcast loop is the agent’s working memory: a serial spotlight
          riding on top of massively parallel specialists.
        </p>

        <h2 className={styles.h2}>Why it matters</h2>
        <p>
          Most local agents are a prompt and a tool list — stateless, with no
          principled story for what they’re “thinking about.” Borrowing Global
          Workspace Theory gives the agent an explicit, inspectable attention
          mechanism: you can watch what won the broadcast and why. It’s a bet
          that the route to coherent local agents runs through cognitive
          science, not just bigger context windows.
        </p>

        <p className={`${note.hand} ${styles.aside}`}>
          → if everything is conscious at once, nothing is. that’s the feature.
        </p>

        <DemoZone
          accent={p.hue}
          hint="step the workspace tick-by-tick → see which module wins the broadcast"
        />
      </section>

      <footer className={styles.foot}>
        <span className={note.pencil}>working title locked: TOPOS · {p.index}</span>
      </footer>
    </article>
  );
}
