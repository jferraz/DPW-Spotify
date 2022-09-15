
import {
    CaretLeft,
    CaretRight
  } from 'phosphor-react'

  import { Link } from 'react-router-dom'

  
export function Header(){
    return (
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
    )
}