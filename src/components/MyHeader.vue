<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Hanachiru's Protfolio(簡易版)</router-link>

    <div class="navbar-expand">
      <ul class="navbar-nav mr-auto mt-2 mt-md-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Profile</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Works" class="nav-link">Works</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Links" class="nav-link">Links</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>