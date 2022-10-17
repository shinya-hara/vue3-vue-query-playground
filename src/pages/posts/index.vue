<template>
  <h1>Posts</h1>
  <div>
    <span v-if="isLoading">Loading...</span>
    <span v-else-if="isError">Error occurred...</span>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/posts/${post.id}`">
          {{ post.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useFetchPosts } from '@/composables/usePosts';

const { data: posts, isLoading, isError } = useFetchPosts();
</script>
