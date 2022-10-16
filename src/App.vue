<template>
  <h1>{{ title }}</h1>
  <nav>
    Router:
    <ul>
      <li v-for="(route, i) in routes" :key="i">
        <router-link :to="route.path">
          {{ route.path }}
        </router-link>
      </li>
    </ul>
  </nav>
  <hr />
  <router-view />
</template>

<script setup lang="ts">
import { routes } from '@/router';
const title = import.meta.env.VITE_APP_TITLE;
</script>
