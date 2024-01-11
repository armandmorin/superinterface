import { useState } from 'react'
import {
  InfiniteData,
  UseInfiniteQueryOptions,
  UseMutationOptions,
} from '@tanstack/react-query'
import { merge } from '@/lib/misc/merge'
import { Message, Run, MessagesPage, RunsPage } from '@/types'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SuperinterfaceContext } from '@/contexts/core/SuperinterfaceContext'
import { useSuperinterfaceContext } from '@/hooks/core/useSuperinterfaceContext'

type Args = {
  children: React.ReactNode
  queryOptions: {
    messages: UseInfiniteQueryOptions<InfiniteData<MessagesPage>>
    runs: UseInfiniteQueryOptions<InfiniteData<RunsPage>>
  },
  mutationOptions: {
    createMessage: UseMutationOptions<{ message: Message }>
    createRun: UseMutationOptions<{ run: Run }>
    handleAction: UseMutationOptions<{ run: Run }>
  },
}

export const SuperinterfaceProvider = ({
  children,
  ...rest
}: Args) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 10000,
          },
          mutations: {
            retry: false,
          },
        },
      }),
  )

  const superinterfaceContext = useSuperinterfaceContext()

  const value = merge(
    superinterfaceContext,
    // @ts-ignore-next-line
    rest
  )

  return (
    <SuperinterfaceContext.Provider
      value={value}
    >
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </SuperinterfaceContext.Provider>
  )
}
