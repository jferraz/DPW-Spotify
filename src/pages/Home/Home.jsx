import {SideBar} from '../../components/SideBar/SideBar'
import {Header} from '../../components/Header/Header'
import {Card} from '../../components/Card/Card'
import './Home.styles.css'

const playlists = [{
  url :"https://placekitten.com/300/300",
  name: "Today's Top Hits",
  description: "Raul Seixas is on top of the Hottest 50!"
},
{
  url :"https://placekitten.com/300/300",
  name: "Today's Top Hits",
  description: "Amado Edilson is on top of the Hottest 50!"
},
{
  url :"https://placekitten.com/300/300",
  name: "Today's Top Hits",
  description: "Raça Negra is on top of the Hottest 50!"
},
{
  url :"https://placekitten.com/300/300",
  name: "Today's Top Hits",
  description: "Falcão is on top of the Hottest 50!"
},
{
  url :"https://placekitten.com/300/300",
  name: "Today's Top Hits",
  description: "Forró do Muido is on top of the Hottest 50!"
},
{
  url :"https://placekitten.com/300/300",
  name: "Today's Top Hits",
  description: "Steve Lacy is on top of the Hottest 50!"
}]

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
              {playlists.map(playlist => <Card url={playlist.url} name={playlist.name} description={playlist.description} /> )}              
            </div>
          </section>
        </div>
      </main>
      <footer class="footer"></footer>
    </div>
  )
}
