import { Link, useParams } from 'react-router'
import type { Project } from '../content/projects'
import { useLocale } from '../i18n/useLocale'
import { UpcomingProjectPage } from './UpcomingProjectPage'
import { Icon } from '../components/Icon'
import { ProjectMedia } from '../components/ProjectMedia'
import { ProjectScreens } from '../components/ProjectScreens'
import { SiteHeader, SiteFooter } from '../components/SiteChrome'
import { usePageMetadata } from '../hooks/usePageMetadata'
import { NotFoundPage } from './NotFoundPage'
import styles from '../components/Pages.module.css'

export function ProjectPage() {
  const { projects, upcomingProjects } = useLocale()
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  const upcomingProject = upcomingProjects.find((item) => item.slug === slug)
  if (upcomingProject) return <UpcomingProjectPage project={upcomingProject} />
  return project ? <ProjectDetail project={project} /> : <NotFoundPage />
}

function ProjectDetail({ project }: { project: Project }) {
  const { projects, path, ui } = useLocale()
  usePageMetadata(`${project.name} — Santiago Fernández`, project.tagline)
  const isBeacon = project.slug === 'the-beacon'
  const nextProject =
    projects[(projects.indexOf(project) + 1) % projects.length]

  return (
    <div className={styles.pageShell}>
      <SiteHeader />
      <main id="content" tabIndex={-1} className={styles.pageMain}>
        <Link to={path('/#projects')} className={styles.backLink}>
          <span aria-hidden="true">←</span> {ui.allProjects}
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
              {project.websiteLabel ?? `${ui.visit} ${project.name}`} <Icon name="arrow" width="17" height="17" />
              <span className="sr-only"> {ui.newTab}</span>
            </a>
          )}
          {project.websiteNote && <p className={styles.websiteNote}>{project.websiteNote}</p>}
        </div>
        <dl className={styles.projectMeta}>
          <div>
            <dt>{ui.role}</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>{ui.team}</dt>
            <dd>{project.company}</dd>
          </div>
          <div>
            <dt>{ui.period}</dt>
            <dd>{project.period}</dd>
          </div>
        </dl>
        {project.roleSummary && (
          <section
            className={styles.detailSection}
            aria-labelledby="role-heading"
          >
            <h2 id="role-heading" className={styles.sectionLabel}>
              {ui.myRole}
            </h2>
            <div className={styles.prose}>
              <p>{project.roleSummary}</p>
              <ul
                className={styles.areaList}
                aria-label={ui.technologies}
              >
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
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
              {ui.myContributions}
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
                    {item.details && (
                      <details className={styles.deepDive}>
                        <summary>{ui.howIBuiltIt}</summary>
                        <div className={styles.deepDiveBody}>
                          {item.details.flow && (
                            <figure className={styles.flow}>
                              <figcaption>{item.details.flow.label}</figcaption>
                              <ol>
                                {item.details.flow.steps.map((step) => (
                                  <li key={step.title}>
                                    <strong>{step.title}</strong>
                                    <span>{step.text}</span>
                                  </li>
                                ))}
                              </ol>
                            </figure>
                          )}
                          {item.details.sections.map((section) => (
                            <section key={section.label}>
                              <h4>{section.label}</h4>
                              {section.text && <p>{section.text}</p>}
                              {section.items && (
                                <ul>
                                  {section.items.map((point) => (
                                    <li key={point}>{point}</li>
                                  ))}
                                </ul>
                              )}
                            </section>
                          ))}
                          {item.details.credit && (
                            <p className={styles.deepDiveCredit}>{item.details.credit}</p>
                          )}
                        </div>
                      </details>
                    )}
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
                alt={ui.beaconCombatAlt}
                width="1540"
                height="1096"
                fetchPriority="high"
              />
            </div>
            <figcaption>
              {ui.gameArtworkFrom}{' '}
              <a href="https://thebeacon.gg/" target="_blank" rel="noreferrer">
                The Beacon <span className="sr-only">{ui.newTab}</span>
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
            {ui.product}
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
                alt={ui.beaconHomeAlt}
                width="600"
                height="450"
                loading="lazy"
              />
              <figcaption>{ui.makeYourOwn}</figcaption>
            </figure>
            <figure>
              <img
                src="/images/the-beacon/social.webp"
                alt={ui.beaconSocialAlt}
                width="391"
                height="280"
                loading="lazy"
              />
              <figcaption>{ui.worldToShare}</figcaption>
            </figure>
            <p>
              {ui.adaptedFrom}{' '}
              <a href="https://thebeacon.gg/" target="_blank" rel="noreferrer">
                thebeacon.gg
                <span className="sr-only"> {ui.newTab}</span>
              </a>
              . {ui.artworkCredit}
            </p>
          </div>
        )}
        {project.references && (
          <section className={styles.detailSection} aria-labelledby="sources-heading">
            <h2 id="sources-heading" className={styles.sectionLabel}>{ui.projectSources}</h2>
            <div className={styles.references}>
              {project.references.map((reference) => (
                <article key={reference.url}>
                  <p className={styles.referenceDate}>{reference.date}</p>
                  <h3>
                    <a href={reference.url} target="_blank" rel="noreferrer">
                      {reference.title} <Icon name="arrow" width="15" height="15" />
                      <span className="sr-only"> {ui.newTab}</span>
                    </a>
                  </h3>
                  <p>{reference.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}
        <Link
          to={path(`/projects/${nextProject.slug}`)}
          className={styles.nextProject}
        >
          <span>
            <span className={styles.label}>{ui.nextProject}</span>
            <span className={styles.nextProjectName}>{nextProject.name}</span>
          </span>
          <Icon name="arrow" width="32" height="32" />
        </Link>
      </main>
      <SiteFooter />
    </div>
  )
}
