import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@bastos-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/fellipebastos.png',
    alt: 'Fellipe Bastos',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
}
