import { PostRepositoryImpl } from '@/infra/post/postRepositoryImpl';
import { useQuery } from '@tanstack/vue-query';

export const useFetchPosts = (postRepository = new PostRepositoryImpl()) =>
  useQuery(['posts'], () => postRepository.findAll(), {});

export const useFetchPostById = (
  postId: number,
  postRepository = new PostRepositoryImpl(),
) =>
  useQuery(['posts', { postId }], () => postRepository.findById(postId), {
    enabled: !!postId,
  });
