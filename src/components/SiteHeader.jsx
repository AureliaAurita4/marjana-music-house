import { useEffect, useState } from 'react'
import { navigation } from '../content.js'
import darkLogo from '../assets/logo-header-dark.svg'
import lightLogo from '../assets/logo-header-light.svg'

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''} ${open ? 'site-header--menu-open' : ''}`}>
      <a className="site-header__brand" href="#top" aria-label="Marjana Music House — на главную">
        <img src={scrolled || open ? lightLogo : darkLogo} alt="Marjana Music House" />
      </a>

      <button
        className={`menu-button ${open ? 'menu-button--open' : ''}`}
        type="button"
        aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <nav id="main-navigation" className={`main-nav ${open ? 'main-nav--open' : ''}`} aria-label="Основная навигация">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className="main-nav__cta" href="#contact" onClick={closeMenu}>
          Связаться
        </a>
      </nav>
    </header>
  )
}
