import { PROJECTS_BY_SLUG } from '../../shared/projects.js';
import DemoZone from '../../shared/DemoZone.jsx';
import note from '../../shared/notebook.module.css';
import styles from './styles.module.css';

const p = PROJECTS_BY_SLUG.legal;

/* Section 01 — Legal Contradiction Engine.
   Personality: a case file. Manila tone, docket stamps, a balance scale that
   doesn't balance, the neuro vs. symbolic split drawn as two columns. */
export default function Legal() {
  return (
    <article className={styles.page} style={{ '--hue': p.hue }}>
      <span className={note.clip} aria-hidden="true" />

      <header className={styles.head}>
        <div className={styles.docket}>
          <span className={note.tape}>Section {p.index}</span>
          <span className={styles.case}>IN RE: §138 N.I. ACT</span>
        </div>

        <h1 className={styles.title}>{p.title}</h1>
        <p className={styles.field}>{p.field}</p>
        <p className={styles.oneliner}>
          A neuro-symbolic engine that{' '}
          <span className={note.swipe}>finds where the law argues with itself</span>{' '}
          across cheque-bounce judgments.
        </p>
      </header>

      {/* The off-balance scale: the whole point is that it doesn't balance. */}
      <div className={styles.scaleRow}>
        <svg className={styles.scale} viewBox="0 0 200 120" aria-hidden="true">
          <line x1="100" y1="14" x2="100" y2="96" />
          <line x1="58" y1="96" x2="142" y2="96" />
          {/* beam, tilted */}
          <line x1="34" y1="40" x2="166" y2="26" />
          {/* left pan (heavier, lower) */}
          <line x1="34" y1="40" x2="20" y2="66" />
          <line x1="34" y1="40" x2="48" y2="66" />
          <path d="M16 66h36l-6 14H22z" />
          <text x="34" y="58" className={styles.panText}>
            neural
          </text>
          {/* right pan (higher) */}
          <line x1="166" y1="26" x2="152" y2="48" />
          <line x1="166" y1="26" x2="180" y2="48" />
          <path d="M148 48h36l-6 14h-24z" />
          <text x="166" y="42" className={styles.panText}>
            rules
          </text>
        </svg>
        <p className={`${note.hand} ${styles.scrawl}`}>
          the model reads, the logic checks — and they don’t always agree ↗
        </p>
      </div>

      <section className={styles.body}>
        <div className={styles.columns}>
          <div>
            <h2 className={styles.h2}>What it does</h2>
            <p>
              It ingests Section 138 cheque-dishonour judgments, lets a language
              model extract the holdings and the reasoning, then hands those
              claims to a symbolic layer that encodes the statute as hard rules.
              When the learned reading and the formal rules disagree — a court
              applying a limitation period the act doesn’t grant, two benches
              reaching opposite holdings on the same fact pattern — the engine
              flags the contradiction and shows its work.
            </p>
          </div>
          <div>
            <h2 className={styles.h2}>Why it matters</h2>
            <p>
              §138 is one of the most litigated provisions in Indian courts, and
              the case law has quietly drifted into conflict. A neural model
              alone hallucinates citations; pure symbolic logic can’t read prose.
              Bolting them together gives you an auditable second opinion — every
              flag traces back to a rule and a paragraph, not a vibe.
            </p>
          </div>
        </div>

        <p className={`${note.pencil} ${styles.margin}`}>
          note to self: contradiction ≠ overruling. tag those separately.
        </p>

        <DemoZone
          accent={p.hue}
          hint="paste a §138 judgment → watch the engine surface the conflicts"
        />
      </section>

      <footer className={styles.foot}>
        <span className={note.stamp}>Filed · WIP</span>
        <span className={note.pencil}>— M.H.</span>
      </footer>
    </article>
  );
}
