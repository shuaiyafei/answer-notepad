<template>
  <div id="app">
    <p>
      <router-link to="/">redirect Init</router-link>
    </p>
    <p>
      <router-link to="/A">redirect A</router-link>
    </p>
    <p>
      <router-link to="/B">redirect B</router-link>
    </p>
    <p>
      <router-link to="/C">redirect C</router-link>
    </p>
    <router-view />
  </div>
</template>