import { Sandpack } from '@codesandbox/sandpack-react'
import { FC, memo } from 'react'
import { shadesOfPurple } from './theme'
import { ComponentProps } from 'react'

/**
 * Wraps the `Sandpack` component to provide a custom theme.
 */
export const CodeSandBox: FC<ComponentProps<typeof Sandpack>> = memo((...props) => {
  return <Sandpack {...props[0]} theme={shadesOfPurple} />
})
