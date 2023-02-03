import * as RadixToast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  description?: string
}

export const Toast = ({ title, description, ...props }: ToastProps) => {
  return (
    <RadixToast.Provider>
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>

        {description && <ToastDescription>{description}</ToastDescription>}

        <ToastClose>
          <X size={20} />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </RadixToast.Provider>
  )
}

Toast.displayName = 'Toast'
