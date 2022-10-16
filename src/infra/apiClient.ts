import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class ApiClient {
  // private static readonly BASE_URL = import.meta.env
  //   .VITE_API_BASE_URL as string;
  private static readonly BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(public readonly _client: AxiosInstance = axios.create()) {}

  public async get<T>(
    url: AxiosRequestConfig['url'],
    params?: AxiosRequestConfig['params'],
    config?: AxiosRequestConfig,
  ) {
    return this.request<T>({
      method: 'GET',
      url,
      params,
      ...config,
    });
  }

  public async post<T>(
    url: AxiosRequestConfig['url'],
    data?: AxiosRequestConfig['data'],
    config?: AxiosRequestConfig,
  ) {
    return await this.request<T>({
      method: 'POST',
      url,
      data,
      ...config,
    });
  }

  public async put<T>(
    url: AxiosRequestConfig['url'],
    data?: AxiosRequestConfig['data'],
    config?: AxiosRequestConfig,
  ) {
    return await this.request<T>({
      method: 'PUT',
      url,
      data,
      ...config,
    });
  }

  public async patch<T>(
    url: AxiosRequestConfig['url'],
    data?: AxiosRequestConfig['data'],
    config?: AxiosRequestConfig,
  ) {
    return await this.request<T>({
      method: 'PATCH',
      url,
      data,
      ...config,
    });
  }

  public async delete<T>(
    url: AxiosRequestConfig['url'],
    data?: AxiosRequestConfig['data'],
    config?: AxiosRequestConfig,
  ) {
    return await this.request<T>({
      method: 'DELETE',
      url,
      data,
      ...config,
    });
  }

  private async request<T = any>(config: AxiosRequestConfig) {
    // NOTE: 通信遅延再現
    await new Promise((r) => setTimeout(r, 1000));

    const localConfig: AxiosRequestConfig = {
      ...config,
      baseURL: ApiClient.BASE_URL,
    };
    return this._client.request<T>(localConfig);
  }
}
