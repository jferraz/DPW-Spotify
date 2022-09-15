import { CaretRight, MagnifyingGlass } from 'phosphor-react'
import { Link } from 'react-router-dom'

import { SpotifyLogo } from '../../components/SpotifyLogo/SpotifyLogo'

import './Support.styles.css'

export function Support() {
  return (
    <body className="support">
      <div className="supportDiv">
        <header className="supportHeader">
          <Link to="/">
            <SpotifyLogo />
          </Link>
          <div className="support-menu">
            <div className="support-menu__container">
              <a href="#" class="support-menu__item">
                Premium
              </a>
              <Link to="/support" class="support-menu__item">
                Support
              </Link>
              <a href="#" class="support-menu__item">
                Download
              </a>
            </div>
            <div class="slash"></div>
            <div className="support-menu__container">
              <Link to="/signup" class="support-menu__item">
                Sign up
              </Link>
              <Link to="/login" class="support-menu__item">
                Log in
              </Link>
            </div>
          </div>
        </header>
      </div>
      <div className="supportConteudoFora">
        <div className="supportConteudo">
          <h1 className="estiloSpan">ATENDIMENTO DO SPOTIFY</h1>
          <strong className="estiloMeio">Como podemos ajudar?</strong>
          <span className="estiloBaixo">
            <a href="">Faça log in</a> para ter ajuda mais rápido
          </span>
          <div className="help-container__search">
            <span>
              <MagnifyingGlass size={24} />
            </span>
            <input type="text" placeholder="Buscar" />
          </div>
          <div className="category">
            <div>
              <a href="">
                <div className="category__card category__card--pink">
                  <p>Ajuda com pagamentos</p>
                </div>
              </a>
            </div>
            <div>
              <a href="">
                <div className="category__card category__card--red">
                  <p>Ajuda com o plano</p>
                </div>
              </a>
            </div>
            <div>
              <a href="">
                <div className="category__card category__card--orange">
                  <p>Ajuda com o app</p>
                </div>
              </a>
            </div>
            <div>
              <a href="">
                <div className="category__card category__card--green">
                  <p>Ajuda com dispositivos</p>
                </div>
              </a>
            </div>
            <div>
              <a href="">
                <div className="category__card category__card--gray">
                  <p>Privacidade e Segurança</p>
                </div>
              </a>
            </div>
            <div>
              <a href="">
                <div className="category__card category__card--blue">
                  <p>Ajuda com a conta</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="articles-wrapper">
        <div className="articles-container">
          <h2>Ajuda rápida</h2>
          <ul className="articles">
            <li>
              <a href="">
                <span>Não consigo redefinir a senha</span>
                <CaretRight size={24} />
              </a>
            </li>
            <li>
              <a href="">
                <span>Tem algo errado com a minha conta</span>
                <CaretRight size={24} />
              </a>
            </li>
            <li>
              <a href="">
                <span>Não lembro minhas informações de login</span>
                <CaretRight size={24} />
              </a>
            </li>
            <li>
              <a href="">
                <span>Ajuda para entrar com o Facebook</span>
                <CaretRight size={24} />
              </a>
            </li>
            <li>
              <a href="">
                <span>Formas de pagamento</span>
                <CaretRight size={24} />
              </a>
            </li>
            <li>
              <a href="">
                <span>Criar ou entrar em um plano Família</span>
                <CaretRight size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="community-wrapper">
        <div className="community-container">
          <h2>Visite nossa Comunidade</h2>
          <p>
            Tem uma pergunta? Encontre respostas na nossa Comunidade de fãs
            especialistas do mundo todo!
          </p>
          <a href="">Acesse a Comunidade do Spotify</a>
        </div>
      </div>
    </body>
  )
}
