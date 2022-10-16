import { Post } from '@/domain/entity/post/post';
import { ApiClient } from '../apiClient';
import { CreatePostDto } from './dto/createPostDto';

export class PostRepositoryImpl {
  constructor(private readonly apiClient = new ApiClient()) {}

  async findAll(): Promise<Post[]> {
    const { data } = await this.apiClient.get<Post[]>('/posts');
    return data;
  }

  async create(post: CreatePostDto): Promise<Post> {
    return {
      ...post,
      id: generateRandomNumericId(),
    };
  }
}

function generateRandomNumericId() {
  return self.crypto.getRandomValues(new Uint32Array(1))[0];
}
