import Link from 'next/link'
import { css } from 'styled-system/css'

export default function Home() {
  return (
    <div className={css({ p: '12' })}>
      <div className={css({ fontSize: '2xl', fontWeight: 'bold', mb: '12' })}>
        Welcome to Panda! 🐼
      </div>
      <div className={css({ spaceY: '8' })}>
        <ol className={css({ spaceY: '2', listStyleType: 'decimal' })}>
          <li>
            <Link
              href="1"
              className={css({
                color: 'blue.700',
                textDecoration: 'underline',
              })}
            >
              Style Objects using `css()` (and Reusable Recipes)
            </Link>
          </li>
          <li>
            <Link
              href="2"
              className={css({
                color: 'blue.700',
                textDecoration: 'underline',
              })}
            >
              Recipes and Slot Recipes
            </Link>
          </li>
          <li>
            <Link
              href="3"
              className={css({
                color: 'blue.700',
                textDecoration: 'underline',
              })}
            >
              Patterns
            </Link>
          </li>
          <li>
            <Link
              href="4"
              className={css({
                color: 'blue.700',
                textDecoration: 'underline',
              })}
            >
              Typesafety & strictTokens
            </Link>
          </li>
          <li>
            <Link
              href="5"
              className={css({
                color: 'blue.700',
                textDecoration: 'underline',
              })}
            >
              Custom Properties (Utilities)
            </Link>
          </li>
        </ol>

        <div>
          <h2
            className={css({ fontSize: 'xl', fontWeight: 'medium', mb: '4' })}
          >
            Resources
          </h2>
          <ul className={css({ spaceY: '2' })}>
            <li>
              <a
                target="_blank"
                href="https://panda-css.com/"
                className={css({
                  color: 'blue.700',
                  textDecoration: 'underline',
                })}
              >
                PandaCSS Docs
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.adebayosegun.com/blog/the-future-of-chakra-ui/"
                className={css({
                  color: 'blue.700',
                  textDecoration: 'underline',
                })}
              >
                Sage's (creator of Panda and ChakraUI) blog post about the
                future of ChakraUI
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=fKSemrudovo"
                className={css({
                  color: 'blue.700',
                  textDecoration: 'underline',
                })}
              >
                BlueCollarCoder Overview of PandaCSS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
