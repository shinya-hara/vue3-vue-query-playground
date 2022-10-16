<template>
  <span v-if="isLoading">Loading...</span>
  <span v-else-if="isError">Error: {{ error?.message }}</span>
  <!-- We can assume by this point that `isSuccess === true` -->
  <ul v-else>
    <li v-for="todo in data" :key="todo.id">{{ todo.title }}</li>
  </ul>
  <button @click="onButtonClick">Add Todo</button>
</template>

<script setup lang="ts">
import { useQueryClient, useQuery, useMutation } from '@tanstack/vue-query';
import { CreateTodoDto, TodoRepositoryImpl } from '@/infra/todoRepositoryImpl';
import { Todo } from '@/domain/entity/todo/todo';

const todoRepository = new TodoRepositoryImpl();

// Access QueryClient instance
const queryClient = useQueryClient();

// Query
const { isLoading, isError, data, error } = useQuery<Todo[], Error>(
  ['todos'],
  () => todoRepository.findAll(),
);

// Mutation
const mutation = useMutation<Todo, Error, CreateTodoDto>(
  (newTodo) => todoRepository.create(newTodo),
  {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['todos']);
    },
  },
);

const onButtonClick = () => {
  mutation.mutate({
    title: 'new Task!',
    userId: 1,
  });
};
</script>
