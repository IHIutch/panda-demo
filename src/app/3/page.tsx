import { css } from 'styled-system/css'
import {
  center,
  circle,
  container,
  grid,
  gridItem,
  hstack,
  square,
  stack,
  vstack,
  wrap,
} from 'styled-system/patterns'

export default function Patterns() {
  return (
    <div>
      <div className={css({ p: '12' })}>
        <h1 className={css({ fontSize: '2xl', fontWeight: 'bold', mb: '12' })}>
          Patterns
        </h1>
      </div>

      <div className={css({ w: 'full', bg: 'blue.200' })}>
        <div className={container({ bg: 'red.200', height: '64' })}>
          <h2
            className={css({ fontSize: 'xl', fontWeight: 'medium', mb: '4' })}
          >
            container()
          </h2>
        </div>
      </div>

      <div className={css({ p: '12', spaceX: '4' })}>
        <div className={css({ spaceY: '20' })}>
          <div>
            <h2
              className={css({ fontSize: 'xl', fontWeight: 'medium', mb: '4' })}
            >
              {`wrap({ gap: '4' })`}
            </h2>
            <div className={wrap({ gap: '4' })}>
              {[...Array(12)].map((el, idx) => (
                <div
                  key={idx}
                  className={square({ size: '12', bg: 'blue.200' })}
                >
                  {idx}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2
              className={css({ fontSize: 'xl', fontWeight: 'medium', mb: '4' })}
            >
              {`hstack({ gap: '4' })`}
            </h2>
            <div className={hstack({ gap: '4' })}>
              {[...Array(12)].map((el, idx) => (
                <div
                  key={idx}
                  className={square({ size: '12', bg: 'blue.200' })}
                >
                  {idx}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2
              className={css({ fontSize: 'xl', fontWeight: 'medium', mb: '4' })}
            >
              {`vstack({ gap: '4' })`}
            </h2>
            <div className={vstack({ gap: '4' })}>
              {[...Array(12)].map((el, idx) => (
                <div
                  key={idx}
                  className={square({ size: '12', bg: 'blue.200' })}
                >
                  {idx}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2
              className={css({ fontSize: 'xl', fontWeight: 'medium', mb: '4' })}
            >
              {`grid({ columns: 4, gap: '6', w: '96' })`}
            </h2>
            <div className={grid({ columns: 4, gap: '6', w: '96' })}>
              {[...Array(12)].map((el, idx) => (
                <div key={idx} className={gridItem({ bg: 'blue.200' })}>
                  {idx}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2
              className={css({ fontSize: 'xl', fontWeight: 'medium', mb: '4' })}
            >
              {`gridItem({ colSpan: 2, bg: 'blue.200' })`}
            </h2>
            <div className={grid({ columns: 4, gap: '6', w: '96' })}>
              {[...Array(12)].map((el, idx) => (
                <div
                  key={idx}
                  className={gridItem({ colSpan: 2, bg: 'blue.200' })}
                >
                  {idx}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2
              className={css({ fontSize: 'xl', fontWeight: 'medium', mb: '4' })}
            >
              {`square({ size: '24', bg: 'blue.200' }),`}
              <br />
              {`circle({ size: '24', bg: 'blue.200' }),`}
              <br />
              {`& center({ width: '20', height: '64', bg: 'blue.200' })`}
            </h2>
            <div className={css({ spaceX: '4', display: 'flex' })}>
              <div className={square({ size: '24', bg: 'blue.200' })}>
                square
              </div>
              <div className={circle({ size: '24', bg: 'blue.200' })}>
                circle
              </div>
              <div
                className={center({
                  width: '20',
                  height: '64',
                  bg: 'blue.200',
                })}
              >
                center
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
