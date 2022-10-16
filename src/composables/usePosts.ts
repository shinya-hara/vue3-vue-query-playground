import { PostRepositoryImpl } from '@/infra/post/postRepositoryImpl';
import { useQuery } from '@tanstack/vue-query';

export const useFetchPosts = (postRepository = new PostRepositoryImpl()) =>
  useQuery(['posts'], () => postRepository.findAll(), {});
