
import { RecipeVariantProps, cva } from "styled-system/css"
import { styled } from "styled-system/jsx"


export const buttonStyle = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'semibold',
    outline: 'none',
    transition: 'colors',
    cursor: 'pointer',
    _focus: {
      ring: 'solid 4px',
      ringOffset: '1',
      ringColor: 'blue.600'
    },
    _disabled: {
      pointerEvents: 'none',
      opacity: '0.4'
    }
  },
  variants: {
    variant: {
      solid: {
        bg: 'slate.900',
        color: 'white',
        _hover: {
          bg: 'slate.700'
        }
      },
      destructive: {
        bg: 'red.500',
        color: 'white',
        _hover: {
          bg: 'red.600'
        }
      },
      outline: {
        borderWidth: '1px',
        borderColor: 'slate.200',
        bg: 'transparent',
        _hover: {
          bg: 'slate.100'
        },
        _focus: {
          bg: 'slate.100'
        }
      },
      ghost: {
        bg: 'transparent',
        _hover: {
          bg: 'slate.100'
        },
        _focus: {
          bg: 'slate.100'
        }
      },
      link: {
        bg: 'transparent',
        color: 'slate.900',
        textUnderlineOffset: '4',
        _hover: {
          bg: 'transparent',
          textDecoration: "underline"
        },
        _focus: {
          bg: 'transparent',
          textDecoration: "underline"
        }
      },
    },
    size: {
      xs: {
        h: '6',
        px: '2',
        fontSize: 'xs',
        rounded: 'xs'
      },
      sm: {
        h: '8',
        px: '3',
        fontSize: 'sm',
        rounded: 'sm'
      },
      md: {
        h: '10',
        px: '4',
        fontSize: 'md',
        rounded: 'md'
      },
      lg: {
        h: '12',
        px: '6',
        fontSize: 'lg',
        rounded: 'lg'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'solid'
  }
})

export type ButtonVariants = RecipeVariantProps<typeof buttonStyle> // { size?: 'small' | 'large' }

export const Button = styled('button', buttonStyle)
