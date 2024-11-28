import { createRoot } from 'react-dom/client'
import {
  Thread,
} from '@superinterface/react'
import { rootElement } from '@/lib/rootElement'
import { Providers } from '@/components/Providers'
import { superinterfaceContext as getSuperinterfaceContext } from '@/lib/superinterfaceContext'

const currentScript = document.currentScript
const superinterfaceContext = getSuperinterfaceContext({ currentScript })
const root = createRoot(rootElement({ currentScript }))

root.render(
  <Providers superinterfaceContext={superinterfaceContext}>
    <Thread.Root>
      <Thread.Messages />
      <Thread.MessageForm.Root>
        <Thread.MessageForm.Field.Root>
          <Thread.MessageForm.Field.Files.Preview />
          <Thread.MessageForm.Field.Files.Control />
          <Thread.MessageForm.Field.Control />
          <Thread.MessageForm.Submit />
        </Thread.MessageForm.Field.Root>
      </Thread.MessageForm.Root>
    </Thread.Root>
  </Providers>
)
