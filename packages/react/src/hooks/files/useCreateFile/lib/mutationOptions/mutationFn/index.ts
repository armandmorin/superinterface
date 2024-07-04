import { JSONParser } from '@streamparser/json-whatwg'
import {
  useQueryClient,
} from '@tanstack/react-query'
import { useSuperinterfaceContext } from '@/hooks/core/useSuperinterfaceContext'
import { useThreadContext } from '@/hooks/threads/useThreadContext'
import { handleResponse } from './handleResponse'
import { body } from './body'

export const mutationFn = ({
  superinterfaceContext,
  queryClient,
  threadContext,
}: {
  superinterfaceContext: ReturnType<typeof useSuperinterfaceContext>
  queryClient: ReturnType<typeof useQueryClient>
  threadContext: ReturnType<typeof useThreadContext>
}) => async (variables: {
  content: string
  [key: string]: any
}) => {
  const response = await fetch(`${superinterfaceContext.baseUrl}/files`, {
    method: 'POST',
    body: JSON.stringify(body({
      variables,
      superinterfaceContext,
    })),
  })

  console.log({ response })

  return {
    success: true,
  }
}