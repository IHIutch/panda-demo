import { RecipeVariantProps, sva } from 'styled-system/css'

export const checkboxStyle = sva({
  slots: ['root', 'control', 'label'],
  base: {
    root: { display: 'flex', alignItems: 'center', gap: '2' },
    control: { borderWidth: '1px', borderRadius: 'sm' },
    label: { marginStart: '2' }
  },
  variants: {
    size: {
      small: {
        control: { width: '4', height: '4' },
        label: { fontSize: 'lg' }
      },
      large: {
        control: { width: '8', height: '8', rounded: 'xl' },
        label: { fontSize: 'xl' }
      }
    }
  },
  defaultVariants: {
    size: 'small'
  }
})

export type CheckboxVariants = RecipeVariantProps<typeof checkboxStyle>

export type CheckboxProps = CheckboxVariants & {
  children: React.ReactNode
}


export const Checkbox = ({ children, ...rest }: CheckboxProps) => {
  const [props] = checkboxStyle.splitVariantProps(rest)
  const classes = checkboxStyle(props)
  return (
    <label className={classes.root}>
      <input type="checkbox" className={classes.control} />
      <span className={classes.label}>{children}</span>
    </label>
  )
}
