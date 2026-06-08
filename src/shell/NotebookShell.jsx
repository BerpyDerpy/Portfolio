import { Outlet, useLocation, useNavigationType } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import TabNav from './TabNav.jsx';
import { OWNER } from '../shared/projects.js';
import styles from './NotebookShell.module.css';

/* The page-turn. The incoming sheet hinges down from the gutter (left edge),
   the way a real page falls when you flip it open. Origin is the binding. */
const pageVariants = {
  enter: { rotateY: -18, x: 26, opacity: 0, filter: 'brightness(1.18)' },
  center: { rotateY: 0, x: 0, opacity: 1, filter: 'brightness(1)' },
  exit: { rotateY: 10, x: -18, opacity: 0, filter: 'brightness(0.9)' },
};

const pageTransition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1],
};

export default function NotebookShell() {
  const location = useLocation();
  const navType = useNavigationType(); // unused branch kept for future SFX hooks

  return (
    <div className={styles.desk}>
      <div className={styles.book}>
        {/* Binding spine with monogram + the protruding section tabs. */}
        <aside className={styles.spine}>
          <span className={styles.stitch} />
          <span className={styles.brand}>{OWNER.name} · Lab Notebook</span>
        </aside>

        <TabNav />

        {/* The paper block. */}
        <div className={styles.pages}>
          <div className={styles.sheet}>
            <span className={styles.grain} aria-hidden="true" />
            <span className={styles.glow} aria-hidden="true" />
            <span className={styles.margin} aria-hidden="true" />

            <div className={styles.surface}>
              <div className={styles.stage}>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={location.pathname}
                    variants={pageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={pageTransition}
                    style={{ transformOrigin: 'left center', minHeight: '100%' }}
                    data-nav={navType}
                  >
                    <Outlet />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
