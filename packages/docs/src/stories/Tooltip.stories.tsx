import type { StoryObj, Meta } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@bastos-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    children: <Button size="sm">Hover me</Button>,
    content: 'Hi! I am a tooltip.',
    side: 'top',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    side: {
      control: {
        type: 'inline-radio',
      },
      options: ['top', 'right', 'bottom', 'left'],
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '40vh',
        }}
      >
        {Story()}
      </div>
    ),
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
