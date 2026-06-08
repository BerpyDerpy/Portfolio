import { PROJECTS_BY_SLUG } from '../../shared/projects.js';
import DemoZone from '../../shared/DemoZone.jsx';
import note from '../../shared/notebook.module.css';
import styles from './styles.module.css';

const p = PROJECTS_BY_SLUG.biosea;

/* Section 05 — Deep-Sea Biodiversity Pipeline.
   Personality: a marine biology field journal. Deep teal, a DNA double-helix
   dissolving into wave crests, specimen-tag metadata, an eDNA taxonomy tree. */
export default function Biosea() {
  return (
    <article className={styles.page} style={{ '--hue': p.hue }}>
      {/* Specimen tag — the DNA sample ID pinned to the corner. */}
      <div className={styles.tag} aria-hidden="true">
        <span className={styles.tagId}>eDNA-2024</span>
        <span className={styles.tagSrc}>depth: 2 800 m</span>
        <span className={styles.tagSrc}>vol: 2 L filtrate</span>
      </div>

      <header className={styles.head}>
        <div className={styles.row}>
          <span className={note.tape}>Section {p.index}</span>
          <span className={styles.taxa}>TAXONOMIC CLASSIFICATION</span>
        </div>
        <h1 className={styles.title}>
          Deep-Sea{' '}
          <span className={styles.bio}>Biodiversity</span>{' '}
          Pipeline
        </h1>
        <p className={styles.field}>{p.field}</p>
        <p className={styles.oneliner}>
          An end-to-end pipeline that reads{' '}
          <span className={note.swipe}>environmental DNA from seawater</span>{' '}
          and tells you what's been living there.
        </p>
      </header>

      {/* Helix + wave sketch: a DNA strand unravelling into ocean waves. */}
      <figure className={styles.diagram}>
        <svg viewBox="0 0 320 120" aria-hidden="true">
          {/* ocean wave-line at the bottom */}
          <path
            d="M0 100 Q40 85 80 100 Q120 115 160 100 Q200 85 240 100 Q280 115 320 100"
            className={styles.wave}
          />
          <path
            d="M0 106 Q40 92 80 106 Q120 120 160 106 Q200 92 240 106 Q280 120 320 106"
            className={styles.wave2}
          />

          {/* DNA helix — two sinusoidal strands with rungs */}
          {/* strand A */}
          <path
            d="M60 18 C80 38 100 58 120 48 C140 38 160 18 180 38 C200 58 220 78 240 64"
            className={styles.strand}
          />
          {/* strand B */}
          <path
            d="M60 58 C80 38 100 18 120 28 C140 38 160 58 180 38 C200 18 220 -2 240 14"
            className={styles.strand}
          />
          {/* rungs (base pairs) */}
          {[
            [76, 28, 76, 48],
            [100, 38, 100, 38],
            [120, 48, 120, 28],
            [140, 38, 140, 38],
            [160, 28, 160, 48],
            [180, 38, 180, 38],
            [200, 48, 200, 28],
            [220, 58, 220, 18],
          ].map(([x1, y1, x2, y2], i) => (
            <line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              className={styles.rung}
            />
          ))}

          {/* the helix dissolving into droplets toward the wave */}
          <circle cx="248" cy="70" r="2.5" className={styles.drop} />
          <circle cx="256" cy="80" r="2" className={styles.drop} />
          <circle cx="260" cy="90" r="1.5" className={styles.drop} />

          {/* nucleotide labels, hand-scrawled */}
          <text x="74" y="62" className={styles.base}>A</text>
          <text x="118" y="18" className={styles.base}>T</text>
          <text x="158" y="62" className={styles.base}>C</text>
          <text x="198" y="18" className={styles.base}>G</text>
        </svg>
        <figcaption className={`${note.pencil} ${styles.cap}`}>
          fig. 5 — eDNA extracted, amplified, classified (the ocean's attendance register)
        </figcaption>
      </figure>

      <section className={styles.body}>
        <div className={styles.columns}>
          <div>
            <h2 className={styles.h2}>What it does</h2>
            <p>
              You filter seawater, extract the DNA traces shed by every organism
              that passed through, and feed the reads into this pipeline. It
              quality-trims, denoises, and maps each fragment against reference
              barcode databases — BOLD, NCBI, custom local refs — then outputs a
              taxonomic census of the site: which species were present, at what
              relative abundance, and how confident the match is.
            </p>
          </div>
          <div>
            <h2 className={styles.h2}>Why it matters</h2>
            <p>
              Traditional deep-sea surveys need submersibles, trawls, or cameras
              on the seabed — expensive, slow, and destructive. eDNA
              metabarcoding lets you take a water sample and read the biological
              record that's already dissolved in it. This pipeline is the
              computational back-end: it turns raw Illumina reads into an
              actionable species list, fast enough to support ongoing monitoring
              of sites that are too deep or too remote to visit often.
            </p>
          </div>
        </div>

        <p className={`${note.hand} ${styles.aside}`}>
          → one litre of seawater can hold a whole ecosystem's signature. you
          just have to learn to read it.
        </p>

        <DemoZone
          accent={p.hue}
          hint="upload FASTQ reads → watch the taxonomy tree populate"
        />
      </section>

      <footer className={styles.foot}>
        <span className={note.stamp}>Sampled · WIP</span>
        <span className={note.pencil}>— M.H., reading the water</span>
      </footer>
    </article>
  );
}
