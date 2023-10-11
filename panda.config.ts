import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  jsxFramework: 'react',

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {

    }
  },
  utilities: {
    extend: {
      spaceX: {
        className: 'space-x',
        values: 'spacing',
        transform(value, { raw }) {
          return {
            "& > :not([hidden]) ~ :not([hidden])": raw > 0 ? {
              marginLeft: value
            } : {
              marginRight: value,
            }
          }
        }
      },
      spaceY: {
        className: 'space-y',
        values: 'spacing',
        transform(value, { raw }) {
          return {
            "& > :not([hidden]) ~ :not([hidden])": raw > 0 ? {
              marginTop: value
            } : {
              marginLeft: value,
            }
          }
        }
      },
    }
  },
  // strictTokens: true,
  // The output directory for your css system
  outdir: "styled-system",
})
