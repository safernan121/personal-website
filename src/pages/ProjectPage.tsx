import { Link, useParams } from 'react-router'
import { projects, type Project } from '../content/projects'
import { Icon } from '../components/Icon'
import { ProjectMedia } from '../components/ProjectMedia'
import { ProjectScreens } from '../components/ProjectScreens'
import { SiteHeader, SiteFooter } from '../components/SiteChrome'
import { usePageMetadata } from '../hooks/usePageMetadata'
import { NotFoundPage } from './NotFoundPage'
import styles from '../components/Pages.module.css'

export function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  return project ? <ProjectDetail project={project} /> : <NotFoundPage />
}

function ProjectDetail({ project }: { project: Project }) {
  usePageMetadata(`${project.name} — Santiago Fernández`, project.tagline)
  const isBeacon = project.slug === 'the-beacon'
  const nextProject =
    projects[(projects.indexOf(project) + 1) % projects.length]

  return (
    <div className={styles.pageShell}>
      <SiteHeader />
      <main id="content" tabIndex={-1} className={styles.pageMain}>
        <Link to="/#projects" className={styles.backLink}>
          <span aria-hidden="true">←</span> All projects
        </Link>
        <div className={styles.projectIntro}>
          <p className={styles.label}>
            <span>{project.number}</span> / {project.category}
          </p>
          <h1>{project.name}</h1>
          <p className={styles.pageLead}>{project.tagline}</p>
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noreferrer"
              className={styles.externalLink}
            >
              {project.websiteLabel ?? `Visit ${project.name}`} <Icon name="arrow" width="17" height="17" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
          {project.websiteNote && <p className={styles.websiteNote}>{project.websiteNote}</p>}
        </div>
        <dl className={styles.projectMeta}>
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Team</dt>
            <dd>{project.company}</dd>
          </div>
          <div>
            <dt>Period</dt>
            <dd>{project.period}</dd>
          </div>
        </dl>
        {project.roleSummary && (
          <section
            className={styles.detailSection}
            aria-labelledby="role-heading"
          >
            <h2 id="role-heading" className={styles.sectionLabel}>
              My role
            </h2>
            <div className={styles.prose}>
              <p>{project.roleSummary}</p>
              <ul
                className={styles.areaList}
                aria-label="Technologies and focus areas"
              >
                {project.areas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          </section>
        )}
        {project.contributions.length > 0 && (
          <section
            className={styles.detailSection}
            aria-labelledby="contributions-heading"
          >
            <h2 id="contributions-heading" className={styles.sectionLabel}>
              My contributions
            </h2>
            <div className={styles.contributions}>
              {project.contributions.map((item, index) => (
                <article key={item.title} className={styles.contribution}>
                  <span
                    className={styles.contributionNumber}
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
        <ProjectMedia project={project} />
        {isBeacon && (
          <figure className={styles.beaconHero}>
            <div className={styles.beaconArt}>
              <img
                className={styles.beaconLogo}
                src="/images/the-beacon/logo.webp"
                alt="The Beacon"
                width="682"
                height="194"
              />
              <img
                className={styles.beaconCombat}
                src="/images/the-beacon/combat.webp"
                alt="Pixel-art dungeon scene with adventurers facing skeletons and magical traps."
                width="1540"
                height="1096"
                fetchPriority="high"
              />
            </div>
            <figcaption>
              Game artwork from{' '}
              <a href="https://thebeacon.gg/" target="_blank" rel="noreferrer">
                The Beacon <span className="sr-only">(opens in a new tab)</span>
                ↗
              </a>
            </figcaption>
          </figure>
        )}
        <section
          className={styles.detailSection}
          aria-labelledby="overview-heading"
        >
          <h2 id="overview-heading" className={styles.sectionLabel}>
            The product
          </h2>
          <div className={styles.prose}>
            <p>{project.description}</p>
            {project.descriptionDetail && <p>{project.descriptionDetail}</p>}
            {project.context && <p className={styles.contextNote}>{project.context}</p>}
          </div>
        </section>
        <ProjectScreens project={project} />
        {isBeacon && (
          <div className={styles.gameGallery}>
            <figure>
              <img
                src="/images/the-beacon/house.webp"
                alt="A decorated pixel-art home with a bed, stove, and dining table."
                width="600"
                height="450"
                loading="lazy"
              />
              <figcaption>A place to make your own.</figcaption>
            </figure>
            <figure>
              <img
                src="/images/the-beacon/social.webp"
                alt="Players gathering outside a cave entrance in a forest."
                width="391"
                height="280"
                loading="lazy"
              />
              <figcaption>A world to share.</figcaption>
            </figure>
            <p>
              Images and game description adapted from{' '}
              <a href="https://thebeacon.gg/" target="_blank" rel="noreferrer">
                thebeacon.gg
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              . Artwork belongs to The Beacon.
            </p>
          </div>
        )}
        {project.references && (
          <section className={styles.detailSection} aria-labelledby="sources-heading">
            <h2 id="sources-heading" className={styles.sectionLabel}>Project sources</h2>
            <div className={styles.references}>
              {project.references.map((reference) => (
                <article key={reference.url}>
                  <p className={styles.referenceDate}>{reference.date}</p>
                  <h3>
                    <a href={reference.url} target="_blank" rel="noreferrer">
                      {reference.title} <Icon name="arrow" width="15" height="15" />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </h3>
                  <p>{reference.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}
        <Link
          to={`/projects/${nextProject.slug}`}
          className={styles.nextProject}
        >
          <span>
            <span className={styles.label}>Next project</span>
            <span className={styles.nextProjectName}>{nextProject.name}</span>
          </span>
          <Icon name="arrow" width="32" height="32" />
        </Link>
      </main>
      <SiteFooter />
    </div>
  )
}
