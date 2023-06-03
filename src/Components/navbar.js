import React from 'react';

function navbar() {
  return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">PSX Completion tracker</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample05">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/uncompleted">Uncompleted</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/completed">Completed</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default navbar;