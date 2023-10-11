import { mapObject } from '../helpers.mjs';
import { css } from '../css/index.mjs';

const spaceYConfig = {
transform({ space, reverse }) {
  return {
    "& > :not([hidden]) ~ :not([hidden])": {
      "--panda-space-y-reverse": reverse,
      "mt": `calc(${space} * calc(1 - var(--panda-space-y-reverse)))`,
      "mb": `calc(${space} * var(--panda-space-y-reverse))`
    }
  };
}}

export const getSpaceYStyle = (styles = {}) => spaceYConfig.transform(styles, { map: mapObject })

export const spaceY = (styles) => css(getSpaceYStyle(styles))
spaceY.raw = getSpaceYStyle