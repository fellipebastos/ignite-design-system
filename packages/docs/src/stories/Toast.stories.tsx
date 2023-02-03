import type { StoryObj, Meta } from '@storybook/react'
import { Button, Toast, ToastProps } from '@bastos-ignite-ui/react'
import { useState } from 'react'

const ToastComponent = (props: ToastProps) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div>
      <Button
        size="sm"
        onClick={() => {
          setOpen(true)
        }}
      >
        To schedule
      </Button>
      <Toast open={isOpen} onOpenChange={setOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Data display/Toast',
  component: ToastComponent,
  args: {
    title: 'Appointment made.',
    description: 'Wednesday, October 23rd at 4pm',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
