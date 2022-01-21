<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/channel">Channel</router-link>
  </div>
  <router-view />
</template>

<script></script>

<style>
#app {
  font-family: "Press Start 2P";
  height: 100vh;
  text-align: center;
  background-color: rgb(114, 8, 184);
  color: rgb(250, 214, 8);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: rgb(251, 169, 37);
  /* color: #2c3e50; */
}

#nav a.router-link-exact-active {
  color: rgb(250, 214, 8);
}

h1 {
  font-size: 3em;
}

.header-wrap {
  display: block;
  width: auto;
  height: auto;
  padding: 0;
  text-align: center;
  transform: perspective(200px) rotateX(5deg);
  letter-spacing: 0.1em;
  text-shadow: 0 -1px 0 #fff, 0 1px 0 #c78802, 0 2px 0 #c78801, 0 3px 0 #c78801,
    0 4px 0 #c78801, 0 5px 0 #c78801, 0 6px 0 #c78801, 0 7px 0 #c78801,
    0 8px 0 rgb(53, 53, 146), 0 9px 0 rgb(53, 53, 146),
    0 10px 0 rgb(53, 53, 146), 0 11px 0 rgb(53, 53, 146),
    0 12px 0 rgb(53, 53, 146), 0 13px 0 rgb(53, 53, 146),
    0 14px 0 rgb(53, 53, 146), 0 15px 0 rgb(53, 53, 146);
}
</style>
