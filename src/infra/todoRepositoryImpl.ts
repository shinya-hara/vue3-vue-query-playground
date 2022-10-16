import { Todo } from '@/domain/entity/todo/todo';
import { ApiClient } from './apiClient';

export type CreateTodoDto = {
  title: string;
  userId: number;
};

export class TodoRepositoryImpl {
  constructor(private readonly apiClient = new ApiClient()) {}

  async findAll() {
    const { data } = await this.apiClient.get<Todo[]>('/todos');
    return data;
  }

  async create(todo: CreateTodoDto) {
    return {
      ...todo,
      id: generateRandomNumericId(),
      completed: false,
    };
  }
}

function generateRandomNumericId() {
  return self.crypto.getRandomValues(new Uint32Array(1))[0];
}
