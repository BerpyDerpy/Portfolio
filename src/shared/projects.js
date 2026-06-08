// Single source of truth for the notebook sections.
// Tabs, routes, the cover's table of contents, and each page header read from
// here. To add a section later: add an entry + a component in pages/<slug>/.
//
// `slug`    route + folder name (kept from the original scaffold)
// `tab`     short label printed on the binder tab
// `index`   the section number, like a lab-book tab divider
// `title`   project name as printed at the top of the page
// `field`   discipline line under the title
// `note`    the scrawled margin annotation shown in the table of contents
// `hue`     a per-section accent so each tab/page reads in its own ink

export const PROJECTS = [
  {
    slug: 'legal',
    tab: 'Legal',
    index: '01',
    title: 'Legal Contradiction Engine',
    field: 'Neuro-symbolic AI · Law',
    note: 'where the precedent disagrees with itself.',
    hue: 28, // brass / case-file manila
  },
  {
    slug: 'kite',
    tab: 'TOPOS',
    index: '02',
    title: 'TOPOS',
    field: 'Cognitive Architecture · Local Agents',
    note: 'a workspace where an agent can hear itself think.',
    hue: 205, // ballpoint blue
  },
  {
    slug: 'nozzle',
    tab: 'Nozzle',
    index: '03',
    title: 'Stability-Aware Engine Generator',
    field: 'Aerospace · Optimization',
    note: 'breed a thousand nozzles, fly the one that won’t shake apart.',
    hue: 12, // correction red / burn
  },
  {
    slug: 'tarmac',
    tab: 'TARMAC-0',
    index: '04',
    title: 'TARMAC-0',
    field: 'Robotics · Precision Agriculture',
    note: 'a rover you drive from the next district over.',
    hue: 150, // field green
  },
  {
    slug: 'biosea',
    tab: 'BioSea',
    index: '05',
    title: 'Deep-Sea Biodiversity Pipeline',
    field: 'Bioinformatics · eDNA',
    note: 'reading the census the ocean leaves in the water.',
    hue: 188, // deep teal
  },
];

export const PROJECTS_BY_SLUG = Object.fromEntries(
  PROJECTS.map((p) => [p.slug, p]),
);

export const OWNER = {
  name: 'Mahit Hazari',
  role: 'IT Undergraduate · Researcher',
  tagline: 'Field notes from an undergraduate who can’t leave a problem alone.',
};
