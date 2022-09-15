import { Link } from 'react-router-dom'

import { SpotifyLogo } from '../../components/SpotifyLogo/SpotifyLogo'

import './LogIn.styles.css'

export function LogIn() {
  return (
    <main class="container p-4 justify-content-center" id="form">
      <div class="d-flex flex-column align-items-center" id="text">
        <div class="mb-2">
          <Link to="/">
            <SpotifyLogo dark />
          </Link>
        </div>

        <p>Para continuar faça login no Spotify</p>

        <a href="https://pt-br.facebook.com/">
          <button type="button" class="mb-2 btn btn-primary" id="button">
            CONTINUAR COM O FACEBOOK
          </button>
        </a>
        <a href="https://appleid.apple.com/sign-in">
          <button type="button" class="mb-2 btn btn-dark" id="button">
            CONTINUAR COM A APPLE
          </button>
        </a>
        <a href="https://myaccount.google.com/">
          <button type="button" class="mb-2 btn btn-light" id="button">
            CONTINUAR COM O GOOGLE
          </button>
        </a>
        {/* <!-- colocar o link da pagina de cadastro aqui: --> */}
        <a href="#">
          <button type="button" class="mb-2 btn btn-light" id="button">
            CONTINUAR COM UM NÚMERO DE TELEFONE
          </button>
        </a>

        {/* <!-- verificar linha --> */}
        <span class="or-text">ou</span>

        <form>
          <div class="form-group mb-1">
            <label id="label_form">Endereço do e-mail ou nome de usuário</label>
            <input
              type="email"
              class="form-control"
              placeholder="Endereço do e-mail ou nome de usuário"
            />
          </div>

          <div class="form-group">
            <label id="label_form">Senha</label>
            <input type="password" class="form-control" placeholder="Senha" />
          </div>
        </form>

        {/* <!-- colocar o link da pagina de cadastro aqui: --> */}
        <div class="mb-2">
          <a href="#" id="esqueci">
            Esqueceu sua senha?
          </a>
        </div>

        <div class="mb-4 d-flex align-items-center">
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Lembrar de mim
            </label>
          </div>
          <button type="submit" class="btn btn-primary" id="submit">
            Entrar
          </button>
        </div>

        <footer class="signup-footer">
          <span>
            Don't have an account? <Link to="/signup">Sign up</Link>.
          </span>
        </footer>
      </div>
    </main>
  )
}
