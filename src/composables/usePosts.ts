import { PostRepositoryImpl } from '@/infra/post/postRepositoryImpl';
import { useApi } from './useApi';

export const useFetchPosts = (postRepository = new PostRepositoryImpl()) =>
  useApi(['posts'], () => postRepository.findAll(), {});

export const useFetchPostById = (
  postId: number,
  postRepository = new PostRepositoryImpl(),
) =>
  useApi(['posts', { postId }], () => postRepository.findById(postId), {
    enabled: !!postId,
  });
