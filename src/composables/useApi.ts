/**
 * @see https://zenn.dev/himorishige/articles/76e903bc5a1aa2#usequery%E3%82%92%E6%8A%BD%E8%B1%A1%E5%8C%96%E3%81%99%E3%82%8Buseapi
 */

import { UseQueryOptions, useQuery } from '@tanstack/vue-query';

export const useApi = <
  TQueryKey extends [string, (Record<string, unknown> | string)?],
  TQueryFnData,
  TError,
  TData = TQueryFnData,
>(
  queryKey: TQueryKey,
  fetcher: (params: TQueryKey[1]) => Promise<TQueryFnData>,
  options?: Omit<
    UseQueryOptions<unknown, TError, TData, TQueryKey>,
    'queryKey' | 'queryFn'
  >,
) => {
  return useQuery({
    queryKey,
    queryFn: async () => fetcher(queryKey[1]),
    ...options,
  });
};
