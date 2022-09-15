import {
  CaretLeft,
  CaretRight,
  Columns,
  House,
  MagnifyingGlass
} from 'phosphor-react'
import { Link } from 'react-router-dom'

import { SpotifyLogo } from '../../components/SpotifyLogo/SpotifyLogo'

import './Home.styles.css'

export function Home() {
  return (
    <div class="wrapper">
      <div class="sidebar">
        <div class="logo">
          <Link to="/">
            <SpotifyLogo />
          </Link>
        </div>
        <ul class="menu">
          <li>
            <Link to="/" className="menu-link menu-link--active">
              <House size={24} weight="fill" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <a href="#" class="menu-link">
              <MagnifyingGlass size={24} />
              <span>Search</span>
            </a>
          </li>
          <li>
            <a href="#" class="menu-link">
              <Columns size={24} />
              <span>Your Library</span>
            </a>
          </li>
        </ul>
      </div>
      <main class="main">
        <header class="header-root">
          <div class="navigation">
            <button class="navigation-btn" disabled>
              <CaretLeft size={24} />
            </button>
            <button class="navigation-btn" disabled>
              <CaretRight size={24} />
            </button>
          </div>
          <div class="quick-action-container">
            <nav class="quick-action-nav">
              <a href="#" class="quick-action-nav__item">
                Premium
              </a>
              <Link to="/support" class="quick-action-nav__item">
                Support
              </Link>
              <a href="#" class="quick-action-nav__item">
                Download
              </a>
            </nav>
            <div class="slash"></div>
            <div>
              <Link className="primary-link primary-link--blank" to="/signup">
                Sign up
              </Link>
              <Link className="primary-link" to="/login">
                Log in
              </Link>
            </div>
          </div>
        </header>
        <div class="body-root">
          <section class="playlist-section">
            <header class="playlist-section__header">
              <h1 class="title">Spotify Playlists</h1>
              <a href="#" class="link">
                See All
              </a>
            </header>
            <div class="playlist-section__body">
              <a href="#" class="card">
                <div class="card__body">
                  <img
                    src="https://placekitten.com/300/300"
                    alt="Playlist cover"
                    class="card__body-cover"
                  />
                  <strong class="card__body-name">Today's Top Hits</strong>
                  <p class="card__body-description">
                    Steve Lacy is on top of the Hottest 50!
                  </p>
                </div>
              </a>
              <a href="#" class="card">
                <div class="card__body">
                  <img
                    src="https://placekitten.com/300/300"
                    alt="Playlist cover"
                    class="card__body-cover"
                  />
                  <strong class="card__body-name">Today's Top Hits</strong>
                  <p class="card__body-description">
                    Steve Lacy is on top of the Hottest 50!
                  </p>
                </div>
              </a>
              <a href="#" class="card">
                <div class="card__body">
                  <img
                    src="https://placekitten.com/300/300"
                    alt="Playlist cover"
                    class="card__body-cover"
                  />
                  <strong class="card__body-name">Today's Top Hits</strong>
                  <p class="card__body-description">
                    Steve Lacy is on top of the Hottest 50!
                  </p>
                </div>
              </a>
              <a href="#" class="card">
                <div class="card__body">
                  <img
                    src="https://placekitten.com/300/300"
                    alt="Playlist cover"
                    class="card__body-cover"
                  />
                  <strong class="card__body-name">Today's Top Hits</strong>
                  <p class="card__body-description">
                    Steve Lacy is on top of the Hottest 50!
                  </p>
                </div>
              </a>
              <a href="#" class="card">
                <div class="card__body">
                  <img
                    src="https://placekitten.com/300/300"
                    alt="Playlist cover"
                    class="card__body-cover"
                  />
                  <strong class="card__body-name">Today's Top Hits</strong>
                  <p class="card__body-description">
                    Steve Lacy is on top of the Hottest 50!
                  </p>
                </div>
              </a>
              <a href="#" class="card">
                <div class="card__body">
                  <img
                    src="https://placekitten.com/300/300"
                    alt="Playlist cover"
                    class="card__body-cover"
                  />
                  <strong class="card__body-name">Today's Top Hits</strong>
                  <p class="card__body-description">
                    Steve Lacy is on top of the Hottest 50!
                  </p>
                </div>
              </a>
            </div>
          </section>
        </div>
      </main>
      <footer class="footer"></footer>
    </div>
  )
}
