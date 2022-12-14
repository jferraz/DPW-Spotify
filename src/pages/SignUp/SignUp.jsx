import { Link } from 'react-router-dom'

import { SpotifyLogo } from '../../components/SpotifyLogo/SpotifyLogo'

import './SignUp.styles.css'

export function SignUp() {
  return (
    <div class="signup-wrapper">
      <header class="header-container">
        <Link to="/">
          <SpotifyLogo dark />
        </Link>
        <h1 class="header-container__title">
          Sign up for free to start listening.
        </h1>
      </header>
      <main>
        <div class="signup-options">
          <a href="#" class="primary-link primary-link--fb">
            <span>Sign up with Facebook</span>
          </a>
          <a href="#" class="primary-link primary-link--border">
            <span>Sign up with Google</span>
          </a>
        </div>
        <span class="or-text">or</span>
        <form action="./index.html" class="signup-form">
          <div class="field">
            <label for="email" class="field__label">
              What's your email?
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="field__input"
              placeholder="Enter your email"
            />
          </div>
          <div class="field">
            <label for="email_confirmation" class="field__label">
              Confirm your email
            </label>
            <input
              type="email"
              name="email_confirmation"
              id="email_confirmation"
              class="field__input"
              placeholder="Enter your email again"
            />
          </div>
          <div class="field">
            <label for="password" class="field__label">
              Create a password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              class="field__input"
              placeholder="Create a password"
            />
          </div>
          <div class="field">
            <label for="name" class="field__label">
              What should we call you?
            </label>
            <input
              type="text"
              name="name"
              id="name"
              class="field__input"
              placeholder="Enter a profile name"
            />
          </div>
          <div class="field">
            <label class="field__label">What's your date of birth?</label>
            <div class="field__container">
              <div class="field flex-1">
                <label for="day" class="field__label field__label--light">
                  Day
                </label>
                <input
                  type="number"
                  name="day"
                  id="day"
                  class="field__input"
                  placeholder="DD"
                />
              </div>
              <div class="field flex-3">
                <label for="month" class="field__label field__label--light">
                  Month
                </label>
                <select name="month" id="month" class="field__input">
                  <option selected disabled value="">
                    Month
                  </option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>
              <div class="field flex-2">
                <label for="year" class="field__label field__label--light">
                  Year
                </label>
                <input
                  type="number"
                  name="year"
                  id="year"
                  class="field__input"
                  placeholder="YYYY"
                />
              </div>
            </div>
          </div>
          <div class="field">
            <label class="field__label">What's your gender?</label>
            <div class="field__container">
              <div class="field field--row">
                <input
                  type="radio"
                  name="gender"
                  id="gender-male"
                  value="male"
                  class="field__input"
                />
                <label
                  for="gender-male"
                  class="field__label field__label--light"
                >
                  Male
                </label>
              </div>
              <div class="field field--row">
                <input
                  type="radio"
                  name="gender"
                  id="gender-female"
                  value="female"
                  class="field__input"
                />
                <label
                  for="gender-female"
                  class="field__label field__label--light"
                >
                  Female
                </label>
              </div>
              <div class="field field--row">
                <input
                  type="radio"
                  name="gender"
                  id="gender-nb"
                  value="non_binary"
                  class="field__input"
                />
                <label for="gender-nb" class="field__label field__label--light">
                  Non-binary
                </label>
              </div>
            </div>
          </div>
          <div class="btn-wrapper">
            <button type="submit" class="primary-btn">
              Sign up
            </button>
          </div>
        </form>
      </main>
      <footer class="signup-footer">
        <span>
          Have an account? <Link to="/login">Log in</Link>.
        </span>
      </footer>
    </div>
  )
}
