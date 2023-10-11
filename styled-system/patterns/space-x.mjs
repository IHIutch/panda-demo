import { mapObject } from '../helpers.mjs';
import { css } from '../css/index.mjs';

const spaceXConfig = {
transform({ space, reverse }) {
  return {
    "& > :not([hidden]) ~ :not([hidden])": {
      "--panda-space-x-reverse": reverse ? 1 : 0,
      "ml": `calc(${space} * calc(1 - var(--panda-space-x-reverse)))`,
      "mr": `calc(${space} * var(--panda-space-x-reverse))`
    }
  };
}}

export const getSpaceXStyle = (styles = {}) => spaceXConfig.transform(styles, { map: mapObject })

export const spaceX = (styles) => css(getSpaceXStyle(styles))
spaceX.raw = getSpaceXStyle