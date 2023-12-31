import React from 'react'

const DarkMode = () => {
  return (
    <>
      <div class="d-flex align-items-center dropdown color-modes">
          <button class="btn btn-link px-0 text-decoration-none dropdown-toggle d-flex align-items-center"
              id="bd-theme"
              type="button"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              data-bs-display="static">
              <svg class="bi my-1 me-2 theme-icon-active"><use href="#circle-half"></use></svg>
              <span class="ms-2" id="bd-theme-text">Toggle theme</span>
          </button>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme" style={{minWidth: '8rem'}}>
              <li>
                  <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light">
                      <svg class="bi me-2 opacity-50 theme-icon"><use href="#sun-fill"></use></svg>
                      Light
                      <svg class="bi ms-auto d-none"><use href="#check2"></use></svg>
                  </button>
              </li>
              <li>
                  <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark">
                      <svg class="bi me-2 opacity-50 theme-icon"><use href="#moon-stars-fill"></use></svg>
                      Dark
                      <svg class="bi ms-auto d-none"><use href="#check2"></use></svg>
                  </button>
              </li>
              <li>
                  <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto">
                      <svg class="bi me-2 opacity-50 theme-icon"><use href="#circle-half"></use></svg>
                      Auto
                      <svg class="bi ms-auto d-none"><use href="#check2"></use></svg>
                  </button>
              </li>
          </ul>
      </div>
      </>
  )
}

export default DarkMode