import * as RadixTooltip from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import { TooltipArrow, TooltipContent } from './styles'

export interface TooltipProps
  extends ComponentProps<typeof RadixTooltip.Content> {
  content: string
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <RadixTooltip.Provider delayDuration={200}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <TooltipContent {...props}>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
