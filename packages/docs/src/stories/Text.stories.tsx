import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@bastos-ignite-ui/react'
import { fontSizes } from '@bastos-ignite-ui/tokens'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus nemo rem dolorem, cupiditate dolorum maiores ea laborum consequuntur inventore quibusdam soluta ullam? Veritatis iste perferendis reiciendis dolor cum est nam!',
    size: 'md',
  },
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
      },
      options: Object.keys(fontSizes),
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
