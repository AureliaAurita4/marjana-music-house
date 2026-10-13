import Reveal from './components/Reveal.jsx'
import SiteHeader from './components/SiteHeader.jsx'
import { contacts, formats, rentalUses, studioQualities } from './content.js'
import founderPhoto from './assets/founder.jpg'
import studioPhoto from './assets/studio.jpg'
import houseLogo from './assets/logo-hero.svg'
import houseIcon from './assets/soundmark.svg'

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>
}

export default function App() {
  return (
    <div className="site-shell">
      <SiteHeader />

      <main>
        <section className="brand-hero" id="top">
          <img className="brand-hero__soundmark brand-hero__soundmark--left" src={houseIcon} alt="" aria-hidden="true" />
          <img className="brand-hero__soundmark brand-hero__soundmark--right" src={houseIcon} alt="" aria-hidden="true" />
          <div className="brand-hero__content page-width">
            <h1 className="brand-hero__logo-frame">
              <span className="sr-only">Marjana Music House</span>
              <img className="brand-hero__logo" src={houseLogo} alt="" />
            </h1>
            <p className="brand-hero__tagline">Творческое пространство в Таллинне</p>
          </div>
          <a className="brand-hero__scroll" href="#about">
            <span>О студии</span>
            <span aria-hidden="true">↓</span>
          </a>
        </section>

        <section className="house-story">
          <div className="page-width section-anchor" id="about">
            <Reveal className="house-story__heading">
              <p className="eyebrow eyebrow--light">О студии</p>
              <h2>Здесь творчество —<br />это путь Домой.</h2>
              <p>Marjana Music House — место, где человек встречается со своей творческой природой. Здесь можно раскрыться мягко и в своём темпе — через голос, движение, интуицию и игру.</p>
            </Reveal>

            <div className="studio-quality-grid">
              {studioQualities.map((quality, index) => (
                <Reveal className="studio-quality" key={quality.title} delay={index * 80}>
                  <span>{quality.number}</span>
                  <h3>{quality.title}</h3>
                  <p>{quality.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section founder-section">
          <div className="page-width founder-grid section-anchor" id="founder">
            <Reveal className="founder-media">
              <img src={founderPhoto} alt="Марьяна Лапшина — создательница Marjana Music House" />
            </Reveal>
            <Reveal className="founder-copy" delay={100}>
              <p className="eyebrow">Создательница пространства</p>
              <h2>Марьяна Лапшина</h2>
              <p className="founder-copy__lead">Марьяна создала Music House как место, в котором творчество помогает человеку услышать себя и почувствовать внутреннюю опору.</p>
              <p>Она ведёт индивидуальные занятия и встречи, собирает людей на камерных событиях и бережно поддерживает атмосферу студии — открытую, живую и принимающую.</p>
            </Reveal>
          </div>
        </section>

        <section className="formats-overview">
          <div className="page-width section-anchor" id="formats">
            <Reveal className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">Форматы и занятия</p>
                <h2>Творчество может начинаться по-разному</h2>
              </div>
              <p>Выберите встречу один на один или приходите создавать и проживать что-то новое вместе.</p>
            </Reveal>

            <div className="format-showcase">
              {formats.map((item, index) => (
                <Reveal key={item.title} delay={index * 70}>
                  <article className={`format-panel format-panel--${item.tone}`}>
                    <div className="format-panel__number">{item.number}</div>
                    <div className="format-panel__body">
                      <p className="eyebrow">{item.eyebrow}</p>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                    <div className="format-panel__footer">
                      <strong>{item.price}</strong>
                      <a href={contacts.emailHref}>Узнать подробнее <ArrowIcon /></a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="rental-section">
          <div className="page-width rental-grid section-anchor" id="rent">
            <Reveal className="rental-media">
              <img src={studioPhoto} alt="Интерьер Marjana Music House" />
              <div className="rental-media__label">Таллинн · Marjana Music House</div>
            </Reveal>

            <Reveal className="rental-copy" delay={100}>
              <p className="eyebrow">Аренда студии</p>
              <h2>Пространство для вашей идеи</h2>
              <p>Music House можно наполнить собственным событием. Студия подходит для камерных форматов, в которых важны уют, свобода и живой контакт.</p>
              <ul>
                {rentalUses.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="rental-copy__footer">
                <strong>от 20 € / час</strong>
                <a className="button button--primary" href={contacts.emailHref}>Обсудить аренду</a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="contact-section">
          <div className="page-width contact-grid section-anchor" id="contact">
            <Reveal>
              <p className="eyebrow eyebrow--light">Связь</p>
              <h2>Приходите в Music House</h2>
              <p className="contact-section__lead">Напишите Марьяне, если хотите записаться на занятие, узнать о ближайшем событии или обсудить аренду студии.</p>
              <div className="contact-actions">
                <a className="button button--light" href={contacts.emailHref}>Написать Марьяне</a>
                <a className="contact-phone" href={contacts.phoneHref}>{contacts.phoneLabel}</a>
              </div>
            </Reveal>

            <Reveal className="contact-details" delay={100}>
              <div>
                <span>Где</span>
                <p>{contacts.location}</p>
              </div>
              <div>
                <span>Почта</span>
                <a href={contacts.emailHref}>{contacts.email}</a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width site-footer__inner">
          <img src={houseLogo} alt="Marjana Music House" />
          <p>© {new Date().getFullYear()} Marjana Music House</p>
          <a href="#top">Наверх ↑</a>
        </div>
      </footer>
    </div>
  )
}
