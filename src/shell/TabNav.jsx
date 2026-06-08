import { NavLink, useLocation } from 'react-router-dom';
import { PROJECTS } from '../shared/projects.js';
import styles from './TabNav.module.css';

/**
 * The binder divider tabs running down the spine. Reads the section list from
 * shared/projects.js, so it stays in sync with routes and pages automatically.
 */
export default function TabNav() {
  const { pathname } = useLocation();

  return (
    <nav className={styles.rail} aria-label="Notebook sections">
      {/* Home / cover handle */}
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `${styles.tab} ${styles.cover} ${isActive ? styles.active : ''}`
        }
        style={{ '--hue': 38 }}
      >
        <span className={styles.rivet} />
        <span className={styles.label}>Cover</span>
      </NavLink>

      {PROJECTS.map((p) => {
        const active = pathname === `/${p.slug}`;
        return (
          <NavLink
            key={p.slug}
            to={`/${p.slug}`}
            className={`${styles.tab} ${active ? styles.active : ''}`}
            style={{ '--hue': p.hue }}
            aria-current={active ? 'page' : undefined}
          >
            <span className={styles.rivet} />
            <span className={styles.num}>{p.index}</span>
            <span className={styles.label}>{p.tab}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
