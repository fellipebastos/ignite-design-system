import * as Toast from '@radix-ui/react-toast'

import { keyframes, styled } from '../../styles'

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: 'translateX(calc(100% + var(--space-8)))' },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + var(--space-8)))` },
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '$8',
  gap: '$4',
  width: 360,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 999,
  outline: 'none',
})

export const ToastRoot = styled(Toast.Root, {
  position: 'relative',
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  border: '1px solid $gray600',
  padding: '$3 $5',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  fontFamily: '$default',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',
  color: '$white',
  marginRight: '$4',
})

export const ToastDescription = styled(Toast.Description, {
  marginTop: '$1',
  marginRight: '$4',
  color: '$gray200',
  fontSize: '$sm',
  lineHeight: '$base',
  overflowX: 'hidden',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  color: '$gray200',
  position: 'absolute',
  top: '$4',
  right: '$4',
  cursor: 'pointer',
  lineHeight: 0,

  '&:hover': {
    color: '$gray100',
  },
})
