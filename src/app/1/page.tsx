import { css } from 'styled-system/css'
import { buttonStyle } from '../../components/button'

export default function StyleObjects() {
  return (
    <div className={css({ p: '12' })}>
      <h1 className={css({ fontSize: '2xl', fontWeight: 'bold', mb: '4' })}>
        Style Objects
      </h1>
      <div className={css({ spaceY: '8' })}>
        <div>
          <button
            disabled={false}
            className={css({
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'semibold',
              outline: 'none',
              transition: 'colors',
              cursor: 'pointer',
              bg: 'slate.900',
              color: 'white',
              h: '8',
              px: '3',
              fontSize: 'sm',
              rounded: 'sm',
              _hover: {
                bg: 'slate.700',
              },
              _focus: {
                ring: 'solid 4px',
                ringOffset: '1',
                ringColor: 'blue.600',
              },
              _disabled: {
                pointerEvents: 'none',
                opacity: '0.4',
              },
            })}
          >
            boring button
          </button>
        </div>

        <div>
          <h2
            className={css({
              fontSize: '2xl',
              fontWeight: 'semibold',
              mb: '4',
            })}
          >
            Recipes
          </h2>
          <div className={css({ spaceY: '8' })}>
            <div>
              <h3
                className={css({
                  fontSize: 'xl',
                  fontWeight: 'semibold',
                  mb: '4',
                })}
              >
                Sizes
              </h3>
              <div className={css({ spaceX: '8' })}>
                <button className={buttonStyle({ size: 'lg' })}>
                  lg button
                </button>
                <button className={buttonStyle({ size: 'md' })}>
                  md button
                </button>
                <button className={buttonStyle({ size: 'sm' })}>
                  sm button
                </button>
                <button className={buttonStyle({ size: 'xs' })}>
                  xs button
                </button>
              </div>
            </div>
            <div>
              <h3
                className={css({
                  fontSize: 'xl',
                  fontWeight: 'semibold',
                  mb: '4',
                })}
              >
                Style Variants
              </h3>
              <div className={css({ spaceX: '8' })}>
                <button className={buttonStyle({ variant: 'solid' })}>
                  solid button
                </button>
                <button className={buttonStyle({ variant: 'destructive' })}>
                  destructive button
                </button>
                <button className={buttonStyle({ variant: 'outline' })}>
                  outline button
                </button>
                <button className={buttonStyle({ variant: 'ghost' })}>
                  ghost button
                </button>
                <button className={buttonStyle({ variant: 'link' })}>
                  link button
                </button>
                <button disabled className={buttonStyle({ variant: 'solid' })}>
                  solid disabled button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
