import {
    Columns,
    House,
    MagnifyingGlass
  } from 'phosphor-react'
  import { Link } from 'react-router-dom'
import { SpotifyLogo } from "../SpotifyLogo/SpotifyLogo";

export function SideBar(){
    return (
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
    )
}