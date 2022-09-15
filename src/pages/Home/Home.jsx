import {SideBar} from '../../components/SideBar/SideBar'
import {Header} from '../../components/Header/Header'
import {Card} from '../../components/Card/Card'
import './Home.styles.css'


export function Home() {
  return (
    <div class="wrapper">
      <SideBar />
      <main class="main">
        <Header />
        <div class="body-root">
          <section class="playlist-section">
            <header class="playlist-section__header">
              <h1 class="title">Spotify Playlists</h1>
              <a href="#" class="link">
                See All
              </a>
            </header>
            <div class="playlist-section__body">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </section>
        </div>
      </main>
      <footer class="footer"></footer>
    </div>
  )
}
