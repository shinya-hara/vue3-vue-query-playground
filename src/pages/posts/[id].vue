<template>
  <h1>Post detail #{{ postId }}</h1>
  <router-link :to="`/posts/${postId - 1}`">＜PREV</router-link> |
  <router-link :to="`/posts/${postId + 1}`">NEXT＞</router-link>
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

const props = defineProps<{ id: string }>();
const postId = computed(() => Number(props.id));
const { data: post, isLoading, isError } = useFetchPostById(postId);
</script>
