<template>
  <h1>Post detail</h1>
  <div>
    <span v-if="isLoading">Loading...</span>
    <span v-else-if="isError">Error occurred...</span>
    <div v-else-if="post">
      <h2>{{ post.title }}</h2>
      <p style="white-space: pre">{{ post.body }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetchPostById } from '@/composables/usePosts';

const { params } = useRoute();

const postId = Number(params.id);
const { data: post, isLoading, isError } = useFetchPostById(postId);
</script>
