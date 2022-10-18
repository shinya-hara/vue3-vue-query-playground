import { Ref } from 'vue';
import { PostRepositoryImpl } from '@/infra/post/postRepositoryImpl';
import { useApi } from './useApi';

export const useFetchPosts = (postRepository = new PostRepositoryImpl()) =>
  useApi(['posts'], () => postRepository.findAll(), {});

export const useFetchPostById = (
  postId: Ref<number>,
  postRepository = new PostRepositoryImpl(),
) => {
  return useApi(
    ['posts', { postId }],
    () => postRepository.findById(postId.value),
    {
      enabled: !!postId,
    },
  );
};
