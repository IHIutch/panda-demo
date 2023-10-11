import { css } from 'styled-system/css'
import { hstack, square, vstack } from 'styled-system/patterns'

export default function TypeSafety() {
  return (
    <div className={css({ p: '12' })}>
      <div className={css({ mb: '12' })}>
        <h1 className={css({ fontSize: '2xl', fontWeight: 'bold' })}>
          Typesafety and strictTokens
        </h1>
        <p>Uncomment `strictTokens` in `panda.config.ts` to see effect</p>
      </div>

      <div className={css({ spaceY: '12' })}>
        <div>
          <h2
            className={css({ fontSize: 'xl', fontWeight: 'medium', mb: '4' })}
          >
            {`hstack({ gap: '1rem' })`}
          </h2>
          <div className={hstack({ gap: '1rem' })}>
            {[...Array(12)].map((el, idx) => (
              <div key={idx} className={square({ size: '12', bg: 'blue.200' })}>
                {idx}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2
            className={css({ fontSize: 'xl', fontWeight: 'medium', mb: '4' })}
          >
            {`vstack({ gap: '1rem' })`}
          </h2>
          <div className={vstack({ gap: '1rem' })}>
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
