import { css } from 'styled-system/css'
import { square, vstack } from 'styled-system/patterns'

export default function TypeSafety() {
  return (
    <div className={css({ p: '12' })}>
      <div className={css({ mb: '12' })}>
        <h1 className={css({ fontSize: '2xl', fontWeight: 'bold' })}>
          Custom Properties (Utilities)
        </h1>
        <p>
          vstack "pattern" causes unwanted side effects. You can create custom
          utilities to solve specific use cases. In this case, I wanted to use a{' '}
          <a
            className={css({ color: 'blue.700', textDecoration: 'underline' })}
            target="_blank"
            href="https://tailwindcss.com/docs/space"
          >
            "space between" utility from Tailwind
          </a>{' '}
          that doesn't exist (yet) in Panda, to handle spacing with margins
          instead of vstack and flex-gap. Checkout the `panda.config.ts` for
          this example.
        </p>
      </div>

      <div className={css({ display: 'flex' })}>
        <div className={css({ bg: 'red.100', w: 'full' })}>
          <div className={css({ mb: '4' })}>
            <h2 className={css({ fontSize: 'xl', fontWeight: 'medium' })}>
              {`vstack({ gap: '4' })`}
            </h2>
            <p>vstack() utlity causes items to be centered, by default</p>
          </div>
          <div className={vstack({ gap: '4' })}>
            {[...Array(12)].map((el, idx) => (
              <div key={idx} className={square({ size: '12', bg: 'blue.200' })}>
                {idx}
              </div>
            ))}
          </div>
        </div>
        <div className={css({ bg: 'green.100', w: 'full' })}>
          <div className={css({ mb: '4' })}>
            <h2 className={css({ fontSize: 'xl', fontWeight: 'medium' })}>
              {`css({ spaceY: '4' })`}
            </h2>
            <p>Spacing is handled with margins</p>
          </div>
          <div className={css({ spaceY: '4' })}>
            {[...Array(12)].map((el, idx) => (
              <div key={idx} className={square({ size: '12', bg: 'blue.200' })}>
                {idx}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
